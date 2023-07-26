// Take order from customer
// Fetch Ingredients
// Start production 
// Serve

const storage = {
    Fruits: ["Mango", "Banana", "Strawberry", "Chikoo", "Apple"],
    Liquids: ["water", "ice", "milk"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"],
  };
  
  let isShopOpen = true;
  
  const time = (ms) => {
    return new Promise((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(resolve, ms);
      } else {
        reject(new Error("Sorry, the shop is closed"));
      }
    });
  };


const flavorSelect = document.getElementById("flavor");
const toppingSelect = document.getElementById("topping");
const holderSelect = document.getElementById("holder");
const progressDiv = document.getElementById("progress");
const orderButton = document.querySelector("button");

orderButton.addEventListener("click", startProduction);

async function startProduction() {
  try {
   
    const selectedFlavor = flavorSelect.value;
    const selectedTopping = toppingSelect.value;
    const selectedHolder = holderSelect.value;

    
    progressDiv.style.display = "block";
    progressDiv.textContent = `Preparing your ${selectedFlavor} ice cream with ${selectedTopping} toppings in a ${selectedHolder}!`;

    await time(2000); 
    progressDiv.textContent = "Ingredients fetched!";

    await time(2000);
    progressDiv.textContent = "Fruits cut!";

    await time(1000); 
    progressDiv.textContent = "Liquids blended!";

    await time(2000);
    progressDiv.textContent = `${selectedHolder} selected!`;

    await time(3000); 
    progressDiv.textContent = `${selectedTopping} toppings added!`;

    await time(2000); 
    progressDiv.textContent = "Ice cream served!";
  } catch (error) {
    progressDiv.style.color = "red";
    progressDiv.textContent = `Error: ${error.message}`;
  } finally {
    setTimeout(() => 
    {
      progressDiv.style.display = "none";
      progressDiv.style.color = "#007bff";
      progressDiv.textContent = "Flavor selection complete!";
    }, 3000);
  }
}
