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


## Engine & Runtime (32/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47920<br>31.3M<br>1531/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47874<br>57.9M<br>827/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47695<br>99.1M<br>481/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| dune | [dune](https://github.com/aalykiot/dune) | 40665<br>52.2M<br>778/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39619<br>106.5M<br>372/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38870<br>40.7M<br>956/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 36829<br>108.3M<br>340/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20125<br>19.3M<br>1042/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19356<br>39.8M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17121<br>44.7M<br>383/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17037<br>32M<br>531/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11046<br>199.4M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2813<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 940<br>982.4K<br>979/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 923<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>4.1M<br>204/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 771<br>831.3K<br>949/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 760<br>1.4M<br>546/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 738<br>1.9M<br>395/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>1.2M<br>531/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>370.4K<br>1382/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 496<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 393<br>422.8K<br>951/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 374<br>386.8K<br>990/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 369<br>685K<br>551/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 308<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>1.9M<br>136/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 97<br>13.6M<br>7/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Truly independent web browser |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/6/2025, 1:42:37 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | dune | node | lo | deno | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | goja | xst | boa | kiesel | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.3.0 | 1.2.23 | 0.10.2 | 24.9.0 |  | 2.5.3 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 | 2.99.99 |  |  | 1.3.8 |  | 4.0.0 |  | 16.9.1 | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 31.3M | 57.9M | 99.1M | 52.2M | 106.5M | 40.7M | 108.3M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 1.2M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 13.2M | 1.9M | 27M | 13.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Exe size | 31.3M | 833.3K | 99.1M | 52.2M | 106.5M | 40.7M | 108.3M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 1.2M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 13.2M | 1.9M | 27M | 13.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Dll size | 0 | 57.1M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41176 | 37837 | 41565 | 34727 | 31472 | 33586 | 35588 | 23282 | 13337 | 14043 | 13305 | 35623 | 14255 | 1116 | 811 | 716 | 704 | 629 | 576 | 579 | 556 | 579 | 284 | 341 | 278 | 226 | 246 | 157 | 201 | 90 | 60 | 52 | 280 | 29 |  |  | 163 |  |
| DeltaBlue | 54726 | 109915 | 51070 | 81557 | 74356 | 74528 | 81325 | 25205 | 13422 | 13072 | 12959 | 25853 | 691 | 1053 | 730 | 696 | 674 | 623 | 588 | 580 | 540 | 583 | 322 | 382 | 361 | 321 | 359 | 194 | 248 | 164 | 54 | 49 | 285 | 35 |  |  | 181 |  |
| Crypto | 51699 | 38980 | 48757 | 41271 | 41188 | 41201 | 41804 | 31399 | 20528 | 17765 | 17374 | 14207 | 8509 | 1370 | 796 | 680 | 605 | 565 | 546 | 533 | 881 | 380 | 784 | 416 | 191 | 184 | 189 | 147 | 123 | 323 | 81 | 60 | 294 | 38 |  |  | 139 |  |
| RayTrace | 119656 | 112922 | 119804 | 71705 | 64601 | 61863 | 72001 | 36445 | 26714 | 27030 | 28268 | 8641 | 1323 | 1609 | 942 | 1198 | 1065 | 955 | 902 | 904 | 679 | 711 | 583 | 460 | 536 | 479 | 519 | 465 | 275 | 503 | 164 | 125 | 346 | 104 |  |  | 444 |  |
| EarleyBoyer | 69143 | 87092 | 68200 | 75554 | 70892 | 68600 | 74478 | 7165 | 41617 | 36073 | 36917 | 25420 | 1435 | 3363 | 1501 | 1883 | 1742 | 1401 | 1375 | 1378 | 1676 | 1219 | 582 | 861 | 537 | 492 | 494 | 567 | 507 | 323 | 190 | 125 |  | 88 |  |  | 565 |  |
| RegExp | 19820 | 10627 | 21114 | 10062 | 10072 | 8828 | 10223 | 7902 | 8793 | 8919 | 8702 | 1163 | 612 | 557 | 234 | 266 | 226 | 237 | 233 | 223 | 115 | 184 | 135 | 180 | 239 | 195 | 214 | 466 | 209 | 96 | 48 | 93 |  |  |  |  |  |  |
| Splay | 36263 | 42090 | 37543 | 30331 | 35253 | 35123 | 13215 | 19750 | 24578 | 11820 | 11836 | 2321 | 2339 | 3423 | 2424 | 2353 | 1895 | 1801 | 2139 | 2171 | 2084 | 1651 | 1304 | 1274 | 924 | 1304 | 781 | 840 | 788 | 379 | 215 | 315 |  | 138 |  |  | 843 |  |
| NavierStokes | 40136 | 38694 | 39948 | 38694 | 38732 | 38397 | 38617 | 35841 | 22319 | 22024 | 22045 | 28584 | 17180 | 1858 | 1608 | 1099 | 1000 | 984 | 976 | 981 | 1217 | 931 | 907 | 747 | 469 | 476 | 485 | 174 | 200 | 870 | 175 | 113 |  | 60 |  |  | 297 |  |
| Score | 47920 | 47874 | 47695 | 40665 | 39619 | 38870 | 36829 | 20125 | 19356 | 17121 | 17037 | 11046 | 2813 | 1535 | 940 | 923 | 831 | 771 | 760 | 756 | 738 | 649 | 500 | 496 | 393 | 374 | 369 | 308 | 270 | 266 | 105 | 97 |  |  |  |  |  |  |
| Score/MB | 1531 | 827 | 481 | 778 | 372 | 956 | 340 | 1042 | 486 | 383 | 531 | 55 |  | 42 | 979 | 75 | 204 | 949 | 546 | 537 | 395 | 531 | 1382 |  | 951 | 990 | 551 |  | 20 | 136 | 3 | 7 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 38 | 34 | 46 | 43 | 49 | 50 | 52 | 52 | 61 | 59 | 68 | 62 | 80 | 87 | 82 | 99 | 114 | 131 | 236 | 250 | 31 | 345 |  |  | 82 | 7 |
### macos-arm64
| Engine | bun | dune | v8 | deno | JavaScriptCore | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | rquickjs | llrt | quickjs | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | kiesel | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 0.10.2 | 14.3.34 | 2.5.3 |  | 24.9.0 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 |  | 0.7.0.beta | 2025.09.13 | 0.9.2 | 2.99.99 |  | 1.3.8 |  | 16.9.1 | 4.0.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 57.3M | 44.3M | 26M | 87.4M | 78.9M | 87.5M | 131.8M | 28.9M | 40M | 193.9M | 0 | 13.9M | 1.5M | 3.4M | 3.6M | 1.2M | 10.6M | 837K | 2M | 431.4K | 0 | 411.6K | 12.7M | 1.5M | 0 | 12.7M | 482.8K | 7.4M | 0 | 8.8M | 0 | 60.2M |
| Exe size | 57.3M | 44.3M | 26M | 87.4M | 736.2K | 87.5M | 65.9M | 28.9M | 40M | 118.5K | 0 | 7M | 1.5M | 3.4M | 1.8M | 1.2M | 10.6M | 837K | 1.5M | 431.4K | 0 | 411.6K | 12.7M | 1.5M | 0 | 12.7M | 482.8K | 7.4M | 0 | 8.8M | 0 | 59.6M |
| Dll size | 0 | 0 | 0 | 0 | 78.2M | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7M | 0 | 0 | 1.8M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 52303 | 58679 | 41385 | 58661 | 47820 | 45462 | 14234 | 15014 | 10711 | 31532 | 17859 | 1299 | 1114 | 1234 | 1059 | 914 | 695 | 997 | 596 | 499 | 511 | 370 | 314 | 102 | 215 | 101 | 199 | 38 |  |  |  |  |
| DeltaBlue | 70667 | 109723 | 124659 | 104215 | 54064 | 101438 | 15201 | 16582 | 11471 | 26480 | 323 | 1191 | 1187 | 1209 | 1049 | 953 | 995 | 917 | 762 | 583 | 564 | 512 | 362 | 195 | 235 | 99 | 221 | 48 |  |  |  |  |
| Crypto | 66979 | 58494 | 55519 | 57154 | 67273 | 57432 | 24419 | 21336 | 17628 | 42708 | 15310 | 1358 | 1626 | 1026 | 1091 | 953 | 640 | 789 | 1142 | 1251 | 477 | 274 | 186 | 395 | 142 | 115 | 245 | 65 |  |  |  |  |
| RayTrace | 169013 | 95829 | 143706 | 90353 | 134456 | 80215 | 44473 | 49061 | 36223 | 3625 | 1761 | 2469 | 1929 | 1876 | 1351 | 1380 | 1728 | 1072 | 862 | 1024 | 644 | 834 | 450 | 638 | 700 | 221 | 288 | 145 |  |  |  |  |
| EarleyBoyer | 96057 | 102147 | 109186 | 101935 | 84800 | 77138 | 46813 | 48643 | 43302 | 46990 | 1522 | 4859 | 3498 | 2873 | 2286 | 2008 | 2524 | 1960 | 2228 | 1083 | 1136 | 920 | 785 | 391 | 696 | 235 |  | 129 |  |  |  |  |
| RegExp | 28667 | 14866 | 12456 | 14351 | 28030 | 13170 | 11784 | 12625 | 11331 | 1445 | 814 | 626 | 301 | 284 | 258 | 247 | 296 | 258 | 204 | 234 | 212 | 298 | 296 | 302 | 549 | 134 |  |  |  |  |  |  |
| Splay | 49571 | 49571 | 51323 | 49758 | 38415 | 40354 | 25613 | 20006 | 15956 | 3482 | 1972 | 3770 | 2638 | 3074 | 2914 | 2738 | 3201 | 2521 | 2060 | 1830 | 1740 | 924 | 1142 | 494 | 935 | 423 |  | 192 |  |  |  |  |
| NavierStokes | 38617 | 40473 | 37100 | 36470 | 37211 | 38173 | 20122 | 20479 | 17589 | 28909 | 1733 | 1376 | 3703 | 1971 | 1956 | 1628 | 948 | 1445 | 1883 | 1351 | 876 | 661 | 313 | 1021 | 154 | 214 |  | 109 |  |  |  |  |
| Score | 62078 | 56905 | 56684 | 55006 | 54641 | 49003 | 22547 | 22495 | 17955 | 13131 | 2251 | 1735 | 1599 | 1393 | 1238 | 1123 | 1071 | 1045 | 970 | 834 | 652 | 540 | 409 | 363 | 360 | 171 |  |  |  |  |  |  |
| Score/MB | 1083 | 1284 | 2183 | 629 | 692 | 560 | 171 | 777 | 448 | 67 |  | 124 | 1062 | 415 | 340 | 938 | 101 | 1278 | 480 | 1979 |  | 1343 | 32 | 246 |  | 13 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 39 | 32 | 37 | 39 | 41 | 41 | 43 | 44 | 48 | 47 | 55 | 59 | 80 | 94 | 97 | 146 | 35 | 226 |  |  |  |  |
### windows
| Engine | v8 | JavaScriptCore | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | rquickjs-pgo | llrt | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | boa | kiesel | xst | nova | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.34 |  | 1.2.23 | 24.9.0 | 2.5.3 | 0.10.2 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  |  | 0.7.0.beta | 0.10.1 |  | 1.3.8 | 2.7.0 |  |  | 0.20.0 | 0.1.0.dev |  |  | 0.0.1 |  |  |
| Total size | 61.8M | 125.2M | 139.6M | 120.8M | 148.2M | 82.1M | 15.6M | 53.7M | 80.6M | 197M | 89.6M | 8.9M | 42.7M | 9M | 10.2M | 45.6M | 6.4M | 0 | 8.2M | 8.2M | 8.3M | 20.5M | 43.8M | 33.4M | 6.5M | 17.5M | 0 | 39.7M | 0 |
| Exe size | 29.5M | 342.5K | 113.6M | 85.5M | 112.3M | 49.1M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 1.2M | 1M | 13.1M | 1.2M | 0 | 393.5K | 329.5K | 428K | 13.3M | 27.4M | 19.8M | 1.3M | 8.3M | 0 | 9.4M | 0 |
| Dll size | 32.4M | 124.9M | 26M | 35.3M | 35.9M | 33M | 15.3M | 19.9M | 37.9M | 196.7M | 86.6M | 7.9M | 38.6M | 7.8M | 9.2M | 32.5M | 5.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 16.5M | 13.6M | 5.2M | 9.2M | 0 | 30.3M | 0 |
| Richards | 37766 | 35337 | 34741 | 32340 | 35464 | 32118 | 24320 | 12973 | 14022 | 35115 | 691 | 640 | 446 | 435 | 436 | 384 | 508 | 366 | 249 | 210 | 250 | 177 | 49 | 46 |  | 24 |  |  | 146 |
| DeltaBlue | 107574 | 47129 | 35697 | 69331 | 79857 | 71275 | 28001 | 12100 | 12569 | 23369 | 614 | 517 | 400 | 458 | 464 | 367 | 484 | 375 | 360 | 258 | 349 | 207 | 43 | 40 |  | 28 |  |  | 169 |
| Crypto | 38545 | 47841 | 44710 | 40062 | 38766 | 40837 | 32673 | 20600 | 15244 | 19514 | 782 | 602 | 423 | 324 | 324 | 327 | 455 | 411 | 180 | 305 | 185 | 104 | 73 | 50 |  | 36 |  |  | 136 |
| RayTrace | 108630 | 103672 | 100639 | 66229 | 52983 | 52317 | 49061 | 28387 | 26492 | 3285 | 967 | 589 | 745 | 603 | 594 | 620 | 460 | 444 | 467 | 443 | 490 | 204 | 134 | 107 |  | 86 |  |  | 413 |
| EarleyBoyer | 80837 | 61113 | 58509 | 70767 | 55667 | 62856 | 40837 | 40831 | 35854 | 30043 | 2183 | 1059 | 1099 | 954 | 955 | 1003 | 935 | 847 | 580 | 520 | 625 | 392 | 136 | 107 |  | 76 |  |  | 179 |
| RegExp | 9920 | 17946 | 17638 | 9589 | 7772 | 9246 | 9728 | 9155 | 8620 | 974 | 409 | 184 | 196 | 165 | 151 | 202 | 146 | 172 | 197 | 108 | 245 | 187 | 41 | 83 |  |  |  |  |  |
| Splay | 42220 | 34014 | 33754 | 30901 | 32450 | 21313 | 27788 | 24064 | 12858 | 2792 | 2336 | 1368 | 1425 | 1266 | 1293 | 1305 | 1168 | 1191 | 1217 | 1019 | 708 | 698 | 163 | 270 |  | 126 |  |  | 806 |
| NavierStokes | 38584 | 33734 | 33687 | 38584 | 38211 | 38025 | 36322 | 22127 | 21793 | 27251 | 1059 | 1545 | 730 | 760 | 750 | 693 | 549 | 722 | 481 | 1068 | 481 | 170 | 161 | 99 |  | 56 |  |  | 278 |
| Score | 46596 | 42374 | 39996 | 38486 | 36457 | 35099 | 28520 | 19174 | 16739 | 10200 | 958 | 684 | 579 | 527 | 521 | 519 | 509 | 486 | 387 | 381 | 378 | 226 | 86 | 83 |  |  |  |  |  |
| Score/MB | 753 | 338 | 286 | 318 | 246 | 427 | 1828 | 356 | 207 | 51 | 10 | 76 | 13 | 58 | 50 | 11 | 79 |  | 47 | 46 | 45 | 11 | 1 | 2 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 55 | 59 | 66 | 68 | 61 | 68 | 63 | 83 | 84 | 77 | 134 | 288 | 289 | 133 | 383 |  |  | 96 |
