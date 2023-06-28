import {menuArray} from './data.js'
const order = document.getElementById("order")
const newObj = document.getElementById('total-price-section')
const modal = document.getElementById('modal')
const payBtn = document.getElementById('pay-btn')
const lastTitle = document.getElementById('last-div')
const purchaseBtn = document.getElementById('purchase-btn')
let orderArray = []

purchaseBtn.addEventListener('click', (e)=> {
   modal.classList.remove('hidden')
   newObj.classList.add('hidden')
   order.classList.add('hidden')
  })

payBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
  order.classList.add('hidden')
  lastTitle.classList.remove('hidden')
})

document.addEventListener('click', (e) => {
    if(e.target.dataset.add) {
        handleClick(e.target.dataset.add)
        getTotal(orderArray)
    } 
     else if (e.target.dataset.remove){
      orderArray.splice(e.target.dataset.remove, 1)
      order.innerHTML = `<h3 class="order-title">Your order</h3> ${renderOrder(orderArray)}`  
      getTotal(orderArray)  
    } 
     
})

function getTotal(items) {
   let newTotal = items.reduce((acc, item) => {
        return acc + item.price
    }, 0)
    document.getElementById('total').innerHTML = `$${newTotal}.00`
}

function handleClick(dataId) {
  let numId = Number(dataId)
    for (let item of menuArray) {
      if(item.id === numId) {
        orderArray.push(item)
        newObj.classList.remove('hidden')
      }
    }
  order.innerHTML = `<h3 class="order-title">Your order</h3> ${renderOrder(orderArray)}`
 }

function renderOrder(orderArray) {
  let order = ''
    orderArray.forEach((item, index) => {
      order += `
      <div class="order-section">
        <h3 class="name order-name">${item.name}</h3>
        <p data-remove="${index}" class="remove">Remove</p>
        <p class="price">$${item.price}</p>
      </div>
        
      `
    })
    return order
}

function menu() {
   let newMenu = ''
    menuArray.forEach(menu => {
  newMenu += `
    <div class="menu-items">
               <spam class="emoji">${menu.emoji}</spam>
            <div class="names">
               <p class="name">${menu.name}</p>
               <p class="ing">${menu.ingredients.join(', ')}</p>
               <p class="price">$${menu.price}</p>
            </div>
        <i class="fa-regular fa-plus" data-add="${menu.id}"></i>
    </div>
  <hr />
           `
            })
  return newMenu
}
          
function render() {
  document.getElementById('menu').innerHTML = menu()
}
render()



