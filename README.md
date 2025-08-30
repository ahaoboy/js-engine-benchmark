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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47929<br>36.5M<br>1314/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47743<br>57.1M<br>835/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47324<br>98.6M<br>480/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40817<br>65.3M<br>624/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40378<br>106.3M<br>379/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39515<br>123.3M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38854<br>66.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37929<br>40.7M<br>932/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19661<br>19.4M<br>1013/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19152<br>40.1M<br>477/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17044<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16904<br>35.2M<br>479/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12227<br>199.7M<br>61/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2220<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1529<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 861<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 839<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 824<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 749<br>1.4M<br>532/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 742<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 728<br>831.3K<br>896/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 721<br>1.4M<br>518/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 653<br>2M<br>331/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 548<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 473<br>2.1M<br>222/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 403<br>446.6K<br>923/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 370<br>414.5K<br>914/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 370<br>685K<br>553/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 304<br>2.7K<br>115286/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 269<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 187<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/30/2025, 1:45:52 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | njs | primjs | rquickjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs | mujs-one | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.0 | 1.2.21 |  | 2.4.5 | 24.7.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  |  | 0.10.1 |  |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 57.1M | 98.6M | 65.3M | 106.3M | 123.3M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 831.3K | 1.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 1M | 98.6M | 65.3M | 106.3M | 123.3M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 831.3K | 1.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40265 | 37282 | 40876 | 31468 | 32608 | 31765 | 30713 | 31860 | 23483 | 12966 | 13531 | 12645 | 35694 | 12034 | 1144 | 669 | 690 | 711 | 574 | 562 | 629 | 533 | 584 | 490 | 321 | 253 | 256 | 227 | 245 | 132 | 203 | 90 | 102 | 58 | 59 | 279 | 26 |  | 123 |  |
| DeltaBlue | 57820 | 106106 | 53159 | 75996 | 73470 | 73186 | 72578 | 76849 | 24981 | 13323 | 13025 | 12847 | 38492 | 337 | 1077 | 672 | 663 | 673 | 583 | 547 | 615 | 560 | 586 | 465 | 388 | 263 | 349 | 319 | 356 | 173 | 252 | 163 | 113 | 54 | 55 | 286 | 30 |  | 181 |  |
| Crypto | 51786 | 41386 | 48763 | 41644 | 41835 | 41153 | 41915 | 41462 | 31885 | 20233 | 17614 | 17468 | 28799 | 8545 | 1366 | 586 | 772 | 586 | 535 | 882 | 510 | 550 | 380 | 780 | 413 | 786 | 187 | 183 | 189 | 156 | 120 | 324 | 91 | 80 | 61 | 307 | 31 |  | 134 |  |
| RayTrace | 115290 | 111886 | 119508 | 73333 | 68967 | 65637 | 68449 | 55869 | 35001 | 27916 | 26862 | 28046 | 2519 | 1230 | 1562 | 1140 | 914 | 1046 | 915 | 681 | 882 | 871 | 735 | 556 | 449 | 562 | 533 | 483 | 528 | 471 | 271 | 499 | 253 | 163 | 136 | 344 | 88 |  | 427 |  |
| EarleyBoyer | 68988 | 86622 | 67362 | 70495 | 74673 | 71462 | 73788 | 69759 | 7052 | 40168 | 35781 | 36625 | 35891 | 738 | 3324 | 1872 | 1461 | 1694 | 1327 | 1674 | 1307 | 1206 | 1232 | 734 | 863 | 537 | 549 | 502 | 533 | 624 | 499 | 323 | 282 | 186 | 136 |  | 77 |  | 506 |  |
| RegExp | 20295 | 10404 | 20527 | 10001 | 9851 | 9971 | 10021 | 8901 | 7592 | 8758 | 8910 | 8784 | 1388 | 552 | 551 | 250 | 228 | 225 | 215 | 116 | 229 | 220 | 180 | 62 | 179 | 134 | 238 | 200 | 214 | 448 | 208 | 96 | 247 | 48 | 93 |  |  |  |  |  |
| Splay | 35580 | 42098 | 35995 | 38521 | 35848 | 34202 | 28685 | 31676 | 18600 | 23673 | 12165 | 11833 | 2918 | 2581 | 3395 | 2259 | 1789 | 1917 | 2147 | 2092 | 1696 | 2009 | 1672 | 1234 | 1259 | 1257 | 1286 | 1168 | 728 | 861 | 804 | 370 | 493 | 215 | 333 |  | 83 |  | 709 |  |
| NavierStokes | 40216 | 38842 | 39920 | 38842 | 38765 | 38842 | 38287 | 38397 | 34246 | 22275 | 22024 | 22002 | 34474 | 13185 | 1824 | 953 | 1284 | 993 | 984 | 1222 | 894 | 957 | 930 | 1450 | 676 | 936 | 469 | 472 | 484 | 182 | 200 | 824 | 163 | 175 | 119 |  | 51 |  | 271 |  |
| Score | 47929 | 47743 | 47324 | 40817 | 40378 | 39515 | 38854 | 37929 | 19661 | 19152 | 17044 | 16904 | 12227 | 2220 | 1529 | 861 | 839 | 824 | 749 | 742 | 728 | 721 | 653 | 548 | 484 | 473 | 403 | 370 | 370 | 304 | 269 | 263 | 187 | 105 | 104 |  |  |  |  |  |
| Score/MB | 1314 | 835 | 480 | 624 | 379 | 320 | 585 | 932 | 1013 | 477 | 334 | 479 | 61 | 1 | 42 | 70 | 196 | 159 | 532 | 87 | 896 | 518 | 331 | 11 |  | 222 | 923 | 914 | 553 | 115286 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 34 | 47 | 48 | 50 | 54 | 61 | 53 | 53 | 58 | 89 | 63 | 70 | 80 | 85 | 81 | 94 | 116 | 132 | 149 | 238 | 236 | 31 | 407 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | deno | node | bare | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | llrt | rquickjs | quickjs | duktape | njs | ladybird | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.143 | 0.10.1 | 1.2.21 | 2.4.5 | 24.7.0 |  | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.8.0 | 0.6.2.beta |  | 2025.04.26 | 2.99.99 | 0.9.2 |  |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.2M | 56.8M | 56.8M | 85.5M | 111.7M | 45.6M | 132.4M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 4.1M | 10.5M | 1.2M | 975.9K | 562.1K | 2.4M | 41.4M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.2M | 56.8M | 56.8M | 85.5M | 111.7M | 45.6M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 2.1M | 10.5M | 1.2M | 975.9K | 562.1K | 1.8M | 41.4M | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 52671 | 44996 | 45084 | 48484 | 42712 | 44078 | 42087 | 14393 | 12589 | 13651 | 35313 | 19787 | 1266 | 1106 | 1214 | 1330 | 934 | 974 | 1064 | 537 | 502 | 744 | 652 | 372 | 334 | 106 | 123 | 165 | 100 | 37 | 173 | 42 |  | 167 |
| DeltaBlue | 77808 | 130391 | 104295 | 53456 | 94509 | 81034 | 103190 | 16291 | 14486 | 15009 | 19578 | 2820 | 1117 | 1144 | 1269 | 1089 | 1023 | 1024 | 1061 | 596 | 600 | 617 | 685 | 564 | 391 | 204 | 142 | 177 | 90 | 40 | 216 | 48 |  | 206 |
| Crypto | 71627 | 57955 | 59658 | 67752 | 54797 | 54013 | 55098 | 24812 | 18161 | 20641 | 39410 | 10359 | 1372 | 1807 | 1150 | 1140 | 913 | 1027 | 1347 | 1303 | 1101 | 1436 | 602 | 296 | 189 | 425 | 115 | 166 | 106 | 36 | 255 | 42 |  | 133 |
| RayTrace | 173601 | 154362 | 94645 | 136380 | 77181 | 85025 | 94719 | 46989 | 48864 | 39180 | 1947 | 1024 | 2303 | 2096 | 1991 | 1521 | 1892 | 1389 | 1127 | 1062 | 791 | 1034 | 751 | 918 | 416 | 699 | 562 | 380 | 172 | 39 | 329 | 138 |  | 589 |
| EarleyBoyer | 105951 | 119425 | 106452 | 67682 | 84068 | 91305 | 71712 | 49365 | 45568 | 37020 | 35121 | 1077 | 4696 | 3601 | 2684 | 2548 | 2760 | 2188 | 1299 | 1171 | 1889 | 1200 | 1473 | 964 | 777 | 418 | 593 | 431 | 185 | 70 |  | 110 |  | 642 |
| RegExp | 33524 | 14211 | 14211 | 21955 | 12859 | 12456 | 10696 | 11274 | 11910 | 9537 | 1743 | 761 | 640 | 327 | 243 | 265 | 284 | 262 | 278 | 247 | 172 | 96 | 244 | 322 | 290 | 337 | 487 | 195 | 130 | 14 |  |  |  |  |
| Splay | 54460 | 65502 | 33297 | 32101 | 42098 | 35220 | 30290 | 20511 | 18534 | 13470 | 2256 | 1311 | 4042 | 2714 | 3278 | 2483 | 3797 | 2917 | 1805 | 2049 | 1767 | 1659 | 1995 | 1273 | 911 | 468 | 820 | 548 | 533 | 139 |  | 96 |  | 802 |
| NavierStokes | 40836 | 38990 | 37285 | 30331 | 35474 | 37137 | 32550 | 19234 | 19767 | 17607 | 19678 | 426 | 1488 | 3788 | 1945 | 2045 | 1647 | 1706 | 2224 | 1480 | 1733 | 1898 | 905 | 661 | 286 | 1121 | 155 | 260 | 204 | 76 |  | 75 |  | 285 |
| Score | 66927 | 62320 | 51549 | 49256 | 47867 | 47144 | 45108 | 22248 | 20580 | 18526 | 10468 | 2014 | 1732 | 1661 | 1399 | 1309 | 1298 | 1191 | 1121 | 888 | 846 | 840 | 776 | 591 | 396 | 384 | 284 | 262 | 160 | 46 |  |  |  |  |
| Score/MB | 408011895 | 1513 | 907 | 867 | 559 | 421 | 990 | 168 | 627 | 399 | 53 |  | 110 | 943 | 387 | 317 | 123 | 995 | 1176 | 1617 | 352 | 20 |  | 1410 | 31 | 243 | 107701 | 3 | 12 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 46 | 32 | 34 | 43 | 39 | 39 | 41 | 41 | 46 | 54 | 65 | 49 | 57 | 84 | 90 | 109 | 105 | 162 | 596 | 34 | 303 |  | 81 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs-pgo | rquickjs | quickjs-emscripten | quickjs-ng | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.143 |  |  | 1.2.21 | 24.7.0 | 2.4.5 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  |  | 0.8.0 | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.2M | 122.1M | 57M | 132.8M | 116.5M | 142.9M | 77.6M | 14.4M | 51.4M | 72.8M | 196.1M | 17.4M | 86.6M | 37.3M | 11.8M | 42.2M | 9M | 8M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.3M | 338K | 26.1M | 113M | 85.4M | 110.6M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1M | 1.2M | 0 | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 23.9M | 121.8M | 30.8M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.4M | 83.5M | 31.6M | 6.9M | 29.1M | 7.9M | 6.7M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 36608 | 33844 | 32898 | 37102 | 32923 | 32739 | 32563 | 24408 | 13757 | 13807 | 36082 | 8953 | 691 | 451 | 513 | 392 | 445 | 444 | 388 | 438 | 215 | 240 | 229 | 189 | 106 | 55 | 47 |  | 20 |  |  |
| DeltaBlue | 111865 | 46342 | 77332 | 40378 | 73722 | 75216 | 72148 | 28986 | 13310 | 13045 | 30401 | 468 | 618 | 407 | 464 | 370 | 469 | 463 | 396 | 403 | 260 | 345 | 317 | 230 | 109 | 51 | 39 |  | 24 |  |  |
| Crypto | 41520 | 49375 | 42073 | 43959 | 38131 | 39267 | 41882 | 33260 | 20669 | 17765 | 23350 | 2922 | 791 | 430 | 542 | 420 | 325 | 328 | 419 | 368 | 314 | 182 | 186 | 115 | 91 | 59 | 73 |  | 30 |  |  |
| RayTrace | 112774 | 102858 | 65415 | 101378 | 65415 | 57941 | 60679 | 45731 | 28239 | 22052 | 2883 | 1609 | 1010 | 741 | 516 | 600 | 592 | 585 | 464 | 585 | 438 | 449 | 438 | 228 | 264 | 130 | 130 |  | 79 |  |  |
| EarleyBoyer | 83924 | 63473 | 69968 | 57682 | 70840 | 73770 | 72386 | 42123 | 41217 | 36785 | 23657 | 1854 | 2229 | 1135 | 984 | 981 | 921 | 919 | 888 | 945 | 492 | 544 | 526 | 454 | 296 | 124 | 132 |  | 68 |  |  |
| RegExp | 9930 | 18256 | 10062 | 17183 | 9941 | 9589 | 9637 | 9680 | 9001 | 8810 | 932 | 1073 | 404 | 197 | 188 | 192 | 154 | 153 | 180 | 184 | 109 | 198 | 246 | 196 | 273 | 89 | 41 |  |  |  |  |
| Splay | 43581 | 34617 | 38855 | 32629 | 33459 | 33762 | 26835 | 20829 | 23616 | 14016 | 3024 | 4777 | 2198 | 1425 | 1017 | 1239 | 1213 | 1189 | 1266 | 970 | 684 | 692 | 635 | 856 | 509 | 326 | 168 |  | 78 |  |  |
| NavierStokes | 39099 | 33835 | 38912 | 33882 | 38951 | 38951 | 30274 | 36803 | 22386 | 22024 | 24141 | 3694 | 1076 | 740 | 1036 | 713 | 759 | 768 | 747 | 686 | 1077 | 481 | 476 | 192 | 149 | 116 | 166 |  | 48 |  |  |
| Score | 47795 | 42583 | 40648 | 40554 | 39183 | 38871 | 36827 | 27596 | 19506 | 17025 | 10219 | 2264 | 961 | 585 | 581 | 529 | 519 | 516 | 509 | 508 | 363 | 353 | 351 | 253 | 190 | 98 | 85 |  |  |  |  |
| Score/MB | 898 | 348 | 713 | 305 | 336 | 271 | 474 | 1915 | 379 | 233 | 52 | 130 | 11 | 15 | 49 | 12 | 57 | 64 |  | 56 | 47 | 46 | 46 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 36 | 42 | 60 | 59 | 61 | 67 | 67 | 62 | 64 | 84 | 82 | 80 | 122 | 149 | 248 | 292 | 130 | 444 |  |  |
