// ENG: The number entered in the entered array; It is placed in the range.
// TR: Girilen diziye girilen numarayı; Aralığa yerleştirir.
function getIndexToInt(arr, num) {

    let newArr = [...arr, num]
    const resultArr = newArr.sort((a, b) => a - b)

    let numIndex = resultArr.indexOf(num)

    console.log("Girdi: ", arr)
    console.log("Girilen değerin indexi: ", numIndex)
    console.log("Çıktı: ", resultArr)

}

getIndexToInt([0, 4, 7, 1, 5, 9, 10], 6)