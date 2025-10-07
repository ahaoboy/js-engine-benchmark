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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48653<br>31.3M<br>1554/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48231<br>99.1M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47438<br>57.9M<br>819/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 42319<br>43M<br>984/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42067<br>108.3M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40636<br>52.2M<br>778/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39776<br>106.5M<br>373/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37961<br>40.7M<br>933/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20070<br>19.3M<br>1039/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19338<br>39.8M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16987<br>32M<br>530/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16987<br>44.7M<br>380/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12159<br>199.4M<br>60/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2862<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1542<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 945<br>982.4K<br>985/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 926<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>4.1M<br>204/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 757<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 742<br>1.9M<br>397/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 740<br>831.3K<br>911/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 736<br>1.4M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 633<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 505<br>370.4K<br>1396/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 491<br>1.3M<br>363/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 490<br>0<br>0/M | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 398<br>422.8K<br>963/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 354<br>386.8K<br>937/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 299<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>1.9M<br>135/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 192<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 135<br>13.2M<br>10/M | ✅unix<br>✅macArm<br>❌windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K<br>0/M | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M<br>0/M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M<br>0/M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/7/2025, 8:53:32 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | bare | deno | dune | node | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs-pgo | njs | primjs | rquickjs | ladybird | duktape | quickjs-ng | mujs-pgo | mujs-one | mujs | xst | JerryScript | nova | quickjs-emscripten | ringo | jint | kiesel | boa | engine262 | goja | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 |  | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  | 0.9.2 |  |  |  | 2.99.99 | 0.10.1 |  |  | 1.3.8 | 16.9.1 | 3.0.0 |  |  | 4.0.0 |  | 0.1.0.dev |  | 0.0.1 |  |  |  |
| Total size | 31.3M | 99.1M | 57.9M | 43M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 32M | 44.7M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.9M | 831.3K | 1.4M | 46.5M | 370.4K | 1.3M | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Exe size | 31.3M | 99.1M | 833.3K | 43M | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 32M | 44.7M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.9M | 831.3K | 1.4M | 46.5M | 370.4K | 1.3M | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42256 | 41215 | 38031 | 41332 | 35196 | 35143 | 31691 | 32594 | 23543 | 12973 | 12762 | 13584 | 35637 | 13277 | 1126 | 806 | 714 | 691 | 572 | 567 | 623 | 500 | 539 | 290 | 391 | 275 | 244 | 226 | 89 | 279 | 29 | 340 | 119 | 104 | 81 | 59 |  | 201 |  |  |
| DeltaBlue | 58726 | 55294 | 109591 | 75447 | 81530 | 79666 | 75414 | 71923 | 24571 | 13640 | 12767 | 13045 | 39102 | 211 | 1062 | 731 | 696 | 682 | 582 | 539 | 611 | 565 | 468 | 324 | 379 | 363 | 360 | 321 | 160 | 285 | 35 | 389 | 203 | 110 | 72 | 54 |  | 240 |  |  |
| Crypto | 51548 | 49091 | 38696 | 41657 | 41887 | 41107 | 41299 | 41409 | 31385 | 20497 | 17193 | 17774 | 14899 | 8532 | 1366 | 783 | 677 | 598 | 533 | 883 | 531 | 560 | 882 | 796 | 409 | 188 | 189 | 182 | 326 | 302 | 37 | 407 | 150 | 98 | 80 | 80 |  | 121 |  |  |
| RayTrace | 120544 | 119434 | 111886 | 72445 | 72371 | 72741 | 66599 | 53817 | 36037 | 26808 | 28091 | 27030 | 5808 | 1535 | 1557 | 951 | 1180 | 1070 | 917 | 682 | 876 | 882 | 789 | 580 | 575 | 539 | 519 | 488 | 496 | 347 | 105 | 458 | 483 | 252 | 176 | 163 |  | 270 |  |  |
| EarleyBoyer | 68176 | 69598 | 85573 | 69738 | 72801 | 75131 | 69863 | 69090 | 7107 | 41569 | 37171 | 36040 | 39528 | 1989 | 3388 | 1540 | 1897 | 1757 | 1389 | 1671 | 1387 | 1270 | 996 | 603 | 956 | 563 | 535 | 514 | 324 |  | 90 | 857 | 545 | 289 | 179 | 191 |  | 500 |  |  |
| RegExp | 20315 | 20953 | 10385 | 10354 | 10173 | 10021 | 10122 | 8775 | 7811 | 9038 | 8848 | 8801 | 1264 | 964 | 552 | 240 | 267 | 226 | 219 | 116 | 236 | 228 | 65 | 134 | 156 | 243 | 224 | 200 | 95 |  |  | 180 | 454 | 255 | 125 | 49 |  | 209 |  |  |
| Splay | 36687 | 37761 | 41373 | 38904 | 39531 | 30486 | 34772 | 35424 | 20136 | 24048 | 12224 | 11637 | 2488 | 5341 | 3644 | 2491 | 2437 | 1964 | 2218 | 2102 | 1739 | 2163 | 1464 | 1308 | 1392 | 962 | 1132 | 778 | 380 |  | 141 | 1267 | 836 | 544 | 403 | 218 |  | 862 |  |  |
| NavierStokes | 40068 | 39800 | 38655 | 38912 | 38507 | 38694 | 38765 | 38436 | 35989 | 22260 | 21919 | 22067 | 31874 | 11973 | 1840 | 1579 | 1100 | 986 | 985 | 1222 | 890 | 981 | 1528 | 927 | 468 | 476 | 486 | 478 | 870 |  | 59 | 689 | 175 | 162 | 147 | 175 |  | 202 |  |  |
| Score | 48653 | 48231 | 47438 | 42319 | 42067 | 40636 | 39776 | 37961 | 20070 | 19338 | 16987 | 16987 | 12159 | 2862 | 1542 | 945 | 926 | 833 | 757 | 742 | 740 | 736 | 633 | 505 | 491 | 398 | 393 | 354 | 264 |  |  | 490 | 299 | 192 | 135 | 105 |  | 271 |  |  |
| Score/MB | 1554 | 486 | 819 | 984 | 388 | 778 | 373 | 933 | 1039 | 486 | 530 | 380 | 60 |  | 42 | 985 | 75 | 204 | 537 | 397 | 911 | 528 | 13 | 1396 | 363 | 963 | 587 | 937 | 135 |  |  |  |  | 2 | 10 | 3 |  | 20 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 35 | 34 | 45 | 44 | 49 | 52 | 61 | 52 | 52 | 81 | 67 | 67 | 79 | 80 | 85 | 131 | 31 | 346 | 63 | 102 | 142 | 185 | 235 |  | 114 | 80 | 7 |
### macos-arm64
| Engine | bare | dune | v8 | bun | JavaScriptCore | node | deno | mozjs | spiderfire | spidermonkey | graaljs | jjs | hermes | txiki.js | quickjs-ng | primjs | ladybird | rquickjs | llrt | quickjs | duktape | mujs | xst | JerryScript | nova | engine262 | njs | quickjs-emscripten | goja | ringo | jint | kiesel | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 0.10.2 | 14.3.39 | 1.2.23 |  | 24.9.0 | 2.5.3 |  |  | 144.0 | 24.1.2 |  | 0.12.0 | 24.12.0 | 0.10.1 |  |  |  | 0.7.0.beta | 2025.09.13 | 2.99.99 | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.0.1 | 0.9.2 |  |  | 4.0.0 |  | 0.1.0.dev |  |  |
| Total size | 32.8M | 44.3M | 26M | 57.3M | 78.9M | 87.5M | 87.4M | 28.9M | 40M | 131.8M | 193.9M | 0 | 13.9M | 3.4M | 3.6M | 1.5M | 41.5M | 1.2M | 10.6M | 837K | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 2M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 60.2M |
| Exe size | 32.8M | 44.3M | 26M | 57.3M | 736.3K | 87.5M | 87.4M | 28.9M | 40M | 65.9M | 118.5K | 0 | 7M | 3.4M | 1.8M | 1.5M | 41.5M | 1.2M | 10.6M | 837K | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 1.5M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 59.6M |
| Dll size | 0 | 0 | 0 | 0 | 78.2M | 0 | 0 | 0 | 0 | 65.9M | 193.8M | 0 | 7M | 0 | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 39690 | 45663 | 31708 | 35164 | 29608 | 31232 | 37141 | 13528 | 14029 | 11314 | 13542 | 4725 | 890 | 902 | 820 | 981 | 820 | 751 | 697 | 734 | 334 | 261 | 75 | 135 | 39 |  | 494 | 564 | 265 | 130 | 124 | 116 |  |  |
| DeltaBlue | 96162 | 84486 | 95243 | 47169 | 46263 | 74634 | 66958 | 16615 | 14427 | 12212 | 1022 | 324 | 710 | 888 | 789 | 1081 | 681 | 793 | 777 | 707 | 332 | 415 | 145 | 151 | 48 |  | 689 | 628 | 277 | 168 | 156 | 95 |  |  |
| Crypto | 53687 | 44255 | 40790 | 48900 | 51192 | 38411 | 38153 | 20378 | 18016 | 16810 | 14397 | 5674 | 942 | 805 | 824 | 1275 | 1392 | 720 | 454 | 636 | 865 | 208 | 277 | 177 | 60 |  | 956 | 540 | 150 | 121 | 138 | 131 |  |  |
| RayTrace | 65341 | 67265 | 113588 | 106632 | 93091 | 64083 | 54093 | 47063 | 26613 | 33891 | 1142 | 1241 | 1644 | 1283 | 924 | 952 | 1070 | 945 | 1326 | 820 | 827 | 614 | 480 | 240 | 160 |  | 560 | 747 | 301 | 542 | 316 | 267 |  |  |
| EarleyBoyer | 80071 | 90233 | 85331 | 49715 | 50405 | 67884 | 61249 | 44459 | 31484 | 36471 | 11102 | 634 | 3376 | 1941 | 1618 | 1224 | 1524 | 1636 | 1736 | 1332 | 785 | 700 | 297 |  | 127 |  | 1364 | 1361 | 538 | 617 | 349 | 254 |  |  |
| RegExp | 11705 | 13624 | 10723 | 20841 | 16786 | 9418 | 8693 | 10445 | 7622 | 6778 | 827 | 419 | 471 | 213 | 192 | 185 | 91 | 178 | 229 | 172 | 219 | 216 | 227 |  |  |  | 151 | 245 | 253 | 564 | 185 | 159 |  |  |
| Splay | 43728 | 35261 | 36459 | 21414 | 20397 | 23429 | 26664 | 16942 | 11418 | 16827 | 1339 | 568 | 3104 | 2092 | 1966 | 476 | 1805 | 1872 | 2326 | 2104 | 1757 | 641 | 359 |  | 211 |  | 1155 | 1666 | 818 | 823 | 537 | 449 |  |  |
| NavierStokes | 37952 | 35580 | 28938 | 25892 | 30479 | 26995 | 27290 | 16719 | 16505 | 13033 | 12601 | 6525 | 1061 | 1507 | 1478 | 2936 | 1686 | 1111 | 772 | 1142 | 1360 | 501 | 717 |  | 98 |  | 1642 | 828 | 262 | 151 | 214 | 242 |  |  |
| Score | 46219 | 45293 | 43785 | 38639 | 36895 | 35131 | 34460 | 20257 | 16043 | 15987 | 3702 | 1343 | 1226 | 1009 | 904 | 894 | 878 | 839 | 833 | 788 | 652 | 401 | 266 |  |  |  | 719 | 712 | 315 | 298 | 223 | 190 |  |  |
| Score/MB | 1409 | 1022 | 1686 | 674 | 467 | 401 | 394 | 700 | 401 | 121 | 19 |  | 88 | 300 | 248 | 593 | 21 | 701 | 78 | 964 | 1547 | 997 | 180 |  |  |  | 356 |  | 24 |  | 2 | 15 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 49 | 38 | 46 | 50 | 52 | 65 | 50 | 51 | 54 | 51 | 74 | 122 | 44 | 242 |  | 58 | 53 | 95 | 108 | 127 | 131 |  |  |
### windows
| Engine | v8 | bun | deno | dune | JavaScriptCore | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-emscripten | quickjs-ng | rquickjs-pgo | mujs | mujs-pgo | xst | duktape | nova | goja | boa | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 | 1.2.23 | 2.5.3 | 0.10.2 |  | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.7.0.beta |  | 0.10.1 |  | 1.3.8 |  |  | 2.7.0 |  |  |  | 0.0.1 |  |  |
| Total size | 60.5M | 139.6M | 148.2M | 82.1M | 125.2M | 120.8M | 15.6M | 52.6M | 77.1M | 197M | 89.6M | 8.9M | 40.1M | 10.5M | 45.6M | 0 | 6.4M | 10.2M | 8.2M | 8.3M | 6.5M | 8.2M | 17.5M | 20.5M | 43.8M | 0 | 99.1M | 0 |
| Exe size | 29.5M | 113.6M | 112.3M | 49.1M | 342.5K | 85.5M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 1.4M | 13.1M | 0 | 1.2M | 1M | 393.5K | 428K | 1.3M | 329.5K | 8.3M | 13.3M | 27.4M | 0 | 68.8M | 0 |
| Dll size | 31M | 26M | 35.9M | 33M | 124.9M | 35.3M | 15.3M | 18.8M | 34.4M | 196.7M | 86.6M | 7.9M | 36M | 9.1M | 32.5M | 0 | 5.2M | 9.2M | 7.8M | 7.8M | 5.2M | 7.8M | 9.2M | 7.2M | 16.5M | 0 | 30.3M | 0 |
| Richards | 26215 | 35937 | 34854 | 34998 | 31814 | 32047 | 21467 | 11141 | 11777 | 39157 | 775 | 799 | 501 | 470 | 445 | 451 | 606 | 539 | 287 | 290 |  | 222 | 25 | 202 | 52 |  | 115 |  |
| DeltaBlue | 102357 | 39929 | 76247 | 76003 | 44094 | 72551 | 25912 | 12939 | 12774 | 27869 | 637 | 594 | 454 | 445 | 415 | 509 | 544 | 591 | 406 | 414 |  | 261 | 28 | 248 | 43 |  | 132 |  |
| Crypto | 39518 | 40898 | 39088 | 37988 | 42520 | 37415 | 31196 | 18938 | 15283 | 18236 | 1008 | 727 | 517 | 613 | 507 | 532 | 591 | 356 | 206 | 210 |  | 332 | 41 | 117 | 88 |  | 105 |  |
| RayTrace | 90353 | 94349 | 61641 | 63713 | 84285 | 54113 | 48987 | 27454 | 26365 | 3354 | 1078 | 587 | 818 | 598 | 591 | 505 | 510 | 579 | 441 | 451 |  | 464 | 90 | 232 | 139 |  | 287 |  |
| EarleyBoyer | 69824 | 60082 | 61538 | 64373 | 53838 | 59976 | 40830 | 34882 | 32994 | 19630 | 2452 | 1146 | 1272 | 1069 | 1104 | 998 | 1004 | 1003 | 572 | 580 |  | 535 | 81 | 456 | 150 |  | 311 |  |
| RegExp | 9518 | 17439 | 9981 | 9689 | 17041 | 9910 | 10011 | 6176 | 8745 | 941 | 441 | 204 | 226 | 180 | 215 | 199 | 166 | 157 | 240 | 257 |  | 123 |  | 211 | 45 |  | 328 |  |
| Splay | 27308 | 25707 | 29125 | 25409 | 19696 | 25604 | 22549 | 18238 | 12867 | 3622 | 2276 | 1418 | 1461 | 1218 | 1243 | 1276 | 1090 | 1199 | 1154 | 720 |  | 767 | 130 | 752 | 188 |  | 384 |  |
| NavierStokes | 31959 | 28527 | 32945 | 31219 | 32698 | 32500 | 29383 | 21518 | 21242 | 20102 | 1317 | 2032 | 899 | 933 | 878 | 880 | 726 | 931 | 564 | 561 |  | 1236 | 62 | 202 | 214 |  | 165 |  |
| Score | 39183 | 37897 | 37333 | 36551 | 36233 | 35146 | 26319 | 16797 | 16216 | 9865 | 1071 | 780 | 661 | 600 | 588 | 585 | 581 | 573 | 419 | 402 |  | 392 |  | 259 | 96 |  | 204 |  |
| Score/MB | 647 | 271 | 251 | 445 | 289 | 290 | 1687 | 319 | 210 | 50 | 11 | 87 | 16 | 57 | 12 |  | 91 | 55 | 50 | 48 |  | 48 |  | 12 | 2 |  | 2 |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 39 | 51 | 54 | 58 | 57 | 58 | 62 | 64 | 74 | 72 | 130 | 79 | 351 | 118 | 251 |  | 134 | 84 |
