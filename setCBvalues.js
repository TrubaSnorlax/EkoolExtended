settings = document.getElementsByClassName("setting");

for (var i = 0; i < settings.length; i++) {
    var element = settings[i];
    chrome.storage.local.get([settings[i].id], function(items){
        element.checked = items[element.id];
    });
}