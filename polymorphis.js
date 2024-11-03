// fungsi mengubah implementasi method yang diturunkan dari SuperClass
/* Constructor adalah method khusus yang dipanggil ketika instance class dibuat. 
Misalnya, ketika membuat instance class dengan keyword new, constructor akan terpanggil. */
//const android = new Android(); // constructor di class Android akan dipanggil.

// overriding = mengubah dan menambahkan property dari superclass
// class SmartPhones {
//   constructor(color, brand, model) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//   }

//   charging() {
//     console.log(`Charging ${this.model}`);
//   }
// }

// class Android extends SmartPhones {
//   constructor(color, brand, model, device) {
//     super(color, brand, model);
//     this.device = device;
//   }

//   splitScreen() {
//     console.log("Android have a Split Screen");
//   }
// }

// const android = new Android("white", "B", "Galaxy S21", "smart TV");

// Overriding Method
// mengubah method charging yang diturunkan dari SuperClass di SubClass Android
class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("white", "B", "Galaxy S21", "smart TV");

android.charging();

/**
 * Output:
 * Charging Galaxy S21
 * Charging Galaxy S21 with fast charger
 */
