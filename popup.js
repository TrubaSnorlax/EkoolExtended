function updateData(element) {
    chrome.storage.local.set({[element.id]: element.checked}, function(){});
}

elements = document.getElementsByClassName("setting");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener("change", () => { 
        updateData(element);
    });
}