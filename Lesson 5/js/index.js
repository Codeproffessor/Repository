//Task 1
/*
function FirstFactorial(num) {
  return (num != 1) ? num * FirstFactorial(num - 1) : 1;
}
console.log(( FirstFactorial(9) ));
*/

//Task 2
/*
var array1 = new Array("17","10","25","7","34","52");
var array2 = new Array("10","52", "77", "16");

for (var i = 0; i<array2.length; i++) {
    var arrlength = array1.length;
    for (var j = 0; j<arrlength; j++) {
        if (array2[i] == array1[j]) {
            array1 = array1.slice(0, j).concat(array1.slice(j + 1, arrlength).concat(array2.slice(i + 1, arrlength)));
        }
    }
}
console.log(array1);
*/


/*****************Task3*******************/

//Task4
var stack = [];
stack.push(2);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(3);


var i = stack.pop();
alert(i);

var host = [];
host.push(2);
host.push(5);
host.push(5);
host.push(5);
host.push(5);


var i = host.shift();
alert(i);

if(stack[i] == host[i]){
  alert("Item is already exist in stack")
}
