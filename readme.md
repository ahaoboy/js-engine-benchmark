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

3/6/2025, 2:48:23 PM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 121.9M | 117.9M | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 856.9921875K | 1.3M | 2.1M | 684.9921875K | 414.5K | 2.2M | 27M | 454.2109375K |
| Exe size | 35.1M | 936.9921875K | 95.1M | 121.9M | 117.9M | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 856.9921875K | 1.3M | 2.1M | 684.9921875K | 414.5K | 2.2M | 27M | 454.2109375K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41296 | 35051 | 40527 | 33046 | 29654 | 13418 | 34921 | 1113 | 798 | 696 | 701 | 613 | 590 | 629 | 241 | 219 | 88.5 | 61.2 | 268 |
| DeltaBlue | 49403 | 85266 | 56174 | 67361 | 74356 | 12675 | 39664 | 1055 | 728 | 680 | 682 | 621 | 589 | 609 | 363 | 317 | 159 | 55.3 | 277 |
| Crypto | 45815 | 42747 | 43409 | 41718 | 41540 | 17147 | 29220 | 1370 | 683 | 745 | 593 | 563 | 554 | 380 | 190 | 184 | 313 | 81.3 | 297 |
| RayTrace | 107964 | 107298 | 111960 | 66821 | 62614 | 27990 | 4013 | 1582 | 1173 | 921 | 1077 | 930 | 878 | 724 | 549 | 484 | 481 | 166 | 351 |
| EarleyBoyer | 68139 | 77813 | 66894 | 71120 | 61704 | 37709 | 29354 | 3387 | 1985 | 1525 | 1775 | 1392 | 1360 | 1234 | 553 | 498 | 318 | 193 | 0 |
| RegExp | 20406 | 10243 | 20750 | 9930 | 9155 | 8719 | 1259 | 546 | 197 | 245 | 225 | 234 | 230 | 179 | 214 | 196 | 91.8 | 49.2 | 0 |
| Splay | 37722 | 39099 | 26530 | 36972 | 33036 | 22687 | 2746 | 3639 | 1761 | 1777 | 1972 | 1802 | 1467 | 1127 | 1314 | 1111 | 363 | 226 | 0 |
| NavierStokes | 33653 | 38694 | 34474 | 38842 | 38507 | 21963 | 32945 | 1853 | 1189 | 1353 | 952 | 1013 | 958 | 972 | 487 | 488 | 822 | 171 | 0 |
| Score | 45325 | 44904 | 43999 | 39798 | 37747 | 18441 | 12356 | 1541 | 886 | 857 | 832 | 766 | 722 | 632 | 403 | 367 | 256 | 107 | 0 |
| Score/MB | 1 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
### macos-arm64
| Engine | bun | node | deno | v8 | graaljs | hermes | tjs | qjs(ng) | llrt | rquickjs | qjs | primjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 23.7.0 | 2.2.3 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 0 | 2024-02-14 | 0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 54.9M | 121.7M | 105.6M | 861.0859375K | 147.359375K | 15.7M | 3.6M | 4.1M | 10.3M | 1.2M | 1.1M | 1.5M | 429.0546875K | 1.6M | 575.3671875K |
| Exe size | 54.9M | 121.7M | 105.6M | 861.0859375K | 147.359375K | 7.9M | 3.6M | 2.1M | 10.3M | 1.2M | 1.1M | 1.5M | 429.0546875K | 1.6M | 575.3671875K |
| Dll size | 0 | 0 | 0 | 0 | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50319 | 39690 | 45487 | 29827 | 32983 | 1345 | 1312 | 1340 | 1062 | 1083 | 1009 | 799 | 402 | 118 | 190 |
| DeltaBlue | 65496 | 88777 | 71599 | 85193 | 33125 | 1239 | 1301 | 1226 | 1024 | 1059 | 934 | 943 | 595 | 223 | 221 |
| Crypto | 63489 | 55846 | 56580 | 34613 | 36395 | 1440 | 1184 | 1185 | 959 | 954 | 1118 | 1101 | 305 | 549 | 253 |
| RayTrace | 172343 | 67117 | 82213 | 89095 | 2721 | 2532 | 2128 | 1556 | 2017 | 1465 | 1047 | 1188 | 978 | 687 | 304 |
| EarleyBoyer | 85913 | 75176 | 93711 | 70738 | 47208 | 5132 | 3235 | 2477 | 3099 | 2315 | 1945 | 1391 | 1086 | 406 | 0 |
| RegExp | 28457 | 10834 | 13092 | 10022 | 1452 | 711 | 303 | 271 | 306 | 273 | 268 | 206 | 326 | 300 | 0 |
| Splay | 21915 | 44910 | 15671 | 34837 | 2632 | 4539 | 3569 | 2302 | 3034 | 2049 | 1832 | 1581 | 1545 | 495 | 0 |
| NavierStokes | 29739 | 37842 | 38469 | 34064 | 24486 | 1518 | 2098 | 2132 | 1580 | 1672 | 2499 | 2600 | 778 | 1439 | 0 |
| Score | 52471 | 45473 | 42773 | 40029 | 12160 | 1875 | 1540 | 1333 | 1326 | 1168 | 1129 | 1019 | 646 | 414 | 0 |
| Score/MB | 0 | 0 | 0 | 46 | 82 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | rquickjs | qjs | primjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 0 | 2024-02-14 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 861.0859375K | 60.2M | 112.8M | 110.6M | 148.75K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.421875K | 1.6M | 441.75K | 25.3M | 570.796875K |
| Exe size | 861.0859375K | 60.2M | 112.8M | 110.6M | 148.75K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.421875K | 1.6M | 441.75K | 25.3M | 570.796875K |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22339 | 29294 | 22336 | 23423 | 43298 | 501 | 451 | 352 | 447 | 410 | 371 | 254 | 93.3 | 141 | 25.6 | 113 |
| DeltaBlue | 62614 | 43281 | 48650 | 48180 | 47473 | 570 | 474 | 467 | 468 | 456 | 433 | 286 | 144 | 191 | 22.2 | 129 |
| Crypto | 42018 | 36273 | 32985 | 34296 | 20995 | 572 | 260 | 235 | 233 | 280 | 270 | 197 | 185 | 103 | 37.3 | 138 |
| RayTrace | 103894 | 108038 | 68523 | 45263 | 4427 | 1093 | 657 | 715 | 482 | 496 | 364 | 346 | 445 | 340 | 61.4 | 217 |
| EarleyBoyer | 71930 | 55353 | 64421 | 53937 | 36927 | 1823 | 1001 | 984 | 843 | 837 | 696 | 607 | 323 | 403 | 71 | 0 |
| RegExp | 8413 | 16489 | 8455 | 7811 | 1254 | 294 | 88.9 | 70.9 | 82.5 | 81.5 | 77.8 | 80.2 | 130 | 102 | 20.5 | 0 |
| Splay | 40631 | 11881 | 32319 | 11866 | 1692 | 2334 | 1587 | 1082 | 903 | 768 | 902 | 727 | 285 | 603 | 136 | 0 |
| NavierStokes | 36358 | 32945 | 35953 | 36434 | 24733 | 894 | 643 | 516 | 641 | 526 | 814 | 344 | 516 | 263 | 77.1 | 0 |
| Score | 39096 | 33974 | 33416 | 27415 | 11777 | 818 | 490 | 426 | 419 | 404 | 398 | 297 | 226 | 223 | 45.9 | 0 |
| Score/MB | 45 | 0 | 0 | 0 | 79 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Exe size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37558 | 33180 | 32157 | 35778 | 693 | 452 | 426 | 431 | 384 | 233 | 48.9 | 0 |
| DeltaBlue | 43830 | 69450 | 70343 | 26368 | 623 | 410 | 377 | 396 | 410 | 330 | 42.2 | 0 |
| Crypto | 42124 | 42055 | 41777 | 18857 | 788 | 434 | 419 | 371 | 321 | 184 | 74.4 | 0 |
| RayTrace | 98937 | 62381 | 59347 | 5140 | 1002 | 737 | 604 | 580 | 549 | 463 | 132 | 0 |
| EarleyBoyer | 56524 | 69765 | 63290 | 27573 | 2249 | 1147 | 999 | 983 | 879 | 573 | 142 | 0 |
| RegExp | 17218 | 9971 | 8224 | 981 | 406 | 195 | 194 | 187 | 155 | 200 | 42.9 | 0 |
| Splay | 33335 | 38464 | 31904 | 2619 | 2377 | 1441 | 1051 | 1009 | 952 | 1206 | 169 | 0 |
| NavierStokes | 34474 | 38951 | 38732 | 21941 | 1086 | 740 | 712 | 673 | 727 | 505 | 165 | 0 |
| Score | 40796 | 39804 | 37123 | 10450 | 973 | 587 | 526 | 510 | 476 | 382 | 87.5 | 0 |
| Score/MB | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
