// // Memory Price
// function updateMemoryPrice(price){
//     const memoryCost = document.getElementById('memory-cost');
    
//     const totalPrice = document.getElementById('total-price'); 
//     const primaryTotalPrice = parseInt(totalPrice.innerText);
    
//     let primaryMemoryCost = 0;
//     if(price == 0){
//         memoryCost.innerText =  primaryMemoryCost + 0; 
         
//     }
//     else{
//         memoryCost.innerText =  primaryMemoryCost + 180;
        
//     }
//     const totalMemoryCost = parseInt(memoryCost.innerText);
//     totalPrice.innerText = totalMemoryCost + primaryTotalPrice; 
    
    
// }
function updateMemoryPrice(){
    const basePriceShow = document.getElementById('base-cost');
    const basePrice = parseInt(basePriceShow.innerText);
    const memoryPriceShow = document.getElementById('memory-cost');
    const memoryPrice = parseInt(memoryPriceShow.innerText);
    const storagePriceShow = document.getElementById('storage-cost');
    const storagePrice = parseInt(storagePriceShow.innerText);
    const deliveryChargeShow = document.getElementById('delivery-cost');
    const deliveryCharge = parseInt(deliveryChargeShow.innerText);
    const totalSell = basePrice + memoryPrice + storagePrice + deliveryCharge;
    const totalPriceShow = document.getElementById('total-price');
    totalPriceShow.innerText= totalSell;
    const bottomPriceShow = document.getElementById('bottom-total');
    bottomPriceShow.innerText = totalSell;
  };


//  function for select memory types 


function memorySelect(price){
    const memoryPriceShow = document.getElementById('memory-cost');
    memoryPriceShow.innerText = price;
    updateMemoryPrice();
  };
  
  
  //  function for select storage types 
  
  
function storageSelect(price){
    const storagePriceShow = document.getElementById('storage-cost');
    storagePriceShow.innerText = price;
    updateMemoryPrice();
  };
  
  
  //  function for select delivery methods 
  
  
  function selectDeliveryMethod(charge){
    const deliveryChargeShow = document.getElementById('delivery-cost');
    deliveryChargeShow.innerText = charge;
    updateMemoryPrice();
  };
  
  
  //  Code for click button 
  
  // !---------------------16GB memory----------------! 
  document.getElementById('second-memory').addEventListener('click',function(){
    memorySelect(180);
  });
  
  // !----------------------------8GB memory --------------------!
  document.getElementById('first-memory').addEventListener('click',function(){
    memorySelect(0);
  });
  
  // !----------------------------256GB storage ----------------------!
  document.getElementById('third-storage').addEventListener('click',function(){
    storageSelect(180);
  });
  
                         // 512GB storage 
  document.getElementById('second-storage').addEventListener('click',function(){
    storageSelect(100);
  });
  
  // !-----------------------1TB storage------------------------! 
  document.getElementById('first-storage').addEventListener('click',function(){
    storageSelect(0);
  });
  
  // !--------------------select paid delivery service----------------!
  document.getElementById('urgent-delivery').addEventListener('click',function(){
    selectDeliveryMethod(20);
  });
  
  // !--------------------select free delivery service----------------! 
  document.getElementById('free-delivery').addEventListener('click',function(){
    selectDeliveryMethod(0);
  });
  
  
  // --------------check promoCode Multiple submission valid-----------
  
  document.getElementById('apply-promo').addEventListener('click', function(){
    const totalPriceShow = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceShow.innerText);
    const promoInputField = document.getElementById('promo-input');
    const promoInput = promoInputField.value;
    const promoCode = 'stevekaku';
    const afterDiscountPrice = totalPrice * .8;
    if(promoInput == promoCode){
        const bottomPriceShow = document.getElementById('bottom-total');
        bottomPriceShow.innerText = afterDiscountPrice;
        promoInputField.value = '';
    }
    else{
        promoInputField.value = '';
    }
  });







































// document.getElementById('first-memory').addEventListener('click', function(){
//     updateMemoryPrice(0);   
// });
// document.getElementById('second-memory').addEventListener('click', function(){
//     updateMemoryPrice(100);   
// });

// // Storage Price
// function updateStoragePrice(price){
//     const storageCost = document.getElementById('storage-cost');
//     let primaryStorageCost = 0;
//     if(price == 0){
//         storageCost.innerText =  primaryStorageCost + 0;   
//     }
//     else if(price == 100){
//         storageCost.innerText =  primaryStorageCost + 100;  
//     }
//     else{
//         storageCost.innerText =  primaryStorageCost + 180;  
//     }
// }

// document.getElementById('first-storage').addEventListener('click', function(){
//     updateStoragePrice(0);
// })
// document.getElementById('second-storage').addEventListener('click', function(){
//     updateStoragePrice(100);
// })
// document.getElementById('third-storage').addEventListener('click', function(){
//     updateStoragePrice(180);
// })

// // Delivery Cost
// function updateDeliveryCost(price){
//     const deliveryCost = document.getElementById('delivery-cost');
//     let primaryDeliveryCost = 0;
//     if(price == 0){
//         deliveryCost.innerText =  primaryDeliveryCost + 0;   
//     }
//     else{
//         deliveryCost.innerText =  primaryDeliveryCost + 20;  
//     }
// }

// document.getElementById('free-delivery').addEventListener('click', function(){
//     updateDeliveryCost(0);
// })
// document.getElementById('urgent-delivery').addEventListener('click', function(){
//     updateDeliveryCost(20);
// })