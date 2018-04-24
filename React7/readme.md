 # reflux

 ## 一个简单的单向数据流应用库

 Actions --> Stores --> View 

 ## 与flux相同点
  * 有actions
  * 有stores
  * 单向数据流

 ## 不同点
  * 通过内部拓展actions的行为，移除了单例的dispatcher
  * stores可以监听actions的行为，无需进行冗余的switch判断
  * stores可以相互监听，可以进行进一步的数据聚合操作 累死于 map/reduce
  * waitFor被连续和平行的数据流所替代

## npm i -S reflux;