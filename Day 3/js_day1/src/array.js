var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Concat, adding two arrays to one
var all = boys.concat(girls);
console.log(all);

//Join seperated by commas
console.log(all.join(','));

//Join seperated by - 
console.log(all.join('-'));

//Adding to front
all.push('Lone', 'Gitte');
console.log(all);

//Adding to end
all.unshift('Hans', 'Kurt');
console.log(all);

//Removing first
all.shift();
console.log(all);

//Removing last
all.pop();
console.log(all);

//Removing 2 elements at index 3
all.splice(3, 2);
console.log(all);

//Reverse
var reverse = all.reverse();
console.log('reversed: ', reverse);

//Sort
var sorted = reverse.sort();
console.log('sorted: ', sorted);

//Uppercase
var uc = all.map(n => n.toUpperCase());
console.log(uc);

//All with l or L
let allWithlorL = all.filter(all => all.includes("L")|| all.includes("l"));
console.log(allWithlorL);




