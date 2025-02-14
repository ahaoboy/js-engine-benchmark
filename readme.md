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
| Engine | jsc | bun | v8 | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.2 | 13.3.0 | 2.1.10 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 93.9M | 50.5M | 122.2M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 93.9M | 488K | 122.2M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42087 | 42006 | 35062 | 33819 | 32958 | 13365 | 35599 | 1112 | 787 | 693 | 695 | 631 | 232 | 85.6 | 60.9 | 273 |
| DeltaBlue | 49846 | 49013 | 94205 | 73966 | 73854 | 12642 | 39433 | 1051 | 732 | 678 | 673 | 611 | 321 | 154 | 54.7 | 280 |
| Crypto | 45582 | 44602 | 42650 | 41941 | 40993 | 17798 | 26537 | 1374 | 687 | 762 | 595 | 379 | 182 | 291 | 79.8 | 301 |
| RayTrace | 111442 | 114032 | 102414 | 62085 | 62307 | 27768 | 4439 | 1566 | 1213 | 919 | 1082 | 708 | 496 | 467 | 166 | 360 |
| EarleyBoyer | 68312 | 67068 | 78591 | 62289 | 62402 | 36772 | 28305 | 3401 | 1988 | 1540 | 1780 | 1239 | 501 | 313 | 193 | 0 |
| RegExp | 20568 | 20932 | 10132 | 9355 | 9155 | 8642 | 1383 | 553 | 196 | 240 | 225 | 175 | 196 | 91.7 | 49.3 | 0 |
| Splay | 36573 | 34083 | 36940 | 33069 | 33110 | 21962 | 2860 | 3628 | 1757 | 1747 | 1950 | 1137 | 1289 | 369 | 220 | 0 |
| NavierStokes | 33882 | 33835 | 37618 | 38655 | 37877 | 21602 | 17755 | 1686 | 1148 | 1379 | 972 | 973 | 476 | 773 | 170 | 0 |
| Score | 45557 | 45046 | 44709 | 38525 | 38115 | 18302 | 11604 | 1523 | 885 | 858 | 832 | 630 | 377 | 249 | 106 | 0 |
### macos-arm64
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | llrt | mujs | qjs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 2.1.10 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 1.3.5 | 2024-02-14 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 108.5M | 210.7M | 243.4M | 296K | 15.7M | 7.2M | 4.1M | 24.1M | 864K | 2.3M | 3.3M | 50.7M | 1.1M |
| Exe size | 108.5M | 210.7M | 243.4M | 296K | 15.7M | 7.2M | 4.1M | 24.1M | 864K | 2.3M | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50291 | 50980 | 41381 | 35867 | 1273 | 1237 | 1272 | 797 | 365 | 498 | 111 | 22.2 | 136 |
| DeltaBlue | 56637 | 96585 | 98013 | 37919 | 1173 | 1225 | 1176 | 759 | 555 | 616 | 208 | 20.9 | 155 |
| Crypto | 61205 | 56673 | 57709 | 42321 | 1373 | 1131 | 1162 | 464 | 299 | 605 | 515 | 36.4 | 159 |
| RayTrace | 162650 | 71557 | 68523 | 2974 | 2427 | 1981 | 1517 | 1120 | 898 | 499 | 707 | 69 | 227 |
| EarleyBoyer | 88650 | 72851 | 78540 | 49170 | 4858 | 3035 | 2421 | 1722 | 1017 | 996 | 421 | 76.5 | 0 |
| RegExp | 29152 | 13261 | 12559 | 1606 | 681 | 304 | 262 | 170 | 341 | 108 | 307 | 31.2 | 0 |
| Splay | 39458 | 44287 | 13165 | 3353 | 4050 | 3056 | 2151 | 1451 | 1075 | 1020 | 504 | 129 | 0 |
| NavierStokes | 31335 | 38249 | 31281 | 31515 | 1526 | 1986 | 2043 | 773 | 736 | 1100 | 1481 | 77.7 | 0 |
| Score | 55545 | 48897 | 39971 | 13943 | 1782 | 1445 | 1283 | 753 | 591 | 571 | 411 | 47.9 | 0 |
### macos-amd64
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 23.7.0 | 2.1.10 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 119.0M | 221.2M | 224.4M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 888K | 3.3M | 50.7M | 1.1M |
| Exe size | 119.0M | 221.2M | 224.4M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 888K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28948 | 21672 | 21700 | 43093 | 439 | 459 | 403 | 418 | 442 | 141 | 79.3 | 25.1 | 112 |
| DeltaBlue | 33495 | 49912 | 51413 | 45681 | 458 | 529 | 452 | 481 | 467 | 198 | 118 | 22.7 | 126 |
| Crypto | 37333 | 33619 | 33437 | 23379 | 470 | 293 | 263 | 316 | 276 | 110 | 145 | 37.8 | 135 |
| RayTrace | 104856 | 56461 | 46915 | 5743 | 886 | 801 | 730 | 410 | 484 | 337 | 435 | 70.9 | 210 |
| EarleyBoyer | 58561 | 50378 | 45813 | 35364 | 1473 | 1223 | 1108 | 703 | 800 | 412 | 319 | 69.6 | 0 |
| RegExp | 17582 | 7440 | 7847 | 1291 | 240 | 93.1 | 85.5 | 70.8 | 69.3 | 102 | 129 | 20.2 | 0 |
| Splay | 29369 | 34071 | 29402 | 2918 | 1944 | 1607 | 1404 | 825 | 719 | 411 | 282 | 92.4 | 0 |
| NavierStokes | 32139 | 34098 | 35249 | 21666 | 747 | 636 | 554 | 781 | 598 | 258 | 491 | 64.5 | 0 |
| Score | 37227 | 31183 | 29977 | 12892 | 675 | 534 | 475 | 412 | 400 | 215 | 207 | 43.5 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 2.1.10 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 126.3M | 133.9M | 112.6M | 6.6M | 112.9M | 44.1M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 106.5M | 102.7M | 81.5M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 664K | 27.4M | 1.3M |
| Dll size | 19.8M | 31.2M | 31.0M | 6.2M | 109.8M | 38.4M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 37748 | 33869 | 33269 | 34819 | 700 | 447 | 427 | 427 | 233 | 48.7 | 0 |
| DeltaBlue | 40253 | 76108 | 74297 | 32755 | 620 | 410 | 377 | 410 | 337 | 41.6 | 0 |
| Crypto | 42326 | 38563 | 39976 | 21785 | 779 | 424 | 416 | 374 | 183 | 75.7 | 0 |
| RayTrace | 88503 | 57201 | 60235 | 2513 | 1015 | 731 | 602 | 585 | 453 | 134 | 0 |
| EarleyBoyer | 57082 | 62002 | 63547 | 29226 | 2227 | 1139 | 993 | 983 | 556 | 144 | 0 |
| RegExp | 17729 | 9218 | 8495 | 1159 | 406 | 197 | 193 | 187 | 201 | 42.9 | 0 |
| Splay | 32206 | 34185 | 31032 | 3013 | 2432 | 1417 | 1019 | 1002 | 720 | 170 | 0 |
| NavierStokes | 34622 | 38912 | 38694 | 24313 | 1081 | 739 | 706 | 673 | 490 | 165 | 0 |
| Score | 39899 | 37973 | 37437 | 10563 | 975 | 583 | 523 | 512 | 356 | 87.8 | 0 |
