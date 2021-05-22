//this notifier generates windows system notification on top of telegram message
//for windows notification to work, allow notification must be enabled in site settings

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

//Shows system notification on Windows
function showNotification() {
    const notification = new Notification("New message incoming", {
        body: "Hi there. Vaccine is Available!"
    })
}

function findAd() {
    document.getElementsByClassName('pin-search-btn')[0].click();
    setTimeout(() => {
        if (Notification.permission === "granted") {
            alert("we have permission");

            var els = document.getElementsByClassName('vaccine-box vaccine-box1 vaccine-padding');
            for (let el of els) {
                var anchor = el.getElementsByTagName('a')[0];
                var msg = anchor.textContent.trim();
                if (msg != "Booked" && msg != "NA") {
                    sendBotMessage();
                    showNotification();
                    console.log("notified!");
                }
            }
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(
                permission => {
                    console.log(permission);
                });
        }
    }, 2000); //added a delay to wait for html elements getting loaded
}

setInterval(findAd, 15000);
