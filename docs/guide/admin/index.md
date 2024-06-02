# 后台管理

在 NapCatQQ 和项目都部署完毕后即可使用后台管理系统来管理您的项目

后台地址:
[http://127.0.0.1:1337/](http://127.0.0.1:1337/)

::: tip 注意
上方的 `127.0.0.1` 应该替换为您部署项目的服务器 ip 地址

**默认账号密码都是 `admin`**
:::

::: details 后台管理页面

![](/images/user.png)
![](/images/item.png)
![](/images/order.png)

:::

## 用户管理

管理能够使用 `Bot` 的用户

- 用户名：字面意思
- 用户 QQ：用于 `Bot` 在接收指令时判断权限 <Badge type="danger" text="必须唯一" />
- 角色：部分指令只有 `超管` 才能使用，例如 `添加用户`，`启用/禁用用户`

- 状态：`Bot` 只会处理启用状态下的用户发出的指令

## 项目管理

管理您的 `Neverlose` 项目

- 项目名：`Bot` 根据名字来检索项目的相关信息并推送绑定 <Badge type="danger" text="必须唯一" />
- 项目代码：`Neverlose` 官方市场用于区分项目的唯一标识 <Badge type="danger" text="必须唯一" />
- Api Id：项目拥有者的 `User ID`

- Api Key：项目拥有者的 Api 密钥，用于发送请求时签名

::: tip 项目代码
著名脚本 `Chimera` 的链接为 `https://en.neverlose.cc/market/item?id=chimera`，`chimera` 则是该项目的项目代码
:::

::: info 获取 Api Id 和 Api Key
https://en.neverlose.cc/market/api
:::

## 订单管理

管理项目绑定后产生的记录

- 用户名：也即 `Neverlose 账号`，获得该项目的用户
- 项目名：推送的项目
- 状态：推送状态
- 绑定渠道：
  - 手动绑定：即使用 Bot 进行绑定
  - 网页后台：使用后台绑定，暂未开发
  - 市场购买：用户在 `Neverlose 市场` 购买项目
- 创建人：发起推送请求的人，仅 `手动绑定` 渠道下会有
- 创建时间：请求发起的时间

- 详情：如果推送请求失败了，则会显示其失败原因，如果成功了则为空

::: info 配置市场通知

打开用户 Api 界面 https://en.neverlose.cc/market/api

在 `purchase callback` 中填写 `http://127.0.0.1/api/market/purchase` 并保存即可 <Badge type="warning" text="127.0.0.1 替换为您的服务器 ip" />
:::
