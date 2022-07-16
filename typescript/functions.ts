

const topla1 = (a:number , b:string):void => {
console.log(b+a);
}

const topla2 = (d:number , e:number):number => {
return d + e;
}

console.log(topla2);

const prints = (object1:object):object => {

    return object1;
}

// rest parametreler
function gelin(ilk_kisi:string , ...digerleri:string[]):string{

    const people = ilk_kisi + " " + digerleri.join(" ")

    return people;
}

console.log(gelin("Israil" , "Fezail" , "Hakan" , "OGuzhan"));


