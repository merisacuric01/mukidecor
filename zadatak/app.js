class Osoba {
    constructor(ime, prezime, godine) {
      this.__ime = ime;
      this.__prezime = prezime;
      this.__godine = godine;
    }
  
    get ime() {
      return this.__ime;
    }
  
    get prezime() {
      return this.__prezime;
    }
  
    get godine() {
      return this.__godine;
    }
  }
  
  class Radnik extends Osoba {
    constructor(ime, prezime, godine, plata) {
      super(ime, prezime, godine);
      this.__plata = plata;
    }
  
    get plata() {
      return this.__plata;
    }
  
    set plata(novaPlata) {
      this.__plata = novaPlata;
    }
  }
  
  class Menadzer extends Osoba {
    constructor(ime, prezime, godine, nadleznosti, plata) {
      super(ime, prezime, godine);
      this.__nadleznosti = nadleznosti;
      this.__plata = plata;
    }
  
    get nadleznosti() {
      return this.__nadleznosti;
    }
  
    set nadleznosti(noveNadleznosti) {
      this.__nadleznosti = noveNadleznosti;
    }
  
    get plata() {
      return this.__plata;
    }
  
    set plata(novaPlata) {
      this.__plata = novaPlata;
    }
  }
  