class Ev{

private _oda:number;
public _kat:number;
protected _pencere:number;

constructor(oda:number , kat:number , pencere:number){

    this._oda = oda;
    this._kat = kat;
    this._pencere = pencere;
}



public show(){
    console.log("Ben evdeyim");   
}

}

const ev = new Ev(2 ,3 ,4);
ev.show();

console.log(ev._kat);

// Todo: Inheritance

class Kisi{

kaydet(){
    console.log("kaydedildi");
}
}

class Doktor extends Kisi{

    private isim:string;

    al(){
        console.log("alindi");
    }

    // Todo: Kapsullme , Encapsulation

public get_isim():string{
    return this.isim;
}

public set_isim(isim:string){
    this.isim = isim;
}

}

class Ogretmen extends Kisi{

    ogret(){
        console.log("ogretdi");
        
    }
}

const doktor_obj = new Doktor();
doktor_obj.al();
doktor_obj.kaydet();




