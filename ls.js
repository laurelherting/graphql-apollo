const fs = require('fs');
const files = fs.readdirSync('.');
for (fn in files) {
  console.log(files[fn]);
}

