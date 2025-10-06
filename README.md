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


## Engine & Runtime (33/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48302<br>99.1M<br>487/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47655<br>31.3M<br>1522/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47593<br>57.9M<br>822/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42320<br>108.3M<br>390/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40981<br>52.2M<br>784/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40110<br>106.5M<br>376/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38693<br>40.7M<br>951/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20258<br>19.3M<br>1049/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19426<br>39.8M<br>488/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17174<br>44.7M<br>384/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17100<br>32M<br>533/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12567<br>199.4M<br>63/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2472<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1540<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 951<br>982.4K<br>991/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 933<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 819<br>4.1M<br>201/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 771<br>1.4M<br>554/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 769<br>831.3K<br>947/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 763<br>1.4M<br>542/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>1.9M<br>396/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 643<br>1.2M<br>526/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 612<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 507<br>370.4K<br>1401/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 404<br>422.8K<br>978/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>386.8K<br>987/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 368<br>685K<br>550/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 328<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>1.9M<br>135/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 97<br>13.6M<br>7/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/6/2025, 2:47:38 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs | primjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | goja | xst | boa | kiesel | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.3.0 | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.8 |  | 4.0.0 |  | 16.9.1 | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 99.1M | 31.3M | 57.9M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 831.3K | 1.4M | 1.9M | 1.2M | 46.5M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 13.2M | 1.9M | 27M | 13.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Exe size | 99.1M | 31.3M | 833.3K | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 831.3K | 1.4M | 1.9M | 1.2M | 46.5M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 13.2M | 1.9M | 27M | 13.6M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41374 | 40047 | 37759 | 35415 | 35030 | 31694 | 32481 | 23395 | 13383 | 14163 | 13143 | 34825 | 10700 | 1120 | 814 | 715 | 706 | 580 | 616 | 577 | 557 | 557 | 534 | 289 | 319 | 257 | 225 | 245 | 169 | 194 | 90 | 60 | 52 | 268 | 29 |  |  | 158 |  |
| DeltaBlue | 52861 | 51096 | 106748 | 79685 | 82026 | 75070 | 76148 | 25813 | 13442 | 12999 | 13045 | 25965 | 218 | 1048 | 728 | 701 | 680 | 592 | 623 | 581 | 540 | 539 | 495 | 329 | 387 | 356 | 318 | 361 | 194 | 248 | 163 | 55 | 48 | 276 | 35 |  |  | 199 |  |
| Crypto | 49273 | 51881 | 38913 | 41641 | 41880 | 41556 | 40864 | 32334 | 20575 | 17594 | 17758 | 12954 | 7431 | 1366 | 759 | 688 | 529 | 557 | 560 | 547 | 883 | 379 | 866 | 785 | 410 | 186 | 170 | 192 | 154 | 123 | 326 | 81 | 59 | 298 | 38 |  |  | 152 |  |
| RayTrace | 121802 | 118620 | 112626 | 72445 | 71409 | 65637 | 60309 | 35297 | 27722 | 26936 | 27842 | 13898 | 1388 | 1571 | 944 | 1176 | 1050 | 924 | 929 | 928 | 680 | 745 | 784 | 572 | 456 | 534 | 483 | 523 | 507 | 272 | 502 | 165 | 126 | 346 | 104 |  |  | 474 |  |
| EarleyBoyer | 69046 | 68510 | 86613 | 76956 | 76245 | 72092 | 68928 | 7143 | 40722 | 36705 | 36201 | 33247 | 926 | 3376 | 1550 | 1893 | 1741 | 1393 | 1434 | 1412 | 1673 | 1230 | 986 | 602 | 862 | 561 | 511 | 540 | 614 | 508 | 323 | 195 | 126 |  | 89 |  |  | 565 |  |
| RegExp | 21499 | 20254 | 10567 | 10021 | 10142 | 10072 | 8801 | 7870 | 8892 | 8839 | 8711 | 1282 | 811 | 556 | 243 | 270 | 227 | 229 | 235 | 223 | 115 | 181 | 64 | 134 | 180 | 244 | 202 | 215 | 421 | 211 | 96 | 48 | 93 |  |  |  |  |  |  |
| Splay | 38167 | 37967 | 41919 | 40501 | 30885 | 36565 | 35351 | 19949 | 24570 | 12127 | 12493 | 2643 | 5321 | 3634 | 2594 | 2445 | 1980 | 2283 | 1826 | 2233 | 2086 | 1674 | 1110 | 1323 | 1261 | 1219 | 1322 | 699 | 1009 | 899 | 365 | 222 | 317 |  | 141 |  |  | 875 |  |
| NavierStokes | 39840 | 40096 | 38842 | 38694 | 38765 | 38881 | 38436 | 36693 | 22216 | 22045 | 21898 | 33916 | 14529 | 1844 | 1607 | 1137 | 966 | 974 | 994 | 966 | 1218 | 925 | 1558 | 960 | 685 | 470 | 469 | 473 | 198 | 200 | 822 | 176 | 112 |  | 60 |  |  | 299 |  |
| Score | 48302 | 47655 | 47593 | 42320 | 40981 | 40110 | 38693 | 20258 | 19426 | 17174 | 17100 | 12567 | 2472 | 1540 | 951 | 933 | 819 | 771 | 769 | 763 | 739 | 643 | 612 | 507 | 486 | 404 | 373 | 368 | 328 | 273 | 263 | 107 | 97 |  |  |  |  |  |  |
| Score/MB | 487 | 1522 | 822 | 390 | 784 | 376 | 951 | 1049 | 488 | 384 | 533 | 63 |  | 42 | 991 | 75 | 201 | 554 | 947 | 542 | 396 | 526 | 13 | 1401 |  | 978 | 987 | 550 |  | 20 | 135 | 3 | 7 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 37 | 34 | 45 | 43 | 50 | 51 | 50 | 52 | 61 | 58 | 81 | 67 | 63 | 79 | 85 | 81 | 94 | 113 | 131 | 233 | 250 | 31 | 342 |  |  | 80 | 7 |
### macos-arm64
| Engine | v8 | bun | deno | node | dune | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | kiesel | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.34 | 1.2.23 | 2.5.3 | 24.9.0 | 0.10.2 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 | 2025.09.13 | 0.7.0.beta |  |  | 0.9.2 | 2.99.99 |  | 1.3.8 |  | 16.9.1 | 4.0.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 26M | 57.3M | 87.4M | 87.5M | 44.3M | 131.8M | 40M | 28.9M | 193.9M | 0 | 13.9M | 1.5M | 3.4M | 3.6M | 837K | 10.6M | 1.2M | 41.5M | 2M | 431.4K | 0 | 411.6K | 12.7M | 1.5M | 0 | 12.7M | 482.8K | 7.4M | 0 | 8.8M | 0 | 60.2M |
| Exe size | 26M | 57.3M | 87.4M | 87.5M | 44.3M | 65.9M | 40M | 28.9M | 118.5K | 0 | 7M | 1.5M | 3.4M | 1.8M | 837K | 10.6M | 1.2M | 41.5M | 1.5M | 431.4K | 0 | 411.6K | 12.7M | 1.5M | 0 | 12.7M | 482.8K | 7.4M | 0 | 8.8M | 0 | 59.6M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7M | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 44865 | 41028 | 58499 | 41628 | 52381 | 14078 | 13821 | 12080 | 35150 | 13009 | 1191 | 1082 | 991 | 1106 | 1057 | 891 | 936 | 772 | 726 | 490 | 582 | 387 | 312 | 114 | 150 | 89 | 193 | 37 |  |  |  |  |
| DeltaBlue | 127899 | 67837 | 113835 | 99475 | 101901 | 13878 | 13997 | 15948 | 31869 | 787 | 1140 | 1166 | 942 | 1124 | 1012 | 1027 | 974 | 716 | 787 | 558 | 614 | 580 | 383 | 198 | 215 | 87 | 216 | 46 |  |  |  |  |
| Crypto | 52805 | 66302 | 57754 | 59743 | 56859 | 20270 | 19481 | 21100 | 37166 | 6834 | 1328 | 1528 | 926 | 1104 | 826 | 632 | 894 | 1528 | 1094 | 1082 | 551 | 289 | 184 | 403 | 136 | 106 | 221 | 57 |  |  |  |  |
| RayTrace | 147554 | 162576 | 96199 | 79623 | 91833 | 38775 | 39328 | 46249 | 1030 | 566 | 2275 | 1554 | 1950 | 1313 | 1202 | 1643 | 1024 | 1374 | 747 | 1008 | 699 | 969 | 335 | 680 | 586 | 229 | 259 | 138 |  |  |  |  |
| EarleyBoyer | 113604 | 81723 | 100340 | 80730 | 91280 | 43352 | 44841 | 43284 | 28702 | 967 | 5044 | 1556 | 2813 | 2231 | 2094 | 2727 | 2064 | 1605 | 2058 | 1054 | 1300 | 949 | 702 | 399 | 580 | 178 |  | 120 |  |  |  |  |
| RegExp | 13637 | 25937 | 11194 | 13560 | 11229 | 10284 | 11649 | 9056 | 1330 | 917 | 580 | 270 | 295 | 263 | 275 | 260 | 231 | 101 | 177 | 212 | 231 | 305 | 279 | 313 | 454 | 116 |  |  |  |  |  |  |
| Splay | 54958 | 33711 | 44458 | 37152 | 24162 | 27568 | 15941 | 13731 | 3519 | 2516 | 3201 | 3830 | 3440 | 2773 | 2841 | 2784 | 2670 | 2353 | 1246 | 1527 | 1690 | 820 | 1304 | 475 | 820 | 443 |  | 215 |  |  |  |  |
| NavierStokes | 36397 | 37174 | 37915 | 37100 | 34952 | 19619 | 18882 | 17779 | 23596 | 9646 | 1403 | 3525 | 2032 | 1939 | 1503 | 970 | 1584 | 1731 | 1677 | 1301 | 963 | 719 | 294 | 1089 | 180 | 177 |  | 103 |  |  |  |  |
| Score | 58574 | 54661 | 53787 | 48321 | 47077 | 20944 | 19766 | 19137 | 10391 | 2324 | 1646 | 1425 | 1330 | 1243 | 1127 | 1078 | 1067 | 968 | 879 | 777 | 714 | 567 | 392 | 376 | 316 | 153 |  |  |  |  |  |  |
| Score/MB | 2256 | 954 | 615 | 552 | 1063 | 158 | 494 | 661 | 53 |  | 118 | 946 | 396 | 341 | 1378 | 101 | 891 | 23 | 435 | 1844 |  | 1410 | 30 | 255 |  | 12 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 42 | 33 | 39 | 39 | 39 | 41 | 44 | 43 | 59 | 55 | 51 | 51 | 58 | 85 | 91 | 100 | 167 | 36 | 248 |  |  |  |  |
### windows
| Engine | v8 | bun | deno | dune | JavaScriptCore | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-ng | quickjs-emscripten | rquickjs-pgo | mujs-pgo | mujs | duktape | goja | kiesel | boa | xst | nova | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.34 | 1.2.23 | 2.5.3 | 0.10.2 |  | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.7.0.beta | 0.10.1 |  |  |  | 1.3.8 | 2.7.0 |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |  |
| Total size | 60.5M | 139.6M | 148.2M | 82.1M | 125.2M | 120.8M | 15.6M | 53.7M | 77.1M | 197M | 115.8M | 8.9M | 40.1M | 10.5M | 45.6M | 6.4M | 0 | 10.2M | 8.3M | 8.2M | 8.2M | 20.5M | 33.4M | 43.8M | 6.5M | 17.5M | 0 | 39.7M | 0 |
| Exe size | 29.5M | 113.6M | 112.3M | 49.1M | 342.5K | 85.5M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 1.4M | 13.1M | 1.2M | 0 | 1M | 428K | 393.5K | 329.5K | 13.3M | 19.8M | 27.4M | 1.3M | 8.3M | 0 | 9.4M | 0 |
| Dll size | 31M | 26M | 35.9M | 33M | 124.9M | 35.3M | 15.3M | 19.9M | 34.4M | 196.7M | 112.8M | 7.9M | 36M | 9.1M | 32.5M | 5.2M | 0 | 9.2M | 7.8M | 7.8M | 7.8M | 7.2M | 13.6M | 16.5M | 5.2M | 9.2M | 0 | 30.3M | 0 |
| Richards | 36446 | 35383 | 32856 | 31179 | 33484 | 32291 | 23885 | 12790 | 13161 | 35528 | 678 | 638 | 444 | 394 | 375 | 511 | 355 | 360 | 256 | 253 | 206 | 174 | 47 | 49 |  | 23 |  |  | 139 |
| DeltaBlue | 103197 | 48147 | 75044 | 77960 | 43585 | 71017 | 26229 | 13475 | 12834 | 27431 | 614 | 514 | 406 | 397 | 353 | 484 | 379 | 444 | 348 | 356 | 254 | 218 | 46 | 40 |  | 26 |  |  | 160 |
| Crypto | 37229 | 40960 | 41389 | 41208 | 46884 | 41408 | 31676 | 20026 | 18032 | 18434 | 774 | 603 | 415 | 503 | 413 | 474 | 418 | 312 | 187 | 177 | 299 | 103 | 52 | 71 |  | 35 |  |  | 151 |
| RayTrace | 97309 | 98493 | 70817 | 71261 | 85765 | 59273 | 41768 | 27620 | 26788 | 2575 | 969 | 591 | 755 | 606 | 592 | 511 | 469 | 586 | 488 | 478 | 384 | 202 | 116 | 131 |  | 81 |  |  | 444 |
| EarleyBoyer | 83466 | 58924 | 73223 | 74333 | 55771 | 68839 | 40481 | 38739 | 31404 | 26547 | 2192 | 1075 | 1128 | 999 | 1016 | 954 | 877 | 938 | 624 | 611 | 484 | 413 | 115 | 141 |  | 74 |  |  | 532 |
| RegExp | 9436 | 16911 | 9374 | 9599 | 15607 | 9537 | 9146 | 8784 | 7622 | 931 | 414 | 190 | 193 | 161 | 199 | 160 | 177 | 147 | 243 | 192 | 107 | 200 | 87 | 41 |  |  |  |  |  |
| Splay | 41129 | 32727 | 33778 | 30192 | 25118 | 31961 | 23005 | 20104 | 14114 | 3577 | 2350 | 1395 | 1407 | 1229 | 1347 | 1162 | 1247 | 1255 | 1142 | 1149 | 667 | 867 | 290 | 153 |  | 125 |  |  | 837 |
| NavierStokes | 37842 | 39356 | 38507 | 38469 | 37694 | 38584 | 34212 | 20883 | 21706 | 22045 | 1056 | 1521 | 733 | 706 | 714 | 536 | 736 | 726 | 480 | 485 | 1030 | 192 | 102 | 161 |  | 56 |  |  | 301 |
| Score | 44962 | 41513 | 39922 | 39491 | 38509 | 38223 | 26477 | 18483 | 16677 | 9871 | 957 | 689 | 579 | 534 | 531 | 524 | 498 | 496 | 402 | 387 | 348 | 239 | 89 | 84 |  |  |  |  |  |
| Score/MB | 742 | 297 | 269 | 481 | 307 | 316 | 1697 | 343 | 216 | 50 | 8 | 77 | 14 | 50 | 11 | 82 |  | 48 | 48 | 47 | 42 | 11 | 2 | 1 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 54 | 60 | 63 | 60 | 66 | 63 | 69 | 77 | 82 | 86 | 129 | 273 | 299 | 132 | 394 |  |  | 81 |
