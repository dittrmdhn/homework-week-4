// Membuat array dengan 100 bilangan acak antara 1 dan 100
const randomNumbers = [];
let evenCount = 0;
let oddCount = 0;

while (evenCount < 5 || oddCount < 5) {
  const randomNumber = Math.floor(Math.random() * 20) + 1;

  if (randomNumber % 2 === 0 && evenCount < 5) {
    randomNumbers.push(randomNumber);
    evenCount++;
  } else if (randomNumber % 2 !== 0 && oddCount < 5) {
    randomNumbers.push(randomNumber);
    oddCount++;
  }
}

const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < randomNumbers.length; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(randomNumbers[i]);
  } else {
    oddNumbers.push(randomNumbers[i]);
  }
}

const minEvenNumbers = (numbers) => {
  let minEven = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < minEven) {
      minEven = numbers[i];
    }
  }
  return minEven;
};

const maxEvenNumbers = (numbers) => {
  let maxEven = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxEven) {
      maxEven = numbers[i];
    }
  }
  return maxEven;
};

const totalEvenNumbers = (numbers) => {
  let totalEven = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalEven += numbers[i];
  }
  return totalEven;
};

const averageEvenNumbers = (numbers) => {
  const averageEven = totalEven / numbers.length;
  return averageEven;
};

const minOddNumbers = (numbers) => {
  let minOdd = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < minOdd) {
      minOdd = numbers[i];
    }
  }
  return minOdd;
};

const maxOddNumbers = (numbers) => {
  let maxOdd = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxOdd) {
      maxOdd = numbers[i];
    }
  }
  return maxOdd;
};

const totalOddNumbers = (numbers) => {
  let totalOdd = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalOdd += numbers[i];
  }
  return totalOdd;
};

const averageOddNumbers = (numbers) => {
  const averageOdd = totalOdd / numbers.length;
  return averageOdd;
};

const findMinCategory = () => {
  const minEven = minEvenNumbers(evenNumbers);
  const minOdd = minOddNumbers(oddNumbers);

  let minGreater;
  let minCategory;
  if (minEven > minOdd) {
    minGreater = minEven;
    minCategory = "Genap";
  } else if (minEven < minOdd) {
    minGreater = minOdd;
    minCategory = "Ganjil";
  } else {
    minGreater = minEven;
    maxCategory = "Genap dan Ganjil";
  }
  return `Min terbesar ada pada array ${minCategory} yaitu ${minGreater}`;
};

const findMaxCategory = () => {
  const maxEven = maxEvenNumbers(evenNumbers);
  const maxOdd = minEvenNumbers(oddNumbers);

  let maxGreater;
  let maxCategory;
  if (maxEven > maxOdd) {
    maxGreater = maxEven;
    maxCategory = "Genap";
  } else if (maxEven < maxOdd) {
    maxGreater = maxOdd;
    maxCategory = "Ganjil";
  } else {
    maxGreater = maxEven;
    maxCategory = "Genap dan Ganjil";
  }
  return `Max terbesar ada pada array ${maxCategory} yaitu ${maxGreater}`;
};

const findGreaterAverage = () => {
  const averageEven = totalEvenNumbers(evenNumbers) / evenNumbers.length;
  const averageOdd = totalOddNumbers(oddNumbers) / oddNumbers.length;

  let averageGreater;
  let averageCategory;
  if (averageEven > averageOdd) {
    averageGreater = averageEven;
    averageCategory = "Genap";
  } else if (averageEven < averageOdd) {
    averageGreater = averageOdd;
    averageCategory = "Ganjil";
  } else {
    averageGreater = averageEven;
    averageCategory = "Genap dan Ganjil";
  }
  return `Rata-rata terbesar ada pada array ${averageCategory} yaitu ${averageGreater}`;
};

const findSameValues = () => {
  const sameValue = evenNumbers.filter((evenNumbers) =>
    oddNumbers.includes(evenNumbers)
  );
  const uniqueSameValue = [...new Set(sameValue)];

  return uniqueSameValue.length > 0
    ? `Ada nilai yang sama antara genap dan ganjil: ${uniqueSameValue.join(
        ", "
      )}`
    : "Tidak ada nilai yang sama antara genap dan ganjil";
};

const minEvenNumb = minEvenNumbers(evenNumbers);
const maxEvenNumb = maxEvenNumbers(evenNumbers);
const totalEven = totalEvenNumbers(evenNumbers);
const averageEvenNumb = averageEvenNumbers(evenNumbers);
const minOddNumb = minOddNumbers(oddNumbers);
const maxOddNumb = maxOddNumbers(oddNumbers);
const totalOdd = totalOddNumbers(oddNumbers);
const averageOddNumb = averageOddNumbers(oddNumbers);

// Menampilkan hasil
console.log("Bilangan acak:", randomNumbers);
console.log("Array genap:", evenNumbers);
console.log("Array ganjil:", oddNumbers);
console.log("==========Array Genap==========");
console.log("Min:", minEvenNumb);
console.log("Max:", maxEvenNumb);
console.log("Total:", totalEven);
console.log("Rata-rata:", averageEvenNumb);
console.log("==========Array Ganjil==========");
console.log("Min:", minOddNumb);
console.log("Max:", maxOddNumb);
console.log("Total:", totalOdd);
console.log("Rata-rata:", averageOddNumb);
console.log("==========Perbandingan=========");
console.log(findMinCategory());
console.log(findMaxCategory());
console.log(findSameValues());
console.log(findGreaterAverage());
