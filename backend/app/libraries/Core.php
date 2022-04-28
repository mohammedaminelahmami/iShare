<?php
    class Core {

        private $controller = "HomeController";
        private $method = "index";
        private $parameters = [];

        public function __construct()
        {
            $this->getUrl();
            $this->render();   
        }

        private function getUrl()
        {
            $url = $_GET['url'];

            if(!empty($url) && isset($_GET['url']))
            {
                $url = trim($url,"/");
                $url = explode("/",$url);

                // define a controller
                $this->controller = !empty($url[0]) ? $url[0] . "Controller" : "HomeController";

                // define a method
                $this->method = !empty($url[1]) ? $url[1] : "index";

                //  define parameters
                unset($url[0], $url[1]);
                $this->parameters = !empty($url) ? array_values($url) : [];
            }

        }

        private function render()
        {
            if(file_exists('../app/controllers/' . $this->controller. '.php'))
            {
                require_once '../app/controllers/' . $this->controller . '.php';
                $controller = new $this->controller;

                if(method_exists($this->controller, $this->method))
                {
                    call_user_func_array([$controller, $this->method], $this->parameters);
                }else{
                    require_once APPROOT . '/views/error404.php';
                }

            }else{
                require_once APPROOT . '/views/error404.php';
            }
        }
    }
    
?>