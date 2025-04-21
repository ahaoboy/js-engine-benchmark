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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46991<br>94.8M<br>495/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46585<br>36.2M<br>1285/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45709<br>53.3M<br>858/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39680<br>100M<br>396/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 33189<br>118.9M<br>279/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20227<br>19.4M<br>1042/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18654<br>38.8M<br>480/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10897<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1542<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 885<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 858<br>4.7M<br>182/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 841<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 767<br>857K<br>916/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 713<br>1.3M<br>529/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 634<br>2.1M<br>304/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 438<br>45.5M<br>9/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 403<br>685K<br>602/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 359<br>414.5K<br>886/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 279<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>121/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
4/21/2025, 1:32:47 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.10 | 0 | 13.6.0 | 2.2.11 | 23.11.0 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 94.8M | 36.2M | 53.3M | 100M | 118.9M | 19.4M | 38.8M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.5M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7K |
| Exe size | 94.8M | 36.2M | 937.8K | 100M | 118.9M | 571K | 38.8M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.5M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40576 | 41254 | 35288 | 31860 | 32870 | 23515 | 12582 | 35320 | 1113 | 798 | 695 | 705 | 616 | 595 | 550 | 351 | 241 | 229 | 205 | 89.2 | 61.6 | 0 | 0 |
| DeltaBlue | 56657 | 53139 | 96387 | 69093 | 67923 | 25450 | 12701 | 27776 | 1056 | 707 | 678 | 691 | 623 | 576 | 561 | 305 | 356 | 323 | 251 | 159 | 55.3 | 0 | 0 |
| Crypto | 49659 | 51851 | 42606 | 41852 | 41548 | 32259 | 21227 | 13771 | 1371 | 681 | 780 | 597 | 578 | 547 | 356 | 828 | 188 | 184 | 122 | 319 | 80.6 | 0 | 0 |
| RayTrace | 115438 | 107742 | 105300 | 66377 | 62455 | 36075 | 26687 | 8806 | 1562 | 1195 | 935 | 1097 | 934 | 870 | 730 | 445 | 555 | 487 | 277 | 490 | 165 | 0 | 0 |
| EarleyBoyer | 66829 | 67774 | 80520 | 73691 | 61902 | 7068 | 37606 | 40222 | 3409 | 1983 | 1516 | 1782 | 1337 | 1347 | 1201 | 571 | 561 | 503 | 509 | 320 | 195 | 0 | 0 |
| RegExp | 21072 | 20204 | 10263 | 9951 | 8974 | 7847 | 8646 | 1204 | 554 | 197 | 235 | 228 | 238 | 224 | 182 | 60.6 | 218 | 198 | 207 | 91.9 | 47.9 | 0 | 0 |
| Splay | 37250 | 38252 | 39010 | 37347 | 11857 | 19929 | 22597 | 3113 | 3683 | 1768 | 1760 | 1999 | 1809 | 1479 | 1649 | 745 | 1334 | 839 | 989 | 400 | 231 | 0 | 0 |
| NavierStokes | 34394 | 34577 | 38732 | 36693 | 38584 | 36397 | 22045 | 11086 | 1822 | 1184 | 1362 | 968 | 1004 | 916 | 905 | 1333 | 478 | 495 | 201 | 821 | 176 | 0 | 0 |
| Score | 46991 | 46585 | 45709 | 39680 | 33189 | 20227 | 18654 | 10897 | 1542 | 885 | 858 | 841 | 767 | 713 | 634 | 438 | 403 | 359 | 279 | 261 | 107 | 0 | 0 |
| Score/MB | 495 | 1285 | 858 | 396 | 279 | 1042 | 480 | 54 | 42 | 74 | 182 | 162 | 916 | 529 | 304 | 9 | 602 | 886 | 21 | 121 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | node | v8 | deno | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.10 | 23.11.0 | 13.6.0 | 2.2.11 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54.4M | 108.7M | 861K | 81.6M | 128.5M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 38.5M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7K |
| Exe size | 913.2K | 54.4M | 108.7M | 861K | 81.6M | 64.3M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 38.5M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 64.3M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 51968 | 52787 | 37067 | 35298 | 42966 | 15776 | 37360 | 1374 | 1338 | 1179 | 1354 | 1112 | 1117 | 827 | 533 | 405 | 119 | 323 | 0 | 0 | 0 |
| DeltaBlue | 74574 | 73735 | 100103 | 94516 | 89894 | 15994 | 51136 | 1260 | 1345 | 1242 | 1238 | 1118 | 1139 | 977 | 502 | 609 | 226 | 397 | 0 | 0 | 0 |
| Crypto | 78342 | 74112 | 57331 | 39072 | 50412 | 26308 | 43683 | 1478 | 1237 | 991 | 1209 | 1315 | 1009 | 1121 | 1549 | 314 | 561 | 200 | 0 | 0 | 0 |
| RayTrace | 190251 | 187587 | 73333 | 96347 | 78069 | 51503 | 3244 | 2567 | 2183 | 2082 | 1586 | 1233 | 1487 | 1239 | 854 | 1015 | 756 | 477 | 0 | 0 | 0 |
| EarleyBoyer | 105273 | 102441 | 90153 | 76905 | 84138 | 49525 | 49240 | 5300 | 3313 | 3129 | 2630 | 2385 | 2380 | 1834 | 1054 | 1120 | 454 | 780 | 0 | 0 | 0 |
| RegExp | 33036 | 31976 | 13847 | 11843 | 12547 | 13157 | 1977 | 740 | 319 | 317 | 280 | 288 | 280 | 236 | 98.6 | 360 | 322 | 312 | 0 | 0 | 0 |
| Splay | 54835 | 46825 | 46328 | 42856 | 14045 | 30095 | 3537 | 4819 | 3594 | 3154 | 2494 | 2559 | 2397 | 3993 | 1874 | 1368 | 530 | 1404 | 0 | 0 | 0 |
| NavierStokes | 33687 | 33323 | 40621 | 36397 | 36952 | 21327 | 33290 | 1645 | 2167 | 1657 | 2164 | 2583 | 1740 | 2588 | 1908 | 783 | 1552 | 322 | 0 | 0 | 0 |
| Score | 66250 | 63860 | 49603 | 45335 | 41216 | 24798 | 15364 | 1944 | 1586 | 1411 | 1375 | 1319 | 1232 | 1223 | 776 | 655 | 439 | 438 | 0 | 0 | 0 |
| Score/MB | 716 | 1173 | 456 | 53917 | 505 | 192 | 79 | 123 | 439 | 137 | 333 | 1236 | 1043 | 808 | 20 | 1563 | 267 | 34 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | jsc | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | quickjs | llrt | rquickjs | qjs(ng) | primjs | mujs | xst | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.10 | 2.2.11 | 0 | 23.11.0 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 2024.02.14 | 0.5.1.beta | 0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 59.7M | 91M | 89.6M | 111.6M | 19.9M | 64.3M | 194.4M | 7.9M | 3.7M | 1.2M | 12.1M | 1.2M | 2.1M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7K |
| Exe size | 861K | 59.7M | 91M | 1016.1K | 111.6M | 569.8K | 64.3M | 148.8K | 7.9M | 3.7M | 1.2M | 12.1M | 1.2M | 2.1M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7K |
| Dll size | 0 | 0 | 0 | 88.6M | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22526 | 29015 | 30819 | 29382 | 23186 | 25562 | 9447 | 44226 | 450 | 480 | 417 | 246 | 415 | 466 | 258 | 143 | 79.1 | 143 | 26 | 0 | 0 |
| DeltaBlue | 82568 | 43790 | 48293 | 33390 | 50646 | 24316 | 10837 | 52689 | 490 | 491 | 479 | 359 | 467 | 501 | 291 | 202 | 126 | 169 | 23 | 0 | 0 |
| Crypto | 42042 | 42547 | 34533 | 38747 | 34977 | 25284 | 16031 | 27666 | 525 | 277 | 328 | 230 | 276 | 269 | 203 | 111 | 178 | 71.9 | 39.3 | 0 | 0 |
| RayTrace | 106484 | 112700 | 71779 | 82622 | 57571 | 38331 | 31344 | 9515 | 1030 | 831 | 424 | 707 | 497 | 424 | 353 | 346 | 423 | 225 | 72.6 | 0 | 0 |
| EarleyBoyer | 70317 | 59202 | 66783 | 59268 | 54589 | 6166 | 34531 | 42293 | 1708 | 1252 | 842 | 1114 | 817 | 759 | 594 | 412 | 295 | 411 | 79.9 | 0 | 0 |
| RegExp | 8758 | 16927 | 8910 | 16968 | 7772 | 5750 | 8051 | 1413 | 258 | 88.2 | 82.7 | 81.3 | 73.9 | 74.5 | 80.2 | 104 | 131 | 197 | 22 | 0 | 0 |
| Splay | 43427 | 38684 | 38537 | 30208 | 12704 | 20466 | 23909 | 1519 | 1771 | 1537 | 913 | 1345 | 705 | 725 | 739 | 480 | 288 | 608 | 106 | 0 | 0 |
| NavierStokes | 36655 | 33242 | 37285 | 22489 | 36766 | 35580 | 24684 | 27602 | 836 | 630 | 821 | 556 | 591 | 573 | 370 | 271 | 512 | 127 | 71.9 | 0 | 0 |
| Score | 41113 | 40913 | 36506 | 34789 | 28764 | 18792 | 17410 | 14071 | 727 | 525 | 442 | 420 | 401 | 398 | 302 | 223 | 213 | 199 | 46.8 | 0 | 0 |
| Score/MB | 48895 | 685 | 401 | 388 | 257 | 943 | 270 | 72 | 92 | 140 | 383 | 34 | 325 | 193 | 445 | 516 | 129 | 15 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.10 | 2.2.11 | 23.11.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.2M | 136.3M | 113.7M | 51.5M | 196.1M | 112.8M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 19.6M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 109.4M | 104.2M | 82.7M | 33.1M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 18.4M | 195.8M | 109.8M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 33565 | 34299 | 33106 | 32227 | 12098 | 35962 | 697 | 451 | 444 | 434 | 427 | 229 | 184 | 48.8 | 0 | 0 |
| DeltaBlue | 98522 | 36748 | 70019 | 74006 | 12939 | 27445 | 602 | 403 | 410 | 370 | 403 | 332 | 229 | 42.1 | 0 | 0 |
| Crypto | 42979 | 48388 | 42012 | 41802 | 21376 | 23413 | 788 | 422 | 515 | 418 | 371 | 184 | 111 | 74.4 | 0 | 0 |
| RayTrace | 101230 | 100121 | 63195 | 60692 | 28490 | 2590 | 1020 | 714 | 583 | 606 | 572 | 456 | 227 | 134 | 0 | 0 |
| EarleyBoyer | 83033 | 56983 | 70696 | 61945 | 38427 | 25171 | 2252 | 1143 | 999 | 1002 | 979 | 571 | 453 | 141 | 0 | 0 |
| RegExp | 9780 | 17638 | 9900 | 8447 | 8693 | 1025 | 400 | 195 | 175 | 192 | 187 | 199 | 198 | 42.9 | 0 | 0 |
| Splay | 38692 | 33656 | 37290 | 31578 | 22133 | 2714 | 2412 | 1418 | 969 | 1043 | 986 | 1206 | 789 | 170 | 0 | 0 |
| NavierStokes | 38990 | 33984 | 38990 | 30274 | 22090 | 22854 | 1093 | 737 | 750 | 710 | 663 | 512 | 189 | 167 | 0 | 0 |
| Score | 45266 | 40345 | 39774 | 36318 | 18795 | 9946 | 973 | 580 | 537 | 525 | 507 | 381 | 248 | 87.7 | 0 | 0 |
| Score/MB | 861 | 312 | 291 | 319 | 365 | 50 | 8 | 15 | 57 | 12 | 56 | 50 | 12 | 2 | 0 | 0 |
