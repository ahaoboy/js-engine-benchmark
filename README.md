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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47800<br>98.9M<br>483/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47473<br>36.7M<br>1294/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46780<br>57.3M<br>816/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41967<br>108.9M<br>385/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39847<br>123.3M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39330<br>40.7M<br>967/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39145<br>66.3M<br>590/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20187<br>19.4M<br>1040/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19402<br>40.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17185<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16838<br>35.2M<br>478/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10441<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2955<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1526<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 863<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 821<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 758<br>1.4M<br>544/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 751<br>1.4M<br>533/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 723<br>831.3K<br>890/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 626<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 500<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 462<br>2.1M<br>217/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 385<br>446.6K<br>882/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 370<br>414.5K<br>914/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 358<br>685K<br>535/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 296<br>2.7K<br>112252/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 266<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/20/2025, 1:44:53 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | rquickjs-pgo | njs | primjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs | mujs-one | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.0 | 2.5.1 | 24.8.0 |  | 0.10.1 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.9M | 36.7M | 57.3M | 108.9M | 123.3M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.5M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 98.9M | 36.7M | 1M | 108.9M | 123.3M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.5M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.3M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40555 | 39867 | 36583 | 34751 | 32570 | 31962 | 32697 | 23592 | 13785 | 14191 | 12723 | 35034 | 12246 | 1116 | 676 | 683 | 676 | 574 | 573 | 556 | 583 | 580 | 535 | 354 | 256 | 275 | 223 | 242 | 129 | 89 | 197 | 102 | 60 | 58 | 269 | 29 |  | 129 |  |
| DeltaBlue | 55493 | 56220 | 101881 | 81583 | 74211 | 80201 | 73001 | 25668 | 13329 | 13058 | 12880 | 25488 | 544 | 1051 | 672 | 670 | 682 | 581 | 572 | 546 | 592 | 574 | 493 | 390 | 303 | 361 | 320 | 352 | 180 | 162 | 247 | 110 | 54 | 54 | 278 | 34 |  | 183 |  |
| Crypto | 49216 | 51647 | 38697 | 41463 | 41512 | 41217 | 41781 | 32010 | 20168 | 17433 | 17408 | 15982 | 7772 | 1369 | 580 | 749 | 593 | 555 | 531 | 882 | 508 | 380 | 826 | 426 | 776 | 189 | 184 | 187 | 156 | 326 | 123 | 92 | 80 | 61 | 300 | 36 |  | 135 |  |
| RayTrace | 115512 | 120396 | 111220 | 72149 | 66451 | 66895 | 67487 | 35519 | 27352 | 26714 | 27870 | 8797 | 1203 | 1561 | 1127 | 912 | 1069 | 923 | 906 | 684 | 877 | 726 | 765 | 456 | 549 | 518 | 478 | 514 | 427 | 501 | 269 | 256 | 164 | 135 | 346 | 97 |  | 423 |  |
| EarleyBoyer | 68666 | 66381 | 85238 | 75292 | 71451 | 69054 | 74356 | 7100 | 42287 | 36970 | 35789 | 23477 | 2361 | 3345 | 1844 | 1449 | 1740 | 1332 | 1350 | 1679 | 1340 | 1216 | 986 | 852 | 560 | 507 | 493 | 504 | 599 | 321 | 495 | 283 | 188 | 134 |  | 86 |  | 496 |  |
| RegExp | 20547 | 19528 | 10354 | 10072 | 9991 | 8965 | 10142 | 7819 | 8667 | 8919 | 8758 | 728 | 677 | 552 | 253 | 223 | 227 | 226 | 221 | 116 | 230 | 181 | 64 | 179 | 133 | 239 | 195 | 210 | 432 | 96 | 207 | 242 | 48 | 93 |  |  |  |  |  |
| Splay | 37681 | 35445 | 41821 | 38627 | 34381 | 34145 | 27992 | 19828 | 24268 | 12114 | 11748 | 2303 | 4396 | 3400 | 2282 | 1757 | 1848 | 2204 | 2165 | 2088 | 1722 | 1636 | 1472 | 1270 | 903 | 877 | 1201 | 649 | 859 | 390 | 764 | 444 | 223 | 314 |  | 134 |  | 722 |  |
| NavierStokes | 40068 | 40284 | 38732 | 38732 | 38842 | 38321 | 38803 | 36397 | 22275 | 22067 | 22067 | 28556 | 13290 | 1866 | 967 | 1269 | 966 | 959 | 987 | 1224 | 911 | 928 | 1528 | 747 | 926 | 464 | 478 | 484 | 171 | 865 | 198 | 160 | 176 | 119 |  | 57 |  | 272 |  |
| Score | 47800 | 47473 | 46780 | 41967 | 39847 | 39330 | 39145 | 20187 | 19402 | 17185 | 16838 | 10441 | 2955 | 1526 | 863 | 830 | 821 | 758 | 751 | 741 | 723 | 647 | 626 | 500 | 462 | 385 | 370 | 358 | 296 | 266 | 266 | 184 | 106 | 103 |  |  |  |  |  |
| Score/MB | 483 | 1294 | 816 | 385 | 323 | 967 | 590 | 1040 | 484 | 337 | 478 | 52 | 2 | 42 | 70 | 194 | 159 | 544 | 533 | 87 | 890 | 327 | 13 |  | 217 | 882 | 914 | 535 | 112252 | 127 | 20 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 35 | 34 | 47 | 48 | 50 | 52 | 53 | 61 | 52 | 59 | 83 | 63 | 69 | 81 | 86 | 82 | 97 | 131 | 115 | 148 | 238 | 237 | 31 | 360 |  | 89 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs | rquickjs | quickjs-ng | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.164 |  | 1.2.22 | 2.5.1 | 24.8.0 | 0.10.1 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 2025.04.26 |  | 0.8.0 |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 40.9M | 0.2K | 57.1M | 88M | 111.8M | 56.8M | 132.3M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 975.9K | 1.2M | 4.1M | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 40.9M | 0.2K | 57.1M | 88M | 111.8M | 56.8M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 975.9K | 1.2M | 2.1M | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 45533 | 42458 | 49885 | 50439 | 44865 | 44428 | 14149 | 13789 | 13888 | 32383 | 12892 | 946 | 1027 | 1159 | 845 | 859 | 819 | 1201 | 823 | 702 | 482 | 539 | 302 | 316 | 103 | 140 | 136 | 87 | 39 | 193 | 29 |  | 210 |
| DeltaBlue | 134795 | 67262 | 72617 | 100347 | 94555 | 103587 | 15174 | 15379 | 16325 | 19637 | 244 | 983 | 1202 | 1081 | 1029 | 851 | 947 | 809 | 760 | 729 | 578 | 590 | 489 | 300 | 178 | 214 | 142 | 88 | 41 | 222 | 34 |  | 155 |
| Crypto | 56086 | 70194 | 68592 | 50904 | 55050 | 45694 | 21139 | 20814 | 21297 | 29712 | 3155 | 1086 | 1621 | 1058 | 902 | 1084 | 933 | 819 | 1545 | 1108 | 1265 | 522 | 246 | 168 | 376 | 133 | 133 | 103 | 40 | 233 | 58 |  | 120 |
| RayTrace | 132088 | 165314 | 145556 | 70817 | 78883 | 71261 | 44207 | 44325 | 41652 | 1327 | 831 | 1875 | 1237 | 1666 | 1734 | 871 | 1054 | 910 | 1080 | 714 | 880 | 810 | 662 | 265 | 607 | 665 | 323 | 194 | 36 | 266 | 131 |  | 488 |
| EarleyBoyer | 106428 | 89279 | 66715 | 86830 | 76613 | 75325 | 42444 | 45781 | 39602 | 11840 | 864 | 4047 | 1040 | 2290 | 2132 | 1591 | 1562 | 1385 | 1459 | 1914 | 938 | 1319 | 767 | 527 | 346 | 674 | 332 | 170 | 70 |  | 116 |  | 481 |
| RegExp | 13959 | 21161 | 24002 | 9255 | 11001 | 11851 | 8158 | 11489 | 9900 | 1138 | 468 | 563 | 252 | 268 | 271 | 201 | 243 | 181 | 91 | 192 | 197 | 248 | 279 | 256 | 283 | 576 | 174 | 113 | 13 |  |  |  |  |
| Splay | 67475 | 40167 | 30274 | 32865 | 27715 | 11343 | 19819 | 12411 | 13142 | 1765 | 1589 | 2551 | 3520 | 2481 | 2787 | 2151 | 2314 | 1471 | 1757 | 1726 | 1946 | 1737 | 1071 | 1154 | 504 | 787 | 530 | 446 | 139 |  | 199 |  | 643 |
| NavierStokes | 37470 | 33768 | 36841 | 33984 | 32254 | 36173 | 18347 | 16850 | 19196 | 16259 | 4712 | 1261 | 3017 | 1552 | 1220 | 2043 | 1291 | 1705 | 1789 | 1708 | 1405 | 861 | 609 | 303 | 906 | 170 | 207 | 199 | 72 |  | 101 |  | 293 |
| Score | 60125 | 55096 | 53244 | 44852 | 43934 | 39123 | 19967 | 19571 | 19379 | 7470 | 1495 | 1389 | 1273 | 1230 | 1130 | 996 | 982 | 907 | 902 | 902 | 793 | 711 | 491 | 345 | 342 | 329 | 219 | 150 | 46 |  |  |  |  |
| Score/MB | 1470 | 335885716 | 932 | 509 | 393 | 688 | 150 | 596 | 418 | 38 |  | 88 | 723 | 341 | 107 | 1045 | 820 | 220 | 21 | 377 | 1444 |  | 1171 | 27 | 216 | 124767 | 2 | 12 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 47 | 34 | 43 | 41 | 42 | 46 | 45 | 50 | 64 | 51 | 51 | 51 | 62 | 97 | 98 | 99 | 125 | 166 | 625 | 38 | 261 |  | 90 |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | rquickjs | txiki.js | rquickjs-pgo | llrt | quickjs-emscripten | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.164 |  | 2.5.1 | 1.2.22 | 0.10.1 | 24.8.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 |  | 24.12.0 |  | 0.6.2.beta |  | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.7M | 125.1M | 149.5M | 139.4M | 82.1M | 120.9M | 15.7M | 52.8M | 77.2M | 197M | 89.8M | 12.8M | 10.5M | 41.9M | 10.2M | 45.7M | 0 | 10.1M | 8.6M | 8.5M | 8.5M | 20.5M | 99.3M | 47.6M | 43.9M | 6.5M | 18.4M | 0 | 0 |
| Exe size | 29.2M | 339.5K | 113.5M | 113.3M | 47.4M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 1.4M | 5.7M | 1M | 13.1M | 0 | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 32.5M | 124.7M | 36.1M | 26.1M | 34.8M | 35.5M | 15.3M | 18.9M | 34.6M | 196.7M | 86.8M | 7.9M | 9.1M | 36.2M | 9.2M | 32.6M | 0 | 8.5M | 7.8M | 7.8M | 7.8M | 7.2M | 30.5M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35846 | 35351 | 34868 | 35401 | 32450 | 32506 | 23850 | 13185 | 13958 | 35228 | 667 | 452 | 397 | 438 | 436 | 384 | 359 | 411 | 210 | 243 | 257 | 185 | 104 | 53 | 47 |  | 24 |  |  |
| DeltaBlue | 107620 | 46197 | 74720 | 38805 | 76148 | 69311 | 26711 | 13270 | 12939 | 26005 | 608 | 394 | 397 | 385 | 457 | 348 | 385 | 372 | 252 | 334 | 349 | 232 | 114 | 48 | 42 |  | 28 |  |  |
| Crypto | 37961 | 47836 | 41198 | 37319 | 40249 | 38729 | 33348 | 19745 | 16969 | 23357 | 762 | 459 | 493 | 410 | 323 | 388 | 419 | 103 | 311 | 184 | 176 | 114 | 90 | 58 | 73 |  | 37 |  |  |
| RayTrace | 106854 | 101526 | 65489 | 92499 | 67346 | 63713 | 47386 | 27870 | 26492 | 2653 | 954 | 553 | 614 | 716 | 613 | 612 | 452 | 572 | 455 | 439 | 452 | 227 | 259 | 125 | 133 |  | 81 |  |  |
| EarleyBoyer | 80670 | 61258 | 67611 | 57679 | 71081 | 64373 | 42575 | 40789 | 36299 | 18951 | 2146 | 985 | 995 | 1062 | 930 | 957 | 851 | 941 | 502 | 415 | 532 | 448 | 292 | 117 | 137 |  | 74 |  |  |
| RegExp | 9647 | 18147 | 9628 | 16820 | 9309 | 9128 | 9680 | 9047 | 8586 | 780 | 386 | 192 | 170 | 177 | 156 | 192 | 177 | 180 | 109 | 242 | 190 | 192 | 272 | 86 | 42 |  |  |  |  |
| Splay | 40746 | 32833 | 33764 | 33053 | 26248 | 27723 | 26403 | 23062 | 13356 | 2094 | 1929 | 1046 | 1233 | 1176 | 1214 | 1249 | 1231 | 969 | 990 | 1142 | 620 | 795 | 398 | 296 | 168 |  | 125 |  |  |
| NavierStokes | 38359 | 33768 | 38507 | 33734 | 38545 | 37618 | 35913 | 22112 | 21963 | 19974 | 1042 | 1012 | 737 | 637 | 748 | 699 | 741 | 659 | 1072 | 477 | 452 | 187 | 149 | 113 | 164 |  | 58 |  |  |
| Score | 45702 | 42050 | 39519 | 38793 | 38147 | 36859 | 28142 | 19154 | 17133 | 8774 | 915 | 556 | 541 | 537 | 518 | 517 | 495 | 420 | 380 | 371 | 345 | 248 | 184 | 94 | 86 |  |  |  |  |
| Score/MB | 741 | 336 | 264 | 278 | 464 | 304 | 1796 | 362 | 221 | 44 | 10 | 43 | 51 | 12 | 50 | 11 |  | 41 | 44 | 43 | 40 | 12 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 44 | 60 | 62 | 63 | 68 | 62 | 62 | 77 | 84 | 81 | 86 | 124 | 149 | 256 | 288 | 132 | 379 |  |  |
