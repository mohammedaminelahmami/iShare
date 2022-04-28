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
            $this->db->query("INSERT INTO ishare . user (username, email, password)
                              VALUES (:username, :email, :password)
                              ");
            // Bind Values
            $this->db->bind(':username', $username);
            $this->db->bind(':email', $email);
            $this->db->bind(':password', $password);

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
                              WHERE username = ':username'
                              ");
            // Bind Values
            $this->db->bind(':username', $username);
            if($this->db->single())
            {
                return true;
            }else{
                return false;
            }
        }

    }