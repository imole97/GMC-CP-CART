if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready (){
    let removeItem = document.getElementsByClassName('delete')
    // console.log(removeItem)
    for (let i = 0; i<removeItem.length; i++) {
        let button = removeItem[i]
        button.addEventListener('click', removeCartItem)
        
    }

    let cartIncrease = document.getElementsByClassName('add')
    for (let i = 0; i<cartIncrease.length; i++) {
        let addButton = cartIncrease[i]
        addButton.addEventListener('click', addItem)
        
    }

    let cartDecrease =  document.getElementsByClassName('remove')
        for (let i = 0; i<cartDecrease.length; i++) {
            let minusButton = cartDecrease[i]
            minusButton.addEventListener('click', minusItem)
        }
    
    let likeBtn = document.getElementsByClassName('like-btn')
    for (let i = 0; i<likeBtn.length; i++) {
        let likeButton = likeBtn[i]
        likeButton.addEventListener('click', toggleLike)
    }

}

    

// function to remove cart item
function removeCartItem (event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()

}

//function to add into cart item
function addItem (event) {
    let buttonClicked = event.target
    
    let input = buttonClicked.parentElement.children[1]

    inputValue = input.value;
    let newValue = parseFloat(inputValue) + 1
    input.value = newValue

    // let cartHeader = document.getElementById('cart-header')
    // cartHeader.innerText = newValue;
    
    updateCartTotal()
    
}

//function to remove from cart item
function minusItem (event) {
    let buttonClicked = event.target
    
    let input = buttonClicked.parentElement.children[1]

    inputValue = input.value;
    let newValue = parseFloat(inputValue) - 1
    input.value = newValue
    if(newValue >= 0 ){
        input.value = newValue
    } else {
        input.value = 0
    }

    updateCartTotal()
}

//function to like and unlike
function toggleLike (){
    let buttonClicked = event.target
    let clicked = buttonClicked.parentElement

    if (clicked.style.color == 'red') {
        clicked.style.color = 'lightgrey'
    } else {
        clicked.style.color = 'red'
    }


}

 
// function to update total price of items in cart
function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('products')[0]
    let cartRows = cartItemContainer.getElementsByClassName('product-row')
    let total = 0
    for (let i = 0; i<cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('product-price')[0]
        let quantityElement = cartRow.getElementsByClassName('count')[0]
        // console.log(priceElement, quantityElement) 
        let price = parseFloat(priceElement.innerText.replace('#', ''))
        let quantity = parseFloat(quantityElement.value)
        total = total + (price * quantity)
    }
    document.getElementsByClassName('basketTotal')[0].innerText ='#' + total
}



updateCartTotal()












