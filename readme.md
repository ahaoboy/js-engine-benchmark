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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46544<br>95.6M<br>487/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46324<br>36.2M<br>1278/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45079<br>53.3M<br>846/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40706<br>100.4M<br>405/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39558<br>121.4M<br>325/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20113<br>19.4M<br>1036/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18824<br>39.6M<br>474/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10426<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 896<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 857<br>4.7M<br>181/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 814<br>5.2M<br>157/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 767<br>857K<br>916/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 719<br>1.3M<br>534/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 569<br>45.3M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 370<br>414.5K<br>914/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 248<br>2.2M<br>115/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
5/19/2025, 1:33:06 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.13 | 0 | 13.6.0 | 2.3.3 | 24.0.2 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 95.6M | 36.2M | 53.3M | 100.4M | 121.4M | 19.4M | 39.6M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.3M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.3K |
| Exe size | 95.6M | 36.2M | 937.8K | 100.4M | 121.4M | 571K | 39.6M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.3M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 39683 | 40216 | 33929 | 32661 | 32058 | 23444 | 12726 | 35517 | 1111 | 803 | 700 | 705 | 614 | 596 | 583 | 502 | 244 | 224 | 196 | 87.2 | 59.9 | 0 | 0 |
| DeltaBlue | 53899 | 56736 | 98198 | 75996 | 71883 | 25721 | 12880 | 38970 | 1055 | 719 | 671 | 687 | 623 | 595 | 574 | 463 | 356 | 324 | 255 | 157 | 55.2 | 0 | 0 |
| Crypto | 49691 | 50908 | 42508 | 41672 | 40701 | 32068 | 20298 | 28003 | 1367 | 709 | 746 | 515 | 576 | 556 | 379 | 905 | 190 | 183 | 121 | 295 | 81 | 0 | 0 |
| RayTrace | 117436 | 106854 | 105892 | 69041 | 65637 | 33448 | 27232 | 3377 | 1564 | 1207 | 919 | 1078 | 912 | 877 | 742 | 562 | 545 | 476 | 277 | 446 | 163 | 0 | 0 |
| EarleyBoyer | 65830 | 66479 | 79982 | 72385 | 71653 | 7157 | 37315 | 19310 | 3408 | 1987 | 1523 | 1737 | 1403 | 1360 | 1219 | 771 | 540 | 445 | 513 | 305 | 192 | 0 | 0 |
| RegExp | 21435 | 19768 | 9809 | 10173 | 9981 | 7902 | 8784 | 858 | 553 | 198 | 245 | 225 | 233 | 227 | 181 | 61 | 216 | 196 | 210 | 95.7 | 49 | 0 | 0 |
| Splay | 36166 | 37478 | 37559 | 36907 | 35196 | 20055 | 24170 | 2800 | 3667 | 1771 | 1769 | 1911 | 1789 | 1453 | 1659 | 1334 | 1115 | 1285 | 983 | 361 | 233 | 0 | 0 |
| NavierStokes | 34577 | 34691 | 38584 | 38842 | 38694 | 36506 | 21963 | 22979 | 1783 | 1212 | 1367 | 964 | 1013 | 923 | 917 | 1480 | 486 | 493 | 201 | 757 | 173 | 0 | 0 |
| Score | 46544 | 46324 | 45079 | 40706 | 39558 | 20113 | 18824 | 10426 | 1535 | 896 | 857 | 814 | 767 | 719 | 649 | 569 | 393 | 370 | 278 | 248 | 107 | 0 | 0 |
| Score/MB | 487 | 1278 | 846 | 405 | 325 | 1036 | 474 | 52 | 42 | 75 | 181 | 157 | 916 | 534 | 329 | 12 | 587 | 914 | 21 | 115 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | llrt | txiki.js | quickjs | qjs(ng) | rquickjs | primjs | ladybird | mujs | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.13 | 2.3.3 | 24.0.2 | 13.6.0 | 139.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 24.12.0 | 2024.02.14 | 0.8.0 | 0 | 0 | 0 | 1.3.5 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 55M | 81.9M | 110.5M | 861K | 130.5M | 194M | 15.7M | 10.3M | 3.6M | 1.1M | 4.1M | 1.2M | 1.5M | 41M | 429.1K | 12.7M | 575.4K | 17.8M | 7.3K |
| Exe size | 913.2K | 55M | 81.9M | 110.5M | 861K | 65.3M | 147.4K | 7.9M | 10.3M | 3.6M | 1.1M | 2.1M | 1.2M | 1.5M | 41M | 429.1K | 12.7M | 575.4K | 554.3K | 7.3K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 65.3M | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 46747 | 49292 | 45070 | 42525 | 32573 | 12112 | 29763 | 1278 | 1188 | 1187 | 1113 | 1226 | 1030 | 810 | 661 | 380 | 310 | 0 | 0 | 0 |
| DeltaBlue | 66369 | 69695 | 101445 | 98417 | 79804 | 16067 | 28199 | 1095 | 1243 | 1226 | 1131 | 1144 | 995 | 961 | 698 | 547 | 342 | 0 | 0 | 0 |
| Crypto | 71872 | 66462 | 50599 | 55071 | 33786 | 24248 | 29787 | 1366 | 1001 | 1116 | 1349 | 1127 | 923 | 1090 | 1455 | 279 | 166 | 0 | 0 | 0 |
| RayTrace | 164278 | 157766 | 87393 | 87467 | 84507 | 44843 | 1160 | 2354 | 2073 | 1967 | 1271 | 1467 | 1373 | 1183 | 930 | 858 | 314 | 0 | 0 | 0 |
| EarleyBoyer | 82593 | 85964 | 94009 | 85226 | 65445 | 47861 | 28692 | 4840 | 3088 | 2972 | 2377 | 2228 | 2092 | 1272 | 1199 | 976 | 683 | 0 | 0 | 0 |
| RegExp | 27548 | 27330 | 13687 | 13742 | 10132 | 11682 | 1411 | 647 | 319 | 290 | 285 | 251 | 259 | 193 | 95.5 | 326 | 265 | 0 | 0 | 0 |
| Splay | 35563 | 30024 | 31431 | 31529 | 29190 | 21041 | 2380 | 3716 | 3129 | 2795 | 2529 | 2037 | 1980 | 1187 | 1897 | 1319 | 1066 | 0 | 0 | 0 |
| NavierStokes | 30183 | 27076 | 37248 | 37804 | 33208 | 19717 | 15879 | 1507 | 1640 | 1980 | 2582 | 1946 | 1615 | 2501 | 1828 | 729 | 268 | 0 | 0 | 0 |
| Score | 55457 | 53666 | 48469 | 47992 | 38443 | 21695 | 9034 | 1726 | 1408 | 1406 | 1326 | 1227 | 1107 | 961 | 840 | 593 | 361 | 0 | 0 | 0 |
| Score/MB | 600 | 975 | 591 | 434 | 45720 | 166 | 46 | 109 | 137 | 389 | 1242 | 297 | 937 | 635 | 20 | 1415 | 28 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | jsc | deno | bun | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | mujs | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 0 | 2.3.3 | 1.2.13 | 24.0.2 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 1.3.5 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 89.6M | 91.5M | 60.4M | 113.3M | 19.9M | 65.3M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 13.1M | 25.3M | 570.8K | 7.3K |
| Exe size | 861K | 1016.1K | 91.5M | 60.4M | 113.3M | 569.8K | 65.3M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 13.1M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 88.6M | 0 | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 19794 | 26265 | 27394 | 19218 | 19939 | 20680 | 8730 | 38716 | 457 | 485 | 424 | 451 | 467 | 417 | 256 | 146 | 129 | 21.7 | 0 | 0 |
| DeltaBlue | 71864 | 31168 | 47466 | 30520 | 47856 | 16576 | 8807 | 29284 | 505 | 550 | 489 | 503 | 488 | 460 | 284 | 202 | 150 | 13.1 | 0 | 0 |
| Crypto | 37439 | 34442 | 29443 | 29089 | 26855 | 23867 | 13706 | 16268 | 521 | 308 | 280 | 330 | 295 | 264 | 204 | 111 | 70.7 | 35.5 | 0 | 0 |
| RayTrace | 95681 | 93091 | 62085 | 94423 | 61863 | 29896 | 26808 | 2420 | 978 | 845 | 782 | 433 | 505 | 472 | 350 | 329 | 203 | 63.4 | 0 | 0 |
| EarleyBoyer | 64264 | 51182 | 58039 | 52430 | 55997 | 5397 | 30568 | 19998 | 1640 | 1294 | 1205 | 846 | 874 | 819 | 612 | 379 | 358 | 70.3 | 0 | 0 |
| RegExp | 7705 | 14231 | 7584 | 13924 | 7736 | 4628 | 6931 | 997 | 265 | 95.6 | 93.3 | 83.4 | 80.5 | 80.9 | 81.1 | 101 | 175 | 21.8 | 0 | 0 |
| Splay | 33884 | 30095 | 26827 | 23282 | 26167 | 16103 | 19107 | 1921 | 2117 | 1654 | 1485 | 912 | 894 | 855 | 739 | 524 | 477 | 133 | 0 | 0 |
| NavierStokes | 33687 | 29650 | 32846 | 29828 | 29650 | 31133 | 20377 | 22238 | 787 | 662 | 596 | 819 | 661 | 589 | 368 | 264 | 125 | 70.4 | 0 | 0 |
| Score | 36093 | 33806 | 31303 | 30833 | 29229 | 15338 | 14823 | 8861 | 735 | 558 | 509 | 451 | 440 | 410 | 302 | 221 | 179 | 41.8 | 0 | 0 |
| Score/MB | 42925 | 377 | 342 | 510 | 258 | 769 | 227 | 45 | 93 | 149 | 42 | 390 | 213 | 332 | 445 | 512 | 13 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.13 | 2.3.3 | 24.0.2 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.9M | 137M | 115.6M | 52.1M | 196.1M | 139.1M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110.1M | 105M | 84.6M | 33.6M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 18.5M | 195.8M | 136M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35507 | 36019 | 33445 | 27126 | 13281 | 36068 | 703 | 448 | 444 | 427 | 438 | 229 | 190 | 48.7 | 0 | 0 |
| DeltaBlue | 94397 | 42104 | 76340 | 74660 | 11848 | 27651 | 623 | 410 | 410 | 377 | 410 | 337 | 231 | 42.3 | 0 | 0 |
| Crypto | 42926 | 44358 | 42109 | 41951 | 20571 | 20476 | 786 | 429 | 515 | 416 | 373 | 182 | 115 | 75.3 | 0 | 0 |
| RayTrace | 101008 | 102636 | 66155 | 65785 | 27824 | 3474 | 983 | 743 | 592 | 604 | 576 | 452 | 233 | 133 | 0 | 0 |
| EarleyBoyer | 82926 | 58913 | 73539 | 72686 | 38863 | 31983 | 2258 | 1137 | 1002 | 1000 | 994 | 575 | 470 | 149 | 0 | 0 |
| RegExp | 9761 | 18402 | 9839 | 10021 | 8775 | 1142 | 407 | 190 | 175 | 193 | 187 | 206 | 204 | 43.6 | 0 | 0 |
| Splay | 40118 | 34772 | 37518 | 34300 | 24537 | 2892 | 2475 | 1457 | 1019 | 1057 | 1019 | 1213 | 904 | 169 | 0 | 0 |
| NavierStokes | 38912 | 34030 | 39029 | 39029 | 21980 | 24165 | 1086 | 743 | 751 | 713 | 674 | 405 | 195 | 166 | 0 | 0 |
| Score | 45498 | 41535 | 40704 | 39088 | 18941 | 10771 | 978 | 585 | 542 | 526 | 515 | 372 | 258 | 88.5 | 0 | 0 |
| Score/MB | 866 | 319 | 297 | 338 | 363 | 54 | 7 | 15 | 58 | 12 | 57 | 49 | 13 | 2 | 0 | 0 |
