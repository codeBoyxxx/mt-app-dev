export default {
    dbs:'mongodb://127.0.0.1:27017/student',
    redis:{
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    // 腾讯QQ邮箱验证服务
    smtp:{
        get host(){
            return 'smtp.qq.com'
        },
        get user(){
            return '714699329@qq.com'
        },
        get pass(){
            return 'iepprilgdcikbefi'
        }
    },
    // 用于返回随机的验证码
    get code(){
        return ()=>{
            return Math.random().toString(16).slice(2,6).toUpperCase()
        }
    },
    // 设置过期时间
    get expire(){
        return ()=>{
            return new Date().getTime+60*60*1000
        }
    }
}