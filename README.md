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


## Engine & Runtime (33/37)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47981<br>98.4M<br>487/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47354<br>37.4M<br>1264/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45269<br>53.3M<br>849/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40980<br>106.5M<br>384/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40041<br>123.1M<br>325/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40017<br>65.2M<br>613/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 39166<br>67.1M<br>583/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38574<br>40.7M<br>948/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19999<br>19.4M<br>1030/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19105<br>39.6M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17004<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16946<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9436<br>199.7M<br>47/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2301<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1546<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 878<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 837<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 828<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 773<br>831.3K<br>952/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 721<br>1.3M<br>535/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 651<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 561<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 502<br>2.1M<br>236/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 404<br>446.6K<br>926/M | ✅unix<br>❌macArm<br>❌macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 396<br>685K<br>591/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 346<br>414.5K<br>854/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 283<br>2.7K<br>107322/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 191<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 106<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |

## bench
8/14/2025, 7:32:23 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | bare | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | qjs(ng) | ladybird | duktape | mujs(pgo) | mujs(one) | mujs | ringo | goja | xst | jint | boa | kiesel | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 13.6.0 | 2.4.4 | 24.5.0 | 0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0 | 0.9.2 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 98.4M | 37.4M | 53.3M | 106.5M | 123.1M | 65.2M | 67.1M | 40.7M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 98.4M | 37.4M | 937.8K | 106.5M | 123.1M | 65.2M | 67.1M | 40.7M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41088 | 41106 | 35157 | 32767 | 31412 | 31535 | 32241 | 31076 | 23289 | 13581 | 12313 | 13376 | 35772 | 9987 | 1119 | 686 | 693 | 699 | 629 | 558 | 597 | 581 | 479 | 286 | 266 | 248 | 229 | 101 | 195 | 90 | 105 | 59 | 60 | 112 | 281 | 0 | 25 |
| DeltaBlue | 55757 | 54065 | 94542 | 76366 | 74396 | 74284 | 73120 | 75983 | 24367 | 12913 | 13072 | 12867 | 38487 | 332 | 1055 | 666 | 659 | 686 | 624 | 540 | 584 | 583 | 467 | 322 | 359 | 358 | 323 | 156 | 249 | 163 | 111 | 55 | 56 | 181 | 284 | 0 | 28 |
| Crypto | 49031 | 52385 | 42694 | 41861 | 41728 | 41070 | 41610 | 41365 | 32420 | 20747 | 17495 | 17458 | 15283 | 7904 | 1371 | 582 | 751 | 587 | 562 | 883 | 547 | 378 | 888 | 793 | 187 | 191 | 184 | 125 | 123 | 326 | 102 | 80 | 62 | 131 | 306 | 0 | 29 |
| RayTrace | 120100 | 121876 | 101082 | 68967 | 67265 | 72075 | 69633 | 62688 | 34335 | 27426 | 28239 | 27010 | 2577 | 1368 | 1551 | 1178 | 908 | 1013 | 953 | 682 | 877 | 712 | 567 | 577 | 527 | 528 | 467 | 431 | 277 | 502 | 261 | 164 | 141 | 427 | 349 | 0 | 87 |
| EarleyBoyer | 68473 | 67467 | 80355 | 74355 | 72099 | 67791 | 73620 | 70902 | 7090 | 38752 | 37153 | 36520 | 22137 | 930 | 3390 | 1906 | 1481 | 1757 | 1422 | 1679 | 1369 | 1231 | 778 | 591 | 566 | 543 | 465 | 573 | 507 | 327 | 290 | 194 | 140 | 513 | 0 | 0 | 79 |
| RegExp | 20820 | 20022 | 10212 | 10203 | 10052 | 10062 | 9981 | 8928 | 7839 | 8667 | 8685 | 8810 | 869 | 786 | 553 | 255 | 227 | 226 | 235 | 116 | 227 | 180 | 63 | 133 | 247 | 224 | 196 | 460 | 212 | 96 | 252 | 49 | 96 | 0 | 0 | 0 | 0 |
| Splay | 36524 | 37709 | 38830 | 37364 | 35783 | 37070 | 28758 | 33957 | 19824 | 24024 | 12476 | 12042 | 2867 | 2003 | 3708 | 2453 | 1814 | 1962 | 1842 | 2115 | 1499 | 1714 | 1226 | 1300 | 1171 | 1155 | 741 | 1022 | 985 | 397 | 469 | 225 | 328 | 949 | 0 | 0 | 58 |
| NavierStokes | 39988 | 34987 | 38584 | 38842 | 38842 | 37508 | 38359 | 37248 | 36766 | 22045 | 21832 | 21623 | 21010 | 14936 | 1868 | 946 | 1266 | 996 | 982 | 1216 | 937 | 935 | 1443 | 934 | 462 | 486 | 479 | 180 | 203 | 818 | 172 | 171 | 120 | 283 | 0 | 0 | 51 |
| Score | 47981 | 47354 | 45269 | 40980 | 40041 | 40017 | 39166 | 38574 | 19999 | 19105 | 17004 | 16946 | 9436 | 2301 | 1546 | 878 | 837 | 828 | 773 | 741 | 721 | 651 | 561 | 502 | 404 | 396 | 346 | 283 | 278 | 266 | 191 | 106 | 106 | 0 | 0 | 0 | 0 |
| Score/MB | 487 | 1264 | 849 | 384 | 325 | 613 | 583 | 948 | 1030 | 482 | 482 | 332 | 47 | 2 | 42 | 71 | 196 | 160 | 952 | 87 | 535 | 330 | 12 | 236 | 926 | 591 | 854 | 107322 | 21 | 127 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 41 | 34 | 46 | 48 | 49 | 50 | 61 | 52 | 59 | 87 | 67 | 80 | 80 | 86 | 103 | 113 | 130 | 141 | 234 | 231 | 87 | 31 | 0 | 421 |
### macos-arm64
| Engine | jsc | bun | deno | dune | node | bare | v8 | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | ladybird | duktape | njs | mujs | xst | goja | ringo | jint | kiesel | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.20 | 2.4.4 | 0.10.0 | 24.5.0 | 0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 2.99.99 | 0.9.2 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 94.2M | 56.8M | 85.6M | 57.4M | 111.5M | 45.5M | 861K | 131.2M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 41.6M | 562.1K | 2.4M | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 914.7K | 56.8M | 85.6M | 57.4M | 111.5M | 45.5M | 861K | 65.6M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 41.6M | 562.1K | 1.8M | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 52060 | 51573 | 46754 | 46613 | 43937 | 41879 | 30264 | 14622 | 14809 | 15056 | 35418 | 19105 | 1370 | 1211 | 1346 | 1077 | 1221 | 1160 | 1034 | 849 | 493 | 722 | 414 | 120 | 330 | 119 | 158 | 110 | 186 | 215 | 0 | 34 |
| DeltaBlue | 74694 | 73371 | 101723 | 108374 | 103422 | 104314 | 86383 | 17078 | 17151 | 15961 | 44980 | 945 | 1247 | 1248 | 1332 | 1188 | 1215 | 1161 | 956 | 792 | 614 | 746 | 608 | 222 | 382 | 189 | 156 | 98 | 195 | 236 | 0 | 40 |
| Crypto | 76509 | 72243 | 59720 | 60051 | 59815 | 56767 | 37779 | 25765 | 21962 | 20156 | 41933 | 11398 | 1476 | 1771 | 1230 | 1036 | 1202 | 1372 | 994 | 1642 | 1313 | 1126 | 306 | 560 | 193 | 106 | 118 | 114 | 103 | 266 | 0 | 44 |
| RayTrace | 186477 | 185811 | 92869 | 88133 | 93313 | 78883 | 93461 | 50689 | 49899 | 38923 | 3192 | 1780 | 2092 | 1523 | 2160 | 2024 | 1593 | 1221 | 1480 | 1082 | 1131 | 689 | 1003 | 754 | 465 | 610 | 352 | 241 | 533 | 317 | 0 | 145 |
| EarleyBoyer | 103107 | 103594 | 100564 | 100007 | 96307 | 78860 | 73088 | 51128 | 46285 | 41855 | 45705 | 1177 | 5257 | 2262 | 3286 | 3115 | 2646 | 2354 | 2263 | 1352 | 1170 | 1620 | 1127 | 438 | 817 | 616 | 390 | 239 | 572 | 0 | 0 | 120 |
| RegExp | 32035 | 30609 | 15213 | 15213 | 14351 | 10476 | 11387 | 12845 | 12328 | 11229 | 1902 | 813 | 735 | 285 | 320 | 317 | 279 | 287 | 282 | 103 | 259 | 180 | 347 | 322 | 296 | 570 | 199 | 139 | 0 | 0 | 0 | 0 |
| Splay | 53722 | 50785 | 50639 | 45896 | 46841 | 41960 | 39531 | 30844 | 16434 | 17325 | 3256 | 1869 | 4433 | 3749 | 3476 | 4054 | 2342 | 2380 | 2184 | 2217 | 1984 | 1208 | 1369 | 550 | 1301 | 847 | 496 | 520 | 838 | 0 | 0 | 94 |
| NavierStokes | 33505 | 39435 | 39326 | 40580 | 38732 | 36025 | 35101 | 21052 | 21158 | 19747 | 36506 | 1689 | 1674 | 4042 | 2139 | 1729 | 2144 | 2397 | 1728 | 1892 | 1559 | 1651 | 768 | 1511 | 318 | 164 | 184 | 222 | 280 | 0 | 0 | 85 |
| Score | 65281 | 65099 | 54718 | 54316 | 53141 | 47151 | 42508 | 24712 | 22017 | 20427 | 14720 | 2402 | 1873 | 1585 | 1571 | 1441 | 1342 | 1311 | 1169 | 956 | 898 | 838 | 650 | 437 | 428 | 303 | 228 | 181 | 0 | 0 | 0 | 0 |
| Score/MB | 692 | 1145 | 639 | 946 | 476 | 1036 | 50554 | 188 | 670 | 440 | 75 | 0 | 119 | 900 | 435 | 137 | 325 | 1375 | 990 | 23 | 1635 | 349 | 1551 | 271 | 33 | 114907 | 3 | 14 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 30 | 36 | 37 | 37 | 39 | 37 | 40 | 62 | 43 | 53 | 54 | 83 | 79 | 109 | 126 | 140 | 91 | 34 | 0 | 281 |
### macos-amd64
| Engine | v8 | bun | jsc | bare | deno | dune | node | ChakraCore | spiderfire | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | njs | llrt | qjs(ng) | rquickjs | quickjs | primjs | duktape | xst | mujs | goja | ringo | jint | kiesel | boa | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.20 | 0 | 0 | 2.4.4 | 0.10.0 | 24.5.0 | 1.13.0.0.beta | 0 | 142.0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.9.2 | 0.6.2.beta | 0.8.0 | 0 | 2025.04.26 | 0 | 2.99.99 | 16.9.1 | 1.3.5 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 861K | 62.5M | 89.6M | 47.1M | 96.4M | 60.4M | 113.7M | 20M | 48.2M | 65.6M | 33.8M | 194.4M | 0 | 7.9M | 3.7M | 7.5M | 12.4M | 2.1M | 1.2M | 1M | 994.6K | 525.7K | 1.6M | 441.8K | 13.1M | 2.7K | 68.9M | 12.9M | 25.3M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 861K | 62.5M | 1016.1K | 47.1M | 96.4M | 60.4M | 113.7M | 571K | 48.2M | 65.6M | 33.8M | 148.8K | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 2.1M | 1.2M | 1M | 994.6K | 525.7K | 1.6M | 441.8K | 13.1M | 2.7K | 68.9M | 12.9M | 25.3M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 5.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 33953 | 23681 | 24252 | 21368 | 25506 | 25477 | 20044 | 23790 | 9443 | 7812 | 7911 | 29498 | 3738 | 376 | 444 | 324 | 311 | 434 | 333 | 336 | 247 | 174 | 75 | 134 | 135 | 36 | 82 | 36 | 21 | 61 | 97 | 0 | 17 |
| DeltaBlue | 71454 | 34474 | 28444 | 53820 | 41059 | 45205 | 45007 | 22031 | 10341 | 8490 | 9071 | 26441 | 126 | 448 | 309 | 368 | 369 | 444 | 364 | 379 | 290 | 160 | 121 | 162 | 162 | 50 | 76 | 41 | 20 | 97 | 110 | 0 | 17 |
| Crypto | 35789 | 36949 | 34662 | 31997 | 25148 | 26738 | 30388 | 24008 | 12743 | 13420 | 10775 | 17085 | 1583 | 477 | 267 | 414 | 203 | 279 | 231 | 269 | 192 | 281 | 147 | 96 | 74 | 55 | 61 | 46 | 37 | 61 | 121 | 0 | 21 |
| RayTrace | 73851 | 93017 | 95903 | 67265 | 49579 | 53279 | 55869 | 34853 | 28137 | 23189 | 24913 | 2270 | 483 | 753 | 753 | 297 | 581 | 467 | 424 | 344 | 349 | 377 | 391 | 305 | 201 | 230 | 172 | 110 | 67 | 238 | 207 | 0 | 57 |
| EarleyBoyer | 54573 | 52228 | 50762 | 57251 | 51683 | 50256 | 51750 | 5852 | 30288 | 27611 | 27451 | 19185 | 369 | 1435 | 1111 | 1002 | 830 | 805 | 718 | 627 | 614 | 349 | 254 | 351 | 366 | 281 | 190 | 101 | 67 | 194 | 0 | 0 | 47 |
| RegExp | 6741 | 13778 | 15638 | 7795 | 7652 | 6199 | 7070 | 4917 | 6735 | 6079 | 4951 | 791 | 232 | 233 | 85 | 72 | 76 | 74 | 74 | 69 | 79 | 67 | 101 | 89 | 170 | 270 | 85 | 42 | 18 | 0 | 0 | 0 | 0 |
| Splay | 29304 | 30673 | 33884 | 35970 | 31032 | 15337 | 5770 | 18532 | 10694 | 17553 | 9526 | 1676 | 491 | 1263 | 1440 | 894 | 1550 | 355 | 680 | 722 | 739 | 668 | 264 | 325 | 411 | 464 | 341 | 207 | 109 | 394 | 0 | 0 | 42 |
| NavierStokes | 29147 | 29828 | 29887 | 34691 | 32370 | 27547 | 27427 | 34064 | 22888 | 22408 | 20357 | 15715 | 4390 | 711 | 578 | 728 | 453 | 534 | 573 | 613 | 358 | 370 | 470 | 230 | 108 | 105 | 94 | 82 | 64 | 135 | 0 | 0 | 31 |
| Score | 34517 | 34144 | 34135 | 32917 | 29132 | 26109 | 23360 | 17284 | 14299 | 13861 | 12252 | 7679 | 712 | 606 | 465 | 403 | 396 | 361 | 354 | 350 | 298 | 254 | 190 | 187 | 176 | 131 | 117 | 69 | 41 | 0 | 0 | 0 | 0 |
| Score/MB | 41051 | 545 | 380 | 698 | 302 | 431 | 205 | 862 | 296 | 211 | 362 | 39 | 0 | 77 | 124 | 53 | 31 | 175 | 286 | 342 | 306 | 494 | 118 | 433 | 13 | 49679 | 1 | 5 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 20 | 27 | 76 | 57 | 88 | 94 | 99 | 96 | 99 | 101 | 108 | 122 | 162 | 141 | 173 | 190 | 238 | 350 | 588 | 173 | 57 | 0 | 642 |
### windows
| Engine | v8 | jsc | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | qjs(ng) | rquickjs | mujs(pgo) | mujs | duktape | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.20 | 24.5.0 | 2.4.4 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 | 0 | 0 | 1.3.5 | 2.7.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 52.6M | 122.8M | 132.7M | 116.3M | 143.1M | 78.7M | 14.4M | 51M | 72.8M | 196.1M | 17.3M | 112.9M | 11.8M | 38.1M | 42.2M | 9M | 8M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.9M | 85.2M | 110.8M | 48.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 1.3M | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 25M | 122.5M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.3M | 109.9M | 6.9M | 32.4M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 35394 | 37145 | 36668 | 32979 | 31754 | 28556 | 24666 | 12846 | 13870 | 35877 | 8940 | 640 | 516 | 451 | 391 | 431 | 384 | 233 | 237 | 208 | 187 | 106 | 55 | 47 | 0 | 0 | 0 | 0 | 21 |
| DeltaBlue | 97874 | 46250 | 45291 | 72326 | 65906 | 73417 | 29165 | 13263 | 12933 | 31441 | 443 | 559 | 469 | 410 | 364 | 403 | 416 | 317 | 350 | 257 | 231 | 118 | 52 | 42 | 0 | 0 | 0 | 0 | 24 |
| Crypto | 43099 | 49583 | 47067 | 40336 | 42230 | 42210 | 33183 | 19283 | 17880 | 20939 | 2200 | 789 | 546 | 423 | 427 | 375 | 321 | 191 | 182 | 316 | 115 | 87 | 59 | 75 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 102932 | 105226 | 94275 | 67191 | 68597 | 66747 | 50171 | 28239 | 27426 | 2440 | 1373 | 1008 | 554 | 706 | 553 | 575 | 555 | 471 | 486 | 438 | 231 | 269 | 132 | 134 | 0 | 0 | 0 | 0 | 75 |
| EarleyBoyer | 82793 | 62568 | 58507 | 72413 | 74228 | 73028 | 42319 | 38846 | 37001 | 29279 | 1733 | 2252 | 1015 | 1085 | 1014 | 979 | 897 | 567 | 597 | 525 | 460 | 302 | 127 | 148 | 0 | 0 | 0 | 0 | 71 |
| RegExp | 9709 | 19131 | 17529 | 9890 | 9790 | 9799 | 10112 | 8586 | 8919 | 1001 | 1094 | 405 | 187 | 198 | 186 | 187 | 155 | 258 | 203 | 110 | 199 | 274 | 91 | 43 | 0 | 0 | 0 | 0 | 0 |
| Splay | 39026 | 35766 | 33061 | 34813 | 33574 | 28954 | 18707 | 24252 | 15475 | 3097 | 6269 | 2391 | 1062 | 1483 | 1336 | 1002 | 945 | 1190 | 1197 | 1019 | 928 | 561 | 332 | 175 | 0 | 0 | 0 | 0 | 57 |
| NavierStokes | 38990 | 34280 | 34132 | 39099 | 39029 | 38990 | 36952 | 22467 | 22171 | 24338 | 3484 | 1103 | 1040 | 738 | 722 | 678 | 728 | 475 | 475 | 1065 | 195 | 151 | 114 | 165 | 0 | 0 | 0 | 0 | 49 |
| Score | 45631 | 43640 | 41339 | 39805 | 39371 | 38445 | 27776 | 18983 | 17774 | 10306 | 2172 | 954 | 593 | 581 | 529 | 511 | 478 | 391 | 387 | 383 | 257 | 195 | 100 | 88 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 868 | 355 | 311 | 342 | 275 | 488 | 1928 | 371 | 244 | 52 | 125 | 8 | 50 | 15 | 12 | 57 | 59 | 51 | 51 | 50 | 13 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 36 | 42 | 58 | 61 | 61 | 63 | 68 | 78 | 82 | 84 | 121 | 148 | 246 | 274 | 0 | 131 | 0 | 96 | 457 |
