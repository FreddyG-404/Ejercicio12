const menuc = document.createElement('ul');

menuc.array.forEach(item => {
    
    const li = document.createElement('li');

    li.innerText = item.name;

    if(item.items.length > 0){
        const subMenu = document.createElement('ul');
        item.items.forEach((subItem) => {
            const subLis = document.createElement('li');
            subLis.innerText = subItem.name;

            if(sibItem.item.length > 0){
                const subsMenu = document.createElement('ul');
                subItem.items.forEach((subsItem) => {
                    const subsLis = document.createElement('li');
                    subsLis.innerText = subsItem.name;
                    subsMenu.appendChild(subsLis);
                });
                subLis.appendChild(subsMenu);
            }
            subMenu.appendChild(subLis);
        });
        li.appendChild(subLis);
    }
    menuc.appendChild(li);
});

const menuT = document.getElementById('menuc');
menuT.appendChild(menuc);