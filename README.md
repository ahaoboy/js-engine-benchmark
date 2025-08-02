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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47828<br>97.2M<br>491/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45824<br>37.4M<br>1223/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45135<br>53.3M<br>847/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 41063<br>65.2M<br>629/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40526<br>106.9M<br>379/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39995<br>123.1M<br>324/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38975<br>67.1M<br>580/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38688<br>40.7M<br>951/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19954<br>19.4M<br>1028/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18940<br>39.9M<br>474/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17056<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17025<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10185<br>199.7M<br>51/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2622<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1502<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 866<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 824<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 814<br>4.3M<br>190/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 749<br>857K<br>894/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 709<br>1.3M<br>526/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 626<br>2M<br>317/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 527<br>45.8M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 482<br>2.1M<br>226/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 361<br>414.5K<br>891/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 359<br>685K<br>536/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 300<br>2.7K<br>113769/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
8/2/2025, 7:55:53 AM

### ubuntu
| Engine | bun | jsc | v8 | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs | mujs(one) | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 0 | 2.4.3 | 24.5.0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 1.3.5 | 0 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 97.2M | 37.4M | 53.3M | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 19.4M | 39.9M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 97.2M | 37.4M | 937.8K | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 571K | 39.9M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41963 | 41600 | 34794 | 32354 | 33124 | 32633 | 31818 | 32326 | 23486 | 13104 | 14043 | 13214 | 35934 | 9461 | 1127 | 686 | 703 | 666 | 614 | 595 | 585 | 477 | 258 | 225 | 240 | 99 | 206 | 90 | 105 | 60 | 60 | 544 | 119 | 270 | 0 | 24 |
| DeltaBlue | 57609 | 49370 | 94522 | 78733 | 75130 | 73728 | 74965 | 75586 | 23964 | 12900 | 12906 | 12893 | 38633 | 252 | 1049 | 671 | 679 | 652 | 607 | 550 | 578 | 459 | 307 | 320 | 352 | 163 | 244 | 165 | 112 | 54 | 56 | 517 | 166 | 277 | 0 | 28 |
| Crypto | 49344 | 51920 | 42566 | 41601 | 41687 | 41521 | 41612 | 41158 | 32005 | 20112 | 17475 | 17604 | 25003 | 8995 | 1368 | 579 | 580 | 731 | 569 | 558 | 351 | 884 | 793 | 184 | 191 | 155 | 122 | 330 | 99 | 80 | 61 | 829 | 132 | 297 | 0 | 29 |
| RayTrace | 118250 | 114994 | 105004 | 72593 | 67117 | 66599 | 68819 | 59717 | 36815 | 28268 | 26808 | 27620 | 4708 | 1434 | 1540 | 1183 | 1066 | 906 | 938 | 885 | 685 | 559 | 557 | 463 | 465 | 495 | 276 | 496 | 259 | 165 | 139 | 580 | 422 | 351 | 0 | 85 |
| EarleyBoyer | 66520 | 65190 | 80604 | 68345 | 72962 | 72113 | 72704 | 69952 | 6945 | 38155 | 36349 | 36909 | 23968 | 1471 | 3362 | 1855 | 1732 | 1365 | 1278 | 1305 | 1202 | 728 | 536 | 452 | 458 | 596 | 506 | 325 | 290 | 186 | 138 | 0 | 508 | 0 | 0 | 79 |
| RegExp | 20506 | 19951 | 10243 | 10313 | 10062 | 9880 | 10001 | 8947 | 7847 | 8784 | 8874 | 8758 | 820 | 933 | 496 | 250 | 226 | 220 | 228 | 227 | 178 | 60 | 131 | 193 | 209 | 465 | 209 | 96 | 245 | 48 | 93 | 111 | 0 | 0 | 0 | 0 |
| Splay | 35815 | 34911 | 36818 | 38382 | 36720 | 35555 | 28277 | 34715 | 18933 | 23302 | 11851 | 11914 | 2007 | 5577 | 3346 | 2263 | 1879 | 1701 | 1729 | 1408 | 1584 | 849 | 1231 | 1092 | 804 | 1016 | 996 | 392 | 472 | 209 | 324 | 1830 | 839 | 0 | 0 | 59 |
| NavierStokes | 39731 | 34918 | 38545 | 38842 | 38765 | 38842 | 37915 | 38469 | 36730 | 22067 | 22067 | 22127 | 17956 | 9479 | 1862 | 956 | 978 | 1307 | 985 | 950 | 851 | 1465 | 952 | 490 | 483 | 188 | 201 | 843 | 164 | 177 | 120 | 1218 | 271 | 0 | 0 | 51 |
| Score | 47828 | 45824 | 45135 | 41063 | 40526 | 39995 | 38975 | 38688 | 19954 | 18940 | 17056 | 17025 | 10185 | 2622 | 1502 | 866 | 824 | 814 | 749 | 709 | 626 | 527 | 482 | 361 | 359 | 300 | 278 | 266 | 189 | 105 | 105 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 491 | 1223 | 847 | 629 | 379 | 324 | 580 | 951 | 1028 | 474 | 334 | 483 | 51 | 2 | 41 | 70 | 159 | 190 | 894 | 526 | 317 | 11 | 226 | 891 | 536 | 113769 | 21 | 127 | 2 | 3 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 36 | 34 | 47 | 50 | 49 | 52 | 52 | 60 | 90 | 70 | 87 | 82 | 95 | 113 | 130 | 144 | 239 | 233 | 54 | 87 | 31 | 0 | 424 |
### macos-arm64
| Engine | bun | jsc | deno | bare | dune | node | v8 | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 2.4.3 | 0 | 0.10.0 | 24.5.0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.4M | 94.2M | 85.5M | 45.5M | 57.4M | 111.5M | 861K | 131.5M | 32.8M | 46.3M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.4M | 914.7K | 85.5M | 45.5M | 57.4M | 111.5M | 861K | 65.7M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.7M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 51184 | 52656 | 48505 | 45165 | 47767 | 44975 | 24129 | 12762 | 15635 | 16080 | 36594 | 7364 | 1373 | 1341 | 1086 | 1304 | 1147 | 1091 | 815 | 854 | 540 | 407 | 120 | 330 | 197 | 189 | 113 | 755 | 191 | 214 | 0 | 37 |
| DeltaBlue | 73867 | 74072 | 108301 | 111270 | 110483 | 107270 | 73140 | 16364 | 17739 | 17336 | 48405 | 928 | 1254 | 1336 | 1160 | 1223 | 1142 | 1120 | 925 | 789 | 628 | 606 | 224 | 393 | 293 | 197 | 101 | 838 | 240 | 241 | 0 | 46 |
| Crypto | 71560 | 74202 | 60206 | 61460 | 59931 | 59857 | 30421 | 22775 | 22950 | 22877 | 45998 | 11888 | 1437 | 1228 | 1022 | 1223 | 1390 | 1004 | 1102 | 1619 | 1382 | 312 | 557 | 196 | 117 | 172 | 111 | 1222 | 101 | 271 | 0 | 47 |
| RayTrace | 183739 | 189363 | 96051 | 99233 | 94719 | 95385 | 69485 | 44799 | 50343 | 39885 | 5024 | 1461 | 2577 | 2153 | 2071 | 1586 | 1296 | 1476 | 1342 | 1101 | 1132 | 999 | 754 | 472 | 692 | 425 | 255 | 591 | 539 | 328 | 0 | 152 |
| EarleyBoyer | 105002 | 102382 | 103972 | 98831 | 106995 | 103052 | 64054 | 47673 | 49341 | 49015 | 48720 | 1467 | 5271 | 3303 | 3122 | 2640 | 2352 | 2362 | 2179 | 1430 | 1197 | 1123 | 448 | 847 | 740 | 447 | 250 | 0 | 630 | 0 | 0 | 125 |
| RegExp | 32672 | 28730 | 15289 | 14775 | 14895 | 15122 | 8495 | 13157 | 12794 | 12832 | 1951 | 1358 | 737 | 313 | 325 | 280 | 288 | 281 | 217 | 105 | 261 | 327 | 333 | 296 | 568 | 223 | 146 | 196 | 0 | 0 | 0 | 0 |
| Splay | 56636 | 45236 | 52749 | 56123 | 47053 | 47754 | 27245 | 31539 | 19136 | 19395 | 2767 | 3481 | 4800 | 3554 | 4258 | 2526 | 2527 | 2290 | 1490 | 2086 | 2306 | 1195 | 578 | 1372 | 1194 | 610 | 507 | 597 | 844 | 0 | 0 | 96 |
| NavierStokes | 33505 | 31609 | 40621 | 39583 | 40688 | 39988 | 27944 | 21348 | 20673 | 21454 | 33323 | 24783 | 1626 | 2167 | 1754 | 2178 | 2396 | 1733 | 2679 | 1927 | 1577 | 790 | 1557 | 319 | 232 | 265 | 224 | 1898 | 283 | 0 | 0 | 86 |
| Score | 65126 | 62421 | 56475 | 56194 | 55606 | 54854 | 33391 | 23403 | 23062 | 22538 | 15644 | 3457 | 1931 | 1574 | 1456 | 1372 | 1328 | 1216 | 1097 | 961 | 939 | 636 | 444 | 436 | 391 | 285 | 184 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1155 | 662 | 660 | 1235 | 968 | 492 | 39712 | 177 | 702 | 486 | 80 | 0 | 122 | 436 | 138 | 332 | 1393 | 1030 | 725 | 23 | 1710 | 1517 | 275 | 34 | 148279 | 3 | 14 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 32 | 29 | 37 | 37 | 38 | 36 | 39 | 42 | 61 | 43 | 54 | 80 | 77 | 93 | 101 | 137 | 42 | 88 | 33 | 0 | 272 |
### macos-amd64
| Engine | v8 | bun | dune | bare | deno | jsc | node | ChakraCore | spiderfire | mozjs | spidermonkey | graaljs | jjs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | duktape | primjs | xst | mujs | ringo | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.19 | 0.10.0 | 0 | 2.4.3 | 0 | 24.5.0 | 1.13.0.0.beta | 0 | 0 | 142.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 2025.04.26 | 0.8.0 | 0 | 2.99.99 | 0 | 16.9.1 | 1.3.5 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 861K | 61.9M | 60.4M | 47.1M | 96.6M | 89.6M | 113.7M | 20M | 48.2M | 33.8M | 65.7M | 194.4M | 0 | 7.9M | 3.7M | 12.4M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 1.6M | 441.8K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 861K | 61.9M | 60.4M | 47.1M | 96.6M | 1016.1K | 113.7M | 571K | 48.2M | 33.8M | 65.7M | 148.8K | 0 | 7.9M | 3.7M | 12.4M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 1.6M | 441.8K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 88.6M | 0 | 19.5M | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 21541 | 27963 | 31320 | 22374 | 28849 | 26639 | 21690 | 24535 | 10001 | 9750 | 8137 | 36647 | 13097 | 505 | 473 | 359 | 401 | 389 | 402 | 180 | 220 | 93 | 144 | 63 | 139 | 98 | 49 | 26 | 338 | 57 | 108 | 0 | 18 |
| DeltaBlue | 73986 | 46659 | 55625 | 60624 | 50593 | 29958 | 49112 | 21852 | 11372 | 11055 | 10797 | 43592 | 282 | 574 | 506 | 456 | 458 | 401 | 447 | 181 | 278 | 144 | 198 | 90 | 158 | 103 | 46 | 22 | 388 | 107 | 122 | 0 | 19 |
| Crypto | 40659 | 42176 | 34332 | 34183 | 31417 | 35795 | 30602 | 24561 | 14882 | 13204 | 10735 | 22210 | 6335 | 548 | 260 | 242 | 319 | 278 | 259 | 276 | 190 | 185 | 111 | 73 | 68 | 82 | 53 | 38 | 427 | 78 | 133 | 0 | 23 |
| RayTrace | 107076 | 101452 | 72815 | 72889 | 62529 | 84137 | 60161 | 32305 | 29008 | 31048 | 20826 | 4576 | 932 | 1098 | 799 | 697 | 390 | 493 | 471 | 374 | 302 | 440 | 343 | 316 | 209 | 215 | 109 | 72 | 411 | 279 | 208 | 0 | 64 |
| EarleyBoyer | 66643 | 58797 | 66509 | 61546 | 59510 | 47128 | 49894 | 5809 | 33953 | 33139 | 30107 | 23668 | 988 | 1841 | 880 | 1086 | 706 | 819 | 761 | 414 | 558 | 311 | 416 | 354 | 377 | 246 | 114 | 75 | 0 | 297 | 0 | 0 | 60 |
| RegExp | 7811 | 13597 | 8381 | 8693 | 8529 | 13183 | 7697 | 4000 | 7728 | 7381 | 7237 | 941 | 530 | 292 | 88 | 86 | 80 | 70 | 77 | 85 | 76 | 119 | 105 | 397 | 179 | 101 | 54 | 23 | 82 | 0 | 0 | 0 | 0 |
| Splay | 40159 | 32459 | 32890 | 41210 | 32189 | 21302 | 28286 | 19564 | 13002 | 12941 | 19982 | 2174 | 2654 | 2353 | 1527 | 1793 | 778 | 828 | 691 | 821 | 655 | 293 | 279 | 676 | 464 | 436 | 283 | 136 | 317 | 477 | 0 | 0 | 53 |
| NavierStokes | 35101 | 31990 | 37100 | 36803 | 29295 | 31515 | 34326 | 32287 | 24289 | 24561 | 23921 | 22238 | 7084 | 896 | 602 | 519 | 732 | 593 | 567 | 422 | 334 | 506 | 268 | 106 | 122 | 127 | 103 | 77 | 770 | 171 | 0 | 0 | 37 |
| Score | 38757 | 38304 | 36220 | 35873 | 32899 | 31632 | 30410 | 16766 | 15892 | 15560 | 14583 | 10723 | 1957 | 816 | 495 | 471 | 406 | 396 | 387 | 283 | 275 | 223 | 208 | 184 | 182 | 149 | 83 | 48 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 46093 | 618 | 599 | 761 | 340 | 352 | 267 | 836 | 329 | 460 | 221 | 55 | 0 | 103 | 132 | 37 | 396 | 192 | 313 | 551 | 406 | 138 | 482 | 69778 | 13 | 2 | 6 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 20 | 25 | 45 | 48 | 83 | 89 | 90 | 96 | 94 | 104 | 114 | 141 | 125 | 156 | 165 | 184 | 294 | 508 | 74 | 136 | 55 | 0 | 552 |
### windows
| Engine | v8 | jsc | bun | dune | node | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.19 | 0.10.0 | 24.5.0 | 2.4.3 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 51.5M | 122.8M | 132.1M | 78.7M | 116.3M | 143.4M | 14.4M | 51.3M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.3M | 48.4M | 85.2M | 111.1M | 342.9K | 33.8M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 23.9M | 122.5M | 19.8M | 30.3M | 31.1M | 32.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 35221 | 36312 | 37593 | 33163 | 32898 | 32262 | 24570 | 13284 | 13976 | 41203 | 7878 | 698 | 508 | 455 | 445 | 381 | 430 | 215 | 229 | 189 | 103 | 55 | 49 | 0 | 0 | 0 | 0 | 21 |
| DeltaBlue | 98602 | 49734 | 45231 | 77252 | 71355 | 71831 | 27657 | 13283 | 13105 | 27254 | 211 | 624 | 466 | 410 | 410 | 370 | 403 | 251 | 337 | 241 | 117 | 50 | 42 | 0 | 0 | 0 | 0 | 24 |
| Crypto | 42535 | 49994 | 42805 | 41719 | 38162 | 42103 | 34096 | 20614 | 17801 | 21680 | 1930 | 781 | 546 | 428 | 516 | 413 | 370 | 308 | 183 | 114 | 91 | 59 | 76 | 0 | 0 | 0 | 0 | 28 |
| RayTrace | 101674 | 102784 | 85469 | 68005 | 67641 | 60679 | 51452 | 28268 | 26492 | 5362 | 1552 | 1014 | 553 | 740 | 592 | 605 | 580 | 441 | 453 | 226 | 269 | 127 | 135 | 0 | 0 | 0 | 0 | 75 |
| EarleyBoyer | 80206 | 60427 | 53956 | 73272 | 73432 | 72935 | 42682 | 38143 | 37257 | 30780 | 776 | 2238 | 1015 | 1140 | 988 | 1013 | 998 | 533 | 565 | 462 | 301 | 127 | 143 | 0 | 0 | 0 | 0 | 71 |
| RegExp | 9728 | 18892 | 16654 | 9628 | 10042 | 9728 | 10092 | 8654 | 8828 | 995 | 971 | 404 | 190 | 197 | 173 | 193 | 187 | 110 | 204 | 201 | 275 | 92 | 43 | 0 | 0 | 0 | 0 | 0 |
| Splay | 38945 | 34333 | 33631 | 28946 | 32238 | 31873 | 21367 | 23535 | 15084 | 2416 | 3455 | 2461 | 1068 | 1488 | 983 | 1235 | 1018 | 1011 | 1198 | 937 | 555 | 332 | 189 | 0 | 0 | 0 | 0 | 58 |
| NavierStokes | 39029 | 34030 | 40136 | 39029 | 39029 | 38990 | 37026 | 22445 | 22216 | 28613 | 3480 | 1097 | 1039 | 741 | 750 | 699 | 658 | 1073 | 500 | 195 | 149 | 115 | 167 | 0 | 0 | 0 | 0 | 49 |
| Score | 45325 | 43309 | 40711 | 39387 | 39241 | 38879 | 28255 | 19129 | 17674 | 11355 | 1610 | 979 | 593 | 590 | 538 | 527 | 511 | 383 | 381 | 258 | 194 | 99 | 89 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 880 | 352 | 308 | 500 | 337 | 271 | 1961 | 373 | 242 | 57 | 91 | 8 | 50 | 15 | 57 | 12 | 57 | 50 | 50 | 13 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 45 | 41 | 58 | 60 | 60 | 62 | 64 | 83 | 82 | 120 | 148 | 248 | 277 | 0 | 130 | 0 | 95 | 452 |
