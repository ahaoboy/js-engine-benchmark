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
| Engine | jsc | bun | v8 | node | deno | graaljs | spidermonkey | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exe size | 34.7M | 93.7M | 488K | 114.5M | 137.0M | 1.1M | 1.1M | 36.0M | 10.6M | 5.1M | 4.6M | 2.2M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 34.7M | 93.7M | 50.5M | 114.5M | 137.0M | 1.1M | 1.1M | 36.0M | 10.6M | 5.1M | 4.6M | 2.2M | 412K | 2.2M | 27.0M | 456K |
| version | 0 | 1.2.0 | 13.3.0 | 22.13.0 | 1.46.3 | 24.1.2 | 0 | 0.12.0 | 0.4.0-beta | 24.6.0 | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Richards | 41459 | 40989 | 35027 | 38836 | 33314 | 35567 | 35609 | 1079 | 799 | 674 | 708 | 431 | 231 | 89.3 | 61.5 | 260 |
| DeltaBlue | 51109 | 48696 | 84228 | 64875 | 74660 | 40206 | 40563 | 1063 | 746 | 689 | 691 | 414 | 322 | 159 | 55.8 | 270 |
| Crypto | 45739 | 45252 | 42430 | 41727 | 41096 | 27932 | 28320 | 1364 | 687 | 619 | 779 | 415 | 181 | 307 | 81 | 280 |
| RayTrace | 119138 | 114994 | 101970 | 55961 | 58089 | 5774 | 5027 | 1557 | 1226 | 1120 | 890 | 555 | 502 | 487 | 164 | 345 |
| EarleyBoyer | 70708 | 69310 | 77479 | 62038 | 69939 | 36620 | 31218 | 3441 | 2060 | 1810 | 1530 | 986 | 548 | 320 | 193 | 0 |
| RegExp | 22343 | 21317 | 10203 | 9083 | 9119 | 1376 | 1147 | 555 | 198 | 256 | 226 | 156 | 202 | 94.2 | 49.2 | 0 |
| Splay | 39140 | 35604 | 37510 | 33436 | 22842 | 2537 | 2848 | 3704 | 1897 | 2033 | 1802 | 1001 | 863 | 395 | 233 | 0 |
| NavierStokes | 34622 | 34394 | 38584 | 39060 | 36803 | 30570 | 18069 | 1848 | 1161 | 1015 | 1420 | 495 | 495 | 744 | 171 | 0 |
| Score | 47220 | 45630 | 44214 | 37980 | 36548 | 13163 | 11812 | 1541 | 905 | 863 | 860 | 486 | 366 | 257 | 107 | 0 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exe size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 2024-02-14 | 0.4.0-beta | 1.3.5 | 15.5.1 |
| Richards | 50828 | 43284 | 43358 | 28877 | 1291 | 1263 | 1264 | 1063 | 781 | 382 | 105 |
| DeltaBlue | 61133 | 105035 | 93068 | 36352 | 1238 | 1254 | 1148 | 1051 | 767 | 543 | 198 |
| Crypto | 66776 | 57313 | 56999 | 21104 | 1486 | 1148 | 1163 | 1298 | 549 | 293 | 522 |
| RayTrace | 169309 | 77625 | 79475 | 1290 | 2577 | 2061 | 1477 | 1231 | 1120 | 914 | 738 |
| EarleyBoyer | 94270 | 94989 | 87419 | 23849 | 5197 | 3108 | 2412 | 2258 | 1772 | 1000 | 474 |
| RegExp | 29457 | 13756 | 12389 | 1334 | 639 | 289 | 266 | 269 | 165 | 342 | 348 |
| Splay | 43907 | 36443 | 43630 | 2179 | 3585 | 3439 | 2225 | 2239 | 1862 | 1570 | 538 |
| NavierStokes | 32171 | 40284 | 39356 | 23744 | 1311 | 2050 | 2043 | 2429 | 944 | 716 | 1651 |
| Score | 58533 | 49958 | 49139 | 9100 | 1768 | 1486 | 1281 | 1249 | 812 | 618 | 431 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exe size | 106.4M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 109.8M | 6.9M | 44.3M | 7.3M | 28.3M | 6.9M | 15.0M |
| Total size | 126.2M | 139.7M | 110.4M | 6.6M | 112.9M | 7.9M | 50.0M | 9.0M | 38.2M | 7.5M | 42.4M |
| version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 2021-03-27 | 24.12.0 | 0.8.0 | 0.4.0-beta | 1.3.5 | 0.20.0 |
| Richards | 34165 | 38250 | 30992 | 34578 | 697 | 564 | 436 | 413 | 417 | 237 | 49.6 |
| DeltaBlue | 37218 | 70231 | 63804 | 28453 | 618 | 501 | 410 | 396 | 383 | 337 | 42.4 |
| Crypto | 40910 | 39331 | 41072 | 22415 | 787 | 762 | 366 | 380 | 369 | 184 | 74.6 |
| RayTrace | 94201 | 57645 | 51281 | 2765 | 1011 | 551 | 744 | 592 | 599 | 465 | 135 |
| EarleyBoyer | 53753 | 67900 | 58947 | 24566 | 2239 | 1030 | 1157 | 981 | 1008 | 575 | 138 |
| RegExp | 15910 | 8956 | 7546 | 979 | 404 | 183 | 216 | 187 | 178 | 200 | 42.8 |
| Splay | 30482 | 23258 | 27422 | 2642 | 2432 | 1034 | 1402 | 1000 | 1026 | 577 | 185 |
| NavierStokes | 33290 | 39060 | 37877 | 24439 | 1087 | 1294 | 681 | 674 | 648 | 496 | 168 |
| Score | 37895 | 36802 | 34319 | 9932 | 976 | 645 | 573 | 510 | 505 | 350 | 88.9 |
