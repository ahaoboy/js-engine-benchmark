fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build


qjs  ./dist/bench.js
llrt ./dist/bench.js
mujs ./dist/bench.js
boa  ./dist/bench.js
node ./dist/bench.js
deno ./dist/bench.js
```

## Engine & Runtime

- [QuickJS-ng](https://github.com/quickjs-ng/quickjs): version 2019-07-09, qjs executable, 64 bits, compiled with -O2.
- [QuickJS](https://bellard.org/quickjs/): version 2019-07-09, qjs executable, 64 bits, compiled with -O2.
- [DukTape](https://github.com/svaarala/duktape): version 2.3.0, duk executable, 64 bits, compiled with -O2.
- [XS](https://github.com/Moddable-OpenSource/moddable): version 8.8.0, xst executable, 64 bits, compiled with -O3. The engine cannot correctly run the RegExp test, so it was disabled.
- [MuJS](https://github.com/ccxvii/mujs): version 1.0.6, mujs executable, 64 bits, compiled with -O2. JS_STACKSIZE and JS_ENVLIMIT were increased to 32768 to run EarleyBoyer. REG_MAXSUB was increased to 12 to run RegExp.
- [JerryScript](https://github.com/jerryscript-project/jerryscript): git version 2b8c4286, jerry executable, 64 bits. The engine could not run EarleyBoyer, RegExp and Splay.
- [Hermes](https://github.com/facebook/hermes): version 0.1.0, 64 bit Linux binary downloaded from here. The benchmark was run with the -O option (=enable expensive optimizations).
- [V8](https://v8.dev/): version 7.7.289, Linux 64 bit executable downloaded from here.
- [txiki.js](https://github.com/saghul/txiki.js): A tiny JavaScript runtime
- [llrt](https://github.com/awslabs/llrt): LLRT (Low Latency Runtime) is a lightweight JavaScript runtime
- [deno](https://github.com/denoland/deno): A modern runtime for JavaScript and TypeScript.
- [node](https://github.com/nodejs/node): Node.js JavaScript runtime

## bench
| Engine | llrt | qjs | qjs-ng | tjs | mujs | boa | jerry | hermes | xst | deno | node |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 7.6M | 1.1M | 1.3M | 5.1M | 396K | 27M | 452K | 36M | 2.1M | 137M | 110M |
| Richards | 650 | 693 | 663 | 0 | 216 | 46.8 | 0 | 1114 | 89.1 | 33297 | 31680 |
| DeltaBlue | 592 | 691 | 677 | 0 | 318 | 44.8 | 0 | 1047 | 162 | 71983 | 67004 |
| Crypto | 810 | 755 | 610 | 0 | 178 | 56 | 0 | 1369 | 314 | 41629 | 41611 |
| RayTrace | 1127 | 920 | 905 | 0 | 476 | 142 | 0 | 1562 | 498 | 56848 | 57144 |
| EarleyBoyer | 1861 | 1483 | 1448 | 0 | 474 | 151 | 0 | 3369 | 341 | 66633 | 63712 |
| RegExp | 196 | 221 | 228 | 0 | 188 | 43.6 | 0 | 552 | 70.2 | 9110 | 9137 |
| Splay | 1830 | 1737 | 1721 | 0 | 1257 | 172 | 0 | 3643 | 396 | 22682 | 32425 |
| NavierStokes | 1458 | 1334 | 1011 | 0 | 444 | 121 | 0 | 1877 | 752 | 38842 | 38990 |
| Score | 874 | 842 | 784 | 0 | 361 | 83.2 | 0 | 1541 | 252 | 36328 | 37260 |
| Error | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |