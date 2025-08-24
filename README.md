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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48579<br>36.4M<br>1333/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48393<br>57.1M<br>847/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47531<br>98.4M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40834<br>65.3M<br>625/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40285<br>106.3M<br>379/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40080<br>123.1M<br>325/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39185<br>66.3M<br>590/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38693<br>40.7M<br>951/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20291<br>19.4M<br>1045/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19288<br>40.1M<br>480/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17160<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17056<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11159<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2711<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1506<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 856<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 826<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 822<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 770<br>831.3K<br>948/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 764<br>1.4M<br>549/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 764<br>1.4M<br>542/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 735<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 560<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 508<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 491<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 392<br>685K<br>586/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 389<br>446.6K<br>891/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 380<br>414.5K<br>938/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 268<br>2.7K<br>101634/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 192<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/24/2025, 1:56:53 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | goja | ringo | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.0 | 1.2.20 |  | 2.4.5 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.4M | 57.1M | 98.4M | 65.3M | 106.3M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 2.1M | 0 | 685K | 446.6K | 414.5K | 13.2M | 2.7K | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 36.4M | 1M | 98.4M | 65.3M | 106.3M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 2.1M | 0 | 685K | 446.6K | 414.5K | 13.2M | 2.7K | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40368 | 37173 | 40022 | 32213 | 32033 | 31959 | 32460 | 30624 | 23416 | 13150 | 14343 | 12984 | 35436 | 12557 | 1126 | 680 | 691 | 706 | 624 | 574 | 578 | 561 | 578 | 478 | 291 | 374 | 244 | 273 | 230 | 202 | 78 | 89 | 105 | 60 | 60 | 274 | 27 |  | 121 |  |
| DeltaBlue | 57496 | 109194 | 56405 | 79196 | 74224 | 73371 | 75361 | 75103 | 24358 | 13495 | 13038 | 12979 | 38937 | 251 | 1055 | 661 | 665 | 680 | 615 | 589 | 583 | 542 | 576 | 469 | 334 | 385 | 355 | 362 | 323 | 252 | 161 | 162 | 113 | 55 | 55 | 279 | 33 |  | 176 |  |
| Crypto | 52065 | 41467 | 49025 | 41552 | 41604 | 41499 | 41294 | 41153 | 32165 | 20421 | 17896 | 17762 | 28341 | 9545 | 1367 | 580 | 751 | 595 | 554 | 556 | 532 | 831 | 380 | 845 | 791 | 405 | 190 | 187 | 183 | 123 | 126 | 328 | 99 | 80 | 62 | 297 | 32 |  | 136 |  |
| RayTrace | 123504 | 113810 | 117836 | 71557 | 68597 | 66747 | 67561 | 66525 | 37850 | 27278 | 26317 | 27870 | 2910 | 1281 | 1573 | 1131 | 908 | 1039 | 954 | 906 | 917 | 682 | 697 | 564 | 583 | 451 | 530 | 534 | 483 | 274 | 428 | 502 | 253 | 164 | 138 | 350 | 97 |  | 427 |  |
| EarleyBoyer | 68993 | 89475 | 67428 | 69556 | 74046 | 70979 | 73925 | 67880 | 7094 | 40887 | 34994 | 37106 | 24570 | 1231 | 3384 | 1840 | 1396 | 1690 | 1423 | 1403 | 1387 | 1671 | 1230 | 771 | 599 | 856 | 546 | 563 | 516 | 504 | 619 | 322 | 278 | 194 | 137 |  | 82 |  | 505 |  |
| RegExp | 20113 | 10648 | 20981 | 10112 | 10001 | 10092 | 10142 | 8874 | 7886 | 8563 | 8947 | 8603 | 1216 | 670 | 544 | 250 | 222 | 226 | 237 | 228 | 223 | 116 | 182 | 63 | 130 | 179 | 225 | 244 | 203 | 212 | 461 | 96 | 249 | 48 | 95 |  |  |  |  |  |
| Splay | 37315 | 42432 | 35369 | 37404 | 35538 | 36924 | 28025 | 34495 | 20304 | 24887 | 12311 | 12199 | 2146 | 5020 | 3094 | 2274 | 1758 | 1825 | 1817 | 2204 | 2282 | 2094 | 1646 | 1278 | 1309 | 1263 | 1112 | 809 | 1312 | 909 | 814 | 379 | 540 | 221 | 318 |  | 88 |  | 841 |  |
| NavierStokes | 40136 | 38842 | 39920 | 38732 | 38842 | 38765 | 38765 | 38397 | 36434 | 22238 | 22149 | 22045 | 32945 | 18310 | 1818 | 939 | 1265 | 1005 | 992 | 964 | 995 | 1220 | 930 | 1435 | 973 | 664 | 465 | 476 | 477 | 203 | 167 | 848 | 164 | 176 | 119 |  | 52 |  | 273 |  |
| Score | 48579 | 48393 | 47531 | 40834 | 40285 | 40080 | 39185 | 38693 | 20291 | 19288 | 17160 | 17056 | 11159 | 2711 | 1506 | 856 | 826 | 822 | 770 | 764 | 764 | 735 | 646 | 560 | 508 | 491 | 392 | 389 | 380 | 276 | 268 | 264 | 192 | 106 | 105 |  |  |  |  |  |
| Score/MB | 1333 | 847 | 482 | 625 | 379 | 325 | 590 | 951 | 1045 | 480 | 336 | 484 | 55 | 2 | 41 | 69 | 193 | 159 | 948 | 549 | 542 | 87 | 327 | 12 | 238 |  | 586 | 891 | 938 | 20 | 101634 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 41 | 34 | 47 | 49 | 50 | 50 | 52 | 52 | 61 | 59 | 88 | 67 | 64 | 80 | 79 | 84 | 113 | 104 | 130 | 143 | 235 | 234 | 31 | 392 |  | 87 | 7 |
### macos-arm64
| Engine | v8 | dune | bare | JavaScriptCore | node | deno | bun | spidermonkey | spiderfire | mozjs | graaljs | hermes | primjs | quickjs-ng | llrt | txiki.js | quickjs | jjs | rquickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | ringo | xst | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.108 | 0.10.1 |  |  | 24.6.0 | 2.4.5 | 1.2.20 | 143.0 |  |  | 24.1.2 | 0.12.0 |  | 0.8.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  | 0.9.2 | 2.99.99 |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 56.8M | 45.6M | 0.2K | 111.5M | 85.5M | 56.8M | 132.3M | 46.3M | 32.8M | 194M | 15.7M | 1.8M | 4.1M | 10.5M | 3.6M | 975.9K | 0 | 1.2M | 2.4M | 562.1K | 41.3M | 0 | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.1M | 56.8M | 45.6M | 0.2K | 111.5M | 85.5M | 56.8M | 66.2M | 46.3M | 32.8M | 147.4K | 7.9M | 1.8M | 2.1M | 10.5M | 3.6M | 975.9K | 0 | 1.2M | 1.8M | 562.1K | 41.3M | 0 | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42119 | 39086 | 37526 | 44082 | 36262 | 39771 | 39651 | 13994 | 14474 | 10788 | 31669 | 952 | 1121 | 1231 | 847 | 1031 | 898 | 3096 | 737 | 585 | 472 | 733 | 574 | 359 | 195 | 108 | 263 | 115 | 72 | 38 | 201 | 28 |  | 214 |
| DeltaBlue | 133572 | 100215 | 102456 | 62323 | 94549 | 85901 | 47036 | 15399 | 15915 | 12265 | 8913 | 905 | 1213 | 1067 | 770 | 968 | 846 | 160 | 705 | 601 | 539 | 666 | 662 | 497 | 186 | 161 | 300 | 149 | 58 | 40 | 208 | 32 |  | 239 |
| Crypto | 54862 | 54303 | 57600 | 61535 | 53017 | 46391 | 61127 | 22832 | 19841 | 19458 | 27861 | 1047 | 1586 | 1138 | 827 | 1017 | 1032 | 2383 | 716 | 1041 | 1284 | 1110 | 544 | 274 | 134 | 375 | 141 | 130 | 82 | 39 | 236 | 37 |  | 132 |
| RayTrace | 150884 | 82287 | 81695 | 159098 | 75553 | 69189 | 124096 | 39028 | 38849 | 42507 | 6505 | 1798 | 1356 | 1389 | 1750 | 1777 | 1037 | 1131 | 1021 | 695 | 926 | 706 | 727 | 853 | 523 | 630 | 247 | 296 | 169 | 38 | 287 | 106 |  | 647 |
| EarleyBoyer | 101837 | 98596 | 81006 | 74657 | 82636 | 78812 | 71445 | 42631 | 43567 | 40067 | 11885 | 3784 | 1291 | 2179 | 2252 | 2639 | 2087 | 1111 | 1675 | 1899 | 1006 | 1080 | 1134 | 886 | 665 | 357 | 514 | 327 | 176 | 76 |  | 88 |  | 655 |
| RegExp | 11711 | 14197 | 11831 | 18857 | 11546 | 12418 | 19385 | 7546 | 10334 | 8464 | 1091 | 559 | 260 | 249 | 270 | 277 | 245 | 652 | 236 | 199 | 200 | 79 | 206 | 321 | 578 | 276 | 207 | 181 | 99 | 13 |  |  |  |  |
| Splay | 52790 | 37673 | 34943 | 18727 | 39694 | 39931 | 25230 | 18971 | 15378 | 13210 | 2046 | 3944 | 4274 | 1609 | 3590 | 1303 | 2121 | 1824 | 3023 | 2123 | 1850 | 952 | 1399 | 1143 | 1130 | 405 | 1005 | 429 | 405 | 77 |  | 97 |  | 830 |
| NavierStokes | 38694 | 35066 | 34987 | 28260 | 38469 | 36693 | 27816 | 20270 | 18051 | 15418 | 16571 | 1184 | 3515 | 1974 | 1504 | 1436 | 2097 | 422 | 1614 | 1854 | 1218 | 1383 | 804 | 692 | 202 | 764 | 223 | 202 | 176 | 66 |  | 61 |  | 289 |
| Score | 57128 | 48838 | 46322 | 45997 | 45989 | 44624 | 43882 | 19814 | 19646 | 17171 | 8299 | 1415 | 1400 | 1173 | 1152 | 1120 | 1080 | 964 | 962 | 886 | 780 | 675 | 668 | 558 | 350 | 325 | 300 | 207 | 128 | 43 |  |  |  |  |
| Score/MB | 1388 | 859 | 1016 | 280414827 | 412 | 521 | 772 | 149 | 423 | 523 | 42 | 90 | 795 | 284 | 109 | 310 | 1133 |  | 804 | 369 | 1420 | 16 |  | 1331 | 132731 | 205 | 23 | 2 | 10 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 34 | 39 | 41 | 41 | 40 | 42 | 53 | 46 | 51 | 49 | 76 | 57 | 58 | 95 | 102 | 111 | 132 | 190 | 605 | 37 | 360 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs | rquickjs-pgo | quickjs-emscripten | quickjs-ng | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.110 |  | 1.2.20 |  | 24.6.0 | 2.4.5 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  |  | 0.8.0 | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.1M | 122.1M | 132.7M | 55.8M | 116.4M | 142.9M | 77.6M | 14.4M | 51.5M | 72.8M | 196.1M | 17.5M | 112.8M | 38.1M | 11.8M | 42.2M | 8M | 9M | 0 | 9M | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.1M | 338K | 112.9M | 26.1M | 85.3M | 110.6M | 47.4M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.2M | 1M | 0 | 1.7M | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 23.9M | 121.8M | 19.8M | 29.7M | 31.1M | 32.3M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 109.8M | 32.4M | 6.9M | 29.1M | 6.7M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38267 | 35937 | 37032 | 32559 | 32891 | 33014 | 33180 | 24853 | 12977 | 13175 | 35548 | 8766 | 694 | 451 | 511 | 381 | 438 | 447 | 373 | 413 | 240 | 208 | 229 | 198 | 107 | 55 | 49 |  | 22 |  |  |
| DeltaBlue | 110655 | 47995 | 45707 | 76856 | 76426 | 75646 | 69854 | 29667 | 13680 | 12040 | 34038 | 665 | 623 | 410 | 460 | 370 | 469 | 476 | 394 | 410 | 331 | 251 | 317 | 230 | 112 | 51 | 42 |  | 26 |  |  |
| Crypto | 41324 | 49914 | 43194 | 41947 | 42138 | 41846 | 42101 | 33447 | 20274 | 17917 | 19903 | 3390 | 780 | 433 | 541 | 415 | 328 | 328 | 430 | 371 | 183 | 314 | 189 | 114 | 94 | 59 | 75 |  | 30 |  |  |
| RayTrace | 110110 | 104412 | 102414 | 69929 | 67487 | 54981 | 66229 | 47191 | 28194 | 27084 | 4070 | 1246 | 1010 | 746 | 512 | 565 | 596 | 583 | 465 | 587 | 479 | 438 | 465 | 235 | 270 | 128 | 134 |  | 85 |  |  |
| EarleyBoyer | 81826 | 63360 | 59085 | 68832 | 71290 | 72539 | 74360 | 42568 | 41161 | 36930 | 28680 | 2067 | 2251 | 1149 | 1012 | 1026 | 949 | 945 | 888 | 987 | 585 | 525 | 578 | 468 | 300 | 125 | 148 |  | 72 |  |  |
| RegExp | 10162 | 18729 | 17582 | 9839 | 9941 | 9670 | 9770 | 10142 | 9274 | 8929 | 1124 | 948 | 405 | 196 | 190 | 182 | 154 | 155 | 181 | 189 | 205 | 109 | 259 | 203 | 281 | 91 | 43 |  |  |  |  |
| Splay | 42693 | 36263 | 32971 | 38488 | 34078 | 33566 | 28489 | 23186 | 23787 | 15198 | 2410 | 6369 | 2184 | 1491 | 1049 | 1336 | 1288 | 1286 | 1296 | 1001 | 1189 | 1018 | 577 | 765 | 552 | 330 | 187 |  | 85 |  |  |
| NavierStokes | 39060 | 34098 | 38063 | 39099 | 38990 | 38881 | 38951 | 36878 | 22467 | 22193 | 25944 | 4339 | 1076 | 743 | 1034 | 717 | 771 | 756 | 751 | 634 | 463 | 1081 | 461 | 195 | 153 | 117 | 168 |  | 49 |  |  |
| Score | 47682 | 43655 | 42043 | 40667 | 40134 | 38916 | 38869 | 28453 | 19476 | 17441 | 10888 | 2458 | 961 | 591 | 584 | 527 | 526 | 525 | 510 | 507 | 382 | 382 | 355 | 254 | 196 | 99 | 89 |  |  |  |  |
| Score/MB | 898 | 357 | 316 | 728 | 344 | 272 | 500 | 1974 | 378 | 239 | 55 | 140 | 8 | 15 | 49 | 12 | 65 | 58 |  | 56 | 50 | 50 | 46 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 38 | 42 | 59 | 58 | 61 | 66 | 66 | 63 | 63 | 82 | 84 | 78 | 121 | 144 | 248 | 273 | 131 | 431 |  |  |
