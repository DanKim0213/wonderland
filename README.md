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

# Git flow

- [reference](https://techblog.woowahan.com/2553/)
- Types of branch
  - main : 제품으로 출시될 수 있는 브랜치
  - develop : 다음 출시 버전을 개발하는 브랜치
  - feature : 기능을 개발하는 브랜치
  - release : 이번 출시 버전을 준비하는 브랜치
  - hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치
- You must start coding from the latest state: git rebase
