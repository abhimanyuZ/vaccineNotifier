
function showNotification() {

   const notification = new Notification("New message incoming", {

      body: "Hi there. Vaccine is Available!"

   })

}

function findAd(){

	document.getElementsByClassName('pin-search-btn')[0].click()

	if (Notification.permission === "granted") {

      alert("we have permission");

    } else if (Notification.permission !== "denied") {

      Notification.requestPermission().then(permission => {

         console.log(permission);

		 if(document.getElementsByClassName('slots-box no-available').length < 6 || document.querySelectorAll('a[title="Fully Booked"]') < 1)

			showNotification();

      });

   }

}

setInterval(findAd,1000);
