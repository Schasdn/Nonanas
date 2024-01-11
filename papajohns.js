document.addEventListener('scroll', function(){
    const list = document.getElementsByTagName('div');
    for(let i = 0; i < list.length; i++)
    { 
        const item = list[i];
        const data_testid = item.getAttribute("class");
        if (data_testid.includes ("span article-container"))
        {
            var inner = data_testid.innerHTML;
            if (inner.includes ("Hawaii"))
            {
                item.remove();
            console.log("Saved");
            }
            
        }
    }
});