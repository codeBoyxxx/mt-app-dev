import Router from 'koa-router';
import axios from './utils/axios'
import Poi from '../dbs/models/poi'

let router=new Router({
    prefix:'/search'
})
const sign = 'd7306453e86abb45274523a7adfb8d90'
router.get('/top',async (ctx)=>{
    let {status, data: {
        top
      }} = await axios.get(`http://cp-tools.cn/search/top`, {
      params: {
        input: ctx.query.input,
        city: ctx.query.city,
        sign
      }
    })
    ctx.body = {
      top: status === 200
        ? top
        : []
    }
})

export default router