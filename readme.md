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

- [x] [bun](https://github.com/oven-sh/bun): Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one
- [x] [node](https://github.com/nodejs/node): Node.js JavaScript runtime
- [x] [deno](https://github.com/denoland/deno): A modern runtime for JavaScript and TypeScript.
- [x] [graaljs](https://github.com/oracle/graaljs): A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications!
- [x] [hermes](https://github.com/facebook/hermes): A JavaScript engine optimized for running React Native.
- [x] [llrt](https://github.com/awslabs/llrt): LLRT (Low Latency Runtime) is a lightweight JavaScript runtime
- [x] [txiki.js](https://github.com/saghul/txiki.js): A tiny JavaScript runtime
- [x] [QuickJS](https://bellard.org/quickjs/): version 2019-07-09, qjs executable, 64 bits, compiled with -O2.
- [x] [QuickJS-ng](https://github.com/quickjs-ng/quickjs): QuickJS, the Next Generation: a mighty JavaScript engine
- [x] [MuJS](https://github.com/ccxvii/mujs): An embeddable Javascript interpreter in C.
- [x] [XS](https://github.com/Moddable-OpenSource/moddable): Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers.
- [x] [Hermes](https://github.com/facebook/hermes): version 0.1.0, 64 bit Linux binary downloaded from here. The benchmark was run with the -O option (=enable expensive optimizations).
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | bun | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 93M | 110M | 137M | 4.0K | 36M | 7.6M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 37491 | 31302 | 33304 | 41794 | 1126 | 689 | 712 | 711 | 665 | 218 | 88.7 | 47.4 |
| DeltaBlue | 47658 | 65906 | 68035 | 39340 | 1048 | 590 | 706 | 690 | 657 | 318 | 162 | 45.7 |
| Crypto | 44110 | 41688 | 41544 | 26339 | 1361 | 830 | 640 | 766 | 623 | 178 | 321 | 57.4 |
| RayTrace | 85765 | 56331 | 56905 | 3728 | 1551 | 1121 | 1127 | 925 | 878 | 478 | 501 | 144 |
| EarleyBoyer | 68328 | 65571 | 68371 | 33156 | 3367 | 1874 | 1807 | 1543 | 1467 | 497 | 344 | 156 |
| RegExp | 17404 | 9092 | 9173 | 1247 | 539 | 195 | 247 | 234 | 227 | 189 | 70.2 | 43.6 |
| Splay | 36109 | 31920 | 22940 | 2807 | 3681 | 1899 | 2021 | 1810 | 1768 | 1267 | 392 | 169 |
| NavierStokes | 34429 | 39099 | 38881 | 32764 | 1809 | 1494 | 1038 | 1465 | 1063 | 440 | 783 | 125 |
| Score | 42166 | 37120 | 36272 | 12546 | 1531 | 890 | 874 | 872 | 789 | 364 | 254 | 84.3 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 110M | 0 | 7.9M | 3.5M | 920K | 1.0M | 7.7M | 432K | 1.6M |
| Richards | 47114 | 45342 | 44523 | 29897 | 1356 | 1344 | 1079 | 1246 | 861 | 412 | 109 |
| DeltaBlue | 60386 | 105266 | 83527 | 39281 | 1259 | 1354 | 1117 | 1238 | 799 | 617 | 193 |
| Crypto | 66317 | 58548 | 55634 | 23513 | 1483 | 1242 | 1345 | 1199 | 682 | 312 | 380 |
| RayTrace | 125132 | 80289 | 77847 | 1285 | 2524 | 2186 | 1274 | 1321 | 1214 | 987 | 629 |
| EarleyBoyer | 101970 | 97421 | 93251 | 26391 | 5233 | 3408 | 2360 | 2372 | 2056 | 1125 | 423 |
| RegExp | 27302 | 13742 | 13338 | 1465 | 738 | 320 | 289 | 281 | 158 | 326 | 187 |
| Splay | 49677 | 40811 | 43255 | 1885 | 4790 | 3708 | 2567 | 2481 | 2222 | 1464 | 431 |
| NavierStokes | 33586 | 40877 | 40621 | 28408 | 1628 | 2181 | 2562 | 2209 | 1447 | 795 | 879 |
| Score | 56886 | 51581 | 49353 | 9621 | 1930 | 1603 | 1321 | 1315 | 937 | 654 | 333 |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 102M | 76M | 103M | 352K | 3.1M | 1.1M | 8.4M | 5.7M | 656K | 27M | 1.8M |
| Richards | 32132 | 32234 | 32668 | 42627 | 686 | 560 | 513 | 429 | 226 | 36.7 | 442 |
| DeltaBlue | 40947 | 69345 | 71017 | 26685 | 615 | 528 | 477 | 396 | 323 | 34.4 | 413 |
| Crypto | 42856 | 41395 | 40976 | 19717 | 788 | 767 | 522 | 360 | 182 | 50.2 | 437 |
| RayTrace | 68967 | 54759 | 56831 | 3696 | 996 | 549 | 685 | 740 | 449 | 114 | 504 |
| EarleyBoyer | 57587 | 66871 | 67932 | 27036 | 2238 | 1034 | 1135 | 1172 | 570 | 116 | 0 |
| RegExp | 15440 | 8529 | 8883 | 1080 | 407 | 201 | 199 | 222 | 203 | 39.1 | 189 |
| Splay | 31154 | 30127 | 23991 | 3028 | 2451 | 1034 | 1129 | 1415 | 1172 | 121 | 1014 |
| NavierStokes | 34587 | 39326 | 39248 | 26118 | 1091 | 1290 | 1108 | 652 | 488 | 111 | 741 |
| Score | 37274 | 36882 | 36382 | 10846 | 974 | 656 | 630 | 568 | 376 | 67.7 | 0 |
