const menuSectionsContainer = document.querySelector('.menu-sections')
const url = '../dataBase/menuSection.json'

const getMenuSections = async(url,callback) =>{
    const request = await fetch(url)
    const data = await request.json()
    callback(data)
}

const changeMenuSectionsUI = (data) =>{
    const menuSectionsContainer = document.querySelector(".menu-sections")
    console.log(menuSectionsContainer)
    data.forEach(element => {
        menuSectionsContainer.innerHTML +=`
        <a href="${element.url}" class="menu-sections__section section-menu">
        <div class="section-menu__body">
            <div class="section-menu__label">${element.label}</div>
        </div>
     </a>
        `
    });

    const sectionMenu = document.querySelectorAll(".section-menu")
    sectionMenu.forEach(element =>{
        element.addEventListener('click',()=>{
            
        })
    })
}

getMenuSections(url,changeMenuSectionsUI)



    

