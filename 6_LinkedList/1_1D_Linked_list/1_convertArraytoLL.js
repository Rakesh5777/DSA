
export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


function convertArrayToLL(arr) {
    let head = new Node(arr[0]);
    let tail = null;
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        let current = new Node(arr[i])
        temp.next = current;
        temp = current;
    }
    tail = temp;
    return head;
}

console.log(JSON.stringify(convertArrayToLL([1, 2, 3, 4, 5])));
