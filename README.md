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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48340<br>56.8M<br>850/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47775<br>98.4M<br>485/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47409<br>36.4M<br>1302/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bare | [bare](https://github.com/holepunchto/bare) | 40935<br>65.3M<br>626/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40636<br>106.5M<br>381/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39639<br>123.1M<br>321/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39030<br>66.3M<br>588/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38783<br>40.7M<br>953/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20066<br>19.4M<br>1033/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18737<br>39.6M<br>472/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17198<br>35.2M<br>488/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17188<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11167<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2449<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1530<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 858<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 727<br>831.3K<br>895/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 726<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 716<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 565<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 496<br>2.1M<br>233/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 383<br>446.6K<br>878/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 376<br>685K<br>562/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>414.5K<br>921/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 298<br>2.7K<br>113011/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/17/2025, 12:27:35 PM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | bare | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 | 1.2.20 |  |  | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 98.4M | 36.4M | 65.3M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 98.4M | 36.4M | 65.3M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 36989 | 41522 | 40827 | 32146 | 32651 | 31320 | 31694 | 32570 | 23561 | 12836 | 13259 | 14198 | 35733 | 13305 | 1104 | 669 | 683 | 712 | 585 | 528 | 591 | 585 | 497 | 289 | 264 | 244 | 232 | 110 | 203 | 90 | 104 | 59 | 59 | 275 | 24 |  | 129 |  |
| DeltaBlue | 111759 | 54455 | 54561 | 76703 | 76194 | 72095 | 73556 | 75176 | 25344 | 12404 | 12966 | 13197 | 26057 | 289 | 1028 | 659 | 660 | 689 | 594 | 505 | 593 | 580 | 454 | 327 | 360 | 353 | 323 | 185 | 250 | 164 | 116 | 54 | 55 | 283 | 28 |  | 178 |  |
| Crypto | 41397 | 48632 | 52064 | 41424 | 41729 | 41433 | 41639 | 41411 | 31926 | 20291 | 17788 | 17912 | 13904 | 8343 | 1358 | 572 | 746 | 602 | 510 | 875 | 535 | 378 | 892 | 804 | 188 | 190 | 184 | 155 | 123 | 325 | 97 | 80 | 62 | 303 | 29 |  | 136 |  |
| RayTrace | 112774 | 117584 | 120692 | 72075 | 68227 | 65489 | 68011 | 65785 | 34631 | 27057 | 28313 | 26882 | 14208 | 1291 | 1568 | 1127 | 906 | 1066 | 892 | 679 | 876 | 701 | 572 | 577 | 535 | 522 | 485 | 435 | 271 | 500 | 250 | 164 | 137 | 351 | 85 |  | 428 |  |
| EarleyBoyer | 88314 | 68832 | 67354 | 69227 | 71558 | 72270 | 74215 | 68756 | 7111 | 38608 | 36766 | 36243 | 27877 | 1535 | 3375 | 1864 | 1463 | 1759 | 1385 | 1677 | 1339 | 1223 | 772 | 571 | 548 | 536 | 500 | 582 | 500 | 324 | 282 | 190 | 136 |  | 77 |  | 409 |  |
| RegExp | 10504 | 21478 | 18839 | 10284 | 10062 | 9971 | 9961 | 8775 | 7811 | 8430 | 8974 | 8857 | 1356 | 529 | 560 | 255 | 225 | 224 | 232 | 116 | 226 | 183 | 62 | 125 | 241 | 216 | 198 | 463 | 207 | 96 | 250 | 49 | 92 |  |  |  |  |  |
| Splay | 42832 | 35506 | 35840 | 38692 | 37641 | 35612 | 28432 | 33061 | 19538 | 23926 | 12142 | 11988 | 2420 | 3558 | 3529 | 2318 | 1786 | 1917 | 1734 | 2062 | 1453 | 1659 | 1213 | 1286 | 781 | 847 | 1206 | 927 | 904 | 381 | 463 | 215 | 316 |  | 58 |  | 841 |  |
| NavierStokes | 38881 | 39988 | 40096 | 38881 | 38732 | 38765 | 38803 | 38469 | 36693 | 22319 | 22067 | 21941 | 14366 | 10801 | 1865 | 944 | 1320 | 970 | 883 | 1221 | 953 | 931 | 1538 | 906 | 474 | 478 | 475 | 179 | 200 | 819 | 167 | 177 | 119 |  | 51 |  | 282 |  |
| Score | 48340 | 47775 | 47409 | 40935 | 40636 | 39639 | 39030 | 38783 | 20066 | 18737 | 17198 | 17188 | 11167 | 2449 | 1530 | 858 | 835 | 833 | 727 | 726 | 716 | 648 | 565 | 496 | 383 | 376 | 373 | 298 | 274 | 264 | 189 | 105 | 104 |  |  |  |  |  |
| Score/MB | 850 | 485 | 1302 | 626 | 381 | 321 | 588 | 953 | 1033 | 472 | 488 | 337 | 55 | 2 | 42 | 69 | 195 | 161 | 895 | 86 | 531 | 328 | 12 | 233 | 878 | 562 | 921 | 113011 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 38 | 33 | 46 | 48 | 50 | 52 | 61 | 52 | 58 | 87 | 69 | 80 | 82 | 86 | 96 | 114 | 131 | 143 | 236 | 236 | 31 | 428 |  | 87 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bare | bun | deno | dune | node | spidermonkey | spiderfire | mozjs | graaljs | hermes | txiki.js | primjs | jjs | llrt | quickjs | quickjs-ng | njs | rquickjs | ladybird | duktape | mujs | ringo | xst | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.81 |  |  | 1.2.20 | 2.4.4 | 0.10.1 | 24.6.0 | 142.0 |  |  | 24.1.2 | 0.12.0 | 24.12.0 |  |  | 0.6.2.beta | 2025.04.26 | 0.8.0 | 0.9.2 |  |  | 2.99.99 | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 45.6M | 56.8M | 85.6M | 56.8M | 111.5M | 131.2M | 46.3M | 32.8M | 194M | 15.7M | 3.6M | 1.8M | 0 | 10.5M | 975.9K | 4.1M | 2.4M | 1.2M | 41.5M | 562.1K | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 41.1M | 0.2K | 45.6M | 56.8M | 85.6M | 56.8M | 111.5M | 65.6M | 46.3M | 32.8M | 147.4K | 7.9M | 3.6M | 1.8M | 0 | 10.5M | 975.9K | 2.1M | 1.8M | 1.2M | 41.5M | 562.1K | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 0 | 2.1M | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40989 | 34945 | 41840 | 47326 | 36425 | 36312 | 34261 | 11731 | 13567 | 11763 | 34617 | 1250 | 1181 | 868 | 565 | 710 | 1073 | 1241 | 661 | 827 | 771 | 469 | 299 | 200 | 104 | 247 | 145 | 82 | 34 | 194 | 25 |  | 125 |
| DeltaBlue | 127608 | 51036 | 103263 | 61880 | 81285 | 87732 | 67949 | 14143 | 14771 | 13574 | 43393 | 1064 | 1089 | 1026 | 755 | 851 | 1081 | 1112 | 641 | 758 | 673 | 553 | 499 | 217 | 187 | 249 | 138 | 73 | 27 | 209 | 34 |  | 164 |
| Crypto | 58826 | 62471 | 54623 | 45885 | 47552 | 49962 | 37988 | 21645 | 17894 | 18411 | 28499 | 1244 | 1117 | 1336 | 9991 | 870 | 1288 | 865 | 994 | 764 | 1408 | 1140 | 273 | 156 | 447 | 131 | 109 | 97 | 35 | 229 | 33 |  | 118 |
| RayTrace | 147628 | 149330 | 74295 | 108704 | 70595 | 79623 | 58681 | 41250 | 36555 | 32790 | 1014 | 1811 | 1996 | 1312 | 920 | 1740 | 1170 | 1160 | 874 | 1079 | 1004 | 795 | 874 | 718 | 657 | 408 | 284 | 178 | 35 | 254 | 124 |  | 502 |
| EarleyBoyer | 108380 | 85873 | 76144 | 59654 | 75192 | 71030 | 64303 | 36792 | 41659 | 36994 | 33099 | 4689 | 2746 | 1660 | 892 | 2627 | 1853 | 1821 | 2201 | 1711 | 1180 | 903 | 834 | 723 | 356 | 634 | 350 | 184 | 71 |  | 104 |  | 615 |
| RegExp | 13855 | 21114 | 12146 | 17075 | 10203 | 9283 | 8732 | 10921 | 8529 | 9900 | 934 | 606 | 294 | 229 | 350 | 274 | 222 | 211 | 190 | 221 | 86 | 194 | 297 | 605 | 248 | 248 | 177 | 118 | 13 |  |  |  |  |
| Splay | 54265 | 28210 | 37168 | 27324 | 37233 | 22166 | 24847 | 21856 | 15679 | 13301 | 1963 | 2697 | 3243 | 3993 | 1132 | 3965 | 2256 | 1799 | 1753 | 1612 | 1244 | 1654 | 931 | 678 | 391 | 1200 | 470 | 521 | 144 |  | 81 |  | 904 |
| NavierStokes | 31335 | 33996 | 36358 | 29028 | 35805 | 28851 | 34961 | 19273 | 19787 | 19472 | 29473 | 1182 | 1930 | 3323 | 3483 | 1561 | 2040 | 1658 | 1672 | 1264 | 1480 | 1118 | 605 | 186 | 1011 | 255 | 138 | 179 | 73 |  | 75 |  | 273 |
| Score | 57286 | 48158 | 46515 | 43052 | 42256 | 38992 | 35515 | 19948 | 18620 | 17585 | 9689 | 1511 | 1397 | 1294 | 1218 | 1192 | 1162 | 1059 | 905 | 892 | 780 | 725 | 515 | 358 | 345 | 335 | 199 | 147 | 43 |  |  |  |  |
| Score/MB | 1395 | 293589087 | 1021 | 757 | 493 | 686 | 318 | 152 | 401 | 535 | 49 | 96 | 387 | 735 |  | 113 | 1219 | 256 | 377 | 755 | 18 | 1320 | 1229 | 135764 | 214 | 26 | 2 | 11 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 33 | 38 | 41 | 48 | 41 | 42 | 44 | 52 | 48 | 70 | 54 | 61 | 90 | 106 | 96 | 144 | 174 | 633 | 40 | 336 |  | 87 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | mujs | mujs-pgo | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.81 |  |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 |  | 1.3.5 |  | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.1M | 122.1M | 55.8M | 132.7M | 143.1M | 116.3M | 77.6M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 37M | 42.2M | 9M | 8M | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 26.1M | 112.9M | 110.8M | 85.3M | 47.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 1.3M | 692.1K | 744.6K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 25M | 121.7M | 29.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 31.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38458 | 36315 | 32866 | 36170 | 32651 | 33089 | 32930 | 23306 | 13238 | 14523 | 41547 | 3174 | 695 | 508 | 448 | 388 | 433 | 378 | 243 | 226 | 212 | 181 | 106 | 55 | 49 |  | 21 |  |  |
| DeltaBlue | 110662 | 46964 | 74191 | 42111 | 70006 | 76009 | 72102 | 28953 | 13283 | 12748 | 31844 | 218 | 614 | 463 | 410 | 377 | 403 | 416 | 350 | 319 | 260 | 231 | 118 | 50 | 41 |  | 23 |  |  |
| Crypto | 40871 | 47684 | 41910 | 47498 | 42013 | 42057 | 42115 | 33473 | 20373 | 18140 | 20362 | 2900 | 785 | 539 | 427 | 428 | 365 | 318 | 182 | 188 | 317 | 114 | 88 | 59 | 74 |  | 27 |  |  |
| RayTrace | 113662 | 104560 | 72297 | 83471 | 69115 | 64083 | 67413 | 47507 | 26391 | 26660 | 3176 | 1441 | 1007 | 515 | 717 | 594 | 578 | 553 | 487 | 459 | 440 | 234 | 265 | 132 | 134 |  | 74 |  |  |
| EarleyBoyer | 83037 | 63285 | 69721 | 59637 | 74840 | 70424 | 74816 | 42596 | 39340 | 36811 | 21882 | 1518 | 2243 | 1001 | 1108 | 1000 | 983 | 868 | 593 | 568 | 518 | 470 | 295 | 126 | 142 |  | 70 |  |  |
| RegExp | 10173 | 17893 | 9728 | 17365 | 9709 | 9880 | 9799 | 9709 | 9083 | 8801 | 914 | 938 | 403 | 190 | 196 | 194 | 186 | 150 | 200 | 253 | 110 | 201 | 280 | 90 | 43 |  |  |  |  |
| Splay | 43907 | 36247 | 39254 | 33582 | 34243 | 34560 | 28277 | 16966 | 23608 | 15174 | 2868 | 4775 | 2402 | 1044 | 1417 | 1311 | 1002 | 941 | 1206 | 1198 | 1002 | 826 | 525 | 326 | 171 |  | 57 |  |  |
| NavierStokes | 38881 | 38139 | 39099 | 33984 | 38951 | 38990 | 38990 | 37026 | 22534 | 22193 | 25796 | 3796 | 1082 | 1036 | 740 | 716 | 678 | 727 | 475 | 476 | 1081 | 193 | 151 | 115 | 165 |  | 48 |  |  |
| Score | 48070 | 43705 | 40808 | 40429 | 39907 | 39847 | 39087 | 26956 | 19135 | 17731 | 10299 | 1714 | 971 | 583 | 580 | 536 | 510 | 472 | 388 | 388 | 384 | 253 | 193 | 99 | 88 |  |  |  |  |
| Score/MB | 887 | 358 | 731 | 304 | 278 | 342 | 503 | 1871 | 374 | 243 | 52 | 97 | 8 | 49 | 15 | 12 | 56 | 58 | 51 | 51 | 50 | 12 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 35 | 42 | 58 | 60 | 60 | 63 | 69 | 83 | 78 | 84 | 120 | 148 | 247 | 280 | 131 | 459 |  |  |
