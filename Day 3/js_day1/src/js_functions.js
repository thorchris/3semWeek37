function add(n1, n2){
    return n1 + n2;
}

var sub = function(n1, n2){
    return n1 - n2;
}

var mul = function(n1, n2){
    return n1 * n2; 
}

var divide = function(n1, n2){
    return n1 / n2;
}

var cb = function(n1,n2, callback){
    try{
    typeof n1 === "number"; //Will fail if n1 is undefined, or is not a number
    typeof n2 === "number"; //Will fail if n2 is undefined, or is not a number
    typeof callback === "function" //Will fail if callback is undefined or is not a function
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch(err) {
        //DEN PRINTER OGSÅ UNDEFINED HVIS VI NÅR HER TIL 
        console.log("Pis, det gik dårligt"); 
    }
};

//1
console.log(add(1,2));
//2
console.log(add);
//3
console.log(add(1,2,3));
//4
console.log(add(1));
//5 
console.log(cb(3,3,add));
//6
console.log(cb(4,3,sub));
//7
console.log(cb(3,3,add()));
//8
console.log(cb(3,"hh",add));
//9
console.log(cb(3,3, mul));
//10
console.log(cb(3,3,divide));



//Asynchronous Callbacks
var msgPrinter = function(msg, delay){
    setTimeout(function(){
        console.log(msg);
    }, delay);
};

console.log("aaaa");
msgPrinter("bbbb", 2000);
console.log("dddddd");
msgPrinter("eeeeeeee", 1000);
console.log("ffffffff");
