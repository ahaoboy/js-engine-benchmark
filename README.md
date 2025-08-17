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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48370<br>56.8M<br>851/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48362<br>36.4M<br>1328/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47100<br>98.4M<br>478/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40866<br>0.3K<br>127913751/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40789<br>106.5M<br>382/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39644<br>123.1M<br>321/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38991<br>66.3M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38615<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20024<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18953<br>39.6M<br>478/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17243<br>51M<br>338/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17018<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10755<br>199.7M<br>53/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2419<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1543<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 872<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 832<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 763<br>831.3K<br>939/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 721<br>1.3M<br>535/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 568<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 503<br>2.1M<br>236/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 389<br>446.6K<br>891/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 355<br>414.5K<br>877/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 305<br>2.7K<br>115665/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 193<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/17/2025, 8:28:37 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 0.3K | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 0.3K | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37413 | 41635 | 40611 | 31048 | 32527 | 32150 | 32026 | 32527 | 23377 | 12755 | 14431 | 12931 | 35701 | 12973 | 1130 | 684 | 685 | 693 | 628 | 560 | 600 | 582 | 495 | 287 | 249 | 255 | 225 | 139 | 203 | 90 | 105 | 59 | 60 | 271 | 24 |  | 128 |  |
| DeltaBlue | 111746 | 56114 | 54772 | 76955 | 73933 | 76227 | 72895 | 76155 | 24690 | 13012 | 13124 | 12827 | 40663 | 278 | 1048 | 672 | 665 | 656 | 623 | 539 | 594 | 582 | 467 | 316 | 361 | 348 | 318 | 172 | 250 | 164 | 115 | 54 | 55 | 283 | 28 |  | 175 |  |
| Crypto | 41380 | 51948 | 49166 | 41771 | 41488 | 40356 | 41602 | 41535 | 31711 | 20556 | 17950 | 17728 | 26469 | 8270 | 1358 | 582 | 736 | 601 | 557 | 885 | 545 | 379 | 888 | 787 | 189 | 188 | 179 | 156 | 123 | 324 | 99 | 78 | 61 | 303 | 29 |  | 136 |  |
| RayTrace | 112700 | 121358 | 117066 | 72001 | 68449 | 64601 | 67117 | 60013 | 35632 | 27473 | 27278 | 27972 | 3147 | 1368 | 1547 | 1146 | 904 | 1068 | 967 | 680 | 885 | 693 | 578 | 579 | 533 | 534 | 483 | 485 | 274 | 491 | 259 | 163 | 136 | 350 | 86 |  | 422 |  |
| EarleyBoyer | 88489 | 68510 | 69777 | 69966 | 75519 | 70925 | 74025 | 70354 | 7107 | 37498 | 36076 | 36674 | 21789 | 1039 | 3402 | 1858 | 1504 | 1751 | 1379 | 1682 | 1360 | 1237 | 787 | 593 | 546 | 564 | 514 | 576 | 502 | 324 | 291 | 191 | 136 |  | 79 |  | 395 |  |
| RegExp | 10557 | 20365 | 21023 | 10334 | 10223 | 9809 | 9930 | 8837 | 7629 | 8620 | 8775 | 8866 | 915 | 569 | 556 | 251 | 227 | 228 | 230 | 116 | 226 | 180 | 62 | 134 | 224 | 246 | 202 | 438 | 211 | 96 | 250 | 49 | 94 |  |  |  |  |  |
| Splay | 42439 | 36317 | 37250 | 38504 | 37413 | 35375 | 28954 | 33542 | 19861 | 24692 | 12095 | 11987 | 2386 | 4122 | 3648 | 2424 | 1812 | 1960 | 1755 | 2119 | 1477 | 1710 | 1237 | 1294 | 1163 | 902 | 839 | 855 | 927 | 380 | 509 | 214 | 317 |  | 58 |  | 712 |  |
| NavierStokes | 38765 | 40096 | 34622 | 38881 | 38842 | 38803 | 38507 | 38397 | 36803 | 22260 | 22002 | 21941 | 31133 | 11813 | 1872 | 966 | 1260 | 1007 | 979 | 1211 | 936 | 930 | 1490 | 964 | 480 | 474 | 468 | 191 | 202 | 818 | 165 | 176 | 118 |  | 50 |  | 282 |  |
| Score | 48370 | 48362 | 47100 | 40866 | 40789 | 39644 | 38991 | 38615 | 20024 | 18953 | 17243 | 17018 | 10755 | 2419 | 1543 | 872 | 835 | 832 | 763 | 741 | 721 | 649 | 568 | 503 | 397 | 389 | 355 | 305 | 276 | 263 | 193 | 105 | 104 |  |  |  |  |  |
| Score/MB | 851 | 1328 | 478 | 127913751 | 382 | 321 | 587 | 949 | 1031 | 478 | 338 | 483 | 53 | 2 | 42 | 71 | 195 | 161 | 939 | 87 | 535 | 329 | 12 | 236 | 593 | 891 | 877 | 115665 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 26 | 42 | 33 | 47 | 48 | 49 | 51 | 61 | 52 | 59 | 87 | 67 | 80 | 79 | 85 | 95 | 113 | 131 | 143 | 236 | 236 | 31 | 423 |  | 88 | 7 |
### macos-arm64
| Engine | v8 | bare | dune | bun | JavaScriptCore | node | deno | spidermonkey | mozjs | spiderfire | graaljs | jjs | primjs | hermes | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | njs | duktape | ladybird | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.81 |  | 0.10.1 | 1.2.20 |  | 24.6.0 | 2.4.4 | 142.0 |  |  | 24.1.2 |  |  | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 | 2.99.99 |  | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.3K | 56.8M | 56.8M | 0.2K | 111.5M | 85.6M | 131.2M | 32.8M | 46.3M | 194M | 0 | 1.8M | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 562.1K | 41.5M | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 41.1M | 0.3K | 56.8M | 56.8M | 0.2K | 111.5M | 85.6M | 65.6M | 32.8M | 46.3M | 147.4K | 0 | 1.8M | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 562.1K | 41.5M | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 31334 | 42249 | 45409 | 41307 | 35934 | 40407 | 40152 | 14266 | 14746 | 13612 | 24726 | 17259 | 1026 | 1044 | 1153 | 943 | 1077 | 978 | 998 | 708 | 489 | 543 | 327 | 106 | 207 | 208 | 143 | 86 | 38 | 175 | 34 |  | 158 |
| DeltaBlue | 93769 | 103501 | 104202 | 55771 | 45932 | 84221 | 75090 | 16034 | 16582 | 13713 | 17257 | 283 | 1150 | 945 | 1113 | 1004 | 952 | 961 | 1021 | 705 | 583 | 537 | 505 | 206 | 203 | 248 | 153 | 80 | 38 | 209 | 43 |  | 236 |
| Crypto | 50651 | 57598 | 53086 | 60595 | 51513 | 54829 | 45820 | 24451 | 20551 | 21199 | 24114 | 2860 | 1503 | 1006 | 1102 | 782 | 1107 | 1150 | 728 | 1098 | 1297 | 1203 | 253 | 508 | 145 | 146 | 122 | 97 | 41 | 232 | 43 |  | 144 |
| RayTrace | 125206 | 93609 | 77403 | 129868 | 117097 | 81547 | 74665 | 44325 | 45833 | 40107 | 565 | 1557 | 1541 | 1730 | 1956 | 1730 | 1440 | 962 | 1348 | 1072 | 1010 | 975 | 677 | 649 | 691 | 345 | 265 | 215 | 41 | 278 | 135 |  | 661 |
| EarleyBoyer | 99961 | 86225 | 95479 | 68597 | 68791 | 77342 | 66729 | 46493 | 41695 | 45131 | 14236 | 913 | 1831 | 4013 | 2579 | 2545 | 2068 | 2042 | 2069 | 2504 | 1093 | 1211 | 852 | 383 | 706 | 643 | 313 | 201 | 82 |  | 107 |  | 682 |
| RegExp | 13728 | 13183 | 14211 | 23820 | 22775 | 12316 | 9941 | 11433 | 11387 | 10899 | 993 | 643 | 284 | 487 | 285 | 267 | 230 | 238 | 248 | 199 | 232 | 89 | 305 | 315 | 564 | 273 | 196 | 131 | 14 |  |  |  |  |
| Splay | 62039 | 43223 | 43638 | 26933 | 32890 | 31798 | 28131 | 20674 | 19664 | 15268 | 2293 | 4335 | 4152 | 2852 | 2513 | 3281 | 1657 | 2177 | 1946 | 1717 | 1964 | 1302 | 778 | 479 | 1015 | 861 | 542 | 510 | 148 |  | 88 |  | 1090 |
| NavierStokes | 37508 | 38063 | 37656 | 28408 | 34632 | 34987 | 30775 | 17441 | 19886 | 18976 | 22045 | 11427 | 3516 | 1302 | 1827 | 1455 | 1876 | 2138 | 1516 | 1740 | 1434 | 1506 | 677 | 1227 | 201 | 258 | 173 | 211 | 73 |  | 75 |  | 298 |
| Score | 52701 | 50763 | 50655 | 46711 | 45311 | 44764 | 39498 | 21607 | 21325 | 19693 | 6720 | 2239 | 1461 | 1371 | 1322 | 1195 | 1117 | 1113 | 1053 | 984 | 848 | 721 | 499 | 388 | 369 | 317 | 212 | 159 | 49 |  |  |  |  |
| Score/MB | 1283 | 158892129 | 891 | 822 | 276232715 | 401 | 461 | 164 | 649 | 424 | 34 |  | 830 | 87 | 366 | 113 | 270 | 1167 | 892 | 410 | 1544 | 17 | 1190 | 240 | 139936 | 24 | 2 | 12 | 46 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 38 | 38 | 36 | 39 | 42 | 43 | 43 | 43 | 49 | 47 | 68 | 61 | 92 | 88 | 92 | 136 | 154 | 566 | 38 | 304 |  | 77 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | jjs | quickjs | txiki.js | rquickjs | llrt | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.81 |  | 1.2.20 |  | 24.6.0 | 2.4.4 | 0.10.1 | 1.11.24.0 | 142.0 |  | 24.1.2 | 0.12.0 | 1.8.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.1M | 122.1M | 132.7M | 0.4K | 116.3M | 143.1M | 77.6M | 14.4M | 52.2M | 72.8M | 196.1M | 86.6M | 17.5M | 11.8M | 38.1M | 9.3M | 42.2M | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 112.9M | 0.4K | 85.3M | 110.8M | 47.4M | 342.9K | 33.7M | 42.6M | 349.1K | 3M | 0 | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 23.9M | 121.7M | 19.8M | 0 | 31.1M | 32.3M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 83.5M | 17.5M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38010 | 36379 | 36845 | 32849 | 33184 | 33495 | 33025 | 24718 | 12889 | 14431 | 34861 | 700 | 6061 | 514 | 455 | 444 | 388 | 431 | 212 | 235 | 233 | 187 | 106 | 54 | 49 |  | 21 |  |  |
| DeltaBlue | 110285 | 46494 | 40021 | 73629 | 75322 | 77556 | 75818 | 29132 | 13124 | 11425 | 29418 | 623 | 213 | 466 | 408 | 396 | 370 | 396 | 260 | 330 | 332 | 234 | 111 | 53 | 42 |  | 24 |  |  |
| Crypto | 39689 | 48356 | 44955 | 41953 | 35640 | 40494 | 41986 | 33611 | 20459 | 17797 | 23944 | 791 | 3228 | 542 | 423 | 510 | 422 | 380 | 317 | 191 | 182 | 114 | 92 | 59 | 75 |  | 27 |  |  |
| RayTrace | 113588 | 106558 | 100565 | 71853 | 66673 | 64157 | 65045 | 52169 | 28194 | 27177 | 3474 | 1022 | 1310 | 550 | 746 | 584 | 613 | 584 | 441 | 472 | 471 | 231 | 262 | 132 | 133 |  | 74 |  |  |
| EarleyBoyer | 83018 | 63381 | 59348 | 69539 | 72883 | 74881 | 75464 | 44355 | 39228 | 37094 | 25112 | 2243 | 883 | 1006 | 1162 | 997 | 1021 | 978 | 526 | 580 | 595 | 457 | 296 | 126 | 144 |  | 70 |  |  |
| RegExp | 10122 | 19456 | 17582 | 9861 | 9910 | 9709 | 9738 | 10092 | 8938 | 8784 | 1107 | 406 | 605 | 188 | 197 | 174 | 179 | 187 | 110 | 255 | 201 | 198 | 280 | 91 | 43 |  |  |  |  |
| Splay | 43679 | 35750 | 33036 | 39409 | 34495 | 33558 | 12443 | 18559 | 24635 | 15117 | 2846 | 2402 | 1018 | 1047 | 1474 | 993 | 1336 | 1010 | 1008 | 579 | 641 | 760 | 532 | 330 | 172 |  | 58 |  |  |
| NavierStokes | 39060 | 33916 | 39988 | 30449 | 38765 | 34656 | 38990 | 36065 | 22386 | 22193 | 25796 | 1070 | 256 | 1037 | 736 | 747 | 713 | 675 | 1081 | 469 | 483 | 192 | 151 | 116 | 164 |  | 48 |  |  |
| Score | 47765 | 43589 | 41726 | 39560 | 39339 | 39314 | 35349 | 28005 | 19251 | 17480 | 10718 | 976 | 967 | 590 | 589 | 536 | 533 | 512 | 385 | 360 | 354 | 250 | 193 | 99 | 88 |  |  |  |  |
| Score/MB | 900 | 357 | 314 | 105016877 | 338 | 274 | 455 | 1944 | 368 | 240 | 54 | 11 | 55 | 50 | 15 | 57 | 12 | 57 | 50 | 47 | 46 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 41 | 64 | 58 | 59 | 60 | 61 | 63 | 83 | 78 | 82 | 122 | 147 | 247 | 279 | 130 | 460 |  |  |
