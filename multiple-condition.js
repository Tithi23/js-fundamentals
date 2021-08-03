var gotJob = false;
var moneySaved = 50000;
var hasFlat = true;
var hasHome = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('biye korbo.');
// }
// else {
//     console.log('amra biye korbo na.');
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('biye korbo.');
// }
// else {
//     console.log('amra biye korbo na.');
// }
// if (gotJob == true || moneySaved > 200000) {
//     console.log('biye korbo.');
// }
// else {
//     console.log('amra biye korbo na.');
// }
if ((gotJob == true && moneySaved > 200000) || hasHome == true) {
    console.log('biye korbo.');
}
else {
    console.log('amra biye korbo na.');
}