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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48367<br>37.1M<br>1304/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47541<br>99.2M<br>479/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47445<br>57.7M<br>821/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42348<br>108.3M<br>390/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 42040<br>65.3M<br>643/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40562<br>69.6M<br>582/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39878<br>123.4M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38938<br>40.7M<br>957/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20244<br>19.4M<br>1043/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19216<br>39.8M<br>482/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17221<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17082<br>35.2M<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11761<br>199.7M<br>58/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2954<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 927<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 851<br>4.5M<br>190/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 760<br>1.4M<br>540/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 752<br>1.4M<br>540/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 744<br>8.4M<br>88/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 652<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 638<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 507<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 487<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 401<br>685K<br>599/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 399<br>446.6K<br>914/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 316<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 275<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 191<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/3/2025, 1:45:35 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs-pgo | rquickjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 | 2.5.2 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.09.13 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37.1M | 99.2M | 57.7M | 108.3M | 65.3M | 69.6M | 123.4M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Exe size | 37.1M | 99.2M | 1M | 108.3M | 65.3M | 69.6M | 123.4M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 0 | 36M | 12.3M | 4.5M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 685K | 446.6K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 56.7M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41762 | 41769 | 38370 | 35327 | 41808 | 35111 | 32411 | 32573 | 23211 | 13041 | 14174 | 13002 | 35493 | 13065 | 1117 | 710 | 700 | 693 | 628 | 576 | 551 | 564 | 584 | 534 | 290 | 337 | 248 | 275 | 224 | 165 | 196 | 90 | 104 | 61 | 59 | 261 | 29 |  | 153 |  |
| DeltaBlue | 54058 | 56081 | 107891 | 82608 | 73503 | 80366 | 71282 | 76227 | 25198 | 13369 | 13171 | 12986 | 38580 | 291 | 1049 | 698 | 661 | 682 | 619 | 581 | 575 | 541 | 580 | 490 | 333 | 384 | 357 | 368 | 323 | 201 | 248 | 163 | 109 | 55 | 56 | 273 | 35 |  | 178 |  |
| Crypto | 51929 | 48196 | 38964 | 41558 | 41763 | 41861 | 41764 | 40925 | 32078 | 20469 | 17473 | 17799 | 26376 | 9452 | 1369 | 679 | 752 | 600 | 557 | 535 | 557 | 886 | 380 | 887 | 793 | 403 | 187 | 188 | 183 | 152 | 124 | 321 | 97 | 80 | 62 | 295 | 38 |  | 150 |  |
| RayTrace | 120174 | 113366 | 110184 | 70965 | 71335 | 69707 | 66451 | 59125 | 36741 | 26196 | 26734 | 27990 | 3562 | 1375 | 1560 | 1181 | 898 | 1089 | 961 | 919 | 916 | 682 | 723 | 785 | 581 | 454 | 523 | 534 | 488 | 484 | 274 | 499 | 252 | 164 | 141 | 341 | 105 |  | 470 |  |
| EarleyBoyer | 68944 | 66527 | 85473 | 75473 | 69534 | 74623 | 72659 | 71071 | 7105 | 41436 | 36715 | 35204 | 25528 | 1734 | 3415 | 1893 | 1506 | 1755 | 1435 | 1395 | 1334 | 1691 | 1226 | 1002 | 614 | 853 | 544 | 560 | 510 | 562 | 503 | 324 | 287 | 193 | 138 |  | 90 |  | 564 |  |
| RegExp | 20295 | 20862 | 10515 | 10243 | 10365 | 10082 | 9971 | 8983 | 7863 | 8892 | 8992 | 8784 | 1116 | 963 | 553 | 266 | 246 | 225 | 236 | 221 | 225 | 116 | 184 | 65 | 132 | 180 | 222 | 246 | 202 | 458 | 208 | 96 | 249 | 48 | 94 |  |  |  |  |  |
| Splay | 37714 | 36699 | 41463 | 40102 | 38073 | 30567 | 35449 | 35848 | 19905 | 24268 | 12150 | 12667 | 2997 | 5264 | 3659 | 2442 | 1805 | 1956 | 1851 | 2298 | 2176 | 2115 | 1679 | 1479 | 1318 | 1276 | 1316 | 949 | 1291 | 871 | 945 | 398 | 535 | 203 | 314 |  | 141 |  | 879 |  |
| NavierStokes | 40284 | 40028 | 38765 | 38765 | 38842 | 38694 | 38842 | 38436 | 36803 | 22238 | 22112 | 22002 | 33323 | 13356 | 1807 | 1115 | 1315 | 985 | 966 | 953 | 972 | 1219 | 930 | 1545 | 924 | 685 | 485 | 484 | 478 | 180 | 203 | 846 | 167 | 170 | 120 |  | 60 |  | 300 |  |
| Score | 48367 | 47541 | 47445 | 42348 | 42040 | 40562 | 39878 | 38938 | 20244 | 19216 | 17221 | 17082 | 11761 | 2954 | 1538 | 927 | 851 | 834 | 772 | 760 | 752 | 744 | 652 | 638 | 507 | 487 | 401 | 399 | 377 | 316 | 275 | 266 | 191 | 105 | 105 |  |  |  |  |  |
| Score/MB | 1304 | 479 | 821 | 390 | 643 | 582 | 323 | 957 | 1043 | 482 | 337 | 484 | 58 |  | 42 | 75 | 190 | 161 | 951 | 540 | 540 | 88 | 330 | 13 | 238 |  | 599 | 914 | 931 |  | 20 | 127 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 37 | 34 | 43 | 46 | 49 | 50 | 52 | 52 | 61 | 59 | 81 | 67 | 63 | 80 | 79 | 85 | 100 | 113 | 131 | 142 | 235 | 232 | 31 | 341 |  | 80 | 7 |
### macos-arm64
| Engine | v8 | bun | dune | deno | node | bare | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | jjs | quickjs-ng | quickjs | llrt | rquickjs | ladybird | njs | duktape | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.28 | 1.2.23 | 0.10.2 | 2.5.2 | 24.9.0 |  | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 |  | 0.10.1 | 2025.09.13 | 0.7.0.beta |  |  | 0.9.2 | 2.99.99 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 57.3M | 60M | 87.5M | 111.9M | 45.6M | 132.1M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 0 | 3.8M | 1014.4K | 10.6M | 1.2M | 41.5M | 2.4M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 0 | 75.4M | 12.4M | 1.1M | 91.9M | 575.4K | 7.4M | 0 | 0 |
| Exe size | 41.3M | 57.3M | 60M | 87.5M | 111.9M | 45.6M | 66M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 0 | 1.9M | 1014.4K | 10.6M | 1.2M | 41.5M | 1.8M | 562.1K | 0 | 429.1K | 1.6M | 12.7M | 0 | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 1.9M | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 91M | 0 | 0 | 0 | 0 |
| Richards | 43647 | 51107 | 60783 | 58478 | 45172 | 42454 | 14534 | 13701 | 13524 | 35895 | 1247 | 1111 | 1272 | 288 | 1071 | 1113 | 919 | 977 | 856 | 670 | 508 | 542 | 384 | 107 | 278 | 161 | 140 | 92 | 39 |  | 209 | 40 |  |  |
| DeltaBlue | 132461 | 65397 | 113492 | 107052 | 96744 | 108050 | 16245 | 15888 | 16801 | 31353 | 1126 | 1256 | 1221 | 593 | 1093 | 1094 | 1054 | 1064 | 701 | 741 | 560 | 590 | 542 | 193 | 316 | 176 | 134 | 68 | 41 |  | 235 | 51 |  |  |
| Crypto | 60512 | 67342 | 52795 | 51567 | 55515 | 58975 | 25115 | 16397 | 21673 | 25612 | 1303 | 1716 | 1118 | 9084 | 1192 | 1287 | 644 | 920 | 1390 | 1023 | 1165 | 464 | 294 | 394 | 181 | 126 | 110 | 112 | 38 |  | 242 | 64 |  |  |
| RayTrace | 145630 | 138831 | 84063 | 72446 | 83397 | 97087 | 47655 | 36629 | 41398 | 3344 | 2389 | 1807 | 1861 | 811 | 1501 | 1179 | 1823 | 1125 | 1447 | 738 | 1012 | 712 | 919 | 696 | 320 | 637 | 352 | 220 | 41 |  | 298 | 165 |  |  |
| EarleyBoyer | 105040 | 76392 | 100523 | 80540 | 77168 | 77279 | 46062 | 37236 | 42790 | 40003 | 4845 | 1392 | 3076 | 2202 | 2244 | 2292 | 2633 | 1810 | 1706 | 2375 | 1040 | 1220 | 937 | 404 | 650 | 737 | 354 | 215 | 79 |  |  | 126 |  |  |
| RegExp | 13118 | 27967 | 15092 | 14015 | 13756 | 13378 | 9200 | 10595 | 6688 | 1608 | 624 | 292 | 298 | 801 | 285 | 270 | 309 | 232 | 97 | 152 | 228 | 224 | 315 | 307 | 269 | 556 | 203 | 112 | 14 |  |  |  |  |  |
| Splay | 53564 | 44869 | 48226 | 50598 | 42310 | 39026 | 22915 | 16575 | 15239 | 3454 | 3720 | 4331 | 3251 | 2041 | 2828 | 2320 | 3452 | 2484 | 2353 | 1370 | 1810 | 1555 | 1304 | 538 | 900 | 1015 | 549 | 356 | 138 |  |  | 159 |  |  |
| NavierStokes | 32402 | 37990 | 40432 | 38173 | 37359 | 29118 | 20210 | 18863 | 17979 | 20464 | 1480 | 3785 | 2119 | 4363 | 1971 | 2283 | 1085 | 1638 | 1715 | 1522 | 1359 | 883 | 657 | 1018 | 290 | 189 | 187 | 198 | 65 |  |  | 90 |  |  |
| Score | 57640 | 57150 | 55542 | 51693 | 49131 | 48548 | 22029 | 18877 | 18856 | 12028 | 1709 | 1522 | 1458 | 1452 | 1286 | 1252 | 1168 | 1079 | 973 | 854 | 815 | 668 | 588 | 374 | 351 | 340 | 219 | 151 | 47 |  |  |  |  |  |
| Score/MB | 1396 | 997 | 925 | 590 | 438 | 1065 | 166 | 575 | 406 | 62 | 108 | 864 | 404 |  | 335 | 1263 | 110 | 901 | 23 | 356 | 1484 |  | 1403 | 236 | 27 |  | 2 | 12 | 44 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 31 | 37 | 38 | 38 | 38 | 40 | 42 | 43 | 60 | 56 | 49 | 56 | 58 | 93 | 88 | 94 | 124 | 158 | 603 |  | 35 | 239 |  |  |
### windows
| Engine | v8 | bare | deno | bun | dune | node | ChakraCore | spidermonkey | spiderfire | JavaScriptCore | graaljs | hermes | quickjs | txiki.js | rquickjs | quickjs-ng | llrt | rquickjs-pgo | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.28 |  | 2.5.2 | 1.2.23 | 0.10.2 | 24.9.0 | 1.11.24.0 | 144.0 |  |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.10.1 | 0.7.0.beta |  |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 61M | 148.4M | 139.6M | 82.1M | 120.8M | 15.6M | 52.7M | 77.1M | 125.2M | 197.1M | 115.8M | 13M | 44.3M | 10.5M | 10M | 45.6M | 10.2M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 26.1M | 112.5M | 113.6M | 49.1M | 85.5M | 342.9K | 33.8M | 42.6M | 342.5K | 349.1K | 3M | 5.1M | 5.7M | 1.4M | 1.6M | 13.1M | 1M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 34.9M | 35.9M | 26M | 33M | 35.3M | 15.3M | 18.9M | 34.4M | 124.9M | 196.7M | 112.8M | 7.9M | 38.6M | 9.1M | 8.5M | 32.5M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35164 | 30084 | 35034 | 31631 | 34511 | 32601 | 23388 | 12663 | 13789 | 35630 | 35034 | 681 | 494 | 431 | 393 | 387 | 352 | 431 | 354 | 249 | 210 | 253 | 179 | 98 | 54 | 49 |  | 25 |  | 122 |
| DeltaBlue | 103931 | 75758 | 80578 | 37013 | 68055 | 72895 | 28299 | 13455 | 12867 | 242 | 25257 | 599 | 398 | 399 | 390 | 374 | 362 | 451 | 389 | 350 | 258 | 361 | 226 | 117 | 49 | 43 |  | 29 |  | 177 |
| Crypto | 32220 | 41451 | 40282 | 44828 | 41503 | 37391 | 32965 | 17206 | 17857 | 5225 | 19920 | 775 | 515 | 412 | 495 | 409 | 415 | 317 | 415 | 186 | 308 | 179 | 111 | 91 | 57 | 74 |  | 36 |  | 144 |
| RayTrace | 106706 | 71631 | 66451 | 101156 | 71409 | 64832 | 47655 | 26465 | 26613 | 41661 | 3365 | 970 | 568 | 722 | 610 | 601 | 558 | 598 | 454 | 471 | 452 | 477 | 226 | 265 | 123 | 134 |  | 90 |  | 423 |
| EarleyBoyer | 78026 | 67876 | 71481 | 57072 | 74534 | 71279 | 43428 | 40630 | 36159 | 44402 | 28061 | 2201 | 1018 | 1005 | 1012 | 1016 | 1003 | 926 | 875 | 619 | 531 | 553 | 447 | 296 | 121 | 145 |  | 78 |  | 521 |
| RegExp | 9728 | 9780 | 9770 | 17365 | 9689 | 9427 | 9819 | 8883 | 8676 | 12171 | 989 | 410 | 187 | 191 | 167 | 174 | 190 | 147 | 175 | 234 | 109 | 200 | 196 | 267 | 88 | 43 |  |  |  |  |
| Splay | 33892 | 38276 | 32458 | 33442 | 29695 | 30396 | 27536 | 20919 | 13756 | 28840 | 2391 | 2310 | 992 | 1441 | 1258 | 1316 | 1335 | 1247 | 1233 | 1177 | 758 | 598 | 768 | 526 | 299 | 186 |  | 131 |  | 796 |
| NavierStokes | 38173 | 38507 | 38397 | 33438 | 38397 | 38321 | 36470 | 21815 | 21645 | 39435 | 22808 | 1065 | 1001 | 732 | 737 | 724 | 685 | 612 | 743 | 473 | 1048 | 471 | 187 | 149 | 114 | 164 |  | 57 |  | 298 |
| Score | 43292 | 40051 | 40018 | 39464 | 39336 | 38173 | 28581 | 18336 | 17260 | 13579 | 9866 | 953 | 568 | 565 | 540 | 527 | 518 | 499 | 496 | 397 | 369 | 353 | 244 | 190 | 95 | 89 |  |  |  |  |
| Score/MB | 700 | 656 | 269 | 282 | 479 | 315 | 1831 | 348 | 223 | 108 | 50 | 8 | 43 | 12 | 51 | 52 | 11 | 48 |  | 46 | 42 | 41 | 11 | 1 | 1 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 24 | 42 | 58 | 61 | 62 | 62 | 62 | 70 | 63 | 79 | 84 | 83 | 124 | 149 | 254 | 279 | 138 | 373 |  | 84 |
