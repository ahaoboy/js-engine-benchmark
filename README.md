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


## Engine & Runtime (32/39)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47871<br>56.8M<br>842/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47741<br>98.4M<br>484/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47573<br>36.4M<br>1306/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40148<br>106.5M<br>376/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39472<br>123.1M<br>320/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39319<br>66.3M<br>592/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38603<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19619<br>19.4M<br>1010/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19423<br>40.1M<br>484/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17050<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16931<br>35.2M<br>480/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12505<br>199.7M<br>62/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2636<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1543<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 873<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 826<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 767<br>831.3K<br>944/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 716<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 565<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 499<br>2.1M<br>234/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 401<br>446.6K<br>919/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 396<br>685K<br>591/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 344<br>414.5K<br>849/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 298<br>2.7K<br>113011/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 0<br>0 | ❌unix<br>❌macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |

## bench
8/20/2025, 9:55:19 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako | quickjs-emscripten |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 | 1.2.20 |  | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 56.8M | 98.4M | 36.4M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M | 0 |
| Exe size | 1M | 98.4M | 36.4M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M | 0 |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 36771 | 42055 | 40280 | 32443 | 31740 | 33021 | 31917 | 23451 | 13658 | 13185 | 12649 | 35461 | 12409 | 1126 | 679 | 682 | 693 | 627 | 563 | 578 | 581 | 458 | 293 | 271 | 243 | 229 | 130 | 196 | 89 | 104 | 60 | 59 | 270 | 27 |  | 121 |  |  |
| DeltaBlue | 108949 | 54442 | 54303 | 73675 | 73146 | 74522 | 76710 | 24358 | 13581 | 13012 | 12926 | 38613 | 461 | 1067 | 670 | 665 | 676 | 616 | 544 | 586 | 581 | 467 | 322 | 351 | 358 | 322 | 175 | 247 | 163 | 114 | 54 | 54 | 277 | 30 |  | 177 |  |  |
| Crypto | 41434 | 49128 | 51851 | 41500 | 41457 | 41307 | 41449 | 31880 | 20553 | 17667 | 17459 | 28105 | 7857 | 1361 | 580 | 751 | 596 | 553 | 886 | 550 | 375 | 903 | 789 | 189 | 187 | 183 | 139 | 123 | 323 | 96 | 80 | 61 | 295 | 31 |  | 135 |  |  |
| RayTrace | 112774 | 119582 | 115216 | 62973 | 64823 | 68005 | 59421 | 34039 | 27916 | 26862 | 27990 | 5792 | 1429 | 1584 | 1152 | 883 | 1072 | 953 | 681 | 890 | 694 | 566 | 569 | 530 | 527 | 477 | 478 | 271 | 498 | 260 | 163 | 136 | 346 | 93 |  | 428 |  |  |
| EarleyBoyer | 85704 | 66763 | 68402 | 73534 | 71354 | 73219 | 69388 | 7055 | 40918 | 36502 | 36985 | 28448 | 788 | 3411 | 1870 | 1458 | 1742 | 1388 | 1672 | 1356 | 1215 | 767 | 576 | 544 | 519 | 490 | 587 | 496 | 325 | 282 | 188 | 136 |  | 78 |  | 510 |  |  |
| RegExp | 10445 | 20820 | 19982 | 10193 | 9689 | 10021 | 8938 | 7902 | 8793 | 8594 | 8901 | 1236 | 636 | 552 | 251 | 231 | 226 | 235 | 115 | 224 | 183 | 63 | 130 | 237 | 217 | 196 | 453 | 208 | 94 | 246 | 48 | 92 |  |  |  |  |  |  |
| Splay | 42457 | 36155 | 36565 | 37152 | 35343 | 29027 | 34340 | 19784 | 23950 | 12696 | 11699 | 2306 | 4876 | 3586 | 2385 | 1793 | 1915 | 1814 | 2072 | 1476 | 1654 | 1276 | 1274 | 1163 | 1288 | 657 | 846 | 844 | 380 | 461 | 222 | 337 |  | 87 |  | 842 |  |  |
| NavierStokes | 38765 | 39920 | 40176 | 38803 | 38655 | 38803 | 38397 | 32106 | 22090 | 22024 | 21941 | 33093 | 14840 | 1842 | 991 | 1258 | 957 | 990 | 1214 | 926 | 931 | 1523 | 954 | 470 | 483 | 482 | 184 | 201 | 824 | 161 | 175 | 118 |  | 51 |  | 278 |  |  |
| Score | 47871 | 47741 | 47573 | 40148 | 39472 | 39319 | 38603 | 19619 | 19423 | 17050 | 16931 | 12505 | 2636 | 1543 | 873 | 832 | 826 | 767 | 740 | 716 | 645 | 565 | 499 | 401 | 396 | 344 | 298 | 270 | 263 | 188 | 106 | 104 |  |  |  |  |  |  |
| Score/MB | 842 | 484 | 1306 | 376 | 320 | 592 | 949 | 1010 | 484 | 334 | 480 | 62 | 2 | 42 | 71 | 194 | 160 | 944 | 87 | 531 | 326 | 12 | 234 | 919 | 591 | 849 | 113011 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 44 | 34 | 46 | 48 | 50 | 51 | 61 | 53 | 59 | 86 | 68 | 80 | 81 | 85 | 100 | 114 | 132 | 146 | 238 | 238 | 31 | 407 |  | 87 | 7 |  |
### macos-arm64
| Engine | bun | v8 | JavaScriptCore | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | njs | ladybird | duktape | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino | quickjs-emscripten |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 14.1.93 |  | 2.4.4 | 0.10.1 | 24.6.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 |  | 2.99.99 | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 41.1M | 0.2K | 85.6M | 56.8M | 111.5M | 132.3M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 | 0 |
| Exe size | 56.8M | 41.1M | 0.2K | 85.6M | 56.8M | 111.5M | 66.2M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 51262 | 46168 | 45215 | 48441 | 48597 | 43245 | 15543 | 15282 | 15558 | 37438 | 19388 | 1356 | 1161 | 1344 | 1087 | 1356 | 1163 | 1080 | 774 | 867 | 530 | 394 | 333 | 227 | 111 | 181 | 114 | 41 | 212 | 40 |  | 238 |  |
| DeltaBlue | 73120 | 122338 | 61946 | 108698 | 111138 | 108063 | 17819 | 17898 | 16781 | 56372 | 2731 | 1259 | 1142 | 1347 | 1182 | 1233 | 1144 | 1026 | 860 | 791 | 630 | 598 | 397 | 238 | 210 | 207 | 103 | 43 | 234 | 53 |  | 262 |  |
| Crypto | 75241 | 61408 | 72915 | 60486 | 60484 | 61110 | 25326 | 22742 | 22852 | 46913 | 16188 | 1471 | 1729 | 1233 | 1040 | 1229 | 1398 | 954 | 1233 | 1646 | 1384 | 304 | 200 | 146 | 440 | 178 | 118 | 45 | 258 | 48 |  | 146 |  |
| RayTrace | 190695 | 158580 | 164870 | 94793 | 95163 | 95977 | 48691 | 50393 | 42771 | 6406 | 834 | 2577 | 1789 | 2124 | 2094 | 1580 | 1278 | 1417 | 1042 | 1121 | 1136 | 994 | 471 | 805 | 674 | 419 | 254 | 45 | 320 | 154 |  | 692 |  |
| EarleyBoyer | 107166 | 120160 | 92255 | 106719 | 106949 | 103295 | 50699 | 50150 | 47384 | 54538 | 2784 | 5318 | 1879 | 3327 | 3138 | 2651 | 2379 | 2276 | 2728 | 1458 | 1200 | 1101 | 811 | 813 | 390 | 452 | 250 | 92 |  | 128 |  | 755 |  |
| RegExp | 32672 | 15259 | 28366 | 15396 | 15274 | 15500 | 12316 | 12819 | 12884 | 1953 | 788 | 741 | 316 | 324 | 326 | 281 | 288 | 279 | 217 | 108 | 261 | 360 | 314 | 620 | 311 | 231 | 147 | 15 |  |  |  |  |  |
| Splay | 53295 | 69479 | 54762 | 51576 | 46417 | 49628 | 28693 | 19183 | 19297 | 3473 | 1995 | 4823 | 4811 | 3667 | 4189 | 2518 | 2616 | 2307 | 1800 | 2199 | 2380 | 1035 | 1410 | 1017 | 489 | 602 | 593 | 136 |  | 136 |  | 1219 |  |
| NavierStokes | 40769 | 40096 | 34360 | 40662 | 40662 | 40688 | 21411 | 21475 | 21348 | 34691 | 13275 | 1652 | 3958 | 2140 | 1757 | 2188 | 2388 | 1735 | 1900 | 1950 | 1575 | 765 | 329 | 208 | 910 | 275 | 229 | 75 |  | 84 |  | 328 |  |
| Score | 67063 | 63985 | 59903 | 56512 | 55937 | 55391 | 24528 | 23169 | 22435 | 17331 | 3778 | 1943 | 1616 | 1586 | 1464 | 1382 | 1336 | 1182 | 1071 | 980 | 942 | 622 | 442 | 402 | 373 | 289 | 191 | 52 |  |  |  |  |  |
| Score/MB | 1180 | 1558 | 365190977 | 659 | 984 | 496 | 185 | 705 | 484 | 89 |  | 123 | 918 | 439 | 139 | 335 | 1401 | 1001 | 446 | 23 | 1715 | 1484 | 34 | 152451 | 236 | 3 | 15 | 48 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 33 | 29 | 35 | 36 | 37 | 37 | 36 | 41 | 47 | 60 | 43 | 53 | 76 | 86 | 94 | 98 | 136 | 531 | 34 | 261 |  | 74 |  |
### windows
| Engine | v8 | JavaScriptCore | bun | dune | node | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | quickjs-ng | quickjs-emscripten | rquickjs | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.93 |  | 1.2.20 | 0.10.1 | 24.6.0 | 2.4.4 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 |  |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.7M | 77.6M | 116.3M | 143.1M | 14.4M | 52.7M | 72.9M | 196.1M | 17.3M | 86.6M | 11.8M | 37M | 42.2M | 9M | 0 | 8M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 112.9M | 47.4M | 85.3M | 110.8M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 0 | 1.3M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 30.3M | 31.1M | 32.3M | 14.1M | 18.6M | 30.3M | 195.8M | 17.3M | 83.5M | 6.9M | 31.3M | 29.1M | 7.3M | 0 | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 36841 | 36167 | 36675 | 31998 | 27306 | 33466 | 24602 | 14018 | 14100 | 36057 | 6017 | 697 | 511 | 452 | 383 | 434 | 394 | 381 | 229 | 219 | 237 | 198 | 107 | 55 | 49 |  | 23 |  |  |
| DeltaBlue | 110153 | 46329 | 45013 | 74601 | 71394 | 62885 | 29400 | 13640 | 13005 | 28219 | 284 | 621 | 462 | 403 | 383 | 396 | 396 | 417 | 319 | 264 | 345 | 239 | 118 | 51 | 41 |  | 27 |  |  |
| Crypto | 41456 | 48112 | 47878 | 41000 | 42078 | 38808 | 33863 | 20398 | 16717 | 21181 | 2759 | 777 | 549 | 425 | 431 | 371 | 410 | 321 | 190 | 318 | 183 | 116 | 90 | 57 | 75 |  | 29 |  |  |
| RayTrace | 112404 | 98123 | 86727 | 66459 | 68381 | 67715 | 51725 | 28712 | 26465 | 3770 | 1999 | 1008 | 550 | 736 | 611 | 580 | 469 | 552 | 467 | 436 | 480 | 234 | 267 | 126 | 133 |  | 84 |  |  |
| EarleyBoyer | 87575 | 65161 | 57920 | 74596 | 71012 | 73826 | 43116 | 41577 | 36220 | 28121 | 833 | 2258 | 1014 | 1129 | 1019 | 983 | 911 | 898 | 575 | 523 | 591 | 462 | 297 | 125 | 135 |  | 71 |  |  |
| RegExp | 10132 | 19183 | 18002 | 9608 | 9829 | 9346 | 9680 | 8866 | 8728 | 996 | 647 | 406 | 189 | 198 | 196 | 188 | 176 | 155 | 258 | 110 | 201 | 201 | 276 | 91 | 42 |  |  |  |  |
| Splay | 43883 | 36549 | 32897 | 29410 | 34528 | 34019 | 20344 | 24227 | 14595 | 2795 | 1100 | 2399 | 1045 | 1457 | 1342 | 993 | 1227 | 961 | 1197 | 1002 | 1205 | 934 | 425 | 323 | 174 |  | 81 |  |  |
| NavierStokes | 39099 | 33882 | 39920 | 38881 | 39029 | 38951 | 36952 | 22364 | 22238 | 26267 | 1115 | 1088 | 1030 | 741 | 716 | 670 | 743 | 730 | 475 | 1088 | 480 | 194 | 151 | 113 | 166 |  | 48 |  |  |
| Score | 48129 | 43251 | 41837 | 38981 | 38930 | 38724 | 28178 | 19665 | 17380 | 10663 | 1257 | 974 | 590 | 585 | 542 | 509 | 507 | 478 | 391 | 387 | 386 | 261 | 189 | 98 | 87 |  |  |  |  |
| Score/MB | 888 | 354 | 315 | 502 | 334 | 270 | 1956 | 373 | 238 | 54 | 72 | 11 | 50 | 15 | 12 | 56 |  | 59 | 51 | 50 | 51 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 44 | 41 | 58 | 59 | 60 | 63 | 65 | 68 | 78 | 83 | 82 | 121 | 147 | 250 | 288 | 130 | 434 |  |  |
