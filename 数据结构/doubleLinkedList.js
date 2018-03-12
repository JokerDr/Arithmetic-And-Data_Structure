// 双向链表
// 双向链表和单向链表的区别在于，
// 在单向链表中，
// 一个节点只有链向下一个节点的链接。而在双向链表中，链接是双向的：
// 一个链向下一个元素，另一个链向前一个元素。
// 示例代码如下：
function DoublyLinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null; //新添加的
    };
    var length = 0;
    var head = null;
    var tail = null; //新添加的
    this.append = function (element) {
        var node = new Node(element),
            current;
        if (head === null) { //列表为空
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        length++;
    };
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //在第一个位置
                if (!head) {       //列表为空
                    head = node;
                    tail = node;
                } else {      //列表不为空
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) { //最后一项
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node; //把node节点连接进去前一个节点和后一个节点

                current.prev = node; //断掉之前previous和current的连接
                node.prev = previous; //prev同样需要连接
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            if (position === 0) { //移除第一项
                head = current.next;
                if (length === 1) { // 列表只有一项
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                移除最后一项
                current = tail; // {4}
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next; // 链接前一项和后一项，跳过当前项
                current.next.prev = previous; //修复prev
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function (element) {
        var current = head,
            index = -1;
        //检查第一项
        if (element == current.element) {
            return 0;
        }
        index++;
        //检查中间项
        while (current.next) {
            if (element == current.element) {
                return index;
            }
            current = current.next;
            index++;
        }
        //检查最后一项
        if (element == current.element) {
            return index;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.toString = function () {
        var current = head,
            s = current ? current.element : '';
        while (current && current.next) {
            current = current.next;
            s += ', ' + current.element;
        }
        return s;
    };
    this.inverseToString = function () {
        var current = tail,
            s = current ? current.element : '';
        while (current && current.prev) {
            current = current.prev;
            s += ', ' + current.element;
        }
        return s;
    };
    this.print = function () {
        console.log(this.toString());
    };
    this.printInverse = function () {
        console.log(this.inverseToString());
    };
    this.getHead = function () {
        return head;
    };
    this.getTail = function () {
        return tail;
    }
}