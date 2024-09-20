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
| Richards | 644 | 708 | 677 | 713 | 215 | 47.6 | 257 | 1105 | 88.2 | 33254 | 32248 |
| DeltaBlue | 598 | 682 | 679 | 696 | 321 | 45.8 | 271 | 1028 | 160 | 67678 | 64207 |
| Crypto | 798 | 743 | 618 | 651 | 181 | 57.3 | 278 | 1362 | 316 | 41389 | 41602 |
| RayTrace | 1122 | 902 | 910 | 1113 | 493 | 144 | 341 | 1562 | 494 | 59051 | 54981 |
| EarleyBoyer | 1846 | 1511 | 1488 | 1818 | 529 | 158 | 0 | 3357 | 343 | 67432 | 67064 |
| RegExp | 197 | 227 | 229 | 251 | 193 | 43.7 | 0 | 559 | 70.3 | 9056 | 8947 |
| Splay | 1923 | 1830 | 1749 | 2049 | 876 | 175 | 0 | 3683 | 399 | 23551 | 33648 |
| NavierStokes | 1486 | 1400 | 1041 | 1057 | 462 | 124 | 0 | 1878 | 761 | 38912 | 39099 |
| Score | 880 | 855 | 795 | 879 | 355 | 84.9 | 0 | 1538 | 252 | 36395 | 37290 |