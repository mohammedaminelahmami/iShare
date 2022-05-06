<?php

class JWT
{
    public function generate(array $header, $payload, string $secret, int $validity = 86400): string
    {
        if($validity > 0)
        {
            $now = new DateTime();
            $expiration = $now->getTimestamp() + $validity;
            $payload['iat'] = $now->getTimestamp();
            $payload['exp'] = $expiration;
        }

        // base64encode ===> json_encode
        $base64Header = base64_encode(json_encode($header));
        $base64Payload = base64_encode(json_encode($payload));

        // replace ['+', '/', '='], ['-', '_', '']
        $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], $base64Header);
        $base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], $base64Payload);

        // Signature
        $secret = base64_encode(SECRET);
        $signature = hash_hmac('sha256', $base64Header . '.' . $base64Payload, $secret, true);
        $base64Signature = base64_encode($signature);

        $signature = str_replace(['+', '/', '='], ['-', '_', ''], $base64Signature);

        // JWT
        $jwt = $base64Header . '.' . $base64Payload . '.' . $signature;

        return $jwt;
    }

    public function check(string $token, string $secret) : bool
    {
        $header = $this->getHeader($token);
        $payload = $this->getPayload($token);

        $verifToken = $this->generate($header, $payload, $secret, 0);

        return $verifToken === $token;
    }

    public function getHeader(string $token)
    {
        $array = explode('.', $token);
        // decode header
        $header = json_decode(base64_decode($array[0]), true);

        return $header;
    }

    public function getPayload(string $token)
    {
        $array = explode('.', $token);
        // decode header
        $payload = json_decode(base64_decode($array[1]), true);

        return $payload;
    }

    public function isExpired(string $token) : bool
    {
        $payload = $this->getPayload($token);
        $now = new DateTime();
        return $payload['exp'] < $now->getTimestamp();
    }
}