const nilai1 = Number(prompt("Masukan Nilai Pertama: "));
const operator = prompt("Masukan Operator: ");
const nilai2 = Number(prompt("Masukan Nilai Kedua: "));

let result;

if (Number.isNaN(nilai1) || Number.isNaN(nilai2)) { 
  console.log("Heee masukin angka bos");
  return;
}

if (operator === "+") {
  result = nilai1 + nilai2;
} else if (operator === "-") {
  result = nilai1 - nilai2;
} else if (operator === "x") {
  result = nilai1 * nilai2;
} else if (operator === "/") {
  if (nilai2 === 0) {
    result = "Tidak bisa dibagi oleh 0";
  } else {
    result = nilai1 / nilai2;
  }
}

console.log("Hasinya Adalah: " + result);
