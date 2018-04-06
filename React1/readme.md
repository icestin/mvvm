
## 初始化工程 npm init -y
## 安装相关依赖   npm i -S react react-dom 
 -S 意思是的保存到package.json dependencies 字段
## npm i -D webpack webpack-dev-server webpack-merge babel-cli babel-preset-env babel-preset-react babel-preset-react-hmre babel-loader 
 -D 意思是保存到 package.json devDependencies字段

 # npm i -D cache-loader 加快打包效率
 ## 安装 cache-loader 插件
 ## 提取组件公共部分
 ### react react-dom ==> vendor.sj
 ### 组件的公共部分 ==> common.js
 ### 组件独立的业务代码 打包对应的js文件 如index.js or shop.js

 ---
 添加依赖
 # npm i -D copy-webpack-plugin clean-webpack-plugin

 ---
 # webpack 生产环境配置 包括压缩js代码，图片转码等
 ## 生产环境代码特点：
 1. 文件体积尽量的小
 2. 浏览器缓存！ 如果修改，让浏览器重新拉取
 3. 请求数尽量少
 ### npm i -D html-webpack-plugin optimize-css-assets-webpack-plugin extract-text-webpack-plugin url-loader file
 错误信息 TypeError: Cannot read property 'compilation' of undefined at OptimizeCssAssetsWebpackPlugin.apply 将optimize-css-assets-webpack-plugin的版本改为 3.2.0版
---
# gulp 自动化发布到多个环境 生产版本号 打包成zip压缩文件本地保存备份等
## npm i -D gulp gulp-vsftp gulp-zip momentkirk

--- 
# 引入 eslint
## npm i -D eslint eslint-config-react-app eslint-loader eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react react-dev-utils babel-eslint