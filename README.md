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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47838<br>98.6M<br>485/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47705<br>36.5M<br>1308/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47661<br>57.5M<br>828/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare) | 40936<br>65.3M<br>626/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40010<br>106.3M<br>376/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39537<br>123.3M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38982<br>40.7M<br>958/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 38162<br>66.3M<br>575/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20177<br>19.4M<br>1039/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19306<br>39.8M<br>485/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17103<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16995<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12546<br>199.7M<br>62/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2572<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1527<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 857<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 824<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 765<br>831.3K<br>942/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 745<br>1.4M<br>529/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 733<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 732<br>1.4M<br>526/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 644<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 555<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 483<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 475<br>2.1M<br>223/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 368<br>446.6K<br>843/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 365<br>685K<br>545/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 354<br>414.5K<br>874/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 304<br>2.7K<br>115286/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/8/2025, 1:51:16 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | njs | rquickjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 |  | 14.2.0 |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.6M | 36.5M | 57.5M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 98.6M | 36.5M | 1M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 8.4M | 1.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.5M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42228 | 41434 | 38225 | 31888 | 32541 | 32400 | 32273 | 31994 | 23568 | 13136 | 14040 | 12981 | 35549 | 13598 | 1120 | 687 | 686 | 702 | 629 | 577 | 557 | 578 | 581 | 491 | 323 | 287 | 256 | 241 | 227 | 134 | 200 | 89 | 101 | 60 | 58 | 271 | 26 |  | 130 |  |
| DeltaBlue | 57457 | 57324 | 106787 | 77080 | 74442 | 70720 | 73682 | 71573 | 25334 | 13224 | 12714 | 12873 | 38229 | 551 | 1046 | 668 | 665 | 662 | 621 | 581 | 520 | 555 | 580 | 441 | 389 | 318 | 356 | 349 | 322 | 173 | 247 | 163 | 107 | 54 | 54 | 281 | 32 |  | 185 |  |
| Crypto | 48899 | 51728 | 41384 | 41686 | 41674 | 41331 | 41435 | 41773 | 32128 | 20340 | 17935 | 17298 | 28149 | 9717 | 1359 | 579 | 749 | 591 | 561 | 525 | 879 | 540 | 380 | 862 | 413 | 798 | 187 | 190 | 182 | 158 | 122 | 323 | 95 | 80 | 61 | 299 | 31 |  | 136 |  |
| RayTrace | 114920 | 118620 | 112108 | 72297 | 68153 | 65563 | 62085 | 67857 | 35854 | 27620 | 27057 | 28063 | 4577 | 1302 | 1574 | 1134 | 904 | 1081 | 965 | 910 | 681 | 889 | 688 | 554 | 451 | 574 | 523 | 520 | 472 | 486 | 268 | 497 | 248 | 164 | 135 | 342 | 88 |  | 421 |  |
| EarleyBoyer | 67037 | 65919 | 85031 | 69922 | 71350 | 70883 | 70036 | 65554 | 7123 | 41257 | 36194 | 37021 | 26412 | 753 | 3372 | 1858 | 1445 | 1742 | 1391 | 1359 | 1668 | 1238 | 1221 | 747 | 852 | 563 | 511 | 499 | 468 | 571 | 488 | 321 | 279 | 187 | 136 |  | 75 |  | 389 |  |
| RegExp | 20953 | 19780 | 10334 | 10193 | 10011 | 10032 | 8837 | 9951 | 7757 | 8947 | 8857 | 8874 | 1355 | 579 | 550 | 250 | 219 | 223 | 229 | 216 | 115 | 222 | 183 | 64 | 176 | 131 | 233 | 213 | 193 | 466 | 205 | 96 | 248 | 48 | 91 |  |  |  |  |  |
| Splay | 35946 | 35136 | 41275 | 38415 | 34438 | 34854 | 36679 | 27405 | 19681 | 23999 | 11936 | 11856 | 4026 | 3175 | 3445 | 2279 | 1757 | 1907 | 1767 | 2155 | 2041 | 2062 | 1620 | 1185 | 1239 | 896 | 669 | 749 | 902 | 901 | 906 | 368 | 466 | 213 | 339 |  | 86 |  | 817 |  |
| NavierStokes | 39840 | 40176 | 38765 | 38881 | 38803 | 38803 | 38397 | 38765 | 36730 | 22319 | 22090 | 22024 | 24338 | 14619 | 1849 | 916 | 1310 | 962 | 988 | 935 | 1222 | 941 | 933 | 1527 | 677 | 946 | 477 | 470 | 478 | 173 | 198 | 831 | 161 | 176 | 117 |  | 51 |  | 277 |  |
| Score | 47838 | 47705 | 47661 | 40936 | 40010 | 39537 | 38982 | 38162 | 20177 | 19306 | 17103 | 16995 | 12546 | 2572 | 1527 | 857 | 830 | 824 | 765 | 745 | 733 | 732 | 644 | 555 | 483 | 475 | 368 | 365 | 354 | 304 | 271 | 262 | 184 | 105 | 104 |  |  |  |  |  |
| Score/MB | 485 | 1308 | 828 | 626 | 376 | 320 | 958 | 575 | 1039 | 485 | 335 | 482 | 62 | 2 | 42 | 69 | 194 | 159 | 942 | 529 | 86 | 526 | 326 | 11 |  | 223 | 843 | 545 | 874 | 115286 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 44 | 33 | 47 | 49 | 50 | 51 | 53 | 61 | 53 | 59 | 86 | 64 | 70 | 82 | 83 | 86 | 97 | 116 | 132 | 145 | 239 | 237 | 31 | 412 |  | 89 | 7 |
### macos-arm64
| Engine | bun | deno | v8 | JavaScriptCore | bare | dune | node | spiderfire | mozjs | spidermonkey | graaljs | hermes | primjs | txiki.js | rquickjs | quickjs-ng | jjs | llrt | quickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 | 2.4.5 | 14.2.65 |  |  | 0.10.1 | 24.7.0 |  |  | 143.0 | 24.1.2 | 0.12.0 |  | 24.12.0 |  | 0.8.0 |  | 0.6.2.beta | 2025.04.26 | 0.9.2 |  | 2.99.99 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 85.5M | 41.3M | 0.2K | 45.6M | 56.8M | 111.7M | 46.3M | 32.8M | 131.7M | 194M | 15.7M | 1.8M | 3.6M | 1.2M | 4.1M | 0 | 10.5M | 975.9K | 2.4M | 41.4M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 56.8M | 85.5M | 41.3M | 0.2K | 45.6M | 56.8M | 111.7M | 46.3M | 32.8M | 65.9M | 147.4K | 7.9M | 1.8M | 3.6M | 1.2M | 2.1M | 0 | 10.5M | 975.9K | 1.8M | 41.4M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 46369 | 45931 | 35277 | 33897 | 43128 | 43206 | 42578 | 14947 | 13577 | 10283 | 35217 | 1231 | 999 | 1225 | 910 | 1220 | 557 | 786 | 861 | 575 | 617 | 493 | 496 | 270 | 99 | 300 | 182 | 153 | 91 | 38 | 170 | 34 |  | 180 |
| DeltaBlue | 65073 | 98794 | 76181 | 55625 | 101412 | 102985 | 93821 | 16404 | 16530 | 11544 | 44901 | 1123 | 1264 | 1037 | 941 | 1056 | 381 | 795 | 914 | 636 | 549 | 463 | 548 | 424 | 188 | 274 | 169 | 158 | 76 | 33 | 176 | 36 |  | 206 |
| Crypto | 69950 | 59894 | 48409 | 61528 | 45355 | 50131 | 55816 | 19903 | 20412 | 19780 | 32801 | 1418 | 1560 | 925 | 944 | 975 | 5065 | 722 | 1097 | 1019 | 1501 | 1124 | 507 | 257 | 345 | 152 | 122 | 116 | 92 | 40 | 233 | 41 |  | 125 |
| RayTrace | 149034 | 86727 | 130608 | 136676 | 73407 | 69263 | 82657 | 31492 | 38958 | 46027 | 1917 | 2333 | 1523 | 1584 | 1318 | 1411 | 1100 | 1285 | 821 | 782 | 951 | 1047 | 652 | 900 | 643 | 309 | 705 | 283 | 221 | 40 | 286 | 135 |  | 610 |
| EarleyBoyer | 91013 | 99551 | 104716 | 71925 | 73356 | 84808 | 87395 | 41456 | 37349 | 45774 | 49692 | 5040 | 1205 | 2642 | 2195 | 2192 | 1189 | 2030 | 1706 | 1865 | 1001 | 1057 | 1166 | 915 | 377 | 588 | 624 | 348 | 170 | 79 |  | 103 |  | 563 |
| RegExp | 25729 | 14623 | 10142 | 23706 | 12522 | 11965 | 11081 | 11512 | 9641 | 10223 | 1594 | 596 | 217 | 255 | 224 | 195 | 433 | 221 | 236 | 172 | 85 | 223 | 218 | 303 | 304 | 229 | 537 | 195 | 133 | 15 |  |  |  |  |
| Splay | 37744 | 48528 | 57973 | 36622 | 45089 | 37910 | 32148 | 19623 | 16803 | 22361 | 2552 | 2746 | 3463 | 1816 | 3077 | 1242 | 1204 | 3023 | 1911 | 1529 | 1938 | 1471 | 1763 | 835 | 406 | 1040 | 878 | 515 | 358 | 144 |  | 96 |  | 690 |
| NavierStokes | 36878 | 39138 | 34804 | 28493 | 37915 | 37694 | 37654 | 20989 | 20182 | 16374 | 18532 | 1183 | 3296 | 1622 | 1648 | 1366 | 1718 | 1461 | 2045 | 1519 | 1758 | 1283 | 914 | 506 | 903 | 274 | 190 | 170 | 202 | 67 |  | 68 |  | 285 |
| Score | 56410 | 53304 | 49563 | 48007 | 46763 | 46643 | 46432 | 20418 | 19602 | 19206 | 11787 | 1608 | 1316 | 1177 | 1130 | 1032 | 1029 | 1018 | 1013 | 827 | 783 | 767 | 662 | 486 | 339 | 332 | 332 | 216 | 148 | 47 |  |  |  |  |
| Score/MB | 993 | 623 | 1200 | 292668535 | 1026 | 821 | 415 | 440 | 597 | 145 | 60 | 102 | 747 | 326 | 944 | 250 |  | 96 | 1062 | 345 | 18 | 1397 |  | 1159 | 214 | 26 | 125904 | 2 | 11 | 44 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 32 | 44 | 41 | 42 | 46 | 54 | 46 | 43 | 53 | 70 | 49 | 53 | 63 | 101 | 94 | 95 | 133 | 164 | 592 | 38 | 313 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.65 |  |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  | 0.8.0 |  | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.4M | 122.1M | 55.8M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 86.6M | 37.3M | 11.8M | 9.2M | 42.2M | 9M | 9M | 0 | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.3M | 0 | 0 |
| Exe size | 29.4M | 338K | 26.1M | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 1.7M | 0 | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.4M | 0 | 0 |
| Dll size | 25M | 121.8M | 29.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.5M | 31.6M | 6.9M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38317 | 34991 | 32919 | 31376 | 32947 | 32993 | 33011 | 24613 | 13344 | 13842 | 35820 | 678 | 702 | 451 | 511 | 395 | 379 | 448 | 434 | 361 | 215 | 229 | 233 | 197 | 99 | 55 | 48 |  | 22 |  |  |
| DeltaBlue | 109280 | 46653 | 75044 | 40200 | 69080 | 65688 | 59526 | 29720 | 13131 | 13091 | 29420 | 164 | 598 | 403 | 465 | 403 | 370 | 469 | 403 | 397 | 264 | 339 | 323 | 234 | 116 | 52 | 41 |  | 27 |  |  |
| Crypto | 41630 | 49230 | 40768 | 47816 | 36937 | 40565 | 42043 | 33499 | 20778 | 17612 | 24146 | 1060 | 789 | 430 | 548 | 514 | 428 | 328 | 367 | 427 | 314 | 177 | 191 | 114 | 92 | 59 | 71 |  | 30 |  |  |
| RayTrace | 112182 | 105818 | 72149 | 100934 | 67931 | 65859 | 66895 | 52043 | 28342 | 27278 | 4804 | 3459 | 1013 | 734 | 515 | 596 | 574 | 589 | 583 | 459 | 436 | 481 | 472 | 231 | 264 | 131 | 131 |  | 82 |  |  |
| EarleyBoyer | 85123 | 65515 | 68904 | 58169 | 73601 | 70172 | 72898 | 42889 | 41388 | 36960 | 27589 | 776 | 2241 | 1124 | 1002 | 997 | 1019 | 935 | 975 | 860 | 520 | 591 | 581 | 455 | 295 | 123 | 141 |  | 70 |  |  |
| RegExp | 10011 | 18384 | 10122 | 17382 | 9489 | 9890 | 9546 | 10142 | 9038 | 8857 | 946 | 960 | 408 | 195 | 188 | 162 | 181 | 155 | 188 | 180 | 109 | 202 | 254 | 199 | 275 | 91 | 43 |  |  |  |  |
| Splay | 41943 | 36772 | 39833 | 34243 | 34397 | 33835 | 27194 | 19207 | 24423 | 14693 | 2540 | 4852 | 2457 | 1451 | 1028 | 1270 | 1320 | 1286 | 993 | 1271 | 1010 | 1173 | 587 | 896 | 522 | 329 | 172 |  | 82 |  |  |
| NavierStokes | 38990 | 33801 | 38990 | 33984 | 38990 | 38990 | 39029 | 36915 | 22341 | 22149 | 28790 | 2701 | 1082 | 742 | 1030 | 747 | 716 | 756 | 679 | 756 | 1065 | 483 | 473 | 192 | 151 | 114 | 160 |  | 49 |  |  |
| Score | 47800 | 43462 | 40926 | 40447 | 38998 | 38953 | 37701 | 28141 | 19518 | 17616 | 11118 | 1188 | 975 | 584 | 583 | 543 | 528 | 524 | 510 | 504 | 384 | 381 | 359 | 257 | 191 | 99 | 86 |  |  |  |  |
| Score/MB | 878 | 355 | 733 | 304 | 272 | 334 | 485 | 1952 | 380 | 241 | 56 | 67 | 11 | 15 | 49 | 59 | 12 | 58 | 56 |  | 50 | 50 | 47 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 46 | 42 | 60 | 58 | 61 | 61 | 67 | 63 | 62 | 84 | 83 | 78 | 122 | 148 | 249 | 284 | 130 | 432 |  |  |
