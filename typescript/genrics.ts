function gen_func<T>(x:T): T{
    
    return x;
}

const deger1 = gen_func<number>(2);
const deger2 = gen_func<string>("dsfds");


class Gen_class<T>{
    degisken:T;

    funksiya(param:T):T{

        return param;
    }
}