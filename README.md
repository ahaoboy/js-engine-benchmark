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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47645<br>98.9M<br>481/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47403<br>37M<br>1279/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47297<br>57.8M<br>818/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42253<br>108.3M<br>390/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39465<br>123.4M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39399<br>66.3M<br>594/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39159<br>40.7M<br>963/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19911<br>19.4M<br>1025/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19345<br>40.1M<br>482/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17173<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16984<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9772<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2636<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1530<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 923<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 831<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 754<br>1.4M<br>535/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 753<br>831.3K<br>927/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 742<br>1.4M<br>533/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 732<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 651<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 629<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 481<br>2.1M<br>226/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 388<br>685K<br>580/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 386<br>446.6K<br>884/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 322<br>2.7K<br>122112/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| rhino | [rhino](https://github.com/mozilla/rhino) | 319<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 266<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/28/2025, 3:26:19 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | rquickjs-pgo | primjs | rquickjs | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-one | mujs-pgo | mujs | ringo | rhino | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.0 | 2.5.2 | 24.9.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 24.12.0 | 2025.04.26 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 98.9M | 37M | 57.8M | 108.3M | 123.4M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.5M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 1.1G | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 98.9M | 37M | 1M | 108.3M | 123.4M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.5M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 1.1G | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41699 | 41935 | 37808 | 35450 | 30896 | 32728 | 33632 | 23370 | 13245 | 14138 | 13178 | 35680 | 13867 | 1119 | 712 | 710 | 693 | 574 | 625 | 580 | 560 | 581 | 536 | 331 | 298 | 246 | 265 | 229 | 165 | 144 | 90 | 197 | 104 | 60 | 58 | 276 | 26 |  |  |
| DeltaBlue | 55380 | 55856 | 108976 | 80406 | 75044 | 75355 | 76770 | 25378 | 13316 | 13012 | 12972 | 38811 | 255 | 1035 | 693 | 684 | 662 | 562 | 621 | 559 | 537 | 572 | 481 | 390 | 330 | 356 | 354 | 325 | 188 | 185 | 163 | 246 | 115 | 54 | 55 | 283 | 33 |  |  |
| Crypto | 49225 | 51938 | 38626 | 41840 | 41297 | 41350 | 41356 | 32069 | 20727 | 17554 | 17679 | 26102 | 8242 | 1355 | 677 | 599 | 765 | 549 | 559 | 571 | 878 | 380 | 875 | 412 | 738 | 188 | 189 | 182 | 150 | 151 | 330 | 120 | 97 | 80 | 62 | 293 | 38 |  |  |
| RayTrace | 112996 | 114032 | 109370 | 71409 | 66155 | 68745 | 61863 | 33381 | 27842 | 26734 | 27768 | 2438 | 987 | 1538 | 1203 | 1088 | 914 | 906 | 939 | 892 | 680 | 738 | 772 | 455 | 572 | 505 | 533 | 491 | 505 | 448 | 498 | 268 | 248 | 164 | 141 | 348 | 101 |  |  |
| EarleyBoyer | 66451 | 66997 | 85257 | 75897 | 70856 | 74322 | 68941 | 7148 | 41705 | 36956 | 36604 | 21113 | 1624 | 3378 | 1872 | 1753 | 1411 | 1378 | 1354 | 1226 | 1668 | 1231 | 992 | 853 | 578 | 487 | 545 | 509 | 610 | 478 | 324 | 499 | 282 | 190 | 137 |  | 84 |  |  |
| RegExp | 20618 | 18911 | 10567 | 10223 | 9761 | 10152 | 8892 | 7713 | 8938 | 8992 | 8883 | 1194 | 1050 | 554 | 264 | 227 | 227 | 216 | 224 | 223 | 114 | 182 | 65 | 179 | 137 | 212 | 240 | 197 | 472 | 436 | 96 | 207 | 244 | 47 | 91 |  |  |  |  |
| Splay | 37798 | 36068 | 41194 | 39662 | 35049 | 28449 | 35522 | 19330 | 23225 | 11970 | 11507 | 2053 | 5101 | 3594 | 2369 | 1842 | 1708 | 2217 | 1714 | 2106 | 1982 | 1654 | 1393 | 1212 | 926 | 1242 | 834 | 1249 | 890 | 927 | 379 | 782 | 499 | 218 | 340 |  | 137 |  |  |
| NavierStokes | 39920 | 40216 | 38765 | 38765 | 38321 | 38584 | 38436 | 36506 | 22260 | 22024 | 22045 | 18235 | 9293 | 1848 | 1117 | 979 | 1298 | 989 | 973 | 965 | 1216 | 933 | 1541 | 680 | 934 | 481 | 480 | 478 | 191 | 313 | 881 | 200 | 163 | 176 | 119 |  | 60 |  |  |
| Score | 47645 | 47403 | 47297 | 42253 | 39465 | 39399 | 39159 | 19911 | 19345 | 17173 | 16984 | 9772 | 2636 | 1530 | 923 | 831 | 831 | 754 | 753 | 742 | 732 | 651 | 629 | 484 | 481 | 388 | 386 | 376 | 322 | 319 | 266 | 266 | 189 | 105 | 105 |  |  |  |  |
| Score/MB | 481 | 1279 | 818 | 390 | 319 | 594 | 963 | 1025 | 482 | 336 | 482 | 48 | 2 | 42 | 75 | 161 | 194 | 535 | 927 | 533 | 86 | 330 | 13 |  | 226 | 580 | 884 | 928 | 122112 |  | 127 | 20 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 36 | 34 | 44 | 49 | 49 | 53 | 52 | 53 | 61 | 59 | 81 | 63 | 67 | 83 | 80 | 86 | 96 | 88 | 130 | 115 | 144 | 238 | 236 | 31 | 357 |  | 7 |
### macos-arm64
| Engine | v8 | bun | dune | deno | node | spidermonkey | spiderfire | mozjs | graaljs | primjs | txiki.js | jjs | hermes | quickjs-ng | quickjs | rquickjs | llrt | njs | duktape | ladybird | quickjs-emscripten | mujs | xst | goja | rhino | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 | 1.2.22 | 0.10.1 | 2.5.2 | 24.9.0 | 144.0 |  |  | 24.1.2 |  | 24.12.0 |  | 0.12.0 | 0.10.1 | 2025.04.26 |  | 0.7.0.beta | 0.9.2 | 2.99.99 |  |  | 1.3.5 | 16.9.1 |  |  | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |
| Total size | 41.3M | 57.1M | 56.8M | 87.5M | 111.9M | 132.6M | 46.3M | 32.8M | 194M | 1.8M | 3.6M | 0 | 15.7M | 3.8M | 975.9K | 1.2M | 10.6M | 2.4M | 562.1K | 41.5M | 0 | 429.1K | 1.6M | 12.7M | 0 | 2.7K | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 |
| Exe size | 41.3M | 57.1M | 56.8M | 87.5M | 111.9M | 66.3M | 46.3M | 32.8M | 147.4K | 1.8M | 3.6M | 0 | 7.9M | 1.9M | 975.9K | 1.2M | 10.6M | 1.8M | 562.1K | 41.5M | 0 | 429.1K | 1.6M | 12.7M | 0 | 2.7K | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 0 | 0 | 0 | 7.9M | 1.9M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 |
| Richards | 46726 | 41219 | 37674 | 44763 | 38571 | 15621 | 14883 | 14177 | 22614 | 1114 | 1137 | 584 | 942 | 1107 | 1034 | 944 | 813 | 655 | 539 | 567 | 545 | 334 | 112 | 281 | 189 | 159 | 142 | 90 | 39 |  | 200 | 42 |  |
| DeltaBlue | 129770 | 57351 | 95283 | 73345 | 92175 | 16873 | 16120 | 15227 | 12066 | 1187 | 1251 | 705 | 1015 | 1124 | 1136 | 1044 | 826 | 685 | 597 | 547 | 620 | 565 | 211 | 383 | 231 | 211 | 133 | 88 | 38 |  | 221 | 56 |  |
| Crypto | 56424 | 59374 | 56857 | 40386 | 48868 | 25003 | 18981 | 14821 | 26841 | 1739 | 1183 | 8399 | 1091 | 1142 | 1337 | 1023 | 549 | 1068 | 1299 | 974 | 555 | 291 | 424 | 171 | 128 | 136 | 111 | 108 | 41 |  | 255 | 66 |  |
| RayTrace | 139562 | 115290 | 73629 | 66081 | 68011 | 48025 | 33192 | 29748 | 1040 | 1480 | 2121 | 596 | 1778 | 1433 | 1203 | 1313 | 1445 | 682 | 1061 | 1086 | 714 | 935 | 705 | 330 | 576 | 708 | 213 | 220 | 40 |  | 326 | 169 |  |
| EarleyBoyer | 112033 | 61777 | 91479 | 85347 | 67518 | 55583 | 40603 | 36471 | 19092 | 2256 | 3053 | 879 | 3654 | 2532 | 2188 | 2144 | 1935 | 2279 | 1182 | 1477 | 1361 | 1077 | 422 | 756 | 684 | 665 | 301 | 229 | 85 |  |  | 135 |  |
| RegExp | 14699 | 21842 | 12104 | 10808 | 11353 | 13338 | 12213 | 10910 | 1024 | 288 | 303 | 592 | 501 | 269 | 265 | 266 | 292 | 197 | 251 | 95 | 242 | 334 | 330 | 279 | 489 | 572 | 203 | 126 | 14 |  |  |  |  |
| Splay | 69756 | 30698 | 14670 | 32205 | 27788 | 31757 | 16323 | 15716 | 2516 | 4792 | 3346 | 1576 | 3033 | 3167 | 2265 | 2787 | 3378 | 1644 | 2125 | 2092 | 1972 | 815 | 502 | 644 | 604 | 799 | 576 | 454 | 141 |  |  | 209 |  |
| NavierStokes | 40621 | 29147 | 34839 | 30954 | 31367 | 21685 | 20357 | 19491 | 21963 | 3768 | 2046 | 10090 | 1226 | 2104 | 2302 | 1715 | 1084 | 1804 | 1396 | 1759 | 935 | 714 | 1109 | 284 | 263 | 175 | 180 | 204 | 75 |  |  | 100 |  |
| Score | 62157 | 45852 | 41324 | 41046 | 40942 | 25180 | 19931 | 18116 | 7319 | 1586 | 1477 | 1426 | 1373 | 1320 | 1243 | 1174 | 1012 | 901 | 889 | 801 | 731 | 567 | 391 | 352 | 338 | 338 | 202 | 163 | 48 |  |  |  |  |
| Score/MB | 1506 | 803 | 727 | 469 | 365 | 189 | 430 | 551 | 37 | 901 | 409 |  | 87 | 344 | 1304 | 981 | 95 | 376 | 1619 | 19 |  | 1353 | 247 | 27 |  | 128180 | 2 | 13 | 45 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 37 | 38 | 42 | 35 | 40 | 39 | 41 | 44 | 52 | 46 | 63 | 50 | 56 | 88 | 88 | 90 | 100 | 138 | 151 | 628 |  | 34 | 226 |  |
### windows
| Engine | v8 | JavaScriptCore | dune | node | deno | bun | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | txiki.js | quickjs | rquickjs | rquickjs-pgo | llrt | quickjs-ng | quickjs-emscripten | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 |  | 0.10.1 | 24.9.0 | 2.5.2 | 1.2.22 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 24.12.0 | 2025.04.26 |  |  | 0.7.0.beta | 0.10.1 |  | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |
| Total size | 61.8M | 125.2M | 82M | 120.8M | 148.4M | 139.3M | 15.6M | 53.9M | 77.1M | 197.1M | 89.6M | 41.7M | 12.8M | 10.5M | 10.2M | 45.6M | 6.8M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 |
| Exe size | 29.4M | 342.5K | 47.4M | 85.5M | 112.5M | 113.3M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 5.7M | 4.9M | 1.4M | 1M | 13.1M | 1.6M | 0 | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 |
| Dll size | 32.4M | 124.9M | 34.6M | 35.3M | 35.9M | 26M | 15.3M | 20M | 34.4M | 196.7M | 86.6M | 36M | 7.9M | 9.1M | 9.2M | 32.5M | 5.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 |
| Richards | 38140 | 35651 | 32743 | 31694 | 34525 | 35125 | 24507 | 13249 | 13369 | 32241 | 670 | 442 | 486 | 397 | 438 | 380 | 485 | 367 | 210 | 170 | 255 | 181 | 102 | 53 | 49 |  | 25 |  |
| DeltaBlue | 106767 | 44656 | 72981 | 73649 | 75626 | 41481 | 29244 | 12377 | 12701 | 19194 | 610 | 399 | 453 | 395 | 453 | 365 | 487 | 391 | 259 | 317 | 357 | 225 | 117 | 49 | 43 |  | 29 |  |
| Crypto | 38398 | 49154 | 41245 | 32351 | 41268 | 41397 | 33414 | 20416 | 17453 | 16139 | 712 | 422 | 513 | 509 | 324 | 341 | 461 | 401 | 311 | 182 | 177 | 111 | 90 | 57 | 74 |  | 36 |  |
| RayTrace | 110924 | 104338 | 67339 | 62762 | 45760 | 73555 | 50393 | 27870 | 27010 | 2538 | 899 | 721 | 544 | 617 | 602 | 577 | 439 | 443 | 454 | 467 | 463 | 230 | 267 | 123 | 135 |  | 85 |  |
| EarleyBoyer | 85188 | 62799 | 71684 | 66742 | 49977 | 39251 | 42587 | 40577 | 36583 | 20403 | 2158 | 1131 | 864 | 1019 | 946 | 973 | 979 | 836 | 534 | 598 | 610 | 453 | 299 | 121 | 146 |  | 76 |  |
| RegExp | 9861 | 18547 | 9518 | 9309 | 9565 | 13469 | 9890 | 9128 | 8577 | 790 | 411 | 192 | 181 | 172 | 151 | 196 | 155 | 168 | 110 | 240 | 201 | 199 | 250 | 88 | 43 |  |  |  |
| Splay | 42546 | 36084 | 28131 | 28212 | 31570 | 31944 | 28318 | 24464 | 14685 | 2011 | 1960 | 1407 | 1057 | 1311 | 1293 | 1324 | 1201 | 1194 | 1022 | 1136 | 1226 | 745 | 461 | 317 | 171 |  | 132 |  |
| NavierStokes | 38655 | 33801 | 38694 | 38545 | 38436 | 32171 | 36509 | 22193 | 22002 | 20776 | 1013 | 702 | 1013 | 740 | 749 | 701 | 542 | 712 | 1059 | 470 | 261 | 192 | 149 | 115 | 164 |  | 57 |  |
| Score | 47037 | 42959 | 38600 | 36575 | 36062 | 35299 | 29179 | 19238 | 17324 | 8017 | 908 | 572 | 564 | 550 | 520 | 514 | 512 | 485 | 385 | 370 | 362 | 246 | 187 | 96 | 88 |  |  |  |
| Score/MB | 761 | 343 | 470 | 302 | 242 | 253 | 1869 | 356 | 224 | 40 | 10 | 13 | 44 | 52 | 50 | 11 | 75 |  | 44 | 43 | 42 | 11 | 1 | 2 | 2 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 43 | 61 | 60 | 61 | 68 | 63 | 67 | 65 | 83 | 80 | 91 | 122 | 149 | 253 | 277 | 136 | 377 |  |
