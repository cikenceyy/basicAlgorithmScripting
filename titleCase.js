// ENG: We capitalize the first letter of each word of the entered text and it we make the other letters of the word lowercase
// TR: Girilen metnin her bir kelimesinin ilk harfini büyük yapıyoruz ve o kelimenin diğer harfleri küçük yapıyoruz


function titleCase(text) {

    // Filtrelenmiş elemanları myResultARR isimli dizimize aktarıyoruz
    let myResultArr = []

    // Girilen string ifadeyi boşuklari le ayırarak, kelimelere bölüyoruz.
    const myStrArr = text.split(" ")

    // Her bir kelimenin içinde geziniyoruz.
    for (let i = 0; i < myStrArr.length; i++) {

        // Kelimelerin ilk harfini büyük, geri kalanını küçük yapıyoruz
        const item = myStrArr[i].charAt(0).toUpperCase() + myStrArr[i].slice(1).toLowerCase()

        // myResultArr isimli dizimize her bir kelimeyi aktarıyoruz.
        myResultArr.push(item)
    }

    // Dizimizdeki her bir elemanı boşluklari le birileştirip anlamlı string ifadeyi resulta aktarıyoruz.
    const result = myResultArr.join(" ")

    console.log("Girdi: ", str)
    console.log("Çıktı: ", result)
    return result
}

titleCase(" feNalarDasın KarDeSim YıL ikiBinOnİki FaCeBooK by: AsİStyle :))")
