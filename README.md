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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46994<br>36.6M<br>1284/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46970<br>98.9M<br>475/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46949<br>57.4M<br>818/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41785<br>108.8M<br>383/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40529<br>65.3M<br>620/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39272<br>123.3M<br>318/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38444<br>66.3M<br>579/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37594<br>40.7M<br>924/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19703<br>19.4M<br>1015/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19203<br>39.8M<br>482/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17264<br>35.2M<br>490/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17164<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10552<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2498<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1505<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 845<br>12.3M<br>68/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 819<br>4.3M<br>191/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 815<br>5.2M<br>157/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 739<br>1.4M<br>525/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 736<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 724<br>1.4M<br>520/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 715<br>831.3K<br>880/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 639<br>2M<br>323/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 548<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 495<br>2.1M<br>232/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 356<br>414.5K<br>879/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 356<br>446.6K<br>816/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 346<br>685K<br>517/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 271<br>2.7K<br>102771/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 258<br>2.1M<br>123/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 258<br>13.2M<br>19/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/16/2025, 1:47:15 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | njs | rquickjs | primjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs | mujs-pgo | mujs-one | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.22 | 14.2.0 | 2.5.0 |  | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  |  | 0.10.1 |  | 2.99.99 |  | 1.3.5 |  |  | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.6M | 98.9M | 57.4M | 108.8M | 65.3M | 123.3M | 66.3M | 40.7M | 19.4M | 39.8M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 1.4M | 831.3K | 2M | 46.4M | 2.1M | 0 | 414.5K | 446.6K | 685K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 36.6M | 98.9M | 1M | 108.8M | 65.3M | 123.3M | 66.3M | 40.7M | 571K | 39.8M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 8.4M | 1.4M | 831.3K | 2M | 46.4M | 2.1M | 0 | 414.5K | 446.6K | 685K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40283 | 41159 | 36301 | 34095 | 32414 | 32520 | 32284 | 32541 | 23222 | 12769 | 13658 | 13627 | 35719 | 13097 | 1129 | 655 | 682 | 712 | 578 | 561 | 524 | 587 | 577 | 557 | 294 | 344 | 227 | 251 | 245 | 126 | 89 | 195 | 102 | 60 | 58 | 267 | 27 |  | 117 |  |
| DeltaBlue | 55361 | 54098 | 108949 | 80056 | 76961 | 73080 | 70561 | 76836 | 24834 | 13640 | 12953 | 13005 | 37912 | 546 | 1058 | 647 | 645 | 671 | 581 | 536 | 566 | 586 | 582 | 491 | 319 | 384 | 319 | 346 | 350 | 144 | 162 | 243 | 110 | 54 | 54 | 274 | 30 |  | 178 |  |
| Crypto | 51696 | 48646 | 41254 | 41777 | 41699 | 41815 | 41683 | 41176 | 32092 | 20345 | 17337 | 17644 | 28535 | 8234 | 1367 | 594 | 750 | 597 | 516 | 881 | 563 | 512 | 378 | 865 | 802 | 415 | 182 | 183 | 190 | 125 | 322 | 119 | 96 | 79 | 62 | 301 | 35 |  | 136 |  |
| RayTrace | 118990 | 114032 | 110480 | 71483 | 70817 | 66303 | 67265 | 56091 | 33374 | 28165 | 28018 | 27010 | 4443 | 1337 | 1563 | 1129 | 906 | 1024 | 917 | 679 | 888 | 882 | 690 | 561 | 578 | 454 | 419 | 456 | 405 | 416 | 497 | 246 | 249 | 163 | 137 | 349 | 85 |  | 417 |  |
| EarleyBoyer | 64124 | 66299 | 81485 | 74673 | 69746 | 71035 | 71992 | 67964 | 7050 | 41331 | 36149 | 35607 | 20876 | 753 | 3337 | 1813 | 1370 | 1707 | 1261 | 1674 | 1199 | 1308 | 1194 | 743 | 542 | 829 | 440 | 472 | 425 | 547 | 321 | 445 | 274 | 180 | 130 |  | 77 |  | 387 |  |
| RegExp | 19677 | 20477 | 10404 | 9991 | 10233 | 9761 | 9991 | 8758 | 7599 | 8801 | 8866 | 8654 | 794 | 722 | 545 | 252 | 220 | 226 | 216 | 115 | 221 | 223 | 177 | 63 | 133 | 179 | 190 | 228 | 207 | 447 | 96 | 202 | 244 | 48 | 89 |  |  |  |  |  |
| Splay | 34275 | 35392 | 40428 | 39531 | 35685 | 33721 | 26868 | 30258 | 18709 | 22972 | 13087 | 13177 | 2746 | 2852 | 3159 | 2072 | 1713 | 1718 | 2078 | 2041 | 2039 | 1680 | 1610 | 880 | 1217 | 1187 | 1166 | 721 | 733 | 853 | 324 | 825 | 452 | 200 | 333 |  | 125 |  | 810 |  |
| NavierStokes | 40096 | 39920 | 38211 | 38655 | 38803 | 36730 | 38655 | 38359 | 36693 | 22171 | 21898 | 21963 | 19678 | 12410 | 1791 | 960 | 1317 | 1001 | 991 | 1216 | 937 | 895 | 926 | 1471 | 950 | 684 | 479 | 455 | 484 | 147 | 856 | 191 | 160 | 176 | 119 |  | 54 |  | 269 |  |
| Score | 46994 | 46970 | 46949 | 41785 | 40529 | 39272 | 38444 | 37594 | 19703 | 19203 | 17264 | 17164 | 10552 | 2498 | 1505 | 845 | 819 | 815 | 739 | 736 | 724 | 715 | 639 | 548 | 495 | 484 | 356 | 356 | 346 | 271 | 258 | 258 | 184 | 104 | 103 |  |  |  |  |  |
| Score/MB | 1284 | 475 | 818 | 383 | 620 | 318 | 579 | 924 | 1015 | 482 | 490 | 336 | 52 | 2 | 41 | 68 | 191 | 157 | 525 | 87 | 520 | 880 | 323 | 11 | 232 |  | 879 | 816 | 517 | 102771 | 123 | 19 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 42 | 34 | 47 | 50 | 49 | 54 | 61 | 53 | 54 | 59 | 87 | 70 | 63 | 89 | 85 | 85 | 111 | 133 | 120 | 146 | 243 | 238 | 31 | 387 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | bare | v8 | node | deno | bun | dune | mozjs | spidermonkey | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | rquickjs | quickjs | quickjs-ng | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  |  | 14.2.133 | 24.8.0 | 2.5.0 | 1.2.22 | 0.10.1 |  | 143.0 |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta |  | 2025.04.26 | 0.8.0 |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 45.6M | 41M | 111.8M | 87.9M | 57.1M | 56.8M | 32.8M | 131.7M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 1.2M | 975.9K | 4.1M | 41.4M | 2.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 0.2K | 45.6M | 41M | 111.8M | 87.9M | 57.1M | 56.8M | 32.8M | 65.9M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 1.2M | 975.9K | 2.1M | 41.4M | 1.8M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 51093 | 41783 | 39436 | 39083 | 46426 | 45621 | 42595 | 15713 | 12730 | 14276 | 19889 | 6125 | 1224 | 1056 | 1176 | 943 | 897 | 1038 | 884 | 928 | 690 | 478 | 555 | 294 | 314 | 101 | 176 | 147 | 109 | 33 | 171 | 40 |  | 193 |
| DeltaBlue | 66409 | 91044 | 106390 | 94324 | 92307 | 64220 | 82158 | 17773 | 14017 | 14936 | 3187 | 374 | 1020 | 1193 | 1126 | 1025 | 952 | 976 | 864 | 754 | 751 | 559 | 615 | 435 | 357 | 169 | 207 | 159 | 90 | 34 | 197 | 54 |  | 232 |
| Crypto | 62412 | 48517 | 49677 | 55223 | 47544 | 59592 | 43235 | 21510 | 19894 | 17529 | 24815 | 8928 | 1252 | 1637 | 1054 | 925 | 940 | 1171 | 862 | 1563 | 1019 | 1129 | 505 | 230 | 185 | 389 | 139 | 132 | 112 | 39 | 218 | 69 |  | 138 |
| RayTrace | 135788 | 82361 | 123652 | 80733 | 85395 | 101378 | 74591 | 47285 | 48051 | 35149 | 3229 | 2649 | 2161 | 1469 | 1934 | 1702 | 1383 | 1010 | 1145 | 1046 | 871 | 803 | 704 | 749 | 432 | 628 | 759 | 323 | 233 | 38 | 309 | 169 |  | 594 |
| EarleyBoyer | 82371 | 82396 | 107301 | 88669 | 90950 | 69127 | 81357 | 46764 | 48022 | 39455 | 19893 | 1590 | 4163 | 1116 | 2806 | 2522 | 1951 | 1944 | 1750 | 1370 | 2203 | 977 | 1254 | 869 | 744 | 382 | 696 | 362 | 233 | 79 |  | 133 |  | 613 |
| RegExp | 27848 | 13665 | 13624 | 12365 | 11831 | 20406 | 13945 | 12559 | 12068 | 11580 | 1176 | 567 | 606 | 300 | 278 | 280 | 249 | 205 | 201 | 103 | 187 | 238 | 223 | 297 | 289 | 300 | 581 | 188 | 138 | 13 |  |  |  |  |
| Splay | 41878 | 41577 | 18772 | 39865 | 41422 | 31863 | 35253 | 19383 | 19647 | 17064 | 2983 | 1683 | 3600 | 4686 | 2328 | 3834 | 2567 | 1842 | 1604 | 2160 | 1781 | 2200 | 1376 | 864 | 1272 | 456 | 780 | 537 | 479 | 126 |  | 210 |  | 896 |
| NavierStokes | 29206 | 37248 | 36506 | 35171 | 31461 | 27454 | 36249 | 21327 | 19787 | 19659 | 14176 | 2508 | 1391 | 3528 | 1796 | 1559 | 1526 | 1822 | 1610 | 1974 | 1527 | 1490 | 801 | 676 | 312 | 1020 | 162 | 166 | 221 | 67 |  | 108 |  | 294 |
| Score | 54745 | 47634 | 47478 | 47349 | 47143 | 46495 | 44847 | 22637 | 21042 | 19409 | 6880 | 1947 | 1599 | 1423 | 1312 | 1262 | 1098 | 1061 | 954 | 954 | 921 | 810 | 663 | 490 | 408 | 350 | 344 | 223 | 175 | 44 |  |  |  |  |
| Score/MB | 333745890 | 1045 | 1157 | 423 | 536 | 814 | 789 | 689 | 159 | 418 | 35 |  | 101 | 808 | 363 | 120 | 917 | 1113 | 231 | 23 | 384 | 1475 |  | 1169 | 32 | 221 | 130455 | 2 | 14 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 33 | 37 | 39 | 39 | 42 | 44 | 48 | 62 | 51 | 47 | 55 | 60 | 82 | 98 | 98 | 128 | 145 | 609 | 35 | 220 |  | 82 |
### windows
| Engine | v8 | JavaScriptCore | deno | bare | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-emscripten | quickjs-ng | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.133 |  | 2.5.0 |  | 1.2.22 | 24.8.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta |  |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.3M | 122.2M | 145.7M | 55.8M | 133.1M | 116.5M | 77.6M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.4M | 8M | 42.2M | 9M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.3M | 339.5K | 113.4M | 26.1M | 113.3M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.2M | 13.1M | 1M | 0 | 1.7M | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 25M | 121.9M | 32.3M | 29.7M | 19.8M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.7M | 6.7M | 29.1M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38747 | 36541 | 35803 | 32880 | 34949 | 33117 | 33350 | 23942 | 13623 | 14333 | 36032 | 6672 | 707 | 512 | 449 | 447 | 388 | 444 | 379 | 402 | 229 | 240 | 208 | 190 | 107 | 55 | 49 |  | 26 |  |  |
| DeltaBlue | 108830 | 49159 | 82528 | 79685 | 41509 | 75487 | 68783 | 29773 | 11690 | 13191 | 29568 | 244 | 620 | 464 | 396 | 469 | 355 | 469 | 397 | 396 | 306 | 345 | 260 | 237 | 120 | 50 | 42 |  | 30 |  |  |
| Crypto | 41524 | 48016 | 40556 | 41915 | 47092 | 40952 | 42188 | 33437 | 21126 | 17254 | 23347 | 2779 | 786 | 547 | 428 | 328 | 429 | 328 | 428 | 352 | 189 | 183 | 311 | 113 | 89 | 59 | 74 |  | 38 |  |  |
| RayTrace | 112996 | 100934 | 66451 | 72003 | 100861 | 66155 | 67487 | 49579 | 27750 | 26465 | 2399 | 1504 | 1009 | 531 | 733 | 587 | 583 | 589 | 459 | 578 | 457 | 476 | 440 | 231 | 270 | 129 | 133 |  | 89 |  |  |
| EarleyBoyer | 85503 | 63763 | 75209 | 71432 | 57975 | 72588 | 74342 | 43917 | 41847 | 36927 | 28755 | 1185 | 2246 | 991 | 1143 | 940 | 1005 | 940 | 870 | 978 | 566 | 569 | 522 | 462 | 298 | 126 | 142 |  | 78 |  |  |
| RegExp | 10132 | 19346 | 10032 | 9890 | 17400 | 9920 | 9718 | 10193 | 8857 | 8839 | 1040 | 1054 | 403 | 188 | 196 | 162 | 183 | 155 | 180 | 188 | 251 | 197 | 109 | 202 | 283 | 91 | 43 |  |  |  |  |
| Splay | 42872 | 36174 | 37926 | 38741 | 33069 | 33990 | 28489 | 20618 | 24708 | 15247 | 2329 | 5573 | 2299 | 1023 | 1394 | 1263 | 1278 | 1270 | 1241 | 994 | 1157 | 1190 | 1027 | 786 | 444 | 331 | 186 |  | 131 |  |  |
| NavierStokes | 38990 | 33984 | 38881 | 39060 | 34246 | 39029 | 38990 | 36989 | 22445 | 22193 | 25351 | 3913 | 1085 | 1039 | 742 | 769 | 711 | 757 | 754 | 678 | 478 | 484 | 1062 | 195 | 153 | 115 | 163 |  | 59 |  |  |
| Score | 48100 | 43660 | 41536 | 41293 | 40927 | 39935 | 38898 | 28231 | 19292 | 17677 | 10066 | 1921 | 970 | 585 | 581 | 527 | 525 | 524 | 506 | 502 | 384 | 383 | 383 | 253 | 191 | 99 | 88 |  |  |  |  |
| Score/MB | 886 | 357 | 285 | 739 | 307 | 342 | 500 | 1959 | 376 | 242 | 51 | 109 | 8 | 49 | 15 | 66 | 12 | 58 |  | 56 | 50 | 50 | 50 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 42 | 58 | 60 | 66 | 60 | 66 | 62 | 65 | 79 | 83 | 84 | 120 | 147 | 248 | 281 | 129 | 367 |  |  |
