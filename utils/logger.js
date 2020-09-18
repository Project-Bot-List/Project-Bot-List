const moment = require("moment");
const colors = require("colors");

module.exports = {
    ready: function(ctx) {
        let line = [];
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        let lineSize = timestamp.length + ctx.length + 9
        while (!line[lineSize]) { line.push('-') };
        console.log(`+${line.join("")}+\n|${timestamp} ${colors.green("[READY]")}: ${ctx}|\n+${line.join("")}+`);
    },
    
    mod: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgBlue("[MOD]")}: ${ctx}`);
    },

    cmd: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgBlack("[CMD]")}: ${ctx}`);
    },

    error: function(ctx) {
        let line = [];
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        let lineSize = timestamp.length + ctx.length + 9
        while (!line[lineSize]) { line.push('-') };
        console.log(`+${line.join("")}+\n|${timestamp} ${colors.bgRed("[ERROR]")}: ${ctx}|\n+${line.join("")}+`);
    },
      
    debug: function(ctx) { 
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgGreen("[DEBUG]")}: ${ctx}`);
    },

    disconnect: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgRed("[DCNT]")}: ${ctx}`);
    },

    reconnect: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgGreen("[RCNT]")}: ${ctx}`);
    }
};