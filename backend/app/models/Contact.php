<?php
    class Contact 
    {
        private $db;
        public function __construct()
        {
            $this->db = new Database;
        }

        public function insertContact($name, $email, $message)
        {
            $this->db->query("INSERT INTO contact (name, email, message)
                              VALUES (:name, :email, :message)
                            ");
            // Bind values
            $this->db->bind(':name', $name);
            $this->db->bind(':email', $email);
            $this->db->bind(':message', $message);

            // Execute
            return $this->db->execute();
        }
        
        public function selectContacts()
        {
            $this->db->query("SELECT * FROM contact");
            $data = $this->db->resultSet();
            return $data;
        }
    }