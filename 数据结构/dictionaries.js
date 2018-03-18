// 字典
// 字典存储的是[键，值]对，其中键名是用来查询特定元素的。
// 字典和集合很相似，集合以[值，值]的形式存储元素，
// 字典则是以[键，值]的形式来存储元素。字典也称映射。
// 示例代码如下:

function Dictionary() {
    var items = {};
    this.set = function (key, value) {
        items[key] = value;
    };
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.has = function (key) {
        return items.hasOwnProperty(key);
    };
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.keys = function () {
        return Object.keys(items);
    };
    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    this.each = function (fn) {
        for (var k in items) {
            if (this.has(k)) {
                fn(k, items[k]);
            }
        }
    };
    this.getItems = function () {
        return items;
    }
}