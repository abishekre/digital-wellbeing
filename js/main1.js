storagename = 'sessions';

function newsession() {
    if(document.getElementById("newSessionName").value !== ''){
        chrome.tabs.query({currentWindow: true}, function(activeTabs){
            var sessions = JSON.parse(localStorage.getItem(storageName))
            activeTabs.splice(0, 0, $('#newSessionName').val())
            sessions.push(activeTabs)
            localStorage.setItem(storageName, JSON.stringify(sessions))
            let name = document.getElementById("newSessionName").value
            chrome.notifications.create({type:"basic",title:"Saved",message:"Your session "+name+" is saved.",iconUrl:"assets/icons/icon128.png"});
            document.getElementById("newSessionName").value = '';
            printSessions()
        })
    }
    else{
        alert("Enter a name for the session.");
        chrome.notifications.create({type:"basic",title:"Error",message:"Please enter a name. ",iconUrl:"assets/icons/icon128.png"});
    }
    document.getElementById("newSessionName").focus();
}

function printsessions(){
    if (localStorage.getItem(storageName) === null){
        localStorage.setItem(storageName, JSON.stringify(new Array()))
    }
    try{
        var sessions = JSON.parse(localStorage.getItem(storageName))
    }
    catch (e){
        localStorage.setItem(storageName, JSON.stringify(new Array()))
        var sessions = JSON.parse(localStorage.getItem(storageName))
    }
    document.getElementById("mid").empty();
    if (sessions.length == 0) {
		document.getElementById("mid").append($('<p>').text('You have no saved sessions.'))
	} else {
		document.getElementById("mid").append($('<p>').text('Your saved sessions:'))
		for (var i = 0; i < sessions.length; i++) {
			document.getElementById("mid").append($('<div>').html(getSessionLine(sessions[i], i)))
			$('#loadSession' + i).click({index: i}, loadSession)
			$('#deleteSession' + i).click({index: i}, deleteSession)
		}
	}
}