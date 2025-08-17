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


## Engine & Runtime (34/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47779<br>56.8M<br>841/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46901<br>36.4M<br>1288/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46131<br>98.4M<br>468/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40974<br>65.2M<br>628/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39892<br>106.5M<br>374/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39078<br>123.1M<br>317/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38798<br>66.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 37957<br>40.7M<br>933/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19780<br>19.4M<br>1019/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18912<br>39.6M<br>477/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17098<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17070<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11056<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2261<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1513<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 857<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 820<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 802<br>4.3M<br>187/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 752<br>831.3K<br>926/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 708<br>1.3M<br>525/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 642<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 524<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 490<br>2.1M<br>230/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 378<br>446.6K<br>866/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 361<br>685K<br>539/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 330<br>414.5K<br>815/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 280<br>2.7K<br>106184/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 260<br>13.2M<br>19/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 103<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 29<br>1.1M<br>27/M | ✅unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |

## bench
8/17/2025, 2:13:31 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | xst | goja | jint | boa | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 36.4M | 98.4M | 65.2M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 1.1M | 454.2K | 9.7M | 7.3K | 1.1G |
| Exe size | 1M | 36.4M | 98.4M | 65.2M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 1.1M | 454.2K | 9.7M | 7.3K | 1.1G |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37957 | 40354 | 41678 | 32347 | 33078 | 30776 | 31669 | 33533 | 23462 | 13235 | 14078 | 13358 | 35500 | 13387 | 1123 | 691 | 711 | 686 | 632 | 562 | 594 | 585 | 492 | 282 | 272 | 246 | 219 | 104 | 90 | 198 | 104 | 59 | 59 | 22 | 278 | 24 |  | 133 |
| DeltaBlue | 109577 | 56709 | 55936 | 77094 | 73411 | 71288 | 74469 | 80042 | 24674 | 13131 | 13131 | 12880 | 40834 | 315 | 1017 | 661 | 670 | 659 | 612 | 543 | 584 | 574 | 468 | 314 | 359 | 350 | 319 | 152 | 163 | 241 | 111 | 53 | 54 | 24 | 284 | 27 |  | 173 |
| Crypto | 41294 | 51824 | 49081 | 41495 | 41507 | 41772 | 41521 | 41278 | 31879 | 20441 | 17518 | 17802 | 28659 | 9683 | 1360 | 592 | 588 | 741 | 554 | 883 | 545 | 379 | 873 | 783 | 188 | 187 | 185 | 126 | 327 | 121 | 97 | 79 | 61 | 25 | 301 | 29 |  | 137 |
| RayTrace | 109074 | 109222 | 112256 | 73037 | 68745 | 64527 | 67413 | 54759 | 33898 | 28461 | 26291 | 28239 | 3835 | 1001 | 1567 | 1128 | 1078 | 880 | 965 | 683 | 894 | 743 | 552 | 573 | 394 | 385 | 381 | 487 | 498 | 257 | 246 | 161 | 131 | 26 | 349 | 81 |  | 426 |
| EarleyBoyer | 87300 | 67759 | 60122 | 68361 | 72925 | 70459 | 73946 | 69568 | 7069 | 37914 | 36547 | 36651 | 24965 | 890 | 3341 | 1826 | 1704 | 1328 | 1346 | 1670 | 1289 | 1182 | 703 | 541 | 395 | 434 | 369 | 596 | 321 | 467 | 284 | 179 | 132 | 46 |  | 73 |  | 409 |
| RegExp | 10476 | 19365 | 19982 | 10365 | 10011 | 9930 | 10112 | 8685 | 7690 | 8447 | 8974 | 8819 | 696 | 485 | 545 | 252 | 222 | 222 | 224 | 115 | 222 | 181 | 61 | 133 | 227 | 205 | 187 | 464 | 95 | 204 | 250 | 48 | 92 | 10 |  |  |  |  |
| Splay | 40966 | 34381 | 33330 | 38154 | 32678 | 33933 | 26835 | 30584 | 18857 | 22858 | 11867 | 11723 | 2823 | 3492 | 3309 | 2196 | 1761 | 1540 | 1695 | 2058 | 1387 | 1542 | 789 | 1244 | 1341 | 1089 | 862 | 869 | 355 | 761 | 437 | 202 | 334 | 81 |  | 54 |  | 811 |
| NavierStokes | 38694 | 40068 | 39880 | 38881 | 38803 | 38732 | 38765 | 38436 | 36545 | 22112 | 22045 | 22002 | 28584 | 11075 | 1875 | 943 | 1015 | 1284 | 972 | 1223 | 937 | 926 | 1501 | 930 | 475 | 482 | 478 | 161 | 830 | 192 | 159 | 174 | 119 | 45 |  | 50 |  | 279 |
| Score | 47779 | 46901 | 46131 | 40974 | 39892 | 39078 | 38798 | 37957 | 19780 | 18912 | 17098 | 17070 | 11056 | 2261 | 1513 | 857 | 820 | 802 | 752 | 739 | 708 | 642 | 524 | 490 | 378 | 361 | 330 | 280 | 261 | 260 | 185 | 103 | 103 | 29 |  |  |  |  |
| Score/MB | 841 | 1288 | 468 | 628 | 374 | 317 | 585 | 933 | 1019 | 477 | 335 | 484 | 55 | 1 | 42 | 69 | 158 | 187 | 926 | 87 | 525 | 325 | 11 | 230 | 866 | 539 | 815 | 106184 | 125 | 19 | 2 | 3 | 8 | 27 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 44 | 34 | 47 | 51 | 49 | 52 | 62 | 53 | 58 | 89 | 69 | 85 | 85 | 90 | 104 | 132 | 119 | 144 | 244 | 239 | 886 | 31 | 440 |  | 88 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | dune | deno | bare | node | mozjs | spiderfire | spidermonkey | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs | quickjs-ng | rquickjs | njs | duktape | ladybird | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.79 | 1.2.20 | 0.10.1 | 2.4.4 |  | 24.6.0 |  |  | 142.0 | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 2025.04.26 | 0.8.0 |  | 0.9.2 | 2.99.99 |  | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 85.6M | 45.5M | 111.5M | 32.8M | 46.3M | 131.2M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 975.9K | 4.1M | 1.2M | 2.4M | 562.1K | 41.5M | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 85.6M | 45.5M | 111.5M | 32.8M | 46.3M | 65.6M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 975.9K | 2.1M | 1.2M | 1.8M | 562.1K | 41.5M | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 48163 | 43220 | 37992 | 45038 | 43834 | 41769 | 34914 | 14280 | 14559 | 11314 | 32315 | 19910 | 1273 | 1117 | 1201 | 1016 | 1068 | 1264 | 770 | 708 | 502 | 648 | 283 | 111 | 212 | 229 | 147 | 101 | 31 | 186 | 33 |  | 225 |
| DeltaBlue | 71897 | 128342 | 50217 | 103475 | 95726 | 105161 | 75249 | 16371 | 15366 | 15320 | 34950 | 1593 | 1164 | 1197 | 1215 | 1099 | 1078 | 1157 | 790 | 773 | 587 | 699 | 358 | 201 | 209 | 321 | 155 | 94 | 27 | 207 | 43 |  | 243 |
| Crypto | 72449 | 52333 | 62511 | 55547 | 56142 | 57586 | 45860 | 21226 | 20377 | 22402 | 34384 | 18805 | 1358 | 1680 | 1152 | 901 | 1220 | 1135 | 840 | 1140 | 1267 | 1270 | 231 | 514 | 154 | 152 | 124 | 107 | 38 | 217 | 43 |  | 124 |
| RayTrace | 179891 | 129498 | 143193 | 86875 | 85321 | 96051 | 78513 | 48247 | 40881 | 44103 | 1434 | 973 | 2387 | 1880 | 2033 | 1823 | 1192 | 1465 | 1368 | 1034 | 1048 | 897 | 821 | 659 | 494 | 315 | 243 | 219 | 39 | 273 | 105 |  | 655 |
| EarleyBoyer | 99685 | 90075 | 74742 | 98805 | 89688 | 86625 | 91479 | 45398 | 44674 | 41179 | 41774 | 1153 | 4909 | 3544 | 3017 | 2732 | 2128 | 2392 | 2135 | 2541 | 1079 | 1148 | 991 | 416 | 667 | 732 | 285 | 230 | 67 |  | 105 |  | 706 |
| RegExp | 30882 | 12237 | 27393 | 13847 | 13351 | 12872 | 13910 | 11308 | 11807 | 6910 | 1310 | 1148 | 682 | 300 | 299 | 298 | 265 | 199 | 258 | 203 | 236 | 89 | 327 | 309 | 584 | 285 | 201 | 136 | 12 |  |  |  |  |
| Splay | 45130 | 49384 | 46515 | 42978 | 43321 | 35799 | 35832 | 17814 | 18311 | 16306 | 3451 | 4327 | 4433 | 2459 | 3357 | 4022 | 2225 | 1555 | 1993 | 1866 | 1999 | 1838 | 1038 | 532 | 896 | 1055 | 572 | 486 | 96 |  | 89 |  | 992 |
| NavierStokes | 31663 | 30331 | 34429 | 37694 | 36693 | 33027 | 36101 | 20034 | 19600 | 17790 | 25499 | 17328 | 1406 | 3621 | 2015 | 1639 | 2229 | 1733 | 1621 | 1764 | 1474 | 1586 | 704 | 1399 | 209 | 301 | 178 | 213 | 58 |  | 80 |  | 301 |
| Score | 61267 | 52979 | 52302 | 51547 | 49870 | 48775 | 44570 | 21392 | 20818 | 18569 | 11312 | 3936 | 1779 | 1585 | 1462 | 1331 | 1213 | 1153 | 1028 | 1011 | 858 | 791 | 510 | 405 | 354 | 351 | 212 | 171 | 40 |  |  |  |  |
| Score/MB | 373506429 | 1290 | 920 | 907 | 582 | 1072 | 399 | 651 | 449 | 141 | 58 |  | 113 | 900 | 405 | 126 | 1272 | 279 | 870 | 421 | 1562 | 19 | 1217 | 251 | 134248 | 27 | 2 | 13 | 37 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 36 | 31 | 37 | 37 | 38 | 39 | 43 | 42 | 48 | 47 | 66 | 58 | 89 | 88 | 90 | 133 | 147 | 706 | 37 | 303 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bun | dune | deno | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | quickjs-ng | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino | ringo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.79 |  | 1.2.20 | 0.10.1 | 2.4.4 | 24.6.0 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  | 0.8.0 |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  | 4.0.0 |
| Total size | 54.1M | 122.1M | 132.7M | 77.6M | 143.1M | 116.3M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 37M | 42.2M | 9.3M | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 | 2.7K |
| Exe size | 29.1M | 337.5K | 112.9M | 47.4M | 110.8M | 85.3M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.5M | 1.7M | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 | 2.7K |
| Dll size | 25M | 121.7M | 19.8M | 30.3M | 32.3M | 31.1M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 31.3M | 29.1M | 7.8M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 | 0 |
| Richards | 38797 | 36421 | 36322 | 38687 | 33477 | 32976 | 24221 | 13203 | 13461 | 35697 | 6135 | 693 | 510 | 452 | 391 | 444 | 431 | 229 | 240 | 212 | 191 | 93 | 55 | 47 |  | 21 |  |  |  |
| DeltaBlue | 107971 | 45688 | 37231 | 75923 | 75454 | 75520 | 27737 | 13217 | 13204 | 32696 | 190 | 605 | 462 | 396 | 377 | 410 | 403 | 317 | 337 | 257 | 234 | 118 | 51 | 41 |  | 24 |  |  |  |
| Crypto | 40434 | 48178 | 46262 | 39619 | 42049 | 38470 | 33308 | 20105 | 17986 | 22534 | 2257 | 784 | 543 | 430 | 433 | 484 | 368 | 188 | 183 | 317 | 112 | 93 | 58 | 74 |  | 28 |  |  |  |
| RayTrace | 113292 | 105596 | 101156 | 66747 | 64231 | 66821 | 49012 | 28239 | 27232 | 2366 | 1282 | 1003 | 549 | 717 | 598 | 596 | 582 | 472 | 469 | 436 | 228 | 269 | 127 | 133 |  | 76 |  |  |  |
| EarleyBoyer | 89431 | 61491 | 59261 | 74203 | 70681 | 72788 | 43094 | 39147 | 36721 | 23529 | 919 | 2238 | 1005 | 1000 | 1002 | 984 | 977 | 568 | 579 | 508 | 453 | 296 | 124 | 145 |  | 70 |  |  |  |
| RegExp | 10152 | 18129 | 16695 | 9709 | 9728 | 9871 | 10011 | 9137 | 8801 | 997 | 932 | 401 | 179 | 196 | 194 | 175 | 185 | 253 | 198 | 110 | 200 | 276 | 91 | 43 |  |  |  |  |  |
| Splay | 42196 | 34755 | 32816 | 28546 | 33158 | 32490 | 17937 | 24203 | 14351 | 2286 | 4465 | 2237 | 1024 | 1410 | 1278 | 969 | 993 | 1182 | 1204 | 994 | 759 | 437 | 329 | 168 |  | 55 |  |  |  |
| NavierStokes | 38951 | 33768 | 40068 | 38951 | 38881 | 38951 | 36766 | 22386 | 22193 | 24906 | 3871 | 1069 | 1041 | 739 | 717 | 743 | 680 | 475 | 487 | 1084 | 192 | 152 | 116 | 166 |  | 48 |  |  |  |
| Score | 48096 | 42711 | 41157 | 39741 | 39600 | 39411 | 27338 | 19294 | 17540 | 9771 | 1630 | 957 | 584 | 571 | 536 | 533 | 510 | 389 | 383 | 382 | 249 | 187 | 99 | 87 |  |  |  |  |  |
| Score/MB | 888 | 349 | 310 | 511 | 276 | 338 | 1898 | 377 | 240 | 49 | 92 | 8 | 49 | 15 | 12 | 57 | 56 | 51 | 50 | 50 | 12 | 1 | 2 | 2 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 41 | 42 | 58 | 60 | 61 | 62 | 64 | 79 | 83 | 84 | 123 | 147 | 248 | 278 | 128 | 458 |  |  | 97 |
