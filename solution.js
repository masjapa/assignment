var sku = ["IP12PM9","AMBP20","APP20E","CIP20CP","AHPM2"];
// var product_name = ["iphone12","macbook","airpods","appleusb","homepod"]; 
var demand = 0;

function catalogue(quantity, price) {
    if(sku === "IP12PM9") {
        quantity = 10;
        price = 999;
        product_name = "Iphone 12 Pro Max";
    }else if(sku === "AMBP20") {
        quantity = 5;
        price = 2999;
        product_name = "Macbook Pro";
    }else if(sku === "APP20E") {
        quantity = 50;
        price = 249;
        product_name = "AirPods Pro";
    }else if(sku === "CIP20CP") {
        quantity = 100;
        price = 19;
        product_name = "20W Apple USB-C Power Adapter";
    }else if(sku === "AHPM2") {
        quantity = 100;
        price = 99;
        product_name = "HomePod mini";
    }
}