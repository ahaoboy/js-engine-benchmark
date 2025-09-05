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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47638<br>98.6M<br>483/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47590<br>57.2M<br>832/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47301<br>36.5M<br>1297/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40491<br>106.3M<br>380/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39576<br>123.3M<br>321/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39020<br>40.7M<br>959/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 38934<br>66.3M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20083<br>19.4M<br>1034/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19215<br>39.8M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17058<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17031<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11547<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2896<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1521<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 861<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 822<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>831.3K<br>941/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 755<br>1.4M<br>542/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 747<br>1.4M<br>530/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 738<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 546<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 501<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 388<br>685K<br>580/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 372<br>414.5K<br>919/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 371<br>446.6K<br>850/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 298<br>2.7K<br>113011/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 187<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/5/2025, 1:46:59 AM

### ubuntu
| Engine | bun | v8 | JavaScriptCore | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs | mujs-pgo | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 | 14.2.0 |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.6M | 57.2M | 36.5M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 685K | 414.5K | 446.6K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 98.6M | 1M | 36.5M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 685K | 414.5K | 446.6K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.2M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40926 | 38239 | 40996 | 33025 | 32167 | 32033 | 32506 | 23349 | 13044 | 14061 | 13471 | 35563 | 12327 | 1127 | 679 | 690 | 708 | 628 | 582 | 577 | 556 | 575 | 490 | 289 | 331 | 247 | 230 | 275 | 126 | 201 | 90 | 103 | 60 | 58 | 268 | 26 |  | 128 |  |
| DeltaBlue | 56610 | 105194 | 54190 | 75051 | 73464 | 71890 | 74125 | 25602 | 13541 | 12999 | 12926 | 35532 | 634 | 1049 | 662 | 670 | 670 | 617 | 586 | 570 | 539 | 576 | 454 | 328 | 388 | 357 | 320 | 361 | 185 | 250 | 165 | 110 | 54 | 54 | 275 | 31 |  | 176 |  |
| Crypto | 48470 | 41175 | 51709 | 41796 | 40463 | 40912 | 41283 | 31569 | 20371 | 17632 | 17604 | 28420 | 8748 | 1363 | 592 | 731 | 586 | 560 | 557 | 530 | 876 | 378 | 855 | 791 | 402 | 189 | 184 | 188 | 157 | 123 | 324 | 98 | 80 | 61 | 293 | 31 |  | 133 |  |
| RayTrace | 119434 | 110850 | 119434 | 66821 | 65119 | 66525 | 67487 | 35297 | 27177 | 26808 | 27574 | 5423 | 1387 | 1585 | 1141 | 908 | 1049 | 965 | 936 | 912 | 686 | 738 | 555 | 584 | 457 | 520 | 466 | 512 | 441 | 272 | 499 | 254 | 164 | 136 | 353 | 91 |  | 420 |  |
| EarleyBoyer | 64791 | 85066 | 65520 | 73545 | 71101 | 69347 | 73489 | 7084 | 40897 | 36133 | 37253 | 27437 | 919 | 3347 | 1849 | 1454 | 1745 | 1378 | 1318 | 1357 | 1682 | 1220 | 767 | 574 | 859 | 478 | 487 | 499 | 560 | 495 | 324 | 282 | 185 | 134 |  | 77 |  | 515 |  |
| RegExp | 21184 | 10375 | 20093 | 10102 | 10122 | 8947 | 10092 | 7780 | 8693 | 8749 | 8784 | 773 | 845 | 547 | 250 | 227 | 227 | 234 | 225 | 214 | 114 | 182 | 64 | 131 | 179 | 209 | 194 | 235 | 408 | 206 | 96 | 243 | 49 | 92 |  |  |  |  |  |
| Splay | 36070 | 42123 | 34495 | 36312 | 34674 | 35954 | 27381 | 19623 | 23975 | 11880 | 11630 | 2969 | 4539 | 3554 | 2257 | 1736 | 1842 | 1779 | 2161 | 2180 | 2082 | 1643 | 991 | 1305 | 1243 | 1220 | 1314 | 685 | 952 | 766 | 372 | 471 | 214 | 338 |  | 86 |  | 822 |  |
| NavierStokes | 39948 | 38545 | 40216 | 38694 | 38732 | 38436 | 38732 | 36730 | 22297 | 22090 | 22002 | 25770 | 14796 | 1723 | 949 | 1283 | 982 | 970 | 928 | 961 | 1217 | 933 | 1508 | 927 | 687 | 489 | 469 | 471 | 176 | 198 | 815 | 161 | 175 | 119 |  | 51 |  | 279 |  |
| Score | 47638 | 47590 | 47301 | 40491 | 39576 | 39020 | 38934 | 20083 | 19215 | 17058 | 17031 | 11547 | 2896 | 1521 | 861 | 830 | 822 | 764 | 755 | 747 | 738 | 649 | 546 | 501 | 486 | 388 | 372 | 371 | 298 | 267 | 263 | 187 | 105 | 104 |  |  |  |  |  |
| Score/MB | 483 | 832 | 1297 | 380 | 321 | 959 | 587 | 1034 | 483 | 334 | 483 | 57 | 2 | 42 | 70 | 194 | 159 | 941 | 542 | 530 | 87 | 329 | 11 | 235 |  | 580 | 919 | 850 | 113011 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 40 | 33 | 47 | 48 | 50 | 50 | 52 | 53 | 62 | 58 | 86 | 68 | 64 | 81 | 86 | 82 | 98 | 115 | 132 | 144 | 239 | 237 | 31 | 407 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | jjs | quickjs-ng | llrt | rquickjs | quickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.32 | 1.2.21 | 2.4.5 | 0.10.1 | 24.7.0 | 143.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 |  | 0.8.0 | 0.6.2.beta |  | 2025.04.26 | 0.9.2 | 2.99.99 |  |  | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.2M | 56.8M | 85.5M | 56.8M | 111.7M | 131.8M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 0 | 4.1M | 10.5M | 1.2M | 975.9K | 2.4M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.2M | 56.8M | 85.5M | 56.8M | 111.7M | 65.9M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 0 | 2.1M | 10.5M | 1.2M | 975.9K | 1.8M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 49409 | 41346 | 44075 | 38613 | 46436 | 39330 | 14400 | 12984 | 13965 | 36047 | 1214 | 1123 | 1220 | 602 | 1301 | 941 | 996 | 782 | 763 | 502 | 655 | 582 | 348 | 108 | 210 | 277 | 145 | 81 | 37 | 202 | 36 |  | 133 |
| DeltaBlue | 60776 | 126642 | 71255 | 98840 | 109042 | 98522 | 16820 | 14857 | 15167 | 18996 | 992 | 1279 | 1263 | 1805 | 1156 | 860 | 1047 | 1071 | 836 | 586 | 612 | 594 | 548 | 203 | 218 | 335 | 181 | 72 | 40 | 225 | 44 |  | 179 |
| Crypto | 71694 | 60429 | 67851 | 53495 | 55695 | 58272 | 24594 | 20153 | 21560 | 29649 | 1012 | 1758 | 1104 | 6853 | 1073 | 998 | 977 | 1312 | 1190 | 1245 | 1244 | 493 | 283 | 412 | 153 | 155 | 150 | 86 | 39 | 255 | 45 |  | 128 |
| RayTrace | 181889 | 147258 | 177523 | 86727 | 72225 | 80283 | 48913 | 46545 | 40773 | 925 | 1912 | 1825 | 2076 | 860 | 1473 | 1800 | 1277 | 1155 | 1044 | 1083 | 781 | 765 | 869 | 679 | 652 | 264 | 310 | 222 | 41 | 314 | 123 |  | 615 |
| EarleyBoyer | 95764 | 111736 | 94133 | 93556 | 80364 | 80021 | 51408 | 44635 | 41620 | 38050 | 4007 | 1153 | 3159 | 757 | 2481 | 2509 | 2131 | 2090 | 2568 | 1113 | 1147 | 1037 | 994 | 400 | 680 | 587 | 375 | 197 | 77 |  | 99 |  | 648 |
| RegExp | 29577 | 14274 | 25184 | 13728 | 11989 | 10183 | 11614 | 9819 | 10707 | 1782 | 701 | 315 | 290 | 432 | 253 | 273 | 252 | 261 | 202 | 244 | 91 | 232 | 336 | 311 | 520 | 238 | 162 | 124 | 14 |  |  |  |  |
| Splay | 44315 | 51910 | 36606 | 40161 | 26648 | 29475 | 26444 | 15158 | 14114 | 3178 | 4425 | 4331 | 3349 | 1222 | 2208 | 3110 | 3061 | 2257 | 1734 | 2017 | 1978 | 1731 | 1224 | 501 | 959 | 914 | 389 | 537 | 121 |  | 82 |  | 981 |
| NavierStokes | 37618 | 37322 | 30095 | 39248 | 36766 | 28880 | 19363 | 18087 | 17589 | 15076 | 1360 | 3587 | 1984 | 4502 | 1953 | 1555 | 1685 | 2254 | 1798 | 1466 | 1751 | 963 | 692 | 1050 | 192 | 262 | 233 | 194 | 67 |  | 65 |  | 310 |
| Score | 60725 | 58855 | 56149 | 49466 | 45760 | 43394 | 23373 | 19596 | 19464 | 9401 | 1583 | 1503 | 1467 | 1357 | 1262 | 1217 | 1174 | 1171 | 1031 | 867 | 783 | 692 | 583 | 376 | 363 | 326 | 225 | 152 | 46 |  |  |  |  |
| Score/MB | 370202195 | 1427 | 988 | 578 | 805 | 388 | 177 | 597 | 419 | 48 | 100 | 854 | 406 |  | 306 | 115 | 981 | 1228 | 430 | 1579 | 18 |  | 1391 | 238 | 137661 | 25 | 2 | 12 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 33 | 35 | 40 | 44 | 40 | 39 | 41 | 39 | 48 | 47 | 68 | 54 | 56 | 95 | 93 | 101 | 120 | 166 | 600 | 35 | 320 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-emscripten | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.32 |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  |  | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.4M | 122.2M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.4M | 86.7M | 38.4M | 11.8M | 9.2M | 42.2M | 9M | 0 | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.3M | 0 | 0 |
| Exe size | 29.4M | 338K | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 0 | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.4M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.4M | 83.6M | 32.7M | 6.9M | 7.8M | 29.1M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38447 | 35719 | 36654 | 32926 | 31694 | 28429 | 24150 | 14407 | 14093 | 36127 | 8522 | 701 | 452 | 509 | 406 | 391 | 441 | 388 | 431 | 215 | 226 | 215 | 185 | 106 | 56 | 49 |  | 21 |  |  |
| DeltaBlue | 99937 | 45324 | 38540 | 76036 | 75685 | 73933 | 28120 | 13396 | 13138 | 28821 | 304 | 617 | 410 | 469 | 403 | 370 | 463 | 397 | 403 | 258 | 310 | 335 | 228 | 118 | 50 | 42 |  | 25 |  |  |
| Crypto | 41384 | 49342 | 44883 | 39157 | 37658 | 42173 | 33902 | 20762 | 18453 | 19235 | 2959 | 793 | 430 | 532 | 514 | 429 | 327 | 431 | 380 | 318 | 181 | 171 | 114 | 88 | 59 | 75 |  | 30 |  |  |
| RayTrace | 108334 | 91833 | 100639 | 59569 | 66821 | 67272 | 47433 | 27084 | 26640 | 3548 | 1156 | 1015 | 739 | 538 | 594 | 576 | 571 | 462 | 569 | 436 | 428 | 465 | 230 | 269 | 128 | 135 |  | 83 |  |  |
| EarleyBoyer | 81357 | 62007 | 57156 | 73734 | 72018 | 74709 | 42500 | 41562 | 36629 | 26809 | 1377 | 2234 | 1145 | 1003 | 994 | 1001 | 901 | 884 | 959 | 512 | 521 | 563 | 459 | 298 | 126 | 143 |  | 69 |  |  |
| RegExp | 9920 | 18074 | 17491 | 9761 | 9991 | 9699 | 10142 | 8983 | 8819 | 951 | 1072 | 404 | 196 | 188 | 160 | 195 | 154 | 179 | 186 | 109 | 251 | 197 | 198 | 279 | 90 | 42 |  |  |  |  |
| Splay | 42147 | 35591 | 33639 | 34577 | 33362 | 28098 | 20588 | 23836 | 14929 | 2883 | 7377 | 2385 | 1449 | 1018 | 1263 | 1319 | 1246 | 1289 | 993 | 986 | 1141 | 661 | 847 | 522 | 323 | 170 |  | 81 |  |  |
| NavierStokes | 38951 | 33586 | 33984 | 38990 | 38842 | 39029 | 36061 | 22297 | 22149 | 24758 | 3530 | 1079 | 744 | 1029 | 750 | 717 | 757 | 755 | 671 | 1081 | 473 | 461 | 193 | 150 | 116 | 167 |  | 49 |  |  |
| Score | 46752 | 42078 | 40538 | 39279 | 39246 | 38411 | 27729 | 19572 | 17720 | 10327 | 2073 | 974 | 588 | 584 | 543 | 534 | 516 | 512 | 509 | 382 | 374 | 343 | 252 | 193 | 99 | 88 |  |  |  |  |
| Score/MB | 859 | 344 | 305 | 274 | 336 | 494 | 1924 | 381 | 243 | 52 | 119 | 11 | 15 | 49 | 59 | 12 | 57 |  | 56 | 50 | 49 | 45 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 41 | 59 | 58 | 62 | 60 | 67 | 63 | 63 | 84 | 81 | 86 | 122 | 148 | 248 | 280 | 131 | 437 |  |  |
