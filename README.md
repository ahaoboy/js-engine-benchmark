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


## Engine & Runtime (34/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48329<br>36.5M<br>1324/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48214<br>98.6M<br>489/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48149<br>58M<br>830/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42315<br>108.8M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40115<br>123.3M<br>325/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39271<br>66.3M<br>592/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38741<br>40.7M<br>952/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20240<br>19.4M<br>1042/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19472<br>39.8M<br>489/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17216<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17116<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11572<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2023<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1553<br>36M<br>43/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 863<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 829<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 821<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 774<br>1.4M<br>556/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 770<br>831.3K<br>948/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 762<br>1.4M<br>541/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 552<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 507<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 492<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 396<br>446.6K<br>907/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 395<br>685K<br>590/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 360<br>414.5K<br>889/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 313<br>2.7K<br>118699/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 275<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 195<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/12/2025, 1:45:03 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | rquickjs | primjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.21 | 14.2.0 | 2.5.0 | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 98.6M | 58M | 108.8M | 123.3M | 66.3M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 98.6M | 1M | 108.8M | 123.3M | 66.3M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.9M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40724 | 40156 | 38116 | 35058 | 32104 | 32432 | 32488 | 23511 | 13365 | 13559 | 12539 | 34970 | 11604 | 1147 | 681 | 702 | 688 | 577 | 606 | 561 | 566 | 577 | 490 | 292 | 330 | 275 | 245 | 225 | 138 | 200 | 89 | 105 | 60 | 60 | 274 | 30 |  | 94 |  |
| DeltaBlue | 56194 | 55222 | 109081 | 80142 | 76439 | 71963 | 75520 | 25998 | 13501 | 12986 | 12840 | 27102 | 303 | 1082 | 669 | 672 | 666 | 589 | 624 | 576 | 533 | 582 | 455 | 332 | 391 | 355 | 356 | 320 | 176 | 252 | 161 | 116 | 54 | 55 | 280 | 35 |  | 179 |  |
| Crypto | 51863 | 48845 | 41383 | 41975 | 41834 | 41856 | 41356 | 32155 | 20482 | 17466 | 17774 | 14714 | 8463 | 1370 | 578 | 592 | 723 | 576 | 553 | 539 | 880 | 380 | 862 | 791 | 411 | 188 | 191 | 183 | 154 | 125 | 327 | 98 | 80 | 62 | 295 | 36 |  | 135 |  |
| RayTrace | 116696 | 121210 | 110998 | 72371 | 65415 | 68967 | 61863 | 35928 | 27204 | 27251 | 28194 | 8107 | 1331 | 1541 | 1131 | 1057 | 914 | 914 | 956 | 921 | 686 | 711 | 569 | 570 | 456 | 534 | 527 | 489 | 486 | 275 | 499 | 252 | 163 | 137 | 342 | 101 |  | 423 |  |
| EarleyBoyer | 70238 | 69153 | 86680 | 76373 | 71161 | 74471 | 69415 | 7062 | 41628 | 36283 | 37097 | 26149 | 706 | 3456 | 1869 | 1726 | 1462 | 1404 | 1408 | 1395 | 1679 | 1232 | 791 | 600 | 860 | 575 | 542 | 522 | 588 | 509 | 321 | 290 | 193 | 137 |  | 87 |  | 514 |  |
| RegExp | 20234 | 21660 | 10536 | 10203 | 10112 | 10082 | 8965 | 7780 | 8883 | 8947 | 8793 | 1310 | 750 | 549 | 250 | 227 | 226 | 228 | 238 | 220 | 116 | 182 | 65 | 136 | 179 | 244 | 219 | 203 | 456 | 211 | 96 | 251 | 49 | 94 |  |  |  |  |  |
| Splay | 37673 | 37554 | 42726 | 39906 | 35832 | 28823 | 33770 | 19840 | 24879 | 12867 | 12745 | 2404 | 1038 | 3610 | 2385 | 1946 | 1609 | 2271 | 1877 | 2293 | 2104 | 1591 | 1003 | 1311 | 1291 | 934 | 1216 | 868 | 970 | 856 | 367 | 568 | 209 | 321 |  | 137 |  | 851 |  |
| NavierStokes | 40136 | 39544 | 38765 | 38732 | 38732 | 38803 | 38469 | 36582 | 22341 | 22045 | 21963 | 34543 | 12882 | 1886 | 925 | 985 | 1284 | 984 | 986 | 1009 | 1215 | 933 | 1527 | 942 | 718 | 470 | 464 | 475 | 195 | 203 | 877 | 165 | 174 | 119 |  | 56 |  | 285 |  |
| Score | 48329 | 48214 | 48149 | 42315 | 40115 | 39271 | 38741 | 20240 | 19472 | 17216 | 17116 | 11572 | 2023 | 1553 | 863 | 829 | 821 | 774 | 770 | 762 | 741 | 646 | 552 | 507 | 492 | 396 | 395 | 360 | 313 | 275 | 264 | 195 | 105 | 105 |  |  |  |  |  |
| Score/MB | 1324 | 489 | 830 | 388 | 325 | 592 | 952 | 1042 | 489 | 337 | 485 | 57 | 1 | 43 | 70 | 160 | 192 | 556 | 948 | 541 | 87 | 327 | 11 | 238 |  | 907 | 590 | 889 | 118699 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 45 | 33 | 47 | 50 | 48 | 51 | 50 | 52 | 60 | 58 | 85 | 67 | 63 | 79 | 80 | 84 | 93 | 112 | 130 | 143 | 234 | 234 | 31 | 357 |  | 87 | 7 |
### macos-arm64
| Engine | JavaScriptCore | bun | v8 | dune | node | deno | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs | rquickjs | quickjs-ng | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.21 | 14.2.104 | 0.10.1 | 24.8.0 | 2.5.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 2025.04.26 |  | 0.8.0 | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 56.8M | 41.5M | 56.8M | 111.8M | 87.9M | 131.7M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 975.9K | 1.2M | 4.1M | 2.4M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 0.2K | 56.8M | 41.5M | 56.8M | 111.8M | 87.9M | 65.9M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 975.9K | 1.2M | 2.1M | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 0 | 2.1M | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50189 | 45674 | 39401 | 43972 | 31542 | 39905 | 11833 | 12130 | 10869 | 14703 | 7795 | 1253 | 1110 | 1177 | 858 | 990 | 962 | 868 | 638 | 660 | 465 | 472 | 352 | 308 | 96 | 161 | 112 | 94 | 28 | 194 | 33 |  | 207 |
| DeltaBlue | 69986 | 64068 | 121115 | 94760 | 83124 | 64544 | 15544 | 14996 | 11141 | 2374 | 606 | 1082 | 1184 | 1128 | 965 | 951 | 855 | 667 | 750 | 508 | 532 | 626 | 449 | 367 | 186 | 198 | 153 | 72 | 32 | 227 | 46 |  | 203 |
| Crypto | 70691 | 63048 | 48736 | 55372 | 50285 | 35666 | 22753 | 19038 | 16138 | 24152 | 5329 | 1214 | 1641 | 1061 | 876 | 1195 | 949 | 788 | 1154 | 1353 | 984 | 512 | 257 | 151 | 393 | 115 | 117 | 95 | 33 | 226 | 56 |  | 129 |
| RayTrace | 181741 | 165536 | 102266 | 75331 | 70155 | 55203 | 34335 | 34341 | 27870 | 3491 | 727 | 2041 | 1383 | 1774 | 1880 | 1160 | 1065 | 1282 | 840 | 932 | 796 | 572 | 843 | 356 | 569 | 668 | 324 | 206 | 35 | 276 | 133 |  | 590 |
| EarleyBoyer | 88590 | 85312 | 68060 | 68788 | 67162 | 54044 | 37106 | 35363 | 35856 | 28964 | 928 | 4047 | 1277 | 2020 | 2683 | 1961 | 1733 | 2224 | 2559 | 998 | 1039 | 1094 | 822 | 613 | 354 | 681 | 327 | 193 | 72 |  | 112 |  | 549 |
| RegExp | 20862 | 18638 | 7953 | 10001 | 9809 | 8191 | 8150 | 6694 | 8625 | 1025 | 580 | 534 | 290 | 240 | 285 | 251 | 224 | 225 | 188 | 82 | 205 | 208 | 243 | 278 | 294 | 488 | 186 | 120 | 12 |  |  |  |  |
| Splay | 28082 | 33493 | 30850 | 22296 | 25531 | 22443 | 21175 | 9007 | 13764 | 2445 | 1576 | 3612 | 3325 | 2887 | 3492 | 1618 | 2111 | 1828 | 1512 | 1594 | 1594 | 1728 | 1300 | 1258 | 488 | 929 | 552 | 488 | 121 |  | 141 |  | 632 |
| NavierStokes | 28880 | 37397 | 28344 | 30274 | 28641 | 29086 | 18087 | 16143 | 16918 | 25796 | 9839 | 1145 | 3229 | 1781 | 1560 | 1789 | 1442 | 1826 | 1578 | 1710 | 1159 | 860 | 635 | 279 | 1041 | 166 | 153 | 194 | 65 |  | 88 |  | 293 |
| Score | 53552 | 52846 | 42799 | 41055 | 38117 | 33170 | 18952 | 15904 | 15819 | 6960 | 1875 | 1530 | 1362 | 1257 | 1242 | 1081 | 998 | 997 | 924 | 744 | 725 | 643 | 524 | 372 | 348 | 325 | 207 | 153 | 40 |  |  |  |  |
| Score/MB | 326472918 | 930 | 1031 | 722 | 340 | 377 | 143 | 484 | 341 | 35 |  | 97 | 774 | 348 | 118 | 1134 | 834 | 241 | 386 | 17 | 1320 |  | 1250 | 29 | 220 | 123250 | 2 | 12 | 37 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 40 | 34 | 40 | 43 | 40 | 40 | 45 | 43 | 51 | 71 | 51 | 55 | 64 | 94 | 102 | 101 | 139 | 162 | 681 | 39 | 271 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-emscripten | quickjs-ng | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.104 |  | 2.5.0 | 1.2.21 | 24.8.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  |  | 0.8.0 |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.7M | 152.5M | 145.7M | 132.8M | 116.5M | 77.6M | 14.4M | 52.4M | 72.8M | 196.1M | 17.4M | 112.8M | 11.8M | 38.4M | 9.2M | 42.2M | 9M | 0 | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.7M | 338K | 113.4M | 113M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.4M | 13.1M | 1M | 0 | 1.7M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 152.2M | 32.3M | 19.8M | 31.1M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 17.4M | 109.8M | 6.9M | 32.7M | 7.8M | 29.1M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38507 | 32824 | 35747 | 36636 | 33071 | 31193 | 24454 | 13581 | 14025 | 36057 | 9943 | 700 | 514 | 451 | 409 | 384 | 448 | 387 | 417 | 233 | 215 | 226 | 197 | 105 | 55 | 49 |  | 25 |  |  |
| DeltaBlue | 109643 | 45119 | 79289 | 39896 | 75183 | 75639 | 27565 | 13515 | 12033 | 40477 | 826 | 625 | 460 | 403 | 397 | 377 | 469 | 394 | 403 | 324 | 258 | 337 | 228 | 117 | 49 | 41 |  | 28 |  |  |
| Crypto | 40302 | 49778 | 40378 | 45224 | 36636 | 42079 | 33475 | 20185 | 17849 | 24360 | 2252 | 781 | 547 | 422 | 514 | 429 | 325 | 428 | 379 | 190 | 315 | 178 | 115 | 89 | 58 | 75 |  | 38 |  |  |
| RayTrace | 112256 | 102118 | 63121 | 103228 | 67413 | 67191 | 48569 | 28359 | 27177 | 4477 | 1274 | 1019 | 557 | 725 | 598 | 559 | 589 | 462 | 587 | 449 | 437 | 476 | 227 | 265 | 130 | 132 |  | 85 |  |  |
| EarleyBoyer | 86955 | 60652 | 76914 | 57682 | 69318 | 74002 | 42278 | 41483 | 37023 | 26526 | 1556 | 2243 | 1009 | 1139 | 1002 | 1027 | 919 | 873 | 980 | 554 | 505 | 580 | 453 | 295 | 123 | 134 |  | 75 |  |  |
| RegExp | 9991 | 18657 | 10102 | 17746 | 9861 | 9748 | 10052 | 9201 | 9074 | 1031 | 898 | 405 | 188 | 197 | 157 | 186 | 154 | 180 | 187 | 249 | 109 | 197 | 198 | 273 | 90 | 42 |  |  |  |  |
| Splay | 41617 | 34194 | 38366 | 33379 | 33664 | 27389 | 27006 | 24529 | 14098 | 2941 | 5167 | 2399 | 1014 | 1451 | 1229 | 1328 | 1222 | 1285 | 985 | 1156 | 969 | 1164 | 829 | 511 | 324 | 169 |  | 130 |  |  |
| NavierStokes | 38990 | 33734 | 38912 | 33882 | 36952 | 38990 | 36878 | 22445 | 22127 | 23572 | 3386 | 1090 | 1031 | 738 | 751 | 714 | 759 | 752 | 667 | 478 | 1081 | 474 | 191 | 150 | 116 | 167 |  | 59 |  |  |
| Score | 47728 | 42077 | 41248 | 40945 | 38880 | 38802 | 28727 | 19633 | 17445 | 11480 | 2213 | 977 | 588 | 583 | 540 | 531 | 519 | 510 | 509 | 386 | 381 | 377 | 253 | 191 | 98 | 86 |  |  |  |  |
| Score/MB | 872 | 275 | 283 | 308 | 333 | 499 | 1993 | 374 | 239 | 58 | 127 | 8 | 49 | 15 | 58 | 12 | 57 |  | 56 | 50 | 50 | 50 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 39 | 41 | 58 | 60 | 63 | 61 | 67 | 62 | 63 | 79 | 84 | 85 | 122 | 149 | 248 | 289 | 128 | 372 |  |  |
