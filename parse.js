const fs = require('fs');

const o = {}
let currentKey;
const fileName = process.argv[2]
if (!fileName) throw new Error('File name argument required!')

fs.readFileSync(fileName, 'utf8').split('\n').forEach((line) => {
   if (line.startsWith('#')) {
      currentKey = line.replace('#', '').replace(' ', '')
      return
   }

   if (currentKey) {
      if (!o[currentKey]) o[currentKey] = line
      else o[currentKey] = o[currentKey] + '\n' + line
   }
})

for (key in o) {
   o[key] = o[key].replace(/^\s+|\s+$/g, '')
   if (!o[key]) delete o[key]
}

console.log(o)
fs.writeFileSync(fileName + '.json', JSON.stringify(o))