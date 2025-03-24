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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45622<br>36.2M<br>1260/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45223<br>95.6M<br>473/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45089<br>53.3M<br>846/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 37158<br>118.9M<br>312/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 34783<br>123.4M<br>281/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20223<br>19.4M<br>1042/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18802<br>38.6M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10203<br>199.7M<br>51/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1533<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 885<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 851<br>4.7M<br>180/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 841<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 716<br>857K<br>855/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 716<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 630<br>2.1M<br>302/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 377<br>45.1M<br>8/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>414.5K<br>921/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.2M<br>121/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>6.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
3/24/2025, 1:27:28 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | node | deno | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs(one) | ladybird | mujs | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.5 | 13.6.0 | 23.10.0 | 2.2.5 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 36.2M | 95.6M | 53.3M | 118.9M | 123.4M | 19.4M | 38.6M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 45.1M | 414.5K | 2.2M | 27M | 454.2K | 6.2K |
| Exe size | 36.2M | 95.6M | 937.8K | 118.9M | 123.4M | 571K | 38.6M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 45.1M | 414.5K | 2.2M | 27M | 454.2K | 6.2K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41303 | 40068 | 35051 | 31136 | 32686 | 23511 | 12786 | 35510 | 1105 | 806 | 693 | 710 | 560 | 591 | 552 | 245 | 290 | 228 | 89.2 | 61 | 277 | 0 |
| DeltaBlue | 52709 | 54911 | 90192 | 71824 | 67897 | 26322 | 13105 | 25541 | 1064 | 714 | 676 | 681 | 596 | 592 | 558 | 366 | 263 | 320 | 160 | 55.3 | 279 | 0 |
| Crypto | 51014 | 49700 | 42741 | 41415 | 41456 | 32160 | 21084 | 16669 | 1362 | 691 | 761 | 591 | 517 | 543 | 359 | 188 | 847 | 184 | 314 | 80.5 | 298 | 0 |
| RayTrace | 100787 | 102562 | 101970 | 56239 | 65489 | 35149 | 27694 | 2345 | 1584 | 1187 | 908 | 1096 | 823 | 883 | 729 | 548 | 324 | 476 | 493 | 165 | 348 | 0 |
| EarleyBoyer | 66875 | 63817 | 81059 | 61496 | 74456 | 7119 | 37399 | 26920 | 3352 | 1985 | 1524 | 1775 | 1313 | 1347 | 1198 | 539 | 424 | 490 | 317 | 194 | 0 | 0 |
| RegExp | 19599 | 20224 | 10253 | 9137 | 9991 | 7878 | 8603 | 1365 | 546 | 198 | 243 | 230 | 236 | 226 | 180 | 211 | 46.9 | 197 | 92.4 | 49.1 | 0 | 0 |
| Splay | 36997 | 35025 | 38553 | 32246 | 12366 | 19652 | 22663 | 3089 | 3561 | 1761 | 1755 | 1972 | 1700 | 1456 | 1644 | 1208 | 747 | 1266 | 414 | 223 | 0 | 0 |
| NavierStokes | 34577 | 34508 | 38694 | 38507 | 38655 | 36285 | 21898 | 29176 | 1845 | 1152 | 1306 | 992 | 924 | 935 | 871 | 484 | 1310 | 481 | 809 | 174 | 0 | 0 |
| Score | 45622 | 45223 | 45089 | 37158 | 34783 | 20223 | 18802 | 10203 | 1533 | 885 | 851 | 841 | 716 | 716 | 630 | 397 | 377 | 373 | 261 | 106 | 0 | 0 |
| Score/MB | 1260 | 473 | 846 | 312 | 281 | 1042 | 486 | 51 | 42 | 74 | 180 | 162 | 855 | 531 | 302 | 593 | 8 | 921 | 121 | 3 | 0 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.2.5 | 23.10.0 | 13.6.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 55.3M | 107.2M | 108.7M | 861K | 128.1M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 42.6M | 429.1K | 1.6M | 575.4K | 17.8M | 6.2K |
| Exe size | 55.3M | 107.2M | 108.7M | 861K | 64M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 42.6M | 429.1K | 1.6M | 575.4K | 554.3K | 6.2K |
| Dll size | 0 | 0 | 0 | 0 | 64M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 52925 | 48230 | 43411 | 33999 | 15808 | 37399 | 1366 | 1333 | 1151 | 1236 | 1037 | 998 | 733 | 458 | 380 | 109 | 216 | 0 | 0 |
| DeltaBlue | 76558 | 98390 | 105293 | 89233 | 17852 | 55215 | 1251 | 1321 | 1248 | 1139 | 1024 | 1016 | 941 | 451 | 534 | 218 | 241 | 0 | 0 |
| Crypto | 74668 | 60306 | 60493 | 38515 | 26090 | 46845 | 1480 | 1189 | 999 | 1142 | 1274 | 926 | 1039 | 1366 | 266 | 548 | 261 | 0 | 0 |
| RayTrace | 184923 | 85617 | 74369 | 97531 | 50121 | 6078 | 2513 | 2095 | 2075 | 1445 | 1190 | 1376 | 1115 | 626 | 904 | 754 | 310 | 0 | 0 |
| EarleyBoyer | 99390 | 105805 | 91978 | 76862 | 50955 | 51380 | 5052 | 3284 | 3065 | 2458 | 2132 | 2175 | 1469 | 818 | 1045 | 449 | 0 | 0 | 0 |
| RegExp | 32126 | 15607 | 13924 | 11772 | 13053 | 2085 | 694 | 316 | 315 | 276 | 281 | 266 | 206 | 74.2 | 356 | 334 | 0 | 0 | 0 |
| Splay | 54520 | 55381 | 44551 | 41748 | 29508 | 3806 | 4384 | 3639 | 3162 | 2279 | 2269 | 2100 | 993 | 1372 | 886 | 570 | 0 | 0 | 0 |
| NavierStokes | 33323 | 40028 | 39178 | 36322 | 19737 | 38545 | 1552 | 2112 | 1585 | 2179 | 2456 | 1633 | 2504 | 1628 | 783 | 1572 | 0 | 0 | 0 |
| Score | 65149 | 55474 | 51028 | 44593 | 24797 | 17607 | 1874 | 1559 | 1396 | 1293 | 1234 | 1125 | 939 | 627 | 579 | 437 | 0 | 0 | 0 |
| Score/MB | 1179 | 517 | 469 | 53034 | 193 | 90 | 119 | 432 | 136 | 313 | 1156 | 953 | 620 | 14 | 1381 | 266 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | quickjs | primjs | xst | mujs | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 13.6.0 | 2.2.5 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 2024.02.14 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 60.7M | 861K | 114M | 111.6M | 19.9M | 64M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K | 6.2K |
| Exe size | 60.7M | 861K | 114M | 111.6M | 569.8K | 64M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K | 6.2K |
| Dll size | 0 | 0 | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28217 | 21058 | 24899 | 22985 | 24443 | 8780 | 43245 | 414 | 464 | 387 | 465 | 406 | 386 | 229 | 94.7 | 136 | 25.3 | 108 | 0 |
| DeltaBlue | 45152 | 69556 | 43830 | 49324 | 22413 | 9329 | 48795 | 494 | 532 | 432 | 484 | 456 | 494 | 248 | 145 | 196 | 21.4 | 125 | 0 |
| Crypto | 41942 | 35566 | 28487 | 33646 | 26427 | 14439 | 22873 | 510 | 295 | 212 | 295 | 277 | 297 | 176 | 183 | 109 | 35 | 137 | 0 |
| RayTrace | 107150 | 87097 | 59569 | 32473 | 35558 | 27722 | 5658 | 1032 | 828 | 734 | 511 | 484 | 387 | 319 | 430 | 335 | 61.8 | 213 | 0 |
| EarleyBoyer | 59477 | 53528 | 56708 | 53491 | 5950 | 33071 | 33186 | 1632 | 1262 | 1063 | 893 | 820 | 719 | 562 | 319 | 406 | 71.6 | 0 | 0 |
| RegExp | 16927 | 7237 | 8438 | 7516 | 5546 | 6371 | 1134 | 289 | 92.9 | 90.2 | 81.7 | 81.6 | 73.8 | 79.8 | 130 | 103 | 20.9 | 0 | 0 |
| Splay | 37222 | 32808 | 35823 | 11083 | 20597 | 19615 | 2808 | 2453 | 1607 | 1433 | 876 | 822 | 690 | 717 | 302 | 446 | 107 | 0 | 0 |
| NavierStokes | 32994 | 31758 | 35913 | 37137 | 35022 | 23035 | 19105 | 898 | 642 | 571 | 652 | 604 | 768 | 365 | 473 | 267 | 67.1 | 0 | 0 |
| Score | 40388 | 34107 | 32145 | 25939 | 18240 | 15374 | 12378 | 760 | 540 | 461 | 440 | 412 | 397 | 280 | 224 | 217 | 43.4 | 0 | 0 |
| Score/MB | 665 | 40563 | 281 | 232 | 915 | 240 | 63 | 96 | 144 | 38 | 213 | 333 | 344 | 413 | 136 | 503 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.5 | 2.2.5 | 23.10.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 127.8M | 135.1M | 113.7M | 50.2M | 196.1M | 112.8M | 38M | 9.3M | 41.8M | 9M | 7.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 108M | 103.1M | 82.7M | 32.9M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 17.3M | 195.8M | 109.8M | 32.3M | 7.8M | 29.1M | 7.3M | 6.9M | 15M | 4.7M | 0 |
| Richards | 35200 | 37219 | 31881 | 33385 | 13023 | 35740 | 689 | 452 | 448 | 424 | 427 | 229 | 49.3 | 0 | 0 |
| DeltaBlue | 90721 | 44411 | 56928 | 77345 | 13052 | 28649 | 622 | 410 | 403 | 377 | 395 | 330 | 42.3 | 0 | 0 |
| Crypto | 41929 | 47424 | 42017 | 37390 | 21051 | 22242 | 783 | 429 | 516 | 418 | 373 | 181 | 76 | 0 | 0 |
| RayTrace | 97309 | 85099 | 64610 | 55943 | 27546 | 4177 | 1008 | 720 | 589 | 596 | 578 | 454 | 135 | 0 | 0 |
| EarleyBoyer | 82378 | 55563 | 74328 | 63875 | 37848 | 27834 | 2249 | 1132 | 991 | 992 | 974 | 554 | 143 | 0 | 0 |
| RegExp | 9770 | 16927 | 9900 | 8413 | 8728 | 937 | 405 | 195 | 176 | 193 | 188 | 202 | 42.9 | 0 | 0 |
| Splay | 39181 | 31953 | 37918 | 10064 | 22361 | 3012 | 2397 | 1434 | 994 | 1034 | 1001 | 1198 | 168 | 0 | 0 |
| NavierStokes | 38990 | 33950 | 38990 | 38732 | 22112 | 22238 | 1091 | 740 | 748 | 711 | 682 | 494 | 165 | 0 | 0 |
| Score | 44728 | 40189 | 39007 | 32115 | 18873 | 10655 | 973 | 583 | 539 | 523 | 510 | 378 | 88.1 | 0 | 0 |
| Score/MB | 851 | 314 | 288 | 282 | 376 | 54 | 8 | 15 | 57 | 12 | 56 | 50 | 2 | 0 | 0 |
