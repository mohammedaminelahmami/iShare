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

        public function addLink()
        {
            $title = $_POST['title'];
            $linkUrl = $_POST['linkUrl'];
            $username = $_POST['username'];
            $type = $_POST['type'];

            if(empty($title) || empty($linkUrl))
            {
                echo json_encode([
                    "message" => "required",
                ]);
            }else{
                if($this->linkModel->insertLink($title, $linkUrl, $username, $type))
                {
                    echo json_encode('TRUE');
                }else{
                    echo json_encode('FALSE');
                }
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

            if(empty($title) || empty($linkUrl))
            {
                echo json_encode([
                    "message" => "required",
                ]);
            }else
            {
                return $this->linkModel->updateLink($linkUrl, $title, $idLink);
            }
        }

        public function getYoutubeLinks()
        {
            $username = $_POST['username'];
            $idLink = $_POST['idLink'];

            $youtubeLink = $this->linkModel->selectYoutubeLinks($idLink, $username);
            echo json_encode($youtubeLink);
            return;
        }

        public function getSpotifyLinks()
        {
            $username = $_POST['username'];
            $idLink = $_POST['idLink'];
            
            $spotifyLink = $this->linkModel->selectSpotifyLinks($idLink, $username);
            echo json_encode($spotifyLink);
            return;
        }
    }