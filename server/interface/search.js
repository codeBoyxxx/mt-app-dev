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

router.get('/hotPlace',async (ctx)=>{
  const city=ctx.query.city
  const{status,data:{result}}=await axios.get('http://cp-tools.cn/search/hotPlace',{
    params:{
      city,
      sign
    }
  })
  ctx.body={
    result:status===200?result:[]
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword,
      sign
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200
      ? pois
      : []
  }
})


export default router