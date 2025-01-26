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
| Version | 0 | 1.2.0 | 13.3.0 | 22.13.0 | 1.46.3 | 134.0 | 24.1.2 | 0.12.0 | 0.4.0-beta | 24.6.0 | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 34.7M | 93.7M | 50.5M | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 10.6M | 5.1M | 4.6M | 2.2M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 34.7M | 93.7M | 488K | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 10.6M | 5.1M | 4.6M | 2.2M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42493 | 42899 | 35186 | 32241 | 32845 | 13016 | 35457 | 1100 | 820 | 674 | 710 | 433 | 224 | 88.6 | 60.6 | 256 |
| DeltaBlue | 48425 | 49430 | 84036 | 67176 | 69411 | 12906 | 26136 | 1050 | 746 | 649 | 653 | 413 | 324 | 159 | 55 | 265 |
| Crypto | 45626 | 45224 | 42550 | 41594 | 41733 | 17798 | 15835 | 1370 | 686 | 602 | 774 | 411 | 184 | 320 | 77.1 | 281 |
| RayTrace | 116474 | 117806 | 103968 | 55499 | 58533 | 28461 | 4800 | 1514 | 1238 | 1117 | 914 | 562 | 495 | 487 | 162 | 350 |
| EarleyBoyer | 68436 | 69119 | 75228 | 66897 | 68252 | 36996 | 24111 | 3370 | 2051 | 1805 | 1531 | 987 | 526 | 320 | 199 | 0 |
| RegExp | 21820 | 21226 | 9971 | 9146 | 9192 | 8577 | 1038 | 558 | 200 | 256 | 227 | 159 | 203 | 94.2 | 49.2 | 0 |
| Splay | 39556 | 36671 | 38350 | 32596 | 23363 | 23593 | 2804 | 3712 | 1903 | 2076 | 1825 | 1000 | 845 | 393 | 233 | 0 |
| NavierStokes | 34656 | 34394 | 38732 | 39099 | 38881 | 21898 | 22319 | 1854 | 1184 | 1041 | 1376 | 495 | 499 | 810 | 175 | 0 |
| Score | 46638 | 46241 | 44203 | 37486 | 36534 | 18538 | 10124 | 1536 | 912 | 858 | 855 | 488 | 362 | 260 | 107 | 0 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 2024-02-14 | 0.4.0-beta | 1.3.5 | 15.5.1 |
| Total size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Exe size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 52519 | 44650 | 44269 | 30469 | 1366 | 1289 | 1298 | 1085 | 800 | 409 | 121 |
| DeltaBlue | 65126 | 109663 | 95177 | 38686 | 1259 | 1237 | 1189 | 1071 | 829 | 608 | 221 |
| Crypto | 66876 | 59984 | 58898 | 23202 | 1493 | 1200 | 1203 | 1273 | 575 | 314 | 574 |
| RayTrace | 183073 | 79401 | 78809 | 3893 | 2567 | 2169 | 1452 | 1189 | 1183 | 1013 | 759 |
| EarleyBoyer | 100425 | 95406 | 93943 | 28273 | 5310 | 3301 | 2437 | 2213 | 1763 | 1121 | 491 |
| RegExp | 32730 | 13574 | 11752 | 1389 | 742 | 311 | 270 | 267 | 171 | 363 | 357 |
| Splay | 51478 | 37535 | 44665 | 2219 | 4802 | 3631 | 2066 | 2261 | 1417 | 1254 | 583 |
| NavierStokes | 33586 | 40688 | 40096 | 27547 | 1643 | 2180 | 2094 | 2443 | 917 | 776 | 1706 |
| Score | 62671 | 51049 | 49936 | 11245 | 1945 | 1552 | 1290 | 1244 | 805 | 649 | 461 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | llrt | qjs(ng) | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.0 | 1.46.3 | 22.13.0 | 24.1.2 | 0.12.0 | 2021-03-27 | 24.12.0 | 0.4.0-beta | 0.8.0 | 1.3.5 | 0.20.0 |
| Total size | 126.2M | 139.7M | 110.4M | 6.6M | 139.1M | 7.9M | 50.0M | 38.2M | 9.0M | 7.5M | 42.4M |
| Exe size | 106.4M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 9.9M | 1.7M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 136.1M | 6.9M | 44.3M | 28.3M | 7.3M | 6.9M | 15.0M |
| Richards | 35980 | 32845 | 32368 | 35693 | 693 | 519 | 432 | 420 | 434 | 225 | 46.5 |
| DeltaBlue | 36352 | 72869 | 62977 | 28997 | 615 | 529 | 403 | 383 | 403 | 324 | 40.9 |
| Crypto | 40817 | 38882 | 39074 | 25061 | 789 | 771 | 371 | 371 | 369 | 183 | 68.7 |
| RayTrace | 93461 | 57867 | 51429 | 3774 | 1001 | 549 | 743 | 594 | 580 | 446 | 130 |
| EarleyBoyer | 53821 | 64272 | 60151 | 27518 | 2221 | 1036 | 1121 | 1014 | 991 | 546 | 132 |
| RegExp | 17075 | 8819 | 7743 | 966 | 400 | 198 | 215 | 194 | 189 | 196 | 42.4 |
| Splay | 30991 | 22956 | 27731 | 3103 | 2191 | 1042 | 1360 | 1043 | 994 | 1139 | 165 |
| NavierStokes | 34508 | 39060 | 38321 | 26982 | 1074 | 1294 | 655 | 661 | 666 | 507 | 149 |
| Score | 38576 | 35864 | 34544 | 11023 | 957 | 651 | 564 | 513 | 511 | 372 | 83.3 |
