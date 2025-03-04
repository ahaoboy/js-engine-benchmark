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

3/4/2025, 9:38:26 AM

### ubuntu
| Engine | v8 | jsc | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 0 | 1.2.4 | 2.2.2 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 53.4M | 35.1M | 95.1M | 122.7M | 117.9M | 296.3M | 199.7M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 940K | 35.1M | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 52.5M | 0 | 0 | 0 | 0 | 0 | 198.7M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 35270 | 39990 | 42652 | 33043 | 32474 | 13394 | 35411 | 1082 | 789 | 692 | 710 | 636 | 250 | 226 | 84.5 | 60.8 | 258 |
| DeltaBlue | 97207 | 50184 | 55063 | 69536 | 70488 | 13019 | 26533 | 1046 | 727 | 674 | 690 | 616 | 364 | 324 | 152 | 55.1 | 273 |
| Crypto | 42679 | 45294 | 44985 | 41709 | 41507 | 17807 | 14973 | 1358 | 673 | 748 | 600 | 376 | 189 | 183 | 293 | 80.7 | 297 |
| RayTrace | 107150 | 112034 | 112552 | 66599 | 62381 | 27842 | 7681 | 1544 | 1185 | 906 | 1028 | 717 | 534 | 495 | 458 | 166 | 347 |
| EarleyBoyer | 78034 | 68662 | 66729 | 69981 | 61871 | 37147 | 29845 | 3397 | 1985 | 1486 | 1786 | 1235 | 550 | 528 | 307 | 194 | 0 |
| RegExp | 10233 | 20416 | 21044 | 9738 | 9218 | 8224 | 1283 | 553 | 197 | 244 | 227 | 179 | 216 | 199 | 94.4 | 49.3 | 0 |
| Splay | 39124 | 38276 | 30091 | 36997 | 34112 | 21946 | 2543 | 3328 | 1693 | 1799 | 2031 | 1140 | 1163 | 1299 | 393 | 236 | 0 |
| NavierStokes | 38694 | 34394 | 34429 | 38881 | 38545 | 21815 | 32402 | 1830 | 1180 | 1358 | 1009 | 963 | 481 | 493 | 768 | 176 | 0 |
| Score | 45678 | 45630 | 45160 | 39769 | 38105 | 18312 | 11657 | 1511 | 880 | 853 | 841 | 632 | 397 | 381 | 250 | 108 | 0 |
| Score/MB | 855 | 1299 | 474 | 324 | 323 | 61 | 58 | 41 | 74 | 180 | 162 | 300 | 590 | 937 | 116 | 4 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 109.8M | 213.0M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 2.1M | 4.1M | 864K | 3.3M | 1.1M |
| Exe size | 109.8M | 213.0M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 2.1M | 4.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 45420 | 44689 | 36848 | 30642 | 33572 | 1177 | 1058 | 1082 | 1010 | 1261 | 354 | 93.1 | 186 |
| DeltaBlue | 55328 | 102919 | 92453 | 62686 | 31532 | 1089 | 1110 | 1164 | 1034 | 1105 | 531 | 181 | 206 |
| Crypto | 57933 | 56989 | 56786 | 34778 | 35574 | 1306 | 1041 | 916 | 1035 | 1093 | 269 | 469 | 245 |
| RayTrace | 175303 | 78069 | 63713 | 86357 | 1362 | 2184 | 1830 | 1933 | 1092 | 1280 | 840 | 591 | 324 |
| EarleyBoyer | 83525 | 88600 | 81721 | 64996 | 30024 | 4409 | 2801 | 2970 | 1838 | 1572 | 949 | 380 | 0 |
| RegExp | 25052 | 12949 | 10082 | 8628 | 1347 | 628 | 261 | 296 | 249 | 202 | 311 | 285 | 0 |
| Splay | 26289 | 16306 | 39751 | 27943 | 2850 | 3924 | 2833 | 2784 | 2249 | 1750 | 1080 | 479 | 0 |
| NavierStokes | 31959 | 36506 | 33208 | 26415 | 19491 | 1270 | 1859 | 1422 | 2439 | 1786 | 685 | 1470 | 0 |
| Score | 50873 | 43972 | 43743 | 35258 | 10179 | 1632 | 1309 | 1292 | 1146 | 1086 | 557 | 371 | 0 |
| Score/MB | 463 | 206 | 179 | 20893 | 35213 | 103 | 181 | 62 | 535 | 263 | 660 | 112 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 13.5.0 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 120.5M | 1.7M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 888K | 3.3M | 50.7M | 1.1M |
| Exe size | 120.5M | 1.7M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 888K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 29396 | 22459 | 22117 | 22067 | 41667 | 473 | 487 | 422 | 448 | 468 | 141 | 84.3 | 25.3 | 111 |
| DeltaBlue | 44907 | 63116 | 49258 | 47618 | 45562 | 529 | 549 | 481 | 498 | 473 | 202 | 128 | 20.8 | 128 |
| Crypto | 37573 | 41109 | 34367 | 33092 | 23956 | 488 | 303 | 277 | 327 | 296 | 111 | 151 | 36.1 | 138 |
| RayTrace | 108152 | 102710 | 65711 | 42729 | 3464 | 867 | 852 | 749 | 430 | 518 | 342 | 347 | 74 | 218 |
| EarleyBoyer | 58112 | 69396 | 64865 | 49049 | 36939 | 1666 | 1279 | 1161 | 838 | 903 | 415 | 276 | 83.5 | 0 |
| RegExp | 16183 | 8594 | 8339 | 7426 | 1262 | 256 | 94.9 | 93.1 | 82.3 | 82.7 | 105 | 127 | 21.4 | 0 |
| Splay | 15630 | 21367 | 36272 | 33509 | 3690 | 2094 | 1648 | 1465 | 919 | 887 | 462 | 316 | 117 | 0 |
| NavierStokes | 32945 | 33687 | 36470 | 36766 | 28732 | 769 | 657 | 593 | 807 | 656 | 260 | 482 | 67.5 | 0 |
| Score | 35631 | 35582 | 33939 | 30060 | 12924 | 721 | 555 | 501 | 447 | 443 | 221 | 204 | 45.9 | 0 |
| Score/MB | 295 | 21085 | 149 | 135 | 43533 | 45 | 74 | 20 | 193 | 107 | 254 | 61 | 0 | 0 |
### windows
| Engine | bun | deno | node | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 23.7.0 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 135.0M | 112.6M | 112.9M | 44.3M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 103.0M | 81.5M | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 32.1M | 31.0M | 109.8M | 38.6M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 33420 | 33120 | 26787 | 652 | 452 | 431 | 430 | 233 | 47 | 0 |
| DeltaBlue | 41687 | 69880 | 76062 | 605 | 410 | 376 | 396 | 337 | 42.5 | 0 |
| Crypto | 42847 | 41995 | 41679 | 788 | 425 | 422 | 376 | 184 | 75.1 | 0 |
| RayTrace | 95363 | 59421 | 58533 | 1012 | 723 | 604 | 576 | 446 | 134 | 0 |
| EarleyBoyer | 55622 | 73769 | 59160 | 2188 | 1124 | 989 | 964 | 531 | 144 | 0 |
| RegExp | 16836 | 9790 | 8373 | 406 | 195 | 192 | 188 | 199 | 42.6 | 0 |
| Splay | 32393 | 36337 | 31170 | 2310 | 1402 | 1027 | 978 | 657 | 169 | 0 |
| NavierStokes | 34474 | 38990 | 38732 | 1086 | 741 | 713 | 672 | 510 | 165 | 0 |
| Score | 39522 | 39486 | 36236 | 957 | 581 | 525 | 507 | 351 | 87.5 | 0 |
| Score/MB | 310 | 292 | 321 | 8 | 13 | 12 | 56 | 46 | 2 | 0 |
