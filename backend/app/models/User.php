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

        // Check if the user exists { Login }
        public function checkUser($username)
        {
            $this->db->query("SELECT * FROM ishare . user
                              WHERE username = '$username'
                            ");
            $row = $this->db->single();
            return $row;
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

    }