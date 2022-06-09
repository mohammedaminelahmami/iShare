<?php
    class ThemeController extends Controller
    {
        public function __construct()
        {
            $this->themeModel = $this->model('Theme');
        }

        public function getThemeByTitle()
        {
            $title = $_POST['title'];
            $data = $this->themeModel->selectThemeByTitle($title);
            echo json_encode($data);
        }

        public function getAllThemes()
        {
            $data = $this->themeModel->selectAllThemes();
            echo json_encode($data);
        }
    }