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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47674<br>98.9M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47592<br>36.7M<br>1295/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46718<br>57.5M<br>812/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42101<br>108.9M<br>386/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39737<br>123.3M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39094<br>40.7M<br>961/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 38696<br>66.3M<br>583/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20264<br>19.4M<br>1044/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19469<br>40.1M<br>486/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17121<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16822<br>35.2M<br>477/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10736<br>199.7M<br>53/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2621<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1530<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 924<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 834<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 755<br>1.4M<br>536/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 754<br>831.3K<br>928/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 742<br>1.4M<br>533/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 621<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 497<br>2.1M<br>233/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 396<br>685K<br>591/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 392<br>446.6K<br>898/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 349<br>414.5K<br>862/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 305<br>2.7K<br>115665/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| rhino | [rhino](https://github.com/mozilla/rhino) | 290<br>1.1G | ✅unix<br>✅macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/23/2025, 6:29:46 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | primjs | rquickjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | rhino | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.0 | 2.5.1 | 24.8.0 |  | 0.10.1 | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |
| Total size | 98.9M | 36.7M | 57.5M | 108.9M | 123.3M | 40.7M | 66.3M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 1.1G | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Exe size | 98.9M | 36.7M | 1M | 108.9M | 123.3M | 40.7M | 66.3M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 831.3K | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 2.7K | 1.1G | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 42M |
| Dll size | 0 | 0 | 56.5M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41088 | 40541 | 37565 | 35408 | 32174 | 33505 | 32760 | 23631 | 13694 | 14167 | 12282 | 35697 | 13284 | 1118 | 708 | 686 | 708 | 564 | 629 | 578 | 561 | 586 | 499 | 291 | 344 | 246 | 270 | 225 | 136 | 119 | 203 | 89 | 104 | 60 | 58 | 278 | 26 |  |  |
| DeltaBlue | 55413 | 55929 | 100129 | 79745 | 72492 | 74059 | 73325 | 25723 | 13336 | 13105 | 12741 | 26249 | 280 | 1018 | 693 | 666 | 679 | 587 | 619 | 588 | 541 | 575 | 461 | 315 | 389 | 355 | 358 | 316 | 175 | 172 | 250 | 162 | 115 | 54 | 54 | 280 | 32 |  |  |
| Crypto | 49428 | 51876 | 38484 | 41750 | 41896 | 41224 | 41637 | 32375 | 20464 | 17716 | 17719 | 14020 | 9076 | 1371 | 679 | 738 | 604 | 530 | 546 | 549 | 883 | 381 | 885 | 772 | 407 | 188 | 189 | 182 | 157 | 136 | 123 | 328 | 96 | 79 | 62 | 303 | 38 |  |  |
| RayTrace | 109444 | 112034 | 111072 | 69707 | 65711 | 61345 | 68227 | 35706 | 28018 | 27158 | 27528 | 5920 | 1464 | 1570 | 1197 | 901 | 1069 | 926 | 950 | 910 | 684 | 712 | 774 | 572 | 446 | 522 | 540 | 485 | 486 | 412 | 270 | 500 | 254 | 164 | 135 | 347 | 98 |  |  |
| EarleyBoyer | 67603 | 67246 | 82365 | 77438 | 70485 | 69826 | 73496 | 7096 | 41398 | 36569 | 36118 | 33486 | 1120 | 3355 | 1891 | 1470 | 1752 | 1385 | 1398 | 1250 | 1673 | 1214 | 973 | 581 | 849 | 524 | 562 | 487 | 586 | 521 | 496 | 323 | 284 | 188 | 134 |  | 83 |  |  |
| RegExp | 20911 | 20113 | 10557 | 10122 | 9981 | 8919 | 10132 | 7902 | 8874 | 8910 | 8676 | 1013 | 686 | 555 | 266 | 230 | 228 | 218 | 234 | 226 | 115 | 182 | 64 | 131 | 178 | 214 | 240 | 198 | 408 | 384 | 206 | 96 | 251 | 47 | 93 |  |  |  |  |
| Splay | 38284 | 36789 | 41952 | 39605 | 35530 | 36361 | 28188 | 19642 | 24203 | 11506 | 12232 | 3472 | 4046 | 3599 | 2396 | 1779 | 1923 | 2202 | 1726 | 2084 | 2096 | 1662 | 1451 | 1307 | 1222 | 1301 | 895 | 761 | 950 | 766 | 829 | 374 | 450 | 218 | 314 |  | 136 |  |  |
| NavierStokes | 40028 | 40136 | 38694 | 38694 | 38732 | 38397 | 35101 | 36730 | 22171 | 22045 | 21919 | 19273 | 14514 | 1827 | 1107 | 1284 | 978 | 973 | 913 | 916 | 1218 | 930 | 1540 | 925 | 681 | 487 | 466 | 478 | 179 | 282 | 198 | 852 | 163 | 161 | 119 |  | 60 |  |  |
| Score | 47674 | 47592 | 46718 | 42101 | 39737 | 39094 | 38696 | 20264 | 19469 | 17121 | 16822 | 10736 | 2621 | 1530 | 924 | 834 | 833 | 755 | 754 | 742 | 740 | 648 | 621 | 497 | 485 | 396 | 392 | 349 | 305 | 290 | 270 | 264 | 188 | 104 | 103 |  |  |  |  |
| Score/MB | 482 | 1295 | 812 | 386 | 322 | 961 | 583 | 1044 | 486 | 335 | 477 | 53 | 2 | 42 | 75 | 195 | 161 | 536 | 928 | 533 | 87 | 328 | 13 | 233 |  | 591 | 898 | 862 | 115665 |  | 20 | 126 | 2 | 3 | 8 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 22 | 41 | 34 | 43 | 48 | 49 | 53 | 51 | 53 | 61 | 58 | 81 | 68 | 63 | 82 | 80 | 86 | 97 | 97 | 115 | 131 | 144 | 242 | 237 | 31 | 359 |  | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | node | deno | spidermonkey | spiderfire | mozjs | graaljs | jjs | primjs | hermes | rquickjs | txiki.js | quickjs-ng | quickjs | njs | llrt | ladybird | duktape | quickjs-emscripten | mujs | rhino | goja | xst | ringo | jint | kiesel | hako | JerryScript | nova | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.188 | 0.10.1 | 1.2.22 | 24.8.0 | 2.5.1 | 144.0 |  |  | 24.1.2 |  |  | 0.12.0 |  | 24.12.0 | 0.8.0 | 2025.04.26 | 0.9.2 | 0.7.0.beta |  | 2.99.99 |  | 1.3.5 |  |  | 16.9.1 | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |
| Total size | 0.2K | 41.1M | 56.8M | 57.1M | 111.8M | 88M | 132.6M | 46.3M | 32.8M | 194M | 0 | 1.8M | 15.7M | 1.2M | 3.6M | 4.1M | 975.9K | 2.4M | 10.6M | 41.5M | 562.1K | 0 | 429.1K | 0 | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 7.4M | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 57.1M | 111.8M | 88M | 66.3M | 46.3M | 32.8M | 147.4K | 0 | 1.8M | 7.9M | 1.2M | 3.6M | 2.1M | 975.9K | 1.8M | 10.6M | 41.5M | 562.1K | 0 | 429.1K | 0 | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 7.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.3M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 43686 | 44248 | 43926 | 40333 | 39355 | 34723 | 13591 | 14004 | 11046 | 24669 | 2281 | 1026 | 1032 | 921 | 661 | 940 | 822 | 653 | 683 | 828 | 480 | 581 | 268 | 186 | 230 | 104 | 174 | 130 | 102 | 39 | 200 | 34 |  |
| DeltaBlue | 73933 | 127661 | 103633 | 54850 | 92334 | 57675 | 15663 | 15809 | 12886 | 13296 | 369 | 1284 | 850 | 912 | 697 | 797 | 791 | 732 | 641 | 719 | 468 | 665 | 377 | 214 | 287 | 159 | 172 | 164 | 84 | 40 | 221 | 37 |  |
| Crypto | 65100 | 52215 | 52454 | 51638 | 51550 | 34979 | 22041 | 20287 | 15425 | 22694 | 4101 | 1757 | 1051 | 915 | 770 | 839 | 927 | 1031 | 503 | 1388 | 1031 | 571 | 185 | 128 | 156 | 380 | 120 | 119 | 101 | 43 | 255 | 61 |  |
| RayTrace | 163538 | 137786 | 70232 | 122320 | 85395 | 60679 | 49135 | 38701 | 42031 | 3118 | 1283 | 1855 | 1638 | 1093 | 1491 | 1019 | 852 | 849 | 1229 | 1262 | 1013 | 766 | 650 | 597 | 410 | 582 | 614 | 395 | 162 | 43 | 324 | 160 |  |
| EarleyBoyer | 101161 | 108609 | 87438 | 70630 | 86346 | 72905 | 52707 | 38837 | 47440 | 2540 | 1604 | 1074 | 3782 | 2024 | 1984 | 1682 | 1599 | 1977 | 1548 | 1631 | 960 | 1388 | 770 | 657 | 698 | 357 | 749 | 412 | 172 | 85 |  | 111 |  |
| RegExp | 25457 | 13896 | 13819 | 25300 | 9103 | 10323 | 12794 | 10233 | 11376 | 905 | 636 | 299 | 528 | 220 | 215 | 196 | 186 | 188 | 241 | 85 | 210 | 250 | 308 | 573 | 251 | 280 | 506 | 211 | 107 | 15 |  |  |  |
| Splay | 53734 | 56921 | 45928 | 31871 | 20927 | 23478 | 30453 | 14653 | 12363 | 2600 | 1797 | 4250 | 2697 | 2643 | 1920 | 1648 | 1472 | 1191 | 2971 | 1045 | 1426 | 1443 | 774 | 1031 | 1051 | 481 | 862 | 631 | 390 | 149 |  | 182 |  |
| NavierStokes | 33357 | 38101 | 38578 | 36915 | 17015 | 24189 | 20210 | 19994 | 16769 | 17146 | 10801 | 3402 | 1138 | 1582 | 1476 | 1369 | 1622 | 1617 | 784 | 1317 | 1338 | 930 | 642 | 318 | 274 | 1019 | 159 | 256 | 176 | 76 |  | 93 |  |
| Score | 59577 | 58276 | 49476 | 48250 | 38139 | 34073 | 23583 | 19421 | 17854 | 6267 | 1749 | 1454 | 1321 | 1058 | 945 | 912 | 882 | 860 | 834 | 817 | 740 | 728 | 441 | 373 | 347 | 340 | 321 | 248 | 143 | 50 |  |  |  |
| Score/MB | 363203560 | 1417 | 871 | 845 | 341 | 387 | 177 | 419 | 543 | 32 |  | 826 | 84 | 884 | 262 | 221 | 925 | 359 | 78 | 19 | 1347 |  | 1052 |  | 27 | 215 | 121733 | 3 | 11 | 47 |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 37 | 37 | 35 | 44 | 46 | 48 | 48 | 51 | 50 | 66 | 51 | 50 | 69 | 85 | 92 | 97 | 102 | 116 | 176 | 569 | 35 | 255 |  |
### windows
| Engine | v8 | deno | JavaScriptCore | node | dune | bun | ChakraCore | spiderfire | spidermonkey | graaljs | hermes | quickjs | txiki.js | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | rquickjs | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.188 | 2.5.1 |  | 24.8.0 | 0.10.1 | 1.2.22 | 1.11.24.0 |  | 144.0 | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.7.0.beta |  | 0.8.0 |  |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 149.5M | 125.1M | 120.9M | 82.1M | 139.4M | 15.7M | 80.8M | 53.9M | 197M | 89.7M | 12.8M | 43.2M | 45.7M | 10.2M | 10.1M | 0 | 10.5M | 8.5M | 8.5M | 8.6M | 20.5M | 99.3M | 47.6M | 43.9M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.3M | 113.5M | 339.5K | 85.5M | 47.4M | 113.3M | 342.9K | 42.6M | 34M | 349.1K | 3M | 4.9M | 5.7M | 13.1M | 1M | 1.7M | 0 | 1.4M | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.5M | 36.1M | 124.8M | 35.5M | 34.8M | 26.1M | 15.3M | 38.1M | 20M | 196.7M | 86.7M | 7.9M | 37.5M | 32.6M | 9.2M | 8.5M | 0 | 9.1M | 7.8M | 7.8M | 7.8M | 7.2M | 30.5M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35168 | 34977 | 32001 | 32241 | 29654 | 26755 | 23469 | 13754 | 13175 | 35298 | 676 | 503 | 440 | 377 | 431 | 425 | 335 | 241 | 254 | 246 | 204 | 184 | 104 | 53 | 46 |  | 23 |  |  |
| DeltaBlue | 105048 | 79917 | 35248 | 59136 | 72340 | 28715 | 25508 | 12860 | 13296 | 23178 | 599 | 443 | 395 | 358 | 452 | 390 | 383 | 352 | 345 | 332 | 249 | 223 | 116 | 47 | 41 |  | 26 |  |  |
| Crypto | 36708 | 37611 | 40651 | 40785 | 41356 | 42874 | 32172 | 17941 | 19761 | 20016 | 772 | 539 | 382 | 423 | 319 | 349 | 417 | 487 | 184 | 178 | 299 | 111 | 89 | 57 | 69 |  | 36 |  |  |
| RayTrace | 108408 | 69559 | 89687 | 64083 | 62011 | 86727 | 38515 | 26143 | 27648 | 1688 | 961 | 563 | 736 | 579 | 593 | 594 | 456 | 507 | 392 | 400 | 442 | 217 | 255 | 123 | 124 |  | 80 |  |  |
| EarleyBoyer | 84301 | 70975 | 59412 | 69893 | 71094 | 51767 | 38043 | 35481 | 40408 | 17957 | 2176 | 935 | 1040 | 945 | 896 | 931 | 854 | 965 | 512 | 519 | 457 | 427 | 284 | 117 | 119 |  | 73 |  |  |
| RegExp | 9427 | 9309 | 16274 | 9455 | 8956 | 16472 | 8569 | 8241 | 8758 | 929 | 402 | 183 | 190 | 180 | 152 | 177 | 176 | 160 | 232 | 192 | 108 | 193 | 273 | 84 | 42 |  |  |  |  |
| Splay | 40558 | 31822 | 24887 | 28791 | 25058 | 30649 | 21294 | 13019 | 16363 | 2122 | 2074 | 964 | 1316 | 1269 | 1151 | 923 | 1208 | 1164 | 985 | 902 | 656 | 787 | 388 | 302 | 159 |  | 125 |  |  |
| NavierStokes | 38469 | 38287 | 39474 | 38436 | 38507 | 39583 | 35022 | 21771 | 9037 | 23993 | 1036 | 1025 | 708 | 710 | 731 | 651 | 740 | 733 | 472 | 461 | 1058 | 181 | 146 | 113 | 150 |  | 57 |  |  |
| Score | 45456 | 39467 | 37495 | 37171 | 36822 | 36210 | 25527 | 16969 | 16310 | 8343 | 931 | 572 | 555 | 516 | 505 | 491 | 489 | 479 | 370 | 353 | 351 | 242 | 182 | 93 | 81 |  |  |  |  |
| Score/MB | 735 | 263 | 299 | 307 | 448 | 259 | 1629 | 210 | 302 | 42 | 10 | 44 | 12 | 11 | 49 | 48 |  | 45 | 43 | 41 | 40 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 30 | 25 | 43 | 58 | 62 | 61 | 69 | 65 | 63 | 64 | 82 | 86 | 87 | 126 | 150 | 260 | 307 | 137 | 387 |  |  |
