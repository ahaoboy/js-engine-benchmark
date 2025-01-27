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
| Engine | jsc | v8 | bun | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.3.0 | 1.2.0 | 22.13.0 | 1.46.3 | 134.0 | 24.1.2 | 0.12.0 | 0.4.0-beta | 24.6.0 | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 34.7M | 50.5M | 93.7M | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 10.6M | 5.1M | 4.6M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 34.7M | 488K | 93.7M | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 10.6M | 5.1M | 4.6M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41490 | 34910 | 39782 | 32167 | 33265 | 13129 | 40558 | 1119 | 828 | 681 | 708 | 630 | 228 | 88.3 | 60.6 | 266 |
| DeltaBlue | 49787 | 99891 | 48676 | 64776 | 68439 | 12926 | 28583 | 1078 | 740 | 668 | 685 | 612 | 318 | 159 | 55.5 | 271 |
| Crypto | 45855 | 42110 | 45197 | 41293 | 41567 | 17757 | 28186 | 1361 | 690 | 606 | 763 | 381 | 183 | 316 | 80.4 | 281 |
| RayTrace | 114772 | 101378 | 112626 | 55518 | 56848 | 27352 | 4648 | 1598 | 1210 | 1113 | 916 | 702 | 490 | 488 | 164 | 342 |
| EarleyBoyer | 67170 | 79589 | 65770 | 63761 | 65862 | 37452 | 28955 | 3400 | 2009 | 1783 | 1476 | 1219 | 474 | 318 | 187 | 0 |
| RegExp | 21275 | 10082 | 20638 | 8992 | 9146 | 8685 | 797 | 550 | 198 | 254 | 228 | 181 | 196 | 93.3 | 49.1 | 0 |
| Splay | 36981 | 37543 | 34332 | 32841 | 22940 | 22247 | 2214 | 3504 | 1734 | 1956 | 1718 | 1115 | 846 | 373 | 226 | 0 |
| NavierStokes | 34429 | 38732 | 34212 | 39029 | 38912 | 22024 | 23720 | 1822 | 1158 | 1043 | 1322 | 971 | 491 | 815 | 175 | 0 |
| Score | 45923 | 45183 | 44621 | 36997 | 36113 | 18399 | 10792 | 1538 | 894 | 854 | 845 | 629 | 355 | 258 | 106 | 0 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 2024-02-14 | 0.4.0-beta | 1.3.5 | 15.5.1 |
| Total size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Exe size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 46938 | 39694 | 39379 | 24055 | 1267 | 1330 | 1299 | 1043 | 711 | 403 | 110 |
| DeltaBlue | 61523 | 76756 | 78680 | 25812 | 989 | 1328 | 1166 | 1081 | 732 | 590 | 196 |
| Crypto | 64540 | 55321 | 44603 | 18299 | 1324 | 1206 | 1219 | 1249 | 454 | 310 | 508 |
| RayTrace | 174933 | 70817 | 62393 | 5846 | 2258 | 2137 | 1569 | 1199 | 1162 | 994 | 600 |
| EarleyBoyer | 95228 | 78472 | 76351 | 19827 | 4692 | 3271 | 2551 | 2227 | 1652 | 1099 | 426 |
| RegExp | 30912 | 12988 | 10819 | 1111 | 665 | 306 | 280 | 273 | 144 | 341 | 328 |
| Splay | 49253 | 35807 | 36598 | 2339 | 4367 | 3455 | 2377 | 2407 | 1581 | 1575 | 500 |
| NavierStokes | 32912 | 36249 | 38545 | 21602 | 1495 | 2163 | 2121 | 2497 | 850 | 730 | 1549 |
| Score | 59428 | 44648 | 42195 | 9629 | 1719 | 1554 | 1341 | 1256 | 738 | 649 | 404 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 2021-03-27 | 24.12.0 | 0.8.0 | 0.4.0-beta | 1.3.5 | 0.20.0 |
| Total size | 126.2M | 139.7M | 110.4M | 6.6M | 112.9M | 7.9M | 51.1M | 9.0M | 38.2M | 7.5M | 42.4M |
| Exe size | 106.4M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 109.8M | 6.9M | 45.4M | 7.3M | 28.3M | 6.9M | 15.0M |
| Richards | 36241 | 32291 | 30900 | 34652 | 697 | 561 | 434 | 437 | 424 | 215 | 48 |
| DeltaBlue | 37251 | 67659 | 63599 | 32096 | 623 | 528 | 410 | 396 | 377 | 317 | 42.2 |
| Crypto | 40598 | 40585 | 39700 | 20473 | 788 | 769 | 337 | 361 | 357 | 180 | 75.1 |
| RayTrace | 93905 | 57645 | 53353 | 3608 | 1010 | 549 | 728 | 578 | 572 | 450 | 132 |
| EarleyBoyer | 54138 | 66219 | 61187 | 24740 | 2239 | 1021 | 1134 | 981 | 1011 | 560 | 138 |
| RegExp | 16489 | 8766 | 7736 | 1089 | 403 | 198 | 217 | 188 | 178 | 197 | 42.4 |
| Splay | 30682 | 23135 | 27226 | 2634 | 2442 | 1008 | 1385 | 981 | 961 | 1157 | 165 |
| NavierStokes | 32698 | 38655 | 37433 | 29239 | 1076 | 1294 | 670 | 667 | 638 | 497 | 166 |
| Score | 38278 | 35725 | 34502 | 10689 | 975 | 653 | 562 | 507 | 495 | 370 | 86.7 |
