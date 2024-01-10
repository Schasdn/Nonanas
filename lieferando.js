//ausführen des Scripts beim Scrollen
document.addEventListener('scroll', function(){
    //erstellen einer Liste aller li Elemente
    const list = document.getElementsByTagName('li');
    //durchgehen von jeden Elemets der Liste und überprüfen ob sich der String "Pizza Hawaii" innerhalb dieses Elements befindet.
    //Falls der String gefunden wurde wird das Element gelöscht. 
    for(let i = 0; i < list.length; i++)
    { 
        const item = list[i];
        const name = item.innerHTML;
        if (name.includes("Pizza Hawaii")){
            item.remove();
            console.log("Saved");
        }
    }
});