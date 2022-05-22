<?php

    class UserController extends Controller {

        public function __construct()
        {
            $this->userModel = $this->model('User');
        }
        // { Authauntication }
        // 1 ) - Register
        public function register()
        {
            $username = htmlspecialchars($_POST['username']);
            $email = htmlspecialchars($_POST['email']);
            $password_unhashed = htmlspecialchars($_POST['password']);
            
            // Hash Password !
            $password = password_hash($password_unhashed, PASSWORD_DEFAULT);

            // empty field
            if(empty($username) || empty($email) || empty($password_unhashed))
            {
                echo json_encode("Fields are required !");
            }

            $checkEmail = $this->userModel->checkEmail($email);

            // RegExfunc
            if(empty($username) || !preg_match("/^[a-zA-Z0-9]*$/", $username))
            {
                echo json_encode("please enter correct 'Username' ");
            }elseif(!preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/", $email) || $checkEmail > 0)
            {
                echo json_encode("please enter correct 'Email' ");
            }elseif(empty($password_unhashed) || strlen($password_unhashed) < 6)
            {
                echo json_encode("please enter correct 'Password' ");
            }
            else{
                if($this->userModel->addUser($username, $email, $password))
                {
                    print_r(json_encode('Registred Sucssefully'));
                }
            }
        }

        // 2 ) - Login
        public function login()
        {
            $username = htmlspecialchars($_POST['username']);
            $password_unhashed = htmlspecialchars($_POST['password']);

            // empty field
            if(empty($username) || empty($password_unhashed))
            {
                echo json_encode("Fields are required !");
            }

            // RegEx
            if(!preg_match("/^[a-zA-Z0-9]*$/", $username))
            {
                echo json_encode("please enter correct 'username' ");
            }else{
                $row = $this->userModel->checkUser($username);
                if($row)
                {
                    // Hashed Password from Database
                    $hashedPassword = $row["password"];
                    if(password_verify($password_unhashed, $hashedPassword))
                    {
                        // echo json_encode('Correct !');

                        $header = [
                            "alg" => "JWT",
                            "typ" => "HS256"
                        ];

                        $payload = [
                            "role" => "user"
                        ];

                        $data = [
                            "username" => $row["username"]
                        ];

                        $jwt = new JWT();
                        $token = $jwt->generate($header, $payload, SECRET);

                        echo json_encode([
                            "message" => "Success !",
                            "token" => $token,
                            "data" => $data
                        ]);
                    }else{
                        echo json_encode('Password incorrect !');
                    }
                }else{
                    echo json_encode('username not found !');
                }
            }
        }

        public function getUser()
        {
            $username = $_POST['username'];
            $data = $this->userModel->selectUser($username);
            if($data)
            {
                echo json_encode($data);
            }else{
                echo json_encode('username not found !');
            }
        }

        // Add img
        public function addimgPrf()
        {
            $imgProfile = $_POST['imgProfile'];
            $username = $_POST['username'];

            return $this->userModel->updateUserAddImg($imgProfile, $username);
        }

        public function addDescription()
        {
            $description = $_POST['description'];
            $username = $_POST['username'];

            return $this->userModel->insertDescription($description, $username);
        }

        public function getDescription()
        {
            $username = $_POST['username'];
            $description = $this->userModel->selectDescription($username);
            echo json_encode($description);
        }
    }