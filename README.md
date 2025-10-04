fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

webui: https://ahaoboy.github.io/js-engine-benchmark/

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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48210<br>99.2M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47598<br>31.3M<br>1521/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47514<br>57.5M<br>826/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42093<br>108.3M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40760<br>43M<br>946/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40722<br>52.2M<br>779/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39852<br>106.5M<br>374/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38837<br>40.7M<br>955/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20123<br>19.3M<br>1042/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19585<br>39.8M<br>492/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17218<br>44.7M<br>385/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17036<br>32M<br>531/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12692<br>199.4M<br>63/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2457<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1545<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 950<br>982.4K<br>990/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 925<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>4.1M<br>204/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 753<br>1.4M<br>541/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>1.9M<br>396/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 730<br>831.3K<br>899/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 594<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 498<br>370.4K<br>1376/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 490<br>1.3M<br>363/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 479<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 385<br>422.8K<br>932/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 380<br>685K<br>568/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>386.8K<br>987/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 317<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>9.3M<br>29/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>1.9M<br>134/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>✅windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/4/2025, 11:40:58 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | bare | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs-pgo | rquickjs | njs | primjs | ladybird | duktape | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | boa | kiesel | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.3.0 | 2.5.3 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  | 0.9.2 |  |  | 2.99.99 | 0.10.1 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 99.2M | 31.3M | 57.5M | 108.3M | 43M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 1.9M | 831.3K | 46.5M | 370.4K | 1.3M | 0 | 422.8K | 685K | 386.8K | 0 | 9.3M | 1.9M | 27M | 12.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Exe size | 99.2M | 31.3M | 833.3K | 108.3M | 43M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 1.9M | 831.3K | 46.5M | 370.4K | 1.3M | 0 | 422.8K | 685K | 386.8K | 0 | 9.3M | 1.9M | 27M | 12.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41801 | 40460 | 37438 | 35193 | 31846 | 35323 | 31666 | 32100 | 23183 | 13948 | 14174 | 12744 | 35556 | 12356 | 1158 | 832 | 710 | 707 | 580 | 580 | 558 | 582 | 532 | 287 | 393 | 327 | 264 | 247 | 227 | 160 | 197 | 89 | 60 | 59 | 276 | 29 |  |  | 168 |  |
| DeltaBlue | 58779 | 56042 | 105452 | 79540 | 77292 | 80796 | 73642 | 74733 | 26196 | 13389 | 12979 | 12979 | 36729 | 520 | 1084 | 717 | 697 | 680 | 586 | 581 | 536 | 600 | 488 | 323 | 383 | 379 | 362 | 354 | 323 | 200 | 251 | 162 | 54 | 55 | 284 | 34 |  |  | 180 |  |
| Crypto | 48370 | 51873 | 38728 | 41804 | 41664 | 41553 | 41497 | 41386 | 32029 | 20570 | 17702 | 17701 | 29089 | 8536 | 1362 | 773 | 676 | 590 | 547 | 567 | 875 | 513 | 881 | 781 | 397 | 403 | 189 | 190 | 179 | 149 | 123 | 323 | 80 | 62 | 305 | 38 |  |  | 148 |  |
| RayTrace | 117362 | 118990 | 112996 | 72075 | 71187 | 70669 | 66680 | 59717 | 34967 | 27306 | 27158 | 27898 | 5278 | 1465 | 1592 | 932 | 1193 | 1059 | 934 | 902 | 680 | 892 | 770 | 574 | 576 | 440 | 532 | 522 | 483 | 494 | 272 | 496 | 163 | 136 | 345 | 102 |  |  | 472 |  |
| EarleyBoyer | 68184 | 68203 | 88225 | 75232 | 68152 | 75389 | 72560 | 70916 | 7096 | 41356 | 37097 | 36896 | 26989 | 843 | 3385 | 1537 | 1901 | 1748 | 1340 | 1242 | 1683 | 1362 | 969 | 573 | 957 | 855 | 557 | 524 | 496 | 574 | 493 | 321 | 190 | 136 |  | 89 |  |  | 546 |  |
| RegExp | 20386 | 20184 | 10494 | 10152 | 10303 | 10082 | 9900 | 8919 | 7772 | 9056 | 8919 | 8919 | 1365 | 574 | 552 | 246 | 258 | 229 | 215 | 230 | 116 | 231 | 65 | 134 | 156 | 179 | 245 | 215 | 197 | 461 | 207 | 96 | 48 | 93 |  |  |  |  |  |  |
| Splay | 37676 | 34104 | 41895 | 39539 | 38227 | 30624 | 35375 | 35913 | 19612 | 24830 | 12001 | 11963 | 2638 | 2353 | 3488 | 2597 | 2412 | 1934 | 2196 | 2192 | 2104 | 1778 | 909 | 1297 | 1383 | 1231 | 785 | 915 | 1301 | 942 | 912 | 373 | 221 | 317 |  | 138 |  |  | 888 |  |
| NavierStokes | 39948 | 40096 | 38765 | 38694 | 38881 | 38765 | 38803 | 38436 | 36545 | 22193 | 22002 | 22067 | 34577 | 14529 | 1833 | 1570 | 1137 | 976 | 971 | 954 | 1219 | 902 | 1534 | 915 | 469 | 670 | 474 | 487 | 463 | 173 | 199 | 832 | 172 | 119 |  | 60 |  |  | 298 |  |
| Score | 48210 | 47598 | 47514 | 42093 | 40760 | 40722 | 39852 | 38837 | 20123 | 19585 | 17218 | 17036 | 12692 | 2457 | 1545 | 950 | 925 | 831 | 756 | 753 | 739 | 730 | 594 | 498 | 490 | 479 | 385 | 380 | 373 | 317 | 273 | 262 | 105 | 104 |  |  |  |  |  |  |
| Score/MB | 486 | 1521 | 826 | 388 | 946 | 779 | 374 | 955 | 1042 | 492 | 385 | 531 | 63 |  | 42 | 990 | 75 | 204 | 537 | 541 | 396 | 899 | 12 | 1376 | 363 |  | 932 | 568 | 987 |  | 29 | 134 | 3 | 8 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 34 | 45 | 43 | 49 | 53 | 52 | 61 | 52 | 81 | 68 | 68 | 64 | 80 | 82 | 86 | 100 | 114 | 131 | 238 | 235 | 31 | 345 |  |  | 82 | 7 |
### macos-arm64
| Engine | v8 | dune | bun | deno | bare | node | spidermonkey | spiderfire | mozjs | graaljs | hermes | jjs | primjs | txiki.js | rquickjs | quickjs-ng | quickjs | llrt | ladybird | duktape | njs | quickjs-emscripten | mujs | goja | xst | ringo | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.32 | 0.10.2 | 1.2.23 | 2.5.3 |  | 24.9.0 | 144.0 |  |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 |  | 0.10.1 | 2025.09.13 | 0.7.0.beta |  | 2.99.99 | 0.9.2 |  | 1.3.5 |  | 16.9.1 | 4.0.0 | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 25.9M | 44.3M | 57.3M | 87.4M | 32.9M | 87.5M | 131.8M | 40M | 28.9M | 193.9M | 13.9M | 0 | 1.5M | 3.4M | 1.2M | 3.6M | 837K | 10.6M | 41.5M | 431.4K | 2M | 0 | 411.6K | 11.9M | 1.5M | 0 | 11.9M | 1.1M | 91.6M | 482.8K | 7.4M | 0 | 8.8M | 0 |
| Exe size | 25.9M | 44.3M | 57.3M | 87.4M | 32.9M | 87.5M | 65.9M | 40M | 28.9M | 118.5K | 7M | 0 | 1.5M | 3.4M | 1.2M | 1.8M | 837K | 10.6M | 41.5M | 431.4K | 1.5M | 0 | 411.6K | 11.9M | 1.5M | 0 | 11.9M | 1.1M | 752.1K | 482.8K | 7.4M | 0 | 8.8M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7M | 0 | 0 | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 | 0 | 0 |
| Richards | 41522 | 50185 | 41109 | 48103 | 42274 | 35736 | 15374 | 15505 | 9521 | 24867 | 1259 | 448 | 1206 | 1272 | 1003 | 1088 | 1024 | 802 | 892 | 537 | 688 | 495 | 372 | 331 | 110 | 146 | 91 | 26 |  | 217 | 42 |  |  |  |
| DeltaBlue | 126497 | 76082 | 61880 | 92935 | 95455 | 96645 | 18004 | 15227 | 10731 | 25839 | 1123 | 964 | 1264 | 1241 | 1033 | 789 | 1030 | 1030 | 747 | 630 | 823 | 586 | 564 | 392 | 202 | 196 | 93 | 34 |  | 241 | 56 |  |  |  |
| Crypto | 60400 | 54622 | 68643 | 52909 | 53118 | 56516 | 26527 | 20161 | 16869 | 32293 | 1297 | 11922 | 1746 | 1127 | 1008 | 935 | 817 | 664 | 1552 | 1256 | 1196 | 542 | 289 | 182 | 425 | 133 | 111 | 40 |  | 264 | 67 |  |  |  |
| RayTrace | 155398 | 91389 | 154732 | 85321 | 57349 | 76811 | 49949 | 36037 | 41472 | 1917 | 1986 | 811 | 1889 | 1810 | 1391 | 1347 | 1084 | 1457 | 1351 | 1060 | 790 | 692 | 915 | 404 | 666 | 652 | 218 | 40 |  | 311 | 171 |  |  |  |
| EarleyBoyer | 115536 | 98525 | 69430 | 86010 | 75789 | 79822 | 51181 | 43868 | 43016 | 34184 | 4186 | 1148 | 1162 | 2883 | 2191 | 2226 | 2069 | 2274 | 1862 | 1178 | 1987 | 1270 | 1031 | 773 | 395 | 633 | 222 | 83 |  |  | 132 |  |  |  |
| RegExp | 14001 | 13910 | 23184 | 11160 | 12122 | 10102 | 11989 | 11863 | 9264 | 1144 | 657 | 738 | 307 | 290 | 248 | 250 | 252 | 320 | 102 | 247 | 173 | 217 | 322 | 289 | 315 | 409 | 117 | 13 |  |  |  |  |  |  |
| Splay | 51714 | 38219 | 29728 | 37608 | 40012 | 28294 | 28571 | 16844 | 13788 | 1880 | 3745 | 1718 | 4494 | 2991 | 3056 | 3248 | 2855 | 3025 | 2141 | 2226 | 1145 | 1745 | 1426 | 909 | 569 | 758 | 429 | 143 |  |  | 214 |  |  |  |
| NavierStokes | 37990 | 36989 | 28379 | 34726 | 36545 | 31609 | 20862 | 20182 | 17407 | 25770 | 1233 | 7285 | 3855 | 1952 | 1735 | 2007 | 1536 | 1043 | 1942 | 1437 | 1447 | 845 | 729 | 298 | 1048 | 165 | 181 | 63 |  |  | 107 |  |  |  |
| Score | 59481 | 49650 | 49610 | 47357 | 44898 | 42583 | 24600 | 20430 | 16957 | 9652 | 1615 | 1606 | 1537 | 1411 | 1196 | 1186 | 1099 | 1079 | 1013 | 897 | 862 | 677 | 610 | 394 | 383 | 308 | 159 | 44 |  |  |  |  |  |  |
| Score/MB | 2295 | 1121 | 866 | 542 | 1366 | 486 | 186 | 510 | 586 | 49 | 116 |  | 1021 | 420 | 999 | 326 | 1344 | 101 | 24 | 2129 | 427 |  | 1517 | 33 | 259 |  | 13 | 41 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 32 | 38 | 37 | 39 | 41 | 42 | 43 | 43 | 58 | 46 | 54 | 54 | 56 | 84 | 89 | 103 | 157 | 647 |  | 35 | 222 |  |  |  |
### windows
| Engine | v8 | JavaScriptCore | bare | dune | bun | deno | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs-pgo | rquickjs | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.32 |  |  | 0.10.2 | 1.2.23 | 2.5.3 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 61M | 82.1M | 139.6M | 148.2M | 120.8M | 15.6M | 53.7M | 77.1M | 197.1M | 115.9M | 8.9M | 43M | 45.6M | 6.8M | 10.2M | 9M | 0 | 8.5M | 8.6M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 342.5K | 26.1M | 49.1M | 113.6M | 112.3M | 85.5M | 342.9K | 33.8M | 42.6M | 349.1K | 3M | 1M | 5.7M | 13.1M | 1.6M | 1M | 1.2M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 124.9M | 34.9M | 33M | 26M | 35.9M | 35.3M | 15.3M | 19.9M | 34.4M | 196.7M | 112.9M | 7.9M | 37.3M | 32.5M | 5.2M | 9.2M | 7.8M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 37992 | 35171 | 32704 | 32841 | 34910 | 35111 | 32721 | 23677 | 13379 | 13136 | 35246 | 688 | 648 | 447 | 381 | 507 | 438 | 433 | 351 | 240 | 205 | 251 | 179 | 101 | 54 | 48 |  | 25 |  | 123 |
| DeltaBlue | 106814 | 45800 | 76485 | 79156 | 39506 | 79183 | 73093 | 25224 | 13369 | 12820 | 28900 | 615 | 517 | 400 | 366 | 497 | 462 | 456 | 386 | 339 | 238 | 352 | 225 | 116 | 49 | 43 |  | 29 |  | 155 |
| Crypto | 37897 | 47528 | 41343 | 41504 | 43823 | 41349 | 40447 | 30705 | 20252 | 18167 | 19786 | 782 | 603 | 419 | 420 | 483 | 323 | 312 | 418 | 179 | 303 | 185 | 111 | 91 | 58 | 73 |  | 36 |  | 150 |
| RayTrace | 109666 | 104190 | 70672 | 71039 | 100195 | 67265 | 61197 | 37813 | 28137 | 26909 | 3214 | 939 | 592 | 756 | 623 | 454 | 597 | 576 | 451 | 470 | 453 | 490 | 226 | 265 | 126 | 134 |  | 86 |  | 443 |
| EarleyBoyer | 85011 | 61235 | 68357 | 75225 | 56069 | 66326 | 70491 | 39527 | 40142 | 36157 | 27099 | 2206 | 1081 | 1143 | 1013 | 996 | 953 | 934 | 868 | 597 | 526 | 628 | 456 | 296 | 120 | 145 |  | 77 |  | 517 |
| RegExp | 9839 | 18820 | 9446 | 9680 | 17512 | 9661 | 9628 | 9537 | 9056 | 8620 | 1103 | 411 | 190 | 195 | 202 | 160 | 153 | 158 | 178 | 199 | 109 | 245 | 198 | 272 | 87 | 43 |  |  |  |  |
| Splay | 42514 | 34821 | 38667 | 30706 | 32931 | 33974 | 30486 | 23657 | 23852 | 14090 | 2524 | 2340 | 1387 | 1420 | 1311 | 1205 | 1220 | 1220 | 1247 | 1162 | 1016 | 628 | 872 | 497 | 309 | 185 |  | 128 |  | 835 |
| NavierStokes | 38545 | 33734 | 38655 | 38545 | 33734 | 38507 | 38732 | 35171 | 22002 | 21919 | 23150 | 1057 | 1535 | 734 | 707 | 548 | 726 | 760 | 745 | 477 | 1068 | 478 | 185 | 150 | 112 | 166 |  | 57 |  | 305 |
| Score | 46826 | 42576 | 40369 | 40040 | 40039 | 39945 | 38417 | 26132 | 19324 | 17273 | 10155 | 956 | 691 | 582 | 537 | 526 | 516 | 514 | 496 | 382 | 378 | 372 | 249 | 190 | 95 | 89 |  |  |  |  |
| Score/MB | 757 | 339 | 661 | 487 | 286 | 269 | 317 | 1674 | 359 | 224 | 51 | 8 | 77 | 13 | 11 | 77 | 50 | 56 |  | 44 | 43 | 43 | 12 | 1 | 1 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 55 | 59 | 60 | 66 | 67 | 68 | 62 | 83 | 84 | 77 | 124 | 150 | 256 | 279 | 132 | 377 |  | 81 |
