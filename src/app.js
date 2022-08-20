const tab_controller = document.querySelector('.one')
const tab_items = document.querySelectorAll('.tab-item a')
const tab_content = document.querySelector('.tab-content')
const tab_img =  document.querySelector('.tab-img')

let prev = 1;
let current = 1;
let test_item = document.querySelector('.test')
let drops = document.querySelectorAll('.drop')

let clickedDropDownItem = undefined;
let clickedDropDownIcon = undefined;

let nav_btn = document.querySelector('.nav-btn')
let nav_menu = document.querySelector('.nav-menu')
let nav_backdrop = document.querySelector('.nav-backdrop')
let mobile_login = document.querySelector('.mobile-login')

let user_input = document.querySelector('.contact-textbox')
let user_input_cont = document.querySelector('.input-cont')
let contact_btn = document.querySelector('.contact-us-btn')



contact_btn.addEventListener('click',()=>{
    console.log(validateEmail(user_input.value))
    if(validateEmail(user_input.value)){
        user_input_cont.classList.remove('error')
        user_input.classList.remove('error')
    }
    else{
        user_input_cont.classList.add('error')
        user_input.classList.add('error')

    }

})


nav_btn.addEventListener('click',()=>{
    nav_menu.classList.toggle('nav-open')
    nav_menu.classList.toggle('fade-in')
    nav_backdrop.classList.toggle('nav-open')
    mobile_login.classList.toggle('nav-open')
    nav_btn.classList.toggle('nav-open')
})

drops.forEach(drop =>{
    drop.addEventListener('click',()=>{
        clickedDropDownItem = drop.parentElement;
        clickedDropDownIcon = drop.children[1];
       
        if (clickedDropDownItem.classList.contains('close')) {
            clickedDropDownIcon.classList.remove('rotate-down')
            clickedDropDownIcon.classList.add('rotate-up')

            clickedDropDownIcon.style.background = "no-repeat center center/contain url('../../images/icon-red-arrow.svg')"
            clickedDropDownItem.classList.remove('close')
            clickedDropDownItem.classList.add('open')
            }
        else if (clickedDropDownItem.classList.contains('open')) {
            clickedDropDownIcon.classList.add('rotate-down')
            clickedDropDownIcon.classList.remove('rotate-up')

            clickedDropDownIcon.style.background = "no-repeat center center/contain url('../../images/icon-arrow.svg')"
            clickedDropDownItem.classList.remove('open')
            clickedDropDownItem.classList.add('close')
        }
        else{
            clickedDropDownItem.classList.add('open')

            clickedDropDownIcon.style.background = "no-repeat center center/contain url('../../images/icon-red-arrow.svg')"
            clickedDropDownIcon.classList.remove('rotate-down')
            clickedDropDownIcon.classList.add('rotate-up')
        }


    })
})

tab_items.forEach((ele,i)=>{
    
    ele.addEventListener('click',(e)=>{
        let current = i+1;
        // console.log(current)
        e.preventDefault()
        if(prev === current){
           
        }
        else{
            tab_items.forEach(item =>{
                item.parentElement.classList.remove('one')
            })
            tab_controller.classList.remove('one','two','three','three-to-one','three-to-two','two-to-one','two-to-three','one-to-two','one-to-three')
            tab_controller.classList.add('one' , intToClass(prev,current))
            console.log(current)
            tab_items.forEach(item =>{
                console.log(current-1)
                // item.classList.remove('one')
                item.parentElement.classList.remove('mob-selected')
                tab_items[current-1].parentElement.classList.add('mob-selected')
                // updateTabContent(current - 1);
            })
            updateTabContent(current - 1,data);
            prev = current;
        }
       
    })
})

function intToClass(previous,current){
    let str = ''
   switch (previous) {
    case 1:
         str = 'one'
        break;
    case 2:
        str = 'two'
        break;
    case 3:
        str = 'three'
        break;
    default:
        break;
   }

   switch (current) {
    case 1:
         str = `${str}-to-one`
        break;
    case 2:
        str = `${str}-to-two`
        break;
    case 3:
        str = `${str}-to-three`
        break;
    default:
        break;
   }
   return str;
}

function updateTabContent(index,data){
    tab_content.innerHTML = `
    <h3 class="tab-content-heading fade-in">${data[index].title}</h3>
    <p class="tab-content-text fade-in"> 
        ${data[index].content}
    </p>
    <button class="btn tab-btn">More info</button>
    `
   
    
    tab_img.style.background = `no-repeat center center/contain url('${data[index].img}')`
    
    
}

function validateEmail(email) {
    var re = /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+((?:\_[a-zA-Z0-9]+)|(?:\.[a-zA-Z0-9]+))*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-zA-Z]{2,6}(?:\.[a-zA-Z]{2})?)$)/;
    return re.test(email);
}

const data = [
    {
        "title":"Bookmark in one click",
        "content":"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        "img":"../../images/illustration-features-tab-1.svg"
    },
    {
        "title":"Intelligent search",
        "content":"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        "img":"../../images/illustration-features-tab-2.svg"
    },
    {
        "title":"Share your bookmarks",
        "content":"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        "img":"../../images/illustration-features-tab-3.svg"
    }
]

updateTabContent(current - 1,data);