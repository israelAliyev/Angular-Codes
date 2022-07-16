const sayi1:number = 2
const sayi2:number = 34.3 // Todo: data type primitve types


const array1:number[] = [2,4,4] // Todo: arrays types
const array2:string[] = ["sfdsf" , "sdfds"]
const array3:any[] = ["sfdsf" , "sdfds" , 24 ,true , 234.324]


enum Renk {Kirmizi = 1 , Yesil , Mavi} // Todo: enums
const deger:Renk = Renk.Kirmizi


/*
null - for reference types
undefined - it is not assigned
void - function return */

const deger1:void = undefined
let deger2 // Todo: undefined

function ok(isim : string):void{  // Todo: void function

    console.log(isim);
    
}


const obj : {
    name: string
    age: number
} = {
    name:"israil",
    age:34
}

