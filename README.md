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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47377<br>36.8M<br>1286/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46796<br>98.9M<br>473/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46739<br>57.6M<br>811/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41600<br>108.9M<br>382/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39537<br>123.3M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38632<br>66.3M<br>582/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37498<br>40.7M<br>922/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19810<br>19.4M<br>1020/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19513<br>40.1M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17121<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16951<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10876<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2408<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1481<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 907<br>12.3M<br>73/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 815<br>4.3M<br>190/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 806<br>5.2M<br>156/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 748<br>1.4M<br>531/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 736<br>1.4M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 735<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 729<br>831.3K<br>898/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 641<br>2M<br>324/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 614<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 490<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 489<br>2.1M<br>230/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 376<br>446.6K<br>862/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 350<br>685K<br>523/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 332<br>414.5K<br>820/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| rhino | [rhino](https://github.com/mozilla/rhino) | 311<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 298<br>2.7K<br>113011/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 265<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 182<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 101<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/24/2025, 3:20:20 PM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | rquickjs | njs | primjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | rhino | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.22 | 14.2.0 | 2.5.1 | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 36.8M | 98.9M | 57.6M | 108.9M | 123.3M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.5M | 0 | 2.1M | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 36.8M | 98.9M | 1M | 108.9M | 123.3M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.5M | 0 | 2.1M | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 0 | 56.6M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40749 | 40329 | 38105 | 35570 | 32308 | 32146 | 32545 | 23476 | 13150 | 14276 | 12317 | 35740 | 13559 | 1111 | 715 | 679 | 710 | 578 | 570 | 561 | 606 | 582 | 535 | 344 | 259 | 259 | 246 | 223 | 129 | 147 | 200 | 89 | 99 | 61 | 58 | 277 | 25 |  |  |
| DeltaBlue | 57093 | 55142 | 102609 | 78978 | 72492 | 73179 | 74720 | 22233 | 13634 | 13045 | 12873 | 26136 | 264 | 1043 | 690 | 661 | 678 | 584 | 570 | 542 | 592 | 576 | 473 | 386 | 310 | 355 | 349 | 312 | 175 | 188 | 246 | 162 | 112 | 55 | 53 | 285 | 31 |  |  |
| Crypto | 51963 | 48852 | 38569 | 41741 | 41663 | 41653 | 41356 | 31983 | 20478 | 17518 | 17725 | 13989 | 8369 | 1363 | 677 | 735 | 587 | 538 | 545 | 880 | 514 | 378 | 879 | 418 | 780 | 187 | 189 | 183 | 154 | 154 | 122 | 326 | 96 | 80 | 60 | 302 | 38 |  |  |
| RayTrace | 117214 | 113588 | 110110 | 70672 | 66673 | 67857 | 56165 | 35149 | 28359 | 26734 | 28194 | 4938 | 1249 | 1519 | 1192 | 918 | 1023 | 909 | 880 | 680 | 893 | 729 | 740 | 455 | 555 | 394 | 393 | 390 | 448 | 485 | 257 | 498 | 247 | 166 | 131 | 347 | 98 |  |  |
| EarleyBoyer | 69335 | 65686 | 82054 | 73916 | 68841 | 70905 | 68645 | 7033 | 42265 | 36148 | 37408 | 35659 | 803 | 3270 | 1850 | 1343 | 1661 | 1352 | 1243 | 1655 | 1366 | 1173 | 907 | 852 | 573 | 414 | 462 | 416 | 550 | 558 | 477 | 321 | 275 | 184 | 130 |  | 82 |  |  |
| RegExp | 18820 | 20042 | 10515 | 9981 | 9971 | 9961 | 8745 | 7847 | 9019 | 8702 | 8793 | 1183 | 829 | 542 | 263 | 221 | 223 | 217 | 225 | 115 | 222 | 182 | 64 | 177 | 133 | 230 | 206 | 185 | 429 | 398 | 204 | 87 | 245 | 48 | 90 |  |  |  |  |
| Splay | 34259 | 35400 | 41006 | 37950 | 34520 | 27226 | 30795 | 19864 | 23812 | 12232 | 11910 | 2257 | 4885 | 3052 | 2196 | 1669 | 1710 | 2106 | 2070 | 2017 | 1758 | 1563 | 1361 | 1207 | 1278 | 1322 | 758 | 815 | 855 | 908 | 860 | 371 | 422 | 207 | 331 |  | 132 |  |  |
| NavierStokes | 40068 | 39988 | 38765 | 38655 | 38732 | 38803 | 37433 | 36878 | 22238 | 22002 | 21963 | 31874 | 9303 | 1790 | 1074 | 1297 | 975 | 958 | 955 | 1221 | 908 | 929 | 1556 | 723 | 959 | 464 | 483 | 470 | 277 | 150 | 191 | 871 | 162 | 171 | 118 |  | 59 |  |  |
| Score | 47377 | 46796 | 46739 | 41600 | 39537 | 38632 | 37498 | 19810 | 19513 | 17121 | 16951 | 10876 | 2408 | 1481 | 907 | 815 | 806 | 748 | 736 | 735 | 729 | 641 | 614 | 490 | 489 | 376 | 350 | 332 | 311 | 298 | 265 | 261 | 182 | 105 | 101 |  |  |  |  |
| Score/MB | 1286 | 473 | 811 | 382 | 320 | 582 | 922 | 1020 | 487 | 335 | 481 | 54 | 2 | 41 | 73 | 190 | 156 | 531 | 528 | 87 | 898 | 324 | 13 |  | 230 | 862 | 523 | 820 |  | 113011 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 45 | 34 | 44 | 49 | 50 | 53 | 53 | 62 | 53 | 59 | 82 | 63 | 68 | 84 | 86 | 91 | 90 | 105 | 118 | 133 | 145 | 242 | 243 | 31 | 361 |  | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | dune | node | deno | spidermonkey | spiderfire | mozjs | graaljs | primjs | hermes | txiki.js | quickjs-ng | rquickjs | njs | quickjs | jjs | llrt | ladybird | duktape | quickjs-emscripten | mujs | rhino | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.198 | 1.2.22 | 0.10.1 | 24.8.0 | 2.5.1 | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 24.12.0 | 0.8.0 |  | 0.9.2 | 2025.04.26 |  | 0.7.0.beta |  | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |
| Total size | 0.2K | 41.2M | 57.1M | 56.8M | 111.8M | 88M | 132.6M | 46.3M | 32.8M | 194M | 1.8M | 15.7M | 3.6M | 4.1M | 1.2M | 2.4M | 975.9K | 0 | 10.6M | 41.5M | 562.1K | 0 | 429.1K | 0 | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 7.4M | 0 |
| Exe size | 0.2K | 41.2M | 57.1M | 56.8M | 111.8M | 88M | 66.3M | 46.3M | 32.8M | 147.4K | 1.8M | 7.9M | 3.6M | 2.1M | 1.2M | 1.8M | 975.9K | 0 | 10.6M | 41.5M | 562.1K | 0 | 429.1K | 0 | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50560 | 44890 | 32841 | 47559 | 33703 | 37879 | 15812 | 10411 | 14255 | 14460 | 1096 | 936 | 957 | 866 | 868 | 751 | 995 | 590 | 608 | 596 | 447 | 561 | 318 | 182 | 114 | 182 | 196 | 159 | 80 | 30 | 212 | 26 |  |
| DeltaBlue | 70237 | 136230 | 50197 | 108096 | 69569 | 66349 | 16549 | 11848 | 16146 | 1200 | 1205 | 705 | 897 | 821 | 954 | 840 | 854 | 514 | 678 | 560 | 498 | 586 | 469 | 229 | 204 | 217 | 299 | 172 | 73 | 35 | 228 | 41 |  |
| Crypto | 74487 | 58299 | 50546 | 57611 | 40714 | 35717 | 23533 | 18024 | 20906 | 21245 | 1544 | 1144 | 946 | 799 | 899 | 1111 | 950 | 10816 | 501 | 1440 | 1203 | 499 | 249 | 138 | 391 | 136 | 149 | 134 | 98 | 38 | 255 | 53 |  |
| RayTrace | 177819 | 148664 | 113366 | 71113 | 60605 | 63417 | 45287 | 35593 | 35079 | 1270 | 1190 | 1782 | 1468 | 1226 | 1060 | 853 | 758 | 556 | 1459 | 1239 | 1072 | 604 | 856 | 564 | 632 | 600 | 273 | 313 | 187 | 38 | 289 | 144 |  |
| EarleyBoyer | 99353 | 105310 | 67160 | 77526 | 68297 | 59506 | 49688 | 43448 | 37094 | 12081 | 1453 | 3752 | 2119 | 2111 | 1655 | 2404 | 1750 | 718 | 2267 | 1259 | 1124 | 1126 | 1001 | 655 | 395 | 643 | 558 | 362 | 173 | 67 |  | 119 |  |
| RegExp | 29457 | 13651 | 26756 | 11251 | 8974 | 7918 | 11717 | 10979 | 9670 | 1077 | 236 | 476 | 231 | 261 | 184 | 194 | 191 | 553 | 258 | 85 | 198 | 195 | 337 | 525 | 301 | 474 | 263 | 175 | 109 | 12 |  |  |  |
| Splay | 38863 | 63587 | 36903 | 29915 | 19607 | 23967 | 27992 | 13828 | 7603 | 2053 | 3745 | 2822 | 2225 | 2332 | 2714 | 1644 | 1556 | 1499 | 2532 | 1548 | 1271 | 1657 | 697 | 1197 | 560 | 797 | 886 | 455 | 319 | 135 |  | 191 |  |
| NavierStokes | 38912 | 40284 | 37063 | 33357 | 26659 | 26458 | 20545 | 18513 | 16750 | 14633 | 3712 | 1166 | 1574 | 1972 | 1548 | 1782 | 1642 | 421 | 828 | 1398 | 948 | 860 | 694 | 309 | 922 | 185 | 252 | 225 | 180 | 62 |  | 85 |  |
| Score | 61632 | 61137 | 46852 | 45489 | 34158 | 33793 | 23511 | 17707 | 17214 | 4548 | 1358 | 1295 | 1093 | 1074 | 1001 | 975 | 922 | 907 | 883 | 781 | 726 | 648 | 518 | 377 | 370 | 331 | 307 | 229 | 136 | 43 |  |  |  |
| Score/MB | 375731604 | 1483 | 820 | 800 | 305 | 384 | 177 | 382 | 524 | 23 | 771 | 82 | 303 | 260 | 836 | 407 | 967 |  | 83 | 18 | 1322 |  | 1236 |  | 234 | 125525 | 24 | 3 | 10 | 40 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 42 | 35 | 43 | 42 | 48 | 51 | 47 | 53 | 48 | 67 | 51 | 57 | 57 | 84 | 94 | 97 | 101 | 128 | 176 | 700 | 36 | 260 |  |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | rquickjs-pgo | quickjs-ng | llrt | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.198 |  | 1.2.22 | 2.5.1 | 0.10.1 | 24.8.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 |  |  | 0.8.0 | 0.7.0.beta |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.1M | 139.4M | 149.5M | 82.1M | 120.9M | 15.7M | 52.8M | 77.2M | 197M | 89.8M | 12.8M | 43.2M | 9M | 10.2M | 10.1M | 45.7M | 0 | 8.5M | 8.6M | 8.5M | 20.5M | 99.3M | 47.6M | 43.9M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 339.5K | 113.3M | 113.5M | 47.4M | 85.5M | 342.9K | 34M | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 1.2M | 1M | 1.7M | 13.1M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.5M | 124.8M | 26.1M | 36.1M | 34.8M | 35.5M | 15.3M | 18.9M | 34.6M | 196.7M | 86.8M | 7.9M | 37.5M | 7.8M | 9.2M | 8.5M | 32.6M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.5M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 37964 | 35729 | 35867 | 28612 | 32400 | 32598 | 23377 | 13245 | 13687 | 35457 | 674 | 501 | 442 | 433 | 439 | 411 | 373 | 334 | 258 | 211 | 253 | 184 | 98 | 51 | 47 |  | 25 |  |  |
| DeltaBlue | 108281 | 46540 | 44782 | 56352 | 66554 | 71189 | 27988 | 12324 | 11888 | 27854 | 602 | 445 | 391 | 447 | 460 | 387 | 360 | 386 | 357 | 259 | 358 | 219 | 115 | 47 | 42 |  | 30 |  |  |
| Crypto | 38637 | 47997 | 44915 | 41343 | 41448 | 41533 | 33040 | 20287 | 17732 | 19300 | 761 | 527 | 423 | 324 | 324 | 353 | 411 | 420 | 190 | 312 | 170 | 112 | 89 | 57 | 72 |  | 36 |  |  |
| RayTrace | 109962 | 106114 | 95977 | 71261 | 63280 | 60975 | 47608 | 27750 | 26983 | 2369 | 957 | 535 | 733 | 597 | 602 | 585 | 514 | 455 | 528 | 462 | 483 | 221 | 258 | 119 | 131 |  | 86 |  |  |
| EarleyBoyer | 80730 | 62121 | 55968 | 74128 | 72161 | 65462 | 43178 | 41447 | 35862 | 17773 | 2213 | 1001 | 1131 | 962 | 962 | 968 | 839 | 853 | 632 | 533 | 616 | 433 | 283 | 116 | 131 |  | 76 |  |  |
| RegExp | 9880 | 19385 | 17746 | 9680 | 9427 | 8740 | 9910 | 9274 | 8487 | 771 | 413 | 188 | 104 | 164 | 151 | 185 | 175 | 176 | 249 | 109 | 201 | 193 | 271 | 86 | 42 |  |  |  |  |
| Splay | 41251 | 35343 | 32816 | 33779 | 26436 | 27617 | 18865 | 24129 | 12493 | 2071 | 2415 | 992 | 1351 | 1270 | 1288 | 973 | 1270 | 1219 | 1215 | 1027 | 645 | 736 | 359 | 300 | 160 |  | 125 |  |  |
| NavierStokes | 38584 | 33801 | 33687 | 38436 | 38545 | 37915 | 35616 | 22112 | 21771 | 19974 | 996 | 978 | 706 | 761 | 749 | 659 | 701 | 740 | 480 | 1065 | 479 | 184 | 147 | 112 | 165 |  | 56 |  |  |
| Score | 46583 | 43224 | 40749 | 38084 | 37512 | 37011 | 27158 | 19249 | 16832 | 8434 | 947 | 572 | 527 | 524 | 522 | 498 | 497 | 491 | 413 | 387 | 360 | 241 | 179 | 93 | 85 |  |  |  |  |
| Score/MB | 753 | 345 | 292 | 254 | 456 | 306 | 1733 | 364 | 217 | 42 | 10 | 44 | 12 | 58 | 51 | 49 | 10 |  | 48 | 45 | 42 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 59 | 74 | 66 | 68 | 65 | 65 | 63 | 76 | 84 | 84 | 125 | 151 | 261 | 295 | 132 | 381 |  |  |
