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

3/5/2025, 9:30:26 AM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 121.9M | 117.9M | 296.3M | 199.7M | 36.0M | 11.9M | 4.7M | 5.2M | 860K | 1.3M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 940K | 95.1M | 121.9M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 860K | 1.3M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 198.7M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41459 | 35380 | 41035 | 32909 | 33082 | 13256 | 35584 | 1124 | 793 | 695 | 710 | 609 | 595 | 638 | 249 | 224 | 85 | 61.1 | 267 |
| DeltaBlue | 50065 | 91858 | 54911 | 67348 | 72320 | 12748 | 39459 | 1044 | 732 | 666 | 690 | 600 | 567 | 617 | 345 | 320 | 153 | 55.6 | 265 |
| Crypto | 45712 | 42830 | 44277 | 41694 | 41515 | 17808 | 28693 | 1364 | 697 | 758 | 582 | 574 | 542 | 379 | 189 | 182 | 295 | 80.3 | 297 |
| RayTrace | 110036 | 103894 | 110776 | 66081 | 61875 | 27870 | 3933 | 1574 | 1207 | 927 | 1118 | 940 | 861 | 742 | 538 | 490 | 450 | 166 | 346 |
| EarleyBoyer | 67893 | 77442 | 66871 | 72554 | 55760 | 37738 | 27788 | 3439 | 1995 | 1498 | 1764 | 1369 | 1353 | 1225 | 549 | 498 | 297 | 192 | 0 |
| RegExp | 20224 | 10162 | 20820 | 9971 | 9173 | 8676 | 906 | 552 | 198 | 240 | 221 | 236 | 227 | 178 | 216 | 198 | 94.4 | 49.3 | 0 |
| Splay | 38032 | 38366 | 19556 | 36182 | 33159 | 22149 | 2498 | 3626 | 1783 | 1710 | 1970 | 1768 | 1477 | 1119 | 848 | 1305 | 414 | 235 | 0 |
| NavierStokes | 34726 | 38765 | 34429 | 38803 | 38617 | 22090 | 23424 | 1846 | 1157 | 1366 | 988 | 999 | 925 | 967 | 483 | 477 | 763 | 175 | 0 |
| Score | 45672 | 45037 | 42357 | 39725 | 37636 | 18451 | 11119 | 1542 | 891 | 850 | 838 | 761 | 712 | 634 | 379 | 375 | 250 | 107 | 0 |
| Score/MB | 1300 | 843 | 445 | 325 | 319 | 62 | 55 | 42 | 74 | 180 | 162 | 906 | 528 | 301 | 564 | 923 | 116 | 3 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | rquickjs | mujs | primjs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 0 | 1.3.5 | 0 | 16.8.1 | 3.0.0 |
| Total size | 109.8M | 211.2M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 2.4M | 864K | 1.5M | 3.3M | 1.1M |
| Exe size | 109.8M | 211.2M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 2.4M | 864K | 1.5M | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 49829 | 43626 | 40258 | 34705 | 37417 | 1338 | 1273 | 1181 | 1258 | 1111 | 1027 | 381 | 280 | 118 | 219 |
| DeltaBlue | 69186 | 102020 | 91897 | 90099 | 49648 | 1246 | 1222 | 1241 | 1181 | 1114 | 998 | 565 | 333 | 211 | 242 |
| Crypto | 63284 | 57086 | 57744 | 37198 | 42562 | 1458 | 1132 | 987 | 1169 | 1319 | 913 | 292 | 312 | 549 | 272 |
| RayTrace | 177597 | 81177 | 70373 | 95533 | 6286 | 2401 | 1986 | 2061 | 1571 | 1227 | 1386 | 888 | 558 | 701 | 335 |
| EarleyBoyer | 96480 | 90710 | 84038 | 77957 | 52117 | 5103 | 3052 | 3001 | 2584 | 2398 | 2026 | 1042 | 888 | 418 | 0 |
| RegExp | 32217 | 13756 | 13234 | 11717 | 1912 | 726 | 299 | 293 | 272 | 289 | 265 | 356 | 195 | 301 | 0 |
| Splay | 48422 | 45521 | 47143 | 42848 | 4115 | 4628 | 3031 | 2744 | 2098 | 2410 | 1980 | 1160 | 1435 | 516 | 0 |
| NavierStokes | 33505 | 37285 | 32139 | 36730 | 29947 | 1597 | 1951 | 1582 | 2047 | 2392 | 1656 | 778 | 527 | 1441 | 0 |
| Score | 61145 | 50703 | 47365 | 44712 | 16718 | 1886 | 1444 | 1355 | 1301 | 1297 | 1109 | 608 | 463 | 416 | 0 |
| Score/MB | 556 | 240 | 194 | 26496 | 57835 | 120 | 200 | 66 | 315 | 605 | 468 | 720 | 305 | 126 | 0 |
### macos-amd64
| Engine | v8 | deno | bun | node | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | rquickjs | primjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 2.2.3 | 1.2.4 | 23.7.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 24.12.0 | 2024-02-14 | 0.8.0 | 0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 1.7M | 225.5M | 120.5M | 221.2M | 304K | 15.7M | 24.1M | 7.5M | 2.3M | 4.1M | 2.5M | 1.4M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 1.7M | 225.5M | 120.5M | 221.2M | 304K | 15.7M | 24.1M | 7.5M | 2.3M | 4.1M | 2.5M | 1.4M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22572 | 30985 | 29223 | 23631 | 44516 | 501 | 418 | 432 | 443 | 439 | 405 | 251 | 93 | 120 | 23.1 | 114 |
| DeltaBlue | 67103 | 50263 | 44378 | 52603 | 52676 | 560 | 489 | 480 | 487 | 470 | 450 | 279 | 141 | 166 | 19.5 | 125 |
| Crypto | 40773 | 34312 | 36967 | 33673 | 23273 | 573 | 276 | 266 | 323 | 274 | 276 | 199 | 183 | 92.2 | 35.8 | 138 |
| RayTrace | 102414 | 70151 | 108482 | 41111 | 9324 | 1105 | 776 | 682 | 422 | 487 | 488 | 332 | 440 | 276 | 75.3 | 217 |
| EarleyBoyer | 71009 | 65769 | 60610 | 54705 | 41063 | 1796 | 1185 | 1060 | 824 | 850 | 821 | 571 | 319 | 378 | 85.8 | 0 |
| RegExp | 8801 | 9038 | 17564 | 7629 | 1290 | 296 | 92.3 | 86 | 81.1 | 75.7 | 77.3 | 79.2 | 130 | 89.7 | 24.1 | 0 |
| Splay | 42840 | 37502 | 14302 | 27731 | 2183 | 2415 | 1465 | 1467 | 886 | 767 | 748 | 714 | 276 | 480 | 144 | 0 |
| NavierStokes | 37174 | 37026 | 31312 | 35877 | 29739 | 905 | 584 | 576 | 798 | 605 | 560 | 361 | 492 | 234 | 76.6 | 0 |
| Score | 39799 | 36418 | 35424 | 30322 | 14301 | 821 | 503 | 482 | 439 | 411 | 400 | 293 | 222 | 193 | 47.9 | 0 |
| Score/MB | 23584 | 161 | 293 | 137 | 48171 | 52 | 20 | 64 | 189 | 99 | 162 | 215 | 66 | 222 | 0 | 0 |
### windows
| Engine | bun | deno | node | hermes | tjs | llrt | qjs(ng) | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 134.5M | 112.6M | 139.1M | 44.3M | 41.9M | 9.0M | 8.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 102.4M | 81.5M | 3.0M | 5.7M | 12.7M | 1.7M | 1.3M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 32.1M | 31.0M | 136.1M | 38.6M | 29.1M | 7.3M | 6.7M | 6.9M | 15.0M | 4.7M |
| Richards | 37808 | 33417 | 27408 | 688 | 452 | 430 | 423 | 381 | 236 | 49.3 | 0 |
| DeltaBlue | 36570 | 70535 | 74932 | 616 | 403 | 383 | 397 | 410 | 330 | 41.7 | 0 |
| Crypto | 41668 | 42184 | 41704 | 785 | 429 | 412 | 375 | 320 | 186 | 74.7 | 0 |
| RayTrace | 96791 | 59495 | 58829 | 995 | 738 | 604 | 574 | 551 | 453 | 134 | 0 |
| EarleyBoyer | 56404 | 70098 | 61120 | 2229 | 1136 | 998 | 979 | 884 | 562 | 140 | 0 |
| RegExp | 16001 | 9839 | 8224 | 402 | 196 | 183 | 180 | 138 | 200 | 43.3 | 0 |
| Splay | 18222 | 12377 | 9681 | 2371 | 1417 | 1050 | 985 | 929 | 607 | 169 | 0 |
| NavierStokes | 34474 | 39029 | 38694 | 1089 | 743 | 708 | 679 | 727 | 505 | 166 | 0 |
| Score | 36517 | 34421 | 31415 | 967 | 584 | 523 | 505 | 467 | 350 | 87.8 | 0 |
| Score/MB | 286 | 255 | 279 | 6 | 13 | 12 | 56 | 58 | 46 | 2 | 0 |
