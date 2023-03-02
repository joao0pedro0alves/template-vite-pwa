```bash
docker build -t apache_coletor .
docker run --name coletor_apache -d -p 433:433 apache_coletor
```
