<?php
    $firstname 		= $_POST['firstname'];
    $lastname 		= $_POST['lastname'];
    $middle 		= $_POST['middle'];
    $email 		= $_POST['email'];
    $address 	= $_POST['address'];
    $apart 	= $_POST['apart'];
    $city 	= $_POST['city'];
    $state 	= $_POST['state'];
    $zipcode 	= $_POST['zipcode'];
    $guardcard 		= $_POST['guardcard'];
    $branch 		= $_POST['branch'];
    $from 		= $_POST['from'];
    $to 		= $_POST['to'];
    $rank 		= $_POST['rank'];
    $type 		= $_POST['type'];
    $other 		= $_POST['other'];
    $name = "New Applicant";

    $output 	= "First Name: ".$firstname."\n\n Last Name: ".$lastname."\n\n Email: ".$email."\n\n Address: ".$address."\n\n Apartment: ".$apart."\n\n City: ".$city."\n\n State: ".$state."\n\n Zip Code: ".$zipcpde;
    //set your email address to receive messages
    $to 		= 'laremy.wade@outlook.com';
    $headers	= 'From: "'.$email.'"';

    // Send the email.
    if (mail($to, $name, $output, $headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

?>
