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
- [x] [primjs](https://github.com/lynx-family/primjs): JavaScript Engine Optimized for Lynx
- [x] [rquickjs](https://github.com/DelSkayn/rquickjs): High level bindings to the quickjs javascript engine
- [x] [ChakraCore](https://github.com/chakra-core/ChakraCore): ChakraCore is an open source Javascript engine with a C API.
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
- primjs: https://github.com/ahaoboy/primjs-build
- rquickjs-cli: https://github.com/ahaoboy/rquickjs-cli
- ChakraCore: https://github.com/ahaoboy/ChakraCore-build

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

3/10/2025, 1:14:05 AM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 121.9M | 117.9M | 296.3M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 2.2M | 27M | 454.2K |
| Exe size | 35.1M | 937K | 95.1M | 121.9M | 117.9M | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 2.2M | 27M | 454.2K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41067 | 31786 | 41293 | 32566 | 32411 | 13499 | 40576 | 1126 | 760 | 693 | 691 | 608 | 590 | 548 | 248 | 225 | 89.2 | 60.7 | 270 |
| DeltaBlue | 48960 | 80069 | 55724 | 68882 | 72961 | 12139 | 25568 | 1037 | 722 | 670 | 684 | 615 | 584 | 542 | 362 | 317 | 160 | 55.6 | 281 |
| Crypto | 45595 | 42784 | 44222 | 41734 | 41602 | 17676 | 21470 | 1359 | 688 | 754 | 593 | 571 | 547 | 355 | 190 | 182 | 316 | 80.2 | 297 |
| RayTrace | 109074 | 103894 | 107076 | 64971 | 61049 | 28137 | 7525 | 1557 | 1201 | 879 | 1090 | 938 | 874 | 712 | 427 | 401 | 488 | 164 | 350 |
| EarleyBoyer | 63390 | 80776 | 62280 | 70952 | 59921 | 36889 | 14307 | 3369 | 1919 | 1371 | 1700 | 1287 | 1263 | 1165 | 442 | 391 | 318 | 180 | 0 |
| RegExp | 19951 | 10122 | 20588 | 9890 | 9101 | 8504 | 756 | 547 | 197 | 244 | 227 | 220 | 221 | 181 | 205 | 188 | 92.6 | 48.4 | 0 |
| Splay | 35563 | 37616 | 23616 | 33729 | 31227 | 20862 | 2168 | 3122 | 1636 | 1690 | 1789 | 1698 | 1354 | 1524 | 777 | 1046 | 357 | 221 | 0 |
| NavierStokes | 34577 | 38694 | 34144 | 38732 | 38469 | 22045 | 25474 | 1846 | 1177 | 1350 | 989 | 1005 | 958 | 880 | 477 | 493 | 816 | 176 | 0 |
| Score | 44562 | 43767 | 42802 | 39200 | 37528 | 18147 | 10002 | 1504 | 871 | 834 | 822 | 747 | 703 | 618 | 353 | 344 | 257 | 105 | 0 |
| Score/MB | 1269 | 819 | 450 | 321 | 318 | 61 | 50 | 41 | 73 | 176 | 159 | 892 | 522 | 296 | 527 | 849 | 119 | 3 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | qjs(ng) | llrt | qjs | rquickjs | primjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 2024-02-14 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 54.9M | 105.6M | 121.7M | 861.1K | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K |
| Exe size | 54.9M | 105.6M | 121.7M | 861.1K | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K |
| Dll size | 0 | 0 | 0 | 0 | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 48124 | 44505 | 38338 | 31525 | 29520 | 1271 | 1174 | 1301 | 1066 | 1006 | 1059 | 799 | 370 | 102 | 187 |
| DeltaBlue | 63996 | 86046 | 87097 | 86251 | 24821 | 1179 | 1296 | 1181 | 1005 | 1013 | 1009 | 951 | 541 | 213 | 218 |
| Crypto | 61187 | 50655 | 53945 | 31541 | 30651 | 1363 | 1195 | 1154 | 873 | 1204 | 945 | 1063 | 279 | 530 | 235 |
| RayTrace | 164722 | 66237 | 64157 | 81029 | 1218 | 2385 | 2083 | 1485 | 1789 | 1191 | 1379 | 1005 | 892 | 737 | 297 |
| EarleyBoyer | 76912 | 91016 | 71120 | 63518 | 30858 | 4846 | 2831 | 2458 | 2675 | 2201 | 2107 | 1380 | 979 | 434 | 0 |
| RegExp | 27330 | 13196 | 11478 | 8249 | 1420 | 699 | 293 | 255 | 281 | 274 | 266 | 212 | 316 | 296 | 0 |
| Splay | 19998 | 35334 | 31275 | 27943 | 2449 | 4441 | 3115 | 2198 | 2795 | 2192 | 1978 | 620 | 998 | 447 | 0 |
| NavierStokes | 30540 | 37248 | 30570 | 32319 | 25944 | 1498 | 1938 | 1722 | 1522 | 2477 | 1615 | 2449 | 714 | 1357 | 0 |
| Score | 50124 | 46075 | 41629 | 36696 | 9665 | 1799 | 1445 | 1257 | 1233 | 1216 | 1121 | 880 | 569 | 400 | 0 |
| Score/MB | 913 | 436 | 342 | 43638 | 49 | 114 | 400 | 304 | 120 | 1139 | 949 | 581 | 1357 | 243 | 0 |
### macos-amd64
| Engine | bun | deno | v8 | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | rquickjs | primjs | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 13.5.0 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 60.2M | 112.8M | 861.1K | 110.6M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 1.6M | 25.3M | 570.8K |
| Exe size | 60.2M | 112.8M | 861.1K | 110.6M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 1.6M | 25.3M | 570.8K |
| Dll size | 0 | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 25079 | 24715 | 15667 | 15967 | 20549 | 408 | 426 | 407 | 442 | 434 | 410 | 247 | 142 | 79.8 | 25.5 | 70.1 |
| DeltaBlue | 42930 | 39301 | 49569 | 24166 | 7749 | 484 | 526 | 485 | 499 | 466 | 450 | 280 | 199 | 116 | 22.8 | 89 |
| Crypto | 32390 | 28678 | 30339 | 30280 | 12504 | 496 | 274 | 271 | 326 | 278 | 276 | 202 | 111 | 152 | 39.1 | 113 |
| RayTrace | 97827 | 53353 | 64601 | 44473 | 2638 | 1012 | 832 | 752 | 429 | 474 | 492 | 342 | 347 | 427 | 76 | 205 |
| EarleyBoyer | 50412 | 56630 | 42618 | 38502 | 20790 | 1583 | 1269 | 1190 | 838 | 822 | 834 | 599 | 417 | 280 | 79.8 | 0 |
| RegExp | 15863 | 7926 | 5524 | 6494 | 918 | 224 | 93.8 | 93.2 | 82.1 | 76.8 | 81.2 | 80.1 | 102 | 112 | 19.4 | 0 |
| Splay | 20706 | 30380 | 23584 | 29875 | 2769 | 2296 | 1592 | 1469 | 933 | 825 | 793 | 717 | 465 | 279 | 109 | 0 |
| NavierStokes | 27788 | 33505 | 24437 | 35953 | 11256 | 770 | 605 | 579 | 818 | 614 | 554 | 367 | 269 | 450 | 63.2 | 0 |
| Score | 33456 | 30129 | 25964 | 24723 | 6484 | 707 | 526 | 498 | 448 | 413 | 407 | 297 | 221 | 198 | 45.5 | 0 |
| Score/MB | 555 | 267 | 30876 | 223 | 33 | 90 | 140 | 41 | 388 | 200 | 329 | 438 | 512 | 120 | 1 | 0 |
### windows
| Engine | deno | bun | node | graaljs | hermes | tjs | rquickjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.3 | 1.2.4 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 134.4M | 127.3M | 112.5M | 196.1M | 112.8M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 42.4M | 5.9M |
| Exe size | 102.4M | 107.5M | 81.5M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 27.4M | 1.3M |
| Dll size | 32M | 19.8M | 31M | 195.8M | 109.8M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 15M | 4.7M |
| Richards | 32167 | 36972 | 32718 | 36057 | 683 | 452 | 447 | 427 | 434 | 237 | 49.1 | 0 |
| DeltaBlue | 55301 | 48471 | 77398 | 26910 | 624 | 403 | 403 | 383 | 397 | 338 | 42.6 | 0 |
| Crypto | 41892 | 40511 | 38056 | 19411 | 785 | 427 | 511 | 418 | 368 | 183 | 74.7 | 0 |
| RayTrace | 65045 | 94645 | 61345 | 5458 | 1005 | 731 | 592 | 585 | 578 | 455 | 134 | 0 |
| EarleyBoyer | 72710 | 58291 | 64712 | 26575 | 2238 | 1139 | 992 | 991 | 978 | 563 | 145 | 0 |
| RegExp | 9910 | 17711 | 8447 | 1165 | 405 | 196 | 174 | 193 | 187 | 201 | 42.9 | 0 |
| Splay | 38782 | 21074 | 31333 | 3128 | 2347 | 1433 | 962 | 1026 | 1010 | 1222 | 175 | 0 |
| NavierStokes | 38990 | 34622 | 38694 | 29206 | 1097 | 743 | 749 | 707 | 669 | 510 | 166 | 0 |
| Score | 38935 | 38837 | 37508 | 11427 | 970 | 584 | 536 | 523 | 509 | 384 | 88.5 | 0 |
| Score/MB | 289 | 305 | 333 | 58 | 8 | 15 | 57 | 12 | 56 | 51 | 2 | 0 |
