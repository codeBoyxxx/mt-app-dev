<template>
  <div class="page-index">
    <el-row>
      <el-col :span='5'>
        <Emenu />
      </el-col>
      <el-row :span='19'>2</el-row>
    </el-row>
    <el-row :span='24'>
      3
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu'
export default {
  components: {
    Emenu
  }
}
</script>

<style lang='scss'>
  @import '@/assets/css/index/index.scss'
</style>
