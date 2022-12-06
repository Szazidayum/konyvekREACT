
class KonyvModell{
    constructor(){
    }

    adatTorol(konyvek, id) {
        console.log("TÖRÖLTEM: " + id);
        console.log(konyvek);
        konyvek.splice(id,1);
        console.log(konyvek);
        // konyvek += "/" + id;
        // console.log(konyvek);
        // fetch(konyvek,  {
        //     method: "DELETE",
        // })
        //     .then()
        //     .then(() => {
        //         console.log("sikeres törlés");
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });
    }
}

export default KonyvModell;
