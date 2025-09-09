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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48545<br>36.5M<br>1330/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48277<br>98.6M<br>489/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47709<br>57.5M<br>829/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40943<br>106.3M<br>385/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40930<br>65.3M<br>626/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40106<br>123.3M<br>325/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39070<br>66.3M<br>589/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39068<br>40.7M<br>960/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20257<br>19.4M<br>1043/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19291<br>39.8M<br>484/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17138<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17101<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11750<br>199.7M<br>58/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2677<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1559<br>36M<br>43/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 867<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 828<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 774<br>831.3K<br>953/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 754<br>1.4M<br>541/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 749<br>1.4M<br>532/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 651<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 552<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 501<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 379<br>446.6K<br>868/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 300<br>2.7K<br>113769/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 272<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 193<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.2M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/9/2025, 1:46:15 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.21 | 14.2.0 | 2.4.5 |  | 24.7.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 98.6M | 57.5M | 106.3M | 65.3M | 123.3M | 66.3M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.2M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 98.6M | 1M | 106.3M | 65.3M | 123.3M | 66.3M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.2M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.5M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41360 | 41783 | 38366 | 32831 | 32432 | 32386 | 32672 | 32541 | 23331 | 13104 | 13948 | 13154 | 35401 | 10195 | 1106 | 686 | 676 | 711 | 626 | 578 | 577 | 563 | 579 | 489 | 284 | 330 | 243 | 270 | 220 | 112 | 189 | 90 | 104 | 60 | 59 | 268 | 30 |  | 133 |  |
| DeltaBlue | 55876 | 55566 | 108387 | 76181 | 77669 | 75917 | 75090 | 76148 | 24915 | 13210 | 12953 | 12893 | 34540 | 311 | 1053 | 670 | 666 | 678 | 622 | 588 | 577 | 544 | 587 | 463 | 320 | 380 | 348 | 359 | 327 | 162 | 250 | 163 | 114 | 55 | 56 | 277 | 35 |  | 179 |  |
| Crypto | 52013 | 49006 | 41424 | 41842 | 41810 | 41274 | 41722 | 41424 | 31909 | 20518 | 18195 | 17428 | 10883 | 9277 | 1364 | 577 | 731 | 583 | 559 | 554 | 530 | 873 | 376 | 862 | 790 | 413 | 191 | 186 | 181 | 168 | 120 | 320 | 98 | 79 | 62 | 298 | 37 |  | 137 |  |
| RayTrace | 121284 | 116844 | 109592 | 69929 | 71927 | 67413 | 68449 | 60309 | 36371 | 27306 | 26909 | 27916 | 8042 | 1255 | 1623 | 1127 | 857 | 1051 | 958 | 924 | 912 | 680 | 702 | 557 | 585 | 445 | 521 | 534 | 494 | 425 | 272 | 500 | 251 | 165 | 142 | 350 | 106 |  | 429 |  |
| EarleyBoyer | 69348 | 68176 | 85465 | 73584 | 68308 | 70390 | 74975 | 70289 | 7160 | 41523 | 36441 | 36772 | 30794 | 1301 | 3431 | 1868 | 1488 | 1742 | 1436 | 1349 | 1335 | 1677 | 1230 | 782 | 579 | 865 | 528 | 559 | 514 | 626 | 504 | 324 | 286 | 197 | 138 |  | 90 |  | 401 |  |
| RegExp | 20597 | 21681 | 10515 | 10052 | 10323 | 10011 | 9661 | 8983 | 7902 | 8956 | 8745 | 8892 | 1362 | 808 | 557 | 251 | 228 | 227 | 238 | 221 | 215 | 116 | 184 | 65 | 133 | 176 | 223 | 248 | 202 | 463 | 211 | 95 | 251 | 49 | 94 |  |  |  |  |  |
| Splay | 37005 | 37616 | 41006 | 37706 | 38146 | 35848 | 27707 | 36443 | 20222 | 24334 | 12069 | 12370 | 2539 | 4539 | 3677 | 2364 | 1781 | 1948 | 1824 | 2163 | 2214 | 2119 | 1706 | 994 | 1286 | 1228 | 1315 | 678 | 1308 | 909 | 909 | 370 | 559 | 217 | 317 |  | 87 |  | 711 |  |
| NavierStokes | 40028 | 39920 | 38584 | 38694 | 38655 | 38732 | 38617 | 38101 | 36730 | 21854 | 21876 | 21919 | 31874 | 14958 | 1927 | 960 | 1315 | 973 | 986 | 931 | 963 | 1203 | 934 | 1550 | 952 | 711 | 477 | 468 | 470 | 192 | 202 | 833 | 165 | 176 | 120 |  | 58 |  | 279 |  |
| Score | 48545 | 48277 | 47709 | 40943 | 40930 | 40106 | 39070 | 39068 | 20257 | 19291 | 17138 | 17101 | 11750 | 2677 | 1559 | 867 | 830 | 828 | 774 | 754 | 749 | 740 | 651 | 552 | 501 | 485 | 397 | 379 | 377 | 300 | 272 | 263 | 193 | 106 | 105 |  |  |  |  |  |
| Score/MB | 1330 | 489 | 829 | 385 | 626 | 325 | 589 | 960 | 1043 | 484 | 336 | 485 | 58 | 2 | 43 | 70 | 194 | 160 | 953 | 541 | 532 | 87 | 330 | 11 | 235 |  | 593 | 868 | 931 | 113769 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 22 | 43 | 34 | 47 | 47 | 50 | 50 | 53 | 53 | 61 | 58 | 85 | 67 | 63 | 81 | 79 | 85 | 93 | 113 | 132 | 143 | 233 | 233 | 31 | 353 |  | 89 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | dune | bare | node | deno | bun | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | rquickjs | llrt | quickjs-ng | txiki.js | quickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.66 |  | 0.10.1 |  | 24.7.0 | 2.4.5 | 1.2.21 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  |  | 0.6.2.beta | 0.8.0 | 24.12.0 | 2025.04.26 | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 0.2K | 56.8M | 45.6M | 111.7M | 85.5M | 56.8M | 131.7M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 1.2M | 10.5M | 4.1M | 3.6M | 975.9K | 2.4M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 41.3M | 0.2K | 56.8M | 45.6M | 111.7M | 85.5M | 56.8M | 65.9M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 1.2M | 10.5M | 2.1M | 3.6M | 975.9K | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 36640 | 38006 | 43439 | 36802 | 40336 | 34331 | 31870 | 14534 | 14064 | 14174 | 27649 | 18089 | 1003 | 1076 | 895 | 804 | 1001 | 691 | 722 | 697 | 767 | 316 | 435 | 259 | 263 | 99 | 158 | 118 | 103 | 36 | 194 | 38 |  | 172 |
| DeltaBlue | 100215 | 60101 | 95679 | 93967 | 84003 | 76935 | 41026 | 16391 | 16325 | 14936 | 13499 | 680 | 852 | 1146 | 967 | 787 | 909 | 403 | 870 | 685 | 677 | 478 | 582 | 486 | 338 | 149 | 197 | 149 | 90 | 39 | 221 | 45 |  | 196 |
| Crypto | 55997 | 61549 | 49137 | 55441 | 49217 | 42747 | 50140 | 22514 | 20604 | 22401 | 21285 | 3422 | 1143 | 1554 | 849 | 731 | 948 | 651 | 1028 | 913 | 1356 | 1197 | 506 | 256 | 155 | 374 | 112 | 120 | 107 | 36 | 234 | 61 |  | 132 |
| RayTrace | 141856 | 138166 | 66023 | 89317 | 65859 | 67043 | 115290 | 43985 | 41504 | 38405 | 1630 | 884 | 1646 | 1295 | 1231 | 1606 | 1392 | 1149 | 789 | 806 | 787 | 1050 | 609 | 810 | 270 | 573 | 646 | 337 | 203 | 37 | 271 | 147 |  | 535 |
| EarleyBoyer | 82859 | 72169 | 78666 | 85291 | 66708 | 73589 | 56665 | 42214 | 45353 | 45156 | 19819 | 638 | 3526 | 1262 | 2086 | 2085 | 2018 | 2148 | 1302 | 2076 | 1101 | 1024 | 1189 | 806 | 614 | 346 | 616 | 299 | 212 | 70 |  | 111 |  | 601 |
| RegExp | 11012 | 20456 | 13338 | 10102 | 9890 | 11331 | 20932 | 9518 | 9346 | 10536 | 1006 | 464 | 518 | 249 | 224 | 252 | 202 | 242 | 197 | 177 | 85 | 221 | 214 | 295 | 265 | 276 | 388 | 179 | 122 | 13 |  |  |  |  |
| Splay | 42895 | 27593 | 40297 | 33045 | 26727 | 30086 | 20356 | 21514 | 13815 | 12069 | 1979 | 1336 | 3053 | 3525 | 2738 | 2624 | 1431 | 2506 | 1643 | 1408 | 1592 | 1651 | 1721 | 911 | 890 | 494 | 742 | 499 | 470 | 121 |  | 117 |  | 703 |
| NavierStokes | 31609 | 26606 | 35989 | 32222 | 32190 | 29591 | 26162 | 17276 | 17225 | 13931 | 15582 | 2308 | 1144 | 3666 | 1575 | 1421 | 1400 | 1533 | 1836 | 1398 | 1483 | 1329 | 791 | 694 | 285 | 853 | 169 | 161 | 193 | 66 |  | 89 |  | 297 |
| Score | 49507 | 46282 | 46134 | 44619 | 39751 | 39238 | 38447 | 20814 | 19368 | 18639 | 7288 | 1554 | 1338 | 1335 | 1078 | 1048 | 997 | 896 | 890 | 843 | 770 | 745 | 637 | 500 | 334 | 326 | 301 | 205 | 162 | 44 |  |  |  |  |
| Score/MB | 1198 | 282152293 | 812 | 979 | 355 | 458 | 677 | 158 | 590 | 402 | 37 |  | 85 | 758 | 901 | 99 | 241 | 248 | 933 | 352 | 18 | 1357 |  | 1193 | 26 | 206 | 114148 | 2 | 13 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 52 | 35 | 42 | 44 | 44 | 46 | 44 | 47 | 53 | 71 | 49 | 56 | 62 | 96 | 101 | 109 | 139 | 156 | 622 | 38 | 255 |  | 88 |
### windows
| Engine | v8 | JavaScriptCore | bare | node | bun | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.66 |  |  | 24.7.0 | 1.2.21 | 2.4.5 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.4M | 122.2M | 57M | 116.5M | 132.8M | 142.9M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 86.7M | 11.8M | 38.4M | 9.2M | 42.2M | 9M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.4M | 338K | 26.1M | 85.4M | 113M | 110.6M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.4M | 13.1M | 1M | 1.7M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 30.8M | 31.1M | 19.8M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.6M | 6.9M | 32.7M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38574 | 36329 | 32961 | 32993 | 32340 | 33251 | 32262 | 24397 | 13559 | 13595 | 35334 | 3100 | 699 | 512 | 356 | 408 | 388 | 448 | 431 | 356 | 229 | 215 | 229 | 192 | 106 | 55 | 49 |  | 23 |  |  |
| DeltaBlue | 108566 | 47440 | 77490 | 72155 | 35708 | 69781 | 76148 | 26302 | 13515 | 13012 | 32484 | 198 | 625 | 457 | 403 | 397 | 377 | 469 | 403 | 393 | 312 | 260 | 337 | 224 | 113 | 49 | 41 |  | 27 |  |  |
| Crypto | 40651 | 47971 | 41660 | 41860 | 46946 | 40977 | 41615 | 33209 | 20874 | 17675 | 22677 | 2134 | 790 | 542 | 424 | 510 | 429 | 328 | 371 | 431 | 190 | 314 | 181 | 113 | 92 | 58 | 73 |  | 38 |  |  |
| RayTrace | 111072 | 104708 | 71483 | 65785 | 100195 | 66606 | 64601 | 50245 | 26936 | 26983 | 2812 | 1468 | 1014 | 505 | 736 | 598 | 583 | 589 | 587 | 460 | 450 | 430 | 457 | 227 | 266 | 128 | 133 |  | 88 |  |  |
| EarleyBoyer | 80610 | 62448 | 69781 | 70400 | 55984 | 72920 | 73683 | 42481 | 41965 | 36991 | 25305 | 587 | 2237 | 979 | 1141 | 995 | 1007 | 926 | 983 | 866 | 551 | 496 | 540 | 452 | 295 | 124 | 136 |  | 76 |  |  |
| RegExp | 9930 | 18311 | 9890 | 9971 | 16894 | 9670 | 9751 | 9951 | 9255 | 8563 | 1000 | 873 | 403 | 183 | 197 | 166 | 193 | 154 | 185 | 179 | 250 | 108 | 198 | 199 | 280 | 89 | 42 |  |  |  |  |
| Splay | 40615 | 35497 | 38545 | 32466 | 32792 | 32523 | 27291 | 18526 | 23893 | 14041 | 2538 | 5095 | 2339 | 1006 | 1377 | 1229 | 1303 | 1246 | 992 | 1261 | 1148 | 716 | 659 | 825 | 435 | 320 | 187 |  | 84 |  |  |
| NavierStokes | 38990 | 33916 | 39029 | 38990 | 34132 | 39022 | 38951 | 36878 | 22386 | 22193 | 24462 | 3752 | 1082 | 1035 | 740 | 747 | 716 | 758 | 679 | 751 | 478 | 1070 | 482 | 190 | 150 | 114 | 167 |  | 59 |  |  |
| Score | 47039 | 43104 | 40943 | 39415 | 39351 | 39280 | 38712 | 27308 | 19557 | 17381 | 10176 | 1444 | 972 | 575 | 564 | 542 | 534 | 522 | 511 | 503 | 383 | 365 | 348 | 251 | 188 | 97 | 88 |  |  |  |  |
| Score/MB | 864 | 352 | 718 | 338 | 296 | 274 | 498 | 1895 | 381 | 238 | 51 | 82 | 11 | 48 | 14 | 58 | 12 | 58 | 57 |  | 50 | 47 | 46 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 46 | 42 | 59 | 60 | 61 | 60 | 67 | 64 | 62 | 79 | 84 | 82 | 124 | 147 | 250 | 288 | 130 | 378 |  |  |
