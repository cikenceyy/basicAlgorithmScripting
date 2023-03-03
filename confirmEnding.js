console.log("confirm The Ending .js")

function confirmEnding(text, end) {

    let startSplit = text.length - end.length
    let endValue = text.substring(startSplit)
    //subString verilen number değerden sonraki kısımı alır. 1,3 arasında gibi bir değerde verilebilir.

    if (endValue === end) {
        console.log("True")
    }
    else {
        console.log("False")
    }


}

confirmEnding("Mozilla", "lla")