# vaccineNotifier: Send Javascript notifications from windows to android phones easily!

## Telegram Bot
### Create Bot
- Search for @BotFather in Telegram
- Start chat
- Reply `/newbot`
- Reply with your bot name
- Reply with username for your bot

### Generate token for Bot
- Reply `/token`
- Copy the token (let's call it YOUR_TOKEN)

### Get Chat ID
- Search for your bot and start the chat
- Sustitute the value of YOUR_TOKEN in this link: `https://api.telegram.org/botYOUR_TOKEN/getUpdates` , then open this link
- Look for a line like : `"chat" : {"id": YOUR_CHAT_ID, ........ }` , copy the value of YOUR_CHAT_ID

## The coding part
- Go to [notifier.js](https://github.com/abhimanyuZ/vaccineNotifier/blob/main/notifier.js), and copy the code
- On line 3, replace `YOUR_TOKEN` (with the YOUR_TOKEN generated earlier)
- On line 8, replace `YOUR_CHAT_ID` (with the YOUR_CHAT_ID obtained earlier)

Your code is ready!
  
## Last steps
- Open Google Chrome
- Go to cowin website: [Cowin](https://www.cowin.gov.in/home)
- Enter your pincode and hit search (Select 18+)
- Open new tab and go to `chrome://settings/content/siteDetails?site=https%3A%2F%2Fwww.cowin.gov.in`
- Search for the permission for **Notifications**, and Allow it
- Go back to Cowin webpage and press `ctrl+shift+I`
- Open console and paste the code prepared earlier
- Hit Enter, you should see `we have permission` log at interval of 1 min.


