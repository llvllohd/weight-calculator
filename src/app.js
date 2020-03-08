const kg = document.querySelector('#kg');
const ounce = document.querySelector('#ounce');
const pound = document.querySelector('#pound');

kg.addEventListener("keyup",function(e){
    ounce.value = e.target.value * 35.274;
    pound.value = e.target.value * 2.20462;
});

ounce.addEventListener("keyup",function(e){
    kg.value = e.target.value * 1000;
    pound.value = e.target.value * 2.20462;
});

pound.addEventListener("keyup",function(e){
    kg.value = e.target.value * 1000;
    ounce.value = e.target.value * 35.274;
});


// const a = document.querySelectorAll("#app input");

// for(let i=0;i<a.length;i++){
//     a[i].addEventListener("keyup",function(e){
//         console.log(e.target.value);
//         // kg.value="";
//         // ounce.value="";
//         // pound.value="";
//         kg.value = e.target.value * 1000;
//         ounce.value = e.target.value * 35.274;
//         pound.value = e.target.value * 2.20462;
//     });
// }
