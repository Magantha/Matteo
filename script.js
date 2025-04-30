let currentInput = '';
function append(value) {
    currentInput += value; 
    document.getElementById('display').value = currentInput; 
}

function clearDisplay() {
    currentInput = ''; 
    document.getElementById('display').value = ''; 
}

function calculate() {

    try {
        const result = eval(currentInput); 
        document.getElementById('display').value = result; 
        currentInput = result.toString(); 
    } catch (error) {

        document.getElementById('display').value = 'Error'; 

        currentInput = ''; 

    }
}

function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';

    });

    document.getElementById(sectionId).style.display = 'block';


   
    if (sectionId === 'calculator') {
        clearDisplay();
    }
}


showSection('calculator');