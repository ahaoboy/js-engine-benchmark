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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48253<br>98.4M<br>490/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47842<br>56.9M<br>840/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47417<br>36.4M<br>1302/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bare | [bare](https://github.com/holepunchto/bare) | 40670<br>65.3M<br>622/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40573<br>106.5M<br>380/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39829<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39475<br>40.7M<br>971/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39396<br>66.3M<br>594/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19990<br>19.4M<br>1030/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19462<br>40.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17163<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17096<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11013<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2248<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1545<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 872<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 843<br>4.3M<br>197/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 837<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 742<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 734<br>831.3K<br>904/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 727<br>1.3M<br>540/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 653<br>2M<br>331/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 547<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 484<br>2.1M<br>227/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 408<br>446.6K<br>935/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 359<br>414.5K<br>886/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 292<br>2.7K<br>110735/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 272<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 186<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | High level bindings to the quickjs javascript engine |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/21/2025, 4:49:39 AM

### ubuntu
| Engine | bun | v8 | JavaScriptCore | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | njs | primjs | rquickjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 14.1.0 |  |  | 2.4.4 | 24.6.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0.9.2 |  |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.4M | 56.9M | 36.4M | 65.3M | 106.5M | 123.1M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.1M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 98.4M | 1M | 36.4M | 65.3M | 106.5M | 123.1M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.1M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 55.9M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41730 | 37904 | 41385 | 31412 | 33219 | 32337 | 32577 | 32644 | 21714 | 13454 | 14410 | 13330 | 35546 | 12928 | 1137 | 681 | 692 | 714 | 565 | 591 | 595 | 575 | 481 | 332 | 289 | 260 | 244 | 224 | 115 | 199 | 89 | 102 | 59 | 59 | 270 | 27 |  | 133 |  |
| DeltaBlue | 56180 | 106847 | 54739 | 74720 | 73768 | 73292 | 76095 | 73735 | 25556 | 13653 | 13019 | 12886 | 26917 | 307 | 1058 | 666 | 671 | 680 | 537 | 601 | 590 | 588 | 473 | 386 | 331 | 363 | 356 | 325 | 158 | 250 | 162 | 112 | 55 | 55 | 277 | 33 |  | 180 |  |
| Crypto | 49134 | 41446 | 51292 | 41207 | 41880 | 41523 | 41167 | 41745 | 31891 | 20518 | 17734 | 17630 | 16592 | 7425 | 1358 | 590 | 756 | 600 | 870 | 509 | 548 | 379 | 891 | 413 | 792 | 186 | 190 | 182 | 140 | 124 | 324 | 98 | 80 | 61 | 301 | 31 |  | 132 |  |
| RayTrace | 117880 | 111960 | 119656 | 71853 | 66895 | 65637 | 65563 | 69707 | 35667 | 27648 | 26291 | 27722 | 3176 | 1343 | 1571 | 1143 | 911 | 1056 | 684 | 879 | 866 | 713 | 570 | 450 | 578 | 537 | 533 | 483 | 477 | 272 | 496 | 256 | 165 | 137 | 349 | 96 |  | 425 |  |
| EarleyBoyer | 68657 | 86495 | 70439 | 68499 | 73595 | 70880 | 70942 | 73795 | 6936 | 40221 | 36284 | 36606 | 39019 | 1713 | 3390 | 1871 | 1501 | 1752 | 1680 | 1379 | 1383 | 1233 | 791 | 846 | 598 | 574 | 561 | 510 | 584 | 502 | 322 | 289 | 194 | 137 |  | 81 |  | 515 |  |
| RegExp | 21135 | 10233 | 20042 | 10354 | 10032 | 10011 | 8938 | 10082 | 7803 | 8874 | 8866 | 8775 | 1319 | 587 | 554 | 256 | 229 | 226 | 116 | 238 | 233 | 183 | 64 | 179 | 132 | 242 | 217 | 200 | 464 | 210 | 96 | 244 | 49 | 94 |  |  |  |  |  |
| Splay | 37364 | 42408 | 37176 | 39059 | 37339 | 35677 | 36158 | 28669 | 20259 | 24773 | 12093 | 12330 | 2575 | 2844 | 3661 | 2420 | 1830 | 1976 | 2143 | 1799 | 1491 | 1708 | 887 | 1271 | 933 | 1216 | 1202 | 883 | 891 | 836 | 391 | 437 | 208 | 317 |  | 89 |  | 647 |  |
| NavierStokes | 39920 | 38912 | 35022 | 38881 | 38803 | 38732 | 38436 | 38842 | 36841 | 22341 | 22127 | 21941 | 32402 | 5765 | 1838 | 944 | 1268 | 1003 | 1223 | 896 | 970 | 934 | 1531 | 677 | 938 | 480 | 479 | 484 | 179 | 203 | 833 | 160 | 177 | 117 |  | 51 |  | 277 |  |
| Score | 48253 | 47842 | 47417 | 40670 | 40573 | 39829 | 39475 | 39396 | 19990 | 19462 | 17163 | 17096 | 11013 | 2248 | 1545 | 872 | 843 | 837 | 742 | 734 | 727 | 653 | 547 | 486 | 484 | 408 | 397 | 359 | 292 | 272 | 264 | 186 | 105 | 104 |  |  |  |  |  |
| Score/MB | 490 | 840 | 1302 | 622 | 380 | 323 | 971 | 594 | 1030 | 484 | 336 | 485 | 55 | 1 | 42 | 71 | 197 | 162 | 87 | 904 | 540 | 331 | 11 |  | 227 | 935 | 593 | 886 | 110735 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 40 | 34 | 46 | 48 | 49 | 61 | 51 | 51 | 59 | 85 | 63 | 68 | 79 | 80 | 85 | 100 | 113 | 131 | 145 | 234 | 235 | 31 | 401 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | bare | node | deno | mozjs | spidermonkey | spiderfire | graaljs | primjs | hermes | jjs | quickjs-ng | txiki.js | rquickjs | quickjs | llrt | njs | ladybird | duktape | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.101 | 0.10.1 | 1.2.20 |  | 24.6.0 | 2.4.4 |  | 143.0 |  | 24.1.2 |  | 0.12.0 |  | 0.8.0 | 24.12.0 |  | 2025.04.26 | 0.6.2.beta | 0.9.2 |  | 2.99.99 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 45.6M | 111.5M | 85.6M | 32.8M | 132.3M | 46.3M | 194M | 1.8M | 15.7M | 0 | 4.1M | 3.6M | 1.2M | 975.9K | 10.5M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 45.6M | 111.5M | 85.6M | 32.8M | 66.2M | 46.3M | 147.4K | 1.8M | 7.9M | 0 | 2.1M | 3.6M | 1.2M | 975.9K | 10.5M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 193.8M | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 45684 | 42825 | 41723 | 38596 | 33777 | 30748 | 34656 | 13588 | 13620 | 14336 | 14273 | 1094 | 928 | 2591 | 1001 | 704 | 944 | 762 | 695 | 564 | 762 | 399 | 441 | 284 | 83 | 248 | 70 | 133 | 96 | 33 | 194 | 33 |  | 195 |
| DeltaBlue | 69807 | 107032 | 99243 | 51248 | 102675 | 66528 | 74403 | 15974 | 14288 | 15320 | 1248 | 1152 | 801 | 309 | 1064 | 835 | 987 | 815 | 858 | 612 | 588 | 446 | 479 | 467 | 189 | 338 | 131 | 125 | 86 | 29 | 220 | 42 |  | 200 |
| Crypto | 69810 | 55271 | 58073 | 53551 | 52676 | 40282 | 41343 | 18391 | 22692 | 19615 | 23530 | 1551 | 1022 | 8853 | 1066 | 809 | 792 | 837 | 758 | 1052 | 1228 | 1035 | 528 | 238 | 384 | 155 | 115 | 99 | 97 | 31 | 238 | 36 |  | 117 |
| RayTrace | 131126 | 110998 | 85247 | 108630 | 80215 | 51873 | 58533 | 44695 | 36482 | 30309 | 2373 | 1290 | 1702 | 974 | 1152 | 1476 | 963 | 840 | 1492 | 762 | 773 | 992 | 607 | 734 | 563 | 235 | 430 | 271 | 190 | 33 | 225 | 111 |  | 525 |
| EarleyBoyer | 68639 | 80200 | 97170 | 54667 | 67599 | 62549 | 56087 | 45647 | 34700 | 34194 | 20766 | 1441 | 3511 | 752 | 2083 | 1995 | 1764 | 1711 | 2055 | 1803 | 1140 | 978 | 1142 | 877 | 378 | 546 | 609 | 344 | 196 | 76 |  | 100 |  | 529 |
| RegExp | 22888 | 11296 | 13806 | 19993 | 9972 | 10203 | 8348 | 12159 | 9155 | 8455 | 1002 | 230 | 517 | 367 | 189 | 231 | 220 | 222 | 211 | 166 | 84 | 216 | 207 | 276 | 272 | 229 | 559 | 190 | 116 | 13 |  |  |  |  |
| Splay | 33908 | 38480 | 27373 | 25384 | 27927 | 28098 | 25816 | 18311 | 16649 | 12390 | 2369 | 3175 | 2827 | 1000 | 1244 | 1801 | 1672 | 1972 | 1824 | 1612 | 1499 | 1434 | 1643 | 1121 | 443 | 851 | 753 | 535 | 495 | 120 |  | 113 |  | 627 |
| NavierStokes | 31959 | 35362 | 36434 | 27871 | 28260 | 29739 | 25668 | 18847 | 17259 | 17015 | 15863 | 3139 | 1179 | 1137 | 1724 | 1545 | 1489 | 1710 | 1015 | 1530 | 1503 | 1189 | 857 | 652 | 892 | 235 | 148 | 174 | 210 | 68 |  | 65 |  | 250 |
| Score | 51528 | 49259 | 47837 | 41558 | 40878 | 35053 | 34345 | 20735 | 18661 | 17282 | 5450 | 1303 | 1293 | 1102 | 1012 | 987 | 954 | 930 | 926 | 820 | 742 | 712 | 622 | 503 | 330 | 306 | 254 | 202 | 157 | 41 |  |  |  |  |
| Score/MB | 314133861 | 1197 | 842 | 731 | 897 | 314 | 401 | 631 | 141 | 372 | 28 | 740 | 82 |  | 245 | 273 | 808 | 975 | 88 | 341 | 17 | 1296 |  | 1200 | 208 | 24 | 96324 | 2 | 12 | 38 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 37 | 47 | 45 | 43 | 47 | 44 | 47 | 54 | 70 | 51 | 56 | 61 | 99 | 105 | 116 | 135 | 163 | 651 | 40 | 337 |  | 93 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-emscripten | quickjs-ng | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.101 |  |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  | 0.8.0 | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 55.8M | 132.7M | 143.1M | 116.4M | 77.6M | 14.4M | 51.5M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 9.3M | 42.2M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 26.1M | 112.9M | 110.8M | 85.3M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 0 | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 29.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 7.8M | 29.1M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38486 | 36343 | 32714 | 34628 | 33142 | 29325 | 32884 | 24150 | 13443 | 13641 | 41615 | 8875 | 701 | 510 | 445 | 447 | 376 | 366 | 426 | 208 | 233 | 233 | 188 | 106 | 54 | 49 |  | 23 |  |  |
| DeltaBlue | 110397 | 45040 | 76670 | 42520 | 68148 | 69140 | 74145 | 27036 | 13455 | 13032 | 30945 | 522 | 612 | 464 | 406 | 410 | 370 | 396 | 396 | 260 | 344 | 324 | 228 | 117 | 51 | 41 |  | 27 |  |  |
| Crypto | 40099 | 49820 | 40411 | 48583 | 38289 | 42024 | 41594 | 33453 | 20520 | 17437 | 17612 | 2486 | 792 | 545 | 426 | 515 | 428 | 427 | 369 | 318 | 180 | 189 | 111 | 88 | 59 | 74 |  | 29 |  |  |
| RayTrace | 113440 | 103080 | 72815 | 83101 | 67191 | 66237 | 63121 | 49530 | 27972 | 27084 | 4366 | 1406 | 1015 | 549 | 738 | 598 | 565 | 482 | 576 | 440 | 461 | 460 | 228 | 270 | 131 | 133 |  | 83 |  |  |
| EarleyBoyer | 86258 | 63456 | 68303 | 55719 | 73408 | 69999 | 72222 | 44571 | 41122 | 36573 | 25658 | 1359 | 2256 | 1000 | 1132 | 1005 | 997 | 871 | 975 | 526 | 582 | 549 | 462 | 298 | 126 | 142 |  | 71 |  |  |
| RegExp | 10092 | 18402 | 9851 | 17620 | 9790 | 9748 | 9618 | 10203 | 9209 | 9038 | 1025 | 693 | 405 | 188 | 196 | 175 | 194 | 179 | 187 | 110 | 200 | 247 | 196 | 274 | 90 | 43 |  |  |  |  |
| Splay | 42881 | 35261 | 37738 | 32393 | 31676 | 33224 | 28033 | 19330 | 22752 | 14139 | 2800 | 4717 | 2434 | 1025 | 1417 | 986 | 1278 | 1274 | 985 | 1009 | 1180 | 554 | 888 | 534 | 327 | 165 |  | 76 |  |  |
| NavierStokes | 38765 | 33687 | 38063 | 33586 | 38359 | 38436 | 37915 | 36915 | 21919 | 21284 | 27157 | 3404 | 1079 | 1038 | 736 | 748 | 719 | 752 | 662 | 1084 | 478 | 477 | 194 | 151 | 115 | 163 |  | 48 |  |  |
| Score | 47954 | 42987 | 40426 | 39842 | 38740 | 38589 | 38398 | 27744 | 19344 | 17386 | 10891 | 1989 | 977 | 587 | 582 | 541 | 527 | 508 | 505 | 385 | 380 | 352 | 253 | 193 | 99 | 87 |  |  |  |  |
| Score/MB | 885 | 352 | 724 | 300 | 270 | 331 | 494 | 1925 | 375 | 238 | 55 | 113 | 8 | 49 | 15 | 58 | 12 |  | 56 | 50 | 50 | 46 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 41 | 58 | 60 | 61 | 60 | 62 | 63 | 83 | 83 | 79 | 122 | 148 | 248 | 279 | 132 | 438 |  |  |
