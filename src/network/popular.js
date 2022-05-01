import { request } from "./request";

/* 查询所有的分类类型 */
export function findAllCategory() {
    return request({
        url: '/category/findAllCategory',
    })
}

export function findPostByPublishTime(pageCode){
    return request({
        url: '/post/findPostByPublishTime',
        params: {
            pageCode: pageCode,
            pageSize: 5
        }
    })
}

export function findAllColleges() {
    return request({
        url: '/user/findAllColleges'
    })
}

export function findCurUserFocusedPost(userid, pageCode) {
    return request({
        url: '/post/findCurUserFocusedPost',
        params: {
            userid: userid,
            pageCode: pageCode,
            pageSize: 5
        }
    })
}
