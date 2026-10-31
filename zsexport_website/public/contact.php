<?php
// Contact form handler. Sends enquiries to $to using the server's built-in mail().
// TESTING: currently sends to the developer. Before going live change to 'exports@zsexport.com'.
$to = 'exports@zsexport.com';
// Secret used to sign math-captcha answers. Set CAPTCHA_SECRET in the server environment, or replace this default with a long random string.
$captchaSecret = getenv('CAPTCHA_SECRET') ?: 'b00ea8172351d46a3ae7a6f60997d866927bfa6474021c3f80e2959d16834935';
$sign = fn($exp, $answer) => hash_hmac('sha256', "$exp|$answer", $captchaSecret);

header('Content-Type: application/json');

// GET: issue a new math question. The answer is never sent; only a signed, expiring token.
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $a = random_int(1, 9);
    $b = random_int(1, 9);
    $exp = time() + 1800;
    echo json_encode(['question' => "$a + $b =", 'token' => $exp . '.' . $sign($exp, $a + $b)]);
    exit;
}

$in = json_decode(file_get_contents('php://input'), true) ?: [];
$clean = fn($k) => trim(str_replace(["\r", "\n"], ' ', (string)($in[$k] ?? '')));

// Hidden spam-trap field: pretend success for bots
if (!empty($in['website'])) { echo '{"success":true}'; exit; }

// Verify the math captcha answer against the signed token
[$exp, $sig] = array_pad(explode('.', (string)($in['captchaToken'] ?? ''), 2), 2, '');
$answer = trim((string)($in['captchaAnswer'] ?? ''));
$captchaOk = ctype_digit($exp) && (int)$exp >= time() && ctype_digit($answer)
    && hash_equals($sign($exp, (int)$answer), $sig);
if (!$captchaOk) {
    http_response_code(400);
    echo '{"message":"Security check failed. Please try again."}';
    exit;
}

$name = $clean('name');
$email = $clean('email');
$company = $clean('company');
$category = $clean('category');
$scope = trim((string)($in['scope'] ?? ''));

// Reject disposable / placeholder email domains (keep in sync with src/utils/emailValidation.js)
$blockedDomains = ['mailinator.com','guerrillamail.com','guerrillamail.net','sharklasers.com','grr.la','10minutemail.com','tempmail.com','temp-mail.org','throwawaymail.com','yopmail.com','trashmail.com','getnada.com','maildrop.cc','dispostable.com','fakeinbox.com','mailnesia.com','mintemail.com','spamgourmet.com','tempinbox.com','mohmal.com','example.com','example.org','example.net','test.com','test.org','test.net','testing.com','fake.com','fakemail.com','noemail.com','nomail.com','asdf.com'];
$blockedLabels = ['mailinator','yopmail','guerrillamail','tempmail','test','example','localhost','invalid'];
$blockedTlds = ['test','example','invalid','localhost','local'];
$domain = strtolower(substr(strrchr($email, '@') ?: '', 1));
$labels = explode('.', $domain);
$isJunkEmail = false;
foreach ($blockedDomains as $d) {
    if ($domain === $d || substr($domain, -strlen($d) - 1) === ".$d") { $isJunkEmail = true; break; }
}
if (in_array(end($labels), $blockedTlds, true) || in_array($labels[0], $blockedLabels, true)) $isJunkEmail = true;

if ($isJunkEmail) {
    http_response_code(400);
    echo '{"message":"Please use a genuine business email address"}';
    exit;
}

if (!$name || !$company || !$category || !$scope || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo '{"message":"Invalid input"}';
    exit;
}

$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'zsexport.com');
$body = "Name: $name\nEmail: $email\nCompany: $company\nCategory: $category\n"
    . 'NDA requested: ' . (!empty($in['nda']) ? 'Yes' : 'No') . "\n\nProject scope:\n$scope\n";
$headers = "From: ZS Export Website <noreply@$host>\r\nReply-To: $name <$email>\r\nContent-Type: text/plain; charset=UTF-8";

if (mail($to, "New Trade Enquiry from $name ($company)", $body, $headers)) {
    echo '{"success":true}';
} else {
    http_response_code(500);
    echo '{"message":"Unable to send"}';
}
