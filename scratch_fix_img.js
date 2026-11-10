const fs = require('fs');

let header = fs.readFileSync('components/global/site-header.tsx', 'utf8');

header = header.replace(
  'className="w-34 sm:w-38.5 h-10.5 object-contain"',
  'className="w-34 sm:w-38.5 h-auto object-contain"'
);

fs.writeFileSync('components/global/site-header.tsx', header, 'utf8');
console.log('Fixed Next.js Image aspect ratio in site-header.tsx');

