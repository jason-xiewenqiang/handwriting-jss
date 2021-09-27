let str = 'hello world';
console.log(str.substring(1, 4));
console.log(str.slice(2,5));
console.log(str.split(', '));
console.log(str.indexOf('l')); // 默认就是 0 位开始查找得
console.log(str.indexOf('l', 2));
console.log(str.indexOf('zz'));
console.log(str.lastIndexOf('l'));
console.log(str.startsWith('Hel'));
console.log(str.endsWith('rd'));
console.log(str.includes('lo'));
console.log(str.replace('llo', 'xxxx'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.normalize());
console.log(str.normalize('NFD'));
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(str.length-1));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(0));

console.log('D'.padStart(3));
console.log('X'.padEnd(3));
console.log('x'.padStart(3, '#'));
console.log('x'.padEnd(3, '_'));
console.log(' test'.trim());
console.log(' test '.trimStart());
console.log(' test '.trimEnd());
console.log(str.concat('!'));
console.log('<>'.repeat(5));

