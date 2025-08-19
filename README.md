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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48141<br>36.4M<br>1322/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47965<br>56.8M<br>844/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47855<br>98.4M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40687<br>106.5M<br>382/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40494<br>65.3M<br>619/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39806<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39052<br>66.3M<br>588/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38618<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20066<br>19.4M<br>1033/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18883<br>39.6M<br>476/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17062<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17049<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9940<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2297<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1532<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 871<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 835<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 766<br>831.3K<br>943/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 722<br>1.3M<br>536/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 563<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 502<br>2.1M<br>236/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 396<br>446.6K<br>907/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 280<br>2.7K<br>106184/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 269<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 187<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/19/2025, 1:50:23 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.0 | 1.2.20 | 2.4.4 |  | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.4M | 56.8M | 98.4M | 106.5M | 65.3M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 36.4M | 1M | 98.4M | 106.5M | 65.3M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 0 | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40770 | 37424 | 41953 | 32831 | 31249 | 31249 | 31807 | 32556 | 23419 | 12716 | 14022 | 13094 | 35570 | 13337 | 1129 | 681 | 711 | 677 | 626 | 565 | 590 | 582 | 483 | 288 | 265 | 246 | 225 | 112 | 204 | 90 | 98 | 60 | 59 | 255 | 24 |  | 128 |  |
| DeltaBlue | 53966 | 109815 | 54329 | 75910 | 75619 | 75527 | 73728 | 75573 | 25252 | 13052 | 13151 | 12834 | 25270 | 269 | 1064 | 672 | 679 | 669 | 622 | 544 | 594 | 580 | 461 | 332 | 363 | 350 | 322 | 161 | 250 | 165 | 104 | 54 | 55 | 277 | 29 |  | 173 |  |
| Crypto | 51713 | 41289 | 49413 | 41624 | 41759 | 41510 | 41785 | 41356 | 31763 | 20280 | 17642 | 17488 | 10923 | 9470 | 1356 | 581 | 587 | 735 | 556 | 880 | 546 | 380 | 882 | 782 | 190 | 190 | 182 | 142 | 124 | 329 | 95 | 81 | 62 | 297 | 29 |  | 135 |  |
| RayTrace | 121580 | 112330 | 117214 | 67413 | 70447 | 65341 | 67931 | 67043 | 36037 | 27500 | 26465 | 27824 | 10561 | 1049 | 1558 | 1165 | 1081 | 915 | 951 | 681 | 895 | 687 | 569 | 582 | 532 | 525 | 489 | 485 | 273 | 499 | 251 | 164 | 136 | 339 | 87 |  | 421 |  |
| EarleyBoyer | 68449 | 87231 | 67419 | 75027 | 69699 | 72589 | 71921 | 68963 | 7063 | 37601 | 36370 | 36553 | 34099 | 1127 | 3405 | 1874 | 1750 | 1479 | 1418 | 1667 | 1385 | 1231 | 788 | 594 | 563 | 541 | 505 | 582 | 500 | 324 | 278 | 194 | 134 |  | 80 |  | 505 |  |
| RegExp | 20365 | 10515 | 21162 | 10011 | 10112 | 9880 | 10032 | 8737 | 7772 | 8577 | 8775 | 8828 | 832 | 530 | 550 | 254 | 225 | 230 | 234 | 116 | 227 | 178 | 63 | 131 | 245 | 223 | 198 | 451 | 206 | 96 | 253 | 49 | 92 |  |  |  |  |  |
| Splay | 37201 | 41300 | 36655 | 36809 | 38032 | 35351 | 29027 | 31317 | 20068 | 24350 | 11823 | 12259 | 1572 | 2548 | 3423 | 2375 | 1976 | 1797 | 1814 | 2111 | 1442 | 1664 | 1222 | 1291 | 950 | 1137 | 1315 | 763 | 782 | 375 | 542 | 211 | 330 |  | 58 |  | 780 |  |
| NavierStokes | 40216 | 38803 | 39840 | 38842 | 38803 | 38842 | 38803 | 38436 | 35249 | 22238 | 22112 | 22067 | 20607 | 14316 | 1861 | 951 | 991 | 1275 | 963 | 1207 | 949 | 929 | 1468 | 926 | 475 | 486 | 478 | 154 | 200 | 843 | 162 | 175 | 119 |  | 51 |  | 279 |  |
| Score | 48141 | 47965 | 47855 | 40687 | 40494 | 39806 | 39052 | 38618 | 20066 | 18883 | 17062 | 17049 | 9940 | 2297 | 1532 | 871 | 835 | 835 | 766 | 741 | 722 | 645 | 563 | 502 | 396 | 393 | 377 | 280 | 269 | 265 | 187 | 106 | 104 |  |  |  |  |  |
| Score/MB | 1322 | 844 | 486 | 382 | 619 | 323 | 588 | 949 | 1033 | 476 | 334 | 484 | 49 | 2 | 42 | 71 | 161 | 195 | 943 | 87 | 536 | 326 | 12 | 236 | 907 | 587 | 931 | 106184 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 34 | 47 | 50 | 48 | 50 | 61 | 52 | 59 | 87 | 68 | 79 | 80 | 85 | 105 | 114 | 131 | 145 | 235 | 238 | 31 | 420 |  | 87 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bare | deno | bun | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | txiki.js | primjs | jjs | llrt | quickjs | quickjs-ng | rquickjs | njs | ladybird | duktape | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.83 | 0.10.1 |  | 2.4.4 | 1.2.20 | 24.6.0 | 142.0 |  |  | 24.1.2 | 0.12.0 | 24.12.0 |  |  | 0.6.2.beta | 2025.04.26 | 0.8.0 |  | 0.9.2 |  | 2.99.99 | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 45.6M | 85.6M | 56.8M | 111.5M | 131.2M | 32.8M | 46.3M | 194M | 15.7M | 3.6M | 1.8M | 0 | 10.5M | 975.9K | 4.1M | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 45.6M | 85.6M | 56.8M | 111.5M | 65.6M | 32.8M | 46.3M | 147.4K | 7.9M | 3.6M | 1.8M | 0 | 10.5M | 975.9K | 2.1M | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 0 | 2.1M | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 51114 | 40979 | 46133 | 43679 | 32577 | 47404 | 27687 | 14604 | 14311 | 13958 | 35023 | 1251 | 1257 | 781 | 19769 | 1017 | 1145 | 1086 | 1037 | 767 | 774 | 388 | 360 | 328 | 112 | 189 | 187 | 110 | 30 | 198 | 37 |  | 168 |
| DeltaBlue | 65437 | 126999 | 102430 | 104989 | 74244 | 69854 | 60518 | 16787 | 16682 | 13805 | 37634 | 1122 | 1234 | 1061 | 812 | 1149 | 1143 | 972 | 1044 | 835 | 801 | 566 | 462 | 394 | 193 | 209 | 204 | 93 | 35 | 223 | 45 |  | 228 |
| Crypto | 67537 | 61222 | 58896 | 51569 | 47323 | 67259 | 39396 | 25256 | 22128 | 19707 | 26717 | 1368 | 1199 | 1602 | 7293 | 1030 | 1387 | 1079 | 896 | 1229 | 1648 | 1261 | 274 | 196 | 478 | 143 | 172 | 109 | 40 | 241 | 47 |  | 146 |
| RayTrace | 115808 | 157988 | 90501 | 75627 | 67937 | 88544 | 61271 | 46323 | 50195 | 34967 | 1276 | 2359 | 2133 | 1734 | 614 | 1966 | 1157 | 1422 | 1357 | 951 | 1025 | 976 | 933 | 443 | 679 | 759 | 385 | 180 | 43 | 292 | 148 |  | 678 |
| EarleyBoyer | 92650 | 110206 | 100119 | 75727 | 81838 | 51248 | 59503 | 45379 | 49699 | 37560 | 42077 | 4566 | 3177 | 1496 | 1039 | 2678 | 2383 | 2121 | 2008 | 2571 | 1343 | 1189 | 1027 | 833 | 400 | 587 | 442 | 197 | 85 |  | 119 |  | 712 |
| RegExp | 31548 | 12468 | 15062 | 13610 | 12872 | 16252 | 8535 | 10765 | 12703 | 11331 | 1444 | 697 | 321 | 280 | 469 | 313 | 271 | 252 | 254 | 205 | 105 | 258 | 342 | 299 | 310 | 549 | 222 | 140 | 14 |  |  |  |  |
| Splay | 47020 | 41593 | 47167 | 40998 | 36777 | 14200 | 21675 | 29100 | 15182 | 17112 | 3439 | 4331 | 3437 | 4233 | 1042 | 4050 | 2241 | 2151 | 1540 | 1659 | 2107 | 2135 | 1054 | 1147 | 494 | 864 | 627 | 505 | 155 |  | 83 |  | 951 |
| NavierStokes | 30241 | 36730 | 40580 | 36137 | 35468 | 24041 | 28823 | 20270 | 20122 | 20607 | 29502 | 1594 | 1997 | 3792 | 393 | 1587 | 2037 | 2013 | 1487 | 1585 | 1878 | 1505 | 720 | 321 | 1414 | 187 | 256 | 214 | 77 |  | 82 |  | 316 |
| Score | 56825 | 56623 | 54037 | 47812 | 42520 | 39228 | 32624 | 23156 | 21807 | 19384 | 11358 | 1777 | 1515 | 1409 | 1395 | 1375 | 1256 | 1180 | 1055 | 1004 | 935 | 848 | 571 | 423 | 396 | 350 | 282 | 167 | 48 |  |  |  |  |
| Score/MB | 346426344 | 1379 | 951 | 1049 | 496 | 690 | 292 | 176 | 664 | 418 | 58 | 113 | 420 | 800 |  | 130 | 1317 | 286 | 893 | 418 | 22 | 1544 | 1362 | 33 | 245 | 132731 | 3 | 13 | 45 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 30 | 37 | 38 | 53 | 37 | 39 | 41 | 44 | 49 | 61 | 45 | 56 | 77 | 90 | 94 | 103 | 153 | 557 | 35 | 284 |  | 75 |
### windows
| Engine | v8 | JavaScriptCore | bare | deno | node | bun | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | jjs | txiki.js | quickjs | llrt | quickjs-ng | rquickjs | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.83 |  |  | 2.4.4 | 24.6.0 | 1.2.20 | 0.10.1 | 1.11.24.0 | 142.0 |  | 24.1.2 | 0.12.0 | 1.8.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta | 0.8.0 |  | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.1M | 122.1M | 55.8M | 143.1M | 116.3M | 132.7M | 77.6M | 14.4M | 52.2M | 72.8M | 196.1M | 86.6M | 17.5M | 37M | 11.8M | 42.2M | 9M | 8M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 26.1M | 110.8M | 85.3M | 112.9M | 47.4M | 342.9K | 33.7M | 42.6M | 349.1K | 3M | 0 | 5.7M | 4.9M | 13.1M | 1.7M | 1.3M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 25M | 121.8M | 29.7M | 32.3M | 31.1M | 19.8M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 83.5M | 17.5M | 31.3M | 6.9M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38303 | 34684 | 33202 | 31895 | 33032 | 30988 | 26911 | 24351 | 12832 | 14361 | 35133 | 691 | 116 | 451 | 456 | 391 | 427 | 385 | 208 | 229 | 233 | 197 | 105 | 52 | 48 |  | 20 |  |  |
| DeltaBlue | 103733 | 45807 | 79388 | 75335 | 72479 | 36074 | 74779 | 28080 | 12972 | 13091 | 33852 | 626 | 215 | 403 | 430 | 368 | 390 | 416 | 258 | 306 | 324 | 233 | 116 | 50 | 42 |  | 23 |  |  |
| Crypto | 41480 | 49344 | 41062 | 40022 | 40690 | 46206 | 41984 | 33947 | 20112 | 17688 | 21270 | 785 | 2722 | 421 | 536 | 427 | 372 | 319 | 316 | 189 | 182 | 115 | 89 | 57 | 74 |  | 27 |  |  |
| RayTrace | 108260 | 100686 | 71631 | 67339 | 66303 | 100787 | 66081 | 51651 | 26956 | 27130 | 2513 | 1006 | 1138 | 737 | 520 | 569 | 578 | 551 | 435 | 422 | 441 | 230 | 264 | 126 | 132 |  | 72 |  |  |
| EarleyBoyer | 88087 | 60253 | 65862 | 73370 | 70455 | 56194 | 73678 | 43316 | 38973 | 36777 | 25800 | 2247 | 1519 | 1089 | 980 | 999 | 953 | 887 | 503 | 510 | 532 | 453 | 292 | 123 | 136 |  | 68 |  |  |
| RegExp | 9991 | 18074 | 9718 | 9599 | 9799 | 16274 | 9718 | 10102 | 9264 | 8837 | 942 | 405 | 653 | 196 | 188 | 179 | 188 | 154 | 109 | 244 | 196 | 196 | 272 | 89 | 42 |  |  |  |  |
| Splay | 40028 | 32176 | 38537 | 32596 | 32735 | 31944 | 26974 | 27307 | 22663 | 14049 | 2361 | 2272 | 635 | 1368 | 970 | 1286 | 943 | 919 | 986 | 1083 | 1132 | 849 | 498 | 319 | 164 |  | 55 |  |  |
| NavierStokes | 38694 | 33620 | 38655 | 38694 | 38732 | 33653 | 38397 | 36065 | 22002 | 21750 | 24313 | 1067 | 3015 | 728 | 1033 | 720 | 679 | 730 | 1066 | 479 | 488 | 186 | 150 | 112 | 163 |  | 48 |  |  |
| Score | 47125 | 41788 | 40607 | 39353 | 39269 | 38783 | 37768 | 29117 | 18895 | 17540 | 9852 | 965 | 787 | 575 | 563 | 526 | 503 | 475 | 379 | 371 | 370 | 253 | 190 | 96 | 86 |  |  |  |  |
| Score/MB | 870 | 342 | 727 | 274 | 337 | 292 | 486 | 2021 | 362 | 240 | 50 | 11 | 44 | 15 | 47 | 12 | 56 | 59 | 49 | 48 | 49 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 41 | 43 | 61 | 59 | 61 | 63 | 69 | 84 | 80 | 84 | 122 | 150 | 254 | 288 | 131 | 462 |  |  |
