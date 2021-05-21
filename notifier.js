function sendBotMessage() {
      var request = new XMLHttpRequest();
      request.open("POST", "https://api.telegram.org/botYOUR_TOKEN/sendMessage");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        "chat_id": "YOUR_CHAT_ID",
        "text": "Vaccine Available!!"
      }

      request.send(JSON.stringify(params));
}

function showNotification() {
   const notification = new Notification("New message incoming", {
      body: "Hi there. Vaccine is Available!"
   })
}

function findAd(){
	document.getElementsByClassName('pin-search-btn')[0].click();
	if (Notification.permission === "granted") {
     		 alert("we have permission");
    	} 
	else if (Notification.permission !== "denied") {
     	 	Notification.requestPermission().then(permission => {
         	console.log(permission);
		 if(document.getElementsByClassName('slots-box no-available').length < 6 || document.querySelectorAll('a[title="Fully Booked"]') < 1)
		 {
			showNotification();
			sendBotMessage();
		 }
			
      });
   }
}
setInterval(findAd,60000);
