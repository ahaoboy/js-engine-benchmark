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
| Version | 0 | 1.2.2 | 13.3.0 | 23.7.0 | 1.46.3 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 93.9M | 50.5M | 117.9M | 137.0M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 93.9M | 488K | 117.9M | 137.0M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42433 | 40029 | 35171 | 33014 | 32972 | 12684 | 35606 | 1120 | 798 | 700 | 707 | 639 | 232 | 87.2 | 61.1 | 277 |
| DeltaBlue | 50832 | 49602 | 84770 | 72505 | 71540 | 12946 | 38567 | 1053 | 722 | 676 | 650 | 602 | 324 | 156 | 55.3 | 279 |
| Crypto | 45851 | 43860 | 42581 | 41494 | 41558 | 17519 | 24352 | 1372 | 682 | 744 | 584 | 380 | 184 | 295 | 80.4 | 294 |
| RayTrace | 113736 | 112922 | 101748 | 62603 | 57867 | 28461 | 3243 | 1577 | 1185 | 914 | 1083 | 710 | 496 | 455 | 165 | 351 |
| EarleyBoyer | 68452 | 67878 | 77214 | 61100 | 68117 | 36710 | 16571 | 3372 | 1970 | 1453 | 1786 | 1222 | 503 | 305 | 195 | 0 |
| RegExp | 20386 | 20862 | 10212 | 9056 | 9083 | 8654 | 1424 | 553 | 197 | 237 | 224 | 180 | 194 | 93 | 49.4 | 0 |
| Splay | 37127 | 34960 | 37510 | 31415 | 22842 | 22508 | 2324 | 3640 | 1704 | 1740 | 1942 | 1107 | 1294 | 397 | 221 | 0 |
| NavierStokes | 34394 | 34394 | 38694 | 37990 | 38881 | 22024 | 33586 | 1877 | 1141 | 1378 | 960 | 966 | 489 | 777 | 170 | 0 |
| Score | 45999 | 44976 | 44282 | 37729 | 36451 | 18357 | 10903 | 1545 | 878 | 847 | 826 | 629 | 379 | 251 | 106 | 0 |
### macos-arm64
| Engine | bun | node | deno | graaljs | tjs | hermes | qjs | llrt | qjs(ng) | xst | mujs | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 23.7.0 | 1.46.3 | 24.1.2 | 24.12.0 | 0.12.0 | 2024-02-14 | 0.5.1-beta | 0.7.0 | 16.8.1 | 1.3.5 | 3.0.0 |
| Total size | 108.5M | 243.4M | 210.3M | 296K | 7.2M | 15.7M | 2.1M | 24.1M | 2.1M | 3.3M | 888K | 1.1M |
| Exe size | 108.5M | 243.4M | 210.3M | 296K | 7.2M | 15.7M | 2.1M | 24.1M | 2.1M | 3.3M | 888K | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40269 | 39563 | 34536 | 30452 | 1308 | 970 | 1033 | 555 | 698 | 91.7 | 211 | 146 |
| DeltaBlue | 53192 | 90304 | 77140 | 20992 | 1313 | 893 | 1056 | 526 | 654 | 189 | 297 | 205 |
| Crypto | 54077 | 51958 | 48135 | 29834 | 1225 | 1060 | 1285 | 454 | 511 | 398 | 124 | 234 |
| RayTrace | 140598 | 73185 | 62171 | 1484 | 1730 | 1868 | 1210 | 924 | 665 | 617 | 331 | 271 |
| EarleyBoyer | 81664 | 74213 | 64191 | 34746 | 2791 | 3974 | 2059 | 1516 | 1192 | 374 | 491 | 0 |
| RegExp | 22570 | 10798 | 6624 | 1149 | 272 | 547 | 223 | 132 | 140 | 256 | 99.1 | 0 |
| Splay | 30869 | 27862 | 27259 | 2787 | 2822 | 3113 | 2017 | 1685 | 1015 | 394 | 148 | 0 |
| NavierStokes | 29769 | 33027 | 31367 | 18716 | 1978 | 1182 | 2357 | 869 | 864 | 1406 | 368 | 0 |
| Score | 47872 | 42179 | 36122 | 9361 | 1407 | 1387 | 1177 | 660 | 623 | 350 | 226 | 0 |
### macos-amd64
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 1.46.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.7.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 119.0M | 222.6M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 2.1M | 888K | 3.3M | 50.7M | 1.1M |
| Exe size | 119.0M | 222.6M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 2.1M | 888K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 25290 | 25686 | 21209 | 9690 | 459 | 478 | 396 | 448 | 468 | 143 | 85.8 | 26 | 65.2 |
| DeltaBlue | 30355 | 43003 | 28444 | 7141 | 507 | 547 | 455 | 499 | 507 | 202 | 130 | 23 | 112 |
| Crypto | 26101 | 28738 | 30517 | 15470 | 535 | 307 | 262 | 331 | 296 | 112 | 172 | 38.6 | 114 |
| RayTrace | 89835 | 48987 | 43468 | 2894 | 996 | 835 | 753 | 429 | 521 | 347 | 431 | 74.8 | 153 |
| EarleyBoyer | 45955 | 45739 | 43545 | 24103 | 1728 | 1282 | 1179 | 843 | 900 | 417 | 310 | 84.6 | 0 |
| RegExp | 13847 | 6255 | 6371 | 571 | 280 | 94.7 | 93 | 82.9 | 82.8 | 105 | 111 | 23.5 | 0 |
| Splay | 25906 | 16127 | 20801 | 3366 | 2385 | 1646 | 1471 | 917 | 905 | 513 | 269 | 136 | 0 |
| NavierStokes | 28168 | 34360 | 26860 | 13181 | 829 | 664 | 596 | 822 | 660 | 268 | 442 | 73.8 | 0 |
| Score | 30922 | 26545 | 24361 | 6090 | 766 | 554 | 492 | 450 | 448 | 226 | 207 | 49.2 | 0 |
### windows
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | mujs | boa | qjs(ng) | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 23.7.0 | 1.46.3 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 1.3.5 | 0.20.0 | 0.7.0 | 0 |
| Total size | 126.3M | 112.6M | 139.7M | 6.6M | 112.9M | 44.1M | 41.9M | 7.5M | 42.4M | 8.6M | 5.9M |
| Exe size | 106.5M | 81.5M | 102.9M | 352K | 3.0M | 5.7M | 12.7M | 664K | 27.4M | 1.8M | 1.3M |
| Dll size | 19.8M | 31.0M | 36.8M | 6.2M | 109.8M | 38.4M | 29.1M | 6.9M | 15.0M | 6.9M | 4.7M |
| Richards | 37928 | 32983 | 32231 | 36099 | 694 | 452 | 422 | 236 | 47.4 | 437 | 0 |
| DeltaBlue | 40054 | 70277 | 75408 | 26751 | 617 | 410 | 383 | 341 | 41.7 | 403 | 0 |
| Crypto | 42113 | 36905 | 38693 | 22002 | 789 | 416 | 418 | 179 | 74.1 | 385 | 0 |
| RayTrace | 86949 | 59125 | 55869 | 4874 | 1008 | 742 | 604 | 462 | 134 | 596 | 0 |
| EarleyBoyer | 57415 | 63609 | 65093 | 17693 | 2240 | 1125 | 983 | 579 | 141 | 0 | 0 |
| RegExp | 17784 | 8521 | 8837 | 928 | 405 | 195 | 181 | 199 | 43.1 | 190 | 0 |
| Splay | 31770 | 30795 | 23893 | 2707 | 2459 | 1434 | 1051 | 1189 | 184 | 1001 | 0 |
| NavierStokes | 34474 | 38655 | 39029 | 28344 | 1053 | 743 | 710 | 495 | 165 | 702 | 0 |
| Score | 39740 | 36661 | 35995 | 10338 | 972 | 583 | 521 | 382 | 88.1 | 0 | 0 |
