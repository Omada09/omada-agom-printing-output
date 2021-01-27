//var a, b, c;

let a = 3;
let b = 5;
let c;

let output = "";
output += "let a = 3;";
output += "\n";
output += "let b = 5;";
output += "\n";
output += "let c;";
output += "\n";
output += "______________";

output += "\n";
output += "a + b = " + (a + b);
output += "\n";
output += "a - b = " + (a - b);
output += "\n";
output += "a * b = " + (a * b);
output += "\n";
output += "a / b = " + (a / b);
output += "\n";
output += "a % b = " + (a % b);

output += "\n";
output += "(a += b): " + (a += b);
output += "\n";
output += "(a -= b): " + (a -= b);
output += "\n";
output += "(a *= b): " + (a *= b);
output += "\n";
output += "(a /= b): " + (a /= b);
output += "\n";
output += "(a %= b): " + (a %= b);

output += "\n";
output += "(a == b): " + (a == b);
output += "\n";
output += "(a != b): " + (a != b);
output += "\n";
output += "(a > b): " + (a > b);
output += "\n";
output += "(a < b): " + (a < b);
output += "\n";
output += "(!a && !c): " + (!a && !c);
output += "\n";
output += "(!a || !c): " + (!a || !c);
output += "\n";

alert(output);



let first_name = "Omada";
let last_name = "Agom";
let email = "Agom0001@algonquinlive.com";

/*output += "\n";
output += `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
output += "\n";*/

output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
output += "\n";

alert(output);

