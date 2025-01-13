fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

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
- [x] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
- [ ] [ChakraCore](https://github.com/chakra-core/ChakraCore): ChakraCore is an open source Javascript engine with a C API.
- [ ] [nova](https://github.com/trynova/nova): Nova is a JavaScript and WebAssembly engine written in Rust.


## install engine

- deno: https://github.com/denoland/setup-deno
- node: https://github.com/actions/setup-node
- bun: https://github.com/oven-sh/setup-bun
- spidermonkey: https://github.com/ahaoboy/spidermonkey-build
- v8: https://github.com/ahaoboy/v8-build
- JavaScriptCore: https://github.com/ahaoboy/jsc-build
- jerryscript: https://github.com/ahaoboy/jerryscript-build
- quickjs-ng: https://github.com/ahaoboy/quickjs-ng-build
- quickjs: https://github.com/ahaoboy/quickjs-build
- mujs: https://github.com/ahaoboy/mujs-build
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/facebook/hermes
- graaljs: https://github.com/oracle/graaljs
- XS: https://github.com/Moddable-OpenSource/moddable


## bench

### ubuntu
| Engine | jsc | bun | v8 | node | deno | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 42454 | 39206 | 35147 | 31620 | 33060 | 13005 | 40799 | 1119 | 824 | 694 | 680 | 684 | 209 | 89.3 | 61.2 | 265 |
| DeltaBlue | 49443 | 50236 | 82535 | 69272 | 73569 | 12919 | 26401 | 1069 | 754 | 694 | 682 | 663 | 287 | 160 | 55.2 | 274 |
| Crypto | 45295 | 44790 | 42581 | 41644 | 41292 | 17487 | 15603 | 1359 | 731 | 767 | 611 | 613 | 180 | 313 | 81 | 281 |
| RayTrace | 118176 | 115512 | 100269 | 55795 | 58533 | 28359 | 5402 | 1564 | 1213 | 926 | 1120 | 1025 | 516 | 500 | 164 | 352 |
| EarleyBoyer | 69915 | 68804 | 76857 | 66549 | 67608 | 38131 | 35509 | 3403 | 2039 | 1525 | 1794 | 1548 | 540 | 341 | 196 | 0 |
| RegExp | 22162 | 21093 | 10011 | 9192 | 8901 | 8745 | 943 | 555 | 198 | 224 | 255 | 244 | 200 | 70.4 | 49.2 | 0 |
| Splay | 38260 | 36549 | 37233 | 31635 | 22826 | 23217 | 2937 | 3680 | 1889 | 1797 | 1972 | 1745 | 1192 | 392 | 233 | 0 |
| NavierStokes | 34656 | 34326 | 38694 | 39138 | 38881 | 21941 | 26040 | 1892 | 1170 | 1418 | 1013 | 1075 | 490 | 722 | 176 | 0 |
| Score | 46818 | 45557 | 43874 | 37432 | 36485 | 18572 | 11112 | 1551 | 915 | 859 | 857 | 819 | 370 | 250 | 107 | 0 |
| Executable size | 35M | 94M | 488K | 115M | 137M | 297M | 4.0K | 36M | 9.1M | 4.7M | 5.1M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 52254 | 43213 | 43669 | 29650 | 1201 | 1349 | 1305 | 1123 | 796 | 411 | 121 |
| DeltaBlue | 60075 | 108030 | 89286 | 35849 | 1212 | 1354 | 1184 | 1118 | 807 | 606 | 227 |
| Crypto | 64032 | 57474 | 57635 | 20062 | 1475 | 1217 | 1196 | 1318 | 469 | 313 | 564 |
| RayTrace | 176487 | 80141 | 84433 | 2993 | 2567 | 2157 | 1548 | 1224 | 1088 | 904 | 751 |
| EarleyBoyer | 99444 | 92830 | 91571 | 28581 | 5200 | 3303 | 2479 | 2171 | 1660 | 1029 | 485 |
| RegExp | 31094 | 12559 | 13196 | 1396 | 738 | 310 | 270 | 270 | 148 | 328 | 345 |
| Splay | 51103 | 40925 | 44364 | 2151 | 4437 | 3423 | 2245 | 2302 | 1815 | 786 | 563 |
| NavierStokes | 33653 | 40836 | 40284 | 24289 | 1656 | 2188 | 2200 | 2511 | 915 | 787 | 1707 |
| Score | 60877 | 50439 | 50300 | 10364 | 1879 | 1569 | 1324 | 1272 | 778 | 590 | 456 |
| Executable size | 0 | 105M | 116M | 0 | 7.9M | 3.6M | 1.0M | 920K | 0 | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35786 | 32979 | 31871 | 34575 | 696 | 561 | 434 | 434 | 420 | 237 | 48.2 |
| DeltaBlue | 37542 | 74191 | 64432 | 25492 | 619 | 522 | 403 | 397 | 369 | 331 | 41.2 |
| Crypto | 41586 | 37139 | 40697 | 22391 | 789 | 755 | 372 | 369 | 364 | 181 | 73.9 |
| RayTrace | 93165 | 57645 | 50934 | 3022 | 1013 | 551 | 734 | 571 | 598 | 453 | 132 |
| EarleyBoyer | 55716 | 65729 | 60783 | 27196 | 2243 | 1026 | 1114 | 967 | 997 | 534 | 135 |
| RegExp | 16216 | 8758 | 7743 | 973 | 399 | 198 | 216 | 186 | 190 | 197 | 42.6 |
| Splay | 30233 | 23388 | 27886 | 2293 | 2293 | 969 | 1328 | 985 | 1010 | 1157 | 169 |
| NavierStokes | 33290 | 39029 | 37656 | 26448 | 1043 | 1295 | 681 | 673 | 643 | 496 | 163 |
| Score | 38405 | 35889 | 34704 | 9946 | 963 | 648 | 565 | 507 | 504 | 375 | 86.3 |
| Executable size | 106M | 103M | 79M | 352K | 3.1M | 1.1M | 5.8M | 1.7M | 10M | 664K | 28M |
