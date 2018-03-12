// 循环队列——击鼓传花
// 击鼓传花游戏，在这个游戏中，
// 孩子们围成一个圆圈，
// 把花尽快的传递给旁边的人。
// 某一时刻传花停止，这个时候花落在谁手里，谁就退出圆圈结束游戏。
// 重复这个过程，直到只剩下一个孩子。
// 例子如下：

function hotPotato(namelist, num) {
    var queue = new Queue();
    for (var i = 0; i < namelist.length; i++) {
        queue.enqueue(namelist[i]);
    }
    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "在游戏中淘汰了。");
    }
    return queue.dequeue();
}
var names = ["a", "b", "c", "d", "e"];
var winner = hotPotato(names, 7);
console.log("胜利者" + winner);
//c在游戏中淘汰了。
//b在游戏中淘汰了。
//e在游戏中淘汰了。
//d在游戏中淘汰了。
//胜利者a