# hospital

## 工程安装 Project setup
 为防止无法正常运行请执行(https://blog.csdn.net/mo_247/article/details/86259442）
```
1、删除 node_modules文件（如若存在）
2、删除package-lock.json文件(如若存在)
3、npm cache clean --force
4、npm init -f
```
 修改package.json之后
```
npm install
```

## 开发前的编译 Compiles and hot-reloads for development
 修改router配置和vue.config.js之后
```
npm run serve
```

## 上线前的编译 Compiles and minifies for production
 形成文件
```
npm run build
```

## 其他
 
``` 
版本过高时
npm i xxx --no-optional
自动修复
npm run lint
查看当前配置
npm config list
降低版本
npm i -g npm@6.0.1
更新版本
npm install -g npm
```
### 自定义配置参考 Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

——————————————————————————
# 项目结构
|——.npmrc           #npm配置
|——.eslintrc.js     #代码规范
|——.eslintignore    #忽略规范
|——.editorconfig    #代码风格（空格控制）
|——.browserslistrc  #浏览器兼容
|—— package.json    #依赖
|—— vue.config.js   #CLI 配置
|—— src    #开发主文件夹[@/]
|    |——assets      #资源
|    └──components  #组件
|	   |——http        #通用http请求
|	   |——router      #路由
|	   |——store       #vuex
|	   |——locales     #语言
|	   |——views       #页面 
|	   |——App.vue     #入口
|        └──main.js     #公共插件
└── public  #根目录[/][#/]
      └──index.html #首页，配置meta等
	  
# 搭建项目
```
## 开始
vue create XXX
（存在单独配置文件时，记得把package.json对应配置删除）

## 依赖
vant                        #UI框架
compression-webpack-plugin  #打包使用

## 依赖漏配置却使用到(根据错误提示写XXX)
npm install xxx --save

## 配置路径别名
在cli配置文件中配置

## 路由
公共导航栏
①写入app.vue
②通过keepAlive判断是否加公共导航栏
https://blog.csdn.net/qq_37949984/article/details/91038387

##注意
main.js中全局定义的路由和vuex等，在vue文件中使用时需要加$
[如$router,$store]
```


