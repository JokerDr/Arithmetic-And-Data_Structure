// 图是网络结构的抽象模型。 图是一组由边连接的节点， 任何二元关系都可以用图来表示。

// 1.1、 图的相关概念
// 一个图G = （V， E） 由以下元素组成。

// V： 一组顶点
// E： 一组边， 连接V中的顶点
function Graph() {
    var vertices = []; //存储图中所有的顶点名字
    var adjList = new Dictionary(); //用之前的一个字典来存储邻接表
    this.addVertex = function (v) { //添加顶点
        vertices.push(v);
        adjList.set(v, []); //顶点为键，字典值为空数组
    };
    this.addEdge = function (v, w) { //添加边
        adjList.get(v).push(w); //基于有向图
        adjList.get(w).push(v); //基于无向图
    };
    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };
}
//测试
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());
// 结果如下：
// A - > B C D
// B - > A E F
// C - > A D G
// D - > A C G H
// E - > B I
// F - > B
// G - > C D
// H - > D
// I - > E