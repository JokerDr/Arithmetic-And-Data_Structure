// 声明一些队列可用的方法：

// enqueue(element): 向队列尾部添加一个（或是多个）元素。
// dequeue(): 移除队列的第一个元素，并返回被移除的元素。
// front(): 返回队列的第一个元素——最先被添加的也是最先被移除的元素。队列不做任何变动。
// isEmpty(): 检查队列内是否有元素，如果有返回true，没有返回false。
// size(): 返回队列的长度。
// print(): 打印队列的元素。

//完整代码
function Queue() {
    var items = [];
    this.enqueue = function (element) {
        items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return items.length == 0;
    };
    this.clear = function () {
        items = [];
    };
    this.size = function () {
        return items.length;
    };
    this.print = function () {
        console.log(items.toString());
    };
}



var queue = new Queue();
console.log(queue.isEmpty());
//true
queue.enqueue(1);
queue.enqueue(3);
//添加元素
console.log(queue.front());
//返回队列的第一个元素1
console.log(queue.size());
//2
//输出元素个数