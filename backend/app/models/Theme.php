<?php
    class Theme
    {    
        private $db;
        public function __construct()
        {
            $this->db = new Database;
        }

        public function selectThemeByTitle($title)
        {
            $this->db->query("SELECT * FROM theme
                              WHERE title = '$title'
                            ");
            return $this->db->single();
        }

        public function selectAllThemes()
        {
            $this->db->query("SELECT * FROM theme");
            return $this->db->resultSet();
        }
    }