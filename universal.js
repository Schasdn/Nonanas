if(window.location.href.match("[pP]izza(.||\s)[hH]awaii")){
    console.log("LOL")
    window.open("https://nonanas.schasdn.de","_self")
}
else{
    document.addEventListener('scroll', function(){
    const list = document.getElementsByTagName('li');
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
}