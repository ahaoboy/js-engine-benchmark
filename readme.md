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
| Engine | node | deno | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 110M | 137M | 36M | 7.6M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M | 452K |
| Richards | 32160 | 33318 | 1091 | 638 | 706 | 684 | 655 | 210 | 89.2 | 47.6 | 259 |
| DeltaBlue | 67639 | 74475 | 1056 | 597 | 686 | 649 | 655 | 319 | 162 | 45.5 | 271 |
| Crypto | 41749 | 41712 | 1367 | 811 | 646 | 788 | 638 | 177 | 313 | 56.4 | 275 |
| RayTrace | 57127 | 57440 | 1545 | 1110 | 1104 | 886 | 892 | 485 | 491 | 142 | 340 |
| EarleyBoyer | 60770 | 67999 | 3365 | 1869 | 1822 | 1519 | 1486 | 522 | 343 | 156 | 0 |
| RegExp | 9155 | 9119 | 555 | 194 | 250 | 227 | 227 | 190 | 70 | 43.9 | 0 |
| Splay | 31684 | 23070 | 3663 | 1838 | 1984 | 1714 | 1737 | 1284 | 415 | 161 | 0 |
| NavierStokes | 39099 | 38842 | 1882 | 1507 | 1092 | 1404 | 1068 | 440 | 754 | 122 | 0 |
| Score | 37083 | 36717 | 1538 | 875 | 874 | 844 | 791 | 366 | 253 | 83.4 | 0 |