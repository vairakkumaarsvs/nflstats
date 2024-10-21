function russelwilsonRating() {
    const pass_cmp = 15;
const pass_att = 28;
const pass_yds = 228;
const pass_td = 2;
const pass_int = 0;
const rating = passerRating(pass_cmp, pass_att, pass_yds, pass_td, pass_int);
console.log(`russel wilson passer rating: ${rating}`);
}

function justinFieldsRating() {
    const pass_cmp = 106;
const pass_att = 160;
const pass_yds = 1106;
const pass_td = 5;
const pass_int = 1;
const rating = passerRating(pass_cmp, pass_att, pass_yds, pass_td, pass_int);
console.log(`justin fields passer rating: ${rating}`);
}

function passerRating(pass_cmp, pass_att, pass_yds, pass_td, pass_int) {
let a = ((pass_cmp / pass_att) - 0.3) * 5;
a = (a > 2.375) ? 2.375 : a;
a = (a < 0) ? 0 : a;
let b = ((pass_yds / pass_att) - 3) * .25;
b = (b > 2.375) ? 2.375 : b;
b = (b < 0) ? 0 : b;
let c = (pass_td / pass_att) * 20;
c = (c > 2.375) ? 2.375 : c;
c = (c < 0) ? 0 : c;
let d = 2.375 - ((pass_int / pass_att) * 25);
d = (d > 2.375) ? 2.375 : d;
d = (d < 0) ? 0 : d;
let rating = (a + b + c + d) / 6 * 100;
const output = Math.round(rating * 100, 2) / 100;
console.log(`passer rating: ${output}`);
return output;
}

russelwilsonRating();
justinFieldsRating();
