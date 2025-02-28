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

### ubuntu
| Engine | jsc | v8 | bun | node | deno | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs-one | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 23.7.0 | 2.2.2 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 117.9M | 122.7M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 940K | 95.1M | 117.9M | 122.7M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42747 | 35080 | 39821 | 31578 | 33367 | 13425 | 35581 | 1124 | 796 | 691 | 703 | 622 | 245 | 227 | 88.3 | 61.1 | 274 |
| DeltaBlue | 47446 | 83580 | 57344 | 73431 | 69305 | 12820 | 43995 | 1078 | 727 | 668 | 674 | 608 | 353 | 323 | 157 | 54.9 | 286 |
| Crypto | 45473 | 42549 | 44465 | 41336 | 41773 | 17680 | 27305 | 1364 | 683 | 770 | 585 | 377 | 188 | 183 | 299 | 80.7 | 303 |
| RayTrace | 109000 | 105004 | 104412 | 60901 | 65563 | 27898 | 3694 | 1584 | 1187 | 934 | 1098 | 708 | 510 | 477 | 467 | 166 | 353 |
| EarleyBoyer | 66698 | 80855 | 64935 | 63956 | 70952 | 37721 | 29266 | 3348 | 1978 | 1466 | 1771 | 1202 | 500 | 461 | 315 | 188 | 0 |
| RegExp | 19982 | 10082 | 20527 | 9038 | 9930 | 8569 | 1261 | 549 | 197 | 238 | 226 | 179 | 214 | 193 | 93.2 | 48.8 | 0 |
| Splay | 36223 | 36321 | 24203 | 32450 | 12584 | 21514 | 2726 | 3476 | 1669 | 1677 | 1881 | 1083 | 850 | 927 | 368 | 216 | 0 |
| NavierStokes | 34429 | 38655 | 33801 | 38617 | 38694 | 21980 | 31758 | 1854 | 1181 | 1349 | 981 | 974 | 487 | 484 | 721 | 175 | 0 |
| Score | 44964 | 44359 | 42941 | 37867 | 34844 | 18371 | 12242 | 1536 | 881 | 846 | 830 | 624 | 372 | 356 | 250 | 106 | 0 |
### macos-arm64
| Engine | deno | bun | node | v8 | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.2 | 1.2.4 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 24.12.0 | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 213.0M | 109.8M | 243.4M | 1.7M | 296K | 15.7M | 20.5M | 7.2M | 2.1M | 4.1M | 864K | 3.3M | 1.1M |
| Exe size | 213.0M | 109.8M | 243.4M | 1.7M | 296K | 15.7M | 20.5M | 7.2M | 2.1M | 4.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 46599 | 52092 | 41282 | 32721 | 29375 | 1306 | 1020 | 1114 | 921 | 889 | 360 | 118 | 197 |
| DeltaBlue | 108513 | 73477 | 99289 | 76677 | 24113 | 1247 | 1103 | 928 | 973 | 847 | 590 | 218 | 215 |
| Crypto | 59362 | 60782 | 56786 | 34690 | 28225 | 1344 | 860 | 815 | 1155 | 916 | 300 | 500 | 243 |
| RayTrace | 80585 | 150662 | 73112 | 88281 | 5940 | 2432 | 1832 | 1438 | 1059 | 1038 | 919 | 721 | 319 |
| EarleyBoyer | 97504 | 75768 | 69644 | 67538 | 2903 | 5009 | 2636 | 2122 | 1766 | 1813 | 1002 | 438 | 0 |
| RegExp | 15410 | 21211 | 13547 | 9346 | 1336 | 680 | 270 | 245 | 220 | 225 | 333 | 292 | 0 |
| Splay | 52961 | 29492 | 44747 | 37372 | 2515 | 3944 | 2556 | 2999 | 1817 | 1768 | 920 | 542 | 0 |
| NavierStokes | 38990 | 29591 | 39920 | 34132 | 25770 | 1550 | 1429 | 1878 | 1965 | 1953 | 749 | 1532 | 0 |
| Score | 54252 | 51458 | 48105 | 39713 | 8597 | 1801 | 1211 | 1171 | 1054 | 1001 | 584 | 421 | 0 |
### macos-amd64
| Engine | bun | deno | v8 | node | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 13.5.0 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 120.5M | 227.2M | 1.7M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 4.1M | 2.3M | 888K | 3.3M | 50.7M | 1.1M |
| Exe size | 120.5M | 227.2M | 1.7M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 4.1M | 2.3M | 888K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28129 | 30275 | 22318 | 22932 | 43418 | 496 | 478 | 400 | 468 | 359 | 143 | 88.4 | 24.8 | 111 |
| DeltaBlue | 40074 | 46659 | 63870 | 47572 | 48385 | 547 | 547 | 461 | 490 | 485 | 199 | 137 | 22.2 | 127 |
| Crypto | 36821 | 32597 | 41405 | 33949 | 26906 | 556 | 304 | 263 | 296 | 323 | 110 | 177 | 39.1 | 137 |
| RayTrace | 104856 | 67413 | 104486 | 53353 | 15762 | 1078 | 842 | 751 | 512 | 425 | 343 | 429 | 75 | 212 |
| EarleyBoyer | 58920 | 61807 | 68099 | 50525 | 37749 | 1803 | 1266 | 1120 | 869 | 816 | 414 | 315 | 84.6 | 0 |
| RegExp | 17365 | 8628 | 5461 | 7320 | 1381 | 285 | 93.3 | 87.4 | 81.9 | 82 | 99.2 | 128 | 23.3 | 0 |
| Splay | 38741 | 34223 | 20791 | 30290 | 2392 | 2347 | 1555 | 1429 | 871 | 877 | 552 | 302 | 119 | 0 |
| NavierStokes | 32879 | 36434 | 36470 | 36506 | 32764 | 876 | 652 | 500 | 646 | 807 | 265 | 488 | 76.1 | 0 |
| Score | 39284 | 34621 | 33887 | 30792 | 15673 | 802 | 547 | 474 | 440 | 428 | 225 | 220 | 48.2 | 0 |
### windows
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 23.7.0 | 2.2.2 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 112.6M | 135.0M | 6.6M | 112.9M | 44.3M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 81.5M | 103.0M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 31.0M | 32.1M | 6.2M | 109.8M | 38.6M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 34878 | 33346 | 33314 | 35986 | 700 | 451 | 434 | 427 | 233 | 49.1 | 0 |
| DeltaBlue | 42897 | 71771 | 71652 | 27485 | 625 | 410 | 377 | 397 | 326 | 42 | 0 |
| Crypto | 42824 | 41392 | 42062 | 23531 | 778 | 427 | 418 | 373 | 185 | 74 | 0 |
| RayTrace | 97679 | 57571 | 60027 | 3404 | 990 | 737 | 611 | 585 | 433 | 132 | 0 |
| EarleyBoyer | 55600 | 57036 | 71888 | 22979 | 2233 | 1127 | 986 | 967 | 538 | 132 | 0 |
| RegExp | 16638 | 8455 | 9910 | 942 | 404 | 195 | 191 | 187 | 196 | 41.8 | 0 |
| Splay | 31449 | 30298 | 12713 | 2874 | 2241 | 1377 | 970 | 978 | 1132 | 180 | 0 |
| NavierStokes | 34726 | 38655 | 38990 | 24041 | 1069 | 743 | 713 | 666 | 507 | 166 | 0 |
| Score | 39821 | 36602 | 34754 | 10214 | 961 | 582 | 521 | 507 | 372 | 87.1 | 0 |
