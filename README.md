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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48396<br>36.9M<br>1312/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47782<br>98.9M<br>483/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47490<br>57.6M<br>823/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39259<br>123.4M<br>318/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38530<br>66.3M<br>581/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38253<br>40.7M<br>940/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 37453<br>108.3M<br>345/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20195<br>19.4M<br>1040/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19554<br>40.1M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17138<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17104<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 8780<br>199.7M<br>43/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2554<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1518<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 899<br>12.3M<br>73/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 813<br>4.3M<br>190/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 769<br>831.3K<br>947/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 761<br>1.4M<br>546/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 703<br>1.4M<br>499/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 643<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 588<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 502<br>2.1M<br>236/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 481<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 367<br>685K<br>548/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 366<br>446.6K<br>839/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| rhino | [rhino](https://github.com/mozilla/rhino) | 328<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 319<br>414.5K<br>788/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 310<br>2.7K<br>117561/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 262<br>13.2M<br>19/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/26/2025, 1:46:52 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | node | dune | lo | deno | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | njs | rquickjs-pgo | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | rhino | mujs | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.22 | 14.2.0 | 24.9.0 | 0.10.1 |  | 2.5.2 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 24.12.0 | 2025.04.26 |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 36.9M | 98.9M | 57.6M | 123.4M | 66.3M | 40.7M | 108.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 1.1G | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 36.9M | 98.9M | 1M | 123.4M | 66.3M | 40.7M | 108.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 1.1G | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 0 | 56.6M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40495 | 40675 | 38211 | 31867 | 29957 | 32262 | 33375 | 23610 | 13150 | 14273 | 13545 | 36287 | 10749 | 1116 | 716 | 710 | 689 | 620 | 570 | 568 | 461 | 580 | 523 | 294 | 327 | 243 | 274 | 145 | 229 | 152 | 90 | 203 | 104 | 59 | 58 | 267 | 25 |  |  |
| DeltaBlue | 56934 | 56928 | 108810 | 73973 | 72062 | 80082 | 60915 | 24998 | 13541 | 13171 | 12906 | 23776 | 230 | 1028 | 698 | 674 | 668 | 614 | 579 | 536 | 440 | 576 | 485 | 326 | 381 | 351 | 357 | 187 | 326 | 200 | 163 | 248 | 112 | 54 | 54 | 277 | 32 |  |  |
| Crypto | 51777 | 48122 | 38743 | 41846 | 41677 | 41138 | 41196 | 31669 | 20713 | 17582 | 17461 | 16931 | 7411 | 1364 | 687 | 590 | 734 | 554 | 562 | 873 | 534 | 380 | 867 | 798 | 405 | 191 | 188 | 156 | 184 | 151 | 322 | 122 | 97 | 80 | 61 | 303 | 38 |  |  |
| RayTrace | 117806 | 118398 | 111664 | 65563 | 67931 | 59805 | 66377 | 36777 | 28165 | 26492 | 27796 | 5723 | 1420 | 1526 | 1188 | 1039 | 908 | 957 | 932 | 684 | 916 | 742 | 771 | 575 | 452 | 530 | 534 | 453 | 497 | 523 | 496 | 251 | 260 | 163 | 135 | 343 | 99 |  |  |
| EarleyBoyer | 71024 | 68263 | 83763 | 71093 | 73488 | 67747 | 62006 | 7125 | 41835 | 36144 | 36730 | 17427 | 1413 | 3353 | 1885 | 1747 | 1494 | 1414 | 1375 | 1672 | 1375 | 1220 | 983 | 570 | 837 | 477 | 484 | 550 | 525 | 576 | 323 | 466 | 284 | 186 | 136 |  | 84 |  |  |
| RegExp | 20506 | 20841 | 10466 | 9799 | 10092 | 8910 | 9608 | 7780 | 9065 | 8866 | 8819 | 567 | 779 | 552 | 272 | 230 | 229 | 232 | 228 | 115 | 218 | 180 | 64 | 132 | 177 | 222 | 246 | 451 | 202 | 445 | 96 | 202 | 248 | 48 | 93 |  |  |  |  |
| Splay | 36647 | 36238 | 42326 | 32336 | 28017 | 31154 | 30445 | 19828 | 24358 | 12046 | 12144 | 1710 | 4971 | 3445 | 1801 | 1939 | 1378 | 1825 | 2190 | 2092 | 2035 | 1510 | 859 | 1279 | 1250 | 749 | 579 | 896 | 307 | 847 | 366 | 806 | 472 | 219 | 316 |  | 138 |  |  |
| NavierStokes | 40096 | 39948 | 38765 | 38732 | 38249 | 38359 | 38397 | 36618 | 22275 | 22024 | 21941 | 24980 | 12712 | 1852 | 1134 | 1012 | 1325 | 1014 | 952 | 1217 | 980 | 930 | 1555 | 947 | 681 | 479 | 475 | 314 | 483 | 162 | 875 | 192 | 162 | 177 | 119 |  | 60 |  |  |
| Score | 48396 | 47782 | 47490 | 39259 | 38530 | 38253 | 37453 | 20195 | 19554 | 17138 | 17104 | 8780 | 2554 | 1518 | 899 | 833 | 813 | 769 | 761 | 739 | 703 | 643 | 588 | 502 | 481 | 367 | 366 | 328 | 319 | 310 | 264 | 262 | 189 | 105 | 103 |  |  |  |  |
| Score/MB | 1312 | 483 | 823 | 318 | 581 | 940 | 345 | 1040 | 487 | 336 | 485 | 43 | 2 | 42 | 73 | 161 | 190 | 947 | 546 | 87 | 499 | 325 | 12 | 236 |  | 548 | 839 |  | 788 | 117561 | 126 | 19 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 27 | 39 | 34 | 43 | 49 | 48 | 50 | 51 | 62 | 53 | 58 | 81 | 68 | 64 | 85 | 84 | 87 | 85 | 102 | 131 | 119 | 143 | 238 | 237 | 31 | 356 |  | 7 |
### macos-arm64
| Engine | bun | v8 | deno | dune | node | mozjs | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | primjs | njs | ladybird | duktape | quickjs-emscripten | mujs | rhino | ringo | xst | goja | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 | 14.2.202 | 2.5.2 | 0.10.1 | 24.9.0 |  | 144.0 |  | 24.1.2 |  | 0.12.0 | 24.12.0 | 0.10.1 | 2025.04.26 | 0.7.0.beta |  |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |
| Total size | 57.1M | 41.2M | 87.5M | 56.8M | 111.9M | 32.8M | 132.5M | 46.3M | 194M | 0 | 15.7M | 3.6M | 3.8M | 975.9K | 10.6M | 1.2M | 1.8M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 0 | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 91M | 575.4K | 7.4M | 0 |
| Exe size | 57.1M | 41.2M | 87.5M | 56.8M | 111.9M | 32.8M | 66.3M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 1.9M | 975.9K | 10.6M | 1.2M | 1.8M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 0 | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 908.8K | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 193.8M | 0 | 7.9M | 0 | 1.9M | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.1M | 0 | 0 | 0 |
| Richards | 48858 | 41921 | 58446 | 48230 | 43259 | 14629 | 15745 | 15491 | 35044 | 10594 | 1306 | 1337 | 1083 | 1063 | 927 | 856 | 1119 | 765 | 883 | 453 | 564 | 368 | 187 | 196 | 114 | 230 | 142 | 63 | 40 |  | 204 | 38 |  |
| DeltaBlue | 69887 | 132302 | 114206 | 107448 | 98760 | 16695 | 17687 | 17310 | 25443 | 776 | 1248 | 1340 | 1091 | 1056 | 1098 | 990 | 1184 | 812 | 744 | 538 | 508 | 564 | 235 | 243 | 192 | 267 | 150 | 80 | 41 |  | 221 | 56 |  |
| Crypto | 70633 | 56095 | 58727 | 57260 | 59923 | 20742 | 23593 | 22299 | 35566 | 11869 | 1446 | 1184 | 1197 | 1285 | 709 | 956 | 1556 | 1146 | 1503 | 1068 | 453 | 291 | 128 | 134 | 422 | 146 | 133 | 111 | 43 |  | 237 | 64 |  |
| RayTrace | 191583 | 139044 | 94941 | 87911 | 92055 | 46767 | 40329 | 38627 | 4540 | 1442 | 2432 | 2050 | 1538 | 1283 | 1858 | 1123 | 1433 | 950 | 1429 | 663 | 717 | 715 | 718 | 645 | 676 | 276 | 325 | 235 | 43 |  | 296 | 158 |  |
| EarleyBoyer | 105237 | 109568 | 98934 | 95903 | 98634 | 48786 | 44632 | 44577 | 42337 | 1384 | 5031 | 3326 | 2428 | 2372 | 2744 | 1980 | 2423 | 2438 | 1671 | 899 | 1228 | 816 | 722 | 661 | 389 | 602 | 380 | 222 | 89 |  |  | 117 |  |
| RegExp | 30882 | 12794 | 13583 | 14699 | 14211 | 12534 | 9930 | 11693 | 1466 | 563 | 718 | 301 | 282 | 274 | 327 | 244 | 262 | 204 | 85 | 218 | 222 | 271 | 594 | 564 | 248 | 240 | 211 | 133 | 13 |  |  |  |  |
| Splay | 48438 | 64851 | 46523 | 46368 | 41609 | 19379 | 24936 | 16003 | 3508 | 1844 | 4270 | 3606 | 3260 | 2616 | 3663 | 2420 | 243 | 1197 | 2239 | 1678 | 1397 | 674 | 1261 | 1025 | 452 | 1023 | 575 | 495 | 126 |  |  | 178 |  |
| NavierStokes | 38321 | 38842 | 37397 | 40244 | 38139 | 21073 | 20062 | 21073 | 29591 | 15947 | 1534 | 2149 | 2028 | 2294 | 1159 | 1660 | 3092 | 1849 | 1596 | 1411 | 783 | 626 | 322 | 189 | 981 | 258 | 187 | 219 | 67 |  |  | 102 |  |
| Score | 63922 | 59292 | 55265 | 53648 | 51873 | 22208 | 22188 | 21187 | 13210 | 2746 | 1848 | 1552 | 1331 | 1280 | 1226 | 1074 | 1044 | 964 | 960 | 729 | 639 | 502 | 404 | 362 | 358 | 314 | 230 | 160 | 48 |  |  |  |  |
| Score/MB | 1119 | 1439 | 631 | 944 | 463 | 676 | 167 | 457 | 68 |  | 117 | 430 | 347 | 1343 | 115 | 897 | 593 | 402 | 23 | 1327 |  | 1198 |  | 137281 | 226 | 24 | 3 | 12 | 45 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 36 | 30 | 38 | 37 | 37 | 40 | 43 | 39 | 49 | 64 | 51 | 57 | 63 | 84 | 95 | 99 | 99 | 122 | 145 | 578 |  | 36 | 234 |  |
### windows
| Engine | v8 | JavaScriptCore | bun | dune | node | deno | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | llrt | txiki.js | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.202 |  | 1.2.22 | 0.10.1 | 24.9.0 | 2.5.2 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 0.7.0.beta | 24.12.0 |  |  | 0.10.1 |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.7M | 125M | 139.3M | 82M | 120.8M | 148.4M | 15.6M | 53.9M | 80.6M | 197.1M | 89.6M | 12.8M | 45.6M | 41.7M | 9M | 10.2M | 10M | 0 | 8.6M | 8.5M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 339.5K | 113.3M | 47.4M | 85.5M | 112.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 13.1M | 5.7M | 1.2M | 1M | 1.6M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 124.7M | 26M | 34.6M | 35.3M | 35.9M | 15.3M | 20M | 37.9M | 196.7M | 86.6M | 7.9M | 32.5M | 36M | 7.8M | 9.2M | 8.5M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 37978 | 35708 | 35680 | 30049 | 31479 | 34945 | 24200 | 12882 | 12490 | 35605 | 665 | 508 | 378 | 443 | 436 | 436 | 391 | 359 | 248 | 255 | 210 | 180 | 106 | 51 | 48 |  | 24 |  |  |
| DeltaBlue | 107581 | 46904 | 44894 | 71923 | 70052 | 80763 | 29059 | 13276 | 12668 | 27603 | 595 | 432 | 360 | 402 | 461 | 461 | 370 | 389 | 344 | 359 | 258 | 221 | 116 | 49 | 42 |  | 28 |  |  |
| Crypto | 38429 | 47460 | 45552 | 41526 | 39692 | 40118 | 32963 | 20678 | 17860 | 18956 | 747 | 529 | 421 | 407 | 323 | 318 | 406 | 421 | 175 | 176 | 312 | 112 | 89 | 58 | 73 |  | 36 |  |  |
| RayTrace | 111146 | 105152 | 91315 | 66895 | 61123 | 52687 | 52065 | 27972 | 26808 | 6499 | 969 | 573 | 605 | 668 | 605 | 596 | 574 | 453 | 492 | 477 | 455 | 227 | 265 | 127 | 134 |  | 83 |  |  |
| EarleyBoyer | 81454 | 62523 | 53945 | 70065 | 66040 | 48942 | 42292 | 41800 | 36369 | 19916 | 2142 | 1022 | 987 | 956 | 952 | 950 | 984 | 863 | 622 | 587 | 519 | 456 | 290 | 120 | 142 |  | 74 |  |  |
| RegExp | 9799 | 19040 | 15638 | 9489 | 9246 | 9383 | 10021 | 9010 | 8745 | 1003 | 401 | 113 | 197 | 166 | 166 | 156 | 172 | 177 | 244 | 194 | 109 | 198 | 276 | 87 | 43 |  |  |  |  |
| Splay | 42628 | 36643 | 24121 | 28131 | 31312 | 31276 | 28644 | 24496 | 14399 | 2697 | 2217 | 1043 | 1316 | 1140 | 1270 | 1292 | 1259 | 1229 | 1193 | 1183 | 1035 | 770 | 517 | 308 | 186 |  | 130 |  |  |
| NavierStokes | 38469 | 33916 | 39060 | 38655 | 38507 | 38211 | 36618 | 22171 | 21898 | 16291 | 1053 | 973 | 702 | 694 | 761 | 748 | 686 | 741 | 461 | 473 | 1051 | 184 | 147 | 113 | 162 |  | 57 |  |  |
| Score | 46756 | 43304 | 38948 | 37992 | 37533 | 36676 | 29254 | 19420 | 17182 | 10077 | 933 | 545 | 530 | 528 | 528 | 521 | 515 | 497 | 397 | 386 | 384 | 245 | 191 | 95 | 88 |  |  |  |  |
| Score/MB | 757 | 346 | 279 | 463 | 310 | 247 | 1874 | 360 | 213 | 51 | 10 | 42 | 11 | 12 | 58 | 50 | 51 |  | 46 | 45 | 44 | 11 | 1 | 1 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 68 | 61 | 64 | 66 | 67 | 62 | 62 | 81 | 84 | 84 | 124 | 149 | 255 | 283 | 131 | 383 |  |  |
