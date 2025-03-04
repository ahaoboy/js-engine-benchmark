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

## Note

### graaljs size

lib and modules need to be included in the dll size

```
Could not canonicalize /root/.easy-install/graaljs/../wasm.jar
Could not canonicalize /root/.easy-install/graaljs/../../ruby/jline3.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/graaljs-launcher.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/launcher-common.jar
Error while loading /root/.easy-install/graaljs/../../../lib/server/libjvm.so:
/root/.easy-install/graaljs/../../../lib/server/libjvm.so: cannot open shared object file: No such file or directory
Could not load JVM.
```



## bench

3/3/2025, 1:19:53 AM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.2 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 940K | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42076 | 34811 | 41808 | 32711 | 33078 | 13634 | 35440 | 1120 | 800 | 676 | 712 | 636 | 250 | 184 | 86.4 | 60.6 | 278 |
| DeltaBlue | 50336 | 95653 | 57384 | 69444 | 76346 | 12834 | 39089 | 1057 | 727 | 672 | 685 | 613 | 363 | 318 | 155 | 53.3 | 283 |
| Crypto | 45801 | 42794 | 44991 | 41607 | 41439 | 17508 | 14986 | 1373 | 696 | 746 | 590 | 380 | 190 | 184 | 291 | 81 | 306 |
| RayTrace | 109814 | 105078 | 111812 | 66377 | 62085 | 27130 | 5162 | 1553 | 1199 | 917 | 1084 | 705 | 525 | 488 | 456 | 165 | 352 |
| EarleyBoyer | 69365 | 81940 | 66279 | 71992 | 63826 | 37105 | 35133 | 3399 | 2004 | 1528 | 1770 | 1239 | 549 | 520 | 306 | 192 | 0 |
| RegExp | 20547 | 10243 | 21114 | 10001 | 9010 | 8659 | 1371 | 553 | 197 | 246 | 224 | 179 | 221 | 201 | 94.6 | 49.1 | 0 |
| Splay | 38545 | 38447 | 23258 | 37747 | 12004 | 22940 | 2093 | 3648 | 1842 | 1822 | 1897 | 1156 | 900 | 1271 | 367 | 234 | 0 |
| NavierStokes | 34587 | 38655 | 34360 | 38803 | 38507 | 22045 | 32764 | 1851 | 1183 | 1372 | 965 | 972 | 477 | 486 | 761 | 175 | 0 |
| Score | 46055 | 45595 | 43780 | 40047 | 33858 | 18463 | 11711 | 1543 | 897 | 857 | 831 | 634 | 384 | 369 | 248 | 107 | 0 |
### macos-arm64
| Engine | bun | node | deno | v8 | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 23.7.0 | 2.2.2 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 109.8M | 243.4M | 213.0M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 2.1M | 4.1M | 864K | 3.3M | 1.1M |
| Exe size | 109.8M | 243.4M | 213.0M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 2.1M | 4.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50221 | 42444 | 47446 | 32407 | 36125 | 1224 | 1053 | 1018 | 971 | 1191 | 363 | 113 | 205 |
| DeltaBlue | 74495 | 104870 | 110463 | 77160 | 33072 | 1161 | 751 | 1013 | 951 | 1114 | 505 | 208 | 222 |
| Crypto | 63979 | 55855 | 58827 | 33320 | 32944 | 1343 | 953 | 824 | 1184 | 991 | 278 | 527 | 247 |
| RayTrace | 148072 | 71409 | 87467 | 81103 | 3715 | 2322 | 1630 | 1616 | 1082 | 1322 | 823 | 733 | 305 |
| EarleyBoyer | 85105 | 80932 | 99410 | 75217 | 37891 | 4831 | 2647 | 2569 | 2008 | 2186 | 791 | 420 | 0 |
| RegExp | 26158 | 12262 | 13378 | 10819 | 1516 | 667 | 279 | 267 | 247 | 185 | 338 | 322 | 0 |
| Splay | 20063 | 37005 | 11458 | 35343 | 2084 | 4164 | 2871 | 2537 | 1871 | 1369 | 1171 | 537 | 0 |
| NavierStokes | 28168 | 38584 | 39583 | 32550 | 26712 | 1554 | 1832 | 1437 | 2153 | 1492 | 747 | 1551 | 0 |
| Score | 50834 | 47323 | 44813 | 39824 | 12126 | 1761 | 1216 | 1167 | 1113 | 1046 | 561 | 423 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 13.5.0 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 120.5M | 1.7M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 120.5M | 1.7M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 26745 | 22025 | 25890 | 22117 | 33487 | 498 | 467 | 423 | 446 | 256 | 89.1 | 141 | 24 | 111 |
| DeltaBlue | 41198 | 63711 | 45992 | 44094 | 30599 | 539 | 518 | 494 | 502 | 452 | 138 | 195 | 22.2 | 123 |
| Crypto | 33971 | 39513 | 32684 | 32473 | 21687 | 564 | 295 | 279 | 326 | 270 | 175 | 109 | 38.1 | 132 |
| RayTrace | 94497 | 91093 | 67635 | 51526 | 2368 | 1085 | 817 | 782 | 427 | 474 | 423 | 328 | 74.9 | 206 |
| EarleyBoyer | 52639 | 34673 | 57524 | 43843 | 18162 | 1759 | 1071 | 1202 | 817 | 858 | 296 | 372 | 84 | 0 |
| RegExp | 13792 | 8051 | 8126 | 6429 | 971 | 291 | 93.5 | 90.4 | 78.7 | 79.7 | 121 | 98.6 | 23.6 | 0 |
| Splay | 27780 | 39156 | 27935 | 25743 | 1979 | 2135 | 1579 | 1482 | 826 | 817 | 244 | 360 | 122 | 0 |
| NavierStokes | 30479 | 35580 | 32846 | 33538 | 27899 | 826 | 651 | 597 | 709 | 632 | 455 | 249 | 76.8 | 0 |
| Score | 34847 | 34408 | 32106 | 28175 | 9198 | 788 | 528 | 507 | 430 | 389 | 209 | 206 | 48 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 135.0M | 112.6M | 6.6M | 112.9M | 43.2M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 103.0M | 81.5M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 32.1M | 31.0M | 6.2M | 109.8M | 37.5M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 34900 | 32365 | 33180 | 36057 | 694 | 448 | 425 | 431 | 212 | 49.6 | 0 |
| DeltaBlue | 46805 | 68769 | 76750 | 29604 | 622 | 410 | 377 | 403 | 310 | 42.4 | 0 |
| Crypto | 42931 | 40642 | 41741 | 22040 | 789 | 418 | 418 | 374 | 181 | 76 | 0 |
| RayTrace | 99825 | 62085 | 59657 | 4441 | 1015 | 725 | 596 | 578 | 437 | 134 | 0 |
| EarleyBoyer | 57027 | 72633 | 63006 | 26246 | 2250 | 1144 | 993 | 987 | 513 | 145 | 0 |
| RegExp | 17638 | 9900 | 8455 | 1054 | 406 | 196 | 193 | 188 | 199 | 42.9 | 0 |
| Splay | 24822 | 36695 | 32931 | 2947 | 2469 | 1426 | 1034 | 1002 | 652 | 187 | 0 |
| NavierStokes | 34726 | 38990 | 38655 | 23993 | 1076 | 743 | 707 | 671 | 486 | 167 | 0 |
| Score | 39618 | 39375 | 37948 | 10935 | 978 | 582 | 523 | 511 | 337 | 89.6 | 0 |
