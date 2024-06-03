# Docker

## 前置准备

1. 前往 [Release](https://github.com/harenk1337/nvl-bot/releases/) 页面下载项目最新版本
2. 确保 `app.jar` 和 `database.db` 在同一目录下
3. 同一目录下新建 `Dockerfile`，内容如下

```dockerfile
FROM eclipse-temurin:17-jre-alpine
LABEL authors="harenk"
WORKDIR /opt

ARG PORT=1337
EXPOSE ${PORT}

ENV APP_BASE_URL="http://localhost:${PORT}/api"
ENV APP_ARGS="-XX:+UseG1GC -Xms1024m -Xmx1024m -Xss256k -XX:MetaspaceSize=128m"

COPY ./app.jar app.jar
COPY ./database.db /db/database.db

ENTRYPOINT ["java", "-jar", "app.jar", "${APP_ARGS}", "-c"]

```

## 构建镜像

```shell
docker build -t nvl-bot .
```

## 启动容器

```shell
docker run -d \
-p 1337:1337 \
--restart=always \
--name nvl-bot nvl-bot
```

## 数据持久化

如果你想要把数据库持久化到主机，使用下面的启动命令，并在服务器中创建 `/opt/nvl-bot` 目录

把上面从 [Release](https://github.com/harenk1337/nvl-bot/releases/) 页面下载的项目中的 `database.db` 复制到该目录中，再启动容器

```shell{4}
docker run -d \
-p 1337:1337 \
--restart=always \
--volume /opt/nvl-bot:/opt/db \
--name nvl-bot nvl-bot
```
