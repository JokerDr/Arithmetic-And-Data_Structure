//单链表

function linkedList(param) {
    var Node = function (element) { 
        this.element = element;//存放节点内容
        this.next = null;//指针
     }
     var length = 0, //链表长度
         head = null;//初始化 头指针

         //添加
     this.append = function(){
         var node = new Node(element), //初始化添加的Node实例
         current;//操作所用的指针
         if(!head){
             head = node;
         }else{
             current = head;
             while (curent.next) { //循环链表直到找到最后一项，循环结束current指针指向链表最后一项元素
                current = current.next;
             }
             current.next = node;//找到最后一项元素后，将他的next属性指向新元素node,建立链接
         }
         length++;
         return true;
     };
     this.insert =  function (position,element) {
         if(position>=0 &&position<=length){
             let node = new Node(element),
             current = head,
             previous,
             index = 0;
            if(position === 0){
                node.next = current;
                head = node;
            }else{
                //循环链表，找到正确的位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
                while(index++ <position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
         }else{
             return false
         }
       };
    this.removeAt = function (position) {
        //检查是否越界，超过链表长度或是小于0肯定不符合逻辑的
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            //移除第一个元素
            if (position === 0) {
                //移除第一项，相当于head=null;
                head = current.next;
            } else {
                //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //链接previous和current的下一个元素，也就是把current移除了
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.indexOf = function (element) {
        let current = head,
            index = 0;
        //循环链表找到元素位置
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.remove = function (element) {
        //调用已经声明过的indexOf和removeAt方法
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.getHead = function () {
        return head;
    };
    this.toString = function () {
        let current = head,
            string = '';
        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        return string;
    };
    this.print = function () {
        console.log(this.toString());
    };

  }