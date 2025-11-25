const KikCreator = {

    // This will check what to create based on the command
    create: function(parsedData) {
        const { action, tag, count, items } = parsedData;

        switch(action) {
            case "create":
                return this.createElement(tag, count, items);
            case "text":
                return this.createText(items.join(" "));
            default:
                console.error("Unknown action " + action);
                return null;
        }
    },

    // This creates element based on the tag
    createElement: function(tagName, itemCount, itemList) {
        switch(tagName) {
            case "table":
                return this.createTable(itemCount, itemList);
            case "list":
                return this.createList(itemCount, itemList);
            case "div":
                return this.createDivs(itemCount, itemList);
            case "button":
                return this.createButtons(itemCount, itemList);
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
                return this.createHeading(tagName, itemList[0] || "");
            case "img":
                return this.createImage(itemList[0], itemList[1]);
            case "a":
                return this.createLink(itemList[0], itemList[1]);
            case "input":
                return this.createInput(itemList[0], itemList[1], itemList[2]);
            case "textarea":
                return this.createTextarea(itemList[0], itemList[1]);
            case "select":
                return this.createSelect(itemList);
            case "form":
                return this.createForm(itemList);
            case "modal":
                return this.createModal(itemList[0] || "", itemList[1] || "");
            case "card":
                return this.createCard(itemList[0] || "", itemList[1] || "");
            case "section":
                return this.createSection();
            case "container":
                return this.createContainer();
            default:
                console.error("Unknown tag " + tagName);
                return null;
        }
    },

    // This creates table element with rows
    createTable: function(itemCount, itemList) {
        const tableEl = document.createElement("table");
        const rowEl = document.createElement("tr");

        for (let i = 0; i < Math.min(itemCount, itemList.length); i++) {
            const cell = document.createElement("td");
            cell.textContent = itemList[i];
            rowEl.appendChild(cell);
        }

        tableEl.appendChild(rowEl);
        return tableEl;
    },

    // This creates a list element
    createList: function(itemCount, itemList) {
        const listEl = document.createElement("ul");

        for (let i = 0; i < Math.min(itemCount, itemList.length); i++) {
            const listItem = document.createElement("li");
            listItem.textContent = itemList[i];
            listEl.appendChild(listItem);
        }

        return listEl;
    },

    // This creates multiple divs
    createDivs: function(itemCount, itemList) {
        const container = document.createElement("div");

        for (let i = 0; i < Math.min(itemCount, itemList.length); i++) {
            const divEl = document.createElement("div");
            divEl.textContent = itemList[i];
            container.appendChild(divEl);
        }

        return container;
    },

    // This creates multiple buttons
    createButtons: function(itemCount, itemList) {
        const container = document.createElement("div");

        for (let i = 0; i < Math.min(itemCount, itemList.length); i++) {
            const buttonEl = document.createElement("button");
            buttonEl.textContent = itemList[i];
            container.appendChild(buttonEl);
        }

        return container;
    },

    // This creates heading elements 
    createHeading(level, text) {
        const headingElement = document.createElement(level);
        headingElement.textContent = text ? text.replace(/-/g, " ") : "";
        return headingElement;
    },

    // This creates paragraph element with any text inside 
    createText(text) {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = text || "";
        return paragraphElement;
    },

    // Thsi creates an image element
    createImage(src, altText) {
        const imageElement = document.createElement("img");
        imageElement.src = src || "";
        imageElement.alt = altText || "";
        return imageElement;
    },

    // This creates clickable link
    createLink(linkText, href) {
        const linkElement = document.createElement("a");
        linkElement.textContent = linkText || "Click here";
        linkElement.href = href || "#";
        return linkElement;
    },  


    // This creates an input element
    createInput: function(name, placeholder, type = "text") {
        const inputEl = document.createElement("input");
        inputEl.type = type;
        if (name) inputEl.name = name;
        if (placeholder) inputEl.placeholder = placeholder;
        return inputEl;
    },

    // This creates a textarea element
    createTextarea: function(name, placeholder) {
        const textEl = document.createElement("textarea");
        if (name) textEl.name = name;
        if (placeholder) textEl.placeholder = placeholder;
        return textEl;
    },

    // This creates a select element
    createSelect: function(optionsList) {
        const selectEl = document.createElement("select");
        optionsList.forEach(optText => {
            const optEl = document.createElement("option");
            optEl.textContent = optText;
            optEl.value = optText.toLowerCase();
            selectEl.appendChild(optEl);
        });
        return selectEl;
    },

    // This creates a form with multiple elements
    createForm: function(itemList) {
        const formEl = document.createElement("form");
        itemList.forEach(item => {
            const child = this.createElement(item, 1, []);
            if (child) formEl.appendChild(child);
        });
        return formEl;
    },

    // This creates a modal element
    createModal: function(titleText, contentText) {
        const modalEl = document.createElement("div");
        modalEl.className = "kik-modal";
        modalEl.style.display = "none";

        const modalContent = document.createElement("div");
        modalContent.className = "kik-modal-content";

        const headerEl = document.createElement("div");
        headerEl.className = "kik-modal-header";
        headerEl.textContent = titleText;

        const bodyEl = document.createElement("div");
        bodyEl.className = "kik-modal-body";
        bodyEl.textContent = contentText;

        const closeEl = document.createElement("span");
        closeEl.className = "kik-modal-close";
        closeEl.textContent = "×";
        closeEl.onclick = function() {
            modalEl.style.display = "none";
        };

        modalContent.appendChild(closeEl);
        modalContent.appendChild(headerEl);
        modalContent.appendChild(bodyEl);
        modalEl.appendChild(modalContent);

        return modalEl;
    },

    // This creates a card element
    createCard: function(titleText, contentText) {
        const cardEl = document.createElement("div");
        cardEl.className = "kik-card";

        const cardTitle = document.createElement("div");
        cardTitle.className = "kik-card-title";
        cardTitle.textContent = titleText;

        const cardBody = document.createElement("div");
        cardBody.className = "kik-card-body";
        cardBody.textContent = contentText;

        cardEl.appendChild(cardTitle);
        cardEl.appendChild(cardBody);

        return cardEl;
    },

    // This creates a section element
    createSection: function() {
        return document.createElement("section");
    },

    // This creates a container div
    createContainer: function() {
        const containerEl = document.createElement("div");
        containerEl.className = "kik-container";
        return containerEl;
    }
};