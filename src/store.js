import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 网站系统信息
    websiteinfo:{
        
    },
    changeblack:true,
    headactive:0,
    pagecur:1,
    // 是否登录
    islog: false,          //保存时长 ： 60*60*24*3
    username:'',
    // 手机号做验证
    pattphone:/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
    // 验证码做验证
    pattcode:/^[A-Za-z0-9]{4}$/,
    // email做验证
    pattemail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    // 移除所有html标签
    matchReg(str){
        let reg=/<\/?.+?\/?>/g;
        return str.replace(reg,'');
    },
    // Cookie 相关   设置 获取 删除
    //设置cookie<存>
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    //获取cookie
    getCookie: function (cname) {
        var arr, reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    //删除cookie
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    // 指定时间格式化
    formatDate(time){
      var date = new Date(time);
      var year = date.getFullYear(),
          month = date.getMonth() + 1,//月份是从0开始的
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
          month=month<10 ? '0'+month : month;
          day=day<10 ? '0'+day : day;
          hour=hour<10 ? '0'+hour : hour;
          min = min < 10 ? '0' + min : min;
          sec = sec < 10 ? '0' + sec : sec;
          var newTime = year + '-' +month + '-' +day + ' ' +hour + ':' +min + ':' +sec;
          return newTime;         
      },

  },
  mutations: {
    changeLogin(state,data){
        state.islog = data;
    },
    newheadactive(state,msg){
        state.headactive=msg;
    },
  },
  actions: {

  }
})
