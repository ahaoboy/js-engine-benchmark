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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47405<br>99.1M<br>478/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47198<br>57.9M<br>815/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46450<br>31.3M<br>1483/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41801<br>108.3M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40698<br>52.2M<br>779/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39569<br>106.5M<br>371/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38641<br>40.7M<br>950/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19743<br>19.3M<br>1022/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19637<br>39.8M<br>493/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17123<br>44.7M<br>383/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17035<br>32M<br>531/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11396<br>199.4M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2109<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1494<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 933<br>982.4K<br>972/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 906<br>12.3M<br>73/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 798<br>4.1M<br>196/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 758<br>1.4M<br>544/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 747<br>1.4M<br>530/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>1.9M<br>396/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 713<br>831.3K<br>878/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 642<br>1.2M<br>525/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 627<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 493<br>370.4K<br>1363/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 381<br>422.8K<br>922/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 378<br>685K<br>565/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 332<br>386.8K<br>878/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 296<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 268<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>1.9M<br>135/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 131<br>13.2M<br>9/M | ✅unix<br>✅macArm<br>❌windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| boa | [boa](https://github.com/boa-dev/boa) | 0<br>27M | ❌unix<br>❌macArm<br>❌windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/7/2025, 3:40:36 AM

### ubuntu
| Engine | bun | v8 | JavaScriptCore | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs | rquickjs-pgo | primjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | xst | JerryScript | nova | boa | engine262 | njs | quickjs-emscripten | ringo | goja | kiesel | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.3.0 |  | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.20.0 | 0.0.1 | 0.9.2 |  | 4.0.0 |  | 0.1.0.dev |  |  |  |
| Total size | 99.1M | 57.9M | 31.3M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 831.3K | 1.2M | 46.5M | 370.4K | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 27M | 0 | 1.9M | 0 | 0 | 13.2M | 13.2M | 11.3M | 0 | 42M |
| Exe size | 99.1M | 833.3K | 31.3M | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 831.3K | 1.2M | 46.5M | 370.4K | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 27M | 0 | 1.9M | 0 | 0 | 13.2M | 13.2M | 11.3M | 0 | 42M |
| Dll size | 0 | 57.1M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40029 | 37466 | 42168 | 35623 | 34727 | 32566 | 32640 | 23119 | 13478 | 14318 | 12864 | 35662 | 12204 | 1111 | 824 | 670 | 712 | 580 | 573 | 572 | 582 | 541 | 292 | 269 | 247 | 229 | 89 | 271 | 28 |  |  | 561 | 321 | 127 | 196 | 79 |  |  |  |
| DeltaBlue | 53463 | 103951 | 52180 | 81094 | 79196 | 71368 | 76770 | 24689 | 13634 | 13012 | 12827 | 26989 | 230 | 1054 | 724 | 686 | 680 | 586 | 581 | 594 | 580 | 481 | 324 | 357 | 351 | 319 | 162 | 279 | 34 |  |  | 544 | 388 | 196 | 246 | 69 |  |  |  |
| Crypto | 49181 | 38708 | 51693 | 41731 | 41722 | 41769 | 41388 | 31846 | 20445 | 17413 | 17940 | 22156 | 8370 | 1275 | 769 | 677 | 518 | 574 | 539 | 510 | 376 | 890 | 781 | 190 | 190 | 182 | 330 | 299 | 38 |  |  | 881 | 412 | 149 | 120 | 80 |  |  |  |
| RayTrace | 117658 | 110110 | 113810 | 70743 | 72519 | 65119 | 56387 | 33004 | 28609 | 26983 | 28063 | 5065 | 1123 | 1589 | 940 | 1195 | 1050 | 932 | 921 | 863 | 729 | 775 | 555 | 508 | 490 | 446 | 501 | 351 | 99 |  |  | 680 | 456 | 466 | 271 | 168 |  |  |  |
| EarleyBoyer | 67795 | 87214 | 66010 | 73540 | 74915 | 71517 | 70148 | 7053 | 42343 | 36001 | 37495 | 30725 | 822 | 3343 | 1413 | 1883 | 1693 | 1331 | 1302 | 1331 | 1201 | 972 | 540 | 472 | 444 | 429 | 322 |  | 85 |  |  | 1685 | 862 | 556 | 493 | 171 |  |  |  |
| RegExp | 20770 | 10525 | 18657 | 10092 | 10102 | 9981 | 8965 | 7720 | 9092 | 8947 | 8784 | 1194 | 531 | 547 | 235 | 268 | 223 | 218 | 218 | 224 | 182 | 64 | 128 | 234 | 208 | 191 | 95 |  |  |  |  | 115 | 177 | 433 | 206 | 120 |  |  |  |
| Splay | 36638 | 41764 | 33868 | 38211 | 30889 | 34422 | 35163 | 19452 | 24032 | 11887 | 11814 | 2139 | 6030 | 3069 | 2477 | 2231 | 1704 | 2109 | 2086 | 1657 | 1594 | 1373 | 1292 | 902 | 1153 | 636 | 362 |  | 131 |  |  | 2068 | 1239 | 860 | 875 | 393 |  |  |  |
| NavierStokes | 39920 | 38694 | 40136 | 38545 | 38694 | 38694 | 38436 | 36322 | 22238 | 22045 | 21941 | 33538 | 5617 | 1869 | 1615 | 1087 | 973 | 985 | 989 | 905 | 891 | 1551 | 951 | 482 | 480 | 474 | 861 |  | 60 |  |  | 1219 | 680 | 163 | 195 | 147 |  |  |  |
| Score | 47405 | 47198 | 46450 | 41801 | 40698 | 39569 | 38641 | 19743 | 19637 | 17123 | 17035 | 11396 | 2109 | 1494 | 933 | 906 | 798 | 758 | 747 | 713 | 642 | 627 | 493 | 381 | 378 | 332 | 263 |  |  |  |  | 740 | 484 | 296 | 268 | 131 |  |  |  |
| Score/MB | 478 | 815 | 1483 | 386 | 779 | 371 | 950 | 1022 | 493 | 383 | 531 | 57 |  | 41 | 972 | 73 | 196 | 544 | 530 | 878 | 525 | 13 | 1363 | 922 | 565 | 878 | 135 |  |  |  |  | 396 |  |  | 20 | 9 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 33 | 46 | 44 | 51 | 53 | 53 | 53 | 59 | 82 | 71 | 82 | 82 | 88 | 132 | 31 | 350 | 241 |  | 61 | 63 | 104 | 116 | 189 |  | 81 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bun | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | llrt | rquickjs | quickjs | ladybird | duktape | mujs | xst | JerryScript | nova | engine262 | njs | quickjs-emscripten | goja | ringo | kiesel | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 |  | 1.2.23 | 2.5.3 | 0.10.2 | 24.9.0 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 | 0.7.0.beta |  | 2025.09.13 |  | 2.99.99 | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.0.1 | 0.9.2 |  |  | 4.0.0 | 0.1.0.dev |  |  |  |
| Total size | 26M | 78.9M | 57.3M | 87.4M | 44.3M | 87.5M | 131.8M | 28.9M | 40M | 193.9M | 0 | 13.9M | 1.5M | 3.4M | 3.6M | 10.6M | 1.2M | 837K | 41.5M | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 2M | 0 | 12.7M | 0 | 12.4M | 8.8M | 0 | 60.2M |
| Exe size | 26M | 736.3K | 57.3M | 87.4M | 44.3M | 87.5M | 65.9M | 28.9M | 40M | 118.5K | 0 | 7M | 1.5M | 3.4M | 1.8M | 10.6M | 1.2M | 837K | 41.5M | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 1.5M | 0 | 12.7M | 0 | 12.4M | 8.8M | 0 | 59.6M |
| Dll size | 0 | 78.2M | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7M | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 43753 | 41900 | 48120 | 53779 | 55837 | 40541 | 15003 | 15332 | 13821 | 34716 | 3626 | 1206 | 1003 | 999 | 965 | 877 | 941 | 845 | 765 | 480 | 258 | 105 | 196 | 37 |  | 751 | 533 | 280 | 140 | 116 |  |  |  |
| DeltaBlue | 132851 | 63896 | 61410 | 104255 | 107091 | 91342 | 16391 | 16325 | 15419 | 38970 | 1521 | 1081 | 1175 | 789 | 1023 | 1026 | 956 | 740 | 747 | 552 | 409 | 194 | 217 | 46 |  | 819 | 583 | 263 | 217 | 83 |  |  |  |
| Crypto | 53584 | 62368 | 62600 | 55771 | 57646 | 55790 | 23655 | 21269 | 19918 | 40393 | 14053 | 1325 | 1669 | 866 | 1059 | 652 | 909 | 749 | 1532 | 1025 | 196 | 400 | 256 | 56 |  | 1190 | 474 | 136 | 126 | 125 |  |  |  |
| RayTrace | 142522 | 161466 | 158580 | 86653 | 96421 | 84211 | 49875 | 49825 | 31820 | 996 | 1723 | 2287 | 1407 | 1750 | 1193 | 1681 | 1089 | 1008 | 1198 | 900 | 582 | 603 | 325 | 134 |  | 854 | 688 | 452 | 688 | 254 |  |  |  |
| EarleyBoyer | 114909 | 95103 | 94821 | 95457 | 103986 | 94451 | 54348 | 46278 | 33978 | 18696 | 1095 | 4681 | 1302 | 2690 | 1990 | 2372 | 1692 | 1724 | 1598 | 1013 | 859 | 370 |  | 114 |  | 2301 | 1144 | 723 | 678 | 263 |  |  |  |
| RegExp | 15107 | 22547 | 25587 | 13493 | 14685 | 12468 | 11059 | 11831 | 10323 | 1416 | 956 | 647 | 306 | 272 | 252 | 247 | 220 | 252 | 93 | 221 | 291 | 302 |  |  |  | 193 | 223 | 270 | 594 | 170 |  |  |  |
| Splay | 67279 | 50101 | 33956 | 46148 | 13911 | 33990 | 28994 | 16926 | 15198 | 2797 | 2837 | 3895 | 4518 | 2779 | 2037 | 3085 | 2218 | 2524 | 1863 | 1374 | 1190 | 429 |  | 142 |  | 1903 | 1397 | 1270 | 666 | 681 |  |  |  |
| NavierStokes | 38469 | 38617 | 36137 | 37804 | 36322 | 35989 | 20270 | 20014 | 19234 | 20903 | 8581 | 1472 | 3293 | 1634 | 1515 | 877 | 1536 | 1410 | 1798 | 1178 | 613 | 991 |  | 97 |  | 1779 | 835 | 269 | 185 | 272 |  |  |  |
| Score | 61302 | 57027 | 55290 | 52852 | 47437 | 47302 | 23787 | 21701 | 18521 | 9788 | 2763 | 1697 | 1419 | 1188 | 1086 | 1057 | 1015 | 961 | 922 | 739 | 465 | 352 |  |  |  | 992 | 645 | 363 | 327 | 200 |  |  |  |
| Score/MB | 2361 | 723 | 965 | 604 | 1071 | 540 | 180 | 750 | 462 | 50 |  | 121 | 942 | 353 | 298 | 99 | 848 | 1175 | 22 | 1754 | 1156 | 238 |  |  |  | 491 |  | 28 |  | 16 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 36 | 31 | 38 | 40 | 41 | 46 | 44 | 45 | 63 | 50 | 67 | 97 | 36 | 255 |  | 50 | 59 | 90 | 96 | 129 |  |  |  |
### windows
| Engine | v8 | JavaScriptCore | dune | deno | node | bun | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | rquickjs | txiki.js | quickjs-ng | llrt | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | xst | duktape | nova | boa | engine262 | goja | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 |  | 0.10.2 | 2.5.3 | 24.9.0 | 1.2.23 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 |  | 24.12.0 | 0.10.1 | 0.7.0.beta |  |  |  | 1.3.8 |  | 2.7.0 |  | 0.20.0 | 0.0.1 |  |  |  |
| Total size | 61.9M | 125.2M | 82.1M | 148.2M | 120.8M | 139.6M | 15.6M | 52.6M | 77.1M | 197M | 115.8M | 8.9M | 10.5M | 40.1M | 9.7M | 45.6M | 10.2M | 0 | 8.3M | 8.2M | 6.5M | 8.2M | 17.5M | 43.8M | 0 | 20.5M | 39.7M | 0 |
| Exe size | 29.5M | 342.5K | 49.1M | 112.3M | 85.5M | 113.6M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 1.4M | 4.1M | 1.2M | 13.1M | 1M | 0 | 428K | 393.5K | 1.3M | 329.5K | 8.3M | 27.4M | 0 | 13.3M | 9.4M | 0 |
| Dll size | 32.4M | 124.9M | 33M | 35.9M | 35.3M | 26M | 15.3M | 18.8M | 34.4M | 196.7M | 112.8M | 7.9M | 9.1M | 36M | 8.5M | 32.5M | 9.2M | 0 | 7.8M | 7.8M | 5.2M | 7.8M | 9.2M | 16.5M | 0 | 7.2M | 30.3M | 0 |
| Richards | 37872 | 35178 | 35044 | 33413 | 31627 | 34225 | 23945 | 13281 | 13503 | 28143 | 667 | 646 | 403 | 444 | 395 | 375 | 433 | 349 | 254 | 253 |  | 210 | 24 |  |  | 187 |  |  |
| DeltaBlue | 108361 | 45403 | 80664 | 76439 | 65926 | 40702 | 27756 | 13316 | 12503 | 17191 | 607 | 520 | 400 | 363 | 381 | 362 | 463 | 380 | 350 | 355 |  | 256 | 27 |  |  | 234 |  |  |
| Crypto | 38372 | 48372 | 40748 | 38060 | 39206 | 38395 | 32908 | 20368 | 17600 | 16246 | 776 | 380 | 505 | 345 | 429 | 417 | 324 | 424 | 186 | 179 |  | 310 | 37 |  |  | 112 |  |  |
| RayTrace | 111368 | 104042 | 71483 | 66303 | 64453 | 79253 | 48744 | 25626 | 26613 | 2988 | 948 | 561 | 613 | 631 | 594 | 586 | 599 | 454 | 490 | 516 |  | 449 | 87 |  |  | 231 |  |  |
| EarleyBoyer | 86865 | 62890 | 74602 | 72961 | 66923 | 45813 | 42983 | 41302 | 36216 | 22766 | 2160 | 1055 | 1015 | 1049 | 982 | 1002 | 944 | 831 | 616 | 577 |  | 507 | 78 |  |  | 449 |  |  |
| RegExp | 9761 | 18801 | 9709 | 8331 | 9164 | 15604 | 9890 | 8719 | 8667 | 767 | 389 | 185 | 165 | 194 | 173 | 196 | 157 | 176 | 246 | 176 |  | 108 |  |  |  | 197 |  |  |
| Splay | 42131 | 35286 | 29410 | 29358 | 27788 | 26300 | 28832 | 23828 | 14619 | 2526 | 2141 | 1369 | 1288 | 1446 | 1256 | 1214 | 1246 | 1212 | 1142 | 1184 |  | 1025 | 129 |  |  | 833 |  |  |
| NavierStokes | 38617 | 33700 | 38507 | 34132 | 38139 | 39435 | 35877 | 22171 | 21919 | 18235 | 1028 | 1499 | 737 | 734 | 711 | 698 | 748 | 738 | 478 | 487 |  | 1039 | 57 |  |  | 191 |  |  |
| Score | 47093 | 42820 | 40151 | 37518 | 36883 | 36489 | 28766 | 19080 | 17281 | 8119 | 928 | 642 | 546 | 543 | 525 | 522 | 520 | 490 | 401 | 385 |  | 380 |  |  |  | 251 |  |  |
| Score/MB | 761 | 341 | 489 | 253 | 305 | 261 | 1844 | 362 | 224 | 41 | 8 | 71 | 52 | 13 | 54 | 11 | 50 |  | 48 | 46 |  | 46 |  |  |  | 12 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 43 | 65 | 62 | 63 | 62 | 61 | 67 | 63 | 77 | 85 | 132 | 85 | 373 | 283 |  | 122 |  | 83 |
