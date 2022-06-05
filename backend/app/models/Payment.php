<?php
    class Payment
    {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        public function insertPayment($username)
        {
            $this->db->query("INSERT INTO paymenthistory (username, amount)
                              VALUES (:username, 5)
                            ");
            // Bind Values
            $this->db->bind(':username', $username);
            // $this->db->bind(':amount', $amount);

            return $this->db->execute();
        }

        public function selectAllPayment($username)
        {
            $this->db->query("SELECT * FROM paymenthistory
                              WHERE username = '$username'
                            ");
            return $this->db->single();
        }

        public function paymentEx($username)
        {
            $this->db->query("UPDATE user
                              SET plan = 0
                              WHERE username = '$username'
                            ");
            return $this->db->execute();
        }
    }