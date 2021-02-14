// linear search

const linear_search = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i 
        }
    }
    return -1
}

// console.log(linear_search([1,2,3,4,5], 3));

// binary search

const binary_search = (arr, value) => {
    let min = 0;
    let max = arr.length - 1;
    let mid;

    while (max >= min) {
        mid = Math.trunc((max + min) / 2);

        if (arr[mid] === value) {
            return mid;
        }
        else if (arr[mid] > value) {
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }
    }
    return -1
}

// console.log(binary_search([1,2,3,4,5], 2))

// binary search with recursion

const recursive_binary_search = (arr, min, max, value) => {
    while (max >= min) {
        let mid = Math.trunc((max + min) / 2);

        if (arr[mid] === value) {
            return mid;
        }
        else if (arr[mid] > value) {
            return recursive_binary_search(arr, min, mid - 1, value);
        }
        else {
            return recursive_binary_search(arr, mid + 1, max, value);
        }
    }
    return -1
}

// const array = [2,4,7,9,12,21,25]
// console.log(recursive_binary_search(array, 0, array.length - 1,  12));

// jump search 

const jump_search = (arr, value) => {

	let len = arr.length
	let step = Math.floor(Math.sqrt(len));
	let start = 0, currentStep = step;

	while (arr[Math.min(currentStep, len) - 1] < value) {
		start = currentStep;
		currentStep += step;

		if (start >= len)
			return -1;
	}

	while (arr[start] < value)
	{
		start++;
		if (start == Math.min(currentStep, len))
			return -1;
	}

	if (arr[start] == value)
		return start
	else
		return -1;
}

console.log(jump_search([1,4,5,8,9,12,15,16,19], 15))