// We duplicate the entered character string as much as the entered value. Symmetric log output.
// Girilen karakter dizisini girilen değer kadar çoğaltıyoruz. Simetrik log çıktısı oluyor.

function repeatString(str, num) {
    let repeatedString = ""
    for (let i = 0; i < num; i++) {
        repeatedString = repeatedString + str
        console.log(repeatedString)
    }
}
repeatString("X", 6)
