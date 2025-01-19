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
| Richards | 41861 | 39602 | 35164 | 30702 | 33117 | 13620 | 35870 | 1118 | 808 | 681 | 710 | 688 | 228 | 89.7 | 61 | 258 |
| DeltaBlue | 50593 | 47902 | 84664 | 64518 | 70105 | 12734 | 37681 | 1051 | 748 | 676 | 680 | 645 | 324 | 161 | 55.1 | 273 |
| Crypto | 45890 | 44635 | 42476 | 41586 | 41167 | 17627 | 23288 | 1350 | 685 | 611 | 769 | 602 | 183 | 321 | 80.7 | 285 |
| RayTrace | 118472 | 112330 | 102414 | 56996 | 58311 | 28120 | 5328 | 1551 | 1221 | 1129 | 928 | 993 | 505 | 504 | 166 | 353 |
| EarleyBoyer | 70048 | 66797 | 78576 | 64946 | 66234 | 37504 | 30386 | 3387 | 2012 | 1765 | 1450 | 1488 | 522 | 344 | 194 | 0 |
| RegExp | 22275 | 20679 | 10021 | 9001 | 9137 | 8848 | 1363 | 554 | 198 | 255 | 235 | 239 | 199 | 70.9 | 49.1 | 0 |
| Splay | 38496 | 34176 | 37959 | 33436 | 22500 | 23021 | 2402 | 3620 | 1677 | 1988 | 1700 | 1698 | 1332 | 399 | 227 | 0 |
| NavierStokes | 34691 | 34394 | 38732 | 39138 | 38912 | 21963 | 33390 | 1853 | 1134 | 1055 | 1362 | 1071 | 492 | 749 | 177 | 0 |
| Score | 47045 | 44524 | 44359 | 37103 | 36206 | 18616 | 12394 | 1536 | 887 | 860 | 850 | 802 | 383 | 254 | 107 | 0 |
| Exe size | 34.7M | 93.6M | 488K | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 34.7M | 93.6M | 50.5M | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 53052 | 43584 | 44428 | 30653 | 1374 | 1347 | 1354 | 1100 | 783 | 380 | 120 |
| DeltaBlue | 65377 | 109796 | 89815 | 38739 | 1257 | 1353 | 1234 | 1115 | 840 | 574 | 226 |
| Crypto | 67468 | 60321 | 57978 | 22181 | 1490 | 1222 | 1247 | 1327 | 556 | 313 | 573 |
| RayTrace | 178559 | 80955 | 79771 | 4247 | 2554 | 2186 | 1578 | 1264 | 1198 | 1004 | 759 |
| EarleyBoyer | 100774 | 96803 | 92474 | 32447 | 5250 | 3345 | 2595 | 2335 | 1870 | 1119 | 491 |
| RegExp | 32431 | 13742 | 13493 | 1290 | 737 | 314 | 284 | 289 | 160 | 358 | 355 |
| Splay | 52048 | 39539 | 43492 | 2102 | 4785 | 3676 | 2420 | 2540 | 1936 | 1248 | 587 |
| NavierStokes | 33109 | 38694 | 40662 | 27399 | 1629 | 2180 | 2187 | 2570 | 893 | 788 | 1715 |
| Score | 62583 | 51245 | 50261 | 11320 | 1937 | 1590 | 1376 | 1318 | 831 | 637 | 462 |
| Exe size | 107.5M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 107.5M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35549 | 33046 | 29297 | 33921 | 707 | 565 | 441 | 434 | 420 | 236 | 49 |
| DeltaBlue | 38434 | 72842 | 63718 | 28623 | 625 | 528 | 417 | 396 | 382 | 337 | 42 |
| Crypto | 40921 | 41845 | 39720 | 20830 | 792 | 764 | 379 | 370 | 368 | 184 | 75.1 |
| RayTrace | 97457 | 56091 | 52391 | 6099 | 1014 | 555 | 742 | 578 | 602 | 456 | 133 |
| EarleyBoyer | 56291 | 66510 | 61389 | 19887 | 2255 | 1040 | 1142 | 985 | 1018 | 578 | 147 |
| RegExp | 16242 | 8728 | 7855 | 945 | 402 | 196 | 217 | 188 | 191 | 203 | 43.3 |
| Splay | 29834 | 23355 | 28139 | 2446 | 2477 | 1008 | 1418 | 1018 | 1019 | 579 | 183 |
| NavierStokes | 33438 | 38990 | 37359 | 23058 | 1084 | 1290 | 681 | 670 | 643 | 500 | 164 |
| Score | 38640 | 36258 | 34418 | 10340 | 982 | 654 | 578 | 511 | 510 | 350 | 89 |
| Exe size | 105.9M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 83.6M | 6.9M | 44.3M | 7.3M | 28.3M | 6.9M | 15.0M |
| Total size | 125.7M | 139.7M | 110.4M | 6.6M | 86.6M | 7.9M | 50.0M | 9.0M | 38.2M | 7.5M | 42.4M |
