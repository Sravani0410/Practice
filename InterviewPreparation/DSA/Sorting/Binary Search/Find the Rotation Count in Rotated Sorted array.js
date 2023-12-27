
// Javascript program to find number of rotations in a sorted and rotated array. 

// Returns count of rotations for an array which is first sorted in ascending order, then rotated 

// 	function countRotations(arr, n) 
// 	{ 
// 		// We basically find index of minimum  element 
// 		let min = arr[0], min_index = 0 
// 		for (let i = 0; i < n; i++) 
// 		{ 
// 			if (min > arr[i]) 
// 			{ 
// 				min = arr[i]; 
// 				min_index = i; 
// 			} 
// 		} 
// 		console.log(min_index); 
// 	} 

// // Driver Code 
	
// 	let arr = [15, 18, 2, 3, 6, 12]; 
// 	let n = arr.length; 
	
//     countRotations(arr, n)
    
/*
Time Complexity: O(N) 
Auxiliary Space: O(1)  

*/

// binary search 


// Returns count of rotations for an array which 
// is first sorted in ascending order, then rotated 

//Observation: We have to return index of the smallest element 
function countRotations(arr, n) 
{	 
	let low =0 , high = n-1; 
    console.log("low and high", low , high)
	while(low<=high){ //3<=5 3<=3
		let mid = low + Math.floor((high-low)/2) ; //4 3+(3-3/2)=2
        console.log("mid",mid) //18 3
		let prev = (mid-1 + n) %n , next = (mid+1)%n;//if first element is mid or 
		//last element is mid then simply use modulo so it never goes out of bound. 
        console.log("prev",prev) //15 3
        console.log("next",next)  //1 5
		if(arr[mid]<=arr[prev] && arr[mid]<=arr[next])  //3<=1
			return mid; 
		else if (arr[mid]<=arr[high]) //18<=5  4<=5 ==> 3<=6
			high = mid-1 ;  // 4-1 =3
		else if (arr[mid]>=arr[low]) //18>=0
			low=mid+1; // low =3
	} 
	return 0; 
} 

// Driver code 

let arr = [12, 15, 18, 1, 3, 6]; 
let n = arr.length; 
console.log("length",n)
console.log(countRotations(arr, n)); 
	
// This code is contributed by shinjanpatra. 

