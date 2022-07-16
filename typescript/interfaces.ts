interface Product{
    id:number;
    name:string;
    used:boolean;
    price:number;
}

// Todo: interface lerde field sayisi kadar zorunluargument vermelisin ama bu class oldugun da zorunlu degil

function setProduct(product:Product) {
    console.log(product.name + " kaydedildi");
    
}

setProduct({id:1, name:"isi", used:false, price:2342});

interface PersonService{
   save();
}

class CustomerService implements PersonService {
    save() {
        console.log("sdfsfsd");
        
    }
    
}

