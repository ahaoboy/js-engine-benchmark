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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48055<br>98.9M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47958<br>36.7M<br>1307/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47566<br>57.3M<br>829/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42042<br>108.9M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39828<br>123.3M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39320<br>40.7M<br>967/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39158<br>66.3M<br>590/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20141<br>19.4M<br>1037/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19429<br>40.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17043<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17033<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11572<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2607<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1529<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 859<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>831.3K<br>941/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 753<br>1.4M<br>535/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 740<br>1.4M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 588<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 489<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 390<br>446.6K<br>894/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 300<br>2.7K<br>113769/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/19/2025, 1:47:50 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.0 | 2.5.1 | 24.8.0 |  | 0.10.1 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.9M | 36.7M | 57.3M | 108.9M | 123.3M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 98.9M | 36.7M | 1M | 108.9M | 123.3M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.3M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40954 | 41914 | 37985 | 33996 | 32492 | 32577 | 32901 | 23603 | 13094 | 14343 | 13090 | 35694 | 13845 | 1112 | 679 | 686 | 705 | 626 | 577 | 570 | 561 | 585 | 549 | 287 | 347 | 247 | 275 | 224 | 112 | 193 | 90 | 101 | 61 | 59 | 251 | 29 |  | 126 |  |
| DeltaBlue | 59625 | 54574 | 108738 | 79930 | 74634 | 77299 | 74244 | 25814 | 13362 | 12880 | 12734 | 39228 | 370 | 1058 | 665 | 661 | 680 | 622 | 577 | 572 | 543 | 580 | 485 | 329 | 388 | 354 | 355 | 323 | 195 | 250 | 163 | 111 | 55 | 54 | 267 | 34 |  | 178 |  |
| Crypto | 48954 | 52120 | 38954 | 41870 | 41769 | 41446 | 41508 | 31896 | 20235 | 17735 | 17225 | 27939 | 8838 | 1371 | 591 | 757 | 589 | 555 | 532 | 557 | 867 | 380 | 842 | 793 | 426 | 189 | 186 | 183 | 153 | 121 | 323 | 98 | 80 | 61 | 292 | 36 |  | 133 |  |
| RayTrace | 116178 | 119212 | 110480 | 72001 | 65785 | 61567 | 68153 | 34745 | 27972 | 25848 | 28194 | 5667 | 1374 | 1499 | 1134 | 901 | 1063 | 956 | 910 | 898 | 683 | 726 | 753 | 564 | 444 | 520 | 523 | 488 | 489 | 268 | 498 | 251 | 165 | 135 | 349 | 101 |  | 425 |  |
| EarleyBoyer | 67270 | 67017 | 85569 | 76823 | 70259 | 71900 | 74542 | 7067 | 42087 | 36628 | 37539 | 29109 | 698 | 3367 | 1855 | 1445 | 1741 | 1387 | 1346 | 1234 | 1677 | 1216 | 978 | 570 | 837 | 511 | 523 | 497 | 601 | 492 | 323 | 286 | 188 | 134 |  | 87 |  | 505 |  |
| RegExp | 20981 | 20002 | 10455 | 10183 | 9991 | 8919 | 9890 | 7834 | 9020 | 8857 | 9001 | 798 | 882 | 549 | 248 | 226 | 226 | 228 | 219 | 227 | 115 | 183 | 63 | 130 | 176 | 216 | 236 | 195 | 431 | 207 | 96 | 252 | 49 | 93 |  |  |  |  |  |
| Splay | 36348 | 36524 | 42424 | 39556 | 34951 | 36076 | 27911 | 19726 | 24333 | 11767 | 11792 | 2647 | 4086 | 3558 | 2267 | 1801 | 1851 | 1802 | 2233 | 2151 | 2111 | 1649 | 894 | 1292 | 1233 | 1307 | 964 | 1312 | 872 | 892 | 377 | 497 | 218 | 317 |  | 138 |  | 808 |  |
| NavierStokes | 39920 | 40216 | 38842 | 38507 | 38732 | 38436 | 38881 | 36730 | 22193 | 22024 | 21963 | 23596 | 13639 | 1876 | 940 | 1298 | 965 | 985 | 976 | 918 | 1218 | 919 | 1536 | 964 | 704 | 495 | 477 | 484 | 176 | 199 | 863 | 165 | 176 | 118 |  | 56 |  | 280 |  |
| Score | 48055 | 47958 | 47566 | 42042 | 39828 | 39320 | 39158 | 20141 | 19429 | 17043 | 17033 | 11572 | 2607 | 1529 | 859 | 835 | 823 | 764 | 753 | 740 | 740 | 649 | 588 | 500 | 489 | 397 | 390 | 376 | 300 | 270 | 264 | 189 | 106 | 103 |  |  |  |  |  |
| Score/MB | 486 | 1307 | 829 | 386 | 322 | 967 | 590 | 1037 | 484 | 334 | 483 | 57 | 2 | 42 | 70 | 195 | 159 | 941 | 535 | 531 | 87 | 329 | 12 | 235 |  | 593 | 894 | 928 | 113769 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 41 | 34 | 47 | 48 | 50 | 51 | 53 | 53 | 61 | 59 | 83 | 70 | 64 | 82 | 82 | 86 | 95 | 116 | 131 | 143 | 237 | 237 | 32 | 357 |  | 87 | 7 |
### macos-arm64
| Engine | v8 | deno | bun | JavaScriptCore | dune | node | mozjs | spidermonkey | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | rquickjs | quickjs-ng | quickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | ringo | xst | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.157 | 2.5.1 | 1.2.22 |  | 0.10.1 | 24.8.0 |  | 144.0 |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta |  | 0.8.0 | 2025.04.26 |  | 0.9.2 | 2.99.99 |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 40.9M | 88M | 57.1M | 0.2K | 56.8M | 111.8M | 32.8M | 132.3M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 1.2M | 4.1M | 975.9K | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 40.9M | 88M | 57.1M | 0.2K | 56.8M | 111.8M | 32.8M | 66.2M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 1.2M | 2.1M | 975.9K | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37445 | 55036 | 46885 | 36749 | 47887 | 40862 | 15459 | 12984 | 15349 | 30921 | 18876 | 1197 | 849 | 748 | 815 | 731 | 984 | 730 | 810 | 560 | 324 | 418 | 307 | 204 | 89 | 201 | 155 | 79 | 33 | 197 | 38 |  | 157 |
| DeltaBlue | 99560 | 101313 | 66131 | 52921 | 104909 | 93821 | 16457 | 12569 | 16159 | 9250 | 568 | 1128 | 810 | 937 | 968 | 680 | 891 | 779 | 695 | 533 | 443 | 450 | 385 | 210 | 158 | 156 | 150 | 90 | 34 | 210 | 38 |  | 236 |
| Crypto | 42807 | 49730 | 54766 | 55051 | 58586 | 48260 | 22144 | 19268 | 19405 | 27671 | 9594 | 1227 | 1215 | 874 | 808 | 766 | 866 | 991 | 1344 | 919 | 1224 | 508 | 214 | 131 | 319 | 116 | 123 | 102 | 37 | 224 | 56 |  | 131 |
| RayTrace | 113366 | 71933 | 124614 | 116844 | 87467 | 69707 | 49678 | 32683 | 34449 | 1188 | 1966 | 1759 | 1045 | 1476 | 1406 | 1380 | 1142 | 867 | 1156 | 829 | 1040 | 578 | 638 | 836 | 503 | 198 | 336 | 182 | 37 | 284 | 129 |  | 661 |
| EarleyBoyer | 87912 | 78574 | 68010 | 66874 | 78393 | 68873 | 44846 | 37526 | 35877 | 32765 | 869 | 3551 | 2169 | 2104 | 2123 | 1927 | 1483 | 1641 | 1421 | 1907 | 887 | 1111 | 788 | 708 | 314 | 526 | 306 | 190 | 72 |  | 113 |  | 671 |
| RegExp | 12134 | 12480 | 19820 | 20953 | 10798 | 12897 | 11387 | 11205 | 9608 | 1364 | 547 | 584 | 242 | 214 | 224 | 229 | 204 | 204 | 84 | 186 | 217 | 203 | 252 | 537 | 235 | 210 | 156 | 123 | 12 |  |  |  |  |
| Splay | 47469 | 32776 | 25764 | 34520 | 25725 | 24170 | 16909 | 22654 | 10166 | 2029 | 1649 | 3903 | 1303 | 2190 | 2614 | 2494 | 1601 | 1540 | 1766 | 1353 | 1682 | 1604 | 885 | 542 | 392 | 423 | 533 | 309 | 140 |  | 185 |  | 1054 |
| NavierStokes | 34394 | 37322 | 30301 | 30479 | 32203 | 36137 | 21095 | 20182 | 16143 | 8695 | 3801 | 1184 | 2873 | 1538 | 945 | 1274 | 1623 | 1619 | 1366 | 1761 | 1388 | 903 | 559 | 158 | 794 | 235 | 170 | 182 | 63 |  | 86 |  | 246 |
| Score | 48675 | 47029 | 46608 | 45523 | 45401 | 42173 | 21798 | 19363 | 17641 | 7224 | 2226 | 1516 | 1070 | 1040 | 1006 | 962 | 953 | 894 | 842 | 814 | 731 | 605 | 447 | 333 | 291 | 230 | 212 | 143 | 43 |  |  |  |  |
| Score/MB | 1189 | 534 | 816 | 277525146 | 799 | 377 | 664 | 146 | 380 | 37 |  | 96 | 608 | 288 | 95 | 804 | 231 | 938 | 20 | 340 | 1331 |  | 1066 | 126284 | 184 | 18 | 2 | 11 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 27 | 41 | 33 | 43 | 44 | 47 | 45 | 46 | 47 | 68 | 52 | 50 | 56 | 67 | 104 | 115 | 113 | 136 | 169 | 708 | 36 | 267 |  | 82 |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.157 |  | 2.5.1 | 1.2.22 | 24.8.0 | 0.10.1 | 1.11.24.0 | 144.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  | 0.8.0 |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.2M | 145.7M | 133.1M | 116.5M | 77.6M | 14.4M | 52.5M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.4M | 42.2M | 8M | 9M | 9M | 0 | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.2M | 339.5K | 113.5M | 113.3M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.2M | 1M | 1.7M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.9M | 32.3M | 19.8M | 31.1M | 30.3M | 14.1M | 18.6M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.7M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38529 | 35669 | 35722 | 36665 | 32397 | 33265 | 24542 | 13927 | 12398 | 35693 | 8176 | 688 | 509 | 455 | 392 | 448 | 448 | 420 | 355 | 229 | 236 | 208 | 186 | 103 | 54 | 46 |  | 24 |  |  |
| DeltaBlue | 109934 | 47248 | 77682 | 45469 | 71751 | 72948 | 28927 | 13448 | 13250 | 28165 | 211 | 627 | 462 | 403 | 364 | 456 | 462 | 396 | 396 | 312 | 343 | 258 | 235 | 96 | 48 | 41 |  | 27 |  |  |
| Crypto | 39044 | 49011 | 40855 | 46832 | 42031 | 41990 | 33289 | 20659 | 17897 | 23579 | 3055 | 784 | 543 | 423 | 428 | 328 | 328 | 373 | 425 | 187 | 181 | 312 | 113 | 89 | 59 | 71 |  | 38 |  |  |
| RayTrace | 112774 | 103746 | 71335 | 83175 | 66377 | 65119 | 47534 | 24938 | 26660 | 3404 | 2650 | 1014 | 551 | 736 | 576 | 590 | 594 | 585 | 464 | 455 | 461 | 436 | 224 | 262 | 129 | 128 |  | 83 |  |  |
| EarleyBoyer | 79508 | 62169 | 77045 | 52230 | 73031 | 75076 | 42762 | 42911 | 36772 | 26568 | 825 | 2227 | 991 | 1109 | 1003 | 923 | 922 | 968 | 876 | 544 | 550 | 500 | 446 | 293 | 123 | 126 |  | 75 |  |  |
| RegExp | 9880 | 18619 | 10042 | 16820 | 9900 | 9480 | 10062 | 9327 | 8938 | 1057 | 542 | 401 | 188 | 196 | 193 | 160 | 154 | 188 | 180 | 247 | 197 | 109 | 195 | 277 | 87 | 42 |  |  |  |  |
| Splay | 42555 | 35799 | 37875 | 32906 | 33841 | 27927 | 23844 | 22777 | 13959 | 2570 | 3558 | 2296 | 1008 | 1408 | 1278 | 1221 | 1239 | 969 | 1249 | 1165 | 1148 | 977 | 844 | 495 | 323 | 164 |  | 126 |  |  |
| NavierStokes | 39029 | 39920 | 38951 | 34178 | 38951 | 38951 | 36655 | 22341 | 22171 | 26092 | 3066 | 1076 | 1039 | 739 | 714 | 769 | 759 | 679 | 753 | 475 | 486 | 1055 | 186 | 149 | 115 | 152 |  | 57 |  |  |
| Score | 47128 | 44050 | 41750 | 39894 | 39708 | 38801 | 28393 | 19350 | 17287 | 10537 | 1695 | 966 | 585 | 580 | 530 | 522 | 521 | 506 | 503 | 382 | 377 | 377 | 250 | 185 | 97 | 83 |  |  |  |  |
| Score/MB | 869 | 360 | 286 | 299 | 340 | 499 | 1970 | 368 | 237 | 53 | 96 | 8 | 49 | 15 | 12 | 65 | 58 | 56 |  | 50 | 50 | 49 | 12 | 1 | 2 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 42 | 58 | 60 | 60 | 66 | 67 | 63 | 63 | 80 | 83 | 84 | 123 | 150 | 251 | 301 | 129 | 378 |  |  |
