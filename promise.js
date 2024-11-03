// Cara penggunaan callbaack
// doSomething((doSomethingError, doSomethingData) => {
//     if (doSomethingError) {
//       console.log(doSomethingData);
//     }

//     console.log(doSomethingData);
//   });

// disederhanakan promise
function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
/* hen adalah method khusus milik objek Promise. Ia yang akan menangani atau menerima hasil dari proses asinkron. 
Method ini menerima dua buah callback, yaitu callback untuk menangani keberhasilan (fulfilled) 
dan callback untuk menangani kegagalan (rejected). */
// utils.mjs
function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log("Melakukan sesuatu sebelum Promise diselesaikan.");

    // Penentuan hasil dari proses asinkron
    const number = Math.random();

    // Nilai fulfillment dari Promise
    if (number > 0.5) {
      resolve("You did it!");
    }

    // Nilai rejection dari Promise
    else {
      reject(new Error("Sorry, something went wrong!"));
    }
  }, 2000);
}

function doSomething() {
  return new Promise(promiseExecutor);
}
/* Function doSomething akan membuat dan mengembalikan nilai objek Promise. Ini ditandai dengan keyword new dan diikuti dengan objek Promise. 
Oleh karena itu, proses asinkron dimulai. Constructor Promise menerima satu buah callback dengan dua buah argumen. Kita namai argumen pertama adalah resolve dan argumen kedua adalah reject. */
// main.mjs
import { doSomething } from "./utils.mjs";

function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);

// kasus pemesanan coffee
// coffee.mjs
export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(
      `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
    );

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal dibuatkan."));
        return;
      }

      console.log("Pramusaji selesai membuat kopi.");
      resolve(name);
    }, estimationTime);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 1000;
    let isSuccess = false;

    console.log("Pramusaji sedang mengantarkan kopi pesanan");

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.1) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal diantarkan."));
        return;
      }

      console.log("Pramusaji sudah sampai ke meja.");
      resolve(name);
    }, estimationTime);
  });
}

// main.mjs
import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  );
