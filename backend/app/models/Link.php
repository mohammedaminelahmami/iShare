<?php

    class Link {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        // insertDescription
        public function insertDescription($description, $username)
        {
            $this->db->query("INSERT INTO ishare . description (description, username) 
                              VALUES(:description, :username)
                            ");
            $this->db->bind('description', $description);
            $this->db->bind('username', $username);

            if($this->db->execute())
            {
                return true;
            }else{
                return false;
            }
        }

        // SelectDescription(s)
        public function selectDescription($username)
        {
            $this->db->query("SELECT * FROM ishare . description
                              WHERE username = '$username'
                            ");
            return $this->db->resultSet();
        }
    }