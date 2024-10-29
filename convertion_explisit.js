// Menggunakan function biar bisa declare variable sama

//convertion fungsi String() dan method .toString()
function convertionString() {
  const number = 123;
  const boolean = true;

  const strNumber = String(number);
  const strBoolean = boolean.toString();

  console.log(strNumber); // output: "123"
  console.log(strBoolean); // output: "true"
}

// convertion fungsi Number()
function convertionNumber() {
  const strNumber = "123";
  const strFloat = "3.14";
  const boolean = true;

  const numFromString = Number(strNumber);
  const floatFromString = Number(strFloat);
  const numFromBoolean = Number(boolean);

  console.log(numFromString); // output: 123
  console.log(floatFromString); // output: 3.14
  console.log(numFromBoolean); // output: 1
}

// convertion fungsi parseInt() dan parseFloat()
function convertionInt() {
  const cm = "20cm";
  const px = "64px";

  const intFromCM = parseInt(cm);
  const intFromPX = parseInt(px);

  console.log(intFromCM); // output: 20
  console.log(intFromPX); // output: 64

  const cm2 = "20.55cm";
  const px2 = "64.23px";

  const floatFromCM = parseFloat(cm2);
  const floatFromPX = parseFloat(px2);

  console.log(floatFromCM); // output: 20.55
  console.log(floatFromPX); // output: 64.23
}

// convertion fungsi boolean()
function convertionBoolean() {
  const number = 123;
  const string = "Dicoding";
  const empty = null;

  const boolFromNumber = Boolean(number);
  const boolFromString = Boolean(string);
  const boolFromNull = Boolean(empty);

  console.log(boolFromNumber); // output: true
  console.log(boolFromString); // output: true
  console.log(boolFromNull); // output: false
}
