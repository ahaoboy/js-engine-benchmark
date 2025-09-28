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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47896<br>98.9M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47635<br>37M<br>1286/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46771<br>57.8M<br>809/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42283<br>108.3M<br>390/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39782<br>123.4M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39271<br>66.3M<br>592/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38625<br>40.7M<br>950/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20243<br>19.4M<br>1043/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19465<br>40.1M<br>485/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17090<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17063<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12363<br>199.7M<br>61/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3044<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1539<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 929<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 837<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 773<br>831.3K<br>952/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 764<br>1.4M<br>549/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 755<br>1.4M<br>536/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 732<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 636<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 495<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 494<br>2M<br>244/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 488<br>2.1M<br>229/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 388<br>446.6K<br>889/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 377<br>685K<br>563/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 355<br>414.5K<br>877/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| rhino | [rhino](https://github.com/mozilla/rhino) | 323<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 313<br>2.7K<br>118699/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 191<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/28/2025, 1:48:11 PM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | ladybird | quickjs-emscripten | quickjs-ng | duktape | mujs-pgo | mujs-one | mujs | rhino | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.0 | 2.5.2 | 24.9.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 |  |  | 0.10.1 | 2.99.99 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 98.9M | 37M | 57.8M | 108.3M | 123.4M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 0 | 2M | 2.1M | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 98.9M | 37M | 1M | 108.3M | 123.4M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 46.5M | 0 | 2M | 2.1M | 446.6K | 685K | 414.5K | 1.1G | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42193 | 41596 | 38020 | 35168 | 31645 | 32368 | 32513 | 23501 | 13468 | 13796 | 13048 | 35616 | 12151 | 1118 | 712 | 682 | 713 | 629 | 579 | 579 | 511 | 533 | 339 | 391 | 294 | 253 | 243 | 225 | 144 | 164 | 193 | 90 | 105 | 60 | 59 | 272 | 26 |  |  |
| DeltaBlue | 54402 | 57529 | 100056 | 80690 | 71837 | 76499 | 78826 | 25931 | 13462 | 13144 | 12834 | 26837 | 440 | 1054 | 697 | 647 | 679 | 623 | 590 | 572 | 541 | 482 | 390 | 384 | 324 | 329 | 356 | 322 | 193 | 204 | 252 | 162 | 115 | 53 | 56 | 283 | 33 |  |  |
| Crypto | 49300 | 51202 | 38698 | 41841 | 41609 | 41626 | 41411 | 32200 | 20585 | 17745 | 17789 | 14540 | 10518 | 1355 | 690 | 759 | 592 | 562 | 554 | 528 | 885 | 874 | 411 | 405 | 775 | 185 | 187 | 182 | 153 | 148 | 124 | 324 | 91 | 80 | 62 | 305 | 38 |  |  |
| RayTrace | 113440 | 121210 | 110850 | 72741 | 67339 | 66385 | 54926 | 34301 | 27380 | 26566 | 27546 | 10138 | 1431 | 1562 | 1184 | 916 | 1057 | 951 | 904 | 904 | 681 | 783 | 458 | 577 | 569 | 534 | 530 | 483 | 454 | 488 | 272 | 495 | 259 | 163 | 138 | 344 | 102 |  |  |
| EarleyBoyer | 67277 | 68702 | 83951 | 76258 | 71334 | 74239 | 71078 | 7158 | 41912 | 36442 | 36963 | 39867 | 1434 | 3386 | 1892 | 1498 | 1767 | 1422 | 1391 | 1386 | 1677 | 1001 | 857 | 960 | 610 | 561 | 548 | 512 | 568 | 546 | 507 | 324 | 287 | 192 | 137 |  | 85 |  |  |
| RegExp | 21135 | 20274 | 10567 | 10243 | 9961 | 10212 | 8928 | 7945 | 8874 | 8974 | 8775 | 1389 | 836 | 554 | 266 | 226 | 226 | 236 | 227 | 220 | 116 | 66 | 178 | 158 | 134 | 244 | 219 | 200 | 388 | 458 | 211 | 96 | 250 | 49 | 94 |  |  |  |  |
| Splay | 38007 | 36589 | 40835 | 39222 | 35758 | 28155 | 34813 | 20031 | 24431 | 11849 | 12207 | 2834 | 4767 | 3651 | 2428 | 1807 | 1946 | 1844 | 2225 | 2190 | 2092 | 1487 | 1278 | 1418 | 1010 | 955 | 815 | 826 | 887 | 862 | 945 | 380 | 526 | 214 | 317 |  | 136 |  |  |
| NavierStokes | 39920 | 35022 | 38732 | 38617 | 38765 | 38732 | 38469 | 36766 | 22193 | 21963 | 22112 | 24684 | 16027 | 1846 | 1120 | 1288 | 989 | 987 | 968 | 1001 | 1219 | 1533 | 744 | 472 | 929 | 479 | 485 | 472 | 311 | 177 | 203 | 857 | 165 | 175 | 118 |  | 60 |  |  |
| Score | 47896 | 47635 | 46771 | 42283 | 39782 | 39271 | 38625 | 20243 | 19465 | 17090 | 17063 | 12363 | 3044 | 1539 | 929 | 837 | 834 | 773 | 764 | 755 | 732 | 636 | 495 | 494 | 488 | 388 | 377 | 355 | 323 | 313 | 276 | 265 | 191 | 105 | 104 |  |  |  |  |
| Score/MB | 484 | 1286 | 809 | 390 | 322 | 592 | 950 | 1043 | 485 | 335 | 484 | 61 | 2 | 42 | 75 | 196 | 161 | 952 | 549 | 536 | 86 | 13 |  | 244 | 229 | 889 | 563 | 877 |  | 118699 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 42 | 34 | 43 | 48 | 49 | 50 | 52 | 52 | 61 | 80 | 63 | 67 | 67 | 80 | 81 | 86 | 88 | 99 | 113 | 131 | 147 | 235 | 235 | 31 | 356 |  | 7 |
### macos-arm64
| Engine | bun | v8 | deno | node | dune | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | ringo | rhino | xst | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 | 14.2.229 | 2.5.2 | 24.9.0 | 0.10.1 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 | 2025.04.26 | 0.7.0.beta |  |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |
| Total size | 57.1M | 41.3M | 87.5M | 111.9M | 56.8M | 132.6M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 3.8M | 975.9K | 10.6M | 1.2M | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 0 | 1.6M | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 |
| Exe size | 57.1M | 41.3M | 87.5M | 111.9M | 56.8M | 66.3M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 1.9M | 975.9K | 10.6M | 1.2M | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 0 | 1.6M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 1.9M | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 |
| Richards | 52173 | 46277 | 59149 | 44858 | 45755 | 14640 | 14283 | 14735 | 35884 | 20073 | 1304 | 1132 | 1272 | 1140 | 1107 | 967 | 1001 | 905 | 731 | 518 | 665 | 372 | 332 | 214 | 206 | 110 | 175 | 114 | 37 |  | 206 | 42 |  |
| DeltaBlue | 77728 | 133453 | 110483 | 109802 | 104592 | 16761 | 16358 | 15763 | 53589 | 514 | 1179 | 1258 | 1328 | 1093 | 1095 | 1074 | 1037 | 799 | 818 | 576 | 741 | 564 | 330 | 239 | 257 | 203 | 170 | 94 | 43 |  | 230 | 52 |  |
| Crypto | 71228 | 57312 | 58359 | 57055 | 59496 | 25299 | 21930 | 20843 | 42634 | 10989 | 1424 | 1762 | 1175 | 1176 | 1327 | 691 | 1017 | 1613 | 1183 | 1256 | 585 | 296 | 180 | 141 | 134 | 429 | 172 | 109 | 44 |  | 260 | 64 |  |
| RayTrace | 168199 | 153474 | 93165 | 86135 | 90649 | 49727 | 50911 | 42433 | 1464 | 1418 | 2455 | 2149 | 2082 | 1464 | 1203 | 1873 | 1418 | 1274 | 955 | 1019 | 770 | 949 | 465 | 736 | 693 | 675 | 395 | 239 | 43 |  | 325 | 173 |  |
| EarleyBoyer | 93581 | 114667 | 102629 | 96429 | 98922 | 54420 | 49435 | 48410 | 42906 | 937 | 5073 | 3610 | 3128 | 2477 | 2241 | 2844 | 2193 | 1835 | 2486 | 1119 | 1478 | 1034 | 795 | 790 | 695 | 421 | 441 | 229 | 89 |  |  | 139 |  |
| RegExp | 30882 | 14775 | 14971 | 14667 | 13910 | 12497 | 12159 | 12600 | 1855 | 592 | 687 | 321 | 308 | 277 | 276 | 322 | 255 | 102 | 206 | 245 | 245 | 340 | 286 | 606 | 595 | 324 | 218 | 134 | 15 |  |  |  |  |
| Splay | 55935 | 68591 | 54829 | 47811 | 36924 | 28245 | 17415 | 18335 | 3238 | 1357 | 4474 | 4947 | 3134 | 3235 | 2440 | 3936 | 2811 | 2526 | 1944 | 1999 | 1844 | 1469 | 1285 | 1267 | 1064 | 536 | 558 | 581 | 152 |  |  | 221 |  |
| NavierStokes | 40621 | 39731 | 38951 | 40473 | 38507 | 20693 | 19767 | 19472 | 30806 | 5611 | 1562 | 3865 | 2077 | 2119 | 2295 | 1119 | 1684 | 2024 | 1785 | 1441 | 916 | 730 | 312 | 224 | 322 | 1071 | 257 | 221 | 76 |  |  | 107 |  |
| Score | 65010 | 63084 | 57324 | 53413 | 51631 | 24328 | 21954 | 21445 | 13255 | 2259 | 1839 | 1818 | 1502 | 1335 | 1268 | 1235 | 1188 | 1045 | 1023 | 861 | 779 | 621 | 412 | 405 | 403 | 388 | 269 | 180 | 51 |  |  |  |  |
| Score/MB | 1138 | 1529 | 655 | 477 | 909 | 183 | 668 | 462 | 68 |  | 117 | 1033 | 416 | 348 | 1330 | 116 | 993 | 25 | 427 | 1568 |  | 1482 | 32 | 153588 |  | 245 | 3 | 14 | 48 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 37 | 30 | 36 | 37 | 38 | 38 | 40 | 41 | 58 | 47 | 46 | 49 | 56 | 83 | 86 | 80 | 89 | 103 | 143 | 538 |  | 34 | 222 |  |
### windows
| Engine | JavaScriptCore | bun | deno | v8 | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | rquickjs | quickjs-ng | rquickjs-pgo | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.22 | 2.5.2 | 14.2.229 | 0.10.1 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.7.0.beta |  | 0.10.1 |  |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 125.2M | 139.3M | 148.4M | 61.8M | 82M | 120.8M | 15.6M | 54M | 77.1M | 197.1M | 89.6M | 12.8M | 71.8M | 45.6M | 10.5M | 6.8M | 10.2M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 342.5K | 113.3M | 112.5M | 29.4M | 47.4M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 13.1M | 1.4M | 1.6M | 1M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 124.9M | 26M | 35.9M | 32.4M | 34.6M | 35.3M | 15.3M | 20.1M | 34.4M | 196.7M | 86.6M | 7.9M | 66.1M | 32.5M | 9.1M | 5.2M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35482 | 35644 | 33706 | 38031 | 32577 | 32531 | 23179 | 13567 | 12031 | 35619 | 688 | 501 | 446 | 383 | 385 | 516 | 434 | 353 | 255 | 209 | 252 | 183 | 103 | 51 | 48 |  | 19 |  |  |
| DeltaBlue | 48874 | 44233 | 77067 | 107184 | 74700 | 69371 | 23432 | 13230 | 12933 | 30298 | 609 | 460 | 385 | 363 | 368 | 495 | 460 | 391 | 353 | 253 | 335 | 230 | 110 | 49 | 41 |  | 23 |  |  |
| Crypto | 48852 | 45436 | 39198 | 37983 | 41406 | 41081 | 31083 | 20091 | 18048 | 19679 | 744 | 543 | 417 | 425 | 500 | 483 | 317 | 420 | 186 | 306 | 167 | 112 | 90 | 57 | 72 |  | 33 |  |  |
| RayTrace | 94423 | 84433 | 70299 | 108482 | 61789 | 63343 | 43394 | 27528 | 26291 | 2883 | 948 | 567 | 743 | 626 | 605 | 471 | 592 | 457 | 481 | 438 | 415 | 223 | 261 | 125 | 132 |  | 80 |  |  |
| EarleyBoyer | 57110 | 57442 | 73708 | 82760 | 73419 | 66999 | 41450 | 38292 | 36286 | 27770 | 2172 | 1013 | 1108 | 1014 | 993 | 981 | 936 | 857 | 611 | 502 | 532 | 441 | 291 | 120 | 138 |  | 71 |  |  |
| RegExp | 18675 | 17893 | 9680 | 9518 | 9327 | 9680 | 9910 | 8529 | 8784 | 1008 | 404 | 190 | 193 | 200 | 164 | 154 | 148 | 177 | 240 | 101 | 196 | 196 | 274 | 87 | 43 |  |  |  |  |
| Splay | 34984 | 33672 | 33956 | 13448 | 27870 | 30975 | 27935 | 19582 | 14448 | 2915 | 2125 | 1032 | 1434 | 1271 | 1251 | 1004 | 1257 | 1237 | 1176 | 823 | 672 | 725 | 394 | 307 | 183 |  | 131 |  |  |
| NavierStokes | 33586 | 33538 | 38545 | 34246 | 38507 | 38584 | 36358 | 21771 | 21876 | 25770 | 1037 | 1026 | 733 | 711 | 737 | 542 | 738 | 720 | 479 | 890 | 473 | 190 | 148 | 111 | 157 |  | 57 |  |  |
| Score | 42182 | 40346 | 40099 | 39638 | 38243 | 38218 | 27268 | 18517 | 17137 | 10321 | 932 | 589 | 575 | 535 | 532 | 513 | 513 | 495 | 401 | 357 | 343 | 244 | 183 | 94 | 86 |  |  |  |  |
| Score/MB | 336 | 289 | 270 | 641 | 466 | 316 | 1747 | 342 | 222 | 52 | 10 | 46 | 8 | 11 | 50 | 75 | 50 |  | 46 | 41 | 40 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 57 | 59 | 60 | 62 | 67 | 69 | 63 | 78 | 87 | 87 | 124 | 149 | 256 | 290 | 134 | 405 |  |  |
