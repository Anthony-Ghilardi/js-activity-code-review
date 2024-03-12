// meats array
let meats = [];
meats.push("Chicken");
meats.push("Prime Rib");
meats.push("Porterhouse");
meats.push("New York Sirloin");
meats.push("Rib Eye");
meats.push("Lamb Chops");

// vegetables array
let vegetables = [];
vegetables.push("Greens");
vegetables.push("Broccoli");
vegetables.push("Asparagus");
vegetables.push("Spinach");

// desserts array
let desserts = [];
desserts.push("Apple Pie")
desserts.push("Pecan Pie")
desserts.push("Carrot Cake")
desserts.push("Chocolate Cake")
desserts.push("Peanut Butter Cake")

// remove last element from meats array (lamb chops)
meats.pop();

// remove last element from vegetables array (spinach)
vegetables.pop();

// assign a desert
let dessert = desserts[3];

// combine the arrays (the actual solution used a var instead of let ask about this)
let mondayMenu = meats.concat(vegetables);

// add dessert to the mondayMenu
mondayMenu.push(dessert); //"chocolate cake";

//Outputs the menu
console.log("Mondays Menu: " + mondayMenu); 