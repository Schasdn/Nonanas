document.addEventListener('scroll', function(){
    const list = document.getElementsByTagName('div');
    for(let i = 0; i < list.length; i++)
    {
        const item = list[i];
        const data_testid = item.getAttribute("class");
        if(data_testid != null){
            //console.log(data_testid);
            if(data_testid.includes("span article-container"))
            {
                const inner = item.innerHTML;
                if(inner != null){
                    if(inner.includes("Hawaii"))
                    {
                        item.remove();
                        console.log("Saved");
                    }
                }
            }
        }
    }
});