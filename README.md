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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47932<br>97.2M<br>493/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47212<br>37.4M<br>1260/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45159<br>53.3M<br>847/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40495<br>106.5M<br>380/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39863<br>121.6M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39113<br>67.1M<br>582/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20120<br>19.4M<br>1036/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18885<br>40M<br>472/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17134<br>35.2M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11387<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3459<br>1.1G<br>3/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1543<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 882<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 833<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>857K<br>912/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 718<br>1.3M<br>533/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 652<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 551<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 499<br>2.1M<br>234/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 347<br>414.5K<br>857/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 267<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 193<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
7/28/2025, 1:57:44 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 2.4.2 | 24.4.1 | 0.10.0 | 1.13.0.0.beta | 142.0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 97.2M | 37.4M | 53.3M | 106.5M | 121.6M | 67.1M | 19.4M | 40M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 97.2M | 37.4M | 937.8K | 106.5M | 121.6M | 67.1M | 571K | 40M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41455 | 41420 | 34970 | 32428 | 32616 | 31366 | 23349 | 12952 | 13411 | 34995 | 12649 | 1134 | 693 | 712 | 695 | 602 | 598 | 581 | 442 | 289 | 248 | 224 | 207 | 90 | 108 | 60 | 59 | 551 | 128 | 268 | 0 |
| DeltaBlue | 52227 | 54289 | 93081 | 74469 | 71031 | 73702 | 25273 | 12807 | 12926 | 26460 | 509 | 1050 | 681 | 691 | 666 | 620 | 591 | 574 | 446 | 329 | 357 | 322 | 245 | 163 | 114 | 55 | 55 | 522 | 184 | 272 | 0 |
| Crypto | 50084 | 51463 | 42680 | 41846 | 41400 | 41787 | 31954 | 20213 | 17707 | 16110 | 9967 | 1364 | 595 | 600 | 737 | 574 | 552 | 381 | 858 | 787 | 188 | 185 | 124 | 327 | 98 | 80 | 61 | 846 | 136 | 293 | 0 |
| RayTrace | 118176 | 122024 | 105744 | 68449 | 65637 | 67709 | 36445 | 27380 | 28285 | 8623 | 5155 | 1552 | 1186 | 1072 | 901 | 935 | 879 | 733 | 568 | 587 | 514 | 491 | 273 | 502 | 258 | 162 | 137 | 587 | 425 | 351 | 0 |
| EarleyBoyer | 66156 | 66600 | 76731 | 72981 | 72217 | 75127 | 7059 | 38197 | 37436 | 30119 | 755 | 3352 | 1910 | 1779 | 1448 | 1349 | 1345 | 1217 | 772 | 551 | 522 | 476 | 500 | 325 | 282 | 193 | 134 | 0 | 512 | 0 | 0 |
| RegExp | 21933 | 20315 | 10284 | 10173 | 10052 | 10062 | 7772 | 8620 | 8775 | 962 | 930 | 551 | 251 | 229 | 230 | 232 | 223 | 184 | 61 | 133 | 214 | 196 | 209 | 96 | 246 | 48 | 93 | 112 | 0 | 0 | 0 |
| Splay | 37755 | 36931 | 38602 | 36288 | 36060 | 28522 | 19852 | 23958 | 11802 | 2486 | 7334 | 3619 | 2424 | 1895 | 1796 | 1830 | 1490 | 1692 | 1267 | 1323 | 1320 | 701 | 964 | 402 | 538 | 233 | 322 | 1883 | 837 | 0 | 0 |
| NavierStokes | 39692 | 34987 | 38655 | 38803 | 38694 | 38842 | 35877 | 22341 | 22067 | 30509 | 12008 | 1904 | 943 | 961 | 1266 | 1010 | 921 | 933 | 1464 | 902 | 483 | 490 | 199 | 850 | 164 | 176 | 119 | 1220 | 280 | 0 | 0 |
| Score | 47932 | 47212 | 45159 | 40495 | 39863 | 39113 | 20120 | 18885 | 17134 | 11387 | 3459 | 1543 | 882 | 834 | 833 | 764 | 718 | 652 | 551 | 499 | 397 | 347 | 277 | 267 | 193 | 107 | 104 | 0 | 0 | 0 | 0 |
| Score/MB | 493 | 1260 | 847 | 380 | 327 | 582 | 1036 | 472 | 486 | 57 | 3 | 42 | 71 | 161 | 195 | 912 | 533 | 330 | 12 | 234 | 593 | 857 | 21 | 128 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 23 | 42 | 34 | 46 | 49 | 48 | 51 | 53 | 59 | 90 | 69 | 82 | 84 | 114 | 129 | 144 | 235 | 236 | 53 | 87 | 31 | 0 |
### macos-arm64
| Engine | jsc | bun | dune | node | deno | v8 | mozjs | spidermonkey | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | goja | xst | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.19 | 0.10.0 | 24.4.1 | 2.4.2 | 13.6.0 | 0 | 142.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 0 | 16.9.1 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 56.4M | 57.4M | 110.8M | 85.3M | 861K | 32.8M | 131.5M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K |
| Exe size | 914.7K | 56.4M | 57.4M | 110.8M | 85.3M | 861K | 32.8M | 65.7M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.7M | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 48254 | 49755 | 48505 | 40972 | 38384 | 33964 | 15321 | 15378 | 36128 | 481 | 1225 | 1247 | 1081 | 1352 | 1161 | 1111 | 789 | 851 | 539 | 408 | 332 | 110 | 159 | 115 | 758 | 199 | 205 | 0 |
| DeltaBlue | 70667 | 64478 | 114054 | 100202 | 101088 | 81596 | 17759 | 15650 | 33191 | 1964 | 1088 | 1345 | 1192 | 1239 | 1156 | 1134 | 934 | 796 | 608 | 604 | 397 | 208 | 164 | 104 | 831 | 259 | 223 | 0 |
| Crypto | 71685 | 66544 | 59504 | 53372 | 56332 | 37274 | 22843 | 24217 | 37142 | 13962 | 1224 | 1238 | 1041 | 1232 | 1396 | 994 | 1112 | 1714 | 1351 | 314 | 196 | 502 | 146 | 111 | 1195 | 102 | 252 | 0 |
| RayTrace | 179891 | 176043 | 94719 | 89169 | 83693 | 94053 | 51799 | 43780 | 2654 | 1558 | 2228 | 2184 | 2110 | 1595 | 1295 | 1489 | 1109 | 1116 | 1135 | 998 | 460 | 676 | 368 | 257 | 705 | 557 | 321 | 0 |
| EarleyBoyer | 97713 | 96038 | 102362 | 91005 | 92917 | 70649 | 49661 | 47192 | 36535 | 2066 | 4817 | 3326 | 3007 | 2654 | 2344 | 2366 | 2167 | 1410 | 1200 | 1127 | 851 | 427 | 391 | 245 | 0 | 651 | 0 | 0 |
| RegExp | 30852 | 26275 | 15305 | 13806 | 12910 | 10808 | 12988 | 11240 | 1660 | 862 | 686 | 318 | 324 | 281 | 288 | 281 | 219 | 103 | 255 | 332 | 295 | 310 | 211 | 146 | 199 | 0 | 0 | 0 |
| Splay | 51421 | 44828 | 47200 | 42709 | 39539 | 36915 | 18532 | 23681 | 3649 | 2192 | 4523 | 3553 | 4184 | 2464 | 2477 | 2342 | 1138 | 2272 | 2029 | 1627 | 1365 | 488 | 554 | 518 | 952 | 896 | 0 | 0 |
| NavierStokes | 34280 | 33109 | 39692 | 38912 | 37952 | 36322 | 21306 | 19698 | 17660 | 12020 | 1616 | 2127 | 1768 | 2164 | 2383 | 1735 | 2680 | 1972 | 1579 | 732 | 318 | 1454 | 199 | 228 | 1884 | 276 | 0 | 0 |
| Score | 62528 | 58689 | 55614 | 50272 | 48944 | 42142 | 23132 | 22389 | 12108 | 2361 | 1749 | 1566 | 1458 | 1379 | 1328 | 1224 | 1035 | 979 | 915 | 656 | 436 | 405 | 244 | 186 | 0 | 0 | 0 | 0 |
| Score/MB | 663 | 1041 | 968 | 453 | 573 | 50119 | 704 | 170 | 62 | 0 | 111 | 434 | 138 | 334 | 1393 | 1036 | 684 | 23 | 1666 | 1565 | 34 | 251 | 3 | 15 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 35 | 31 | 36 | 37 | 38 | 36 | 41 | 43 | 60 | 43 | 54 | 78 | 88 | 117 | 137 | 42 | 86 | 34 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | dune | node | ChakraCore | spidermonkey | graaljs | mozjs | jjs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | duktape | primjs | mujs | xst | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 13.6.0 | 0 | 2.4.2 | 0.10.0 | 24.4.1 | 1.13.0.0.beta | 142.0 | 24.1.2 | 0 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 2025.04.26 | 0.8.0 | 0 | 2.99.99 | 0 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 61.9M | 861K | 89.6M | 96.3M | 60.4M | 113.5M | 20M | 65.7M | 194.4M | 33.8M | 0 | 7.9M | 3.7M | 12.4M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K |
| Exe size | 61.9M | 861K | 1016.1K | 96.3M | 60.4M | 113.5M | 571K | 65.7M | 148.8K | 33.8M | 0 | 7.9M | 3.7M | 12.4M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 28824 | 22558 | 29085 | 31038 | 29382 | 20239 | 24648 | 9609 | 43789 | 9595 | 1705 | 497 | 476 | 376 | 389 | 438 | 402 | 206 | 242 | 142 | 94 | 146 | 93 | 49 | 25 | 284 | 69 | 113 | 0 |
| DeltaBlue | 44491 | 82251 | 34190 | 54323 | 52557 | 48392 | 22764 | 11002 | 53642 | 10817 | 230 | 553 | 455 | 395 | 471 | 471 | 446 | 234 | 262 | 198 | 145 | 166 | 110 | 45 | 22 | 267 | 114 | 128 | 0 |
| Crypto | 42360 | 42205 | 38407 | 34145 | 32376 | 33097 | 25617 | 15359 | 27858 | 13138 | 3246 | 573 | 299 | 256 | 325 | 276 | 273 | 323 | 179 | 106 | 186 | 78 | 78 | 49 | 39 | 354 | 78 | 138 | 0 |
| RayTrace | 112700 | 104412 | 100047 | 67413 | 64601 | 61789 | 38701 | 30501 | 8806 | 26439 | 644 | 1097 | 809 | 753 | 419 | 486 | 469 | 420 | 338 | 333 | 441 | 237 | 206 | 114 | 71 | 160 | 294 | 214 | 0 |
| EarleyBoyer | 63909 | 71458 | 59156 | 64150 | 61930 | 59190 | 6068 | 35263 | 38067 | 30562 | 667 | 1835 | 1213 | 1047 | 736 | 817 | 801 | 489 | 564 | 410 | 310 | 409 | 238 | 109 | 83 | 0 | 299 | 0 | 0 |
| RegExp | 17041 | 8620 | 17365 | 8381 | 8108 | 8118 | 5439 | 8059 | 1375 | 3694 | 475 | 294 | 91 | 86 | 79 | 78 | 77 | 97 | 78 | 104 | 128 | 194 | 97 | 52 | 23 | 81 | 0 | 0 | 0 |
| Splay | 41412 | 42538 | 40240 | 27992 | 25352 | 37347 | 22091 | 23225 | 3560 | 13202 | 3439 | 2437 | 1594 | 1799 | 884 | 601 | 769 | 948 | 686 | 570 | 290 | 722 | 426 | 288 | 129 | 126 | 527 | 0 | 0 |
| NavierStokes | 32846 | 36249 | 32796 | 35362 | 34439 | 35918 | 35066 | 24980 | 30479 | 23572 | 10095 | 889 | 647 | 559 | 751 | 634 | 592 | 436 | 357 | 271 | 513 | 125 | 112 | 98 | 77 | 835 | 161 | 0 | 0 |
| Score | 41658 | 40858 | 38841 | 34624 | 33028 | 32648 | 18583 | 17338 | 15465 | 13735 | 1316 | 819 | 527 | 475 | 420 | 402 | 399 | 326 | 283 | 225 | 225 | 206 | 144 | 82 | 48 | 0 | 0 | 0 | 0 |
| Score/MB | 672 | 48592 | 433 | 359 | 546 | 287 | 927 | 263 | 79 | 406 | 0 | 104 | 140 | 38 | 410 | 195 | 323 | 635 | 417 | 521 | 140 | 15 | 2 | 6 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 23 | 20 | 55 | 47 | 82 | 85 | 91 | 91 | 92 | 95 | 111 | 125 | 137 | 155 | 196 | 304 | 501 | 86 | 139 | 53 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | node | dune | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | mujs | duktape | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.19 | 2.4.2 | 24.4.1 | 0.10.0 | 1.11.24.0 | 142.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 1.3.5 | 2.7.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 51.5M | 122.8M | 132.1M | 143.1M | 115.9M | 78.7M | 14.4M | 52.4M | 196.1M | 338.1M | 87.3M | 11.8M | 37M | 9.3M | 42.2M | 9M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 112.3M | 110.8M | 84.9M | 48.4M | 342.9K | 33.8M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 665.3K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 23.9M | 122.5M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 18.6M | 195.8M | 17.5M | 84.3M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 34945 | 36086 | 35496 | 33438 | 32845 | 30480 | 23275 | 13086 | 34759 | 5145 | 684 | 508 | 448 | 444 | 388 | 437 | 233 | 212 | 190 | 106 | 55 | 49 | 0 | 0 | 0 |
| DeltaBlue | 84109 | 47532 | 39261 | 76829 | 72684 | 69497 | 28986 | 13019 | 31883 | 223 | 620 | 466 | 397 | 410 | 376 | 403 | 324 | 260 | 236 | 116 | 51 | 42 | 0 | 0 | 0 |
| Crypto | 42951 | 48779 | 46252 | 37462 | 41996 | 42087 | 33676 | 20323 | 18980 | 2855 | 783 | 545 | 427 | 510 | 429 | 370 | 186 | 313 | 114 | 92 | 58 | 74 | 0 | 0 | 0 |
| RayTrace | 102636 | 105818 | 95977 | 67191 | 55795 | 67857 | 48469 | 27972 | 2695 | 1369 | 1006 | 540 | 734 | 594 | 565 | 582 | 458 | 431 | 231 | 266 | 131 | 134 | 0 | 0 | 0 |
| EarleyBoyer | 78059 | 61225 | 56931 | 73272 | 67805 | 74379 | 43137 | 39494 | 24862 | 1717 | 2237 | 1014 | 1139 | 993 | 1018 | 988 | 568 | 516 | 461 | 300 | 124 | 143 | 0 | 0 | 0 |
| RegExp | 9748 | 19021 | 17473 | 9780 | 9961 | 9699 | 10223 | 8478 | 1136 | 1109 | 400 | 186 | 196 | 173 | 179 | 187 | 199 | 109 | 198 | 280 | 90 | 43 | 0 | 0 | 0 |
| Splay | 39499 | 36027 | 34365 | 33827 | 33974 | 28962 | 28032 | 23673 | 2973 | 5333 | 2448 | 1046 | 1384 | 986 | 1328 | 1000 | 1198 | 986 | 773 | 489 | 328 | 168 | 0 | 0 | 0 |
| NavierStokes | 38912 | 34064 | 38101 | 38990 | 39099 | 38951 | 36841 | 22422 | 23869 | 3942 | 1100 | 1037 | 742 | 751 | 719 | 674 | 507 | 933 | 191 | 151 | 114 | 166 | 0 | 0 | 0 |
| Score | 44418 | 43429 | 41047 | 39652 | 38688 | 38595 | 29009 | 19032 | 10161 | 1913 | 974 | 588 | 580 | 538 | 529 | 512 | 381 | 374 | 252 | 192 | 98 | 88 | 0 | 0 | 0 |
| Score/MB | 862 | 353 | 310 | 277 | 333 | 490 | 2014 | 363 | 51 | 5 | 11 | 49 | 15 | 57 | 12 | 57 | 50 | 49 | 12 | 1 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 37 | 42 | 58 | 60 | 61 | 61 | 63 | 82 | 85 | 123 | 149 | 249 | 280 | 0 | 130 | 0 |
