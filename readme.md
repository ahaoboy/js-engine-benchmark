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
- [x] [spidermonkey](https://spidermonkey.dev/): SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
- [ ] [ChakraCore](https://github.com/chakra-core/ChakraCore): ChakraCore is an open source Javascript engine with a C API.
- [ ] [nova](https://github.com/trynova/nova): Nova is a JavaScript and WebAssembly engine written in Rust.

## bench

### ubuntu
| Engine | jsc | bun | v8 | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 41494 | 41974 | 34208 | 38924 | 32820 | 13524 | 35366 | 1144 | 738 | 719 | 683 | 721 | 231 | 87.3 | 47.5 |
| DeltaBlue | 48815 | 47869 | 99217 | 67268 | 73979 | 12708 | 39942 | 1072 | 696 | 701 | 673 | 689 | 326 | 157 | 45.8 |
| Crypto | 45720 | 42245 | 42825 | 41678 | 41562 | 17666 | 29558 | 1367 | 791 | 606 | 752 | 592 | 183 | 286 | 56.2 |
| RayTrace | 113070 | 113958 | 81917 | 55721 | 57867 | 27916 | 2790 | 1602 | 1223 | 1113 | 925 | 1026 | 515 | 464 | 143 |
| EarleyBoyer | 69972 | 68307 | 70867 | 65011 | 68253 | 37487 | 25034 | 3384 | 2027 | 1822 | 1547 | 1561 | 523 | 331 | 155 |
| RegExp | 16786 | 16877 | 9900 | 8928 | 9146 | 8758 | 1426 | 553 | 192 | 244 | 249 | 239 | 197 | 70.7 | 44.1 |
| Splay | 37510 | 35220 | 37413 | 32710 | 22687 | 22223 | 2430 | 3683 | 1893 | 1988 | 1775 | 1737 | 1316 | 363 | 160 |
| NavierStokes | 34543 | 34178 | 38732 | 39029 | 38803 | 22024 | 29621 | 1858 | 1484 | 1045 | 1328 | 1001 | 478 | 781 | 121 |
| Score | 44699 | 43750 | 43189 | 38170 | 36585 | 18483 | 11468 | 1556 | 927 | 865 | 857 | 816 | 383 | 243 | 83.4 |
| Executable size | 35M | 92M | 484K | 112M | 137M | 295M | 4.0K | 36M | 8.2M | 5.2M | 1.1M | 1.3M | 408K | 2.1M | 27M |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 48035 | 42899 | 35895 | 27571 | 1246 | 1272 | 1320 | 1101 | 665 | 413 | 96.1 |
| DeltaBlue | 61966 | 91051 | 85947 | 23895 | 844 | 1213 | 1235 | 1121 | 625 | 612 | 177 |
| Crypto | 64900 | 56711 | 46403 | 18095 | 994 | 1173 | 1214 | 1239 | 551 | 314 | 325 |
| RayTrace | 165980 | 70817 | 70817 | 890 | 2271 | 2160 | 1521 | 1235 | 1143 | 990 | 553 |
| EarleyBoyer | 95549 | 86655 | 88275 | 17130 | 4719 | 3367 | 2399 | 2308 | 1860 | 1081 | 358 |
| RegExp | 26275 | 12832 | 12207 | 1094 | 661 | 314 | 253 | 286 | 165 | 315 | 150 |
| Splay | 49709 | 43250 | 32882 | 1640 | 3957 | 3496 | 2302 | 2212 | 2084 | 1301 | 399 |
| NavierStokes | 32731 | 36766 | 38139 | 16095 | 1382 | 2233 | 2063 | 2340 | 1119 | 728 | 796 |
| Score | 58163 | 47905 | 43862 | 6919 | 1588 | 1544 | 1310 | 1262 | 811 | 632 | 291 |
| Executable size | 0 | 114M | 105M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35881 | 33773 | 32361 | 33862 | 711 | 564 | 513 | 441 | 226 | 36.4 | 441 |
| DeltaBlue | 37945 | 74594 | 70336 | 30686 | 626 | 522 | 473 | 417 | 318 | 34.4 | 403 |
| Crypto | 41464 | 40671 | 41365 | 22980 | 791 | 768 | 507 | 387 | 182 | 49.1 | 385 |
| RayTrace | 94201 | 56461 | 51082 | 2354 | 1005 | 559 | 681 | 741 | 436 | 114 | 592 |
| EarleyBoyer | 55477 | 67587 | 61394 | 24986 | 2227 | 1028 | 1129 | 1170 | 560 | 108 | 0 |
| RegExp | 13506 | 8928 | 7886 | 943 | 407 | 198 | 196 | 211 | 199 | 38.5 | 186 |
| Splay | 29972 | 23510 | 29019 | 2165 | 2464 | 1026 | 1139 | 1384 | 1156 | 118 | 993 |
| NavierStokes | 33538 | 39060 | 38397 | 22525 | 1096 | 1299 | 1081 | 699 | 485 | 110 | 702 |
| Score | 37612 | 36580 | 35625 | 9468 | 982 | 656 | 623 | 579 | 371 | 66.5 | 0 |
| Executable size | 103M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
