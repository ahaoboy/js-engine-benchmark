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

3/8/2025, 6:01:00 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | rquickjs | qjs(ng) | mujs | mujs(one) | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 0 | 13.5.0 | 2.2.3 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0 | 0.8.0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 95.1M | 35.1M | 53.4M | 121.9M | 117.9M | 296.3M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 414.5K | 685K | 2.2M | 27M | 454.2K |
| Exe size | 95.1M | 35.1M | 937K | 121.9M | 117.9M | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 414.5K | 685K | 2.2M | 27M | 454.2K |
| Dll size | 0 | 0 | 52.5M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42281 | 41109 | 35288 | 33322 | 32460 | 13217 | 35973 | 1120 | 797 | 698 | 709 | 612 | 595 | 637 | 224 | 250 | 89.1 | 59.5 | 271 |
| DeltaBlue | 53417 | 48590 | 90033 | 66495 | 73636 | 12556 | 38818 | 1066 | 725 | 674 | 674 | 617 | 593 | 614 | 317 | 359 | 159 | 54.3 | 280 |
| Crypto | 44154 | 45790 | 42690 | 41148 | 41500 | 17385 | 27462 | 1375 | 679 | 755 | 580 | 569 | 563 | 379 | 183 | 188 | 317 | 79.7 | 298 |
| RayTrace | 111368 | 109370 | 103154 | 64675 | 62307 | 28018 | 5763 | 1530 | 1192 | 934 | 1106 | 951 | 893 | 710 | 483 | 469 | 492 | 164 | 354 |
| EarleyBoyer | 65655 | 67068 | 80250 | 72332 | 61292 | 37714 | 28220 | 3394 | 1974 | 1477 | 1795 | 1391 | 1323 | 1213 | 493 | 471 | 319 | 191 | 0 |
| RegExp | 20862 | 19840 | 10011 | 10092 | 9209 | 8563 | 1006 | 550 | 198 | 236 | 221 | 231 | 225 | 181 | 196 | 210 | 92 | 48.9 | 0 |
| Splay | 33811 | 36663 | 38350 | 36850 | 33126 | 22866 | 3146 | 3644 | 1736 | 1760 | 1917 | 1745 | 1412 | 1097 | 1289 | 797 | 373 | 226 | 0 |
| NavierStokes | 34064 | 34326 | 38584 | 38694 | 38469 | 21980 | 12305 | 1845 | 1189 | 1366 | 970 | 1014 | 932 | 965 | 488 | 482 | 809 | 176 | 0 |
| Score | 45231 | 44979 | 44938 | 39673 | 38106 | 18397 | 11173 | 1539 | 885 | 852 | 830 | 764 | 717 | 629 | 374 | 363 | 258 | 106 | 0 |
| Score/MB | 475 | 1280 | 841 | 325 | 323 | 62 | 55 | 42 | 74 | 180 | 160 | 912 | 532 | 299 | 923 | 542 | 119 | 3 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | rquickjs | primjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 54.9M | 105.6M | 121.7M | 861.1K | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K |
| Exe size | 54.9M | 105.6M | 121.7M | 861.1K | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K |
| Dll size | 0 | 0 | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 51837 | 47488 | 43121 | 28425 | 37424 | 1356 | 1337 | 1190 | 1332 | 1105 | 1036 | 819 | 405 | 120 | 219 |
| DeltaBlue | 77332 | 96929 | 96823 | 77312 | 55698 | 1255 | 1342 | 1236 | 1188 | 1091 | 1139 | 959 | 604 | 226 | 241 |
| Crypto | 62568 | 59514 | 59606 | 38396 | 43009 | 1483 | 1217 | 1001 | 1228 | 1348 | 1010 | 1118 | 314 | 544 | 272 |
| RayTrace | 195505 | 87023 | 74813 | 96051 | 4583 | 2572 | 2172 | 2080 | 1590 | 1273 | 1488 | 1196 | 1014 | 753 | 335 |
| EarleyBoyer | 100343 | 104478 | 93050 | 77514 | 54232 | 5249 | 3309 | 3129 | 2648 | 2390 | 2375 | 1465 | 1130 | 452 | 0 |
| RegExp | 31976 | 15350 | 12497 | 11910 | 2038 | 740 | 318 | 316 | 279 | 289 | 279 | 218 | 323 | 337 | 0 |
| Splay | 30478 | 55569 | 47460 | 41088 | 5240 | 4803 | 3505 | 3162 | 2516 | 2546 | 2380 | 1779 | 1270 | 603 | 0 |
| NavierStokes | 33687 | 40662 | 39474 | 36322 | 29383 | 1617 | 2126 | 1657 | 2144 | 2578 | 1729 | 2687 | 789 | 1579 | 0 |
| Score | 59708 | 55215 | 50236 | 42755 | 17005 | 1934 | 1572 | 1413 | 1369 | 1323 | 1218 | 1061 | 641 | 448 | 0 |
| Score/MB | 1087 | 522 | 412 | 50844 | 87 | 123 | 435 | 137 | 332 | 1240 | 1031 | 701 | 1529 | 272 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | rquickjs | primjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 861.1K | 60.2M | 112.8M | 110.6M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Exe size | 861.1K | 60.2M | 112.8M | 110.6M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Dll size | 0 | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22734 | 29368 | 22544 | 23359 | 44262 | 508 | 487 | 410 | 461 | 435 | 402 | 251 | 92.6 | 143 | 24 | 112 |
| DeltaBlue | 62362 | 44140 | 50243 | 50084 | 54971 | 575 | 544 | 465 | 501 | 445 | 454 | 280 | 143 | 201 | 21.6 | 130 |
| Crypto | 42599 | 38299 | 34694 | 33757 | 27391 | 577 | 303 | 268 | 298 | 291 | 280 | 197 | 183 | 111 | 38.5 | 139 |
| RayTrace | 109148 | 106262 | 70007 | 47581 | 11754 | 1127 | 836 | 750 | 511 | 412 | 479 | 338 | 445 | 338 | 72.8 | 218 |
| EarleyBoyer | 71022 | 59455 | 64800 | 48693 | 43397 | 1839 | 1262 | 1124 | 903 | 722 | 823 | 531 | 320 | 414 | 84.2 | 0 |
| RegExp | 8719 | 17274 | 8892 | 7561 | 1420 | 294 | 94.2 | 90.7 | 82.4 | 80.7 | 80.3 | 77.2 | 128 | 103 | 24.2 | 0 |
| Splay | 42718 | 18800 | 37983 | 34332 | 2776 | 2475 | 1581 | 1381 | 886 | 873 | 813 | 706 | 285 | 446 | 130 | 0 |
| NavierStokes | 36915 | 33142 | 36989 | 37211 | 28140 | 892 | 658 | 559 | 655 | 802 | 609 | 367 | 520 | 268 | 78.3 | 0 |
| Score | 39911 | 36817 | 34952 | 31139 | 15742 | 831 | 549 | 484 | 444 | 419 | 410 | 290 | 225 | 220 | 48.4 | 0 |
| Score/MB | 47462 | 611 | 309 | 281 | 80 | 105 | 146 | 40 | 215 | 363 | 332 | 428 | 137 | 509 | 1 | 0 |
### windows
| Engine | deno | bun | node | graaljs | hermes | tjs | llrt | qjs(ng) | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.3 | 1.2.4 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 134.4M | 127.3M | 112.5M | 196.1M | 112.8M | 36.9M | 41.8M | 9M | 8M | 7.5M | 42.4M | 5.9M |
| Exe size | 102.4M | 107.5M | 81.5M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 27.4M | 1.3M |
| Dll size | 32M | 19.8M | 31M | 195.8M | 109.8M | 31.2M | 29.1M | 7.3M | 6.7M | 6.9M | 15M | 4.7M |
| Richards | 32563 | 36347 | 33396 | 35955 | 698 | 454 | 431 | 437 | 381 | 215 | 48.9 | 0 |
| DeltaBlue | 67592 | 44094 | 73232 | 27412 | 620 | 410 | 377 | 403 | 413 | 317 | 41.7 | 0 |
| Crypto | 41030 | 42641 | 41621 | 22023 | 784 | 417 | 421 | 371 | 321 | 181 | 74.1 | 0 |
| RayTrace | 64379 | 95015 | 57645 | 2440 | 997 | 737 | 604 | 580 | 555 | 443 | 134 | 0 |
| EarleyBoyer | 70587 | 54866 | 59842 | 31048 | 2232 | 1147 | 989 | 982 | 889 | 513 | 139 | 0 |
| RegExp | 9761 | 16654 | 8306 | 1109 | 403 | 196 | 193 | 186 | 154 | 196 | 42.6 | 0 |
| Splay | 35766 | 25001 | 9709 | 2724 | 2412 | 1394 | 1017 | 985 | 929 | 1157 | 160 | 0 |
| NavierStokes | 38842 | 34360 | 38617 | 24931 | 1085 | 737 | 710 | 675 | 726 | 503 | 166 | 0 |
| Score | 39190 | 38763 | 31978 | 10271 | 972 | 582 | 524 | 511 | 475 | 366 | 86.7 | 0 |
| Score/MB | 291 | 304 | 284 | 52 | 8 | 15 | 12 | 56 | 59 | 48 | 2 | 0 |
