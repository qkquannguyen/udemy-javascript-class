/**
 * Lecture : Budgety Application
 * 
 * NOTES
 *  - Modules : An important aspect to any robust application's architecture.
 *              Modules keep units of code for a project both cleanly seperated and oranized.
 *              It also encapsulate some data into privacy and expose others publicly.
 *  - Data Encapsulation : Allows to hide implementation details from the outside scope. Only expose
 *                        the public interface, or APIs.
 *  - Event Bubbling : When an event is fired or triggered on some DOM Element, 
 *                     then the exact same event is triggered on all parent elements.
 *  - Target Element : Element on which the event was actually first fired, 
 *                     so the element that caused the event to happen. (Ex. A Button click)
 *  - Event Delegation : When we know where the event was fired, then attach an event handler
 *                       to a parent element and wait for the event to bubble up, then do whatever
 *                       that was intended to do.
 *      - When to use Event Delegation
 *           I. When we have an element with lots of child elements that we are interested in.
 *          II. When we want an event handler attatched to an element that is not yet in the DOM
 *              when the page is loaded.
 */

// --- Budget Controller --------------------------------------------------------------------------
var budgetController = (function () {
    // --- Expense Data Structure -----------------------------------------------------------------
    var expenseData = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    // --- Income Data Structure ------------------------------------------------------------------
    var incomeData = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;

        budgetyData.allItems[type].forEach(function(currentElement) {
            sum += currentElement.value;
        });
        budgetyData.totals[type] = sum;
    };

    // --- Budgety Application Data Structure -----------------------------------------------------
    var budgetyData = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget : 0,
        percentage : -1
    };

    // --- Budgety Application Data Population ----------------------------------------------------
    return {
        // --- Function : Add Items ---------------------------------------------------------------
        addItem: function (type, des, val) {
            var newItem, ID;

            // --- Create a new ID for a new 
            if (budgetyData.allItems[type].length > 0) {
                ID = budgetyData.allItems[type][budgetyData.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // --- Create a new item based on a income or expense type
            if (type === 'expense') {
                newItem = new expenseData(ID, des, val);
            } else if (type === 'income') {
                newItem = new incomeData(ID, des, val)
            }

            // --- Push the data to our Budgety Data Structure
            budgetyData.allItems[type].push(newItem);

            // --- Return the new element
            return newItem;
        },
        // --- Function : Calculates Budget -------------------------------------------------------
        calculateBudget : function () {
            // Should Calculate the Total Income and Expense
            calculateTotal('expense');
            calculateTotal('income');

            // Budget : Income - Expenses
            budgetyData.budget = budgetyData.totals.income - budgetyData.totals.expense;

            // Percentage of Income Spent Calculation : Expense / Income
            if (budgetyData.totals.income > 0) {
                budgetyData.percentage = Math.round((budgetyData.totals.expense / budgetyData.totals.income) * 100);
            } else {
                budgetyData.percentage = -1;
            }
        },
        // --- Function : Get Budget --------------------------------------------------------------
        getBudget : function () {
            return {
                budget      : budgetyData.budget,
                totalIncome : budgetyData.totals.income,
                totalExpense: budgetyData.totals.expense,
                percentage  : budgetyData.percentage
            };
        },
        testing : function () {
            console.log(budgetyData);
        }
    };
})();

