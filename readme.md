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
| Richards | 40922 | 41448 | 35055 | 31595 | 32841 | 13531 | 35595 | 1087 | 825 | 705 | 668 | 683 | 226 | 89.5 | 61 | 260 |
| DeltaBlue | 50825 | 46646 | 94007 | 65946 | 69563 | 12972 | 39201 | 1038 | 743 | 690 | 665 | 662 | 321 | 161 | 55.5 | 264 |
| Crypto | 45666 | 44522 | 42522 | 41604 | 41621 | 17733 | 28530 | 1366 | 706 | 794 | 608 | 614 | 178 | 322 | 80.2 | 282 |
| RayTrace | 110628 | 115586 | 102784 | 56405 | 57735 | 28194 | 5701 | 1543 | 1205 | 922 | 1115 | 1013 | 501 | 500 | 167 | 344 |
| EarleyBoyer | 69499 | 67695 | 79217 | 63449 | 66093 | 37713 | 22428 | 3355 | 2069 | 1531 | 1781 | 1560 | 535 | 340 | 197 | 0 |
| RegExp | 21547 | 21162 | 9890 | 8974 | 9155 | 8628 | 893 | 555 | 199 | 226 | 264 | 240 | 201 | 70.8 | 49 | 0 |
| Splay | 37763 | 35310 | 38472 | 32645 | 23070 | 22918 | 2515 | 3529 | 1869 | 1769 | 1964 | 1729 | 1229 | 394 | 226 | 0 |
| NavierStokes | 34726 | 34360 | 38732 | 38287 | 38881 | 21771 | 34508 | 1880 | 1170 | 1429 | 1026 | 1050 | 480 | 743 | 177 | 0 |
| Score | 46166 | 45158 | 45000 | 36957 | 36247 | 18588 | 11871 | 1526 | 910 | 865 | 855 | 813 | 377 | 252 | 107 | 0 |
| Executable size | 34.7M | 93.6M | 488K | 114.3M | 136.9M | 296.3M | 1.1M | 36.0M | 9.1M | 4.6M | 5.1M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| Dll size | 0K | 0K | 50.0M | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K |
| Total size | 34.7M | 93.6M | 50.5M | 114.3M | 136.9M | 296.3M | 1.1M | 36.0M | 9.1M | 4.6M | 5.1M | 1.3M | 412K | 2.1M | 27.0M | 456K |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 50701 | 41610 | 41685 | 26547 | 1366 | 1330 | 1326 | 1054 | 771 | 407 | 120 |
| DeltaBlue | 54732 | 90092 | 97326 | 20325 | 1255 | 1353 | 1204 | 1071 | 752 | 611 | 221 |
| Crypto | 62051 | 55402 | 56843 | 19090 | 1488 | 1234 | 1241 | 1306 | 542 | 314 | 553 |
| RayTrace | 153104 | 73851 | 72075 | 7304 | 2562 | 2213 | 1577 | 1237 | 1093 | 1018 | 687 |
| EarleyBoyer | 75495 | 81189 | 88565 | 18726 | 5303 | 3377 | 2648 | 2383 | 1640 | 1121 | 479 |
| RegExp | 23595 | 12559 | 12625 | 1119 | 729 | 314 | 281 | 289 | 148 | 358 | 338 |
| Splay | 35986 | 42603 | 36541 | 1213 | 4836 | 3672 | 2247 | 2521 | 1744 | 1693 | 587 |
| NavierStokes | 30213 | 39099 | 38101 | 24265 | 1647 | 2218 | 2130 | 2559 | 944 | 790 | 1598 |
| Score | 51702 | 47531 | 47491 | 9084 | 1941 | 1598 | 1351 | 1299 | 780 | 674 | 445 |
| Executable size | 107.5M | 231.9M | 210.3M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K | 0K |
| Total size | 107.5M | 231.9M | 210.3M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 36047 | 31094 | 32298 | 34667 | 688 | 561 | 441 | 430 | 424 | 233 | 49 |
| DeltaBlue | 39353 | 54871 | 61582 | 27914 | 617 | 514 | 410 | 403 | 383 | 330 | 41.8 |
| Crypto | 41050 | 41075 | 39382 | 22699 | 786 | 766 | 360 | 362 | 360 | 182 | 74.8 |
| RayTrace | 97457 | 57423 | 50541 | 3829 | 1020 | 549 | 744 | 576 | 598 | 453 | 133 |
| EarleyBoyer | 55658 | 67005 | 58513 | 24522 | 2239 | 1040 | 1141 | 1001 | 1014 | 569 | 139 |
| RegExp | 16762 | 8883 | 7266 | 996 | 407 | 201 | 215 | 188 | 191 | 202 | 43.1 |
| Splay | 29575 | 23404 | 29769 | 2751 | 2448 | 1034 | 1385 | 1019 | 1035 | 1165 | 168 |
| NavierStokes | 33390 | 39099 | 37470 | 27575 | 1081 | 1300 | 688 | 675 | 626 | 483 | 166 |
| Score | 38886 | 34882 | 34213 | 10571 | 976 | 655 | 571 | 511 | 507 | 377 | 87.5 |
| Executable size | 105.9M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 136.1M | 6.9M | 45.4M | 7.3M | 28.3M | 6.9M | 15.0M |
| Total size | 125.7M | 139.7M | 110.4M | 6.6M | 139.1M | 7.9M | 51.1M | 9.0M | 38.2M | 7.5M | 42.4M |
