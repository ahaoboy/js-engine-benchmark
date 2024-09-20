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
| Executable size | 110M | 137M | 36M | 5.1M | 7.6M | 1.1M | 0 | 396K | 2.1M | 27M | 452K |
| Richards | 32150 | 32728 | 1131 | 714 | 642 | 710 | 0 | 231 | 88.9 | 47.6 | 262 |
| DeltaBlue | 66587 | 73497 | 1066 | 687 | 586 | 680 | 0 | 321 | 162 | 45.4 | 269 |
| Crypto | 41230 | 41094 | 1364 | 655 | 788 | 773 | 0 | 179 | 316 | 56.9 | 279 |
| RayTrace | 56313 | 57719 | 1591 | 1116 | 1127 | 930 | 0 | 487 | 494 | 143 | 347 |
| EarleyBoyer | 63850 | 66649 | 3359 | 1785 | 1828 | 1478 | 0 | 473 | 341 | 150 | 0 |
| RegExp | 8992 | 8938 | 555 | 246 | 197 | 227 | 0 | 185 | 69.7 | 42.8 | 0 |
| Splay | 31162 | 22133 | 3606 | 1962 | 1752 | 1734 | 0 | 819 | 391 | 163 | 0 |
| NavierStokes | 39060 | 38881 | 1863 | 1097 | 1408 | 1311 | 0 | 430 | 756 | 124 | 0 |
| Score | 36948 | 36163 | 1547 | 874 | 859 | 847 | 0 | 345 | 251 | 83.1 | 0 |