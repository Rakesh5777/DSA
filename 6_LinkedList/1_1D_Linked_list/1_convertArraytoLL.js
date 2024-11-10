export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


function convertArrayToLL(arr) {
    // Initialize the head of the linked list with the first element of the array
    let head = new Node(arr[0]);
    let tail = null;
    let temp = head;

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Create a new node for the current element
        let current = new Node(arr[i]);
        // Link the previous node to the current node
        temp.next = current;
        // Move the temp pointer to the current node
        temp = current;
    }
    // Set the tail to the last node
    tail = temp;
    // Return the head of the linked list
    return head;
}

console.log(JSON.stringify(convertArrayToLL([1, 2, 3, 4, 5])));
