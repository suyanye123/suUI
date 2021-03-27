# suUI
my private UI tool storage，which helped me pratice and work effective <br/>
这里是简素言也的个人UI及工具库，用于帮助个人学习、练习，以及平时更便捷高效的工作

### 项目构建

1.使用vite创建项目 npm init @vitejs/app suUI --template vue 

2.npm install

3.npm install vue-router@4 -S  新建router.js配置路由文件createWebHashHistory() hash 模式

4.npm install sass -D

### 

### 目录结构

`|-node_modules    -- 项目依赖包的目录`

`|-public       -- 项目公用文件`

​	`|--favicon.ico   -- 网站地址栏前面的小图标`

`|-src         -- 源文件目录，程序员主要工作的地方`

​	 `|-assets      -- 静态文件目录，图片图标，比如网站logo`

​	`|-components    -- Vue3.x的自定义组件目录`

​	 `|--App.vue     -- 项目的根组件，单页应用都需要的`

​	 `|--index.css    -- 一般项目的通用CSS样式写在这里，main.js引入`

​	 `|--main.js     -- 项目入口文件，SPA单页应用都需要入口文件`

`|--.gitignore     -- git的管理配置文件，设置那些目录或文件不管理`

`|-- index.html    -- 项目的默认首页，Vue的组件需要挂载到这个文件上`

`|-- package-lock.json --项目包的锁定文件，用于防止包版本不一样导致的错误`

`|-- package.json   -- 项目配置文件，包管理、项目名称、版本和命令`