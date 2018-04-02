// 广度优先搜索（BFS）
// 广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻点，就像一次访问图的一层。
// 换句话说，就是先宽后深的访问顶点。以下是从顶点v开始的广度优先搜索算法所遵循的步骤。

// （1）创建一个队列Q。
// （2）将v标注为被发现的（灰色），并将v入队列Q。
// （3）如果Q非空，则运行以下步骤：
// （a）将u从Q中出队列；
// （b）将标注u为被发现的（灰色）；
// （c）将u所有未被访问过的邻点（白色）入队列；
// （d）将u标注为已被探索的（黑色）；
// 示例代码如下：

var initializeColor = function () {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
        color[vertices[i]] = 'white'; //初始化所有的顶点都是白色
    }
    return color;
};
this.bfs = function (v, callback) {
    var color = initializeColor(),
        queue = new Queue(); //创建一个队列
    queue.enqueue(v); //入队列
    while (!queue.isEmpty()) {
        var u = queue.dequeue(), //出队列
            neighbors = adjList.get(u); //邻接表
        color[u] = 'grey'; //发现了但还未完成对其的搜素
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i]; //顶点名
            if (color[w] === 'white') {
                color[w] = 'grey'; //发现了它
                queue.enqueue(w); //入队列循环
            }
        }
        color[u] = 'black'; //已搜索过
        if (callback) {
            callback(u);
        }
    }
};
//测试如下：
function printNode(value) {
    console.log('Visited vertex: ' + value);
}
graph.bfs(myVertices[0], printNode);
结果如下：
Visited vertex: A
Visited vertex: B
Visited vertex: C
Visited vertex: D
Visited vertex: E
Visited vertex: F
Visited vertex: G
Visited vertex: H
Visited vertex: I