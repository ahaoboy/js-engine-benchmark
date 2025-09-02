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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48134<br>57.1M<br>842/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47737<br>98.6M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47647<br>36.5M<br>1305/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40742<br>106.3M<br>383/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39425<br>123.3M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39004<br>40.7M<br>959/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 35747<br>66.3M<br>539/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19724<br>19.4M<br>1016/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19393<br>40.1M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17143<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16983<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12278<br>199.7M<br>61/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2784<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 870<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 839<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 751<br>1.4M<br>533/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 736<br>831.3K<br>906/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 732<br>1.4M<br>526/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 553<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 488<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 470<br>2.1M<br>221/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 402<br>446.6K<br>921/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 378<br>685K<br>565/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 356<br>414.5K<br>879/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 296<br>2.7K<br>112252/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 192<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/2/2025, 1:49:11 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | njs | primjs | rquickjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 | 1.2.21 |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 98.6M | 36.5M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 831.3K | 1.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 98.6M | 36.5M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 831.3K | 1.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37830 | 41610 | 40117 | 32760 | 32104 | 32531 | 33060 | 21774 | 13341 | 14043 | 12391 | 37007 | 13108 | 1107 | 678 | 663 | 706 | 580 | 568 | 628 | 532 | 584 | 489 | 334 | 289 | 275 | 249 | 229 | 135 | 200 | 90 | 104 | 60 | 58 | 279 | 26 |  | 127 |  |
| DeltaBlue | 108195 | 54812 | 54124 | 76518 | 73517 | 75421 | 73821 | 25338 | 13607 | 13065 | 12986 | 40259 | 222 | 1051 | 666 | 668 | 686 | 567 | 544 | 605 | 571 | 582 | 453 | 390 | 325 | 363 | 358 | 325 | 159 | 246 | 164 | 113 | 55 | 55 | 281 | 32 |  | 173 |  |
| Crypto | 41158 | 49404 | 50461 | 41633 | 40907 | 41480 | 41762 | 31524 | 20496 | 17439 | 17691 | 28231 | 8650 | 1354 | 584 | 766 | 600 | 528 | 877 | 514 | 556 | 379 | 876 | 411 | 791 | 187 | 190 | 182 | 126 | 122 | 326 | 98 | 80 | 62 | 305 | 31 |  | 135 |  |
| RayTrace | 113292 | 113292 | 118842 | 68523 | 66525 | 59939 | 68449 | 32864 | 27454 | 27177 | 28165 | 3983 | 1325 | 1581 | 1153 | 900 | 1050 | 914 | 684 | 860 | 882 | 709 | 540 | 458 | 567 | 518 | 525 | 490 | 448 | 270 | 499 | 255 | 165 | 140 | 343 | 94 |  | 414 |  |
| EarleyBoyer | 88065 | 67986 | 69220 | 73718 | 65834 | 70197 | 74823 | 7091 | 40702 | 36023 | 36893 | 32763 | 1434 | 3407 | 1850 | 1470 | 1733 | 1363 | 1689 | 1361 | 1240 | 1228 | 750 | 855 | 563 | 542 | 523 | 497 | 583 | 495 | 324 | 285 | 190 | 137 |  | 80 |  | 521 |  |
| RegExp | 10494 | 20932 | 20456 | 10152 | 9961 | 8983 | 10072 | 7855 | 8828 | 8857 | 8857 | 1300 | 1064 | 551 | 255 | 230 | 227 | 218 | 115 | 236 | 225 | 183 | 62 | 180 | 127 | 238 | 217 | 197 | 462 | 206 | 96 | 246 | 48 | 92 |  |  |  |  |  |
| Splay | 41984 | 37184 | 35897 | 36557 | 35709 | 36263 | 13120 | 19691 | 24561 | 12162 | 11957 | 2391 | 5468 | 3590 | 2326 | 1781 | 1913 | 2214 | 2062 | 1728 | 2102 | 1654 | 1244 | 1265 | 877 | 1162 | 852 | 809 | 979 | 877 | 374 | 551 | 214 | 319 |  | 86 |  | 851 |  |
| NavierStokes | 38912 | 39920 | 40136 | 38803 | 38803 | 38397 | 38655 | 36545 | 22193 | 22112 | 22090 | 30274 | 12994 | 1839 | 983 | 1332 | 989 | 968 | 1195 | 922 | 945 | 930 | 1441 | 673 | 900 | 472 | 486 | 489 | 183 | 198 | 818 | 162 | 174 | 120 |  | 51 |  | 283 |  |
| Score | 48134 | 47737 | 47647 | 40742 | 39425 | 39004 | 35747 | 19724 | 19393 | 17143 | 16983 | 12278 | 2784 | 1535 | 870 | 839 | 831 | 751 | 739 | 736 | 732 | 649 | 553 | 488 | 470 | 402 | 378 | 356 | 296 | 270 | 263 | 192 | 105 | 104 |  |  |  |  |  |
| Score/MB | 842 | 484 | 1305 | 383 | 319 | 959 | 539 | 1016 | 483 | 336 | 482 | 61 | 2 | 42 | 70 | 196 | 161 | 533 | 87 | 906 | 526 | 329 | 11 |  | 221 | 921 | 565 | 879 | 112252 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 38 | 34 | 46 | 48 | 49 | 53 | 61 | 51 | 53 | 59 | 88 | 63 | 71 | 81 | 81 | 85 | 102 | 114 | 131 | 144 | 237 | 236 | 31 | 403 |  | 87 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | rquickjs | llrt | quickjs-ng | quickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.144 | 1.2.21 | 2.4.5 | 0.10.1 | 24.7.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 |  | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.3M | 56.8M | 85.5M | 56.8M | 111.7M | 132.3M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 1.2M | 10.5M | 4.1M | 975.9K | 41.4M | 2.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.3M | 56.8M | 85.5M | 56.8M | 111.7M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 1.2M | 10.5M | 2.1M | 975.9K | 41.4M | 1.8M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 45423 | 39708 | 40340 | 31835 | 41773 | 33293 | 11494 | 12733 | 14198 | 32192 | 16461 | 994 | 1107 | 987 | 934 | 983 | 740 | 967 | 720 | 665 | 465 | 574 | 338 | 321 | 99 | 202 | 142 | 101 | 35 | 206 | 36 |  | 217 |
| DeltaBlue | 68359 | 111012 | 61385 | 51539 | 92625 | 58098 | 16397 | 15062 | 14910 | 22050 | 620 | 892 | 1231 | 1057 | 959 | 1043 | 867 | 889 | 552 | 620 | 415 | 638 | 519 | 328 | 169 | 168 | 139 | 86 | 33 | 219 | 41 |  | 227 |
| Crypto | 70692 | 62085 | 50640 | 42227 | 43621 | 37044 | 25745 | 20693 | 19359 | 36582 | 3644 | 1237 | 1715 | 991 | 846 | 911 | 887 | 1006 | 1566 | 1108 | 998 | 564 | 251 | 148 | 341 | 133 | 123 | 101 | 38 | 238 | 39 |  | 134 |
| RayTrace | 189955 | 158506 | 151402 | 62921 | 61863 | 59125 | 47063 | 47655 | 33300 | 1313 | 1005 | 2038 | 1641 | 1745 | 1127 | 1625 | 1296 | 845 | 995 | 786 | 972 | 662 | 791 | 341 | 614 | 571 | 316 | 218 | 39 | 303 | 122 |  | 625 |
| EarleyBoyer | 94695 | 105027 | 80444 | 72039 | 63735 | 60450 | 49645 | 46631 | 38947 | 31753 | 811 | 3833 | 1451 | 2521 | 1913 | 2487 | 1791 | 1880 | 1269 | 1829 | 972 | 1103 | 788 | 650 | 340 | 610 | 348 | 205 | 72 |  | 100 |  | 622 |
| RegExp | 26510 | 11934 | 18584 | 9408 | 6552 | 8174 | 9941 | 11410 | 9274 | 1211 | 595 | 509 | 222 | 277 | 213 | 206 | 198 | 226 | 94 | 170 | 210 | 216 | 297 | 259 | 273 | 532 | 193 | 125 | 13 |  |  |  |  |
| Splay | 29703 | 38472 | 27821 | 25340 | 19786 | 18254 | 20117 | 18360 | 12866 | 1911 | 1659 | 3505 | 3777 | 2117 | 2885 | 1643 | 1573 | 984 | 2058 | 1417 | 1683 | 1446 | 1031 | 1157 | 440 | 762 | 418 | 511 | 152 |  | 108 |  | 800 |
| NavierStokes | 32846 | 33653 | 24536 | 33586 | 28708 | 27103 | 19215 | 18995 | 19253 | 22238 | 5416 | 1367 | 3768 | 1374 | 1505 | 1150 | 1710 | 1510 | 1838 | 1556 | 1458 | 827 | 670 | 282 | 982 | 191 | 175 | 199 | 72 |  | 74 |  | 282 |
| Score | 56382 | 53820 | 45804 | 35486 | 35419 | 31762 | 21374 | 20804 | 18232 | 9294 | 1889 | 1462 | 1431 | 1177 | 1053 | 1049 | 957 | 908 | 853 | 839 | 744 | 667 | 523 | 362 | 330 | 324 | 210 | 163 | 45 |  |  |  |  |
| Score/MB | 343725651 | 1304 | 806 | 414 | 623 | 284 | 161 | 633 | 393 | 47 |  | 93 | 813 | 326 | 880 | 99 | 232 | 952 | 20 | 349 | 1355 |  | 1248 | 28 | 208 | 122871 | 2 | 13 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 41 | 34 | 41 | 41 | 45 | 44 | 45 | 44 | 65 | 55 | 51 | 57 | 62 | 94 | 102 | 94 | 131 | 155 | 628 | 36 | 317 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | rquickjs-pgo | llrt | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.144 |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  |  | 0.6.2.beta | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 51.4M | 72.8M | 196.1M | 17.4M | 112.8M | 11.8M | 38.4M | 9.2M | 9M | 42.2M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.3M | 338K | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.4M | 1M | 13.1M | 1.7M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.4M | 109.8M | 6.9M | 32.7M | 7.8M | 7.9M | 29.1M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38723 | 36350 | 36781 | 31355 | 32428 | 32559 | 24214 | 13457 | 14142 | 36057 | 7755 | 692 | 509 | 451 | 406 | 448 | 395 | 438 | 386 | 229 | 212 | 237 | 192 | 106 | 54 | 49 |  | 22 |  |  |
| DeltaBlue | 104572 | 45436 | 46415 | 72320 | 71679 | 67070 | 28616 | 13435 | 13032 | 33647 | 226 | 624 | 465 | 403 | 403 | 476 | 377 | 403 | 396 | 324 | 260 | 328 | 234 | 111 | 52 | 41 |  | 26 |  |  |
| Crypto | 39694 | 50012 | 46047 | 42000 | 41908 | 41992 | 33653 | 20506 | 17104 | 21120 | 1502 | 791 | 539 | 428 | 519 | 325 | 427 | 374 | 428 | 190 | 311 | 181 | 114 | 87 | 59 | 75 |  | 29 |  |  |
| RayTrace | 112774 | 105152 | 86357 | 68079 | 63195 | 66747 | 48543 | 28211 | 27204 | 2960 | 1147 | 1005 | 549 | 722 | 589 | 589 | 546 | 578 | 459 | 468 | 434 | 471 | 227 | 267 | 130 | 134 |  | 78 |  |  |
| EarleyBoyer | 88013 | 64231 | 57373 | 74017 | 70998 | 73728 | 43530 | 41185 | 36808 | 26445 | 926 | 2239 | 1006 | 1133 | 1002 | 943 | 996 | 982 | 883 | 574 | 521 | 574 | 457 | 291 | 124 | 142 |  | 69 |  |  |
| RegExp | 10152 | 19183 | 17473 | 9751 | 9689 | 9761 | 9930 | 9237 | 8828 | 1020 | 683 | 406 | 188 | 195 | 157 | 155 | 175 | 186 | 179 | 251 | 109 | 200 | 199 | 276 | 90 | 43 |  |  |  |  |
| Splay | 43304 | 33822 | 33289 | 32776 | 33118 | 28212 | 19929 | 23901 | 14041 | 1984 | 5321 | 2461 | 1026 | 1423 | 1263 | 1255 | 1296 | 985 | 1254 | 1165 | 1001 | 1189 | 756 | 527 | 320 | 182 |  | 82 |  |  |
| NavierStokes | 38990 | 33768 | 38173 | 39029 | 38990 | 38951 | 36915 | 22112 | 22193 | 22683 | 3136 | 1072 | 1034 | 743 | 741 | 760 | 717 | 673 | 751 | 478 | 1077 | 482 | 186 | 144 | 115 | 167 |  | 49 |  |  |
| Score | 47821 | 43241 | 41411 | 39550 | 39105 | 38513 | 27831 | 19514 | 17472 | 9897 | 1542 | 976 | 587 | 582 | 541 | 524 | 523 | 511 | 509 | 389 | 383 | 380 | 249 | 190 | 99 | 88 |  |  |  |  |
| Score/MB | 880 | 353 | 311 | 276 | 335 | 495 | 1931 | 379 | 239 | 50 | 88 | 8 | 49 | 15 | 58 | 58 | 12 | 57 |  | 51 | 50 | 50 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 44 | 41 | 58 | 60 | 62 | 66 | 62 | 63 | 63 | 78 | 84 | 83 | 122 | 152 | 248 | 280 | 130 | 439 |  |  |
