# vue-ts

> a vue project with typescript

## Build Setup

``` bash
# install dependencies
npm install

# 安装eslint-plugin-vue依赖 (遇到error: Parsing error: Unexpected token解决办法)
npm install eslint-plugin-vue --save-dev

# 安装TypeScript相关依赖 (详见：https://blog.csdn.net/SilenceJude/article/details/103522996)
npm i vue-class-component vue-property-decorator vuex-class --save
npm i ts-loader typescript tslint tslint-loader tslint-config-standard --save-dev

#降级ts-loader至3.5.0 （直接npm run dev 是会报错的，Module build failed: Error: You may be using an old version of webpack; please check you’re using at least version 4

npm i ts-loader@3.5.0 --save-dev

#配置 vuex
npm i vuex vuex-class --save

# Vuex持久化存储之vuex-persist （详见：https://www.jianshu.com/p/a4faae6a3184）


# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
