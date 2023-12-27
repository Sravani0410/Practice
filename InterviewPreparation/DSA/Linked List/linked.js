// ==================================================================class component:==========================================================

// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     // Insert at the beginning of the list
//     insertFirst(data) {
//       this.head = new Node(data, this.head);
//     }
  
//     // Insert at the end of the list
//     insertLast(data) {
//       const newNode = new Node(data);
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }
  
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
  
//       current.next = newNode;
//     }
  
//     // Insert at a specific index
//     insertAt(data, index) {
//       if (index === 0) {
//         this.insertFirst(data);
//         return;
//       }
  
//       const newNode = new Node(data);
//       let current = this.head;
//       let count = 0;
//       let previous = null;
  
//       while (count < index && current) {
//         previous = current;
//         current = current.next;
//         count++;
//       }
  
//       if (!current) {
//         // If index is out of bounds, insert at the end
//         previous.next = newNode;
//       } else {
//         newNode.next = current;
//         previous.next = newNode;
//       }
//     }
  
//     // Get at index
//     getAt(index) {
//       let current = this.head;
//       let count = 0;
  
//       while (current) {
//         if (count == index) {
//           console.log(current.data);
//         }
//         count++;
//         current = current.next;
//       }
  
//       return null;
//     }
  
//     // Remove at index
//     removeAt(index) {
//       if (!this.head) {
//         return;
//       }
  
//       let current = this.head;
//       let count = 0;
//       let previous = null;
  
//       if (index === 0) {
//         this.head = current.next;
//       } else {
//         while (count < index && current) {
//           previous = current;
//           current = current.next;
//           count++;
//         }
  
//         if (!current) {
//           return;
//         }
  
//         previous.next = current.next;
//       }
//     }
  
//     // Print the linked list
//     printList() {
//       let current = this.head;
//       while (current) {
//         console.log("hbhj",current.data);
//         current = current.next;
//       }
//     }
//   }
//    // Example usage:
//    const ll = new LinkedList();
//    ll.insertFirst(1);
//    ll.insertLast(2);
//    ll.insertLast(3);
//    ll.insertAt(4, 1);
//  //   ll.printList(); // Output: 1, 4, 2, 3
   
//    ll.removeAt(2);
//    ll.printList(); // Output: 1, 4, 3
//   ====================================================================functional component:================================================
const createNode = (data, next = null) => ({
    data,
    next
  });
  
  const createLinkedList = () => {
    let head = null;
  
    const insertFirst = data => {
      head = createNode(data, head);
    };
  
    const insertLast = data => {
      const newNode = createNode(data);
      if (!head) {
        head = newNode;
        return;
      }
  
      let current = head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    };
  
    const insertAt = (data, index) => {
      if (index === 0) {
        insertFirst(data);
        return;
      }
  
      const newNode = createNode(data);
      let current = head;
      let count = 0;
      let previous = null;
  
      while (count < index && current) {
        previous = current;
        current = current.next;
        count++;
      }
  
      if (!current) {
        // If index is out of bounds, insert at the end
        previous.next = newNode;
      } else {
        newNode.next = current;
        previous.next = newNode;
      }
    };
  
    const getAt = index => {
      let current = head;
      let count = 0;
  
      while (current) {
        if (count === index) {
          console.log(current.data);
        }
        count++;
        current = current.next;
      }
  
      return null;
    };
  
    const removeAt = index => {
      if (!head) {
        return;
      }
  
      let current = head;
      let count = 0;
      let previous = null;
  
      if (index === 0) {
        head = current.next;
      } else {
        while (count < index && current) {
          previous = current;
          current = current.next;
          count++;
        }
  
        if (!current) {
          return;
        }
  
        previous.next = current.next;
      }
    };
  
    const printList = () => {
      let current = head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    };
  
    return {
      insertFirst,
      insertLast,
      insertAt,
      getAt,
      removeAt,
      printList
    };
  };
  // Example usage:
const ll = createLinkedList();
ll.insertFirst(1);
ll.insertLast(2);
ll.insertLast(3);
ll.insertAt(4, 1);
ll.printList(); // Output: 1, 4, 2, 3

ll.removeAt(2);
ll.printList(); // Output: 1, 4, 3


/*

Let's analyze the time and space complexity of the provided linked list implementation:

Time Complexity:
Insertion at the Beginning (insertFirst):
========================================
Time Complexity: O(1)
Explanation: Inserting a node at the beginning involves creating a new node and updating the next reference of the new node to point to the current head. 
This operation takes constant time.

Insertion at the End (insertLast):
==================================
Time Complexity: O(n)
Explanation: Inserting a node at the end requires traversing the entire list to find the last node. 
This operation takes linear time with respect to the number of nodes in the list.

Insertion at a Specific Index (insertAt):
========================================
Time Complexity: O(n)
Explanation: In the worst case, when inserting at a specific index, you may need to traverse the entire list to reach the desired index. 
This operation takes linear time.

Deletion at a Specific Index (removeAt):
========================================
Time Complexity: O(n)
Explanation: Similar to insertion at a specific index, deletion at a specific index may require traversing the list to reach the desired index.
This operation takes linear time.

Accessing an Element at a Specific Index (getAt):
================================================
Time Complexity: O(n)
Explanation: Accessing an element at a specific index involves traversing the list until the desired index is reached. 
In the worst case, this operation takes linear time.

Printing the List (printList):
=============================
Time Complexity: O(n)
Explanation: Printing the entire list requires traversing each node in the list, so it also takes linear time.

Space Complexity:
Node Creation:
=============
Space Complexity: O(1) per node
Explanation: Each node in the linked list consumes a constant amount of space.
Overall Space Complexity:
=========================
Space Complexity: O(n)
Explanation: The overall space complexity is determined by the number of nodes in the linked list. 
In the worst case, you have n nodes, and each node requires constant space.
In summary, the time complexity for various operations is generally O(n), where n is the number of nodes in the linked list.
 The space complexity is O(n) due to the storage of each node.

*/
 
  