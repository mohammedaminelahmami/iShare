<?php

    class LinkController extends Controller {
        public function __construct()
        {
            $this->linkModel = $this->model('Link');
        }

        public function addDescription()
        {
            $description = $_POST['description'];
            $username = $_POST['username'];

            return $this->linkModel->insertDescription($description, $username);
        }

        public function selectDescriptions()
        {
            $username = $_POST['username'];
            return $this->linkModel->selectDescription($username);
        }

        public function updateDescription()
        {
            //
        }
    }