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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46947<br>94.8M<br>495/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46892<br>36.2M<br>1293/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45680<br>53.3M<br>857/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 37188<br>118.9M<br>312/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 35825<br>100.1M<br>358/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19967<br>19.4M<br>1028/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18723<br>38.8M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11158<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1542<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 893<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 855<br>4.7M<br>181/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 769<br>857K<br>918/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 718<br>1.3M<br>533/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 632<br>2.1M<br>303/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 482<br>45.4M<br>10/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 399<br>685K<br>596/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 379<br>414.5K<br>936/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 281<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 256<br>2.1M<br>119/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.1K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
4/28/2025, 1:31:28 AM

### ubuntu
| Engine | bun | jsc | v8 | node | deno | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.10 | 0 | 13.6.0 | 23.11.0 | 2.2.12 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 94.8M | 36.2M | 53.3M | 118.9M | 100.1M | 19.4M | 38.8M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.4M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7.1K |
| Exe size | 94.8M | 36.2M | 937.8K | 118.9M | 100.1M | 571K | 38.8M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.4M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7.1K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41568 | 40290 | 34829 | 33050 | 38631 | 23465 | 12585 | 35531 | 1131 | 798 | 683 | 712 | 591 | 584 | 537 | 432 | 244 | 225 | 205 | 89.2 | 60.5 | 0 | 0 |
| DeltaBlue | 52465 | 57106 | 96036 | 74105 | 66541 | 25516 | 12886 | 39320 | 1066 | 724 | 676 | 684 | 623 | 593 | 565 | 381 | 358 | 324 | 255 | 160 | 55.5 | 0 | 0 |
| Crypto | 49803 | 51929 | 42659 | 41073 | 41722 | 31496 | 21024 | 29377 | 1370 | 691 | 755 | 590 | 573 | 542 | 357 | 722 | 192 | 183 | 124 | 310 | 80.6 | 0 | 0 |
| RayTrace | 118546 | 109814 | 106262 | 58385 | 67487 | 33374 | 27352 | 5063 | 1551 | 1220 | 904 | 1073 | 945 | 886 | 717 | 489 | 516 | 492 | 278 | 488 | 166 | 0 | 0 |
| EarleyBoyer | 66875 | 66079 | 82082 | 53707 | 73530 | 7127 | 37905 | 20035 | 3336 | 1997 | 1541 | 1777 | 1413 | 1374 | 1209 | 632 | 541 | 509 | 513 | 318 | 200 | 0 | 0 |
| RegExp | 21253 | 20315 | 10193 | 9173 | 10173 | 7795 | 8784 | 879 | 556 | 197 | 245 | 225 | 236 | 229 | 181 | 62.5 | 220 | 203 | 212 | 92.5 | 49 | 0 | 0 |
| Splay | 37364 | 38374 | 38814 | 32759 | 12916 | 19848 | 22255 | 2016 | 3672 | 1832 | 1771 | 1952 | 1825 | 1456 | 1674 | 1056 | 1291 | 1293 | 990 | 367 | 225 | 0 | 0 |
| NavierStokes | 34508 | 34587 | 38507 | 38584 | 38803 | 36397 | 21854 | 32583 | 1836 | 1151 | 1356 | 977 | 1007 | 927 | 902 | 1209 | 486 | 486 | 203 | 800 | 175 | 0 | 0 |
| Score | 46947 | 46892 | 45680 | 37188 | 35825 | 19967 | 18723 | 11158 | 1542 | 893 | 855 | 834 | 769 | 718 | 632 | 482 | 399 | 379 | 281 | 256 | 107 | 0 | 0 |
| Score/MB | 495 | 1293 | 857 | 312 | 358 | 1028 | 482 | 55 | 42 | 75 | 181 | 161 | 918 | 533 | 303 | 10 | 596 | 936 | 21 | 119 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.10 | 2.2.12 | 23.11.0 | 13.6.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54.4M | 81.6M | 108.7M | 861K | 128.5M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 38.5M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7.1K |
| Exe size | 913.2K | 54.4M | 81.6M | 108.7M | 861K | 64.3M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 38.5M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7.1K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 64.3M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 49416 | 52113 | 47622 | 43047 | 31398 | 15370 | 33766 | 1374 | 1324 | 1183 | 1312 | 1083 | 970 | 772 | 681 | 409 | 119 | 331 | 0 | 0 | 0 |
| DeltaBlue | 74885 | 73464 | 93921 | 98681 | 84267 | 17574 | 48345 | 1251 | 1262 | 1243 | 1089 | 1109 | 872 | 928 | 637 | 604 | 222 | 396 | 0 | 0 | 0 |
| Crypto | 75688 | 72359 | 60104 | 59761 | 36004 | 26308 | 43830 | 1482 | 1165 | 955 | 1198 | 1343 | 917 | 1033 | 1672 | 312 | 560 | 190 | 0 | 0 | 0 |
| RayTrace | 191139 | 186477 | 91759 | 68893 | 91759 | 51429 | 5194 | 2567 | 2115 | 2056 | 1566 | 1272 | 1458 | 1208 | 946 | 1015 | 756 | 431 | 0 | 0 | 0 |
| EarleyBoyer | 102340 | 103090 | 104538 | 90230 | 75139 | 49133 | 50903 | 5270 | 3197 | 3124 | 2582 | 2364 | 2148 | 1776 | 1107 | 1081 | 451 | 755 | 0 | 0 | 0 |
| RegExp | 33855 | 31853 | 15244 | 13715 | 11934 | 13209 | 1932 | 738 | 308 | 317 | 279 | 289 | 238 | 188 | 105 | 339 | 339 | 299 | 0 | 0 | 0 |
| Splay | 50832 | 50247 | 55577 | 47794 | 40395 | 30176 | 3339 | 4795 | 3452 | 3151 | 2412 | 2578 | 1911 | 921 | 1893 | 1052 | 515 | 1328 | 0 | 0 | 0 |
| NavierStokes | 33687 | 32648 | 40540 | 40136 | 36285 | 21390 | 39435 | 1631 | 2090 | 1658 | 2143 | 2490 | 1555 | 2561 | 1933 | 791 | 1549 | 332 | 0 | 0 | 0 |
| Score | 64974 | 63908 | 55387 | 50382 | 42907 | 25011 | 16228 | 1938 | 1525 | 1402 | 1334 | 1316 | 1070 | 957 | 857 | 627 | 439 | 425 | 0 | 0 | 0 |
| Score/MB | 703 | 1174 | 678 | 463 | 51029 | 194 | 83 | 123 | 422 | 136 | 323 | 1233 | 906 | 632 | 22 | 1496 | 267 | 33 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | xst | mujs | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.10 | 0 | 2.2.12 | 23.11.0 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 16.8.1 | 1.3.5 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 59.7M | 89.6M | 91.1M | 111.6M | 19.9M | 64.3M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7.1K |
| Exe size | 861K | 59.7M | 1016.1K | 91.1M | 111.6M | 569.8K | 64.3M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7.1K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22318 | 28450 | 28633 | 30667 | 23084 | 24493 | 9006 | 43880 | 500 | 466 | 416 | 440 | 429 | 388 | 237 | 93.6 | 136 | 140 | 26 | 0 | 0 |
| DeltaBlue | 81530 | 42018 | 38527 | 49417 | 49648 | 22993 | 10585 | 46144 | 564 | 519 | 442 | 497 | 458 | 369 | 281 | 145 | 192 | 152 | 22.7 | 0 | 0 |
| Crypto | 41758 | 41337 | 38192 | 34409 | 34716 | 24961 | 16086 | 25108 | 569 | 292 | 271 | 325 | 282 | 263 | 193 | 188 | 107 | 75.4 | 39.5 | 0 | 0 |
| RayTrace | 104338 | 107446 | 104930 | 66821 | 54463 | 33784 | 29910 | 3751 | 1086 | 767 | 773 | 426 | 434 | 468 | 343 | 447 | 326 | 214 | 76.6 | 0 | 0 |
| EarleyBoyer | 67425 | 58865 | 58874 | 64956 | 51545 | 5977 | 33598 | 38950 | 1822 | 1133 | 1171 | 826 | 842 | 767 | 584 | 323 | 394 | 391 | 86 | 0 | 0 |
| RegExp | 8693 | 15547 | 17183 | 8569 | 7847 | 4785 | 7757 | 1224 | 292 | 89.7 | 91.8 | 81.9 | 73 | 78.8 | 77.8 | 130 | 101 | 186 | 23.4 | 0 | 0 |
| Splay | 40493 | 38651 | 34862 | 12568 | 12463 | 18050 | 22695 | 2025 | 2414 | 1345 | 1403 | 888 | 834 | 822 | 666 | 286 | 368 | 323 | 142 | 0 | 0 |
| NavierStokes | 36545 | 32796 | 32846 | 36730 | 36618 | 33060 | 23596 | 26415 | 897 | 649 | 589 | 799 | 638 | 551 | 358 | 502 | 273 | 119 | 77.2 | 0 | 0 |
| Score | 40241 | 39691 | 38786 | 31189 | 28200 | 17322 | 16818 | 12187 | 818 | 513 | 492 | 442 | 409 | 385 | 288 | 226 | 209 | 177 | 50 | 0 | 0 |
| Score/MB | 47858 | 665 | 432 | 342 | 252 | 869 | 261 | 62 | 104 | 137 | 40 | 383 | 198 | 312 | 425 | 137 | 484 | 13 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.10 | 2.2.12 | 23.11.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.2M | 136.3M | 113.7M | 50.3M | 196.1M | 139.1M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 109.4M | 104.3M | 82.7M | 33.1M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 17.3M | 195.8M | 136M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 32005 | 36661 | 33202 | 32467 | 12995 | 35779 | 702 | 448 | 444 | 430 | 423 | 233 | 199 | 49.7 | 0 | 0 |
| DeltaBlue | 98364 | 41952 | 65219 | 73391 | 13217 | 32986 | 622 | 410 | 403 | 377 | 403 | 337 | 238 | 42.2 | 0 | 0 |
| Crypto | 42458 | 39409 | 38165 | 41783 | 20585 | 20103 | 778 | 430 | 492 | 419 | 368 | 178 | 113 | 76 | 0 | 0 |
| RayTrace | 101156 | 95385 | 65415 | 60618 | 28194 | 4216 | 1012 | 747 | 583 | 615 | 592 | 459 | 233 | 134 | 0 | 0 |
| EarleyBoyer | 82358 | 56896 | 75817 | 62033 | 37395 | 24224 | 2235 | 1137 | 975 | 1002 | 993 | 573 | 460 | 142 | 0 | 0 |
| RegExp | 9780 | 17109 | 9931 | 8495 | 8928 | 1117 | 406 | 197 | 173 | 192 | 188 | 200 | 196 | 42.9 | 0 | 0 |
| Splay | 40509 | 33492 | 12683 | 9922 | 23111 | 3170 | 2446 | 1451 | 994 | 1050 | 1009 | 611 | 888 | 171 | 0 | 0 |
| NavierStokes | 38951 | 34064 | 39060 | 38694 | 22067 | 22683 | 1094 | 740 | 747 | 713 | 655 | 506 | 195 | 167 | 0 | 0 |
| Score | 45122 | 39898 | 34520 | 32422 | 18998 | 10868 | 978 | 587 | 532 | 528 | 510 | 350 | 258 | 88.3 | 0 | 0 |
| Score/MB | 859 | 308 | 253 | 285 | 377 | 55 | 7 | 15 | 57 | 12 | 56 | 46 | 13 | 2 | 0 | 0 |
