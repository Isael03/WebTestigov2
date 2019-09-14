import firebase from "firebase/app";
import db  from '../Config/database';



class Controller {

    static getAllFiles(){
        try {
            let connection = db.ref('/Archivos')

            connection.once('value', (snapshot)=>{               
                    let list=snapshot.val()
                    //res.json(Object.values(list));
                    return Object.values(list)
          })  
        } catch (error) {
            console.log(error)
        }   
        
    }
    static getOnlyFile(idUrl){
        try {
            const id = parseInt(idUrl)
            let connection = db.ref('/Archivos')

            //Actualizar Visto a true  
            connection.orderByChild("id").equalTo(id)
            .once('child_added', (snapshot)=>{
                if (snapshot.val().Visto === false){
                     let report = connection.child(snapshot.key);
                    report.update({
                        "Visto": true
                    }, (error)=>{
                        console.log(error)
                    }
                    );
                }
            })

            //Enviar datos como array
            connection.orderByChild("id").equalTo(id)
        .once('value', (snapshot)=>{
            let list=snapshot.val() 
            //res.json(Object.values(list));
            return Object.values(list)
          })  
          //connection.off();
        } catch (error) {
            console.log(error)
        }    
    }

    static updateReport(idUrl){
        try {
            const id = parseInt(idUrl)
            let connection = db.ref('/Archivos')

            connection.orderByChild("id").equalTo(id)
        .once('child_added', (snapshot)=>{

            let report = connection.child(snapshot.key);
                report.update({
                    "Reportado": !snapshot.val().Reportado
                }, (error)=>{
                    console.log(error)
                }
                );
          })  

        } catch (error) {
            console.log(error)
        }    
    }

    static async onLogin (institution, rut, password){

        const submit= ()=>{
            console.log('hola')
        let connection= db.ref(`Institucion/${institution}`)
         connection.once("value").then(snapshot => {
          if((snapshot.child(rut).exists()) && (snapshot.child(rut+"/Contrasena").val()).toString() === password){
            console.log('es true')
             return true
          }else{
            console.log('es false')
             return false
          }
        }).catch(err=>{
            console.log(err);
             return false
        });      
        }
       await submit()
    }

    static disconnetBD(){
        let connection = db.ref('/Archivos')
        connection.off(); 
    }

}
export default Controller 

