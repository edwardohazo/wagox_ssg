<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  error_reporting(0);

  $data = json_decode(file_get_contents("php://input"), true);
  $name = $data["name"];
  $email = $data["email"];
  $telephone = $data["telephone"];
  $message = $data["message"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "eduardo.gonzalez.dev@gmail.com";
  $subject_mail = "Contact from form of domain: $domain.";
  $message = "
    <p>
      Data sent from domain <b>$domain</b>
    </p>
    <ul>
      <li>Name: <b>$name</b></li>
      <li>Telephone: <b>$telephone</b></li>
      <li>Email: $email</li>
      <li>Comentarios: $message</li>
    </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: SGG tool by wagox website | Not answere <no-reply@$domain>";

  $send_mail = mail($to, $subject_mail, $message, $headers);

  if($send_mail) {
    $res = [
      "err" => false,
      "message" => "Your data has been sent successfly!"
    ];
  } else {
    $res = [
      "err" => true,
      "message" => "Error ocurred when sending data."
    ];
  }

  header("Access-Control-Allow-Origin: *");
  header( 'Content-type: application/json' );
  echo json_encode($res);
  exit;
}