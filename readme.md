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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46229<br>36.2M<br>1277/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45963<br>95.6M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45612<br>53.3M<br>856/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40081<br>122.2M<br>328/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 33194<br>118.9M<br>279/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19928<br>19.4M<br>1026/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18612<br>38.7M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12320<br>199.7M<br>61/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 893<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 861<br>4.7M<br>182/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 836<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 729<br>857K<br>871/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 723<br>1.3M<br>537/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 629<br>2.1M<br>302/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 381<br>45.1M<br>8/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>414.5K<br>921/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 260<br>2.2M<br>120/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 108<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>6.1K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
3/19/2025, 3:11:43 PM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs(one) | ladybird | mujs | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.5 | 13.6.0 | 2.2.4 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 36.2M | 95.6M | 53.3M | 122.2M | 118.9M | 19.4M | 38.7M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 45.1M | 414.5K | 2.2M | 27M | 454.2K | 6.1K |
| Exe size | 36.2M | 95.6M | 937.8K | 122.2M | 118.9M | 571K | 38.7M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 45.1M | 414.5K | 2.2M | 27M | 454.2K | 6.1K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42055 | 41084 | 35161 | 33089 | 32301 | 23543 | 12557 | 35690 | 1118 | 802 | 698 | 683 | 560 | 585 | 549 | 240 | 302 | 227 | 88.6 | 61.1 | 273 | 0 |
| DeltaBlue | 51301 | 52174 | 97405 | 69093 | 73874 | 25405 | 12966 | 38289 | 1056 | 732 | 676 | 691 | 600 | 581 | 555 | 355 | 268 | 324 | 159 | 55.4 | 283 | 0 |
| Crypto | 51627 | 50226 | 42533 | 41266 | 41033 | 32081 | 20817 | 29304 | 1372 | 693 | 765 | 589 | 520 | 552 | 355 | 189 | 846 | 183 | 313 | 81 | 284 | 0 |
| RayTrace | 104264 | 105522 | 105966 | 66747 | 61123 | 33192 | 26761 | 4765 | 1565 | 1196 | 920 | 1077 | 864 | 875 | 690 | 550 | 328 | 474 | 488 | 167 | 348 | 0 |
| EarleyBoyer | 67328 | 66180 | 79167 | 72748 | 60626 | 7112 | 37019 | 31296 | 3389 | 2002 | 1529 | 1768 | 1356 | 1371 | 1190 | 556 | 411 | 492 | 319 | 196 | 0 | 0 |
| RegExp | 20073 | 20953 | 10323 | 9961 | 9056 | 7780 | 8577 | 1349 | 550 | 197 | 249 | 228 | 234 | 229 | 181 | 217 | 46.9 | 198 | 93 | 49.1 | 0 | 0 |
| Splay | 38390 | 36883 | 38456 | 37576 | 11637 | 19389 | 22785 | 2210 | 3626 | 1822 | 1775 | 2009 | 1791 | 1502 | 1659 | 1115 | 811 | 1215 | 402 | 234 | 0 | 0 |
| NavierStokes | 34622 | 34280 | 38617 | 38842 | 38545 | 36397 | 21941 | 29799 | 1827 | 1160 | 1354 | 985 | 931 | 964 | 915 | 484 | 1256 | 495 | 814 | 175 | 0 | 0 |
| Score | 46229 | 45963 | 45612 | 40081 | 33194 | 19928 | 18612 | 12320 | 1538 | 893 | 861 | 836 | 729 | 723 | 629 | 393 | 381 | 373 | 260 | 108 | 0 | 0 |
| Score/MB | 1277 | 481 | 856 | 328 | 279 | 1026 | 481 | 61 | 42 | 75 | 182 | 161 | 871 | 537 | 302 | 587 | 8 | 921 | 120 | 4 | 0 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | ladybird | mujs | xst | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.2.4 | 23.10.0 | 13.6.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 55.3M | 105.8M | 108.7M | 861K | 128.1M | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 1.1M | 1.2M | 1.5M | 42.6M | 429.1K | 1.6M | 575.4K | 17.8M | 6.1K |
| Exe size | 55.3M | 105.8M | 108.7M | 861K | 64M | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 1.1M | 1.2M | 1.5M | 42.6M | 429.1K | 1.6M | 575.4K | 554.3K | 6.1K |
| Dll size | 0 | 0 | 0 | 0 | 64M | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 51287 | 48085 | 41494 | 33547 | 15328 | 37522 | 955 | 1324 | 1354 | 1002 | 1121 | 1116 | 772 | 448 | 351 | 112 | 215 | 0 | 0 |
| DeltaBlue | 74826 | 99124 | 99547 | 85424 | 17700 | 54964 | 1164 | 1321 | 1233 | 1164 | 1160 | 1142 | 892 | 452 | 543 | 216 | 241 | 0 | 0 |
| Crypto | 71600 | 58922 | 58597 | 36530 | 26497 | 45203 | 1336 | 1157 | 1232 | 933 | 1342 | 1004 | 1033 | 1348 | 257 | 543 | 272 | 0 | 0 |
| RayTrace | 180039 | 85839 | 68375 | 89983 | 49653 | 4087 | 2276 | 2044 | 1603 | 2001 | 1093 | 1402 | 1218 | 609 | 849 | 747 | 335 | 0 | 0 |
| EarleyBoyer | 104140 | 100675 | 89289 | 72476 | 50842 | 48299 | 4886 | 2783 | 2666 | 2990 | 2301 | 2293 | 2033 | 811 | 920 | 399 | 0 | 0 | 0 |
| RegExp | 31730 | 14211 | 13221 | 10445 | 13183 | 1714 | 692 | 286 | 274 | 279 | 275 | 275 | 208 | 79.1 | 310 | 334 | 0 | 0 | 0 |
| Splay | 49995 | 50940 | 46711 | 39491 | 28717 | 2486 | 4401 | 2507 | 2526 | 2594 | 2074 | 2163 | 413 | 1430 | 892 | 568 | 0 | 0 | 0 |
| NavierStokes | 31842 | 36803 | 39099 | 34212 | 21454 | 21031 | 1528 | 1813 | 2195 | 1569 | 2395 | 1727 | 2644 | 1682 | 676 | 1560 | 0 | 0 | 0 |
| Score | 63375 | 53251 | 49437 | 41974 | 24892 | 14195 | 1721 | 1403 | 1382 | 1284 | 1251 | 1197 | 891 | 633 | 539 | 430 | 0 | 0 | 0 |
| Score/MB | 1146 | 503 | 454 | 49919 | 194 | 73 | 109 | 389 | 335 | 125 | 1172 | 1014 | 589 | 14 | 1286 | 261 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | rquickjs | llrt | quickjs | mujs | primjs | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 13.6.0 | 2.2.4 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0 | 0.5.1.beta | 2024.02.14 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 60.7M | 861K | 113M | 111.6M | 19.9M | 64M | 194.4M | 7.9M | 3.7M | 2.1M | 1.2M | 12.1M | 1.2M | 441.8K | 693.4K | 1.6M | 25.3M | 570.8K | 6.1K |
| Exe size | 60.7M | 861K | 113M | 111.6M | 569.8K | 64M | 148.8K | 7.9M | 3.7M | 2.1M | 1.2M | 12.1M | 1.2M | 441.8K | 693.4K | 1.6M | 25.3M | 570.8K | 6.1K |
| Dll size | 0 | 0 | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 27896 | 19744 | 29343 | 19575 | 21630 | 8035 | 37787 | 468 | 475 | 463 | 362 | 247 | 235 | 144 | 195 | 82.2 | 25.3 | 98.6 | 0 |
| DeltaBlue | 42997 | 61166 | 33456 | 41152 | 17269 | 9144 | 25793 | 522 | 526 | 455 | 359 | 364 | 300 | 197 | 197 | 123 | 19.6 | 109 | 0 |
| Crypto | 37875 | 27223 | 26806 | 29681 | 21689 | 13850 | 14235 | 552 | 301 | 297 | 249 | 201 | 228 | 108 | 152 | 137 | 35.3 | 119 | 0 |
| RayTrace | 98345 | 85247 | 58992 | 53057 | 27306 | 25234 | 3784 | 1070 | 832 | 512 | 430 | 444 | 251 | 312 | 221 | 379 | 59.8 | 173 | 0 |
| EarleyBoyer | 49186 | 59222 | 60208 | 43496 | 4629 | 27556 | 17380 | 1625 | 1239 | 890 | 718 | 724 | 404 | 406 | 419 | 280 | 76.6 | 0 | 0 |
| RegExp | 13456 | 7223 | 7819 | 6339 | 3676 | 6224 | 919 | 255 | 92.6 | 81.7 | 79.7 | 63.4 | 57.3 | 103 | 60.3 | 117 | 21.2 | 0 | 0 |
| Splay | 31456 | 35424 | 19998 | 9264 | 17129 | 17472 | 1429 | 2180 | 1579 | 896 | 862 | 981 | 594 | 485 | 501 | 172 | 111 | 0 | 0 |
| NavierStokes | 31102 | 32075 | 31367 | 34429 | 30719 | 21497 | 20968 | 768 | 630 | 649 | 596 | 390 | 607 | 266 | 304 | 475 | 69.8 | 0 | 0 |
| Score | 36113 | 32868 | 28685 | 24040 | 14525 | 14201 | 8415 | 750 | 539 | 438 | 377 | 330 | 276 | 218 | 217 | 185 | 43.6 | 0 | 0 |
| Score/MB | 595 | 39090 | 253 | 215 | 728 | 221 | 43 | 95 | 144 | 212 | 305 | 27 | 239 | 505 | 320 | 112 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.5 | 2.2.4 | 23.10.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 127.8M | 134.7M | 113.7M | 51.3M | 196.1M | 112.8M | 38M | 9.3M | 41.8M | 9M | 7.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 108M | 102.6M | 82.7M | 32.9M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 18.4M | 195.8M | 109.8M | 32.3M | 7.8M | 29.1M | 7.3M | 6.9M | 15M | 4.7M | 0 |
| Richards | 34818 | 36668 | 32736 | 32803 | 12776 | 35605 | 685 | 451 | 441 | 420 | 424 | 233 | 48.1 | 0 | 0 |
| DeltaBlue | 94893 | 44921 | 67705 | 72723 | 12867 | 30864 | 619 | 397 | 403 | 374 | 396 | 331 | 41.7 | 0 | 0 |
| Crypto | 42807 | 48348 | 40752 | 41335 | 21106 | 19452 | 787 | 426 | 502 | 417 | 375 | 183 | 73.4 | 0 | 0 |
| RayTrace | 97679 | 87467 | 63861 | 57645 | 27972 | 2664 | 989 | 717 | 585 | 604 | 574 | 463 | 133 | 0 | 0 |
| EarleyBoyer | 79301 | 52157 | 69735 | 60186 | 38438 | 28860 | 2255 | 1124 | 979 | 980 | 976 | 566 | 141 | 0 | 0 |
| RegExp | 9565 | 16349 | 9890 | 8166 | 8693 | 1060 | 402 | 195 | 174 | 180 | 187 | 198 | 42.8 | 0 | 0 |
| Splay | 35766 | 31643 | 34560 | 9518 | 21204 | 2384 | 2483 | 1319 | 969 | 970 | 969 | 566 | 157 | 0 | 0 |
| NavierStokes | 37508 | 33390 | 38694 | 37804 | 21602 | 25822 | 1080 | 740 | 746 | 708 | 685 | 500 | 165 | 0 | 0 |
| Score | 44004 | 39784 | 38971 | 31643 | 18684 | 10087 | 973 | 573 | 532 | 513 | 507 | 346 | 86.3 | 0 | 0 |
| Score/MB | 837 | 311 | 289 | 278 | 364 | 51 | 8 | 15 | 57 | 12 | 56 | 46 | 2 | 0 | 0 |
