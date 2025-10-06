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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47933<br>31.3M<br>1531/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47819<br>99.1M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47341<br>57.9M<br>817/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41814<br>108.3M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40678<br>52.2M<br>778/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39526<br>106.5M<br>371/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38583<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20191<br>19.3M<br>1045/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19438<br>39.8M<br>488/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17145<br>32M<br>535/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17005<br>44.7M<br>380/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10073<br>199.4M<br>50/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2673<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1531<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 931<br>982.4K<br>970/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 924<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>4.1M<br>202/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 765<br>831.3K<br>942/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 762<br>1.4M<br>547/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>1.9M<br>395/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 643<br>1.2M<br>526/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 634<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 503<br>370.4K<br>1390/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 412<br>422.8K<br>997/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>386.8K<br>995/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 374<br>685K<br>559/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 307<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>1.9M<br>136/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 135<br>13.2M<br>10/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 0<br>13.2M | ❌unix<br>❌macArm<br>❌windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/6/2025, 1:51:41 PM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | dune | node | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | quickjs | llrt | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | xst | kiesel | boa | JerryScript | nova | engine262 | goja | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.8 |  | 4.0.0 | 16.9.1 | 0.1.0.dev | 0.20.0 | 3.0.0 |  | 0.0.1 |  |  |  |  |
| Total size | 31.3M | 99.1M | 57.9M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 32M | 44.7M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 1.2M | 46.5M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 1.9M | 13.2M | 27M | 454.2K | 8.5M | 0 | 13.2M | 11.3M | 0 | 42M |
| Exe size | 31.3M | 99.1M | 833.3K | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 32M | 44.7M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 1.2M | 46.5M | 370.4K | 0 | 422.8K | 386.8K | 685K | 0 | 1.9M | 13.2M | 27M | 454.2K | 8.5M | 0 | 13.2M | 11.3M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42112 | 41829 | 37325 | 35715 | 35094 | 32224 | 32425 | 22932 | 13383 | 13094 | 13658 | 35418 | 12698 | 1120 | 810 | 714 | 699 | 629 | 572 | 568 | 565 | 585 | 539 | 289 | 344 | 275 | 217 | 246 | 152 | 90 | 82 | 60 | 271 | 29 |  |  |  |  |  |
| DeltaBlue | 54547 | 55242 | 109915 | 76003 | 81299 | 73404 | 75355 | 25688 | 13554 | 13012 | 13105 | 25574 | 912 | 1065 | 734 | 695 | 665 | 623 | 587 | 583 | 513 | 582 | 491 | 325 | 374 | 361 | 324 | 357 | 201 | 165 | 72 | 54 | 284 | 35 |  |  |  |  |  |
| Crypto | 52063 | 48106 | 38692 | 41655 | 41612 | 41466 | 41403 | 32400 | 20443 | 17662 | 17740 | 14379 | 4434 | 1370 | 761 | 673 | 589 | 558 | 558 | 537 | 884 | 379 | 883 | 802 | 413 | 190 | 183 | 190 | 150 | 328 | 81 | 78 | 300 | 38 |  |  |  |  |  |
| RayTrace | 117362 | 118546 | 111072 | 71409 | 72223 | 66163 | 66155 | 36259 | 27010 | 28091 | 26936 | 6142 | 1251 | 1545 | 935 | 1200 | 1046 | 957 | 926 | 925 | 682 | 674 | 788 | 578 | 456 | 531 | 483 | 530 | 494 | 500 | 176 | 163 | 348 | 103 |  |  |  |  |  |
| EarleyBoyer | 67810 | 69167 | 84307 | 76945 | 74840 | 70897 | 69474 | 7053 | 41769 | 36887 | 36112 | 39970 | 745 | 3405 | 1517 | 1869 | 1743 | 1416 | 1394 | 1383 | 1676 | 1210 | 994 | 595 | 859 | 559 | 506 | 531 | 567 | 323 | 180 | 190 |  | 89 |  |  |  |  |  |
| RegExp | 20295 | 20778 | 10476 | 9951 | 10092 | 9900 | 8837 | 7757 | 8974 | 8801 | 8810 | 886 | 803 | 552 | 233 | 269 | 227 | 224 | 229 | 219 | 116 | 181 | 65 | 126 | 179 | 241 | 199 | 221 | 416 | 96 | 127 | 47 |  |  |  |  |  |  |  |
| Splay | 35871 | 36369 | 41911 | 38993 | 29915 | 33672 | 31073 | 20023 | 24390 | 12313 | 11682 | 1978 | 5028 | 3435 | 2461 | 2380 | 1915 | 1793 | 2212 | 2194 | 2106 | 1648 | 1406 | 1301 | 1236 | 1294 | 1316 | 778 | 855 | 373 | 399 | 213 |  | 139 |  |  |  |  |  |
| NavierStokes | 40216 | 39692 | 38655 | 38765 | 38694 | 38842 | 38469 | 36434 | 22260 | 22090 | 22002 | 18920 | 13477 | 1854 | 1538 | 1106 | 971 | 985 | 926 | 982 | 1219 | 929 | 1553 | 970 | 671 | 481 | 485 | 478 | 174 | 855 | 146 | 175 |  | 60 |  |  |  |  |  |
| Score | 47933 | 47819 | 47341 | 41814 | 40678 | 39526 | 38583 | 20191 | 19438 | 17145 | 17005 | 10073 | 2673 | 1531 | 931 | 924 | 823 | 765 | 762 | 756 | 737 | 643 | 634 | 503 | 486 | 412 | 376 | 374 | 307 | 265 | 135 | 104 |  |  |  |  |  |  |  |
| Score/MB | 1531 | 482 | 817 | 386 | 778 | 371 | 949 | 1045 | 488 | 535 | 380 | 50 |  | 42 | 970 | 75 | 202 | 942 | 547 | 537 | 395 | 526 | 13 | 1390 |  | 997 | 995 | 559 |  | 136 | 10 | 3 |  |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 40 | 33 | 46 | 44 | 50 | 51 | 51 | 52 | 61 | 59 | 81 | 68 | 63 | 79 | 86 | 81 | 101 | 131 | 184 | 239 | 31 | 343 |  | 113 |  | 80 | 7 |
### macos-arm64
| Engine | bun | deno | node | dune | v8 | mozjs | spidermonkey | spiderfire | graaljs | hermes | jjs | txiki.js | quickjs-ng | quickjs | llrt | njs | ladybird | primjs | rquickjs | duktape | quickjs-emscripten | mujs | xst | ringo | kiesel | JerryScript | nova | engine262 | goja | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 2.5.3 | 24.9.0 | 0.10.2 | 14.3.36 |  | 144.0 |  | 24.1.2 | 0.12.0 |  | 24.12.0 | 0.10.1 | 2025.09.13 | 0.7.0.beta | 0.9.2 |  |  |  | 2.99.99 |  | 1.3.8 | 16.9.1 | 4.0.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |  |
| Total size | 57.3M | 87.4M | 87.5M | 44.3M | 26M | 28.9M | 131.8M | 40M | 193.9M | 13.9M | 0 | 3.4M | 3.6M | 837K | 10.6M | 2M | 41.5M | 1.5M | 1.2M | 431.4K | 0 | 411.6K | 1.5M | 0 | 12.7M | 482.8K | 7.4M | 0 | 12.7M | 8.8M | 0 | 60.2M |
| Exe size | 57.3M | 87.4M | 87.5M | 44.3M | 26M | 28.9M | 65.9M | 40M | 118.5K | 7M | 0 | 3.4M | 1.8M | 837K | 10.6M | 1.5M | 41.5M | 1.5M | 1.2M | 431.4K | 0 | 411.6K | 1.5M | 0 | 12.7M | 482.8K | 7.4M | 0 | 12.7M | 8.8M | 0 | 59.6M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 193.8M | 7M | 0 | 0 | 1.8M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 48194 | 61330 | 44583 | 57136 | 42232 | 13362 | 11424 | 11809 | 36192 | 1299 | 3523 | 986 | 1057 | 941 | 886 | 688 | 857 | 558 | 613 | 452 | 393 | 302 | 95 | 139 | 67 | 129 | 23 |  |  |  |  |  |
| DeltaBlue | 72426 | 110609 | 104546 | 103395 | 125737 | 14976 | 12728 | 10969 | 47301 | 1192 | 772 | 1140 | 1034 | 1025 | 1057 | 813 | 718 | 789 | 864 | 554 | 465 | 536 | 176 | 226 | 71 | 174 | 30 |  |  |  |  |  |
| Crypto | 71791 | 60939 | 60674 | 58473 | 46417 | 21965 | 19882 | 13710 | 43882 | 1439 | 11694 | 1023 | 988 | 806 | 679 | 1181 | 1585 | 1371 | 814 | 1111 | 422 | 271 | 363 | 118 | 103 | 200 | 50 |  |  |  |  |  |
| RayTrace | 188623 | 94201 | 94053 | 94719 | 105300 | 50639 | 33192 | 25578 | 2938 | 2408 | 772 | 1721 | 1249 | 1095 | 1799 | 824 | 1268 | 1145 | 763 | 704 | 492 | 719 | 630 | 627 | 221 | 260 | 126 |  |  |  |  |  |
| EarleyBoyer | 104308 | 99830 | 97472 | 101614 | 76061 | 47256 | 32211 | 26728 | 40531 | 4982 | 1374 | 2884 | 2179 | 1902 | 2346 | 2260 | 1548 | 967 | 1412 | 859 | 971 | 836 | 351 | 609 | 211 |  | 105 |  |  |  |  |  |
| RegExp | 29275 | 14485 | 13756 | 12988 | 6308 | 12262 | 7795 | 6462 | 1251 | 701 | 706 | 249 | 239 | 227 | 252 | 188 | 93 | 156 | 227 | 158 | 165 | 279 | 281 | 536 | 117 |  |  |  |  |  |  |  |
| Splay | 39083 | 51103 | 40721 | 34780 | 36732 | 17398 | 17684 | 9510 | 2852 | 4635 | 1335 | 2147 | 2855 | 2502 | 2302 | 1567 | 1768 | 1744 | 1862 | 1350 | 1591 | 1266 | 381 | 601 | 409 |  | 207 |  |  |  |  |  |
| NavierStokes | 31164 | 37990 | 38063 | 35953 | 30063 | 20034 | 16456 | 16604 | 26982 | 1449 | 1488 | 1620 | 2006 | 1511 | 869 | 1617 | 1582 | 2624 | 1250 | 1274 | 677 | 674 | 900 | 125 | 188 |  | 103 |  |  |  |  |  |
| Score | 60343 | 56864 | 52218 | 52065 | 43882 | 21458 | 17011 | 13697 | 13088 | 1830 | 1620 | 1221 | 1190 | 1042 | 1038 | 936 | 917 | 912 | 839 | 680 | 533 | 530 | 327 | 295 | 146 |  |  |  |  |  |  |  |
| Score/MB | 1053 | 650 | 597 | 1175 | 1690 | 741 | 129 | 342 | 67 | 131 |  | 363 | 327 | 1274 | 98 | 464 | 22 | 605 | 701 | 1614 |  | 1318 | 221 |  | 11 |  |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 31 | 39 | 41 | 42 | 45 | 46 | 49 | 62 | 57 | 47 | 56 | 66 | 62 | 101 | 115 | 158 | 43 | 260 |  | 103 |  |  |  |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | quickjs-ng | llrt | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | duktape | boa | kiesel | xst | nova | engine262 | goja | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.36 |  | 1.2.23 | 2.5.3 | 0.10.2 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.10.1 | 0.7.0.beta |  |  |  | 1.3.8 | 2.7.0 | 0.20.0 | 0.1.0.dev |  |  | 0.0.1 |  |  |  |
| Total size | 61.8M | 125.2M | 139.6M | 148.2M | 82.1M | 120.8M | 15.6M | 53.7M | 77.1M | 197M | 89.6M | 8.9M | 42.7M | 10.5M | 6.4M | 45.6M | 10.2M | 0 | 8.3M | 8.2M | 8.2M | 43.8M | 33.4M | 6.5M | 17.5M | 0 | 20.5M | 39.7M | 0 |
| Exe size | 29.5M | 342.5K | 113.6M | 112.3M | 49.1M | 85.5M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 1.4M | 1.2M | 13.1M | 1M | 0 | 428K | 393.5K | 329.5K | 27.4M | 19.8M | 1.3M | 8.3M | 0 | 13.3M | 9.4M | 0 |
| Dll size | 32.4M | 124.9M | 26M | 35.9M | 33M | 35.3M | 15.3M | 19.9M | 34.4M | 196.7M | 86.6M | 7.9M | 38.6M | 9.1M | 5.2M | 32.5M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 16.5M | 13.6M | 5.2M | 9.2M | 0 | 7.2M | 30.3M | 0 |
| Richards | 38165 | 35708 | 34772 | 33382 | 35087 | 32139 | 23907 | 13242 | 13524 | 35369 | 676 | 641 | 444 | 399 | 515 | 385 | 430 | 354 | 255 | 252 | 208 | 49 | 48 |  | 23 |  |  |  |  |
| DeltaBlue | 108685 | 45185 | 39757 | 73715 | 75070 | 73298 | 26837 | 13356 | 12781 | 28497 | 614 | 525 | 393 | 396 | 488 | 366 | 438 | 385 | 350 | 348 | 253 | 42 | 45 |  | 27 |  |  |  |  |
| Crypto | 37151 | 46442 | 44385 | 41197 | 41435 | 39685 | 32116 | 17522 | 17762 | 18172 | 769 | 601 | 413 | 510 | 483 | 421 | 318 | 422 | 180 | 180 | 297 | 73 | 52 |  | 34 |  |  |  |  |
| RayTrace | 110702 | 89154 | 98197 | 69929 | 69781 | 51304 | 42179 | 25504 | 25848 | 3007 | 959 | 598 | 741 | 603 | 514 | 607 | 584 | 452 | 485 | 440 | 439 | 133 | 113 |  | 80 |  |  |  |  |
| EarleyBoyer | 85733 | 57928 | 56999 | 74063 | 71702 | 65499 | 39388 | 38807 | 36129 | 21626 | 2129 | 1076 | 1147 | 1013 | 996 | 945 | 945 | 850 | 612 | 613 | 508 | 135 | 113 |  | 73 |  |  |  |  |
| RegExp | 9761 | 18839 | 17603 | 9751 | 9709 | 9537 | 9137 | 8928 | 8577 | 959 | 402 | 191 | 196 | 160 | 158 | 191 | 151 | 177 | 245 | 199 | 93 | 42 | 84 |  |  |  |  |  |  |
| Splay | 42970 | 35798 | 33648 | 34088 | 28106 | 30563 | 21628 | 21196 | 12958 | 2173 | 2322 | 1369 | 1449 | 1288 | 1165 | 1257 | 1252 | 1199 | 1121 | 1196 | 872 | 169 | 274 |  | 130 |  |  |  |  |
| NavierStokes | 38655 | 33882 | 39583 | 38397 | 38249 | 38287 | 36101 | 22112 | 21832 | 26982 | 1039 | 1530 | 733 | 728 | 550 | 624 | 736 | 742 | 443 | 482 | 904 | 166 | 102 |  | 57 |  |  |  |  |
| Score | 46975 | 41526 | 41043 | 40111 | 39308 | 36991 | 26514 | 18346 | 16994 | 9512 | 944 | 691 | 580 | 542 | 531 | 517 | 511 | 493 | 394 | 385 | 356 | 87 | 87 |  |  |  |  |  |  |
| Score/MB | 759 | 331 | 294 | 270 | 478 | 306 | 1699 | 341 | 220 | 48 | 10 | 77 | 13 | 51 | 83 | 11 | 49 |  | 47 | 46 | 43 | 1 | 2 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 55 | 60 | 62 | 66 | 63 | 68 | 62 | 80 | 82 | 90 | 287 | 276 | 133 | 396 |  | 124 |  | 83 |
