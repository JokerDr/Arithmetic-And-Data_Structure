// 树
// 树是一种分层数据的抽象模型。
// 一个树的结构包含一系列存在父子关系的节点。
// 每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点。

// 二叉树和二叉搜索树
// 二叉树中的节点最多只能有两个节点：一个是左侧子节点，另一个是右侧子节点。
// 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或者等于）的值。
// 下面示例（BST）的代码：

function BinarySearchTree() {
    var Node = function (key) { //数据结构类
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null; //根节点
    this.insert = function (key) { //插入新的键
        var newNode = new Node(key);
        //special case - first element
        if (root === null) { //根节点为空，作为根节点
            root = newNode;
        } else {
            insertNode(root, newNode); //插入节点操作
        }
    };
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) { //如果没有左侧节点就插入新的节点
                node.left = newNode;
            } else { //有的话递归
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {  //如果没有右侧节点就插入新的节点
                node.right = newNode;
            } else { //有的话递归
                insertNode(node.right, newNode);
            }
        }
    };
    this.getRoot = function () {
        return root;
    };
    this.search = function (key) {  //搜索键
        return searchNode(root, key); //搜索操作
    };
    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) { //如果小于继续从左边搜索
            return searchNode(node.left, key);
        } else if (key > node.key) { //如果大于继续从右边搜索
            return searchNode(node.right, key);
        } else { //命中
            return true;
        }
    };
    this.min = function () { //找最小键
        return minNode(root);
    };
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    this.max = function () { //找最大键
        return maxNode(root);
    };
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.remove = function (element) {
        root = removeNode(root, element);
    };
    var findMinNode = function (node) { //返回节点
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };
    var removeNode = function (node, element) { //移除一个节点
        if (node === null) {
            return null;
        }
        if (element < node.key) {
            node.left = removeNode(node.left, element);
            return node;
        } else if (element > node.key) {
            node.right = removeNode(node.right, element);
            return node;
        } else { //命中后分三种情况         
            //移除叶子节点，即该节点没有左侧或者右侧子节点的叶结点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //移除有一个左侧或者右侧子节点的节点
            if (node.left === null) {
                node = node.right; //把引用改为子节点的引用，下同
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //移除有两个子节点的节点
            var aux = findMinNode(node.right); //找到右边子树的最小节点
            node.key = aux.key; //改变节点的键，更新节点的值
            node.right = removeNode(node.right, aux.key); //移除有相同键的节点
            return node; //返回更新后节点的引用
        }
    };
}