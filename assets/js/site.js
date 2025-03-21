// write cool JS hwere!!
let mainImage = document.getElementById('mainImage') // henter store billede

let smallImageOne = document.getElementById('imgOne') // henter lille billede
let smallImageTwo = document.getElementById('imgTwo')
let smallImageThree = document.getElementById('imgThree')
let smallImageFour = document.getElementById('imgFour')





smallImageOne.addEventListener('click', function (event) { // event er en parameter

    let bigImageUrl = mainImage.src // fidne url til store billede
    let smallImageUrl = smallImageOne.src // find url til lille billede


    mainImage.src = smallImageUrl // skift store billede til lille billede
    smallImageOne.src = bigImageUrl  // skift lille billede til store billede

})


smallImageTwo.addEventListener('click', function (event) { // event er en parameter

    let bigImageUrl = mainImage.src  // find url til store billede
    let smallImageUrl = smallImageTwo.src  // find url til lille billede


    mainImage.src = smallImageUrl  // skift store billede til lille billede
    smallImageTwo.src = bigImageUrl  // skift lille billede til store billede

})

smallImageThree.addEventListener('click', function (event) { // event er en parameter

    let bigImageUrl = mainImage.src  // find url til store billede
    let smallImageUrl = smallImageThree.src  // find url til lille billede


    mainImage.src = smallImageUrl  // skift store billede til lille billede
    smallImageThree.src = bigImageUrl  // skift lille billede til store billede

})

smallImageFour.addEventListener('click', function (event) {  // event er en parameter

    let bigImageUrl = mainImage.src  // find url til store billede
    let smallImageUrl = smallImageFour.src  // find url til lille billede


    mainImage.src = smallImageUrl  // skift store billede til lille billede
    smallImageFour.src = bigImageUrl  // skift lille billede til store billede

})