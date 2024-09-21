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
| Richards | 37625 | 32241 | 33212 | 40851 | 1100 | 657 | 719 | 708 | 665 | 219 | 89 | 47.4 |
| DeltaBlue | 46904 | 68214 | 71017 | 38421 | 1044 | 596 | 710 | 690 | 672 | 316 | 162 | 45.6 |
| Crypto | 45112 | 41561 | 40922 | 28954 | 1364 | 798 | 645 | 770 | 626 | 178 | 305 | 55.4 |
| RayTrace | 84063 | 56257 | 58163 | 5755 | 1554 | 1123 | 1114 | 910 | 889 | 462 | 498 | 142 |
| EarleyBoyer | 67911 | 63736 | 64954 | 26983 | 3388 | 1855 | 1788 | 1478 | 1440 | 483 | 343 | 153 |
| RegExp | 17309 | 9074 | 8956 | 858 | 554 | 196 | 248 | 218 | 222 | 186 | 70.3 | 44.3 |
| Splay | 35750 | 31912 | 22907 | 3137 | 3569 | 1814 | 1944 | 1731 | 1700 | 1197 | 406 | 165 |
| NavierStokes | 34326 | 38173 | 38881 | 20270 | 1891 | 1446 | 1042 | 1415 | 1034 | 453 | 764 | 122 |
| Score | 41984 | 37143 | 36138 | 11835 | 1535 | 872 | 870 | 849 | 782 | 359 | 252 | 83.3 |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 110M | 105M | 0 | 7.9M | 3.5M | 920K | 1.0M | 7.7M | 432K | 1.6M |
| Richards | 42588 | 41586 | 38172 | 29534 | 1270 | 1326 | 1095 | 1207 | 755 | 380 | 95.5 |
| DeltaBlue | 59116 | 91461 | 100063 | 34838 | 1168 | 1317 | 1125 | 1230 | 806 | 586 | 178 |
| Crypto | 67582 | 56973 | 57993 | 20618 | 1411 | 1235 | 1339 | 1215 | 709 | 303 | 333 |
| RayTrace | 126464 | 66895 | 75109 | 10571 | 2486 | 2189 | 1260 | 1316 | 1215 | 985 | 568 |
| EarleyBoyer | 96605 | 91539 | 81595 | 27955 | 4868 | 3408 | 2382 | 2365 | 1953 | 1063 | 401 |
| RegExp | 27184 | 13247 | 12678 | 1369 | 628 | 322 | 290 | 282 | 156 | 336 | 182 |
| Splay | 42115 | 42571 | 34454 | 2196 | 3423 | 3716 | 2507 | 2450 | 2184 | 1289 | 423 |
| NavierStokes | 32912 | 39544 | 37842 | 26066 | 1434 | 2093 | 2560 | 2202 | 1499 | 757 | 847 |
| Score | 54543 | 48294 | 46653 | 12202 | 1724 | 1587 | 1320 | 1308 | 922 | 624 | 310 |
### windows
| Engine | bun | hermes | qjs | llrt | qjs(ng) | deno | node | graaljs | tjs | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 102M | 3.1M | 1.1M | 8.4M | 1.8M | 103M | 76M | 352K | 5.7M | 656K | 27M |
| Richards | 31987 | 703 | 557 | 520 | 421 | 32125 | 31553 | 35849 | 433 | 226 | 36.5 |
| DeltaBlue | 38481 | 617 | 509 | 451 | 384 | 72908 | 63143 | 28080 | 385 | 312 | 34.3 |
| Crypto | 41382 | 788 | 769 | 526 | 386 | 41821 | 41364 | 24363 | 376 | 179 | 49.7 |
| RayTrace | 75405 | 1015 | 553 | 664 | 505 | 58089 | 56239 | 3256 | 733 | 440 | 112 |
| EarleyBoyer | 57475 | 2243 | 1019 | 1107 | 0 | 65963 | 62623 | 25674 | 1145 | 544 | 105 |
| RegExp | 14758 | 401 | 198 | 194 | 192 | 8766 | 8290 | 938 | 220 | 197 | 38.4 |
| Splay | 30282 | 2339 | 1002 | 1088 | 971 | 21864 | 28913 | 2687 | 1343 | 1107 | 121 |
| NavierStokes | 34577 | 1095 | 1299 | 1108 | 655 | 38990 | 32254 | 26860 | 660 | 478 | 111 |
| Score | 36865 | 972 | 649 | 618 | 0 | 35974 | 34984 | 10419 | 564 | 365 | 66.4 |
