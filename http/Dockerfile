FROM httpd:2.4

COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./ssl/cert.key /usr/local/apache2/conf/
COPY ./ssl/cert.crt /usr/local/apache2/conf/
COPY ./my-httpd-ssl.conf /usr/local/apache2/conf/extra/httpd-ssl.conf