# Docker Compose

新建 `docker-compose.yaml` 文件

::: tip 注意
你需要把下面的 `<QQ号>` 更改为你需要作为 Bot 登录的 QQ 号
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
      - /opt/nvl-bot/database.db:/opt/database.db
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
