# JSProerty
 
 ### 1. 实现new
 实现new分为三个部分：
   1. 创建一个空对象
   2. 将对象的隐式原型连接到构造函数的prototype
   3. 执行构造函数
   4. 如果返回值为object则返回上述对象否则返回全新的对象