// --- UI Controller ------------------------------------------------------------------------------
var UIController = (function () {
    // --- Constants ------------------------------------------------------------------------------
    var constantDOMStrings = {
        inputType       : '.add__type',
        inputDescription: '.add__description',
        inputValue      : '.add__value',
        inputButton     : '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel     : '.budget__value',
        incomeLabel     : '.budget__income--value',
        expenseLabel    : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container       : '.container'
    };

    return {
        // --- Function : Get Input ---------------------------------------------------------------
        getInput: function () {
            return {
                type: document.querySelector(constantDOMStrings.inputType).value,
                description: document.querySelector(constantDOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(constantDOMStrings.inputValue).value)
            };
        },
        // --- Function : Add Item to List depending on Types -------------------------------------
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // Create HTML String with placeholder text
            if (type === 'expense') {
                element = constantDOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'income') {
                element = constantDOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        // --- Function : Clear Fields ------------------------------------------------------------
        clearFields : function () {
            var itemField, itemFieldArray;
            
            itemField = document.querySelectorAll(constantDOMStrings.inputDescription + ', ' + constantDOMStrings.inputValue);
            itemFieldArray = Array.prototype.slice.call(itemField);

            // Three Arguments : Current Element, Current Index, and Original Array (Fields Array)
            itemFieldArray.forEach(function (current, index, array) {
                current.value = "";
            });
            itemFieldArray[0].focus();
        },
        // --- Function : Display the Budget to UI ------------------------------------------------
        displayBudget : function (obj) {
            document.querySelector(constantDOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(constantDOMStrings.incomeLabel).textContent = obj.totalIncome;
            document.querySelector(constantDOMStrings.expenseLabel).textContent = obj.totalExpense;

            if (obj.percentage > 0) {
                document.querySelector(constantDOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(constantDOMStrings.percentageLabel).textContent = '---';
            }
        },
        // --- Function : Get DOM Constants -------------------------------------------------------
        getConstantDOMStrings: function () {
            return constantDOMStrings;
        }
    };
})();

// --- Global Application Controller --------------------------------------------------------------
var applicationController = (function (budgetControl, UIControl) {
    // --- Function : Event Listeners -------------------------------------------------------------
    var setupEventListeners = function () {
        // --- Constants --------------------------------------------------------------------------
        var constantDOMValues = UIControl.getConstantDOMStrings();

        // Case 1 : If a person clicks the button with a mouse, the button should click
        document.querySelector(constantDOMValues.inputButton).addEventListener('click', applicationControlAddItem);

        // Case 2 : If a person presses the 'ENTER' key on the keyboard, the button should click
        document.addEventListener('keypress', function (event) {
            // Event : Accounts for the case when the user presses "ENTER" on the keyboard
            if (event.keyCode === 13 || event.which === 13) {
                applicationControlAddItem();
            }
        });

        document.querySelector(constantDOMValues.container).addEventListener('click', applicationControlDeleteItem);
    }

    // --- Function : Updates the User's Budget ---------------------------------------------------
    var updateBudget = function() {
        // 1. Calculate the Budget
        budgetControl.calculateBudget();

        // 2. Return the Budget
        var budget = budgetControl.getBudget();

        // 3. Display the budget on the UI
        UIControl.displayBudget(budget);
    };

    // --- Function : Add Items -------------------------------------------------------------------
    var applicationControlAddItem = function () {
        // --- Constants --------------------------------------------------------------------------
        var input, newItem;

        // 1. Get Field Input Data from the User
        input = UIControl.getInput();

        if (input.description && !isNaN(input.value) && input.value > 0) {
        // 2. Add Items to go to the Budget Controller
            newItem = budgetControl.addItem(input.type, input.description, input.value);
            
            // 3. Add the items to the Budgety UI
            UIControl.addListItem(newItem, input.type);

            // 4. Clear Fields
            UIControl.clearFields();

            // 5. Calculate and Update the Budget
            updateBudget();
        }
    }

    // --- Function Delete Items ------------------------------------------------------------------
    var applicationControlDeleteItem = function (event) {
        // --- Constants --------------------------------------------------------------------------
        var itemId, splittedItemId, type, Id;

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemId) {
            // itemId : income-# or expense-#
            // type   : income or expense
            // id     : a number
            splittedItemId = itemId.split('-');
            type = splittedItemId[0];
            Id = splittedItemId[1];

            // --- TODO:
            // 1. Delete the item from the Data Structure
            // 2. Delete the item from the UI
            // 3. Update and show the new Budget
        } 
    };

    return {
        init: function () {
            console.log('Application has started!');
            UIControl.displayBudget({
                budget      : 0,
                totalIncome : 0,
                totalExpense: 0,
                percentage  : -1
            });
            setupEventListeners();
        }
    }
})(budgetController, UIController);

applicationController.init();