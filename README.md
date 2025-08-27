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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48269<br>57.1M<br>845/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47962<br>36.4M<br>1316/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47162<br>98.6M<br>478/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40653<br>106.3M<br>382/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40450<br>65.3M<br>619/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39802<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39146<br>66.3M<br>590/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38311<br>40.7M<br>942/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20084<br>19.4M<br>1034/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19413<br>40.1M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16940<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16811<br>35.2M<br>477/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11387<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2379<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 871<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 834<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 814<br>5.2M<br>157/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>831.3K<br>941/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 758<br>1.4M<br>538/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 743<br>8.4M<br>88/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 740<br>1.4M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 530<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 482<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 388<br>685K<br>580/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 379<br>446.6K<br>868/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 347<br>414.5K<br>857/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 293<br>2.7K<br>111114/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/27/2025, 1:48:33 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | njs | rquickjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.21 | 2.4.5 |  | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 36.4M | 98.6M | 106.3M | 65.3M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.1M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.6M | 106.3M | 65.3M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.1M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37593 | 40537 | 40661 | 32676 | 32383 | 32393 | 32707 | 33646 | 23455 | 13680 | 13023 | 12387 | 35764 | 9885 | 1116 | 686 | 687 | 712 | 624 | 579 | 564 | 530 | 581 | 476 | 289 | 334 | 247 | 267 | 227 | 97 | 181 | 89 | 104 | 60 | 60 | 260 | 26 |  | 126 |  |
| DeltaBlue | 109822 | 55506 | 48154 | 74363 | 80512 | 75024 | 73001 | 76842 | 25913 | 13389 | 12966 | 12834 | 39115 | 299 | 1068 | 674 | 653 | 680 | 622 | 581 | 543 | 570 | 569 | 456 | 324 | 385 | 351 | 354 | 322 | 178 | 251 | 163 | 109 | 55 | 55 | 271 | 32 |  | 175 |  |
| Crypto | 41467 | 51966 | 48774 | 41846 | 41555 | 40562 | 41495 | 41379 | 32061 | 20464 | 17370 | 17522 | 24764 | 8123 | 1367 | 603 | 746 | 518 | 557 | 536 | 879 | 546 | 378 | 755 | 787 | 400 | 189 | 187 | 183 | 158 | 119 | 326 | 100 | 77 | 61 | 296 | 31 |  | 134 |  |
| RayTrace | 111664 | 119212 | 118916 | 68301 | 72001 | 67043 | 68227 | 55943 | 34597 | 27722 | 26983 | 27232 | 7178 | 841 | 1579 | 1147 | 898 | 1055 | 962 | 920 | 684 | 915 | 692 | 563 | 570 | 444 | 525 | 521 | 488 | 476 | 272 | 492 | 243 | 164 | 137 | 348 | 95 |  | 418 |  |
| EarleyBoyer | 89175 | 69692 | 66853 | 73958 | 69835 | 71953 | 74307 | 70786 | 7022 | 40478 | 36253 | 36668 | 22597 | 883 | 3401 | 1859 | 1481 | 1744 | 1408 | 1377 | 1682 | 1268 | 1231 | 764 | 575 | 853 | 519 | 552 | 504 | 570 | 498 | 323 | 278 | 190 | 136 |  | 80 |  | 497 |  |
| RegExp | 10476 | 20093 | 21729 | 10142 | 10263 | 9851 | 9861 | 8901 | 7728 | 8857 | 8801 | 8901 | 923 | 976 | 553 | 255 | 230 | 223 | 234 | 219 | 116 | 227 | 182 | 63 | 135 | 175 | 217 | 243 | 198 | 457 | 208 | 95 | 246 | 49 | 94 |  |  |  |  |  |
| Splay | 42481 | 35872 | 37170 | 36867 | 37796 | 34650 | 28721 | 31961 | 19664 | 24512 | 12183 | 11666 | 2078 | 4515 | 3489 | 2290 | 1761 | 1931 | 1731 | 2198 | 2123 | 2147 | 1671 | 921 | 1276 | 1261 | 1092 | 729 | 674 | 838 | 828 | 373 | 518 | 214 | 318 |  | 88 |  | 804 |  |
| NavierStokes | 38842 | 39988 | 39920 | 38842 | 33916 | 38803 | 38765 | 38507 | 36803 | 22090 | 22045 | 22090 | 26241 | 13059 | 1859 | 952 | 1294 | 969 | 977 | 987 | 1222 | 966 | 930 | 1502 | 942 | 682 | 483 | 470 | 475 | 192 | 202 | 838 | 166 | 176 | 119 |  | 52 |  | 288 |  |
| Score | 48269 | 47962 | 47162 | 40653 | 40450 | 39802 | 39146 | 38311 | 20084 | 19413 | 16940 | 16811 | 11387 | 2379 | 1538 | 871 | 834 | 814 | 764 | 758 | 743 | 740 | 645 | 530 | 500 | 482 | 388 | 379 | 347 | 293 | 267 | 263 | 189 | 105 | 104 |  |  |  |  |  |
| Score/MB | 845 | 1316 | 478 | 382 | 619 | 323 | 590 | 942 | 1034 | 483 | 332 | 477 | 57 | 2 | 42 | 71 | 195 | 157 | 941 | 538 | 88 | 531 | 326 | 11 | 235 |  | 580 | 868 | 857 | 111114 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 42 | 33 | 46 | 48 | 51 | 50 | 52 | 61 | 52 | 59 | 88 | 67 | 65 | 80 | 81 | 86 | 96 | 115 | 132 | 144 | 238 | 235 | 31 | 398 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | dune | v8 | bare | bun | node | deno | mozjs | spiderfire | spidermonkey | graaljs | hermes | jjs | primjs | txiki.js | quickjs-ng | llrt | rquickjs | quickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 0.10.1 | 14.1.121 |  | 1.2.21 | 24.6.0 | 2.4.5 |  |  | 143.0 | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 0.8.0 | 0.6.2.beta |  | 2025.04.26 |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 56.8M | 41.1M | 45.6M | 56.8M | 111.5M | 85.5M | 32.8M | 46.3M | 132.3M | 194M | 15.7M | 0 | 1.8M | 3.6M | 4.1M | 10.5M | 1.2M | 975.9K | 41.3M | 2.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 56.8M | 41.1M | 45.6M | 56.8M | 111.5M | 85.5M | 32.8M | 46.3M | 66.2M | 147.4K | 7.9M | 0 | 1.8M | 3.6M | 2.1M | 10.5M | 1.2M | 975.9K | 41.3M | 1.8M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 39298 | 36523 | 41120 | 40025 | 36654 | 36192 | 33117 | 13118 | 13722 | 13072 | 19338 | 992 | 285 | 807 | 842 | 972 | 757 | 706 | 765 | 713 | 619 | 477 | 553 | 279 | 309 | 79 | 102 | 129 | 97 | 35 | 157 | 27 |  | 81 |
| DeltaBlue | 57721 | 78634 | 125155 | 100506 | 48617 | 75619 | 76750 | 16450 | 15187 | 13541 | 2215 | 929 | 264 | 1098 | 881 | 812 | 833 | 839 | 725 | 680 | 790 | 572 | 601 | 500 | 356 | 150 | 151 | 137 | 87 | 37 | 199 | 37 |  | 126 |
| Crypto | 55091 | 45726 | 41509 | 52844 | 49971 | 41545 | 41653 | 19712 | 20117 | 20638 | 17625 | 883 | 7033 | 1414 | 793 | 881 | 737 | 891 | 1029 | 1406 | 1067 | 1140 | 539 | 236 | 177 | 310 | 119 | 117 | 111 | 33 | 221 | 42 |  | 120 |
| RayTrace | 130978 | 78735 | 112404 | 86727 | 115512 | 67635 | 63269 | 50541 | 35149 | 24691 | 2299 | 1585 | 1276 | 1078 | 1273 | 1248 | 1446 | 1055 | 854 | 993 | 740 | 835 | 715 | 723 | 355 | 635 | 700 | 281 | 212 | 36 | 268 | 117 |  | 611 |
| EarleyBoyer | 65316 | 94888 | 80741 | 50266 | 50869 | 76269 | 74728 | 46585 | 39629 | 30650 | 25912 | 3517 | 946 | 2199 | 1796 | 1948 | 2097 | 1622 | 1694 | 1236 | 1733 | 953 | 1108 | 817 | 756 | 326 | 630 | 320 | 221 | 69 |  | 100 |  | 646 |
| RegExp | 20638 | 12637 | 5642 | 13001 | 20274 | 11194 | 10021 | 12418 | 8659 | 5626 | 973 | 518 | 606 | 206 | 224 | 207 | 224 | 214 | 218 | 95 | 170 | 202 | 208 | 305 | 292 | 292 | 546 | 169 | 117 | 11 |  |  |  |  |
| Splay | 34854 | 38692 | 41316 | 44307 | 24007 | 28481 | 26713 | 18703 | 13316 | 7905 | 2370 | 2885 | 1406 | 697 | 1926 | 1479 | 2398 | 1954 | 1513 | 1882 | 1567 | 1750 | 1265 | 1113 | 1262 | 380 | 695 | 562 | 370 | 99 |  | 122 |  | 996 |
| NavierStokes | 28527 | 34656 | 36173 | 29473 | 24709 | 31663 | 28909 | 19787 | 17129 | 12132 | 22090 | 1133 | 10859 | 2771 | 1471 | 1474 | 864 | 1394 | 1843 | 1783 | 1444 | 1322 | 754 | 590 | 310 | 853 | 164 | 154 | 192 | 63 |  | 74 |  | 287 |
| Score | 46521 | 44936 | 44842 | 44628 | 39797 | 39495 | 37455 | 21522 | 18103 | 14019 | 6238 | 1290 | 1248 | 1021 | 981 | 967 | 948 | 923 | 917 | 848 | 844 | 764 | 640 | 500 | 395 | 304 | 290 | 201 | 157 | 41 |  |  |  |  |
| Score/MB | 283609326 | 791 | 1090 | 979 | 700 | 354 | 437 | 655 | 390 | 105 | 32 | 82 |  | 580 | 272 | 234 | 90 | 771 | 962 | 20 | 351 | 1391 |  | 1193 | 31 | 192 | 109977 | 2 | 12 | 38 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 35 | 40 | 44 | 44 | 44 | 47 | 47 | 45 | 64 | 55 | 51 | 56 | 66 | 85 | 106 | 102 | 146 | 153 | 740 | 40 | 317 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | dune | node | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.121 |  |  | 1.2.21 | 0.10.1 | 24.6.0 | 2.4.5 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.1M | 122.1M | 55.8M | 132.8M | 77.6M | 116.4M | 142.9M | 14.4M | 51.4M | 72.8M | 196.1M | 17.4M | 112.9M | 38.1M | 11.8M | 42.2M | 8M | 9M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 338K | 26.1M | 113M | 47.4M | 85.3M | 110.6M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.2M | 1M | 1.7M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 23.9M | 121.8M | 29.7M | 19.8M | 30.3M | 31.1M | 32.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.4M | 109.9M | 32.4M | 6.9M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 36682 | 34525 | 31150 | 35189 | 33329 | 32760 | 32714 | 24503 | 13662 | 12730 | 35440 | 4835 | 705 | 451 | 511 | 388 | 448 | 444 | 438 | 357 | 233 | 215 | 240 | 191 | 105 | 55 | 48 |  | 21 |  |  |
| DeltaBlue | 110080 | 44888 | 76386 | 38626 | 75196 | 72743 | 73834 | 29092 | 12807 | 13038 | 31579 | 247 | 621 | 397 | 464 | 369 | 462 | 469 | 397 | 392 | 311 | 264 | 350 | 229 | 105 | 50 | 42 |  | 26 |  |  |
| Crypto | 41547 | 47953 | 42045 | 47353 | 39831 | 38247 | 41860 | 33779 | 20621 | 18311 | 22540 | 2588 | 781 | 429 | 548 | 429 | 327 | 328 | 372 | 424 | 188 | 287 | 181 | 113 | 90 | 59 | 74 |  | 29 |  |  |
| RayTrace | 109740 | 103820 | 68745 | 95733 | 66599 | 63935 | 62467 | 49752 | 28063 | 27010 | 3328 | 1360 | 1009 | 741 | 512 | 563 | 591 | 583 | 585 | 462 | 463 | 438 | 472 | 226 | 262 | 130 | 134 |  | 83 |  |  |
| EarleyBoyer | 85737 | 61888 | 69462 | 55980 | 73268 | 70026 | 66624 | 42610 | 42126 | 36734 | 28918 | 791 | 2253 | 1126 | 1006 | 1000 | 935 | 934 | 970 | 869 | 572 | 512 | 558 | 446 | 289 | 124 | 141 |  | 70 |  |  |
| RegExp | 10082 | 18675 | 9599 | 16547 | 9527 | 9670 | 9537 | 10142 | 9237 | 8928 | 985 | 694 | 405 | 197 | 188 | 193 | 162 | 154 | 187 | 180 | 252 | 109 | 197 | 194 | 272 | 88 | 41 |  |  |  |  |
| Splay | 42693 | 34216 | 38537 | 30038 | 26949 | 30747 | 29622 | 16768 | 22589 | 12599 | 2533 | 3419 | 2306 | 1442 | 1019 | 1255 | 1206 | 1254 | 977 | 1263 | 1133 | 984 | 696 | 843 | 390 | 317 | 162 |  | 82 |  |  |
| NavierStokes | 38765 | 33882 | 38912 | 39800 | 38881 | 38765 | 38881 | 36989 | 22408 | 22127 | 22386 | 3411 | 1061 | 739 | 1032 | 711 | 771 | 727 | 670 | 756 | 458 | 831 | 484 | 187 | 149 | 115 | 166 |  | 48 |  |  |
| Score | 47596 | 42345 | 40241 | 40202 | 38535 | 38375 | 38292 | 27437 | 19385 | 17156 | 10388 | 1509 | 968 | 584 | 582 | 527 | 524 | 519 | 509 | 503 | 384 | 367 | 357 | 250 | 182 | 98 | 87 |  |  |  |  |
| Score/MB | 895 | 346 | 720 | 302 | 496 | 329 | 267 | 1904 | 376 | 235 | 52 | 86 | 8 | 15 | 49 | 12 | 65 | 57 | 56 |  | 50 | 48 | 47 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 43 | 42 | 60 | 59 | 60 | 66 | 66 | 63 | 62 | 80 | 87 | 84 | 125 | 150 | 249 | 283 | 129 | 438 |  |  |
