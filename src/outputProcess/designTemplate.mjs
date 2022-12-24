














const color = colorCode => data => `\x1b[${colorCode }m`+ data + '\x1b[0m';
const red = color('31');
const black = color('30')
const green = color('32')
const yellow = color('33')
const blue = color('34')
const purple = color('35')
const cyan = color('36')
const white = color('37') 
const highRed = color('93');
const grey = data =>light(black(data));
const sky =  data => `\x1b[38;2;25;189;255m`+ data + '\x1b[0m';

//background
const background = colorCode => data => `\x1b[4${colorCode}m` + data + '\x1b[0m';
const blackB = background(0);
const redB = background(1);
const greenB = background(2);
const yellowB = background(3);
const blueB = background(4);
const purpleB = background(5);
const cyanB = background(6);
const whiteB = background(7);
const skyB=  data => `\x1b[48;2;0;114;160m`+ data + '\x1b[0m';
const greyB=  data => `\x1b[48;05;8m`+ data + '\x1b[0m';

const light = data => '\x1b[1m' + data + '\x1b[0m';
const dark = data => '\x1b[2m' + data + '\x1b[0m';

//text mode
const italic = data => '\x1b[3m' + data + '\x1b[0m';
const underline = data => '\x1b[4m' + data + '\x1b[0m';
const blinkSlow = data => '\x1b[5m' + data + '\x1b[0m';
/*
console.log(underline('   '),red ('red'), highRed('hred'),italic('italic'), blinkSlow('bold'));
console.log(`${light(blue('ooo'))}${blue('ooo')}${dark(blue('ooo'))}`);
console.log(`${blueB(yellow('one'))}`);
console.log(`${red('one')}${yellow('one')}${blue('one')}${white('one')}`);
*/

export {black,red,green,yellow,blue,purple,cyan,white,light,dark,grey,sky,blinkSlow,underline,background,blackB,redB,greenB,yellowB,blueB,purpleB,cyanB,whiteB,skyB,greyB};
