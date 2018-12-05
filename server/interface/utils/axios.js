import axios from 'axios'

const instance = axios.create({
    // 获取环境变量中的host和port,如果没有就设置成localhost:3000
    baseURL:`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
    timeout:2000,
    headers:{

    }
})

export defalut instance