// 线性探查
// 当想向表中某个位置加入一个新元素的时候，
// 如果索引为index的位置已经被占据了，
// 就尝试index + 1的位置。如果index + 1的位置也被占据了，
// 就尝试index + 2的位置，以此类推。
// 示例代码如下:

function HashLinearProbing() {
    var table = [];
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };
    var loseloseHashCode = function (key) {
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
        if (table[position] == undefined) { //如果没有元素存在加入
            table[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while (table[index] != undefined) { //有的话继续往后找，直到找到加入
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };
    this.get = function (key) {
        var position = hashCode(key);
        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value;
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) { //循环迭代
                    index++;
                }
                if (table[index].key === key) { //验证key
                    return table[index].value;
                }
            }
        }
        return undefined;
    };
    this.remove = function (key) {
        var position = hashCode(key);
        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[position] = undefined;
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    table[index] = undefined;
                }
            }
        }
    };
    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ' -> ' + table[i].toString());
            }
        }
    };
}