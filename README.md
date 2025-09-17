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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47973<br>57.4M<br>835/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47552<br>98.9M<br>481/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47020<br>36.6M<br>1285/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42385<br>108.8M<br>389/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40690<br>65.3M<br>622/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39813<br>123.3M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39179<br>40.7M<br>963/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39130<br>66.3M<br>590/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19998<br>19.4M<br>1030/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19425<br>39.8M<br>488/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17151<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17082<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10782<br>199.7M<br>53/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2577<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 868<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 798<br>4.3M<br>186/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 758<br>1.4M<br>544/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 743<br>8.4M<br>88/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 584<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 509<br>2.1M<br>239/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 488<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 397<br>446.6K<br>910/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 364<br>685K<br>544/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 356<br>414.5K<br>879/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 280<br>2.7K<br>106184/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 265<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 102<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/17/2025, 1:46:17 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | deno | bare | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.0 | 1.2.22 |  | 2.5.0 |  | 24.8.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.4M | 98.9M | 36.6M | 108.8M | 65.3M | 123.3M | 40.7M | 66.3M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 1M | 98.9M | 36.6M | 108.8M | 65.3M | 123.3M | 40.7M | 66.3M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 56.4M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38239 | 39672 | 40837 | 35380 | 32418 | 32294 | 32573 | 32199 | 23169 | 13069 | 13817 | 13178 | 35404 | 11159 | 1120 | 681 | 703 | 616 | 628 | 574 | 582 | 562 | 582 | 515 | 294 | 331 | 280 | 246 | 223 | 97 | 90 | 204 | 103 | 60 | 59 | 274 | 29 |  | 122 |  |
| DeltaBlue | 108652 | 55380 | 54422 | 80849 | 77656 | 74330 | 79778 | 73285 | 24547 | 13647 | 13144 | 12900 | 25601 | 543 | 1057 | 666 | 686 | 596 | 622 | 591 | 582 | 547 | 577 | 481 | 329 | 383 | 366 | 358 | 318 | 152 | 162 | 248 | 113 | 54 | 53 | 282 | 35 |  | 179 |  |
| Crypto | 41438 | 49124 | 51274 | 41922 | 41701 | 41834 | 41422 | 41450 | 31939 | 21037 | 17685 | 17723 | 17100 | 8438 | 1351 | 589 | 597 | 733 | 557 | 558 | 550 | 882 | 379 | 837 | 788 | 408 | 190 | 190 | 183 | 126 | 328 | 123 | 96 | 80 | 61 | 301 | 37 |  | 136 |  |
| RayTrace | 111442 | 115586 | 116770 | 72149 | 66747 | 64083 | 60840 | 67487 | 35593 | 27325 | 27278 | 27620 | 3992 | 1198 | 1526 | 1125 | 1071 | 881 | 965 | 928 | 914 | 682 | 692 | 585 | 577 | 456 | 532 | 529 | 485 | 491 | 502 | 264 | 254 | 163 | 132 | 351 | 102 |  | 425 |  |
| EarleyBoyer | 86659 | 66453 | 67570 | 76675 | 68915 | 71644 | 69833 | 73519 | 7123 | 41773 | 36031 | 37143 | 34020 | 745 | 3393 | 1874 | 1765 | 1503 | 1402 | 1342 | 1386 | 1689 | 1231 | 809 | 592 | 855 | 562 | 528 | 509 | 577 | 323 | 474 | 280 | 193 | 132 |  | 90 |  | 491 |  |
| RegExp | 10525 | 21114 | 19982 | 10223 | 10375 | 10032 | 8983 | 10102 | 7953 | 8819 | 8910 | 9038 | 1368 | 738 | 553 | 250 | 228 | 225 | 237 | 228 | 216 | 115 | 184 | 65 | 135 | 180 | 243 | 217 | 198 | 462 | 95 | 204 | 252 | 49 | 93 |  |  |  |  |  |
| Splay | 41389 | 37416 | 33224 | 39654 | 38578 | 35106 | 35367 | 28921 | 20024 | 24374 | 12101 | 11784 | 2159 | 5202 | 3644 | 2407 | 1956 | 1615 | 1825 | 2115 | 2184 | 2109 | 1664 | 1374 | 1318 | 1255 | 907 | 634 | 831 | 858 | 382 | 788 | 480 | 214 | 313 |  | 138 |  | 826 |  |
| NavierStokes | 38732 | 39920 | 40028 | 38732 | 38881 | 38881 | 38211 | 38765 | 34874 | 22024 | 22002 | 22024 | 29383 | 11108 | 1850 | 953 | 968 | 1275 | 993 | 957 | 956 | 1222 | 931 | 1528 | 981 | 703 | 476 | 480 | 485 | 181 | 875 | 192 | 161 | 175 | 119 |  | 57 |  | 280 |  |
| Score | 47973 | 47552 | 47020 | 42385 | 40690 | 39813 | 39179 | 39130 | 19998 | 19425 | 17151 | 17082 | 10782 | 2577 | 1535 | 868 | 834 | 798 | 772 | 758 | 756 | 743 | 648 | 584 | 509 | 488 | 397 | 364 | 356 | 280 | 266 | 265 | 188 | 106 | 102 |  |  |  |  |  |
| Score/MB | 835 | 481 | 1285 | 389 | 622 | 322 | 963 | 590 | 1030 | 488 | 336 | 484 | 53 | 2 | 42 | 70 | 161 | 186 | 951 | 544 | 537 | 88 | 328 | 12 | 239 |  | 910 | 544 | 879 | 106184 | 127 | 20 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 42 | 34 | 47 | 50 | 48 | 49 | 52 | 53 | 61 | 59 | 84 | 67 | 63 | 79 | 81 | 86 | 102 | 131 | 117 | 145 | 234 | 238 | 31 | 351 |  | 87 | 7 |
### macos-arm64
| Engine | bun | JavaScriptCore | v8 | node | bare | deno | dune | mozjs | spiderfire | spidermonkey | graaljs | hermes | txiki.js | jjs | llrt | quickjs | quickjs-ng | primjs | njs | rquickjs | ladybird | duktape | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.137 | 24.8.0 |  | 2.5.0 | 0.10.1 |  |  | 143.0 | 24.1.2 | 0.12.0 | 24.12.0 |  | 0.6.2.beta | 2025.04.26 | 0.8.0 |  | 0.9.2 |  |  | 2.99.99 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 57.1M | 0.2K | 41.1M | 111.8M | 45.6M | 87.9M | 56.8M | 32.8M | 46.3M | 131.7M | 194M | 15.7M | 3.6M | 0 | 10.5M | 975.9K | 4.1M | 1.8M | 2.4M | 1.2M | 41.4M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 57.1M | 0.2K | 41.1M | 111.8M | 45.6M | 87.9M | 56.8M | 32.8M | 46.3M | 65.9M | 147.4K | 7.9M | 3.6M | 0 | 10.5M | 975.9K | 2.1M | 1.8M | 1.8M | 1.2M | 41.4M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50595 | 44025 | 43185 | 45589 | 40954 | 54976 | 45098 | 15265 | 15056 | 12472 | 32647 | 1245 | 1186 | 2312 | 1041 | 1002 | 1289 | 930 | 638 | 780 | 782 | 441 | 520 | 353 | 109 | 298 | 115 | 172 | 80 | 37 | 182 | 34 |  | 208 |
| DeltaBlue | 76413 | 72756 | 107898 | 104037 | 104473 | 108076 | 102331 | 16159 | 16754 | 11293 | 28589 | 1044 | 1213 | 475 | 1074 | 1096 | 1113 | 961 | 765 | 789 | 553 | 513 | 560 | 468 | 209 | 327 | 198 | 188 | 64 | 37 | 174 | 42 |  | 182 |
| Crypto | 69258 | 69712 | 56377 | 59705 | 52679 | 47720 | 58388 | 21091 | 20247 | 18046 | 29909 | 1327 | 1157 | 3367 | 907 | 1344 | 1027 | 1303 | 1113 | 685 | 1076 | 1063 | 462 | 265 | 423 | 135 | 135 | 162 | 92 | 39 | 205 | 48 |  | 127 |
| RayTrace | 183665 | 151920 | 122098 | 85987 | 87689 | 72815 | 81695 | 48643 | 32823 | 39959 | 1270 | 2274 | 2048 | 512 | 1899 | 1137 | 1138 | 1338 | 773 | 1072 | 746 | 753 | 560 | 540 | 666 | 249 | 439 | 391 | 235 | 38 | 262 | 113 |  | 583 |
| EarleyBoyer | 101405 | 95069 | 95097 | 87411 | 76251 | 91391 | 78116 | 40982 | 42527 | 41009 | 22308 | 4721 | 3118 | 1559 | 2778 | 1944 | 2321 | 1166 | 2185 | 1646 | 1083 | 890 | 1066 | 792 | 411 | 518 | 647 | 418 | 222 | 72 |  | 86 |  | 575 |
| RegExp | 29700 | 32067 | 14001 | 13715 | 13637 | 13792 | 11331 | 11218 | 11501 | 9951 | 1661 | 644 | 305 | 455 | 291 | 261 | 239 | 224 | 176 | 206 | 80 | 177 | 171 | 301 | 318 | 202 | 546 | 207 | 122 | 13 |  |  |  |  |
| Splay | 40534 | 49498 | 55984 | 46246 | 48666 | 31898 | 25913 | 14133 | 16632 | 17765 | 4392 | 4238 | 3398 | 1306 | 3965 | 2035 | 2102 | 2404 | 1602 | 1850 | 1601 | 1216 | 1518 | 691 | 470 | 960 | 813 | 530 | 496 | 111 |  | 156 |  | 412 |
| NavierStokes | 38173 | 33208 | 35101 | 39474 | 37618 | 34770 | 36173 | 19215 | 20014 | 17956 | 9016 | 1519 | 1933 | 10388 | 1630 | 2297 | 1930 | 2796 | 1706 | 1380 | 1528 | 1148 | 667 | 710 | 1039 | 255 | 163 | 249 | 208 | 61 |  | 80 |  | 280 |
| Score | 62376 | 60090 | 55015 | 51979 | 49766 | 48144 | 45467 | 20533 | 20161 | 18415 | 9215 | 1720 | 1466 | 1437 | 1335 | 1188 | 1180 | 1134 | 903 | 889 | 722 | 669 | 586 | 479 | 377 | 309 | 299 | 264 | 154 | 43 |  |  |  |  |
| Score/MB | 1092 | 366330999 | 1339 | 464 | 1092 | 547 | 800 | 625 | 435 | 139 | 47 | 109 | 406 |  | 127 | 1246 | 286 | 644 | 377 | 743 | 17 | 1218 |  | 1143 | 238 | 24 | 113390 | 3 | 12 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 32 | 37 | 42 | 39 | 39 | 42 | 45 | 54 | 49 | 72 | 54 | 63 | 63 | 92 | 109 | 104 | 107 | 154 | 690 | 40 | 300 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | bare | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.137 |  | 1.2.22 | 2.5.0 |  | 0.10.1 | 24.8.0 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 133.1M | 145.7M | 57M | 77.6M | 116.5M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 37.3M | 42.2M | 8M | 9M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.3M | 339.5K | 113.3M | 113.4M | 26.1M | 47.4M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.2M | 1M | 1.7M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.9M | 19.8M | 32.3M | 30.8M | 30.3M | 31.1M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 31.6M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38740 | 36718 | 36887 | 35899 | 33060 | 33226 | 30060 | 24613 | 14269 | 13552 | 35810 | 8706 | 699 | 513 | 452 | 384 | 447 | 444 | 434 | 370 | 233 | 208 | 229 | 197 | 104 | 55 | 48 |  | 26 |  |  |
| DeltaBlue | 106338 | 49231 | 46977 | 75090 | 76730 | 76862 | 65477 | 27821 | 13217 | 13157 | 31077 | 694 | 622 | 468 | 410 | 377 | 459 | 475 | 397 | 396 | 324 | 258 | 343 | 238 | 115 | 49 | 41 |  | 28 |  |  |
| Crypto | 41507 | 49577 | 43104 | 35347 | 41911 | 42128 | 42120 | 33913 | 20970 | 18143 | 21085 | 3065 | 789 | 546 | 430 | 432 | 328 | 328 | 371 | 419 | 190 | 315 | 183 | 115 | 92 | 58 | 74 |  | 38 |  |  |
| RayTrace | 110110 | 96939 | 90723 | 72593 | 68449 | 67413 | 66673 | 45266 | 28018 | 25456 | 2960 | 1638 | 1016 | 546 | 739 | 549 | 594 | 589 | 581 | 458 | 472 | 441 | 476 | 235 | 263 | 124 | 134 |  | 89 |  |  |
| EarleyBoyer | 87664 | 65338 | 55352 | 76660 | 68872 | 73441 | 72235 | 41877 | 41415 | 37213 | 32395 | 1824 | 2241 | 1009 | 1140 | 1014 | 957 | 938 | 986 | 872 | 586 | 532 | 566 | 466 | 300 | 121 | 148 |  | 78 |  |  |
| RegExp | 10092 | 19404 | 17693 | 10092 | 9699 | 9748 | 10001 | 9971 | 9209 | 9038 | 1124 | 1035 | 406 | 188 | 197 | 188 | 163 | 147 | 187 | 181 | 252 | 110 | 203 | 202 | 280 | 90 | 43 |  |  |  |  |
| Splay | 42245 | 35595 | 34438 | 38162 | 38504 | 29744 | 33648 | 19998 | 24936 | 15133 | 2803 | 4015 | 2434 | 1050 | 1474 | 1326 | 1278 | 1271 | 1010 | 1270 | 1182 | 763 | 682 | 872 | 430 | 324 | 185 |  | 131 |  |  |
| NavierStokes | 38881 | 39880 | 38287 | 38912 | 39029 | 39029 | 38990 | 37063 | 22364 | 22171 | 28020 | 3067 | 1086 | 1036 | 742 | 711 | 771 | 759 | 682 | 752 | 478 | 1069 | 476 | 193 | 153 | 115 | 164 |  | 58 |  |  |
| Score | 47823 | 44592 | 41472 | 40975 | 40547 | 39584 | 38896 | 27481 | 19794 | 17620 | 10896 | 2270 | 978 | 590 | 589 | 529 | 529 | 521 | 512 | 505 | 392 | 370 | 355 | 259 | 188 | 97 | 89 |  |  |  |  |
| Score/MB | 880 | 364 | 311 | 281 | 711 | 509 | 333 | 1907 | 386 | 242 | 55 | 129 | 8 | 50 | 15 | 12 | 66 | 58 | 57 |  | 51 | 48 | 47 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 35 | 42 | 58 | 60 | 61 | 65 | 68 | 63 | 62 | 78 | 83 | 82 | 120 | 146 | 252 | 274 | 130 | 367 |  |  |
