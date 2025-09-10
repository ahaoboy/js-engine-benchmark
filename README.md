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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47380<br>36.4M<br>1300/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46992<br>57.5M<br>817/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46244<br>98.6M<br>469/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40167<br>65.3M<br>614/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39821<br>106.3M<br>374/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39339<br>123.3M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38876<br>40.7M<br>956/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 38599<br>66.3M<br>582/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20282<br>19.4M<br>1045/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19121<br>39.8M<br>480/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17120<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17024<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9797<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 1910<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1512<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 847<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 827<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 815<br>5.2M<br>157/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 762<br>1.4M<br>541/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 740<br>1.4M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 739<br>831.3K<br>910/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 644<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 540<br>46.4M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 486<br>2.1M<br>228/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 483<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 404<br>446.6K<br>926/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 380<br>414.5K<br>938/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 370<br>685K<br>553/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 294<br>2.7K<br>111494/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 266<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 179<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.2M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/10/2025, 1:46:17 AM

### ubuntu
| Engine | JavaScriptCore | v8 | bun | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs-pgo | rquickjs | primjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs | mujs-one | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.0 | 1.2.21 |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 |  | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.4M | 57.5M | 98.6M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.2M | 0 | 1.1G | 42M |
| Exe size | 36.4M | 1M | 98.6M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.2M | 0 | 1.1G | 42M |
| Dll size | 0 | 56.4M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41212 | 37943 | 39348 | 32248 | 32647 | 32252 | 33717 | 32481 | 23508 | 13214 | 14202 | 13439 | 35503 | 11173 | 1124 | 677 | 673 | 711 | 578 | 553 | 625 | 557 | 578 | 493 | 258 | 345 | 265 | 230 | 240 | 129 | 200 | 89 | 98 | 60 | 58 | 272 | 29 |  | 128 |  |
| DeltaBlue | 55923 | 109300 | 50316 | 73232 | 74112 | 72069 | 74297 | 71388 | 25874 | 13415 | 12966 | 12979 | 26050 | 418 | 1048 | 660 | 662 | 670 | 577 | 574 | 601 | 543 | 578 | 455 | 305 | 384 | 359 | 325 | 352 | 174 | 247 | 163 | 112 | 54 | 53 | 281 | 33 |  | 180 |  |
| Crypto | 51379 | 41119 | 48855 | 41604 | 41130 | 41434 | 41382 | 41655 | 32326 | 20278 | 17652 | 17820 | 14280 | 8530 | 1363 | 573 | 742 | 522 | 538 | 556 | 548 | 881 | 377 | 769 | 787 | 408 | 188 | 183 | 190 | 137 | 119 | 323 | 91 | 81 | 61 | 297 | 36 |  | 135 |  |
| RayTrace | 118472 | 110924 | 117584 | 72445 | 66747 | 66007 | 62159 | 67709 | 36333 | 26882 | 26586 | 27916 | 7378 | 1191 | 1546 | 1105 | 905 | 1055 | 939 | 913 | 959 | 682 | 712 | 533 | 561 | 454 | 527 | 497 | 528 | 475 | 256 | 497 | 246 | 164 | 132 | 351 | 106 |  | 425 |  |
| EarleyBoyer | 68363 | 82016 | 66236 | 67527 | 73480 | 70819 | 69306 | 73402 | 7119 | 41988 | 35919 | 36394 | 26620 | 923 | 3377 | 1837 | 1453 | 1709 | 1404 | 1291 | 1308 | 1679 | 1201 | 720 | 560 | 833 | 547 | 511 | 526 | 586 | 477 | 321 | 277 | 186 | 133 |  | 87 |  | 489 |  |
| RegExp | 19567 | 10365 | 20163 | 10082 | 9981 | 9728 | 8956 | 10001 | 7682 | 8667 | 8837 | 8603 | 756 | 454 | 547 | 249 | 225 | 227 | 218 | 227 | 221 | 116 | 178 | 63 | 131 | 178 | 242 | 200 | 210 | 454 | 202 | 95 | 233 | 48 | 91 |  |  |  |  |  |
| Splay | 34063 | 39156 | 34723 | 36206 | 33835 | 34047 | 34471 | 26835 | 19953 | 23404 | 12262 | 11985 | 2056 | 1000 | 3253 | 2141 | 1750 | 1913 | 2218 | 1952 | 1586 | 2090 | 1641 | 1169 | 1288 | 1213 | 1237 | 1316 | 789 | 849 | 891 | 360 | 427 | 204 | 329 |  | 85 |  | 781 |  |
| NavierStokes | 39731 | 37766 | 39652 | 38617 | 38359 | 38469 | 37842 | 38249 | 36730 | 21706 | 21941 | 21666 | 21052 | 8904 | 1830 | 957 | 1281 | 1000 | 989 | 977 | 978 | 1212 | 932 | 1458 | 949 | 672 | 457 | 479 | 481 | 169 | 196 | 829 | 157 | 176 | 120 |  | 57 |  | 282 |  |
| Score | 47380 | 46992 | 46244 | 40167 | 39821 | 39339 | 38876 | 38599 | 20282 | 19121 | 17120 | 17024 | 9797 | 1910 | 1512 | 847 | 827 | 815 | 762 | 740 | 739 | 739 | 644 | 540 | 486 | 483 | 404 | 380 | 370 | 294 | 266 | 261 | 179 | 105 | 103 |  |  |  |  |  |
| Score/MB | 1300 | 817 | 469 | 614 | 374 | 319 | 956 | 582 | 1045 | 480 | 335 | 483 | 49 | 1 | 42 | 69 | 193 | 157 | 541 | 531 | 910 | 87 | 326 | 11 | 228 |  | 926 | 938 | 553 | 111494 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 42 | 33 | 48 | 48 | 50 | 52 | 52 | 52 | 61 | 59 | 89 | 69 | 64 | 81 | 85 | 81 | 103 | 118 | 133 | 151 | 239 | 238 | 31 | 361 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bare | bun | dune | node | deno | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | njs | duktape | ladybird | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.76 |  | 1.2.21 | 0.10.1 | 24.7.0 | 2.4.5 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 | 2.99.99 |  |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.2M | 45.6M | 56.8M | 56.8M | 111.7M | 85.5M | 131.7M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 0.2K | 41.2M | 45.6M | 56.8M | 56.8M | 111.7M | 85.5M | 65.9M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 562.1K | 41.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 39895 | 27800 | 33498 | 36672 | 44442 | 33194 | 39669 | 14234 | 13750 | 11876 | 31680 | 13235 | 970 | 1085 | 1193 | 947 | 1170 | 840 | 757 | 616 | 501 | 597 | 514 | 321 | 103 | 284 | 193 | 178 | 97 | 31 | 188 | 26 |  | 166 |
| DeltaBlue | 65880 | 126603 | 85451 | 51671 | 96149 | 75216 | 83778 | 16530 | 16186 | 13118 | 21396 | 396 | 839 | 1164 | 1235 | 969 | 1081 | 826 | 935 | 651 | 596 | 606 | 578 | 464 | 196 | 353 | 159 | 195 | 79 | 39 | 193 | 41 |  | 176 |
| Crypto | 62990 | 50425 | 49786 | 52379 | 52290 | 46741 | 42761 | 23628 | 21050 | 14818 | 25808 | 4296 | 1117 | 1616 | 1109 | 876 | 1062 | 1078 | 913 | 1115 | 1282 | 1256 | 480 | 253 | 369 | 150 | 122 | 146 | 95 | 38 | 196 | 56 |  | 130 |
| RayTrace | 123750 | 115290 | 84433 | 126982 | 70891 | 80289 | 68893 | 46767 | 46767 | 39515 | 746 | 793 | 1872 | 1340 | 1617 | 1515 | 1009 | 1175 | 1161 | 838 | 1006 | 945 | 512 | 742 | 631 | 262 | 549 | 337 | 182 | 38 | 282 | 145 |  | 555 |
| EarleyBoyer | 73806 | 89201 | 88178 | 66259 | 76186 | 75431 | 70310 | 48032 | 37879 | 43677 | 19601 | 1008 | 3811 | 1558 | 2826 | 1959 | 1960 | 1780 | 1485 | 1823 | 1092 | 1150 | 1233 | 978 | 384 | 563 | 611 | 377 | 171 | 78 |  | 122 |  | 594 |
| RegExp | 23753 | 12897 | 14001 | 22275 | 11331 | 10536 | 10707 | 12032 | 8413 | 10142 | 1433 | 542 | 623 | 262 | 261 | 241 | 233 | 252 | 227 | 184 | 220 | 88 | 213 | 278 | 271 | 225 | 457 | 190 | 114 | 13 |  |  |  |  |
| Splay | 37413 | 53809 | 36239 | 28416 | 25772 | 30095 | 27161 | 29467 | 13389 | 13438 | 2107 | 1360 | 3578 | 4213 | 2412 | 3843 | 2143 | 1936 | 1929 | 1891 | 1490 | 1304 | 1560 | 1204 | 455 | 932 | 832 | 474 | 456 | 115 |  | 96 |  | 686 |
| NavierStokes | 37545 | 37804 | 33438 | 31016 | 37211 | 30479 | 33538 | 18772 | 19589 | 17407 | 17572 | 8895 | 1207 | 3052 | 1333 | 1264 | 2005 | 2036 | 1420 | 1645 | 1177 | 1538 | 674 | 608 | 870 | 234 | 165 | 227 | 184 | 60 |  | 93 |  | 298 |
| Score | 51625 | 51289 | 45385 | 44857 | 43623 | 40207 | 40121 | 23172 | 19180 | 17658 | 7790 | 1815 | 1430 | 1395 | 1258 | 1137 | 1130 | 1057 | 955 | 889 | 796 | 737 | 614 | 522 | 343 | 320 | 307 | 245 | 147 | 43 |  |  |  |  |
| Score/MB | 314725209 | 1244 | 996 | 790 | 768 | 359 | 469 | 175 | 584 | 381 | 40 |  | 91 | 792 | 348 | 108 | 274 | 1109 | 798 | 371 | 1450 | 17 |  | 1245 | 217 | 25 | 116424 | 3 | 11 | 40 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 44 | 33 | 40 | 42 | 45 | 43 | 41 | 47 | 52 | 48 | 68 | 59 | 62 | 101 | 102 | 103 | 119 | 172 | 659 | 42 | 261 |  | 81 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | rquickjs-pgo | quickjs-emscripten | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.76 |  |  | 1.2.21 | 2.4.5 | 0.10.1 | 24.7.0 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  |  | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.3M | 122.1M | 57M | 132.8M | 142.9M | 77.6M | 116.5M | 14.4M | 51.2M | 72.8M | 196.1M | 17.5M | 112.9M | 11.8M | 37.3M | 42.2M | 8M | 9M | 0 | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.2M | 0 | 0 |
| Exe size | 29.4M | 338K | 26.1M | 113M | 110.6M | 47.4M | 85.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.2M | 1M | 0 | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 23.9M | 121.7M | 30.8M | 19.8M | 32.3M | 30.3M | 31.1M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.9M | 6.9M | 31.6M | 29.1M | 6.7M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 36725 | 36336 | 32704 | 37148 | 32983 | 32365 | 32061 | 24358 | 14011 | 13905 | 34188 | 8884 | 702 | 506 | 444 | 378 | 448 | 448 | 388 | 424 | 211 | 229 | 233 | 198 | 105 | 54 | 48 |  | 24 |  |  |
| DeltaBlue | 106278 | 46428 | 70793 | 40636 | 72320 | 72822 | 54190 | 26996 | 13488 | 12979 | 28217 | 310 | 612 | 461 | 403 | 370 | 469 | 469 | 398 | 403 | 260 | 317 | 343 | 233 | 112 | 48 | 41 |  | 28 |  |  |
| Crypto | 40969 | 45941 | 40707 | 45708 | 37125 | 41932 | 40909 | 33221 | 20188 | 17373 | 22111 | 2395 | 778 | 545 | 421 | 427 | 324 | 327 | 429 | 376 | 316 | 188 | 180 | 111 | 91 | 58 | 75 |  | 40 |  |  |
| RayTrace | 112034 | 94497 | 71113 | 87467 | 65637 | 62455 | 63343 | 48129 | 28120 | 27454 | 2513 | 1431 | 996 | 527 | 725 | 608 | 591 | 587 | 464 | 580 | 436 | 450 | 465 | 220 | 265 | 122 | 132 |  | 92 |  |  |
| EarleyBoyer | 84734 | 60978 | 66432 | 51551 | 68318 | 68894 | 66741 | 41307 | 38441 | 35550 | 24418 | 1259 | 2224 | 988 | 1120 | 984 | 931 | 931 | 881 | 969 | 498 | 542 | 544 | 445 | 290 | 121 | 133 |  | 76 |  |  |
| RegExp | 9920 | 17984 | 9748 | 16092 | 9565 | 9661 | 9556 | 9589 | 9274 | 8810 | 937 | 962 | 401 | 186 | 194 | 193 | 162 | 154 | 179 | 186 | 108 | 242 | 195 | 195 | 275 | 87 | 42 |  |  |  |  |
| Splay | 40599 | 33183 | 30404 | 29426 | 29679 | 24138 | 28318 | 17504 | 22483 | 11394 | 2831 | 5262 | 2376 | 968 | 1328 | 1231 | 1190 | 1221 | 1252 | 920 | 1010 | 1065 | 1092 | 663 | 356 | 320 | 159 |  | 74 |  |  |
| NavierStokes | 38732 | 39771 | 38803 | 33290 | 38694 | 38101 | 35913 | 36915 | 22024 | 21750 | 21348 | 2722 | 1088 | 1023 | 740 | 714 | 766 | 758 | 750 | 671 | 1062 | 474 | 484 | 188 | 149 | 114 | 168 |  | 61 |  |  |
| Score | 46967 | 42478 | 38785 | 38577 | 38015 | 37339 | 36155 | 26837 | 19260 | 16908 | 9632 | 1891 | 967 | 576 | 573 | 528 | 522 | 520 | 509 | 504 | 380 | 377 | 373 | 243 | 182 | 96 | 86 |  |  |  |  |
| Score/MB | 881 | 348 | 680 | 290 | 265 | 480 | 310 | 1862 | 375 | 232 | 49 | 107 | 8 | 48 | 15 | 12 | 65 | 58 |  | 56 | 49 | 49 | 49 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 41 | 42 | 59 | 61 | 61 | 66 | 67 | 63 | 62 | 84 | 80 | 84 | 124 | 147 | 253 | 292 | 133 | 372 |  |  |
