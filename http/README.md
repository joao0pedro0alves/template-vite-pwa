# HTTP SSL CONFIG

1. Renomeie o arquivo `nginx.conf.example` > `nginx.conf`.
2. Altere o `server_name`.
3. Configure os paths disponiveis.
4. Adicione seu certificado digital `.crt` e sua chave `.key` à pasta `ssl`.
5. Altere o valor da opção `ssl_certificate` e `ssl_certificate_key` no seu arquivo `nginx.conf`.
6. Inicialize seu container NGINX.
