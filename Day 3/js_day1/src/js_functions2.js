//Filter, map and forEach
let name = ["Lars", "Jan", "Bo", "Frederik"];

let namesof3 = name.filter(n => n.length <= 3);
console.log(namesof3);

namesof3.forEach(console.log);
name.forEach(console.log);

//Uppercase
var uc = name.map(n => n.toUpperCase());
console.log(uc);


//Html
let html = function(){
    return name.map(n => n ), "<ul><li>" +name.join("</li><li>") + "</li></ul>"; 
    } 
console.log(html());



//Cars 
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let carsNewer = cars.filter(n => n.year > 1999);
console.log(carsNewer);

let allVolvo = cars.filter(n => n.make === "Volvo");
console.log(allVolvo);

let below5000 = cars.filter(n => n.price < 5000);
console.log(below5000);

//Sql
let sql = function(){
    return cars.map(c => "INSERT INTO cars (id,year,make,model,price) VALUES (" + [c.id, c.year, c.make, c.model,c.price] + ")", cars.join(",")); 
}

console.log(sql());

