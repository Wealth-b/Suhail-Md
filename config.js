const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_19_26_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1VGhCWUFqenJRTW9aRSs4d3M5OUlBWFlqQm5DUFdSd1lPN2R6V2p1Q3Y4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1R3FTRG5Sd1FMQ0xMQWhOSXZiVFhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmMjY0ZmIxLTY2ZTMtNGJkMy1hZTFiLTQ2NDMyMjMwZjQ1NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA5OSxcbiAgICAgIDg4LFxuICAgICAgMTksXG4gICAgICAyMjYsXG4gICAgICAxNjIsXG4gICAgICAxNjYsXG4gICAgICAxMjcsXG4gICAgICAxMTYsXG4gICAgICAxOTEsXG4gICAgICA0OSxcbiAgICAgIDIyNCxcbiAgICAgIDc3LFxuICAgICAgMTA0LFxuICAgICAgMTI5LFxuICAgICAgNDUsXG4gICAgICAyMDYsXG4gICAgICAxOTYsXG4gICAgICA3NSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICA2MixcbiAgICAgIDcxLFxuICAgICAgMTM2LFxuICAgICAgMTc3LFxuICAgICAgMjQ3LFxuICAgICAgMjQyLFxuICAgICAgOTMsXG4gICAgICAyMTgsXG4gICAgICAxNDUsXG4gICAgICAxMjEsXG4gICAgICA4MixcbiAgICAgIDEzMCxcbiAgICAgIDQ0LFxuICAgICAgMjEsXG4gICAgICA1OSxcbiAgICAgIDIwOSxcbiAgICAgIDE0OSxcbiAgICAgIDExOCxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUJRVDJRWjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTA3ODIwMzQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMTE4MTE5MTkzNDAyMToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeVBoWk1FRU0yb2tiUUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitBY0NxWXI4NlJTL1JpUHNkMW5EcTR1MHcrdE03NWNRaVlFN3crWFdNQUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUJ0bm94OHEzY3NLK3BnblUyM3BUT0thUHl4NHZtWWFWTnZHQmR4OEZWUzNmUSsveXFkTGZlQS9tR0pBS1BrZUtRVjZlR29ueEl5eDk4cUloN2pmQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUxZNk5xb1hZNmxNZ0RpMjJJbzZDSkcxeXJHUGhzdEt0UHBHS0FyMGxramIzb3U3MjdRaWhESmdWdTdBY3BPdHovZU1Mb2pkRHV0eEJxemNJcy9hREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MDc4MjAzNDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NDgzODZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
