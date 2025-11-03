<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

try {
    // Get and sanitize form data
    $name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
    $phone = isset($_POST['phone']) ? trim(htmlspecialchars($_POST['phone'])) : '';
    $company = isset($_POST['company']) ? trim(htmlspecialchars($_POST['company'])) : '';
    $message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'])) : '';
    
    // Validate required fields
    if (empty($name) || empty($email)) {
        throw new Exception("Name and email are required");
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Invalid email format");
    }
    
    // Your email address
    $to = "concept.harnish@gmail.com";
    
    // Email subject
    $subject = "New Contact Form Message from " . $name . " - ADVEB Media Group";
    
    // Email body (using the working format)
    $emailBody = "You have received a new message from ADVEB Media Group website.\n\n";
    $emailBody .= "Name: " . $name . "\n";
    $emailBody .= "Email: " . $email . "\n";
    $emailBody .= "Phone: " . ($phone ?: 'Not provided') . "\n";
    $emailBody .= "Company: " . ($company ?: 'Not provided') . "\n";
    $emailBody .= "Message:\n" . ($message ?: 'No message provided') . "\n\n";
    $emailBody .= "---\n";
    $emailBody .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
    $emailBody .= "Date: " . date('Y-m-d H:i:s') . "\n";
    $emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    
    // Email headers (using the working format)
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo json_encode([
            "success" => true, 
            "message" => "Email sent successfully"
        ]);
    } else {
        throw new Exception("Failed to send email. Please try again later.");
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => $e->getMessage()
    ]);
}
?>