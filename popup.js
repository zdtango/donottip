document.addEventListener('DOMContentLoaded', () => {
    const tipInput = document.getElementById('tipAmount');
    const saveButton = document.getElementById('save');
    const statusText = document.getElementById('status');
    const totalSavedElement = document.getElementById('totalSaved');

    // Load saved tip amount and total savings
    chrome.storage.sync.get(['tipAmount', 'totalSaved'], (result) => {
        if (result.tipAmount !== undefined) {
            tipInput.value = result.tipAmount;
        }
        
        // Display total savings, defaulting to 0 if not set
        const totalSaved = result.totalSaved || 0;
        totalSavedElement.textContent = `$${totalSaved.toFixed(2)}`;
    });

    // Save tip amount
    saveButton.addEventListener('click', () => {
        const tipAmount = parseFloat(tipInput.value);
        
        if (isNaN(tipAmount) || tipAmount < 0 || tipAmount > 100) {
            alert('Please enter a valid tip percentage between 0 and 100');
            return;
        }

        chrome.storage.sync.set({ tipAmount }, () => {
            statusText.style.display = 'block';
            setTimeout(() => {
                statusText.style.display = 'none';
            }, 2000);
        });
    });

    // Listen for changes to total savings
    chrome.storage.onChanged.addListener((changes) => {
        if (changes.totalSaved) {
            totalSavedElement.textContent = `$${changes.totalSaved.newValue.toFixed(2)}`;
        }
    });
}); 