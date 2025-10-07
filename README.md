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


## Engine & Runtime (35/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47782<br>57.9M<br>825/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46846<br>99.1M<br>472/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46633<br>31.3M<br>1489/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41571<br>108.3M<br>383/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40654<br>43M<br>945/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40361<br>52.2M<br>772/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39446<br>106.5M<br>370/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37441<br>40.7M<br>920/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19604<br>19.3M<br>1015/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19075<br>39.8M<br>479/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17201<br>44.7M<br>385/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17013<br>32M<br>530/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9819<br>199.4M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2341<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1508<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 918<br>982.4K<br>956/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 913<br>12.3M<br>74/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 816<br>4.1M<br>200/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 742<br>1.4M<br>527/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>1.9M<br>397/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 732<br>1.4M<br>526/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 714<br>831.3K<br>879/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 611<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 496<br>0<br>0/M | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 495<br>370.4K<br>1368/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 488<br>1.3M<br>361/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 390<br>685K<br>583/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 385<br>422.8K<br>932/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 372<br>386.8K<br>984/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 306<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 269<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 260<br>1.9M<br>133/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 186<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 132<br>13.2M<br>9/M | ✅unix<br>✅macArm<br>❌windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K<br>0/M | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M<br>0/M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M<br>0/M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/7/2025, 6:42:04 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | deno | bare | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs-pgo | njs | rquickjs | primjs | ladybird | duktape | quickjs-ng | mujs-one | mujs-pgo | mujs | xst | JerryScript | nova | quickjs-emscripten | ringo | jint | kiesel | boa | engine262 | goja | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.0 | 1.2.23 |  | 2.5.3 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  | 0.9.2 |  |  |  | 2.99.99 | 0.10.1 |  |  | 1.3.8 | 16.9.1 | 3.0.0 |  |  | 4.0.0 |  | 0.1.0.dev |  | 0.0.1 |  |  |  |
| Total size | 57.9M | 99.1M | 31.3M | 108.3M | 43M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.9M | 1.4M | 831.3K | 46.5M | 370.4K | 1.3M | 685K | 422.8K | 386.8K | 1.9M | 454.2K | 8.5M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Exe size | 833.3K | 99.1M | 31.3M | 108.3M | 43M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.9M | 1.4M | 831.3K | 46.5M | 370.4K | 1.3M | 685K | 422.8K | 386.8K | 1.9M | 454.2K | 8.5M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Dll size | 57.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37812 | 39842 | 41628 | 34942 | 31955 | 34730 | 32397 | 32488 | 23310 | 12892 | 14523 | 13115 | 35641 | 11844 | 1108 | 801 | 712 | 712 | 576 | 564 | 580 | 574 | 534 | 290 | 391 | 245 | 258 | 225 | 90 | 262 | 27 | 350 | 155 | 100 | 81 | 60 |  | 195 |  |  |
| DeltaBlue | 109862 | 51982 | 56604 | 80142 | 75566 | 80102 | 72432 | 73246 | 24166 | 13515 | 12900 | 12966 | 27082 | 236 | 1056 | 716 | 693 | 677 | 572 | 545 | 570 | 595 | 478 | 325 | 383 | 351 | 356 | 321 | 162 | 274 | 31 | 389 | 195 | 111 | 70 | 54 |  | 241 |  |  |
| Crypto | 38941 | 49219 | 51462 | 41822 | 41411 | 41544 | 41454 | 41372 | 31550 | 20206 | 17544 | 17985 | 16900 | 8458 | 1362 | 771 | 677 | 588 | 524 | 874 | 552 | 509 | 875 | 796 | 407 | 188 | 189 | 183 | 324 | 305 | 38 | 427 | 150 | 96 | 79 | 79 |  | 122 |  |  |
| RayTrace | 113440 | 117954 | 119804 | 70373 | 72371 | 72075 | 65563 | 56165 | 32157 | 27574 | 27177 | 28063 | 4127 | 1098 | 1530 | 917 | 1196 | 1037 | 920 | 682 | 885 | 877 | 732 | 575 | 574 | 523 | 532 | 480 | 496 | 340 | 94 | 459 | 477 | 256 | 169 | 164 |  | 271 |  |  |
| EarleyBoyer | 87497 | 66798 | 67318 | 74394 | 68716 | 75016 | 70048 | 68550 | 7098 | 41288 | 35968 | 36840 | 30719 | 729 | 3330 | 1440 | 1864 | 1728 | 1328 | 1677 | 1219 | 1324 | 908 | 541 | 938 | 494 | 523 | 481 | 321 |  | 85 | 862 | 575 | 281 | 170 | 185 |  | 497 |  |  |
| RegExp | 10574 | 20345 | 19036 | 10142 | 10274 | 9961 | 9761 | 8775 | 7659 | 8563 | 8938 | 8628 | 1212 | 544 | 547 | 236 | 265 | 224 | 213 | 116 | 220 | 227 | 64 | 130 | 160 | 209 | 232 | 195 | 95 |  |  | 177 | 415 | 251 | 123 | 48 |  | 206 |  |  |
| Splay | 41520 | 35726 | 34406 | 37355 | 37853 | 29353 | 34707 | 30355 | 19174 | 23237 | 12246 | 11750 | 2287 | 5916 | 3338 | 2397 | 2214 | 1765 | 2092 | 2102 | 2013 | 1644 | 1304 | 1267 | 1296 | 1296 | 901 | 1305 | 349 |  | 138 | 1284 | 860 | 475 | 390 | 198 |  | 862 |  |  |
| NavierStokes | 38545 | 39731 | 34918 | 38397 | 38584 | 38545 | 38732 | 38249 | 36618 | 21980 | 21793 | 21898 | 15061 | 14803 | 1806 | 1531 | 1110 | 982 | 980 | 1215 | 944 | 896 | 1553 | 944 | 470 | 476 | 477 | 477 | 836 |  | 59 | 701 | 174 | 158 | 145 | 176 |  | 201 |  |  |
| Score | 47782 | 46846 | 46633 | 41571 | 40654 | 40361 | 39446 | 37441 | 19604 | 19075 | 17201 | 17013 | 9819 | 2341 | 1508 | 918 | 913 | 816 | 742 | 741 | 732 | 714 | 611 | 495 | 488 | 390 | 385 | 372 | 260 |  |  | 496 | 306 | 186 | 132 | 104 |  | 269 |  |  |
| Score/MB | 825 | 472 | 1489 | 383 | 945 | 772 | 370 | 920 | 1015 | 479 | 385 | 530 | 49 |  | 41 | 956 | 74 | 200 | 527 | 397 | 526 | 879 | 13 | 1368 | 361 | 583 | 932 | 984 | 133 |  |  |  |  | 2 | 9 | 3 |  | 20 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 45 | 34 | 46 | 44 | 50 | 54 | 61 | 53 | 53 | 82 | 70 | 67 | 83 | 81 | 86 | 133 | 31 | 353 | 63 | 100 | 146 | 188 | 240 |  | 114 | 82 | 7 |
### macos-arm64
| Engine | bun | JavaScriptCore | v8 | deno | dune | bare | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | llrt | rquickjs | quickjs | ladybird | duktape | mujs | xst | JerryScript | nova | engine262 | njs | quickjs-emscripten | goja | ringo | jint | kiesel | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.3.39 | 2.5.3 | 0.10.2 |  | 24.9.0 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 | 0.7.0.beta |  | 2025.09.13 |  | 2.99.99 | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.0.1 | 0.9.2 |  |  | 4.0.0 |  | 0.1.0.dev |  |  |
| Total size | 57.3M | 78.9M | 26M | 87.4M | 44.3M | 32.8M | 87.5M | 131.8M | 28.9M | 40M | 193.9M | 0 | 13.9M | 1.5M | 3.4M | 3.6M | 10.6M | 1.2M | 837K | 41.5M | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 2M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 60.2M |
| Exe size | 57.3M | 736.3K | 26M | 87.4M | 44.3M | 32.8M | 87.5M | 65.9M | 28.9M | 40M | 118.5K | 0 | 7M | 1.5M | 3.4M | 1.8M | 10.6M | 1.2M | 837K | 41.5M | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 1.5M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 59.6M |
| Dll size | 0 | 78.2M | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7M | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 51220 | 48519 | 44456 | 60155 | 56797 | 43944 | 45229 | 15480 | 15607 | 15360 | 35913 | 19056 | 1371 | 1184 | 1335 | 1119 | 966 | 977 | 1066 | 905 | 536 | 373 | 109 | 209 | 41 |  | 716 | 579 | 332 | 200 | 186 | 139 |  |  |
| DeltaBlue | 74865 | 72313 | 128990 | 110648 | 106311 | 108896 | 103719 | 18116 | 17852 | 17283 | 52207 | 448 | 1189 | 1267 | 1295 | 1088 | 1140 | 982 | 1063 | 776 | 636 | 567 | 212 | 241 | 58 |  | 804 | 657 | 393 | 258 | 206 | 133 |  |  |
| Crypto | 69983 | 75322 | 60245 | 59550 | 58592 | 59023 | 58591 | 26384 | 22824 | 22200 | 45158 | 12254 | 1303 | 1775 | 1168 | 1161 | 696 | 1027 | 843 | 1592 | 1334 | 300 | 428 | 260 | 68 |  | 1192 | 565 | 185 | 135 | 170 | 147 |  |  |
| RayTrace | 180853 | 195061 | 159542 | 99455 | 100713 | 94127 | 90723 | 48790 | 46249 | 39476 | 2194 | 2656 | 2349 | 2122 | 2050 | 1500 | 1820 | 1414 | 1171 | 1377 | 1037 | 917 | 659 | 312 | 175 |  | 1068 | 785 | 427 | 747 | 400 | 315 |  |  |
| EarleyBoyer | 99884 | 106355 | 113605 | 99019 | 109448 | 92241 | 94199 | 51762 | 45875 | 41279 | 42800 | 1322 | 5211 | 3688 | 3219 | 2548 | 2817 | 2183 | 2198 | 1853 | 1196 | 1075 | 419 |  | 135 |  | 2504 | 1384 | 814 | 704 | 434 | 314 |  |  |
| RegExp | 29577 | 29304 | 14169 | 13637 | 14155 | 14245 | 14379 | 12456 | 11194 | 11127 | 1600 | 878 | 715 | 317 | 306 | 276 | 322 | 265 | 273 | 103 | 248 | 320 | 311 |  |  |  | 209 | 244 | 295 | 562 | 219 | 184 |  |  |
| Splay | 42693 | 40477 | 53116 | 47852 | 38309 | 51372 | 43883 | 30013 | 17847 | 17162 | 4040 | 2001 | 3981 | 2760 | 3281 | 3330 | 3855 | 2903 | 3219 | 2264 | 2133 | 1031 | 534 |  | 216 |  | 1984 | 1958 | 1141 | 1015 | 567 | 642 |  |  |
| NavierStokes | 39248 | 31578 | 39138 | 38249 | 37618 | 38912 | 39138 | 21284 | 21306 | 21221 | 30213 | 10801 | 1511 | 3894 | 2106 | 2049 | 1154 | 1744 | 1646 | 1983 | 1445 | 706 | 1057 |  | 107 |  | 1788 | 912 | 312 | 196 | 262 | 274 |  |  |
| Score | 62746 | 61526 | 60706 | 56051 | 54649 | 53766 | 52534 | 24919 | 22125 | 21075 | 14089 | 3023 | 1803 | 1704 | 1518 | 1336 | 1241 | 1192 | 1172 | 1035 | 900 | 590 | 385 |  |  |  | 1039 | 751 | 415 | 377 | 279 | 233 |  |  |
| Score/MB | 1095 | 780 | 2338 | 641 | 1233 | 1639 | 600 | 189 | 764 | 526 | 72 |  | 129 | 1132 | 452 | 367 | 117 | 996 | 1433 | 24 | 2136 | 1467 | 261 |  |  |  | 515 |  | 32 |  | 3 | 18 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 32 | 29 | 34 | 37 | 40 | 40 | 40 | 40 | 58 | 46 | 56 | 89 | 34 | 219 |  | 48 | 50 | 82 | 90 | 102 | 113 |  |  |
### windows
| Engine | bun | deno | dune | node | JavaScriptCore | v8 | ChakraCore | spiderfire | spidermonkey | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs-pgo | rquickjs | mujs-pgo | duktape | mujs | xst | nova | goja | boa | engine262 | jint | rhino | quickjs-emscripten |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 2.5.3 | 0.10.2 | 24.9.0 |  | 14.3.39 | 1.11.24.0 |  | 144.0 | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  | 2.7.0 | 1.3.8 |  |  |  |  | 0.0.1 |  |  |  |
| Total size | 139.6M | 148.2M | 82.1M | 120.8M | 125.2M | 61.9M | 15.6M | 80.6M | 52.6M | 197M | 89.6M | 8.9M | 42.7M | 45.6M | 6.4M | 10.2M | 9M | 8.3M | 8.2M | 8.2M | 6.5M | 17.5M | 20.5M | 43.8M | 0 | 99.1M | 0 | 0 |
| Exe size | 113.6M | 112.3M | 49.1M | 85.5M | 342.5K | 29.5M | 334K | 42.6M | 33.8M | 339K | 3M | 1M | 4.1M | 13.1M | 1.2M | 1M | 1.2M | 428K | 329.5K | 393.5K | 1.3M | 8.3M | 13.3M | 27.4M | 0 | 68.8M | 0 | 0 |
| Dll size | 26M | 35.9M | 33M | 35.3M | 124.9M | 32.4M | 15.3M | 37.9M | 18.8M | 196.7M | 86.6M | 7.9M | 38.6M | 32.5M | 5.2M | 9.2M | 7.8M | 7.8M | 7.8M | 7.8M | 5.2M | 9.2M | 7.2M | 16.5M | 0 | 30.3M | 0 | 0 |
| Richards | 35877 | 33833 | 34705 | 32453 | 33932 | 27140 | 23539 | 13672 | 9750 | 35613 | 673 | 610 | 446 | 379 | 504 | 427 | 428 | 253 | 199 | 237 |  | 23 | 187 | 48 |  | 105 |  | 363 |
| DeltaBlue | 44431 | 79785 | 79434 | 73358 | 41271 | 85339 | 24199 | 12741 | 10453 | 26751 | 612 | 517 | 389 | 350 | 490 | 456 | 440 | 352 | 251 | 344 |  | 27 | 226 | 41 |  | 110 |  | 392 |
| Crypto | 46110 | 39115 | 41464 | 38653 | 44406 | 31164 | 31921 | 18025 | 16889 | 19785 | 767 | 599 | 409 | 363 | 465 | 316 | 321 | 185 | 302 | 159 |  | 36 | 113 | 71 |  | 90 |  | 423 |
| RayTrace | 96029 | 66451 | 67857 | 64897 | 96347 | 84951 | 42021 | 27057 | 26734 | 3001 | 867 | 586 | 695 | 609 | 516 | 589 | 590 | 403 | 437 | 460 |  | 84 | 227 | 132 |  | 261 |  | 449 |
| EarleyBoyer | 47838 | 72004 | 74219 | 68901 | 48590 | 65578 | 38473 | 36398 | 39431 | 24310 | 2035 | 1039 | 1100 | 989 | 989 | 906 | 939 | 561 | 490 | 541 |  | 75 | 444 | 129 |  | 290 |  | 850 |
| RegExp | 17149 | 9761 | 9670 | 9546 | 15788 | 7509 | 9455 | 8758 | 8676 | 932 | 386 | 185 | 195 | 200 | 158 | 153 | 98 | 235 | 101 | 185 |  |  | 192 | 42 |  | 269 |  | 177 |
| Splay | 33664 | 33591 | 29247 | 30510 | 25115 | 33232 | 19990 | 14098 | 20870 | 3150 | 2112 | 1387 | 1366 | 1341 | 1141 | 1198 | 1198 | 1072 | 991 | 1107 |  | 126 | 722 | 174 |  | 490 |  | 1237 |
| NavierStokes | 33390 | 38507 | 38321 | 38584 | 32467 | 33538 | 34577 | 21941 | 22045 | 21263 | 985 | 1512 | 728 | 710 | 528 | 738 | 748 | 467 | 1069 | 466 |  | 57 | 189 | 164 |  | 148 |  | 742 |
| Score | 39966 | 39865 | 39755 | 38294 | 37301 | 36802 | 25730 | 17393 | 17080 | 9810 | 904 | 678 | 566 | 522 | 522 | 508 | 483 | 381 | 369 | 364 |  |  | 244 | 86 |  | 188 |  | 497 |
| Score/MB | 286 | 269 | 484 | 317 | 297 | 594 | 1649 | 215 | 324 | 49 | 10 | 75 | 13 | 11 | 82 | 49 | 53 | 46 | 45 | 44 |  |  | 11 | 1 |  | 1 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 55 | 61 | 60 | 67 | 68 | 79 | 81 | 87 | 87 | 135 | 382 | 123 | 291 |  | 148 | 82 | 63 |
