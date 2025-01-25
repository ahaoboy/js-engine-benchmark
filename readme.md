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
| Richards | 41702 | 40869 | 35108 | 32079 | 33254 | 13552 | 35574 | 1106 | 822 | 712 | 681 | 685 | 228 | 89.9 | 60.1 | 264 |
| DeltaBlue | 49708 | 48405 | 99190 | 64934 | 68783 | 12919 | 35862 | 1058 | 750 | 688 | 672 | 664 | 324 | 162 | 54.5 | 268 |
| Crypto | 45034 | 45016 | 42641 | 41564 | 41423 | 17645 | 28835 | 1366 | 697 | 769 | 612 | 613 | 183 | 308 | 80.9 | 280 |
| RayTrace | 118842 | 116104 | 100639 | 54907 | 57440 | 28046 | 4044 | 1561 | 1230 | 912 | 1138 | 1033 | 496 | 499 | 165 | 342 |
| EarleyBoyer | 69112 | 66336 | 71803 | 65032 | 66224 | 37390 | 23150 | 3384 | 2050 | 1521 | 1812 | 1546 | 510 | 343 | 193 | 0 |
| RegExp | 22046 | 20770 | 10112 | 9056 | 9155 | 8938 | 922 | 556 | 199 | 230 | 259 | 245 | 197 | 70.6 | 49.1 | 0 |
| Splay | 36924 | 35025 | 37641 | 33322 | 22866 | 22459 | 2313 | 3615 | 1802 | 1765 | 1980 | 1726 | 1231 | 390 | 225 | 0 |
| NavierStokes | 34622 | 34474 | 38655 | 39178 | 38881 | 21980 | 32698 | 1872 | 1146 | 1439 | 1017 | 1056 | 497 | 750 | 170 | 0 |
| Score | 46433 | 45128 | 44647 | 37184 | 36176 | 18595 | 11157 | 1541 | 904 | 862 | 861 | 817 | 377 | 251 | 106 | 0 |
| Exe size | 34.7M | 93.7M | 488K | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 4.6M | 5.1M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 34.7M | 93.7M | 50.5M | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 4.6M | 5.1M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| version | 0 | 1.2.0 | 13.3.0 | 22.13.0 | 1.46.3 | 134.0 | 24.1.2 | 0.12.0 | 0.4.0-beta | 2024-02-14 | 24.6.0 | 0.7.0 | 1.3.5. | 15.5.1 | 0.20.0 | 3.0.0 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 48692 | 41995 | 38465 | 20302 | 1231 | 1354 | 1358 | 1106 | 819 | 346 | 112 |
| DeltaBlue | 58977 | 97828 | 83461 | 15736 | 1167 | 1355 | 1250 | 1126 | 826 | 526 | 212 |
| Crypto | 61279 | 56018 | 54851 | 13168 | 1326 | 1231 | 1237 | 1349 | 538 | 286 | 513 |
| RayTrace | 146962 | 73259 | 69337 | 1728 | 2371 | 2196 | 1589 | 1272 | 1174 | 786 | 606 |
| EarleyBoyer | 85750 | 74402 | 79535 | 23414 | 4669 | 3306 | 2623 | 2395 | 1848 | 1007 | 431 |
| RegExp | 26783 | 12612 | 12134 | 936 | 681 | 292 | 283 | 290 | 175 | 334 | 328 |
| Splay | 32442 | 33428 | 34185 | 1377 | 4238 | 3569 | 2304 | 2556 | 2058 | 1219 | 529 |
| NavierStokes | 27103 | 38025 | 37063 | 22534 | 1527 | 2087 | 2183 | 2510 | 873 | 721 | 1596 |
| Score | 51848 | 46018 | 44336 | 6867 | 1762 | 1563 | 1370 | 1325 | 840 | 576 | 415 |
| Exe size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 2024-02-14 | 0.4.0-beta | 1.3.5. | 15.5.1 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | llrt | qjs(ng) | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35418 | 32262 | 30836 | 34811 | 706 | 567 | 433 | 416 | 427 | 236 | 49.7 |
| DeltaBlue | 38957 | 75361 | 64458 | 28176 | 618 | 528 | 410 | 382 | 396 | 344 | 42.3 |
| Crypto | 41303 | 41909 | 39824 | 23471 | 788 | 763 | 375 | 365 | 374 | 182 | 75.5 |
| RayTrace | 96865 | 57867 | 51799 | 3281 | 1024 | 557 | 722 | 611 | 576 | 463 | 134 |
| EarleyBoyer | 55795 | 66421 | 62831 | 24600 | 2254 | 1049 | 1124 | 1019 | 989 | 585 | 149 |
| RegExp | 17075 | 8758 | 7910 | 959 | 406 | 200 | 216 | 195 | 188 | 205 | 43.2 |
| Splay | 30975 | 22728 | 29345 | 2363 | 2494 | 1034 | 1392 | 1034 | 1018 | 545 | 161 |
| NavierStokes | 33471 | 38990 | 37694 | 26136 | 1091 | 1300 | 671 | 643 | 676 | 490 | 167 |
| Score | 39091 | 36337 | 35004 | 10120 | 984 | 660 | 568 | 511 | 511 | 349 | 88.3 |
| Exe size | 106.4M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 9.9M | 1.7M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 109.8M | 6.9M | 45.4M | 28.3M | 7.3M | 6.9M | 15.0M |
| Total size | 126.2M | 139.7M | 110.4M | 6.6M | 112.9M | 7.9M | 51.1M | 38.2M | 9.0M | 7.5M | 42.4M |
| version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 2021-03-27 | 24.12.0 | 0.4.0-beta | 0.8.0 | 1.3.5. | 0.20.0 |
