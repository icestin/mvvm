 # Redux

 ## Redux使用场景
 * 用户的使用方式复制
 * 不同身份的用户有不同的使用方式（普通用户与管理员）
 * 多个用户之间可以协作
 * 与服务器大量交互 或者使用了WebSocket
 * View要从多个源获取数据
 ## Redux 适用场景： 多交互, 多数据源
 * 某个组件的状态需要共享
 * 某个状态需要再任何地方都可以拿到
 * 一个组件需要改变全局状态
 * 一个组件需要改变另外一个组件的状态
 ## 需要一种机制，可以在同一个地方查询状态、改变状态、传播状态变化

 ## Redux的设计思想
 1. Web应用是一个状态机，视图与状态是一一对应的。
 2. 所有的状态，保存在一个对象里
 
## 先关概念
 ### Store 
 Store就是保存数据的地方，就像一个容器一样。整个应用程序只能有一个Store
 Redux提供createStore函数来生产Store;

 ### State
 Store对象包含所有数据，某个时点的数据叫做 State,当前时刻的State可以通过
 store.getState()获取到
 Redux规定，一个State对应一个View,只要State相同，View就相同。
 
 ### Action
   State变化会导致View变化， View通过 View发出通知，表示State将要发生变化
   Action 是一个对象，type属性是必须的，表示Action的名称。其他属性可以随意设置。
   Action表示用来描述当前发生的事情，改变State的唯一方法就是使用Action。
   Action 可以通过定义Action Creator函数来生成。

 ### store.dispatch()
 store.dispatch() 是View发出Action的唯一方法。 
 store.dispatch(ActionObj), 
 ActionObj = {
   type: "ACTION_TYPE",
   ...其他属性信息
 }
 ### Reducer
 Store在收到Action后，必须给出新的State, 这样View才会变化。
 计算State的过程就叫做Reducer.
 Reducer是一个函数，接收Action对象和当前State作为参数。返回一个新的State.
 const reducer = function (state, action) {
     return new_state;
 }
 store.dispatch()方法会触发Reducer的自动执行。 Store需要知道Reducer函数，做法就是在生成Store的时候
 将Reducer传入createStore方法。
const store = createStore(reducer);以后每当store.dispatch发送过来新的Action，就会自动调用Reducer得到新的State.
为什么这个函数叫做Reducer呢？ 它可以作为数组的reduce方法的参数
一系列Action对象作为一个数组。
const actions = [
    {type: "ADD", data: 0},
    {type: "ADD", data: 1},
    {type: "ADD", data: 2},
];

const result = actions.reduce(reducer, 0); //

**Reducer** 是纯函数。可以保证同样的State必定得到同样的View。
Reducer函数里不能改变State,必须返回一个全新的对象。

### store.subscribe()
Store允许使用store.subscribe方法设置监听函数，
store.subscribe(listener);
一旦State发生变化，就自动执行这个函数
State变化就会自动执行监听函数。
只要把View的更新函数（React的render方法或者setState）放入listen,就能实现View的自动渲染。
store.subscribe方法返回一个函数，调用这个函数就可以解除监听。

### Reducer 函数拆分
redux提供了combineReducers用于将分散的Reducer函数合并成一个整体的Reducer函数。

# Redux整个工作流
 * 用户发出 Action .   store.dispatch(action),Store自动调用Reducer,并传入连个参数。当前State和收到的Action. Reducer会返回新的State.
 * State一旦有变化， Store就会调用监听函数。
   store.subscribe(listener); listener可以通过store.getState()得到当前状态。
