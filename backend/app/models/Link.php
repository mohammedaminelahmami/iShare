<?php

    class Link {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
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

        public function selectLinks($username)
        {
            $this->db->query("SELECT * FROM ishare . link
                              WHERE username = '$username'
                            ");
            return $this->db->resultSet();
        }
    }