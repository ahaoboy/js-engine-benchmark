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
- [x] [v8](https://v8.dev/): V8 is Google’s open source high-performance JavaScript and WebAssembly engine
- [ ] [spidermonkey](https://spidermonkey.dev/): SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | jsc | bun | v8 | node | deno | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 42401 | 40714 | 34769 | 31659 | 33032 | 35599 | 1158 | 757 | 688 | 714 | 703 | 228 | 88.2 | 47.5 |
| DeltaBlue | 51684 | 50911 | 98357 | 68498 | 70138 | 43235 | 1057 | 695 | 674 | 695 | 696 | 320 | 156 | 45.5 |
| Crypto | 46179 | 44890 | 42685 | 41163 | 41754 | 28050 | 1370 | 799 | 748 | 614 | 598 | 182 | 289 | 56.3 |
| RayTrace | 110110 | 110998 | 90575 | 56331 | 57957 | 5367 | 1602 | 1234 | 943 | 1121 | 1032 | 474 | 469 | 143 |
| EarleyBoyer | 68736 | 66862 | 69929 | 65581 | 65799 | 24152 | 3431 | 2011 | 1471 | 1755 | 1543 | 473 | 332 | 149 |
| RegExp | 16911 | 16786 | 9981 | 9056 | 9155 | 1331 | 557 | 193 | 244 | 245 | 233 | 197 | 70.6 | 43.9 |
| Splay | 38545 | 35090 | 37046 | 32270 | 22769 | 2277 | 3593 | 1838 | 1760 | 1891 | 1719 | 1286 | 389 | 164 |
| NavierStokes | 34622 | 34360 | 38617 | 39060 | 38842 | 33768 | 1862 | 1480 | 1353 | 991 | 1060 | 474 | 768 | 123 |
| Score | 45155 | 43972 | 43659 | 37321 | 36258 | 12438 | 1556 | 928 | 853 | 851 | 816 | 371 | 245 | 83.3 |
| Executable size | 35M | 97M | 484K | 112M | 137M | 4.0K | 36M | 8.2M | 1.1M | 5.2M | 1.3M | 408K | 2.1M | 27M |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 51061 | 44618 | 42775 | 30529 | 1367 | 1347 | 1319 | 1070 | 707 | 411 | 110 |
| DeltaBlue | 65834 | 91415 | 95474 | 39089 | 1258 | 1328 | 1233 | 1117 | 724 | 617 | 191 |
| Crypto | 64235 | 57382 | 59020 | 24362 | 1488 | 1201 | 1220 | 1336 | 620 | 315 | 381 |
| RayTrace | 178707 | 75553 | 81251 | 2949 | 2577 | 2182 | 1571 | 1281 | 1121 | 1023 | 631 |
| EarleyBoyer | 102459 | 93489 | 96948 | 33124 | 5255 | 3288 | 2633 | 2393 | 1766 | 1136 | 419 |
| RegExp | 27484 | 13118 | 13778 | 1418 | 738 | 317 | 279 | 286 | 154 | 327 | 190 |
| Splay | 51918 | 43858 | 34935 | 2289 | 4816 | 3634 | 2469 | 2518 | 1952 | 1286 | 424 |
| NavierStokes | 33553 | 40662 | 40769 | 27602 | 1651 | 2233 | 2231 | 2585 | 1147 | 795 | 924 |
| Score | 60903 | 49938 | 49705 | 11239 | 1943 | 1584 | 1373 | 1318 | 826 | 648 | 335 |
| Executable size | 0 | 114M | 105M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 37413 | 31126 | 31797 | 35736 | 703 | 561 | 497 | 438 | 229 | 36 | 437 |
| DeltaBlue | 38044 | 70204 | 62977 | 29310 | 623 | 516 | 458 | 417 | 324 | 33.1 | 390 |
| Crypto | 41059 | 41811 | 41490 | 21065 | 789 | 764 | 496 | 393 | 182 | 46.7 | 387 |
| RayTrace | 95311 | 56609 | 53871 | 3034 | 1008 | 553 | 630 | 751 | 386 | 106 | 589 |
| EarleyBoyer | 55387 | 64662 | 61470 | 25721 | 2212 | 986 | 1063 | 1086 | 486 | 92.1 | 0 |
| RegExp | 14561 | 8848 | 7953 | 950 | 400 | 198 | 195 | 212 | 194 | 37.5 | 188 |
| Splay | 29438 | 21448 | 26568 | 3232 | 2180 | 952 | 1015 | 1296 | 1123 | 114 | 929 |
| NavierStokes | 34656 | 38912 | 39248 | 22112 | 1068 | 1294 | 1105 | 636 | 481 | 111 | 674 |
| Score | 38251 | 35406 | 35057 | 10197 | 959 | 644 | 599 | 564 | 357 | 63.3 | 0 |
| Executable size | 106M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
