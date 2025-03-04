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

3/4/2025, 9:10:41 AM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.2 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 122.7M | 117.9M | 296.3M | 199.7M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 940K | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 198.7M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41568 | 35101 | 41180 | 33198 | 32552 | 12822 | 35320 | 1096 | 793 | 691 | 704 | 631 | 244 | 222 | 88.1 | 60.2 | 261 |
| DeltaBlue | 48888 | 87382 | 55499 | 68333 | 74971 | 13012 | 25098 | 1048 | 722 | 678 | 674 | 593 | 353 | 313 | 156 | 54.8 | 265 |
| Crypto | 45544 | 42625 | 44959 | 41312 | 41245 | 17461 | 17016 | 1362 | 709 | 789 | 579 | 379 | 190 | 184 | 294 | 79.4 | 287 |
| RayTrace | 109296 | 102044 | 106262 | 66081 | 54039 | 28046 | 4251 | 1574 | 1204 | 924 | 1068 | 706 | 436 | 388 | 448 | 164 | 338 |
| EarleyBoyer | 64917 | 76020 | 61904 | 71627 | 59421 | 36878 | 17529 | 3346 | 1960 | 1430 | 1709 | 1162 | 417 | 409 | 303 | 181 | 0 |
| RegExp | 19709 | 10021 | 19768 | 10102 | 8947 | 8397 | 941 | 545 | 197 | 232 | 225 | 180 | 207 | 190 | 93.1 | 48.7 | 0 |
| Splay | 35180 | 36158 | 24398 | 37437 | 10982 | 19949 | 1757 | 3040 | 1739 | 1573 | 1729 | 1040 | 746 | 1045 | 369 | 217 | 0 |
| NavierStokes | 34394 | 38655 | 34212 | 38765 | 38469 | 22024 | 31164 | 1823 | 1184 | 1326 | 967 | 962 | 482 | 489 | 774 | 176 | 0 |
| Score | 44602 | 44061 | 42749 | 39961 | 32424 | 18019 | 9340 | 1495 | 889 | 835 | 812 | 617 | 349 | 344 | 249 | 105 | 0 |
| Score/KB | 1270 | 825 | 449 | 325 | 275 | 60 | 46 | 41 | 74 | 177 | 157 | 293 | 519 | 846 | 115 | 3 | 0 |
### macos-arm64
| Engine | deno | bun | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.2 | 1.2.4 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 213.0M | 109.8M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Exe size | 213.0M | 109.8M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 48099 | 51223 | 42775 | 30113 | 34974 | 1270 | 1253 | 1082 | 1147 | 973 | 373 | 108 | 202 |
| DeltaBlue | 95541 | 72207 | 101928 | 76935 | 47916 | 1169 | 1243 | 1102 | 1128 | 992 | 538 | 207 | 214 |
| Crypto | 58544 | 64197 | 59906 | 27749 | 44562 | 1408 | 1067 | 888 | 1136 | 1218 | 284 | 521 | 258 |
| RayTrace | 89983 | 188401 | 73481 | 72667 | 4212 | 2301 | 2079 | 1699 | 1445 | 1131 | 784 | 704 | 308 |
| EarleyBoyer | 102142 | 99640 | 91272 | 60036 | 51862 | 4953 | 2955 | 2675 | 2347 | 1704 | 994 | 427 | 0 |
| RegExp | 14561 | 32158 | 13274 | 7902 | 1871 | 687 | 294 | 290 | 253 | 265 | 328 | 318 | 0 |
| Splay | 54982 | 13076 | 45203 | 30738 | 3440 | 4367 | 3403 | 2706 | 1882 | 2031 | 1141 | 558 | 0 |
| NavierStokes | 39988 | 33438 | 39248 | 33687 | 33027 | 1525 | 1994 | 1538 | 1912 | 2394 | 746 | 1557 | 0 |
| Score | 54615 | 53044 | 50342 | 35083 | 15577 | 1797 | 1458 | 1246 | 1208 | 1143 | 578 | 420 | 0 |
| Score/KB | 256 | 483 | 206 | 20789 | 53888 | 114 | 201 | 60 | 292 | 533 | 685 | 127 | 0 |
### macos-amd64
| Engine | v8 | bun | node | deno | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.4 | 23.7.0 | 2.2.2 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 1.7M | 120.5M | 221.2M | 227.2M | 304K | 15.7M | 7.5M | 24.1M | 4.1M | 2.3M | 888K | 3.3M | 50.7M | 1.1M |
| Exe size | 1.7M | 120.5M | 221.2M | 227.2M | 304K | 15.7M | 7.5M | 24.1M | 4.1M | 2.3M | 888K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 20539 | 27882 | 14424 | 27546 | 37847 | 503 | 486 | 418 | 434 | 404 | 144 | 91.3 | 25.7 | 102 |
| DeltaBlue | 58541 | 37879 | 40788 | 38871 | 28900 | 567 | 544 | 476 | 473 | 443 | 200 | 140 | 22.9 | 115 |
| Crypto | 34268 | 34272 | 29950 | 28589 | 19257 | 569 | 305 | 243 | 283 | 292 | 110 | 177 | 39.3 | 124 |
| RayTrace | 91019 | 88947 | 44325 | 59214 | 2415 | 1091 | 844 | 680 | 512 | 308 | 337 | 425 | 75.2 | 193 |
| EarleyBoyer | 59277 | 50293 | 45259 | 57202 | 18632 | 1817 | 1279 | 1078 | 903 | 704 | 414 | 277 | 85.5 | 0 |
| RegExp | 7426 | 13756 | 6539 | 7614 | 943 | 293 | 94.7 | 88.3 | 79.5 | 77.4 | 104 | 112 | 23.4 | 0 |
| Splay | 36255 | 17063 | 28326 | 7129 | 2236 | 2316 | 1644 | 1408 | 895 | 838 | 435 | 246 | 144 | 0 |
| NavierStokes | 34280 | 29086 | 29383 | 24486 | 16901 | 885 | 657 | 574 | 657 | 764 | 254 | 432 | 77.7 | 0 |
| Score | 34595 | 32021 | 25735 | 24684 | 8732 | 814 | 554 | 474 | 434 | 392 | 218 | 205 | 49.9 | 0 |
| Score/KB | 20500 | 265 | 116 | 108 | 29413 | 51 | 74 | 19 | 105 | 169 | 251 | 61 | 0 | 0 |
### windows
| Engine | deno | bun | node | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.2 | 1.2.4 | 23.7.0 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 135.0M | 127.3M | 112.6M | 112.9M | 44.3M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 103.0M | 107.5M | 81.5M | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 32.1M | 19.8M | 31.0M | 109.8M | 38.6M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 33036 | 37540 | 32492 | 698 | 452 | 429 | 431 | 237 | 49.3 | 0 |
| DeltaBlue | 69014 | 48974 | 73960 | 623 | 396 | 377 | 403 | 337 | 42.4 | 0 |
| Crypto | 38662 | 41684 | 39484 | 789 | 429 | 418 | 373 | 183 | 75 | 0 |
| RayTrace | 65193 | 84581 | 60027 | 1010 | 731 | 606 | 576 | 460 | 134 | 0 |
| EarleyBoyer | 72366 | 54870 | 60145 | 2240 | 1133 | 987 | 979 | 576 | 142 | 0 |
| RegExp | 9920 | 16654 | 8388 | 402 | 196 | 183 | 186 | 199 | 43 | 0 |
| Splay | 36736 | 23486 | 32156 | 2394 | 1418 | 986 | 1009 | 1205 | 186 | 0 |
| NavierStokes | 39029 | 34622 | 38732 | 1073 | 738 | 714 | 675 | 511 | 166 | 0 |
| Score | 39490 | 38489 | 37087 | 973 | 581 | 518 | 511 | 384 | 89.1 | 0 |
| Score/KB | 292 | 302 | 329 | 8 | 13 | 12 | 56 | 51 | 2 | 0 |
