(function() {

    // This is the main entry that starts the tool
    window.Kik = function(userCommand) {
        const commandInfo = KikParser.parse(userCommand);
        const createdItem = KikCreator.create(commandInfo);
        KikDOM.append(createdItem);
        return createdItem;
    };

    // This exposes the parts of the tool to the outside
    window.KikParser = KikParser || {};
    window.KikCreator = KikCreator || {};
    window.KikDOM = KikDOM || {};
    window.KikUtils = KikUtils || {};
    window.KikEvents = KikEvents || {};
    window.KikStyles = KikStyles || {};
    window.KikAnimations = KikAnimations || {};

})();