<?php
// Contact form handler. Sends enquiries to $to using the server's built-in mail().
// TESTING: currently sends to the developer. Before going live change to 'exports@zsexport.com'.
$to = 'developer.zaidkhan@gmail.com';

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
