fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

## Note

### graaljs

Need lib and modules

```
Could not canonicalize /root/.easy-install/graaljs/../wasm.jar
Could not canonicalize /root/.easy-install/graaljs/../../ruby/jline3.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/graaljs-launcher.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/launcher-common.jar
Error while loading /root/.easy-install/graaljs/../../../lib/server/libjvm.so:
/root/.easy-install/graaljs/../../../lib/server/libjvm.so: cannot open shared object file: No such file or directory
Could not load JVM.
```

### ChakraCore

Need libChakraCore.so or libChakraCore.dylib

```
dlopen() failed; dlerror says 'dlopen(/Users/runner/.easy-install/libChakraCore.dylib, 0x0001)

dlopen() failed; dlerror says '/home/runner/.easy-install/libChakraCore.so
```


## Engine & Runtime

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46375<br>95.6M<br>485/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45996<br>36.2M<br>1269/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45069<br>53.3M<br>846/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39638<br>100.3M<br>395/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 33227<br>118.9M<br>279/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20036<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18857<br>40M<br>471/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10449<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 887<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 852<br>4.7M<br>180/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 760<br>857K<br>908/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 704<br>1.3M<br>522/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 494<br>41.1M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 396<br>685K<br>591/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 356<br>414.5K<br>879/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>122/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
5/5/2025, 1:34:06 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.12 | 0 | 13.6.0 | 2.3.1 | 23.11.0 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.10.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 95.6M | 36.2M | 53.3M | 100.3M | 118.9M | 19.4M | 40M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 41.1M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7.2K |
| Exe size | 95.6M | 36.2M | 937.8K | 100.3M | 118.9M | 571K | 40M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 41.1M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7.2K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41543 | 41148 | 34854 | 33290 | 31895 | 23430 | 12776 | 35662 | 1120 | 807 | 693 | 703 | 612 | 573 | 579 | 488 | 246 | 224 | 204 | 89.5 | 61.1 | 0 | 0 |
| DeltaBlue | 53701 | 54759 | 91573 | 67050 | 75533 | 25695 | 12953 | 36206 | 1071 | 715 | 672 | 684 | 622 | 572 | 572 | 448 | 355 | 320 | 250 | 161 | 55.6 | 0 | 0 |
| Crypto | 50012 | 51127 | 42414 | 41305 | 41532 | 31852 | 20295 | 22564 | 1374 | 689 | 767 | 581 | 575 | 539 | 379 | 723 | 192 | 184 | 122 | 320 | 80.8 | 0 | 0 |
| RayTrace | 115438 | 103450 | 106336 | 65637 | 60827 | 35336 | 26882 | 2727 | 1556 | 1192 | 911 | 1076 | 929 | 879 | 745 | 510 | 544 | 483 | 276 | 489 | 166 | 0 | 0 |
| EarleyBoyer | 64629 | 67264 | 80866 | 74237 | 61293 | 7081 | 39226 | 20186 | 3394 | 1981 | 1475 | 1757 | 1345 | 1338 | 1216 | 693 | 530 | 490 | 507 | 319 | 192 | 0 | 0 |
| RegExp | 21478 | 19658 | 10294 | 10203 | 8983 | 7811 | 8495 | 1104 | 550 | 197 | 241 | 228 | 230 | 226 | 181 | 62 | 216 | 197 | 206 | 94.3 | 48.7 | 0 | 0 |
| Splay | 34943 | 36720 | 36818 | 37681 | 11490 | 19177 | 24081 | 2721 | 3520 | 1749 | 1736 | 1956 | 1789 | 1448 | 1651 | 771 | 1185 | 867 | 962 | 416 | 228 | 0 | 0 |
| NavierStokes | 34246 | 34622 | 38584 | 35284 | 38584 | 36137 | 22067 | 29502 | 1860 | 1185 | 1375 | 968 | 988 | 892 | 928 | 1336 | 487 | 485 | 199 | 821 | 177 | 0 | 0 |
| Score | 46375 | 45996 | 45069 | 39638 | 33227 | 20036 | 18857 | 10449 | 1538 | 887 | 852 | 831 | 760 | 704 | 649 | 494 | 396 | 356 | 277 | 263 | 107 | 0 | 0 |
| Score/MB | 485 | 1269 | 846 | 395 | 279 | 1032 | 471 | 52 | 42 | 74 | 180 | 161 | 908 | 522 | 329 | 12 | 591 | 879 | 21 | 122 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | primjs | rquickjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.12 | 2.3.1 | 23.11.0 | 13.6.0 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 55M | 81.8M | 108.7M | 861K | 131.5M | 194M | 15.7M | 3.6M | 10.3M | 1.1M | 4.1M | 1.5M | 1.2M | 38.2M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7.2K |
| Exe size | 913.2K | 55M | 81.8M | 108.7M | 861K | 65.8M | 147.4K | 7.9M | 3.6M | 10.3M | 1.1M | 2.1M | 1.5M | 1.2M | 38.2M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7.2K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 65.8M | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 49370 | 47926 | 43457 | 38052 | 32721 | 14484 | 32270 | 1327 | 1173 | 1180 | 1107 | 1243 | 829 | 1112 | 641 | 390 | 109 | 316 | 0 | 0 | 0 |
| DeltaBlue | 70964 | 70931 | 103144 | 92473 | 82522 | 16477 | 35254 | 1217 | 1194 | 1131 | 1118 | 1127 | 965 | 1142 | 711 | 567 | 207 | 370 | 0 | 0 | 0 |
| Crypto | 72950 | 70078 | 53295 | 55868 | 36424 | 23975 | 35784 | 1438 | 978 | 963 | 1352 | 1132 | 1116 | 1006 | 1504 | 302 | 513 | 174 | 0 | 0 | 0 |
| RayTrace | 162872 | 144594 | 77181 | 64157 | 89835 | 45316 | 2786 | 2401 | 2007 | 2075 | 1276 | 1360 | 1318 | 1413 | 839 | 921 | 677 | 400 | 0 | 0 | 0 |
| EarleyBoyer | 91333 | 91580 | 93794 | 80439 | 74561 | 47677 | 45058 | 4276 | 2900 | 3117 | 2386 | 2353 | 1793 | 2180 | 1176 | 1041 | 415 | 736 | 0 | 0 | 0 |
| RegExp | 30427 | 26965 | 13756 | 12316 | 9499 | 11843 | 1592 | 675 | 306 | 315 | 288 | 257 | 230 | 254 | 96.9 | 338 | 311 | 276 | 0 | 0 | 0 |
| Splay | 40542 | 31557 | 43614 | 39034 | 29500 | 28514 | 2724 | 3883 | 3159 | 3162 | 2505 | 2218 | 3936 | 2176 | 1763 | 1308 | 529 | 1107 | 0 | 0 | 0 |
| NavierStokes | 31312 | 31250 | 37248 | 37100 | 33060 | 20102 | 23002 | 1484 | 2084 | 1658 | 2582 | 2040 | 2663 | 1613 | 1865 | 759 | 1407 | 276 | 0 | 0 | 0 |
| Score | 59001 | 55013 | 49933 | 45414 | 39645 | 23200 | 12258 | 1761 | 1415 | 1387 | 1325 | 1249 | 1225 | 1170 | 825 | 619 | 407 | 387 | 0 | 0 | 0 |
| Score/MB | 638 | 1001 | 610 | 417 | 47149 | 176 | 63 | 112 | 392 | 135 | 1241 | 302 | 809 | 991 | 21 | 1477 | 247 | 30 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | qjs(ng) | rquickjs | primjs | xst | mujs | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.12 | 0 | 2.3.1 | 23.11.0 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0.8.0 | 0 | 0 | 16.8.1 | 1.3.5 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 60.3M | 89.6M | 91.3M | 111.6M | 19.9M | 65.8M | 194.4M | 7.9M | 12.1M | 1.2M | 3.7M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7.2K |
| Exe size | 861K | 60.3M | 1016.1K | 91.3M | 111.6M | 569.8K | 65.8M | 148.8K | 7.9M | 12.1M | 1.2M | 3.7M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7.2K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 21799 | 24175 | 28196 | 27451 | 20888 | 24362 | 9510 | 41716 | 488 | 338 | 436 | 179 | 457 | 366 | 247 | 92.8 | 141 | 147 | 23.6 | 0 | 0 |
| DeltaBlue | 81398 | 43043 | 37601 | 46263 | 47347 | 23260 | 10645 | 32768 | 546 | 408 | 463 | 377 | 490 | 440 | 279 | 141 | 198 | 168 | 19.1 | 0 | 0 |
| Crypto | 40753 | 41068 | 37204 | 32334 | 34005 | 26418 | 14816 | 22300 | 559 | 248 | 306 | 262 | 265 | 262 | 194 | 183 | 105 | 77.5 | 35.6 | 0 | 0 |
| RayTrace | 104560 | 100343 | 93313 | 64684 | 54390 | 35963 | 30044 | 3013 | 1056 | 520 | 414 | 563 | 499 | 457 | 313 | 429 | 320 | 242 | 69.3 | 0 | 0 |
| EarleyBoyer | 69102 | 56007 | 56899 | 59024 | 47586 | 6096 | 33063 | 31723 | 1698 | 1067 | 803 | 1146 | 747 | 769 | 545 | 306 | 390 | 421 | 83.4 | 0 | 0 |
| RegExp | 7342 | 15274 | 16001 | 7886 | 6987 | 5570 | 6805 | 1074 | 289 | 89.2 | 79.6 | 89.6 | 72.1 | 76.1 | 74.8 | 124 | 98.9 | 194 | 23.8 | 0 | 0 |
| Splay | 38382 | 31496 | 32402 | 8630 | 8279 | 22335 | 19810 | 2939 | 2133 | 1388 | 843 | 1544 | 817 | 684 | 667 | 269 | 440 | 579 | 120 | 0 | 0 |
| NavierStokes | 36322 | 32518 | 32731 | 36025 | 34429 | 34987 | 23377 | 29887 | 858 | 572 | 786 | 651 | 640 | 576 | 355 | 497 | 249 | 126 | 75.6 | 0 | 0 |
| Score | 38996 | 37312 | 37054 | 28060 | 25402 | 18593 | 16179 | 11347 | 783 | 438 | 426 | 423 | 412 | 381 | 282 | 218 | 211 | 202 | 46 | 0 | 0 |
| Score/MB | 46378 | 618 | 413 | 307 | 227 | 933 | 245 | 58 | 99 | 36 | 369 | 113 | 199 | 308 | 416 | 132 | 489 | 15 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.12 | 2.3.1 | 23.11.0 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.9M | 136.7M | 113.7M | 52.5M | 196.1M | 112.8M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110.1M | 104.6M | 82.7M | 33.9M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 18.6M | 195.8M | 109.8M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35320 | 37484 | 32361 | 33057 | 13443 | 35954 | 705 | 452 | 441 | 430 | 427 | 233 | 192 | 49.3 | 0 | 0 |
| DeltaBlue | 95719 | 47235 | 71176 | 63182 | 12953 | 30937 | 623 | 410 | 410 | 377 | 403 | 332 | 228 | 42.6 | 0 | 0 |
| Crypto | 42885 | 47183 | 42091 | 41798 | 20434 | 21735 | 783 | 430 | 515 | 420 | 370 | 185 | 113 | 75 | 0 | 0 |
| RayTrace | 101378 | 100639 | 63047 | 60679 | 27898 | 3860 | 999 | 739 | 592 | 613 | 589 | 460 | 230 | 135 | 0 | 0 |
| EarleyBoyer | 81552 | 57359 | 71006 | 62830 | 39078 | 25036 | 2244 | 1157 | 998 | 993 | 980 | 568 | 466 | 144 | 0 | 0 |
| RegExp | 9608 | 17456 | 9981 | 8495 | 8919 | 1046 | 405 | 193 | 174 | 192 | 185 | 199 | 196 | 43 | 0 | 0 |
| Splay | 39548 | 34063 | 37877 | 10170 | 23926 | 2987 | 2420 | 1402 | 1010 | 1035 | 1019 | 1180 | 894 | 168 | 0 | 0 |
| NavierStokes | 38990 | 34098 | 36989 | 38732 | 22024 | 21963 | 1074 | 740 | 751 | 713 | 676 | 511 | 191 | 166 | 0 | 0 |
| Score | 45308 | 42051 | 39618 | 32052 | 19169 | 10607 | 974 | 585 | 540 | 526 | 512 | 382 | 255 | 88.2 | 0 | 0 |
| Score/MB | 862 | 323 | 289 | 281 | 365 | 54 | 8 | 15 | 57 | 12 | 57 | 50 | 13 | 2 | 0 | 0 |
