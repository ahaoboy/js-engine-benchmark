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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48175<br>98.6M<br>488/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47766<br>57.1M<br>836/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47434<br>36.5M<br>1300/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bare | [bare](https://github.com/holepunchto/bare) | 40705<br>65.3M<br>623/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40286<br>106.3M<br>379/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39902<br>123.3M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39296<br>40.7M<br>966/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39045<br>66.3M<br>588/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20130<br>19.4M<br>1037/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19081<br>40.1M<br>475/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17287<br>51M<br>339/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17023<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9546<br>199.7M<br>47/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2165<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 867<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 833<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 755<br>831.3K<br>930/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 751<br>1.4M<br>539/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 748<br>1.4M<br>531/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 743<br>8.4M<br>88/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 525<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 499<br>2.1M<br>234/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 489<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 394<br>446.6K<br>903/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 371<br>414.5K<br>916/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 293<br>2.7K<br>111114/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 268<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/29/2025, 1:48:08 AM

### ubuntu
| Engine | bun | v8 | JavaScriptCore | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 | 14.1.0 |  |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.6M | 57.1M | 36.5M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 98.6M | 1M | 36.5M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40188 | 37477 | 41840 | 32584 | 32192 | 32061 | 32234 | 32693 | 23260 | 13408 | 14103 | 12889 | 35486 | 12296 | 1114 | 682 | 687 | 714 | 631 | 583 | 575 | 568 | 583 | 485 | 286 | 340 | 276 | 244 | 223 | 132 | 204 | 90 | 102 | 60 | 59 | 270 | 27 |  | 125 |  |
| DeltaBlue | 59962 | 107726 | 56326 | 76651 | 74376 | 72902 | 75844 | 74376 | 25767 | 13263 | 13025 | 12939 | 38461 | 548 | 1048 | 669 | 670 | 676 | 603 | 587 | 578 | 546 | 578 | 456 | 327 | 392 | 361 | 338 | 314 | 177 | 251 | 164 | 113 | 54 | 55 | 277 | 32 |  | 184 |  |
| Crypto | 48980 | 41438 | 51944 | 41672 | 41748 | 41580 | 41312 | 41683 | 32026 | 20206 | 17739 | 17506 | 16964 | 8654 | 1364 | 588 | 737 | 596 | 556 | 555 | 523 | 884 | 380 | 764 | 788 | 411 | 187 | 189 | 182 | 147 | 121 | 325 | 98 | 80 | 61 | 296 | 31 |  | 136 |  |
| RayTrace | 117362 | 111812 | 115956 | 70965 | 68967 | 66747 | 66081 | 68227 | 35815 | 27824 | 27158 | 28063 | 2440 | 1172 | 1537 | 1168 | 894 | 1039 | 963 | 889 | 895 | 683 | 694 | 562 | 577 | 456 | 538 | 530 | 463 | 436 | 272 | 495 | 259 | 165 | 136 | 348 | 95 |  | 426 |  |
| EarleyBoyer | 66969 | 86485 | 67460 | 70197 | 73751 | 72580 | 70222 | 73623 | 6964 | 40914 | 36097 | 37823 | 23008 | 746 | 3420 | 1874 | 1472 | 1745 | 1342 | 1346 | 1372 | 1678 | 1222 | 760 | 574 | 848 | 539 | 528 | 495 | 605 | 495 | 323 | 284 | 191 | 134 |  | 79 |  | 424 |  |
| RegExp | 21590 | 10344 | 19131 | 10142 | 10072 | 10183 | 8892 | 9981 | 7902 | 8728 | 8728 | 8837 | 825 | 572 | 548 | 250 | 228 | 225 | 228 | 226 | 219 | 116 | 183 | 63 | 130 | 179 | 242 | 216 | 197 | 396 | 208 | 96 | 255 | 49 | 92 |  |  |  |  |  |
| Splay | 36394 | 41732 | 34764 | 36940 | 35049 | 34846 | 35497 | 27446 | 19444 | 22133 | 12973 | 11647 | 1957 | 1187 | 3603 | 2279 | 1767 | 1840 | 1758 | 2106 | 2147 | 2094 | 1614 | 877 | 1286 | 1223 | 926 | 1286 | 1309 | 910 | 771 | 358 | 450 | 215 | 339 |  | 86 |  | 819 |  |
| NavierStokes | 39800 | 38803 | 40244 | 38803 | 38655 | 38469 | 38436 | 38732 | 36655 | 22238 | 22045 | 22112 | 32879 | 13929 | 1853 | 954 | 1285 | 970 | 966 | 937 | 981 | 1222 | 931 | 1440 | 938 | 705 | 482 | 473 | 473 | 168 | 201 | 815 | 163 | 175 | 119 |  | 52 |  | 282 |  |
| Score | 48175 | 47766 | 47434 | 40705 | 40286 | 39902 | 39296 | 39045 | 20130 | 19081 | 17287 | 17023 | 9546 | 2165 | 1534 | 867 | 833 | 823 | 755 | 751 | 748 | 743 | 645 | 525 | 499 | 489 | 394 | 393 | 371 | 293 | 268 | 261 | 188 | 106 | 104 |  |  |  |  |  |
| Score/MB | 488 | 836 | 1300 | 623 | 379 | 323 | 966 | 588 | 1037 | 475 | 339 | 483 | 47 | 1 | 42 | 70 | 195 | 159 | 930 | 539 | 531 | 88 | 326 | 11 | 234 |  | 903 | 587 | 916 | 111114 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 43 | 33 | 47 | 48 | 50 | 52 | 52 | 53 | 61 | 59 | 90 | 69 | 63 | 80 | 81 | 87 | 99 | 114 | 132 | 142 | 235 | 237 | 31 | 400 |  | 88 | 7 |
### macos-arm64
| Engine | v8 | bare | bun | JavaScriptCore | node | dune | deno | spidermonkey | mozjs | spiderfire | graaljs | jjs | primjs | hermes | quickjs-ng | rquickjs | txiki.js | llrt | quickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.136 |  | 1.2.21 |  | 24.7.0 | 0.10.1 | 2.4.5 | 143.0 |  |  | 24.1.2 |  |  | 0.12.0 | 0.8.0 |  | 24.12.0 | 0.6.2.beta | 2025.04.26 | 0.9.2 | 2.99.99 |  |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.2M | 45.6M | 56.8M | 0.2K | 111.7M | 56.8M | 85.5M | 132.4M | 32.8M | 46.3M | 194M | 0 | 1.8M | 15.7M | 4.1M | 1.2M | 3.6M | 10.5M | 975.9K | 2.4M | 562.1K | 41.4M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.2M | 45.6M | 56.8M | 0.2K | 111.7M | 56.8M | 85.5M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 1.8M | 7.9M | 2.1M | 1.2M | 3.6M | 10.5M | 975.9K | 1.8M | 562.1K | 41.4M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42076 | 40950 | 40216 | 38928 | 37484 | 44163 | 40308 | 13814 | 13810 | 9154 | 29318 | 14177 | 1119 | 1094 | 1133 | 950 | 826 | 822 | 831 | 591 | 515 | 594 | 491 | 281 | 282 | 104 | 209 | 146 | 108 | 30 | 189 | 37 |  | 194 |
| DeltaBlue | 126424 | 99012 | 53205 | 55764 | 82337 | 88063 | 72009 | 16120 | 15915 | 10109 | 12139 | 297 | 1230 | 1102 | 1062 | 996 | 995 | 847 | 824 | 676 | 561 | 609 | 597 | 428 | 274 | 170 | 169 | 147 | 76 | 37 | 222 | 44 |  | 201 |
| Crypto | 57378 | 48628 | 55359 | 59646 | 50316 | 52223 | 39093 | 22534 | 20710 | 18135 | 18501 | 3314 | 1606 | 1068 | 1076 | 977 | 857 | 729 | 1045 | 1032 | 1197 | 1342 | 545 | 265 | 139 | 373 | 130 | 112 | 88 | 34 | 232 | 40 |  | 125 |
| RayTrace | 136454 | 85247 | 132310 | 116062 | 75479 | 69263 | 74073 | 43468 | 47016 | 37332 | 657 | 1235 | 1310 | 1719 | 1078 | 1069 | 1687 | 1669 | 904 | 846 | 1060 | 733 | 726 | 845 | 366 | 597 | 653 | 296 | 232 | 37 | 270 | 146 |  | 611 |
| EarleyBoyer | 100869 | 81036 | 59444 | 55298 | 75141 | 75813 | 73340 | 42373 | 33495 | 44532 | 27584 | 743 | 1615 | 3538 | 1966 | 1757 | 2170 | 2468 | 1661 | 1796 | 1107 | 1127 | 1356 | 819 | 633 | 342 | 547 | 297 | 212 | 76 |  | 112 |  | 558 |
| RegExp | 9537 | 11456 | 22729 | 17365 | 12988 | 10979 | 11251 | 9489 | 7926 | 10183 | 1385 | 430 | 284 | 485 | 224 | 231 | 243 | 237 | 222 | 183 | 233 | 94 | 221 | 273 | 262 | 280 | 537 | 176 | 117 | 13 |  |  |  |  |
| Splay | 36736 | 35261 | 29538 | 27099 | 31293 | 25770 | 29850 | 18686 | 13405 | 18824 | 1154 | 1491 | 4001 | 2730 | 2090 | 2988 | 1815 | 2263 | 1827 | 1780 | 1620 | 1882 | 1893 | 887 | 1182 | 490 | 666 | 503 | 293 | 137 |  | 130 |  | 659 |
| NavierStokes | 31842 | 32106 | 25300 | 31219 | 31188 | 32022 | 36137 | 18105 | 17885 | 19105 | 13950 | 12872 | 3737 | 1081 | 1908 | 1667 | 1595 | 926 | 1757 | 1669 | 1208 | 1971 | 862 | 673 | 296 | 871 | 148 | 153 | 186 | 66 |  | 73 |  | 279 |
| Score | 51151 | 45278 | 44660 | 43235 | 42754 | 41989 | 40667 | 20372 | 18483 | 17831 | 6355 | 1790 | 1453 | 1353 | 1119 | 1091 | 1077 | 1005 | 967 | 874 | 810 | 783 | 699 | 495 | 351 | 335 | 311 | 203 | 148 | 43 |  |  |  |  |
| Score/MB | 1241 | 993 | 786 | 263576647 | 382 | 739 | 475 | 153 | 563 | 384 | 32 |  | 825 | 86 | 271 | 911 | 298 | 95 | 1014 | 364 | 1475 | 18 |  | 1181 | 27 | 212 | 117941 | 2 | 11 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 42 | 40 | 37 | 44 | 44 | 44 | 47 | 45 | 52 | 48 | 66 | 52 | 63 | 91 | 101 | 106 | 142 | 166 | 666 | 38 | 289 |  | 86 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | node | dune | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.136 |  | 1.2.21 |  | 24.7.0 | 0.10.1 | 2.4.5 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.1M | 132.8M | 57M | 116.5M | 77.6M | 142.9M | 14.4M | 51.4M | 72.8M | 196.1M | 17.5M | 112.8M | 37.3M | 11.8M | 9.2M | 42.2M | 9M | 9M | 0 | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.3M | 338K | 113M | 26.1M | 85.4M | 47.4M | 110.6M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 1.7M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 30.8M | 31.1M | 30.3M | 32.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 109.8M | 31.6M | 6.9M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 37184 | 35493 | 37275 | 32556 | 31786 | 32884 | 26593 | 24651 | 13567 | 14114 | 36078 | 8049 | 678 | 452 | 516 | 409 | 391 | 445 | 420 | 387 | 237 | 208 | 215 | 192 | 106 | 54 | 49 |  | 22 |  |  |
| DeltaBlue | 106424 | 45066 | 48041 | 77100 | 71255 | 76155 | 67414 | 27617 | 13548 | 13138 | 27405 | 323 | 617 | 410 | 463 | 403 | 370 | 469 | 397 | 391 | 343 | 244 | 304 | 234 | 115 | 51 | 42 |  | 26 |  |  |
| Crypto | 41459 | 48325 | 43864 | 41817 | 41787 | 42160 | 41890 | 33850 | 19136 | 17785 | 20860 | 2977 | 789 | 423 | 549 | 515 | 430 | 328 | 366 | 429 | 182 | 292 | 186 | 112 | 91 | 58 | 74 |  | 29 |  |  |
| RayTrace | 113366 | 105818 | 96717 | 71039 | 62836 | 62899 | 67783 | 50417 | 28387 | 27177 | 2366 | 1202 | 1014 | 743 | 511 | 596 | 600 | 587 | 580 | 463 | 463 | 430 | 455 | 230 | 261 | 126 | 134 |  | 82 |  |  |
| EarleyBoyer | 88625 | 62955 | 58557 | 69030 | 72458 | 74849 | 73030 | 41503 | 41938 | 37140 | 27966 | 1630 | 2231 | 1152 | 1007 | 1004 | 1010 | 939 | 984 | 863 | 578 | 508 | 506 | 466 | 297 | 125 | 139 |  | 69 |  |  |
| RegExp | 10042 | 18692 | 17218 | 9991 | 10011 | 9718 | 9748 | 10152 | 9292 | 8928 | 1004 | 874 | 405 | 196 | 188 | 167 | 196 | 154 | 186 | 178 | 198 | 109 | 250 | 200 | 275 | 90 | 42 |  |  |  |  |
| Splay | 43027 | 35995 | 33745 | 38504 | 33273 | 28563 | 32792 | 18977 | 24480 | 14758 | 2398 | 5216 | 2389 | 1441 | 1034 | 1279 | 1319 | 1255 | 977 | 1233 | 1165 | 1001 | 562 | 818 | 521 | 324 | 173 |  | 82 |  |  |
| NavierStokes | 39060 | 34030 | 33835 | 39060 | 38912 | 39029 | 38990 | 36989 | 22341 | 22149 | 26092 | 3607 | 1076 | 743 | 1036 | 737 | 718 | 757 | 678 | 753 | 484 | 859 | 475 | 193 | 150 | 115 | 165 |  | 48 |  |  |
| Score | 47923 | 43046 | 41469 | 40837 | 39208 | 39030 | 38303 | 27670 | 19543 | 17718 | 9809 | 1994 | 969 | 587 | 584 | 547 | 538 | 522 | 506 | 506 | 381 | 363 | 342 | 253 | 192 | 98 | 87 |  |  |  |  |
| Score/MB | 881 | 352 | 312 | 716 | 336 | 502 | 267 | 1920 | 380 | 243 | 50 | 113 | 8 | 15 | 49 | 59 | 12 | 58 | 56 |  | 50 | 47 | 45 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 38 | 42 | 60 | 59 | 61 | 60 | 67 | 63 | 62 | 82 | 87 | 81 | 121 | 148 | 248 | 284 | 129 | 441 |  |  |
