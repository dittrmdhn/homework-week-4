const generateRandomArray = () => {
  const randomNumbers = [];
  for (let i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

const separateArray = (randomNumbers) => {
  const evenNumbers = [];
  const oddNumbers = [];
  randomNumbers.forEach((number, index) => {
    if (index % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  });
  return { evenNumbers, oddNumbers };
};

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
  const totalEven = totalEvenNumbers(numbers);
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
  const totalOdd = totalOddNumbers(numbers);
  const averageOdd = totalOdd / numbers.length;
  return averageOdd;
};

const findMinCategory = () => {
  const minEven = minEvenNumbers(result.evenNumbers);
  const minOdd = minOddNumbers(result.oddNumbers);

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
    minCategory = "Genap dan Ganjil";
  }
  return `Min terbesar ada pada array ${minCategory} yaitu ${minGreater}`;
};

const findMaxCategory = () => {
  const maxEven = maxEvenNumbers(result.evenNumbers);
  const maxOdd = maxEvenNumbers(result.oddNumbers);

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

const findGreaterTotal = () => {
  const averageEven = totalEvenNumbers(result.evenNumbers);
  const averageOdd = totalOddNumbers(result.oddNumbers);

  let totalGreater;
  let totalCategory;
  if (averageEven > averageOdd) {
    totalGreater = averageEven;
    totalCategory = "Genap";
  } else if (averageEven < averageOdd) {
    totalGreater = averageOdd;
    totalCategory = "Ganjil";
  } else {
    totalGreater = averageEven;
    totalCategory = "Genap dan Ganjil";
  }
  return `Total terbesar ada pada array ${totalCategory} yaitu ${totalGreater}`;
};

const findGreaterAverage = () => {
  const averageEven = averageEvenNumbers(result.evenNumbers);
  const averageOdd = averageOddNumbers(result.oddNumbers);

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
  const sameValue = result.evenNumbers.filter((evenNumbers) =>
    result.oddNumbers.includes(evenNumbers)
  );
  const uniqueSameValue = [...new Set(sameValue)];

  return uniqueSameValue.length > 0
    ? `Ada nilai yang sama antara genap dan ganjil: ${uniqueSameValue.join(
        ", "
      )}`
    : "Tidak ada nilai yang sama antara genap dan ganjil";
};

const randomArray = generateRandomArray();
const result = separateArray(randomArray);

// Menampilkan hasil
console.log("Bilangan acak:", randomArray);
console.log("Array genap:", result.evenNumbers);
console.log("Array ganjil:", result.oddNumbers);
console.log("==========Array Genap==========");
console.log("Min:", minEvenNumbers(result.evenNumbers));
console.log("Max:", maxEvenNumbers(result.evenNumbers));
console.log("Total:", totalEvenNumbers(result.evenNumbers));
console.log("Rata-rata:", averageEvenNumbers(result.evenNumbers));
console.log("==========Array Ganjil==========");
console.log("Min:", minOddNumbers(result.oddNumbers));
console.log("Max:", maxOddNumbers(result.oddNumbers));
console.log("Total:", totalOddNumbers(result.oddNumbers));
console.log("Rata-rata:", averageOddNumbers(result.oddNumbers));
console.log("==========Perbandingan=========");
console.log(findMinCategory());
console.log(findMaxCategory());
console.log(findSameValues());
console.log(findGreaterTotal());
console.log(findGreaterAverage());
