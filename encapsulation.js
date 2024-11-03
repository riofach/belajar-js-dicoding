// Properti dan method
// class CoffeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this.temperature = 90;
//   }

//   makeCoffe() {
//     console.log("Membuat kopi dengan suhu", this.temperature);
//   }
// }

// const coffee = new CoffeMachine(100);
// coffee.temperature = 60;

// coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60
/* program diatas belum ada encapsulation sehingga temperature bisa dirubah rubah itu tidak baik */

// Getter terdiri dari method get. get adalah cara untuk mendapatkan nilai dari property
// setter terdiri dari method set. set adalah method untuk menetapkan nilai property
class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90; // underscore dimaksud tidak bisa berubah nilainya
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this._temperature;
  }
}

const coffee = new CoffeeMachine(10);
console.log("Sebelum diubah: ", coffee.temperature); // Sebelum diubah:  90
coffee.temperature = 100; // you are not allowed to change the temperature
console.log("Setelah diubah: ", coffee.temperature); // Setelah diubah:  90

/* code dibawah untuk bener bener tidak bisa dirubah */
class CoffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
