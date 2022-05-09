const ftoc = function(fahr) {
  let cels = (fahr-32)*5/9;
  let roundedcels = Math.round(cels * 10) / 10;
  return roundedcels;
};

const ctof = function(cels) {
  let fahr = cels * 9 / 5 + 32;
  let roundedfahr = Math.round(fahr * 10) / 10;
  return roundedfahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
