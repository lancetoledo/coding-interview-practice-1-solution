// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Create a function that finds the largest and smallest number in an unsorted array of integers

const arr = [112, 24, 31, 44, 101, 203, 33, 56];

function findMinMax(arr){
  let min = arr[0]
  let max = arr[0]

  for(let i=0; i<arr.length; i++) {
    if(arr[i]<min){
      min = arr[i]
    }
    else if(arr[i]>max){
      max = arr[i]
    }
  }
  return {min, max}
}

console.log(findMinMax(arr))