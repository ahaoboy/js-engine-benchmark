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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48277<br>37M<br>1303/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48113<br>99.2M<br>485/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47250<br>57.8M<br>817/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42295<br>108.3M<br>390/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39760<br>123.4M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38778<br>66.3M<br>584/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38555<br>40.7M<br>948/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20074<br>19.4M<br>1034/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19452<br>40.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17035<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17005<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12002<br>199.7M<br>60/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 1844<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1549<br>36M<br>43/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 925<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 838<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 835<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 760<br>1.4M<br>540/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 752<br>1.4M<br>540/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 730<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 590<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 495<br>2M<br>244/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 482<br>2.1M<br>226/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 400<br>446.6K<br>917/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 364<br>685K<br>544/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 312<br>2.7K<br>118320/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 265<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 183<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>17.2K | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/29/2025, 1:50:37 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | ladybird | quickjs-ng | quickjs-emscripten | duktape | mujs-pgo | mujs | mujs-one | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.2.0 | 2.5.2 | 24.9.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37M | 99.2M | 57.8M | 108.3M | 123.4M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 2M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 17.2K | 42M |
| Exe size | 37M | 99.2M | 1M | 108.3M | 123.4M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 2M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 17.2K | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41289 | 41536 | 37522 | 35415 | 32284 | 32404 | 33533 | 23303 | 13164 | 13997 | 12730 | 35588 | 12077 | 1131 | 716 | 683 | 710 | 622 | 582 | 575 | 541 | 520 | 392 | 329 | 292 | 279 | 226 | 245 | 158 | 90 | 200 | 102 | 60 | 59 | 280 | 25 |  | 151 |  |
| DeltaBlue | 57047 | 56273 | 108691 | 80353 | 74608 | 69444 | 75771 | 24547 | 13409 | 13025 | 12728 | 38778 | 249 | 1079 | 687 | 662 | 685 | 615 | 578 | 585 | 543 | 486 | 383 | 388 | 325 | 364 | 319 | 359 | 204 | 163 | 250 | 107 | 54 | 54 | 280 | 31 |  | 170 |  |
| Crypto | 51866 | 49642 | 38869 | 41948 | 39383 | 41803 | 41309 | 32255 | 20430 | 17504 | 17639 | 29418 | 7104 | 1363 | 679 | 737 | 593 | 558 | 540 | 552 | 849 | 864 | 409 | 410 | 786 | 191 | 183 | 191 | 151 | 332 | 123 | 96 | 80 | 61 | 303 | 38 |  | 149 |  |
| RayTrace | 119952 | 117140 | 111072 | 72371 | 66155 | 68967 | 56109 | 35149 | 27972 | 26761 | 28433 | 4463 | 956 | 1566 | 1183 | 919 | 1069 | 962 | 930 | 907 | 679 | 766 | 578 | 455 | 572 | 539 | 485 | 525 | 497 | 500 | 267 | 249 | 165 | 135 | 350 | 101 |  | 453 |  |
| EarleyBoyer | 66942 | 64969 | 82625 | 74973 | 72491 | 73486 | 68380 | 7129 | 41883 | 36234 | 36753 | 28617 | 926 | 3411 | 1906 | 1477 | 1757 | 1429 | 1381 | 1297 | 1655 | 973 | 956 | 855 | 588 | 560 | 505 | 541 | 575 | 325 | 489 | 281 | 189 | 133 |  | 84 |  | 574 |  |
| RegExp | 20386 | 21435 | 10466 | 10223 | 10011 | 10011 | 8775 | 7886 | 8956 | 8775 | 8874 | 1069 | 516 | 556 | 271 | 227 | 230 | 237 | 221 | 227 | 115 | 64 | 160 | 176 | 127 | 245 | 200 | 220 | 458 | 96 | 205 | 246 | 48 | 92 |  |  |  |  |  |
| Splay | 36687 | 37934 | 42090 | 39971 | 35343 | 27609 | 35946 | 20072 | 24358 | 11848 | 11945 | 3046 | 927 | 3643 | 2396 | 1828 | 1891 | 1828 | 2220 | 2192 | 2054 | 907 | 1411 | 1243 | 955 | 965 | 1308 | 611 | 831 | 376 | 749 | 448 | 213 | 335 |  | 140 |  | 876 |  |
| NavierStokes | 40216 | 39988 | 38765 | 38694 | 38803 | 38803 | 38436 | 36025 | 22238 | 22045 | 22090 | 25499 | 14796 | 1846 | 1093 | 1295 | 1004 | 991 | 972 | 939 | 1217 | 1549 | 472 | 676 | 953 | 467 | 473 | 486 | 170 | 871 | 196 | 159 | 175 | 119 |  | 61 |  | 304 |  |
| Score | 48277 | 48113 | 47250 | 42295 | 39760 | 38778 | 38555 | 20074 | 19452 | 17035 | 17005 | 12002 | 1844 | 1549 | 925 | 838 | 835 | 772 | 760 | 752 | 730 | 590 | 495 | 484 | 482 | 400 | 376 | 364 | 312 | 266 | 265 | 183 | 105 | 104 |  |  |  |  |  |
| Score/MB | 1303 | 485 | 817 | 390 | 322 | 584 | 948 | 1034 | 484 | 334 | 482 | 60 | 1 | 43 | 75 | 196 | 161 | 951 | 540 | 540 | 86 | 12 | 244 |  | 226 | 917 | 928 | 544 | 118320 | 127 | 20 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 44 | 34 | 43 | 48 | 49 | 50 | 52 | 52 | 62 | 81 | 67 | 64 | 69 | 79 | 85 | 80 | 100 | 130 | 117 | 146 | 238 | 240 | 31 | 355 |  | 80 | 7 |
### macos-arm64
| Engine | bun | deno | v8 | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | jjs | llrt | quickjs-ng | rquickjs | quickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 2.5.2 | 14.2.229 | 0.10.1 | 24.9.0 | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 |  | 0.7.0.beta | 0.10.1 |  | 2025.04.26 | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 57.3M | 87.5M | 41.3M | 56.8M | 111.9M | 132.6M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 0 | 10.6M | 3.8M | 1.2M | 975.9K | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 | 237.5K |
| Exe size | 57.3M | 87.5M | 41.3M | 56.8M | 111.9M | 66.3M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 0 | 10.6M | 1.9M | 1.2M | 975.9K | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 237.5K |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 1.9M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 | 0 |
| Richards | 49479 | 57140 | 31839 | 44618 | 42154 | 13305 | 13175 | 15208 | 35708 | 1305 | 1091 | 1207 | 5207 | 924 | 974 | 970 | 1077 | 723 | 687 | 416 | 545 | 279 | 294 | 167 | 110 | 150 | 99 | 31 |  | 188 | 28 |  |  |
| DeltaBlue | 72247 | 109716 | 115607 | 102119 | 97319 | 15690 | 16351 | 16377 | 49906 | 1102 | 1179 | 1212 | 522 | 1087 | 887 | 999 | 1069 | 798 | 702 | 436 | 584 | 528 | 312 | 228 | 199 | 154 | 80 | 29 |  | 222 | 36 |  |  |
| Crypto | 67734 | 58599 | 54607 | 51578 | 56271 | 23145 | 21180 | 21429 | 43363 | 1274 | 1604 | 1173 | 3487 | 658 | 919 | 899 | 1171 | 1117 | 1501 | 1164 | 512 | 245 | 159 | 141 | 393 | 129 | 97 | 35 |  | 245 | 57 |  |  |
| RayTrace | 151476 | 89909 | 140746 | 75627 | 83323 | 44399 | 48347 | 37443 | 2465 | 2447 | 1957 | 2018 | 790 | 1892 | 1299 | 1393 | 864 | 815 | 1213 | 933 | 594 | 694 | 418 | 661 | 637 | 324 | 174 | 38 |  | 277 | 163 |  |  |
| EarleyBoyer | 95592 | 97350 | 98138 | 89768 | 94933 | 44777 | 43780 | 37589 | 29288 | 5009 | 3539 | 2786 | 1069 | 2773 | 2130 | 2028 | 1787 | 2420 | 1445 | 882 | 1163 | 797 | 692 | 702 | 342 | 360 | 183 | 80 |  |  | 112 |  |  |
| RegExp | 27639 | 12768 | 11886 | 13778 | 13665 | 9480 | 10787 | 7652 | 1882 | 625 | 293 | 305 | 751 | 313 | 231 | 226 | 225 | 198 | 89 | 195 | 230 | 294 | 274 | 624 | 285 | 204 | 105 | 12 |  |  |  |  |  |
| Splay | 38733 | 46254 | 40460 | 39254 | 34829 | 20862 | 16639 | 11148 | 3268 | 4360 | 2502 | 2983 | 1911 | 3867 | 2472 | 2483 | 1909 | 1897 | 2157 | 1508 | 1826 | 1278 | 1091 | 1056 | 510 | 526 | 424 | 134 |  |  | 176 |  |  |
| NavierStokes | 32203 | 38584 | 35136 | 37729 | 36545 | 18310 | 19974 | 17832 | 32171 | 1563 | 3801 | 1976 | 1309 | 1082 | 1581 | 1335 | 2047 | 1706 | 1848 | 1327 | 854 | 694 | 285 | 184 | 954 | 171 | 176 | 69 |  |  | 95 |  |  |
| Score | 57582 | 54090 | 51158 | 48874 | 48723 | 20781 | 20769 | 18082 | 13501 | 1769 | 1585 | 1428 | 1403 | 1208 | 1090 | 1079 | 1078 | 975 | 905 | 715 | 669 | 518 | 371 | 363 | 356 | 224 | 145 | 43 |  |  |  |  |  |
| Score/MB | 1005 | 618 | 1240 | 860 | 435 | 156 | 632 | 390 | 69 | 112 | 900 | 395 |  | 114 | 284 | 901 | 1131 | 407 | 21 | 1302 |  | 1236 | 29 | 137661 | 225 | 2 | 11 | 40 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 31 | 37 | 37 | 49 | 41 | 43 | 43 | 44 | 49 | 65 | 50 | 54 | 64 | 87 | 94 | 97 | 128 | 178 | 618 |  | 37 | 259 |  |  |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 |  | 2.5.2 | 1.2.23 | 24.9.0 | 0.10.1 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.7.0.beta |  | 0.10.1 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 148.4M | 139.6M | 120.8M | 82M | 15.6M | 53.9M | 77.1M | 197.1M | 142.1M | 12.8M | 41.7M | 10.5M | 45.6M | 10.2M | 10M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 26.3M |
| Exe size | 29.4M | 342.5K | 112.5M | 113.6M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 1.4M | 13.1M | 1M | 1.6M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 507K |
| Dll size | 32.4M | 124.9M | 35.9M | 26M | 35.3M | 34.6M | 15.3M | 20M | 34.4M | 196.7M | 139.1M | 7.9M | 36M | 9.1M | 32.5M | 9.2M | 8.5M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 25.8M |
| Richards | 37830 | 34797 | 35108 | 36036 | 32273 | 31955 | 24147 | 13397 | 12236 | 35411 | 667 | 507 | 445 | 403 | 379 | 436 | 395 | 348 | 255 | 208 | 238 | 183 | 105 | 53 | 48 |  | 23 |  | 125 |
| DeltaBlue | 103078 | 46005 | 79771 | 43823 | 66495 | 61417 | 27419 | 12139 | 10585 | 26976 | 600 | 455 | 393 | 393 | 367 | 458 | 378 | 383 | 346 | 241 | 336 | 225 | 117 | 48 | 42 |  | 27 |  | 102 |
| Crypto | 38244 | 47736 | 38649 | 45890 | 40298 | 31663 | 32923 | 20430 | 17117 | 21848 | 778 | 531 | 416 | 508 | 424 | 323 | 429 | 416 | 184 | 307 | 168 | 112 | 86 | 57 | 72 |  | 36 |  | 144 |
| RayTrace | 109518 | 101896 | 67117 | 84211 | 64601 | 52095 | 44902 | 27824 | 25948 | 4211 | 968 | 567 | 749 | 609 | 629 | 606 | 593 | 440 | 402 | 447 | 448 | 214 | 254 | 121 | 132 |  | 81 |  | 368 |
| EarleyBoyer | 83053 | 61735 | 73606 | 50688 | 69556 | 69619 | 39274 | 40848 | 34157 | 28065 | 2191 | 1000 | 1055 | 985 | 961 | 937 | 933 | 850 | 522 | 492 | 567 | 423 | 282 | 116 | 133 |  | 73 |  | 496 |
| RegExp | 9761 | 18930 | 9809 | 17529 | 9618 | 8965 | 9246 | 8667 | 8059 | 1037 | 404 | 184 | 194 | 171 | 201 | 156 | 168 | 173 | 239 | 107 | 192 | 195 | 269 | 84 | 42 |  |  |  |  |
| Splay | 41895 | 32252 | 33191 | 32075 | 30918 | 23958 | 22985 | 22964 | 12305 | 2498 | 2092 | 986 | 1376 | 1267 | 1326 | 1175 | 1123 | 1149 | 1158 | 1007 | 669 | 735 | 463 | 316 | 172 |  | 125 |  | 773 |
| NavierStokes | 38545 | 29940 | 38545 | 37804 | 38545 | 38397 | 35580 | 22045 | 21602 | 25300 | 1063 | 1027 | 732 | 736 | 713 | 750 | 692 | 727 | 477 | 1064 | 480 | 188 | 140 | 114 | 162 |  | 57 |  | 279 |
| Score | 46371 | 41494 | 40119 | 40016 | 38115 | 34170 | 27097 | 18942 | 15960 | 10619 | 937 | 581 | 571 | 544 | 536 | 516 | 511 | 484 | 382 | 375 | 347 | 241 | 184 | 94 | 86 |  |  |  |  |
| Score/MB | 750 | 331 | 270 | 286 | 315 | 416 | 1736 | 351 | 207 | 53 | 6 | 45 | 13 | 51 | 11 | 50 | 50 |  | 44 | 43 | 40 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 42 | 59 | 60 | 61 | 60 | 68 | 63 | 64 | 81 | 85 | 84 | 126 | 152 | 259 | 289 | 133 | 386 |  | 87 |
