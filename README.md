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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47715<br>57.1M<br>835/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47269<br>36.4M<br>1297/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46170<br>98.4M<br>468/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40725<br>65.3M<br>623/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40259<br>106.3M<br>378/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39450<br>123.1M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39098<br>66.3M<br>589/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38036<br>40.7M<br>935/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19887<br>19.4M<br>1024/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19300<br>40.1M<br>480/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17079<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17071<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9839<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2242<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1512<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 859<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 806<br>4.3M<br>188/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 750<br>1.4M<br>533/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 745<br>1.4M<br>535/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 744<br>831.3K<br>916/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 735<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 635<br>2M<br>321/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 524<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 497<br>2.1M<br>233/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 483<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 393<br>446.6K<br>901/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 351<br>685K<br>524/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 336<br>414.5K<br>830/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 272<br>2.7K<br>103151/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 264<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/25/2025, 1:53:49 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | txiki.js | quickjs | rquickjs-pgo | rquickjs | primjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.5 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 36.4M | 98.4M | 65.3M | 106.3M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 65.3M | 106.3M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37522 | 40813 | 40347 | 31567 | 33180 | 32474 | 31924 | 29880 | 23299 | 13521 | 12836 | 14347 | 41653 | 12186 | 1107 | 679 | 707 | 690 | 571 | 582 | 627 | 560 | 575 | 492 | 288 | 335 | 266 | 245 | 228 | 101 | 199 | 90 | 102 | 59 | 58 | 270 | 26 |  | 77 |  |
| DeltaBlue | 107230 | 54653 | 54045 | 77431 | 74462 | 72128 | 75170 | 74760 | 25139 | 13316 | 12787 | 13019 | 25555 | 230 | 1053 | 665 | 680 | 649 | 577 | 580 | 610 | 534 | 577 | 469 | 325 | 387 | 352 | 352 | 319 | 144 | 249 | 163 | 110 | 54 | 54 | 284 | 30 |  | 174 |  |
| Crypto | 41381 | 51467 | 49022 | 41400 | 41392 | 41312 | 41875 | 40929 | 31902 | 20320 | 17962 | 17708 | 16820 | 8525 | 1367 | 581 | 582 | 727 | 543 | 569 | 555 | 872 | 378 | 693 | 783 | 407 | 188 | 189 | 179 | 126 | 118 | 325 | 97 | 80 | 61 | 297 | 31 |  | 134 |  |
| RayTrace | 111442 | 120100 | 116992 | 71335 | 68671 | 64379 | 66969 | 58977 | 35780 | 27648 | 28211 | 26217 | 3169 | 1174 | 1549 | 1141 | 1078 | 902 | 924 | 898 | 925 | 680 | 676 | 549 | 573 | 455 | 496 | 482 | 408 | 472 | 269 | 495 | 253 | 163 | 135 | 348 | 91 |  | 418 |  |
| EarleyBoyer | 86043 | 67103 | 64852 | 68933 | 73873 | 71267 | 74337 | 69001 | 7017 | 40928 | 37595 | 36285 | 26414 | 1455 | 3354 | 1831 | 1726 | 1377 | 1328 | 1278 | 1295 | 1633 | 1194 | 735 | 550 | 822 | 450 | 461 | 402 | 569 | 486 | 321 | 287 | 185 | 134 |  | 76 |  | 513 |  |
| RegExp | 10484 | 19131 | 20862 | 10243 | 10042 | 9890 | 9961 | 8983 | 7690 | 8702 | 9010 | 8974 | 762 | 580 | 545 | 252 | 226 | 223 | 218 | 223 | 230 | 115 | 178 | 63 | 136 | 177 | 229 | 209 | 191 | 454 | 204 | 96 | 247 | 47 | 92 |  |  |  |  |  |
| Splay | 41446 | 35123 | 35709 | 38260 | 34267 | 34463 | 28294 | 34137 | 19402 | 24032 | 11735 | 11610 | 2902 | 1982 | 3208 | 2234 | 1832 | 1550 | 2115 | 2094 | 1667 | 2080 | 1586 | 939 | 1243 | 1198 | 1347 | 651 | 856 | 856 | 771 | 371 | 429 | 217 | 342 |  | 84 |  | 721 |  |
| NavierStokes | 38732 | 40096 | 34178 | 38803 | 38655 | 38765 | 38732 | 38397 | 34952 | 22238 | 21898 | 22002 | 26484 | 13626 | 1890 | 957 | 978 | 1270 | 985 | 923 | 957 | 1219 | 920 | 1477 | 955 | 705 | 467 | 468 | 469 | 158 | 195 | 820 | 160 | 177 | 119 |  | 51 |  | 277 |  |
| Score | 47715 | 47269 | 46170 | 40725 | 40259 | 39450 | 39098 | 38036 | 19887 | 19300 | 17079 | 17071 | 9839 | 2242 | 1512 | 859 | 823 | 806 | 750 | 745 | 744 | 735 | 635 | 524 | 497 | 483 | 393 | 351 | 336 | 272 | 264 | 262 | 185 | 105 | 104 |  |  |  |  |  |
| Score/MB | 835 | 1297 | 468 | 623 | 378 | 320 | 589 | 935 | 1024 | 480 | 484 | 334 | 49 | 1 | 42 | 70 | 159 | 188 | 533 | 535 | 916 | 87 | 321 | 11 | 233 |  | 901 | 524 | 830 | 103151 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 26 | 38 | 34 | 47 | 50 | 49 | 53 | 52 | 52 | 62 | 59 | 90 | 69 | 64 | 83 | 82 | 89 | 106 | 118 | 132 | 146 | 241 | 238 | 31 | 407 |  | 89 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bare | bun | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | quickjs-ng | llrt | rquickjs | quickjs | jjs | njs | duktape | ladybird | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.108 |  |  | 1.2.20 | 2.4.5 | 0.10.1 | 24.6.0 | 143.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 | 0.8.0 | 0.6.2.beta |  | 2025.04.26 |  | 0.9.2 | 2.99.99 |  |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 45.6M | 56.8M | 85.5M | 56.8M | 111.5M | 132.3M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 4.1M | 10.5M | 1.2M | 975.9K | 0 | 2.4M | 562.1K | 41.3M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.1M | 0.2K | 45.6M | 56.8M | 85.5M | 56.8M | 111.5M | 66.2M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 2.1M | 10.5M | 1.2M | 975.9K | 0 | 1.8M | 562.1K | 41.3M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 44530 | 50637 | 41162 | 47040 | 41639 | 42521 | 36449 | 14389 | 13990 | 12868 | 31447 | 1257 | 1119 | 1190 | 1203 | 813 | 935 | 969 | 2337 | 705 | 502 | 832 | 454 | 366 | 315 | 98 | 126 | 177 | 116 | 34 | 206 | 37 |  | 183 |
| DeltaBlue | 125294 | 74733 | 95223 | 57860 | 102979 | 93517 | 91408 | 16569 | 15954 | 15677 | 7894 | 1112 | 1082 | 1082 | 1081 | 928 | 930 | 983 | 266 | 652 | 590 | 709 | 462 | 548 | 326 | 185 | 189 | 186 | 98 | 32 | 232 | 49 |  | 236 |
| Crypto | 61792 | 75614 | 57572 | 58542 | 52085 | 46895 | 48566 | 24046 | 20304 | 20803 | 36110 | 1333 | 1660 | 1097 | 1112 | 859 | 931 | 1232 | 2993 | 1019 | 1310 | 1417 | 522 | 280 | 194 | 415 | 125 | 146 | 114 | 34 | 250 | 45 |  | 134 |
| RayTrace | 147036 | 183295 | 96199 | 138230 | 82435 | 72963 | 73925 | 46915 | 44399 | 38367 | 2252 | 2024 | 2027 | 1690 | 1491 | 1896 | 1439 | 1149 | 1122 | 888 | 1032 | 766 | 664 | 780 | 465 | 649 | 538 | 368 | 254 | 39 | 305 | 145 |  | 573 |
| EarleyBoyer | 103224 | 89514 | 78140 | 72089 | 88284 | 84752 | 76681 | 44203 | 41968 | 41300 | 43023 | 4337 | 3635 | 2102 | 2334 | 2797 | 2190 | 2189 | 930 | 2205 | 1089 | 1112 | 1308 | 949 | 752 | 388 | 607 | 386 | 208 | 77 |  | 116 |  | 638 |
| RegExp | 13896 | 26831 | 13869 | 24390 | 11535 | 13261 | 10274 | 11898 | 10142 | 8555 | 1297 | 610 | 303 | 245 | 256 | 262 | 253 | 244 | 655 | 161 | 239 | 94 | 242 | 322 | 295 | 311 | 478 | 195 | 132 | 13 |  |  |  |  |
| Splay | 62096 | 39002 | 44641 | 26305 | 38912 | 31121 | 32800 | 22530 | 14568 | 15011 | 2722 | 4022 | 2923 | 2724 | 2168 | 3806 | 2833 | 1889 | 1323 | 1402 | 2031 | 2271 | 1882 | 1397 | 1372 | 543 | 797 | 488 | 483 | 113 |  | 124 |  | 1053 |
| NavierStokes | 37581 | 32106 | 35171 | 26982 | 33586 | 35805 | 37359 | 18809 | 19619 | 17276 | 24364 | 1443 | 3944 | 1904 | 2104 | 1624 | 1574 | 2027 | 732 | 1542 | 1449 | 1967 | 755 | 727 | 318 | 1002 | 168 | 195 | 187 | 65 |  | 78 |  | 296 |
| Score | 60077 | 59531 | 49651 | 47851 | 47168 | 45075 | 42935 | 22244 | 19888 | 18668 | 9642 | 1661 | 1637 | 1261 | 1248 | 1239 | 1141 | 1135 | 1026 | 867 | 863 | 861 | 652 | 584 | 416 | 366 | 298 | 244 | 173 | 43 |  |  |  |  |
| Score/MB | 1460 | 362923127 | 1089 | 842 | 551 | 793 | 384 | 168 | 605 | 402 | 49 | 105 | 930 | 349 | 302 | 117 | 953 | 1190 |  | 361 | 1572 | 20 |  | 1393 | 32 | 231 | 113011 | 3 | 13 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 33 | 36 | 41 | 40 | 41 | 41 | 41 | 48 | 55 | 47 | 66 | 53 | 56 | 78 | 92 | 104 | 119 | 154 | 651 | 34 | 281 |  | 83 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs-pgo | llrt | rquickjs | quickjs-ng | quickjs-emscripten | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.110 |  | 1.2.20 |  | 2.4.5 | 24.6.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  | 0.8.0 |  | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.7M | 57M | 142.9M | 116.4M | 77.6M | 14.4M | 52.7M | 72.8M | 196.1M | 17.5M | 86.6M | 38.1M | 11.8M | 9M | 42.2M | 8M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.1M | 338K | 112.9M | 26.1M | 110.6M | 85.3M | 47.4M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1M | 13.1M | 1.2M | 1.7M | 0 | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 30.8M | 32.3M | 31.1M | 30.3M | 14.1M | 18.6M | 30.2M | 195.8M | 17.5M | 83.5M | 32.4M | 6.9M | 7.9M | 29.1M | 6.7M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38430 | 36929 | 36548 | 26395 | 31634 | 32481 | 32944 | 24277 | 13725 | 12790 | 35591 | 4763 | 681 | 451 | 513 | 448 | 386 | 441 | 434 | 385 | 215 | 229 | 236 | 190 | 106 | 54 | 48 |  | 21 |  |  |
| DeltaBlue | 110258 | 46580 | 43605 | 75183 | 74502 | 67328 | 72340 | 25594 | 13369 | 13052 | 27419 | 264 | 618 | 403 | 463 | 463 | 370 | 463 | 396 | 394 | 257 | 319 | 350 | 229 | 116 | 50 | 40 |  | 25 |  |  |
| Crypto | 41468 | 47989 | 47736 | 41964 | 38698 | 41793 | 41865 | 33026 | 20742 | 18271 | 22831 | 2357 | 787 | 417 | 549 | 325 | 425 | 325 | 381 | 405 | 313 | 188 | 183 | 114 | 89 | 59 | 74 |  | 29 |  |  |
| RayTrace | 97531 | 101526 | 85025 | 72001 | 67931 | 65933 | 56683 | 50837 | 26169 | 27057 | 2368 | 1275 | 995 | 747 | 508 | 587 | 565 | 592 | 580 | 455 | 435 | 450 | 462 | 226 | 264 | 131 | 131 |  | 81 |  |  |
| EarleyBoyer | 86591 | 60141 | 50553 | 69997 | 73577 | 71328 | 73513 | 42450 | 41554 | 36776 | 22367 | 730 | 2243 | 1143 | 991 | 933 | 999 | 922 | 983 | 866 | 509 | 560 | 561 | 444 | 291 | 123 | 135 |  | 69 |  |  |
| RegExp | 10032 | 18873 | 16927 | 10001 | 9656 | 9861 | 9580 | 9900 | 8766 | 8784 | 971 | 608 | 401 | 194 | 187 | 155 | 174 | 153 | 187 | 179 | 109 | 250 | 199 | 197 | 271 | 89 | 42 |  |  |  |  |
| Splay | 42758 | 34365 | 31806 | 38830 | 33477 | 32865 | 26876 | 18971 | 23592 | 13935 | 2514 | 1377 | 2296 | 1407 | 1019 | 1271 | 1262 | 1221 | 994 | 1223 | 1001 | 579 | 587 | 864 | 390 | 325 | 170 |  | 80 |  |  |
| NavierStokes | 39029 | 33848 | 38101 | 38881 | 39029 | 38990 | 38990 | 36803 | 22193 | 22090 | 25055 | 2427 | 1085 | 738 | 1036 | 759 | 721 | 768 | 675 | 732 | 1065 | 475 | 481 | 189 | 149 | 115 | 167 |  | 48 |  |  |
| Score | 47250 | 42707 | 40116 | 39832 | 39352 | 39072 | 37806 | 27273 | 19268 | 17349 | 9600 | 1241 | 963 | 582 | 581 | 522 | 521 | 518 | 512 | 500 | 381 | 352 | 349 | 251 | 184 | 98 | 86 |  |  |  |  |
| Score/MB | 872 | 349 | 302 | 699 | 275 | 335 | 486 | 1892 | 365 | 238 | 48 | 70 | 11 | 15 | 49 | 58 | 12 | 64 | 57 |  | 50 | 46 | 46 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 46 | 42 | 59 | 59 | 67 | 61 | 67 | 63 | 63 | 84 | 79 | 83 | 124 | 149 | 249 | 289 | 131 | 443 |  |  |
