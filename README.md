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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48393<br>37.1M<br>1305/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48196<br>99.2M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47873<br>57.7M<br>829/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42343<br>108.3M<br>391/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40904<br>69.6M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40653<br>65.3M<br>622/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39763<br>123.4M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39014<br>40.7M<br>959/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20122<br>19.4M<br>1036/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19457<br>39.8M<br>488/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17087<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16948<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11792<br>199.7M<br>59/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2533<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1541<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 929<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 841<br>4.5M<br>188/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 818<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 773<br>831.3K<br>952/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 752<br>1.4M<br>534/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 746<br>1.4M<br>536/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 643<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 632<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 486<br>2.1M<br>228/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 400<br>685K<br>597/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 396<br>446.6K<br>907/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 355<br>414.5K<br>877/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 307<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 268<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/4/2025, 1:45:02 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | dune | bare | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 | 2.5.3 | 0.10.2 |  | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.09.13 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37.1M | 99.2M | 57.7M | 108.3M | 69.6M | 65.3M | 123.4M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Exe size | 37.1M | 99.2M | 1M | 108.3M | 69.6M | 65.3M | 123.4M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41741 | 40876 | 36912 | 35065 | 35224 | 31740 | 32114 | 32552 | 23098 | 13648 | 14230 | 13079 | 35567 | 10986 | 1124 | 706 | 696 | 709 | 630 | 577 | 572 | 563 | 562 | 537 | 296 | 337 | 245 | 272 | 225 | 152 | 204 | 90 | 104 | 59 | 59 | 272 | 27 |  | 159 |  |
| DeltaBlue | 56842 | 56928 | 110569 | 80413 | 81563 | 75798 | 72293 | 76565 | 25807 | 13475 | 13091 | 12972 | 44940 | 465 | 1060 | 697 | 663 | 677 | 623 | 558 | 588 | 538 | 569 | 488 | 329 | 386 | 356 | 362 | 324 | 203 | 250 | 164 | 110 | 54 | 55 | 279 | 31 |  | 184 |  |
| Crypto | 51756 | 48999 | 38875 | 41593 | 41646 | 41783 | 41452 | 41172 | 31703 | 20611 | 17813 | 17636 | 29336 | 8013 | 1356 | 665 | 752 | 519 | 552 | 529 | 547 | 882 | 380 | 867 | 783 | 409 | 189 | 189 | 180 | 152 | 122 | 328 | 98 | 80 | 61 | 296 | 38 |  | 152 |  |
| RayTrace | 116992 | 114550 | 111886 | 72371 | 71779 | 71483 | 66525 | 61493 | 35001 | 27103 | 27057 | 26196 | 3047 | 914 | 1567 | 1203 | 881 | 1052 | 954 | 912 | 902 | 674 | 686 | 782 | 583 | 457 | 527 | 538 | 486 | 492 | 273 | 504 | 256 | 163 | 137 | 340 | 94 |  | 474 |  |
| EarleyBoyer | 70497 | 69267 | 88534 | 77195 | 76540 | 68987 | 71057 | 68155 | 7063 | 40932 | 35948 | 36967 | 26542 | 912 | 3391 | 1909 | 1488 | 1752 | 1433 | 1377 | 1263 | 1682 | 1226 | 985 | 585 | 852 | 536 | 566 | 510 | 569 | 505 | 325 | 285 | 187 | 136 |  | 85 |  | 572 |  |
| RegExp | 20002 | 20679 | 10567 | 10092 | 9890 | 10313 | 9718 | 8938 | 7937 | 8758 | 8828 | 8667 | 1365 | 935 | 555 | 267 | 239 | 228 | 235 | 218 | 225 | 116 | 183 | 65 | 136 | 179 | 220 | 240 | 199 | 407 | 209 | 96 | 249 | 48 | 93 |  |  |  |  |  |
| Splay | 37095 | 38879 | 42726 | 40314 | 31121 | 37714 | 36492 | 36402 | 19851 | 25010 | 11570 | 12338 | 2375 | 5346 | 3659 | 2467 | 1812 | 1950 | 1852 | 2194 | 2151 | 2102 | 1682 | 1467 | 945 | 1237 | 1315 | 919 | 830 | 845 | 944 | 405 | 461 | 222 | 313 |  | 129 |  | 880 |  |
| NavierStokes | 40028 | 40028 | 38881 | 38765 | 38732 | 38694 | 38732 | 38359 | 36506 | 22297 | 22045 | 21963 | 30422 | 9933 | 1823 | 1119 | 1267 | 977 | 986 | 1001 | 945 | 1204 | 932 | 1531 | 930 | 672 | 485 | 483 | 469 | 174 | 201 | 872 | 165 | 177 | 119 |  | 59 |  | 310 |  |
| Score | 48393 | 48196 | 47873 | 42343 | 40904 | 40653 | 39763 | 39014 | 20122 | 19457 | 17087 | 16948 | 11792 | 2533 | 1541 | 929 | 841 | 818 | 773 | 752 | 746 | 739 | 643 | 632 | 486 | 486 | 400 | 396 | 355 | 307 | 276 | 268 | 188 | 105 | 104 |  |  |  |  |  |
| Score/MB | 1305 | 486 | 829 | 391 | 587 | 622 | 322 | 959 | 1036 | 488 | 335 | 481 | 59 |  | 42 | 75 | 188 | 158 | 952 | 534 | 536 | 87 | 325 | 13 | 228 |  | 597 | 907 | 877 |  | 20 | 128 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 43 | 34 | 43 | 47 | 50 | 50 | 53 | 53 | 61 | 58 | 81 | 67 | 64 | 80 | 79 | 86 | 100 | 113 | 130 | 143 | 238 | 236 | 31 | 354 |  | 79 | 7 |
### macos-arm64
| Engine | v8 | deno | bun | bare | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | quickjs-ng | jjs | llrt | quickjs | rquickjs | ladybird | njs | quickjs-emscripten | duktape | mujs | goja | xst | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.32 | 2.5.3 | 1.2.23 |  | 0.10.2 | 24.9.0 | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 | 0.10.1 |  | 0.7.0.beta | 2025.09.13 |  |  | 0.9.2 |  | 2.99.99 | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 87.4M | 57.3M | 45.6M | 60M | 111.9M | 132.1M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 3.8M | 0 | 10.6M | 1014.4K | 1.2M | 41.5M | 2.4M | 0 | 562.1K | 429.1K | 12.7M | 1.6M | 0 | 75.4M | 12.4M | 1.1M | 91.9M | 575.4K | 7.4M | 0 | 0 |
| Exe size | 41.3M | 87.4M | 57.3M | 45.6M | 60M | 111.9M | 66M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 1.9M | 0 | 10.6M | 1014.4K | 1.2M | 41.5M | 1.8M | 0 | 562.1K | 429.1K | 12.7M | 1.6M | 0 | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 1.9M | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 91M | 0 | 0 | 0 | 0 |
| Richards | 33593 | 41462 | 36333 | 34236 | 43386 | 28206 | 11039 | 10209 | 11660 | 17048 | 963 | 767 | 839 | 667 | 8638 | 643 | 687 | 675 | 629 | 581 | 407 | 264 | 240 | 246 | 81 | 159 | 122 | 59 | 30 |  | 164 | 25 |  |  |
| DeltaBlue | 85636 | 84201 | 46911 | 80366 | 78171 | 62482 | 12391 | 11438 | 10949 | 972 | 868 | 825 | 860 | 740 | 258 | 721 | 680 | 695 | 565 | 613 | 429 | 249 | 383 | 290 | 140 | 168 | 127 | 54 | 26 |  | 170 | 25 |  |  |
| Crypto | 40407 | 39365 | 46708 | 37305 | 43712 | 34468 | 17189 | 15983 | 14542 | 14499 | 990 | 1229 | 805 | 787 | 4251 | 468 | 906 | 644 | 1122 | 798 | 404 | 688 | 201 | 125 | 296 | 93 | 116 | 82 | 31 |  | 164 | 43 |  |  |
| RayTrace | 97679 | 70225 | 116918 | 62825 | 70965 | 47211 | 31091 | 37628 | 25726 | 1194 | 1433 | 1186 | 1263 | 913 | 305 | 1244 | 736 | 860 | 882 | 541 | 577 | 656 | 585 | 244 | 448 | 371 | 288 | 154 | 33 |  | 219 | 104 |  |  |
| EarleyBoyer | 72088 | 73816 | 61455 | 61046 | 75790 | 51150 | 35001 | 36644 | 30559 | 12454 | 3322 | 2109 | 1801 | 1496 | 639 | 1714 | 1447 | 1356 | 1238 | 1675 | 923 | 722 | 627 | 529 | 286 | 481 | 307 | 151 | 62 |  |  | 84 |  |  |
| RegExp | 8529 | 10365 | 18384 | 8965 | 8956 | 9465 | 7592 | 8315 | 8504 | 769 | 434 | 190 | 203 | 191 | 366 | 219 | 186 | 174 | 79 | 150 | 161 | 157 | 225 | 206 | 227 | 476 | 164 | 96 | 10 |  |  |  |  |  |
| Splay | 31936 | 27405 | 20828 | 28489 | 8630 | 22646 | 15377 | 9983 | 11083 | 1661 | 2632 | 852 | 1938 | 1679 | 1175 | 2322 | 1163 | 1516 | 1726 | 1487 | 1147 | 1212 | 601 | 706 | 356 | 735 | 533 | 350 | 105 |  |  | 127 |  |  |
| NavierStokes | 28140 | 30570 | 27251 | 28408 | 28851 | 29977 | 16342 | 16440 | 17476 | 16162 | 1061 | 2572 | 1348 | 1391 | 293 | 805 | 1500 | 1041 | 1619 | 1218 | 655 | 955 | 488 | 192 | 738 | 133 | 186 | 165 | 52 |  |  | 69 |  |  |
| Score | 39783 | 39712 | 39535 | 36056 | 33981 | 31390 | 16258 | 15602 | 14880 | 4059 | 1216 | 974 | 956 | 835 | 833 | 812 | 787 | 747 | 747 | 717 | 510 | 500 | 381 | 274 | 267 | 260 | 200 | 117 | 36 |  |  |  |  |  |
| Score/MB | 963 | 454 | 690 | 791 | 566 | 280 | 123 | 475 | 321 | 20 | 77 | 553 | 265 | 217 |  | 76 | 794 | 624 | 18 | 299 |  | 910 | 909 | 21 | 169 |  | 2 | 9 | 33 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 38 | 45 | 47 | 51 | 71 | 52 | 50 | 54 | 70 | 60 | 65 | 61 | 74 | 116 | 120 | 126 | 141 | 202 | 768 |  | 47 | 342 |  |  |
### windows
| Engine | JavaScriptCore | v8 | bun | deno | bare | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | txiki.js | quickjs | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.3.32 | 1.2.23 | 2.5.3 |  | 0.10.2 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 24.12.0 | 2025.09.13 | 0.7.0.beta |  |  | 0.10.1 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 125.2M | 61.8M | 139.6M | 148.2M | 61M | 82.1M | 120.8M | 15.6M | 52.6M | 77.1M | 197.1M | 115.8M | 41.7M | 13M | 45.6M | 10.5M | 10.2M | 6.8M | 0 | 8.5M | 8.6M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 342.5K | 29.4M | 113.6M | 112.3M | 26.1M | 49.1M | 85.5M | 342.9K | 33.8M | 42.6M | 349.1K | 3M | 5.7M | 5.1M | 13.1M | 1.4M | 1M | 1.6M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 124.9M | 32.4M | 26M | 35.9M | 34.9M | 33M | 35.3M | 15.3M | 18.8M | 34.4M | 196.7M | 112.8M | 36M | 7.9M | 32.5M | 9.1M | 9.2M | 5.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 36841 | 37385 | 36583 | 35316 | 32305 | 32478 | 32344 | 23716 | 12620 | 13937 | 35651 | 691 | 450 | 504 | 377 | 399 | 424 | 436 | 367 | 249 | 207 | 239 | 184 | 105 | 53 | 48 |  | 23 |  | 114 |
| DeltaBlue | 44160 | 107753 | 39710 | 76770 | 73120 | 74284 | 71057 | 27545 | 13164 | 12787 | 30044 | 610 | 399 | 456 | 361 | 396 | 455 | 421 | 385 | 357 | 250 | 299 | 230 | 117 | 48 | 42 |  | 25 |  | 151 |
| Crypto | 47303 | 36908 | 44450 | 41527 | 41437 | 41524 | 39685 | 32657 | 19483 | 17231 | 18797 | 781 | 414 | 538 | 424 | 502 | 322 | 470 | 424 | 178 | 297 | 169 | 111 | 88 | 58 | 72 |  | 33 |  | 146 |
| RayTrace | 105744 | 93831 | 99381 | 68159 | 69115 | 71261 | 60531 | 42179 | 23115 | 26513 | 3163 | 988 | 746 | 561 | 620 | 556 | 545 | 454 | 453 | 491 | 437 | 461 | 223 | 260 | 126 | 132 |  | 82 |  | 430 |
| EarleyBoyer | 61121 | 84162 | 56004 | 67444 | 66939 | 73781 | 70249 | 39868 | 39839 | 36016 | 26195 | 2176 | 1167 | 999 | 1009 | 1012 | 953 | 998 | 859 | 601 | 515 | 486 | 445 | 294 | 116 | 135 |  | 73 |  | 518 |
| RegExp | 18365 | 7736 | 17439 | 9799 | 9580 | 9589 | 9709 | 9670 | 7902 | 8495 | 942 | 407 | 196 | 189 | 199 | 170 | 146 | 159 | 177 | 196 | 107 | 247 | 196 | 269 | 86 | 42 |  |  |  |  |
| Splay | 35196 | 35856 | 31149 | 33322 | 36801 | 28465 | 31529 | 23127 | 21864 | 12721 | 2394 | 2314 | 1454 | 1010 | 1328 | 1288 | 1254 | 1219 | 1214 | 1092 | 991 | 698 | 731 | 496 | 305 | 168 |  | 129 |  | 782 |
| NavierStokes | 39731 | 38584 | 33734 | 38507 | 38617 | 38469 | 38655 | 35397 | 22238 | 21876 | 20230 | 1063 | 731 | 999 | 691 | 637 | 746 | 549 | 744 | 453 | 911 | 476 | 188 | 147 | 113 | 163 |  | 57 |  | 282 |
| Score | 43480 | 43391 | 40024 | 39965 | 39696 | 39160 | 38257 | 27019 | 18087 | 16987 | 9664 | 958 | 584 | 582 | 534 | 530 | 508 | 504 | 497 | 382 | 368 | 349 | 244 | 189 | 94 | 86 |  |  |  |  |
| Score/MB | 347 | 702 | 286 | 269 | 650 | 477 | 316 | 1731 | 344 | 220 | 49 | 8 | 13 | 44 | 11 | 50 | 49 | 74 |  | 44 | 42 | 40 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 59 | 59 | 60 | 62 | 69 | 66 | 62 | 85 | 86 | 81 | 124 | 149 | 257 | 289 | 131 | 404 |  | 85 |
