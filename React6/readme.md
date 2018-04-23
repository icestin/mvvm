 # Flux

 ## 基本概念
  * View: 视图层
  * Action: 动作，视图层发出的消息 比如 click
  * Dispatcher 派发器， 接收Actions,执行回调函数
  * Store 数据层， 用来存放应用的状态，一旦发生变动就提醒Views更新界面

 ## 特点
  * 用户访问 View
  * View 发出用户的Action
  * Dispatcher 收到Action,要求Store进行相应的更新
  * Store更新后，发出一个‘change’事件
  * View 收到‘change’事件后，跟新页面

## npm i -S flux;