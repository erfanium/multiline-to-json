const fs = require('fs');

const o = {}
let currentKey;
const fileName = process.argv[2]
if (!fileName) throw new Error('File name argument required!')

fs.readFileSync(fileName, 'utf8').split('\n').forEach((line) => {
   if (!line) return
   if (line.startsWith('#')) {
      currentKey = line.replace('#', '').replace(' ', '')
      return
   }

   if (currentKey) {
      if (!o[currentKey]) o[currentKey] = line
      else o[currentKey] = o[currentKey] + '\n' + line
   }
})

console.log(o)
fs.writeFileSync(fileName + '.json', JSON.stringify(o))