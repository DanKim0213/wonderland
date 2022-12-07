# TODO list

1. documentate using @microsoft/tsdoc, eslint-plugin-tsdoc, and @microsoft/api-extractor

# How to Build

1. create a database and then set requisite environment variables.

```
mysql> create database wonderlandtest;
```

```
// .env
DATABASE=mysql2
DATABASE_HOST=127.0.0.1
DATABASE_PORT=<my port>
DATABASE_USER=<user name>
DATABASE_PASSWORD=<user password>
DATABASE_NAME_FOR_PRODUCTION=<my database for production>
DATABASE_NAME=wonderlandtest
```

2. run npm scripts manually

```
npm install
npm run build
npm run migrate:latest
npm run seed
```

3. run processes for development

```
npm run watch
npm run develop
```
