<?php
    class ContactController extends Controller
    {
        public function __construct()
        {
            $this->contactModel = $this->model('Contact');
        }

        public function contact()
        {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];

            if(empty($name) || empty($email) || empty($message))
            {
                echo json_encode('Please fill in all fields');
            }
            else{
                return $this->contactModel->insertContact($name, $email, $message);
            }
        }

        public function getContacts()
        {
            $data = $this->contactModel->selectContacts();
            echo json_encode($data);
        }
    }