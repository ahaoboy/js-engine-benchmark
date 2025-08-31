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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48216<br>36.5M<br>1322/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48077<br>57.1M<br>841/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47208<br>98.6M<br>478/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 41060<br>65.3M<br>628/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40928<br>106.3M<br>385/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40011<br>123.3M<br>324/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39328<br>40.7M<br>967/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 38938<br>66.3M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20179<br>19.4M<br>1039/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19192<br>40.1M<br>478/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17041<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17030<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11747<br>199.7M<br>58/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2247<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1542<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 858<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 836<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 826<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 765<br>1.4M<br>549/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 762<br>831.3K<br>938/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 755<br>1.4M<br>536/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 506<br>46.4M<br>10/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 501<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 488<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 402<br>446.6K<br>921/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 379<br>685K<br>566/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 368<br>414.5K<br>909/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 294<br>2.7K<br>111494/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
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
8/31/2025, 1:53:47 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | bare | deno | node | lo | dune | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | primjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.0 | 1.2.21 |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 57.1M | 98.6M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 1M | 98.6M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 40.1M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40036 | 37586 | 39150 | 32400 | 33307 | 32262 | 32499 | 33000 | 23409 | 13581 | 13206 | 13987 | 35715 | 13559 | 1142 | 685 | 687 | 709 | 578 | 626 | 574 | 564 | 581 | 474 | 291 | 339 | 278 | 247 | 227 | 126 | 189 | 90 | 107 | 60 | 59 | 271 | 27 |  | 124 |  |
| DeltaBlue | 56736 | 109670 | 56253 | 78251 | 76003 | 73398 | 75963 | 72822 | 25045 | 13620 | 12886 | 12847 | 39796 | 269 | 1061 | 669 | 671 | 662 | 582 | 614 | 581 | 547 | 580 | 453 | 324 | 391 | 360 | 358 | 323 | 165 | 250 | 164 | 115 | 54 | 56 | 283 | 32 |  | 183 |  |
| Crypto | 51863 | 41381 | 49188 | 41612 | 41755 | 41511 | 41177 | 41571 | 31894 | 20369 | 17354 | 17814 | 28017 | 8110 | 1373 | 578 | 752 | 593 | 552 | 555 | 528 | 882 | 380 | 643 | 789 | 412 | 182 | 188 | 180 | 149 | 123 | 319 | 98 | 81 | 61 | 286 | 31 |  | 136 |  |
| RayTrace | 120914 | 113440 | 119656 | 72815 | 67857 | 66303 | 67043 | 67561 | 35188 | 26983 | 27842 | 26714 | 4321 | 1015 | 1560 | 1132 | 914 | 1069 | 896 | 958 | 916 | 681 | 705 | 549 | 582 | 458 | 525 | 514 | 483 | 447 | 273 | 495 | 259 | 163 | 136 | 356 | 92 |  | 426 |  |
| EarleyBoyer | 69813 | 85979 | 68177 | 69108 | 74089 | 70523 | 68157 | 73151 | 7158 | 41222 | 36569 | 36174 | 21952 | 811 | 3379 | 1856 | 1506 | 1753 | 1390 | 1382 | 1373 | 1672 | 1234 | 745 | 594 | 846 | 553 | 524 | 492 | 623 | 507 | 323 | 288 | 188 | 135 |  | 78 |  | 378 |  |
| RegExp | 20254 | 10476 | 21478 | 10303 | 10112 | 10112 | 8839 | 10122 | 7902 | 8381 | 8693 | 8874 | 1283 | 590 | 554 | 250 | 226 | 227 | 235 | 231 | 221 | 115 | 179 | 63 | 133 | 180 | 241 | 223 | 198 | 462 | 209 | 96 | 246 | 49 | 94 |  |  |  |  |  |
| Splay | 36064 | 42204 | 37660 | 37991 | 37763 | 36418 | 36263 | 27251 | 20027 | 23749 | 12436 | 11659 | 2289 | 4995 | 3647 | 2220 | 1750 | 1879 | 2228 | 1777 | 2217 | 2070 | 1635 | 830 | 1236 | 1276 | 1149 | 885 | 1161 | 836 | 838 | 376 | 451 | 215 | 317 |  | 81 |  | 833 |  |
| NavierStokes | 40216 | 38803 | 34508 | 38881 | 38803 | 38803 | 38436 | 38803 | 36878 | 22067 | 21876 | 22112 | 32698 | 9043 | 1801 | 947 | 1262 | 982 | 963 | 983 | 977 | 1222 | 928 | 1446 | 944 | 662 | 470 | 483 | 470 | 170 | 201 | 830 | 164 | 176 | 118 |  | 51 |  | 289 |  |
| Score | 48216 | 48077 | 47208 | 41060 | 40928 | 40011 | 39328 | 38938 | 20179 | 19192 | 17041 | 17030 | 11747 | 2247 | 1542 | 858 | 836 | 826 | 765 | 762 | 755 | 740 | 646 | 506 | 501 | 488 | 402 | 379 | 368 | 294 | 270 | 263 | 189 | 105 | 104 |  |  |  |  |  |
| Score/MB | 1322 | 841 | 478 | 628 | 385 | 324 | 967 | 587 | 1039 | 478 | 483 | 334 | 58 | 1 | 42 | 69 | 195 | 160 | 549 | 938 | 536 | 87 | 327 | 10 | 235 |  | 921 | 566 | 909 | 111494 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 34 | 47 | 48 | 50 | 51 | 51 | 53 | 61 | 59 | 91 | 68 | 64 | 81 | 82 | 86 | 98 | 113 | 133 | 144 | 237 | 237 | 31 | 403 |  | 88 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bare | dune | node | deno | bun | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.144 |  |  | 0.10.1 | 24.7.0 | 2.4.5 | 1.2.21 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.8.0 | 2025.04.26 | 0.6.2.beta |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 0.2K | 45.6M | 56.8M | 111.7M | 85.5M | 56.8M | 132.3M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 4.1M | 975.9K | 10.5M | 1.2M | 2.4M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.3M | 0.2K | 45.6M | 56.8M | 111.7M | 85.5M | 56.8M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 2.1M | 975.9K | 10.5M | 1.2M | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 43838 | 50415 | 41279 | 45067 | 40788 | 44565 | 50104 | 14386 | 13602 | 14940 | 33276 | 20048 | 1092 | 1152 | 1282 | 1196 | 1083 | 828 | 927 | 660 | 756 | 499 | 555 | 365 | 322 | 105 | 211 | 175 | 106 | 39 | 206 | 38 |  | 213 |
| DeltaBlue | 132666 | 60981 | 92949 | 107640 | 103171 | 101167 | 70363 | 16867 | 16219 | 16384 | 13429 | 1750 | 1140 | 1223 | 1279 | 1140 | 1058 | 1057 | 982 | 734 | 675 | 586 | 554 | 555 | 356 | 182 | 198 | 194 | 82 | 36 | 226 | 45 |  | 240 |
| Crypto | 59145 | 72614 | 51422 | 57486 | 51466 | 53175 | 68310 | 24280 | 21652 | 18913 | 30391 | 7297 | 1355 | 1683 | 1084 | 1142 | 1258 | 959 | 968 | 1142 | 1490 | 1271 | 507 | 282 | 170 | 403 | 141 | 161 | 104 | 42 | 248 | 44 |  | 142 |
| RayTrace | 144890 | 153252 | 80363 | 79401 | 69929 | 76589 | 146889 | 47016 | 49209 | 31756 | 6788 | 760 | 2202 | 1944 | 1978 | 1513 | 1176 | 1895 | 1381 | 1049 | 1037 | 1034 | 727 | 930 | 423 | 638 | 745 | 375 | 228 | 40 | 306 | 143 |  | 664 |
| EarleyBoyer | 109861 | 96174 | 79560 | 91681 | 91587 | 92812 | 43215 | 50668 | 44847 | 38671 | 12511 | 1486 | 4279 | 2404 | 3070 | 2374 | 2272 | 2532 | 2161 | 2293 | 1236 | 1130 | 1127 | 971 | 682 | 385 | 708 | 415 | 210 | 80 |  | 117 |  | 610 |
| RegExp | 14120 | 27785 | 13728 | 13378 | 14050 | 12819 | 22275 | 12116 | 10567 | 10334 | 1509 | 561 | 669 | 306 | 294 | 261 | 262 | 261 | 255 | 194 | 99 | 241 | 205 | 324 | 267 | 315 | 524 | 214 | 130 | 13 |  |  |  |  |
| Splay | 61632 | 50671 | 52236 | 32670 | 44796 | 38619 | 27291 | 27826 | 15239 | 15717 | 2690 | 1445 | 4010 | 2624 | 3164 | 2080 | 2420 | 3085 | 2822 | 1342 | 2062 | 1789 | 1609 | 960 | 1302 | 528 | 711 | 535 | 514 | 141 |  | 120 |  | 868 |
| NavierStokes | 37990 | 32698 | 38584 | 38881 | 38803 | 36434 | 21432 | 19846 | 19158 | 20459 | 21348 | 2841 | 1425 | 3850 | 2072 | 1979 | 2172 | 1610 | 1643 | 1771 | 1902 | 1429 | 882 | 668 | 284 | 1025 | 184 | 245 | 210 | 66 |  | 77 |  | 302 |
| Score | 60564 | 59230 | 49301 | 49229 | 49117 | 48524 | 45962 | 23528 | 20607 | 19254 | 9999 | 2254 | 1671 | 1555 | 1462 | 1251 | 1232 | 1229 | 1152 | 940 | 887 | 848 | 663 | 567 | 392 | 366 | 347 | 264 | 167 | 47 |  |  |  |  |
| Score/MB | 1468 | 361088119 | 1082 | 866 | 439 | 567 | 809 | 177 | 627 | 415 | 51 |  | 106 | 883 | 405 | 303 | 1292 | 116 | 962 | 391 | 21 | 1544 |  | 1353 | 30 | 231 | 131593 | 3 | 13 | 44 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 37 | 32 | 37 | 38 | 39 | 39 | 40 | 41 | 49 | 64 | 47 | 58 | 58 | 88 | 92 | 92 | 107 | 148 | 614 | 35 | 285 |  | 76 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | node | dune | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs | rquickjs-pgo | quickjs-emscripten | quickjs-ng | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.144 |  | 1.2.21 |  | 24.7.0 | 0.10.1 | 2.4.5 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  |  | 0.8.0 |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.1M | 132.8M | 55.8M | 116.5M | 77.6M | 142.9M | 14.4M | 51.4M | 72.8M | 196.1M | 17.5M | 86.6M | 38.4M | 11.8M | 42.2M | 8M | 9M | 0 | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.3M | 338K | 113M | 26.1M | 85.4M | 47.4M | 110.6M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.2M | 1M | 0 | 1.7M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 29.7M | 31.1M | 30.3M | 32.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.5M | 32.7M | 6.9M | 29.1M | 6.7M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 35849 | 36153 | 36548 | 31182 | 32679 | 27377 | 19225 | 24948 | 13182 | 13263 | 35489 | 7982 | 660 | 451 | 511 | 391 | 434 | 444 | 387 | 437 | 226 | 212 | 236 | 193 | 107 | 53 | 47 |  | 22 |  |  |
| DeltaBlue | 109994 | 45357 | 43935 | 77589 | 75811 | 76452 | 56147 | 28596 | 13435 | 13105 | 30232 | 224 | 548 | 410 | 458 | 377 | 463 | 469 | 396 | 396 | 317 | 258 | 338 | 230 | 117 | 48 | 40 |  | 26 |  |  |
| Crypto | 41693 | 48036 | 44661 | 42004 | 42071 | 42044 | 41650 | 33785 | 20812 | 18137 | 20792 | 3003 | 750 | 426 | 542 | 416 | 328 | 328 | 432 | 369 | 190 | 317 | 181 | 113 | 89 | 59 | 74 |  | 29 |  |  |
| RayTrace | 112552 | 104560 | 102340 | 73037 | 59939 | 68449 | 69337 | 51133 | 28359 | 27306 | 3852 | 1331 | 984 | 734 | 509 | 567 | 587 | 585 | 457 | 578 | 464 | 439 | 476 | 230 | 266 | 130 | 134 |  | 82 |  |  |
| EarleyBoyer | 83999 | 65235 | 57916 | 69701 | 67365 | 73097 | 71805 | 44752 | 41358 | 36843 | 27599 | 665 | 2227 | 1112 | 999 | 1022 | 948 | 924 | 874 | 976 | 579 | 525 | 585 | 462 | 296 | 125 | 143 |  | 70 |  |  |
| RegExp | 9829 | 19040 | 17711 | 9981 | 9951 | 9680 | 9790 | 10042 | 9083 | 8874 | 1010 | 691 | 398 | 195 | 174 | 194 | 163 | 155 | 181 | 185 | 255 | 110 | 198 | 197 | 280 | 90 | 43 |  |  |  |  |
| Splay | 42612 | 34422 | 34063 | 39996 | 33460 | 29410 | 31586 | 20576 | 23909 | 14677 | 2235 | 3154 | 2361 | 1294 | 932 | 1254 | 1270 | 1254 | 1269 | 977 | 1179 | 1002 | 1182 | 862 | 421 | 324 | 169 |  | 82 |  |  |
| NavierStokes | 39060 | 34132 | 38211 | 39060 | 38912 | 38990 | 38951 | 36952 | 22445 | 22171 | 27157 | 2796 | 891 | 732 | 1041 | 713 | 771 | 761 | 742 | 662 | 478 | 1081 | 475 | 187 | 153 | 115 | 165 |  | 48 |  |  |
| Score | 47387 | 43150 | 42063 | 41052 | 39091 | 38560 | 35796 | 28382 | 19519 | 17588 | 10478 | 1524 | 916 | 574 | 569 | 530 | 526 | 522 | 509 | 506 | 389 | 384 | 381 | 253 | 188 | 98 | 87 |  |  |  |  |
| Score/MB | 872 | 353 | 316 | 735 | 335 | 496 | 250 | 1969 | 379 | 241 | 53 | 86 | 10 | 14 | 48 | 12 | 65 | 58 |  | 56 | 51 | 50 | 50 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 46 | 44 | 61 | 61 | 60 | 65 | 67 | 61 | 64 | 78 | 83 | 83 | 123 | 147 | 249 | 280 | 130 | 436 |  |  |
