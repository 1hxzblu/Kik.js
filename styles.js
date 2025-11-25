const KikStyles = {

    // This adds styles to the element in a simple way
    set: function(targetElement, styleList) {
        if (typeof targetElement === "string") {
            targetElement = document.getElementById(targetElement);
        }

        if (targetElement) {
            for (const singleProperty in styleList) {
                targetElement.style[singleProperty] = styleList[singleProperty];
            }
        } else {
            console.error("Element not found for styling");
        }
    },

    // This sets the color of the element
    setColor: function(targetElement, userColor) {
        this.set(targetElement, { color: userColor });
    },

    // This sets the background of the element
    setBackground: function(targetElement, userBackground) {
        this.set(targetElement, { background: userBackground });
    },

    // This sets the width for the element
    setWidth: function(targetElement, userWidth) {
        this.set(targetElement, { width: userWidth });
    },

    // This sets the height for the element
    setHeight: function(targetElement, userHeight) {
        this.set(targetElement, { height: userHeight });
    },

    // This sets the padding for the element
    setPadding: function(targetElement, userPadding) {
        this.set(targetElement, { padding: userPadding });
    },

    // This sets the margin for the element
    setMargin: function(targetElement, userMargin) {
        this.set(targetElement, { margin: userMargin });
    },

    // This sets the border for the element
    setBorder: function(targetElement, userBorder) {
        this.set(targetElement, { border: userBorder });
    },

    // This sets the radius for the element
    setRadius: function(targetElement, userRadius) {
        this.set(targetElement, { borderRadius: userRadius });
    },

    // This adds a shadow to the element
    setShadow: function(targetElement, userShadow) {
        this.set(targetElement, { boxShadow: userShadow });
    },

    // This sets the font size
    setFontSize: function(targetElement, userSize) {
        this.set(targetElement, { fontSize: userSize });
    },

    // This sets the font weight
    setFontWeight: function(targetElement, userWeight) {
        this.set(targetElement, { fontWeight: userWeight });
    },

    // This sets the font family
    setFontFamily: function(targetElement, userFamily) {
        this.set(targetElement, { fontFamily: userFamily });
    },

    // This sets the line height
    setLineHeight: function(targetElement, userHeight) {
        this.set(targetElement, { lineHeight: userHeight });
    },

    // This sets the text alignment
    setAlign: function(targetElement, userAlign) {
        this.set(targetElement, { textAlign: userAlign });
    },

    // This sets the opacity
    setOpacity: function(targetElement, userOpacity) {
        this.set(targetElement, { opacity: userOpacity });
    },

    // This sets the display type
    setDisplay: function(targetElement, userDisplay) {
        this.set(targetElement, { display: userDisplay });
    },

    // This turns the elemnt into a flex layout
    setFlex: function(targetElement, userFlex) {
        this.set(targetElement, { display: "flex", flex: userFlex });
    },

    // This turns the element into a grid layout
    setGrid: function(targetElement, userGrid) {
        this.set(targetElement, { display: "grid", grid: userGrid });
    },

    // This sets the position type
    setPosition: function(targetElement, userPosition) {
        this.set(targetElement, { position: userPosition });
    },

    // This sets the z index
    setZIndex: function(targetElement, userZ) {
        this.set(targetElement, { zIndex: userZ });
    },

    // This controls overflow
    setOverflow: function(targetElement, userOverflow) {
        this.set(targetElement, { overflow: userOverflow });
    },

    // This changes the cursor style
    setCursor: function(targetElement, userCursor) {
        this.set(targetElement, { cursor: userCursor });
    },

    // This adds transition effect
    setTransition: function(targetElement, userTransition) {
        this.set(targetElement, { transition: userTransition });
    },

    // This transforms the element
    setTransform: function(targetElement, userTransform) {
        this.set(targetElement, { transform: userTransform });
    }
};