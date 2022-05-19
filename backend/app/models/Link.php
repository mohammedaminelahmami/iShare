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

        public function insertLink($title, $linkUrl, $username, $type)
        {
            $this->db->query("INSERT INTO ishare . link (title, linkUrl, username, type)
                              VALUES (:title, :linkUrl, :username, :type)
                            ");
            // Bind Values
            $this->db->bind(':title', $title);
            $this->db->bind(':linkUrl', $linkUrl);
            $this->db->bind(':username', $username);
            $this->db->bind(':type', $type);

            return $this->db->execute();
        }
    }