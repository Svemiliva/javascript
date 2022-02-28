let day= 'Nedelja';
if(day==='Ponedeljak'){
    console.log('Pripremam projekat');
} else if(day=== "Utorak"){
    console.log("razradjujem projekat");
} else if(day=== "Sreda" || day=== "Cetvrtak"){
    console.log('predajem izvestaj');
} else if(day=== "Petak"){
    console.log("ocenjujem projekat");
} else if(day=== "Subota" || day=== "Nedelja"){
    console.log('vikend je!');
}else {
    console.log('nepravilan unos');
}