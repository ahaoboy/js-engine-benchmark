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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48315<br>37M<br>1304/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47265<br>57.8M<br>818/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47234<br>98.9M<br>477/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42407<br>108.3M<br>391/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39846<br>123.4M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39055<br>66.3M<br>588/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38539<br>40.7M<br>947/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20033<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19413<br>40.1M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17085<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17045<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11625<br>199.7M<br>58/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2514<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1540<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 932<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 768<br>831.3K<br>946/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 754<br>1.4M<br>535/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 749<br>1.4M<br>538/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 743<br>8.4M<br>88/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 628<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 501<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 500<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 490<br>2M<br>242/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 397<br>446.6K<br>910/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 346<br>414.5K<br>854/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| rhino | [rhino](https://github.com/mozilla/rhino) | 321<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 308<br>2.7K<br>116803/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 190<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/28/2025, 4:38:40 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | ladybird | duktape | quickjs-emscripten | quickjs-ng | mujs-pgo | mujs-one | mujs | rhino | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.0 | 1.2.22 | 2.5.2 | 24.9.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 |  | 2.99.99 |  | 0.10.1 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 37M | 57.8M | 98.9M | 108.3M | 123.4M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 2.1M | 0 | 2M | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 37M | 1M | 98.9M | 108.3M | 123.4M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 2.1M | 0 | 2M | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 56.7M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42101 | 38292 | 40915 | 35479 | 32601 | 32541 | 33445 | 21100 | 13249 | 14153 | 12959 | 35768 | 12568 | 1130 | 717 | 686 | 703 | 625 | 578 | 581 | 566 | 537 | 287 | 350 | 393 | 280 | 243 | 228 | 148 | 149 | 199 | 89 | 101 | 60 | 59 | 285 | 25 |  |  |
| DeltaBlue | 56134 | 104804 | 49152 | 82304 | 75427 | 72049 | 75090 | 25861 | 13462 | 13138 | 12867 | 24497 | 362 | 1061 | 700 | 666 | 657 | 623 | 585 | 583 | 545 | 485 | 320 | 391 | 380 | 366 | 357 | 320 | 181 | 201 | 250 | 162 | 114 | 54 | 55 | 282 | 32 |  |  |
| Crypto | 52061 | 38666 | 48580 | 41978 | 41318 | 41747 | 41319 | 32219 | 20480 | 17780 | 17484 | 13382 | 8513 | 1367 | 680 | 749 | 593 | 554 | 533 | 562 | 883 | 865 | 799 | 428 | 401 | 191 | 191 | 183 | 143 | 154 | 123 | 326 | 97 | 80 | 61 | 296 | 38 |  |  |
| RayTrace | 118546 | 111516 | 116178 | 71927 | 66525 | 67265 | 55666 | 35632 | 27177 | 26069 | 28137 | 11100 | 1435 | 1546 | 1194 | 909 | 1068 | 947 | 909 | 897 | 683 | 772 | 569 | 458 | 576 | 542 | 528 | 478 | 441 | 497 | 272 | 501 | 250 | 164 | 137 | 348 | 100 |  |  |
| EarleyBoyer | 68323 | 86233 | 68117 | 76217 | 71572 | 74334 | 69776 | 7148 | 41799 | 36614 | 37473 | 37530 | 648 | 3346 | 1904 | 1460 | 1742 | 1415 | 1370 | 1271 | 1690 | 972 | 566 | 860 | 942 | 561 | 538 | 494 | 551 | 558 | 500 | 323 | 282 | 192 | 136 |  | 84 |  |  |
| RegExp | 20184 | 10455 | 21114 | 10152 | 9880 | 10052 | 8857 | 7894 | 8883 | 8974 | 8929 | 1353 | 778 | 555 | 268 | 229 | 227 | 236 | 218 | 227 | 115 | 65 | 135 | 178 | 157 | 239 | 215 | 197 | 438 | 441 | 203 | 96 | 242 | 48 | 93 |  |  |  |  |
| Splay | 36785 | 41300 | 38018 | 39621 | 36198 | 28326 | 35538 | 19998 | 24586 | 11642 | 11800 | 2146 | 4380 | 3618 | 2407 | 1801 | 1864 | 1822 | 2225 | 2168 | 2098 | 1442 | 1288 | 1270 | 1384 | 904 | 1308 | 698 | 877 | 856 | 771 | 381 | 533 | 205 | 318 |  | 138 |  |  |
| NavierStokes | 40136 | 38655 | 39920 | 38694 | 36730 | 38842 | 38359 | 36693 | 22260 | 22024 | 22002 | 23525 | 13007 | 1859 | 1133 | 1264 | 981 | 972 | 960 | 933 | 1219 | 1518 | 967 | 745 | 471 | 484 | 465 | 479 | 311 | 166 | 199 | 837 | 164 | 175 | 118 |  | 60 |  |  |
| Score | 48315 | 47265 | 47234 | 42407 | 39846 | 39055 | 38539 | 20033 | 19413 | 17085 | 17045 | 11625 | 2514 | 1540 | 932 | 835 | 823 | 768 | 754 | 749 | 743 | 628 | 501 | 500 | 490 | 397 | 397 | 346 | 321 | 308 | 267 | 264 | 190 | 105 | 104 |  |  |  |  |
| Score/MB | 1304 | 818 | 477 | 391 | 322 | 588 | 947 | 1032 | 483 | 335 | 483 | 58 | 2 | 42 | 75 | 195 | 159 | 946 | 535 | 538 | 88 | 13 | 235 |  | 242 | 910 | 593 | 854 |  | 116803 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 41 | 34 | 44 | 48 | 50 | 50 | 53 | 52 | 61 | 81 | 67 | 62 | 68 | 79 | 81 | 85 | 90 | 101 | 114 | 131 | 144 | 236 | 236 | 31 | 356 |  | 7 |
### macos-arm64
| Engine | v8 | bun | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | quickjs-ng | quickjs | jjs | llrt | rquickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | rhino | goja | ringo | xst | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 | 1.2.22 | 2.5.2 | 0.10.1 | 24.9.0 | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 | 0.10.1 | 2025.04.26 |  | 0.7.0.beta |  |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |
| Total size | 41.3M | 57.1M | 87.5M | 56.8M | 111.9M | 132.6M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 3.8M | 975.9K | 0 | 10.6M | 1.2M | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 0 | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 |
| Exe size | 41.3M | 57.1M | 87.5M | 56.8M | 111.9M | 66.3M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 1.9M | 975.9K | 0 | 10.6M | 1.2M | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 0 | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 1.9M | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 |
| Richards | 46101 | 48187 | 57507 | 43559 | 41886 | 14802 | 14827 | 14859 | 33438 | 1265 | 1119 | 1194 | 1083 | 1117 | 595 | 887 | 978 | 853 | 690 | 486 | 496 | 368 | 201 | 286 | 193 | 93 | 159 | 110 | 35 |  | 197 | 35 |  |
| DeltaBlue | 130206 | 56108 | 106238 | 96268 | 96850 | 16761 | 16543 | 16457 | 23366 | 1058 | 1223 | 1303 | 1020 | 1051 | 846 | 1048 | 917 | 760 | 722 | 501 | 619 | 521 | 233 | 313 | 228 | 178 | 162 | 99 | 32 |  | 232 | 45 |  |
| Crypto | 54162 | 59295 | 52897 | 57045 | 49660 | 21647 | 20978 | 21049 | 31494 | 1207 | 1616 | 1156 | 1001 | 1279 | 16597 | 631 | 926 | 1577 | 1120 | 1150 | 551 | 280 | 134 | 170 | 131 | 349 | 125 | 112 | 37 |  | 239 | 55 |  |
| RayTrace | 138526 | 127352 | 91611 | 90205 | 69189 | 45065 | 47359 | 37665 | 675 | 2056 | 1547 | 1723 | 1438 | 1198 | 1421 | 1617 | 1283 | 1328 | 945 | 1044 | 645 | 925 | 669 | 402 | 833 | 613 | 339 | 211 | 41 |  | 301 | 140 |  |
| EarleyBoyer | 98861 | 71242 | 79796 | 97621 | 74515 | 47303 | 42811 | 38589 | 18039 | 4786 | 1626 | 2901 | 2406 | 2212 | 1171 | 2363 | 1792 | 1785 | 2198 | 1081 | 1308 | 984 | 692 | 772 | 664 | 398 | 344 | 224 | 84 |  |  | 113 |  |
| RegExp | 14427 | 24505 | 11670 | 12365 | 11831 | 11886 | 10476 | 11456 | 1254 | 607 | 295 | 293 | 262 | 265 | 801 | 290 | 222 | 94 | 193 | 223 | 229 | 313 | 558 | 278 | 565 | 310 | 199 | 134 | 13 |  |  |  |  |
| Splay | 65071 | 35261 | 34927 | 32124 | 27650 | 27479 | 15933 | 18841 | 3243 | 2983 | 4531 | 3097 | 3045 | 2355 | 1122 | 3370 | 2768 | 2564 | 1406 | 1397 | 1777 | 969 | 928 | 1138 | 958 | 431 | 497 | 298 | 144 |  |  | 197 |  |
| NavierStokes | 38765 | 38139 | 32961 | 37359 | 34691 | 20586 | 20310 | 20377 | 21073 | 1134 | 3777 | 2027 | 2060 | 2226 | 433 | 1091 | 1582 | 1854 | 1796 | 1192 | 926 | 537 | 323 | 293 | 189 | 1042 | 172 | 213 | 71 |  |  | 90 |  |
| Score | 59731 | 51296 | 48719 | 48626 | 43045 | 22951 | 20825 | 20637 | 8437 | 1546 | 1517 | 1420 | 1258 | 1238 | 1235 | 1115 | 1080 | 1011 | 931 | 765 | 694 | 547 | 385 | 380 | 367 | 344 | 224 | 163 | 46 |  |  |  |  |
| Score/MB | 1447 | 898 | 556 | 856 | 384 | 173 | 634 | 445 | 43 | 98 | 862 | 393 | 328 | 1298 |  | 105 | 902 | 24 | 389 | 1393 |  | 1305 |  | 29 | 139178 | 217 | 2 | 13 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 34 | 38 | 39 | 40 | 38 | 45 | 43 | 43 | 62 | 50 | 48 | 51 | 59 | 81 | 85 | 93 | 94 | 129 | 150 | 593 |  | 34 | 264 |  |
### windows
| Engine | v8 | deno | bun | JavaScriptCore | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 | 2.5.2 | 1.2.22 |  | 0.10.1 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |
| Total size | 61.8M | 148.4M | 139.3M | 125.2M | 82M | 120.8M | 15.6M | 52.8M | 77.1M | 197.1M | 116.4M | 12.8M | 44.3M | 45.6M | 10M | 10.5M | 10.2M | 0 | 8.6M | 8.5M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 |
| Exe size | 29.4M | 112.5M | 113.3M | 342.5K | 47.4M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 13.1M | 1.6M | 1.4M | 1M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 |
| Dll size | 32.4M | 35.9M | 26M | 124.9M | 34.6M | 35.3M | 15.3M | 18.9M | 34.4M | 196.7M | 113.4M | 7.9M | 38.6M | 32.5M | 8.5M | 9.1M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 |
| Richards | 36474 | 35207 | 35334 | 35789 | 32785 | 32354 | 23935 | 13214 | 14096 | 35556 | 681 | 495 | 449 | 383 | 397 | 320 | 434 | 363 | 239 | 238 | 206 | 169 | 101 | 53 | 47 |  | 22 |  |
| DeltaBlue | 103250 | 79633 | 38051 | 46190 | 72426 | 70773 | 27955 | 13124 | 12972 | 27922 | 611 | 444 | 397 | 358 | 373 | 394 | 455 | 382 | 271 | 349 | 254 | 226 | 116 | 48 | 39 |  | 27 |  |
| Crypto | 37044 | 41457 | 44810 | 45682 | 41353 | 39549 | 32585 | 19683 | 17538 | 21065 | 766 | 528 | 365 | 426 | 428 | 509 | 323 | 413 | 187 | 175 | 309 | 112 | 90 | 57 | 71 |  | 35 |  |
| RayTrace | 95533 | 69337 | 101304 | 104486 | 66229 | 63417 | 45065 | 26339 | 26586 | 2513 | 968 | 571 | 720 | 617 | 601 | 558 | 592 | 456 | 482 | 467 | 440 | 223 | 261 | 122 | 131 |  | 78 |  |
| EarleyBoyer | 80762 | 75163 | 56789 | 54678 | 71590 | 69924 | 39324 | 41208 | 36333 | 23370 | 2183 | 1006 | 1136 | 1011 | 995 | 1006 | 929 | 851 | 618 | 592 | 487 | 451 | 289 | 121 | 139 |  | 67 |  |
| RegExp | 9670 | 9728 | 17582 | 11934 | 9436 | 9670 | 9748 | 8819 | 8676 | 1006 | 406 | 190 | 190 | 201 | 175 | 164 | 141 | 176 | 246 | 176 | 107 | 193 | 271 | 87 | 42 |  |  |  |
| Splay | 40672 | 34267 | 33648 | 28538 | 27275 | 30584 | 28139 | 22068 | 13576 | 2621 | 2347 | 1053 | 1257 | 1332 | 1318 | 1288 | 1266 | 1231 | 1205 | 1070 | 1009 | 718 | 495 | 306 | 162 |  | 123 |  |
| NavierStokes | 38287 | 38469 | 33734 | 39771 | 38436 | 38617 | 36434 | 20820 | 21941 | 23697 | 1061 | 1027 | 688 | 712 | 722 | 738 | 748 | 735 | 463 | 451 | 924 | 187 | 148 | 113 | 164 |  | 55 |  |
| Score | 44794 | 40859 | 40271 | 39431 | 38275 | 38255 | 28076 | 18709 | 17295 | 9675 | 953 | 585 | 553 | 537 | 531 | 523 | 512 | 494 | 386 | 369 | 369 | 240 | 188 | 95 | 85 |  |  |  |
| Score/MB | 724 | 275 | 289 | 314 | 466 | 316 | 1798 | 354 | 224 | 49 | 8 | 45 | 12 | 11 | 52 | 49 | 49 |  | 45 | 43 | 42 | 11 | 1 | 1 | 1 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 57 | 62 | 60 | 62 | 62 | 70 | 63 | 78 | 85 | 86 | 124 | 149 | 257 | 288 | 134 | 412 |  |
