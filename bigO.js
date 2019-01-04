const miniArray = ["cat", "dinosaur", "chicken", "donkey", "zebra", "chick", "steve", "dog", "plataypus", "orangatang", "doggerman"];
const midiArray = ["cat", "dinosaur", "chicken", "donkey", "zebra", "chick", "steve", "dog", "plataypus", "orangatang", "doggerman", "Dole", "Oprah", "Ronaldo", "Lincoln", "Elvis", "Kennedy", "Swift", "Beckham", "Bieber", "Pitt", "Rihanna", "Kardashin", "Monroe", "Jolie", "Jordan"];
const megaArray = ["cat", "dinosaur", "chicken", "donkey", "zebra", "chick", "steve", "dog", "plataypus", "orangatang", "doggerman", "Dole", "Oprah", "Ronaldo", "Lincoln", "Elvis", "Kennedy", "Swift", "Beckham", "Bieber", "Pitt", "Rihanna", "Kardashin", "Monroe", "Jolie", "Jordan", "Pizza", "Biscuit", "Ham", "Lobster", "Hushpuppy","Ribs", "Popcorn", "Masala", "Chips", "Paella", "Rice", "Tacos", "Toast", "Tofu", "Marzipan", "Hummus", "crab", "syrup", "pho", "lasgna", "croissant", "arepas", "kebab", "pierogi", "doughnut", "corn", "ice cream", "laksa", "hamburger", "sushi", "chocolate", "pizza", "curry"];
const searchTerm = "rice";

function findMatch(arr, str){
  //with using Array.prototype.filter
  return arr.filter(ele => {
    if(str.toLowerCase() === ele.toLowerCase()){
      return ele;
    }
  })
}

console.time('timing findMatch function using Array.prototype.filter');
console.log(findMatchON(megaArray , searchTerm));
console.timeEnd('timing findMatch function using Array.prototype.filter');

function findMatchONs(arr, str) {
  //with ONsquared Notation
  var index = 0, position = 0, passers = [];
  while (position < str.length) {
    while (index < arr.length) {
      const i = passers.indexOf(arr[index]);
      if (arr[index].charAt(position).toLowerCase() !== str.charAt(position).toLowerCase()){
        if(i >= 0) passers.splice(i, 1); 
      } else {
        if(i < 0 && str.length === arr[index].length) passers.push(arr[index]); 
      }
      index++;
    }
    index = 0;
    position++;
  }
  return passers[0];
}

console.time('timing findMatchONs function');
console.log(findMatchONs(megaArray, searchTerm));
console.timeEnd('timing findMatchONs function');

function findMatchON(arr, str){
  for(var i=0; i<arr.length; i++){
    if(arr[i] === str){
      return arr[i];
    }
  }
}

console.time('timing findMatchON function');
console.log(findMatchON(megaArray, searchTerm));
console.timeEnd('timing findMatchON function');

function findMatchRecursion(arr, str, position){
  //with using Olog(N);
  if(positon === str.length || arr.length === 1) return arr[0];
  var newArr = [];
  for(var i = 0; i< arr.length; i++){
    if(arr[index].charAt(position).toLowerCase() === str.charAt(position).toLowerCase() && str.length === arr[index].length){
      newArr.push(arr[index]);
    }
  }
  return findMatchRecursion(newArr, str, position + 1);
}

console.time('timing findMatchRecursion function');
console.log(findMatchON(megaArray, searchTerm));
console.timeEnd('timing findMatchRecursion function');