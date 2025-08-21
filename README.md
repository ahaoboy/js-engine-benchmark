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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48125<br>56.9M<br>845/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48026<br>36.4M<br>1318/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47406<br>98.4M<br>481/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40791<br>65.3M<br>624/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40678<br>106.5M<br>381/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40043<br>123.1M<br>325/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39281<br>66.3M<br>592/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37835<br>40.7M<br>930/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20098<br>19.4M<br>1035/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19423<br>40.1M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17224<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17092<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11859<br>199.7M<br>59/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2972<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1540<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 867<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 834<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 816<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 761<br>1.4M<br>546/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 759<br>1.4M<br>539/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 738<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 570<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 503<br>2.1M<br>236/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 493<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 412<br>446.6K<br>944/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 381<br>685K<br>569/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 351<br>414.5K<br>867/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 272<br>2.7K<br>103151/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 192<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/21/2025, 7:29:31 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.9M | 36.4M | 98.4M | 65.3M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 65.3M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 55.9M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37717 | 40541 | 41328 | 31853 | 33258 | 31669 | 32697 | 32584 | 23483 | 13665 | 14198 | 12956 | 34984 | 13948 | 1108 | 681 | 671 | 707 | 626 | 582 | 578 | 563 | 575 | 490 | 289 | 355 | 269 | 244 | 230 | 80 | 202 | 90 | 103 | 60 | 60 | 262 | 26 |  | 126 |  |
| DeltaBlue | 108936 | 54243 | 54567 | 78185 | 74660 | 73153 | 74912 | 75302 | 24831 | 13402 | 13131 | 12635 | 27327 | 428 | 1053 | 674 | 668 | 685 | 624 | 589 | 583 | 525 | 578 | 470 | 326 | 393 | 362 | 360 | 323 | 163 | 246 | 164 | 110 | 54 | 55 | 267 | 32 |  | 186 |  |
| Crypto | 41067 | 51829 | 48596 | 41783 | 41795 | 41717 | 41761 | 41046 | 31847 | 20529 | 17698 | 17679 | 13582 | 8950 | 1365 | 591 | 742 | 522 | 557 | 551 | 537 | 882 | 377 | 898 | 789 | 416 | 186 | 187 | 184 | 127 | 124 | 329 | 98 | 79 | 62 | 299 | 31 |  | 135 |  |
| RayTrace | 113144 | 121802 | 112848 | 71853 | 68455 | 67635 | 67413 | 55869 | 35445 | 27380 | 26909 | 28120 | 7252 | 1477 | 1533 | 1124 | 912 | 1054 | 959 | 888 | 908 | 680 | 711 | 575 | 582 | 455 | 536 | 523 | 485 | 430 | 271 | 500 | 255 | 163 | 137 | 349 | 94 |  | 425 |  |
| EarleyBoyer | 88594 | 68861 | 67067 | 68717 | 74359 | 71139 | 73330 | 70460 | 7073 | 41028 | 36426 | 36602 | 36118 | 1245 | 3430 | 1873 | 1480 | 1747 | 1424 | 1389 | 1392 | 1672 | 1228 | 757 | 576 | 866 | 559 | 539 | 514 | 572 | 502 | 325 | 288 | 191 | 136 |  | 80 |  | 502 |  |
| RegExp | 10567 | 19871 | 21205 | 10132 | 10011 | 10122 | 10001 | 8874 | 7795 | 8837 | 8928 | 8892 | 1328 | 1047 | 557 | 250 | 225 | 228 | 234 | 222 | 224 | 116 | 181 | 64 | 132 | 180 | 241 | 219 | 200 | 461 | 209 | 96 | 252 | 48 | 94 |  |  |  |  |  |
| Splay | 41406 | 37087 | 36369 | 38056 | 36500 | 36190 | 28937 | 31024 | 19908 | 24407 | 12110 | 12436 | 2674 | 4148 | 3639 | 2371 | 1787 | 1851 | 1825 | 2249 | 2212 | 2096 | 1683 | 1271 | 1307 | 1264 | 1361 | 905 | 718 | 849 | 804 | 367 | 534 | 203 | 317 |  | 88 |  | 732 |  |
| NavierStokes | 38881 | 40176 | 39880 | 38694 | 38842 | 38803 | 38732 | 38469 | 36841 | 22238 | 22149 | 22112 | 32402 | 14246 | 1865 | 947 | 1294 | 1005 | 988 | 971 | 976 | 1220 | 930 | 1519 | 956 | 674 | 465 | 481 | 474 | 187 | 203 | 811 | 164 | 171 | 118 |  | 51 |  | 278 |  |
| Score | 48125 | 48026 | 47406 | 40791 | 40678 | 40043 | 39281 | 37835 | 20098 | 19423 | 17224 | 17092 | 11859 | 2972 | 1540 | 867 | 834 | 816 | 772 | 761 | 759 | 738 | 648 | 570 | 503 | 493 | 412 | 381 | 351 | 272 | 270 | 263 | 192 | 104 | 104 |  |  |  |  |  |
| Score/MB | 845 | 1318 | 481 | 624 | 381 | 325 | 592 | 930 | 1035 | 483 | 337 | 485 | 59 | 2 | 42 | 70 | 195 | 158 | 951 | 546 | 539 | 87 | 328 | 12 | 236 |  | 944 | 569 | 867 | 103151 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 39 | 34 | 47 | 48 | 50 | 50 | 52 | 52 | 61 | 58 | 86 | 68 | 63 | 80 | 83 | 85 | 102 | 113 | 131 | 143 | 238 | 235 | 31 | 403 |  | 88 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bare | deno | bun | dune | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | quickjs-ng | txiki.js | llrt | njs | rquickjs | quickjs | duktape | ladybird | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.101 |  |  | 2.4.4 | 1.2.20 | 0.10.1 | 24.6.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 0.8.0 | 24.12.0 | 0.6.2.beta | 0.9.2 |  | 2025.04.26 | 2.99.99 |  |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 45.6M | 85.6M | 56.8M | 56.8M | 111.5M | 132.3M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 4.1M | 3.6M | 10.5M | 2.4M | 1.2M | 975.9K | 562.1K | 41.5M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.1M | 0.2K | 45.6M | 85.6M | 56.8M | 56.8M | 111.5M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 2.1M | 3.6M | 10.5M | 1.8M | 1.2M | 975.9K | 562.1K | 41.5M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42359 | 47640 | 42331 | 45007 | 44915 | 39941 | 42285 | 14813 | 14601 | 11741 | 31684 | 18459 | 1273 | 1016 | 1278 | 1071 | 1009 | 734 | 801 | 828 | 509 | 540 | 503 | 283 | 111 | 311 | 198 | 143 | 73 | 36 | 198 | 25 |  | 122 |
| DeltaBlue | 128890 | 67890 | 106404 | 100070 | 63533 | 110728 | 83249 | 16972 | 16126 | 12410 | 18877 | 1267 | 1155 | 1263 | 1081 | 851 | 971 | 794 | 927 | 810 | 589 | 520 | 573 | 384 | 210 | 352 | 214 | 151 | 65 | 36 | 215 | 36 |  | 224 |
| Crypto | 59121 | 71056 | 54859 | 53442 | 63488 | 59315 | 52221 | 25311 | 18699 | 18200 | 35269 | 16826 | 1078 | 1728 | 1112 | 809 | 759 | 1175 | 911 | 974 | 1303 | 1299 | 455 | 258 | 387 | 177 | 163 | 112 | 94 | 36 | 222 | 42 |  | 141 |
| RayTrace | 102414 | 134678 | 84359 | 82805 | 144594 | 87023 | 77551 | 47803 | 38405 | 30679 | 2474 | 1079 | 2151 | 1540 | 1406 | 1903 | 1386 | 1027 | 1187 | 962 | 977 | 836 | 744 | 919 | 612 | 289 | 504 | 316 | 163 | 37 | 296 | 137 |  | 636 |
| EarleyBoyer | 101532 | 78703 | 77461 | 97845 | 71254 | 90927 | 80026 | 47386 | 36301 | 39322 | 47919 | 1082 | 4841 | 1545 | 2506 | 2472 | 1799 | 2514 | 1565 | 1720 | 1050 | 967 | 1217 | 986 | 381 | 717 | 449 | 341 | 181 | 76 |  | 104 |  | 710 |
| RegExp | 11740 | 23184 | 14413 | 14050 | 25391 | 12116 | 11365 | 9200 | 8529 | 10717 | 1272 | 1256 | 655 | 299 | 265 | 253 | 232 | 205 | 232 | 205 | 194 | 86 | 226 | 335 | 286 | 256 | 414 | 178 | 112 | 13 |  |  |  |  |
| Splay | 51225 | 34568 | 50044 | 42889 | 27376 | 26069 | 34194 | 21000 | 14709 | 17072 | 3007 | 2990 | 3522 | 3370 | 2440 | 2684 | 2817 | 1726 | 2186 | 1547 | 1954 | 1972 | 1451 | 1311 | 485 | 750 | 793 | 530 | 400 | 129 |  | 75 |  | 1001 |
| NavierStokes | 35764 | 36137 | 39652 | 37433 | 28436 | 29857 | 31758 | 17180 | 19806 | 19440 | 24217 | 11631 | 1540 | 3634 | 1896 | 1636 | 1199 | 1720 | 1429 | 2096 | 1365 | 1823 | 813 | 711 | 874 | 237 | 182 | 160 | 192 | 71 |  | 60 |  | 310 |
| Score | 53990 | 53834 | 51057 | 50748 | 49644 | 45863 | 44012 | 21626 | 18746 | 18073 | 11107 | 3450 | 1663 | 1448 | 1267 | 1184 | 1048 | 1009 | 988 | 960 | 822 | 742 | 649 | 546 | 355 | 341 | 314 | 211 | 136 | 44 |  |  |  |  |
| Score/MB | 1312 | 328192095 | 1120 | 592 | 873 | 807 | 394 | 163 | 571 | 389 | 57 |  | 105 | 822 | 307 | 328 | 99 | 420 | 825 | 1007 | 1497 | 17 |  | 1303 | 224 | 26 | 119078 | 2 | 10 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 38 | 33 | 38 | 39 | 42 | 45 | 49 | 45 | 46 | 50 | 69 | 55 | 57 | 100 | 93 | 102 | 137 | 179 | 618 | 40 | 342 |  | 77 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-emscripten | quickjs-ng | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.101 |  | 1.2.20 |  | 24.6.0 | 2.4.4 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  |  | 0.8.0 | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.7M | 57M | 116.4M | 143.1M | 77.6M | 14.4M | 51.7M | 72.8M | 196.1M | 17.4M | 112.8M | 37M | 11.8M | 9.2M | 42.2M | 9M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 112.9M | 26.1M | 85.3M | 110.8M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 0 | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 30.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.6M | 30.2M | 195.8M | 17.4M | 109.8M | 31.3M | 6.9M | 7.8M | 29.1M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 36714 | 35150 | 35796 | 31719 | 31867 | 28337 | 31391 | 24256 | 14040 | 14181 | 25187 | 9196 | 699 | 455 | 511 | 409 | 384 | 445 | 389 | 434 | 212 | 240 | 229 | 197 | 101 | 54 | 48 |  | 21 |  |  |
| DeltaBlue | 103085 | 43724 | 42263 | 62052 | 70436 | 58918 | 69232 | 24603 | 13356 | 12701 | 19829 | 218 | 615 | 410 | 465 | 403 | 357 | 456 | 390 | 396 | 260 | 338 | 312 | 227 | 114 | 48 | 41 |  | 24 |  |  |
| Crypto | 39199 | 48393 | 43762 | 39349 | 41023 | 40637 | 40415 | 33087 | 20353 | 17198 | 17075 | 2076 | 785 | 422 | 542 | 515 | 427 | 327 | 423 | 375 | 311 | 176 | 189 | 112 | 88 | 58 | 74 |  | 29 |  |  |
| RayTrace | 111812 | 103820 | 85617 | 70743 | 61937 | 64897 | 54389 | 41217 | 28268 | 27103 | 4031 | 1554 | 1002 | 744 | 545 | 567 | 583 | 582 | 459 | 574 | 435 | 461 | 469 | 222 | 265 | 123 | 132 |  | 81 |  |  |
| EarleyBoyer | 83468 | 57544 | 54242 | 63199 | 63671 | 67094 | 62771 | 40987 | 38114 | 35777 | 18532 | 1479 | 2194 | 1136 | 997 | 989 | 994 | 916 | 881 | 959 | 500 | 541 | 561 | 443 | 293 | 118 | 130 |  | 70 |  |  |
| RegExp | 9637 | 17200 | 16365 | 9890 | 9292 | 9599 | 9255 | 9656 | 9137 | 8594 | 937 | 952 | 397 | 193 | 188 | 164 | 180 | 153 | 175 | 186 | 108 | 195 | 236 | 191 | 274 | 85 | 41 |  |  |  |  |
| Splay | 39376 | 29386 | 27161 | 33085 | 29223 | 30070 | 23959 | 18507 | 20943 | 10853 | 1986 | 4193 | 2359 | 1442 | 993 | 1164 | 1246 | 1197 | 1249 | 904 | 921 | 1141 | 590 | 735 | 527 | 290 | 143 |  | 73 |  |  |
| NavierStokes | 37359 | 32615 | 32648 | 37545 | 36915 | 36915 | 37470 | 36766 | 21602 | 21116 | 22956 | 3262 | 1076 | 730 | 1034 | 738 | 717 | 757 | 744 | 680 | 1071 | 472 | 472 | 185 | 148 | 112 | 167 |  | 48 |  |  |
| Score | 45879 | 40560 | 38123 | 37897 | 37165 | 36496 | 35445 | 26158 | 19002 | 16653 | 8499 | 1828 | 965 | 584 | 584 | 535 | 521 | 515 | 505 | 503 | 376 | 373 | 352 | 244 | 190 | 94 | 84 |  |  |  |  |
| Score/MB | 847 | 332 | 287 | 665 | 319 | 255 | 456 | 1815 | 367 | 228 | 43 | 105 | 8 | 15 | 49 | 58 | 12 | 57 |  | 56 | 49 | 49 | 46 | 12 | 1 | 2 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 40 | 42 | 61 | 58 | 62 | 62 | 67 | 63 | 63 | 84 | 87 | 81 | 126 | 151 | 256 | 299 | 132 | 443 |  |  |
