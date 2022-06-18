<?php

    class User {

        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        // Insert new User { Register }
        public function addUser($username, $email, $password)
        {
            $this->db->query("INSERT INTO ishare . user (username, email, password, idTheme)
                              VALUES (:username, :email, :password, :idTheme)
                            ");
            // Bind Values
            $this->db->bind(':username', $username);
            $this->db->bind(':email', $email);
            $this->db->bind(':password', $password);
            $this->db->bind(':idTheme', '1');

            if($this->db->execute())
            {
                return true;
            }else{
                return false;
            }
        }

        // check Email { Unique }
        public function checkEmail($email)
        {
            $this->db->query("SELECT * FROM ishare . user
                              WHERE email = '$email'
                            ");
            $this->db->execute();
            return $this->db->rowCount();
        }

        public function selectUser($username)
        {
            $this->db->query("SELECT * FROM user
                              WHERE username = '$username'
                            ");
            return $this->db->single();
        }

        // update ==> add image
        public function updateUserAddImg($imgProfile, $username)
        {
            $this->db->query("UPDATE user
                              SET imgProfile = '$imgProfile'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        // update ===> add description
        public function insertDescription($description, $username)
        {
            $this->db->query("UPDATE user
                              SET description = '$description'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function deleteDescription($username)
        {
            $this->db->query("UPDATE user
                              SET description = ''
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function selectDescription($username)
        {
            $this->db->query("SELECT description FROM user
                              WHERE username = '$username'
                            ");
            return $this->db->single();
        }

        public function imgProfile($filename, $username)
        {
            $this->db->query("UPDATE user
                              SET imgProfile  = '$filename'
                              WHERE username = '$username'
                            ");
            if($this->db->execute())
            {
                return true;
            }else{
                return false;
            }
        }

        // Select All Users
        public function selectAllUsers()
        {
            $this->db->query("SELECT * FROM user
                              WHERE status = 0
                              ORDER BY username DESC
                            ");
            return $this->db->resultSet();
        }

        public function selectTotalUsers()
        {
            $this->db->query("SELECT COUNT(*) as totalUsers FROM user");
            return $this->db->single();
        }

        public function selectTotalProfit()
        {
            $this->db->query("SELECT SUM(plan)*5 as totalProfit FROM user
                              WHERE plan = 1
                            ");
            return $this->db->single();
        }

        // Ban user
        public function updateUser($username)
        {
            $this->db->query("UPDATE user SET status = 1
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function usersBanned()
        {
            $this->db->query("SELECT * FROM user
                              WHERE status = 1
                            ");
            return $this->db->resultSet();
        }

        public function unbanUser($username)
        {
            $this->db->query("UPDATE user SET status = 0
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function selectImgUser($username)
        {
            $this->db->query("SELECT imgProfile FROM user
                              WHERE username = '$username'
                            ");
            return $this->db->single();
        }

        public function updatePlan($username)
        {
            $this->db->query("UPDATE user SET plan = 1
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function updateView($username)
        {
            $this->db->query("UPDATE user SET view = view + 1
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        // check email exist
        public function checkEmailExist($editEmail, $username_old)
        {
            $this->db->query("SELECT * FROM user
                              WHERE email = '$editEmail'
                              AND username != '$username_old'
                            ");
            $this->db->execute();
            return $this->db->rowCount();
        }

        public function updateUserInfo($editUsername, $editEmail, $username_old)
        {
            $this->db->query("UPDATE user SET username = '$editUsername', email = '$editEmail'
                              WHERE username = '$username_old'
                            ");
            return $this->db->execute();
        }

        public function updatePwd($newPasswordH, $username)
        {
            $this->db->query("UPDATE user SET password = '$newPasswordH'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function updateFacebook($facebook, $username)
        {
            $this->db->query("UPDATE user SET fb = '$facebook'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function updateTwitter($twitter, $username)
        {
            $this->db->query("UPDATE user SET tw = '$twitter'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function updateInstagram($instagram, $username)
        {
            $this->db->query("UPDATE user SET it = '$instagram'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function selectSocialMedia($social, $username)
        {
            $this->db->query("SELECT $social FROM user
                              WHERE username = '$username'
                            ");
            return $this->db->single();
        }
    }