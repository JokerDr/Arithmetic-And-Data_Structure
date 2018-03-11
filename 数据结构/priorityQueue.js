// 优先队列
// 指队列元素的添加和移除是基于优先级的。
// 实现一个优先队列，有两种选项：设置优先级，然后再正确的位置添加元素；
// 或者用入队操作添加元素，然后按照优先级移除他们。
// 下例将会在正确的位置添加元素，如下：

function PriorityQueue() {
    var items = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
        }
        if (!added) {
            items.push(queueElement);
        }
    }
    this.dequeue = function () {
        return items.shift();
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return items.length == 0;
    };
    this.size = function () {
        return items.length;
    };
    this.print = function () {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].element + ' - ' + items[i].priority);
        }
    };
}