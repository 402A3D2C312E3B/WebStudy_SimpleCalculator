
let storeValue = '';
let displayValue = '';
let zeroCheck = 0;

function Number(inputNumber) {
    if (displayValue == '' && inputNumber == 0) {
        displayValue = ''
    }
    else {
        displayValue += inputNumber.toString();
    }
    document.getElementById('display').value = displayValue;
}

function Action(inputAction) {
    try {
        /*document.getElementById('console').value = zeroCheck;
        if (storeValue == '') { storeValue = 0; }
        if (displayValue == '') {
            displayValue = 0;
            zeroCheck = 1;
            document.getElementById('console').value = zeroCheck;
        }*/
        if (storeValue != '') { storeValue = parseFloat(storeValue); }
        if (displayValue != "Divide by 0 error" && displayValue != '') { displayValue = parseFloat(displayValue); }

        switch (inputAction) {
            case 'C':
                displayValue = '';
                break;
            case 'CE':
                storeValue = '';
                displayValue = '';
                break;
            case '=':
                if (displayValue != '') { storeValue = displayValue; }
                displayValue = '';
                break;
            default:
                // code block
                break;
        }

        if (storeValue == '' && displayValue != '') {
            storeValue = storeValue - displayValue;
            displayValue = '';
        }
        else if (storeValue != '' && displayValue != '') {
            switch (inputAction) {
                case '+':
                    storeValue = storeValue + displayValue;
                    displayValue = '';
                    break;
                case '-':
                    storeValue = storeValue - displayValue;
                    displayValue = '';
                    break;
                case '*':
                    storeValue = storeValue * displayValue;
                    displayValue = '';
                    break;
                case '/':
                    if (displayValue == 0 || displayValue == "Divide by 0 error") {
                        displayValue = "Divide by 0 error";
                    }
                    else {
                        storeValue = storeValue / displayValue;
                        displayValue = '';
                    }
                    break;
                default:
                    // code block
                    break;
            }
        }

        document.getElementById('displayStore').value = storeValue;
        document.getElementById('display').value = displayValue;
        zeroCheck = 0;
    }
    catch {

    }
}