/**
 * Lecture : Budgety Application
 * 
 * NOTES
 *  - Modules : An important aspect to any robust application's architecture.
 *              Modules keep units of code for a project both cleanly seperated and oranized.
 *              It also encapsulate some data into privacy and expose others publicly.
 * - Data Encapsulation : Allows to hide implementation details from the outside scope. Only expose
 *                        the public interface, or APIs.
 */

 // --- Budget Controller -------------------------------------------------------------------------
var budgetController = (function() {

})();

// --- UI Controller ------------------------------------------------------------------------------
var UIController = (function() {
    // --- Constants -----------------------------------------------------
    var constantDOMStrings = {
        inputType        : '.add__type',
        inputDescription : '.add__description',
        inputValue       : '.add__value',
        inputButton      : '.add__btn'
    };

    return {
        getInput : function() {
            return {
                type        : document.querySelector(constantDOMStrings.inputType).value,
                description : document.querySelector(constantDOMStrings.inputDescription).value,
                value       : document.querySelector(constantDOMStrings.inputValue).value
            };
        },

        getConstantDOMStrings : function() {
            return constantDOMStrings;
        }
    };
})();

// --- Global Application Controller --------------------------------------------------------------
var applicationController = (function(budgetControl, UIControl) {
    // --- Function : Event Listeners ------------------------------------
    var setupEventListeners = function() {
        // --- Constants ------------------------
        var constantDOMValues = UIControl.getConstantDOMStrings();
        var constantEvents = {
            click    : 'click',
            keypress : 'keypress'
        }

        // Case 1 : If a person clicks the button with a mouse, the button should click
        document.querySelector(constantDOMValues.inputButton).addEventListener(constantEvents.click, applicationControlAddItem);

        // Case 2 : If a person presses the 'ENTER' key on the keyboard, the button should click
        document.addEventListener(constantEvents.keypress, function (event) {
            // Event : Accounts for the case when the user presses "ENTER" on the keyboard
            if (event.keyCode === 13 || event.which === 13) {
                applicationControlAddItem();
            }
        });
    }

    // --- Function : Add Items ------------------------------------------
    var applicationControlAddItem = function() {
        var input = UIControl.getInput();
        console.log(input);

        // 2. Add item to budget controller
        // 3. Add item to UI
        // 4. Calculcate Budget
        // 5. Display on UI
    }

    return {
        init : function() {
            console.log('Application has started!');
            setupEventListeners();
        }
    }
})(budgetController, UIController);

applicationController.init();