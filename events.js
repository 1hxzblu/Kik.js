const KikEvents = {

    // This adds an event listener to an element
    on: function(targetElement, eventName, handlerFunction) {
        if (typeof targetElement === "string") {
            targetElement = document.getElementById(targetElement);
        }

        if (targetElement) {
            targetElement.addEventListener(eventName, handlerFunction);
        } else {
            console.error("Element not found for event binding");
        }
    },

    // This handles click events
    onClick: function(targetElement, handlerFunction) {
        this.on(targetElement, "click", handlerFunction);
    },

    // This handles hover events
    onHover: function(targetElement, handlerFunction) {
        this.on(targetElement, "mouseenter", handlerFunction);
    },

    // This handles input events
    onInput: function(targetElement, handlerFunction) {
        this.on(targetElement, "input", handlerFunction);
    },

    // This handles change events
    onChange: function(targetElement, handlerFunction) {
        this.on(targetElement, "change", handlerFunction);
    },

    // This handles key down events
    onKeyDown: function(targetElement, handlerFunction) {
        this.on(targetElement, "keydown", handlerFunction);
    },

    // This handles key up events
    onKeyUp: function(targetElement, handlerFunction) {
        this.on(targetElement, "keyup", handlerFunction);
    },

    // This runs when the page loads
    onLoad: function(handlerFunction) {
        window.addEventListener("load", handlerFunction);
    },

    // This handles scroll events with a delay
    onScroll: function(handlerFunction) {
        window.addEventListener("scroll", KikUtils.debounce(handlerFunction, 100));
    },

    // This handles form submission
    onSubmit: function(targetElement, handlerFunction) {
        this.on(targetElement, "submit", handlerFunction);
    },

    // This handles focus on an element
    onFocus: function(targetElement, handlerFunction) {
        this.on(targetElement, "focus", handlerFunction);
    },

    // This handles blur events
    onBlur: function(targetElement, handlerFunction) {
        this.on(targetElement, "blur", handlerFunction);
    },

    // This handles window resize events with a delay
    onResize: function(handlerFunction) {
        window.addEventListener("resize", KikUtils.debounce(handlerFunction, 100));
    }
};