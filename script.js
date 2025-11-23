const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ("+-*/%".includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // substituir o % por /100 para porcentagem
        const expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);
    } catch {
        display.value = 'Erro';
    }
}
