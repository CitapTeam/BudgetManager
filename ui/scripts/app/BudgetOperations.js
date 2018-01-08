var app = (function () {
    var addNewItem = function () {
        var item = getItemValues();
        addItemToTable(item);        
        console.log("incomeOrExpense= " + item.itemTypeValue + "o = " + item.itemText + "o = " + item.itemValue);
        setTotalValues();
    };

    var getItemValues = function () {
        var itemTypeSelect = document.getElementById("operationTypeSelect");
        var item = {
            itemTypeValue: itemTypeSelect.options[itemTypeSelect.selectedIndex].value == "+" ? "income" : "expenses",
            itemText: document.getElementById("operationTextInput").value,
            itemValue: document.getElementById("operationValueInput").value
        }
        return item;
    };

    var addItemToTable = function (item) {       
        var table = document.getElementById(item.itemTypeValue+"Table");
        var newRow = table.insertRow(-1);
        var newCell = newRow.insertCell(-1);
        var newCell2 = newRow.insertCell(-1);
        newCell2.classList.add(item.itemTypeValue+"-value");

        var newText = document.createTextNode(item.itemText);
        newCell.appendChild(newText);

        var newText = document.createTextNode(item.itemValue);
        newCell2.appendChild(newText);
    };

    var setTotalValues = function(){
        var totalIncome = calculateTotals("income");
        document.getElementsByClassName("total-income")[0].innerHTML = totalIncome;
    
        var totalExpenses = calculateTotals("expenses");
        document.getElementsByClassName("total-expenses")[0].innerHTML = totalExpenses;
    }

    var calculateTotals = function(typeValue){
        var total = 0;
        //#incomeTable td.income-value
        var values = document.querySelectorAll("#"+typeValue+"Table td."+typeValue+"-value") || [];
        values.forEach(function(element) {
            total += Number(element.innerText);
        }, this);

        return total;
    }

    return {
        addNewItem: addNewItem
    }
}());