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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48120<br>56.8M<br>847/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47626<br>36.4M<br>1308/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46967<br>98.4M<br>477/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40995<br>65.3M<br>627/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40174<br>106.5M<br>377/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39419<br>123.1M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39092<br>66.3M<br>589/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38618<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19961<br>19.4M<br>1028/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18991<br>39.6M<br>479/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17081<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16828<br>35.2M<br>477/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12258<br>199.7M<br>61/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2678<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1525<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 861<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 823<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 819<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 761<br>831.3K<br>937/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 711<br>1.3M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 526<br>46.2M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 469<br>2.1M<br>220/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 377<br>446.6K<br>864/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 368<br>414.5K<br>909/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 368<br>685K<br>550/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 298<br>2.7K<br>113011/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/18/2025, 7:37:55 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs | mujs-one | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 65.3M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.2M | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 65.3M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.2M | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37445 | 41275 | 40682 | 32344 | 32827 | 31560 | 32616 | 33583 | 23444 | 12663 | 14283 | 12455 | 34970 | 12112 | 1106 | 679 | 677 | 698 | 624 | 564 | 591 | 580 | 470 | 285 | 269 | 219 | 248 | 121 | 202 | 89 | 104 | 59 | 59 | 269 | 23 |  | 124 |  |
| DeltaBlue | 109240 | 53489 | 53979 | 77662 | 73431 | 72677 | 74614 | 76882 | 24131 | 13164 | 13111 | 12814 | 36934 | 224 | 1043 | 664 | 670 | 677 | 620 | 529 | 592 | 574 | 464 | 330 | 353 | 308 | 359 | 174 | 250 | 163 | 113 | 53 | 54 | 278 | 28 |  | 176 |  |
| Crypto | 41423 | 51973 | 47059 | 41550 | 41764 | 41570 | 41669 | 40981 | 31827 | 20297 | 17566 | 17549 | 26669 | 9321 | 1363 | 587 | 734 | 590 | 556 | 882 | 551 | 378 | 848 | 794 | 186 | 184 | 188 | 156 | 124 | 323 | 96 | 79 | 60 | 287 | 29 |  | 135 |  |
| RayTrace | 113514 | 117362 | 114032 | 71039 | 68893 | 65563 | 68449 | 55499 | 35635 | 27352 | 26936 | 27916 | 4087 | 1345 | 1591 | 1143 | 894 | 1029 | 956 | 679 | 879 | 747 | 558 | 563 | 528 | 474 | 516 | 438 | 272 | 491 | 254 | 163 | 133 | 356 | 82 |  | 424 |  |
| EarleyBoyer | 86711 | 66995 | 67277 | 70019 | 73952 | 68726 | 72752 | 70521 | 7063 | 38430 | 35890 | 36914 | 27911 | 1211 | 3350 | 1838 | 1412 | 1724 | 1395 | 1655 | 1304 | 1213 | 749 | 558 | 504 | 484 | 496 | 585 | 497 | 320 | 283 | 188 | 132 |  | 74 |  | 522 |  |
| RegExp | 10504 | 19820 | 21093 | 10375 | 9991 | 10042 | 10052 | 8928 | 7780 | 8819 | 8857 | 8866 | 1350 | 905 | 554 | 252 | 226 | 227 | 227 | 115 | 224 | 178 | 64 | 127 | 233 | 193 | 213 | 459 | 206 | 96 | 247 | 48 | 92 |  |  |  |  |  |
| Splay | 42245 | 36809 | 35408 | 38064 | 34218 | 34821 | 27691 | 34813 | 19484 | 24358 | 11713 | 11458 | 4352 | 5003 | 3404 | 2263 | 1718 | 1791 | 1752 | 2092 | 1437 | 1625 | 818 | 864 | 792 | 1291 | 782 | 883 | 895 | 379 | 503 | 213 | 333 |  | 56 |  | 833 |  |
| NavierStokes | 38842 | 40216 | 39988 | 38912 | 38694 | 38803 | 38803 | 38436 | 36693 | 22149 | 21963 | 21941 | 22090 | 14190 | 1853 | 949 | 1283 | 1008 | 987 | 1222 | 925 | 929 | 1451 | 918 | 469 | 476 | 472 | 181 | 198 | 802 | 161 | 177 | 117 |  | 51 |  | 281 |  |
| Score | 48120 | 47626 | 46967 | 40995 | 40174 | 39419 | 39092 | 38618 | 19961 | 18991 | 17081 | 16828 | 12258 | 2678 | 1525 | 861 | 823 | 819 | 761 | 737 | 711 | 647 | 526 | 469 | 377 | 368 | 368 | 298 | 273 | 261 | 189 | 105 | 103 |  |  |  |  |  |
| Score/MB | 847 | 1308 | 477 | 627 | 377 | 320 | 589 | 949 | 1028 | 479 | 335 | 477 | 61 | 2 | 42 | 70 | 192 | 158 | 937 | 87 | 528 | 327 | 11 | 220 | 864 | 909 | 550 | 113011 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 38 | 34 | 46 | 49 | 49 | 51 | 62 | 53 | 58 | 87 | 71 | 82 | 86 | 82 | 96 | 114 | 132 | 145 | 238 | 239 | 31 | 433 |  | 87 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | deno | bare | node | bun | dune | spidermonkey | spiderfire | mozjs | graaljs | hermes | primjs | txiki.js | llrt | quickjs-ng | quickjs | jjs | rquickjs | duktape | njs | ladybird | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.83 | 2.4.4 |  | 24.6.0 | 1.2.20 | 0.10.1 | 142.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  |  | 2.99.99 | 0.9.2 |  | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 85.6M | 45.6M | 111.5M | 56.8M | 56.8M | 131.2M | 46.3M | 32.8M | 194M | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 0 | 1.2M | 562.1K | 2.4M | 41.5M | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 0.2K | 41.1M | 85.6M | 45.6M | 111.5M | 56.8M | 56.8M | 65.6M | 46.3M | 32.8M | 147.4K | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 0 | 1.2M | 562.1K | 1.8M | 41.5M | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 47241 | 42546 | 42673 | 39429 | 44152 | 41734 | 42359 | 14484 | 13549 | 11600 | 33653 | 1231 | 1129 | 1248 | 996 | 1086 | 1025 | 4346 | 986 | 495 | 610 | 774 | 360 | 110 | 160 | 192 | 136 | 93 | 36 | 199 | 35 |  | 122 |
| DeltaBlue | 69186 | 126484 | 99812 | 100850 | 94066 | 61179 | 92598 | 16523 | 14857 | 13197 | 44808 | 1111 | 1226 | 1230 | 1063 | 1099 | 1030 | 275 | 996 | 585 | 613 | 696 | 538 | 210 | 155 | 218 | 142 | 79 | 37 | 222 | 43 |  | 210 |
| Crypto | 71595 | 60408 | 54775 | 49113 | 53421 | 62233 | 45712 | 24682 | 18595 | 16779 | 40234 | 1250 | 1633 | 1130 | 945 | 1106 | 1285 | 3231 | 915 | 1284 | 904 | 1415 | 281 | 513 | 118 | 127 | 132 | 89 | 38 | 251 | 44 |  | 128 |
| RayTrace | 174859 | 150810 | 85247 | 79919 | 85839 | 126242 | 69115 | 47803 | 32601 | 38071 | 1943 | 2289 | 1916 | 2027 | 1928 | 1348 | 1177 | 583 | 1368 | 1032 | 864 | 932 | 852 | 701 | 485 | 255 | 286 | 198 | 35 | 297 | 135 |  | 599 |
| EarleyBoyer | 102152 | 115070 | 88688 | 83960 | 83432 | 68906 | 76705 | 48326 | 33886 | 40759 | 35738 | 4566 | 3485 | 2829 | 2677 | 2373 | 2148 | 1240 | 2143 | 1098 | 1896 | 1001 | 977 | 416 | 568 | 575 | 348 | 186 | 75 |  | 115 |  | 570 |
| RegExp | 31065 | 13687 | 12183 | 13833 | 13014 | 24663 | 10344 | 11478 | 9809 | 10546 | 1535 | 540 | 302 | 258 | 296 | 257 | 263 | 587 | 260 | 238 | 169 | 83 | 322 | 313 | 489 | 242 | 179 | 106 | 12 |  |  |  |  |
| Splay | 51698 | 47145 | 42995 | 47966 | 38700 | 21554 | 32231 | 26786 | 15801 | 14888 | 3238 | 4205 | 2534 | 3147 | 3969 | 2293 | 2369 | 1316 | 2033 | 2070 | 1438 | 1552 | 1269 | 521 | 730 | 857 | 529 | 395 | 134 |  | 88 |  | 883 |
| NavierStokes | 37804 | 36766 | 36693 | 34839 | 32106 | 30596 | 35362 | 20102 | 18753 | 16324 | 27547 | 1458 | 3894 | 1991 | 1619 | 2038 | 2136 | 1829 | 1592 | 1413 | 1541 | 1795 | 695 | 1452 | 150 | 244 | 210 | 188 | 72 |  | 79 |  | 273 |
| Score | 63176 | 58321 | 49122 | 48436 | 47449 | 46664 | 42774 | 23214 | 18196 | 17830 | 12449 | 1665 | 1609 | 1415 | 1331 | 1225 | 1209 | 1187 | 1105 | 858 | 822 | 799 | 580 | 411 | 285 | 282 | 218 | 145 | 45 |  |  |  |  |
| Score/MB | 385144403 | 1420 | 573 | 1063 | 425 | 821 | 753 | 176 | 392 | 543 | 64 | 105 | 914 | 392 | 126 | 297 | 1268 |  | 936 | 1562 | 342 | 19 | 1384 | 255 | 108081 | 22 | 2 | 11 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 33 | 36 | 41 | 38 | 40 | 39 | 45 | 41 | 47 | 55 | 72 | 57 | 88 | 109 | 104 | 125 | 175 | 635 | 35 | 290 |  | 86 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | quickjs-ng | rquickjs | mujs | duktape | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.83 |  | 1.2.20 |  | 24.6.0 | 2.4.4 | 0.10.1 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.1M | 122.1M | 132.7M | 55.8M | 116.3M | 143.1M | 77.6M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 112.8M | 37M | 11.8M | 42.2M | 9M | 8M | 7.5M | 7.6M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 112.9M | 26.1M | 85.3M | 110.8M | 47.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.7M | 1.3M | 692.1K | 777.7K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 25M | 121.8M | 19.8M | 29.7M | 31.1M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 31.3M | 6.9M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38589 | 35613 | 36181 | 29993 | 32993 | 32623 | 32947 | 24567 | 13274 | 13439 | 35517 | 2987 | 686 | 455 | 507 | 395 | 437 | 384 | 240 | 212 | 233 | 191 | 108 | 54 | 49 |  | 21 |  |  |
| DeltaBlue | 110417 | 48405 | 47235 | 75170 | 73927 | 76499 | 60967 | 29396 | 13296 | 12999 | 28724 | 200 | 625 | 410 | 467 | 377 | 403 | 423 | 344 | 264 | 330 | 229 | 119 | 52 | 42 |  | 24 |  |  |
| Crypto | 40048 | 48221 | 42052 | 41923 | 39387 | 41974 | 42097 | 33454 | 19809 | 18270 | 17332 | 2134 | 789 | 429 | 541 | 432 | 369 | 321 | 183 | 318 | 190 | 114 | 90 | 59 | 75 |  | 28 |  |  |
| RayTrace | 112404 | 105078 | 98863 | 72815 | 64675 | 61715 | 67117 | 47655 | 28211 | 27251 | 6062 | 2665 | 985 | 748 | 539 | 613 | 580 | 557 | 488 | 438 | 472 | 233 | 272 | 133 | 135 |  | 76 |  |  |
| EarleyBoyer | 87659 | 65062 | 60730 | 69196 | 72210 | 70980 | 74208 | 43021 | 39984 | 36857 | 19882 | 790 | 2250 | 1130 | 1012 | 1021 | 1001 | 901 | 593 | 531 | 586 | 468 | 303 | 127 | 151 |  | 72 |  |  |
| RegExp | 10092 | 18857 | 17603 | 9890 | 10032 | 9748 | 9599 | 10183 | 9128 | 8910 | 1054 | 1014 | 405 | 197 | 189 | 185 | 188 | 156 | 208 | 110 | 264 | 204 | 277 | 92 | 43 |  |  |  |  |
| Splay | 43720 | 35904 | 32890 | 39254 | 34487 | 34039 | 29206 | 24961 | 24170 | 15451 | 2812 | 6552 | 2475 | 1498 | 1020 | 1360 | 1018 | 953 | 1204 | 1026 | 687 | 871 | 557 | 333 | 187 |  | 57 |  |  |
| NavierStokes | 38912 | 34030 | 33916 | 39099 | 39029 | 38990 | 38912 | 36915 | 22489 | 22127 | 24462 | 3822 | 1098 | 741 | 1034 | 716 | 672 | 728 | 484 | 1081 | 466 | 195 | 152 | 116 | 167 |  | 48 |  |  |
| Score | 48145 | 43615 | 41305 | 40493 | 39609 | 39508 | 38263 | 28734 | 19339 | 17730 | 10559 | 1695 | 976 | 590 | 586 | 540 | 514 | 480 | 390 | 387 | 369 | 257 | 197 | 100 | 90 |  |  |  |  |
| Score/MB | 889 | 357 | 311 | 725 | 340 | 276 | 492 | 1995 | 378 | 243 | 53 | 96 | 8 | 15 | 49 | 12 | 57 | 59 | 51 | 50 | 48 | 13 | 2 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 42 | 59 | 58 | 62 | 63 | 68 | 82 | 83 | 78 | 122 | 146 | 246 | 270 | 131 | 450 |  |  |
