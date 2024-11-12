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
| Engine | bun | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 97M | 112M | 137M | 4.0K | 36M | 8.2M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 41610 | 31719 | 33410 | 35990 | 1133 | 765 | 734 | 712 | 667 | 232 | 87.7 | 47.8 |
| DeltaBlue | 50071 | 69186 | 70647 | 40200 | 1070 | 710 | 733 | 692 | 678 | 318 | 159 | 45.6 |
| Crypto | 44772 | 41793 | 41751 | 27343 | 1371 | 808 | 645 | 755 | 615 | 181 | 316 | 56.8 |
| RayTrace | 113810 | 55518 | 58089 | 5924 | 1558 | 1199 | 1135 | 909 | 1020 | 480 | 498 | 145 |
| EarleyBoyer | 67811 | 58598 | 67938 | 30672 | 3445 | 2040 | 1833 | 1499 | 1553 | 493 | 343 | 155 |
| RegExp | 17035 | 9047 | 9283 | 1344 | 556 | 193 | 241 | 227 | 223 | 188 | 70.7 | 44.2 |
| Splay | 35700 | 31741 | 22589 | 2039 | 3683 | 1921 | 2078 | 1807 | 1643 | 1193 | 360 | 166 |
| NavierStokes | 34622 | 39326 | 39099 | 23229 | 1805 | 1436 | 998 | 1406 | 1071 | 449 | 766 | 122 |
| Score | 44420 | 36808 | 36555 | 12094 | 1548 | 932 | 880 | 857 | 803 | 365 | 249 | 84.1 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 920K | 1.0M | 8.2M | 432K | 1.6M |
| Richards | 51989 | 42034 | 40025 | 29848 | 1119 | 1219 | 1047 | 1124 | 732 | 383 | 104 |
| DeltaBlue | 61027 | 109564 | 88750 | 38844 | 1016 | 1274 | 1064 | 1056 | 759 | 594 | 191 |
| Crypto | 64752 | 59718 | 55962 | 23971 | 1374 | 1116 | 1272 | 1065 | 465 | 279 | 362 |
| RayTrace | 182037 | 80733 | 79475 | 4280 | 2171 | 1833 | 1205 | 1175 | 668 | 892 | 568 |
| EarleyBoyer | 97350 | 96086 | 90038 | 30658 | 4814 | 2457 | 2220 | 2283 | 1670 | 1003 | 393 |
| RegExp | 26874 | 13533 | 12665 | 1366 | 671 | 271 | 267 | 253 | 165 | 326 | 176 |
| Splay | 52175 | 38765 | 43492 | 2037 | 4307 | 3517 | 2007 | 1736 | 1911 | 1252 | 400 |
| NavierStokes | 33687 | 40810 | 38359 | 26860 | 1527 | 1880 | 2399 | 1993 | 1051 | 685 | 929 |
| Score | 60177 | 50987 | 48389 | 11335 | 1707 | 1391 | 1219 | 1146 | 745 | 596 | 318 |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 106M | 77M | 103M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
| Richards | 35584 | 38677 | 32788 | 35750 | 691 | 564 | 500 | 441 | 229 | 36.8 | 418 |
| DeltaBlue | 38124 | 63361 | 74839 | 28244 | 621 | 529 | 462 | 413 | 331 | 34.1 | 394 |
| Crypto | 43405 | 41668 | 40208 | 22082 | 789 | 763 | 511 | 398 | 183 | 50.3 | 393 |
| RayTrace | 102636 | 55721 | 57719 | 4955 | 1016 | 561 | 676 | 718 | 464 | 114 | 493 |
| EarleyBoyer | 59222 | 63706 | 66510 | 28661 | 2243 | 1048 | 1108 | 1135 | 572 | 110 | 0 |
| RegExp | 15198 | 8249 | 8910 | 1118 | 407 | 200 | 196 | 217 | 199 | 38.7 | 190 |
| Splay | 32030 | 28921 | 23681 | 2438 | 2420 | 1019 | 1132 | 1400 | 1182 | 123 | 995 |
| NavierStokes | 34656 | 39326 | 38990 | 24783 | 1094 | 1294 | 1108 | 705 | 484 | 111 | 702 |
| Score | 39593 | 36851 | 36450 | 10998 | 977 | 658 | 620 | 579 | 378 | 67.2 | 0 |
