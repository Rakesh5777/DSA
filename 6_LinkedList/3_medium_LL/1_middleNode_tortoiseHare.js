// TortoiseHare Method algorithm
var middleNode = function (head) {
    let slowPointer = head;
    let fastPointer = head;

    // Traverse the list with the fast pointer moving twice as fast as the slow pointer
    while (fastPointer) {
        // Move the slow pointer one step
        if (fastPointer.next) slowPointer = slowPointer.next;
        // Move the fast pointer two steps
        fastPointer = fastPointer?.next?.next;
    }

    return slowPointer;
};


var middleNodeWithMap = function (head) {
    let temp = head;
    let index = 0;
    let map = {};

    while (temp) {
        map[index] = temp;

        temp = temp.next;
        if (temp) index++;
    }

    return map[Math.ceil(index / 2)];
};
