var sayi1 = 2;
var sayi2 = 34.3; // Todo: data type primitve types
var array1 = [2, 4, 4]; // Todo: arrays types
var array2 = ["sfdsf", "sdfds"];
var array3 = ["sfdsf", "sdfds", 24, true, 234.324];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Yesil"] = 2] = "Yesil";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {})); // Todo: enums
var deger = Renk.Kirmizi;
/*
null - for reference types
undefined - it is not assigned
void - function return */
var deger1 = undefined;
var deger2; // Todo: undefined
function ok(isim) {
    console.log(isim);
}
//sfds
