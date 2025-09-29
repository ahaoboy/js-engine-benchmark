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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48478<br>37M<br>1308/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47593<br>99.2M<br>479/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47037<br>57.8M<br>814/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42136<br>108.3M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39955<br>123.4M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39628<br>66.3M<br>597/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39618<br>40.7M<br>974/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20323<br>19.4M<br>1047/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19513<br>40.1M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17187<br>35.2M<br>487/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17076<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10404<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2196<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 933<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 844<br>4.3M<br>197/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 835<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 768<br>1.4M<br>551/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 757<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 742<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 654<br>2M<br>331/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 636<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 508<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 497<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 385<br>446.6K<br>882/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 383<br>685K<br>572/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 380<br>414.5K<br>938/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 313<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/29/2025, 2:58:49 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.2.0 | 2.5.2 | 24.9.0 | 0.10.1 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37M | 99.2M | 57.8M | 108.3M | 123.4M | 66.3M | 40.7M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 0 | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Exe size | 37M | 99.2M | 1M | 108.3M | 123.4M | 66.3M | 40.7M | 571K | 40.1M | 35.2M | 51M | 1M | 0 | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42048 | 41610 | 38144 | 35457 | 32591 | 32933 | 32520 | 23218 | 13341 | 13277 | 13704 | 41307 | 12966 | 1129 | 700 | 689 | 710 | 628 | 574 | 580 | 559 | 580 | 530 | 291 | 335 | 271 | 249 | 227 | 157 | 194 | 90 | 101 | 60 | 60 | 267 | 26 |  | 161 |  |
| DeltaBlue | 53615 | 54521 | 100460 | 80333 | 73259 | 75844 | 79084 | 25489 | 13521 | 13012 | 13052 | 27816 | 336 | 1048 | 699 | 660 | 685 | 626 | 587 | 580 | 544 | 579 | 496 | 330 | 391 | 364 | 361 | 323 | 205 | 249 | 162 | 107 | 55 | 56 | 275 | 33 |  | 168 |  |
| Crypto | 51893 | 48137 | 38527 | 41726 | 41599 | 41469 | 41419 | 32323 | 20302 | 17626 | 17460 | 16515 | 9908 | 1366 | 681 | 748 | 582 | 557 | 562 | 530 | 887 | 380 | 885 | 793 | 425 | 187 | 189 | 183 | 150 | 124 | 327 | 100 | 81 | 62 | 287 | 38 |  | 151 |  |
| RayTrace | 120470 | 114328 | 110776 | 72445 | 66229 | 69263 | 66155 | 37184 | 27546 | 27990 | 26640 | 2732 | 1232 | 1550 | 1200 | 910 | 1075 | 958 | 902 | 901 | 681 | 737 | 777 | 581 | 453 | 534 | 529 | 489 | 482 | 274 | 499 | 255 | 165 | 143 | 353 | 103 |  | 464 |  |
| EarleyBoyer | 70021 | 71111 | 84887 | 74870 | 69615 | 73709 | 69026 | 7079 | 42660 | 36847 | 36057 | 40418 | 900 | 3356 | 1903 | 1492 | 1760 | 1428 | 1395 | 1393 | 1670 | 1230 | 999 | 619 | 869 | 556 | 557 | 519 | 567 | 507 | 324 | 291 | 197 | 138 |  | 86 |  | 579 |  |
| RegExp | 20547 | 21955 | 10525 | 10132 | 10082 | 10112 | 8848 | 7886 | 8892 | 8793 | 8857 | 1118 | 515 | 556 | 271 | 232 | 225 | 236 | 227 | 220 | 116 | 182 | 64 | 131 | 177 | 247 | 224 | 201 | 461 | 211 | 96 | 250 | 49 | 95 |  |  |  |  |  |
| Splay | 37379 | 38888 | 42220 | 39279 | 36223 | 29337 | 36655 | 19832 | 24700 | 12460 | 12354 | 2149 | 2347 | 3594 | 2459 | 1842 | 1978 | 1861 | 2261 | 2231 | 2115 | 1714 | 1482 | 1327 | 1291 | 762 | 843 | 1320 | 842 | 936 | 357 | 455 | 204 | 320 |  | 141 |  | 913 |  |
| NavierStokes | 40244 | 34726 | 38842 | 38732 | 38842 | 38765 | 38469 | 36952 | 22238 | 22127 | 22024 | 27251 | 9331 | 1825 | 1127 | 1311 | 991 | 959 | 990 | 978 | 1218 | 931 | 1545 | 929 | 737 | 467 | 486 | 479 | 179 | 202 | 874 | 169 | 176 | 118 |  | 61 |  | 302 |  |
| Score | 48478 | 47593 | 47037 | 42136 | 39955 | 39628 | 39618 | 20323 | 19513 | 17187 | 17076 | 10404 | 2196 | 1534 | 933 | 844 | 835 | 772 | 768 | 757 | 742 | 654 | 636 | 508 | 497 | 385 | 383 | 380 | 313 | 276 | 264 | 188 | 106 | 105 |  |  |  |  |  |
| Score/MB | 1308 | 479 | 814 | 388 | 323 | 597 | 974 | 1047 | 486 | 487 | 334 | 52 |  | 42 | 75 | 197 | 161 | 951 | 551 | 537 | 87 | 331 | 13 | 238 |  | 882 | 572 | 938 |  | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 40 | 34 | 42 | 48 | 50 | 50 | 52 | 53 | 61 | 59 | 81 | 67 | 63 | 79 | 79 | 84 | 101 | 113 | 131 | 142 | 232 | 232 | 32 | 349 |  | 80 | 7 |
### macos-arm64
| Engine | bun | v8 | node | deno | dune | spidermonkey | mozjs | spiderfire | graaljs | hermes | jjs | primjs | txiki.js | quickjs | llrt | quickjs-ng | rquickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.2.230 | 24.9.0 | 2.5.2 | 0.10.1 | 144.0 |  |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 2025.04.26 | 0.7.0.beta | 0.10.1 |  |  | 0.9.2 | 2.99.99 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 57.3M | 41.3M | 111.9M | 87.5M | 56.8M | 132.6M | 32.8M | 46.3M | 194M | 15.7M | 0 | 1.8M | 3.6M | 975.9K | 10.6M | 3.8M | 1.2M | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 0 | 75.4M | 12.4M | 1.1M | 91.7M | 575.4K | 7.4M | 0 | 0 |
| Exe size | 57.3M | 41.3M | 111.9M | 87.5M | 56.8M | 66.3M | 32.8M | 46.3M | 147.4K | 7.9M | 0 | 1.8M | 3.6M | 975.9K | 10.6M | 1.9M | 1.2M | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 0 | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 0 | 1.9M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.8M | 0 | 0 | 0 | 0 |
| Richards | 50842 | 40569 | 43065 | 60899 | 44159 | 14386 | 14523 | 12973 | 37290 | 1367 | 13401 | 864 | 1218 | 1051 | 926 | 1100 | 959 | 885 | 703 | 530 | 459 | 300 | 105 | 317 | 157 | 112 | 95 | 33 |  | 193 | 27 |  |  |
| DeltaBlue | 70469 | 119164 | 100711 | 110444 | 101610 | 16635 | 15644 | 15220 | 49952 | 1199 | 1177 | 983 | 1243 | 1079 | 1123 | 1061 | 991 | 792 | 755 | 571 | 506 | 471 | 198 | 346 | 210 | 129 | 72 | 35 |  | 225 | 35 |  |  |
| Crypto | 70449 | 57486 | 59321 | 57838 | 58380 | 25102 | 20406 | 22125 | 44885 | 1393 | 11195 | 1398 | 1036 | 1330 | 678 | 881 | 987 | 1573 | 1120 | 1342 | 489 | 291 | 421 | 146 | 109 | 103 | 95 | 37 |  | 241 | 63 |  |  |
| RayTrace | 192101 | 156064 | 94349 | 98789 | 89761 | 48347 | 46693 | 30870 | 3200 | 2427 | 950 | 1612 | 1917 | 1117 | 1841 | 1221 | 1424 | 1250 | 891 | 1018 | 690 | 909 | 596 | 324 | 630 | 329 | 177 | 40 |  | 273 | 163 |  |  |
| EarleyBoyer | 104476 | 121017 | 96296 | 96769 | 72259 | 40382 | 38402 | 35696 | 43764 | 5080 | 865 | 1451 | 2661 | 1976 | 2820 | 1800 | 2055 | 1670 | 2265 | 1072 | 1054 | 1013 | 386 | 549 | 634 | 355 | 174 | 79 |  |  | 127 |  |  |
| RegExp | 30093 | 13520 | 12625 | 14036 | 11989 | 9527 | 8603 | 8166 | 1471 | 698 | 585 | 285 | 290 | 255 | 321 | 211 | 246 | 94 | 176 | 222 | 216 | 310 | 312 | 245 | 571 | 197 | 99 | 12 |  |  |  |  |  |
| Splay | 42367 | 50533 | 33713 | 14428 | 32230 | 23414 | 15785 | 12050 | 3443 | 4229 | 1680 | 4995 | 1708 | 2564 | 2890 | 2627 | 2363 | 1662 | 1349 | 1846 | 1319 | 903 | 506 | 760 | 712 | 588 | 344 | 127 |  |  | 209 |  |  |
| NavierStokes | 37026 | 35101 | 37581 | 39029 | 35918 | 18772 | 18458 | 16079 | 32171 | 1540 | 443 | 3634 | 1950 | 2270 | 1012 | 1859 | 1461 | 1824 | 1607 | 1266 | 767 | 671 | 1029 | 241 | 154 | 174 | 199 | 66 |  |  | 102 |  |  |
| Score | 62709 | 57875 | 49727 | 48254 | 46943 | 21697 | 19492 | 17188 | 14456 | 1834 | 1679 | 1395 | 1292 | 1221 | 1166 | 1111 | 1111 | 949 | 907 | 832 | 605 | 539 | 367 | 326 | 312 | 208 | 139 | 44 |  |  |  |  |  |
| Score/MB | 1094 | 1402 | 444 | 551 | 826 | 163 | 593 | 370 | 74 | 116 |  | 792 | 358 | 1281 | 110 | 289 | 928 | 22 | 379 | 1515 |  | 1286 | 232 | 25 |  | 2 | 11 | 41 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 30 | 49 | 40 | 40 | 40 | 41 | 44 | 43 | 62 | 54 | 48 | 57 | 57 | 93 | 99 | 107 | 134 | 176 | 646 |  | 37 | 239 |  |  |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | ChakraCore | dune | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | quickjs-ng | llrt | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.230 |  | 1.2.23 | 2.5.2 | 24.9.0 | 1.11.24.0 | 0.10.1 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.10.1 | 0.7.0.beta |  |  |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 139.6M | 148.4M | 120.8M | 15.6M | 82M | 53.9M | 77.1M | 197.1M | 142.1M | 12.8M | 41.7M | 6.8M | 45.6M | 9M | 10.2M | 0 | 8.6M | 8.5M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 342.5K | 113.6M | 112.5M | 85.5M | 342.9K | 47.4M | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 5.7M | 1.6M | 13.1M | 1.2M | 1M | 0 | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 124.9M | 26M | 35.9M | 35.3M | 15.3M | 34.6M | 20M | 34.4M | 196.7M | 139.1M | 7.9M | 36M | 5.2M | 32.5M | 7.8M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35570 | 33597 | 36333 | 30173 | 32467 | 23935 | 32104 | 13605 | 13884 | 35433 | 688 | 470 | 445 | 512 | 383 | 428 | 434 | 352 | 252 | 240 | 196 | 174 | 101 | 43 | 44 |  | 23 |  | 82 |
| DeltaBlue | 102827 | 44709 | 43889 | 72135 | 72862 | 28041 | 45297 | 13210 | 12814 | 25641 | 602 | 449 | 399 | 480 | 367 | 441 | 450 | 390 | 348 | 337 | 227 | 206 | 111 | 44 | 37 |  | 26 |  | 82 |
| Crypto | 33642 | 47487 | 41656 | 41260 | 41492 | 33385 | 28223 | 20065 | 17539 | 18763 | 778 | 529 | 419 | 467 | 425 | 319 | 322 | 414 | 187 | 173 | 278 | 99 | 78 | 55 | 70 |  | 35 |  | 97 |
| RayTrace | 104412 | 101600 | 96939 | 70373 | 57571 | 48691 | 35593 | 27898 | 26344 | 4034 | 958 | 568 | 743 | 520 | 570 | 587 | 592 | 458 | 476 | 458 | 434 | 196 | 248 | 115 | 121 |  | 78 |  | 417 |
| EarleyBoyer | 80331 | 57537 | 54543 | 73714 | 67885 | 41685 | 44112 | 40731 | 35578 | 29307 | 2178 | 974 | 1123 | 980 | 974 | 927 | 935 | 858 | 557 | 570 | 488 | 383 | 272 | 110 | 112 |  | 69 |  | 472 |
| RegExp | 9637 | 18584 | 16820 | 9680 | 9670 | 9364 | 7187 | 8901 | 8577 | 993 | 405 | 181 | 191 | 159 | 191 | 158 | 154 | 176 | 235 | 195 | 105 | 175 | 232 | 83 | 40 |  |  |  |  |
| Splay | 41723 | 34096 | 30722 | 32516 | 29532 | 26392 | 14654 | 20332 | 13094 | 2557 | 2139 | 1005 | 1349 | 1119 | 1246 | 1219 | 1173 | 1214 | 1100 | 1066 | 905 | 624 | 439 | 297 | 157 |  | 120 |  | 682 |
| NavierStokes | 38545 | 33438 | 33438 | 38469 | 38545 | 36470 | 36545 | 21728 | 21854 | 24561 | 1065 | 1025 | 698 | 544 | 710 | 760 | 727 | 741 | 478 | 481 | 745 | 165 | 139 | 110 | 159 |  | 54 |  | 293 |
| Score | 44720 | 41522 | 39617 | 39257 | 37862 | 28287 | 26565 | 18876 | 17061 | 10289 | 942 | 573 | 570 | 524 | 523 | 513 | 510 | 494 | 390 | 372 | 342 | 216 | 174 | 88 | 79 |  |  |  |  |
| Score/MB | 723 | 331 | 283 | 264 | 313 | 1812 | 324 | 350 | 221 | 52 | 6 | 44 | 13 | 77 | 11 | 56 | 49 |  | 45 | 43 | 39 | 10 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 59 | 60 | 65 | 61 | 67 | 68 | 63 | 80 | 83 | 89 | 137 | 168 | 270 | 310 | 134 | 401 |  | 104 |
