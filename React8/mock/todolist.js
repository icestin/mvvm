import Mock from 'mockjs';

Mock.mock(/\/todoList.mock/,{
    'code': 0,
    'data': {
        "list|1-10": [{
            // 属性 id是一个自增数，起始值为1，每次增1
            'id|+1': 1,
            "title": '项目条目@id',
            'status': 1
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});