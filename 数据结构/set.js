// 集合
// 集合是由一组无序且唯一的项组成的。
// 这个数据结构使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。
// 在数学中，集合也有并集、交集、差集等基本操作，在下面的代码中也会实现这些操作。
// 值的相等：因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。
// 判断相等的算法与严格相等（===操作符）不同。具体来说，对于 Set ， +0 （+0 严格相等于-0）和-0是不同的值。
// 尽管在最新的 ECMAScript 6规范中这点已被更改。从Gecko 29.0和 recent nightly Chrome开始，Set 视 +0 和 -0 为相同的值。
// 另外，NaN和undefined都可以被存储在Set 中， NaN之间被视为相同的值（尽管 NaN !== NaN）。

function Set() {
    var items = {};
    this.has = function (value) { //判定值是否在集合中
        return items.hasOwnProperty(value);
    };
    this.add = function (value) { //向集合添加一个新的项
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) { //从集合移除一个值
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };
    this.clear = function () { //清空集合
        items = {};
    };
    this.size = function () { //集合元素的个数
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop))
                ++count;
        }
        return count;
    };
    this.values = function () { //集合所有值的数组
        var keys = [];
        for (var key in items) {
            keys.push(key);
        }
        return keys;
    };
    this.getItems = function () { //获取集合
        return items;
    };
    this.union = function (otherSet) { //并集
        var unionSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    this.intersection = function (otherSet) { //交集
        var intersectionSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    this.difference = function (otherSet) { //差集
        var differenceSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    this.subset = function (otherSet) { //子集
        if (this.size() > otherSet.size()) { //子集的元素个数要小于otherSet的元素个数
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false; //有一个没有返回false
                }
            }
            return true;
        }
    };
}