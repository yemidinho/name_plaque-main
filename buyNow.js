const order = document.querySelector('.buy-submit')
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


const buyNow = () => {
    if (userInput.value === '')
    {
        alert('Please input a letter')
    }
    else if (userInput.value.length > 15){
        alert('You have exeeded avalaible letters')
    }
    else('Successful')
    if (userLeterPreview.textContent === "Your Name"){
        alert('Please input a custom letter')
    }
}

order.addEventListener("click", buyNow)

const countLeters = (some_data) =>{
    const price = some_data.replaceAll(' ', '').length * 5; // price of each letter
    userLeterPreview.textContent = some_data
    userPricePreview.textContent = '$'+price
  }
  
  userInput.oninput = (e)=>{
    countLeters(e.target.value)
  }
