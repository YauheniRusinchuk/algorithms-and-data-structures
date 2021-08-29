const arr = [1,4,3,15,6,7,38,9,10];


const search = (list = arr, item = 6) => {
  for(let i in list) {
    if(list[i] === item) return i; 
  }
  return null;
}

console.log(search());