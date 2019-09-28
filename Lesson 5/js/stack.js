/*const stack = [];

const push = function (item) { // custom functional goes here
  const preperedItem = {
    id: Math.random(),
    value: item
  };

  stack.push(preperedItem);
  return '-PUSHED-'
}

const pop = function () { // custom functional goes here
  const removedItem = stack.pop();

  return removedItem.value;
}

console.log("Initial Stack:", stack)

console.log(push({ name: 'Eva' }))
console.log(push({ name: 'Bob' }))
console.log(push({ name: 'John' }))


console.log("Pushed in Stack:", stack)

console.log(pop())

console.log("Poped from Stack:", stack)


// New implementation of the stack must be wrapped in a function, others must not have access to stack directly.

/* Bad :( if someone can delete all data

stack.length = 0;
console.log("Drop Stack:", stack)

*/
