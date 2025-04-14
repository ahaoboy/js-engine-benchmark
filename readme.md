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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46085<br>94.7M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45868<br>36.2M<br>1265/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39872<br>99.6M<br>400/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 39739<br>53.3M<br>746/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38454<br>118.9M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20077<br>19.4M<br>1034/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18792<br>39.1M<br>480/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9261<br>199.7M<br>46/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1531<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 885<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 850<br>4.7M<br>180/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 838<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 720<br>857K<br>860/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 714<br>1.3M<br>530/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 625<br>2.1M<br>300/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 430<br>45.4M<br>9/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 390<br>685K<br>583/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 346<br>414.5K<br>854/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>121/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
4/14/2025, 1:30:18 AM

### ubuntu
| Engine | bun | jsc | deno | v8 | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.9 | 0 | 2.2.9 | 13.6.0 | 23.11.0 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 94.7M | 36.2M | 99.6M | 53.3M | 118.9M | 19.4M | 39.1M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.4M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7K |
| Exe size | 94.7M | 36.2M | 99.6M | 937.8K | 118.9M | 571K | 39.1M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.4M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7K |
| Dll size | 0 | 0 | 0 | 52.3M | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41670 | 41109 | 31719 | 35214 | 32446 | 23398 | 13221 | 34889 | 1120 | 799 | 695 | 713 | 560 | 597 | 553 | 347 | 245 | 228 | 200 | 89.4 | 60.5 | 0 | 0 |
| DeltaBlue | 52194 | 51903 | 66488 | 94331 | 72320 | 25760 | 12900 | 26784 | 1059 | 731 | 676 | 684 | 590 | 594 | 561 | 313 | 356 | 320 | 253 | 161 | 55.2 | 0 | 0 |
| Crypto | 49390 | 51371 | 41596 | 42623 | 41111 | 31908 | 21124 | 12452 | 1365 | 681 | 761 | 590 | 515 | 542 | 352 | 861 | 190 | 184 | 123 | 315 | 80.3 | 0 | 0 |
| RayTrace | 109962 | 108334 | 66969 | 105892 | 62381 | 35188 | 27204 | 7209 | 1537 | 1189 | 924 | 1090 | 882 | 876 | 714 | 370 | 531 | 477 | 274 | 495 | 165 | 0 | 0 |
| EarleyBoyer | 66041 | 66433 | 76091 | 81911 | 64697 | 7093 | 37926 | 19728 | 3402 | 1983 | 1466 | 1777 | 1319 | 1336 | 1185 | 537 | 520 | 470 | 502 | 320 | 190 | 0 | 0 |
| RegExp | 20638 | 19417 | 10102 | 10274 | 9237 | 7736 | 8628 | 701 | 549 | 197 | 238 | 229 | 229 | 225 | 180 | 53.9 | 212 | 194 | 207 | 92.5 | 49.1 | 0 | 0 |
| Splay | 36704 | 36907 | 36418 | 12739 | 34560 | 19637 | 22125 | 1848 | 3570 | 1769 | 1732 | 1926 | 1692 | 1469 | 1612 | 956 | 1172 | 715 | 964 | 397 | 231 | 0 | 0 |
| NavierStokes | 34429 | 34656 | 38842 | 38694 | 38469 | 36210 | 21919 | 25228 | 1819 | 1150 | 1368 | 986 | 942 | 910 | 874 | 1223 | 470 | 491 | 197 | 828 | 175 | 0 | 0 |
| Score | 46085 | 45868 | 39872 | 39739 | 38454 | 20077 | 18792 | 9261 | 1531 | 885 | 850 | 838 | 720 | 714 | 625 | 430 | 390 | 346 | 276 | 261 | 107 | 0 | 0 |
| Score/MB | 486 | 1265 | 400 | 746 | 323 | 1034 | 480 | 46 | 42 | 74 | 180 | 162 | 860 | 530 | 300 | 9 | 583 | 854 | 20 | 121 | 3 | 0 | 0 |
### macos-arm64
| Engine | bun | jsc | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | llrt | quickjs | primjs | rquickjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.9 | 0 | 2.2.9 | 23.11.0 | 13.6.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 54.4M | 92.4M | 81.2M | 108.7M | 861K | 129.1M | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 1.1M | 1.5M | 1.2M | 38.6M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7K |
| Exe size | 54.4M | 913.2K | 81.2M | 108.7M | 861K | 64.6M | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 1.1M | 1.5M | 1.2M | 38.6M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7K |
| Dll size | 0 | 91.5M | 0 | 0 | 0 | 64.6M | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 50623 | 53038 | 48275 | 42377 | 34285 | 15791 | 37526 | 1373 | 1330 | 1358 | 1165 | 1119 | 824 | 1090 | 549 | 405 | 120 | 337 | 0 | 0 | 0 |
| DeltaBlue | 77021 | 74317 | 103918 | 112275 | 87553 | 17885 | 53595 | 1262 | 1291 | 1250 | 1231 | 1129 | 978 | 1122 | 497 | 605 | 226 | 397 | 0 | 0 | 0 |
| Crypto | 75240 | 77464 | 59937 | 59925 | 38182 | 25543 | 44586 | 1489 | 1237 | 1232 | 1001 | 1326 | 1122 | 1007 | 1537 | 313 | 565 | 201 | 0 | 0 | 0 |
| RayTrace | 188105 | 186403 | 89095 | 74739 | 96791 | 50639 | 6038 | 2572 | 1975 | 1572 | 2050 | 1122 | 1318 | 1492 | 714 | 1019 | 758 | 479 | 0 | 0 | 0 |
| EarleyBoyer | 102986 | 101138 | 103545 | 91396 | 72300 | 50921 | 38045 | 5326 | 3323 | 2649 | 3125 | 1958 | 1939 | 2340 | 1062 | 1125 | 449 | 845 | 0 | 0 | 0 |
| RegExp | 31034 | 33003 | 15500 | 13938 | 11760 | 13105 | 1967 | 740 | 320 | 278 | 312 | 257 | 236 | 283 | 86.6 | 356 | 339 | 289 | 0 | 0 | 0 |
| Splay | 54102 | 50539 | 52423 | 48039 | 43223 | 29728 | 2335 | 4743 | 3643 | 2489 | 2640 | 2393 | 3908 | 2385 | 1744 | 1298 | 569 | 1126 | 0 | 0 | 0 |
| NavierStokes | 33586 | 33357 | 40729 | 39920 | 36470 | 21497 | 36803 | 1622 | 2145 | 2206 | 1567 | 2562 | 2685 | 1727 | 2518 | 779 | 1576 | 278 | 0 | 0 | 0 |
| Score | 65046 | 65041 | 55636 | 51827 | 44314 | 25065 | 15585 | 1941 | 1559 | 1382 | 1362 | 1246 | 1244 | 1223 | 768 | 649 | 447 | 421 | 0 | 0 | 0 |
| Score/MB | 1196 | 703 | 684 | 476 | 52702 | 194 | 80 | 123 | 432 | 335 | 132 | 1167 | 822 | 1036 | 19 | 1548 | 272 | 33 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | mujs | xst | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.9 | 13.6.0 | 0 | 2.2.9 | 23.11.0 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 59.6M | 861K | 89.6M | 90.6M | 111.6M | 19.9M | 64.6M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7K |
| Exe size | 59.6M | 861K | 1016.1K | 90.6M | 111.6M | 569.8K | 64.6M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28803 | 22233 | 29844 | 22985 | 23628 | 25838 | 10043 | 44413 | 494 | 473 | 413 | 458 | 417 | 399 | 250 | 141 | 94 | 145 | 26.4 | 0 | 0 |
| DeltaBlue | 45826 | 81867 | 36266 | 47969 | 39611 | 24891 | 10850 | 53516 | 583 | 538 | 474 | 478 | 468 | 441 | 243 | 197 | 146 | 168 | 23.2 | 0 | 0 |
| Crypto | 42705 | 42594 | 37951 | 34971 | 35275 | 29368 | 15823 | 27872 | 580 | 295 | 269 | 290 | 319 | 262 | 193 | 109 | 192 | 78 | 40 | 0 | 0 |
| RayTrace | 115142 | 107964 | 106558 | 70817 | 54907 | 35928 | 31640 | 11657 | 1112 | 782 | 740 | 505 | 415 | 477 | 342 | 351 | 444 | 243 | 76.6 | 0 | 0 |
| EarleyBoyer | 60215 | 72802 | 59702 | 66100 | 48137 | 6396 | 34423 | 43343 | 1871 | 1192 | 1138 | 856 | 788 | 802 | 570 | 422 | 326 | 398 | 86.7 | 0 | 0 |
| RegExp | 17075 | 8749 | 17330 | 8992 | 7780 | 5845 | 7749 | 1454 | 300 | 90.8 | 90 | 79.9 | 79 | 79.1 | 77.6 | 105 | 133 | 195 | 24.4 | 0 | 0 |
| Splay | 40191 | 43337 | 40102 | 38472 | 11471 | 22097 | 23755 | 3724 | 2397 | 1539 | 1393 | 864 | 804 | 805 | 672 | 612 | 284 | 794 | 146 | 0 | 0 |
| NavierStokes | 34212 | 37842 | 33768 | 37248 | 37842 | 35913 | 25178 | 33390 | 911 | 648 | 579 | 642 | 777 | 591 | 358 | 276 | 519 | 130 | 79.2 | 0 | 0 |
| Score | 41719 | 41468 | 39669 | 35141 | 27144 | 19408 | 17477 | 16700 | 831 | 531 | 488 | 432 | 422 | 401 | 284 | 231 | 229 | 209 | 51 | 0 | 0 |
| Score/MB | 699 | 49318 | 442 | 387 | 243 | 973 | 270 | 85 | 105 | 142 | 40 | 209 | 365 | 325 | 419 | 535 | 139 | 15 | 2 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.9 | 2.2.9 | 23.11.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.1M | 136.1M | 113.7M | 50.5M | 196.1M | 86.6M | 38M | 41.8M | 9M | 8M | 7.5M | 19.6M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 109.3M | 104M | 82.7M | 33.1M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 17.3M | 195.8M | 83.5M | 32.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35366 | 33410 | 33096 | 33360 | 12882 | 35796 | 704 | 451 | 413 | 430 | 374 | 233 | 194 | 49.5 | 0 | 0 |
| DeltaBlue | 96869 | 46223 | 67738 | 72750 | 13105 | 29228 | 618 | 403 | 376 | 397 | 416 | 331 | 235 | 42.3 | 0 | 0 |
| Crypto | 42969 | 46914 | 40372 | 41871 | 21526 | 21133 | 791 | 433 | 416 | 377 | 319 | 185 | 114 | 75.3 | 0 | 0 |
| RayTrace | 100491 | 100934 | 65341 | 54557 | 27694 | 3922 | 998 | 717 | 609 | 547 | 545 | 458 | 235 | 134 | 0 | 0 |
| EarleyBoyer | 82242 | 57791 | 74795 | 62048 | 38201 | 29375 | 2248 | 1110 | 988 | 951 | 885 | 557 | 463 | 144 | 0 | 0 |
| RegExp | 9780 | 16927 | 10011 | 8455 | 8775 | 981 | 406 | 196 | 192 | 186 | 155 | 200 | 199 | 43.3 | 0 | 0 |
| Splay | 39458 | 34568 | 12729 | 10290 | 22858 | 2722 | 2416 | 1423 | 1034 | 985 | 936 | 714 | 866 | 186 | 0 | 0 |
| NavierStokes | 38842 | 34030 | 39029 | 38655 | 21898 | 22386 | 1086 | 742 | 711 | 671 | 727 | 507 | 186 | 166 | 0 | 0 |
| Score | 45458 | 41270 | 34898 | 32204 | 18986 | 10540 | 976 | 581 | 522 | 503 | 473 | 357 | 255 | 89.5 | 0 | 0 |
| Score/MB | 865 | 319 | 256 | 283 | 376 | 53 | 11 | 15 | 12 | 56 | 58 | 47 | 13 | 2 | 0 | 0 |
