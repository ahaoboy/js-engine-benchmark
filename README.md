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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45742<br>37.1M<br>1233/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45167<br>99.2M<br>455/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 44710<br>57.7M<br>774/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39110<br>108.3M<br>361/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 38255<br>65.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 38113<br>69.6M<br>547/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 36826<br>40.7M<br>905/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 36121<br>123.4M<br>292/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19444<br>19.4M<br>1001/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18568<br>39.8M<br>466/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16501<br>51M<br>323/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16227<br>35.2M<br>460/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9834<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2470<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1753<br>36M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 1083<br>12.3M<br>88/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 991<br>5.2M<br>192/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 983<br>4.5M<br>220/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 871<br>1.4M<br>625/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 867<br>1.4M<br>616/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 858<br>831.3K<br>1056/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 787<br>8.4M<br>93/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 730<br>2M<br>370/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 653<br>46.5M<br>14/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 596<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 583<br>2.1M<br>274/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 454<br>446.6K<br>1040/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 413<br>685K<br>617/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 410<br>414.5K<br>1012/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 329<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 276<br>2.1M<br>132/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 199<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 123<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 112<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/2/2025, 1:43:30 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | dune | lo | node | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | rquickjs | rquickjs-pgo | primjs | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 | 2.5.2 |  | 0.10.2 |  | 24.9.0 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 24.12.0 | 2025.09.13 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37.1M | 99.2M | 57.7M | 108.3M | 65.3M | 69.6M | 40.7M | 123.4M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 0 | 36M | 12.3M | 5.2M | 4.5M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.5M | 0 | 2.1M | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Exe size | 37.1M | 99.2M | 1M | 108.3M | 65.3M | 69.6M | 40.7M | 123.4M | 571K | 39.8M | 51M | 35.2M | 1M | 0 | 36M | 12.3M | 5.2M | 4.5M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.5M | 0 | 2.1M | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42977 | 43065 | 34084 | 34900 | 32390 | 35083 | 31482 | 26942 | 21026 | 11981 | 11727 | 10725 | 39079 | 14100 | 1437 | 831 | 809 | 843 | 667 | 665 | 678 | 581 | 724 | 521 | 464 | 332 | 315 | 277 | 252 | 181 | 215 | 83 | 108 | 67 | 61 | 289 | 30 |  | 179 |  |
| DeltaBlue | 55764 | 52603 | 106126 | 78079 | 75989 | 77470 | 78859 | 74270 | 25411 | 13409 | 13204 | 12807 | 24411 | 277 | 1175 | 790 | 806 | 789 | 666 | 668 | 667 | 598 | 689 | 492 | 504 | 373 | 430 | 403 | 362 | 205 | 257 | 157 | 126 | 59 | 56 | 295 | 35 |  | 187 |  |
| Crypto | 49236 | 48557 | 40970 | 39287 | 39604 | 39486 | 40509 | 40382 | 31028 | 19360 | 16075 | 15827 | 13315 | 8088 | 1694 | 900 | 831 | 1066 | 758 | 741 | 742 | 937 | 463 | 1013 | 541 | 971 | 214 | 221 | 202 | 159 | 126 | 366 | 106 | 101 | 72 | 324 | 42 |  | 157 |  |
| RayTrace | 113958 | 109962 | 116252 | 68597 | 69707 | 70003 | 56831 | 60383 | 35410 | 28285 | 27158 | 28433 | 2798 | 1150 | 1741 | 1303 | 1157 | 930 | 983 | 987 | 956 | 702 | 779 | 786 | 514 | 679 | 548 | 519 | 491 | 497 | 266 | 492 | 279 | 183 | 145 | 343 | 99 |  | 490 |  |
| EarleyBoyer | 72080 | 68486 | 80025 | 66626 | 61547 | 66537 | 66161 | 61094 | 7398 | 37392 | 33445 | 31760 | 22037 | 977 | 3920 | 2083 | 1901 | 1538 | 1380 | 1436 | 1443 | 1823 | 1370 | 983 | 1021 | 648 | 530 | 529 | 460 | 559 | 499 | 305 | 317 | 212 | 140 |  | 89 |  | 556 |  |
| RegExp | 20274 | 21023 | 10414 | 10334 | 10223 | 10162 | 8992 | 9861 | 8043 | 9218 | 8857 | 8883 | 1313 | 826 | 629 | 310 | 274 | 267 | 254 | 241 | 270 | 112 | 172 | 66 | 202 | 151 | 273 | 242 | 236 | 480 | 219 | 149 | 287 | 55 | 97 |  |  |  |  |  |
| Splay | 28440 | 28946 | 34202 | 32425 | 32197 | 26248 | 30152 | 29777 | 19473 | 21400 | 12933 | 12990 | 3398 | 5818 | 3447 | 2529 | 2052 | 1809 | 2222 | 2225 | 1850 | 2200 | 1666 | 1397 | 1330 | 1459 | 1318 | 913 | 1498 | 943 | 829 | 325 | 409 | 260 | 344 |  | 142 |  | 909 |  |
| NavierStokes | 34292 | 34360 | 32518 | 33390 | 33323 | 33390 | 32994 | 33109 | 30035 | 21771 | 21221 | 21221 | 25030 | 8154 | 2111 | 1498 | 1394 | 1775 | 1281 | 1278 | 1266 | 1436 | 1137 | 1758 | 887 | 1158 | 592 | 563 | 548 | 186 | 213 | 951 | 163 | 229 | 148 |  | 65 |  | 301 |  |
| Score | 45742 | 45167 | 44710 | 39110 | 38255 | 38113 | 36826 | 36121 | 19444 | 18568 | 16501 | 16227 | 9834 | 2470 | 1753 | 1083 | 991 | 983 | 871 | 867 | 858 | 787 | 730 | 653 | 596 | 583 | 454 | 413 | 410 | 329 | 278 | 276 | 199 | 123 | 112 |  |  |  |  |  |
| Score/MB | 1233 | 455 | 774 | 361 | 585 | 547 | 905 | 292 | 1001 | 466 | 323 | 460 | 49 |  | 48 | 88 | 192 | 220 | 625 | 616 | 1056 | 93 | 370 | 14 |  | 274 | 1040 | 617 | 1012 |  | 21 | 132 | 2 | 4 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 38 | 32 | 39 | 43 | 43 | 47 | 48 | 46 | 61 | 55 | 79 | 57 | 61 | 72 | 75 | 77 | 95 | 111 | 126 | 137 | 201 | 217 | 30 | 330 |  | 79 | 6 |
### macos-arm64
| Engine | v8 | dune | bare | deno | node | bun | mozjs | spidermonkey | spiderfire | graaljs | jjs | primjs | hermes | txiki.js | rquickjs | quickjs-ng | ladybird | njs | llrt | quickjs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.21 | 0.10.2 |  | 2.5.2 | 24.9.0 | 1.2.23 |  | 144.0 |  | 24.1.2 |  |  | 0.12.0 | 24.12.0 |  | 0.10.1 |  | 0.9.2 | 0.7.0.beta | 2025.09.13 | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 60M | 45.6M | 87.5M | 111.9M | 57.3M | 32.8M | 131.8M | 46.3M | 194M | 0 | 1.8M | 15.7M | 3.6M | 1.2M | 3.8M | 41.5M | 2.4M | 10.6M | 1014.4K | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 0 | 75.4M | 12.4M | 1.1M | 91.8M | 575.4K | 7.3M | 0 | 0 |
| Exe size | 41.3M | 60M | 45.6M | 87.5M | 111.9M | 57.3M | 32.8M | 65.9M | 46.3M | 147.4K | 0 | 1.8M | 7.9M | 3.6M | 1.2M | 1.9M | 41.5M | 1.8M | 10.6M | 1014.4K | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 0 | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.3M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 0 | 1.9M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.9M | 0 | 0 | 0 | 0 |
| Richards | 43023 | 61387 | 42701 | 54729 | 38010 | 32418 | 15614 | 13111 | 14301 | 28235 | 18978 | 1132 | 1037 | 1112 | 938 | 738 | 832 | 710 | 779 | 976 | 461 | 552 | 357 | 334 | 110 | 185 | 149 | 99 | 39 |  | 153 | 39 |  |  |
| DeltaBlue | 129413 | 114060 | 107686 | 104499 | 89762 | 50124 | 17402 | 17283 | 15465 | 11161 | 400 | 1256 | 869 | 819 | 959 | 740 | 736 | 840 | 901 | 790 | 440 | 600 | 495 | 397 | 209 | 265 | 160 | 92 | 41 |  | 235 | 52 |  |  |
| Crypto | 55202 | 58009 | 59780 | 54587 | 50185 | 51993 | 21902 | 25354 | 21442 | 24736 | 4243 | 1668 | 860 | 955 | 906 | 926 | 1626 | 1146 | 579 | 1025 | 924 | 575 | 255 | 187 | 378 | 125 | 128 | 114 | 43 |  | 256 | 66 |  |  |
| RayTrace | 149478 | 90501 | 103154 | 78217 | 66969 | 108112 | 49357 | 49283 | 41809 | 555 | 887 | 1142 | 1819 | 1675 | 1177 | 1126 | 1468 | 770 | 1352 | 1135 | 1004 | 733 | 804 | 390 | 651 | 666 | 323 | 231 | 43 |  | 320 | 163 |  |  |
| EarleyBoyer | 116935 | 101167 | 94084 | 88329 | 86043 | 62183 | 47261 | 52065 | 48163 | 7323 | 1179 | 1493 | 4061 | 2326 | 1946 | 1898 | 1785 | 2250 | 1739 | 1813 | 995 | 1354 | 980 | 781 | 399 | 669 | 352 | 238 | 89 |  |  | 137 |  |  |
| RegExp | 14881 | 15016 | 14667 | 12600 | 9680 | 16638 | 11863 | 9556 | 12328 | 1002 | 676 | 278 | 544 | 250 | 211 | 257 | 104 | 209 | 277 | 171 | 236 | 244 | 313 | 299 | 320 | 585 | 204 | 138 | 15 |  |  |  |  |  |
| Splay | 59928 | 52391 | 45089 | 34511 | 38064 | 24235 | 18106 | 22713 | 19240 | 2926 | 3023 | 3993 | 3439 | 2363 | 2635 | 2632 | 2158 | 1825 | 2592 | 1141 | 2023 | 1972 | 1206 | 1107 | 545 | 1090 | 563 | 463 | 151 |  |  | 196 |  |  |
| NavierStokes | 35729 | 40662 | 38025 | 28288 | 36470 | 29532 | 20903 | 18033 | 19826 | 9340 | 14766 | 3319 | 1200 | 1716 | 1611 | 1790 | 1913 | 1766 | 983 | 1504 | 1342 | 978 | 696 | 309 | 1081 | 200 | 181 | 218 | 76 |  |  | 108 |  |  |
| Score | 60142 | 57468 | 53497 | 47640 | 43683 | 40158 | 22353 | 22138 | 21455 | 5525 | 2377 | 1402 | 1376 | 1167 | 1066 | 1034 | 1015 | 972 | 952 | 911 | 767 | 739 | 558 | 408 | 379 | 370 | 228 | 173 | 51 |  |  |  |  |  |
| Score/MB | 1457 | 957 | 1174 | 544 | 390 | 701 | 681 | 167 | 462 | 28 |  | 796 | 87 | 323 | 891 | 269 | 24 | 406 | 89 | 919 | 1397 |  | 1331 | 32 | 239 |  | 3 | 13 | 48 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 27 | 37 | 39 | 34 | 40 | 44 | 42 | 58 | 49 | 45 | 51 | 49 | 50 | 59 | 82 | 90 | 94 | 126 | 145 | 540 |  | 35 | 222 |  |  |
### windows
| Engine | v8 | bare | JavaScriptCore | dune | node | bun | deno | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.21 |  |  | 0.10.2 | 24.9.0 | 1.2.23 | 2.5.2 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 61M | 125.2M | 82.1M | 120.8M | 139.6M | 148.4M | 15.6M | 53.2M | 77.1M | 197.1M | 115.8M | 13M | 44.3M | 45.6M | 6.8M | 9M | 10.2M | 0 | 8.6M | 8.5M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 26.1M | 342.5K | 49.1M | 85.5M | 113.6M | 112.5M | 342.9K | 33.8M | 42.6M | 349.1K | 3M | 5.1M | 5.7M | 13.1M | 1.6M | 1.2M | 1M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 34.9M | 124.9M | 33M | 35.3M | 26M | 35.9M | 15.3M | 19.3M | 34.4M | 196.7M | 112.8M | 7.9M | 38.6M | 32.5M | 5.2M | 7.8M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 36121 | 32393 | 34896 | 31567 | 32220 | 31235 | 34871 | 24305 | 14061 | 13884 | 35193 | 688 | 502 | 439 | 381 | 505 | 426 | 424 | 356 | 251 | 253 | 209 | 180 | 106 | 53 | 49 |  | 25 |  | 126 |
| DeltaBlue | 91296 | 77173 | 42673 | 79348 | 71844 | 33998 | 51698 | 28351 | 10711 | 12827 | 23492 | 596 | 446 | 397 | 367 | 488 | 456 | 451 | 387 | 349 | 359 | 257 | 225 | 119 | 50 | 43 |  | 29 |  | 152 |
| Crypto | 37359 | 41387 | 48137 | 41342 | 37807 | 41896 | 38252 | 32763 | 19864 | 17870 | 19282 | 775 | 544 | 410 | 411 | 472 | 320 | 301 | 421 | 179 | 178 | 311 | 113 | 89 | 58 | 74 |  | 37 |  | 140 |
| RayTrace | 105078 | 69485 | 90797 | 71261 | 64897 | 96643 | 56609 | 50467 | 26465 | 27251 | 2860 | 963 | 534 | 752 | 584 | 455 | 591 | 587 | 457 | 471 | 490 | 446 | 230 | 266 | 123 | 135 |  | 89 |  | 432 |
| EarleyBoyer | 78997 | 69682 | 56872 | 74639 | 68585 | 56582 | 67697 | 42555 | 39638 | 36746 | 21990 | 2179 | 989 | 1113 | 977 | 972 | 941 | 956 | 858 | 597 | 600 | 516 | 457 | 297 | 121 | 147 |  | 77 |  | 528 |
| RegExp | 9709 | 9608 | 17529 | 9761 | 9499 | 16745 | 9010 | 9770 | 8837 | 8719 | 949 | 384 | 188 | 195 | 201 | 158 | 155 | 151 | 178 | 236 | 190 | 106 | 196 | 272 | 88 | 43 |  |  |  |  |
| Splay | 33164 | 38442 | 26982 | 29508 | 30174 | 30241 | 25791 | 26587 | 20145 | 14937 | 2136 | 2082 | 1059 | 1456 | 1304 | 1221 | 1216 | 1296 | 1257 | 1080 | 1012 | 1016 | 869 | 421 | 296 | 172 |  | 127 |  | 797 |
| NavierStokes | 38545 | 38617 | 38359 | 38584 | 38436 | 33357 | 35913 | 35693 | 21158 | 21941 | 27306 | 1060 | 1006 | 737 | 709 | 545 | 754 | 748 | 744 | 468 | 480 | 1045 | 192 | 149 | 114 | 165 |  | 58 |  | 298 |
| Score | 43445 | 40435 | 40122 | 39660 | 37938 | 37733 | 34909 | 28615 | 18158 | 17576 | 9290 | 931 | 581 | 578 | 528 | 521 | 515 | 512 | 498 | 389 | 380 | 380 | 251 | 187 | 95 | 88 |  |  |  |  |
| Score/MB | 703 | 662 | 320 | 483 | 314 | 270 | 235 | 1833 | 341 | 228 | 47 | 8 | 44 | 13 | 11 | 77 | 57 | 49 |  | 45 | 44 | 44 | 12 | 1 | 1 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 58 | 60 | 60 | 67 | 68 | 69 | 62 | 81 | 84 | 84 | 122 | 148 | 254 | 276 | 147 | 373 |  | 84 |
