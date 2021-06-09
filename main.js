let fs = require("fs");
let srtfile = fs.readFileSync("input.srt", "utf-8");
let retvar = "";
let srtvar = srtfile.split("\r\n");
for (let i = 2; i < srtvar.length; i+=4) {
  const el = srtvar[i];
  retvar += "\r\n"+el;
}
fs.writeFileSync("output.txt", retvar);