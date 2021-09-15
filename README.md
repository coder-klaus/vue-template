# vue-template
vue3 scaffold based on webpack5

## 运行

### 安装依赖
```shell
npm install
```

### 开启本地服务
```shell
npm run serve
```

### 构建打包
```shell
npm run build
```

## 环境和配置
开发和构建时候使用的环境变量和公共配置可以存放于env文件夹下

`env/dev.js` ---> 开发时候的环境配置文件

`env/prod.js` ---> 构建时候的环境配置文件

配置文件中的 runtimeEnv.* 可以在代码中通过 ENV.* 获得

## Lint
本项目使用了`ESLint`和`StyleLint`对代码格式进行校验

默认情况下，不允许在代码中使用`console`和`debugger`

如有需要，可以自行对`ESLint`和`StyleLint`进行相关设置

## 样式
本项目中，同时提供了对于`scoped style`和`css module`的支持

## 版心
本项目的版心的最大宽度被设置为600px，且默认居中