document.addEventListener('scroll', function(){
    const list = document.getElementsByTagName('div');
    for(let i = 0; i < list.length; i++)
    { 
        const item = list[i];
        const data_testid = item.getAttribute("data-testid");
        if (data_testid == "menu-scene.pizza.Product.PWAI"){
            item.remove();
            console.log("Saved");
        }
    }
});