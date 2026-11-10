const fs = require('fs');
const p = 'app/how-can-we-help/page.tsx';
let c = fs.readFileSync(p, 'utf8');
c = c.replace('title="How can we"', 'title={<>How can we<br className="hidden sm:block" /></>}');
fs.writeFileSync(p, c, 'utf8');
console.log('Done');

