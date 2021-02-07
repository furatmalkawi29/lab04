
var name = prompt ('Whats Your Name?', 'Customer');
document.write('<h1> You are </h1>' + name)

var doghnutN = prompt ('Welcome ' + name + ', How Many Doughnuts Do You Want? (Max:5)', '1');
if (doghnutN >= 5 )
{ 
    alert('TOO MANY DOUGHNUTS!!');

} else 
{    
    var price = 2 * doghnutN;
document.write('<h1> Total price is </h1>' + price + ' Jd <br> <br>')
}

