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
| Engine | v8 | jsc | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 0 | 1.2.3 | 2.2.1 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 53.4M | 35.1M | 94.8M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 416K | 2.2M | 27.0M | 456K |
| Exe size | 940K | 35.1M | 94.8M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 416K | 2.2M | 27.0M | 456K |
| Dll size | 52.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 35348 | 41402 | 37996 | 31179 | 31984 | 13122 | 35503 | 1120 | 708 | 684 | 710 | 600 | 229 | 86 | 59 | 275 |
| DeltaBlue | 98192 | 49622 | 48689 | 64789 | 74918 | 12840 | 38884 | 992 | 612 | 678 | 693 | 557 | 325 | 154 | 54.3 | 282 |
| Crypto | 42825 | 45820 | 44861 | 41175 | 41486 | 17537 | 28574 | 1359 | 714 | 780 | 601 | 380 | 184 | 294 | 80 | 301 |
| RayTrace | 105226 | 109370 | 112626 | 66969 | 61271 | 27768 | 4281 | 1530 | 1196 | 948 | 1059 | 706 | 488 | 452 | 163 | 347 |
| EarleyBoyer | 79030 | 67470 | 66930 | 71947 | 59072 | 37656 | 29198 | 3343 | 1985 | 1532 | 1783 | 1220 | 510 | 302 | 192 | 0 |
| RegExp | 10193 | 20506 | 20708 | 10052 | 8956 | 8620 | 809 | 551 | 198 | 237 | 229 | 182 | 198 | 94.1 | 48.9 | 0 |
| Splay | 38105 | 36850 | 35822 | 36206 | 11555 | 22182 | 2216 | 3531 | 1728 | 1736 | 1948 | 1111 | 732 | 371 | 202 | 0 |
| NavierStokes | 38765 | 34577 | 34098 | 38803 | 38469 | 21941 | 20418 | 1799 | 1189 | 1337 | 1012 | 960 | 485 | 769 | 168 | 0 |
| Score | 45574 | 45432 | 44660 | 39273 | 33076 | 18369 | 10766 | 1510 | 860 | 856 | 842 | 618 | 353 | 248 | 104 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.3 | 2.2.1 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 109.0M | 213.1M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Exe size | 109.0M | 213.1M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 45840 | 37501 | 40516 | 28549 | 32114 | 1244 | 1344 | 1173 | 1347 | 1121 | 378 | 103 | 197 |
| DeltaBlue | 53007 | 75771 | 92552 | 73774 | 27809 | 1012 | 1346 | 1196 | 1243 | 1114 | 555 | 198 | 228 |
| Crypto | 57856 | 53481 | 48195 | 33269 | 30908 | 1306 | 1093 | 983 | 1213 | 1340 | 288 | 481 | 252 |
| RayTrace | 153104 | 72593 | 62307 | 76811 | 1442 | 2076 | 2019 | 2069 | 1580 | 1262 | 877 | 647 | 317 |
| EarleyBoyer | 81904 | 80841 | 70248 | 66402 | 34009 | 4159 | 2941 | 3131 | 2595 | 2362 | 1002 | 389 | 0 |
| RegExp | 25729 | 12201 | 10776 | 10515 | 1396 | 616 | 295 | 312 | 278 | 286 | 327 | 279 | 0 |
| Splay | 33346 | 34511 | 34638 | 33827 | 3270 | 3472 | 3170 | 3134 | 2521 | 2481 | 1570 | 497 | 0 |
| NavierStokes | 29739 | 35101 | 35432 | 29473 | 22193 | 1414 | 1913 | 1653 | 2172 | 2560 | 718 | 1364 | 0 |
| Score | 50889 | 43651 | 42408 | 37300 | 10402 | 1600 | 1463 | 1396 | 1374 | 1317 | 612 | 384 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.3 | 2.2.1 | 23.7.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 24.12.0 | 2024-02-14 | 0.8.0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 1.7M | 119.7M | 227.2M | 221.2M | 304K | 15.7M | 24.1M | 7.5M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 1.7M | 119.7M | 227.2M | 221.2M | 304K | 15.7M | 24.1M | 7.5M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 21538 | 24994 | 25555 | 19116 | 37445 | 489 | 412 | 472 | 424 | 373 | 86.5 | 123 | 22.2 | 95.5 |
| DeltaBlue | 68009 | 29601 | 39023 | 39102 | 28153 | 569 | 488 | 497 | 486 | 420 | 106 | 167 | 19.7 | 108 |
| Crypto | 39778 | 34039 | 29866 | 29244 | 20623 | 554 | 273 | 277 | 315 | 254 | 170 | 101 | 36.7 | 125 |
| RayTrace | 101674 | 88799 | 56831 | 45583 | 4938 | 875 | 767 | 684 | 373 | 465 | 400 | 299 | 75.5 | 186 |
| EarleyBoyer | 66776 | 55227 | 51500 | 42500 | 30476 | 1618 | 1182 | 1030 | 767 | 769 | 290 | 285 | 84.4 | 0 |
| RegExp | 8306 | 15804 | 7379 | 6429 | 1093 | 270 | 90.6 | 84 | 75 | 71.8 | 107 | 90.6 | 23.8 | 0 |
| Splay | 37388 | 33322 | 25409 | 23412 | 1997 | 1773 | 1431 | 1127 | 800 | 857 | 262 | 501 | 144 | 0 |
| NavierStokes | 34429 | 31040 | 31016 | 27547 | 24117 | 677 | 576 | 555 | 716 | 566 | 463 | 229 | 77.6 | 0 |
| Score | 37869 | 34525 | 29048 | 25443 | 10704 | 718 | 497 | 471 | 410 | 386 | 198 | 192 | 47.8 | 0 |
### windows
| Engine | deno | bun | node | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.1 | 1.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 135.0M | 126.9M | 112.6M | 6.6M | 112.9M | 44.1M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 103.0M | 107.1M | 81.5M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 32.1M | 19.8M | 31.0M | 6.2M | 109.8M | 38.4M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 32432 | 37537 | 31761 | 35517 | 701 | 448 | 430 | 420 | 237 | 47.8 | 0 |
| DeltaBlue | 70270 | 36517 | 74118 | 29958 | 621 | 410 | 377 | 403 | 330 | 40.6 | 0 |
| Crypto | 42119 | 42017 | 41634 | 19730 | 787 | 423 | 415 | 374 | 185 | 71.4 | 0 |
| RayTrace | 64379 | 97531 | 59717 | 3848 | 1004 | 728 | 604 | 580 | 450 | 130 | 0 |
| EarleyBoyer | 70640 | 56621 | 62103 | 28104 | 2206 | 1133 | 979 | 983 | 561 | 136 | 0 |
| RegExp | 9748 | 16944 | 8388 | 1114 | 401 | 195 | 191 | 186 | 197 | 42.6 | 0 |
| Splay | 37021 | 32344 | 10219 | 3032 | 2363 | 1376 | 1026 | 994 | 605 | 163 | 0 |
| NavierStokes | 39029 | 34735 | 38694 | 28938 | 1096 | 740 | 710 | 677 | 501 | 158 | 0 |
| Score | 39682 | 39606 | 32370 | 11048 | 971 | 579 | 522 | 509 | 349 | 84.8 | 0 |
