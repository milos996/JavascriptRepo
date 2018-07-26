class Osoba {

    constructor(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
}

class Doktor extends Osoba {

    constructor(ime, prezime, spec) {
        super(ime, prezime);
        this.specijalnost = spec;
        this.pacijenti = [];
        this.pregledi = [];
        Utility.log(`Kreiran doktor: ${this.ime} ${this.prezime}`);
    }

    dodajPacijenta(pacijent) {
        this.pacijenti.push(pacijent);
    }

    zakaziPregled(pacijent, pregled) {
        this.pregledi.push(pregled);
        pacijent.zakaziPregled(pregled);
    }
}

class Pacijent extends Osoba {

    constructor(ime, prezime, jmbg, brojKartona) {
        super(ime, prezime);
        this.jmbg = jmbg;
        this.zdrav = brojKartona;
        this.pregledi = [];
        this.doktor = null;
        Utility.log(`Kreiran pacijent: ${this.ime} ${this.prezime}`);
    }

    zakaziPregled(pregled) {
        this.pregledi.push(pregled);
    }

    dodajDoktora(doktor) {
        this.doktor = doktor;
        Utility.log(`Dodan doktor: ${this.doktor.ime}  , pacijent: ${this.ime} ${this.prezime}`);
   }

    obaviPregled(tip) {
        const pregled = this.pregledi.find(pregled => pregled.tip === tip);
        pregled.obaviPregled(this);
    }
}

class Pregled {

  constructor(tip, datum) {
      this.tip = tip;
      this.datum = datum;
  }

  obaviPregled(pacijent) {
      const result = pacijent.pregledi.filter(pregled => pregled != this);
      pacijent.pregledi = result;
      this.vrijednost = Math.floor(Math.random() * Math.floor(150));
      this.vrijeme = Math.floor(Math.random() * Math.floor(23)) + 1;
      Utility.log(`Obavljanje laboratorijskog pregleda: ${this.tip} / Vrijednost: ${this.vrijednost}, Vrijeme: ${this.vrijeme}`);
  }
}

class KrvniPregled extends Pregled {

    constructor(datum) {
        super("krvni pritisak", datum);
    }

    obaviPregled(pacijent) {
        const result = pacijent.pregledi.filter(pregled => pregled != this);
        pacijent.pregledi = result;
        this.gornjaV = Math.floor(Math.random() * Math.floor(50)) + 50;
        this.donjaV = Math.floor(Math.random() * Math.floor(50));
        this.puls = Math.floor(Math.random() * Math.floor(50));
        Utility.log(`Obavljanje laboratorijskog pregleda: ${this.tip}/ Gornja vrijednost: ${this.gornjaV}, donja vrijednost: ${this.donjaV}, puls : ${this.puls}`);
    }
}

class Utility{

    static getDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
        let curMinute = today.getMinutes();
        const date = `${dd}.${mm}.${year} ${curHour}:${curMinute}`;

        return date;
    }

    static log(output) {
        const date = Utility.getDate();
        console.log(`[${date}] ${output}`);
    }
}


//Test
let doktor = new Doktor('Milan', 'Milanovic', 'hirurg');
let  pacijent = new Pacijent('Dragan', 'Ivanovic', '1241250821500', '0001');
pacijent.dodajDoktora(doktor);
doktor.zakaziPregled(pacijent, new Pregled('nivo secera', '3.10.2018 14:25'));
doktor.zakaziPregled(pacijent, new KrvniPregled('3.10.2018 14:25'));
pacijent.obaviPregled('krvni pritisak');
pacijent.obaviPregled('nivo secera');
