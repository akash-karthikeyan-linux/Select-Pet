let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

let petSelect = document.getElementById("petSelect");
let petImg = document.getElementById("petImg");

function petImgFun(event) {
    if (event.target.value === "dog") {
        petImg.src = petsImageUrls.dog;
    } else if (event.target.value === "cat") {
        petImg.src = petsImageUrls.cat;
    } else if (event.target.value === "parrot") {
        petImg.src = petsImageUrls.parrot;
    } else if (event.target.value === "spider") {
        petImg.src = petsImageUrls.spider;
    } else if (event.target.value === "rabbit") {
        petImg.src = petsImageUrls.rabbit;
    }
}

petSelect.addEventListener("change", petImgFun);