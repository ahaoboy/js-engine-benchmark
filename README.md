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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48155<br>36.5M<br>1319/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47873<br>98.6M<br>485/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46976<br>58M<br>810/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41841<br>108.8M<br>384/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39848<br>123.3M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38912<br>66.3M<br>586/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38573<br>40.7M<br>948/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20043<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19415<br>39.8M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16997<br>51M<br>333/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16907<br>35.2M<br>480/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12469<br>199.7M<br>62/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2331<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1533<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 864<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 820<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 767<br>831.3K<br>944/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 761<br>1.4M<br>546/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 746<br>1.4M<br>530/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 735<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 541<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 490<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 486<br>2.1M<br>228/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 394<br>685K<br>588/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 393<br>446.6K<br>901/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 312<br>2.7K<br>118320/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 260<br>2.1M<br>124/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 187<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 103<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/12/2025, 12:53:43 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.21 | 14.2.0 | 2.5.0 | 24.8.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.5M | 98.6M | 58M | 108.8M | 123.3M | 66.3M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Exe size | 36.5M | 98.6M | 1M | 108.8M | 123.3M | 66.3M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.4M | 0 | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.5M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.9M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41370 | 41692 | 38437 | 35570 | 32439 | 32947 | 32347 | 23356 | 13538 | 14004 | 12564 | 41339 | 10972 | 1138 | 683 | 690 | 712 | 626 | 573 | 566 | 554 | 576 | 487 | 337 | 257 | 244 | 280 | 226 | 136 | 204 | 90 | 103 | 58 | 58 | 279 | 29 |  | 124 |  |
| DeltaBlue | 56802 | 57106 | 108367 | 79467 | 73226 | 73728 | 79864 | 25537 | 13541 | 13151 | 12840 | 27082 | 363 | 1051 | 664 | 666 | 686 | 618 | 581 | 570 | 545 | 577 | 440 | 388 | 309 | 355 | 361 | 317 | 181 | 251 | 163 | 114 | 54 | 54 | 286 | 34 |  | 178 |  |
| Crypto | 51792 | 49106 | 40708 | 40527 | 41509 | 41513 | 41037 | 31916 | 20399 | 17450 | 17813 | 12634 | 8051 | 1369 | 589 | 749 | 527 | 565 | 570 | 539 | 870 | 380 | 864 | 412 | 785 | 188 | 187 | 184 | 153 | 124 | 323 | 99 | 80 | 61 | 298 | 36 |  | 134 |  |
| RayTrace | 120618 | 118472 | 107446 | 69855 | 65933 | 66895 | 60901 | 35114 | 27399 | 26566 | 27972 | 11583 | 1251 | 1553 | 1139 | 916 | 1062 | 967 | 926 | 902 | 681 | 724 | 542 | 454 | 561 | 526 | 540 | 494 | 488 | 273 | 500 | 254 | 161 | 135 | 350 | 102 |  | 414 |  |
| EarleyBoyer | 66324 | 67020 | 78281 | 76295 | 71531 | 71747 | 70609 | 7059 | 40716 | 36232 | 36473 | 33813 | 1021 | 3425 | 1849 | 1465 | 1751 | 1379 | 1364 | 1354 | 1669 | 1214 | 746 | 852 | 555 | 522 | 549 | 493 | 586 | 503 | 324 | 282 | 176 | 134 |  | 88 |  | 507 |  |
| RegExp | 20042 | 21141 | 10466 | 10203 | 9971 | 10132 | 8892 | 7780 | 8793 | 8676 | 8938 | 1324 | 550 | 554 | 250 | 229 | 226 | 233 | 226 | 220 | 115 | 184 | 64 | 180 | 134 | 214 | 241 | 196 | 462 | 208 | 87 | 246 | 48 | 93 |  |  |  |  |  |
| Splay | 36785 | 35251 | 41023 | 39010 | 35465 | 27650 | 31488 | 19356 | 24911 | 11956 | 11873 | 2637 | 2931 | 3444 | 2314 | 1786 | 1905 | 1789 | 2165 | 2125 | 2045 | 1659 | 991 | 1258 | 1265 | 1234 | 891 | 1303 | 985 | 944 | 357 | 445 | 214 | 319 |  | 134 |  | 851 |  |
| NavierStokes | 40284 | 39880 | 38732 | 38655 | 38655 | 38765 | 38397 | 36655 | 22090 | 21706 | 21454 | 30213 | 13208 | 1833 | 949 | 1249 | 991 | 984 | 953 | 968 | 1214 | 927 | 1537 | 703 | 954 | 491 | 475 | 484 | 182 | 201 | 867 | 164 | 176 | 118 |  | 55 |  | 279 |  |
| Score | 48155 | 47873 | 46976 | 41841 | 39848 | 38912 | 38573 | 20043 | 19415 | 16997 | 16907 | 12469 | 2331 | 1533 | 864 | 835 | 820 | 767 | 761 | 746 | 735 | 649 | 541 | 490 | 486 | 394 | 393 | 376 | 312 | 277 | 260 | 187 | 103 | 103 |  |  |  |  |  |
| Score/MB | 1319 | 485 | 810 | 384 | 323 | 586 | 948 | 1032 | 487 | 333 | 480 | 62 | 2 | 42 | 70 | 195 | 158 | 944 | 546 | 530 | 87 | 329 | 11 |  | 228 | 588 | 901 | 928 | 118320 | 21 | 124 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 38 | 34 | 47 | 48 | 50 | 51 | 52 | 53 | 61 | 59 | 86 | 63 | 69 | 81 | 80 | 86 | 97 | 114 | 134 | 143 | 243 | 238 | 31 | 360 |  | 88 | 7 |
### macos-arm64
| Engine | bun | dune | node | deno | JavaScriptCore | v8 | mozjs | spiderfire | spidermonkey | graaljs | jjs | hermes | primjs | llrt | txiki.js | quickjs-ng | quickjs | njs | ladybird | rquickjs | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.21 | 0.10.1 | 24.8.0 | 2.5.0 |  | 14.2.104 |  |  | 143.0 | 24.1.2 |  | 0.12.0 |  | 0.6.2.beta | 24.12.0 | 0.8.0 | 2025.04.26 | 0.9.2 |  |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 56.8M | 111.8M | 87.9M | 0.2K | 41.5M | 32.8M | 46.3M | 131.7M | 194M | 0 | 15.7M | 1.8M | 10.5M | 3.6M | 4.1M | 975.9K | 2.4M | 41.4M | 1.2M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 56.8M | 56.8M | 111.8M | 87.9M | 0.2K | 41.5M | 32.8M | 46.3M | 65.9M | 147.4K | 0 | 7.9M | 1.8M | 10.5M | 3.6M | 2.1M | 975.9K | 1.8M | 41.4M | 1.2M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 47336 | 46532 | 42698 | 40325 | 28326 | 29124 | 11360 | 14131 | 10806 | 24185 | 17605 | 1179 | 872 | 936 | 890 | 829 | 744 | 723 | 753 | 655 | 310 | 494 | 319 | 292 | 143 | 101 | 187 | 98 | 37 | 176 | 35 |  | 218 |
| DeltaBlue | 71388 | 110992 | 83500 | 82621 | 63678 | 77755 | 16483 | 16199 | 15716 | 2844 | 517 | 990 | 950 | 964 | 880 | 736 | 711 | 635 | 538 | 503 | 407 | 639 | 502 | 309 | 247 | 164 | 185 | 71 | 38 | 207 | 49 |  | 236 |
| Crypto | 67189 | 58501 | 48901 | 42029 | 52674 | 37747 | 21491 | 20731 | 19272 | 21249 | 10528 | 1115 | 1362 | 758 | 796 | 893 | 953 | 1043 | 1378 | 565 | 952 | 500 | 223 | 156 | 135 | 350 | 156 | 93 | 39 | 236 | 48 |  | 140 |
| RayTrace | 138156 | 90131 | 70817 | 69189 | 112108 | 73851 | 47756 | 36815 | 36445 | 3280 | 1131 | 1843 | 998 | 1602 | 1459 | 1120 | 1022 | 930 | 864 | 897 | 976 | 564 | 552 | 357 | 692 | 612 | 321 | 211 | 38 | 247 | 135 |  | 616 |
| EarleyBoyer | 64048 | 75130 | 77739 | 82510 | 68976 | 66130 | 44934 | 33028 | 38174 | 23129 | 1097 | 4101 | 1877 | 2170 | 1885 | 1703 | 1851 | 2052 | 949 | 1497 | 929 | 1204 | 662 | 581 | 706 | 319 | 402 | 181 | 76 |  | 111 |  | 579 |
| RegExp | 21638 | 13715 | 12183 | 12612 | 14260 | 9001 | 11149 | 9556 | 7389 | 863 | 845 | 530 | 200 | 179 | 218 | 218 | 175 | 184 | 91 | 191 | 184 | 201 | 250 | 227 | 556 | 238 | 213 | 125 | 13 |  |  |  |  |
| Splay | 26470 | 30517 | 29418 | 30192 | 19361 | 29125 | 18604 | 15418 | 21978 | 2143 | 1602 | 2996 | 1997 | 2418 | 2299 | 1483 | 1222 | 1083 | 1657 | 1889 | 1887 | 1662 | 748 | 1031 | 652 | 413 | 539 | 406 | 129 |  | 195 |  | 692 |
| NavierStokes | 28556 | 37359 | 31874 | 32435 | 23354 | 27076 | 20357 | 19472 | 18734 | 17921 | 13349 | 1420 | 2415 | 1271 | 1516 | 1715 | 1470 | 1524 | 1856 | 1127 | 1094 | 864 | 637 | 251 | 177 | 962 | 246 | 190 | 63 |  | 95 |  | 287 |
| Score | 48931 | 48767 | 42658 | 42102 | 38410 | 36222 | 20904 | 18939 | 18522 | 6617 | 2610 | 1473 | 1093 | 1034 | 1034 | 933 | 860 | 852 | 774 | 751 | 672 | 647 | 446 | 338 | 333 | 319 | 258 | 149 | 45 |  |  |  |  |
| Score/MB | 861 | 858 | 381 | 478 | 234161652 | 872 | 636 | 408 | 140 | 34 |  | 93 | 621 | 98 | 286 | 226 | 902 | 356 | 18 | 627 | 1224 |  | 1064 | 26 | 126284 | 201 | 3 | 12 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 38 | 35 | 45 | 48 | 45 | 45 | 50 | 52 | 68 | 52 | 55 | 54 | 70 | 95 | 100 | 110 | 111 | 165 | 645 | 40 | 263 |  | 83 |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | jjs | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.104 |  | 2.5.0 | 1.2.21 | 24.8.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 0.12.0 | 1.8.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  | 0.8.0 |  | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.6M | 122.1M | 145.7M | 132.8M | 116.5M | 77.6M | 14.4M | 52.4M | 72.8M | 196.1M | 112.8M | 17.5M | 37.3M | 11.8M | 9.2M | 42.2M | 9M | 9M | 0 | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.7M | 338K | 113.4M | 113M | 85.5M | 47.4M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 0 | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 1.7M | 0 | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 23.9M | 121.8M | 32.3M | 19.8M | 31.1M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 109.8M | 17.5M | 31.6M | 6.9M | 7.8M | 29.1M | 7.9M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38769 | 35108 | 35740 | 29668 | 33014 | 33240 | 24807 | 13725 | 13436 | 35742 | 707 | 2485 | 448 | 508 | 406 | 391 | 444 | 416 | 368 | 215 | 229 | 240 | 186 | 106 | 54 | 49 |  | 25 |  |  |
| DeltaBlue | 110047 | 44524 | 81285 | 39942 | 71150 | 70316 | 28067 | 11987 | 13025 | 30209 | 616 | 225 | 417 | 457 | 397 | 364 | 462 | 396 | 389 | 264 | 310 | 350 | 224 | 117 | 50 | 42 |  | 29 |  |  |
| Crypto | 41521 | 49668 | 38589 | 48761 | 38730 | 41989 | 33732 | 19174 | 17977 | 22301 | 786 | 1793 | 428 | 548 | 514 | 430 | 327 | 361 | 431 | 315 | 185 | 181 | 110 | 90 | 58 | 75 |  | 38 |  |  |
| RayTrace | 112182 | 104856 | 71779 | 100269 | 65563 | 66451 | 49086 | 28313 | 26788 | 3957 | 978 | 1247 | 746 | 548 | 594 | 559 | 576 | 578 | 461 | 438 | 456 | 469 | 226 | 264 | 124 | 134 |  | 84 |  |  |
| EarleyBoyer | 83781 | 63644 | 76608 | 55851 | 71801 | 73834 | 42518 | 42351 | 36585 | 25671 | 2226 | 646 | 1156 | 990 | 1003 | 1016 | 926 | 982 | 855 | 516 | 560 | 575 | 441 | 297 | 123 | 139 |  | 75 |  |  |
| RegExp | 10162 | 18911 | 9981 | 17058 | 9941 | 9628 | 9981 | 9047 | 9047 | 1113 | 400 | 547 | 196 | 187 | 157 | 185 | 146 | 185 | 178 | 110 | 249 | 198 | 192 | 274 | 89 | 42 |  |  |  |  |
| Splay | 42163 | 34715 | 37657 | 33232 | 33770 | 28066 | 26338 | 24415 | 13707 | 3162 | 2359 | 1001 | 1438 | 1018 | 1254 | 1279 | 1246 | 985 | 1261 | 993 | 1172 | 583 | 852 | 513 | 321 | 169 |  | 131 |  |  |
| NavierStokes | 39029 | 33950 | 38951 | 38287 | 38912 | 39029 | 36878 | 22489 | 22275 | 20162 | 1061 | 1140 | 737 | 1033 | 741 | 698 | 761 | 674 | 756 | 1085 | 456 | 477 | 192 | 150 | 114 | 167 |  | 60 |  |  |
| Score | 47928 | 42935 | 41632 | 40347 | 39217 | 38745 | 28814 | 19242 | 17429 | 10713 | 964 | 918 | 588 | 584 | 540 | 525 | 515 | 504 | 504 | 385 | 381 | 350 | 248 | 192 | 97 | 87 |  |  |  |  |
| Score/MB | 893 | 351 | 285 | 303 | 336 | 498 | 1999 | 367 | 239 | 54 | 8 | 52 | 15 | 49 | 58 | 12 | 57 | 56 |  | 50 | 50 | 46 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 49 | 59 | 58 | 62 | 61 | 68 | 63 | 63 | 83 | 81 | 83 | 125 | 147 | 251 | 285 | 132 | 371 |  |  |
