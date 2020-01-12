# Instructions to run locally

## Start client locally
npm start

## Start server locally
nodemon server

## Start Mongodb
mongo

use {db_name}

mongod

## If /data/db operation not permitted

ls -ls /data/db

sudo chown -R (user) /data/db

## If a mongo server is already running
ps -eaf | grep mongod

sudo kill {id}

rm -rf /data/db/mongod.lock

