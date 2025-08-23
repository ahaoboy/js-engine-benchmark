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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47822<br>57.1M<br>837/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47651<br>98.4M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47497<br>36.4M<br>1303/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bare | [bare](https://github.com/holepunchto/bare) | 41051<br>65.3M<br>628/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39764<br>106.3M<br>374/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39712<br>123.1M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39374<br>66.3M<br>593/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39347<br>40.7M<br>967/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20040<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19031<br>40.1M<br>474/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17104<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17039<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10946<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2343<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1532<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 861<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 822<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 753<br>1.4M<br>535/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 742<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 740<br>1.4M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 721<br>831.3K<br>888/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 568<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 481<br>2.1M<br>226/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 413<br>446.6K<br>946/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 392<br>685K<br>586/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 367<br>414.5K<br>906/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 300<br>2.7K<br>113769/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 266<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/23/2025, 3:47:33 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | rquickjs-pgo | njs | rquickjs | primjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 | 1.2.20 |  |  | 2.4.5 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  | 0.9.2 |  |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 98.4M | 36.4M | 65.3M | 106.3M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 8.4M | 1.4M | 831.3K | 2M | 46.1M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 98.4M | 36.4M | 65.3M | 106.3M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 1.4M | 8.4M | 1.4M | 831.3K | 2M | 46.1M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37671 | 41572 | 40841 | 32160 | 32965 | 32114 | 32587 | 32086 | 23328 | 12246 | 14153 | 13651 | 35768 | 13044 | 1133 | 678 | 710 | 690 | 570 | 565 | 567 | 580 | 580 | 492 | 324 | 289 | 276 | 244 | 218 | 139 | 190 | 90 | 100 | 60 | 58 | 267 | 26 |  | 130 |  |
| DeltaBlue | 110827 | 57734 | 56167 | 78925 | 73431 | 75361 | 75606 | 76723 | 24606 | 13402 | 13098 | 12992 | 24457 | 363 | 1028 | 646 | 682 | 666 | 584 | 546 | 567 | 590 | 574 | 464 | 388 | 326 | 362 | 359 | 312 | 164 | 247 | 164 | 109 | 54 | 54 | 271 | 32 |  | 173 |  |
| Crypto | 41001 | 49150 | 51816 | 41642 | 41388 | 41815 | 41805 | 41241 | 31806 | 19981 | 17179 | 17686 | 12699 | 8224 | 1368 | 579 | 584 | 679 | 537 | 882 | 555 | 516 | 380 | 906 | 411 | 785 | 190 | 190 | 179 | 156 | 122 | 326 | 97 | 80 | 61 | 297 | 31 |  | 135 |  |
| RayTrace | 111220 | 113292 | 117584 | 71631 | 68227 | 66969 | 68301 | 66155 | 35336 | 27574 | 27084 | 27870 | 7062 | 1432 | 1565 | 1149 | 1077 | 910 | 922 | 682 | 893 | 890 | 724 | 555 | 457 | 572 | 534 | 508 | 472 | 476 | 264 | 496 | 254 | 165 | 138 | 350 | 95 |  | 429 |  |
| EarleyBoyer | 84697 | 68229 | 67345 | 70277 | 72753 | 68819 | 73850 | 71882 | 7059 | 40512 | 36395 | 36716 | 25386 | 759 | 3383 | 1877 | 1747 | 1434 | 1348 | 1686 | 1201 | 1319 | 1220 | 757 | 858 | 581 | 541 | 494 | 485 | 571 | 485 | 323 | 283 | 191 | 133 |  | 81 |  | 508 |  |
| RegExp | 10253 | 20750 | 19508 | 10212 | 9738 | 9981 | 10072 | 8866 | 7728 | 8702 | 8866 | 8676 | 1250 | 529 | 551 | 254 | 224 | 222 | 218 | 115 | 226 | 226 | 183 | 64 | 180 | 135 | 240 | 213 | 196 | 415 | 206 | 96 | 245 | 48 | 91 |  |  |  |  |  |
| Splay | 42595 | 35191 | 35147 | 38211 | 33297 | 34275 | 28396 | 34919 | 20202 | 24415 | 11905 | 11629 | 2559 | 3305 | 3517 | 2331 | 1901 | 1791 | 2242 | 2094 | 2163 | 1749 | 1661 | 1276 | 1237 | 929 | 1328 | 1300 | 1278 | 952 | 838 | 381 | 529 | 221 | 335 |  | 89 |  | 723 |  |
| NavierStokes | 38842 | 39920 | 40136 | 38842 | 38765 | 38765 | 38881 | 38436 | 36582 | 22112 | 22112 | 21941 | 32351 | 12268 | 1854 | 931 | 1003 | 1282 | 950 | 1220 | 962 | 889 | 929 | 1513 | 686 | 936 | 479 | 485 | 466 | 172 | 197 | 819 | 161 | 169 | 118 |  | 52 |  | 274 |  |
| Score | 47822 | 47651 | 47497 | 41051 | 39764 | 39712 | 39374 | 39347 | 20040 | 19031 | 17104 | 17039 | 10946 | 2343 | 1532 | 861 | 831 | 822 | 753 | 742 | 740 | 721 | 649 | 568 | 486 | 481 | 413 | 392 | 367 | 300 | 266 | 264 | 189 | 106 | 103 |  |  |  |  |  |
| Score/MB | 837 | 484 | 1303 | 628 | 374 | 322 | 593 | 967 | 1032 | 474 | 335 | 483 | 54 | 2 | 42 | 70 | 161 | 192 | 535 | 87 | 531 | 888 | 329 | 12 |  | 226 | 946 | 586 | 906 | 113769 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 43 | 34 | 46 | 50 | 50 | 53 | 61 | 53 | 53 | 59 | 86 | 63 | 68 | 80 | 82 | 87 | 98 | 116 | 131 | 145 | 238 | 240 | 31 | 397 |  | 88 | 7 |
### macos-arm64
| Engine | bun | v8 | dune | JavaScriptCore | bare | node | deno | mozjs | spidermonkey | spiderfire | graaljs | jjs | hermes | primjs | llrt | txiki.js | quickjs-ng | quickjs | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | ringo | goja | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 14.1.108 | 0.10.1 |  |  | 24.6.0 | 2.4.5 |  | 143.0 |  | 24.1.2 |  | 0.12.0 |  | 0.6.2.beta | 24.12.0 | 0.8.0 | 2025.04.26 |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 41.1M | 56.8M | 0.2K | 45.6M | 111.5M | 85.5M | 32.8M | 132.3M | 46.3M | 194M | 0 | 15.7M | 1.8M | 10.5M | 3.6M | 4.1M | 975.9K | 1.2M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 2.7K | 12.7M | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 56.8M | 41.1M | 56.8M | 0.2K | 45.6M | 111.5M | 85.5M | 32.8M | 66.2M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 10.5M | 3.6M | 2.1M | 975.9K | 1.2M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 2.7K | 12.7M | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50132 | 42373 | 42415 | 48039 | 36418 | 43390 | 35553 | 14816 | 13259 | 13447 | 21287 | 13775 | 1191 | 1075 | 940 | 998 | 1224 | 883 | 759 | 602 | 817 | 501 | 537 | 357 | 191 | 261 | 100 | 180 | 107 | 27 | 188 | 37 |  | 132 |
| DeltaBlue | 69543 | 125366 | 110933 | 69159 | 94172 | 101326 | 74171 | 16933 | 14976 | 12615 | 4641 | 413 | 1092 | 1190 | 1046 | 919 | 1046 | 985 | 772 | 625 | 755 | 618 | 600 | 498 | 202 | 340 | 175 | 205 | 101 | 34 | 190 | 47 |  | 220 |
| Crypto | 69043 | 57059 | 56859 | 67917 | 52356 | 54463 | 40023 | 22628 | 18709 | 18205 | 23038 | 5730 | 1367 | 1692 | 908 | 1001 | 1031 | 740 | 760 | 1034 | 1439 | 1166 | 507 | 247 | 153 | 167 | 359 | 172 | 106 | 39 | 203 | 42 |  | 125 |
| RayTrace | 151402 | 149552 | 84507 | 125502 | 93091 | 71779 | 52339 | 51503 | 40437 | 26761 | 1181 | 1142 | 2326 | 1910 | 1584 | 1475 | 1423 | 971 | 1233 | 884 | 889 | 971 | 734 | 759 | 730 | 344 | 623 | 392 | 216 | 40 | 273 | 128 |  | 580 |
| EarleyBoyer | 83724 | 103365 | 100236 | 70716 | 78662 | 60382 | 61120 | 46706 | 44637 | 41222 | 36656 | 735 | 4621 | 3486 | 2798 | 2359 | 1948 | 1856 | 1615 | 2075 | 1280 | 1039 | 1237 | 911 | 698 | 660 | 386 | 442 | 199 | 83 |  | 102 |  | 655 |
| RegExp | 29184 | 12116 | 14940 | 22661 | 12509 | 8464 | 10162 | 11410 | 11274 | 11048 | 1660 | 617 | 613 | 279 | 243 | 261 | 187 | 242 | 244 | 189 | 95 | 210 | 248 | 296 | 557 | 248 | 287 | 223 | 134 | 14 |  |  |  |  |
| Splay | 33778 | 52920 | 46784 | 35367 | 42563 | 21530 | 25694 | 18417 | 28571 | 13707 | 3806 | 1082 | 4282 | 2754 | 3224 | 2453 | 1867 | 2153 | 2608 | 1767 | 1562 | 1844 | 1607 | 1035 | 908 | 878 | 483 | 590 | 526 | 150 |  | 115 |  | 1136 |
| NavierStokes | 35913 | 30954 | 36766 | 31694 | 31959 | 31747 | 26415 | 21348 | 18697 | 19659 | 24117 | 8595 | 1417 | 2868 | 1447 | 1859 | 1982 | 2040 | 1516 | 1654 | 1564 | 1326 | 932 | 573 | 177 | 285 | 907 | 251 | 215 | 73 |  | 75 |  | 303 |
| Score | 56779 | 55726 | 52559 | 51678 | 46635 | 39564 | 35147 | 22305 | 21173 | 17814 | 7890 | 1882 | 1704 | 1541 | 1206 | 1181 | 1123 | 1026 | 981 | 890 | 835 | 811 | 696 | 520 | 358 | 347 | 343 | 279 | 171 | 46 |  |  |  |  |
| Score/MB | 999 | 1354 | 925 | 315048317 | 1023 | 354 | 410 | 679 | 160 | 384 | 40 |  | 108 | 875 | 114 | 327 | 272 | 1076 | 820 | 370 | 20 | 1477 |  | 1241 | 135764 | 27 | 217 | 3 | 13 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 42 | 32 | 37 | 41 | 41 | 45 | 43 | 44 | 50 | 65 | 50 | 52 | 62 | 92 | 93 | 100 | 102 | 152 | 568 | 39 | 311 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.110 |  | 1.2.20 |  | 2.4.5 | 24.6.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.7M | 55.8M | 142.9M | 116.4M | 77.6M | 14.4M | 51.5M | 72.8M | 196.1M | 17.5M | 112.8M | 38.1M | 11.8M | 42.2M | 8M | 9M | 9M | 0 | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.1M | 338K | 112.9M | 26.1M | 110.6M | 85.3M | 47.4M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.2M | 1M | 1.7M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 29.7M | 32.3M | 31.1M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 109.8M | 32.4M | 6.9M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38024 | 36400 | 32728 | 32894 | 33226 | 32767 | 27543 | 24680 | 13655 | 14329 | 41713 | 7762 | 703 | 441 | 503 | 391 | 448 | 441 | 433 | 332 | 237 | 208 | 237 | 197 | 107 | 55 | 48 |  | 22 |  |  |
| DeltaBlue | 107501 | 48022 | 41033 | 72412 | 75051 | 71183 | 76842 | 29442 | 13528 | 11108 | 29228 | 370 | 617 | 416 | 460 | 376 | 462 | 462 | 403 | 393 | 343 | 260 | 319 | 226 | 116 | 51 | 41 |  | 26 |  |  |
| Crypto | 41416 | 49957 | 48780 | 41776 | 36492 | 41342 | 41975 | 33557 | 19904 | 18021 | 19403 | 3152 | 791 | 424 | 539 | 425 | 325 | 328 | 366 | 430 | 183 | 314 | 190 | 113 | 92 | 59 | 73 |  | 29 |  |  |
| RayTrace | 112774 | 104116 | 99751 | 72445 | 67191 | 65711 | 66459 | 50689 | 27768 | 27232 | 2590 | 1183 | 1014 | 741 | 553 | 569 | 589 | 553 | 578 | 458 | 465 | 436 | 472 | 232 | 268 | 131 | 131 |  | 83 |  |  |
| EarleyBoyer | 84010 | 62646 | 57866 | 68742 | 74605 | 71676 | 74521 | 43509 | 42038 | 36609 | 30684 | 2181 | 2231 | 1138 | 1002 | 985 | 935 | 931 | 979 | 888 | 573 | 506 | 576 | 463 | 299 | 125 | 132 |  | 69 |  |  |
| RegExp | 10082 | 18748 | 16786 | 9809 | 9656 | 9861 | 9656 | 9961 | 8784 | 9101 | 932 | 1038 | 402 | 196 | 190 | 181 | 162 | 155 | 187 | 180 | 199 | 109 | 252 | 200 | 279 | 90 | 42 |  |  |  |  |
| Splay | 43777 | 35294 | 32450 | 38928 | 33061 | 31946 | 29206 | 22008 | 24521 | 14791 | 2902 | 5417 | 2314 | 1474 | 1024 | 1309 | 1261 | 1254 | 994 | 1285 | 1198 | 1000 | 579 | 761 | 541 | 329 | 170 |  | 79 |  |  |
| NavierStokes | 39029 | 33538 | 40096 | 39099 | 38951 | 39029 | 39060 | 37100 | 22512 | 22149 | 26685 | 4001 | 1086 | 738 | 1040 | 710 | 768 | 759 | 687 | 748 | 484 | 1077 | 474 | 193 | 152 | 116 | 167 |  | 48 |  |  |
| Score | 47882 | 43423 | 41173 | 40611 | 39284 | 39207 | 38520 | 28517 | 19489 | 17432 | 10389 | 2188 | 970 | 586 | 586 | 526 | 525 | 516 | 511 | 501 | 382 | 381 | 358 | 251 | 195 | 99 | 86 |  |  |  |  |
| Score/MB | 884 | 355 | 310 | 727 | 274 | 336 | 496 | 1979 | 378 | 239 | 52 | 124 | 8 | 15 | 49 | 12 | 65 | 57 | 57 |  | 50 | 50 | 47 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 35 | 41 | 60 | 58 | 61 | 66 | 67 | 63 | 62 | 82 | 84 | 78 | 121 | 146 | 248 | 291 | 128 | 441 |  |  |
