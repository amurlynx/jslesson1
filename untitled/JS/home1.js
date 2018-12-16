let Money = prompt("Ваш бюджет?", "30");
var Name_Shop = prompt("Название вашего магазина?", "Магазин");

mainList  = {
    Money_Month : Money,
    Shop : Name_Shop,
    shopGood : [],
    employers : {},
    Open : true
};

for (let i =0; i<3; i++) {
    mainList.shopGood[i] = prompt("Какой тип товаров будем продавать?","Велосепеды");
}

for (let i =0; i<3; i++) {
    console.log(mainList.shopGood[i]);
};

alert(Money/30);
let hard="33721";
let res =0;
console.log(Math.pow(hard,3));
hard = [].slice.call(hard);
console.log(hard);
hard.forEach(function(i){
    res = res*(typeof (i))
    }

);
console.log(res);
