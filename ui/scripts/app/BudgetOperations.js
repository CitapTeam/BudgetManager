var app = (function () {
    var addNewItem = function () {
        var item = getItemValues();
        addItemToTable(item);        
        console.log("incomeOrExpense= " + item.itemTypeValue + "o = " + item.itemText + "o = " + item.itemValue);
    };

    var getItemValues = function () {
        var itemTypeSelect = document.getElementById("operationTypeSelect");
        var item = {
            itemTypeValue: itemTypeSelect.options[itemTypeSelect.selectedIndex].value == "+" ? "incomesTable" : "expensesTable",
            itemText: document.getElementById("operationTextInput").value,
            itemValue: document.getElementById("operationValueInput").value
        }
        return item;
    };

    var addItemToTable = function (item) {       
        var table = document.getElementById(item.itemTypeValue);
        var newRow = table.insertRow(-1);
        var newCell = newRow.insertCell(-1);
        var newCell2 = newRow.insertCell(-1);

        var newText = document.createTextNode(item.itemText);
        newCell.appendChild(newText);

        var newText = document.createTextNode(item.itemValue);
        newCell2.appendChild(newText);
    };


    return {
        addNewItem: addNewItem
    }
}());