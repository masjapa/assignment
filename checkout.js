var items = [];
var additional_items = [];
var demand = 0;

function checkout(items, sku, demand){
    if(items == []) {
        if(sku === "IP12PM9") {
            price = demand * 999;
            additional_items.push("20W Apple USB-C Power Adapter");
            quantity = quantity - demand;
        }else if(sku === "APP20E") {
            if(demand === 3) {
                price = 2 * 249;
                additional_items.push("AirPods Pro");
                quantity = quantity - demand;
            }else {
                price = demand * 249;
                additional_items.push("AirPods Pro");
                quantity = quantity - demand;
            }
        }else if(sku === "AHPM2") {
            if(demand >= 3) {
                ap = 19 * 0,10;
                price = demand * ap;
                additional_items.push("HomePod mini");
                quantity = quantity - demand;
            }else {
                price = demand * 19;
                additional_items.push("HomePod mini");
                quantity = quantity - demand;
            }
        }
    }else {
        console.log("Empty Checkout");
    }
}