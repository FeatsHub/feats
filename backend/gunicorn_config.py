import os

bind = "0.0.0.0:8000"
workers = int(os.environ.get("UWSGI_PROCESSES", "4"))
threads = int(os.environ.get("UWSGI_THREADS", "2"))
worker_class = "sync"

# Logging
accesslog = "-"
errorlog = "-"

# Allow Range requests
limit_request_line = 8190

# Processes and threads
preload_app = True
chdir = "/app"
module = "main.wsgi:application"

# Better startup/shutdown in docker:
graceful_timeout = 10
timeout = 600

# Avoid errors on aborted client connections
ignore_sigpipe = True
post_buffering = 4096

#certfile = "/etc/letsencrypt/live/api.feats-api.com/fullchain.pem"
#keyfile = "/etc/letsencrypt/live/api.feats-api.com/privkey.pem"