<template>
  <div class="paging-part">
    <div class="pre fl">
      <i class="fa fa-angle-left pre-icon fl"></i>
    </div>
    <span class="page-text fl">第 7 页/共 20 页</span>
    <div class="next fl">
      <i class="fa fa-angle-right next-icon fl"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paging"
}
</script>

<style scoped>
.paging-part{
  height: 44px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding-top: 7px;
  background-color: rgb(22,22,26);
  font-size: 17px;
}
.paging-part .pre{
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #202025;
  cursor: pointer;
}
.paging-part .pre:hover{
  background-color: rgb(43,33,26);
  color: #ea8011;
}
.paging-part .pre .pre-icon{
  width: 18px;
  height: 18px;
  margin-top: 6px;
  margin-left: 6px;
  text-align: center;
  line-height: 18px;
}
.paging-part .page-text{
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
}
.paging-part .next{
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #202025;
  cursor: pointer;
}
.paging-part .next:hover{
  background-color: rgb(43,33,26);
  color: #ea8011;
}
.paging-part .next .next-icon{
  width: 18px;
  height: 18px;
  margin-top: 6px;
  margin-left: 6px;
  text-align: center;
  line-height: 18px;
}

</style>