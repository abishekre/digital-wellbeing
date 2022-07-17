storagename = 'sessions';
console.log("running");
alert("main.js is running");

function newSession() {
    if(document.getElementById("newSessionName").value !== ''){
        chrome.tabs.query({currentWindow: true}, function(activeTabs){
            var sessions = JSON.parse(localStorage.getItem(storageName))
            activeTabs.splice(0, 0, document.getElementById("newSessionName").value)
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
			document.getElementById("mid").append(div).html(getSessionLine(sessions[i], i))
			document.getElementById("loadSession"+i).click({index: i}, loadSession)
			document.getElementById("deleteSession"+i).click({index: i}, deleteSession)
		}
	}

    function getSessionLine(tabsArray,id){
        var output = '<span class="controls"><button id="deleteSession' + id
			+ '" class="dlt-btn">Delete</button><button id="loadSession' + id
			+ '" class="ld-btn">Load</button></span>'
		output += ' ' + tabsArray[0]
		return output
    }
}

function loadSession(event){
    var session = JSON.parse(localStorage.getItem(storageName))[event.data.index]
    session.splice(0, 1)
    chrome.tabs.query({currentWindow: true}, function(activeTabs){
		var tab
		if (session.length >= activeTabs.length) {
			for(tab = 0; tab < activeTabs.length; tab++){
				chrome.tabs.update(activeTabs[tab].id, {url: session[tab].url})
			}
			for (; tab < session.length; tab++) {
				chrome.tabs.create({url: session[tab].url, active: false})
			}
			retrieveActiveTab();
		} else {
			for (tab = 0; tab < session.length; tab++) {
				chrome.tabs.update(activeTabs[tab].id, {url: session[tab].url})
			}
			for (; tab < activeTabs.length; tab++) {
				chrome.tabs.remove(activeTabs[tab].id)
			}
			retrieveActiveTab()
		}
	})

    function retrieveActiveTab(){
        chrome.tabs.query({currentWindow: true}, function(newTabs) {
			var activeId = -1
			for (var tabId = 0; activeId == -1; tabId++) {
				if (session[tabId].active)
					activeId = tabId
			}
			chrome.tabs.update(newTabs[activeId].id, {active: true})
		})
    }
}

function deleteSession(event){
    var sessions = JSON.parse(localStorage.getItem(storageName))
	sessions.splice(event.data.index, 1)
	localStorage.setItem(storageName, JSON.stringify(sessions))
	printsessions()
	document.getElementById("newSessionName").focus();
}

document.addEventListener('DOMContentLoaded',() =>{
    console.log("inside domloaded");
    document.getElementById("submit-btn").addEventListener('click',function(event){
        event.preventDefault()
        saveNewSession()
    })
    printsessions()
})