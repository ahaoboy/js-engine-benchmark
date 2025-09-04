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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47804<br>57.1M<br>836/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47527<br>98.6M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47357<br>36.5M<br>1297/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40729<br>106.3M<br>383/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40170<br>123.3M<br>325/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38971<br>66.3M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38832<br>40.7M<br>955/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20266<br>19.4M<br>1044/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19266<br>39.9M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16943<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16824<br>35.2M<br>477/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12133<br>199.7M<br>60/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2477<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 862<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 826<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 762<br>1.4M<br>547/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 749<br>1.4M<br>532/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 730<br>831.3K<br>899/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 552<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 477<br>2.1M<br>224/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 381<br>446.6K<br>873/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 358<br>414.5K<br>884/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 307<br>2.7K<br>116424/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/4/2025, 1:44:39 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | rquickjs-pgo | njs | primjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.0 | 1.2.21 |  | 2.4.5 | 24.7.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 98.6M | 36.5M | 106.3M | 123.3M | 66.3M | 40.7M | 19.4M | 39.9M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.4M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 98.6M | 36.5M | 106.3M | 123.3M | 66.3M | 40.7M | 571K | 39.9M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 2M | 46.4M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38257 | 39376 | 40844 | 32252 | 32202 | 32199 | 32510 | 23702 | 13415 | 13404 | 12229 | 35207 | 11830 | 1119 | 681 | 688 | 711 | 580 | 577 | 569 | 585 | 584 | 446 | 333 | 287 | 244 | 265 | 229 | 140 | 195 | 90 | 99 | 60 | 59 | 279 | 26 |  | 116 |  |
| DeltaBlue | 109227 | 58045 | 52610 | 75487 | 75652 | 73047 | 77100 | 25854 | 13501 | 13058 | 12906 | 26890 | 263 | 1058 | 665 | 662 | 666 | 584 | 579 | 538 | 597 | 583 | 428 | 385 | 320 | 357 | 360 | 321 | 172 | 248 | 164 | 105 | 54 | 54 | 283 | 32 |  | 181 |  |
| Crypto | 41319 | 49410 | 51950 | 41674 | 41397 | 41807 | 40936 | 32088 | 20141 | 17385 | 17253 | 10026 | 8617 | 1360 | 594 | 739 | 588 | 560 | 517 | 875 | 509 | 378 | 868 | 406 | 780 | 189 | 187 | 183 | 158 | 123 | 326 | 99 | 80 | 61 | 303 | 31 |  | 137 |  |
| RayTrace | 109222 | 107742 | 118472 | 67931 | 67043 | 67857 | 61062 | 35519 | 27500 | 26734 | 27898 | 13824 | 1210 | 1560 | 1139 | 906 | 1042 | 901 | 900 | 676 | 879 | 707 | 559 | 452 | 576 | 524 | 533 | 483 | 442 | 270 | 497 | 249 | 163 | 137 | 352 | 92 |  | 413 |  |
| EarleyBoyer | 86739 | 67214 | 68000 | 74205 | 70735 | 74032 | 70552 | 7109 | 41408 | 36690 | 36313 | 29091 | 889 | 3363 | 1848 | 1462 | 1741 | 1370 | 1377 | 1681 | 1370 | 1224 | 762 | 856 | 577 | 548 | 549 | 507 | 629 | 500 | 324 | 282 | 190 | 135 |  | 79 |  | 392 |  |
| RegExp | 10484 | 21499 | 19690 | 10092 | 10032 | 10032 | 8928 | 7743 | 8504 | 8848 | 8758 | 1388 | 789 | 552 | 249 | 222 | 223 | 227 | 216 | 116 | 233 | 184 | 65 | 179 | 132 | 219 | 235 | 198 | 466 | 208 | 95 | 248 | 49 | 93 |  |  |  |  |  |
| Splay | 40982 | 37090 | 35465 | 37844 | 36378 | 27666 | 34120 | 20088 | 24048 | 11673 | 12061 | 2723 | 4694 | 3569 | 2274 | 1791 | 1950 | 2212 | 2212 | 2094 | 1769 | 1646 | 1235 | 1255 | 907 | 1220 | 773 | 869 | 884 | 911 | 389 | 463 | 221 | 342 |  | 86 |  | 753 |  |
| NavierStokes | 38803 | 39920 | 40284 | 38765 | 38842 | 38803 | 38397 | 36841 | 22341 | 22024 | 22024 | 32550 | 13290 | 1844 | 946 | 1264 | 985 | 966 | 974 | 1217 | 918 | 934 | 1530 | 670 | 944 | 487 | 467 | 473 | 179 | 200 | 844 | 160 | 175 | 118 |  | 51 |  | 283 |  |
| Score | 47804 | 47527 | 47357 | 40729 | 40170 | 38971 | 38832 | 20266 | 19266 | 16943 | 16824 | 12133 | 2477 | 1534 | 862 | 830 | 826 | 762 | 749 | 740 | 730 | 649 | 552 | 484 | 477 | 397 | 381 | 358 | 307 | 273 | 265 | 185 | 106 | 104 |  |  |  |  |  |
| Score/MB | 836 | 482 | 1297 | 383 | 325 | 587 | 955 | 1044 | 483 | 332 | 477 | 60 | 2 | 42 | 70 | 194 | 160 | 547 | 532 | 87 | 899 | 329 | 11 |  | 224 | 593 | 873 | 884 | 116424 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 36 | 34 | 47 | 48 | 50 | 52 | 53 | 61 | 52 | 59 | 85 | 64 | 68 | 81 | 80 | 85 | 94 | 114 | 131 | 144 | 237 | 237 | 31 | 404 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | deno | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | llrt | txiki.js | quickjs-ng | quickjs | jjs | rquickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.17 | 0.10.1 | 1.2.21 | 2.4.5 | 24.7.0 | 143.0 |  |  | 24.1.2 | 0.12.0 |  | 0.6.2.beta | 24.12.0 | 0.8.0 | 2025.04.26 |  |  | 0.9.2 | 2.99.99 |  |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.2M | 56.8M | 56.8M | 85.5M | 111.7M | 131.9M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 10.5M | 3.6M | 4.1M | 975.9K | 0 | 1.2M | 2.4M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.2M | 56.8M | 56.8M | 85.5M | 111.7M | 66M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 10.5M | 3.6M | 2.1M | 975.9K | 0 | 1.2M | 1.8M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40456 | 43188 | 44706 | 46556 | 37883 | 32630 | 13987 | 12306 | 14001 | 23518 | 1052 | 1018 | 1025 | 1060 | 1167 | 797 | 6474 | 716 | 575 | 504 | 675 | 605 | 349 | 112 | 298 | 169 | 143 | 94 | 35 | 208 | 31 |  | 204 |
| DeltaBlue | 66831 | 126160 | 102926 | 45840 | 82714 | 80525 | 17078 | 15882 | 14586 | 6546 | 935 | 1192 | 1122 | 1225 | 1011 | 899 | 236 | 719 | 638 | 589 | 555 | 659 | 489 | 175 | 352 | 162 | 148 | 84 | 30 | 236 | 39 |  | 210 |
| Crypto | 75741 | 61449 | 48144 | 57929 | 43300 | 37882 | 25123 | 20604 | 17810 | 33847 | 1069 | 1625 | 883 | 1015 | 993 | 1167 | 3003 | 657 | 1039 | 1208 | 1296 | 545 | 221 | 405 | 168 | 131 | 112 | 85 | 39 | 257 | 43 |  | 133 |
| RayTrace | 176635 | 150588 | 71187 | 116400 | 58533 | 67783 | 45731 | 47137 | 34597 | 2886 | 1781 | 1358 | 1623 | 1670 | 1353 | 1186 | 747 | 1101 | 848 | 1033 | 937 | 787 | 905 | 636 | 364 | 711 | 304 | 212 | 37 | 286 | 152 |  | 636 |
| EarleyBoyer | 103863 | 107069 | 80044 | 78055 | 66629 | 71417 | 46808 | 41072 | 38200 | 39647 | 4144 | 1757 | 2565 | 1942 | 1986 | 1890 | 828 | 2079 | 2053 | 975 | 1232 | 1308 | 907 | 392 | 609 | 524 | 300 | 189 | 80 |  | 117 |  | 619 |
| RegExp | 28332 | 12832 | 11953 | 20820 | 9920 | 8633 | 9809 | 9047 | 10284 | 1328 | 569 | 284 | 265 | 279 | 236 | 235 | 519 | 236 | 180 | 217 | 85 | 248 | 296 | 284 | 234 | 514 | 182 | 121 | 13 |  |  |  |  |
| Splay | 36989 | 44739 | 35587 | 16613 | 29549 | 24822 | 24081 | 12939 | 13159 | 2616 | 3708 | 3688 | 3663 | 3151 | 1659 | 1958 | 1303 | 3048 | 1834 | 1909 | 1522 | 1794 | 879 | 480 | 730 | 767 | 520 | 487 | 137 |  | 122 |  | 619 |
| NavierStokes | 30836 | 34770 | 34326 | 26606 | 35178 | 30509 | 19659 | 18347 | 19767 | 22854 | 1340 | 3141 | 1545 | 1627 | 1914 | 2160 | 725 | 1603 | 1675 | 1435 | 1667 | 953 | 745 | 847 | 248 | 187 | 162 | 188 | 72 |  | 69 |  | 281 |
| Score | 57614 | 56762 | 45519 | 42344 | 39094 | 36500 | 22231 | 18966 | 18350 | 9107 | 1471 | 1409 | 1260 | 1254 | 1114 | 1081 | 1042 | 986 | 882 | 825 | 769 | 745 | 528 | 351 | 337 | 316 | 207 | 153 | 45 |  |  |  |  |
| Score/MB | 351236381 | 1376 | 801 | 745 | 457 | 326 | 168 | 577 | 395 | 46 | 93 | 800 | 119 | 347 | 270 | 1134 |  | 824 | 368 | 1502 | 18 |  | 1260 | 222 | 26 | 119837 | 2 | 12 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 33 | 41 | 40 | 40 | 42 | 42 | 54 | 44 | 53 | 48 | 68 | 51 | 62 | 96 | 95 | 96 | 140 | 166 | 622 | 35 | 296 |  | 84 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.17 |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.4M | 122.2M | 132.8M | 142.9M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 86.6M | 11.8M | 38.4M | 9.2M | 42.2M | 9M | 9M | 0 | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.3M | 0 | 0 |
| Exe size | 29.4M | 338K | 113M | 110.6M | 85.4M | 47.4M | 342.9K | 33.8M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.4M | 13.1M | 1M | 1.7M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.4M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.5M | 6.9M | 32.7M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38200 | 36746 | 36898 | 33519 | 33043 | 30367 | 24722 | 10700 | 13948 | 35997 | 6178 | 694 | 513 | 451 | 402 | 392 | 448 | 431 | 349 | 240 | 212 | 229 | 190 | 106 | 55 | 46 |  | 21 |  |  |
| DeltaBlue | 107667 | 48405 | 44987 | 76459 | 68829 | 76254 | 28239 | 13435 | 12959 | 26342 | 462 | 615 | 459 | 410 | 396 | 371 | 462 | 403 | 396 | 350 | 258 | 304 | 232 | 118 | 50 | 42 |  | 25 |  |  |
| Crypto | 41601 | 49468 | 49015 | 40055 | 41969 | 42016 | 33661 | 20764 | 17779 | 23133 | 2257 | 789 | 546 | 427 | 519 | 429 | 327 | 373 | 420 | 181 | 317 | 189 | 115 | 90 | 58 | 73 |  | 29 |  |  |
| RayTrace | 111516 | 106040 | 91167 | 68375 | 66377 | 66459 | 48603 | 28285 | 26909 | 3476 | 2381 | 1002 | 546 | 742 | 596 | 561 | 578 | 580 | 455 | 485 | 436 | 471 | 232 | 266 | 127 | 132 |  | 81 |  |  |
| EarleyBoyer | 83688 | 64266 | 53632 | 72889 | 72291 | 74567 | 42003 | 41696 | 36696 | 31616 | 2107 | 2237 | 1007 | 1152 | 1011 | 1012 | 935 | 981 | 872 | 583 | 513 | 574 | 463 | 298 | 124 | 140 |  | 67 |  |  |
| RegExp | 10062 | 18748 | 17330 | 9770 | 9981 | 9790 | 9971 | 9246 | 8737 | 1031 | 942 | 404 | 187 | 195 | 157 | 182 | 154 | 185 | 180 | 199 | 109 | 252 | 197 | 279 | 90 | 42 |  |  |  |  |
| Splay | 42987 | 35872 | 32971 | 33428 | 33680 | 28424 | 18857 | 24488 | 14391 | 2532 | 5064 | 2407 | 1029 | 1394 | 1262 | 1319 | 1237 | 1002 | 1286 | 1190 | 993 | 712 | 842 | 521 | 325 | 185 |  | 82 |  |  |
| NavierStokes | 38990 | 33984 | 33950 | 38990 | 38990 | 39029 | 36730 | 22364 | 22090 | 21815 | 3933 | 1091 | 1021 | 743 | 752 | 716 | 753 | 675 | 752 | 480 | 1070 | 470 | 193 | 150 | 115 | 163 |  | 48 |  |  |
| Score | 47728 | 43864 | 40825 | 39970 | 39564 | 38894 | 27544 | 19115 | 17504 | 10405 | 2228 | 973 | 586 | 585 | 542 | 529 | 519 | 510 | 501 | 386 | 381 | 363 | 254 | 193 | 98 | 87 |  |  |  |  |
| Score/MB | 877 | 359 | 307 | 279 | 339 | 500 | 1911 | 373 | 240 | 53 | 127 | 11 | 49 | 15 | 58 | 12 | 57 | 56 |  | 51 | 50 | 47 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 38 | 42 | 58 | 60 | 62 | 61 | 67 | 63 | 63 | 82 | 84 | 79 | 121 | 147 | 250 | 284 | 129 | 446 |  |  |
