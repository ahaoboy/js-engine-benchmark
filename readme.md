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
| Executable size | 97M | 112M | 137M | 4.0K | 36M | 8.2M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 41339 | 32333 | 33406 | 35757 | 1123 | 764 | 723 | 709 | 697 | 225 | 87.3 | 47.4 |
| DeltaBlue | 51327 | 65834 | 71679 | 39334 | 1047 | 703 | 727 | 693 | 657 | 321 | 161 | 45.2 |
| Crypto | 45474 | 41715 | 41806 | 26647 | 1376 | 804 | 639 | 746 | 624 | 178 | 315 | 57.4 |
| RayTrace | 109740 | 56165 | 58755 | 4359 | 1577 | 1235 | 1112 | 943 | 1039 | 474 | 498 | 144 |
| EarleyBoyer | 64857 | 65466 | 67096 | 22520 | 3373 | 2031 | 1808 | 1482 | 1518 | 468 | 343 | 154 |
| RegExp | 16944 | 9083 | 9246 | 895 | 529 | 193 | 236 | 226 | 231 | 187 | 71 | 43.8 |
| Splay | 37364 | 31814 | 22736 | 2083 | 3525 | 1861 | 1936 | 1745 | 1683 | 697 | 394 | 174 |
| NavierStokes | 34622 | 39287 | 38990 | 23252 | 1878 | 1460 | 954 | 1367 | 1040 | 455 | 851 | 125 |
| Score | 44382 | 37249 | 36621 | 10601 | 1531 | 932 | 858 | 852 | 808 | 338 | 255 | 84.5 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
| Richards | 51883 | 44438 | 43333 | 30141 | 1372 | 1349 | 1338 | 1108 | 794 | 414 | 110 |
| DeltaBlue | 65754 | 104658 | 90106 | 38370 | 1227 | 1379 | 1236 | 1111 | 767 | 618 | 194 |
| Crypto | 64558 | 59606 | 57583 | 24042 | 1476 | 1239 | 1226 | 1352 | 580 | 298 | 384 |
| RayTrace | 178559 | 81473 | 79697 | 1535 | 2559 | 2194 | 1581 | 1273 | 1147 | 1017 | 598 |
| EarleyBoyer | 101692 | 97012 | 94710 | 24736 | 5252 | 3381 | 2643 | 2355 | 1875 | 1121 | 405 |
| RegExp | 27520 | 13833 | 13520 | 1316 | 705 | 313 | 281 | 288 | 154 | 328 | 189 |
| Splay | 52268 | 41234 | 44527 | 2206 | 4583 | 3286 | 2497 | 2369 | 2196 | 1351 | 407 |
| NavierStokes | 33687 | 40836 | 40284 | 19511 | 1534 | 2176 | 2251 | 2568 | 1010 | 786 | 941 |
| Score | 61082 | 51699 | 50327 | 9377 | 1894 | 1577 | 1383 | 1311 | 845 | 646 | 331 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 105M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
| Richards | 37537 | 33385 | 30321 | 36049 | 697 | 567 | 503 | 437 | 229 | 37 | 419 |
| DeltaBlue | 39869 | 73722 | 64491 | 28279 | 613 | 528 | 454 | 419 | 311 | 34.4 | 398 |
| Crypto | 41667 | 41820 | 41862 | 22092 | 790 | 766 | 496 | 401 | 183 | 49.3 | 398 |
| RayTrace | 102562 | 55425 | 54463 | 3249 | 1017 | 557 | 675 | 758 | 462 | 114 | 500 |
| EarleyBoyer | 58940 | 67403 | 62105 | 26161 | 2249 | 1046 | 1119 | 1155 | 571 | 112 | 0 |
| RegExp | 14971 | 8839 | 8290 | 1038 | 406 | 200 | 190 | 216 | 200 | 38.1 | 189 |
| Splay | 32327 | 23551 | 30013 | 3221 | 2445 | 1019 | 1105 | 1415 | 1156 | 121 | 993 |
| NavierStokes | 34577 | 39029 | 38842 | 24017 | 1090 | 1294 | 1110 | 671 | 485 | 110 | 701 |
| Score | 39810 | 36462 | 35763 | 10552 | 978 | 658 | 613 | 582 | 374 | 67 | 0 |
