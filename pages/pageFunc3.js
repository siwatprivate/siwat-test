import React, { Fragment, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



export default function pageFunc3() {

	var arr = [1, 2, 3, 4, 2, 19, 100, 99, 20];

	let myArray = [[], [1], [1, 2, 3],
	[1, 1],
	[1, 2, 3, 4, 5, 6],
	[1, 5, 3, 2, 5, 10],
	[100, 5, 3, 2, 99],
	[35, 5, 3, 2, 5, 100],
	[1, 5, 101, 2, 5, 10],
	[10, 10, 9]]

	for (var i = 0; i < myArray.length; i++) {
		var arr = myArray[i];
		for (var j = 0; j < arr.length; j++) {
			let first_largest = []
			let second_largest = []		
			function large(arr) {
				if (arr.length == 0)
					return null;

				if (arr.length == 1) {
					second_largest = arr[1]
				}

				if (arr[0] > arr[1]) {
					first_largest = arr[0];
					second_largest = arr[1];
				} else {
					first_largest = arr[1];
					second_largest = arr[0];
				}

				for (var i = 2; i < arr.length; i++) {
					if (arr[i] > first_largest) {
						second_largest = first_largest;
						first_largest = arr[i];
						continue;
					}

					if (arr[i] > second_largest) {
						second_largest = arr[i];
					}
				}

				return (second_largest);
			}
			console.log("large(arr)",large(arr));
		}
	}


// 	Test case

// [] // null
// [1] // 1
// [1,2,3] // 2
// [1,1] // 1
// [1,2,3,4,5,6] // 5
// [1,5,3,2,5,10] // 5
// [100,5,3,2,99] // 99
// [35,5,3,2,5,100] // 35
// [1,5,101,2,5,10] // 10
// [10,10,9] // 9


	return (
		<Fragment>
			<Typography>pageFunc3</Typography>
			{/* <Typography>Function: {this.large(arr)}</Typography> */}
		</Fragment >
	);
}