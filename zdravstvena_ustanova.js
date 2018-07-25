class Osoba {

    constructor(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }

    logovanje() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
        let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+'] kreirana osoba ' + this.ime + ' ' + this.prezime);

    }
}

class Doktor extends Osoba {

    constructor(ime, prezime, spec) {
        super(ime, prezime);
        this.specijalnost = spec;
        this.pacijenti = [];
        this.pregledi = [];
        this.logovanje();
    }

    dodajPacijenta(pacijent) {

        this.pacijenti.push(pacijent);
    }

    zakaziPregled(pacijentCurr, tip, vrijeme) {

        let pregledOne = {

            datum : vrijeme,
            tipPregleda : tip,
        };

        this.pregledi.push(pregledOne);
        pacijentCurr.zakazanPregled(pregledOne);
    }

    logovanje() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
	      let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+'] kreiran doktor ' + this.ime + ' ' + this.prezime);

    }

}

class Pacijent extends Osoba {

    constructor(ime, prezime, jmbg, brZdrav) {
        super(ime, prezime);
        this.jmbg = jmbg;
        this.zdrav = brZdrav;
        this.pregledi = [];

        this.logovanje();
    }

    zakazanPregled(pregled) {

        this.pregledi.push(pregled);
    }

    dodajDoktora(doktor) {

        this.doktor = doktor;
        this.logDodanDoktor(doktor);
   }

    obaviPregled(tip) {

        this.pregledi.map(preg => {
            if(preg.tipPregleda.ime == tip) {
                preg.tipPregleda.obaviPregled(this);
            }
        })
    }


    logDodanDoktor() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
        let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+'] dodan doktor ' + this.doktor.ime + ', pacijent :' + this.ime + ' ' + this.prezime );
    }

    logovanje() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
	      let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+'] kreiran pacijent ' + this.ime + ' ' + this.prezime);

    }

}

class Pregled {

    constructor(ime) {

        this.ime = ime;
    }

    obaviPregled() {

        console.log("Obavljanje pregleda");
    }

    log() {

        console.log("Logovanje");
    }
}

class KrvniPregled extends Pregled {

    constructor(ime) {
        super(ime);
    }

    obaviPregled(pacijent) {

        let index = -1;
        for(let i = 0; i < pacijent.pregledi.length; i++) {

            if(pacijent.pregledi.tipPregleda == this) {
                index = i;
            }
        }

        pacijent.pregledi.splice(index, 1);
        //Ovdje moze neka rand funkcija ili neko tacno mjerenje
        this.gornjaV = 100;
        this.donjaV = 10;
        this.puls = 90;

        this.log();
    }

    log() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
        let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+']' + 'Krvni pregled / gornja vrijednost : ' + this.gornjaV + ', donja vrijednost :' + this.donjaV + ', puls :' + this.puls + '\n');
    }
}

class NivoSecera extends Pregled {

    constructor(ime) {
        super(ime);
    }

    obaviPregled(pacijent) {

        let index = -1;
        for(let i = 0; i < pacijent.pregledi.length; i++) {

            if(pacijent.pregledi.tipPregleda == this) {
                index = i;
            }
        }

        pacijent.pregledi.splice(index, 1);
        //Ovdje moze neka rand funkcija ili neko tacno mjerenje
        this.vrijednost = 4;
        this.vrijeme = '19:00';

        this.log();
    }

    log() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
        let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+']' + 'Nivo secera u krvi / vrijednost : ' + this.vrijednost + ', vrijeme poslednjeg obroka :' + this.vrijeme + '\n');
    }
}

class NivoHolesterola extends Pregled {

    constructor(ime) {
        super(ime);
    }

    obaviPregled(pacijent) {

        let index = -1;
        for(let i = 0; i < pacijent.pregledi.length; i++) {

            if(pacijent.pregledi.tipPregleda == this) {
                index = i;
            }
        }

        pacijent.pregledi.splice(index, 1);
        //Ovdje moze neka rand funkcija ili neko tacno mjerenje
        this.vrijednost = 4;
        this.vrijeme = '19:00';

        this.log();
    }

    log() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let year = today.getFullYear();
        let curHour = today.getHours();
        let curMinute = today.getMinutes();

        let date = dd + '.' + mm + '.' + year + ' ' + curHour + ':' + curMinute;
        console.log('['+date+']' + 'Nivo holesterola u krvi / vrijednost : ' + this.vrijednost + ', vrijeme poslednjeg obroka :' + this.vrijeme + '\n');
    }
}

//Test
let doktor = new Doktor('Milan', 'Milanovic', 'hirurg');
let  pacijent = new Pacijent('Dragan', 'Ivanovic', '1241250821500', '0001');
pacijent.dodajDoktora(doktor);
doktor.zakaziPregled(pacijent, new NivoSecera('nivo secera'), ' 3.10.2018 14:25');
doktor.zakaziPregled(pacijent, new KrvniPregled('krvni pritisak'), ' 3.10.2018 14:25');
pacijent.obaviPregled('krvni pritisak');
pacijent.obaviPregled('nivo secera');
