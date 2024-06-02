# 项目介绍

一个通过 QQ 机器人实现 Neverlose 市场物品推送绑定的项目，自带后台管理页面。

后端 Spring Boot3 + Sqlite + [Shiro](https://github.com/MisakaTAT/Shiro)

前端 Vue3 + Naive UI
👉[点我跳转前端仓库](https://github.com/harenk1337/NvlBot-Admin)

OneBot 实现: [NapCatQQ](https://github.com/NapNeko/NapCatQQ)

## 项目环境

- JDK17

## 如何使用

参考 [NapCatQQ 使用文档](https://napneko.github.io/zh-CN/guide/getting-started) 安装 NapCatQQ

**注意：** urls 里配置的 `127.0.0.1` 改为你部署本项目的服务器 IP, 如果 NapCatQQ 和本项目部署在同一服务器下则不用修改。

::: details NapCatQQ 配置

```json
{
  "http": {
    "enable": false,
    "host": "",
    "port": 3000,
    "secret": "",
    "enableHeart": false,
    "enablePost": false,
    "postUrls": []
  },
  "ws": {
    "enable": false,
    "host": "",
    "port": 3001
  },
  "reverseWs": {
    "enable": true,
    "urls": ["ws://127.0.0.1:1337/onebot/v11/ws"]
  },
  "debug": false,
  "heartInterval": 60000,
  "messagePostFormat": "array",
  "enableLocalFile2Url": false,
  "musicSignUrl": "",
  "reportSelfMessage": false,
  "token": "",
  "GroupLocalTime": {
    "Record": false,
    "RecordList": []
  }
}
```

:::
