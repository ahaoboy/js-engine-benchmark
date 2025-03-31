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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46622<br>94.5M<br>493/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46482<br>36.2M<br>1282/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45485<br>53.3M<br>853/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 38697<br>123.6M<br>313/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 33252<br>118.9M<br>279/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20272<br>19.4M<br>1044/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18572<br>38.6M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9974<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1539<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 895<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 843<br>4.7M<br>178/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 841<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 728<br>857K<br>869/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 717<br>1.3M<br>532/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 626<br>2.1M<br>300/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 385<br>45.2M<br>8/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 379<br>685K<br>566/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 260<br>2.2M<br>120/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.1K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
3/31/2025, 1:32:54 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.7 | 0 | 13.6.0 | 2.2.6 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 94.5M | 36.2M | 53.3M | 123.6M | 118.9M | 19.4M | 38.6M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.2M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.1K |
| Exe size | 94.5M | 36.2M | 937.8K | 123.6M | 118.9M | 571K | 38.6M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.2M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.1K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41180 | 40827 | 35366 | 25820 | 31849 | 23677 | 12610 | 35482 | 1106 | 807 | 660 | 710 | 554 | 592 | 550 | 319 | 242 | 228 | 202 | 88.9 | 59.8 | 0 | 0 |
| DeltaBlue | 57595 | 55281 | 90668 | 69391 | 75011 | 26229 | 12853 | 25614 | 1062 | 729 | 653 | 691 | 602 | 592 | 552 | 277 | 353 | 323 | 249 | 160 | 55.2 | 0 | 0 |
| Crypto | 49712 | 51942 | 42763 | 41739 | 41287 | 31847 | 20726 | 16830 | 1364 | 711 | 763 | 593 | 526 | 545 | 356 | 874 | 190 | 184 | 122 | 313 | 80.6 | 0 | 0 |
| RayTrace | 106484 | 107964 | 106706 | 66895 | 61567 | 36333 | 27399 | 5689 | 1579 | 1189 | 911 | 1121 | 874 | 878 | 681 | 331 | 549 | 485 | 275 | 489 | 163 | 0 | 0 |
| EarleyBoyer | 67083 | 66740 | 81318 | 72083 | 61060 | 7048 | 37174 | 23803 | 3392 | 1994 | 1520 | 1782 | 1343 | 1363 | 1198 | 439 | 550 | 499 | 508 | 319 | 195 | 0 | 0 |
| RegExp | 21044 | 19840 | 10173 | 9951 | 9074 | 7870 | 8478 | 857 | 549 | 198 | 245 | 229 | 235 | 227 | 181 | 45.9 | 217 | 198 | 208 | 93.1 | 49.2 | 0 | 0 |
| Splay | 36777 | 37681 | 39156 | 36598 | 11537 | 19499 | 22345 | 2756 | 3652 | 1768 | 1708 | 1978 | 1755 | 1454 | 1651 | 819 | 834 | 1285 | 993 | 388 | 230 | 0 | 0 |
| NavierStokes | 34246 | 34508 | 38655 | 38287 | 38507 | 36693 | 21832 | 20034 | 1824 | 1183 | 1338 | 952 | 925 | 922 | 898 | 1153 | 483 | 475 | 200 | 820 | 174 | 0 | 0 |
| Score | 46622 | 46482 | 45485 | 38697 | 33252 | 20272 | 18572 | 9974 | 1539 | 895 | 843 | 841 | 728 | 717 | 626 | 385 | 379 | 376 | 278 | 260 | 107 | 0 | 0 |
| Score/MB | 493 | 1282 | 853 | 313 | 279 | 1044 | 481 | 49 | 42 | 75 | 178 | 162 | 869 | 532 | 300 | 8 | 566 | 928 | 21 | 120 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | v8 | node | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | ladybird | mujs | goja | xst | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.7 | 2.2.6 | 13.6.0 | 23.10.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54.1M | 107.4M | 861K | 108.7M | 128.1M | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 1.1M | 1.2M | 1.5M | 42.7M | 429.1K | 12.7M | 1.6M | 575.4K | 17.8M | 7.1K |
| Exe size | 913.2K | 54.1M | 107.4M | 861K | 108.7M | 64M | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 1.1M | 1.2M | 1.5M | 42.7M | 429.1K | 12.7M | 1.6M | 575.4K | 554.3K | 7.1K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 64M | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 51167 | 46521 | 40382 | 34575 | 39874 | 15642 | 33152 | 1370 | 1339 | 1335 | 1113 | 1117 | 1101 | 825 | 490 | 401 | 331 | 120 | 0 | 0 | 0 |
| DeltaBlue | 73708 | 52802 | 92400 | 90601 | 102086 | 17601 | 46977 | 1260 | 1338 | 1246 | 1143 | 1104 | 1140 | 889 | 438 | 614 | 396 | 226 | 0 | 0 | 0 |
| Crypto | 78344 | 64979 | 58203 | 39622 | 59613 | 26523 | 45088 | 1448 | 1232 | 1227 | 997 | 1333 | 1004 | 1093 | 1359 | 310 | 202 | 558 | 0 | 0 | 0 |
| RayTrace | 189437 | 153178 | 81177 | 97827 | 68227 | 49949 | 3578 | 2559 | 2137 | 1576 | 2063 | 1209 | 1476 | 1289 | 629 | 996 | 474 | 750 | 0 | 0 | 0 |
| EarleyBoyer | 98001 | 88892 | 96135 | 74362 | 68628 | 51022 | 52781 | 5303 | 2792 | 2633 | 2986 | 2046 | 2359 | 1565 | 845 | 1132 | 849 | 449 | 0 | 0 | 0 |
| RegExp | 32035 | 29093 | 13338 | 11682 | 11103 | 13196 | 1938 | 738 | 312 | 280 | 317 | 284 | 282 | 237 | 77.7 | 355 | 313 | 339 | 0 | 0 | 0 |
| Splay | 52497 | 48047 | 36231 | 45007 | 34528 | 29459 | 3767 | 4758 | 3627 | 2494 | 3074 | 2537 | 2342 | 3900 | 1617 | 1259 | 1358 | 517 | 0 | 0 | 0 |
| NavierStokes | 31842 | 31016 | 37248 | 34132 | 33553 | 21370 | 37285 | 1631 | 2081 | 2191 | 1587 | 2575 | 1702 | 2688 | 1700 | 785 | 322 | 1436 | 0 | 0 | 0 |
| Score | 64342 | 55818 | 48479 | 44792 | 44218 | 25041 | 15657 | 1932 | 1536 | 1377 | 1366 | 1287 | 1221 | 1190 | 653 | 646 | 442 | 435 | 0 | 0 | 0 |
| Score/MB | 696 | 1031 | 451 | 53271 | 406 | 195 | 80 | 122 | 425 | 334 | 133 | 1206 | 1034 | 786 | 15 | 1541 | 34 | 264 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | qjs(ng) | rquickjs | primjs | xst | mujs | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.7 | 13.6.0 | 0 | 2.2.6 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0.8.0 | 0 | 0 | 16.8.1 | 1.3.5 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 59.4M | 861K | 89.6M | 114.3M | 111.6M | 19.9M | 64M | 194.4M | 7.9M | 12.1M | 1.2M | 3.7M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7.1K |
| Exe size | 59.4M | 861K | 1016.1K | 114.3M | 111.6M | 569.8K | 64M | 148.8K | 7.9M | 12.1M | 1.2M | 3.7M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7.1K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 27497 | 22007 | 28446 | 30677 | 19395 | 20825 | 9291 | 41628 | 502 | 366 | 434 | 419 | 411 | 358 | 251 | 93.6 | 119 | 134 | 21.2 | 0 | 0 |
| DeltaBlue | 45985 | 79520 | 35248 | 47585 | 44603 | 19552 | 10757 | 46931 | 556 | 455 | 476 | 452 | 424 | 361 | 273 | 144 | 184 | 156 | 19.6 | 0 | 0 |
| Crypto | 41383 | 41038 | 36551 | 33456 | 32958 | 22340 | 14653 | 20115 | 569 | 255 | 319 | 259 | 285 | 242 | 197 | 184 | 103 | 64.5 | 33.3 | 0 | 0 |
| RayTrace | 102562 | 88059 | 93535 | 63575 | 55721 | 33118 | 30427 | 4271 | 1080 | 770 | 422 | 575 | 445 | 436 | 328 | 440 | 296 | 205 | 59.7 | 0 | 0 |
| EarleyBoyer | 53846 | 68152 | 58196 | 60164 | 52000 | 5710 | 31427 | 30725 | 1791 | 1181 | 784 | 1032 | 724 | 657 | 511 | 320 | 344 | 321 | 70 | 0 | 0 |
| RegExp | 16167 | 8199 | 16365 | 8447 | 7546 | 5096 | 6903 | 1206 | 292 | 89.9 | 80.7 | 81.9 | 68.4 | 68.2 | 70.5 | 128 | 83.5 | 177 | 21.6 | 0 | 0 |
| Splay | 35962 | 39116 | 36035 | 12395 | 10903 | 17276 | 19685 | 2298 | 2301 | 1477 | 872 | 787 | 747 | 787 | 583 | 283 | 277 | 461 | 118 | 0 | 0 |
| NavierStokes | 32615 | 36061 | 32583 | 36470 | 36322 | 32648 | 22831 | 26389 | 896 | 573 | 801 | 521 | 558 | 564 | 331 | 494 | 235 | 112 | 76.3 | 0 | 0 |
| Score | 39115 | 38655 | 37406 | 30315 | 26550 | 16284 | 16023 | 11805 | 810 | 483 | 433 | 421 | 382 | 358 | 273 | 224 | 183 | 173 | 42.8 | 0 | 0 |
| Score/MB | 658 | 45972 | 417 | 265 | 237 | 817 | 250 | 60 | 103 | 40 | 375 | 112 | 185 | 290 | 403 | 136 | 424 | 13 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | node | deno | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.7 | 23.10.0 | 2.2.6 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 51.4M | 128.8M | 113.7M | 135.3M | 50.2M | 196.1M | 86.6M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 19.6M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 109M | 82.7M | 103.3M | 32.9M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 23.9M | 19.8M | 31M | 32M | 17.3M | 195.8M | 83.5M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35281 | 36375 | 32940 | 28259 | 12610 | 35718 | 688 | 445 | 440 | 405 | 434 | 233 | 191 | 49.4 | 0 | 0 |
| DeltaBlue | 97603 | 37859 | 76492 | 69986 | 12953 | 36920 | 624 | 403 | 410 | 377 | 396 | 331 | 236 | 42.4 | 0 | 0 |
| Crypto | 43080 | 44201 | 41584 | 42034 | 21233 | 22325 | 784 | 425 | 512 | 420 | 376 | 185 | 114 | 74.8 | 0 | 0 |
| RayTrace | 99973 | 93017 | 60235 | 65563 | 27750 | 4327 | 1014 | 743 | 585 | 604 | 583 | 465 | 231 | 133 | 0 | 0 |
| EarleyBoyer | 83197 | 58452 | 62250 | 73404 | 38043 | 21682 | 2218 | 1146 | 991 | 980 | 984 | 568 | 460 | 144 | 0 | 0 |
| RegExp | 9770 | 17603 | 8455 | 9951 | 8874 | 990 | 403 | 197 | 173 | 192 | 188 | 199 | 199 | 42.9 | 0 | 0 |
| Splay | 39792 | 34054 | 32124 | 12366 | 22500 | 2235 | 2461 | 1459 | 978 | 1027 | 1019 | 1198 | 846 | 185 | 0 | 0 |
| NavierStokes | 38951 | 33984 | 38732 | 39029 | 22149 | 25944 | 1091 | 733 | 748 | 711 | 655 | 508 | 193 | 167 | 0 | 0 |
| Score | 45597 | 40142 | 37760 | 34313 | 18887 | 10592 | 976 | 585 | 536 | 520 | 511 | 382 | 255 | 89.1 | 0 | 0 |
| Score/MB | 886 | 311 | 332 | 253 | 376 | 54 | 11 | 15 | 57 | 12 | 56 | 50 | 13 | 2 | 0 | 0 |
