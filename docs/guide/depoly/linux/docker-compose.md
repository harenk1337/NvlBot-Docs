# Docker Compose

新建 `docker-compose.yaml` 文件

::: tip 注意
1. 你需要把下面的 `<QQ号>` 更改为你需要作为 Bot 登录的 QQ 号
2. 前往 [Release](https://github.com/harenk1337/nvl-bot/releases/) 页面下载项目最新版本
3. 在服务器上创建 `/opt/nvl-bot` 目录, 并把下载的压缩包解压后把 `database.db` 文件复制到 `/opt/nvl-bot` 目录下，或者等容器启动后使用数据库工具执行下面的 `sql脚本`
:::

::: details sql 脚本
```sql
create table sys_user
(
    `id`         INTEGER not null
        primary key autoincrement,
    `account`    TEXT,
    `password`   TEXT,
    `avatar_url` TEXT
);

INSERT INTO "sys_user" ("id", "account", "password", "avatar_url") VALUES (1, 'admin', '$2a$10$Ogtc8qlo1p1qxVD8Rgy9jeK21.VJq8vNCwPP3clizbIUd46yLB2WK', 'https://cdn.vuetifyjs.com/images/john.jpg');

create table t_item
(
    `id`      INTEGER not null
        primary key autoincrement,
    `name`    TEXT    not null,
    `code`    TEXT    not null,
    `api_id`  INTEGER not null,
    `api_key` TEXT    not null
);

create unique index t_item_id_uindex
    on t_item (id);

create table t_order
(
    id          INTEGER not null
        primary key autoincrement,
    `user_name`   TEXT,
    `item_name`   TEXT,
    `status`      INTEGER,
    `desc`        TEXT,
    `channel`     integer,
    `create_by`   text,
    `create_time` text
);

create unique index t_order_id_uindex
    on t_order (id);

create table t_user
(
    id      INTEGER not null
        primary key autoincrement,
    `name`    TEXT,
    `account` TEXT,
    `role`    integer default 0,
    `status`  integer default 1
);

create unique index t_user_id_uindex
    on t_user (id);
```
:::


::: details docker-compose.yml

```yaml
version: "3.9"
services:
  napcat:
    container_name: napcat
    image: mlikiowa/napcat-docker:latest
    environment:
      ACCOUNT: <QQ号> // [!code warning]
      WSR_ENABLE: true
      WS_URLS: '["ws://nvl-bot:1337/onebot/v11/ws"]'
    volumes:
      - /opt/napcat/config:/usr/src/app/napcat/config
    ports:
      - "6099:6099"
    restart: always
    depends_on:
      - bot
    networks:
      - nvl-bot

  bot:
    container_name: nvl-bot
    image: harenk99/nvl-bot:1.0
    volumes:
      - /opt/nvl-bot:/opt/db // [!code warning]
    ports:
      - "1337:1337"
    restart: always
    networks:
      - nvl-bot

networks:
  nvl-bot:
    name: nvl-bot
    driver: bridge
```

:::

运行以下命令, 等待启动后扫码登录即可

```shell
docker-compose up -d && docker logs -f napcat
```
