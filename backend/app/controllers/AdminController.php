<?php

    class AdminController extends Controller {

        public function __construct()
        {
            $this->adminModel = $this->model('Admin');
        }
        
        // Admin Login
        public function login()
        {
            $email = htmlspecialchars($_POST['email']);
            $password = htmlspecialchars($_POST['password']);

            // empty field
            if(empty($email) || empty($password))
            {
                echo json_encode("Fields are required !");
            }

            // RegEx
            if(!preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/", $email))
            {
                echo json_encode("please enter correct 'email' ");
            }else{
                $row = $this->adminModel->checkAdmin($email);
                if($row)
                {
                    if($password === $row['password'])
                    {
                        // echo json_encode('Correct !');
                        $header = [
                            "alg" => "JWT",
                            "typ" => "HS256"
                        ];
    
                        $payload = [
                            "role" => "Admin"
                        ];
    
                        $jwt = new JWT();
                        $token = $jwt->generate($header, $payload, SECRET);
    
                        echo json_encode([
                            "message" => "Success !",
                            "token" => $token
                        ]);
                    }else{
                        echo json_encode('Password incorrect !');
                    }
                }else{
                    echo json_encode('email not found !');
                }
            }
        }
    }