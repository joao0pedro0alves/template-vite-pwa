# HTTP SSL CONFIG

1. Add your digital certificate `.crt` and your key `.key` on ssl folder.
2. Rename file `nginx.conf.example` > `nginx.conf`.
3. Change `server_name` value.
4. Change values `ssl_certificate` and `ssl_certificate_key`.
5. Add `NGINX` locations.
6. Deploy your app running `npm run build:deploy`
