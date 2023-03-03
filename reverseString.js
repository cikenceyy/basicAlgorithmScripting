// Reverse the entered word
// Girilen kelimeyi tersine dönüştürme

function reverseString(word) {

    let characterOfWord = word.split("")
    let reverseWord = characterOfWord.reverse()
    console.log(reverseWord)

}

reverseString("Hello")