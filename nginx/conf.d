upstream web_app {
    server api:8000;
}

# server {
#    listen 443 ssl;
#    server_name api.feats-app.com;
#
#    ssl_certificate /etc/letsencrypt/live/api.feats-app.com/fullchain.pem;
#
#    access_log /var/log/nginx/access.log;
#    error_log /var/log/nginx/error.log;
#
#    location /static/ {
#        alias /var/www/static/;
#    }
#
#    location / {
#        proxy_pass http://api.feats-app.com;
#        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#        proxy_set_header Host $host;
#        proxy_redirect off;
#    }
# }

server {
    listen 80;
    server_name api.feats-app.com;

    location ~/.well-known/acme-challenge {
        allow all;
        root /var/www/certbot;
    }

    return 301 https://$host:$request_uri;
}
