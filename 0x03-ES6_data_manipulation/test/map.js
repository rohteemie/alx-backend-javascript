console.log('----MAP JS OBJECT---- \n')

const map = new Map();

map.set('Name', 'Rotimi');
map.set('Job', 'Programmer');
map.set('Age', 25);
map.set('Name', 'JohnPaul');


console.log(map.get('Name'));
console.log(map);

for (const item of map.entries()) {
  console.log(item);
}
