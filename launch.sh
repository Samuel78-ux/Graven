#!/bin/bash
# Commande git pull
git pull
# Commande npm run sync
npm run sync
# Commande docker build
docker build -t docker_nextjs:development .
# Commande docker run en mode détaché
docker run --publish 3000:3000 --detach docker_nextjs:development
docker ps
