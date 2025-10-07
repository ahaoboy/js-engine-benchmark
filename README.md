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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48596<br>31.3M<br>1553/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48054<br>99.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47877<br>57.9M<br>827/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41797<br>108.3M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40830<br>52.2M<br>781/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39805<br>106.5M<br>373/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38678<br>40.7M<br>951/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20088<br>19.3M<br>1040/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19651<br>39.8M<br>494/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17203<br>32M<br>536/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17006<br>44.7M<br>380/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11640<br>199.4M<br>58/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2667<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1543<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 941<br>982.4K<br>980/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 929<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 822<br>4.1M<br>202/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 768<br>1.4M<br>551/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 743<br>1.9M<br>398/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 734<br>831.3K<br>904/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 654<br>1.2M<br>535/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 599<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 513<br>370.4K<br>1418/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 398<br>422.8K<br>963/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 383<br>386.8K<br>1013/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 382<br>685K<br>571/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 303<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>1.9M<br>136/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 135<br>13.2M<br>10/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 0<br>13.2M | ❌unix<br>❌macArm<br>❌windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/7/2025, 1:43:19 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | dune | node | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs | rquickjs-pgo | njs | primjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | xst | kiesel | boa | JerryScript | nova | engine262 | goja | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.8 |  | 4.0.0 | 16.9.1 | 0.1.0.dev | 0.20.0 | 3.0.0 |  | 0.0.1 |  |  |  |  |
| Total size | 31.3M | 99.1M | 57.9M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 32M | 44.7M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 1.9M | 831.3K | 1.2M | 46.5M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 1.9M | 13.2M | 27M | 454.2K | 8.5M | 0 | 13.2M | 11.3M | 0 | 42M |
| Exe size | 31.3M | 99.1M | 833.3K | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 32M | 44.7M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 1.9M | 831.3K | 1.2M | 46.5M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 1.9M | 13.2M | 27M | 454.2K | 8.5M | 0 | 13.2M | 11.3M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41656 | 41455 | 38034 | 35853 | 35147 | 31666 | 32460 | 23412 | 13111 | 13376 | 13284 | 35553 | 12825 | 1120 | 787 | 711 | 714 | 578 | 570 | 564 | 576 | 587 | 540 | 294 | 321 | 276 | 231 | 247 | 126 | 90 | 80 | 60 | 277 | 30 |  |  |  |  |  |
| DeltaBlue | 56418 | 55638 | 105769 | 80241 | 79837 | 74118 | 74945 | 22725 | 13448 | 12853 | 13072 | 37383 | 996 | 1028 | 731 | 692 | 679 | 590 | 585 | 542 | 597 | 582 | 480 | 333 | 387 | 359 | 327 | 359 | 208 | 163 | 72 | 54 | 280 | 35 |  |  |  |  |  |
| Crypto | 52775 | 49173 | 39065 | 42106 | 41839 | 41913 | 41226 | 32549 | 20947 | 17622 | 17723 | 26690 | 3947 | 1371 | 798 | 678 | 524 | 562 | 539 | 887 | 516 | 382 | 856 | 809 | 411 | 188 | 186 | 190 | 148 | 326 | 80 | 80 | 296 | 38 |  |  |  |  |  |
| RayTrace | 117436 | 117510 | 112330 | 72741 | 72371 | 65785 | 55647 | 36185 | 27842 | 27972 | 27130 | 2658 | 1236 | 1582 | 939 | 1214 | 1066 | 920 | 903 | 685 | 912 | 714 | 789 | 595 | 449 | 539 | 498 | 533 | 498 | 499 | 177 | 164 | 352 | 103 |  |  |  |  |  |
| EarleyBoyer | 69708 | 66854 | 88811 | 74727 | 75624 | 72539 | 70371 | 7110 | 42631 | 37328 | 36997 | 38465 | 1606 | 3386 | 1535 | 1906 | 1767 | 1389 | 1368 | 1682 | 1394 | 1225 | 1000 | 605 | 858 | 563 | 511 | 547 | 567 | 325 | 179 | 194 |  | 89 |  |  |  |  |  |
| RegExp | 19859 | 21317 | 10595 | 10082 | 10092 | 9971 | 8956 | 8092 | 9155 | 8793 | 8956 | 1400 | 594 | 556 | 237 | 267 | 228 | 230 | 218 | 116 | 236 | 182 | 64 | 135 | 181 | 243 | 200 | 217 | 451 | 96 | 127 | 49 |  |  |  |  |  |  |  |
| Splay | 37796 | 37201 | 42709 | 39768 | 30755 | 35440 | 37013 | 19865 | 24847 | 12533 | 11515 | 2438 | 3089 | 3648 | 2551 | 2420 | 1932 | 2282 | 2265 | 2106 | 1828 | 1706 | 925 | 1316 | 1252 | 965 | 1347 | 868 | 863 | 388 | 407 | 207 |  | 137 |  |  |  |  |  |
| NavierStokes | 40810 | 40244 | 38912 | 35284 | 38732 | 37990 | 38469 | 37026 | 22297 | 22002 | 21963 | 27224 | 13933 | 1868 | 1531 | 1111 | 985 | 941 | 975 | 1218 | 866 | 942 | 1574 | 949 | 684 | 479 | 480 | 486 | 168 | 860 | 144 | 175 |  | 60 |  |  |  |  |  |
| Score | 48596 | 48054 | 47877 | 41797 | 40830 | 39805 | 38678 | 20088 | 19651 | 17203 | 17006 | 11640 | 2667 | 1543 | 941 | 929 | 822 | 768 | 756 | 743 | 734 | 654 | 599 | 513 | 485 | 398 | 383 | 382 | 303 | 266 | 135 | 105 |  |  |  |  |  |  |  |
| Score/MB | 1553 | 484 | 827 | 386 | 781 | 373 | 951 | 1040 | 494 | 536 | 380 | 58 |  | 42 | 980 | 75 | 202 | 551 | 537 | 398 | 904 | 535 | 12 | 1418 |  | 963 | 1013 | 571 |  | 136 | 10 | 3 |  |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 40 | 34 | 45 | 43 | 50 | 51 | 53 | 61 | 52 | 59 | 81 | 67 | 64 | 79 | 84 | 80 | 101 | 130 | 185 | 234 | 31 | 343 |  | 114 |  | 79 | 7 |
### macos-arm64
| Engine | bun | dune | v8 | node | deno | spiderfire | mozjs | spidermonkey | graaljs | jjs | hermes | txiki.js | primjs | ladybird | njs | quickjs-ng | rquickjs | quickjs | llrt | quickjs-emscripten | duktape | mujs | ringo | xst | kiesel | JerryScript | nova | engine262 | goja | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 0.10.2 | 14.3.36 | 24.9.0 | 2.5.3 |  |  | 144.0 | 24.1.2 |  | 0.12.0 | 24.12.0 |  |  | 0.9.2 | 0.10.1 |  | 2025.09.13 | 0.7.0.beta |  | 2.99.99 | 1.3.8 | 4.0.0 | 16.9.1 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |  |
| Total size | 57.3M | 44.3M | 26M | 87.5M | 87.4M | 40M | 28.9M | 131.8M | 193.9M | 0 | 13.9M | 3.4M | 1.5M | 41.5M | 2M | 3.6M | 1.2M | 837K | 10.6M | 0 | 431.4K | 411.6K | 0 | 1.5M | 12.7M | 482.8K | 7.4M | 0 | 12.7M | 8.8M | 0 | 60.2M |
| Exe size | 57.3M | 44.3M | 26M | 87.5M | 87.4M | 40M | 28.9M | 65.9M | 118.5K | 0 | 7M | 3.4M | 1.5M | 41.5M | 1.5M | 1.8M | 1.2M | 837K | 10.6M | 0 | 431.4K | 411.6K | 0 | 1.5M | 12.7M | 482.8K | 7.4M | 0 | 12.7M | 8.8M | 0 | 59.6M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 193.8M | 0 | 7M | 0 | 0 | 0 | 559.9K | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 42020 | 49042 | 31489 | 38871 | 34928 | 12119 | 14382 | 10647 | 21728 | 2981 | 1090 | 687 | 772 | 780 | 708 | 657 | 672 | 635 | 511 | 587 | 424 | 249 | 191 | 85 | 78 | 153 | 30 |  |  |  |  |  |
| DeltaBlue | 62422 | 93623 | 91322 | 68869 | 70112 | 15776 | 15419 | 10929 | 8311 | 592 | 933 | 766 | 796 | 604 | 754 | 681 | 672 | 592 | 519 | 637 | 451 | 423 | 216 | 148 | 81 | 171 | 41 |  |  |  |  |  |
| Crypto | 54794 | 53794 | 40243 | 44146 | 42284 | 20837 | 18246 | 17692 | 18523 | 4864 | 966 | 745 | 1211 | 1376 | 959 | 783 | 632 | 551 | 366 | 495 | 1013 | 198 | 124 | 279 | 108 | 186 | 53 |  |  |  |  |  |
| RayTrace | 107372 | 72815 | 99529 | 69189 | 80955 | 37221 | 38403 | 31904 | 4058 | 1137 | 1946 | 1291 | 1252 | 1198 | 749 | 958 | 852 | 774 | 1064 | 736 | 739 | 560 | 640 | 446 | 211 | 217 | 135 |  |  |  |  |  |
| EarleyBoyer | 71520 | 78532 | 72382 | 81099 | 76463 | 39494 | 39159 | 37785 | 16023 | 598 | 3537 | 1967 | 2012 | 1663 | 1865 | 1444 | 1282 | 1331 | 1658 | 1120 | 870 | 610 | 616 | 292 | 202 |  | 99 |  |  |  |  |  |
| RegExp | 25068 | 10968 | 10183 | 10808 | 9580 | 9689 | 10102 | 7985 | 917 | 468 | 442 | 211 | 197 | 86 | 173 | 178 | 179 | 189 | 204 | 227 | 178 | 218 | 563 | 226 | 110 |  |  |  |  |  |  |  |
| Splay | 28033 | 26399 | 33338 | 31651 | 19216 | 16592 | 15214 | 15141 | 1920 | 1248 | 2570 | 1825 | 426 | 1797 | 1562 | 1904 | 1812 | 1989 | 1940 | 1633 | 1355 | 781 | 773 | 354 | 381 |  | 176 |  |  |  |  |  |
| NavierStokes | 30449 | 33027 | 28464 | 31429 | 28316 | 20479 | 18256 | 15768 | 15800 | 2010 | 774 | 1343 | 2410 | 1583 | 1503 | 1528 | 1198 | 1183 | 746 | 880 | 1109 | 503 | 164 | 733 | 182 |  | 75 |  |  |  |  |  |
| Score | 46952 | 43784 | 41045 | 40424 | 36769 | 19304 | 19012 | 16195 | 7043 | 1272 | 1250 | 921 | 886 | 867 | 857 | 841 | 768 | 745 | 689 | 687 | 654 | 396 | 331 | 269 | 148 |  |  |  |  |  |  |  |
| Score/MB | 819 | 988 | 1581 | 462 | 420 | 482 | 657 | 122 | 36 |  | 89 | 274 | 588 | 20 | 424 | 231 | 641 | 911 | 65 |  | 1552 | 985 |  | 182 | 11 |  |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 46 | 39 | 47 | 47 | 64 | 53 | 50 | 53 | 54 | 56 | 55 | 55 | 77 | 103 | 121 | 161 | 46 | 288 |  | 89 |  |  |  |
### windows
| Engine | v8 | dune | deno | JavaScriptCore | bun | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-ng | rquickjs-pgo | quickjs-emscripten | mujs-pgo | duktape | mujs | kiesel | boa | xst | nova | engine262 | goja | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.36 | 0.10.2 | 2.5.3 |  | 1.2.23 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.7.0.beta | 0.10.1 |  |  |  | 2.7.0 | 1.3.8 | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |  |  |
| Total size | 61.8M | 82.1M | 148.2M | 125.2M | 139.6M | 120.8M | 15.6M | 52.6M | 77.1M | 197M | 89.6M | 8.9M | 41.4M | 10.5M | 45.6M | 9.7M | 10.2M | 0 | 8.3M | 8.2M | 8.2M | 33.4M | 43.8M | 6.5M | 17.5M | 0 | 20.5M | 39.7M | 0 |
| Exe size | 29.5M | 49.1M | 112.3M | 342.5K | 113.6M | 85.5M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 1.4M | 13.1M | 1.2M | 1M | 0 | 428K | 329.5K | 393.5K | 19.8M | 27.4M | 1.3M | 8.3M | 0 | 13.3M | 9.4M | 0 |
| Dll size | 32.4M | 33M | 35.9M | 124.9M | 26M | 35.3M | 15.3M | 18.8M | 34.4M | 196.7M | 86.6M | 7.9M | 37.3M | 9.1M | 32.5M | 8.5M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 13.6M | 16.5M | 5.2M | 9.2M | 0 | 7.2M | 30.3M | 0 |
| Richards | 37512 | 35203 | 35397 | 31306 | 27878 | 32287 | 23984 | 12698 | 14576 | 35803 | 666 | 651 | 447 | 388 | 391 | 399 | 429 | 361 | 253 | 211 | 249 | 50 | 50 |  | 24 |  |  |  |  |
| DeltaBlue | 105042 | 75996 | 80413 | 35278 | 40676 | 67149 | 25898 | 12926 | 12219 | 28034 | 593 | 518 | 401 | 395 | 368 | 382 | 442 | 402 | 342 | 262 | 352 | 48 | 44 |  | 28 |  |  |  |  |
| Crypto | 38274 | 42033 | 38977 | 40102 | 43971 | 40636 | 32385 | 17877 | 18125 | 20730 | 784 | 588 | 427 | 480 | 425 | 427 | 317 | 437 | 187 | 310 | 174 | 53 | 74 |  | 35 |  |  |  |  |
| RayTrace | 110850 | 72963 | 70373 | 104930 | 82065 | 65128 | 45583 | 26936 | 27602 | 3099 | 977 | 596 | 754 | 600 | 570 | 599 | 581 | 469 | 423 | 439 | 430 | 115 | 134 |  | 83 |  |  |  |  |
| EarleyBoyer | 84266 | 77858 | 74218 | 60897 | 53337 | 71438 | 40024 | 40886 | 37650 | 21278 | 2221 | 1056 | 1132 | 998 | 985 | 973 | 954 | 872 | 544 | 461 | 523 | 117 | 153 |  | 75 |  |  |  |  |
| RegExp | 9110 | 9930 | 9718 | 18002 | 17456 | 9699 | 9861 | 8848 | 8857 | 948 | 408 | 191 | 195 | 169 | 197 | 175 | 153 | 184 | 238 | 97 | 182 | 89 | 44 |  |  |  |  |  |  |
| Splay | 30355 | 31488 | 33851 | 33403 | 32971 | 30051 | 23078 | 23673 | 15565 | 3241 | 2237 | 1364 | 1341 | 1169 | 1274 | 1254 | 1250 | 1305 | 1133 | 995 | 648 | 302 | 171 |  | 127 |  |  |  |  |
| NavierStokes | 37508 | 39623 | 38249 | 33984 | 39692 | 38881 | 36173 | 22193 | 22557 | 22341 | 1042 | 1513 | 735 | 740 | 717 | 721 | 747 | 759 | 477 | 1073 | 457 | 105 | 170 |  | 58 |  |  |  |  |
| Score | 44217 | 40954 | 40537 | 39380 | 38656 | 38316 | 27228 | 18711 | 17877 | 9926 | 946 | 686 | 578 | 532 | 529 | 527 | 513 | 512 | 385 | 371 | 342 | 91 | 90 |  |  |  |  |  |  |
| Score/MB | 714 | 498 | 273 | 314 | 277 | 317 | 1745 | 355 | 231 | 50 | 10 | 76 | 13 | 50 | 11 | 54 | 50 |  | 46 | 45 | 41 | 2 | 2 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 55 | 59 | 62 | 60 | 62 | 67 | 63 | 80 | 91 | 88 | 267 | 267 | 138 | 388 |  | 119 |  | 80 |
