var shouldContinue = true
var potentialSavings = 0;  // Track potential savings before order is placed

// Function to update total savings
function updateTotalSavings(savedAmount) {
    chrome.storage.sync.get(['totalSaved'], (result) => {
        const currentTotal = result.totalSaved || 0;
        const newTotal = currentTotal + savedAmount;
        chrome.storage.sync.set({ totalSaved: newTotal });
        console.log('DoNotTip: Updated total savings to:', newTotal);
    });
}

// Function to watch for Place Order button click
function watchPlaceOrderButton() {
    document.addEventListener('click', (event) => {
        // Function to check if an element or its parents is a button with "Place Order" text
        function isPlaceOrderButton(element) {
            while (element && element !== document.body) {
                if (element.tagName === 'BUTTON' && element.textContent.trim() === 'Place Order') {
                    return true;
                }
                element = element.parentElement;
            }
            return false;
        }

        // Check if the clicked element or its parents is the Place Order button
        if (isPlaceOrderButton(event.target)) {
            console.log('DoNotTip: Place Order clicked, saving amount:', potentialSavings);
            if (potentialSavings > 0) {
                updateTotalSavings(potentialSavings);
                potentialSavings = 0;  // Reset potential savings
            }
        }
    });
}

// Function to set tip amount
function setTipAmount(tipAmount, observer) {
    if (!shouldContinue) {
        return
    }

    console.log('DoNotTip: Attempting to set tip to $' + tipAmount);
    
    // Find the radio group container directly
    const radioGroup = document.querySelector('[role="radiogroup"][aria-label="Tip Amount"]');
    if (!radioGroup) {
        console.log('DoNotTip: Could not find tip radio group');
        return;
    }

    // Get all buttons and their text content
    const buttons = Array.from(radioGroup.querySelectorAll('button[data-anchor-id="TipPickerOption"]'));
    const buttonTexts = buttons.map(button => {
        const textDiv = button.querySelector('.styles__TextOverflow-sc-p3lsxh-2.dHJRsI');
        return textDiv ? textDiv.textContent : null;
    });
    console.log('DoNotTip: Found buttons with texts:', buttons);

    // Get the selected button
    const selectedButton = buttons.find(button => button.getAttribute('aria-checked') === 'true');
    const originalTip = selectedButton ? parseFloat(selectedButton.querySelector('.styles__TextOverflow-sc-p3lsxh-2.dHJRsI').textContent.replace('$', '')) : null;
    
    // First try to find the exact amount
    let targetButton = buttons.find(button => {
        const textDiv = button.querySelector('.styles__TextOverflow-sc-p3lsxh-2.dHJRsI');
        return textDiv && textDiv.textContent === `$${tipAmount.toFixed(2)}`;
    });

    // If exact amount not found, find the Other button
    if (!targetButton) {
        targetButton = buttons.find(button => {
            const textDiv = button.querySelector('.styles__TextOverflow-sc-p3lsxh-2.dHJRsI');
            return textDiv && textDiv.textContent === 'Other';
        });
    }

    if (targetButton) {
        shouldContinue = false

        console.log('DoNotTip: Found target button with text:', 
            targetButton.querySelector('.styles__TextOverflow-sc-p3lsxh-2.dHJRsI').textContent);
        
        // Click the button
        targetButton.click();
        
        // If it was the Other button, handle the custom input
        if (targetButton.querySelector('.styles__TextOverflow-sc-p3lsxh-2.dHJRsI').textContent === 'Other') {
            setTimeout(() => {
                const customTipInput = document.querySelector('[data-testid="OtherTipInput"]');
                if (customTipInput) {
                    console.log('DoNotTip: Found custom tip input');
                    customTipInput.value = tipAmount.toFixed(2);
                    customTipInput.dispatchEvent(new Event('input', { bubbles: true }));
                    customTipInput.dispatchEvent(new Event('change', { bubbles: true }));
                    
                    // Force update the input
                    customTipInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
                    customTipInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

                    // Calculate the difference between the original and new tip amounts
                    const difference = originalTip - tipAmount;
                    console.log('DoNotTip: Difference between original and new tip amount:', difference);
                    
                    // Store the potential savings but don't update total yet
                    if (difference > 0) {
                        potentialSavings = difference;
                        console.log('DoNotTip: Potential savings set to:', potentialSavings);
                    }
                } else {
                    console.log('DoNotTip: Could not find custom tip input');
                }
            }, 500);
        }
    } else {
        console.log('DoNotTip: Could not find appropriate button');
    }
}

// Function to observe DOM changes
function observeDOM() {
    console.log('DoNotTip: Starting DOM observer');
    const observer = new MutationObserver(() => {
        chrome.storage.sync.get(['tipAmount'], (result) => {
            if (result.tipAmount !== undefined) {
                setTipAmount(result.tipAmount, observer);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Start watching for Place Order button
    watchPlaceOrderButton();
}

// Start observing when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeDOM);
} else {
    observeDOM();
}

// Initial check for tip elements
chrome.storage.sync.get(['tipAmount'], (result) => {
    if (result.tipAmount !== undefined) {
        setTipAmount(result.tipAmount);
    }
}); 