var db = firebase.firestore();
var ponerAqui = document.getElementById('receta1');
/*var receta1 = document.getElementById('receta1');
var recRef = db.ref('Cenas');

recRef.once('value').then(function(snap){
    receta1.innerText = snap.val()
})

var getReceta1 =  () => db.collection('Cenas').get();
var bdReceta = document.getElementsById("Cenas");*/


    db.collection("Cenas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            ponerAqui.innerHTML= `${doc.data().Nombre}`
            ponerAqui.innerHTML= `${doc.data().Ingrediente}`
            /*console.log(`${doc.id} => ${doc.data()}`);*/
        });
    });
