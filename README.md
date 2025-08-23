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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47604<br>36.4M<br>1307/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47352<br>98.4M<br>481/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45808<br>56.9M<br>804/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40832<br>106.3M<br>384/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40772<br>65.3M<br>624/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39917<br>123.1M<br>324/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39086<br>66.3M<br>589/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39037<br>40.7M<br>960/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20010<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19323<br>40.1M<br>481/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16995<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16962<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12191<br>199.7M<br>61/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2695<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1532<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 867<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 831<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 748<br>1.4M<br>531/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 739<br>1.4M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 736<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 728<br>831.3K<br>896/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 642<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 571<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 505<br>2.1M<br>237/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 497<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 382<br>446.6K<br>875/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 373<br>685K<br>557/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 355<br>414.5K<br>877/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 303<br>2.7K<br>114907/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 192<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/23/2025, 1:47:33 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | txiki.js | quickjs | rquickjs-pgo | rquickjs | njs | primjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.20 | 14.1.0 | 2.4.5 |  | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.4M | 98.4M | 56.9M | 106.3M | 65.3M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 36.4M | 98.4M | 1M | 106.3M | 65.3M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 55.9M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 39478 | 39651 | 38013 | 32499 | 32365 | 32104 | 32686 | 32552 | 23486 | 13146 | 12447 | 14071 | 36245 | 11177 | 1108 | 681 | 714 | 691 | 562 | 531 | 552 | 575 | 580 | 490 | 294 | 344 | 275 | 244 | 229 | 133 | 195 | 90 | 104 | 60 | 59 | 275 | 26 |  | 88 |  |
| DeltaBlue | 50871 | 55519 | 108559 | 75718 | 77338 | 72849 | 72168 | 79037 | 25674 | 13435 | 12992 | 12847 | 39386 | 251 | 1053 | 675 | 682 | 668 | 583 | 570 | 523 | 599 | 577 | 477 | 318 | 383 | 361 | 357 | 324 | 171 | 248 | 165 | 115 | 54 | 55 | 284 | 32 |  | 177 |  |
| Crypto | 52001 | 49460 | 41298 | 41628 | 40341 | 41795 | 41802 | 41391 | 31643 | 20477 | 17560 | 17478 | 28430 | 8312 | 1370 | 583 | 601 | 742 | 521 | 557 | 881 | 512 | 367 | 902 | 791 | 427 | 187 | 189 | 180 | 147 | 118 | 326 | 95 | 80 | 61 | 300 | 31 |  | 134 |  |
| RayTrace | 121432 | 112626 | 112182 | 68967 | 71261 | 66599 | 68301 | 60901 | 33488 | 27426 | 28211 | 26640 | 5139 | 1157 | 1516 | 1130 | 1040 | 910 | 918 | 892 | 685 | 879 | 703 | 571 | 577 | 455 | 530 | 524 | 485 | 476 | 270 | 499 | 255 | 163 | 137 | 348 | 95 |  | 421 |  |
| EarleyBoyer | 69340 | 67326 | 87459 | 74397 | 69024 | 72049 | 72661 | 69437 | 7079 | 41218 | 36660 | 35629 | 28079 | 1365 | 3402 | 1865 | 1744 | 1471 | 1377 | 1261 | 1683 | 1378 | 1223 | 779 | 585 | 858 | 542 | 536 | 503 | 575 | 502 | 325 | 287 | 188 | 136 |  | 80 |  | 501 |  |
| RegExp | 20345 | 21205 | 10567 | 10142 | 10375 | 10032 | 10122 | 8766 | 7819 | 8810 | 8883 | 8837 | 1369 | 927 | 552 | 254 | 228 | 224 | 219 | 226 | 116 | 237 | 184 | 63 | 136 | 180 | 242 | 217 | 193 | 447 | 209 | 96 | 248 | 48 | 94 |  |  |  |  |  |
| Splay | 36655 | 36166 | 28326 | 37355 | 38113 | 35269 | 28286 | 35538 | 19950 | 24398 | 12077 | 11706 | 1842 | 6401 | 3606 | 2353 | 1944 | 1771 | 2184 | 2169 | 2086 | 1760 | 1649 | 1261 | 1304 | 1269 | 747 | 781 | 829 | 1001 | 940 | 376 | 558 | 217 | 340 |  | 87 |  | 783 |  |
| NavierStokes | 40216 | 39920 | 38732 | 38803 | 38881 | 38842 | 38881 | 38436 | 36434 | 22112 | 22090 | 22090 | 33027 | 12750 | 1851 | 950 | 986 | 1252 | 955 | 954 | 1218 | 885 | 906 | 1514 | 951 | 744 | 469 | 482 | 480 | 175 | 201 | 836 | 160 | 171 | 119 |  | 52 |  | 286 |  |
| Score | 47604 | 47352 | 45808 | 40832 | 40772 | 39917 | 39086 | 39037 | 20010 | 19323 | 16995 | 16962 | 12191 | 2695 | 1532 | 867 | 833 | 831 | 748 | 739 | 736 | 728 | 642 | 571 | 505 | 497 | 382 | 373 | 355 | 303 | 273 | 264 | 192 | 105 | 105 |  |  |  |  |  |
| Score/MB | 1307 | 481 | 804 | 384 | 624 | 324 | 589 | 960 | 1031 | 481 | 482 | 332 | 61 | 2 | 42 | 70 | 161 | 194 | 531 | 531 | 87 | 896 | 325 | 12 | 237 |  | 875 | 557 | 877 | 114907 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 35 | 34 | 46 | 49 | 48 | 53 | 53 | 61 | 51 | 60 | 86 | 66 | 62 | 80 | 83 | 87 | 99 | 115 | 131 | 145 | 238 | 236 | 31 | 398 |  | 88 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bun | bare | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | primjs | hermes | jjs | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.108 |  | 1.2.20 |  | 2.4.5 | 0.10.1 | 24.6.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 | 2.99.99 |  |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 56.8M | 45.6M | 85.5M | 56.8M | 111.5M | 132.3M | 32.8M | 46.3M | 194M | 1.8M | 15.7M | 0 | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 562.1K | 41.5M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.1M | 0.2K | 56.8M | 45.6M | 85.5M | 56.8M | 111.5M | 66.2M | 32.8M | 46.3M | 147.4K | 1.8M | 7.9M | 0 | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 562.1K | 41.5M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 46870 | 49486 | 50125 | 43001 | 47516 | 48272 | 43083 | 15533 | 15268 | 14897 | 35651 | 1150 | 1228 | 590 | 1151 | 945 | 1286 | 1156 | 996 | 767 | 537 | 719 | 567 | 352 | 330 | 110 | 199 | 156 | 101 | 41 | 207 | 37 |  | 224 |
| DeltaBlue | 138643 | 73741 | 70336 | 113141 | 97947 | 106463 | 104506 | 17422 | 16728 | 16457 | 43711 | 1272 | 1252 | 1665 | 1332 | 1112 | 1110 | 1114 | 1025 | 840 | 633 | 739 | 612 | 566 | 382 | 206 | 220 | 186 | 91 | 40 | 230 | 52 |  | 246 |
| Crypto | 62651 | 78106 | 72795 | 57518 | 56992 | 59079 | 57656 | 25411 | 20922 | 20810 | 38222 | 1772 | 1481 | 11946 | 1205 | 1026 | 1085 | 1311 | 1011 | 1180 | 1290 | 1537 | 561 | 289 | 191 | 427 | 161 | 160 | 112 | 43 | 259 | 47 |  | 146 |
| RayTrace | 146592 | 184035 | 170641 | 94275 | 82805 | 89391 | 85321 | 47359 | 44547 | 39624 | 1880 | 1893 | 2506 | 645 | 2007 | 2012 | 1571 | 1218 | 1402 | 981 | 1053 | 1080 | 774 | 930 | 368 | 692 | 708 | 425 | 235 | 43 | 319 | 154 |  | 657 |
| EarleyBoyer | 109770 | 97025 | 98062 | 90950 | 98008 | 97940 | 86964 | 51727 | 46670 | 45377 | 50409 | 3703 | 3732 | 1210 | 3183 | 2792 | 2474 | 2342 | 2191 | 2567 | 1184 | 1292 | 1342 | 1072 | 748 | 420 | 732 | 417 | 227 | 89 |  | 125 |  | 687 |
| RegExp | 13910 | 29152 | 28639 | 14274 | 14652 | 14245 | 13493 | 11922 | 12781 | 11886 | 1608 | 319 | 556 | 713 | 298 | 312 | 266 | 267 | 260 | 205 | 250 | 103 | 249 | 344 | 300 | 316 | 589 | 220 | 135 | 15 |  |  |  |  |
| Splay | 55181 | 39979 | 26835 | 53906 | 52651 | 31284 | 40737 | 29858 | 17741 | 15991 | 3208 | 4974 | 4401 | 1739 | 3276 | 3481 | 2277 | 2459 | 3058 | 2214 | 2228 | 1866 | 1777 | 1303 | 1146 | 543 | 912 | 594 | 551 | 146 |  | 123 |  | 1108 |
| NavierStokes | 40513 | 34098 | 30719 | 38842 | 40324 | 38990 | 37694 | 21602 | 21348 | 20398 | 22854 | 3765 | 1393 | 4136 | 2104 | 1510 | 2057 | 2311 | 1710 | 1882 | 1431 | 1985 | 967 | 712 | 310 | 1022 | 214 | 261 | 220 | 76 |  | 76 |  | 316 |
| Score | 61465 | 61410 | 56331 | 53945 | 53485 | 51058 | 50134 | 24493 | 21944 | 20839 | 12674 | 1797 | 1709 | 1618 | 1489 | 1333 | 1286 | 1282 | 1200 | 1063 | 902 | 901 | 736 | 607 | 404 | 386 | 378 | 270 | 176 | 51 |  |  |  |  |
| Score/MB | 1493 | 374378210 | 991 | 1184 | 625 | 899 | 449 | 185 | 668 | 449 | 65 | 1021 | 108 |  | 412 | 126 | 311 | 1345 | 1003 | 443 | 1643 | 21 |  | 1448 | 31 | 244 | 143349 | 3 | 14 | 48 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 36 | 32 | 36 | 37 | 38 | 39 | 37 | 41 | 48 | 46 | 62 | 50 | 55 | 81 | 90 | 85 | 103 | 145 | 540 | 34 | 275 |  | 76 |
### windows
| Engine | v8 | JavaScriptCore | bare | deno | bun | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs-pgo | rquickjs | quickjs-ng | quickjs-emscripten | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.108 |  |  | 2.4.5 | 1.2.20 | 0.10.1 | 24.6.0 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  | 0.8.0 |  | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 55.8M | 142.9M | 132.7M | 77.6M | 116.4M | 14.4M | 51.5M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 42.2M | 9M | 8M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 26.1M | 110.6M | 112.9M | 47.4M | 85.3M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1M | 1.2M | 1.7M | 0 | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 29.7M | 32.3M | 19.8M | 30.3M | 31.1M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 29.1M | 7.9M | 6.7M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38458 | 36213 | 27949 | 33032 | 36951 | 33180 | 32026 | 24207 | 13598 | 14276 | 35023 | 2747 | 688 | 513 | 448 | 388 | 448 | 441 | 438 | 361 | 212 | 233 | 240 | 196 | 104 | 54 | 48 |  | 22 |  |  |
| DeltaBlue | 100288 | 47063 | 78138 | 72479 | 42355 | 76069 | 66872 | 29899 | 13515 | 13177 | 29007 | 508 | 625 | 464 | 410 | 370 | 469 | 469 | 390 | 394 | 258 | 319 | 350 | 223 | 112 | 48 | 41 |  | 27 |  |  |
| Crypto | 39776 | 48864 | 41896 | 40014 | 47913 | 38752 | 41994 | 33644 | 20549 | 17991 | 21441 | 1782 | 788 | 547 | 431 | 428 | 325 | 327 | 375 | 423 | 316 | 188 | 180 | 113 | 91 | 58 | 73 |  | 29 |  |  |
| RayTrace | 112996 | 107890 | 72815 | 68301 | 83979 | 66895 | 65933 | 52835 | 27454 | 26613 | 4768 | 2499 | 1006 | 518 | 742 | 598 | 592 | 592 | 578 | 458 | 435 | 447 | 457 | 221 | 263 | 123 | 131 |  | 82 |  |  |
| EarleyBoyer | 87628 | 63915 | 70111 | 73274 | 54385 | 74752 | 70116 | 43263 | 41466 | 36180 | 26520 | 1143 | 2211 | 1008 | 1151 | 1000 | 939 | 935 | 962 | 873 | 525 | 570 | 583 | 436 | 296 | 122 | 132 |  | 69 |  |  |
| RegExp | 10001 | 18857 | 9930 | 9819 | 16654 | 9809 | 9770 | 10313 | 8974 | 8983 | 1288 | 811 | 395 | 183 | 197 | 184 | 155 | 153 | 187 | 181 | 110 | 248 | 198 | 197 | 276 | 89 | 42 |  |  |  |  |
| Splay | 42196 | 36356 | 39556 | 33546 | 30942 | 28628 | 32694 | 20079 | 24374 | 14864 | 4246 | 3327 | 2110 | 1039 | 1320 | 1328 | 1270 | 1271 | 961 | 1276 | 1026 | 1157 | 1182 | 770 | 552 | 321 | 156 |  | 85 |  |  |
| NavierStokes | 38912 | 33916 | 38881 | 38842 | 33882 | 39029 | 38951 | 36618 | 22341 | 22193 | 14514 | 3458 | 1035 | 1032 | 741 | 713 | 759 | 768 | 670 | 754 | 1064 | 456 | 470 | 189 | 150 | 115 | 163 |  | 47 |  |  |
| Score | 47274 | 43722 | 40426 | 39670 | 39544 | 39008 | 38835 | 28390 | 19512 | 17705 | 11027 | 1689 | 948 | 583 | 581 | 532 | 524 | 523 | 506 | 504 | 384 | 383 | 381 | 246 | 193 | 96 | 85 |  |  |  |  |
| Score/MB | 872 | 358 | 724 | 277 | 298 | 502 | 333 | 1970 | 378 | 243 | 56 | 96 | 8 | 49 | 15 | 12 | 58 | 65 | 56 |  | 50 | 50 | 50 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 45 | 42 | 59 | 59 | 61 | 67 | 67 | 63 | 63 | 85 | 80 | 83 | 124 | 148 | 252 | 296 | 131 | 441 |  |  |
