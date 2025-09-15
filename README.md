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


## Engine & Runtime (35/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47535<br>57.4M<br>828/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47528<br>36.6M<br>1299/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47223<br>98.9M<br>477/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41685<br>108.8M<br>383/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40856<br>65.3M<br>625/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39162<br>123.3M<br>317/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38953<br>66.3M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37697<br>40.7M<br>927/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19391<br>19.4M<br>999/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19342<br>39.8M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17059<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16785<br>35.2M<br>476/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9793<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2575<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1521<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 859<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 823<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 814<br>5.2M<br>157/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 757<br>831.3K<br>932/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 743<br>1.4M<br>528/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 729<br>1.4M<br>523/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 634<br>2M<br>321/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 571<br>46.4M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 496<br>2.1M<br>233/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 490<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 383<br>685K<br>572/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 372<br>446.6K<br>852/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 337<br>414.5K<br>832/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 297<br>2.7K<br>112631/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 268<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 259<br>2.1M<br>124/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/15/2025, 1:50:49 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | njs | rquickjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.0 |  | 1.2.22 | 2.5.0 |  | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.4M | 36.6M | 98.9M | 108.8M | 65.3M | 123.3M | 66.3M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.4M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.6M | 98.9M | 108.8M | 65.3M | 123.3M | 66.3M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.4M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Dll size | 56.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37953 | 41325 | 40809 | 34610 | 31906 | 31122 | 32037 | 32481 | 23458 | 13997 | 14206 | 12271 | 40626 | 10163 | 1118 | 683 | 686 | 711 | 625 | 578 | 563 | 548 | 571 | 542 | 288 | 333 | 244 | 270 | 224 | 126 | 197 | 90 | 101 | 59 | 59 | 278 | 28 |  | 122 |  |
| DeltaBlue | 110807 | 57529 | 54289 | 76816 | 78621 | 71050 | 72267 | 77127 | 22646 | 13356 | 13005 | 12781 | 25270 | 342 | 1049 | 662 | 651 | 682 | 611 | 580 | 546 | 575 | 542 | 464 | 331 | 388 | 343 | 360 | 320 | 189 | 249 | 161 | 111 | 54 | 54 | 282 | 32 |  | 173 |  |
| Crypto | 41386 | 51630 | 49012 | 41887 | 41466 | 41670 | 41487 | 41206 | 31299 | 20369 | 17606 | 17519 | 14129 | 8378 | 1367 | 581 | 728 | 577 | 556 | 540 | 870 | 556 | 375 | 844 | 784 | 426 | 189 | 189 | 181 | 151 | 122 | 292 | 97 | 79 | 62 | 303 | 35 |  | 136 |  |
| RayTrace | 110406 | 118176 | 116400 | 72297 | 72001 | 66459 | 68153 | 53279 | 32379 | 27030 | 26687 | 28137 | 9167 | 1151 | 1557 | 1137 | 909 | 1073 | 943 | 901 | 680 | 902 | 712 | 558 | 569 | 443 | 499 | 527 | 480 | 428 | 264 | 495 | 249 | 164 | 136 | 342 | 93 |  | 428 |  |
| EarleyBoyer | 85886 | 65511 | 67852 | 76318 | 70119 | 71716 | 73680 | 68654 | 7119 | 40331 | 35370 | 36741 | 21761 | 1086 | 3343 | 1843 | 1426 | 1703 | 1366 | 1314 | 1665 | 1160 | 1214 | 770 | 555 | 852 | 503 | 506 | 460 | 579 | 485 | 320 | 275 | 184 | 134 |  | 80 |  | 394 |  |
| RegExp | 10243 | 19840 | 20547 | 10052 | 10223 | 9930 | 10112 | 8685 | 7622 | 9047 | 8745 | 8628 | 700 | 726 | 547 | 252 | 221 | 222 | 229 | 218 | 115 | 224 | 179 | 63 | 131 | 177 | 205 | 235 | 196 | 447 | 205 | 94 | 243 | 48 | 91 |  |  |  |  |  |
| Splay | 39817 | 34340 | 35229 | 38081 | 37307 | 32694 | 28008 | 32385 | 19273 | 23641 | 12139 | 11660 | 2048 | 4948 | 3452 | 2263 | 1758 | 1732 | 1744 | 2076 | 2049 | 2092 | 1562 | 1335 | 1284 | 1219 | 1196 | 673 | 632 | 952 | 870 | 369 | 446 | 208 | 342 |  | 133 |  | 848 |  |
| NavierStokes | 38732 | 40216 | 39840 | 38765 | 38765 | 38803 | 38803 | 38397 | 35509 | 22067 | 22002 | 22045 | 20398 | 14781 | 1822 | 945 | 1284 | 980 | 991 | 957 | 1216 | 934 | 933 | 1473 | 927 | 740 | 469 | 473 | 467 | 160 | 194 | 867 | 160 | 176 | 119 |  | 55 |  | 277 |  |
| Score | 47535 | 47528 | 47223 | 41685 | 40856 | 39162 | 38953 | 37697 | 19391 | 19342 | 17059 | 16785 | 9793 | 2575 | 1521 | 859 | 823 | 814 | 757 | 743 | 737 | 729 | 634 | 571 | 496 | 490 | 383 | 372 | 337 | 297 | 268 | 259 | 184 | 104 | 104 |  |  |  |  |  |
| Score/MB | 828 | 1299 | 477 | 383 | 625 | 317 | 587 | 927 | 999 | 486 | 334 | 476 | 49 | 2 | 42 | 70 | 192 | 157 | 932 | 528 | 87 | 523 | 321 | 12 | 233 |  | 572 | 852 | 832 | 112631 | 20 | 124 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 33 | 47 | 49 | 50 | 51 | 53 | 62 | 54 | 60 | 87 | 70 | 64 | 83 | 81 | 87 | 101 | 117 | 133 | 146 | 239 | 238 | 31 | 375 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | deno | bare | node | dune | spidermonkey | spiderfire | mozjs | graaljs | hermes | jjs | primjs | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | duktape | njs | ladybird | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.133 | 1.2.22 | 2.5.0 |  | 24.8.0 | 0.10.1 | 143.0 |  |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 2.99.99 | 0.9.2 |  |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41M | 57.1M | 87.9M | 45.6M | 111.8M | 56.8M | 131.7M | 46.3M | 32.8M | 194M | 15.7M | 0 | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 562.1K | 2.4M | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 0.2K | 41M | 57.1M | 87.9M | 45.6M | 111.8M | 56.8M | 65.9M | 46.3M | 32.8M | 147.4K | 7.9M | 0 | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 562.1K | 1.8M | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50358 | 42931 | 47728 | 55908 | 41688 | 44601 | 38522 | 14982 | 13623 | 14350 | 32012 | 1325 | 4907 | 1188 | 1323 | 992 | 1266 | 1143 | 1004 | 507 | 719 | 858 | 479 | 369 | 109 | 310 | 185 | 143 | 94 | 37 | 215 | 42 |  | 138 |
| DeltaBlue | 72703 | 133651 | 69536 | 108374 | 102099 | 91481 | 80016 | 17799 | 14030 | 16331 | 21402 | 1243 | 228 | 1305 | 1321 | 1073 | 1136 | 1088 | 1016 | 589 | 742 | 697 | 490 | 579 | 206 | 338 | 198 | 150 | 69 | 41 | 237 | 45 |  | 170 |
| Crypto | 71650 | 63006 | 68662 | 56711 | 54708 | 56705 | 45227 | 23880 | 17329 | 18255 | 38451 | 1470 | 5407 | 1745 | 1199 | 1026 | 1160 | 1313 | 970 | 1322 | 1023 | 1488 | 470 | 296 | 425 | 154 | 127 | 107 | 88 | 42 | 263 | 59 |  | 127 |
| RayTrace | 179595 | 157470 | 173601 | 88947 | 98493 | 85025 | 71557 | 51059 | 30574 | 37591 | 4026 | 2373 | 697 | 1824 | 2001 | 2044 | 1545 | 1190 | 1402 | 1096 | 810 | 948 | 544 | 947 | 686 | 287 | 602 | 268 | 191 | 39 | 311 | 145 |  | 532 |
| EarleyBoyer | 108253 | 117743 | 99023 | 105888 | 92905 | 93260 | 84641 | 51116 | 43287 | 36233 | 54221 | 4864 | 905 | 1471 | 3103 | 2849 | 2477 | 2282 | 2292 | 1128 | 2013 | 1197 | 1283 | 1025 | 414 | 582 | 558 | 336 | 176 | 79 |  | 122 |  | 634 |
| RegExp | 32887 | 14413 | 29213 | 15183 | 14699 | 13910 | 13234 | 11614 | 12575 | 9780 | 1498 | 724 | 1085 | 321 | 306 | 321 | 267 | 269 | 259 | 246 | 167 | 89 | 229 | 338 | 325 | 220 | 562 | 190 | 116 | 13 |  |  |  |  |
| Splay | 41120 | 54764 | 45879 | 55552 | 51470 | 43361 | 35514 | 26346 | 18604 | 15250 | 3014 | 4629 | 2626 | 4738 | 3227 | 3745 | 2247 | 2548 | 2985 | 2143 | 1450 | 1220 | 1927 | 968 | 494 | 994 | 952 | 503 | 373 | 118 |  | 173 |  | 829 |
| NavierStokes | 38436 | 35953 | 31663 | 40136 | 37433 | 39692 | 37618 | 21390 | 20566 | 19767 | 26162 | 1553 | 7857 | 4023 | 2075 | 1630 | 2058 | 2254 | 1685 | 1502 | 1438 | 1494 | 947 | 726 | 1109 | 242 | 163 | 165 | 194 | 62 |  | 95 |  | 268 |
| Score | 63522 | 60940 | 59923 | 56879 | 52793 | 50738 | 44335 | 23964 | 19521 | 19027 | 12706 | 1864 | 1744 | 1607 | 1507 | 1371 | 1295 | 1272 | 1194 | 888 | 864 | 798 | 651 | 589 | 385 | 331 | 329 | 206 | 142 | 45 |  |  |  |  |
| Score/MB | 387253748 | 1485 | 1049 | 646 | 1158 | 453 | 780 | 181 | 421 | 579 | 65 | 118 |  | 913 | 417 | 130 | 314 | 1334 | 998 | 1617 | 361 | 19 |  | 1405 | 243 | 25 | 124767 | 2 | 11 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 29 | 39 | 36 | 37 | 37 | 38 | 37 | 41 | 45 | 56 | 67 | 52 | 56 | 89 | 100 | 105 | 138 | 170 | 661 | 34 | 253 |  | 86 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | bare | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.133 |  | 1.2.22 | 2.5.0 |  | 24.8.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 133.1M | 145.7M | 55.8M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 86.6M | 11.8M | 37.3M | 42.2M | 8M | 9M | 9M | 0 | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.3M | 339.5K | 113.3M | 113.4M | 26.1M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.2M | 1M | 1.7M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 32.3M | 29.7M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.5M | 6.9M | 31.6M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38684 | 36015 | 36679 | 33424 | 32111 | 32877 | 33106 | 24613 | 14206 | 14446 | 36124 | 5858 | 703 | 506 | 451 | 385 | 441 | 444 | 434 | 381 | 236 | 212 | 226 | 190 | 107 | 54 | 47 |  | 24 |  |  |
| DeltaBlue | 110245 | 47863 | 45436 | 76664 | 77636 | 71626 | 75771 | 27743 | 13369 | 11928 | 28495 | 298 | 623 | 466 | 403 | 364 | 463 | 469 | 403 | 396 | 343 | 260 | 290 | 232 | 113 | 51 | 42 |  | 29 |  |  |
| Crypto | 41144 | 48426 | 44416 | 42196 | 40356 | 42067 | 41338 | 33525 | 20065 | 17952 | 20768 | 3226 | 788 | 544 | 432 | 427 | 328 | 328 | 365 | 429 | 181 | 312 | 172 | 113 | 92 | 59 | 75 |  | 38 |  |  |
| RayTrace | 111960 | 105300 | 104116 | 70965 | 72223 | 63649 | 67635 | 48617 | 28239 | 26714 | 2664 | 1515 | 1002 | 515 | 725 | 613 | 591 | 587 | 578 | 460 | 481 | 433 | 451 | 227 | 268 | 126 | 134 |  | 90 |  |  |
| EarleyBoyer | 83860 | 64030 | 58622 | 76500 | 71703 | 72533 | 74410 | 42771 | 42123 | 36967 | 26281 | 1694 | 2244 | 1009 | 1125 | 1016 | 945 | 938 | 994 | 876 | 591 | 516 | 571 | 456 | 301 | 125 | 145 |  | 78 |  |  |
| RegExp | 10102 | 19222 | 18038 | 9961 | 9570 | 9839 | 9680 | 10092 | 9173 | 8828 | 966 | 1010 | 405 | 190 | 196 | 182 | 162 | 156 | 187 | 181 | 202 | 109 | 256 | 202 | 279 | 90 | 42 |  |  |  |  |
| Splay | 42905 | 36402 | 33208 | 37853 | 39442 | 33762 | 28171 | 17949 | 23804 | 14864 | 2997 | 4387 | 2459 | 1047 | 1457 | 1327 | 1262 | 1247 | 985 | 1291 | 1190 | 733 | 685 | 831 | 542 | 327 | 185 |  | 132 |  |  |
| NavierStokes | 39060 | 33996 | 34178 | 38803 | 39138 | 38990 | 39029 | 36841 | 22216 | 22238 | 20628 | 3164 | 1083 | 1038 | 741 | 719 | 764 | 761 | 674 | 752 | 475 | 1081 | 472 | 191 | 150 | 116 | 167 |  | 59 |  |  |
| Score | 47938 | 43736 | 41760 | 41375 | 40812 | 39497 | 39181 | 27400 | 19623 | 17529 | 9861 | 1942 | 978 | 585 | 584 | 532 | 526 | 523 | 510 | 510 | 384 | 367 | 353 | 252 | 194 | 98 | 89 |  |  |  |  |
| Score/MB | 883 | 357 | 313 | 284 | 731 | 338 | 504 | 1901 | 382 | 240 | 50 | 110 | 11 | 49 | 15 | 12 | 65 | 58 | 56 |  | 50 | 48 | 46 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 36 | 42 | 58 | 60 | 61 | 65 | 66 | 63 | 63 | 82 | 84 | 79 | 122 | 149 | 249 | 278 | 131 | 367 |  |  |
