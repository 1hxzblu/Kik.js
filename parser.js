const KikParser = {

    // This reads the user command in simple way
    parse: function(userCommand) {

        const commandParts = userCommand.trim().split(/\s+/);

        const mainAction = commandParts[0];
        const mainTag = commandParts[1];
        const itemCount = parseInt(commandParts[2]) || 1;
        const extraItems = commandParts.slice(3);

        return {
            action: mainAction,
            tag: mainTag,
            count: itemCount,
            items: extraItems
        };
    }
};