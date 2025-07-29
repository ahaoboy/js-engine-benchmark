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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47949<br>97.2M<br>493/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47306<br>37.4M<br>1263/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45780<br>53.3M<br>859/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40933<br>65.2M<br>627/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40723<br>106.5M<br>382/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39874<br>121.6M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39248<br>40.7M<br>965/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39122<br>67.1M<br>582/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20014<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19061<br>40M<br>476/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17054<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16849<br>35.2M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10452<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2979<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1554<br>36M<br>43/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 873<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 829<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>857K<br>912/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 715<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 561<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 480<br>2.1M<br>225/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 394<br>685K<br>588/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 371<br>414.5K<br>916/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 307<br>2.7K<br>116424/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 267<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
7/29/2025, 3:00:20 PM

### ubuntu
| Engine | bun | jsc | v8 | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 0 | 2.4.2 | 24.4.1 | 0 | 0.10.0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 97.2M | 37.4M | 53.3M | 65.2M | 106.5M | 121.6M | 40.7M | 67.1M | 19.4M | 40M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 97.2M | 37.4M | 937.8K | 65.2M | 106.5M | 121.6M | 40.7M | 67.1M | 571K | 40M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40527 | 41183 | 34801 | 32213 | 32545 | 32121 | 32474 | 32453 | 23352 | 13136 | 14287 | 12504 | 35475 | 13792 | 1145 | 684 | 669 | 709 | 613 | 597 | 578 | 489 | 288 | 245 | 227 | 141 | 197 | 90 | 108 | 60 | 60 | 549 | 115 | 267 | 0 |
| DeltaBlue | 56954 | 56789 | 97993 | 77325 | 74198 | 76042 | 75295 | 73536 | 25965 | 13105 | 12933 | 12695 | 38884 | 542 | 1070 | 681 | 649 | 685 | 623 | 591 | 580 | 457 | 323 | 354 | 323 | 184 | 250 | 164 | 116 | 55 | 56 | 525 | 189 | 278 | 0 |
| Crypto | 49755 | 52298 | 42697 | 41607 | 41684 | 41341 | 41291 | 41572 | 30540 | 20459 | 17584 | 17379 | 25411 | 8794 | 1374 | 578 | 745 | 524 | 573 | 560 | 380 | 891 | 799 | 187 | 185 | 139 | 122 | 329 | 97 | 80 | 62 | 846 | 138 | 299 | 0 |
| RayTrace | 116400 | 122764 | 106336 | 71779 | 68819 | 65719 | 66969 | 68819 | 35558 | 26956 | 26882 | 27898 | 3322 | 1511 | 1602 | 1174 | 917 | 1123 | 941 | 883 | 727 | 563 | 581 | 517 | 466 | 433 | 274 | 500 | 260 | 166 | 139 | 590 | 437 | 352 | 0 |
| EarleyBoyer | 66364 | 65811 | 80636 | 69332 | 74966 | 71108 | 70766 | 73609 | 7045 | 38352 | 36812 | 37458 | 29150 | 820 | 3406 | 1876 | 1460 | 1800 | 1368 | 1315 | 1223 | 758 | 559 | 526 | 472 | 587 | 498 | 326 | 283 | 190 | 138 | 0 | 502 | 0 | 0 |
| RegExp | 21253 | 19962 | 10223 | 10253 | 10203 | 10001 | 8901 | 9941 | 7736 | 8866 | 8737 | 8801 | 1016 | 981 | 551 | 253 | 231 | 227 | 230 | 220 | 179 | 62 | 135 | 212 | 195 | 459 | 209 | 96 | 241 | 49 | 94 | 112 | 0 | 0 | 0 |
| Splay | 37372 | 36337 | 39108 | 38366 | 36752 | 34894 | 34332 | 28277 | 19553 | 24276 | 11531 | 11649 | 2197 | 7082 | 3672 | 2375 | 1786 | 1948 | 1801 | 1459 | 1653 | 1254 | 911 | 1300 | 1294 | 1032 | 916 | 392 | 451 | 231 | 324 | 1879 | 879 | 0 | 0 |
| NavierStokes | 39652 | 34987 | 38655 | 38842 | 38842 | 38803 | 38507 | 38842 | 36693 | 22238 | 22090 | 21980 | 18809 | 10971 | 1826 | 946 | 1292 | 982 | 993 | 922 | 933 | 1465 | 956 | 473 | 481 | 183 | 200 | 865 | 164 | 177 | 118 | 1225 | 283 | 0 | 0 |
| Score | 47949 | 47306 | 45780 | 40933 | 40723 | 39874 | 39248 | 39122 | 20014 | 19061 | 17054 | 16849 | 10452 | 2979 | 1554 | 873 | 832 | 829 | 764 | 715 | 648 | 561 | 480 | 394 | 371 | 307 | 273 | 267 | 189 | 107 | 105 | 0 | 0 | 0 | 0 |
| Score/MB | 493 | 1263 | 859 | 627 | 382 | 327 | 965 | 582 | 1031 | 476 | 334 | 478 | 52 | 2 | 43 | 71 | 194 | 160 | 912 | 531 | 328 | 12 | 225 | 588 | 916 | 116424 | 20 | 128 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 39 | 34 | 46 | 48 | 49 | 51 | 53 | 59 | 88 | 68 | 82 | 85 | 102 | 114 | 129 | 145 | 235 | 234 | 53 | 86 | 31 | 0 |
### macos-arm64
| Engine | jsc | bun | bare | deno | node | dune | v8 | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.19 | 0 | 2.4.2 | 24.4.1 | 0.10.0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 56.4M | 45.5M | 85.3M | 110.8M | 57.4M | 861K | 131.7M | 32.8M | 46.3M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K |
| Exe size | 914.7K | 56.4M | 45.5M | 85.3M | 110.8M | 57.4M | 861K | 65.9M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 51813 | 49324 | 43803 | 48396 | 45328 | 46690 | 35666 | 13920 | 15123 | 15095 | 36887 | 19992 | 1212 | 1326 | 1045 | 1340 | 1126 | 1046 | 826 | 875 | 531 | 407 | 115 | 333 | 144 | 152 | 109 | 658 | 207 | 216 | 0 |
| DeltaBlue | 77232 | 77120 | 107673 | 107204 | 101875 | 105425 | 81252 | 17316 | 16992 | 16695 | 53681 | 1084 | 1168 | 1226 | 1184 | 1242 | 1147 | 974 | 927 | 799 | 626 | 596 | 215 | 397 | 283 | 156 | 98 | 687 | 259 | 241 | 0 |
| Crypto | 74273 | 71061 | 59018 | 57710 | 59714 | 58672 | 37490 | 26026 | 21881 | 21981 | 46168 | 10381 | 1348 | 1233 | 1039 | 1213 | 1381 | 966 | 1111 | 1711 | 1351 | 310 | 555 | 190 | 108 | 133 | 114 | 1052 | 109 | 271 | 0 |
| RayTrace | 191287 | 185811 | 99751 | 89983 | 91389 | 90723 | 96199 | 51059 | 49382 | 40773 | 5309 | 2330 | 2179 | 2171 | 2088 | 1570 | 1225 | 1492 | 1177 | 1131 | 1088 | 992 | 753 | 440 | 634 | 340 | 240 | 507 | 587 | 334 | 0 |
| EarleyBoyer | 106853 | 106999 | 97139 | 95970 | 100881 | 102246 | 74920 | 52190 | 47685 | 47008 | 45487 | 1283 | 4878 | 3321 | 3127 | 2631 | 2298 | 2357 | 1792 | 1442 | 1199 | 1088 | 449 | 826 | 682 | 386 | 240 | 0 | 627 | 0 | 0 |
| RegExp | 33400 | 32340 | 14910 | 14231 | 15305 | 14714 | 11467 | 13325 | 12303 | 12443 | 2040 | 763 | 681 | 318 | 322 | 279 | 282 | 280 | 214 | 107 | 259 | 323 | 338 | 299 | 564 | 202 | 142 | 190 | 0 | 0 | 0 |
| Splay | 54216 | 58005 | 58054 | 52236 | 44877 | 45684 | 41903 | 30626 | 18545 | 16998 | 5346 | 1919 | 3859 | 3659 | 4091 | 2485 | 2611 | 2377 | 3558 | 2304 | 2263 | 1187 | 561 | 1327 | 982 | 523 | 533 | 1436 | 1008 | 0 | 0 |
| NavierStokes | 34394 | 33438 | 39287 | 40540 | 40540 | 39178 | 33950 | 21454 | 20479 | 20652 | 27695 | 18402 | 1517 | 2071 | 1728 | 2188 | 2370 | 1684 | 2680 | 1974 | 1566 | 698 | 1559 | 315 | 201 | 186 | 222 | 1894 | 273 | 0 | 0 |
| Score | 66411 | 65459 | 55630 | 54508 | 53857 | 53835 | 43480 | 24870 | 22332 | 21542 | 16905 | 3406 | 1732 | 1558 | 1446 | 1373 | 1311 | 1185 | 1176 | 993 | 925 | 619 | 438 | 429 | 347 | 231 | 182 | 0 | 0 | 0 | 0 |
| Score/MB | 704 | 1161 | 1222 | 639 | 486 | 937 | 51710 | 188 | 680 | 464 | 87 | 0 | 110 | 432 | 137 | 333 | 1375 | 1003 | 777 | 24 | 1684 | 1477 | 271 | 33 | 131593 | 3 | 14 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 33 | 31 | 36 | 37 | 38 | 38 | 40 | 44 | 58 | 44 | 56 | 81 | 78 | 98 | 122 | 140 | 45 | 83 | 33 | 0 |
### macos-amd64
| Engine | bare | v8 | bun | jsc | dune | deno | node | spiderfire | ChakraCore | spidermonkey | mozjs | graaljs | hermes | jjs | txiki.js | qjs(ng) | llrt | rquickjs | quickjs | xst | duktape | primjs | ringo | goja | mujs | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.6.0 | 1.2.19 | 0 | 0.10.0 | 2.4.2 | 24.4.1 | 0 | 1.13.0.0.beta | 142.0 | 0 | 24.1.2 | 0.12.0 | 0 | 24.12.0 | 0.8.0 | 0.6.2.beta | 0 | 2025.04.26 | 16.9.1 | 2.99.99 | 0 | 4.0.0 | 0 | 1.3.5 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 47.1M | 861K | 61.9M | 89.6M | 60.4M | 96.3M | 113.5M | 48.2M | 20M | 65.9M | 33.8M | 194.4M | 7.9M | 0 | 3.7M | 2.1M | 12.4M | 1.2M | 1M | 1.6M | 525.7K | 693.4K | 2.7K | 13.1M | 441.8K | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K |
| Exe size | 47.1M | 861K | 61.9M | 1016.1K | 60.4M | 96.3M | 113.5M | 48.2M | 571K | 65.9M | 33.8M | 148.8K | 7.9M | 0 | 3.7M | 2.1M | 12.4M | 1.2M | 1M | 1.6M | 525.7K | 693.4K | 2.7K | 13.1M | 441.8K | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K |
| Dll size | 0 | 0 | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 21640 | 16387 | 22456 | 21721 | 17482 | 23215 | 17305 | 9909 | 18159 | 7198 | 7187 | 29050 | 465 | 58 | 341 | 333 | 269 | 293 | 224 | 93 | 98 | 114 | 52 | 99 | 101 | 72 | 41 | 17 | 220 | 41 | 83 | 0 |
| DeltaBlue | 58019 | 59255 | 30024 | 26877 | 41132 | 41773 | 36332 | 10817 | 13757 | 8331 | 7855 | 21541 | 521 | 158 | 356 | 345 | 321 | 313 | 248 | 143 | 129 | 175 | 81 | 125 | 110 | 79 | 37 | 14 | 195 | 76 | 89 | 0 |
| Crypto | 30278 | 27165 | 27717 | 28255 | 25965 | 25647 | 24863 | 14104 | 20054 | 10803 | 9097 | 14439 | 531 | 1830 | 214 | 207 | 172 | 152 | 205 | 183 | 184 | 137 | 60 | 64 | 75 | 60 | 43 | 25 | 247 | 59 | 98 | 0 |
| RayTrace | 45509 | 69855 | 81473 | 72520 | 56109 | 44029 | 49135 | 28638 | 29393 | 21734 | 20900 | 2792 | 1025 | 572 | 529 | 345 | 369 | 322 | 278 | 439 | 238 | 204 | 278 | 165 | 214 | 168 | 96 | 48 | 236 | 238 | 147 | 0 |
| EarleyBoyer | 59916 | 51088 | 44206 | 41532 | 52405 | 46559 | 44629 | 33817 | 4969 | 27004 | 23294 | 10618 | 1655 | 415 | 847 | 598 | 656 | 562 | 524 | 315 | 333 | 402 | 334 | 284 | 276 | 180 | 95 | 59 | 0 | 196 | 0 | 0 |
| RegExp | 7985 | 6091 | 10979 | 10203 | 6637 | 6104 | 5880 | 6882 | 3913 | 5807 | 5637 | 701 | 271 | 221 | 63 | 55 | 50 | 55 | 57 | 106 | 72 | 53 | 378 | 169 | 70 | 75 | 46 | 20 | 59 | 0 | 0 | 0 |
| Splay | 37127 | 26004 | 19758 | 25279 | 22377 | 18865 | 23013 | 12302 | 15591 | 17789 | 8198 | 1335 | 2404 | 894 | 1004 | 554 | 1050 | 598 | 639 | 255 | 712 | 469 | 647 | 257 | 282 | 250 | 222 | 97 | 733 | 269 | 0 | 0 |
| NavierStokes | 36952 | 26807 | 25988 | 23993 | 30806 | 28048 | 28344 | 21432 | 27964 | 18402 | 16291 | 13787 | 839 | 7280 | 455 | 388 | 284 | 346 | 467 | 385 | 326 | 243 | 115 | 113 | 179 | 91 | 80 | 64 | 474 | 93 | 0 | 0 |
| Score | 32129 | 28198 | 28015 | 27288 | 26607 | 25239 | 24539 | 15067 | 13710 | 12805 | 10823 | 6566 | 766 | 525 | 368 | 296 | 293 | 271 | 270 | 208 | 205 | 185 | 169 | 144 | 143 | 108 | 68 | 35 | 0 | 0 | 0 | 0 |
| Score/MB | 681 | 33535 | 452 | 304 | 440 | 262 | 216 | 312 | 684 | 194 | 320 | 33 | 97 | 0 | 98 | 143 | 23 | 219 | 263 | 129 | 399 | 273 | 64090 | 10 | 331 | 1 | 5 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 26 | 51 | 81 | 107 | 123 | 138 | 129 | 122 | 150 | 133 | 158 | 165 | 187 | 183 | 252 | 352 | 661 | 104 | 188 | 72 | 0 |
### windows
| Engine | v8 | jsc | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | qjs(ng) | mujs | duktape | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.19 | 24.4.1 | 2.4.2 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0 | 0.6.2.beta | 0.8.0 | 1.3.5 | 2.7.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 |
| Total size | 52.6M | 122.8M | 132.1M | 115.9M | 143.1M | 78.7M | 14.4M | 51.3M | 72.8M | 196.1M | 338M | 112.8M | 38.1M | 11.8M | 9.3M | 42.2M | 9M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K | 2.7K |
| Exe size | 27.6M | 337K | 112.3M | 84.9M | 110.8M | 48.4M | 342.9K | 33.8M | 42.6M | 349.1K | 320.6M | 3M | 5.7M | 4.9M | 1.5M | 13.1M | 1.7M | 665.3K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K | 2.7K |
| Dll size | 25M | 122.5M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.3M | 109.8M | 32.4M | 6.9M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 |
| Richards | 34988 | 35722 | 36449 | 33029 | 33551 | 33456 | 24263 | 12815 | 12853 | 35863 | 3749 | 681 | 455 | 514 | 437 | 384 | 420 | 233 | 212 | 194 | 105 | 55 | 49 | 0 | 0 | 0 | 0 |
| DeltaBlue | 84142 | 46574 | 44458 | 74647 | 73477 | 73576 | 28629 | 13144 | 13098 | 31942 | 205 | 627 | 401 | 463 | 410 | 370 | 396 | 338 | 264 | 234 | 117 | 49 | 42 | 0 | 0 | 0 | 0 |
| Crypto | 41563 | 48667 | 45942 | 41885 | 36628 | 42178 | 33540 | 20355 | 17996 | 20665 | 2631 | 780 | 425 | 551 | 518 | 429 | 369 | 186 | 317 | 114 | 90 | 59 | 74 | 0 | 0 | 0 | 0 |
| RayTrace | 101600 | 105966 | 89021 | 69041 | 68893 | 67487 | 51082 | 28535 | 27010 | 5288 | 3940 | 994 | 743 | 546 | 589 | 561 | 578 | 455 | 438 | 235 | 267 | 130 | 134 | 0 | 0 | 0 | 0 |
| EarleyBoyer | 81615 | 62655 | 56318 | 72157 | 74242 | 74397 | 42410 | 39470 | 36746 | 29423 | 1069 | 2251 | 1154 | 996 | 993 | 1009 | 979 | 556 | 513 | 459 | 295 | 124 | 141 | 0 | 0 | 0 | 0 |
| RegExp | 9689 | 19346 | 17603 | 9738 | 9738 | 9790 | 10001 | 9001 | 8702 | 1030 | 933 | 405 | 196 | 184 | 173 | 194 | 186 | 200 | 110 | 200 | 279 | 89 | 42 | 0 | 0 | 0 | 0 |
| Splay | 39393 | 35237 | 34324 | 34340 | 33530 | 27903 | 28074 | 24195 | 14025 | 2655 | 4284 | 2371 | 1467 | 1038 | 985 | 1311 | 993 | 1164 | 840 | 814 | 520 | 321 | 188 | 0 | 0 | 0 | 0 |
| NavierStokes | 38951 | 34144 | 40068 | 39060 | 38912 | 38951 | 36506 | 22557 | 22260 | 25673 | 3580 | 1079 | 745 | 1036 | 748 | 718 | 675 | 507 | 1027 | 193 | 149 | 114 | 162 | 0 | 0 | 0 | 0 |
| Score | 44393 | 43368 | 41639 | 40125 | 39451 | 39174 | 29122 | 19264 | 17339 | 11261 | 1822 | 968 | 588 | 587 | 537 | 531 | 506 | 380 | 373 | 255 | 192 | 97 | 88 | 0 | 0 | 0 | 0 |
| Score/MB | 844 | 353 | 315 | 346 | 275 | 497 | 2022 | 375 | 238 | 57 | 5 | 8 | 15 | 49 | 57 | 12 | 56 | 50 | 48 | 13 | 1 | 2 | 2 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 41 | 42 | 60 | 58 | 61 | 60 | 63 | 82 | 84 | 120 | 148 | 249 | 283 | 0 | 127 | 0 | 106 |
