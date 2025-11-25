const KikDOM = {

    // This adds the element to the end of the body
    append: function(userElement) {
        if (userElement) {
            document.body.appendChild(userElement);
        }
    },

    // This adds the element inside another element by id
    appendTo: function(userElement, targetId) {
        if (userElement && targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.appendChild(userElement);
            } else {
                console.error("Target element with ID '" + targetId + "' not found");
            }
        }
    },

    // This removes an element by its id
    remove: function(elementId) {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            targetElement.parentNode.removeChild(targetElement);
        }
    },

    // This clears all content inside an element
    clear: function(elementId) {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            targetElement.innerHTML = '';
        }
    },

    // This shows the element
    show: function(elementId) {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            targetElement.style.display = '';
        }
    },

    // This hides the element
    hide: function(elementId) {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            targetElement.style.display = 'none';
        }
    },

    // This toggles the element visibility
    toggle: function(elementId) {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            targetElement.style.display = targetElement.style.display === 'none' ? '' : 'none';
        }
    }
};