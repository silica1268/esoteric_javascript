const n0="+[]";
const n1="++[[]][+[]]";
const ul="[][[]]";
const tl=`!${n0}`;
const fl=`!${tl}`;
const str=l => `(${l}+[])`;
const u=str(ul);
const ts=str(tl);
const f=str(fl);
const n=d => {
	if (d == 0) return n0;
	r=n1;
	for (let i=1; i<d; i++) {
		r += `+(${n1})`;
	}
	return r;
};
const t={};
const s=ss => ss.split('').map(c => {
	if (!(c in t)) return `([]+[])[${s("constructor")}][${s("fromCharCode")}](${n(c.charCodeAt(0))})`;
	return t[c];
}).join("+");
for (let i=0; i<10; i++) {
	t[i.toString()]=`((${n(i)})+[])`;
}
t['+']=`(+(${s("999999999999999999999")})+[])[${n(2)}]`;
t.n=`${u}[${n(1)}]`;
t.d=`${u}[${n(2)}]`;
t.t=`${ts}[${n(0)}]`;
t.r=`${ts}[${n(1)}]`;
t.u=`${ts}[${n(2)}]`;
t.e=`${ts}[${n(3)}]`;
t.f=`${f}[${n(0)}]`;
t.a=`${f}[${n(1)}]`;
t.s=`${f}[${n(3)}]`;
const at=s("at");
const fstr=`[[][${at}]+[]][${n(0)}]`;
t.c=`${fstr}[${n(3)}]`;
t.i=`${fstr}[${n(5)}]`;
t.o=`${fstr}[${n(6)}]`;
t[" "]=`${fstr}[${n(8)}]`;
t["("]=`${fstr}[${n(11)}]`;
t[")"]=`${fstr}[${n(12)}]`;
t["{"]=`${fstr}[${n(14)}]`;
t["["]=`${fstr}[${n(16)}]`;
t["]"]=`${fstr}[${n(28)}]`;
t["}"]=`${fstr}[${n(30)}]`;
const cs=s("constructor");
t.S=`(([]+[])[${cs}]+[])[${n(9)}]`;
t.g=`(([]+[])[${cs}]+[])[${n(14)}]`;
t.m=`(${n(22)})[${s("toString")}](${n(23)})`;
t.h=`(${n(17)})[${s("toString")}](${n(18)})`;
t.l=`${str(`([]+[])[${s("match")}](${n0})`)}[${n(2)}]`;
const os=`[][${at}][${cs}](${s("return {}+{}")})()`;
t.b=`${os}[${n(2)}]`;
t.j=`${os}[${n(3)}]`;
t.O=`${os}[${n(8)}]`;
t.C=`[][${at}][${cs}](${s("return btoa")})()(${s("0 ")})[${n(1)}]`;
console.log(`[][${at}][${cs}](${s(prompt("Enter some javascript"))})()`);
