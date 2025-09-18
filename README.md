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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47514<br>57.3M<br>829/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47299<br>36.6M<br>1291/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46975<br>98.9M<br>475/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42035<br>108.9M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40505<br>65.3M<br>619/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39294<br>123.3M<br>318/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39018<br>66.3M<br>588/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38606<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19949<br>19.4M<br>1027/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19462<br>40M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17118<br>35.2M<br>486/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16935<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10600<br>199.7M<br>53/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2251<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1511<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 869<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 834<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 823<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 771<br>831.3K<br>949/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 748<br>1.4M<br>531/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 741<br>1.4M<br>532/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 652<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 633<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 488<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 461<br>2.1M<br>216/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 392<br>446.6K<br>898/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 372<br>685K<br>556/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 340<br>414.5K<br>839/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 291<br>2.7K<br>110356/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 269<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/18/2025, 1:45:09 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | bare | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.0 |  | 1.2.22 | 2.5.1 |  | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.3M | 36.6M | 98.9M | 108.9M | 65.3M | 123.3M | 66.3M | 40.7M | 19.4M | 40M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.6M | 98.9M | 108.9M | 65.3M | 123.3M | 66.3M | 40.7M | 571K | 40M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 56.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37830 | 40626 | 41123 | 35683 | 31302 | 32397 | 32146 | 32503 | 23416 | 13634 | 13224 | 14386 | 35591 | 10905 | 1137 | 690 | 681 | 711 | 631 | 572 | 534 | 567 | 584 | 557 | 345 | 259 | 279 | 245 | 226 | 121 | 203 | 90 | 105 | 60 | 59 | 270 | 28 |  | 129 |  |
| DeltaBlue | 110014 | 57410 | 54937 | 78720 | 75394 | 71553 | 74290 | 74892 | 25353 | 13640 | 12893 | 13025 | 24748 | 223 | 1048 | 669 | 663 | 680 | 626 | 580 | 570 | 547 | 581 | 512 | 385 | 307 | 362 | 358 | 301 | 165 | 250 | 161 | 111 | 54 | 55 | 278 | 34 |  | 178 |  |
| Crypto | 38322 | 51559 | 49072 | 41348 | 41548 | 41723 | 41812 | 41242 | 31961 | 20326 | 17972 | 17515 | 16669 | 7151 | 1363 | 584 | 762 | 593 | 560 | 533 | 558 | 883 | 379 | 841 | 411 | 794 | 187 | 190 | 184 | 146 | 122 | 321 | 96 | 79 | 62 | 293 | 36 |  | 136 |  |
| RayTrace | 111664 | 117954 | 116030 | 71261 | 71483 | 64823 | 67265 | 66828 | 33562 | 27426 | 28091 | 26734 | 5740 | 1237 | 1500 | 1149 | 909 | 1036 | 961 | 899 | 893 | 681 | 742 | 770 | 456 | 563 | 530 | 524 | 482 | 430 | 269 | 498 | 254 | 163 | 136 | 342 | 98 |  | 426 |  |
| EarleyBoyer | 86371 | 66989 | 66378 | 76375 | 68711 | 68733 | 72859 | 70033 | 7048 | 41676 | 36559 | 36474 | 36003 | 2070 | 3365 | 1862 | 1471 | 1743 | 1403 | 1372 | 1251 | 1664 | 1216 | 978 | 848 | 548 | 548 | 518 | 494 | 601 | 494 | 323 | 281 | 185 | 132 |  | 86 |  | 499 |  |
| RegExp | 10584 | 19365 | 20204 | 10001 | 10323 | 9991 | 10092 | 8883 | 7713 | 8719 | 8992 | 8810 | 869 | 707 | 550 | 253 | 230 | 228 | 233 | 214 | 226 | 116 | 179 | 63 | 180 | 130 | 226 | 214 | 196 | 435 | 202 | 96 | 249 | 48 | 91 |  |  |  |  |  |
| Splay | 41161 | 33850 | 34373 | 39776 | 37624 | 34022 | 28057 | 35204 | 19669 | 24529 | 11795 | 10908 | 1997 | 2355 | 3263 | 2326 | 1778 | 1817 | 1842 | 2145 | 2194 | 2033 | 1674 | 1446 | 1207 | 886 | 935 | 785 | 643 | 909 | 848 | 369 | 475 | 213 | 313 |  | 136 |  | 847 |  |
| NavierStokes | 38765 | 40216 | 39988 | 38765 | 38732 | 38803 | 38765 | 33586 | 36841 | 22275 | 22090 | 22002 | 30274 | 8886 | 1846 | 953 | 1241 | 986 | 976 | 980 | 962 | 1218 | 935 | 1537 | 705 | 913 | 478 | 484 | 480 | 171 | 194 | 845 | 162 | 175 | 119 |  | 56 |  | 278 |  |
| Score | 47514 | 47299 | 46975 | 42035 | 40505 | 39294 | 39018 | 38606 | 19949 | 19462 | 17118 | 16935 | 10600 | 2251 | 1511 | 869 | 834 | 823 | 771 | 748 | 741 | 739 | 652 | 633 | 488 | 461 | 392 | 372 | 340 | 291 | 269 | 262 | 188 | 104 | 103 |  |  |  |  |  |
| Score/MB | 829 | 1291 | 475 | 386 | 619 | 318 | 588 | 949 | 1027 | 486 | 486 | 332 | 53 | 1 | 41 | 70 | 195 | 159 | 949 | 531 | 532 | 87 | 330 | 13 |  | 216 | 898 | 556 | 839 | 110356 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 36 | 34 | 46 | 48 | 49 | 50 | 53 | 53 | 61 | 58 | 83 | 63 | 70 | 82 | 81 | 85 | 97 | 115 | 131 | 144 | 240 | 236 | 31 | 359 |  | 88 | 7 |
### macos-arm64
| Engine | JavaScriptCore | deno | bare | v8 | dune | bun | node | mozjs | spiderfire | spidermonkey | graaljs | hermes | primjs | jjs | llrt | quickjs | txiki.js | rquickjs | quickjs-ng | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 2.5.1 |  | 14.2.141 | 0.10.1 | 1.2.22 | 24.8.0 |  |  | 144.0 | 24.1.2 | 0.12.0 |  |  | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.8.0 | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 88M | 45.6M | 41M | 56.8M | 57.1M | 111.8M | 32.8M | 46.3M | 132.5M | 194M | 15.7M | 1.8M | 0 | 10.5M | 975.9K | 3.6M | 1.2M | 4.1M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 0.2K | 88M | 45.6M | 41M | 56.8M | 57.1M | 111.8M | 32.8M | 46.3M | 66.2M | 147.4K | 7.9M | 1.8M | 0 | 10.5M | 975.9K | 3.6M | 1.2M | 2.1M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 0 | 0 | 2.1M | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41042 | 46461 | 34105 | 27320 | 44964 | 43001 | 32944 | 14996 | 15692 | 11960 | 31451 | 1054 | 1089 | 9789 | 932 | 917 | 969 | 945 | 1124 | 741 | 815 | 464 | 540 | 279 | 323 | 198 | 80 | 141 | 101 | 36 | 130 | 42 |  | 210 |
| DeltaBlue | 58224 | 82522 | 87818 | 82833 | 102212 | 61410 | 64888 | 15220 | 16477 | 13984 | 18401 | 1084 | 1212 | 436 | 1041 | 962 | 931 | 984 | 962 | 802 | 755 | 590 | 616 | 388 | 338 | 216 | 153 | 149 | 79 | 40 | 200 | 56 |  | 213 |
| Crypto | 58916 | 49719 | 48165 | 36852 | 54821 | 40313 | 36444 | 17946 | 20954 | 23133 | 26040 | 1296 | 1637 | 3246 | 785 | 1147 | 849 | 771 | 989 | 1192 | 1542 | 1096 | 507 | 203 | 164 | 137 | 279 | 123 | 103 | 42 | 227 | 63 |  | 133 |
| RayTrace | 117510 | 71485 | 78809 | 110628 | 65193 | 109222 | 57514 | 42285 | 39254 | 36999 | 828 | 2061 | 1118 | 645 | 1492 | 1122 | 1587 | 1262 | 1273 | 852 | 1414 | 697 | 725 | 598 | 365 | 689 | 479 | 323 | 220 | 42 | 278 | 146 |  | 629 |
| EarleyBoyer | 84713 | 88043 | 87557 | 78820 | 74442 | 66923 | 70495 | 46864 | 46094 | 42377 | 15678 | 4532 | 1343 | 1063 | 2317 | 1778 | 2416 | 2064 | 1892 | 2299 | 1421 | 784 | 1149 | 620 | 528 | 673 | 305 | 360 | 219 | 80 |  | 103 |  | 667 |
| RegExp | 26430 | 14895 | 13079 | 13221 | 11649 | 18584 | 12443 | 12116 | 11570 | 7259 | 1281 | 669 | 221 | 519 | 261 | 240 | 233 | 230 | 221 | 202 | 95 | 205 | 227 | 231 | 233 | 510 | 259 | 177 | 126 | 13 |  |  |  |  |
| Splay | 36060 | 40110 | 47395 | 45325 | 27699 | 22450 | 28954 | 16689 | 15118 | 13682 | 2058 | 4311 | 3480 | 1369 | 2428 | 1980 | 1659 | 2754 | 1456 | 1508 | 2282 | 1881 | 1471 | 762 | 1047 | 592 | 421 | 505 | 413 | 141 |  | 197 |  | 912 |
| NavierStokes | 24388 | 36322 | 38617 | 33323 | 33142 | 25841 | 35580 | 20586 | 19550 | 16472 | 19886 | 1310 | 3657 | 366 | 1439 | 2075 | 1451 | 1338 | 1441 | 1894 | 1835 | 1420 | 907 | 510 | 294 | 170 | 903 | 160 | 214 | 67 |  | 103 |  | 303 |
| Score | 48878 | 47528 | 47004 | 44183 | 43607 | 41254 | 37663 | 20706 | 20685 | 17766 | 7522 | 1640 | 1318 | 1120 | 1116 | 1090 | 1065 | 1059 | 1022 | 973 | 967 | 740 | 674 | 406 | 354 | 330 | 290 | 214 | 161 | 47 |  |  |  |  |
| Score/MB | 297978475 | 540 | 1031 | 1076 | 767 | 722 | 336 | 630 | 446 | 134 | 38 | 104 | 748 |  | 106 | 1143 | 295 | 885 | 247 | 406 | 23 | 1347 |  | 968 | 27 | 125146 | 183 | 2 | 12 | 44 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 33 | 44 | 55 | 43 | 43 | 44 | 45 | 45 | 48 | 62 | 54 | 56 | 75 | 93 | 102 | 115 | 135 | 153 | 634 | 39 | 245 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | bare | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs-pgo | rquickjs | quickjs-emscripten | quickjs-ng | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.141 |  | 1.2.22 | 2.5.1 |  | 24.8.0 | 0.10.1 | 1.11.24.0 | 144.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  |  | 0.8.0 | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 133.1M | 145.7M | 57M | 116.5M | 77.6M | 14.4M | 52.5M | 72.8M | 196.1M | 17.4M | 112.8M | 37.3M | 11.8M | 42.2M | 9M | 8M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.3M | 339.5K | 113.3M | 113.5M | 26.1M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1M | 1.2M | 0 | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.9M | 19.8M | 32.3M | 30.8M | 31.1M | 30.3M | 14.1M | 18.6M | 30.2M | 195.8M | 17.4M | 109.8M | 31.6M | 6.9M | 29.1M | 7.9M | 6.7M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38493 | 35775 | 36361 | 29862 | 33156 | 33067 | 30469 | 24687 | 13337 | 14177 | 35961 | 7152 | 691 | 452 | 502 | 388 | 448 | 437 | 389 | 416 | 215 | 233 | 229 | 196 | 106 | 54 | 49 |  | 26 |  |  |
| DeltaBlue | 112229 | 46805 | 46785 | 71870 | 77067 | 75665 | 73702 | 28589 | 13468 | 13164 | 32537 | 231 | 624 | 403 | 464 | 377 | 469 | 456 | 394 | 396 | 264 | 344 | 331 | 240 | 117 | 50 | 41 |  | 28 |  |  |
| Crypto | 34228 | 48201 | 43086 | 42060 | 41401 | 41921 | 41943 | 33243 | 20280 | 17460 | 14088 | 2013 | 783 | 423 | 545 | 430 | 327 | 328 | 421 | 370 | 317 | 182 | 190 | 113 | 89 | 59 | 75 |  | 38 |  |  |
| RayTrace | 111294 | 103154 | 98419 | 71483 | 67339 | 54778 | 66821 | 49086 | 27972 | 27278 | 7984 | 1372 | 1002 | 746 | 518 | 587 | 591 | 592 | 458 | 573 | 440 | 469 | 472 | 227 | 259 | 132 | 134 |  | 90 |  |  |
| EarleyBoyer | 84661 | 61940 | 59607 | 77273 | 68688 | 70474 | 72095 | 44518 | 41869 | 36925 | 27130 | 659 | 2241 | 1147 | 999 | 1000 | 941 | 910 | 865 | 975 | 511 | 585 | 575 | 453 | 288 | 125 | 138 |  | 79 |  |  |
| RegExp | 9871 | 18801 | 18456 | 10072 | 9790 | 9991 | 9589 | 9930 | 9019 | 9010 | 1054 | 545 | 402 | 196 | 189 | 182 | 155 | 162 | 180 | 187 | 109 | 205 | 255 | 194 | 277 | 90 | 42 |  |  |  |  |
| Splay | 42318 | 34943 | 34797 | 37000 | 38073 | 33925 | 26607 | 20759 | 22809 | 13495 | 3410 | 3374 | 2380 | 1392 | 1017 | 1319 | 1271 | 1231 | 1285 | 888 | 1018 | 683 | 560 | 833 | 494 | 317 | 184 |  | 128 |  |  |
| NavierStokes | 38694 | 33734 | 40028 | 38881 | 39060 | 38765 | 38912 | 36989 | 21876 | 22171 | 24041 | 2525 | 1086 | 743 | 1032 | 717 | 758 | 762 | 752 | 677 | 1069 | 474 | 472 | 191 | 148 | 115 | 165 |  | 59 |  |  |
| Score | 46673 | 42880 | 42701 | 40490 | 40419 | 38971 | 38169 | 28120 | 19293 | 17513 | 11513 | 1390 | 971 | 583 | 581 | 531 | 524 | 520 | 508 | 499 | 385 | 357 | 357 | 253 | 190 | 98 | 88 |  |  |  |  |
| Score/MB | 859 | 350 | 320 | 277 | 709 | 334 | 491 | 1951 | 367 | 240 | 58 | 80 | 8 | 15 | 49 | 12 | 58 | 65 |  | 55 | 50 | 47 | 47 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 49 | 41 | 60 | 59 | 60 | 67 | 66 | 62 | 63 | 83 | 83 | 78 | 123 | 148 | 247 | 288 | 131 | 364 |  |  |
