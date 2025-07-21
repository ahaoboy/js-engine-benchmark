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


## Engine & Runtime (27/32)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47549<br>97.2M<br>489/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46369<br>37.4M<br>1238/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45240<br>53.3M<br>849/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40625<br>106.5M<br>381/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39807<br>121.6M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39126<br>67.1M<br>583/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19741<br>19.4M<br>1017/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18931<br>39.7M<br>476/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16793<br>35.2M<br>476/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12610<br>199.7M<br>63/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2900<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1541<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 873<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 839<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 839<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 771<br>857K<br>921/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 715<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 650<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 565<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 502<br>2.1M<br>236/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 386<br>685K<br>577/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 360<br>414.5K<br>889/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 194<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
7/21/2025, 1:59:03 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 2.4.2 | 24.4.1 | 0.10.0 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 97.2M | 37.4M | 53.3M | 106.5M | 121.6M | 67.1M | 19.4M | 39.7M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 97.2M | 37.4M | 937.8K | 106.5M | 121.6M | 67.1M | 571K | 39.7M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41536 | 41268 | 35260 | 33346 | 32337 | 31952 | 23268 | 12507 | 12871 | 35291 | 12546 | 1121 | 689 | 692 | 712 | 612 | 595 | 584 | 478 | 294 | 228 | 227 | 191 | 91 | 103 | 60 | 58 | 539 | 122 | 273 | 0 |
| DeltaBlue | 55321 | 50435 | 92373 | 74879 | 73993 | 74416 | 21289 | 12979 | 12430 | 27055 | 392 | 1086 | 671 | 661 | 688 | 622 | 590 | 581 | 459 | 329 | 352 | 323 | 252 | 164 | 120 | 55 | 55 | 523 | 180 | 284 | 0 |
| Crypto | 49553 | 52307 | 42754 | 41823 | 41700 | 41719 | 32090 | 20251 | 17261 | 16498 | 8235 | 1369 | 578 | 746 | 589 | 572 | 555 | 380 | 899 | 783 | 191 | 184 | 123 | 325 | 98 | 80 | 61 | 842 | 124 | 305 | 0 |
| RayTrace | 115660 | 119730 | 105596 | 67339 | 66303 | 69189 | 36481 | 27380 | 27898 | 10329 | 1367 | 1576 | 1188 | 908 | 1099 | 948 | 866 | 715 | 577 | 573 | 514 | 476 | 276 | 497 | 256 | 166 | 139 | 585 | 396 | 346 | 0 |
| EarleyBoyer | 65815 | 66370 | 76702 | 74105 | 69493 | 74576 | 7157 | 38839 | 36912 | 33663 | 1006 | 3343 | 1901 | 1473 | 1766 | 1403 | 1337 | 1211 | 768 | 572 | 528 | 487 | 509 | 326 | 291 | 193 | 136 | 0 | 481 | 0 | 0 |
| RegExp | 20770 | 20073 | 10284 | 10072 | 10142 | 9991 | 7803 | 8702 | 8737 | 1325 | 892 | 547 | 248 | 228 | 226 | 233 | 222 | 183 | 62 | 135 | 216 | 196 | 209 | 95 | 248 | 48 | 94 | 112 | 0 | 0 | 0 |
| Splay | 36630 | 35172 | 39026 | 36394 | 34886 | 27650 | 19951 | 24651 | 11523 | 2677 | 5851 | 3606 | 2375 | 1785 | 1993 | 1809 | 1429 | 1669 | 1300 | 1299 | 1173 | 936 | 984 | 396 | 537 | 232 | 326 | 1944 | 819 | 0 | 0 |
| NavierStokes | 39623 | 34987 | 38765 | 38842 | 38765 | 38842 | 35693 | 22002 | 22090 | 32912 | 17214 | 1840 | 945 | 1320 | 975 | 1022 | 948 | 936 | 1458 | 926 | 467 | 490 | 201 | 826 | 165 | 176 | 119 | 1226 | 215 | 0 | 0 |
| Score | 47549 | 46369 | 45240 | 40625 | 39807 | 39126 | 19741 | 18931 | 16793 | 12610 | 2900 | 1541 | 873 | 839 | 839 | 771 | 715 | 650 | 565 | 502 | 386 | 360 | 277 | 265 | 194 | 107 | 104 | 0 | 0 | 0 | 0 |
| Score/MB | 489 | 1238 | 849 | 381 | 327 | 583 | 1017 | 476 | 476 | 63 | 2 | 42 | 71 | 196 | 162 | 921 | 531 | 329 | 12 | 236 | 577 | 889 | 21 | 127 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 23 | 39 | 34 | 46 | 48 | 49 | 50 | 52 | 58 | 87 | 67 | 82 | 86 | 113 | 130 | 142 | 234 | 235 | 53 | 96 | 31 | 0 |
### macos-arm64
| Engine | jsc | bun | node | deno | dune | v8 | spidermonkey | mozjs | graaljs | hermes | jjs | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | ladybird | primjs | duktape | mujs | xst | goja | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.19 | 24.4.1 | 2.4.2 | 0.10.0 | 13.6.0 | 141.0 | 0 | 24.1.2 | 0.12.0 | 11.0.27 | 24.12.0 | 0.8.0 | 0.6.2.beta | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 56.4M | 110.8M | 85.3M | 57.4M | 861K | 131M | 32.8M | 194M | 15.7M | 653.8M | 3.6M | 4.1M | 10.5M | 975.9K | 1.2M | 41.2M | 1.5M | 562.1K | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 2.4M | 653.8M | 575.4K | 7.3K |
| Exe size | 914.7K | 56.4M | 110.8M | 85.3M | 57.4M | 861K | 65.5M | 32.8M | 147.4K | 7.9M | 653.8M | 3.6M | 2.1M | 10.5M | 975.9K | 1.2M | 41.2M | 1.5M | 562.1K | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 1.8M | 653.8M | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.5M | 0 | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 46839 | 51760 | 44911 | 48265 | 44498 | 32368 | 14537 | 15681 | 37244 | 1340 | 15233 | 1327 | 1324 | 904 | 1083 | 950 | 878 | 786 | 527 | 408 | 120 | 331 | 162 | 114 | 726 | 203 | 205 | 0 |
| DeltaBlue | 77199 | 76849 | 103045 | 101154 | 99990 | 79368 | 16847 | 17634 | 51949 | 1239 | 396 | 1328 | 1223 | 1070 | 1054 | 992 | 797 | 908 | 593 | 602 | 226 | 394 | 168 | 105 | 808 | 245 | 240 | 0 |
| Crypto | 72346 | 70524 | 60615 | 59924 | 56261 | 38637 | 26229 | 22509 | 43811 | 1478 | 4643 | 1185 | 1218 | 946 | 1298 | 897 | 1702 | 1070 | 1336 | 311 | 553 | 200 | 131 | 118 | 1159 | 132 | 271 | 0 |
| RayTrace | 191805 | 182703 | 92647 | 81096 | 83841 | 93313 | 51873 | 50639 | 4052 | 2542 | 1826 | 2175 | 1536 | 1957 | 1146 | 1372 | 1127 | 1165 | 1114 | 1015 | 753 | 469 | 313 | 252 | 629 | 617 | 333 | 0 |
| EarleyBoyer | 107253 | 106524 | 100891 | 94040 | 92348 | 77051 | 52025 | 49972 | 50965 | 5201 | 707 | 3344 | 2632 | 2758 | 2129 | 2040 | 1444 | 1803 | 1152 | 1131 | 449 | 863 | 356 | 253 | 0 | 691 | 0 | 0 |
| RegExp | 33821 | 32158 | 15153 | 13855 | 13479 | 11546 | 13234 | 12806 | 2035 | 730 | 710 | 316 | 271 | 300 | 265 | 279 | 107 | 204 | 251 | 323 | 338 | 294 | 195 | 146 | 184 | 0 | 0 | 0 |
| Splay | 52822 | 55976 | 45896 | 50981 | 35506 | 40908 | 31757 | 19779 | 4368 | 4753 | 1357 | 3606 | 2516 | 3496 | 2307 | 2279 | 2263 | 721 | 2377 | 1029 | 545 | 1350 | 514 | 591 | 1842 | 900 | 0 | 0 |
| NavierStokes | 34394 | 33027 | 40580 | 40540 | 36915 | 36506 | 21454 | 21475 | 38359 | 1626 | 1824 | 2151 | 2183 | 1626 | 2213 | 1726 | 1972 | 2342 | 1538 | 783 | 1553 | 323 | 175 | 229 | 1813 | 287 | 0 | 0 |
| Score | 65302 | 65150 | 54157 | 53171 | 49184 | 43278 | 25075 | 23260 | 16672 | 1918 | 1680 | 1572 | 1362 | 1305 | 1219 | 1126 | 990 | 929 | 915 | 624 | 442 | 438 | 227 | 191 | 0 | 0 | 0 | 0 |
| Score/MB | 693 | 1155 | 488 | 623 | 856 | 51470 | 191 | 708 | 85 | 122 | 2 | 435 | 330 | 124 | 1279 | 953 | 24 | 614 | 1666 | 1489 | 274 | 34 | 3 | 15 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 30 | 43 | 37 | 39 | 38 | 40 | 41 | 59 | 45 | 44 | 54 | 81 | 77 | 129 | 135 | 42 | 79 | 33 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | dune | node | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | duktape | rquickjs | qjs(ng) | primjs | xst | mujs | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 13.6.0 | 0 | 2.4.2 | 0.10.0 | 24.4.1 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 2.99.99 | 0 | 0.8.0 | 0 | 16.9.1 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 61.9M | 861K | 89.6M | 96.3M | 60.4M | 113.5M | 20M | 65.5M | 33.8M | 194.4M | 602.8M | 7.9M | 12.4M | 3.7M | 1M | 525.7K | 1.2M | 2.1M | 693.4K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 602.8M | 570.8K | 7.3K |
| Exe size | 61.9M | 861K | 1016.1K | 96.3M | 60.4M | 113.5M | 571K | 65.5M | 33.8M | 148.8K | 602.8M | 7.9M | 12.4M | 3.7M | 1M | 525.7K | 1.2M | 2.1M | 693.4K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 602.8M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 26459 | 20687 | 29145 | 29234 | 21743 | 21647 | 24482 | 9161 | 9224 | 42564 | 11403 | 491 | 377 | 350 | 287 | 202 | 320 | 418 | 205 | 90 | 121 | 128 | 90 | 47 | 23 | 390 | 79 | 82 | 0 |
| DeltaBlue | 44947 | 66839 | 36398 | 53152 | 51684 | 51665 | 19644 | 10321 | 10585 | 40537 | 301 | 545 | 440 | 383 | 381 | 227 | 327 | 358 | 268 | 138 | 158 | 159 | 105 | 43 | 19 | 422 | 119 | 113 | 0 |
| Crypto | 42418 | 40799 | 37393 | 32314 | 33644 | 33802 | 23998 | 14492 | 12041 | 23513 | 3992 | 554 | 255 | 229 | 293 | 270 | 224 | 246 | 171 | 182 | 97 | 74 | 73 | 50 | 36 | 442 | 76 | 133 | 0 |
| RayTrace | 102044 | 98789 | 96791 | 67863 | 63343 | 39698 | 36703 | 29718 | 29614 | 4316 | 781 | 756 | 742 | 667 | 325 | 436 | 382 | 402 | 301 | 428 | 292 | 218 | 206 | 108 | 65 | 315 | 288 | 198 | 0 |
| EarleyBoyer | 58150 | 67201 | 52385 | 61048 | 61182 | 56568 | 5278 | 32099 | 30300 | 19447 | 592 | 1330 | 988 | 983 | 550 | 460 | 621 | 690 | 471 | 308 | 389 | 383 | 234 | 98 | 79 | 0 | 234 | 0 | 0 |
| RegExp | 15456 | 8166 | 14518 | 8373 | 8323 | 8464 | 4523 | 7118 | 7154 | 1000 | 357 | 288 | 76 | 85 | 70 | 97 | 67 | 64 | 67 | 126 | 98 | 184 | 92 | 50 | 21 | 86 | 0 | 0 | 0 |
| Splay | 31993 | 35489 | 28506 | 29915 | 26305 | 34544 | 16282 | 19965 | 10730 | 2153 | 1555 | 2345 | 1704 | 1217 | 643 | 873 | 562 | 161 | 505 | 262 | 522 | 437 | 390 | 259 | 108 | 315 | 512 | 0 | 0 |
| NavierStokes | 31927 | 35953 | 32518 | 36506 | 35136 | 35989 | 31398 | 23354 | 23649 | 25178 | 5797 | 873 | 471 | 479 | 601 | 436 | 445 | 528 | 288 | 506 | 266 | 119 | 114 | 100 | 72 | 783 | 133 | 0 | 0 |
| Score | 38398 | 37490 | 35814 | 34269 | 32099 | 31180 | 16375 | 16020 | 14464 | 10796 | 1458 | 738 | 457 | 422 | 334 | 313 | 313 | 294 | 245 | 218 | 203 | 182 | 139 | 78 | 44 | 0 | 0 | 0 | 0 |
| Score/MB | 620 | 44587 | 399 | 355 | 531 | 274 | 816 | 244 | 427 | 55 | 2 | 93 | 36 | 112 | 326 | 609 | 253 | 142 | 361 | 135 | 470 | 13 | 2 | 6 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 24 | 55 | 49 | 94 | 92 | 102 | 94 | 109 | 108 | 122 | 140 | 133 | 163 | 202 | 317 | 535 | 73 | 147 | 57 | 0 |
### windows
| Engine | v8 | jsc | dune | bun | node | deno | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | mujs | duktape | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 0.10.0 | 1.2.19 | 24.4.1 | 2.4.2 | 1.11.24.0 | 141.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 1.3.5 | 2.7.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 78.7M | 132.1M | 115.9M | 143.1M | 14.4M | 51M | 196.1M | 338.1M | 112.8M | 11.8M | 38.1M | 9.3M | 42.2M | 9M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 48.4M | 112.3M | 84.9M | 110.8M | 342.9K | 33.6M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 665.3K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 30.3M | 19.8M | 31.1M | 32.3M | 14.1M | 17.4M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 35080 | 36336 | 33311 | 36230 | 32923 | 29774 | 24496 | 13062 | 35249 | 9004 | 701 | 514 | 452 | 448 | 392 | 434 | 229 | 212 | 195 | 107 | 53 | 49 | 0 | 0 | 0 |
| DeltaBlue | 98721 | 47400 | 77378 | 43863 | 73239 | 72135 | 28854 | 13078 | 27616 | 403 | 624 | 456 | 390 | 397 | 364 | 396 | 324 | 258 | 236 | 117 | 47 | 41 | 0 | 0 | 0 |
| Crypto | 42313 | 48219 | 41829 | 46873 | 37177 | 39413 | 33659 | 20565 | 20000 | 3181 | 790 | 541 | 423 | 516 | 430 | 380 | 184 | 304 | 113 | 92 | 58 | 74 | 0 | 0 | 0 |
| RayTrace | 101748 | 102340 | 67635 | 84285 | 66007 | 68307 | 42253 | 27380 | 4029 | 1247 | 982 | 553 | 742 | 592 | 613 | 583 | 433 | 437 | 227 | 267 | 127 | 133 | 0 | 0 | 0 |
| EarleyBoyer | 82545 | 59074 | 73735 | 48948 | 70006 | 70622 | 41924 | 37813 | 26738 | 2508 | 2222 | 902 | 1076 | 899 | 970 | 925 | 539 | 483 | 448 | 297 | 123 | 142 | 0 | 0 | 0 |
| RegExp | 9819 | 18657 | 9748 | 16216 | 9941 | 9680 | 9637 | 9390 | 951 | 938 | 401 | 188 | 196 | 172 | 185 | 185 | 196 | 108 | 196 | 270 | 90 | 42 | 0 | 0 | 0 |
| Splay | 38912 | 32556 | 29280 | 31268 | 32710 | 32531 | 20242 | 22516 | 2375 | 3935 | 2318 | 925 | 1318 | 887 | 1132 | 936 | 1140 | 635 | 851 | 508 | 317 | 169 | 0 | 0 | 0 |
| NavierStokes | 38584 | 33984 | 38990 | 38173 | 38881 | 38881 | 36952 | 21832 | 25822 | 4043 | 1089 | 1031 | 740 | 744 | 716 | 664 | 503 | 957 | 188 | 150 | 114 | 166 | 0 | 0 | 0 |
| Score | 45430 | 42358 | 39547 | 39518 | 38895 | 38669 | 27247 | 18972 | 10255 | 2195 | 967 | 571 | 571 | 522 | 521 | 502 | 371 | 351 | 253 | 192 | 96 | 87 | 0 | 0 | 0 |
| Score/MB | 864 | 344 | 502 | 299 | 335 | 270 | 1891 | 371 | 52 | 6 | 8 | 48 | 15 | 56 | 12 | 56 | 49 | 46 | 12 | 1 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 35 | 42 | 58 | 60 | 61 | 62 | 64 | 83 | 85 | 123 | 148 | 252 | 281 | 0 | 130 | 0 |
