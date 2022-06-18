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
                $row = $this->userModel->selectUser($username);
                if($row)
                {
                    // Hashed Password from Database
                    $hashedPassword = $row["password"];
                    if(password_verify($password_unhashed, $hashedPassword))
                    {
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

            if(empty($description))
            {
                echo json_encode([
                    "message" => "required",
                ]);
            }else{
                return $this->userModel->insertDescription($description, $username);
            }
        }

        public function deleteDescription()
        {
            $username = $_POST['username'];
            return $this->userModel->deleteDescription($username);
        }

        public function getDescription()
        {
            $username = $_POST['username'];
            $description = $this->userModel->selectDescription($username);
            echo json_encode($description);
        }

        public function imgUpload()
        {
            $username = $_POST['username'];
            
            $filename = $_FILES["img"]["name"];
            $tempname = $_FILES["img"]["tmp_name"];
            $folder = APPROOT . "/../../frontend/src/uploads/" . $filename;

            if(move_uploaded_file($tempname, $folder) && $this->userModel->imgProfile($filename, $username))
            {
                echo json_encode('img Uploaded');
            }
            else{
                echo json_encode('ERROR img');
            }
        }

        public function getImg()
        {
            $username = $_POST['username'];
            
            $data = $this->userModel->selectImgUser($username);
            echo json_encode($data);
        }

        public function changePlan()
        {
            $username = $_POST['username'];
            return $this->userModel->updatePlan($username);
        }

        public function getUsers()
        {
            $data = $this->userModel->selectAllUsers();
            echo json_encode($data);
        }

        public function banUser()
        {
            $username = $_POST['username'];
            return $this->userModel->updateUser($username);
        }

        public function getBanns()
        {
            $data = $this->userModel->usersBanned();
            echo json_encode($data);
        }

        public function unban()
        {
            $username = $_POST['username'];
            return $this->userModel->unbanUser($username);
        }

        public function totalUsers()
        {
            $data = $this->userModel->selectTotalUsers();
            echo json_encode($data);
        }

        public function totalProfit()
        {
            $data = $this->userModel->selectTotalProfit();
            echo json_encode($data);
        }

        public function viewPage()
        {
            $username = $_POST['username'];
            return $this->userModel->updateView($username);
        }

        public function editUser()
        {
            $editUsername = htmlspecialchars($_POST['editUsername']);
            $editEmail = htmlspecialchars($_POST['editEmail']);
            $username_old = $_POST['username_old'];

            $checkEmailExist = $this->userModel->checkEmailExist($editEmail, $username_old);

            // RegExfunc
            if(empty($editUsername) || !preg_match("/^[a-zA-Z0-9]*$/", $editUsername))
            {
                echo json_encode("please enter correct 'Username' ");
            }elseif(empty($editEmail) || !preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/", $editEmail) || $checkEmailExist > 0)
            {
                echo json_encode("please enter correct 'Email' ");
            }
            else{
                echo json_encode('Edit Sucssefully');
                return $this->userModel->updateUserInfo($editUsername, $editEmail, $username_old);
            }
        }

        public function changePwd()
        {
            $username = $_POST['username'];
            $currentPassword = $_POST['currentPassword'];
            $newPassword = $_POST['newPassword'];

            $row = $this->userModel->checkUser($username);
            $hashedPassword = $row["password"];

            if(password_verify($currentPassword, $hashedPassword))
            {
                echo json_encode("password changed");

                $newPasswordH = password_hash($newPassword, PASSWORD_DEFAULT);
                return $this->userModel->updatePwd($newPasswordH, $username);
            }else{
                echo json_encode("current password incorrect");
            }
        }

        public function addFacebook()
        {
            $username = $_POST['username'];
            $facebook = $_POST['facebook'];
            return $this->userModel->updateFacebook($facebook, $username);
        }
        
        public function addTwitter()
        {
            $username = $_POST['username'];
            $twitter = $_POST['twitter'];
            return $this->userModel->updateTwitter($twitter, $username);
        }
        
        public function addInstagram()
        {
            $username = $_POST['username'];
            $instagram = $_POST['instagram'];
            return $this->userModel->updateInstagram($instagram, $username);
        }

        public function getSocialMedia()
        {
            $social = $_POST['social'];
            $username = $_POST['username'];
            $data = $this->userModel->selectSocialMedia($social, $username);
            echo json_encode(['media'=> $social,'data'=>$data]);
        }

    }