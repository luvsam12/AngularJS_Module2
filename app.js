(function(){

	"use strict";

	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController )
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){	
     var toBuy = this;
    
     toBuy.items = ShoppingListCheckOffService.getToBuyItems();
     
     toBuy.addItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
     };
    }


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
     var bought = this;

     bought.items = ShoppingListCheckOffService.getBoughtItems();
    }


	function ShoppingListCheckOffService(){
     var service = this;

  // List of shopping items
  var toBuyItems = [
      { name: "cookies bag", quantity: 5 },
      { name: "soft drinks bottles", quantity: 10 },
      { name: "chips bag", quantity: 15 },
      { name: "cola bottles", quantity: 20 },
      { name: "beer bottles", quantity: 30 }
     ];

  var boughtItems = [];

  service.buyItem = function(index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();