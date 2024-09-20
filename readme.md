fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

qjs-ng  ./dist/bench.js
qjs     ./dist/bench.js
llrt    ./dist/bench.js
mujs    ./dist/bench.js
boa     ./dist/bench.js
node    ./dist/bench.js
deno    ./dist/bench.js
jer     ./dist/bench.js
hermes  ./dist/bench.js
xst     ./dist/bench.js
tjs run ./dist/bench.js

or

npm run update
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
| Engine | node | deno | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 110M | 137M | 36M | 5.1M | 7.6M | 1.1M | 1.3M | 396K | 2.1M | 27M | 452K |
| Richards | 31256 | 33212 | 1136 | 709 | 636 | 700 | 666 | 230 | 88.7 | 47.5 | 270 |
| DeltaBlue | 64472 | 72809 | 1074 | 707 | 589 | 681 | 650 | 322 | 162 | 44.7 | 271 |
| Crypto | 41583 | 41260 | 1360 | 659 | 805 | 789 | 621 | 179 | 319 | 56.5 | 278 |
| RayTrace | 57070 | 58549 | 1545 | 1125 | 1125 | 908 | 886 | 483 | 497 | 143 | 342 |
| EarleyBoyer | 67158 | 65924 | 3357 | 1791 | 1845 | 1488 | 1401 | 507 | 342 | 154 | 0 |
| RegExp | 9029 | 9038 | 552 | 247 | 196 | 222 | 222 | 191 | 69.7 | 43.9 | 0 |
| Splay | 32385 | 23103 | 3577 | 1944 | 1768 | 1729 | 1711 | 856 | 395 | 173 | 0 |
| NavierStokes | 38139 | 38912 | 1890 | 1095 | 1479 | 1365 | 1040 | 455 | 764 | 124 | 0 |
| Score | 37090 | 36469 | 1543 | 877 | 868 | 848 | 776 | 353 | 252 | 84 | 0 |