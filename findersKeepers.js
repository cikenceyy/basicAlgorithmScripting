/* Bir fonksiyon oluşturduk. Bu fonskiyon 2 adet değer alıyor; Array ve fonksiyon. 
Aldığı dizinin her bir elemanını aldığı fonksiyondan süzgeçliyor ve çıkan sonucu trueValueArr aktarıyor.
Senin verdiğin değerleri senin verdiğin fonksiyondan geçiren Bir Fonksiyon.
*/

function findElement(arr, func) {

    let trueValueArr = []

    for (let i = 0; i < arr.length; i++) {

        let result = func(arr[i])
        if (result) {
            trueValueArr.push(result)
        }
    }

    return trueValueArr

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
