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
| Richards | 41522 | 39934 | 35210 | 32323 | 32930 | 12991 | 35447 | 1100 | 814 | 676 | 705 | 682 | 232 | 89.1 | 61.1 | 260 |
| DeltaBlue | 50283 | 49086 | 84724 | 64458 | 72677 | 12946 | 26983 | 1042 | 750 | 672 | 692 | 661 | 321 | 162 | 55.6 | 269 |
| Crypto | 45910 | 44586 | 42789 | 41290 | 41647 | 17808 | 14374 | 1366 | 699 | 614 | 753 | 611 | 183 | 319 | 80.6 | 283 |
| RayTrace | 115956 | 107594 | 102414 | 55666 | 58089 | 27574 | 6647 | 1555 | 1238 | 1128 | 920 | 1017 | 520 | 502 | 166 | 349 |
| EarleyBoyer | 70068 | 67761 | 75171 | 66995 | 65510 | 37003 | 24257 | 3396 | 2055 | 1801 | 1500 | 1538 | 535 | 344 | 197 | 0 |
| RegExp | 21820 | 21253 | 10102 | 9074 | 9101 | 8793 | 1253 | 556 | 199 | 256 | 226 | 248 | 202 | 70.6 | 49.1 | 0 |
| Splay | 37657 | 35416 | 37722 | 33151 | 23054 | 22695 | 2212 | 3594 | 1877 | 2027 | 1767 | 1767 | 1205 | 389 | 226 | 0 |
| NavierStokes | 34622 | 34326 | 38655 | 39029 | 38912 | 21898 | 16538 | 1915 | 1181 | 1015 | 1401 | 1035 | 485 | 761 | 173 | 0 |
| Score | 46578 | 44881 | 44165 | 37324 | 36422 | 18437 | 10020 | 1540 | 912 | 860 | 854 | 815 | 381 | 253 | 107 | 0 |
| Exe size | 34.7M | 93.6M | 488K | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 34.7M | 93.6M | 50.5M | 114.3M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 49677 | 41519 | 40855 | 27793 | 1248 | 1303 | 1110 | 1289 | 794 | 384 | 107 |
| DeltaBlue | 60723 | 87408 | 66065 | 31948 | 1007 | 1250 | 1124 | 1124 | 729 | 577 | 197 |
| Crypto | 62836 | 55188 | 53495 | 19709 | 1263 | 1112 | 1337 | 1139 | 483 | 279 | 526 |
| RayTrace | 148738 | 63861 | 71853 | 751 | 2312 | 2016 | 1261 | 1495 | 1208 | 902 | 647 |
| EarleyBoyer | 89005 | 85494 | 86861 | 16582 | 4320 | 2982 | 2370 | 2290 | 1886 | 735 | 426 |
| RegExp | 28149 | 12377 | 11843 | 1102 | 647 | 296 | 278 | 253 | 169 | 309 | 342 |
| Splay | 41014 | 35579 | 34560 | 1458 | 3370 | 3395 | 2477 | 2169 | 1960 | 1445 | 557 |
| NavierStokes | 31429 | 37766 | 38139 | 15489 | 1401 | 2078 | 2526 | 1963 | 833 | 705 | 1603 |
| Score | 55579 | 45443 | 44007 | 6948 | 1624 | 1477 | 1310 | 1253 | 805 | 580 | 418 |
| Exe size | 107.5M | 231.9M | 210.3M | 304K | 15.7M | 7.1M | 1.8M | 2.0M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 107.5M | 231.9M | 210.3M | 304K | 15.7M | 7.1M | 1.8M | 2.0M | 20.2M | 864K | 3.2M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35436 | 33385 | 31119 | 33593 | 698 | 561 | 441 | 430 | 409 | 237 | 48.1 |
| DeltaBlue | 37423 | 73378 | 67745 | 33652 | 619 | 515 | 403 | 390 | 383 | 330 | 42.7 |
| Crypto | 41219 | 40482 | 40881 | 19879 | 781 | 763 | 362 | 374 | 368 | 182 | 74.5 |
| RayTrace | 93757 | 53205 | 51133 | 3444 | 1012 | 549 | 740 | 580 | 600 | 448 | 134 |
| EarleyBoyer | 53470 | 65619 | 58639 | 27199 | 2241 | 1006 | 1145 | 992 | 989 | 547 | 143 |
| RegExp | 15547 | 8866 | 7599 | 954 | 401 | 195 | 215 | 184 | 193 | 198 | 42.8 |
| Splay | 30967 | 22793 | 26982 | 2591 | 2361 | 1019 | 1369 | 993 | 985 | 654 | 181 |
| NavierStokes | 32583 | 39029 | 37952 | 28056 | 1097 | 1285 | 655 | 667 | 640 | 503 | 164 |
| Score | 37946 | 35854 | 34508 | 10483 | 972 | 648 | 566 | 508 | 504 | 350 | 88.4 |
| Exe size | 105.9M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 83.7M | 6.9M | 45.4M | 7.3M | 28.3M | 6.9M | 15.0M |
| Total size | 125.7M | 139.7M | 110.4M | 6.6M | 86.7M | 7.9M | 51.1M | 9.0M | 38.2M | 7.5M | 42.4M |
