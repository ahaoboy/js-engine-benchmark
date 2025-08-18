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


## Engine & Runtime (33/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48180<br>56.8M<br>848/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47818<br>36.4M<br>1313/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47439<br>98.4M<br>481/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40683<br>65.3M<br>622/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40670<br>106.5M<br>381/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39171<br>40.7M<br>963/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39151<br>66.3M<br>590/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38828<br>123.1M<br>315/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20068<br>19.4M<br>1034/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18988<br>39.6M<br>479/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17243<br>51M<br>338/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16991<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9914<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2511<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1525<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 862<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 829<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 826<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 736<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 723<br>831.3K<br>890/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 720<br>1.3M<br>534/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 651<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 534<br>46.2M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 482<br>2.1M<br>226/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 396<br>685K<br>591/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 387<br>446.6K<br>887/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 375<br>414.5K<br>926/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 288<br>2.7K<br>109218/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 268<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/18/2025, 4:20:05 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | lo | dune | node | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | njs | primjs | rquickjs | quickjs-ng | ladybird | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 |  | 0.10.1 | 24.6.0 | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0.9.2 |  |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 65.3M | 106.5M | 40.7M | 66.3M | 123.1M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.2M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 65.3M | 106.5M | 40.7M | 66.3M | 123.1M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.2M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38454 | 40188 | 41459 | 32361 | 32820 | 32298 | 31913 | 32248 | 23243 | 13302 | 14195 | 13344 | 35634 | 13507 | 1103 | 685 | 693 | 710 | 562 | 564 | 599 | 583 | 482 | 256 | 247 | 278 | 223 | 125 | 202 | 90 | 105 | 60 | 59 | 275 | 24 |  | 122 |  |
| DeltaBlue | 109194 | 57509 | 54170 | 75659 | 75824 | 76069 | 74614 | 73404 | 25134 | 13118 | 13111 | 12959 | 26877 | 277 | 1045 | 666 | 665 | 680 | 538 | 594 | 582 | 586 | 464 | 307 | 358 | 360 | 322 | 173 | 250 | 164 | 113 | 54 | 55 | 282 | 28 |  | 181 |  |
| Crypto | 41322 | 51920 | 48625 | 41599 | 41431 | 41246 | 41513 | 41484 | 32283 | 20137 | 17676 | 17586 | 18126 | 8217 | 1361 | 579 | 742 | 587 | 876 | 511 | 563 | 379 | 888 | 759 | 191 | 186 | 183 | 149 | 122 | 325 | 98 | 80 | 60 | 296 | 29 |  | 135 |  |
| RayTrace | 112478 | 118546 | 118842 | 71927 | 65637 | 67043 | 68301 | 66237 | 35667 | 27158 | 26983 | 27057 | 4639 | 1221 | 1550 | 1151 | 904 | 1051 | 685 | 880 | 896 | 743 | 549 | 566 | 522 | 523 | 489 | 429 | 272 | 500 | 253 | 164 | 136 | 344 | 86 |  | 422 |  |
| EarleyBoyer | 87748 | 68253 | 67253 | 68687 | 74740 | 70245 | 74520 | 71805 | 7025 | 38638 | 35827 | 36554 | 25962 | 762 | 3347 | 1862 | 1459 | 1725 | 1670 | 1353 | 1343 | 1220 | 744 | 561 | 516 | 539 | 496 | 570 | 497 | 323 | 285 | 187 | 133 |  | 78 |  | 400 |  |
| RegExp | 10455 | 19677 | 20659 | 10152 | 10142 | 8837 | 10092 | 9770 | 7811 | 8603 | 8702 | 8775 | 1162 | 815 | 551 | 248 | 223 | 225 | 116 | 230 | 227 | 180 | 63 | 129 | 213 | 236 | 197 | 439 | 207 | 95 | 241 | 48 | 93 |  |  |  |  |  |
| Splay | 41870 | 35709 | 35636 | 37779 | 37527 | 34267 | 28017 | 35392 | 19603 | 24007 | 12835 | 11965 | 2744 | 4437 | 3566 | 2291 | 1739 | 1887 | 2035 | 1750 | 1438 | 1653 | 851 | 1265 | 1299 | 860 | 1309 | 851 | 768 | 369 | 440 | 215 | 336 |  | 57 |  | 820 |  |
| NavierStokes | 38732 | 40068 | 39920 | 38881 | 38881 | 38359 | 38803 | 31990 | 36358 | 22193 | 22002 | 22002 | 14000 | 15255 | 1829 | 949 | 1270 | 991 | 1203 | 904 | 935 | 926 | 1499 | 932 | 484 | 476 | 474 | 160 | 199 | 813 | 154 | 175 | 119 |  | 51 |  | 275 |  |
| Score | 48180 | 47818 | 47439 | 40683 | 40670 | 39171 | 39151 | 38828 | 20068 | 18988 | 17243 | 16991 | 9914 | 2511 | 1525 | 862 | 829 | 826 | 736 | 723 | 720 | 651 | 534 | 482 | 396 | 387 | 375 | 288 | 268 | 262 | 185 | 105 | 104 |  |  |  |  |  |
| Score/MB | 848 | 1313 | 481 | 622 | 381 | 963 | 590 | 315 | 1034 | 479 | 338 | 482 | 49 | 2 | 42 | 70 | 194 | 160 | 87 | 890 | 534 | 330 | 11 | 226 | 591 | 887 | 926 | 109218 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 40 | 34 | 47 | 48 | 50 | 61 | 52 | 52 | 58 | 87 | 69 | 81 | 81 | 86 | 101 | 114 | 132 | 146 | 237 | 238 | 31 | 426 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bare | bun | deno | node | dune | mozjs | spidermonkey | spiderfire | graaljs | hermes | primjs | jjs | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | njs | ladybird | duktape | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.83 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 |  | 142.0 |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 0.8.0 | 2025.04.26 | 0.6.2.beta |  | 0.9.2 |  | 2.99.99 | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 45.6M | 56.8M | 85.6M | 111.5M | 56.8M | 32.8M | 131.2M | 46.3M | 194M | 15.7M | 1.8M | 0 | 3.6M | 4.1M | 975.9K | 10.5M | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 0.2K | 41.1M | 45.6M | 56.8M | 85.6M | 111.5M | 56.8M | 32.8M | 65.6M | 46.3M | 147.4K | 7.9M | 1.8M | 0 | 3.6M | 2.1M | 975.9K | 10.5M | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38825 | 36280 | 38652 | 36266 | 32587 | 30180 | 37565 | 12500 | 11667 | 13672 | 26416 | 1152 | 1033 | 255 | 992 | 987 | 791 | 710 | 912 | 673 | 679 | 365 | 282 | 94 | 188 | 306 | 131 | 82 | 36 | 171 | 21 |  | 84 |
| DeltaBlue | 52795 | 106701 | 96420 | 57840 | 68730 | 70343 | 72207 | 14731 | 14691 | 14705 | 2645 | 1050 | 1111 | 199 | 890 | 829 | 699 | 749 | 770 | 644 | 637 | 525 | 419 | 155 | 223 | 349 | 140 | 60 | 30 | 192 | 33 |  | 175 |
| Crypto | 65894 | 54666 | 44523 | 55986 | 36690 | 40481 | 40815 | 20189 | 21494 | 17086 | 16302 | 1207 | 1300 | 1346 | 959 | 1052 | 880 | 689 | 697 | 992 | 1348 | 1165 | 220 | 378 | 122 | 151 | 114 | 85 | 36 | 210 | 36 |  | 114 |
| RayTrace | 150514 | 132236 | 71855 | 119463 | 59199 | 60545 | 65785 | 47285 | 36333 | 30710 | 2619 | 1556 | 1284 | 3102 | 1323 | 1268 | 849 | 1280 | 1235 | 814 | 877 | 843 | 743 | 595 | 659 | 367 | 333 | 198 | 35 | 247 | 105 |  | 487 |
| EarleyBoyer | 80091 | 90378 | 73056 | 56405 | 74031 | 63862 | 68345 | 43169 | 38023 | 35822 | 28952 | 3335 | 1529 | 880 | 2075 | 1941 | 1964 | 2159 | 1874 | 1980 | 1060 | 856 | 750 | 349 | 632 | 615 | 313 | 206 | 65 |  | 101 |  | 614 |
| RegExp | 19508 | 10728 | 9680 | 16934 | 10344 | 9495 | 10223 | 10212 | 8290 | 10404 | 1001 | 453 | 199 | 1060 | 206 | 225 | 229 | 231 | 213 | 169 | 88 | 189 | 275 | 257 | 477 | 230 | 182 | 114 | 12 |  |  |  |  |
| Splay | 24366 | 23543 | 40232 | 17329 | 28375 | 26075 | 12350 | 11025 | 15043 | 13673 | 2304 | 2463 | 4193 | 4177 | 1807 | 1369 | 2074 | 2074 | 1565 | 1862 | 1806 | 1793 | 869 | 430 | 717 | 388 | 581 | 450 | 95 |  | 75 |  | 976 |
| NavierStokes | 27695 | 31483 | 35101 | 25203 | 27076 | 28493 | 33242 | 17572 | 16719 | 18568 | 19836 | 1047 | 3303 | 6078 | 1501 | 1724 | 1862 | 1207 | 1207 | 1445 | 1786 | 1178 | 623 | 1134 | 170 | 270 | 143 | 196 | 55 |  | 68 |  | 309 |
| Score | 46386 | 46018 | 43100 | 39438 | 36065 | 35176 | 34673 | 18709 | 17915 | 17779 | 6677 | 1313 | 1298 | 1224 | 1033 | 1015 | 960 | 935 | 906 | 866 | 792 | 709 | 464 | 331 | 325 | 311 | 206 | 143 | 39 |  |  |  |  |
| Score/MB | 282786315 | 1120 | 946 | 694 | 421 | 315 | 610 | 570 | 136 | 383 | 34 | 83 | 737 |  | 286 | 246 | 1007 | 88 | 767 | 360 | 19 | 1291 | 1107 | 205 | 123250 | 24 | 2 | 11 | 36 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 37 | 44 | 41 | 46 | 43 | 44 | 45 | 48 | 55 | 68 | 52 | 65 | 102 | 103 | 96 | 141 | 169 | 713 | 42 | 360 |  | 89 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | quickjs-ng | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.83 |  |  | 1.2.20 | 2.4.4 | 0.10.1 | 24.6.0 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  | 0.8.0 | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.1M | 122.1M | 55.8M | 132.7M | 143.1M | 77.6M | 116.3M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 42.2M | 9.3M | 9M | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 26.1M | 112.9M | 110.8M | 47.4M | 85.3M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.5M | 1.7M | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 25M | 121.8M | 29.7M | 19.8M | 32.3M | 30.3M | 31.1M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 29.1M | 7.8M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38585 | 36792 | 33018 | 37120 | 33233 | 31482 | 31722 | 24383 | 13277 | 13768 | 35711 | 8094 | 706 | 510 | 451 | 392 | 441 | 420 | 229 | 212 | 229 | 197 | 104 | 55 | 48 |  | 20 |  |  |
| DeltaBlue | 109214 | 45932 | 78284 | 44378 | 70151 | 75143 | 70680 | 28722 | 13191 | 12946 | 31591 | 488 | 623 | 469 | 409 | 370 | 396 | 396 | 350 | 261 | 331 | 230 | 113 | 49 | 42 |  | 23 |  |  |
| Crypto | 40352 | 46254 | 42002 | 45870 | 38806 | 41009 | 41882 | 33933 | 19054 | 17670 | 23792 | 2976 | 769 | 545 | 424 | 429 | 495 | 363 | 181 | 313 | 188 | 110 | 92 | 58 | 75 |  | 27 |  |  |
| RayTrace | 112552 | 104634 | 68819 | 85321 | 66969 | 65267 | 66377 | 48373 | 28046 | 25430 | 3327 | 2017 | 1011 | 550 | 736 | 569 | 587 | 583 | 479 | 438 | 464 | 228 | 267 | 129 | 134 |  | 73 |  |  |
| EarleyBoyer | 86684 | 61563 | 70013 | 54905 | 70931 | 72109 | 71144 | 42462 | 38619 | 36449 | 23497 | 1615 | 2163 | 996 | 1132 | 1005 | 976 | 952 | 578 | 510 | 568 | 457 | 296 | 123 | 139 |  | 69 |  |  |
| RegExp | 10122 | 18601 | 9880 | 16803 | 9608 | 9608 | 9880 | 9880 | 8839 | 8719 | 939 | 928 | 405 | 189 | 196 | 195 | 174 | 188 | 200 | 110 | 253 | 196 | 274 | 89 | 42 |  |  |  |  |
| Splay | 43744 | 34112 | 38170 | 30600 | 32482 | 27283 | 32262 | 20527 | 23844 | 14016 | 3492 | 4502 | 2314 | 998 | 1440 | 1278 | 969 | 962 | 1189 | 749 | 579 | 871 | 463 | 321 | 159 |  | 55 |  |  |
| NavierStokes | 38881 | 39623 | 38655 | 33538 | 38584 | 38584 | 30035 | 36915 | 22112 | 21832 | 19292 | 4451 | 1095 | 1036 | 740 | 718 | 739 | 672 | 480 | 1077 | 479 | 190 | 151 | 115 | 165 |  | 48 |  |  |
| Score | 48081 | 43431 | 40765 | 39646 | 38836 | 38288 | 37887 | 27884 | 18980 | 17236 | 10360 | 2273 | 966 | 586 | 584 | 531 | 529 | 503 | 383 | 369 | 357 | 253 | 189 | 97 | 86 |  |  |  |  |
| Score/MB | 887 | 355 | 730 | 298 | 271 | 493 | 325 | 1936 | 371 | 236 | 52 | 129 | 8 | 49 | 15 | 12 | 56 | 56 | 50 | 48 | 47 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 36 | 42 | 58 | 60 | 61 | 60 | 63 | 83 | 84 | 78 | 123 | 147 | 251 | 285 | 131 | 461 |  |  |
