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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47696<br>36.5M<br>1305/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47380<br>98.6M<br>480/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47168<br>58.1M<br>811/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41983<br>108.8M<br>385/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39388<br>123.3M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39106<br>40.7M<br>961/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 35140<br>66.3M<br>529/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20155<br>19.4M<br>1038/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19421<br>39.8M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17102<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16950<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11410<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2544<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1520<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 862<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 748<br>1.4M<br>531/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 736<br>1.4M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 726<br>831.3K<br>894/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 538<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 482<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 475<br>2.1M<br>223/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 402<br>446.6K<br>921/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 360<br>685K<br>538/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 344<br>414.5K<br>849/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 282<br>2.7K<br>106943/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 182<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/13/2025, 1:43:17 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | njs | rquickjs | primjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.21 | 14.2.0 | 2.5.0 | 24.8.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  |  | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 98.6M | 58.1M | 108.8M | 123.3M | 40.7M | 66.3M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 1.4M | 831.3K | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 98.6M | 1M | 108.8M | 123.3M | 40.7M | 66.3M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 1.4M | 831.3K | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40897 | 40163 | 38038 | 35200 | 32262 | 32019 | 32273 | 23525 | 13221 | 14258 | 12882 | 35782 | 13775 | 1130 | 686 | 680 | 708 | 577 | 553 | 533 | 593 | 580 | 481 | 324 | 286 | 272 | 247 | 228 | 129 | 199 | 90 | 101 | 60 | 59 | 268 | 28 |  | 129 |  |
| DeltaBlue | 54534 | 53225 | 100585 | 78171 | 71236 | 74257 | 74343 | 25180 | 13574 | 12972 | 12847 | 26533 | 323 | 1045 | 663 | 671 | 678 | 567 | 542 | 570 | 599 | 578 | 446 | 385 | 325 | 355 | 356 | 321 | 178 | 249 | 162 | 109 | 54 | 54 | 277 | 33 |  | 173 |  |
| Crypto | 50115 | 48790 | 41303 | 41783 | 41572 | 40861 | 41603 | 31966 | 20159 | 17934 | 17489 | 13010 | 9920 | 1350 | 586 | 754 | 596 | 527 | 880 | 552 | 514 | 379 | 867 | 406 | 783 | 187 | 188 | 183 | 139 | 122 | 326 | 94 | 81 | 62 | 293 | 35 |  | 134 |  |
| RayTrace | 119360 | 119508 | 111294 | 71113 | 65637 | 66969 | 67487 | 35889 | 27768 | 26566 | 28416 | 6142 | 1187 | 1554 | 1141 | 910 | 1075 | 922 | 685 | 893 | 895 | 724 | 550 | 451 | 587 | 515 | 516 | 470 | 429 | 271 | 500 | 249 | 164 | 133 | 354 | 92 |  | 418 |  |
| EarleyBoyer | 70552 | 66395 | 82940 | 76326 | 72346 | 69318 | 72887 | 7051 | 41405 | 36416 | 36979 | 26995 | 534 | 3372 | 1849 | 1435 | 1727 | 1336 | 1688 | 1239 | 1358 | 1213 | 745 | 857 | 560 | 528 | 514 | 466 | 577 | 496 | 322 | 281 | 188 | 133 |  | 81 |  | 509 |  |
| RegExp | 19709 | 20729 | 10323 | 10132 | 9861 | 8965 | 10072 | 7788 | 9001 | 8892 | 8874 | 1369 | 956 | 545 | 255 | 223 | 225 | 219 | 115 | 222 | 229 | 183 | 64 | 180 | 127 | 237 | 216 | 199 | 458 | 206 | 95 | 244 | 49 | 92 |  |  |  |  |  |
| Splay | 35970 | 37021 | 41927 | 39376 | 33371 | 35196 | 12115 | 19786 | 24284 | 11645 | 11495 | 2967 | 4327 | 3427 | 2285 | 1750 | 1887 | 2157 | 2041 | 2145 | 1721 | 1638 | 944 | 1239 | 909 | 1281 | 619 | 701 | 651 | 776 | 378 | 421 | 202 | 337 |  | 138 |  | 724 |  |
| NavierStokes | 40136 | 39988 | 38803 | 38765 | 38803 | 38436 | 38803 | 36878 | 22260 | 22024 | 21963 | 34543 | 15122 | 1824 | 929 | 1300 | 970 | 980 | 1216 | 968 | 888 | 928 | 1527 | 673 | 943 | 462 | 479 | 475 | 172 | 199 | 864 | 159 | 175 | 119 |  | 55 |  | 265 |  |
| Score | 47696 | 47380 | 47168 | 41983 | 39388 | 39106 | 35140 | 20155 | 19421 | 17102 | 16950 | 11410 | 2544 | 1520 | 862 | 832 | 827 | 748 | 737 | 736 | 726 | 648 | 538 | 482 | 475 | 402 | 360 | 344 | 282 | 267 | 265 | 182 | 104 | 104 |  |  |  |  |  |
| Score/MB | 1305 | 480 | 811 | 385 | 319 | 961 | 529 | 1038 | 487 | 335 | 481 | 57 | 2 | 42 | 70 | 194 | 160 | 531 | 87 | 528 | 894 | 328 | 11 |  | 223 | 921 | 538 | 849 | 106943 | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 40 | 33 | 47 | 49 | 50 | 53 | 61 | 53 | 53 | 59 | 87 | 64 | 70 | 82 | 82 | 86 | 103 | 114 | 131 | 146 | 237 | 239 | 31 | 375 |  | 89 | 7 |
### macos-arm64
| Engine | bun | v8 | JavaScriptCore | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | primjs | llrt | quickjs-ng | quickjs | rquickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 | 14.2.120 |  | 2.5.0 | 0.10.1 | 24.8.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 24.12.0 |  | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 | 2.99.99 |  |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 41.6M | 0.2K | 87.9M | 56.8M | 111.8M | 131.7M | 32.8M | 46.3M | 194M | 0 | 15.7M | 3.6M | 1.8M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 56.8M | 41.6M | 0.2K | 87.9M | 56.8M | 111.8M | 65.9M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 1.8M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 47283 | 43552 | 48470 | 52882 | 46990 | 38606 | 12952 | 13669 | 11826 | 26222 | 17093 | 1101 | 1232 | 892 | 641 | 1166 | 743 | 737 | 748 | 489 | 793 | 578 | 363 | 102 | 247 | 122 | 133 | 98 | 31 | 178 | 36 |  | 210 |
| DeltaBlue | 69920 | 106688 | 67368 | 101068 | 103052 | 82833 | 13177 | 16794 | 12953 | 18658 | 689 | 879 | 1111 | 1029 | 982 | 1001 | 941 | 785 | 762 | 561 | 694 | 643 | 442 | 196 | 314 | 201 | 131 | 66 | 39 | 194 | 44 |  | 209 |
| Crypto | 61227 | 47070 | 59576 | 50659 | 57755 | 53611 | 20715 | 20670 | 19319 | 33718 | 11392 | 1159 | 1030 | 1493 | 854 | 1019 | 1249 | 930 | 1146 | 1128 | 1202 | 538 | 257 | 375 | 155 | 124 | 108 | 92 | 36 | 227 | 53 |  | 131 |
| RayTrace | 153178 | 110776 | 126834 | 75553 | 89021 | 78809 | 36481 | 37739 | 38885 | 900 | 1140 | 2107 | 1898 | 1334 | 1841 | 1207 | 1085 | 1287 | 801 | 882 | 781 | 776 | 721 | 628 | 253 | 604 | 301 | 162 | 38 | 293 | 123 |  | 623 |
| EarleyBoyer | 89854 | 99651 | 78999 | 90558 | 91485 | 81768 | 47914 | 46162 | 43884 | 14164 | 1275 | 3903 | 2742 | 1256 | 2544 | 2108 | 1533 | 1732 | 2120 | 1037 | 1034 | 1285 | 824 | 375 | 553 | 612 | 348 | 182 | 73 |  | 104 |  | 660 |
| RegExp | 25537 | 13910 | 27876 | 12872 | 11535 | 11796 | 11127 | 11319 | 11251 | 1330 | 593 | 560 | 274 | 245 | 275 | 230 | 243 | 229 | 191 | 217 | 86 | 242 | 291 | 294 | 223 | 456 | 205 | 137 | 13 |  |  |  |  |
| Splay | 37301 | 55724 | 39222 | 43549 | 25547 | 33411 | 23526 | 16338 | 14562 | 2293 | 1777 | 3663 | 2727 | 4148 | 3692 | 2062 | 1842 | 2214 | 1886 | 1687 | 1500 | 1674 | 886 | 464 | 1016 | 668 | 602 | 455 | 153 |  | 183 |  | 912 |
| NavierStokes | 34280 | 37433 | 29414 | 35877 | 33882 | 36358 | 19826 | 20714 | 17921 | 22808 | 4836 | 1358 | 1521 | 3283 | 1629 | 1929 | 1890 | 1482 | 1647 | 1195 | 1495 | 890 | 631 | 1018 | 243 | 160 | 174 | 210 | 71 |  | 87 |  | 297 |
| Score | 55573 | 53787 | 53045 | 49705 | 46731 | 44662 | 20572 | 20539 | 18680 | 7864 | 2369 | 1501 | 1304 | 1290 | 1195 | 1136 | 1026 | 987 | 949 | 770 | 753 | 720 | 501 | 354 | 313 | 293 | 213 | 148 | 45 |  |  |  |  |
| Score/MB | 978 | 1294 | 323382057 | 565 | 822 | 399 | 156 | 625 | 403 | 40 |  | 95 | 361 | 733 | 113 | 275 | 1076 | 825 | 396 | 1402 | 18 |  | 1195 | 224 | 24 | 111114 | 2 | 11 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 39 | 33 | 40 | 41 | 39 | 42 | 42 | 45 | 51 | 50 | 68 | 52 | 62 | 99 | 103 | 112 | 133 | 162 | 608 | 36 | 274 |  | 79 |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.120 |  | 2.5.0 | 1.2.21 | 24.8.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.7M | 122.1M | 145.7M | 132.8M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.4M | 112.8M | 37.3M | 11.8M | 9.2M | 42.2M | 9M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.7M | 339.5K | 113.4M | 113M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 1.7M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.8M | 32.3M | 19.8M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.4M | 109.8M | 31.6M | 6.9M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38603 | 35768 | 33438 | 36968 | 32270 | 33445 | 24662 | 13634 | 14050 | 35856 | 4565 | 695 | 448 | 511 | 395 | 391 | 445 | 431 | 387 | 229 | 212 | 233 | 194 | 100 | 55 | 49 |  | 24 |  |  |
| DeltaBlue | 109194 | 49469 | 75758 | 46216 | 74489 | 74779 | 29793 | 13548 | 13052 | 26804 | 304 | 626 | 403 | 465 | 403 | 377 | 476 | 403 | 394 | 318 | 264 | 337 | 230 | 115 | 51 | 41 |  | 29 |  |  |
| Crypto | 40780 | 50086 | 42116 | 44260 | 41990 | 41147 | 33351 | 20429 | 18057 | 24615 | 2529 | 784 | 428 | 526 | 513 | 428 | 326 | 370 | 430 | 187 | 318 | 182 | 115 | 92 | 58 | 75 |  | 38 |  |  |
| RayTrace | 111442 | 105892 | 71853 | 88207 | 65785 | 66821 | 48617 | 27722 | 27352 | 4366 | 2660 | 1005 | 737 | 547 | 602 | 591 | 592 | 580 | 464 | 472 | 440 | 483 | 230 | 271 | 132 | 134 |  | 91 |  |  |
| EarleyBoyer | 84517 | 64013 | 76722 | 59314 | 69393 | 73820 | 43924 | 41653 | 36763 | 27446 | 797 | 2252 | 1140 | 1005 | 1010 | 1013 | 947 | 992 | 886 | 585 | 527 | 586 | 459 | 298 | 127 | 146 |  | 78 |  |  |
| RegExp | 9971 | 18839 | 10102 | 17946 | 9971 | 9499 | 10112 | 9227 | 8810 | 1081 | 1078 | 406 | 196 | 180 | 158 | 168 | 156 | 185 | 181 | 258 | 109 | 203 | 200 | 274 | 91 | 43 |  |  |  |  |
| Splay | 42946 | 35923 | 38358 | 34071 | 34332 | 28954 | 18159 | 24529 | 14921 | 2962 | 5659 | 2471 | 1491 | 1048 | 1301 | 1335 | 1286 | 1009 | 1291 | 1189 | 1001 | 1189 | 853 | 546 | 330 | 172 |  | 136 |  |  |
| NavierStokes | 38912 | 33996 | 38765 | 34098 | 38951 | 38951 | 36952 | 22364 | 22149 | 28613 | 3602 | 1080 | 742 | 1038 | 744 | 713 | 763 | 685 | 722 | 474 | 1088 | 478 | 195 | 151 | 114 | 166 |  | 59 |  |  |
| Score | 47739 | 43910 | 41521 | 41167 | 39678 | 39078 | 27784 | 19631 | 17714 | 11267 | 1891 | 978 | 587 | 583 | 543 | 528 | 526 | 512 | 510 | 391 | 386 | 383 | 255 | 193 | 99 | 88 |  |  |  |  |
| Score/MB | 872 | 359 | 285 | 309 | 340 | 503 | 1928 | 383 | 243 | 57 | 108 | 8 | 15 | 49 | 59 | 12 | 58 | 57 |  | 51 | 50 | 50 | 13 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 42 | 59 | 60 | 62 | 62 | 66 | 62 | 63 | 78 | 83 | 83 | 121 | 146 | 247 | 275 | 130 | 367 |  |  |
