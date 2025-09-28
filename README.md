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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48809<br>37M<br>1317/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48608<br>99.2M<br>490/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47110<br>57.8M<br>815/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42209<br>108.3M<br>389/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 39367<br>66.3M<br>593/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39035<br>40.7M<br>960/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38970<br>123.4M<br>315/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20055<br>19.4M<br>1033/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19543<br>40.1M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17029<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17026<br>51M<br>333/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9539<br>199.7M<br>47/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 1849<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 929<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 842<br>4.3M<br>197/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 837<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 771<br>831.3K<br>949/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 764<br>1.4M<br>549/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 636<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 497<br>2.1M<br>233/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 495<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 401<br>446.6K<br>919/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 384<br>685K<br>574/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 350<br>414.5K<br>864/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| rhino | [rhino](https://github.com/mozilla/rhino) | 324<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 311<br>2.7K<br>117941/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/28/2025, 4:09:01 PM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | dune | lo | node | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | rhino | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.2.0 | 2.5.2 | 0.10.1 |  | 24.9.0 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 37M | 99.2M | 57.8M | 108.3M | 66.3M | 40.7M | 123.4M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 37M | 99.2M | 1M | 108.3M | 66.3M | 40.7M | 123.4M | 571K | 40.1M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42211 | 41709 | 36764 | 35182 | 32767 | 32665 | 26985 | 23451 | 13694 | 12952 | 13242 | 35609 | 10944 | 1119 | 714 | 688 | 713 | 632 | 582 | 574 | 561 | 580 | 538 | 291 | 340 | 258 | 246 | 226 | 140 | 155 | 200 | 90 | 102 | 60 | 58 | 268 | 25 |  |  |
| DeltaBlue | 57410 | 57371 | 108354 | 81299 | 75507 | 74356 | 72902 | 25012 | 13515 | 12807 | 12992 | 27055 | 266 | 1063 | 701 | 667 | 681 | 621 | 590 | 585 | 532 | 583 | 484 | 321 | 389 | 357 | 359 | 322 | 193 | 198 | 252 | 163 | 112 | 55 | 55 | 269 | 32 |  |  |
| Crypto | 51909 | 49285 | 38938 | 41626 | 41129 | 41378 | 41746 | 32099 | 20377 | 17448 | 17407 | 16583 | 8256 | 1372 | 672 | 740 | 595 | 555 | 564 | 527 | 886 | 379 | 877 | 790 | 426 | 186 | 190 | 180 | 156 | 155 | 122 | 324 | 95 | 80 | 61 | 296 | 38 |  |  |
| RayTrace | 120470 | 118916 | 112108 | 71853 | 68523 | 61567 | 65785 | 34745 | 27722 | 27824 | 27251 | 3461 | 1290 | 1535 | 1228 | 919 | 1085 | 957 | 909 | 898 | 682 | 689 | 782 | 571 | 452 | 523 | 527 | 486 | 464 | 497 | 273 | 497 | 250 | 163 | 140 | 344 | 100 |  |  |
| EarleyBoyer | 68263 | 68332 | 83154 | 75828 | 74470 | 70446 | 70006 | 7114 | 41025 | 36293 | 36424 | 21741 | 550 | 3358 | 1908 | 1500 | 1766 | 1415 | 1370 | 1391 | 1681 | 1229 | 986 | 576 | 863 | 552 | 544 | 505 | 542 | 550 | 503 | 322 | 280 | 190 | 136 |  | 84 |  |  |
| RegExp | 20588 | 21296 | 10546 | 10062 | 10062 | 8965 | 10011 | 7743 | 9237 | 8837 | 8919 | 863 | 529 | 557 | 270 | 230 | 228 | 233 | 226 | 223 | 116 | 182 | 65 | 132 | 179 | 242 | 212 | 199 | 392 | 456 | 210 | 96 | 246 | 48 | 94 |  |  |  |  |
| Splay | 37641 | 38227 | 40998 | 39817 | 28506 | 35889 | 36166 | 20117 | 24341 | 12468 | 12093 | 3952 | 1238 | 3602 | 2428 | 1791 | 1927 | 1836 | 2226 | 2237 | 2106 | 1671 | 1505 | 1293 | 1264 | 1185 | 958 | 739 | 924 | 886 | 875 | 363 | 444 | 205 | 320 |  | 137 |  |  |
| NavierStokes | 40176 | 39948 | 38803 | 38765 | 38732 | 38436 | 38842 | 36101 | 22067 | 21963 | 22024 | 16719 | 12256 | 1817 | 1074 | 1307 | 993 | 983 | 957 | 970 | 1210 | 931 | 1535 | 908 | 728 | 470 | 485 | 477 | 316 | 165 | 202 | 843 | 165 | 175 | 119 |  | 61 |  |  |
| Score | 48809 | 48608 | 47110 | 42209 | 39367 | 39035 | 38970 | 20055 | 19543 | 17029 | 17026 | 9539 | 1849 | 1534 | 929 | 842 | 837 | 771 | 764 | 756 | 740 | 647 | 636 | 497 | 495 | 401 | 384 | 350 | 324 | 311 | 274 | 262 | 185 | 105 | 104 |  |  |  |  |
| Score/MB | 1317 | 490 | 815 | 389 | 593 | 960 | 315 | 1033 | 487 | 483 | 333 | 47 | 1 | 42 | 75 | 197 | 162 | 949 | 549 | 537 | 87 | 327 | 13 | 233 |  | 919 | 574 | 864 |  | 117941 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 45 | 34 | 44 | 48 | 49 | 50 | 52 | 52 | 61 | 59 | 81 | 68 | 62 | 79 | 81 | 85 | 88 | 101 | 113 | 131 | 144 | 237 | 236 | 31 | 353 |  | 7 |
### macos-arm64
| Engine | bun | v8 | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | rhino | goja | xst | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.2.229 | 2.5.2 | 0.10.1 | 24.9.0 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 | 2025.04.26 | 0.7.0.beta |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |
| Total size | 57.3M | 41.3M | 87.5M | 56.8M | 111.9M | 132.6M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 3.8M | 975.9K | 10.6M | 1.2M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 0 | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 |
| Exe size | 57.3M | 41.3M | 87.5M | 56.8M | 111.9M | 66.3M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 1.9M | 975.9K | 10.6M | 1.2M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 0 | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 1.9M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 |
| Richards | 50362 | 46306 | 60133 | 46224 | 44742 | 15628 | 14866 | 15289 | 37095 | 18004 | 1304 | 1136 | 1263 | 1140 | 1146 | 921 | 977 | 757 | 899 | 511 | 587 | 352 | 200 | 313 | 110 | 157 | 145 | 104 | 38 |  | 202 | 42 |  |
| DeltaBlue | 76459 | 139258 | 113187 | 105022 | 108513 | 17065 | 15802 | 16073 | 45073 | 1122 | 1199 | 1238 | 1254 | 1155 | 1116 | 1083 | 1035 | 836 | 757 | 608 | 645 | 544 | 258 | 357 | 208 | 250 | 154 | 96 | 40 |  | 226 | 51 |  |
| Crypto | 73548 | 57402 | 59208 | 60477 | 60825 | 25231 | 20883 | 21382 | 42532 | 11841 | 1397 | 1727 | 1216 | 1148 | 1351 | 683 | 960 | 1180 | 1538 | 1287 | 562 | 289 | 140 | 188 | 429 | 136 | 137 | 111 | 43 |  | 248 | 67 |  |
| RayTrace | 189141 | 148590 | 96717 | 91907 | 89317 | 47829 | 49727 | 37813 | 2348 | 1178 | 2524 | 2080 | 2072 | 1492 | 1178 | 1875 | 1415 | 913 | 1355 | 1119 | 735 | 866 | 652 | 383 | 668 | 708 | 339 | 227 | 43 |  | 320 | 172 |  |
| EarleyBoyer | 100264 | 113651 | 101494 | 96952 | 93615 | 52976 | 48527 | 45595 | 43913 | 1223 | 5071 | 3705 | 3007 | 2499 | 2241 | 2758 | 2226 | 2536 | 1890 | 1134 | 1380 | 1074 | 646 | 743 | 417 | 677 | 371 | 228 | 84 |  |  | 137 |  |
| RegExp | 29122 | 14623 | 14302 | 13728 | 11194 | 12663 | 11941 | 11922 | 1597 | 489 | 652 | 315 | 314 | 273 | 271 | 324 | 260 | 204 | 103 | 247 | 244 | 333 | 561 | 294 | 320 | 599 | 208 | 134 | 15 |  |  |  |  |
| Splay | 38472 | 60988 | 48675 | 34389 | 43467 | 30184 | 17993 | 18808 | 3883 | 3113 | 4311 | 5015 | 3053 | 3370 | 2450 | 3651 | 3159 | 2023 | 2177 | 1972 | 1850 | 1555 | 1214 | 1050 | 514 | 933 | 545 | 517 | 152 |  |  | 217 |  |
| NavierStokes | 38545 | 40136 | 38912 | 38617 | 38803 | 21454 | 19886 | 20947 | 29769 | 14176 | 1609 | 3873 | 2024 | 2180 | 2352 | 1118 | 1668 | 1788 | 1909 | 1513 | 876 | 712 | 308 | 308 | 1066 | 194 | 187 | 218 | 73 |  |  | 106 |  |
| Score | 62470 | 62190 | 56722 | 51263 | 51118 | 24728 | 21777 | 21312 | 13849 | 3047 | 1831 | 1808 | 1482 | 1354 | 1278 | 1212 | 1196 | 1031 | 1017 | 884 | 735 | 609 | 399 | 393 | 385 | 359 | 231 | 175 | 50 |  |  |  |  |
| Score/MB | 1090 | 1507 | 648 | 902 | 456 | 186 | 663 | 459 | 71 |  | 116 | 1027 | 410 | 353 | 1340 | 114 | 999 | 430 | 24 | 1610 |  | 1453 |  | 30 | 243 | 136144 | 3 | 14 | 47 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 38 | 31 | 35 | 37 | 39 | 37 | 40 | 41 | 48 | 58 | 44 | 51 | 55 | 82 | 81 | 88 | 93 | 122 | 145 | 550 |  | 34 | 221 |  |
### windows
| Engine | v8 | bun | JavaScriptCore | deno | node | dune | spidermonkey | ChakraCore | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs-pgo | quickjs-emscripten | rquickjs | mujs | mujs-pgo | duktape | goja | jint | kiesel | boa | xst | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 | 1.2.23 |  | 2.5.2 | 24.9.0 | 0.10.1 | 144.0 | 1.11.24.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  | 1.3.5 |  | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |
| Total size | 61.8M | 139.6M | 125.2M | 148.4M | 120.8M | 82M | 52.8M | 15.6M | 80.6M | 197.1M | 89.6M | 12.8M | 44.3M | 45.6M | 6.8M | 10.2M | 0 | 9M | 8.5M | 8.6M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 |
| Exe size | 29.4M | 113.6M | 342.5K | 112.5M | 85.5M | 47.4M | 33.9M | 342.9K | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 13.1M | 1.6M | 1M | 0 | 1.2M | 692.1K | 744.6K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 |
| Dll size | 32.4M | 26M | 124.9M | 35.9M | 35.3M | 34.6M | 18.9M | 15.3M | 37.9M | 196.7M | 86.6M | 7.9M | 38.6M | 32.5M | 5.2M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 |
| Richards | 37674 | 36206 | 35104 | 35217 | 30723 | 32894 | 13687 | 23892 | 13789 | 33212 | 682 | 470 | 442 | 371 | 513 | 420 | 359 | 425 | 253 | 208 | 189 | 180 | 104 | 52 | 49 |  | 22 |  |
| DeltaBlue | 106014 | 46104 | 45403 | 77669 | 69159 | 72842 | 13085 | 27479 | 12886 | 27088 | 606 | 458 | 403 | 360 | 496 | 457 | 385 | 460 | 361 | 287 | 237 | 228 | 113 | 50 | 42 |  | 25 |  |
| Crypto | 34511 | 44163 | 47677 | 38007 | 41415 | 39396 | 20038 | 32837 | 17104 | 18442 | 768 | 534 | 415 | 421 | 473 | 323 | 422 | 303 | 178 | 182 | 302 | 109 | 89 | 57 | 72 |  | 35 |  |
| RayTrace | 106706 | 85913 | 103376 | 69929 | 64823 | 66673 | 26714 | 44872 | 26613 | 4193 | 967 | 562 | 722 | 626 | 453 | 591 | 456 | 481 | 501 | 438 | 435 | 227 | 259 | 119 | 133 |  | 82 |  |
| EarleyBoyer | 76566 | 54116 | 55719 | 75284 | 69940 | 72082 | 40051 | 9634 | 35872 | 26159 | 2205 | 1004 | 1062 | 1015 | 988 | 865 | 861 | 780 | 617 | 568 | 474 | 453 | 290 | 118 | 135 |  | 74 |  |
| RegExp | 9146 | 17166 | 16390 | 9628 | 9546 | 9237 | 8577 | 3049 | 8529 | 931 | 398 | 186 | 170 | 189 | 158 | 147 | 178 | 153 | 199 | 242 | 105 | 198 | 269 | 86 | 43 |  |  |  |
| Splay | 33656 | 32939 | 26328 | 33256 | 31464 | 26296 | 19705 | 14342 | 12983 | 2983 | 2238 | 1082 | 1294 | 1276 | 1161 | 1250 | 1198 | 1255 | 1204 | 1037 | 926 | 741 | 473 | 308 | 189 |  | 128 |  |
| NavierStokes | 38359 | 39583 | 38881 | 38139 | 38545 | 38584 | 22002 | 28527 | 21980 | 22637 | 1041 | 1022 | 671 | 708 | 548 | 749 | 742 | 758 | 455 | 462 | 900 | 189 | 146 | 114 | 163 |  | 57 |  |
| Score | 43699 | 40795 | 40573 | 40098 | 38288 | 37894 | 18592 | 18121 | 17026 | 10169 | 944 | 583 | 550 | 529 | 521 | 507 | 495 | 488 | 391 | 365 | 354 | 244 | 187 | 94 | 88 |  |  |  |
| Score/MB | 707 | 292 | 324 | 270 | 316 | 462 | 352 | 1161 | 211 | 51 | 10 | 45 | 12 | 11 | 77 | 49 |  | 54 | 45 | 42 | 41 | 11 | 1 | 1 | 2 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 27 | 20 | 24 | 42 | 58 | 65 | 61 | 67 | 69 | 62 | 73 | 83 | 82 | 87 | 123 | 151 | 258 | 288 | 134 | 388 |  |
