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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48122<br>57.1M<br>842/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47559<br>36.5M<br>1303/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47058<br>98.6M<br>477/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40273<br>106.3M<br>378/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39614<br>123.3M<br>321/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38797<br>66.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38565<br>40.7M<br>948/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19947<br>19.4M<br>1027/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19387<br>40.1M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17130<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16976<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10870<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2266<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1494<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 854<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 824<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>831.3K<br>941/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 745<br>1.4M<br>529/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 736<br>1.4M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 736<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 545<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 486<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 481<br>2.1M<br>226/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 374<br>446.6K<br>857/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 373<br>685K<br>557/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 361<br>414.5K<br>891/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 279<br>2.7K<br>105805/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 262<br>13.2M<br>19/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 183<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/1/2025, 2:00:08 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 36.5M | 98.6M | 106.3M | 123.3M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.5M | 98.6M | 106.3M | 123.3M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37604 | 40647 | 40417 | 32142 | 32319 | 33117 | 32365 | 23476 | 13958 | 14343 | 13266 | 35708 | 12105 | 1102 | 688 | 708 | 691 | 626 | 575 | 531 | 559 | 578 | 489 | 341 | 257 | 277 | 245 | 228 | 121 | 89 | 197 | 105 | 60 | 59 | 270 | 26 |  | 121 |  |
| DeltaBlue | 109326 | 56313 | 52676 | 74098 | 73417 | 72644 | 74541 | 24915 | 13409 | 13065 | 12893 | 39426 | 260 | 1059 | 661 | 672 | 653 | 611 | 576 | 571 | 540 | 572 | 459 | 385 | 308 | 359 | 350 | 312 | 172 | 164 | 247 | 113 | 54 | 54 | 279 | 32 |  | 169 |  |
| Crypto | 41385 | 52082 | 49492 | 41297 | 41402 | 41815 | 41308 | 32138 | 20791 | 17556 | 17196 | 27566 | 7892 | 1322 | 573 | 595 | 735 | 554 | 529 | 562 | 883 | 380 | 871 | 409 | 784 | 187 | 189 | 182 | 138 | 323 | 122 | 98 | 80 | 62 | 297 | 31 |  | 133 |  |
| RayTrace | 110924 | 116400 | 115068 | 67857 | 66155 | 67043 | 61641 | 34261 | 27676 | 26835 | 28165 | 3501 | 1239 | 1536 | 1127 | 1057 | 903 | 960 | 910 | 896 | 674 | 738 | 539 | 452 | 559 | 502 | 491 | 434 | 429 | 501 | 253 | 252 | 161 | 135 | 348 | 88 |  | 417 |  |
| EarleyBoyer | 88715 | 66620 | 62854 | 73169 | 70910 | 71642 | 68950 | 7071 | 40332 | 36331 | 36270 | 28929 | 601 | 3381 | 1835 | 1733 | 1438 | 1333 | 1361 | 1222 | 1660 | 1229 | 707 | 853 | 553 | 455 | 454 | 450 | 579 | 321 | 472 | 281 | 180 | 133 |  | 76 |  | 498 |  |
| RegExp | 10385 | 19586 | 21387 | 10102 | 9900 | 10072 | 8719 | 7788 | 8728 | 8892 | 8810 | 756 | 531 | 544 | 253 | 226 | 224 | 243 | 218 | 227 | 115 | 182 | 61 | 179 | 130 | 227 | 209 | 195 | 461 | 95 | 203 | 238 | 48 | 90 |  |  |  |  |  |
| Splay | 42669 | 36245 | 36899 | 36288 | 34316 | 27185 | 34503 | 19436 | 23649 | 11815 | 11861 | 2440 | 5194 | 3191 | 2190 | 1927 | 1731 | 1787 | 2068 | 2135 | 2060 | 1597 | 1177 | 1228 | 1284 | 850 | 1050 | 1226 | 707 | 376 | 790 | 406 | 209 | 338 |  | 83 |  | 833 |  |
| NavierStokes | 38765 | 39880 | 39988 | 38655 | 38732 | 38803 | 38397 | 36358 | 22260 | 22002 | 21963 | 26901 | 13626 | 1786 | 950 | 968 | 1281 | 983 | 967 | 951 | 1219 | 932 | 1442 | 680 | 895 | 465 | 473 | 476 | 157 | 801 | 193 | 161 | 178 | 120 |  | 51 |  | 265 |  |
| Score | 48122 | 47559 | 47058 | 40273 | 39614 | 38797 | 38565 | 19947 | 19387 | 17130 | 16976 | 10870 | 2266 | 1494 | 854 | 827 | 824 | 764 | 745 | 736 | 736 | 647 | 545 | 486 | 481 | 374 | 373 | 361 | 279 | 262 | 262 | 183 | 104 | 104 |  |  |  |  |  |
| Score/MB | 842 | 1303 | 477 | 378 | 321 | 585 | 948 | 1027 | 483 | 335 | 481 | 54 | 1 | 41 | 69 | 160 | 193 | 941 | 529 | 528 | 87 | 327 | 11 |  | 226 | 857 | 557 | 891 | 105805 | 126 | 19 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 44 | 34 | 46 | 50 | 48 | 51 | 53 | 53 | 62 | 58 | 90 | 63 | 70 | 83 | 82 | 87 | 106 | 132 | 118 | 144 | 241 | 238 | 31 | 407 |  | 90 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs-ng | rquickjs | quickjs | ladybird | duktape | njs | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.144 |  | 1.2.21 | 2.4.5 | 24.7.0 | 0.10.1 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 |  | 2025.04.26 |  | 2.99.99 | 0.9.2 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 0.2K | 56.8M | 85.5M | 111.7M | 56.8M | 132.3M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 1.2M | 975.9K | 41.4M | 562.1K | 2.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.3M | 0.2K | 56.8M | 85.5M | 111.7M | 56.8M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 1.2M | 975.9K | 41.4M | 562.1K | 1.8M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 46966 | 52893 | 39485 | 45624 | 42560 | 41123 | 15681 | 14170 | 11625 | 34088 | 18039 | 983 | 1147 | 1326 | 974 | 1294 | 970 | 886 | 823 | 530 | 525 | 586 | 386 | 105 | 300 | 160 | 148 | 85 | 34 | 206 | 37 |  | 164 |
| DeltaBlue | 135529 | 77252 | 51579 | 101597 | 92135 | 79837 | 17455 | 15809 | 12972 | 35591 | 950 | 1023 | 1210 | 1316 | 1090 | 1197 | 1015 | 997 | 740 | 606 | 678 | 642 | 593 | 194 | 263 | 162 | 145 | 85 | 38 | 223 | 48 |  | 173 |
| Crypto | 61914 | 76584 | 61958 | 52952 | 58076 | 50747 | 24149 | 18769 | 18276 | 41384 | 12900 | 971 | 1717 | 1165 | 964 | 1176 | 986 | 1326 | 1619 | 1322 | 1072 | 534 | 289 | 436 | 144 | 115 | 128 | 106 | 34 | 250 | 47 |  | 133 |
| RayTrace | 146814 | 176265 | 144372 | 86505 | 86357 | 82583 | 47655 | 41989 | 40215 | 1146 | 898 | 2474 | 1816 | 2009 | 1895 | 1489 | 1420 | 1149 | 998 | 1052 | 757 | 752 | 921 | 651 | 372 | 437 | 293 | 209 | 36 | 315 | 151 |  | 534 |
| EarleyBoyer | 112734 | 89339 | 88086 | 88320 | 86060 | 92324 | 51541 | 43557 | 43091 | 32850 | 974 | 4906 | 1277 | 3306 | 2818 | 2254 | 2220 | 2191 | 1289 | 1138 | 1743 | 1331 | 1012 | 418 | 699 | 601 | 345 | 216 | 70 |  | 121 |  | 562 |
| RegExp | 15168 | 29577 | 23389 | 13416 | 11037 | 12418 | 13183 | 11501 | 8027 | 1872 | 596 | 682 | 287 | 304 | 296 | 269 | 265 | 266 | 90 | 249 | 174 | 249 | 334 | 298 | 212 | 523 | 181 | 132 | 13 |  |  |  |  |
| Splay | 71492 | 53784 | 44315 | 36663 | 39425 | 19053 | 31472 | 18230 | 13096 | 2870 | 1341 | 4351 | 4583 | 3602 | 2771 | 2204 | 2968 | 2196 | 2212 | 2031 | 1651 | 1799 | 872 | 554 | 834 | 871 | 533 | 452 | 128 |  | 132 |  | 654 |
| NavierStokes | 40580 | 34360 | 35953 | 35066 | 36841 | 32731 | 21454 | 19886 | 17649 | 34280 | 2931 | 1447 | 3921 | 1906 | 1666 | 2053 | 1675 | 2290 | 1733 | 1506 | 1680 | 923 | 751 | 1032 | 254 | 177 | 149 | 184 | 69 |  | 81 |  | 279 |
| Score | 64157 | 63649 | 52733 | 48834 | 47773 | 42083 | 24831 | 20570 | 17516 | 11687 | 2148 | 1634 | 1520 | 1518 | 1286 | 1285 | 1190 | 1187 | 903 | 888 | 838 | 733 | 584 | 377 | 328 | 298 | 211 | 158 | 44 |  |  |  |  |
| Score/MB | 1555 | 388027987 | 928 | 570 | 427 | 741 | 187 | 626 | 377 | 60 |  | 104 | 863 | 420 | 122 | 311 | 994 | 1245 | 21 | 1617 | 349 |  | 1393 | 238 | 25 | 113011 | 2 | 12 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 47 | 32 | 37 | 37 | 39 | 38 | 41 | 41 | 66 | 45 | 55 | 51 | 55 | 92 | 92 | 103 | 138 | 159 | 624 | 34 | 272 |  | 85 |
### windows
| Engine | v8 | JavaScriptCore | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.144 |  | 1.2.21 | 24.7.0 | 2.4.5 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 132.8M | 116.5M | 142.9M | 77.6M | 14.4M | 51.4M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 37.3M | 9.2M | 42.2M | 9M | 9M | 0 | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.3M | 338K | 113M | 85.4M | 110.6M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.4M | 13.1M | 1M | 1.7M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 31.6M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 33032 | 35104 | 36181 | 32866 | 33166 | 32386 | 24517 | 13510 | 13881 | 35965 | 6792 | 687 | 514 | 448 | 392 | 395 | 444 | 427 | 386 | 236 | 204 | 215 | 188 | 102 | 53 | 49 |  | 21 |  |  |
| DeltaBlue | 110516 | 47281 | 42653 | 74138 | 76776 | 75824 | 28808 | 13455 | 13019 | 30196 | 234 | 616 | 465 | 410 | 403 | 370 | 469 | 403 | 398 | 337 | 247 | 310 | 230 | 107 | 51 | 42 |  | 26 |  |  |
| Crypto | 41627 | 48277 | 44349 | 38774 | 42008 | 41136 | 34082 | 20596 | 17534 | 21298 | 2622 | 787 | 550 | 430 | 500 | 427 | 328 | 378 | 425 | 182 | 316 | 188 | 115 | 91 | 59 | 75 |  | 30 |  |  |
| RayTrace | 112626 | 104412 | 99825 | 66747 | 56905 | 67346 | 47312 | 27990 | 26734 | 5803 | 1347 | 1010 | 549 | 734 | 594 | 585 | 585 | 578 | 454 | 475 | 437 | 444 | 233 | 266 | 131 | 133 |  | 82 |  |  |
| EarleyBoyer | 88558 | 64492 | 57552 | 71308 | 71099 | 73353 | 42882 | 41332 | 36079 | 25742 | 916 | 2220 | 1002 | 1140 | 1010 | 985 | 930 | 981 | 875 | 571 | 515 | 498 | 456 | 297 | 124 | 140 |  | 70 |  |  |
| RegExp | 10082 | 18384 | 17075 | 9920 | 9718 | 9689 | 9981 | 9237 | 8775 | 957 | 1003 | 402 | 188 | 196 | 155 | 181 | 155 | 185 | 178 | 199 | 110 | 249 | 198 | 275 | 90 | 43 |  |  |  |  |
| Splay | 43223 | 35946 | 33591 | 33895 | 34805 | 28620 | 19337 | 24056 | 14025 | 2270 | 4686 | 2393 | 1039 | 1425 | 1246 | 1311 | 1263 | 993 | 1227 | 1165 | 992 | 1164 | 886 | 527 | 328 | 187 |  | 85 |  |  |
| NavierStokes | 39099 | 34030 | 38211 | 39029 | 38951 | 35805 | 36803 | 22364 | 22171 | 27157 | 3549 | 1081 | 1039 | 738 | 691 | 716 | 758 | 651 | 752 | 483 | 1070 | 477 | 192 | 149 | 116 | 163 |  | 48 |  |  |
| Score | 47479 | 43201 | 41393 | 39479 | 39310 | 38626 | 27703 | 19571 | 17384 | 10931 | 1745 | 969 | 590 | 584 | 531 | 529 | 522 | 508 | 506 | 381 | 378 | 374 | 255 | 190 | 99 | 88 |  |  |  |  |
| Score/MB | 873 | 353 | 311 | 338 | 275 | 497 | 1922 | 380 | 238 | 55 | 99 | 8 | 50 | 15 | 57 | 12 | 58 | 56 |  | 50 | 49 | 49 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 39 | 42 | 58 | 60 | 63 | 60 | 67 | 62 | 62 | 83 | 84 | 81 | 122 | 149 | 248 | 283 | 130 | 440 |  |  |
