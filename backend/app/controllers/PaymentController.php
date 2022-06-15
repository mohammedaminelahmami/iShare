<?php
    class PaymentController extends Controller {
        public function __construct()
        {
            $this->paymentModel = $this->model('Payment');
        }

        public function payment()
        {
            $username = $_POST['username'];
            return $this->paymentModel->insertPayment($username);
        }

        public function payment_Ex()
        {
            $username = $_POST['username'];
            $data = $this->paymentModel->selectAllPayment($username);

            $dateI = $data['date'];
            $dateNow = date('Y-m-d');

            // 1month --> sec == 2630000
            if(strTotime($dateNow) - strtotime($dateI) >= 2630000)
            {
                echo json_encode("0");
                return $this->paymentModel->paymentEx($username);
            }else{
                echo json_encode("1");
                return;
            }
        }
    }