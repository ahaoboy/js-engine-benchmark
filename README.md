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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48275<br>56.9M<br>848/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47314<br>36.4M<br>1299/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47181<br>98.4M<br>479/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40813<br>65.3M<br>624/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40213<br>106.5M<br>377/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39560<br>123.1M<br>321/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39180<br>40.7M<br>963/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39089<br>66.3M<br>589/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19520<br>19.4M<br>1005/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19168<br>40.1M<br>477/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17128<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16906<br>35.2M<br>479/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9740<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2813<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1509<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 869<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 825<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 824<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 756<br>831.3K<br>931/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 743<br>8.4M<br>88/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 720<br>1.4M<br>517/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 642<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 559<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 483<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 466<br>2.1M<br>219/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 363<br>685K<br>542/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 348<br>414.5K<br>859/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 330<br>446.6K<br>756/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 289<br>2.7K<br>109597/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 268<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | High level bindings to the quickjs javascript engine |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/21/2025, 6:34:41 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | njs | rquickjs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-one | mujs | mujs-pgo | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 | 24.6.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  | 0.9.2 |  | 0.10.1 |  |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.9M | 36.4M | 98.4M | 65.3M | 106.5M | 123.1M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.4M | 2M | 46.1M | 0 | 2.1M | 685K | 414.5K | 446.6K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 65.3M | 106.5M | 123.1M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.4M | 2M | 46.1M | 0 | 2.1M | 685K | 414.5K | 446.6K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 55.9M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37766 | 40400 | 40495 | 32390 | 33096 | 32347 | 32676 | 32810 | 23395 | 13432 | 14386 | 12804 | 35754 | 11233 | 1102 | 676 | 696 | 686 | 633 | 568 | 574 | 583 | 480 | 320 | 287 | 240 | 229 | 252 | 135 | 203 | 90 | 104 | 59 | 59 | 270 | 26 |  | 122 |  |
| DeltaBlue | 109855 | 54256 | 52187 | 78423 | 74204 | 73907 | 71599 | 73087 | 24606 | 13508 | 13124 | 12893 | 25978 | 469 | 1024 | 674 | 684 | 666 | 614 | 544 | 559 | 580 | 470 | 376 | 320 | 351 | 320 | 348 | 158 | 249 | 165 | 112 | 54 | 55 | 279 | 30 |  | 175 |  |
| Crypto | 41372 | 51456 | 48978 | 41578 | 40549 | 41467 | 41230 | 41802 | 32030 | 19818 | 17440 | 17518 | 12215 | 9360 | 1363 | 579 | 584 | 750 | 566 | 881 | 556 | 376 | 907 | 408 | 783 | 187 | 183 | 184 | 134 | 120 | 322 | 99 | 79 | 62 | 294 | 31 |  | 134 |  |
| RayTrace | 111294 | 118472 | 117362 | 72149 | 67709 | 63639 | 66229 | 67487 | 34819 | 27325 | 26586 | 27916 | 7828 | 1258 | 1565 | 1164 | 1067 | 899 | 955 | 685 | 873 | 702 | 546 | 448 | 572 | 454 | 430 | 312 | 421 | 266 | 500 | 253 | 162 | 139 | 343 | 87 |  | 422 |  |
| EarleyBoyer | 88517 | 67096 | 67566 | 69662 | 72432 | 70913 | 71808 | 72584 | 7042 | 41177 | 36188 | 37111 | 22130 | 1014 | 3345 | 1882 | 1706 | 1444 | 1335 | 1682 | 1188 | 1201 | 728 | 858 | 532 | 485 | 447 | 401 | 560 | 489 | 323 | 285 | 183 | 134 |  | 76 |  | 500 |  |
| RegExp | 10515 | 19951 | 20820 | 10354 | 10102 | 10052 | 8828 | 10102 | 6903 | 8667 | 8892 | 8910 | 843 | 945 | 557 | 254 | 227 | 216 | 225 | 116 | 218 | 178 | 63 | 177 | 129 | 210 | 190 | 229 | 453 | 207 | 95 | 244 | 49 | 93 |  |  |  |  |  |
| Splay | 42995 | 35041 | 35970 | 36272 | 35718 | 34414 | 35889 | 28318 | 18409 | 23461 | 11986 | 11403 | 2234 | 5297 | 3325 | 2331 | 1872 | 1728 | 1719 | 2096 | 1919 | 1612 | 1217 | 1258 | 831 | 842 | 918 | 645 | 875 | 808 | 355 | 469 | 211 | 317 |  | 82 |  | 843 |  |
| NavierStokes | 38584 | 40068 | 39948 | 38617 | 38803 | 38765 | 38211 | 38803 | 36693 | 22149 | 21941 | 21919 | 21876 | 12441 | 1804 | 951 | 1003 | 1282 | 985 | 1222 | 935 | 933 | 1517 | 704 | 951 | 485 | 476 | 477 | 182 | 199 | 839 | 160 | 175 | 119 |  | 50 |  | 279 |  |
| Score | 48275 | 47314 | 47181 | 40813 | 40213 | 39560 | 39180 | 39089 | 19520 | 19168 | 17128 | 16906 | 9740 | 2813 | 1509 | 869 | 825 | 824 | 756 | 743 | 720 | 642 | 559 | 483 | 466 | 363 | 348 | 330 | 289 | 268 | 262 | 188 | 104 | 104 |  |  |  |  |  |
| Score/MB | 848 | 1299 | 479 | 624 | 377 | 321 | 963 | 589 | 1005 | 477 | 335 | 479 | 48 | 2 | 41 | 70 | 159 | 193 | 931 | 88 | 517 | 325 | 12 |  | 219 | 542 | 859 | 756 | 109597 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 38 | 34 | 47 | 50 | 49 | 52 | 61 | 54 | 59 | 87 | 63 | 70 | 84 | 88 | 86 | 103 | 116 | 132 | 146 | 241 | 236 | 31 | 413 |  | 87 | 7 |
### macos-arm64
| Engine | bun | bare | JavaScriptCore | dune | v8 | deno | node | spidermonkey | spiderfire | mozjs | graaljs | hermes | primjs | jjs | txiki.js | llrt | quickjs-ng | rquickjs | quickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 |  |  | 0.10.1 | 14.1.101 | 2.4.4 | 24.6.0 | 143.0 |  |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 0.6.2.beta | 0.8.0 |  | 2025.04.26 |  | 0.9.2 | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 45.6M | 0.2K | 56.8M | 41.1M | 85.6M | 111.5M | 132.3M | 46.3M | 32.8M | 194M | 15.7M | 1.8M | 0 | 3.6M | 10.5M | 4.1M | 1.2M | 975.9K | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 56.8M | 45.6M | 0.2K | 56.8M | 41.1M | 85.6M | 111.5M | 66.2M | 46.3M | 32.8M | 147.4K | 7.9M | 1.8M | 0 | 3.6M | 10.5M | 2.1M | 1.2M | 975.9K | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 49585 | 37046 | 39224 | 39016 | 34956 | 42906 | 37692 | 8946 | 13376 | 12257 | 34289 | 1167 | 821 | 9468 | 911 | 980 | 1077 | 805 | 836 | 752 | 719 | 443 | 514 | 355 | 316 | 105 | 149 | 113 | 79 | 38 | 164 | 36 |  | 160 |
| DeltaBlue | 51109 | 95501 | 52802 | 91058 | 98794 | 96440 | 72591 | 13382 | 14374 | 12582 | 30606 | 1063 | 1044 | 460 | 882 | 1067 | 985 | 817 | 1044 | 716 | 802 | 569 | 590 | 547 | 371 | 177 | 198 | 114 | 72 | 40 | 190 | 48 |  | 170 |
| Crypto | 63045 | 57529 | 56972 | 55462 | 45978 | 57841 | 55732 | 20169 | 18685 | 15639 | 22979 | 1267 | 1556 | 5405 | 935 | 945 | 923 | 898 | 986 | 1567 | 1086 | 1321 | 498 | 263 | 168 | 361 | 144 | 101 | 99 | 38 | 222 | 44 |  | 119 |
| RayTrace | 140154 | 96347 | 121654 | 85247 | 121876 | 80585 | 77625 | 45805 | 39071 | 37850 | 3474 | 1867 | 1673 | 1383 | 930 | 1718 | 1403 | 1361 | 856 | 1125 | 790 | 1010 | 730 | 770 | 329 | 633 | 598 | 307 | 189 | 37 | 295 | 137 |  | 651 |
| EarleyBoyer | 78334 | 93909 | 79291 | 90685 | 96863 | 85927 | 89749 | 48385 | 45579 | 45541 | 23254 | 4256 | 1338 | 1057 | 2428 | 2548 | 1874 | 2096 | 1890 | 1259 | 1670 | 1084 | 1215 | 831 | 667 | 342 | 668 | 333 | 177 | 78 |  | 119 |  | 646 |
| RegExp | 20123 | 12497 | 22366 | 12819 | 10648 | 10595 | 10616 | 9292 | 11934 | 11296 | 1384 | 648 | 265 | 578 | 287 | 225 | 218 | 252 | 228 | 101 | 168 | 237 | 220 | 299 | 283 | 292 | 521 | 183 | 112 | 14 |  |  |  |  |
| Splay | 43361 | 33525 | 34088 | 29514 | 35400 | 23029 | 35188 | 21913 | 14253 | 14057 | 2270 | 3482 | 4421 | 1149 | 2708 | 1846 | 1680 | 2597 | 1913 | 2135 | 1856 | 2098 | 1402 | 1019 | 1050 | 418 | 901 | 528 | 392 | 143 |  | 126 |  | 1018 |
| NavierStokes | 29591 | 36506 | 28344 | 35397 | 27520 | 35545 | 33471 | 17832 | 17459 | 15879 | 22570 | 1223 | 3234 | 424 | 1702 | 1087 | 1948 | 1256 | 1862 | 1802 | 1548 | 1458 | 754 | 630 | 267 | 976 | 189 | 170 | 181 | 66 |  | 79 |  | 317 |
| Score | 50933 | 47997 | 47191 | 46100 | 45825 | 44126 | 43693 | 19322 | 19268 | 17888 | 10412 | 1557 | 1354 | 1328 | 1106 | 1088 | 1079 | 1041 | 1015 | 908 | 891 | 847 | 648 | 530 | 369 | 339 | 333 | 196 | 140 | 46 |  |  |  |  |
| Score/MB | 896 | 1053 | 287693895 | 811 | 1114 | 515 | 391 | 146 | 415 | 545 | 53 | 99 | 769 |  | 306 | 103 | 261 | 870 | 1064 | 21 | 371 | 1542 |  | 1264 | 28 | 214 | 126284 | 2 | 11 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 33 | 38 | 46 | 41 | 44 | 45 | 43 | 44 | 62 | 56 | 47 | 55 | 60 | 91 | 99 | 98 | 141 | 171 | 603 | 38 | 287 |  | 78 |
### windows
| Engine | v8 | JavaScriptCore | bare | node | bun | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | quickjs-ng | quickjs-emscripten | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.101 |  |  | 24.6.0 | 1.2.20 | 2.4.4 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 57M | 116.4M | 132.7M | 143.1M | 77.6M | 14.4M | 51.5M | 72.8M | 196.1M | 17.4M | 112.8M | 37M | 11.8M | 9.2M | 42.2M | 9M | 0 | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 26.1M | 85.3M | 112.9M | 110.8M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1.7M | 0 | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 30.8M | 31.1M | 19.8M | 32.3M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.4M | 109.8M | 31.3M | 6.9M | 7.8M | 29.1M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38486 | 36594 | 32107 | 33159 | 31804 | 32937 | 33350 | 24401 | 13905 | 14230 | 35478 | 7007 | 703 | 455 | 511 | 409 | 388 | 417 | 370 | 236 | 215 | 233 | 181 | 103 | 53 | 48 |  | 23 |  |  |
| DeltaBlue | 110496 | 47532 | 76922 | 74819 | 40068 | 75619 | 74132 | 28451 | 13429 | 13019 | 26551 | 251 | 623 | 407 | 467 | 403 | 369 | 396 | 392 | 350 | 264 | 324 | 233 | 112 | 51 | 42 |  | 27 |  |  |
| Crypto | 40991 | 48054 | 41130 | 39570 | 46637 | 37702 | 40380 | 32966 | 20118 | 17664 | 21173 | 2480 | 783 | 431 | 546 | 514 | 423 | 375 | 427 | 181 | 314 | 190 | 114 | 91 | 59 | 75 |  | 29 |  |  |
| RayTrace | 113736 | 107635 | 72371 | 66451 | 99603 | 62973 | 67191 | 49875 | 28313 | 27306 | 3327 | 1553 | 1009 | 739 | 522 | 602 | 594 | 580 | 465 | 487 | 426 | 475 | 232 | 266 | 128 | 134 |  | 81 |  |  |
| EarleyBoyer | 85204 | 65268 | 69070 | 72345 | 56158 | 74796 | 72996 | 42385 | 41256 | 36639 | 26529 | 1619 | 2231 | 1149 | 1006 | 1007 | 1019 | 982 | 879 | 600 | 511 | 582 | 462 | 297 | 126 | 145 |  | 70 |  |  |
| RegExp | 10142 | 18964 | 9961 | 9910 | 16786 | 9738 | 9780 | 9981 | 9192 | 8956 | 1042 | 946 | 406 | 197 | 191 | 166 | 181 | 189 | 175 | 202 | 109 | 257 | 200 | 271 | 89 | 42 |  |  |  |  |
| Splay | 43581 | 36288 | 39246 | 34634 | 32018 | 33190 | 28318 | 23429 | 25010 | 14204 | 2464 | 4877 | 2412 | 1465 | 1061 | 1309 | 1336 | 1018 | 1244 | 1189 | 1016 | 697 | 895 | 496 | 325 | 170 |  | 79 |  |  |
| NavierStokes | 39029 | 33916 | 38951 | 38990 | 34212 | 38951 | 38842 | 37026 | 22364 | 22112 | 25203 | 3644 | 1092 | 738 | 1034 | 747 | 720 | 679 | 669 | 479 | 1069 | 474 | 191 | 149 | 115 | 165 |  | 48 |  |  |
| Score | 48202 | 43864 | 40835 | 39816 | 39653 | 39193 | 38922 | 28364 | 19686 | 17600 | 10164 | 1920 | 976 | 589 | 588 | 550 | 532 | 510 | 496 | 387 | 383 | 368 | 255 | 190 | 98 | 87 |  |  |  |  |
| Score/MB | 890 | 359 | 716 | 342 | 298 | 273 | 501 | 1968 | 382 | 241 | 51 | 110 | 8 | 15 | 49 | 59 | 12 | 56 |  | 51 | 50 | 48 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 42 | 60 | 58 | 61 | 61 | 63 | 63 | 82 | 84 | 78 | 121 | 148 | 249 | 278 | 129 | 440 |  |  |
