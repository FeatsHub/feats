apple.test@example.com
Test1234.


# Makefile commands

- help                           This help.
- build                          Build all developer containers (dev, coverage)
- build-dev                      Build developer containers for services (backend, frontend, ...)
- up                             Run developer containers (all services)
- up-dev                         Run developer containers (all services)
- up-postgres-develop            Run developer NFGE postgresql service (in detached mode)
- down                           Stop and remove all containers
- down-dev                       Stop and remove all developer service containers
- down-production-test           Stop and remove all production-test service containers defined in docker-compose production-test.yml
- api-shell                      Run interactive python/api shell in 'api' developer container
- api-osshell                    Run interactive bash shell in 'api' developer container
- api-makemigrations             Run makemigrations command in api container.
- api-migrate                    Run 'migrate' command in 'api' container
- api-mergemigrations            Run make merge migrations command in api container.
- api-emptymigration             Create empty migration expecting app_name and migration_name argument
- api-squashmigrations           Squash migrations into unique migration expecting app_name and migration_number argument
- api-example-command            Executes example manage command
- api-createsuperuser            Create new superadmin user.
- api-graph-models               Generate PDF file with entire E/R project models.
- api-newapp                     Create new backend app, expects name argument.
- api-coverage                   Run pytest with coverage report in the api container.
- api-test                       Run pytest in the api container.
- api-populate                   Run pytest with coverage report in the api container.
- front-osshell                  Run interactive bash shell in 'frontend' developer container
- front-swagger                  Generate OpenAPI definition nfge-spa/swagger.json
- front-apigen                   Run NPM APIGEN (ng-openapi-gen)
- front-build-prod               Compile frontend using gulp build
- front-npm-delete-cache         Delete npm package cache
- front-newapp                   Create new frontend app, expects name argument.
- front-newcomponent             Create new frontend component, expects 'name' argument
- translate                      Run NPM extract (translate)
- node-modules-permissions       Change permissions to ./frontend/node_modules/
- postgres-dev-volume-backup     Backup development postgres volume to .tar.bz2 files
- postgres-dev-volume-restore    Restore development postgres volume from .tar.bz2 files
- wipe-dev-api-database          Wipe local api database volumes (feats_local_postgres_data, 
- feats_local_postgres_data_backups)
- wipe-production-test-api-database Wipe local api database volumes (feats_local_postgres_data, feats_local_postgres_data_backups)
- docker_stop_all_containers     Stop all docker running containers
- docker_rm_all_containers       Stop and remove all docker running containers
- obtain-ssl-production-cert     Only for use in production environment