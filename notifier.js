function sendBotMessage(vCount) {
      var request = new XMLHttpRequest();
      request.open("POST", "https://api.telegram.org/botYOUR_TOKEN/sendMessage");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        "chat_id": "YOUR_CHAT_ID",
        "text":  vCount + "Vaccine Available!!"
      }

      request.send(JSON.stringify(params));
}

//for desktop notification: don't modify!
// function showNotification() {
//    const notification = new Notification("New message incoming", {
//       body: "Hi there. Vaccine is Available!"
//    })
// }

function findAd(){
	document.getElementsByClassName('pin-search-btn')[0].click();
	console.log("Refreshing slots!")
	setTimeout(() => { 
	var els = document.getElementsByClassName('vaccine-box vaccine-box1 vaccine-padding');
	for(let el of els) {
		var anchor = el.getElementsByTagName('a')[0];
		var msg = anchor.textContent.trim();
		if(msg != "Booked" && msg != "NA"){
			sendBotMessage(anchor.textContent);
			console.log("notified!");
		}
	}
	}, 5000);
}
setInterval(findAd,60000);
