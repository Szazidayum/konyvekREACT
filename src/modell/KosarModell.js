
class KosarModell{

    #kosar= []
    constructor(kosar){
        this.#kosar=kosar;
    }

    azonos(adat){
        let azonosElem = this.#kosar.findIndex((elem)=>{
            return elem.id == adat.id;
        });
        if(azonosElem>=0){
            // console.log(azonosElem);
            this.#kosar[azonosElem].db++;
        }else{
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length - 1].db=1;
        }
    }   

    //törlés
    torol(){
        
    }
    // adatKosarba(adat){
    //     this.#kosar.push(adat);
    // }

    getKosar(){
        return this.#kosar;
    }
}

export default KosarModell;