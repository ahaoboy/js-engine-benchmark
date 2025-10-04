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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48056<br>37.1M<br>1296/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47528<br>99.2M<br>479/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42075<br>108.3M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 41722<br>57.7M<br>722/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare) | 41176<br>65.3M<br>630/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40717<br>69.6M<br>584/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39731<br>123.4M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38723<br>40.7M<br>952/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20180<br>19.4M<br>1039/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19342<br>39.8M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17016<br>51M<br>333/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16954<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10098<br>199.7M<br>50/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2851<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1524<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 920<br>12.3M<br>74/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 918<br>4.5M<br>205/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 822<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 766<br>831.3K<br>943/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 755<br>1.4M<br>536/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 746<br>1.4M<br>536/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 738<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 642<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 627<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 501<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 381<br>446.6K<br>873/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 376<br>685K<br>562/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 316<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 192<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/4/2025, 4:31:39 AM

### ubuntu
| Engine | JavaScriptCore | bun | deno | v8 | bare | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 2.5.3 | 14.3.0 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.09.13 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37.1M | 99.2M | 108.3M | 57.7M | 65.3M | 69.6M | 123.4M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 414.5K | 685K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Exe size | 37.1M | 99.2M | 108.3M | 1M | 65.3M | 69.6M | 123.4M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 414.5K | 685K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41896 | 41452 | 35178 | 37473 | 32167 | 35115 | 32199 | 33523 | 23264 | 13231 | 13888 | 13125 | 35623 | 13411 | 1123 | 698 | 794 | 710 | 628 | 576 | 578 | 556 | 580 | 528 | 287 | 326 | 244 | 224 | 245 | 156 | 192 | 89 | 103 | 60 | 58 | 265 | 28 |  | 159 |  |
| DeltaBlue | 55281 | 52537 | 80981 | 108956 | 78449 | 80327 | 73880 | 76208 | 24826 | 13587 | 13032 | 12853 | 26705 | 379 | 1016 | 680 | 718 | 676 | 620 | 583 | 576 | 536 | 580 | 472 | 328 | 390 | 356 | 320 | 344 | 201 | 250 | 162 | 114 | 54 | 54 | 269 | 34 |  | 187 |  |
| Crypto | 51898 | 48812 | 41096 | 38682 | 41645 | 41836 | 40877 | 41287 | 32380 | 20291 | 17466 | 17433 | 28545 | 8284 | 1363 | 688 | 743 | 586 | 557 | 534 | 560 | 880 | 380 | 870 | 796 | 404 | 187 | 183 | 189 | 152 | 123 | 323 | 99 | 80 | 60 | 299 | 38 |  | 151 |  |
| RayTrace | 121506 | 118398 | 72519 | 112848 | 73037 | 70965 | 66451 | 60605 | 35928 | 27010 | 27030 | 27972 | 3785 | 1367 | 1582 | 1184 | 936 | 1034 | 959 | 915 | 888 | 676 | 680 | 773 | 578 | 455 | 522 | 486 | 519 | 528 | 271 | 500 | 252 | 163 | 139 | 349 | 99 |  | 472 |  |
| EarleyBoyer | 69486 | 69218 | 74700 | 87692 | 70195 | 75971 | 72554 | 67448 | 7159 | 41115 | 35394 | 36662 | 28026 | 1003 | 3372 | 1899 | 1519 | 1739 | 1390 | 1375 | 1245 | 1668 | 1210 | 986 | 574 | 860 | 527 | 503 | 520 | 568 | 499 | 320 | 287 | 191 | 134 |  | 87 |  | 551 |  |
| RegExp | 19638 | 20406 | 10082 | 10546 | 10203 | 9941 | 9991 | 8928 | 7870 | 8910 | 8883 | 8728 | 830 | 931 | 556 | 264 | 252 | 226 | 231 | 219 | 223 | 115 | 183 | 65 | 131 | 178 | 240 | 198 | 214 | 457 | 207 | 95 | 252 | 48 | 93 |  |  |  |  |  |
| Splay | 35693 | 36801 | 39776 | 14424 | 38773 | 31048 | 34463 | 34300 | 19922 | 24382 | 11962 | 11908 | 2424 | 4775 | 3488 | 2402 | 2540 | 1903 | 1802 | 2188 | 2151 | 2106 | 1627 | 1441 | 1276 | 1265 | 861 | 1307 | 915 | 880 | 872 | 373 | 524 | 218 | 315 |  | 138 |  | 892 |  |
| NavierStokes | 39988 | 39800 | 38617 | 38617 | 38765 | 38469 | 38469 | 38287 | 36470 | 22260 | 21876 | 21771 | 18661 | 17015 | 1806 | 1101 | 1312 | 957 | 979 | 974 | 969 | 1221 | 926 | 1541 | 955 | 686 | 482 | 478 | 477 | 174 | 201 | 899 | 164 | 175 | 119 |  | 60 |  | 298 |  |
| Score | 48056 | 47528 | 42075 | 41722 | 41176 | 40717 | 39731 | 38723 | 20180 | 19342 | 17016 | 16954 | 10098 | 2851 | 1524 | 920 | 918 | 822 | 766 | 755 | 746 | 738 | 642 | 627 | 501 | 486 | 381 | 376 | 376 | 316 | 271 | 265 | 192 | 106 | 103 |  |  |  |  |  |
| Score/MB | 1296 | 479 | 388 | 722 | 630 | 584 | 322 | 952 | 1039 | 486 | 333 | 481 | 50 |  | 42 | 74 | 205 | 159 | 943 | 536 | 536 | 87 | 325 | 13 | 235 |  | 873 | 928 | 562 |  | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 42 | 34 | 43 | 46 | 50 | 51 | 53 | 53 | 61 | 59 | 81 | 68 | 63 | 81 | 86 | 82 | 100 | 114 | 131 | 143 | 236 | 238 | 31 | 346 |  | 80 | 7 |
### macos-arm64
| Engine | v8 | bun | bare | dune | deno | node | mozjs | spiderfire | spidermonkey | graaljs | jjs | hermes | txiki.js | quickjs | quickjs-ng | ladybird | primjs | rquickjs | llrt | duktape | njs | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.32 | 1.2.23 |  | 0.10.2 | 2.5.3 | 24.9.0 |  |  | 144.0 | 24.1.2 |  | 0.12.0 | 24.12.0 | 2025.09.13 | 0.10.1 |  |  |  | 0.7.0.beta | 2.99.99 | 0.9.2 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 57.3M | 45.6M | 60M | 87.4M | 111.9M | 32.8M | 46.3M | 132M | 194M | 0 | 15.7M | 3.6M | 1014.3K | 3.8M | 41.5M | 1.8M | 1.2M | 10.6M | 562.1K | 2.4M | 0 | 429.1K | 12.7M | 0 | 1.6M | 75.4M | 12.4M | 1.1M | 91.9M | 575.4K | 7.4M | 0 | 0 |
| Exe size | 41.3M | 57.3M | 45.6M | 60M | 87.4M | 111.9M | 32.8M | 46.3M | 66M | 147.4K | 0 | 7.9M | 3.6M | 1014.3K | 1.9M | 41.5M | 1.8M | 1.2M | 10.6M | 562.1K | 1.8M | 0 | 429.1K | 12.7M | 0 | 1.6M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66M | 193.8M | 0 | 7.9M | 0 | 0 | 1.9M | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 91M | 0 | 0 | 0 | 0 |
| Richards | 40477 | 45194 | 44777 | 43919 | 53161 | 38084 | 14597 | 15455 | 13764 | 31691 | 2472 | 966 | 968 | 804 | 928 | 837 | 1026 | 826 | 698 | 422 | 698 | 563 | 312 | 331 | 182 | 96 | 142 | 98 | 38 |  | 190 | 39 |  |  |
| DeltaBlue | 113339 | 61503 | 104433 | 68710 | 95382 | 80770 | 16040 | 16265 | 15901 | 16040 | 858 | 784 | 949 | 823 | 892 | 767 | 1185 | 791 | 840 | 574 | 716 | 599 | 405 | 396 | 185 | 142 | 157 | 92 | 38 |  | 215 | 58 |  |  |
| Crypto | 53093 | 64563 | 56815 | 48578 | 52184 | 49037 | 21159 | 20158 | 23532 | 31107 | 11481 | 1029 | 868 | 1019 | 864 | 1642 | 1505 | 697 | 524 | 1254 | 1115 | 487 | 219 | 191 | 119 | 290 | 137 | 114 | 41 |  | 227 | 66 |  |  |
| RayTrace | 134160 | 127130 | 86283 | 81843 | 83767 | 81843 | 49875 | 39885 | 42507 | 1031 | 1188 | 1739 | 1530 | 968 | 1106 | 1304 | 1046 | 915 | 1309 | 1002 | 753 | 725 | 637 | 382 | 771 | 524 | 332 | 246 | 37 |  | 275 | 171 |  |  |
| EarleyBoyer | 103419 | 76827 | 92416 | 106188 | 85349 | 73718 | 50021 | 44773 | 44016 | 21097 | 1032 | 3451 | 2135 | 1706 | 1693 | 1777 | 1258 | 1468 | 2014 | 1132 | 2158 | 1157 | 774 | 823 | 649 | 312 | 360 | 232 | 71 |  |  | 137 |  |  |
| RegExp | 12884 | 25573 | 14336 | 14986 | 10557 | 12104 | 11558 | 11953 | 9628 | 1234 | 769 | 484 | 231 | 216 | 222 | 104 | 225 | 199 | 241 | 248 | 171 | 220 | 256 | 300 | 388 | 246 | 199 | 139 | 13 |  |  |  |  |  |
| Splay | 50753 | 38594 | 50035 | 44494 | 35514 | 32881 | 19884 | 19085 | 22997 | 1762 | 1422 | 3313 | 2722 | 2204 | 2102 | 1956 | 525 | 2371 | 1934 | 2336 | 1101 | 1400 | 804 | 1155 | 758 | 455 | 496 | 594 | 142 |  |  | 208 |  |  |
| NavierStokes | 33734 | 36101 | 38990 | 36582 | 35805 | 30358 | 20438 | 20459 | 19440 | 8998 | 14825 | 1132 | 1465 | 1998 | 1695 | 1974 | 3397 | 1359 | 850 | 1466 | 1367 | 727 | 537 | 313 | 175 | 968 | 144 | 222 | 65 |  |  | 109 |  |  |
| Score | 54207 | 53020 | 52673 | 48591 | 47380 | 42673 | 22155 | 21292 | 21243 | 7137 | 2166 | 1307 | 1116 | 1007 | 1007 | 998 | 996 | 889 | 867 | 858 | 834 | 647 | 444 | 413 | 318 | 303 | 218 | 180 | 46 |  |  |  |  |  |
| Score/MB | 1313 | 925 | 1156 | 809 | 542 | 381 | 675 | 459 | 160 | 36 |  | 83 | 309 | 1016 | 262 | 24 | 566 | 743 | 81 | 1562 | 348 |  | 1059 | 32 |  | 191 | 2 | 14 | 43 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 36 | 37 | 44 | 45 | 46 | 58 | 45 | 50 | 49 | 46 | 58 | 56 | 67 | 80 | 103 | 108 | 134 | 141 | 642 |  | 37 | 224 |  |  |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | bare | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-ng | rquickjs-pgo | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.32 |  | 2.5.3 | 1.2.23 | 24.9.0 |  | 0.10.2 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.7.0.beta | 0.10.1 |  |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 148.2M | 139.6M | 120.8M | 61M | 82.1M | 15.6M | 53.7M | 80.6M | 197.1M | 115.9M | 13M | 41.7M | 10.5M | 45.6M | 6.8M | 10.2M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 342.5K | 112.3M | 113.6M | 85.5M | 26.1M | 49.1M | 342.9K | 33.8M | 42.6M | 349.1K | 3M | 5.1M | 5.7M | 1.4M | 13.1M | 1.6M | 1M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 124.9M | 35.9M | 26M | 35.3M | 34.9M | 33M | 15.3M | 19.9M | 37.9M | 196.7M | 112.9M | 7.9M | 36M | 9.1M | 32.5M | 5.2M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 38101 | 35909 | 31977 | 33763 | 32556 | 30960 | 34264 | 24182 | 13454 | 13288 | 35609 | 663 | 636 | 435 | 400 | 383 | 511 | 426 | 339 | 251 | 203 | 255 | 176 | 70 | 48 | 46 |  | 25 |  | 118 |
| DeltaBlue | 107481 | 44246 | 73755 | 36662 | 69649 | 73450 | 51572 | 25422 | 13323 | 12397 | 31776 | 616 | 515 | 390 | 400 | 372 | 498 | 446 | 385 | 352 | 252 | 364 | 220 | 111 | 41 | 41 |  | 29 |  | 166 |
| Crypto | 37436 | 49051 | 41123 | 43818 | 41438 | 37491 | 37918 | 32993 | 20363 | 15402 | 21166 | 781 | 548 | 414 | 503 | 423 | 478 | 321 | 415 | 186 | 312 | 175 | 112 | 89 | 57 | 74 |  | 36 |  | 139 |
| RayTrace | 109962 | 102414 | 71039 | 90797 | 61345 | 69781 | 70377 | 50985 | 28063 | 26317 | 3108 | 978 | 585 | 739 | 600 | 620 | 455 | 595 | 441 | 490 | 444 | 493 | 230 | 265 | 115 | 135 |  | 90 |  | 417 |
| EarleyBoyer | 86018 | 64640 | 74423 | 53435 | 68657 | 65575 | 69740 | 41858 | 41715 | 32425 | 26980 | 2199 | 1071 | 1160 | 1023 | 1020 | 994 | 961 | 801 | 625 | 527 | 626 | 457 | 289 | 117 | 147 |  | 79 |  | 497 |
| RegExp | 9880 | 18673 | 9748 | 17875 | 9599 | 9192 | 8874 | 9809 | 8919 | 6819 | 1222 | 412 | 191 | 197 | 173 | 201 | 161 | 151 | 174 | 250 | 109 | 202 | 196 | 271 | 88 | 43 |  |  |  |  |
| Splay | 42163 | 36035 | 34568 | 34027 | 31953 | 30343 | 21773 | 27764 | 24252 | 13169 | 4311 | 2375 | 1453 | 1462 | 1309 | 1349 | 1246 | 1307 | 1243 | 1202 | 1014 | 720 | 711 | 407 | 317 | 159 |  | 129 |  | 829 |
| NavierStokes | 38545 | 33882 | 38507 | 33586 | 38617 | 38397 | 37952 | 35841 | 22112 | 21052 | 18680 | 1071 | 1023 | 731 | 736 | 703 | 550 | 747 | 725 | 479 | 1060 | 475 | 183 | 146 | 111 | 163 |  | 57 |  | 298 |
| Score | 46869 | 43034 | 40075 | 39022 | 38359 | 37811 | 35301 | 28394 | 19445 | 15904 | 10889 | 959 | 650 | 579 | 549 | 540 | 528 | 517 | 484 | 405 | 380 | 369 | 242 | 174 | 91 | 86 |  |  |  |  |
| Score/MB | 758 | 343 | 270 | 279 | 317 | 619 | 430 | 1819 | 361 | 197 | 55 | 8 | 49 | 13 | 52 | 11 | 78 | 50 |  | 47 | 44 | 43 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 56 | 60 | 62 | 61 | 66 | 67 | 64 | 77 | 83 | 82 | 124 | 150 | 260 | 276 | 132 | 373 |  | 89 |
