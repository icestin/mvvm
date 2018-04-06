
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