const KikUtils = {

    // This changes the text into camel style name
    toCamelCase: function(userText) {
        return userText.replace(/-([a-z])/g, function(found) {
            return found[1].toUpperCase();
        });
    },

    // This makes a simple random id for any element
    generateId: function(startText = "kik") {
        return `${startText}-${Math.random().toString(36).substr(2, 9)}`;
    },

    // This waits before calling the function to avoid many calls
    debounce: function(userFunction, waitTime) {
        let waitHolder;
        return function() {
            const currentPlace = this;
            const currentArgs = arguments;
            clearTimeout(waitHolder);
            waitHolder = setTimeout(() => {
                userFunction.apply(currentPlace, currentArgs);
            }, waitTime);
        };
    },

    // This checks if the element is inside the screen view
    isInViewport: function(targetElement) {
        const box = targetElement.getBoundingClientRect();
        return (
            box.top >= 0 &&
            box.left >= 0 &&
            box.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            box.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // This makes a full copy of an element by its id
    cloneElement: function(targetId) {
        const foundElement = document.getElementById(targetId);
        if (foundElement) {
            return foundElement.cloneNode(true);
        }
        return null;
    },

    // This saves the html of an element as a simple template
    saveTemplate: function(templateId, elementId) {
        const foundElement = document.getElementById(elementId);
        if (foundElement) {
            localStorage.setItem(`kik-template-${templateId}`, foundElement.outerHTML);
            return true;
        }
        return false;
    },

    // This loads a stored template and turns it into an element
    loadTemplate: function(templateId) {
        const savedTemplate = localStorage.getItem(`kik-template-${templateId}`);
        if (savedTemplate) {
            const wrap = document.createElement("div");
            wrap.innerHTML = savedTemplate;
            return wrap.firstChild;
        }
        return null;
    }
};