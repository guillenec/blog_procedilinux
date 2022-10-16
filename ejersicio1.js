var x = Number(prompt("ingrese el valor de x : "));
var y = Number(prompt("ingrese el valor de y : "));

/* Test A */
testA_x = (x + x + 1);
testA_y = y - y - x;
document.getElementById("col2_f2").innerHTML = '<p> x = ' + testA_x + '</p>';
document.getElementById("col3_f2").innerHTML = '<p> y = ' + testA_y + '</p>';

/* Test B */
testB_x = (x - y) + 4;
testB_y = 4 + (y + 5);
document.getElementById("col2_f3").innerHTML = '<p> x = ' + testB_x + '</p>';
document.getElementById("col3_f3").innerHTML = '<p> y = ' + testB_y + '</p>';

/* Test C */
testC_x = x * 2 - 4;
testC_y = 4 - y * 2;
document.getElementById("col2_f4").innerHTML = '<p> x = ' + testC_x + '</p>';
document.getElementById("col3_f4").innerHTML = '<p> y = ' + testC_y + '</p>';

/* Test D */
testD_x = (20 - x) / y;
testD_y = x + 2 / y;
document.getElementById("col2_f5").innerHTML = '<p> x = ' + testD_x + '</p>';
document.getElementById("col3_f5").innerHTML = '<p> y = ' + testD_y + '</p>';

/* Test E */
testE_x = ((1 - x) * (y / 8)) * 4 * 0;
testE_y = (x + 3) / x;
document.getElementById("col2_f6").innerHTML = '<p> x = ' + testE_x + '</p>';
document.getElementById("col3_f6").innerHTML = '<p> y = ' + testE_y + '</p>';




