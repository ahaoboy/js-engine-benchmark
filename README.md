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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47303<br>99.1M<br>477/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46972<br>31.3M<br>1500/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46674<br>57.9M<br>806/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42031<br>108.3M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 41017<br>43M<br>954/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40451<br>52.2M<br>774/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39795<br>106.5M<br>373/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39392<br>40.7M<br>968/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19934<br>19.3M<br>1032/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19582<br>39.8M<br>492/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17225<br>44.7M<br>385/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16895<br>32M<br>527/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11044<br>199.4M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2368<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1528<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 927<br>982.4K<br>966/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 919<br>12.3M<br>74/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>4.1M<br>203/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 746<br>1.4M<br>536/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 746<br>1.4M<br>530/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 742<br>1.9M<br>397/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 720<br>831.3K<br>886/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 633<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 489<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 487<br>1.3M<br>361/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 477<br>370.4K<br>1318/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 378<br>422.8K<br>915/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 367<br>685K<br>548/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 353<br>386.8K<br>934/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 306<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 275<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>1.9M<br>134/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 186<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 134<br>13.2M<br>10/M | ✅unix<br>✅macArm<br>❌windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/7/2025, 4:55:28 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | bare | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs | rquickjs-pgo | primjs | ladybird | quickjs-ng | duktape | mujs-pgo | mujs-one | mujs | xst | JerryScript | nova | njs | quickjs-emscripten | ringo | jint | kiesel | boa | engine262 | goja | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.3.0 | 2.5.3 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  |  | 0.10.1 | 2.99.99 |  |  | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.9.2 |  | 4.0.0 |  | 0.1.0.dev |  | 0.0.1 |  |  |  |
| Total size | 99.1M | 31.3M | 57.9M | 108.3M | 43M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 831.3K | 46.5M | 1.3M | 370.4K | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 1.9M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Exe size | 99.1M | 31.3M | 833.3K | 108.3M | 43M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 831.3K | 46.5M | 1.3M | 370.4K | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 1.9M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42228 | 41268 | 37039 | 35390 | 32005 | 34264 | 32375 | 32563 | 23441 | 13722 | 14304 | 12903 | 42542 | 13115 | 1120 | 810 | 716 | 701 | 581 | 580 | 598 | 534 | 390 | 289 | 255 | 245 | 226 | 90 | 275 | 29 | 568 | 344 | 147 | 101 | 79 | 58 |  | 201 |  |  |
| DeltaBlue | 56617 | 55480 | 98727 | 81596 | 78151 | 78006 | 73940 | 74647 | 25017 | 13554 | 13157 | 12781 | 27366 | 208 | 1053 | 723 | 695 | 670 | 586 | 582 | 587 | 490 | 382 | 326 | 314 | 354 | 317 | 162 | 284 | 34 | 542 | 389 | 202 | 111 | 71 | 54 |  | 252 |  |  |
| Crypto | 48247 | 51994 | 38795 | 41890 | 41503 | 41873 | 40865 | 41176 | 32118 | 20450 | 17627 | 17723 | 16665 | 8992 | 1369 | 746 | 674 | 596 | 553 | 535 | 513 | 879 | 399 | 785 | 186 | 191 | 179 | 321 | 297 | 38 | 868 | 406 | 150 | 97 | 79 | 80 |  | 123 |  |  |
| RayTrace | 115882 | 110628 | 110480 | 71338 | 71631 | 72371 | 65785 | 67117 | 36185 | 28239 | 26862 | 27916 | 3534 | 1411 | 1557 | 932 | 1188 | 1085 | 907 | 906 | 892 | 780 | 573 | 577 | 483 | 515 | 395 | 497 | 346 | 105 | 682 | 454 | 480 | 254 | 176 | 164 |  | 272 |  |  |
| EarleyBoyer | 64399 | 67194 | 86433 | 74972 | 69850 | 75376 | 71367 | 68501 | 7023 | 42307 | 36273 | 36455 | 34973 | 717 | 3405 | 1472 | 1869 | 1726 | 1319 | 1323 | 1321 | 988 | 948 | 549 | 487 | 473 | 414 | 321 |  | 90 | 1694 | 836 | 562 | 285 | 179 | 193 |  | 498 |  |  |
| RegExp | 20659 | 19145 | 10536 | 10183 | 10203 | 10052 | 9900 | 8947 | 7463 | 9038 | 8929 | 8874 | 1365 | 854 | 553 | 239 | 268 | 226 | 220 | 216 | 223 | 64 | 159 | 133 | 229 | 208 | 192 | 95 |  |  | 116 | 179 | 413 | 246 | 124 | 48 |  | 206 |  |  |
| Splay | 35546 | 34780 | 40705 | 38211 | 38920 | 30192 | 35783 | 36638 | 19216 | 23853 | 12204 | 11483 | 2032 | 4922 | 3439 | 2462 | 2314 | 1883 | 2127 | 2096 | 1718 | 1448 | 1300 | 920 | 1108 | 811 | 1285 | 358 |  | 142 | 2106 | 1281 | 884 | 449 | 399 | 222 |  | 933 |  |  |
| NavierStokes | 39652 | 40216 | 38765 | 38694 | 38842 | 38694 | 38655 | 38436 | 36322 | 22067 | 22002 | 21898 | 33290 | 9460 | 1827 | 1545 | 1103 | 978 | 912 | 975 | 884 | 1540 | 473 | 933 | 470 | 484 | 468 | 871 |  | 60 | 1224 | 692 | 175 | 162 | 142 | 177 |  | 201 |  |  |
| Score | 47303 | 46972 | 46674 | 42031 | 41017 | 40451 | 39795 | 39392 | 19934 | 19582 | 17225 | 16895 | 11044 | 2368 | 1528 | 927 | 919 | 827 | 746 | 746 | 720 | 633 | 487 | 477 | 378 | 367 | 353 | 262 |  |  | 742 | 489 | 306 | 186 | 134 | 106 |  | 275 |  |  |
| Score/MB | 477 | 1500 | 806 | 388 | 954 | 774 | 373 | 968 | 1032 | 492 | 385 | 527 | 55 |  | 42 | 966 | 74 | 203 | 536 | 530 | 886 | 13 | 361 | 1318 | 915 | 548 | 934 | 134 |  |  | 397 |  |  | 2 | 10 | 3 |  | 20 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 42 | 34 | 46 | 44 | 49 | 53 | 53 | 53 | 81 | 67 | 69 | 82 | 83 | 89 | 132 | 31 | 341 | 61 | 64 | 101 | 146 | 186 | 235 |  | 114 | 83 | 7 |
### macos-arm64
| Engine | JavaScriptCore | bun | deno | v8 | dune | node | bare | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | jjs | quickjs-ng | rquickjs | quickjs | llrt | ladybird | duktape | mujs | xst | JerryScript | nova | engine262 | njs | quickjs-emscripten | ringo | goja | jint | kiesel | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 2.5.3 | 14.3.39 | 0.10.2 | 24.9.0 |  | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 |  | 0.10.1 |  | 2025.09.13 | 0.7.0.beta |  | 2.99.99 | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.0.1 | 0.9.2 |  | 4.0.0 |  |  | 0.1.0.dev |  |  |
| Total size | 78.9M | 57.3M | 87.4M | 26M | 44.3M | 87.5M | 32.8M | 131.8M | 28.9M | 40M | 193.9M | 13.9M | 1.5M | 3.4M | 0 | 3.6M | 1.2M | 837K | 10.6M | 41.5M | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 2M | 0 | 0 | 12.7M | 75.4M | 12.4M | 0 | 60.2M |
| Exe size | 736.3K | 57.3M | 87.4M | 26M | 44.3M | 87.5M | 32.8M | 65.9M | 28.9M | 40M | 118.5K | 7M | 1.5M | 3.4M | 0 | 1.8M | 1.2M | 837K | 10.6M | 41.5M | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 1.5M | 0 | 0 | 12.7M | 75.4M | 12.4M | 0 | 59.6M |
| Dll size | 78.2M | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7M | 0 | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 46976 | 44269 | 53126 | 39394 | 56759 | 38504 | 42186 | 13881 | 12469 | 12748 | 26907 | 1150 | 998 | 981 | 508 | 839 | 688 | 859 | 612 | 846 | 473 | 340 | 89 | 185 | 36 |  | 557 | 503 | 186 | 256 | 145 | 119 |  |  |
| DeltaBlue | 60405 | 62237 | 97484 | 111329 | 105756 | 89173 | 102602 | 15161 | 15273 | 13310 | 3147 | 932 | 1038 | 965 | 235 | 878 | 741 | 828 | 750 | 710 | 548 | 512 | 167 | 201 | 55 |  | 610 | 515 | 168 | 277 | 150 | 107 |  |  |
| Crypto | 67482 | 65533 | 51164 | 50298 | 52411 | 53029 | 43077 | 22928 | 21210 | 15697 | 21331 | 1194 | 1573 | 906 | 3312 | 862 | 778 | 641 | 560 | 1315 | 1198 | 224 | 351 | 222 | 65 |  | 973 | 398 | 137 | 143 | 119 | 127 |  |  |
| RayTrace | 158728 | 125058 | 83915 | 137564 | 68671 | 75701 | 62529 | 44503 | 46841 | 27528 | 2411 | 1810 | 994 | 1471 | 1022 | 1033 | 1293 | 952 | 1242 | 1077 | 924 | 725 | 504 | 282 | 153 |  | 662 | 621 | 708 | 231 | 317 | 249 |  |  |
| EarleyBoyer | 87595 | 73271 | 88412 | 102079 | 75955 | 76571 | 61524 | 43849 | 41368 | 30884 | 34090 | 3854 | 2012 | 2097 | 1803 | 1939 | 1832 | 1613 | 1969 | 1563 | 1044 | 753 | 323 |  | 94 |  | 1575 | 1253 | 644 | 589 | 309 | 223 |  |  |
| RegExp | 26783 | 25143 | 13274 | 12600 | 11682 | 12690 | 8974 | 10284 | 9383 | 8084 | 1283 | 509 | 206 | 226 | 365 | 218 | 237 | 211 | 250 | 89 | 246 | 259 | 235 |  |  |  | 169 | 220 | 530 | 239 | 177 | 151 |  |  |
| Splay | 46295 | 27879 | 37103 | 19077 | 33256 | 33827 | 22166 | 24545 | 13016 | 15532 | 2668 | 2689 | 3136 | 2118 | 1487 | 2486 | 2687 | 2467 | 2795 | 1879 | 2225 | 538 | 471 |  | 170 |  | 1449 | 1311 | 761 | 674 | 533 | 447 |  |  |
| NavierStokes | 27454 | 28584 | 34030 | 34292 | 36878 | 35545 | 29206 | 19273 | 17737 | 18976 | 26537 | 1256 | 2938 | 1520 | 3420 | 1608 | 1486 | 1253 | 867 | 1535 | 1443 | 554 | 909 |  | 91 |  | 1483 | 832 | 174 | 246 | 161 | 235 |  |  |
| Score | 55547 | 48984 | 48947 | 47412 | 46925 | 44758 | 37799 | 21509 | 18996 | 16462 | 7785 | 1407 | 1256 | 1086 | 1038 | 1013 | 985 | 907 | 887 | 874 | 835 | 449 | 310 |  |  |  | 771 | 610 | 329 | 293 | 210 | 186 |  |  |
| Score/MB | 704 | 855 | 560 | 1826 | 1059 | 511 | 1152 | 163 | 656 | 411 | 40 | 101 | 834 | 323 |  | 278 | 823 | 1109 | 83 | 21 | 1982 | 1117 | 210 |  |  |  | 382 |  |  | 23 | 2 | 15 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 34 | 48 | 43 | 45 | 46 | 44 | 48 | 48 | 64 | 46 | 69 | 108 | 37 | 256 |  | 57 | 58 | 99 | 101 | 141 | 134 |  |  |
### windows
| Engine | v8 | bun | JavaScriptCore | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | rquickjs | quickjs-ng | rquickjs-pgo | mujs-pgo | duktape | mujs | xst | nova | goja | boa | engine262 | jint | rhino | quickjs-emscripten |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 | 1.2.23 |  | 2.5.3 | 24.9.0 | 0.10.2 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta |  | 0.10.1 |  |  | 2.7.0 | 1.3.8 |  |  |  |  | 0.0.1 |  |  |  |
| Total size | 61.9M | 139.6M | 125.2M | 148.2M | 120.8M | 82.1M | 15.6M | 53.2M | 80.6M | 197M | 89.6M | 8.9M | 41.4M | 45.6M | 9M | 6.4M | 10.2M | 8.3M | 8.2M | 8.2M | 6.5M | 17.5M | 20.5M | 43.8M | 0 | 99.1M | 0 | 0 |
| Exe size | 29.5M | 113.6M | 342.5K | 112.3M | 85.5M | 49.1M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 13.1M | 1.2M | 1.2M | 1M | 428K | 329.5K | 393.5K | 1.3M | 8.3M | 13.3M | 27.4M | 0 | 68.8M | 0 | 0 |
| Dll size | 32.4M | 26M | 124.9M | 35.9M | 35.3M | 33M | 15.3M | 19.4M | 37.9M | 196.7M | 86.6M | 7.9M | 37.3M | 32.5M | 7.8M | 5.2M | 9.2M | 7.8M | 7.8M | 7.8M | 5.2M | 9.2M | 7.2M | 16.5M | 0 | 30.3M | 0 | 0 |
| Richards | 36982 | 35800 | 35260 | 33904 | 31253 | 35094 | 23338 | 13323 | 13637 | 35598 | 691 | 640 | 450 | 374 | 425 | 492 | 430 | 238 | 203 | 246 |  | 22 | 181 | 48 |  | 105 |  | 347 |
| DeltaBlue | 109888 | 44841 | 39962 | 77047 | 65292 | 78971 | 25165 | 12371 | 12754 | 29063 | 611 | 506 | 406 | 357 | 448 | 469 | 447 | 347 | 251 | 344 |  | 26 | 210 | 42 |  | 118 |  | 387 |
| Crypto | 33955 | 46550 | 47594 | 37806 | 41189 | 41461 | 32408 | 17342 | 17547 | 22091 | 754 | 591 | 421 | 414 | 320 | 463 | 319 | 181 | 304 | 176 |  | 36 | 102 | 71 |  | 87 |  | 423 |
| RayTrace | 110184 | 85987 | 94275 | 70521 | 65045 | 66377 | 43289 | 26465 | 26936 | 2513 | 955 | 581 | 723 | 617 | 574 | 481 | 563 | 479 | 440 | 459 |  | 83 | 197 | 131 |  | 258 |  | 453 |
| EarleyBoyer | 76677 | 55206 | 57219 | 74117 | 66241 | 73455 | 40110 | 39158 | 36522 | 24718 | 2141 | 1055 | 1142 | 1004 | 930 | 958 | 920 | 610 | 488 | 555 |  | 73 | 396 | 125 |  | 291 |  | 861 |
| RegExp | 9527 | 17400 | 17620 | 9670 | 9183 | 9656 | 9110 | 7035 | 8577 | 1147 | 404 | 185 | 193 | 200 | 161 | 156 | 143 | 232 | 104 | 195 |  |  | 187 | 34 |  | 274 |  | 177 |
| Splay | 34336 | 32621 | 26787 | 33493 | 26586 | 12680 | 24129 | 23116 | 14163 | 2846 | 2247 | 1397 | 1399 | 1326 | 1278 | 1162 | 1217 | 1125 | 966 | 653 |  | 117 | 811 | 158 |  | 496 |  | 1202 |
| NavierStokes | 38173 | 33700 | 39544 | 38436 | 37877 | 38507 | 35397 | 21031 | 21876 | 23845 | 1029 | 1505 | 727 | 702 | 746 | 547 | 724 | 449 | 1001 | 471 |  | 56 | 187 | 158 |  | 147 |  | 741 |
| Score | 44196 | 40174 | 40149 | 39902 | 36780 | 35705 | 26685 | 17812 | 17288 | 10126 | 940 | 680 | 578 | 532 | 516 | 514 | 502 | 388 | 368 | 350 |  |  | 233 | 82 |  | 189 |  | 493 |
| Score/MB | 714 | 287 | 320 | 269 | 304 | 435 | 1710 | 334 | 214 | 51 | 10 | 76 | 13 | 11 | 57 | 80 | 48 | 47 | 45 | 42 |  |  | 11 | 1 |  | 1 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 56 | 61 | 61 | 66 | 66 | 69 | 81 | 87 | 84 | 137 | 391 | 133 | 316 |  | 150 | 83 | 63 |
