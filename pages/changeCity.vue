<template>
    <div class="page-changeCity">
        <el-row>
            <el-col :span="24">
                <iselect/>
            </el-col>
        </el-row>
         <el-row>
            <el-col :span="24">2</el-col>
        </el-row>
         <el-row>
            <el-col :span="24">3</el-col>
        </el-row>
    </div>
</template>
<script>
import iselect from '@/components/changeCity/iselect.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        iselect
    }
}
</script>

