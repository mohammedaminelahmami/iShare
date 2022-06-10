<?php
    class ThemeController extends Controller
    {
        public function __construct()
        {
            $this->themeModel = $this->model('Theme');
        }
        
        public function getAllThemes()
        {
            $data = $this->themeModel->selectAllThemes();
            echo json_encode($data);
        }

        public function getThemeByTitle()
        {
            $title = $_POST['title'];
            $data = $this->themeModel->selectThemeByTitle($title);
            echo json_encode($data);
        }

        public function changeTheme()
        {
            $idTheme = $_POST['idTheme'];
            $username = $_POST['username'];
            return $this->themeModel->updateThemeUser($idTheme, $username);
        }

        public function getThemeById()
        {
            $username = $_POST['username'];
            $data = $this->themeModel->selectThemeById($username);
            echo json_encode($data);
        }

    }