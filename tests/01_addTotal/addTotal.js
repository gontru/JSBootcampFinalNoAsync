// make sure to check readme for information about taxes
function addTotal(cart, abbr) {
    let total = 0; 
    const NY = 0.09;
    const NJ = 0.07;
    const CT = 0.12;
    cart.reduce((total, item) => total + cart.price, 0); {   /// adding a loop to iterate through the object and add all the prices up and multiply by correct tax rate.
      if (abbr === NY ) {   
            total *= NY;
        }
        else if (abbr === NJ) {
            total *= NJ ;

            
        } else if (abbr === CT) {
            total *= CT;

            
        } else {
            return 0;
            
        } return total;
            
        
    }

}

module.exports = { addTotal };
