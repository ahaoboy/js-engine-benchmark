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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48033<br>99.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47614<br>57.9M<br>822/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47226<br>31.3M<br>1509/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41768<br>108.3M<br>385/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40693<br>52.2M<br>779/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40354<br>106.5M<br>379/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38908<br>40.7M<br>957/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20107<br>19.3M<br>1041/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19443<br>39.8M<br>488/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17128<br>44.7M<br>383/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16987<br>32M<br>530/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11552<br>199.4M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2472<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1543<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 953<br>982.4K<br>993/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 919<br>12.3M<br>74/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 822<br>4.1M<br>202/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 770<br>831.3K<br>948/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 751<br>1.4M<br>539/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>1.9M<br>396/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 502<br>370.4K<br>1387/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 496<br>1.3M<br>367/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 495<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 381<br>422.8K<br>922/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 378<br>685K<br>565/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 367<br>386.8K<br>971/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 309<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>1.9M<br>136/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>❌macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Truly independent web browser |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/5/2025, 10:05:14 AM

### ubuntu
| Engine | bun | v8 | JavaScriptCore | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | duktape | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | boa | kiesel | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.3.0 |  | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  | 0.9.2 | 2.99.99 | 0.10.1 |  |  |  | 1.3.8 | 4.0.0 |  | 16.9.1 | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 99.1M | 57.9M | 31.3M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 370.4K | 1.3M | 0 | 422.8K | 685K | 386.8K | 0 | 13.2M | 1.9M | 27M | 12.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Exe size | 99.1M | 833.3K | 31.3M | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 370.4K | 1.3M | 0 | 422.8K | 685K | 386.8K | 0 | 13.2M | 1.9M | 27M | 12.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Dll size | 0 | 57.1M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41272 | 37692 | 40742 | 35175 | 35313 | 38691 | 32471 | 23518 | 13214 | 14191 | 12462 | 42228 | 11854 | 1129 | 824 | 715 | 707 | 625 | 578 | 577 | 559 | 281 | 392 | 343 | 277 | 240 | 227 | 157 | 202 | 89 | 60 | 59 | 269 | 29 |  |  | 153 |  |
| DeltaBlue | 55698 | 109181 | 53324 | 81431 | 79269 | 74284 | 75910 | 24340 | 13667 | 12972 | 12761 | 38970 | 237 | 1058 | 740 | 697 | 680 | 625 | 584 | 588 | 545 | 329 | 385 | 390 | 358 | 358 | 324 | 203 | 248 | 164 | 54 | 54 | 281 | 35 |  |  | 192 |  |
| Crypto | 49091 | 38956 | 51747 | 41797 | 41830 | 41504 | 41116 | 32073 | 20418 | 17371 | 17556 | 28710 | 8519 | 1370 | 787 | 666 | 517 | 554 | 527 | 563 | 872 | 801 | 420 | 422 | 188 | 188 | 181 | 156 | 124 | 329 | 80 | 61 | 302 | 38 |  |  | 153 |  |
| RayTrace | 120174 | 112848 | 115290 | 72741 | 73185 | 64601 | 64749 | 35149 | 27972 | 27399 | 28461 | 4023 | 1473 | 1578 | 928 | 1185 | 1063 | 958 | 900 | 923 | 682 | 585 | 577 | 453 | 534 | 528 | 475 | 486 | 272 | 500 | 162 | 137 | 348 | 103 |  |  | 470 |  |
| EarleyBoyer | 67593 | 85476 | 67956 | 74384 | 75964 | 70217 | 69999 | 7092 | 41819 | 36284 | 37257 | 28674 | 720 | 3395 | 1531 | 1877 | 1755 | 1410 | 1403 | 1208 | 1680 | 590 | 956 | 856 | 528 | 531 | 499 | 576 | 504 | 323 | 189 | 136 |  | 89 |  |  | 572 |  |
| RegExp | 21044 | 10605 | 19145 | 9718 | 10021 | 9951 | 8929 | 7894 | 8828 | 8810 | 8837 | 863 | 743 | 556 | 247 | 264 | 227 | 236 | 218 | 228 | 116 | 134 | 159 | 177 | 237 | 212 | 199 | 454 | 209 | 96 | 48 | 94 |  |  |  |  |  |  |
| Splay | 36695 | 41552 | 36557 | 38105 | 29736 | 33591 | 33314 | 20259 | 24170 | 11997 | 12020 | 2420 | 4743 | 3621 | 2513 | 2391 | 1956 | 1824 | 2220 | 2214 | 2080 | 1274 | 1395 | 1257 | 750 | 891 | 1127 | 844 | 820 | 378 | 214 | 318 |  | 140 |  |  | 838 |  |
| NavierStokes | 40028 | 38765 | 40136 | 38617 | 38765 | 38881 | 38436 | 36506 | 22193 | 22045 | 22045 | 27871 | 15566 | 1826 | 1610 | 1090 | 1014 | 986 | 984 | 948 | 1217 | 923 | 471 | 745 | 471 | 482 | 467 | 157 | 202 | 859 | 175 | 119 |  | 60 |  |  | 305 |  |
| Score | 48033 | 47614 | 47226 | 41768 | 40693 | 40354 | 38908 | 20107 | 19443 | 17128 | 16987 | 11552 | 2472 | 1543 | 953 | 919 | 822 | 770 | 756 | 751 | 739 | 502 | 496 | 495 | 381 | 378 | 367 | 309 | 271 | 265 | 105 | 104 |  |  |  |  |  |  |
| Score/MB | 484 | 822 | 1509 | 385 | 779 | 379 | 957 | 1041 | 488 | 383 | 530 | 57 |  | 42 | 993 | 74 | 202 | 948 | 537 | 539 | 396 | 1387 | 367 |  | 922 | 565 | 971 |  | 20 | 136 | 3 | 8 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 41 | 34 | 45 | 43 | 50 | 50 | 53 | 53 | 61 | 67 | 67 | 63 | 81 | 82 | 86 | 103 | 113 | 131 | 237 | 237 | 31 | 344 |  |  | 79 | 7 |
### macos-arm64
| Engine | bun | JavaScriptCore | deno | dune | node | v8 | mozjs | spiderfire | spidermonkey | graaljs | jjs | hermes | txiki.js | primjs | quickjs-ng | llrt | quickjs | rquickjs | njs | duktape | quickjs-emscripten | mujs | ringo | xst | goja | JerryScript | nova | engine262 | kiesel | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 2.5.3 | 0.10.2 | 24.9.0 | 14.3.34 |  |  | 144.0 | 24.1.2 |  | 0.12.0 | 24.12.0 |  | 0.10.1 | 0.7.0.beta | 2025.09.13 |  | 0.9.2 | 2.99.99 |  | 1.3.8 | 4.0.0 | 16.9.1 |  | 3.0.0 |  | 0.0.1 | 0.1.0.dev |  |  |  |
| Total size | 57.3M | 78.9M | 87.4M | 44.3M | 87.5M | 26M | 28.9M | 40M | 131.8M | 193.9M | 0 | 13.9M | 3.4M | 1.5M | 3.6M | 10.6M | 837K | 1.2M | 2M | 431.4K | 0 | 411.6K | 0 | 1.5M | 12.7M | 482.8K | 7.4M | 0 | 11.9M | 8.8M | 0 | 60.2M |
| Exe size | 57.3M | 736.2K | 87.4M | 44.3M | 87.5M | 26M | 28.9M | 40M | 65.9M | 118.5K | 0 | 7M | 3.4M | 1.5M | 1.8M | 10.6M | 837K | 1.2M | 1.5M | 431.4K | 0 | 411.6K | 0 | 1.5M | 12.7M | 482.8K | 7.4M | 0 | 11.9M | 8.8M | 0 | 59.6M |
| Dll size | 0 | 78.2M | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 193.8M | 0 | 7M | 0 | 0 | 1.8M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 46323 | 44879 | 57941 | 55968 | 44212 | 37325 | 14206 | 15572 | 13415 | 36591 | 20595 | 890 | 1198 | 918 | 1070 | 891 | 973 | 839 | 732 | 457 | 607 | 285 | 193 | 96 | 243 | 179 | 28 |  | 88 |  |  |  |
| DeltaBlue | 63711 | 62402 | 112196 | 111971 | 99937 | 110404 | 16430 | 17290 | 14480 | 39525 | 1077 | 851 | 1184 | 1042 | 1053 | 841 | 987 | 959 | 803 | 518 | 671 | 337 | 242 | 163 | 268 | 215 | 33 |  | 80 |  |  |  |
| Crypto | 67646 | 66368 | 59257 | 58847 | 58811 | 47005 | 22394 | 22584 | 22173 | 42005 | 15946 | 989 | 1086 | 1413 | 1104 | 563 | 815 | 812 | 1188 | 1059 | 555 | 212 | 138 | 369 | 149 | 241 | 47 |  | 97 |  |  |  |
| RayTrace | 159764 | 142892 | 90131 | 101526 | 93757 | 125280 | 51281 | 39219 | 43807 | 2666 | 2640 | 2050 | 1953 | 1374 | 1367 | 1702 | 1041 | 1194 | 843 | 762 | 784 | 646 | 728 | 524 | 246 | 276 | 123 |  | 205 |  |  |  |
| EarleyBoyer | 94690 | 90786 | 99237 | 103874 | 98752 | 94236 | 49499 | 41789 | 48925 | 39766 | 1056 | 4777 | 2845 | 1062 | 1861 | 2357 | 1922 | 1663 | 2251 | 924 | 1346 | 714 | 725 | 296 | 611 |  | 107 |  | 185 |  |  |  |
| RegExp | 31671 | 25093 | 13483 | 14050 | 13715 | 12352 | 11626 | 11262 | 10362 | 1639 | 1323 | 623 | 281 | 288 | 192 | 282 | 256 | 229 | 194 | 177 | 196 | 248 | 575 | 268 | 278 |  |  |  |  |  |  |  |
| Splay | 47593 | 40966 | 45521 | 38081 | 37103 | 21112 | 17969 | 19696 | 22745 | 3276 | 2359 | 3944 | 3146 | 4315 | 2507 | 3541 | 2776 | 2214 | 1825 | 1523 | 1480 | 1085 | 888 | 504 | 1002 |  | 161 |  |  |  |  |  |
| NavierStokes | 37915 | 36253 | 39435 | 38359 | 36952 | 32796 | 17903 | 21327 | 17808 | 18105 | 14366 | 1444 | 1856 | 3623 | 1834 | 1068 | 1509 | 1466 | 1675 | 1112 | 724 | 632 | 198 | 988 | 270 |  | 91 |  |  |  |  |  |
| Score | 60205 | 55487 | 54972 | 54672 | 50926 | 45858 | 21725 | 21586 | 21063 | 12577 | 3808 | 1503 | 1391 | 1314 | 1137 | 1077 | 1067 | 996 | 971 | 692 | 688 | 447 | 369 | 323 | 320 |  |  |  |  |  |  |  |
| Score/MB | 1051 | 703 | 629 | 1234 | 582 | 1766 | 750 | 539 | 159 | 64 |  | 108 | 414 | 872 | 312 | 101 | 1305 | 832 | 481 | 1642 |  | 1112 |  | 219 | 25 |  |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 34 | 34 | 40 | 39 | 46 | 43 | 43 | 45 | 50 | 56 | 57 | 69 | 92 | 111 | 95 | 36 | 283 |  | 103 |  |  |  |
### windows
| Engine | v8 | JavaScriptCore | dune | bun | node | ChakraCore | spidermonkey | spiderfire | deno | graaljs | hermes | quickjs | txiki.js | quickjs-ng | llrt | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | kiesel | boa | xst | nova | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.34 |  | 0.10.2 | 1.2.23 | 24.9.0 | 1.11.24.0 | 144.0 |  | 2.5.3 | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.10.1 | 0.7.0.beta |  |  |  | 1.3.8 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |  |
| Total size | 61.8M | 125.2M | 82.1M | 139.6M | 120.8M | 15.6M | 52.6M | 80.6M | 148.2M | 197M | 89.6M | 8.9M | 42.7M | 9.7M | 45.6M | 9M | 10.2M | 0 | 8.2M | 8.2M | 8.3M | 20.5M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 39.7M | 0 |
| Exe size | 29.5M | 342.5K | 49.1M | 113.6M | 85.5M | 334K | 33.8M | 42.6M | 112.3M | 339K | 3M | 1M | 4.1M | 1.2M | 13.1M | 1.2M | 1M | 0 | 393.5K | 329.5K | 428K | 13.3M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 9.4M | 0 |
| Dll size | 32.4M | 124.9M | 33M | 26M | 35.3M | 15.3M | 18.8M | 37.9M | 35.9M | 196.7M | 86.6M | 7.9M | 38.6M | 8.5M | 32.5M | 7.8M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 30.3M | 0 |
| Richards | 38006 | 35369 | 35013 | 33819 | 32510 | 24369 | 12899 | 13030 | 34596 | 32985 | 653 | 624 | 433 | 390 | 372 | 432 | 434 | 364 | 250 | 209 | 246 | 180 | 53 | 48 |  | 23 |  |  | 129 |
| DeltaBlue | 110404 | 46051 | 79533 | 43221 | 67421 | 28384 | 13481 | 10824 | 77900 | 18030 | 576 | 518 | 396 | 377 | 356 | 455 | 453 | 389 | 351 | 257 | 348 | 218 | 48 | 42 |  | 26 |  |  | 155 |
| Crypto | 38694 | 49134 | 41532 | 46888 | 39801 | 32828 | 20607 | 15446 | 886 | 16386 | 771 | 604 | 410 | 431 | 415 | 323 | 324 | 421 | 181 | 310 | 181 | 112 | 57 | 72 |  | 36 |  |  | 150 |
| RayTrace | 108926 | 104708 | 69189 | 79845 | 64823 | 47951 | 25530 | 24543 | 4985 | 2665 | 940 | 588 | 736 | 588 | 625 | 587 | 603 | 452 | 469 | 449 | 486 | 223 | 122 | 133 |  | 86 |  |  | 450 |
| EarleyBoyer | 86232 | 63167 | 73515 | 47933 | 71204 | 42714 | 41429 | 34984 | 22185 | 21088 | 2151 | 1077 | 1097 | 994 | 995 | 955 | 935 | 856 | 592 | 509 | 614 | 440 | 120 | 137 |  | 76 |  |  | 517 |
| RegExp | 9580 | 17857 | 9680 | 17257 | 9689 | 9851 | 8892 | 8577 | 4941 | 724 | 395 | 190 | 173 | 175 | 188 | 158 | 156 | 177 | 197 | 108 | 243 | 195 | 87 | 42 |  |  |  |  |  |
| Splay | 42447 | 34609 | 29174 | 32075 | 30160 | 26762 | 23665 | 13788 | 18303 | 2318 | 2096 | 1334 | 1355 | 1229 | 1233 | 1262 | 1226 | 1226 | 1107 | 981 | 697 | 765 | 312 | 168 |  | 127 |  |  | 869 |
| NavierStokes | 38545 | 33734 | 38545 | 33801 | 38655 | 36361 | 22171 | 21876 | 37137 | 16243 | 1048 | 1470 | 729 | 724 | 708 | 755 | 744 | 746 | 486 | 1069 | 475 | 187 | 112 | 164 |  | 57 |  |  | 301 |
| Score | 47023 | 42692 | 39884 | 38580 | 38215 | 28586 | 19096 | 16240 | 13136 | 7884 | 919 | 680 | 560 | 525 | 523 | 520 | 517 | 497 | 383 | 380 | 373 | 243 | 95 | 86 |  |  |  |  |  |
| Score/MB | 760 | 340 | 485 | 276 | 316 | 1832 | 362 | 201 | 88 | 40 | 10 | 76 | 13 | 54 | 11 | 57 | 50 |  | 46 | 46 | 45 | 11 | 1 | 1 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 25 | 42 | 55 | 63 | 61 | 62 | 66 | 67 | 63 | 83 | 85 | 79 | 124 | 257 | 289 | 133 | 380 |  |  | 82 |
