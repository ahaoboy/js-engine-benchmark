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
- mujs-one: https://github.com/ahaoboy/mujs-one
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/facebook/hermes
- graaljs: https://github.com/oracle/graaljs
- XS: https://github.com/Moddable-OpenSource/moddable


## bench

2025/3/1 23:33:29

### ubuntu
| Engine | v8 | jsc | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 0 | 1.2.4 | 2.2.2 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 53.4M | 35.1M | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 940K | 35.1M | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 52.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 35373 | 39341 | 40117 | 33286 | 32901 | 13503 | 35270 | 1126 | 801 | 693 | 711 | 631 | 250 | 227 | 86.7 | 61.4 | 273 |
| DeltaBlue | 103534 | 48127 | 56861 | 69259 | 69920 | 13019 | 27294 | 1063 | 727 | 677 | 689 | 604 | 363 | 324 | 155 | 55.8 | 277 |
| Crypto | 42606 | 44681 | 45034 | 41734 | 40999 | 17667 | 13986 | 1367 | 695 | 751 | 520 | 380 | 189 | 184 | 297 | 81.2 | 295 |
| RayTrace | 104856 | 109444 | 109222 | 67265 | 62233 | 27030 | 15762 | 1543 | 1189 | 912 | 1099 | 718 | 519 | 497 | 458 | 166 | 355 |
| EarleyBoyer | 77344 | 69681 | 68078 | 72857 | 63103 | 37193 | 30258 | 3411 | 2010 | 1521 | 1783 | 1233 | 525 | 518 | 307 | 196 | 0 |
| RegExp | 10243 | 20568 | 21435 | 10001 | 9065 | 8685 | 1390 | 555 | 198 | 239 | 228 | 180 | 217 | 202 | 93.3 | 49.1 | 0 |
| Splay | 38904 | 38056 | 21709 | 37160 | 33395 | 23046 | 2906 | 3692 | 1820 | 1777 | 2011 | 1153 | 1239 | 719 | 382 | 233 | 0 |
| NavierStokes | 38617 | 34726 | 34326 | 38765 | 38469 | 22112 | 32731 | 1846 | 1201 | 1352 | 1022 | 961 | 485 | 487 | 772 | 177 | 0 |
| Score | 45833 | 45237 | 43231 | 40179 | 37962 | 18516 | 13065 | 1546 | 897 | 853 | 834 | 632 | 396 | 354 | 250 | 108 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 109.8M | 213.0M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Exe size | 109.8M | 213.0M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 52473 | 48314 | 42980 | 35973 | 37537 | 1337 | 1347 | 1193 | 1347 | 1066 | 408 | 120 | 217 |
| DeltaBlue | 76975 | 98218 | 109478 | 101048 | 55962 | 1256 | 1346 | 1256 | 1256 | 1127 | 610 | 224 | 241 |
| Crypto | 67215 | 61205 | 61135 | 36938 | 43394 | 1489 | 1240 | 1002 | 1222 | 1349 | 315 | 561 | 272 |
| RayTrace | 195875 | 84433 | 70817 | 94571 | 5823 | 2559 | 2170 | 2023 | 1594 | 1261 | 1021 | 751 | 337 |
| EarleyBoyer | 101250 | 103518 | 89645 | 78095 | 52423 | 5307 | 3326 | 3148 | 2652 | 2397 | 1130 | 451 | 0 |
| RegExp | 32522 | 15410 | 13819 | 11717 | 1939 | 741 | 320 | 317 | 282 | 289 | 356 | 329 | 0 |
| Splay | 21434 | 56278 | 45896 | 42286 | 3577 | 4841 | 3655 | 3154 | 2534 | 2489 | 1304 | 570 | 0 |
| NavierStokes | 33768 | 39248 | 40662 | 36358 | 34212 | 1646 | 2171 | 1658 | 2167 | 2532 | 790 | 1557 | 0 |
| Score | 57925 | 55216 | 51183 | 45341 | 16884 | 1940 | 1592 | 1413 | 1385 | 1315 | 653 | 443 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.4 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 1.7M | 120.5M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 1.7M | 120.5M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22043 | 29135 | 30981 | 23024 | 43527 | 503 | 468 | 420 | 447 | 474 | 93 | 143 | 25.9 | 111 |
| DeltaBlue | 63222 | 44154 | 49628 | 47949 | 50871 | 564 | 548 | 489 | 497 | 500 | 141 | 200 | 22.9 | 128 |
| Crypto | 39020 | 37651 | 34095 | 33720 | 25876 | 569 | 306 | 278 | 324 | 299 | 182 | 110 | 38.8 | 138 |
| RayTrace | 91315 | 107076 | 70965 | 50245 | 8476 | 1099 | 830 | 762 | 430 | 514 | 438 | 340 | 74.4 | 216 |
| EarleyBoyer | 67899 | 58973 | 63945 | 50867 | 38409 | 1815 | 1277 | 1194 | 815 | 894 | 318 | 414 | 84.5 | 0 |
| RegExp | 8405 | 17200 | 8892 | 7749 | 1109 | 292 | 95.9 | 92.6 | 82.3 | 82.9 | 131 | 104 | 23.3 | 0 |
| Splay | 43312 | 14367 | 14652 | 33077 | 2360 | 2426 | 1615 | 1448 | 917 | 862 | 296 | 426 | 139 | 0 |
| NavierStokes | 36952 | 32764 | 35693 | 36434 | 28938 | 906 | 662 | 592 | 807 | 658 | 488 | 272 | 76.9 | 0 |
| Score | 38201 | 35418 | 32024 | 31159 | 13925 | 821 | 551 | 503 | 445 | 445 | 224 | 219 | 49.5 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 135.0M | 112.6M | 6.6M | 87.2M | 44.3M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 103.0M | 81.5M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 32.1M | 31.0M | 6.2M | 84.1M | 38.6M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 38313 | 31052 | 33074 | 36057 | 698 | 447 | 431 | 437 | 237 | 49.5 | 0 |
| DeltaBlue | 48359 | 67705 | 67454 | 28250 | 621 | 403 | 370 | 390 | 337 | 41.8 | 0 |
| Crypto | 42417 | 42040 | 41486 | 20489 | 788 | 430 | 423 | 365 | 186 | 75 | 0 |
| RayTrace | 97531 | 65489 | 59140 | 2957 | 1003 | 731 | 598 | 585 | 459 | 133 | 0 |
| EarleyBoyer | 57701 | 72937 | 62311 | 27393 | 2244 | 1139 | 994 | 986 | 573 | 140 | 0 |
| RegExp | 17638 | 9829 | 8282 | 991 | 404 | 196 | 192 | 188 | 201 | 42.5 | 0 |
| Splay | 31565 | 37804 | 31335 | 3047 | 2442 | 1456 | 1059 | 1001 | 737 | 175 | 0 |
| NavierStokes | 34726 | 39060 | 38694 | 26712 | 1094 | 743 | 714 | 674 | 500 | 167 | 0 |
| Score | 41352 | 39665 | 36883 | 10395 | 977 | 585 | 526 | 510 | 361 | 88 | 0 |
