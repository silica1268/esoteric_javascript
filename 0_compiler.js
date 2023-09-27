var fs = require("fs");
var path = require("path");

const n0 = "+[]";
const n1 = "++[[]][+[]]";

const undefinedLiteral = "[][[]]";
const trueLiteral = `!${n0}`;
const falseLiteral = `!${trueLiteral}`;

const string = lit => `(${lit}+[])`;

const undefinedString = string(undefinedLiteral);
const trueString = string(trueLiteral);
const falseString = string(falseLiteral);


const map = {};

const digit = n => {
	if (n == 0) return n0;
	str = n1;
	for (let i=1; i<n; i++) {
		str += `+(${n1})`;
	}
	return str;
}
for (let i=0; i<10; i++) {
	map[i.toString()] = `((${digit(i)})+[])`;
}

const number = n => {
	if (n == 0) return n0;
	if (n < 10) return digit(n);
	return `+(${n.toString().split('').map(c => map[c]).join("+")})`;
};

const fromStr = s => s.split('').map(c => {
	if (!(c in map)) return `([]+[])[${fromStr("constructor")}][${fromStr("fromCharCode")}](${number(c.charCodeAt(0))})`;
	return map[c];
}).join("+");

map['+'] = `(+(${fromStr("999999999999999999999")})+[])[${number(2)}]`;

map.n = `${undefinedString}[${number(1)}]`;
map.d = `${undefinedString}[${number(2)}]`;
map.t = `${trueString}[${number(0)}]`;
map.r = `${trueString}[${number(1)}]`;
map.u = `${trueString}[${number(2)}]`;
map.e = `${trueString}[${number(3)}]`;
map.f = `${falseString}[${number(0)}]`;
map.a = `${falseString}[${number(1)}]`;
map.s = `${falseString}[${number(3)}]`;

const at = fromStr("at");

const functionString = `[[][${at}]+[]][${number(0)}]`;
map.c = `${functionString}[${number(3)}]`;
map.i = `${functionString}[${number(5)}]`;
map.o = `${functionString}[${number(6)}]`;
map[" "] = `${functionString}[${number(8)}]`;
map["("] = `${functionString}[${number(11)}]`;
map[")"] = `${functionString}[${number(12)}]`;
map["{"] = `${functionString}[${number(14)}]`;
map["["] = `${functionString}[${number(16)}]`;
map["]"] = `${functionString}[${number(28)}]`;
map["}"] = `${functionString}[${number(30)}]`;

const constructorString = fromStr("constructor");

map.S = `(([]+[])[${constructorString}]+[])[${number(9)}]`;
map.g = `(([]+[])[${constructorString}]+[])[${number(14)}]`;

map.m = `(${number(22)})[${fromStr("toString")}](${number(23)})`;
map.h = `(${number(17)})[${fromStr("toString")}](${number(18)})`;

const matchString = fromStr("match");
const nullLiteral = `([]+[])[${matchString}](${n0})`;
map.l = `${string(nullLiteral)}[${number(2)}]`

//const matchString = `([]+[])[${matchString}]()`;
//map.p = ``;
//map["\\"] = ``;
//map.C = `[][${at}][${constructorString}](${fromStr("return escape")})(${map["\\"]})[${number(2)}]`;

// the following line only works in node because the constructor's constructor is 'Object'
// could use {}+{}, but need '+'
//const objectLiteral = `[][${at}][${constructorString}](${fromStr("return constructor")})()`;
const objectString = `[][${at}][${constructorString}](${fromStr("return {}+{}")})()`;
map.b = `${objectString}[${number(2)}]`;
map.j = `${objectString}[${number(3)}]`;
map.O = `${objectString}[${number(8)}]`;

//map.C = `[][${at}][${constructorString}](${fromStr("return Object")})()[${fromStr("entries")}]([][${at}][${constructorString}](${fromStr("return console")})())[${number(19)}][${number(0)}][${number(0)}]`;
map.C = `[][${at}][${constructorString}](${fromStr("return btoa")})()(${fromStr("0 ")})[${number(1)}]`;


const compile = code => `[][${at}][${constructorString}](${fromStr(code)})()`;

fs.readFile(path.join(__dirname, "1_compressed_compiler.js"), "utf8", (err, data)=>{
	fs.writeFile(path.join(__dirname, "2_compiled_compiler.js"), compile(data), "utf8", (err1, data1)=>{});
});