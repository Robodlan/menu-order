import {menuArray} from './data.js'
const order = document.getElementById("order")
const newObj = document.getElementById('total-price-section')
const dialog = document.getElementById('dialog')
const payBtn = document.getElementById('pay-btn')
const lastDiv = document.getElementById('last-div')
const purchaseBtn = document.getElementById('purchase-btn')
const inputTextName = document.getElementById('input-text-name')
const inputCardDetails = document.getElementById('input-card-details')
const inputCardCvv = document.getElementById('input-card-cvv')
const error =  document.getElementById('error')
const form = document.getElementById('form')

let orderArray = []

form.addEventListener('submit', (e)=> {
  let message = ""
  if(inputCardDetails.value !== 16 && inputCardCvv.value !== 3){
    
    // e.preventDefault()
    console.log('noo')
    } 
  else {
    inputTextName.value = ''
    inputCardDetails.value = ''
    inputCardCvv.value = ''
  }
  
})

inputTextName.addEventListener('input', (e)=> {
  let text = /[^a-z\s]/gi
   inputTextName.value = inputTextName.value.replace(text, "")
})

inputCardDetails.addEventListener('input', (e)=> {
   let num = /[/d]/gi
   inputCardDetails.value = inputCardDetails.value.replace(num, "")
})

inputCardCvv.addEventListener('input', (e)=> {
  let num = /[/d]/gi
  inputCardCvv.value = inputCardCvv.value.replace(num, "")
})

purchaseBtn.addEventListener('click', (e)=> {
    dialog.showModal();
    newObj.classList.add('hidden')
    order.classList.add('hidden')
  })

// payBtn.addEventListener('click', (e) => {
//     dialog.close();
//     order.classList.add('hidden')
//     lastDiv.classList.remove('hidden')
//     lastDiv.innerHTML = `<h2>Thanks, ${inputTextName.value}! Your order is on its way!</h2>`
//     setTimeout(()=> {
//       lastDiv.classList.add('hidden') 
//     }, 5000)
// })

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



