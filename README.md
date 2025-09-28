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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47103<br>99.2M<br>475/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46849<br>37M<br>1264/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46811<br>57.8M<br>810/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41608<br>108.3M<br>384/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39218<br>123.4M<br>317/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38872<br>40.7M<br>956/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 35252<br>66.3M<br>531/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19916<br>19.4M<br>1026/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19676<br>40.1M<br>490/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17046<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17023<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10500<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 1943<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1513<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 915<br>12.3M<br>74/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 818<br>4.3M<br>191/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 814<br>5.2M<br>157/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 755<br>1.4M<br>542/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 751<br>831.3K<br>925/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 743<br>1.4M<br>528/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 641<br>2M<br>324/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 580<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 495<br>2.1M<br>232/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 384<br>446.6K<br>880/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 359<br>414.5K<br>886/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 358<br>685K<br>535/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 309<br>2.7K<br>117182/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 264<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 182<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 103<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 102<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>17.2K | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/28/2025, 5:09:11 PM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | primjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.2.0 | 2.5.2 | 24.9.0 |  | 0.10.1 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 99.2M | 37M | 57.8M | 108.3M | 123.4M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 17.2K | 42M |
| Exe size | 99.2M | 37M | 1M | 108.3M | 123.4M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 17.2K | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41169 | 40463 | 38024 | 35637 | 31641 | 33597 | 32990 | 23162 | 14241 | 13902 | 12363 | 36206 | 11131 | 1130 | 717 | 687 | 708 | 583 | 618 | 577 | 570 | 581 | 533 | 288 | 349 | 276 | 225 | 243 | 166 | 187 | 88 | 104 | 59 | 58 | 276 | 25 |  | 155 |  |
| DeltaBlue | 54554 | 54997 | 107032 | 79394 | 72677 | 79527 | 73543 | 24895 | 13614 | 13118 | 12860 | 26282 | 213 | 1036 | 693 | 662 | 668 | 575 | 610 | 577 | 544 | 566 | 489 | 315 | 387 | 358 | 321 | 360 | 198 | 245 | 159 | 112 | 53 | 53 | 283 | 30 |  | 166 |  |
| Crypto | 48953 | 51958 | 38685 | 41374 | 41077 | 41348 | 41487 | 31879 | 20556 | 17699 | 17619 | 17443 | 8839 | 1367 | 673 | 746 | 586 | 555 | 553 | 538 | 886 | 378 | 903 | 794 | 408 | 185 | 182 | 189 | 144 | 122 | 328 | 94 | 80 | 61 | 299 | 38 |  | 150 |  |
| RayTrace | 111960 | 117806 | 109888 | 71187 | 65267 | 59495 | 67339 | 35378 | 28165 | 25996 | 27528 | 8806 | 1314 | 1549 | 1188 | 915 | 1034 | 910 | 962 | 924 | 682 | 705 | 742 | 579 | 445 | 433 | 423 | 499 | 477 | 259 | 501 | 245 | 160 | 133 | 349 | 94 |  | 474 |  |
| EarleyBoyer | 66378 | 64437 | 82004 | 74986 | 70401 | 68021 | 73659 | 6883 | 42085 | 35919 | 36803 | 27669 | 860 | 3349 | 1872 | 1393 | 1714 | 1343 | 1294 | 1312 | 1663 | 1209 | 885 | 554 | 832 | 457 | 426 | 413 | 662 | 471 | 315 | 275 | 177 | 131 |  | 81 |  | 543 |  |
| RegExp | 20770 | 19508 | 10435 | 10011 | 9930 | 8839 | 9941 | 7772 | 8947 | 8693 | 8837 | 844 | 613 | 545 | 265 | 220 | 225 | 226 | 229 | 217 | 115 | 182 | 64 | 135 | 179 | 228 | 190 | 206 | 460 | 202 | 94 | 240 | 48 | 90 |  |  |  |  |  |
| Splay | 35742 | 33675 | 40175 | 37364 | 33493 | 34389 | 12406 | 19429 | 23877 | 12354 | 12843 | 2019 | 2551 | 3268 | 2225 | 1682 | 1757 | 2112 | 1740 | 2033 | 2027 | 1584 | 827 | 1267 | 1199 | 1227 | 1300 | 790 | 825 | 894 | 367 | 427 | 202 | 331 |  | 131 |  | 845 |  |
| NavierStokes | 39948 | 40244 | 38765 | 38436 | 38765 | 38359 | 38732 | 36618 | 22260 | 22024 | 21898 | 21432 | 5474 | 1858 | 1117 | 1249 | 987 | 966 | 982 | 974 | 1199 | 932 | 1544 | 906 | 686 | 463 | 476 | 482 | 147 | 193 | 869 | 161 | 172 | 119 |  | 59 |  | 285 |  |
| Score | 47103 | 46849 | 46811 | 41608 | 39218 | 38872 | 35252 | 19916 | 19676 | 17046 | 17023 | 10500 | 1943 | 1513 | 915 | 818 | 814 | 755 | 751 | 743 | 737 | 641 | 580 | 495 | 484 | 384 | 359 | 358 | 309 | 264 | 261 | 182 | 103 | 102 |  |  |  |  |  |
| Score/MB | 475 | 1264 | 810 | 384 | 317 | 956 | 531 | 1026 | 490 | 334 | 483 | 52 | 1 | 42 | 74 | 191 | 157 | 542 | 925 | 528 | 87 | 324 | 12 | 232 |  | 880 | 886 | 535 | 117182 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 43 | 34 | 44 | 49 | 50 | 52 | 52 | 53 | 61 | 59 | 81 | 69 | 63 | 83 | 88 | 83 | 101 | 118 | 133 | 147 | 244 | 240 | 31 | 363 |  | 81 | 7 |
### macos-arm64
| Engine | bun | v8 | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | llrt | quickjs | quickjs-ng | rquickjs | njs | ladybird | duktape | jjs | quickjs-emscripten | mujs | ringo | goja | xst | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.2.229 | 2.5.2 | 0.10.1 | 24.9.0 | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 | 0.7.0.beta | 2025.04.26 | 0.10.1 |  | 0.9.2 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 57.3M | 41.3M | 87.5M | 56.8M | 111.9M | 132.6M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 10.6M | 975.9K | 3.8M | 1.2M | 2.4M | 41.5M | 562.1K | 0 | 0 | 429.1K | 2.7K | 12.7M | 1.6M | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 | 237.5K |
| Exe size | 57.3M | 41.3M | 87.5M | 56.8M | 111.9M | 66.3M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 10.6M | 975.9K | 1.9M | 1.2M | 1.8M | 41.5M | 562.1K | 0 | 0 | 429.1K | 2.7K | 12.7M | 1.6M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 237.5K |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 1.9M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 | 0 |
| Richards | 51241 | 42359 | 59216 | 46288 | 43662 | 14682 | 14675 | 14499 | 35037 | 1265 | 1139 | 1250 | 901 | 1066 | 964 | 960 | 739 | 847 | 502 | 609 | 553 | 366 | 196 | 308 | 105 | 150 | 100 | 39 |  | 202 | 41 |  |  |
| DeltaBlue | 65153 | 134034 | 109815 | 106986 | 101617 | 16807 | 16291 | 16034 | 37548 | 1161 | 1238 | 1242 | 1059 | 1078 | 960 | 995 | 819 | 741 | 607 | 369 | 622 | 557 | 251 | 352 | 188 | 149 | 95 | 40 |  | 232 | 54 |  |  |
| Crypto | 70754 | 56776 | 56041 | 57636 | 56852 | 24744 | 21708 | 21326 | 37667 | 1409 | 1701 | 1175 | 664 | 1233 | 1126 | 957 | 1164 | 1539 | 1312 | 943 | 553 | 282 | 139 | 183 | 412 | 131 | 111 | 41 |  | 253 | 64 |  |  |
| RayTrace | 174637 | 136380 | 86061 | 85765 | 83323 | 48395 | 48913 | 41439 | 2633 | 2392 | 1895 | 2020 | 1864 | 1068 | 1432 | 1434 | 978 | 1355 | 1014 | 1581 | 695 | 921 | 766 | 380 | 606 | 324 | 221 | 41 |  | 304 | 160 |  |  |
| EarleyBoyer | 90885 | 102016 | 101719 | 91805 | 90806 | 52160 | 45879 | 43822 | 46748 | 4968 | 1452 | 2950 | 2699 | 2123 | 2100 | 2201 | 2403 | 1754 | 1121 | 1262 | 1359 | 947 | 757 | 745 | 403 | 369 | 229 | 85 |  |  | 134 |  |  |
| RegExp | 27876 | 14365 | 14547 | 14036 | 13196 | 12547 | 10845 | 11251 | 1688 | 684 | 319 | 299 | 314 | 248 | 266 | 255 | 200 | 101 | 242 | 665 | 233 | 327 | 615 | 291 | 309 | 204 | 131 | 14 |  |  |  |  |  |
| Splay | 50329 | 63596 | 51796 | 43538 | 46157 | 27194 | 16828 | 16241 | 3605 | 4238 | 4746 | 2960 | 3631 | 2237 | 2265 | 2846 | 1897 | 2255 | 2217 | 1903 | 1752 | 1330 | 1202 | 1072 | 541 | 487 | 507 | 145 |  |  | 201 |  |  |
| NavierStokes | 37877 | 38951 | 39138 | 38842 | 38881 | 20331 | 19915 | 19846 | 23354 | 1534 | 3985 | 1974 | 1092 | 2148 | 1927 | 1589 | 1766 | 1894 | 1418 | 408 | 804 | 729 | 210 | 291 | 1030 | 182 | 210 | 73 |  |  | 104 |  |  |
| Score | 61294 | 59618 | 55806 | 51986 | 50920 | 23913 | 21297 | 20617 | 13098 | 1798 | 1585 | 1445 | 1188 | 1183 | 1175 | 1163 | 1013 | 999 | 876 | 827 | 702 | 596 | 397 | 388 | 369 | 224 | 171 | 49 |  |  |  |  |  |
| Score/MB | 1070 | 1445 | 637 | 915 | 454 | 180 | 648 | 444 | 67 | 114 | 900 | 400 | 112 | 1241 | 306 | 972 | 423 | 24 | 1595 |  |  | 1422 | 150555 | 30 | 233 | 2 | 13 | 46 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 30 | 35 | 37 | 40 | 42 | 41 | 41 | 49 | 59 | 46 | 47 | 53 | 57 | 88 | 83 | 92 | 124 | 149 | 564 |  | 35 | 226 |  |  |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs | mujs-pgo | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.229 |  | 2.5.2 | 1.2.23 | 0.10.1 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  | 1.3.5 |  | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 148.4M | 139.6M | 82M | 120.8M | 15.6M | 52.8M | 80.6M | 197.1M | 115.9M | 12.8M | 44.3M | 45.6M | 10M | 9M | 10.2M | 0 | 8.5M | 8.6M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 26.3M |
| Exe size | 29.4M | 342.5K | 112.5M | 113.6M | 47.4M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 13.1M | 1.6M | 1.2M | 1M | 0 | 692.1K | 744.6K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 507K |
| Dll size | 32.4M | 124.9M | 35.9M | 26M | 34.6M | 35.3M | 15.3M | 18.9M | 37.9M | 196.7M | 112.9M | 7.9M | 38.6M | 32.5M | 8.5M | 7.8M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 25.8M |
| Richards | 38105 | 34688 | 35097 | 36132 | 32824 | 31906 | 23871 | 13461 | 13711 | 35567 | 685 | 502 | 444 | 378 | 397 | 435 | 418 | 333 | 250 | 243 | 198 | 181 | 105 | 54 | 49 |  | 25 |  | 135 |
| DeltaBlue | 102635 | 45681 | 79778 | 44392 | 75579 | 65880 | 29237 | 13276 | 12860 | 28501 | 597 | 456 | 404 | 362 | 383 | 463 | 467 | 391 | 358 | 348 | 246 | 225 | 106 | 49 | 43 |  | 29 |  | 163 |
| Crypto | 38304 | 47327 | 36972 | 46999 | 39972 | 41208 | 33207 | 20433 | 17633 | 21945 | 780 | 542 | 416 | 426 | 429 | 322 | 324 | 421 | 180 | 184 | 305 | 113 | 91 | 58 | 74 |  | 36 |  | 150 |
| RayTrace | 110184 | 104856 | 69559 | 85025 | 67494 | 64832 | 47433 | 27574 | 26660 | 4123 | 940 | 571 | 749 | 621 | 603 | 602 | 595 | 452 | 493 | 488 | 449 | 230 | 265 | 123 | 135 |  | 86 |  | 443 |
| EarleyBoyer | 81050 | 65488 | 75477 | 51881 | 72405 | 71374 | 41926 | 41032 | 36331 | 29933 | 2205 | 1035 | 1170 | 1007 | 1010 | 957 | 961 | 857 | 627 | 624 | 523 | 460 | 298 | 121 | 148 |  | 76 |  | 516 |
| RegExp | 9839 | 19203 | 9809 | 17655 | 9474 | 9670 | 9930 | 9227 | 8603 | 1014 | 413 | 193 | 197 | 203 | 181 | 165 | 157 | 176 | 201 | 249 | 109 | 194 | 271 | 89 | 43 |  |  |  |  |
| Splay | 42302 | 37005 | 34540 | 33525 | 28742 | 31293 | 27666 | 24896 | 15019 | 2787 | 2383 | 1084 | 1475 | 1351 | 1360 | 1303 | 1311 | 1258 | 1219 | 733 | 1038 | 764 | 522 | 314 | 172 |  | 132 |  | 848 |
| NavierStokes | 38617 | 33734 | 38545 | 33768 | 38617 | 38655 | 36361 | 22149 | 21941 | 25525 | 1065 | 1032 | 732 | 707 | 726 | 758 | 749 | 740 | 479 | 475 | 1060 | 194 | 148 | 114 | 163 |  | 57 |  | 304 |
| Score | 46404 | 43295 | 40401 | 40070 | 38762 | 38360 | 28701 | 19513 | 17435 | 10891 | 955 | 596 | 586 | 539 | 539 | 528 | 523 | 493 | 394 | 378 | 378 | 247 | 190 | 96 | 88 |  |  |  |  |
| Score/MB | 750 | 345 | 272 | 287 | 472 | 317 | 1838 | 369 | 216 | 55 | 8 | 46 | 13 | 11 | 53 | 58 | 51 |  | 46 | 44 | 43 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 57 | 59 | 60 | 62 | 66 | 67 | 63 | 81 | 77 | 84 | 122 | 150 | 253 | 276 | 131 | 376 |  | 81 |
