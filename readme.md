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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47151<br>95.9M<br>491/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46813<br>36.2M<br>1291/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45197<br>53.3M<br>848/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40704<br>100.6M<br>404/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39945<br>121.3M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20060<br>19.4M<br>1033/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18975<br>40M<br>474/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11467<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 886<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 850<br>4.7M<br>180/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 838<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 757<br>857K<br>904/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 720<br>1.3M<br>534/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 639<br>2M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 577<br>45.7M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 382<br>685K<br>571/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 253<br>2.2M<br>117/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
6/2/2025, 1:35:11 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 0 | 13.6.0 | 2.3.5 | 24.1.0 | 1.13.0.0.beta | 140.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 95.9M | 36.2M | 53.3M | 100.6M | 121.3M | 19.4M | 40M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.3K |
| Exe size | 95.9M | 36.2M | 937.8K | 100.6M | 121.3M | 571K | 40M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40926 | 41310 | 34013 | 32810 | 32340 | 23444 | 12582 | 35570 | 1105 | 810 | 698 | 712 | 612 | 600 | 542 | 499 | 250 | 227 | 200 | 87.5 | 60.8 | 0 | 0 |
| DeltaBlue | 56055 | 57648 | 95541 | 76333 | 74145 | 25238 | 13224 | 27869 | 1068 | 682 | 670 | 686 | 617 | 597 | 555 | 467 | 359 | 321 | 251 | 156 | 55.1 | 0 | 0 |
| Crypto | 50028 | 52004 | 42662 | 41706 | 41660 | 31585 | 20258 | 28276 | 1373 | 702 | 737 | 590 | 576 | 548 | 379 | 908 | 191 | 183 | 123 | 296 | 79.3 | 0 | 0 |
| RayTrace | 118176 | 104930 | 101970 | 68005 | 66599 | 34557 | 27325 | 4487 | 1574 | 1185 | 911 | 1085 | 927 | 875 | 725 | 591 | 556 | 484 | 277 | 466 | 166 | 0 | 0 |
| EarleyBoyer | 65950 | 68060 | 79937 | 73711 | 71034 | 7154 | 38057 | 24475 | 3376 | 1994 | 1504 | 1778 | 1382 | 1358 | 1215 | 768 | 550 | 494 | 502 | 312 | 192 | 0 | 0 |
| RegExp | 21773 | 19982 | 10233 | 10142 | 9971 | 7834 | 8947 | 1290 | 556 | 198 | 240 | 225 | 231 | 223 | 180 | 61.9 | 213 | 198 | 206 | 96.2 | 49 | 0 | 0 |
| Splay | 36200 | 37779 | 38953 | 36638 | 35489 | 19664 | 24382 | 2268 | 3504 | 1767 | 1763 | 1974 | 1674 | 1460 | 1641 | 1349 | 834 | 1292 | 978 | 381 | 226 | 0 | 0 |
| NavierStokes | 34656 | 34543 | 38655 | 38732 | 38765 | 36841 | 21980 | 33208 | 1830 | 1192 | 1362 | 985 | 996 | 944 | 932 | 1531 | 488 | 493 | 198 | 769 | 172 | 0 | 0 |
| Score | 47151 | 46813 | 45197 | 40704 | 39945 | 20060 | 18975 | 11467 | 1534 | 886 | 850 | 838 | 757 | 720 | 639 | 577 | 382 | 376 | 277 | 253 | 106 | 0 | 0 |
| Score/MB | 491 | 1291 | 848 | 404 | 329 | 1033 | 474 | 57 | 42 | 74 | 180 | 162 | 904 | 534 | 323 | 12 | 571 | 928 | 21 | 117 | 3 | 0 | 0 |
### macos-arm64
| Engine | bun | jsc | node | deno | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | goja | xst | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 0 | 24.1.0 | 2.3.5 | 13.6.0 | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 54.9M | 92.4M | 110.5M | 82.1M | 861K | 131.3M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 41.2M | 429.1K | 12.7M | 1.6M | 575.4K | 17.8M | 7.3K |
| Exe size | 54.9M | 913.2K | 110.5M | 82.1M | 861K | 65.6M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 41.2M | 429.1K | 12.7M | 1.6M | 575.4K | 554.3K | 7.3K |
| Dll size | 0 | 91.5M | 0 | 0 | 0 | 65.6M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 46655 | 48597 | 41635 | 42313 | 30381 | 13849 | 36068 | 1208 | 1345 | 1130 | 1334 | 1056 | 1096 | 830 | 745 | 410 | 328 | 111 | 0 | 0 | 0 |
| DeltaBlue | 75652 | 70746 | 98668 | 97643 | 92757 | 14830 | 40510 | 1053 | 1329 | 1214 | 1247 | 1028 | 1092 | 943 | 714 | 606 | 386 | 206 | 0 | 0 | 0 |
| Crypto | 66976 | 70960 | 58187 | 44871 | 36163 | 24337 | 37963 | 1152 | 1223 | 967 | 1225 | 1242 | 1001 | 1100 | 1582 | 313 | 198 | 512 | 0 | 0 | 0 |
| RayTrace | 173305 | 159519 | 83323 | 80881 | 85321 | 47507 | 1877 | 1952 | 2175 | 2042 | 1553 | 1204 | 1484 | 1153 | 1107 | 1018 | 436 | 694 | 0 | 0 | 0 |
| EarleyBoyer | 89836 | 86903 | 97107 | 87477 | 74275 | 46926 | 31947 | 4224 | 3324 | 3001 | 2644 | 2182 | 2308 | 1471 | 1403 | 1135 | 670 | 413 | 0 | 0 | 0 |
| RegExp | 27666 | 27694 | 14608 | 11501 | 9738 | 10755 | 1490 | 668 | 317 | 313 | 279 | 273 | 281 | 216 | 100 | 326 | 297 | 302 | 0 | 0 | 0 |
| Splay | 39099 | 37307 | 43712 | 42946 | 31341 | 25922 | 2868 | 4319 | 3659 | 3129 | 2516 | 2355 | 2350 | 1788 | 2224 | 1395 | 1250 | 466 | 0 | 0 | 0 |
| NavierStokes | 38584 | 30806 | 38655 | 38101 | 32764 | 20438 | 25080 | 1433 | 2140 | 1613 | 2192 | 2571 | 1728 | 2628 | 1964 | 679 | 319 | 1469 | 0 | 0 | 0 |
| Score | 59334 | 56754 | 51270 | 47212 | 39926 | 22405 | 11723 | 1631 | 1582 | 1376 | 1376 | 1247 | 1213 | 1050 | 933 | 639 | 414 | 403 | 0 | 0 | 0 |
| Score/MB | 1080 | 614 | 464 | 575 | 47484 | 170 | 60 | 103 | 438 | 134 | 333 | 1168 | 1027 | 694 | 22 | 1525 | 32 | 245 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | node | deno | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | mujs | xst | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.15 | 0 | 24.1.0 | 2.3.5 | 1.13.0.0.beta | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 60.3M | 89.6M | 113.2M | 91.7M | 19.9M | 65.6M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7.3K |
| Exe size | 861K | 60.3M | 1016.1K | 113.2M | 91.7M | 569.8K | 65.6M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 35471 | 28316 | 21760 | 21739 | 30833 | 24814 | 8949 | 32612 | 490 | 482 | 430 | 458 | 467 | 414 | 261 | 145 | 92.7 | 145 | 25.1 | 0 | 0 |
| DeltaBlue | 78138 | 47195 | 36206 | 51036 | 54283 | 22017 | 10493 | 36081 | 562 | 544 | 500 | 500 | 497 | 462 | 290 | 198 | 126 | 170 | 22.4 | 0 | 0 |
| Crypto | 40214 | 41818 | 38119 | 32916 | 33839 | 21079 | 14536 | 18031 | 502 | 304 | 279 | 331 | 297 | 286 | 205 | 111 | 158 | 78.8 | 38.4 | 0 | 0 |
| RayTrace | 100934 | 115216 | 104708 | 60975 | 53945 | 38183 | 25900 | 1800 | 986 | 819 | 803 | 439 | 507 | 506 | 358 | 340 | 442 | 241 | 71.6 | 0 | 0 |
| EarleyBoyer | 64752 | 60813 | 57129 | 60012 | 63820 | 5932 | 32234 | 37082 | 1576 | 1267 | 1242 | 857 | 898 | 842 | 621 | 413 | 311 | 411 | 79.4 | 0 | 0 |
| RegExp | 8478 | 15942 | 16762 | 8282 | 7614 | 5626 | 7622 | 1209 | 282 | 94.9 | 94.4 | 84.3 | 82.4 | 79.5 | 81.8 | 104 | 130 | 196 | 21.6 | 0 | 0 |
| Splay | 37396 | 35473 | 36695 | 34128 | 16298 | 18679 | 22223 | 2036 | 2359 | 1610 | 1502 | 936 | 881 | 798 | 733 | 416 | 303 | 648 | 94.3 | 0 | 0 |
| NavierStokes | 35178 | 32319 | 32550 | 36506 | 36509 | 35545 | 20841 | 27130 | 866 | 653 | 609 | 815 | 648 | 600 | 377 | 270 | 498 | 130 | 69.5 | 0 | 0 |
| Score | 41089 | 40442 | 37110 | 32918 | 31137 | 17725 | 15869 | 9930 | 770 | 549 | 518 | 455 | 443 | 416 | 307 | 218 | 217 | 205 | 45.2 | 0 | 0 |
| Score/MB | 48867 | 670 | 414 | 290 | 339 | 889 | 241 | 51 | 98 | 146 | 42 | 394 | 214 | 337 | 453 | 505 | 131 | 15 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.15 | 2.3.5 | 24.1.0 | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.6M | 129.9M | 137.3M | 115.6M | 51.1M | 196.1M | 112.8M | 38.1M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110.1M | 105.2M | 84.5M | 33.7M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 25M | 19.8M | 32.1M | 31.1M | 17.4M | 195.8M | 109.8M | 32.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 34624 | 36668 | 30833 | 32838 | 13263 | 35849 | 698 | 451 | 444 | 431 | 431 | 236 | 190 | 45.8 | 0 | 0 |
| DeltaBlue | 89940 | 46805 | 62548 | 69821 | 12873 | 29453 | 616 | 403 | 396 | 370 | 390 | 324 | 230 | 39.2 | 0 | 0 |
| Crypto | 40769 | 47581 | 42011 | 40294 | 19713 | 22010 | 786 | 432 | 510 | 413 | 375 | 179 | 114 | 73.4 | 0 | 0 |
| RayTrace | 100861 | 90131 | 67043 | 63787 | 27916 | 3474 | 971 | 737 | 589 | 587 | 583 | 390 | 220 | 126 | 0 | 0 |
| EarleyBoyer | 76405 | 55108 | 71813 | 69997 | 38583 | 20143 | 2185 | 1081 | 952 | 920 | 940 | 480 | 446 | 123 | 0 | 0 |
| RegExp | 9599 | 16481 | 9537 | 9680 | 8711 | 918 | 396 | 195 | 171 | 189 | 187 | 194 | 195 | 41.8 | 0 | 0 |
| Splay | 36109 | 30355 | 33159 | 30038 | 21848 | 2371 | 2090 | 1312 | 929 | 953 | 929 | 1133 | 699 | 175 | 0 | 0 |
| NavierStokes | 38881 | 33950 | 38881 | 38881 | 22067 | 23744 | 1079 | 740 | 719 | 710 | 658 | 512 | 183 | 167 | 0 | 0 |
| Score | 43652 | 40250 | 38469 | 38334 | 18742 | 9785 | 946 | 574 | 525 | 510 | 500 | 361 | 243 | 84.1 | 0 | 0 |
| Score/MB | 830 | 309 | 280 | 331 | 366 | 49 | 8 | 15 | 56 | 12 | 55 | 48 | 12 | 1 | 0 | 0 |
