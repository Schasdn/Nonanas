if(window.location.href.includes("lieferando") || window.location.href.includes("dominos") || window.location.href.includes("call-a-pizza")|| window.location.href.includes("papajohns") || window.location.href.includes("world-of-pizza") || window.location.href.includes("freddy-fresh")){
    console.log("Return");

}
else{
    if(window.location.href.match("[pP][iI][zZ][zZ][aA](.||\s)[hH][aA][wW][aA][iI][iI]")){
        console.log("Wihwuh Pizza Hawaii in URL endeckt")
        if(!window.location.href.includes("google")){
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
                if (name.includes("Pizza Hawaii") || name.includes("[REDACTED]")){
                    item.remove();
                    console.log("Saved");
                }
            }
        });

        var body = document.getElementsByTagName('body');
        var bodylist = body[0].getElementsByTagName("*");

        for(let u = 0; u < bodylist.length; u++){
            console.log(u);
            
            if(bodylist[u].innerText != null && bodylist[u].innerHTML != null){

                if(bodylist[u].innerText.match("([pP][iI][zZ][zZ][aA](.||\s)[hH][aA][wW]([aA]|[eE])[iI]+|[hH][aA][wW]([aA]|[eE])[iI]+(.||\s)[pP][iI][zZ][zZ][aA])") && !bodylist[u].innerHTML.includes("<")){
                    console.log("lit")
                    //console.log(bodylist[u]);
                    //console.log(bodylist[u].innerText);
                    bodylist[u].innerText = bodylist[u].innerText.replaceAll(/([pP][iI][zZ][zZ][aA](.||\s)[hH][aA][wW]([aA]|[eE])[iI]+|[hH][aA][wW]([aA]|[eE])[iI]+(.||\s)[pP][iI][zZ][zZ][aA])/g, "[REDACTED]");
                    
                    //bodylist[u].innerText = bodylist[u].innerText.replaceAll("PIZZA HAWAII", "[REDACTED]");                    
                }
        }
        }

    }
}