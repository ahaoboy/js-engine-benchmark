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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48060<br>57.1M<br>841/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47724<br>36.5M<br>1307/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46928<br>98.6M<br>476/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40587<br>106.3M<br>381/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39726<br>40.7M<br>977/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39528<br>123.3M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38856<br>66.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20017<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19224<br>39.9M<br>482/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17333<br>51M<br>339/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17043<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10830<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2189<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1524<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 855<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 837<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 821<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 756<br>1.4M<br>543/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 753<br>831.3K<br>927/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 745<br>1.4M<br>529/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 736<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 555<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 475<br>2.1M<br>223/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 404<br>446.6K<br>926/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 383<br>685K<br>572/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 343<br>414.5K<br>847/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 297<br>2.7K<br>112631/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 265<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/3/2025, 1:45:39 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | lo | node | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | primjs | rquickjs-pgo | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.0 |  | 1.2.21 | 2.4.5 |  | 24.7.0 | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 36.5M | 98.6M | 106.3M | 40.7M | 123.3M | 66.3M | 19.4M | 39.9M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.5M | 98.6M | 106.3M | 40.7M | 123.3M | 66.3M | 571K | 39.9M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37770 | 41508 | 39496 | 32633 | 32383 | 31849 | 32457 | 23441 | 13030 | 14410 | 13309 | 35740 | 11706 | 1113 | 679 | 690 | 711 | 577 | 626 | 578 | 549 | 575 | 490 | 332 | 292 | 264 | 240 | 230 | 134 | 192 | 90 | 99 | 58 | 58 | 271 | 25 |  | 124 |  |
| DeltaBlue | 109498 | 54118 | 53919 | 75203 | 79196 | 67983 | 72981 | 26163 | 13475 | 13052 | 12767 | 27135 | 545 | 1029 | 670 | 667 | 666 | 588 | 610 | 575 | 541 | 576 | 450 | 386 | 324 | 365 | 352 | 320 | 170 | 243 | 164 | 110 | 54 | 55 | 275 | 30 |  | 167 |  |
| Crypto | 41456 | 51590 | 49079 | 41630 | 40963 | 41610 | 41748 | 31675 | 20227 | 17427 | 17722 | 12837 | 7251 | 1368 | 579 | 749 | 602 | 567 | 552 | 542 | 877 | 380 | 863 | 416 | 784 | 187 | 190 | 185 | 149 | 122 | 323 | 97 | 80 | 62 | 297 | 31 |  | 136 |  |
| RayTrace | 112330 | 122172 | 110998 | 68597 | 66155 | 66895 | 66451 | 35558 | 28387 | 27057 | 27722 | 7968 | 1407 | 1562 | 1138 | 908 | 1059 | 894 | 956 | 909 | 682 | 721 | 546 | 444 | 575 | 539 | 513 | 487 | 428 | 271 | 499 | 256 | 162 | 135 | 343 | 90 |  | 430 |  |
| EarleyBoyer | 85919 | 70059 | 67612 | 73401 | 72803 | 70495 | 73959 | 7116 | 40389 | 36103 | 35808 | 21931 | 914 | 3397 | 1862 | 1489 | 1647 | 1337 | 1420 | 1301 | 1668 | 1226 | 739 | 853 | 568 | 539 | 448 | 474 | 599 | 492 | 324 | 282 | 184 | 132 |  | 78 |  | 506 |  |
| RegExp | 10466 | 19749 | 20981 | 10052 | 8745 | 10092 | 10001 | 7509 | 9019 | 8810 | 8702 | 1398 | 642 | 548 | 254 | 226 | 225 | 223 | 221 | 221 | 114 | 183 | 64 | 179 | 135 | 246 | 219 | 198 | 405 | 207 | 95 | 243 | 48 | 92 |  |  |  |  |  |
| Splay | 42269 | 34284 | 35742 | 36663 | 36443 | 35889 | 27520 | 18958 | 22907 | 13087 | 12390 | 2352 | 1832 | 3447 | 2153 | 1763 | 1848 | 2208 | 1674 | 2064 | 2092 | 1620 | 1211 | 1234 | 855 | 1185 | 1200 | 649 | 994 | 798 | 360 | 439 | 208 | 341 |  | 84 |  | 788 |  |
| NavierStokes | 38881 | 40068 | 39988 | 38842 | 38469 | 38732 | 38842 | 36841 | 22171 | 22067 | 22090 | 26458 | 7538 | 1854 | 938 | 1300 | 997 | 941 | 982 | 979 | 1221 | 927 | 1498 | 685 | 929 | 463 | 481 | 478 | 171 | 197 | 834 | 161 | 176 | 119 |  | 51 |  | 275 |  |
| Score | 48060 | 47724 | 46928 | 40587 | 39726 | 39528 | 38856 | 20017 | 19224 | 17333 | 17043 | 10830 | 2189 | 1524 | 855 | 837 | 821 | 756 | 753 | 745 | 736 | 647 | 555 | 485 | 475 | 404 | 383 | 343 | 297 | 265 | 262 | 184 | 104 | 104 |  |  |  |  |  |
| Score/MB | 841 | 1307 | 476 | 381 | 977 | 320 | 585 | 1031 | 482 | 339 | 483 | 54 | 1 | 42 | 69 | 196 | 159 | 543 | 927 | 529 | 87 | 327 | 11 |  | 223 | 926 | 572 | 847 | 112631 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 46 | 33 | 46 | 48 | 50 | 52 | 51 | 53 | 62 | 58 | 86 | 63 | 68 | 80 | 82 | 84 | 97 | 116 | 132 | 145 | 240 | 239 | 31 | 407 |  | 88 | 7 |
### macos-arm64
| Engine | v8 | dune | bun | deno | node | spidermonkey | spiderfire | mozjs | graaljs | jjs | primjs | hermes | txiki.js | rquickjs | llrt | quickjs-ng | njs | quickjs | duktape | ladybird | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.3 | 0.10.1 | 1.2.21 | 2.4.5 | 24.7.0 | 143.0 |  |  | 24.1.2 |  |  | 0.12.0 | 24.12.0 |  | 0.6.2.beta | 0.8.0 | 0.9.2 | 2025.04.26 | 2.99.99 |  |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.2M | 56.8M | 56.8M | 85.5M | 111.7M | 131.9M | 46.3M | 32.8M | 194M | 0 | 1.8M | 15.7M | 3.6M | 1.2M | 10.5M | 4.1M | 2.4M | 975.9K | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 0.2K | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.2M | 56.8M | 56.8M | 85.5M | 111.7M | 66M | 46.3M | 32.8M | 147.4K | 0 | 1.8M | 7.9M | 3.6M | 1.2M | 10.5M | 2.1M | 1.8M | 975.9K | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 0.2K | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 33939 | 35122 | 31977 | 38038 | 33403 | 13962 | 15194 | 14379 | 27439 | 5426 | 1104 | 928 | 1011 | 944 | 823 | 905 | 541 | 543 | 501 | 614 | 533 | 321 | 110 | 302 | 155 | 163 | 77 | 31 |  | 195 | 32 |  | 195 |
| DeltaBlue | 108896 | 86059 | 40847 | 76194 | 62495 | 16192 | 15591 | 16186 | 9342 | 779 | 1227 | 852 | 950 | 1015 | 932 | 854 | 588 | 619 | 528 | 606 | 514 | 525 | 188 | 345 | 151 | 173 | 68 | 39 |  | 229 | 37 |  | 228 |
| Crypto | 54274 | 44350 | 54147 | 42347 | 40563 | 21641 | 20100 | 19022 | 18887 | 9398 | 1659 | 1106 | 892 | 936 | 735 | 953 | 1119 | 812 | 1087 | 1437 | 497 | 256 | 412 | 140 | 128 | 125 | 95 | 40 |  | 225 | 38 |  | 134 |
| RayTrace | 151402 | 79919 | 134678 | 67050 | 71779 | 45287 | 39254 | 45139 | 2640 | 1035 | 1207 | 1658 | 1370 | 1233 | 1440 | 1206 | 833 | 834 | 1007 | 992 | 705 | 713 | 610 | 303 | 752 | 299 | 191 | 38 |  | 292 | 124 |  | 675 |
| EarleyBoyer | 107124 | 88732 | 63499 | 63043 | 58366 | 37718 | 45784 | 38224 | 17730 | 942 | 1317 | 3498 | 2535 | 1975 | 1988 | 1672 | 2213 | 1245 | 1045 | 1058 | 1097 | 787 | 329 | 512 | 651 | 362 | 190 | 79 |  |  | 99 |  | 633 |
| RegExp | 9092 | 14001 | 15622 | 9019 | 7726 | 10504 | 11149 | 10648 | 1163 | 531 | 286 | 505 | 242 | 224 | 189 | 204 | 190 | 207 | 229 | 88 | 213 | 281 | 284 | 231 | 419 | 200 | 105 | 13 |  |  |  |  |  |
| Splay | 46735 | 38513 | 19288 | 26468 | 24814 | 21620 | 15053 | 17056 | 1855 | 1225 | 4392 | 2883 | 2773 | 2914 | 2379 | 1529 | 1824 | 1636 | 1791 | 1442 | 1644 | 870 | 399 | 1070 | 666 | 495 | 357 | 126 |  |  | 95 |  | 549 |
| NavierStokes | 34132 | 34918 | 25970 | 28056 | 31164 | 17632 | 19717 | 19215 | 13866 | 1357 | 3589 | 1143 | 1522 | 1591 | 1198 | 1478 | 1823 | 1836 | 1348 | 1837 | 881 | 716 | 924 | 249 | 186 | 216 | 200 | 64 |  |  | 69 |  | 242 |
| Score | 51194 | 45353 | 38405 | 36950 | 34736 | 20681 | 20254 | 20101 | 7144 | 1555 | 1415 | 1306 | 1149 | 1108 | 983 | 954 | 896 | 805 | 800 | 776 | 652 | 505 | 340 | 329 | 305 | 231 | 139 | 45 |  |  |  |  |  |
| Score/MB | 1243 | 798 | 676 | 431 | 310 | 156 | 437 | 612 | 36 |  | 804 | 83 | 318 | 926 | 93 | 231 | 373 | 844 | 1457 | 18 |  | 1205 | 215 | 25 | 115665 | 3 | 11 | 42 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 48 | 39 | 36 | 43 | 43 | 48 | 47 | 51 | 48 | 50 | 68 | 56 | 64 | 102 | 103 | 97 | 120 | 170 | 659 |  | 38 | 322 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.3 |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  | 0.8.0 |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.3M | 122.2M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 52.3M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.4M | 42.2M | 8M | 9M | 9M | 0 | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.4M | 338K | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 33.8M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.2M | 1M | 1.7M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 23.9M | 121.8M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.7M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38285 | 35076 | 37173 | 30674 | 32608 | 32654 | 23854 | 14047 | 14160 | 35344 | 2923 | 695 | 515 | 441 | 388 | 445 | 444 | 423 | 382 | 233 | 233 | 215 | 187 | 107 | 55 | 49 |  | 22 |  |  |
| DeltaBlue | 106377 | 45787 | 46845 | 74984 | 71447 | 70819 | 27459 | 13369 | 13124 | 27947 | 192 | 626 | 459 | 390 | 377 | 476 | 476 | 396 | 393 | 330 | 357 | 264 | 231 | 119 | 49 | 42 |  | 26 |  |  |
| Crypto | 41553 | 49336 | 42120 | 42028 | 41919 | 42101 | 33608 | 20366 | 17289 | 22911 | 1893 | 786 | 547 | 395 | 430 | 328 | 325 | 373 | 430 | 189 | 183 | 318 | 113 | 89 | 58 | 75 |  | 29 |  |  |
| RayTrace | 112552 | 103080 | 102192 | 67783 | 60988 | 67857 | 42876 | 28416 | 27232 | 3700 | 2220 | 1002 | 541 | 744 | 578 | 594 | 592 | 583 | 464 | 466 | 477 | 434 | 230 | 271 | 128 | 133 |  | 80 |  |  |
| EarleyBoyer | 87767 | 62953 | 57399 | 73486 | 72281 | 73409 | 42263 | 40580 | 36715 | 27800 | 791 | 2240 | 997 | 1155 | 1024 | 933 | 954 | 992 | 876 | 572 | 585 | 515 | 458 | 301 | 126 | 138 |  | 70 |  |  |
| RegExp | 9941 | 18201 | 17365 | 9819 | 10062 | 9839 | 9829 | 9292 | 8928 | 1063 | 1049 | 407 | 187 | 198 | 183 | 162 | 153 | 189 | 181 | 259 | 202 | 109 | 202 | 280 | 90 | 42 |  |  |  |  |
| Splay | 39254 | 31456 | 34243 | 33346 | 33713 | 27650 | 22404 | 20854 | 14962 | 2264 | 5335 | 2483 | 1034 | 1482 | 1336 | 1182 | 1236 | 1001 | 1259 | 1172 | 1171 | 945 | 858 | 487 | 328 | 184 |  | 75 |  |  |
| NavierStokes | 39060 | 33801 | 33996 | 39060 | 39029 | 39060 | 36952 | 22319 | 22149 | 28909 | 3826 | 1096 | 1035 | 743 | 715 | 769 | 758 | 684 | 752 | 475 | 484 | 1085 | 193 | 150 | 113 | 167 |  | 48 |  |  |
| Score | 47400 | 42144 | 41440 | 39690 | 39308 | 38816 | 27474 | 19278 | 17670 | 10621 | 1585 | 980 | 586 | 579 | 533 | 524 | 523 | 511 | 509 | 392 | 385 | 382 | 254 | 193 | 98 | 88 |  |  |  |  |
| Score/MB | 889 | 344 | 312 | 277 | 337 | 499 | 1906 | 368 | 242 | 54 | 90 | 8 | 49 | 15 | 12 | 65 | 58 | 57 |  | 51 | 51 | 50 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 46 | 41 | 58 | 60 | 62 | 66 | 67 | 63 | 62 | 78 | 82 | 83 | 121 | 147 | 250 | 286 | 132 | 442 |  |  |
