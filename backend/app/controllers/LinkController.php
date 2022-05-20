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

        public function addLink()
        {
            $title = $_POST['title'];
            $linkUrl = $_POST['linkUrl'];
            $username = $_POST['username'];
            $type = $_POST['type'];

            if($this->linkModel->insertLink($title, $linkUrl, $username, $type))
            {
                echo json_encode('TRUE');
            }else{
                echo json_encode('FALSE');
            }
        }

        public function getLinks()
        {
            $username = $_POST['username'];
            echo json_encode($this->linkModel->selectLinks($username));
        }

        public function deleteLink()
        {
            $idLink = $_POST['idLink'];
            return $this->linkModel->deleteLink($idLink);
        }

        public function updateLink()
        {
            $linkUrl = $_POST['linkUrl'];
            $title = $_POST['title'];
            $idLink = $_POST['idLink'];

            return $this->linkModel->updateLink($linkUrl, $title, $idLink);
        }

        // Add Description
        public function description()
        {
            $description = $_POST['description'];
            $username = $_POST['username'];

            return $this->linkModel->insertDescription($description, $username);
        }

        public function getDescription()
        {
            $username = $_POST['username'];
            $description =  $this->linkModel->selectDescription($username);
            echo json_encode($description);
        }
    }