let fs = require("fs");
let srtfile = fs.readFileSync("input.srt", "utf-8");
let srtvar = srtfile.split("\r\n");
let retvar = ""+srtvar[2];
for (let i = 6; i < srtvar.length; i+=4) {
  const el = srtvar[i];
  if(el != ""){
    retvar += "\r\n"+el;
  }
}
fs.writeFileSync("output.txt", retvar);