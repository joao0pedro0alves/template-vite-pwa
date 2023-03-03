FROM nginx:latest

COPY http/ssl/192.168.1.196.key /etc/nginx/ssl/
COPY http/ssl/192.168.1.196.crt /etc/nginx/ssl/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 433

CMD ["nginx", "-g", "daemon off;"]