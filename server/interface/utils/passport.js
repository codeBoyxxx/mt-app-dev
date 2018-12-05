import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy(async function(username,password,done){
    let where = {
        username
    }
    let result = await UserModel.findOne(where)
    if(result!=null){
        if(result.password === password){
            return done(null,result)
        }else{
            return done(null,false,'密码错误')
        }
    }else{
        return done(null,false,'用户不存在')
    }

}))

// 在用户每次的请求中都回去session对象中读取,与浏览器端的cookie做对比，从而达到验证的登录的功能
passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

export default passport