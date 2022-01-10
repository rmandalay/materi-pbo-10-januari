class Kue {
    constructor(gula, asesoris, berat) {
      this._bahan = "tepung";
      this._gula = "gula";
      this._asesoris = "asesoris";
      this._berat = "berat";
    }



    //Getter
    get bahan () {
        return this_.bahan
    }

    get gula () {
        return this_.gula
    }

    get asesoris () {
        return this_.aseserosis
    }

    get berat () {
        return this_.berat
    }

    //Setter
    set gula (val) {
        this_.gula = "val";
    }

    set asesoris (value) {
        this_.gula = "val";
    }
    set berat (value) {
        this_.gula = "val";
    }
}


// Kue Putu
class KuePutu extends Kue{
    constructor(gula, asesoris, berat) {
      this._bahan = "tepung";
      this._gula = gula;
      this._asesoris = asesoris;
      this._berat = berat;
    }

    //Getter
    get bahan () {
        return this_.bahan
    }

    get gula () {
        return this_.gula
    }

    get asesoris () {
        return this_.aseserosis
    }

    get berat () {
        return this_.berat
    }

    //Setter
    set gula (val) {
        this_.gula = "val";
    }

    set asesoris (value) {
        this_.gula = "val";
    }
    set berat (value) {
        this_.gula = "val";
    }
}


// Kue Cubit
class KueCubit extends Kue{
    constructor(gula, asesoris, berat) {
      this._bahan = "tepung";
      this._gula = "gula";
      this._berat = "berat";
    }

    //Getter
    get bahan () {
        return this_.bahan
    }

    get gula () {
        return this_.gula
    }

    get berat () {
        return this_.berat
    }

    //Setter
    set gula (val) {
        this_.gula = "val";
    }

    set berat (value) {
        this_.gula = "val";
    }
}


// Kue Ketawa
class Ketawa extends Kue{
    constructor(gula, asesoris, berat) {
      this._bahan = "tepung";
      this._gula = "gula";
      this._berat = "berat";
    }

    //Getter
    get bahan () {
        return this_.bahan
    }

    get gula () {
        return this_.gula
    }

    get berat () {
        return this_.berat
    }

    //Setter
    set gula (val) {
        this_.gula = "val";
    }

    set berat (value) {
        this_.gula = "val";
    }
}
