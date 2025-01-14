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
| Engine | jsc | bun | v8 | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 40276 | 39591 | 34885 | 32174 | 32135 | 13334 | 35627 | 1126 | 820 | 675 | 710 | 688 | 227 | 89 | 60.2 | 259 |
| DeltaBlue | 49139 | 49093 | 84823 | 66105 | 75011 | 12906 | 26560 | 1053 | 739 | 686 | 679 | 661 | 322 | 161 | 55.2 | 268 |
| Crypto | 45594 | 44488 | 42529 | 41448 | 41196 | 17883 | 15007 | 1367 | 713 | 621 | 761 | 613 | 183 | 319 | 81.2 | 284 |
| RayTrace | 115734 | 111812 | 99233 | 56627 | 58237 | 27768 | 9832 | 1553 | 1214 | 1113 | 918 | 1021 | 512 | 502 | 165 | 348 |
| EarleyBoyer | 68107 | 67846 | 78216 | 66063 | 67522 | 38107 | 27183 | 3396 | 2065 | 1760 | 1534 | 1540 | 529 | 342 | 195 | 0 |
| RegExp | 22184 | 21072 | 9951 | 9128 | 9173 | 8487 | 1087 | 553 | 199 | 256 | 231 | 240 | 198 | 70.4 | 49.1 | 0 |
| Splay | 36956 | 35856 | 37861 | 32214 | 22817 | 22646 | 2389 | 3580 | 1854 | 2001 | 1768 | 1740 | 1247 | 406 | 230 | 0 |
| NavierStokes | 34577 | 34429 | 38655 | 39138 | 38912 | 21941 | 26928 | 1874 | 1188 | 1019 | 1370 | 1056 | 495 | 749 | 177 | 0 |
| Score | 46033 | 45082 | 44069 | 37360 | 36544 | 18502 | 11298 | 1540 | 911 | 858 | 856 | 814 | 381 | 253 | 107 | 0 |
| Executable size | 34.7M | 93.1M | 50.5M | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 50641 | 44230 | 41392 | 30257 | 1243 | 1041 | 1050 | 833 | 533 | 393 | 113 |
| DeltaBlue | 62058 | 104658 | 80168 | 34038 | 1170 | 1176 | 1061 | 840 | 436 | 471 | 210 |
| Crypto | 63297 | 55364 | 52542 | 22747 | 1328 | 1135 | 1107 | 1191 | 432 | 279 | 534 |
| RayTrace | 164500 | 75183 | 72075 | 1914 | 2352 | 1842 | 1190 | 1108 | 776 | 900 | 738 |
| EarleyBoyer | 97442 | 91446 | 89314 | 22532 | 4791 | 2479 | 2279 | 2066 | 1467 | 1005 | 461 |
| RegExp | 31156 | 13442 | 13053 | 966 | 677 | 259 | 271 | 257 | 136 | 316 | 322 |
| Splay | 49799 | 26995 | 39988 | 1533 | 4197 | 2903 | 2253 | 1899 | 1426 | 1274 | 558 |
| NavierStokes | 32698 | 37137 | 39504 | 19253 | 1586 | 2038 | 2153 | 2367 | 722 | 729 | 1689 |
| Score | 59719 | 46984 | 46833 | 8559 | 1774 | 1329 | 1204 | 1104 | 596 | 585 | 436 |
| Executable size | 106.5M | 210.3M | 231.7M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | llrt | qjs(ng) | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 36520 | 38613 | 32510 | 34409 | 700 | 547 | 441 | 423 | 427 | 229 | 47.1 |
| DeltaBlue | 38501 | 75811 | 64809 | 31360 | 623 | 529 | 410 | 377 | 390 | 325 | 41.9 |
| Crypto | 41194 | 41390 | 41494 | 20987 | 789 | 760 | 372 | 367 | 367 | 183 | 73.5 |
| RayTrace | 96125 | 55573 | 53004 | 3660 | 991 | 551 | 728 | 600 | 585 | 449 | 132 |
| EarleyBoyer | 53879 | 67049 | 59882 | 24965 | 2247 | 1039 | 1106 | 1002 | 978 | 553 | 130 |
| RegExp | 15578 | 8819 | 7795 | 930 | 402 | 197 | 216 | 194 | 186 | 196 | 42.8 |
| Splay | 30269 | 22956 | 28611 | 2405 | 2353 | 994 | 1351 | 994 | 962 | 1156 | 169 |
| NavierStokes | 33175 | 39060 | 37842 | 24217 | 1065 | 1294 | 675 | 619 | 670 | 505 | 165 |
| Score | 38364 | 37075 | 35172 | 10143 | 968 | 650 | 567 | 505 | 504 | 375 | 85.8 |
| Executable size | 125.0M | 139.7M | 111.1M | 6.6M | 112.9M | 7.9M | 50.0M | 38.2M | 9.0M | 7.5M | 42.4M |
