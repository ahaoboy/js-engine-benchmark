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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47384<br>37.4M<br>1265/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46509<br>96.4M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45707<br>53.3M<br>858/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40273<br>101.1M<br>398/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39961<br>121.4M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19982<br>19.4M<br>1029/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18895<br>39.6M<br>477/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16860<br>35.2M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10956<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 891<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 839<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 829<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 720<br>857K<br>860/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 718<br>1.3M<br>533/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 641<br>2M<br>324/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 561<br>45.7M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 369<br>414.5K<br>911/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 269<br>2.1M<br>129/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
6/13/2025, 9:41:45 AM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | kiesel | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 13.6.0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.9.1 | 0.20.0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 37.4M | 96.4M | 53.3M | 101.1M | 121.4M | 19.4M | 39.6M | 35.2M | 199.7M | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.1M | 27M | 12.6M | 454.2K | 7.3K |
| Exe size | 37.4M | 96.4M | 937.8K | 101.1M | 121.4M | 571K | 39.6M | 35.2M | 1M | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.1M | 27M | 12.6M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41282 | 41755 | 34991 | 32495 | 32372 | 23483 | 12610 | 12935 | 35832 | 1118 | 797 | 713 | 687 | 544 | 582 | 584 | 504 | 247 | 224 | 200 | 89.5 | 60.2 | 59.1 | 0 | 0 |
| DeltaBlue | 55486 | 52114 | 94701 | 72717 | 72842 | 25258 | 13019 | 12814 | 38672 | 1053 | 729 | 687 | 655 | 590 | 584 | 562 | 436 | 349 | 317 | 252 | 164 | 54.4 | 55.6 | 0 | 0 |
| Crypto | 51920 | 49426 | 42726 | 41360 | 41532 | 31753 | 20441 | 17622 | 28878 | 1357 | 687 | 604 | 734 | 521 | 558 | 380 | 863 | 186 | 184 | 121 | 335 | 80.4 | 61.6 | 0 | 0 |
| RayTrace | 119730 | 114994 | 107594 | 67931 | 66237 | 33965 | 26956 | 27620 | 1764 | 1567 | 1204 | 1067 | 902 | 859 | 884 | 698 | 565 | 523 | 480 | 275 | 507 | 164 | 138 | 0 | 0 |
| EarleyBoyer | 67859 | 68173 | 81116 | 72797 | 71683 | 7062 | 38227 | 36758 | 25384 | 3379 | 1978 | 1760 | 1467 | 1322 | 1345 | 1214 | 747 | 535 | 494 | 506 | 324 | 190 | 137 | 0 | 0 |
| RegExp | 20436 | 21205 | 10212 | 10102 | 10102 | 7855 | 8728 | 8784 | 1313 | 549 | 197 | 227 | 225 | 231 | 228 | 182 | 62.2 | 214 | 198 | 208 | 97.4 | 49 | 94.9 | 0 | 0 |
| Splay | 36744 | 35294 | 39050 | 36492 | 35709 | 19501 | 24561 | 11360 | 2910 | 3602 | 1810 | 1980 | 1761 | 1763 | 1442 | 1599 | 1384 | 1239 | 1135 | 970 | 399 | 232 | 330 | 0 | 0 |
| NavierStokes | 35022 | 34691 | 38655 | 38842 | 38765 | 36730 | 21919 | 22067 | 30331 | 1876 | 1179 | 984 | 1293 | 932 | 949 | 930 | 1430 | 479 | 493 | 199 | 878 | 175 | 119 | 0 | 0 |
| Score | 47384 | 46509 | 45707 | 40273 | 39961 | 19982 | 18895 | 16860 | 10956 | 1538 | 891 | 839 | 829 | 720 | 718 | 641 | 561 | 393 | 369 | 276 | 269 | 106 | 105 | 0 | 0 |
| Score/MB | 1265 | 482 | 858 | 398 | 329 | 1029 | 477 | 478 | 54 | 42 | 74 | 162 | 194 | 860 | 533 | 324 | 12 | 587 | 911 | 20 | 129 | 3 | 8 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | node | deno | v8 | spidermonkey | mozjs | graaljs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | kiesel | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 24.2.0 | 2.3.6 | 13.6.0 | 140.0 | 0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2025.04.26 | 0 | 0 | 0 | 1.3.5 | 16.9.1 | 0 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 94.2M | 55.8M | 110.6M | 82.4M | 861K | 130.5M | 32.8M | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 975.9K | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 12.4M | 575.4K | 17.8M | 7.3K |
| Exe size | 914.7K | 55.8M | 110.6M | 82.4M | 861K | 65.2M | 32.8M | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 975.9K | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 12.4M | 575.4K | 554.3K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 65.2M | 0 | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 52279 | 47707 | 44791 | 45656 | 31578 | 14728 | 14566 | 36294 | 1323 | 1284 | 1304 | 1018 | 1071 | 1033 | 742 | 717 | 349 | 118 | 307 | 114 | 0 | 0 | 0 |
| DeltaBlue | 71976 | 69993 | 103673 | 105326 | 75970 | 17356 | 16186 | 47109 | 1192 | 1303 | 1242 | 1010 | 1059 | 1043 | 883 | 708 | 600 | 211 | 376 | 101 | 0 | 0 | 0 |
| Crypto | 77657 | 71489 | 58599 | 59479 | 37144 | 25993 | 21859 | 41232 | 1423 | 1230 | 1196 | 856 | 1270 | 934 | 1027 | 1541 | 307 | 549 | 181 | 118 | 0 | 0 | 0 |
| RayTrace | 183813 | 177005 | 91537 | 80363 | 67265 | 44725 | 50985 | 3294 | 2406 | 2161 | 1587 | 1782 | 1179 | 1356 | 1137 | 986 | 932 | 740 | 391 | 252 | 0 | 0 | 0 |
| EarleyBoyer | 98065 | 98333 | 99788 | 94819 | 76311 | 50657 | 48057 | 49085 | 5036 | 3330 | 2663 | 2651 | 2085 | 2084 | 1579 | 1231 | 885 | 437 | 735 | 248 | 0 | 0 | 0 |
| RegExp | 31884 | 31065 | 14881 | 14956 | 11626 | 13053 | 12806 | 1783 | 710 | 309 | 280 | 283 | 262 | 260 | 207 | 96 | 317 | 329 | 278 | 143 | 0 | 0 | 0 |
| Splay | 52448 | 52692 | 48202 | 54346 | 39556 | 31187 | 16904 | 3423 | 4417 | 3651 | 2510 | 2576 | 2080 | 2096 | 3626 | 2174 | 1288 | 560 | 1267 | 486 | 0 | 0 | 0 |
| NavierStokes | 34212 | 33290 | 39692 | 39771 | 35580 | 21158 | 20082 | 28790 | 1570 | 2145 | 2198 | 1501 | 2237 | 1705 | 2499 | 1756 | 752 | 1517 | 328 | 218 | 0 | 0 | 0 |
| Score | 64548 | 62282 | 53855 | 53826 | 40669 | 24496 | 22001 | 14545 | 1844 | 1564 | 1373 | 1209 | 1201 | 1129 | 1108 | 877 | 598 | 433 | 403 | 184 | 0 | 0 | 0 |
| Score/MB | 685 | 1115 | 487 | 652 | 48367 | 187 | 670 | 74 | 117 | 433 | 333 | 117 | 1260 | 956 | 732 | 21 | 1427 | 268 | 31 | 14 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | xst | mujs | goja | kiesel | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.16 | 0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 16.9.1 | 1.3.5 | 0 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 61.2M | 89.6M | 92.1M | 113.3M | 19.9M | 65.2M | 33.8M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Exe size | 861K | 61.2M | 1016.1K | 92.1M | 113.3M | 569.8K | 65.2M | 33.8M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22583 | 28535 | 29329 | 31338 | 22491 | 25177 | 9659 | 9948 | 44138 | 507 | 485 | 422 | 468 | 432 | 410 | 253 | 94.4 | 143 | 145 | 50.6 | 24.8 | 0 | 0 |
| DeltaBlue | 81014 | 44907 | 37628 | 53754 | 53225 | 23679 | 10533 | 11154 | 50111 | 571 | 548 | 493 | 506 | 473 | 456 | 285 | 144 | 203 | 170 | 48.2 | 21.7 | 0 | 0 |
| Crypto | 41067 | 40979 | 38439 | 34343 | 34488 | 27354 | 15227 | 13289 | 22747 | 572 | 307 | 277 | 300 | 332 | 282 | 202 | 188 | 111 | 79.9 | 53.8 | 37.6 | 0 | 0 |
| RayTrace | 107002 | 107742 | 106928 | 72297 | 70077 | 37295 | 31080 | 31154 | 7918 | 1102 | 844 | 780 | 512 | 383 | 498 | 352 | 452 | 342 | 241 | 121 | 76.1 | 0 | 0 |
| EarleyBoyer | 72338 | 59841 | 59342 | 66486 | 63812 | 6366 | 34433 | 33233 | 40968 | 1847 | 1271 | 1206 | 898 | 806 | 829 | 603 | 322 | 419 | 422 | 114 | 85.4 | 0 | 0 |
| RegExp | 8737 | 16407 | 17547 | 8702 | 8728 | 5711 | 7894 | 7599 | 1385 | 296 | 95.2 | 93.2 | 82.8 | 84.5 | 82.2 | 80.5 | 131 | 104 | 194 | 54.8 | 23.9 | 0 | 0 |
| Splay | 43541 | 39287 | 39368 | 38016 | 37225 | 20361 | 23526 | 13560 | 3690 | 2464 | 1656 | 1488 | 895 | 927 | 832 | 730 | 300 | 431 | 570 | 299 | 145 | 0 | 0 |
| NavierStokes | 36506 | 33242 | 33208 | 36655 | 37063 | 35805 | 24313 | 24906 | 30719 | 901 | 660 | 595 | 657 | 773 | 606 | 370 | 518 | 266 | 129 | 104 | 77.3 | 0 | 0 |
| Score | 41058 | 40511 | 39703 | 36812 | 34944 | 18876 | 17151 | 15817 | 15000 | 828 | 556 | 509 | 447 | 434 | 416 | 301 | 229 | 220 | 203 | 86.4 | 49.4 | 0 | 0 |
| Score/MB | 48830 | 662 | 442 | 399 | 308 | 947 | 262 | 467 | 77 | 105 | 148 | 42 | 216 | 424 | 337 | 444 | 142 | 509 | 15 | 6 | 1 | 0 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | quickjs | llrt | qjs(ng) | rquickjs | mujs | goja | kiesel | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.16 | 2.3.6 | 24.2.0 | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 130.9M | 138.2M | 115.7M | 51M | 196.1M | 86.6M | 37M | 11.8M | 41.8M | 9M | 8M | 7.5M | 19.5M | 46.3M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 111.1M | 105.9M | 84.6M | 33.6M | 349.1K | 3M | 5.7M | 4.9M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 33.2M | 27.4M | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 31.1M | 17.4M | 195.8M | 83.5M | 31.3M | 6.9M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 13.2M | 15M | 4.7M | 0 |
| Richards | 35023 | 36407 | 37215 | 33350 | 32372 | 13252 | 35726 | 681 | 451 | 504 | 424 | 427 | 381 | 236 | 191 | 56.1 | 49.8 | 0 | 0 |
| DeltaBlue | 94000 | 48379 | 45628 | 75289 | 71222 | 13111 | 28006 | 618 | 410 | 461 | 383 | 403 | 423 | 337 | 229 | 50.8 | 41.7 | 0 | 0 |
| Crypto | 42976 | 48403 | 48683 | 39297 | 38512 | 20446 | 24470 | 784 | 424 | 543 | 422 | 374 | 320 | 182 | 115 | 59.7 | 75.4 | 0 | 0 |
| RayTrace | 102784 | 106040 | 87245 | 67709 | 64453 | 25234 | 2886 | 1024 | 746 | 547 | 604 | 580 | 547 | 456 | 234 | 131 | 135 | 0 | 0 |
| EarleyBoyer | 82374 | 62021 | 54233 | 72951 | 71249 | 38684 | 28114 | 2239 | 1172 | 1005 | 992 | 985 | 874 | 577 | 457 | 124 | 147 | 0 | 0 |
| RegExp | 9718 | 19840 | 19638 | 9728 | 9900 | 8702 | 1107 | 404 | 198 | 183 | 192 | 185 | 156 | 203 | 197 | 88.9 | 43.4 | 0 | 0 |
| Splay | 39719 | 35579 | 34203 | 37673 | 33582 | 24187 | 2416 | 2456 | 1442 | 1045 | 1043 | 1009 | 944 | 1198 | 889 | 317 | 169 | 0 | 0 |
| NavierStokes | 38912 | 33996 | 34064 | 38990 | 38990 | 22067 | 24462 | 1079 | 740 | 1037 | 670 | 671 | 730 | 503 | 193 | 115 | 167 | 0 | 0 |
| Score | 45382 | 43763 | 41589 | 40305 | 38939 | 18875 | 10333 | 974 | 589 | 585 | 522 | 510 | 476 | 383 | 255 | 98.6 | 88.6 | 0 | 0 |
| Score/MB | 863 | 356 | 317 | 291 | 336 | 369 | 52 | 11 | 15 | 49 | 12 | 56 | 59 | 51 | 13 | 2 | 2 | 0 | 0 |
