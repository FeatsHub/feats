bind = "0.0.0.0:8000"
module = "aurigaone.wsgi:application"

workers = 1
worker_connections = 1000
threads = 4

certfile = "/etc/letsencrypt/live/api.feats-api.com/fullchain.pem"
keyfile = "/etc/letsencrypt/live/api.feats-api.com/privkey.pem"