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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48229<br>99.2M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48071<br>37M<br>1297/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47093<br>57.8M<br>815/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41834<br>108.3M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39935<br>123.4M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38722<br>66.3M<br>583/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38702<br>40.7M<br>951/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20054<br>19.4M<br>1033/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19337<br>40.1M<br>481/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17115<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17029<br>51M<br>333/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12523<br>199.7M<br>62/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2439<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 911<br>12.3M<br>74/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 839<br>4.5M<br>188/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 770<br>831.3K<br>948/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 762<br>1.4M<br>547/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 755<br>1.4M<br>536/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 730<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 635<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 495<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 494<br>2M<br>244/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 493<br>2.1M<br>231/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 400<br>685K<br>597/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 396<br>446.6K<br>907/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 357<br>414.5K<br>881/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 297<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 191<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/30/2025, 1:47:38 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | ladybird | quickjs-emscripten | quickjs-ng | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.2.0 | 2.5.2 | 24.9.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.09.13 | 24.12.0 |  |  |  | 0.9.2 |  |  | 0.10.1 | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 99.2M | 37M | 57.8M | 108.3M | 123.4M | 66.3M | 40.7M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 0 | 2M | 2.1M | 685K | 446.6K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Exe size | 99.2M | 37M | 1M | 108.3M | 123.4M | 66.3M | 40.7M | 571K | 40.1M | 35.2M | 51M | 1M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 0 | 2M | 2.1M | 685K | 446.6K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42013 | 39588 | 38147 | 35704 | 32587 | 32721 | 32294 | 23525 | 13002 | 12864 | 14163 | 35570 | 13747 | 1104 | 710 | 696 | 709 | 630 | 579 | 570 | 544 | 533 | 343 | 391 | 293 | 247 | 259 | 223 | 109 | 203 | 90 | 102 | 61 | 59 | 281 | 26 |  | 166 |  |
| DeltaBlue | 57622 | 55413 | 107647 | 80353 | 75441 | 73940 | 75249 | 26269 | 13574 | 12873 | 13065 | 38157 | 231 | 1059 | 694 | 661 | 681 | 616 | 583 | 586 | 534 | 488 | 387 | 384 | 325 | 358 | 361 | 322 | 205 | 250 | 163 | 114 | 55 | 55 | 286 | 33 |  | 164 |  |
| Crypto | 49159 | 51891 | 38490 | 41485 | 41102 | 41751 | 41372 | 32303 | 20192 | 17820 | 17735 | 28644 | 8365 | 1369 | 669 | 743 | 591 | 555 | 555 | 527 | 884 | 871 | 421 | 408 | 781 | 191 | 190 | 184 | 150 | 124 | 325 | 98 | 80 | 61 | 300 | 37 |  | 151 |  |
| RayTrace | 119730 | 119730 | 110480 | 71409 | 66155 | 66081 | 61345 | 35040 | 27251 | 28018 | 25826 | 4823 | 1202 | 1587 | 1201 | 898 | 1068 | 963 | 900 | 934 | 679 | 786 | 455 | 577 | 570 | 521 | 529 | 491 | 499 | 273 | 493 | 255 | 164 | 136 | 348 | 104 |  | 470 |  |
| EarleyBoyer | 66011 | 69247 | 82703 | 72291 | 69789 | 72739 | 69068 | 6771 | 41363 | 37446 | 36581 | 32374 | 658 | 3411 | 1801 | 1478 | 1754 | 1423 | 1399 | 1397 | 1637 | 997 | 869 | 954 | 560 | 539 | 562 | 512 | 569 | 506 | 323 | 287 | 194 | 136 |  | 86 |  | 559 |  |
| RegExp | 21205 | 20527 | 10466 | 10112 | 10052 | 10102 | 8947 | 7863 | 8956 | 8719 | 8766 | 1151 | 835 | 552 | 267 | 236 | 227 | 235 | 229 | 223 | 115 | 64 | 178 | 158 | 127 | 220 | 242 | 197 | 412 | 211 | 96 | 248 | 48 | 94 |  |  |  |  |  |
| Splay | 36801 | 36712 | 41322 | 39020 | 35555 | 26631 | 34332 | 19224 | 24350 | 12346 | 11769 | 3082 | 5064 | 3561 | 2228 | 1783 | 1885 | 1820 | 2220 | 2204 | 2017 | 1480 | 1236 | 1404 | 1246 | 1318 | 977 | 839 | 942 | 851 | 373 | 550 | 204 | 318 |  | 137 |  | 871 |  |
| NavierStokes | 39880 | 40096 | 38732 | 38694 | 38803 | 38694 | 38469 | 36545 | 22319 | 22090 | 22112 | 28112 | 14056 | 1837 | 1122 | 1287 | 998 | 981 | 952 | 938 | 1210 | 1547 | 745 | 472 | 926 | 483 | 479 | 479 | 163 | 202 | 855 | 158 | 175 | 118 |  | 60 |  | 301 |  |
| Score | 48229 | 48071 | 47093 | 41834 | 39935 | 38722 | 38702 | 20054 | 19337 | 17115 | 17029 | 12523 | 2439 | 1538 | 911 | 839 | 831 | 770 | 762 | 755 | 730 | 635 | 495 | 494 | 493 | 400 | 396 | 357 | 297 | 274 | 264 | 191 | 105 | 104 |  |  |  |  |  |
| Score/MB | 486 | 1297 | 815 | 386 | 323 | 583 | 951 | 1033 | 481 | 485 | 333 | 62 |  | 42 | 74 | 188 | 161 | 948 | 547 | 536 | 86 | 13 |  | 244 | 231 | 597 | 907 | 881 |  | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 34 | 44 | 47 | 49 | 50 | 52 | 52 | 62 | 81 | 62 | 67 | 70 | 81 | 79 | 86 | 105 | 113 | 131 | 146 | 234 | 236 | 31 | 354 |  | 80 | 7 |
### macos-arm64
| Engine | deno | bun | dune | node | v8 | spidermonkey | mozjs | spiderfire | graaljs | hermes | jjs | quickjs | llrt | quickjs-ng | primjs | txiki.js | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | ringo | xst | goja | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.5.2 | 1.2.23 | 0.10.1 | 24.9.0 | 14.2.230 | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 2025.09.13 | 0.7.0.beta | 0.10.1 |  | 24.12.0 |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 87.5M | 57.3M | 56.8M | 111.9M | 41.3M | 132.6M | 32.8M | 46.3M | 194M | 15.7M | 0 | 1014.3K | 10.6M | 3.8M | 1.8M | 3.6M | 1.2M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 0 | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 | 0 |
| Exe size | 87.5M | 57.3M | 56.8M | 111.9M | 41.3M | 66.3M | 32.8M | 46.3M | 147.4K | 7.9M | 0 | 1014.3K | 10.6M | 1.9M | 1.8M | 3.6M | 1.2M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 0 | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 1.9M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 | 0 |
| Richards | 57200 | 37515 | 43732 | 44555 | 21372 | 13997 | 14986 | 11427 | 34808 | 1188 | 1540 | 1023 | 814 | 976 | 1117 | 724 | 705 | 640 | 795 | 474 | 499 | 267 | 184 | 85 | 220 | 173 | 66 | 33 |  | 200 | 36 |  |  |
| DeltaBlue | 84816 | 54402 | 96493 | 94635 | 97332 | 15399 | 16391 | 13435 | 33555 | 1041 | 632 | 983 | 991 | 952 | 1226 | 708 | 826 | 726 | 760 | 587 | 508 | 449 | 225 | 189 | 231 | 158 | 68 | 40 |  | 207 | 43 |  |  |
| Crypto | 54977 | 69213 | 51337 | 57480 | 35953 | 21062 | 19271 | 19399 | 39530 | 1406 | 5994 | 1124 | 670 | 891 | 1663 | 724 | 964 | 1062 | 1219 | 1202 | 485 | 239 | 134 | 370 | 124 | 137 | 96 | 35 |  | 236 | 63 |  |  |
| RayTrace | 87245 | 159098 | 77995 | 79771 | 101526 | 44473 | 40551 | 39811 | 773 | 2036 | 1504 | 1042 | 1548 | 1000 | 988 | 1164 | 1402 | 816 | 948 | 867 | 685 | 771 | 766 | 589 | 221 | 288 | 155 | 37 |  | 288 | 143 |  |  |
| EarleyBoyer | 90912 | 86737 | 89870 | 79988 | 95182 | 51287 | 39412 | 43897 | 24989 | 4235 | 1059 | 1865 | 2532 | 1567 | 2726 | 1922 | 2024 | 2023 | 1480 | 904 | 1026 | 878 | 663 | 345 | 485 | 302 | 201 | 74 |  |  | 96 |  |  |
| RegExp | 12819 | 23457 | 13221 | 12509 | 12159 | 12962 | 12134 | 10092 | 1661 | 626 | 786 | 223 | 224 | 176 | 194 | 235 | 204 | 189 | 80 | 237 | 211 | 271 | 539 | 269 | 235 | 203 | 121 | 14 |  |  |  |  |  |
| Splay | 40542 | 25001 | 35660 | 32857 | 57402 | 24790 | 19460 | 12737 | 2630 | 4140 | 1576 | 1570 | 2125 | 2142 | 169 | 1881 | 1347 | 1765 | 1853 | 2058 | 1493 | 692 | 989 | 350 | 588 | 514 | 444 | 124 |  |  | 178 |  |  |
| NavierStokes | 37026 | 33189 | 35468 | 33882 | 35468 | 17938 | 20841 | 17921 | 22785 | 1402 | 1299 | 2016 | 815 | 1546 | 3174 | 1675 | 1214 | 1723 | 1733 | 1488 | 808 | 564 | 174 | 631 | 237 | 217 | 208 | 67 |  |  | 85 |  |  |
| Score | 50259 | 49818 | 47379 | 46413 | 45350 | 22232 | 20959 | 18191 | 9853 | 1648 | 1402 | 1057 | 976 | 966 | 946 | 941 | 924 | 909 | 848 | 813 | 621 | 461 | 356 | 304 | 262 | 228 | 141 | 44 |  |  |  |  |  |
| Score/MB | 574 | 869 | 834 | 414 | 1099 | 167 | 638 | 392 | 50 | 104 |  | 1067 | 92 | 251 | 537 | 260 | 772 | 379 | 20 | 1480 |  | 1100 |  | 192 | 20 | 3 | 11 | 41 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 33 | 44 | 44 | 48 | 50 | 44 | 44 | 46 | 52 | 68 | 46 | 55 | 63 | 95 | 106 | 107 | 121 | 166 | 627 |  | 36 | 266 |  |  |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | quickjs-ng | llrt | rquickjs-pgo | rquickjs | quickjs-emscripten | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.230 |  | 2.5.2 | 1.2.23 | 24.9.0 | 0.10.1 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.10.1 | 0.7.0.beta |  |  |  | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 148.4M | 139.6M | 120.8M | 82M | 15.6M | 52.8M | 77.1M | 197.1M | 115.9M | 13M | 44.3M | 6.8M | 45.6M | 10.2M | 9M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 342.5K | 112.5M | 113.6M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 5.1M | 5.7M | 1.6M | 13.1M | 1M | 1.2M | 0 | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 124.9M | 35.9M | 26M | 35.3M | 34.6M | 15.3M | 18.9M | 34.4M | 196.7M | 112.9M | 7.9M | 38.6M | 5.2M | 32.5M | 9.2M | 7.8M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35913 | 34981 | 33410 | 35284 | 32668 | 31701 | 24224 | 13591 | 14036 | 34885 | 681 | 500 | 445 | 509 | 370 | 440 | 426 | 319 | 211 | 250 | 248 | 180 | 105 | 54 | 49 |  | 25 |  | 128 |
| DeltaBlue | 101055 | 45231 | 75831 | 44074 | 73913 | 72565 | 28457 | 13362 | 12728 | 29925 | 615 | 458 | 405 | 491 | 371 | 465 | 446 | 324 | 257 | 346 | 347 | 226 | 117 | 49 | 43 |  | 30 |  | 149 |
| Crypto | 34193 | 46571 | 40713 | 42641 | 41070 | 41608 | 33305 | 17993 | 17017 | 17776 | 775 | 542 | 407 | 476 | 425 | 322 | 318 | 409 | 314 | 180 | 178 | 112 | 90 | 58 | 73 |  | 36 |  | 146 |
| RayTrace | 107520 | 93091 | 69559 | 85099 | 65341 | 63797 | 51008 | 27972 | 26566 | 2322 | 972 | 519 | 666 | 518 | 602 | 593 | 573 | 455 | 452 | 486 | 476 | 227 | 266 | 126 | 134 |  | 87 |  | 439 |
| EarleyBoyer | 79659 | 53848 | 75360 | 53704 | 71347 | 72775 | 42555 | 40076 | 36269 | 20516 | 2190 | 1019 | 1144 | 965 | 1016 | 962 | 843 | 870 | 529 | 572 | 614 | 453 | 297 | 123 | 143 |  | 76 |  | 508 |
| RegExp | 9418 | 17309 | 9780 | 17564 | 9637 | 9508 | 10001 | 8947 | 8654 | 799 | 412 | 184 | 193 | 160 | 192 | 151 | 154 | 176 | 109 | 209 | 193 | 198 | 276 | 88 | 43 |  |  |  |  |
| Splay | 34283 | 28416 | 33925 | 33777 | 30967 | 27650 | 28774 | 20666 | 14897 | 2452 | 2363 | 1036 | 1423 | 1199 | 1244 | 1314 | 1266 | 1189 | 781 | 982 | 699 | 813 | 516 | 314 | 172 |  | 131 |  | 855 |
| NavierStokes | 38287 | 39583 | 38287 | 33653 | 38507 | 38545 | 36509 | 21832 | 21919 | 21284 | 1073 | 1000 | 697 | 544 | 697 | 746 | 758 | 718 | 1036 | 376 | 481 | 193 | 149 | 114 | 165 |  | 58 |  | 297 |
| Score | 43633 | 40467 | 40235 | 39603 | 38964 | 38167 | 29166 | 18674 | 17367 | 8826 | 960 | 578 | 567 | 530 | 527 | 523 | 506 | 473 | 371 | 367 | 361 | 249 | 192 | 96 | 88 |  |  |  |  |
| Score/MB | 705 | 323 | 271 | 283 | 322 | 465 | 1868 | 353 | 225 | 44 | 8 | 44 | 12 | 78 | 11 | 51 | 56 |  | 43 | 42 | 42 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 59 | 62 | 66 | 62 | 67 | 69 | 63 | 84 | 85 | 82 | 122 | 149 | 252 | 279 | 142 | 376 |  | 83 |
