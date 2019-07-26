# vue-element-admin
基于vue element admin开发后台管理系统

# 启动服务
npm run dev
浏览器访问 http://localhost:9528

发布
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
其它
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix

演示
测试账号:

1. username: admin
   password: 任意
2. username: editor
   password: 任意

其他注意事项
一、如果我不想用到上面的紫色颜色，那我怎么修改为自己喜欢的颜色呢？
第一步： 修改代码地址为:src/styles/variables里面的//sidebar注释部分

第二步： 修改代码地址为：src/views/layout/components/Sidebar/index.vue下面部分颜色代码即可。

<el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#6959CD"
      text-color="white"
      active-text-color="#42b983"
    >
二、如果我不想用到刷新加载动画怎么做呢？
把index.html里面相关的loader-wrappe 加载动画div 和相关css去掉即可。

三、如果我不想用到上面的某些组件呢，那我怎么在模板中删除掉不影响到其他功能呢？
举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分三步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

  {
        path: 'VueEditor',
        name: 'VueEditor',
        component: () => import('@/views/form/VueEditor'),
        meta: { title: 'VueEditor' }
  },
第二步：删除引入该组件的文件。在目录 src/view/form/ 删除 VueEditor.vue 文件。

第三步：卸载该组件。执行以下命令：

npm un vue-quill-editor -S
完成。

功能
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限

- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 锁屏
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地mock数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown

- 表格
  - 树形表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 返回顶部
  - 拖拽Dialog
  - 拖拽看板
  - 列表拖拽

- 综合实例
- Dashboard
- v-charts 图表
- 首屏加载等待动画
- Fontawesome 图标库
- vuex本地持久化存储,封装h5的sessionStorage和localStorage

开发
# 克隆项目
git clone https://github.com/mgbq/nx-admin.git

# 安装依赖
npm install
   
# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org


