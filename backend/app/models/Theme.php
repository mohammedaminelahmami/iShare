<?php
    class Theme
    {    
        private $db;
        public function __construct()
        {
            $this->db = new Database;
        }

        public function selectAllThemes()
        {
            $this->db->query("SELECT * FROM theme");
            return $this->db->resultSet();
        }

        public function selectThemeByTitle($title)
        {
            $this->db->query("SELECT * FROM theme
                              WHERE title = '$title'
                            ");
            return $this->db->single();
        }

        public function updateThemeUser($idTheme, $username)
        {
            $this->db->query("UPDATE user
                              SET idTheme = '$idTheme'
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }

        public function selectThemeById($username)
        {
            $this->db->query("SELECT idTheme FROM user
                              WHERE username = '$username'
                            ");
            return $this->db->single();
        }

    }