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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48380<br>36.6M<br>1322/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48263<br>98.6M<br>489/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47512<br>57.4M<br>828/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42146<br>108.8M<br>387/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40714<br>65.3M<br>623/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40016<br>123.3M<br>324/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39446<br>66.3M<br>594/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39183<br>40.7M<br>963/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20021<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19340<br>39.8M<br>485/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17065<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17033<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11654<br>199.7M<br>58/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2408<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1546<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 865<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 764<br>1.4M<br>549/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 754<br>1.4M<br>535/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 746<br>831.3K<br>918/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 552<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 501<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 383<br>446.6K<br>878/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 371<br>414.5K<br>916/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 365<br>685K<br>545/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 254<br>2.7K<br>96324/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 190<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/14/2025, 1:50:09 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | rquickjs-pgo | primjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | goja | xst | ringo | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.21 | 14.2.0 | 2.5.0 |  | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 |  |  | 16.9.1 | 4.0.0 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.6M | 98.6M | 57.4M | 108.8M | 65.3M | 123.3M | 66.3M | 40.7M | 19.4M | 39.8M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 414.5K | 685K | 13.2M | 2.1M | 2.7K | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Exe size | 36.6M | 98.6M | 1M | 108.8M | 65.3M | 123.3M | 66.3M | 40.7M | 571K | 39.8M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 414.5K | 685K | 13.2M | 2.1M | 2.7K | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41056 | 40354 | 35789 | 35298 | 31588 | 32118 | 32866 | 33466 | 23158 | 13390 | 13072 | 13319 | 35712 | 13305 | 1132 | 683 | 683 | 712 | 582 | 579 | 628 | 561 | 578 | 544 | 286 | 340 | 267 | 231 | 238 | 205 | 88 | 80 | 102 | 60 | 59 | 271 | 29 |  | 130 |  |
| DeltaBlue | 54362 | 57807 | 112209 | 80314 | 76697 | 74204 | 75877 | 76743 | 24946 | 13706 | 12767 | 13045 | 37337 | 218 | 1071 | 671 | 663 | 683 | 584 | 581 | 600 | 541 | 580 | 463 | 329 | 389 | 361 | 318 | 320 | 251 | 162 | 150 | 110 | 55 | 55 | 281 | 34 |  | 176 |  |
| Crypto | 52041 | 46871 | 41278 | 41537 | 41568 | 41745 | 41604 | 41175 | 31769 | 20346 | 17704 | 17551 | 29510 | 7494 | 1366 | 592 | 752 | 583 | 560 | 537 | 519 | 876 | 379 | 824 | 788 | 416 | 188 | 183 | 189 | 124 | 326 | 138 | 97 | 80 | 62 | 299 | 35 |  | 135 |  |
| RayTrace | 120470 | 119212 | 110110 | 72075 | 72075 | 65341 | 68005 | 59939 | 35593 | 27232 | 28194 | 27030 | 4237 | 1358 | 1559 | 1123 | 898 | 1065 | 935 | 933 | 905 | 681 | 712 | 569 | 574 | 453 | 525 | 489 | 517 | 272 | 496 | 440 | 251 | 165 | 137 | 354 | 93 |  | 417 |  |
| EarleyBoyer | 70130 | 69383 | 83669 | 75292 | 69231 | 72391 | 73560 | 71931 | 7040 | 40597 | 36976 | 36120 | 30403 | 828 | 3412 | 1837 | 1454 | 1746 | 1368 | 1372 | 1378 | 1683 | 1229 | 787 | 573 | 850 | 558 | 514 | 512 | 497 | 315 | 519 | 283 | 190 | 136 |  | 83 |  | 504 |  |
| RegExp | 20568 | 21820 | 10466 | 10132 | 10284 | 9981 | 10132 | 8983 | 7811 | 8737 | 8737 | 8883 | 1385 | 653 | 555 | 250 | 225 | 227 | 224 | 215 | 241 | 115 | 182 | 64 | 134 | 177 | 238 | 198 | 215 | 209 | 95 | 403 | 250 | 49 | 93 |  |  |  |  |  |
| Splay | 36915 | 37372 | 41943 | 39817 | 37614 | 36076 | 28726 | 35269 | 19525 | 24317 | 12110 | 12196 | 4425 | 6063 | 3623 | 2326 | 1799 | 1907 | 2206 | 2200 | 1793 | 2100 | 1672 | 976 | 1288 | 1216 | 774 | 1116 | 799 | 789 | 366 | 755 | 528 | 203 | 340 |  | 137 |  | 722 |  |
| NavierStokes | 40284 | 39920 | 38732 | 38617 | 38842 | 38803 | 38803 | 38469 | 36803 | 22319 | 22067 | 21963 | 10960 | 11677 | 1843 | 963 | 1277 | 957 | 967 | 954 | 912 | 1212 | 931 | 1483 | 952 | 686 | 473 | 479 | 482 | 200 | 860 | 151 | 162 | 176 | 119 |  | 55 |  | 274 |  |
| Score | 48380 | 48263 | 47512 | 42146 | 40714 | 40016 | 39446 | 39183 | 20021 | 19340 | 17065 | 17033 | 11654 | 2408 | 1546 | 865 | 832 | 827 | 764 | 754 | 746 | 739 | 649 | 552 | 501 | 486 | 383 | 371 | 365 | 270 | 262 | 254 | 190 | 105 | 105 |  |  |  |  |  |
| Score/MB | 1322 | 489 | 828 | 387 | 623 | 324 | 594 | 963 | 1031 | 485 | 484 | 334 | 58 | 2 | 42 | 70 | 194 | 160 | 549 | 535 | 918 | 87 | 329 | 11 | 235 |  | 878 | 916 | 545 | 20 | 125 | 96324 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 41 | 34 | 47 | 48 | 50 | 52 | 53 | 51 | 61 | 59 | 87 | 69 | 63 | 81 | 85 | 82 | 114 | 132 | 110 | 145 | 237 | 236 | 31 | 372 |  | 88 | 7 |
### macos-arm64
| Engine | bun | JavaScriptCore | v8 | deno | node | bare | dune | spidermonkey | spiderfire | mozjs | graaljs | hermes | txiki.js | primjs | llrt | quickjs-ng | jjs | quickjs | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 |  | 14.2.132 | 2.5.0 | 24.8.0 |  | 0.10.1 | 143.0 |  |  | 24.1.2 | 0.12.0 | 24.12.0 |  | 0.6.2.beta | 0.8.0 |  | 2025.04.26 |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 0.2K | 41M | 87.9M | 111.8M | 45.6M | 56.8M | 131.7M | 46.3M | 32.8M | 194M | 15.7M | 3.6M | 1.8M | 10.5M | 4.1M | 0 | 975.9K | 1.2M | 2.4M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 56.8M | 0.2K | 41M | 87.9M | 111.8M | 45.6M | 56.8M | 65.9M | 46.3M | 32.8M | 147.4K | 7.9M | 3.6M | 1.8M | 10.5M | 2.1M | 0 | 975.9K | 1.2M | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50658 | 48600 | 37565 | 58675 | 45808 | 36732 | 35097 | 13990 | 13778 | 11357 | 33720 | 1306 | 1280 | 1046 | 1019 | 1349 | 133 | 1098 | 891 | 655 | 875 | 376 | 621 | 392 | 278 | 229 | 80 | 139 | 114 | 37 | 182 | 35 |  | 217 |
| DeltaBlue | 72862 | 62012 | 122510 | 110020 | 102661 | 106113 | 80604 | 15445 | 16219 | 15148 | 48755 | 1200 | 1271 | 1124 | 1135 | 1248 | 595 | 1106 | 947 | 729 | 738 | 516 | 671 | 556 | 309 | 201 | 143 | 150 | 99 | 35 | 218 | 37 |  | 225 |
| Crypto | 71350 | 64339 | 54349 | 55626 | 59209 | 46436 | 52720 | 23432 | 19289 | 18345 | 44177 | 1435 | 1206 | 1628 | 999 | 1193 | 9557 | 1348 | 914 | 1174 | 1501 | 1270 | 555 | 292 | 156 | 141 | 305 | 132 | 108 | 35 | 257 | 58 |  | 143 |
| RayTrace | 192989 | 173971 | 143262 | 91093 | 92203 | 66747 | 65711 | 50195 | 36481 | 35114 | 3118 | 2430 | 2061 | 1650 | 1846 | 1446 | 2105 | 1206 | 1364 | 880 | 898 | 1010 | 784 | 922 | 318 | 627 | 555 | 348 | 222 | 38 | 303 | 135 |  | 559 |
| EarleyBoyer | 103805 | 102962 | 109623 | 105255 | 98559 | 72788 | 81533 | 51810 | 40108 | 37665 | 47041 | 5042 | 3089 | 1263 | 2934 | 2529 | 1032 | 2187 | 1983 | 2197 | 1218 | 901 | 1322 | 979 | 511 | 706 | 372 | 356 | 229 | 77 |  | 114 |  | 620 |
| RegExp | 31065 | 32607 | 15138 | 14398 | 14895 | 9446 | 10112 | 11953 | 9380 | 9861 | 1525 | 700 | 313 | 289 | 317 | 265 | 839 | 275 | 237 | 189 | 92 | 198 | 243 | 312 | 266 | 589 | 303 | 196 | 118 | 13 |  |  |  |  |
| Splay | 52276 | 47478 | 65959 | 51356 | 42326 | 32556 | 20873 | 25507 | 12997 | 14253 | 5199 | 4632 | 3338 | 4176 | 4001 | 2326 | 1958 | 2371 | 2692 | 1565 | 2174 | 1980 | 1563 | 1640 | 1280 | 821 | 448 | 546 | 439 | 157 |  | 179 |  | 948 |
| NavierStokes | 38881 | 31312 | 37063 | 38655 | 38584 | 35284 | 25796 | 16505 | 18847 | 19886 | 24857 | 1535 | 2006 | 3609 | 1661 | 2184 | 3552 | 2279 | 1432 | 1633 | 1750 | 1396 | 846 | 639 | 307 | 165 | 1055 | 170 | 192 | 72 |  | 92 |  | 289 |
| Score | 65362 | 60018 | 58926 | 56122 | 52924 | 41923 | 38003 | 22525 | 18627 | 18129 | 14630 | 1850 | 1504 | 1429 | 1381 | 1332 | 1327 | 1262 | 1084 | 922 | 884 | 769 | 726 | 608 | 351 | 351 | 317 | 223 | 168 | 46 |  |  |  |  |
| Score/MB | 1151 | 365892060 | 1436 | 638 | 473 | 920 | 669 | 171 | 401 | 552 | 75 | 117 | 417 | 812 | 131 | 323 |  | 1324 | 906 | 385 | 21 | 1400 |  | 1451 | 27 | 133110 | 200 | 2 | 13 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 30 | 37 | 37 | 37 | 38 | 37 | 39 | 43 | 50 | 66 | 52 | 51 | 58 | 93 | 96 | 98 | 127 | 154 | 628 | 35 | 260 |  | 79 |
### windows
| Engine | v8 | JavaScriptCore | deno | bare | bun | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | jjs | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-emscripten | quickjs-ng | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.132 |  | 2.5.0 |  | 1.2.21 | 0.10.1 | 24.8.0 | 1.11.24.0 | 143.0 |  | 24.1.2 | 0.12.0 | 1.8.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  |  | 0.8.0 | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 145.7M | 55.8M | 132.8M | 77.6M | 116.5M | 14.4M | 51.2M | 72.8M | 196.1M | 86.6M | 17.5M | 38.4M | 11.8M | 9.2M | 42.2M | 9M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.3M | 339.5K | 113.4M | 26.1M | 113M | 47.4M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 0 | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 0 | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.8M | 32.3M | 29.7M | 19.8M | 30.3M | 31.1M | 14.1M | 17.4M | 30.2M | 195.8M | 83.5M | 17.5M | 32.7M | 6.9M | 7.8M | 29.1M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38582 | 35729 | 35782 | 32718 | 37092 | 32912 | 32262 | 24478 | 13853 | 13549 | 35800 | 699 | 212 | 448 | 505 | 410 | 392 | 448 | 371 | 434 | 212 | 240 | 229 | 197 | 94 | 55 | 48 |  | 23 |  |  |
| DeltaBlue | 101749 | 45284 | 79599 | 77100 | 44742 | 76016 | 75679 | 27723 | 13488 | 13032 | 30602 | 628 | 212 | 410 | 469 | 403 | 370 | 469 | 397 | 397 | 264 | 357 | 324 | 213 | 117 | 51 | 42 |  | 29 |  |  |
| Crypto | 41680 | 48873 | 42127 | 41557 | 42210 | 39840 | 41962 | 33440 | 20734 | 17544 | 21668 | 787 | 2228 | 422 | 542 | 515 | 429 | 326 | 426 | 356 | 314 | 182 | 189 | 115 | 91 | 59 | 74 |  | 38 |  |  |
| RayTrace | 113144 | 105522 | 63787 | 72963 | 88503 | 67339 | 59865 | 50833 | 27870 | 26048 | 3548 | 1014 | 1284 | 744 | 520 | 567 | 567 | 587 | 466 | 583 | 444 | 481 | 461 | 225 | 267 | 131 | 132 |  | 89 |  |  |
| EarleyBoyer | 80406 | 64261 | 71848 | 68510 | 58933 | 73932 | 58469 | 43556 | 41539 | 36955 | 25922 | 2220 | 975 | 1142 | 1000 | 1006 | 1004 | 930 | 891 | 981 | 522 | 591 | 555 | 452 | 297 | 124 | 139 |  | 76 |  |  |
| RegExp | 10011 | 18493 | 10001 | 9851 | 17764 | 9489 | 9183 | 10001 | 9074 | 8883 | 1039 | 407 | 577 | 195 | 180 | 167 | 181 | 155 | 180 | 185 | 109 | 200 | 251 | 194 | 280 | 90 | 43 |  |  |  |  |
| Splay | 41169 | 35496 | 37812 | 39543 | 33338 | 27438 | 32890 | 21122 | 24358 | 14701 | 3545 | 2393 | 2180 | 1449 | 1020 | 1262 | 1312 | 1263 | 1270 | 1002 | 1002 | 706 | 586 | 877 | 497 | 322 | 169 |  | 129 |  |  |
| NavierStokes | 38990 | 33950 | 38803 | 38990 | 34098 | 38912 | 38951 | 37026 | 22341 | 22045 | 23869 | 1071 | 2943 | 742 | 1027 | 743 | 720 | 761 | 752 | 670 | 1077 | 469 | 477 | 189 | 150 | 115 | 164 |  | 58 |  |  |
| Score | 47027 | 43119 | 41054 | 40983 | 40597 | 38696 | 37857 | 28138 | 19641 | 17447 | 10849 | 974 | 908 | 585 | 579 | 543 | 528 | 523 | 509 | 507 | 385 | 362 | 355 | 251 | 190 | 98 | 87 |  |  |  |  |
| Score/MB | 866 | 352 | 281 | 734 | 305 | 498 | 324 | 1952 | 383 | 239 | 55 | 11 | 51 | 15 | 49 | 59 | 12 | 58 |  | 56 | 50 | 48 | 46 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 51 | 60 | 60 | 61 | 61 | 67 | 63 | 64 | 83 | 83 | 79 | 123 | 148 | 249 | 284 | 130 | 373 |  |  |
