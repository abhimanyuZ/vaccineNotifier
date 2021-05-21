# VaccineNotifier

# Intro:
The code runs inside a web browser(on your PC ofcourse) and notifies via Telegram when vaccine is available at the given PINCODE.  

How long it takes to notify: As soon as any slot opens up, notification will be delivered within a min.

Who can set this up: Anyone who knows how to handle a PC/laptop and use Telegram App

Time to setup: ~10 Mins (< 1 Min for any Speedster or Superman :wink:)  


### Other possible use cases: Send Javascript notifications from windows to android phones easily!


# Steps:


## Set up Telegram Bot
### Create Bot
- Search for @BotFather in Telegram
- Start chat
- Reply `/newbot`
- Reply with your **bot name** (e.g. MyFirstDumbAFBot)
- Reply with username for your bot (must be unique! Time to show your creativity :sunglasses:)

### Generate token for Bot
- Reply `/token`
- Copy the token (let's call it YOUR_TOKEN)

### Get Chat ID
- Search for your bot(by using the **bot name** you provided earlier) and `start` the chat with it (Don't start spamming with "I love you" messages, yet! :joy:)
- Sustitute the value of YOUR_TOKEN in this link: `https://api.telegram.org/botYOUR_TOKEN/getUpdates` , then open this link
- Look for a line like : `"chat" : {"id": YOUR_CHAT_ID, ........ }` , copy the numeric value of YOUR_CHAT_ID

## The coding part
- Go to [notifier.js](https://github.com/abhimanyuZ/vaccineNotifier/blob/main/notifier.js), and copy the code
- On line 3, replace `YOUR_TOKEN` (with the YOUR_TOKEN generated earlier)
- On line 8, replace `YOUR_CHAT_ID` (with the YOUR_CHAT_ID obtained earlier)

Your code is ready!
  
## Final steps to glory
- Open Google Chrome
- Go to cowin website: [Cowin](https://www.cowin.gov.in/home)
- Enter your pincode and hit search. Select 18+. If all slots for the current week are Booked(i.e not even a single slot is "NA"), then keep on moving to the next week untill you encounter a slot with "NA" label or untill you get this message "No Vaccination center is available for booking."
- Once you are done, press `ctrl+shift+I` (or google how to open console in Google Chrome)
- Click on **console** label on the top and paste the code prepared earlier
- [Optional Step]: If you want to test whether your Telegram is receiving the messages or not, add this code on line 25: `sendBotMessage('testing telegram No ');`.  
  Note: If you follow this step, then once you are done with testing Telegram(i.e next step), please remember to close your browser and perform the "Final steps to glory" from the beginning.
- Hit Enter. You should see `Refreshing slots!` message at the interval of 1 min.



**NOTE**: If you want to stop the notifier, just close the Google Chrome.
