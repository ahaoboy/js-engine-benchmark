fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

https://ahaoboy.github.io/js-engine-benchmark/

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


## Engine & Runtime (35/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47303<br>57.2M<br>826/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45986<br>36.4M<br>1262/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45822<br>98.6M<br>464/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40320<br>65.3M<br>617/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39071<br>106.3M<br>367/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 38913<br>66.3M<br>586/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38711<br>123.3M<br>314/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37895<br>40.7M<br>932/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19447<br>19.4M<br>1002/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19120<br>40.1M<br>476/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17173<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17032<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10363<br>199.7M<br>51/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2332<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1496<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 838<br>12.3M<br>68/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 806<br>4.3M<br>188/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 805<br>5.2M<br>155/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 750<br>1.4M<br>539/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 744<br>831.3K<br>916/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 739<br>1.4M<br>525/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 634<br>2M<br>321/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 523<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 471<br>2.1M<br>221/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 358<br>685K<br>535/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 337<br>446.6K<br>772/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 312<br>414.5K<br>770/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 274<br>2.7K<br>103909/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 266<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 254<br>2.1M<br>122/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 183<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/28/2025, 1:49:21 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | primjs | rquickjs-pgo | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.21 |  | 2.4.5 | 0.10.1 | 24.7.0 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.2M | 36.4M | 98.6M | 65.3M | 106.3M | 66.3M | 123.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.6M | 65.3M | 106.3M | 66.3M | 123.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.2M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 36569 | 39581 | 40237 | 31849 | 32330 | 32379 | 31973 | 32587 | 23501 | 12977 | 14156 | 13125 | 36001 | 11897 | 1100 | 681 | 643 | 698 | 577 | 628 | 567 | 564 | 581 | 476 | 339 | 297 | 242 | 267 | 227 | 128 | 191 | 90 | 100 | 59 | 59 | 277 | 27 |  | 112 |  |
| DeltaBlue | 107898 | 53410 | 55552 | 73589 | 71804 | 74588 | 73569 | 76948 | 23498 | 13508 | 12999 | 12695 | 22474 | 502 | 1052 | 653 | 658 | 653 | 575 | 617 | 572 | 536 | 576 | 461 | 386 | 324 | 354 | 355 | 319 | 102 | 244 | 164 | 110 | 54 | 54 | 286 | 31 |  | 171 |  |
| Crypto | 40548 | 51831 | 48227 | 41551 | 41369 | 41678 | 41107 | 41443 | 31894 | 20378 | 17738 | 17905 | 17019 | 9401 | 1366 | 585 | 745 | 584 | 562 | 554 | 532 | 879 | 378 | 803 | 414 | 785 | 189 | 189 | 183 | 127 | 122 | 317 | 96 | 80 | 61 | 296 | 31 |  | 134 |  |
| RayTrace | 109000 | 112700 | 105670 | 68745 | 65119 | 67783 | 63639 | 55869 | 33192 | 27990 | 27306 | 28046 | 4292 | 1227 | 1575 | 1070 | 914 | 1076 | 912 | 943 | 906 | 679 | 686 | 549 | 448 | 583 | 348 | 373 | 296 | 481 | 268 | 490 | 248 | 162 | 139 | 351 | 87 |  | 427 |  |
| EarleyBoyer | 86086 | 63911 | 64155 | 69655 | 72281 | 72478 | 69941 | 69035 | 7032 | 40578 | 36327 | 36661 | 22690 | 717 | 3374 | 1776 | 1336 | 1610 | 1310 | 1315 | 1275 | 1668 | 1164 | 731 | 847 | 534 | 378 | 383 | 345 | 568 | 489 | 317 | 284 | 180 | 133 |  | 77 |  | 505 |  |
| RegExp | 10515 | 19021 | 20093 | 10102 | 9770 | 10001 | 9738 | 8983 | 7357 | 8974 | 8874 | 8766 | 1184 | 659 | 541 | 247 | 221 | 226 | 221 | 228 | 220 | 115 | 178 | 64 | 180 | 130 | 205 | 223 | 185 | 444 | 205 | 95 | 247 | 48 | 91 |  |  |  |  |  |
| Splay | 40966 | 33191 | 33191 | 38170 | 31749 | 27397 | 31097 | 30763 | 18376 | 22035 | 11899 | 11957 | 2653 | 1833 | 3007 | 2092 | 1641 | 1714 | 2098 | 1649 | 2084 | 2066 | 1550 | 848 | 1250 | 839 | 1289 | 602 | 746 | 903 | 827 | 323 | 423 | 205 | 339 |  | 83 |  | 785 |  |
| NavierStokes | 38765 | 40136 | 39880 | 38842 | 38732 | 38803 | 38694 | 38397 | 36803 | 22260 | 22127 | 22024 | 31578 | 14662 | 1833 | 949 | 1274 | 984 | 965 | 942 | 976 | 1215 | 932 | 1443 | 663 | 940 | 481 | 479 | 478 | 174 | 197 | 777 | 162 | 177 | 119 |  | 51 |  | 273 |  |
| Score | 47303 | 45986 | 45822 | 40320 | 39071 | 38913 | 38711 | 37895 | 19447 | 19120 | 17173 | 17032 | 10363 | 2332 | 1496 | 838 | 806 | 805 | 750 | 744 | 739 | 737 | 634 | 523 | 485 | 471 | 358 | 337 | 312 | 274 | 266 | 254 | 183 | 104 | 104 |  |  |  |  |  |
| Score/MB | 826 | 1262 | 464 | 617 | 367 | 586 | 314 | 932 | 1002 | 476 | 336 | 483 | 51 | 2 | 41 | 68 | 188 | 155 | 539 | 916 | 525 | 87 | 321 | 11 |  | 221 | 535 | 772 | 770 | 103909 | 20 | 122 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 44 | 34 | 48 | 50 | 51 | 52 | 52 | 53 | 62 | 59 | 88 | 63 | 70 | 86 | 84 | 93 | 103 | 115 | 134 | 145 | 241 | 238 | 31 | 407 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | deno | bare | dune | bun | node | spiderfire | spidermonkey | mozjs | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.134 | 2.4.5 |  | 0.10.1 | 1.2.21 | 24.7.0 |  | 143.0 |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  |  | 0.9.2 | 2.99.99 |  | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.2M | 85.5M | 45.6M | 56.8M | 56.8M | 111.7M | 46.3M | 132.3M | 32.8M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 41.4M | 2.4M | 562.1K | 0 | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.2M | 85.5M | 45.6M | 56.8M | 56.8M | 111.7M | 46.3M | 66.2M | 32.8M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 41.4M | 1.8M | 562.1K | 0 | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 45840 | 38154 | 44541 | 41321 | 42214 | 41074 | 35553 | 15077 | 12352 | 13259 | 35937 | 542 | 1270 | 897 | 1179 | 781 | 1237 | 883 | 846 | 791 | 704 | 496 | 563 | 368 | 106 | 174 | 284 | 108 | 68 | 38 | 176 | 27 |  | 180 |
| DeltaBlue | 62746 | 82707 | 97412 | 102542 | 79639 | 50521 | 87382 | 16668 | 14374 | 14658 | 42276 | 740 | 1159 | 1039 | 1200 | 883 | 1093 | 889 | 804 | 747 | 696 | 564 | 620 | 549 | 209 | 202 | 340 | 129 | 65 | 40 | 194 | 35 |  | 209 |
| Crypto | 58077 | 49723 | 57964 | 58528 | 54580 | 54507 | 46762 | 21087 | 21388 | 19505 | 37990 | 12297 | 1302 | 1553 | 1097 | 807 | 985 | 1271 | 910 | 1597 | 985 | 1249 | 535 | 289 | 414 | 145 | 162 | 111 | 92 | 40 | 226 | 43 |  | 146 |
| RayTrace | 105522 | 118398 | 87541 | 88873 | 87897 | 114920 | 75923 | 40067 | 46942 | 39402 | 1453 | 2123 | 2192 | 1560 | 1922 | 1792 | 1418 | 973 | 1351 | 992 | 602 | 828 | 661 | 828 | 623 | 606 | 280 | 270 | 187 | 40 | 287 | 133 |  | 625 |
| EarleyBoyer | 92946 | 96887 | 88851 | 89526 | 97649 | 69041 | 70811 | 43611 | 50046 | 44695 | 37879 | 1042 | 4995 | 1232 | 2406 | 2807 | 1995 | 1746 | 1704 | 1189 | 1696 | 930 | 1288 | 933 | 393 | 662 | 503 | 339 | 204 | 79 |  | 114 |  | 721 |
| RegExp | 27393 | 12962 | 12690 | 11661 | 14231 | 24366 | 8108 | 11456 | 10755 | 11240 | 1481 | 1571 | 657 | 268 | 292 | 292 | 238 | 233 | 238 | 99 | 161 | 204 | 234 | 310 | 250 | 587 | 246 | 188 | 115 | 14 |  |  |  |  |
| Splay | 49359 | 50696 | 36687 | 38504 | 31472 | 26436 | 31521 | 15540 | 17895 | 16999 | 2953 | 5167 | 3855 | 3341 | 2013 | 3414 | 2155 | 1940 | 2074 | 2141 | 1425 | 1531 | 1627 | 910 | 467 | 641 | 982 | 530 | 516 | 131 |  | 119 |  | 1105 |
| NavierStokes | 33801 | 37174 | 35362 | 35953 | 37470 | 25005 | 31515 | 20102 | 18458 | 19048 | 26753 | 14084 | 1088 | 3125 | 1635 | 1578 | 2029 | 2072 | 1296 | 1965 | 1488 | 1297 | 775 | 668 | 945 | 191 | 226 | 174 | 201 | 65 |  | 71 |  | 294 |
| Score | 54237 | 50745 | 48808 | 48741 | 47617 | 44157 | 39795 | 20656 | 20541 | 19870 | 11784 | 2438 | 1661 | 1292 | 1273 | 1204 | 1186 | 1059 | 989 | 909 | 800 | 758 | 682 | 551 | 354 | 332 | 324 | 199 | 144 | 47 |  |  |  |  |
| Score/MB | 330648933 | 1231 | 570 | 1069 | 838 | 777 | 356 | 445 | 155 | 605 | 60 |  | 105 | 734 | 352 | 114 | 287 | 1111 | 826 | 21 | 333 | 1380 |  | 1315 | 224 | 125904 | 25 | 2 | 11 | 44 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 34 | 33 | 41 | 39 | 40 | 41 | 43 | 45 | 64 | 59 | 50 | 54 | 58 | 97 | 94 | 100 | 135 | 168 | 578 | 38 | 306 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs-pgo | rquickjs | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.134 |  |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  | 0.8.0 |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.1M | 55.8M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 51.4M | 72.8M | 196.1M | 17.4M | 112.8M | 38.4M | 11.8M | 42.2M | 9M | 8M | 9M | 0 | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.3M | 338K | 26.1M | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1M | 1.2M | 1.7M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 29.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.4M | 109.8M | 32.7M | 6.9M | 29.1M | 7.9M | 6.7M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 36975 | 35659 | 33071 | 36319 | 33039 | 31821 | 32951 | 24542 | 11787 | 13252 | 34353 | 5507 | 697 | 448 | 508 | 381 | 444 | 437 | 437 | 359 | 233 | 240 | 215 | 183 | 107 | 55 | 49 |  | 22 |  |  |
| DeltaBlue | 103204 | 46772 | 77966 | 42203 | 70078 | 68359 | 65060 | 28497 | 13495 | 13124 | 28246 | 212 | 621 | 410 | 468 | 377 | 469 | 456 | 396 | 393 | 317 | 350 | 258 | 231 | 119 | 50 | 42 |  | 26 |  |  |
| Crypto | 41631 | 48283 | 41834 | 48793 | 40163 | 42057 | 42157 | 33685 | 20844 | 18109 | 20922 | 3089 | 790 | 425 | 551 | 420 | 328 | 325 | 374 | 431 | 188 | 181 | 317 | 113 | 88 | 59 | 74 |  | 29 |  |  |
| RayTrace | 112404 | 105744 | 72593 | 82500 | 68153 | 67339 | 67117 | 48347 | 28137 | 25160 | 3401 | 1347 | 1012 | 742 | 517 | 559 | 592 | 589 | 580 | 461 | 468 | 476 | 441 | 229 | 269 | 130 | 133 |  | 83 |  |  |
| EarleyBoyer | 86921 | 61617 | 69509 | 55168 | 74928 | 72643 | 74131 | 42913 | 41869 | 36655 | 25576 | 1740 | 2232 | 1145 | 1011 | 1022 | 933 | 941 | 988 | 884 | 582 | 592 | 512 | 456 | 301 | 125 | 142 |  | 69 |  |  |
| RegExp | 9900 | 18710 | 10062 | 17092 | 9670 | 9971 | 9580 | 10152 | 9201 | 8801 | 961 | 698 | 406 | 197 | 190 | 182 | 153 | 153 | 187 | 181 | 256 | 202 | 110 | 197 | 280 | 91 | 43 |  |  |  |  |
| Splay | 42995 | 34471 | 38301 | 33395 | 34381 | 34055 | 28212 | 18358 | 24056 | 15019 | 2290 | 3330 | 2412 | 1459 | 1037 | 1320 | 1279 | 1263 | 1018 | 1284 | 1198 | 1190 | 1001 | 896 | 545 | 325 | 172 |  | 79 |  |  |
| NavierStokes | 39060 | 33916 | 39099 | 33996 | 39060 | 38881 | 38990 | 36803 | 22364 | 22112 | 24338 | 3090 | 1091 | 742 | 1036 | 713 | 759 | 770 | 671 | 750 | 475 | 484 | 1081 | 194 | 150 | 115 | 164 |  | 48 |  |  |
| Score | 47475 | 42902 | 41137 | 40039 | 39697 | 39485 | 38411 | 27585 | 19310 | 17423 | 9930 | 1670 | 976 | 587 | 586 | 527 | 523 | 520 | 512 | 506 | 391 | 386 | 384 | 254 | 195 | 98 | 88 |  |  |  |  |
| Score/MB | 873 | 351 | 736 | 301 | 277 | 338 | 494 | 1914 | 375 | 239 | 50 | 96 | 8 | 15 | 49 | 12 | 58 | 65 | 57 |  | 51 | 51 | 50 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 42 | 59 | 58 | 61 | 67 | 67 | 63 | 63 | 78 | 82 | 83 | 121 | 147 | 249 | 281 | 131 | 442 |  |  |
