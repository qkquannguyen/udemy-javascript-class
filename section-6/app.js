/**
 * Lecture : Budgety Application
 * 
 * NOTES
 *  - Modules : An important aspect to any robust application's architecture.
 *              Modules keep units of code for a project both cleanly seperated and oranized.
 *              It also encapsulate some data into privacy and expose others publicly.
 *  - Data Encapsulation : Allows to hide implementation details from the outside scope. Only expose
 *                        the public interface, or APIs.
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

    // --- Budgety Application Data Structure -----------------------------------------------------
    var budgetyData = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        }
    };

    // --- Budgety Application Data Population ----------------------------------------------------
    return {
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
        expenseContainer: '.expenses__list'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(constantDOMStrings.inputType).value,
                description: document.querySelector(constantDOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(constantDOMStrings.inputValue).value)
            };
        },
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
    }

    var updateBudget = function() {
        // 1. Calculate the Budget

        // 2. Return the Budget

        // 3. Display the budget on the UI
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

    return {
        init: function () {
            console.log('Application has started!');
            setupEventListeners();
        }
    }
})(budgetController, UIController);

applicationController.init();