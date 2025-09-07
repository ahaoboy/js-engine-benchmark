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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48003<br>36.5M<br>1316/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47621<br>57.6M<br>827/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46360<br>98.6M<br>470/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40933<br>65.3M<br>626/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40341<br>66.3M<br>608/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39721<br>106.3M<br>373/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39309<br>123.3M<br>318/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38791<br>40.7M<br>954/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20319<br>19.4M<br>1047/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19370<br>39.8M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17234<br>51M<br>338/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16911<br>35.2M<br>480/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10033<br>199.7M<br>50/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2557<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1513<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 865<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 817<br>4.3M<br>191/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 810<br>5.2M<br>156/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 750<br>1.4M<br>533/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 747<br>1.4M<br>536/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 736<br>831.3K<br>906/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 640<br>2M<br>324/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 567<br>46.4M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 506<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 489<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 403<br>446.6K<br>923/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 386<br>685K<br>577/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 372<br>414.5K<br>919/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 295<br>2.7K<br>111873/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 272<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/7/2025, 1:51:55 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | bare | dune | deno | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | rquickjs | njs | primjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.0 | 1.2.21 |  | 0.10.1 | 2.4.5 | 24.7.0 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 57.6M | 98.6M | 65.3M | 66.3M | 106.3M | 123.3M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 1M | 98.6M | 65.3M | 66.3M | 106.3M | 123.3M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.5M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41370 | 38151 | 41445 | 31867 | 38613 | 31719 | 31938 | 32520 | 23790 | 13199 | 14477 | 13189 | 35680 | 12440 | 1127 | 684 | 686 | 712 | 573 | 545 | 566 | 593 | 575 | 491 | 290 | 339 | 270 | 244 | 229 | 115 | 203 | 90 | 106 | 60 | 58 | 271 | 27 |  | 131 |  |
| DeltaBlue | 53410 | 110886 | 50739 | 76366 | 76214 | 73173 | 72664 | 75870 | 26862 | 13620 | 13078 | 12404 | 26903 | 214 | 1036 | 662 | 663 | 676 | 577 | 586 | 542 | 596 | 568 | 463 | 330 | 390 | 346 | 360 | 311 | 175 | 250 | 163 | 113 | 54 | 55 | 280 | 32 |  | 178 |  |
| Crypto | 52007 | 41338 | 48383 | 41746 | 41755 | 41615 | 41132 | 41403 | 31437 | 20208 | 17965 | 17691 | 15418 | 8580 | 1368 | 586 | 734 | 525 | 529 | 552 | 872 | 504 | 379 | 870 | 787 | 409 | 187 | 192 | 181 | 157 | 124 | 325 | 92 | 80 | 61 | 298 | 31 |  | 132 |  |
| RayTrace | 120766 | 107298 | 118250 | 72223 | 68745 | 65267 | 64315 | 60618 | 35854 | 28239 | 26909 | 27399 | 9231 | 1315 | 1559 | 1156 | 905 | 1066 | 873 | 908 | 680 | 884 | 711 | 561 | 574 | 456 | 524 | 450 | 484 | 446 | 271 | 499 | 260 | 162 | 135 | 348 | 96 |  | 416 |  |
| EarleyBoyer | 69143 | 84776 | 65437 | 70600 | 73672 | 72499 | 70757 | 69623 | 6990 | 41108 | 36128 | 36421 | 10714 | 1072 | 3346 | 1861 | 1396 | 1674 | 1383 | 1275 | 1678 | 1391 | 1186 | 766 | 590 | 860 | 541 | 491 | 511 | 583 | 499 | 323 | 283 | 189 | 134 |  | 80 |  | 413 |  |
| RegExp | 20204 | 10294 | 20386 | 10152 | 9941 | 9910 | 10032 | 8892 | 7847 | 8719 | 8837 | 8719 | 1314 | 781 | 545 | 254 | 224 | 226 | 217 | 229 | 116 | 239 | 183 | 64 | 136 | 179 | 240 | 209 | 199 | 410 | 207 | 95 | 243 | 48 | 93 |  |  |  |  |  |
| Splay | 36231 | 41626 | 33281 | 38545 | 29157 | 35359 | 33876 | 34797 | 20169 | 24398 | 12119 | 12016 | 2043 | 4482 | 3321 | 2274 | 1656 | 1840 | 2237 | 2188 | 2111 | 1789 | 1576 | 1270 | 1316 | 1265 | 1250 | 1303 | 1239 | 951 | 841 | 361 | 486 | 208 | 315 |  | 88 |  | 839 |  |
| NavierStokes | 40136 | 38803 | 39948 | 38881 | 38881 | 38694 | 38617 | 38436 | 36470 | 22090 | 21980 | 22112 | 26118 | 16176 | 1817 | 953 | 1274 | 990 | 976 | 947 | 1222 | 922 | 932 | 1523 | 950 | 682 | 466 | 481 | 469 | 179 | 199 | 837 | 163 | 174 | 118 |  | 51 |  | 291 |  |
| Score | 48003 | 47621 | 46360 | 40933 | 40341 | 39721 | 39309 | 38791 | 20319 | 19370 | 17234 | 16911 | 10033 | 2557 | 1513 | 865 | 817 | 810 | 750 | 747 | 741 | 736 | 640 | 567 | 506 | 489 | 403 | 386 | 372 | 295 | 272 | 262 | 188 | 104 | 103 |  |  |  |  |  |
| Score/MB | 1316 | 827 | 470 | 626 | 608 | 373 | 318 | 954 | 1047 | 486 | 338 | 480 | 50 | 2 | 42 | 70 | 191 | 156 | 533 | 536 | 87 | 906 | 324 | 12 | 238 |  | 923 | 577 | 919 | 111873 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 37 | 34 | 46 | 50 | 50 | 53 | 53 | 61 | 51 | 59 | 85 | 67 | 63 | 82 | 83 | 86 | 97 | 114 | 132 | 146 | 237 | 238 | 31 | 401 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bare | bun | deno | dune | node | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | txiki.js | llrt | rquickjs | quickjs-ng | quickjs | njs | primjs | ladybird | duktape | quickjs-emscripten | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.61 |  | 1.2.21 | 2.4.5 | 0.10.1 | 24.7.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 24.12.0 | 0.6.2.beta |  | 0.8.0 | 2025.04.26 | 0.9.2 |  |  | 2.99.99 |  | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.3M | 45.6M | 56.8M | 85.5M | 56.8M | 111.7M | 131.7M | 46.3M | 32.8M | 194M | 0 | 15.7M | 3.6M | 10.5M | 1.2M | 4.1M | 975.9K | 2.4M | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.3M | 45.6M | 56.8M | 85.5M | 56.8M | 111.7M | 65.9M | 46.3M | 32.8M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 1.2M | 2.1M | 975.9K | 1.8M | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50358 | 40414 | 42189 | 50902 | 44311 | 44159 | 35631 | 13997 | 13884 | 14273 | 32704 | 12868 | 1123 | 1255 | 699 | 963 | 950 | 1079 | 705 | 962 | 765 | 445 | 496 | 376 | 102 | 208 | 225 | 142 | 79 | 39 | 174 | 33 |  | 143 |
| DeltaBlue | 66806 | 126814 | 93445 | 71414 | 99884 | 94972 | 68829 | 16563 | 15201 | 16014 | 20001 | 588 | 1096 | 965 | 912 | 1004 | 840 | 793 | 776 | 1092 | 713 | 499 | 553 | 591 | 183 | 214 | 250 | 151 | 72 | 33 | 210 | 44 |  | 208 |
| Crypto | 70073 | 61637 | 44661 | 59645 | 48276 | 50118 | 35328 | 24019 | 18886 | 19663 | 32913 | 2295 | 1322 | 896 | 936 | 967 | 967 | 1100 | 1148 | 1495 | 1524 | 1112 | 521 | 268 | 372 | 109 | 132 | 118 | 95 | 40 | 239 | 36 |  | 131 |
| RayTrace | 172047 | 157100 | 86949 | 80733 | 57070 | 68227 | 48173 | 46841 | 36519 | 36187 | 760 | 510 | 1744 | 1790 | 1941 | 1300 | 1295 | 839 | 995 | 1037 | 840 | 1036 | 619 | 747 | 667 | 546 | 237 | 305 | 188 | 40 | 296 | 117 |  | 613 |
| EarleyBoyer | 100694 | 117188 | 79691 | 52284 | 73812 | 75279 | 62477 | 47785 | 41193 | 37092 | 30595 | 794 | 4367 | 3050 | 2194 | 1940 | 2093 | 2048 | 2581 | 1370 | 1132 | 974 | 1222 | 781 | 385 | 691 | 411 | 311 | 197 | 77 |  | 96 |  | 627 |
| RegExp | 32704 | 14092 | 13806 | 24597 | 11026 | 10243 | 9364 | 10686 | 12001 | 10092 | 1574 | 425 | 611 | 271 | 240 | 243 | 264 | 224 | 198 | 234 | 80 | 228 | 215 | 319 | 331 | 565 | 230 | 177 | 117 | 13 |  |  |  |  |
| Splay | 54795 | 46670 | 46230 | 38985 | 31472 | 22152 | 28269 | 22646 | 15841 | 15211 | 2503 | 1194 | 3602 | 2719 | 2665 | 2646 | 1956 | 1919 | 1450 | 227 | 1515 | 1704 | 1599 | 790 | 552 | 691 | 663 | 497 | 386 | 134 |  | 114 |  | 606 |
| NavierStokes | 33323 | 37433 | 38912 | 32731 | 36434 | 34178 | 38842 | 17702 | 19569 | 19826 | 26415 | 13303 | 1343 | 1860 | 1498 | 1549 | 2007 | 1548 | 1757 | 3785 | 1665 | 1272 | 880 | 664 | 1086 | 198 | 234 | 160 | 188 | 71 |  | 70 |  | 268 |
| Score | 62863 | 58814 | 48437 | 48115 | 42856 | 41243 | 35772 | 21925 | 19659 | 19186 | 9217 | 1620 | 1569 | 1300 | 1118 | 1113 | 1102 | 1009 | 974 | 904 | 795 | 770 | 652 | 526 | 370 | 330 | 267 | 207 | 143 | 46 |  |  |  |  |
| Score/MB | 383236238 | 1423 | 1063 | 847 | 501 | 726 | 320 | 166 | 424 | 584 | 47 |  | 99 | 360 | 106 | 930 | 267 | 1058 | 407 | 513 | 19 | 1402 |  | 1255 | 234 | 125146 | 20 | 2 | 11 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 45 | 33 | 41 | 42 | 42 | 41 | 44 | 48 | 46 | 71 | 50 | 55 | 61 | 91 | 96 | 108 | 139 | 167 | 600 | 37 | 336 |  | 83 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.61 |  |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.4M | 122.1M | 55.8M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 112.8M | 37.3M | 11.8M | 9.2M | 42.2M | 9M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.3M | 0 | 0 |
| Exe size | 29.4M | 338K | 26.1M | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 1.7M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.4M | 0 | 0 |
| Dll size | 25M | 121.8M | 29.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 31.6M | 6.9M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38680 | 36192 | 31465 | 36767 | 33173 | 32997 | 33247 | 25103 | 13909 | 13648 | 35803 | 7604 | 691 | 452 | 493 | 402 | 388 | 451 | 431 | 344 | 229 | 208 | 222 | 191 | 104 | 54 | 48 |  | 22 |  |  |
| DeltaBlue | 110159 | 45714 | 76578 | 39935 | 74865 | 72069 | 74455 | 28669 | 13594 | 13025 | 28964 | 462 | 621 | 396 | 447 | 403 | 348 | 462 | 396 | 394 | 317 | 258 | 330 | 228 | 111 | 49 | 42 |  | 25 |  |  |
| Crypto | 41562 | 49878 | 41312 | 45696 | 42012 | 37573 | 40654 | 34040 | 20546 | 17792 | 21452 | 2609 | 775 | 425 | 519 | 515 | 432 | 328 | 378 | 422 | 190 | 315 | 181 | 113 | 91 | 58 | 74 |  | 29 |  |  |
| RayTrace | 105892 | 103302 | 72741 | 97457 | 59273 | 65341 | 66673 | 49949 | 27084 | 26862 | 4366 | 1505 | 1012 | 736 | 514 | 557 | 594 | 585 | 585 | 474 | 438 | 433 | 468 | 225 | 262 | 125 | 132 |  | 76 |  |  |
| EarleyBoyer | 83026 | 61488 | 70401 | 56126 | 69723 | 70405 | 72667 | 41525 | 41687 | 36812 | 30446 | 882 | 2242 | 1137 | 982 | 984 | 1008 | 920 | 972 | 868 | 539 | 505 | 562 | 447 | 293 | 121 | 133 |  | 67 |  |  |
| RegExp | 9890 | 18419 | 9910 | 16621 | 9499 | 9880 | 9680 | 10052 | 9019 | 8766 | 1000 | 957 | 397 | 195 | 186 | 165 | 193 | 151 | 186 | 180 | 249 | 109 | 197 | 196 | 278 | 88 | 42 |  |  |  |  |
| Splay | 42595 | 34902 | 38553 | 32002 | 33159 | 33273 | 27405 | 21897 | 23576 | 12607 | 2471 | 4388 | 2269 | 1369 | 993 | 1229 | 1042 | 1164 | 967 | 1247 | 1133 | 977 | 619 | 837 | 503 | 321 | 165 |  | 80 |  |  |
| NavierStokes | 38990 | 33882 | 38912 | 34064 | 38912 | 38765 | 38951 | 36061 | 22067 | 22216 | 26564 | 3384 | 1071 | 738 | 1031 | 744 | 708 | 759 | 645 | 747 | 477 | 1069 | 461 | 187 | 148 | 115 | 168 |  | 49 |  |  |
| Score | 47422 | 42874 | 40733 | 40073 | 38939 | 38895 | 38707 | 28229 | 19462 | 17205 | 10864 | 1904 | 961 | 579 | 569 | 537 | 515 | 514 | 505 | 501 | 380 | 379 | 344 | 250 | 190 | 96 | 86 |  |  |  |  |
| Score/MB | 871 | 351 | 729 | 301 | 272 | 333 | 498 | 1959 | 379 | 236 | 55 | 108 | 8 | 15 | 48 | 58 | 12 | 57 | 56 |  | 50 | 49 | 45 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 42 | 42 | 60 | 59 | 61 | 60 | 68 | 63 | 62 | 80 | 84 | 84 | 124 | 148 | 252 | 290 | 131 | 445 |  |  |
