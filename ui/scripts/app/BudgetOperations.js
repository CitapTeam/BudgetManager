var app = (function(){
    var addNewItem = function(){
        var incomeOrExpense = document.getElementById("operationTypeSelect");
        var itemText = document.getElementById("operationTextInput");
        var itemValue = document.getElementById("operationValueInput");

        console.log("incomeOrExpense= "+ incomeOrExpense + "o= "+ itemText + "o= "+ itemValue);
    };
    return {
        addNewItem: addNewItem
    }
} ());