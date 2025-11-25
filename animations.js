const KikAnimations = {

    // This applies an animation to an element
    animate: function(userElement, animationName, duration = 500) {
        if (typeof userElement === "string") {
            userElement = document.getElementById(userElement);
        }

        if (userElement) {
            const savedStyles = {
                transition: userElement.style.transition,
                opacity: userElement.style.opacity,
                transform: userElement.style.transform,
                height: userElement.style.height,
                overflow: userElement.style.overflow,
                position: userElement.style.position,
                left: userElement.style.left,
                bottom: userElement.style.bottom
            };

            userElement.style.transition = `all ${duration}ms ease`;

            switch(animationName) {
                case "fade-in":
                    this.fadeIn(userElement, duration, savedStyles);
                    break;
                case "fade-out":
                    this.fadeOut(userElement, duration, savedStyles);
                    break;
                case "slide-up":
                    this.slideUp(userElement, duration, savedStyles);
                    break;
                case "slide-down":
                    this.slideDown(userElement, duration, savedStyles);
                    break;
                case "zoom-in":
                    this.zoomIn(userElement, duration, savedStyles);
                    break;
                case "zoom-out":
                    this.zoomOut(userElement, duration, savedStyles);
                    break;
                case "rotate":
                    this.rotate(userElement, duration, savedStyles);
                    break;
                case "shake":
                    this.shake(userElement, duration, savedStyles);
                    break;
                case "bounce":
                    this.bounce(userElement, duration, savedStyles);
                    break;
                case "pulse":
                    this.pulse(userElement, duration, savedStyles);
                    break;
                case "flip":
                    this.flip(userElement, duration, savedStyles);
                    break;
                default:
                    console.error("Unknown animation " + animationName);
            }
        } else {
            console.error("Element not found for animation");
        }
    },

    // This fades in the element
    fadeIn: function(userElement, duration, savedStyles) {
        userElement.style.opacity = "0";
        setTimeout(() => {
            userElement.style.opacity = "1";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
            }, duration);
        }, 10);
    },

    // This fades out the element
    fadeOut: function(userElement, duration, savedStyles) {
        userElement.style.opacity = "1";
        setTimeout(() => {
            userElement.style.opacity = "0";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
                userElement.style.opacity = "1";
            }, duration);
        }, 10);
    },

    // This slides the element up
    slideUp: function(userElement, duration, savedStyles) {
        const height = userElement.clientHeight;
        userElement.style.height = `${height}px`;
        userElement.style.overflow = "hidden";
        setTimeout(() => {
            userElement.style.height = "0";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
                userElement.style.height = "";
            }, duration);
        }, 10);
    },

    // This slides the element down
    slideDown: function(userElement, duration, savedStyles) {
        userElement.style.height = "0";
        userElement.style.overflow = "hidden";
        setTimeout(() => {
            userElement.style.height = `${userElement.scrollHeight}px`;
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
                userElement.style.height = "";
            }, duration);
        }, 10);
    },

    // This zooms in the element
    zoomIn: function(userElement, duration, savedStyles) {
        userElement.style.transform = "scale(0)";
        setTimeout(() => {
            userElement.style.transform = "scale(1)";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
            }, duration);
        }, 10);
    },

    // This zooms out the element
    zoomOut: function(userElement, duration, savedStyles) {
        userElement.style.transform = "scale(1)";
        setTimeout(() => {
            userElement.style.transform = "scale(0)";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
                userElement.style.transform = "scale(1)";
            }, duration);
        }, 10);
    },

    // This rotates the element
    rotate: function(userElement, duration, savedStyles) {
        userElement.style.transform = "rotate(0deg)";
        setTimeout(() => {
            userElement.style.transform = "rotate(360deg)";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
            }, duration);
        }, 10);
    },

    // This shakes the element
    shake: function(userElement, duration, savedStyles) {
        const intensity = 10;
        const originalPosition = userElement.style.position || "relative";
        userElement.style.position = "relative";

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percent = Math.min(progress / duration, 1);
            const x = Math.sin(percent * Math.PI * 8) * intensity * (1 - percent);
            userElement.style.left = `${x}px`;

            if (percent < 1) {
                requestAnimationFrame(animate);
            } else {
                this.resetStyles(userElement, savedStyles);
                userElement.style.position = originalPosition;
                userElement.style.left = "";
            }
        };

        requestAnimationFrame(animate);
    },

    // This bounces the element
    bounce: function(userElement, duration, savedStyles) {
        const originalPosition = userElement.style.position || "relative";
        userElement.style.position = "relative";

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percent = Math.min(progress / duration, 1);
            const bounceHeight = Math.abs(Math.sin(percent * Math.PI * 4)) * (1 - percent) * 50;
            userElement.style.bottom = `${bounceHeight}px`;

            if (percent < 1) {
                requestAnimationFrame(animate);
            } else {
                this.resetStyles(userElement, savedStyles);
                userElement.style.position = originalPosition;
                userElement.style.bottom = "";
            }
        };

        requestAnimationFrame(animate);
    },

    // This pulses the element
    pulse: function(userElement, duration, savedStyles) {
        const originalScale = 1;
        userElement.style.transform = "scale(1)";

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percent = Math.min(progress / duration, 1);
            const scale = originalScale + Math.sin(percent * Math.PI * 4) * 0.2;
            userElement.style.transform = `scale(${scale})`;

            if (percent < 1) {
                requestAnimationFrame(animate);
            } else {
                this.resetStyles(userElement, savedStyles);
                userElement.style.transform = "scale(1)";
            }
        };

        requestAnimationFrame(animate);
    },

    // This flips the element
    flip: function(userElement, duration, savedStyles) {
        userElement.style.transform = "rotateY(0deg)";
        setTimeout(() => {
            userElement.style.transform = "rotateY(360deg)";
            setTimeout(() => {
                this.resetStyles(userElement, savedStyles);
            }, duration);
        }, 10);
    },

    // This resets modified styles back to original
    resetStyles: function(userElement, savedStyles) {
        setTimeout(() => {
            userElement.style.transition = savedStyles.transition || "";
            setTimeout(() => {
                if (userElement.style.transform && !userElement.style.transform.includes("scale(1)")) {
                    userElement.style.transform = savedStyles.transform || "";
                }
            }, 50);
        }, 10);
    }
};