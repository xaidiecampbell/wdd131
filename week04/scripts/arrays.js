let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');
let namesLength = names.map((name) => name.length);
// let namesAverage = names.reduce((sum.namesLength) => name.average)
names.reduce((total, name) => total + name.length, 0) / names.length;