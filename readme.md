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
| Richards | 42066 | 42317 | 35270 | 38765 | 33177 | 13302 | 35440 | 1099 | 824 | 675 | 688 | 688 | 231 | 89.2 | 60.5 | 265 |
| DeltaBlue | 50865 | 49681 | 99679 | 64683 | 72584 | 12615 | 40127 | 1058 | 746 | 676 | 671 | 656 | 324 | 161 | 55.1 | 269 |
| Crypto | 45397 | 44958 | 42578 | 41224 | 41745 | 18105 | 29179 | 1363 | 687 | 614 | 767 | 612 | 182 | 317 | 80.6 | 282 |
| RayTrace | 115438 | 116844 | 102266 | 54261 | 57070 | 28461 | 5942 | 1567 | 1233 | 1124 | 867 | 1026 | 508 | 506 | 165 | 347 |
| EarleyBoyer | 68994 | 68434 | 79564 | 64687 | 66942 | 37262 | 29560 | 3421 | 2034 | 1748 | 1458 | 1477 | 493 | 342 | 190 | 0 |
| RegExp | 22093 | 20729 | 10072 | 8857 | 9110 | 8737 | 987 | 553 | 199 | 260 | 224 | 236 | 195 | 71.2 | 49.3 | 0 |
| Splay | 38594 | 35807 | 37698 | 33020 | 22646 | 22524 | 3863 | 3644 | 1734 | 1948 | 1654 | 1679 | 1312 | 395 | 229 | 0 |
| NavierStokes | 34474 | 34178 | 38469 | 39099 | 38436 | 21832 | 15092 | 1871 | 1153 | 1038 | 1314 | 1038 | 493 | 748 | 169 | 0 |
| Score | 46730 | 45744 | 45318 | 37778 | 36346 | 18521 | 11963 | 1542 | 897 | 856 | 827 | 803 | 379 | 253 | 106 | 0 |
| Exe size | 34.7M | 93.6M | 488K | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 34.7M | 93.6M | 50.5M | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 51629 | 42687 | 41773 | 29438 | 1361 | 1345 | 1282 | 1032 | 676 | 407 | 118 |
| DeltaBlue | 63414 | 98959 | 93696 | 36907 | 1256 | 1280 | 1193 | 905 | 727 | 609 | 216 |
| Crypto | 65948 | 58410 | 54661 | 21908 | 1483 | 1226 | 1194 | 1251 | 556 | 269 | 503 |
| RayTrace | 171011 | 79327 | 70299 | 3115 | 2567 | 2174 | 1512 | 1226 | 1094 | 997 | 686 |
| EarleyBoyer | 96064 | 87716 | 90644 | 25578 | 5275 | 3322 | 2598 | 2147 | 1576 | 1122 | 394 |
| RegExp | 31912 | 13066 | 12988 | 1328 | 732 | 303 | 283 | 274 | 159 | 362 | 332 |
| Splay | 49758 | 37567 | 40892 | 2087 | 4567 | 3676 | 2532 | 2391 | 1737 | 1026 | 476 |
| NavierStokes | 33027 | 39208 | 39544 | 25622 | 1575 | 2192 | 2188 | 2477 | 1010 | 771 | 1611 |
| Score | 60771 | 48965 | 48096 | 10379 | 1915 | 1571 | 1353 | 1223 | 776 | 618 | 415 |
| Exe size | 107.5M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 107.5M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 37152 | 31535 | 32570 | 35958 | 679 | 561 | 434 | 430 | 399 | 222 | 49.4 |
| DeltaBlue | 40689 | 65530 | 70092 | 34823 | 624 | 529 | 410 | 403 | 377 | 317 | 42.3 |
| Crypto | 41998 | 41646 | 41650 | 21633 | 778 | 767 | 368 | 373 | 362 | 180 | 74.4 |
| RayTrace | 86727 | 56700 | 52391 | 2735 | 1020 | 545 | 741 | 570 | 600 | 442 | 133 |
| EarleyBoyer | 57785 | 65140 | 65228 | 26620 | 2231 | 1037 | 1127 | 974 | 1005 | 555 | 138 |
| RegExp | 17092 | 8306 | 8728 | 1035 | 403 | 198 | 215 | 187 | 194 | 198 | 42.2 |
| Splay | 31977 | 29312 | 22573 | 3142 | 2402 | 1027 | 1320 | 994 | 1027 | 1140 | 186 |
| NavierStokes | 34656 | 39326 | 38990 | 22090 | 1079 | 1294 | 682 | 645 | 646 | 505 | 166 |
| Score | 39583 | 36343 | 35453 | 10446 | 970 | 655 | 567 | 506 | 505 | 371 | 88.4 |
| Exe size | 105.9M | 79.4M | 102.9M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 31.1M | 36.8M | 6.2M | 109.8M | 6.9M | 45.4M | 7.3M | 28.3M | 6.9M | 15.0M |
| Total size | 125.7M | 110.4M | 139.7M | 6.6M | 112.9M | 7.9M | 51.1M | 9.0M | 38.2M | 7.5M | 42.4M |
