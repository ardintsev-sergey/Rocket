<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->IsHTML(true);

    $name = $_POST["name"];
    $date = $_POST["date"];
    $tel = $_POST["tel"];
    // $message = $_POST["message"];

    $email_template = "template_mail.html";
    $body = file_get_contents($email_template);
    $body = str_replace('%name%', $name, $body);
    $body = str_replace('%date%', $date, $body);
    $body = str_replace('%tel%', $tel, $body);
    $theme = '[Заявка из формы]';

    $mail->addAddress('archunter13@yandex.ru')
    // $mail->addAddress('archunter13@yandex.ru')

    $mail->Subject = $theme;
    $mail->MsgHTML($body);

    if (!$mail->send()) {
      $message = 'Сообщение не отправлено'
    } else {
      $message = "Данные отправлены"
    };

    $response = ['message' => $message];
    header('Content-type: application/json')
    echo json_encode($response)
?>

