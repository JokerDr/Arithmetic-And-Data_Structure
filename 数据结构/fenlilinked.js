// 有时候一些键会有相同的键值。不同的的值在散列表中对应相同位置的时候，我们称其为冲突。此时，当我们通过相同的散列值去取属性值的时候会出现相互覆盖、数据丢失的情况。处理冲突有几种方法：分离链接，线性探查和双散列法，这里介绍前两种。

// 分离链接
// 分离链接法包括为散列表的每个位置创建一个链表并将元素存储在里面。示例代码如下:

function HashTableSeparateChaining() {
    var table = [];
    var ValuePair = function (key, value) { //新的辅助类来加入LinkedList实例的元素，用到之前的链表
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };
    var loseloseHashCode = function (key) { //散列函数得出一个散列值key
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    var hashCode = function (key) {
        return loseloseHashCode(key);
    };
    this.put = function (key, value) {
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        if (table[position] == undefined) { //判断是否被占据了
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value)); //LinkedList实例中添加一个ValuePair实例
    };
    this.get = function (key) {
        var position = hashCode(key);
        if (table[position] !== undefined && !table[position].isEmpty()) {
            var current = table[position].getHead();
            while (current.next) { //遍历链表来寻找键值
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            //检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };
    this.remove = function (key) {
        var position = hashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) { //遍历
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //检查元素在链表第一个或最后一个节点的情况
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };
    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(table[i].toString());
            }
        }
    };
}