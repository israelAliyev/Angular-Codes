var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(oda, kat, pencere) {
        this._oda = oda;
        this._kat = kat;
        this._pencere = pencere;
    }
    Ev.prototype.show = function () {
        console.log("Ben evdeyim");
    };
    return Ev;
}());
var ev = new Ev(2, 3, 4);
ev.show();
console.log(ev._kat);
// Todo: Inheritance
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("kaydedildi");
    };
    return Kisi;
}());
var Doktor = /** @class */ (function (_super) {
    __extends(Doktor, _super);
    function Doktor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doktor.prototype.al = function () {
        console.log("alindi");
    };
    // Todo: Kapsullme , Encapsulation
    Doktor.prototype.get_isim = function () {
        return this.isim;
    };
    Doktor.prototype.set_isim = function (isim) {
        this.isim = isim;
    };
    return Doktor;
}(Kisi));
var Ogretmen = /** @class */ (function (_super) {
    __extends(Ogretmen, _super);
    function Ogretmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ogretmen.prototype.ogret = function () {
        console.log("ogretdi");
    };
    return Ogretmen;
}(Kisi));
var doktor_obj = new Doktor();
doktor_obj.al();
doktor_obj.kaydet();
