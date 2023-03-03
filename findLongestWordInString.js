// The function that finds the word with the most letters in the meat.
// Metindeki en çok harfe sahip kelimeyi bulan fonksiyon.

function findLongestWordInString(sentence) {

    const splitText = sentence.split(" ")
    console.log("Words: ", splitText)

    const numericArray = []
    for (let x = 0; x < splitText.length; x++) {
        numericArray.push(splitText[x].length)
    }

    console.log("characters of words number: ", numericArray)
    let largestNumber = numericArray[0]

    for (let y = 0; y < numericArray.length; y++) {
        if (numericArray[y] > largestNumber) {
            largestNumber = numericArray[y]
        }
    }
    return largestNumber

}

let sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

console.log(findLongestWordInString(sentence))
