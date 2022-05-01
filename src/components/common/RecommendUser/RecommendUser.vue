<template>
    <div class="recommend-user-item-wrap">
        <div class="recommend-user-item">
            <div class="avatar-part fl">
                <img class="fit" :src="userInfo.userAvatar" alt="">
            </div>
            <div class="user-info fl">
                <p class="name" v-if="userInfo.username.length>6">{{ userInfo.username.substring(0, 6) + "..." }}</p>
                <p class="name" v-else>{{ userInfo.username }}</p>
                <p class="desc">{{ userInfo.motto.substring(0, 6) + "..." }}</p>
            </div>
            <div class="focus-btn fr" v-if="!isFocusedUser">
                <i class="fa fa-plus focus-icon fl"></i>
                <span class="focus-text fl">关注</span>
            </div>
            <div class="focus-btn-already fr">
                <i class="fa fa-check focus-icon fl"></i>
                <span class="focus-text fl">取关</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendUser",
        props: {
            userInfo: {
                type: Object,
                default(){
                    return {};
                }
            },
            isFocusedUser: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data(){
            return {}
        },
        methods: {

        }
    }
</script>

<style scoped>
    .recommend-user-item-wrap{
        width: 100%;
        border-radius: 4px;
    }
    .recommend-user-item-wrap:hover{
        background-color: rgb(37,37,44);
        cursor: pointer;
    }
    .recommend-user-item-wrap:nth-child(3) .recommend-user-item{
        border-bottom: none;
    }
    .recommend-user-list .recommend-user-item{
        width: 90%;
        height: 78px;
        margin-left: 5%;
        overflow: hidden;
        border-bottom: 1px solid #202025;
    }
    .recommend-user-item .avatar-part{
        width: 50px;
        height: 50px;
        margin-top: 14px;
        border-radius: 50%;
    }
    .recommend-user-item .avatar-part img{
        border-radius: 50%;
    }
    .recommend-user-item .user-info{
        margin-left: 6px;
    }
    /* 去掉公共样式 */
    .recommend-user-list .recommend-user-item .user-info p{
        margin: 0;
    }
    .recommend-user-item .user-info .name{
        font-size: 12px;
        color: #d3d3d3;
        margin-top: 20px;
    }
    .recommend-user-item .user-info .desc{
        font-size: 12px;
        color: #999;
        margin-top: 3px;
    }
    .recommend-user-list .recommend-user-item .focus-btn{
        width: 56px;
        height: 30px;
        border-radius: 12px;
        border: 1px solid #ea8011;
        margin-top: 24px;
        display: flex;
        justify-content: center;
    }
    .recommend-user-item .focus-btn:hover{
        background-color: rgb(58,46,41);
    }
    .recommend-user-item .focus-btn .focus-icon{
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        margin-top: 7px;
        color: #ea8011;
    }
    .recommend-user-item .focus-btn .focus-text{
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        margin-top: 6px;
        color: #ea8011;
    }
</style>
