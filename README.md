# m_allocation

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


数据交互接口：  （仅大概需求  具体还需商议）        返回的数据  我希望是json类型的｛code：0、1,msg:'文字描述',data: 有数据的话返回数据，没有返回null｝

登录            url : /api/login  method:post   data : {username:...,passworld:...}   
退出            url : /api/logout   method : post  data : {username : ...}

注册            1.获取图形验证码：   url: /api/getcode  method:get
                2.获取短信验证码    url: /api/gettelephonecode  method:post     data : {telephone:...,code:...}   
                3.注册按钮          url: /api/register     method:post  data : {telephone:...,code:...,telephonecode:...,nickname:...,password:...,recomcode:...}

找回密码        url : /api/forgetpassword  method:post data:{telephone:...,code:...,telephonecode:...,password:...}

首页            url : /api/mymain     method : get     
                1.轮播图  需要图片、图片的title 、图片要跳转的地址
                2.最新资讯  
                    2-1.新闻动态、子牛咨询  最新的四条数据  （标题，简述（前60字），日期， 唯一ID标识）
                    2-2.常见问题    两条数据（问题，答案(前72字)，唯一ID标示）

关于我们》联系我们   url : /api/contactus method : post  data : {telephone:...,name:...,email:...,adress:...,content:...}

操盘协议         url :  /api/protocoltrade  method : post     需要 甲方的 姓名 身份证号信息  乙方的 姓名 省份证号 联系地址 电话 信息   丙方 公司名称 电话信息   (暂时不做)

咨询中心           要求 返回 所有文章  =》  文章标题 简述（110字） 文章内容图片  日期 查看人数  唯一ID   method : get 
                1.创赢中心咨询      url : /api/consultation   
                2.财经早餐          url : /api/newscj   
                3.牛散实操          URL: /api/exercises 
                4.新闻动态          url :/api/dynamic
                5.常见问题          url : /api/problem

意见反馈         url : /api/feedback  method ： post  data:{type:...,telephone:...,content:...}

个人中心         url : /api/personal1  menthod: post   data :{username:...}  需要该账户的 头像（没有选择返回null） 用户名（手机号/用户名）  
                url : /api/personal2  menthod: post   data :{username:...}  需要该账户的 资产 可用资金 冻结资金 积分 证劵净值  现金资产
                url : /api/personal3  menthod: post   data :{username:...}  需要该账户的 昵称 实名认证状态（认证返回名字） 绑定银行卡（有返回银行名字）
                url : /api/changephone  method : post   data : {telephone:...,code:...,telephonecode:...}    
                url : /api/message      method : get     需要返回所有公告   标题 时间 （2018/9/20 14:31:16） 内容
                url : /api/getinvite    method : post   data : {username}  需要返回 改用户的 邀请好友信息（邀请链接，邀请二维码，邀请的人数）
                url : /api/getinvitedetail    method : post   data : {username:...}  需要返回 改用户的 邀请好友信息（邀请的人数，每个人的  用户名 手机号 注册时间）
                url : /api/flowing           method : post data : {username:...}  需要返回该用户的资金信息 (时间 类型 交易号 收入 支出 余额 备注)
                url : /api/drawing          method : post  data : {username : ...}  需要返回 该用户的账户余额  实名认证后的名字 绑定的银行卡 
 




























