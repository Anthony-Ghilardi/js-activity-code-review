let uniqueMeats = ['Steak', 'Beef', 'Chicken', 'Wagyu', 'Salmon', 'Lobster']
let vegetables = ['Corn', 'Rice', 'Spinach', 'Carrot']
let desserts = ['Cookie', 'Brownie', 'Pazookie', 'Icecream', 'Froyo']

console.log(uniqueMeats)
console.log(vegetables)
console.log(desserts)

console.log(uniqueMeats.pop()) //how to pop from an array lobster will console log separate, while removing it from the og array
console.log(vegetables.pop()) // carrot is "popped" from the array logging it separately, while removing it from the og array

let dessert = ('Pazookie')
let mondayMenu = (uniqueMeats.concat(vegetables, dessert))

console.log(mondayMenu)