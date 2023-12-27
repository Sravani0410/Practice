
	// JavaScript program to sort linked list in wave form
	// A linked list node
	class Node {
		constructor() {
		this.data = 0;
		this.next = null;
		}
	}

	// Function to add a node at the
	// beginning of Linked List
	function push(head_ref, new_data) {
		// Allocate node
		var new_node = new Node();

		// Put in the data
		new_node.data = new_data;

		// Link the old list of the new node
		new_node.next = head_ref;

		// Move the head to point to the new node
		head_ref = new_node;
		return head_ref;
	}

	// Function get size of the list
	function listSize(node) {
		var c = 0;

		while (node != null) {
		c++;
		node = node.next;
		}
		return c;
	}

	// Function to print the list
	function printList(node) {
		while (node != null) {
		console.log("output",node.data);
		node = node.next;
		}
	}

	// Function to sort linked list in
	// wave form
	function sortInWave(head) {
		var current = head;
		var prev = null;

		// Variable to track even position
		var i = 0;

		// Size of list
		var n = listSize(head);

		// Traverse all even positioned nodes
		while (i < n) {
		if (i % 2 == 0) {
			// If current even element is
			// smaller than previous
			if (i > 0 && prev.data > current.data) {
			var t = prev.data;
			prev.data = current.data;
			current.data = t;
			}

			// If current even element is
			// smaller than next
			if (i < n - 1 && current.data < current.next.data) {
			var t = current.next.data;
			current.next.data = current.data;
			current.data = t;
			}
		}
		i++;

		prev = current;
		current = current.next;
		}
		return head;
	}

	// Driver Code
	var start = null;

	// The constructed linked list is:
	// 10, 90, 49, 2, 1, 5, 23 --> 1,2,5,10,23,49,90   -> 2,1,10,5,49,90,23
	start = push(start, 23);
	start = push(start, 5);
	start = push(start, 1);
	start = push(start, 2);
	start = push(start, 49);
	start = push(start, 90);
	start = push(start, 10);

	start = sortInWave(start);

	printList(start);
	
