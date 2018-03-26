// 散列表即HashTable类，也叫HashMap类，是Dictionary类的一种散列实现方式。
// 散列算法的作用是尽可能的在数据结构中找到一个值。
// 在以前的系列中，如果要在数据结构中获取一个值，需要遍历整个数据结构来找到它。
// 如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值。
// 散列函数的作用是给定一个键值，然后返回值在表中的位置。示例如下:

function HashTable() {
    var table = [];
    var loseloseHashCode = function (key) {  //(1)散列函数
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    var djb2HashCode = function (key) {  //(2)散列函数
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };
    var hashCode = function (key) {
        return loseloseHashCode(key);
    };
    this.put = function (key, value) { //根据所给的key通过散列函数计算出它在表中的位置，进而作映射
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };
    this.get = function (key) {
        return table[hashCode(key)];
    };
    this.remove = function (key) {
        table[hashCode(key)] = undefined;
    };
    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };
}