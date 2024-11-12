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
- [x] [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore): JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ​ECMAScript as in ​ECMA-262 specification.
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | bun | jsc | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 38169 | 38077 | 31684 | 33473 | 35609 | 1137 | 752 | 730 | 695 | 674 | 229 | 89.1 | 48.2 |
| DeltaBlue | 49622 | 50627 | 66455 | 73074 | 27148 | 1070 | 710 | 727 | 695 | 647 | 328 | 161 | 45.2 |
| Crypto | 45513 | 45948 | 41952 | 41889 | 16061 | 1351 | 834 | 640 | 767 | 626 | 179 | 319 | 56.6 |
| RayTrace | 113440 | 86875 | 56848 | 56905 | 8844 | 1556 | 1209 | 1066 | 933 | 1016 | 471 | 495 | 145 |
| EarleyBoyer | 68609 | 69300 | 65941 | 66018 | 21243 | 3459 | 2038 | 1813 | 1519 | 1548 | 489 | 343 | 155 |
| RegExp | 17200 | 17109 | 9056 | 9283 | 1463 | 561 | 193 | 238 | 225 | 229 | 189 | 70.6 | 43.7 |
| Splay | 35343 | 35408 | 33314 | 22475 | 2750 | 3683 | 1919 | 2011 | 1781 | 1711 | 1129 | 389 | 175 |
| NavierStokes | 34474 | 34839 | 39208 | 39029 | 27602 | 1830 | 1494 | 1052 | 1321 | 1020 | 439 | 769 | 125 |
| Score | 44005 | 42797 | 37507 | 36477 | 11583 | 1551 | 939 | 871 | 852 | 802 | 361 | 252 | 84.8 |
### macos
| Engine | deno | bun | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 40731 | 37180 | 40717 | 21375 | 1296 | 1341 | 1349 | 1105 | 826 | 346 | 94.2 |
| DeltaBlue | 86958 | 42064 | 64822 | 14420 | 1146 | 1375 | 1227 | 1104 | 831 | 564 | 166 |
| Crypto | 51976 | 41859 | 46480 | 9802 | 1437 | 1237 | 1243 | 1350 | 768 | 269 | 348 |
| RayTrace | 54019 | 107043 | 68745 | 1587 | 2413 | 2138 | 1568 | 1237 | 1182 | 885 | 528 |
| EarleyBoyer | 82554 | 59584 | 59076 | 11093 | 4824 | 3342 | 2591 | 2381 | 1970 | 1015 | 369 |
| RegExp | 12104 | 13792 | 7517 | 636 | 671 | 296 | 282 | 290 | 172 | 322 | 170 |
| Splay | 36263 | 22705 | 23779 | 1018 | 4009 | 2817 | 2518 | 2554 | 2174 | 1211 | 390 |
| NavierStokes | 35509 | 27992 | 27613 | 11973 | 1352 | 1954 | 2190 | 2604 | 1302 | 745 | 819 |
| Score | 43489 | 37191 | 35387 | 5034 | 1756 | 1507 | 1378 | 1323 | 938 | 585 | 295 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 36760 | 32637 | 31500 | 35940 | 694 | 554 | 486 | 440 | 229 | 35.8 | 414 |
| DeltaBlue | 38084 | 70151 | 66746 | 31142 | 623 | 516 | 455 | 417 | 330 | 33.7 | 396 |
| Crypto | 42996 | 41225 | 41741 | 19357 | 789 | 763 | 485 | 395 | 184 | 48.7 | 386 |
| RayTrace | 98123 | 55943 | 51725 | 3696 | 1012 | 563 | 656 | 758 | 444 | 112 | 497 |
| EarleyBoyer | 57884 | 66494 | 61046 | 30286 | 2247 | 1032 | 1091 | 1117 | 545 | 106 | 0 |
| RegExp | 14805 | 8745 | 8118 | 981 | 404 | 199 | 187 | 218 | 198 | 38.3 | 190 |
| Splay | 31040 | 22597 | 28375 | 2668 | 2388 | 1002 | 1082 | 1389 | 602 | 119 | 975 |
| NavierStokes | 34577 | 36878 | 39287 | 26267 | 1096 | 1294 | 1038 | 699 | 486 | 110 | 698 |
| Score | 39073 | 35564 | 35474 | 10660 | 975 | 652 | 597 | 581 | 344 | 65.7 | 0 |
