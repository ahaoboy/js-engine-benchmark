fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

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


## Engine & Runtime (31/36)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48184<br>37.4M<br>1286/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48068<br>98.4M<br>488/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45226<br>53.3M<br>849/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40906<br>65.2M<br>626/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40290<br>106.9M<br>376/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40129<br>123.1M<br>326/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39052<br>67.1M<br>581/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38536<br>40.7M<br>947/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20323<br>19.4M<br>1047/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18992<br>39.6M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17128<br>35.2M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17096<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11071<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3249<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1531<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 872<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 763<br>857K<br>911/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 722<br>1.3M<br>536/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 562<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 504<br>2.1M<br>237/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 303<br>2.7K<br>114907/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 279<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 267<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 194<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 108<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
8/10/2025, 4:03:13 PM

### ubuntu
| Engine | jsc | bun | v8 | bare | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.20 | 13.6.0 | 0 | 2.4.3 | 24.5.0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 37.4M | 98.4M | 53.3M | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 46.1M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 37.4M | 98.4M | 937.8K | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 46.1M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41445 | 41603 | 35041 | 31906 | 32019 | 32150 | 32323 | 32566 | 23405 | 12924 | 12984 | 14124 | 35380 | 14184 | 1113 | 682 | 681 | 710 | 598 | 588 | 572 | 498 | 286 | 244 | 224 | 147 | 202 | 90 | 108 | 60 | 60 | 557 | 133 | 271 | 0 | 24 |
| DeltaBlue | 51598 | 58151 | 94337 | 77272 | 75381 | 75877 | 73748 | 80869 | 25919 | 12979 | 12946 | 12939 | 26884 | 419 | 1057 | 676 | 661 | 659 | 623 | 587 | 572 | 457 | 324 | 360 | 323 | 171 | 253 | 165 | 119 | 55 | 56 | 522 | 181 | 280 | 0 | 28 |
| Crypto | 52067 | 49348 | 42729 | 41655 | 41095 | 41875 | 41785 | 41194 | 32050 | 19883 | 17842 | 17634 | 13993 | 8414 | 1334 | 577 | 741 | 584 | 575 | 561 | 375 | 883 | 790 | 187 | 184 | 149 | 122 | 326 | 99 | 81 | 62 | 822 | 137 | 304 | 0 | 29 |
| RayTrace | 120322 | 118842 | 102340 | 72001 | 67265 | 66007 | 67272 | 56313 | 37073 | 27528 | 27870 | 27232 | 8173 | 1364 | 1557 | 1161 | 908 | 1070 | 945 | 876 | 724 | 576 | 573 | 529 | 486 | 423 | 276 | 499 | 254 | 166 | 138 | 586 | 426 | 353 | 0 | 84 |
| EarleyBoyer | 69269 | 67758 | 78727 | 70102 | 74737 | 70242 | 74052 | 69918 | 7078 | 38494 | 37113 | 36340 | 24244 | 1777 | 3380 | 1895 | 1483 | 1787 | 1380 | 1366 | 1229 | 765 | 587 | 537 | 504 | 587 | 511 | 324 | 289 | 194 | 140 | 0 | 505 | 0 | 0 | 76 |
| RegExp | 20527 | 20679 | 10334 | 10294 | 10042 | 10021 | 10011 | 8947 | 7803 | 8857 | 8901 | 8910 | 1346 | 867 | 555 | 251 | 229 | 228 | 231 | 232 | 182 | 63 | 135 | 218 | 199 | 407 | 209 | 96 | 250 | 49 | 95 | 112 | 0 | 0 | 0 | 0 |
| Splay | 37787 | 35848 | 38504 | 37864 | 35734 | 36549 | 28066 | 34438 | 19925 | 24504 | 12216 | 11651 | 1916 | 6658 | 3615 | 2450 | 1771 | 1976 | 1840 | 1460 | 1682 | 1155 | 1314 | 1316 | 1284 | 1032 | 991 | 400 | 534 | 233 | 325 | 1942 | 862 | 0 | 0 | 58 |
| NavierStokes | 40365 | 39988 | 38655 | 38803 | 38803 | 38765 | 38803 | 36952 | 36693 | 22067 | 21963 | 22045 | 33175 | 17737 | 1825 | 931 | 1264 | 930 | 970 | 946 | 922 | 1526 | 945 | 465 | 489 | 184 | 202 | 849 | 162 | 176 | 118 | 1216 | 285 | 0 | 0 | 51 |
| Score | 48184 | 48068 | 45226 | 40906 | 40290 | 40129 | 39052 | 38536 | 20323 | 18992 | 17128 | 17096 | 11071 | 3249 | 1531 | 872 | 832 | 827 | 763 | 722 | 647 | 562 | 504 | 397 | 377 | 303 | 279 | 267 | 194 | 108 | 105 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1286 | 488 | 849 | 626 | 376 | 326 | 581 | 947 | 1047 | 479 | 486 | 335 | 55 | 2 | 42 | 71 | 194 | 160 | 911 | 536 | 327 | 12 | 237 | 593 | 931 | 114907 | 21 | 128 | 2 | 4 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 39 | 33 | 47 | 48 | 49 | 51 | 51 | 59 | 86 | 68 | 81 | 85 | 97 | 113 | 130 | 142 | 233 | 233 | 54 | 87 | 31 | 0 | 432 |
### macos-arm64
| Engine | bun | jsc | bare | deno | dune | node | v8 | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | primjs | rquickjs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 0 | 2.4.3 | 0.10.0 | 24.5.0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.8M | 94.2M | 45.5M | 85.5M | 57.4M | 111.5M | 861K | 131.2M | 32.8M | 46.3M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.5M | 1.2M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.8M | 914.7K | 45.5M | 85.5M | 57.4M | 111.5M | 861K | 65.6M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.5M | 1.2M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 53055 | 52653 | 45596 | 48583 | 48187 | 45215 | 33932 | 15282 | 15431 | 16101 | 37505 | 16977 | 1354 | 1333 | 1085 | 1349 | 1152 | 815 | 1089 | 861 | 541 | 408 | 119 | 328 | 224 | 185 | 115 | 763 | 233 | 216 | 0 | 38 |
| DeltaBlue | 76842 | 76538 | 113240 | 108943 | 111878 | 110186 | 92638 | 17118 | 17852 | 17131 | 53377 | 579 | 1252 | 1346 | 1192 | 1255 | 1155 | 977 | 1071 | 798 | 639 | 609 | 226 | 396 | 235 | 207 | 102 | 834 | 262 | 241 | 0 | 46 |
| Crypto | 75039 | 77442 | 61208 | 60287 | 60631 | 60981 | 36612 | 25693 | 22608 | 22879 | 44869 | 14702 | 1473 | 1226 | 1040 | 1207 | 1380 | 1121 | 984 | 1617 | 1397 | 314 | 551 | 200 | 166 | 179 | 119 | 1222 | 146 | 266 | 0 | 48 |
| RayTrace | 189881 | 183591 | 99085 | 95903 | 94201 | 93535 | 97309 | 48987 | 51355 | 43363 | 1972 | 2283 | 2450 | 2178 | 2079 | 1591 | 1293 | 1334 | 1298 | 1137 | 1153 | 1004 | 756 | 472 | 778 | 421 | 253 | 791 | 697 | 331 | 0 | 149 |
| EarleyBoyer | 105122 | 101583 | 99402 | 106289 | 105866 | 90159 | 75807 | 51970 | 50417 | 49405 | 49924 | 1269 | 5314 | 3320 | 3057 | 2652 | 2368 | 2120 | 1893 | 1438 | 1218 | 1117 | 452 | 853 | 804 | 452 | 250 | 0 | 742 | 0 | 0 | 127 |
| RegExp | 32795 | 33309 | 15562 | 15305 | 15350 | 13715 | 11796 | 13274 | 12949 | 12897 | 1879 | 1049 | 736 | 319 | 327 | 279 | 289 | 234 | 251 | 108 | 263 | 356 | 339 | 313 | 653 | 229 | 146 | 211 | 0 | 0 | 0 | 0 |
| Splay | 53320 | 54493 | 60711 | 52668 | 46751 | 44494 | 42481 | 31985 | 19865 | 17462 | 3595 | 2090 | 4775 | 3647 | 4311 | 2418 | 2648 | 3875 | 1793 | 2274 | 2257 | 1023 | 577 | 1425 | 1178 | 594 | 599 | 1799 | 1088 | 0 | 0 | 82 |
| NavierStokes | 40877 | 34360 | 40662 | 39435 | 40662 | 40513 | 36101 | 21518 | 21411 | 21432 | 31281 | 24117 | 1628 | 2136 | 1761 | 2187 | 2389 | 2640 | 1666 | 1981 | 1566 | 791 | 1553 | 333 | 241 | 271 | 229 | 1903 | 326 | 0 | 0 | 87 |
| Score | 67608 | 66068 | 57505 | 56469 | 55883 | 53114 | 44493 | 25076 | 23365 | 22482 | 14420 | 3493 | 1922 | 1584 | 1465 | 1374 | 1338 | 1252 | 1098 | 984 | 944 | 631 | 445 | 445 | 422 | 288 | 191 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1189 | 701 | 1263 | 660 | 973 | 476 | 52915 | 191 | 711 | 485 | 74 | 0 | 122 | 439 | 139 | 333 | 1403 | 827 | 930 | 23 | 1719 | 1505 | 276 | 34 | 160035 | 3 | 15 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 32 | 29 | 37 | 37 | 39 | 36 | 41 | 42 | 59 | 43 | 53 | 81 | 76 | 78 | 98 | 137 | 38 | 74 | 33 | 0 | 268 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | dune | bare | ChakraCore | spidermonkey | graaljs | spiderfire | mozjs | jjs | hermes | txiki.js | qjs(ng) | llrt | rquickjs | quickjs | primjs | duktape | mujs | xst | goja | ringo | jint | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.20 | 0 | 2.4.3 | 24.5.0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 24.1.2 | 0 | 0 | 0 | 0.12.0 | 24.12.0 | 0.8.0 | 0.6.2.beta | 0 | 2025.04.26 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 861K | 62.5M | 89.6M | 96.6M | 113.7M | 60.4M | 47.1M | 20M | 65.6M | 194.4M | 48.2M | 33.8M | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 1.2M | 1M | 693.4K | 525.7K | 441.8K | 1.6M | 13.1M | 2.7K | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 861K | 62.5M | 1016.1K | 96.6M | 113.7M | 60.4M | 47.1M | 571K | 65.6M | 148.8K | 48.2M | 33.8M | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 1.2M | 1M | 693.4K | 525.7K | 441.8K | 1.6M | 13.1M | 2.7K | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 21474 | 28475 | 28528 | 29445 | 21612 | 24881 | 18265 | 25117 | 9231 | 39302 | 8229 | 7622 | 3781 | 461 | 478 | 451 | 301 | 389 | 346 | 234 | 120 | 142 | 92 | 138 | 62 | 80 | 45 | 25 | 322 | 43 | 109 | 0 | 13 |
| DeltaBlue | 78482 | 41989 | 36180 | 48822 | 51684 | 44200 | 46540 | 22815 | 10724 | 43532 | 8820 | 8384 | 151 | 547 | 539 | 491 | 371 | 437 | 375 | 275 | 153 | 198 | 141 | 161 | 94 | 85 | 44 | 21 | 340 | 98 | 124 | 0 | 13 |
| Crypto | 40046 | 37475 | 36887 | 33414 | 32258 | 26013 | 26910 | 24864 | 15349 | 21100 | 11805 | 7530 | 2667 | 556 | 287 | 294 | 223 | 275 | 261 | 199 | 264 | 108 | 186 | 76 | 49 | 61 | 43 | 36 | 398 | 62 | 133 | 0 | 18 |
| RayTrace | 106780 | 103006 | 94941 | 69559 | 66007 | 54019 | 53575 | 36187 | 28580 | 3914 | 21712 | 25208 | 633 | 1077 | 820 | 503 | 581 | 478 | 406 | 336 | 299 | 331 | 443 | 228 | 239 | 172 | 101 | 72 | 157 | 258 | 210 | 0 | 47 |
| EarleyBoyer | 68479 | 63345 | 57406 | 63135 | 60651 | 52134 | 45303 | 5704 | 33939 | 33862 | 27585 | 26682 | 444 | 1769 | 1201 | 887 | 980 | 810 | 810 | 573 | 385 | 404 | 313 | 398 | 262 | 190 | 89 | 81 | 0 | 210 | 0 | 0 | 47 |
| RegExp | 8594 | 16124 | 17166 | 8719 | 8323 | 6507 | 5898 | 5375 | 7273 | 1256 | 5733 | 5977 | 323 | 286 | 92 | 80 | 78 | 80 | 82 | 78 | 75 | 101 | 126 | 161 | 204 | 81 | 42 | 22 | 69 | 0 | 0 | 0 | 0 |
| Splay | 41601 | 34304 | 31470 | 36312 | 34837 | 21008 | 21994 | 21114 | 22695 | 3455 | 7970 | 9266 | 1752 | 2074 | 1510 | 855 | 1631 | 790 | 886 | 707 | 607 | 584 | 282 | 518 | 496 | 355 | 218 | 120 | 238 | 473 | 0 | 0 | 52 |
| NavierStokes | 35397 | 36173 | 32796 | 36434 | 36618 | 28379 | 30540 | 34064 | 24857 | 27723 | 17867 | 17997 | 4801 | 868 | 637 | 639 | 481 | 590 | 746 | 360 | 311 | 263 | 493 | 105 | 85 | 92 | 80 | 75 | 655 | 142 | 0 | 0 | 36 |
| Score | 39760 | 39436 | 37211 | 35341 | 33353 | 27344 | 26169 | 18071 | 16699 | 12446 | 11961 | 11576 | 1019 | 780 | 533 | 435 | 415 | 402 | 396 | 290 | 230 | 224 | 222 | 185 | 141 | 118 | 70 | 47 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 47286 | 630 | 415 | 365 | 293 | 452 | 555 | 901 | 254 | 64 | 248 | 342 | 0 | 99 | 142 | 211 | 33 | 325 | 386 | 428 | 448 | 519 | 138 | 14 | 53471 | 1 | 5 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 23 | 20 | 20 | 65 | 49 | 81 | 88 | 93 | 91 | 90 | 109 | 120 | 127 | 136 | 167 | 200 | 241 | 368 | 511 | 95 | 163 | 55 | 0 | 661 |
### windows
| Engine | v8 | jsc | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | qjs(ng) | rquickjs | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.20 | 24.5.0 | 2.4.3 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 | 0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 52.6M | 122.8M | 132.7M | 116.3M | 143.4M | 78.7M | 14.4M | 52.2M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 37M | 42.2M | 9M | 8M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.9M | 85.2M | 111.1M | 48.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 1.3M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 25M | 122.5M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 31.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 32781 | 36418 | 36718 | 31016 | 32997 | 27737 | 24598 | 12292 | 14287 | 35983 | 6175 | 685 | 508 | 444 | 388 | 434 | 381 | 210 | 229 | 192 | 104 | 54 | 46 | 0 | 0 | 0 | 0 | 20 |
| DeltaBlue | 83130 | 47426 | 43797 | 71606 | 71936 | 73160 | 28484 | 13157 | 13045 | 31313 | 258 | 625 | 452 | 403 | 364 | 396 | 396 | 258 | 320 | 236 | 117 | 49 | 40 | 0 | 0 | 0 | 0 | 22 |
| Crypto | 42916 | 48488 | 43339 | 41551 | 42074 | 42069 | 33420 | 20332 | 18072 | 22423 | 3058 | 789 | 545 | 421 | 422 | 369 | 318 | 314 | 180 | 112 | 90 | 59 | 73 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 103080 | 102044 | 98937 | 65793 | 53945 | 66303 | 48643 | 27722 | 22968 | 4180 | 1801 | 996 | 547 | 740 | 561 | 513 | 545 | 434 | 431 | 217 | 263 | 129 | 130 | 0 | 0 | 0 | 0 | 70 |
| EarleyBoyer | 80360 | 60537 | 55892 | 71220 | 67774 | 72419 | 41156 | 38532 | 36956 | 29315 | 600 | 2245 | 958 | 1122 | 971 | 832 | 863 | 487 | 531 | 435 | 290 | 122 | 128 | 0 | 0 | 0 | 0 | 66 |
| RegExp | 9780 | 18983 | 16456 | 10001 | 9780 | 9399 | 9819 | 9264 | 8719 | 934 | 898 | 397 | 188 | 195 | 184 | 172 | 154 | 108 | 196 | 195 | 279 | 88 | 42 | 0 | 0 | 0 | 0 | 0 |
| Splay | 38252 | 34137 | 31261 | 32450 | 33012 | 27894 | 18332 | 23315 | 14294 | 2630 | 4255 | 2232 | 978 | 1360 | 1190 | 839 | 871 | 961 | 562 | 799 | 396 | 325 | 161 | 0 | 0 | 0 | 0 | 54 |
| NavierStokes | 38881 | 34064 | 40068 | 38990 | 38990 | 38990 | 36989 | 22408 | 22112 | 25525 | 3929 | 1096 | 1032 | 739 | 714 | 634 | 713 | 1070 | 505 | 185 | 149 | 116 | 165 | 0 | 0 | 0 | 0 | 48 |
| Score | 44017 | 42875 | 40973 | 39108 | 38265 | 37825 | 27339 | 19002 | 17261 | 10865 | 1726 | 962 | 578 | 577 | 517 | 472 | 464 | 376 | 337 | 247 | 185 | 97 | 84 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 837 | 349 | 308 | 336 | 266 | 480 | 1898 | 364 | 237 | 55 | 98 | 8 | 49 | 15 | 12 | 52 | 57 | 49 | 44 | 12 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 45 | 42 | 58 | 61 | 61 | 67 | 69 | 85 | 83 | 124 | 147 | 250 | 296 | 0 | 130 | 0 | 102 | 471 |
