### easyink 操作手册

[自建应用操作手册](https://www.yuque.com/docs/share/9217b462-a4c2-4d4a-97cb-48eebf800784?#hsf4v)

[第三方应用操作手册](https://www.yuque.com/docs/share/591b5dff-f705-413e-b167-e8ef72d519bf?#O35E2)

### :rocket: 项目介绍

该项目为 easyink 的前端模块之一，负责活码小程序功能。

### :factory: 关联项目

| 项目名                    | 项目说明                                                                      | 项目地址                                                  |
| ------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| easyink_System            | easyink 后端服务                                                              | https://github.com/lianluoyi/easyink_System.git           |
| easyink_Dashboard         | easyink 前端服务，主要负责后台 UI 界面展示                                    | https://github.com/lianluoyi/easyink_Dashboard.git        |
| easyink_Sidebar           | easyink 前端服务，主要负责企微客户端中的侧边栏界面展示                        | https://github.com/lianluoyi/easyink_Sidebar.git          |
| easyink_middleProcessing           | easyink h5 前端服务，主要负责雷达、智能表单等营销活动页面的展示（非必要模块） | https://github.com/lianluoyi/easyink_middleProcessing.git |
| **easyink_MiniProgram(当前项目)** | **easyink 活码小程序服务，主要负责员工活码、群活码页面的展示（非必要模块）**  | **https://github.com/lianluoyi/easyink_MiniProgram.git**  |

### :checkered_flag: 开发

```
# 克隆项目
git clone https://github.com/lianluoyi/easyink_miniProgram.git

# 进入项目目录
cd miniprogram

# 安装依赖
npm install
或 yarn install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以使用yarn安装，或者通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 如需修改后端地址，更改根目录中的 .env.develoment中的 VUE_APP_BASE_API

# 启动服务
npm run dev:mp-weixin

# 本地调试
首先获取微信小程序AppID。
登录[微信公众平台](https://mp.weixin.qq.com/)，进入【开发】-【开发管理】-【开发设置】可获取AppID。
启动服务后，在微信开发者工具中导入根目录中dist/dev/mp-weixin,并填入上述步骤中申请的AppID即可进行开发。
```

### :checkered_flag: 发布

- 直接在微信开发者工具中上传

```
# 构建生产环境
npm run build
```

### :airplane: 技术栈

- vue2 + uniapp（基础框架）+ uview2（UI 框架）
- es6（浏览器脚本语言的标准）

### 🙋 注意事项!!!

- 上传审核时，src/pages/index中的url需填写一个审核页，用于小程序审核校验。可填写本公司官网或在主营系统的地址。
