<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Message
class Message
{
    public $clientName;
    public $email;
    public $message;
}

//Creates new message and sets properties
$newMessage = new Message();
$newMessage->clientName = $_POST["clientName"];
$newMessage->email = $_POST["email"];
$newMessage->message = $_POST["message"];

//Adds object to array
$messagesList = file_get_contents('./client/src/contact.json');
$jsonInput = json_decode($messagesList, true);
array_push($jsonInput, $newMessage);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
file_put_contents('./client/src/contact.json', $jsonData);
?>

<?php header("Location: http://localhost:3000/Contact/"); ?>