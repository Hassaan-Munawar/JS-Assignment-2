var item1 =prompt("Name of item 1")
var item2 =prompt("Name of item 2")
var priceitem1 =+prompt("Enter price of item 1")
var priceitem2 =+prompt("Enter price of item 2")
var orderitem1 =+prompt("Enter ordered quantity of item 1")
var orderitem2 =+prompt("Enter ordered quantity of item 2")
var shipcharges =+prompt("Enter shipping charges")
var totalitem1 =orderitem1*priceitem1
var totalitem2 =orderitem2*priceitem2
var totalCost =totalitem1 + totalitem2 + shipcharges
var discount =550
var afterdiscount =totalCost-discount
document.write(`<h1>Shopping Cart</h1> Price of ${item1} is ${priceitem1}<br>Quantity of ${item1} is ${orderitem1}<br> Price of ${item2} is ${priceitem2}<br>Quantity of ${item2} is ${orderitem2}<br><br>Shipping Charges ${shipcharges}<br><br>Total cost of your order is ${totalCost}PKR <br>`)
if(totalCost>=2000){
    document.write("Discounted price is"+afterdiscount+"PKR")
}
else{
 document.write("..")
}