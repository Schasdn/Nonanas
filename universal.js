if(window.location.href.includes("lieferando") || window.location.href.includes("dominos") || window.location.href.includes("call-a-pizza")|| window.location.href.includes("papajohns") || window.location.href.includes("world-of-pizza") || window.location.href.includes("freddy-fresh")){
    console.log("Return");

}
else{
    if(window.location.href.match("[pP]izza(.||\s)[hH]awaii")){
        console.log("Wihwuh Pizza Hawaii in URL endeckt")
        if(!window.location.href.includes("google")){ //<----- Some kind of Gay shit
            window.open("https://nonanas.schasdn.de","_self")
        }
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

        var body = document.getElementsByTagName('body');
        var innerHTML = body[0].innerHTML;
        if(innerHTML.includes("Pizza Hawaii")){
            body[0].innerHTML =  body[0].innerHTML.replaceAll("Pizza Hawaii", "[REDACTED]");
        }
    }
}