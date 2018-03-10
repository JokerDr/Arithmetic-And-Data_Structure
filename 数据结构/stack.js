//栈
// 我们需要给栈声明一些方法：
// push(element): 添加一个或是几个新元素到栈顶。
// pop(): 移除栈顶的元素，同时返回被移除元素。
// peek(): 返回栈顶的元素，但并不对栈顶的元素做出任何的修改。
// isEmpty(): 检查栈内是否有元素，如果有返回true，没有返回false。
// clear(): 清除栈里的元素。
// size(): 返回栈的元素个数。
// print(): 打印栈里的元素。


function Stack() {
    var items = [];
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function () {
        return items.pop();
    };
    this.peek = function () {
        return items[items.length - 1];
    };
    this.isEmpty = function () {
        return items.length == 0;
    };
    this.size = function () {
        return items.length;
    };
    this.clear = function () {
        items = [];
    };
    this.print = function () {
        console.log(items.toString());
    };
    this.toString = function () {
        return items.toString();
    };
}

// 测试

var stack = new Stack();
console.log(stack.isEmpty());
//true
stack.push(1);
stack.push(3);
//添加元素
console.log(stack.peek());
//输出栈顶元素3
console.log(stack.size());
//2
//输出元素个数