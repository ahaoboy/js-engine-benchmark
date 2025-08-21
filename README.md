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


## Engine & Runtime (33/39)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47889<br>56.8M<br>842/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47778<br>36.4M<br>1312/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47689<br>98.4M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40304<br>106.5M<br>378/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39786<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38772<br>66.3M<br>584/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38231<br>40.7M<br>940/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20032<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19272<br>40.1M<br>480/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16973<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16888<br>35.2M<br>479/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11842<br>199.7M<br>59/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2857<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1527<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 863<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 825<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 724<br>831.3K<br>891/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 711<br>1.3M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 566<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 498<br>2.1M<br>234/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 494<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 404<br>446.6K<br>926/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 369<br>685K<br>551/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 343<br>414.5K<br>847/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 296<br>2.7K<br>112252/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 260<br>13.2M<br>19/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/21/2025, 1:48:53 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | njs | primjs | rquickjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0.9.2 |  |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37717 | 40025 | 41024 | 32548 | 31814 | 32393 | 32319 | 23564 | 13408 | 14347 | 12758 | 35884 | 11138 | 1131 | 674 | 690 | 707 | 565 | 592 | 595 | 577 | 497 | 288 | 344 | 259 | 246 | 224 | 135 | 90 | 185 | 102 | 60 | 59 | 270 | 26 |  | 114 |  |
| DeltaBlue | 108982 | 54494 | 58210 | 72703 | 74462 | 73999 | 78747 | 25826 | 13468 | 13078 | 12767 | 38137 | 524 | 1051 | 676 | 665 | 669 | 543 | 594 | 591 | 577 | 465 | 325 | 383 | 356 | 353 | 322 | 178 | 164 | 245 | 111 | 54 | 54 | 287 | 31 |  | 179 |  |
| Crypto | 41283 | 51947 | 49357 | 40821 | 41018 | 41429 | 41321 | 32192 | 20382 | 17620 | 17415 | 28498 | 10812 | 1369 | 587 | 724 | 581 | 883 | 517 | 541 | 380 | 898 | 794 | 424 | 187 | 189 | 184 | 150 | 327 | 123 | 95 | 80 | 61 | 304 | 31 |  | 134 |  |
| RayTrace | 111886 | 121062 | 116400 | 67857 | 66451 | 68227 | 56165 | 34819 | 26983 | 25800 | 27546 | 4251 | 1377 | 1543 | 1135 | 906 | 1067 | 680 | 884 | 874 | 701 | 557 | 577 | 452 | 534 | 514 | 481 | 442 | 502 | 263 | 253 | 162 | 135 | 344 | 90 |  | 419 |  |
| EarleyBoyer | 85827 | 68793 | 66046 | 73137 | 72343 | 72980 | 67286 | 7043 | 40787 | 35977 | 37159 | 24486 | 2042 | 3393 | 1854 | 1437 | 1730 | 1672 | 1350 | 1320 | 1216 | 753 | 561 | 856 | 540 | 499 | 501 | 584 | 323 | 479 | 281 | 185 | 130 |  | 77 |  | 503 |  |
| RegExp | 10567 | 20133 | 20890 | 10082 | 10032 | 10062 | 8685 | 7674 | 8654 | 8758 | 8758 | 1221 | 553 | 550 | 254 | 226 | 228 | 116 | 224 | 223 | 183 | 63 | 132 | 175 | 237 | 214 | 195 | 449 | 95 | 205 | 245 | 48 | 92 |  |  |  |  |  |
| Splay | 41397 | 35644 | 35400 | 37160 | 34560 | 26476 | 34471 | 19384 | 24415 | 11592 | 11839 | 2382 | 5550 | 3408 | 2307 | 1742 | 1858 | 2080 | 1737 | 1440 | 1633 | 1246 | 1247 | 1267 | 1282 | 787 | 642 | 875 | 377 | 740 | 447 | 217 | 335 |  | 86 |  | 810 |  |
| NavierStokes | 38803 | 40096 | 39920 | 38765 | 38765 | 38765 | 38359 | 36285 | 22238 | 22112 | 21980 | 32764 | 8162 | 1854 | 935 | 1254 | 976 | 1220 | 890 | 929 | 932 | 1518 | 959 | 739 | 472 | 482 | 478 | 161 | 816 | 195 | 160 | 177 | 119 |  | 51 |  | 283 |  |
| Score | 47889 | 47778 | 47689 | 40304 | 39786 | 38772 | 38231 | 20032 | 19272 | 16973 | 16888 | 11842 | 2857 | 1527 | 863 | 825 | 823 | 740 | 724 | 711 | 645 | 566 | 498 | 494 | 404 | 369 | 343 | 296 | 263 | 260 | 185 | 105 | 103 |  |  |  |  |  |
| Score/MB | 842 | 1312 | 484 | 378 | 323 | 584 | 940 | 1032 | 480 | 332 | 479 | 59 | 2 | 42 | 70 | 193 | 159 | 87 | 891 | 528 | 326 | 12 | 234 |  | 926 | 551 | 847 | 112252 | 126 | 19 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 38 | 34 | 47 | 49 | 50 | 61 | 53 | 53 | 59 | 86 | 67 | 62 | 80 | 82 | 85 | 101 | 132 | 117 | 146 | 240 | 238 | 31 | 410 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | node | deno | spidermonkey | spiderfire | mozjs | graaljs | jjs | primjs | hermes | quickjs-ng | llrt | quickjs | rquickjs | txiki.js | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.93 | 0.10.1 | 1.2.20 | 24.6.0 | 2.4.4 | 143.0 |  |  | 24.1.2 |  |  | 0.12.0 | 0.8.0 | 0.6.2.beta | 2025.04.26 |  | 24.12.0 | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 111.5M | 85.6M | 132.3M | 46.3M | 32.8M | 194M | 0 | 1.8M | 15.7M | 4.1M | 10.5M | 975.9K | 1.2M | 3.6M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 111.5M | 85.6M | 66.2M | 46.3M | 32.8M | 147.4K | 0 | 1.8M | 7.9M | 2.1M | 10.5M | 975.9K | 1.2M | 3.6M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 48540 | 39542 | 43782 | 35302 | 39358 | 38133 | 13680 | 12790 | 13778 | 20274 | 12197 | 994 | 898 | 1070 | 791 | 831 | 867 | 923 | 662 | 801 | 404 | 455 | 354 | 224 | 202 | 60 | 140 | 79 | 33 | 147 | 35 |  | 205 |
| DeltaBlue | 63665 | 118358 | 95316 | 55228 | 88089 | 80003 | 16391 | 13627 | 16172 | 3451 | 270 | 1148 | 924 | 840 | 817 | 746 | 846 | 917 | 575 | 733 | 479 | 579 | 545 | 259 | 159 | 125 | 148 | 70 | 40 | 119 | 42 |  | 224 |
| Crypto | 70696 | 52746 | 48683 | 59462 | 43350 | 44775 | 24757 | 18934 | 20646 | 16942 | 3827 | 1568 | 1049 | 924 | 731 | 966 | 868 | 705 | 967 | 1512 | 1086 | 488 | 271 | 143 | 115 | 295 | 113 | 103 | 39 | 232 | 42 |  | 116 |
| RayTrace | 167756 | 142226 | 72445 | 107002 | 63491 | 53649 | 48617 | 38219 | 36185 | 1500 | 1345 | 1390 | 1616 | 1346 | 1472 | 939 | 1198 | 1181 | 888 | 883 | 867 | 507 | 790 | 340 | 661 | 626 | 246 | 202 | 37 | 295 | 136 |  | 617 |
| EarleyBoyer | 100749 | 92432 | 84417 | 60898 | 68562 | 72288 | 50607 | 45467 | 35915 | 14494 | 1724 | 1431 | 3378 | 2081 | 2074 | 1614 | 1680 | 1301 | 1908 | 1166 | 1049 | 1167 | 919 | 652 | 654 | 374 | 305 | 178 | 71 |  | 104 |  | 672 |
| RegExp | 32613 | 13456 | 13583 | 19931 | 9728 | 9851 | 9029 | 11070 | 7577 | 1098 | 738 | 258 | 505 | 234 | 238 | 212 | 244 | 223 | 184 | 93 | 230 | 185 | 318 | 241 | 512 | 293 | 195 | 117 | 13 |  |  |  |  |
| Splay | 45113 | 66440 | 39702 | 20251 | 26297 | 25784 | 13829 | 16095 | 13495 | 1814 | 1053 | 4103 | 2771 | 1462 | 2548 | 1714 | 1581 | 1846 | 1449 | 1585 | 2005 | 1485 | 1508 | 1119 | 860 | 405 | 501 | 366 | 122 |  | 117 |  | 854 |
| NavierStokes | 31694 | 37322 | 36545 | 24783 | 30657 | 28556 | 16736 | 18402 | 19029 | 16047 | 1392 | 2924 | 1129 | 1812 | 1218 | 1782 | 1179 | 1506 | 1622 | 1640 | 1491 | 716 | 562 | 260 | 172 | 960 | 147 | 190 | 64 |  | 70 |  | 271 |
| Score | 60187 | 56796 | 47165 | 40718 | 38795 | 37417 | 20273 | 19243 | 18122 | 5488 | 1540 | 1350 | 1286 | 1047 | 1008 | 936 | 935 | 932 | 849 | 828 | 776 | 591 | 564 | 327 | 324 | 296 | 200 | 142 | 44 |  |  |  |  |
| Score/MB | 366922347 | 1383 | 830 | 716 | 347 | 436 | 153 | 415 | 552 | 28 |  | 767 | 81 | 253 | 95 | 982 | 792 | 258 | 353 | 19 | 1413 |  | 1346 | 25 | 122871 | 187 | 2 | 11 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 39 | 37 | 43 | 45 | 46 | 46 | 46 | 52 | 67 | 47 | 62 | 60 | 94 | 101 | 104 | 142 | 167 | 671 | 38 | 315 |  | 82 |
### windows
| Engine | v8 | JavaScriptCore | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-emscripten | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.93 |  | 1.2.20 | 24.6.0 | 2.4.4 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.7M | 116.4M | 143.1M | 77.6M | 14.4M | 52.7M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 9.3M | 42.2M | 0 | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 112.9M | 85.3M | 110.8M | 47.4M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 0 | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 18.6M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 7.8M | 29.1M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 37314 | 34412 | 36170 | 33110 | 33378 | 32796 | 24510 | 13672 | 14011 | 35525 | 4482 | 696 | 515 | 455 | 444 | 385 | 386 | 416 | 205 | 229 | 236 | 189 | 100 | 54 | 49 |  | 22 |  |  |
| DeltaBlue | 107733 | 45893 | 40643 | 75632 | 72981 | 73127 | 25634 | 13475 | 11974 | 27399 | 231 | 620 | 455 | 410 | 403 | 370 | 394 | 403 | 254 | 313 | 343 | 238 | 117 | 48 | 41 |  | 26 |  |  |
| Crypto | 41591 | 48523 | 45489 | 41108 | 41994 | 39595 | 33585 | 20607 | 17957 | 21406 | 2263 | 791 | 545 | 430 | 511 | 418 | 426 | 373 | 312 | 187 | 181 | 113 | 92 | 57 | 74 |  | 29 |  |  |
| RayTrace | 111590 | 102118 | 97827 | 65785 | 60161 | 66599 | 49431 | 28091 | 26835 | 2809 | 1561 | 1008 | 549 | 742 | 594 | 591 | 463 | 565 | 436 | 423 | 452 | 225 | 266 | 124 | 133 |  | 81 |  |  |
| EarleyBoyer | 83442 | 61880 | 57154 | 71759 | 67988 | 73937 | 42947 | 41526 | 36476 | 24501 | 833 | 2241 | 991 | 1122 | 972 | 989 | 873 | 936 | 501 | 496 | 535 | 457 | 296 | 122 | 137 |  | 70 |  |  |
| RegExp | 10062 | 18201 | 16654 | 9900 | 9761 | 9670 | 10122 | 8775 | 8628 | 1005 | 961 | 400 | 189 | 196 | 175 | 194 | 179 | 185 | 109 | 248 | 196 | 197 | 275 | 90 | 42 |  |  |  |  |
| Splay | 42090 | 33411 | 30624 | 31896 | 32670 | 27299 | 22149 | 23209 | 13344 | 2567 | 5564 | 2306 | 1002 | 1376 | 961 | 1262 | 1265 | 952 | 944 | 1157 | 1133 | 898 | 423 | 320 | 183 |  | 79 |  |  |
| NavierStokes | 38951 | 39771 | 33950 | 38990 | 39029 | 38951 | 36766 | 22408 | 22171 | 24931 | 3358 | 1085 | 1028 | 740 | 749 | 708 | 744 | 662 | 1081 | 471 | 479 | 190 | 149 | 113 | 168 |  | 48 |  |  |
| Score | 47446 | 43011 | 39939 | 39547 | 38867 | 38481 | 27920 | 19418 | 17163 | 9899 | 1650 | 968 | 584 | 583 | 534 | 528 | 508 | 499 | 375 | 374 | 373 | 255 | 187 | 96 | 88 |  |  |  |  |
| Score/MB | 876 | 352 | 300 | 339 | 271 | 495 | 1937 | 368 | 235 | 50 | 94 | 8 | 49 | 15 | 57 | 12 |  | 55 | 49 | 49 | 49 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 40 | 42 | 58 | 60 | 61 | 61 | 62 | 64 | 84 | 80 | 84 | 123 | 146 | 255 | 287 | 130 | 440 |  |  |
