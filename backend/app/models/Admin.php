<?php

    class Admin {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        public function checkAdmin($email)
        {
            $this->db->query("SELECT * FROM ishare . admin
                              WHERE email = '$email'
                            ");
            $row = $this->db->single();
            return $row;
        }

    }