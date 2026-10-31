<?php
// Contact form handler. Sends enquiries to $to using the server's built-in mail().
// TESTING: currently sends to the developer. Before going live change to 'exports@zsexport.com'.
$to = 'exports@zsexport.com';

header('Content-Type: application/json');

$in = json_decode(file_get_contents('php://input'), true) ?: [];
$clean = fn($k) => trim(str_replace(["\r", "\n"], ' ', (string)($in[$k] ?? '')));

// Hidden spam-trap field: pretend success for bots
if (!empty($in['website'])) { echo '{"success":true}'; exit; }

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
