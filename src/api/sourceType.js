import request from '@/utils/request'

// 搜索分页
export function findAll(data) {
  return request({
    url: '/sourceType/findAll',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}


// 查询所有类别
export function findAllSoureType(data) {
  return request({
    url: '/sourceType/findAllSoureType',
    // 此处admin是代理
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    data
  })
}

// 查找文章详情
export function findOne(data) {
  return request({
    url: '/sourceType/findOne',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// 创建文章类别
export function create(data) {
    return request({
      url: '/sourceType/create',
      // 此处admin是代理
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    })
  }
// 修改文章类别
export function update(data) {
    return request({
      url: '/sourceType/update',
      // 此处admin是代理
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    })
  }

// 删除文章类别

export function del(data) {
    return request({
      url: '/sourceType/del',
      // 此处admin是代理
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    })
  }

  // 批量删除文章类别

export function batchDel(data) {
  return request({
    url: '/sourceType/batchDel',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}





