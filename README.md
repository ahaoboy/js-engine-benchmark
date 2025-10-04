fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

webui: https://ahaoboy.github.io/js-engine-benchmark/

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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48646<br>99.2M<br>490/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47852<br>57.7M<br>828/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47177<br>37.1M<br>1272/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42223<br>108.3M<br>389/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40894<br>65.3M<br>625/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40486<br>69.6M<br>581/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40113<br>123.4M<br>325/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38976<br>40.7M<br>958/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20115<br>19.4M<br>1036/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19380<br>39.8M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17264<br>35.2M<br>490/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17234<br>51M<br>338/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10631<br>199.7M<br>53/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2596<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1547<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 939<br>982.4K<br>978/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 928<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 825<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 765<br>831.3K<br>942/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 738<br>1.4M<br>524/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 734<br>1.4M<br>527/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 598<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 506<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 490<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 395<br>446.6K<br>905/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 387<br>685K<br>578/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 361<br>414.5K<br>891/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 306<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 187<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/4/2025, 10:53:08 AM

### ubuntu
| Engine | bun | v8 | JavaScriptCore | deno | bare | dune | node | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | quickjs | llrt | txiki.js | primjs | njs | rquickjs-pgo | rquickjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.3.0 |  | 2.5.3 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  | 0.9.2 |  |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 99.2M | 57.7M | 37.1M | 108.3M | 65.3M | 69.6M | 123.4M | 40.7M | 19.4M | 39.8M | 35.2M | 51M | 199.7M | 0 | 36M | 982.4K | 12.3M | 5.2M | 831.3K | 8.4M | 1.4M | 1.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Exe size | 99.2M | 1M | 37.1M | 108.3M | 65.3M | 69.6M | 123.4M | 40.7M | 571K | 39.8M | 35.2M | 51M | 1M | 0 | 36M | 982.4K | 12.3M | 5.2M | 831.3K | 8.4M | 1.4M | 1.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.5M | 0 | 0 | 42M |
| Dll size | 0 | 56.7M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41593 | 37614 | 40544 | 34840 | 32252 | 32545 | 32167 | 32566 | 21961 | 13768 | 13616 | 14206 | 35644 | 12815 | 1100 | 826 | 713 | 711 | 637 | 559 | 574 | 554 | 575 | 523 | 289 | 351 | 255 | 237 | 223 | 117 | 195 | 90 | 105 | 60 | 59 | 262 | 29 |  | 158 |  |
| DeltaBlue | 55460 | 112374 | 55202 | 80823 | 76512 | 80809 | 74588 | 79699 | 25735 | 13501 | 12787 | 13032 | 39763 | 238 | 1061 | 730 | 701 | 674 | 611 | 537 | 578 | 561 | 584 | 489 | 328 | 388 | 356 | 343 | 320 | 208 | 252 | 163 | 113 | 55 | 54 | 275 | 34 |  | 184 |  |
| Crypto | 47975 | 38904 | 51860 | 40477 | 41529 | 41865 | 41731 | 41268 | 31695 | 19883 | 17683 | 17669 | 26907 | 9695 | 1369 | 762 | 678 | 598 | 557 | 878 | 516 | 561 | 374 | 887 | 777 | 407 | 187 | 190 | 182 | 149 | 123 | 324 | 99 | 80 | 61 | 291 | 38 |  | 153 |  |
| RayTrace | 122394 | 112626 | 120248 | 73555 | 72223 | 71483 | 66673 | 56313 | 36333 | 28416 | 28342 | 26936 | 3466 | 1248 | 1573 | 932 | 1194 | 1042 | 971 | 682 | 914 | 893 | 719 | 793 | 588 | 456 | 513 | 508 | 483 | 502 | 275 | 495 | 259 | 165 | 142 | 350 | 104 |  | 468 |  |
| EarleyBoyer | 70509 | 88373 | 65270 | 77135 | 69498 | 76112 | 70100 | 69885 | 7097 | 41092 | 36898 | 35819 | 28730 | 963 | 3370 | 1524 | 1914 | 1737 | 1371 | 1695 | 1306 | 1209 | 1227 | 996 | 606 | 862 | 530 | 486 | 470 | 583 | 504 | 321 | 286 | 196 | 138 |  | 89 |  | 556 |  |
| RegExp | 21617 | 10536 | 19236 | 10202 | 10404 | 10152 | 10062 | 8892 | 7926 | 8983 | 8956 | 8910 | 1128 | 1014 | 557 | 237 | 269 | 225 | 232 | 116 | 217 | 223 | 180 | 65 | 133 | 179 | 234 | 212 | 192 | 460 | 210 | 95 | 245 | 49 | 95 |  |  |  |  |  |
| Splay | 38089 | 41161 | 34886 | 39572 | 38814 | 30592 | 36687 | 36932 | 19933 | 23062 | 12411 | 12566 | 1949 | 5276 | 3659 | 2442 | 2342 | 1907 | 1786 | 2115 | 2096 | 2096 | 1679 | 909 | 1304 | 1279 | 1163 | 1301 | 1056 | 928 | 891 | 367 | 450 | 206 | 320 |  | 138 |  | 838 |  |
| NavierStokes | 39880 | 38732 | 40136 | 38694 | 37656 | 38803 | 38803 | 38469 | 36730 | 22260 | 22045 | 22024 | 19550 | 10833 | 1903 | 1594 | 1130 | 971 | 985 | 1202 | 947 | 955 | 929 | 1548 | 943 | 670 | 472 | 482 | 484 | 170 | 200 | 856 | 157 | 176 | 119 |  | 60 |  | 302 |  |
| Score | 48646 | 47852 | 47177 | 42223 | 40894 | 40486 | 40113 | 38976 | 20115 | 19380 | 17264 | 17234 | 10631 | 2596 | 1547 | 939 | 928 | 825 | 765 | 740 | 738 | 734 | 648 | 598 | 506 | 490 | 395 | 387 | 361 | 306 | 273 | 263 | 187 | 106 | 105 |  |  |  |  |  |
| Score/MB | 490 | 828 | 1272 | 389 | 625 | 581 | 325 | 958 | 1036 | 487 | 490 | 338 | 53 |  | 42 | 978 | 75 | 159 | 942 | 87 | 524 | 527 | 328 | 12 | 238 |  | 905 | 578 | 891 |  | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 39 | 33 | 46 | 44 | 50 | 51 | 61 | 53 | 53 | 58 | 81 | 67 | 63 | 81 | 82 | 87 | 99 | 113 | 132 | 144 | 233 | 234 | 31 | 346 |  | 80 | 7 |
### macos-arm64
| Engine | bun | v8 | deno | dune | bare | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | primjs | quickjs-ng | llrt | quickjs | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | ringo | xst | goja | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.3.32 | 2.5.3 | 0.10.2 |  | 24.9.0 | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 24.12.0 |  | 0.10.1 | 0.7.0.beta | 2025.09.13 |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 57.3M | 41.3M | 87.4M | 60M | 45.6M | 111.9M | 132M | 32.8M | 46.3M | 194M | 0 | 15.7M | 3.6M | 1.8M | 3.8M | 10.6M | 837K | 1.2M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 0 | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 91.9M | 575.4K | 7.4M | 0 | 0 |
| Exe size | 57.3M | 41.3M | 87.4M | 60M | 45.6M | 111.9M | 66M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 1.8M | 1.9M | 10.6M | 837K | 1.2M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 0 | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 1.9M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 91M | 0 | 0 | 0 | 0 |
| Richards | 51608 | 45801 | 61500 | 58887 | 42228 | 43619 | 15851 | 15360 | 15145 | 35613 | 15713 | 1320 | 1263 | 1100 | 1157 | 928 | 1044 | 894 | 772 | 831 | 534 | 597 | 368 | 157 | 104 | 238 | 161 | 94 | 39 |  | 189 | 37 |  |  |
| DeltaBlue | 77345 | 122622 | 114047 | 111138 | 105339 | 108771 | 16549 | 17085 | 15809 | 43400 | 607 | 1176 | 1260 | 1222 | 1167 | 1029 | 1059 | 946 | 851 | 739 | 626 | 668 | 559 | 263 | 189 | 209 | 168 | 76 | 42 |  | 214 | 50 |  |  |
| Crypto | 70726 | 56334 | 57999 | 58491 | 59177 | 58799 | 24784 | 22230 | 21233 | 43576 | 7348 | 1414 | 1174 | 1675 | 1175 | 706 | 864 | 992 | 1153 | 1420 | 1308 | 560 | 286 | 124 | 361 | 159 | 134 | 106 | 43 |  | 250 | 63 |  |  |
| RayTrace | 179151 | 146666 | 92425 | 90945 | 102710 | 86949 | 49653 | 48469 | 40733 | 1613 | 900 | 2522 | 2085 | 1790 | 1457 | 1921 | 1152 | 1444 | 768 | 1110 | 1030 | 780 | 873 | 645 | 595 | 315 | 317 | 174 | 43 |  | 314 | 134 |  |  |
| EarleyBoyer | 99563 | 108849 | 101681 | 100621 | 96451 | 94569 | 52283 | 46899 | 48538 | 42355 | 2905 | 5057 | 3209 | 1216 | 2503 | 2831 | 2165 | 1967 | 2397 | 1658 | 1107 | 1400 | 932 | 673 | 344 | 644 | 342 | 203 | 89 |  |  | 106 |  |  |
| RegExp | 28639 | 14379 | 14699 | 14336 | 14849 | 14092 | 11796 | 11863 | 12468 | 1973 | 541 | 692 | 309 | 293 | 270 | 322 | 277 | 259 | 202 | 88 | 236 | 246 | 272 | 578 | 280 | 267 | 208 | 138 | 15 |  |  |  |  |  |
| Splay | 42807 | 66448 | 52154 | 45961 | 49001 | 46046 | 30900 | 18079 | 18175 | 3455 | 2013 | 4380 | 3623 | 4466 | 3395 | 3867 | 3129 | 2385 | 1354 | 2191 | 2290 | 1834 | 880 | 993 | 416 | 1112 | 551 | 480 | 156 |  |  | 193 |  |  |
| NavierStokes | 40662 | 40176 | 40621 | 38507 | 38249 | 40392 | 20862 | 20505 | 20438 | 34577 | 4652 | 1592 | 1996 | 3499 | 2204 | 1166 | 1576 | 1626 | 1747 | 1679 | 1438 | 911 | 627 | 197 | 1078 | 271 | 185 | 220 | 76 |  |  | 89 |  |  |
| Score | 63090 | 61086 | 57473 | 55411 | 54025 | 52769 | 24465 | 22168 | 21552 | 13471 | 2350 | 1846 | 1516 | 1475 | 1360 | 1232 | 1159 | 1115 | 951 | 922 | 888 | 750 | 539 | 355 | 341 | 326 | 232 | 158 | 51 |  |  |  |  |  |
| Score/MB | 1101 | 1479 | 657 | 923 | 1185 | 471 | 185 | 675 | 465 | 69 |  | 117 | 420 | 838 | 354 | 116 | 1417 | 932 | 397 | 22 | 1617 |  | 1286 |  | 215 | 25 | 3 | 12 | 48 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 36 | 30 | 37 | 38 | 38 | 39 | 40 | 41 | 48 | 65 | 47 | 50 | 60 | 95 | 107 | 92 | 122 | 152 | 542 |  | 34 | 257 |  |  |
### windows
| Engine | v8 | deno | bun | bare | dune | JavaScriptCore | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs | mujs-pgo | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.32 | 2.5.3 | 1.2.23 |  | 0.10.2 |  | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 |  | 0.7.0.beta |  | 0.10.1 |  | 1.3.5 |  | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 148.2M | 139.6M | 61M | 82.1M | 125.2M | 120.8M | 15.6M | 53.9M | 77.1M | 197.1M | 116.5M | 8.9M | 41.7M | 10.5M | 45.6M | 10.2M | 6.8M | 0 | 8.5M | 8.6M | 8.6M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.4M | 112.3M | 113.6M | 26.1M | 49.1M | 342.5K | 85.5M | 342.9K | 33.8M | 42.6M | 349.1K | 3M | 1M | 5.7M | 1.4M | 13.1M | 1M | 1.6M | 0 | 692.1K | 744.6K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 35.9M | 26M | 34.9M | 33M | 124.9M | 35.3M | 15.3M | 20.1M | 34.4M | 196.7M | 113.5M | 7.9M | 36M | 9.1M | 32.5M | 9.2M | 5.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 35800 | 34465 | 36393 | 31871 | 33646 | 32513 | 32075 | 24288 | 13266 | 13627 | 35267 | 674 | 640 | 447 | 397 | 383 | 425 | 500 | 356 | 217 | 250 | 206 | 181 | 105 | 53 | 48 |  | 11 |  | 120 |
| DeltaBlue | 101240 | 79156 | 44630 | 76928 | 76836 | 36748 | 65219 | 27498 | 13098 | 12807 | 29244 | 613 | 516 | 395 | 392 | 364 | 458 | 463 | 383 | 345 | 340 | 241 | 233 | 116 | 47 | 42 |  | 25 |  | 149 |
| Crypto | 38268 | 38451 | 46343 | 41169 | 41469 | 46217 | 39565 | 33122 | 19874 | 18096 | 21185 | 771 | 605 | 417 | 503 | 429 | 313 | 463 | 419 | 180 | 184 | 304 | 112 | 89 | 57 | 71 |  | 35 |  | 150 |
| RayTrace | 107964 | 69263 | 85383 | 70225 | 71779 | 100343 | 65933 | 49210 | 16247 | 25652 | 3105 | 950 | 597 | 759 | 618 | 627 | 571 | 513 | 452 | 497 | 483 | 406 | 222 | 261 | 124 | 131 |  | 82 |  | 445 |
| EarleyBoyer | 81824 | 74111 | 53215 | 68620 | 74286 | 57657 | 70112 | 43156 | 39627 | 36765 | 26823 | 2204 | 1085 | 1155 | 983 | 1012 | 899 | 969 | 859 | 615 | 629 | 415 | 433 | 290 | 118 | 131 |  | 73 |  | 518 |
| RegExp | 9699 | 9748 | 17746 | 9608 | 9656 | 17911 | 9680 | 9819 | 8521 | 8711 | 978 | 411 | 185 | 198 | 169 | 198 | 148 | 138 | 177 | 197 | 249 | 98 | 195 | 272 | 84 | 41 |  |  |  |  |
| Splay | 40037 | 34308 | 33957 | 36704 | 29549 | 29198 | 32580 | 26824 | 19452 | 13748 | 3002 | 2363 | 1235 | 1347 | 1249 | 1328 | 1216 | 1048 | 1237 | 1196 | 653 | 1010 | 827 | 493 | 305 | 162 |  | 127 |  | 826 |
| NavierStokes | 38545 | 38545 | 33471 | 38694 | 38469 | 32846 | 38436 | 36509 | 21876 | 21815 | 22705 | 1056 | 1523 | 696 | 734 | 700 | 749 | 526 | 739 | 475 | 474 | 1044 | 180 | 147 | 114 | 154 |  | 57 |  | 295 |
| Score | 45491 | 40288 | 40257 | 40063 | 39783 | 39122 | 38308 | 28633 | 17310 | 17234 | 10244 | 954 | 679 | 575 | 541 | 538 | 505 | 502 | 495 | 383 | 372 | 357 | 245 | 189 | 94 | 84 |  |  |  |  |
| Score/MB | 736 | 271 | 288 | 656 | 484 | 312 | 317 | 1834 | 320 | 223 | 51 | 8 | 75 | 13 | 51 | 11 | 49 | 74 |  | 44 | 43 | 41 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 55 | 59 | 62 | 60 | 69 | 69 | 62 | 82 | 77 | 93 | 125 | 150 | 258 | 297 | 135 | 396 |  | 83 |
