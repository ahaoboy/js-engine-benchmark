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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47991<br>57.1M<br>840/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47490<br>36.4M<br>1303/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46919<br>98.6M<br>476/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40595<br>106.3M<br>381/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40563<br>65.3M<br>620/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39790<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38543<br>66.3M<br>581/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38202<br>40.7M<br>939/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20227<br>19.4M<br>1042/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19249<br>40.1M<br>479/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17297<br>51M<br>339/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17153<br>35.2M<br>487/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9609<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2806<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1533<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 858<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 822<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 818<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 750<br>1.4M<br>533/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 743<br>1.4M<br>533/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 730<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 555<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 481<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 480<br>2.1M<br>225/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 394<br>446.6K<br>903/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 370<br>414.5K<br>914/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 370<br>685K<br>553/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 288<br>2.7K<br>109218/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/26/2025, 1:52:02 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs | mujs-one | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.21 | 2.4.5 |  | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.1M | 36.4M | 98.6M | 106.3M | 65.3M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.6M | 106.3M | 65.3M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 0 | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37537 | 38956 | 40015 | 33149 | 32132 | 32418 | 31553 | 32556 | 23412 | 13178 | 14460 | 13274 | 35641 | 11399 | 1119 | 679 | 691 | 703 | 629 | 574 | 572 | 544 | 578 | 482 | 322 | 287 | 275 | 229 | 246 | 129 | 189 | 90 | 102 | 58 | 59 | 280 | 27 |  | 118 |  |
| DeltaBlue | 111587 | 55328 | 52108 | 74674 | 78343 | 73900 | 74046 | 75183 | 25925 | 13521 | 13032 | 12900 | 27551 | 337 | 1064 | 666 | 668 | 677 | 625 | 566 | 570 | 533 | 572 | 458 | 382 | 328 | 357 | 320 | 349 | 181 | 248 | 163 | 108 | 54 | 54 | 285 | 32 |  | 167 |  |
| Crypto | 41478 | 51981 | 49046 | 40606 | 41514 | 41677 | 41650 | 41341 | 31775 | 20399 | 18094 | 17936 | 12642 | 7365 | 1369 | 597 | 681 | 601 | 558 | 531 | 546 | 880 | 380 | 863 | 412 | 793 | 188 | 183 | 190 | 148 | 123 | 321 | 98 | 81 | 61 | 298 | 31 |  | 133 |  |
| RayTrace | 110628 | 119952 | 117436 | 68227 | 71335 | 65563 | 67043 | 60087 | 36149 | 27546 | 26936 | 28387 | 9287 | 2919 | 1574 | 1119 | 928 | 1032 | 955 | 921 | 880 | 678 | 743 | 547 | 454 | 571 | 517 | 474 | 508 | 434 | 271 | 496 | 248 | 163 | 135 | 348 | 96 |  | 419 |  |
| EarleyBoyer | 84829 | 67890 | 64251 | 74661 | 68696 | 70356 | 72990 | 67891 | 7104 | 40794 | 35908 | 36969 | 23696 | 675 | 3418 | 1837 | 1470 | 1692 | 1407 | 1368 | 1246 | 1641 | 1214 | 743 | 846 | 571 | 512 | 463 | 496 | 566 | 480 | 324 | 284 | 187 | 133 |  | 79 |  | 486 |  |
| RegExp | 10424 | 19658 | 21499 | 10102 | 10274 | 9961 | 9920 | 8874 | 7795 | 8512 | 8745 | 8956 | 768 | 934 | 554 | 252 | 224 | 226 | 240 | 221 | 230 | 115 | 182 | 63 | 178 | 130 | 232 | 193 | 211 | 450 | 205 | 95 | 252 | 48 | 93 |  |  |  |  |  |
| Splay | 42620 | 35938 | 35400 | 37070 | 36003 | 35359 | 26672 | 32409 | 19762 | 24350 | 12713 | 11803 | 1442 | 5474 | 3374 | 2214 | 1721 | 1834 | 1801 | 2161 | 2163 | 2023 | 1640 | 1229 | 1214 | 929 | 1114 | 1301 | 826 | 840 | 860 | 367 | 432 | 213 | 334 |  | 82 |  | 814 |  |
| NavierStokes | 38842 | 40136 | 39988 | 38469 | 38694 | 38732 | 38655 | 38211 | 36730 | 22260 | 21854 | 22002 | 24041 | 13477 | 1865 | 946 | 1270 | 971 | 988 | 961 | 959 | 1216 | 930 | 1491 | 677 | 954 | 461 | 480 | 486 | 147 | 196 | 822 | 159 | 176 | 119 |  | 51 |  | 270 |  |
| Score | 47991 | 47490 | 46919 | 40595 | 40563 | 39790 | 38543 | 38202 | 20227 | 19249 | 17297 | 17153 | 9609 | 2806 | 1533 | 858 | 822 | 818 | 772 | 750 | 743 | 730 | 649 | 555 | 481 | 480 | 394 | 370 | 370 | 288 | 267 | 262 | 184 | 105 | 104 |  |  |  |  |  |
| Score/MB | 840 | 1303 | 476 | 381 | 620 | 323 | 581 | 939 | 1042 | 479 | 339 | 487 | 48 | 2 | 42 | 69 | 192 | 158 | 951 | 533 | 533 | 86 | 329 | 12 |  | 225 | 903 | 914 | 553 | 109218 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 34 | 47 | 49 | 51 | 50 | 53 | 52 | 62 | 58 | 87 | 64 | 69 | 82 | 87 | 82 | 105 | 117 | 133 | 145 | 239 | 238 | 31 | 399 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | dune | deno | node | bare | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | llrt | jjs | txiki.js | quickjs-ng | quickjs | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.108 | 1.2.21 | 0.10.1 | 2.4.5 | 24.6.0 |  | 143.0 |  |  | 24.1.2 | 0.12.0 |  | 0.6.2.beta |  | 24.12.0 | 0.8.0 | 2025.04.26 |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 85.5M | 111.5M | 45.6M | 132.3M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 10.5M | 0 | 3.6M | 4.1M | 975.9K | 1.2M | 2.4M | 41.3M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 85.5M | 111.5M | 45.6M | 66.2M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 10.5M | 0 | 3.6M | 2.1M | 975.9K | 1.2M | 1.8M | 41.3M | 562.1K | 0 | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42691 | 44445 | 41610 | 47788 | 45310 | 44622 | 39044 | 13588 | 15367 | 12003 | 35680 | 1266 | 1146 | 1070 | 2817 | 1037 | 1241 | 1057 | 950 | 718 | 813 | 492 | 531 | 296 | 330 | 107 | 112 | 184 | 101 | 28 | 205 | 37 |  | 126 |
| DeltaBlue | 67698 | 132229 | 63857 | 106490 | 105412 | 92129 | 67361 | 16457 | 17766 | 13118 | 47202 | 1139 | 1260 | 1101 | 236 | 679 | 1057 | 1038 | 989 | 776 | 580 | 549 | 609 | 549 | 379 | 194 | 219 | 190 | 98 | 39 | 240 | 47 |  | 142 |
| Crypto | 73935 | 62035 | 70992 | 57818 | 54675 | 55607 | 45697 | 25001 | 21859 | 17757 | 37722 | 1356 | 1732 | 985 | 2808 | 906 | 1011 | 1236 | 878 | 1091 | 1530 | 1265 | 488 | 278 | 178 | 418 | 127 | 150 | 112 | 37 | 244 | 44 |  | 119 |
| RayTrace | 182629 | 154732 | 117954 | 87319 | 83989 | 85691 | 91611 | 49875 | 45879 | 39476 | 2273 | 2380 | 1650 | 1996 | 789 | 1919 | 1504 | 1198 | 1280 | 871 | 1113 | 1063 | 568 | 893 | 388 | 635 | 593 | 396 | 212 | 39 | 306 | 152 |  | 551 |
| EarleyBoyer | 93199 | 106772 | 88745 | 93855 | 90428 | 88986 | 87654 | 50280 | 43699 | 44728 | 44641 | 5214 | 1342 | 3059 | 1303 | 3012 | 2448 | 2216 | 2205 | 2368 | 1310 | 1073 | 1190 | 931 | 787 | 364 | 576 | 408 | 226 | 77 |  | 116 |  | 622 |
| RegExp | 28149 | 11752 | 25508 | 14518 | 13560 | 13833 | 13792 | 10968 | 11501 | 11105 | 1748 | 710 | 291 | 293 | 438 | 237 | 256 | 241 | 249 | 180 | 102 | 252 | 212 | 330 | 304 | 300 | 480 | 220 | 133 | 13 |  |  |  |  |
| Splay | 38916 | 44535 | 44127 | 44136 | 33411 | 30783 | 34552 | 26183 | 18996 | 15206 | 3399 | 4099 | 4429 | 3069 | 1263 | 3178 | 2163 | 2567 | 3121 | 1503 | 1915 | 1783 | 1496 | 1083 | 1091 | 454 | 675 | 593 | 412 | 121 |  | 125 |  | 690 |
| NavierStokes | 30985 | 34280 | 39178 | 40432 | 38842 | 37100 | 32351 | 20714 | 20438 | 17328 | 18698 | 1561 | 3699 | 1571 | 5872 | 1912 | 1945 | 2284 | 1664 | 1496 | 1812 | 1384 | 745 | 720 | 306 | 1006 | 167 | 254 | 211 | 63 |  | 79 |  | 260 |
| Score | 57734 | 56782 | 55270 | 53022 | 49301 | 47862 | 44317 | 23182 | 21926 | 18619 | 12790 | 1800 | 1506 | 1334 | 1257 | 1232 | 1231 | 1225 | 1148 | 918 | 883 | 838 | 631 | 560 | 403 | 359 | 295 | 270 | 167 | 43 |  |  |  |  |
| Score/MB | 351967946 | 1380 | 973 | 933 | 576 | 429 | 972 | 175 | 668 | 401 | 65 | 114 | 855 | 126 |  | 341 | 298 | 1285 | 959 | 382 | 21 | 1526 |  | 1336 | 31 | 227 | 111873 | 3 | 13 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 29 | 36 | 39 | 43 | 43 | 40 | 39 | 42 | 52 | 63 | 47 | 58 | 57 | 83 | 95 | 102 | 106 | 152 | 626 | 35 | 278 |  | 90 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.110 |  | 1.2.21 |  | 2.4.5 | 0.10.1 | 24.6.0 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  |  | 0.8.0 |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.8M | 57M | 142.9M | 77.6M | 116.4M | 14.4M | 52.7M | 72.8M | 196.1M | 17.5M | 112.8M | 37M | 11.8M | 42.2M | 8M | 9M | 9M | 0 | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.1M | 338K | 113M | 26.1M | 110.6M | 47.4M | 85.3M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.2M | 1M | 1.7M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 30.8M | 32.3M | 30.3M | 31.1M | 14.1M | 18.6M | 30.2M | 195.8M | 17.5M | 109.8M | 31.3M | 6.9M | 29.1M | 6.7M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38412 | 35902 | 32852 | 33304 | 33618 | 32351 | 33043 | 24443 | 12670 | 13874 | 35990 | 4236 | 695 | 451 | 510 | 376 | 441 | 448 | 433 | 355 | 233 | 243 | 208 | 196 | 104 | 54 | 47 |  | 22 |  |  |
| DeltaBlue | 110807 | 44511 | 43962 | 78409 | 72862 | 76188 | 61272 | 28067 | 13389 | 13138 | 24573 | 211 | 612 | 410 | 464 | 370 | 469 | 469 | 397 | 392 | 324 | 350 | 258 | 224 | 108 | 51 | 41 |  | 26 |  |  |
| Crypto | 41599 | 48657 | 48730 | 41956 | 36382 | 39970 | 39847 | 33776 | 20704 | 18085 | 18869 | 1881 | 789 | 429 | 547 | 425 | 318 | 328 | 372 | 430 | 189 | 182 | 313 | 115 | 91 | 59 | 73 |  | 29 |  |  |
| RayTrace | 103672 | 104634 | 101674 | 68227 | 67339 | 67191 | 66007 | 49899 | 24075 | 26465 | 4625 | 1404 | 1004 | 742 | 511 | 561 | 587 | 587 | 576 | 463 | 468 | 472 | 433 | 232 | 267 | 132 | 132 |  | 81 |  |  |
| EarleyBoyer | 86574 | 63822 | 58593 | 70041 | 73201 | 74339 | 72187 | 43381 | 41635 | 37454 | 30052 | 1083 | 2232 | 1157 | 999 | 1005 | 938 | 935 | 978 | 876 | 569 | 582 | 514 | 458 | 297 | 125 | 138 |  | 70 |  |  |
| RegExp | 9880 | 18619 | 17673 | 10001 | 9819 | 9689 | 9890 | 10193 | 9010 | 8866 | 1004 | 927 | 402 | 196 | 188 | 182 | 162 | 155 | 186 | 180 | 251 | 199 | 109 | 196 | 279 | 90 | 42 |  |  |  |  |
| Splay | 43337 | 35180 | 33793 | 38189 | 33943 | 28644 | 33851 | 18602 | 24464 | 14791 | 2626 | 4603 | 2356 | 1425 | 1028 | 1327 | 1262 | 1279 | 994 | 1251 | 1180 | 1190 | 725 | 758 | 418 | 328 | 168 |  | 84 |  |  |
| NavierStokes | 38951 | 33984 | 40028 | 39099 | 38990 | 38990 | 39029 | 36766 | 22386 | 22112 | 27454 | 2396 | 1087 | 741 | 1025 | 715 | 770 | 759 | 679 | 722 | 477 | 478 | 1051 | 191 | 150 | 115 | 162 |  | 48 |  |  |
| Score | 47634 | 42940 | 42182 | 40892 | 39316 | 38975 | 38692 | 27731 | 19054 | 17663 | 10668 | 1504 | 969 | 587 | 582 | 525 | 524 | 524 | 509 | 501 | 390 | 385 | 364 | 250 | 186 | 99 | 86 |  |  |  |  |
| Score/MB | 879 | 351 | 317 | 717 | 275 | 501 | 332 | 1924 | 361 | 242 | 54 | 85 | 8 | 15 | 49 | 12 | 65 | 58 | 56 |  | 51 | 51 | 47 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 41 | 42 | 60 | 59 | 62 | 66 | 67 | 63 | 63 | 79 | 83 | 84 | 122 | 149 | 248 | 286 | 131 | 442 |  |  |
