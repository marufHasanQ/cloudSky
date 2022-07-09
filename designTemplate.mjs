













console.log('\x1b[32m<text><text>\x1b[0m');

const color = colorCode => data => `\x1b[${colorCode }m`+ data + '\x1b[0m';
const red = color('31');
const black = color('30')
const green = color('32')
const yellow = color('33')
const blue = color('34')
const purple = color('35')
const cyan = color('36')
const white = color('37') 
const grey = data =>light(black(data));
const background = colorCode => data => `\x1b[4${colorCode}m` + data + '\x1b[0m';
const blueBackground = background(4);
const light = data => '\x1b[1m' + data + '\x1b[0m';
const dark = data => '\x1b[2m' + data + '\x1b[0m';
console.log(`${light(blue('ooo'))}${blue('ooo')}${dark(blue('ooo'))}`);
console.log(`${blueBackground(yellow('one'))}`);
console.log(`${red('one')}${yellow('one')}${blue('one')}${white('one')}`);
export {black,red,green,yellow,blue,purple,cyan,white,light,dark,grey,blueBackground};
