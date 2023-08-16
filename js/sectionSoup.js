const url = "../dataBase/menuitems/soup.json"

const getMenuItems = async(url,callback) =>{
    const request = await fetch(url)
    const data = await request.json()
    callback(data)
}

const changePageBreakfast = (data) =>{
    console.log(data)
    const itemsContainer = document.querySelector('.section-items__container')
    
    data.forEach(element => {
        itemsContainer.innerHTML += `
        <div class=" section-items__item" style="width: 18rem;">
                        <img src="../img/mainpage/menuSection/Section-items/breakfast/menuItem.jpeg" class="card-img-top section-items__img" alt="...">
                         <div class=" section-items__body">
                             <h5 class=" section-items__title">${element.title}</h5>
                     <p class=" section-items__description">${element.description}</p>
                </div>
        </div>
        `
    });
  
}

getMenuItems(url,changePageBreakfast)


