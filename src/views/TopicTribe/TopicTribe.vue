<template>
  <div>
    <!--  左侧导航栏  -->
    <left-side-bar :side_bar_data="side_bar_data"></left-side-bar>
    <!--  右侧热评栏  -->
    <right-side-bar></right-side-bar>
    <!--  中间主题部分  -->
    <main-container>
      <router-view></router-view>
    </main-container>
  </div>
</template>

<script>
import LeftSideBar from "@/components/common/LeftSideBar/LeftSideBar";
import MainContainer from "@/components/common/MainContainer/MainContainer";
import RightSideBar from "@/components/common/RightSideBar/RightSideBar";

export default {
  name: "Video",
  components: {
    LeftSideBar,
    MainContainer,
    RightSideBar
  },
  data(){
    return {
      side_bar_data: {
        side_bar_title: "视频",
        side_items: [
          {
            path: '/popular/popularPosts',
            normal: require('@/assets/images/icon/hot-post.svg'),
            selected: require('@/assets/images/icon/hot-post-selected.svg'),
            title: '推荐'
          },
          {
            path: '/popular/collegePost',
            normal: require('@/assets/images/icon/college-post.svg'),
            selected: require('@/assets/images/icon/college-post-selected.svg'),
            title: '关注'
          },
          {
            path: '/popular/topicList',
            normal: require('@/assets/images/icon/topic.svg'),
            selected: require('@/assets/images/icon/topic-selected.svg'),
            title: '视频号'
          },
          {
            path: '/popular/hotSearchList',
            normal: require('@/assets/images/icon/hot-search.svg'),
            selected: require('@/assets/images/icon/hot-search-selected.svg'),
            title: '榜单'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>