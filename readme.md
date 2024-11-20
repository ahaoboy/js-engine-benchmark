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
| Engine | jsc | bun | v8 | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 39701 | 39980 | 34501 | 32178 | 33360 | 35669 | 1114 | 748 | 720 | 696 | 708 | 221 | 87.6 | 47.6 |
| DeltaBlue | 50964 | 49132 | 98932 | 65192 | 69001 | 39010 | 1039 | 695 | 693 | 668 | 688 | 315 | 157 | 45.5 |
| Crypto | 45609 | 44895 | 42653 | 41446 | 41481 | 26572 | 1360 | 798 | 600 | 766 | 607 | 177 | 280 | 55.4 |
| RayTrace | 114106 | 113070 | 79697 | 54852 | 56905 | 5309 | 1553 | 1210 | 1130 | 953 | 1038 | 344 | 463 | 143 |
| EarleyBoyer | 68102 | 66213 | 70762 | 61951 | 66499 | 30686 | 3323 | 1974 | 1735 | 1380 | 1432 | 427 | 330 | 140 |
| RegExp | 16407 | 16836 | 9981 | 8956 | 9029 | 1305 | 542 | 191 | 241 | 239 | 232 | 191 | 70.4 | 43.4 |
| Splay | 36386 | 34363 | 36899 | 32107 | 21408 | 2980 | 3203 | 1704 | 1775 | 1643 | 1586 | 743 | 376 | 165 |
| NavierStokes | 34656 | 34360 | 38694 | 39060 | 38881 | 32912 | 1846 | 1511 | 1044 | 1345 | 1019 | 456 | 761 | 124 |
| Score | 44301 | 43628 | 43005 | 36738 | 35829 | 12908 | 1503 | 915 | 846 | 840 | 798 | 323 | 242 | 82.4 |
| Executable size | 35M | 97M | 484K | 112M | 137M | 4.0K | 36M | 8.2M | 5.2M | 1.1M | 1.3M | 408K | 2.1M | 27M |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 53190 | 44646 | 44530 | 28679 | 1291 | 1319 | 1069 | 858 | 799 | 384 | 102 |
| DeltaBlue | 61609 | 103395 | 92717 | 34481 | 1203 | 1289 | 996 | 927 | 837 | 565 | 181 |
| Crypto | 66641 | 60403 | 58389 | 21544 | 1461 | 1174 | 1101 | 1155 | 669 | 291 | 333 |
| RayTrace | 181371 | 74073 | 74295 | 4475 | 2564 | 2060 | 1456 | 1179 | 1190 | 925 | 599 |
| EarleyBoyer | 95675 | 96277 | 82838 | 30682 | 5228 | 3192 | 2442 | 2194 | 1992 | 1055 | 412 |
| RegExp | 26847 | 12534 | 11114 | 1101 | 735 | 306 | 275 | 257 | 137 | 338 | 194 |
| Splay | 51869 | 37331 | 44201 | 1635 | 4588 | 3509 | 2371 | 1854 | 1638 | 1157 | 391 |
| NavierStokes | 33538 | 40540 | 40621 | 18144 | 1508 | 1974 | 2136 | 2096 | 938 | 774 | 864 |
| Score | 60394 | 49782 | 48297 | 9943 | 1878 | 1515 | 1246 | 1114 | 829 | 608 | 316 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35832 | 33067 | 31193 | 34730 | 703 | 565 | 503 | 438 | 226 | 36.3 | 438 |
| DeltaBlue | 37681 | 76307 | 60974 | 32342 | 626 | 522 | 452 | 410 | 331 | 34.3 | 396 |
| Crypto | 41199 | 41780 | 40203 | 17521 | 792 | 766 | 508 | 380 | 183 | 49.5 | 392 |
| RayTrace | 97531 | 55795 | 52909 | 6191 | 1015 | 543 | 679 | 725 | 441 | 110 | 589 |
| EarleyBoyer | 53840 | 64501 | 61120 | 28318 | 2246 | 998 | 1098 | 1163 | 551 | 103 | 0 |
| RegExp | 14015 | 8874 | 7690 | 998 | 407 | 198 | 194 | 212 | 198 | 38.5 | 187 |
| Splay | 31227 | 23315 | 27715 | 2694 | 2459 | 961 | 1089 | 1376 | 1156 | 121 | 962 |
| NavierStokes | 33700 | 39060 | 38063 | 25617 | 1099 | 1299 | 1100 | 686 | 485 | 111 | 701 |
| Score | 37956 | 36377 | 34497 | 11142 | 983 | 646 | 613 | 572 | 372 | 66 | 0 |
| Executable size | 106M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
