<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="mouseleave">
            <dt>全部分类</dt>
            <dd v-for='(item,idx) in $store.state.home.menu' :key='idx' @mouseenter="enter">
                <i :class="item.type"></i>{{item.name}}<span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if='kind' @mouseenter="sover" @mouseleave="sout">
            <template v-for='(item,idx) in curdetail.child'>
                <h4 :key='idx'>{{item.title}}</h4>
                <span v-for = 'v in item.child' :key="v">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            kind:'',
            menu:[{
                type:'food',
                name:'美食',
                child:[{
                    title:'美食',
                    child:['代金券','甜点饮品','小吃']
                }]
            },{
                type:'takeout',
                name:'外卖',
                 child:[{
                    title:'外卖',
                    child:['代金券','代金券','代金券']
                },{
                    title:'小吃',
                    child:['代金券','代金券','代金券']
                }]
            }]
        }
    },
    computed:{
        curdetail(){
           return this.$store.state.home.menu.filter((item)=>item.type===this.kind)[0]
        }
    },
    methods:{
        mouseleave(){
            this.timer = setTimeout(()=>{
                this.kind = ''
            },150)
        },
        enter(e){
            this.kind = e.target.querySelector('i').className
            console.log(this.kind)
        },
        sover(){
            clearTimeout(this.timer)
        },
        sout(){
            this.kind = ''
        }
    }
}
</script>

<style>

</style>


