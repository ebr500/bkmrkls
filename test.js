var sku = document.querySelectorAll('div.lineItemCardInfo__sku span');
var username = document.querySelectorAll('a.PSEUDOLINK');
var phone = document.querySelector('div.phone button').innerHTML;
var prices = document.querySelectorAll('div.data-item div.value');

var elements = document.querySelectorAll('div.address button');
const address = []
for ( var i = 0; i < elements.length; ++i )
    address.push( elements[i].innerHTML );

if (address.length == 6) { var adj = 1; var add2 = null; }
if (address.length == 7) { var adj = 0; var add2 = address[2]; }

var country = address[6-adj]
if (address[6-adj] == "United States") { var country = "US"; }
if (address[6-adj] == "Canada") { var country = "CA"; }
if (address[6-adj] == "Australia") { var country = "AU"; }
if (address[6-adj] == "Belgium") { var country = "BE"; }
if (address[6-adj] == "Great Britain") { var country = "GB"; }
if (address[6-adj] == "United Kingdom") { var country = "GB"; }
if (address[6-adj] == "France") { var country = "FR"; }
if (address[6-adj] == "Israel") { var country = "IL"; }
if (address[6-adj] == "Italy") { var country = "IT"; }
if (address[6-adj] == "Mexico") { var country = "MX"; }
if (address[6-adj] == "New Zealand") { var country = "NZ"; }
if (address[6-adj] == "South Africa") { var country = "ZA"; }
if (address[6-adj] == "Spain") { var country = "ES"; }

const orderline = [username[0].innerHTML,address[0],null,sku[1].innerHTML,,,,,,,,,,,,,,,,prices[0].innerHTML,prices[1].innerHTML,,address[1],add2,address[3-adj],address[4-adj],address[5-adj],country,,phone]


console.log(country);
console.log(orderline.join("\t"));
console.log(orderline);
navigator.clipboard.writeText(orderline.join("\t"));null;
