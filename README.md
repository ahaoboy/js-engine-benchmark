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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46093<br>31.3M<br>1472/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45676<br>99.1M<br>460/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 44880<br>57.9M<br>775/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 39244<br>43M<br>913/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 38584<br>108.3M<br>356/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 37805<br>52.2M<br>723/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 36747<br>106.5M<br>345/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 36747<br>40.7M<br>903/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19540<br>19.3M<br>1011/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18684<br>39.8M<br>469/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16496<br>44.7M<br>369/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16284<br>32M<br>508/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9910<br>199.4M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2512<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1739<br>36M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 1097<br>982.4K<br>1143/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 1080<br>12.3M<br>87/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 991<br>4.1M<br>243/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 872<br>1.4M<br>626/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 861<br>1.4M<br>611/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 846<br>831.3K<br>1042/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 782<br>1.9M<br>419/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 674<br>46.5M<br>14/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 596<br>0<br>0/M | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 584<br>370.4K<br>1614/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 551<br>1.3M<br>408/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 447<br>422.8K<br>1082/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 419<br>386.8K<br>1109/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 404<br>685K<br>603/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 301<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 275<br>1.9M<br>141/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 200<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 147<br>13.2M<br>11/M | ✅unix<br>✅macArm<br>❌windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 121<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K<br>0/M | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M<br>0/M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M<br>0/M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/8/2025, 1:43:29 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | bare | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | rquickjs | rquickjs-pgo | primjs | ladybird | duktape | quickjs-ng | mujs-pgo | mujs | mujs-one | xst | JerryScript | nova | njs | quickjs-emscripten | ringo | jint | kiesel | boa | engine262 | goja | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 |  | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  |  | 2.99.99 | 0.10.1 |  | 1.3.8 |  | 16.9.1 | 3.0.0 |  | 0.9.2 |  | 4.0.0 |  | 0.1.0.dev |  | 0.0.1 |  |  |  |
| Total size | 31.3M | 99.1M | 57.9M | 43M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 831.3K | 46.5M | 370.4K | 1.3M | 422.8K | 386.8K | 685K | 1.9M | 454.2K | 8.5M | 1.9M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Exe size | 31.3M | 99.1M | 833.3K | 43M | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 1.4M | 1.4M | 831.3K | 46.5M | 370.4K | 1.3M | 422.8K | 386.8K | 685K | 1.9M | 454.2K | 8.5M | 1.9M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 43164 | 43605 | 33943 | 41289 | 35143 | 34949 | 32538 | 30197 | 21351 | 12345 | 12024 | 11191 | 39249 | 14234 | 1416 | 965 | 820 | 815 | 665 | 657 | 674 | 540 | 334 | 458 | 321 | 256 | 277 | 84 | 289 | 30 | 576 | 471 | 133 | 108 | 88 | 67 |  | 214 |  |  |
| DeltaBlue | 58997 | 57860 | 104777 | 75315 | 77041 | 76188 | 72042 | 76115 | 25398 | 13528 | 13230 | 12906 | 24259 | 410 | 1145 | 823 | 786 | 782 | 661 | 664 | 666 | 503 | 377 | 453 | 428 | 370 | 403 | 158 | 295 | 34 | 581 | 512 | 198 | 126 | 77 | 59 |  | 259 |  |  |
| Crypto | 49166 | 48286 | 41122 | 39631 | 39397 | 39700 | 40538 | 40188 | 31496 | 19235 | 16109 | 15869 | 12903 | 7411 | 1701 | 1097 | 902 | 833 | 758 | 739 | 740 | 1195 | 962 | 542 | 214 | 204 | 219 | 364 | 324 | 42 | 934 | 542 | 151 | 104 | 100 | 103 |  | 125 |  |  |
| RayTrace | 114698 | 111294 | 115882 | 67124 | 62233 | 67783 | 58903 | 62171 | 34927 | 28387 | 26122 | 28342 | 6942 | 1314 | 1739 | 977 | 1301 | 1172 | 994 | 985 | 956 | 792 | 683 | 619 | 540 | 495 | 515 | 492 | 343 | 95 | 698 | 509 | 464 | 277 | 185 | 183 |  | 266 |  |  |
| EarleyBoyer | 70958 | 68080 | 80675 | 61719 | 66417 | 66025 | 61248 | 67268 | 7479 | 36901 | 33376 | 31539 | 18400 | 1055 | 3914 | 1579 | 2089 | 1896 | 1412 | 1392 | 1393 | 1018 | 639 | 1047 | 508 | 499 | 511 | 307 |  | 89 | 1822 | 1017 | 548 | 312 | 182 | 211 |  | 500 |  |  |
| RegExp | 20911 | 21253 | 10393 | 10193 | 10274 | 10102 | 10011 | 9065 | 8199 | 9408 | 8874 | 8883 | 738 | 716 | 628 | 260 | 311 | 273 | 254 | 244 | 262 | 66 | 152 | 148 | 270 | 235 | 243 | 149 |  |  | 112 | 202 | 465 | 286 | 132 | 54 |  | 218 |  |  |
| Splay | 27856 | 28172 | 35481 | 32409 | 32482 | 26199 | 29231 | 28937 | 19421 | 21571 | 13047 | 12827 | 2820 | 4604 | 3370 | 2600 | 2513 | 2062 | 2210 | 2186 | 1791 | 1342 | 1467 | 1305 | 1228 | 1500 | 796 | 316 |  | 142 | 2186 | 1308 | 847 | 441 | 407 | 239 |  | 786 |  |  |
| NavierStokes | 34326 | 34280 | 32648 | 33357 | 33390 | 33323 | 33142 | 32814 | 29917 | 21750 | 21200 | 21179 | 28464 | 8028 | 2105 | 2300 | 1497 | 1399 | 1279 | 1280 | 1266 | 1824 | 1149 | 602 | 593 | 561 | 570 | 960 |  | 65 | 1437 | 890 | 167 | 163 | 180 | 226 |  | 211 |  |  |
| Score | 46093 | 45676 | 44880 | 39244 | 38584 | 37805 | 36747 | 36747 | 19540 | 18684 | 16496 | 16284 | 9910 | 2512 | 1739 | 1097 | 1080 | 991 | 872 | 861 | 846 | 674 | 584 | 551 | 447 | 419 | 404 | 275 |  |  | 782 | 596 | 301 | 200 | 147 | 121 |  | 276 |  |  |
| Score/MB | 1472 | 460 | 775 | 913 | 356 | 723 | 345 | 903 | 1011 | 469 | 369 | 508 | 49 |  | 48 | 1143 | 87 | 243 | 626 | 611 | 1042 | 14 | 1614 | 408 | 1082 | 1109 | 603 | 141 |  |  | 419 |  |  | 2 | 11 | 4 |  | 20 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 35 | 32 | 42 | 39 | 42 | 47 | 48 | 47 | 79 | 61 | 66 | 73 | 78 | 74 | 126 | 30 | 331 | 61 | 57 | 103 | 137 | 165 | 202 |  | 112 | 78 | 6 |
### macos-arm64
| Engine | v8 | JavaScriptCore | dune | bare | deno | node | bun | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | rquickjs | llrt | quickjs-ng | ladybird | duktape | quickjs | mujs | xst | JerryScript | nova | engine262 | njs | quickjs-emscripten | goja | ringo | jint | kiesel | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 |  | 0.10.2 |  | 2.5.3 | 24.9.0 | 1.2.23 | 144.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 |  | 0.7.0.beta | 0.10.1 |  | 2.99.99 | 2025.09.13 | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.0.1 | 0.9.2 |  |  | 4.0.0 |  | 0.1.0.dev |  |  |
| Total size | 26M | 78.9M | 44.3M | 32.8M | 87.4M | 87.5M | 57.3M | 131.8M | 28.9M | 40M | 193.9M | 0 | 13.9M | 1.5M | 3.4M | 1.2M | 10.6M | 3.6M | 41.5M | 431.4K | 837K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 2M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 60.2M |
| Exe size | 26M | 736.3K | 44.3M | 32.8M | 87.4M | 87.5M | 57.3M | 65.9M | 28.9M | 40M | 118.5K | 0 | 7M | 1.5M | 3.4M | 1.2M | 10.6M | 1.8M | 41.5M | 431.4K | 837K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 1.5M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 59.6M |
| Dll size | 0 | 78.2M | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 7M | 0 | 0 | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 40477 | 44738 | 57924 | 38980 | 55177 | 43390 | 41046 | 14460 | 14435 | 11540 | 30723 | 2274 | 1034 | 903 | 1144 | 850 | 712 | 818 | 823 | 493 | 715 | 289 | 75 | 193 | 34 |  | 626 | 498 | 307 | 125 | 131 | 112 |  |  |
| DeltaBlue | 102774 | 58614 | 109829 | 101094 | 94469 | 96341 | 61144 | 16285 | 16397 | 15412 | 16853 | 1428 | 1007 | 1038 | 1134 | 931 | 783 | 807 | 685 | 553 | 804 | 360 | 147 | 195 | 52 |  | 753 | 500 | 346 | 179 | 142 | 105 |  |  |
| Crypto | 53758 | 55380 | 59787 | 57160 | 55389 | 54736 | 60025 | 23968 | 19777 | 19374 | 28502 | 11498 | 1180 | 1584 | 1046 | 820 | 577 | 844 | 1365 | 1264 | 613 | 197 | 263 | 227 | 61 |  | 1094 | 508 | 163 | 102 | 113 | 121 |  |  |
| RayTrace | 131274 | 142448 | 85469 | 98641 | 81695 | 77847 | 141486 | 42021 | 45139 | 40437 | 785 | 1408 | 2127 | 1177 | 1780 | 1221 | 1495 | 1110 | 1037 | 964 | 843 | 563 | 450 | 295 | 134 |  | 637 | 739 | 241 | 546 | 318 | 282 |  |  |
| EarleyBoyer | 107572 | 90996 | 91068 | 95264 | 87947 | 82012 | 63456 | 44471 | 39535 | 45732 | 13587 | 1066 | 4380 | 2520 | 2388 | 1798 | 2208 | 1749 | 1464 | 1145 | 1484 | 778 | 310 |  | 117 |  | 1837 | 1276 | 576 | 641 | 291 | 242 |  |  |
| RegExp | 13674 | 27575 | 13261 | 14197 | 12572 | 13027 | 18347 | 11523 | 11444 | 12195 | 1309 | 1002 | 633 | 259 | 228 | 231 | 285 | 221 | 95 | 225 | 208 | 277 | 212 |  |  |  | 170 | 233 | 241 | 498 | 197 | 159 |  |  |
| Splay | 61575 | 38888 | 34960 | 41422 | 37388 | 37470 | 23180 | 21595 | 15812 | 17984 | 2519 | 2336 | 3749 | 3492 | 1903 | 2635 | 3175 | 2556 | 1758 | 2127 | 2182 | 1027 | 381 |  | 186 |  | 1393 | 1669 | 725 | 964 | 501 | 617 |  |  |
| NavierStokes | 35657 | 37694 | 37174 | 37100 | 29354 | 37174 | 34178 | 19177 | 19511 | 18624 | 23150 | 11267 | 1250 | 3235 | 1583 | 1395 | 985 | 1455 | 1684 | 1488 | 1113 | 526 | 855 |  | 94 |  | 1740 | 958 | 247 | 193 | 186 | 262 |  |  |
| Score | 55861 | 54345 | 51697 | 51057 | 48093 | 47634 | 45888 | 21764 | 20357 | 20042 | 7673 | 2490 | 1554 | 1377 | 1188 | 1024 | 993 | 985 | 870 | 849 | 829 | 437 | 270 |  |  |  | 840 | 677 | 317 | 305 | 209 | 199 |  |  |
| Score/MB | 2151 | 689 | 1167 | 1556 | 550 | 544 | 801 | 165 | 703 | 501 | 39 |  | 111 | 914 | 353 | 855 | 93 | 270 | 20 | 2015 | 1014 | 1087 | 183 |  |  |  | 416 |  | 24 |  | 2 | 16 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 36 | 33 | 42 | 44 | 45 | 45 | 46 | 62 | 46 | 49 | 74 | 117 | 37 | 259 |  | 56 | 52 | 99 | 103 | 134 | 126 |  |  |
### windows
| Engine | v8 | deno | bun | dune | JavaScriptCore | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | rquickjs | quickjs-ng | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | xst | duktape | nova | goja | boa | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 | 2.5.3 | 1.2.23 | 0.10.2 |  | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta |  | 0.10.1 |  |  |  | 1.3.8 |  | 2.7.0 |  |  |  | 0.0.1 |  |  |
| Total size | 61.9M | 148.2M | 139.6M | 82.1M | 125.2M | 120.8M | 15.6M | 53.9M | 80.6M | 197M | 116.4M | 8.9M | 40.1M | 45.6M | 10.5M | 6.4M | 10.2M | 0 | 8.3M | 8.2M | 6.5M | 8.2M | 17.5M | 20.5M | 43.8M | 0 | 99.1M | 0 |
| Exe size | 29.5M | 112.3M | 113.6M | 49.1M | 342.5K | 85.5M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 13.1M | 1.4M | 1.2M | 1M | 0 | 428K | 393.5K | 1.3M | 329.5K | 8.3M | 13.3M | 27.4M | 0 | 68.8M | 0 |
| Dll size | 32.4M | 35.9M | 26M | 33M | 124.9M | 35.3M | 15.3M | 20.1M | 37.9M | 196.7M | 113.4M | 7.9M | 36M | 32.5M | 9.1M | 5.2M | 9.2M | 0 | 7.8M | 7.8M | 5.2M | 7.8M | 9.2M | 7.2M | 16.5M | 0 | 30.3M | 0 |
| Richards | 37590 | 35387 | 35768 | 31828 | 32898 | 31698 | 23726 | 12592 | 13775 | 35369 | 691 | 631 | 440 | 380 | 400 | 513 | 419 | 363 | 257 | 233 |  | 203 | 22 | 189 | 47 |  | 98 |  |
| DeltaBlue | 97881 | 79143 | 43059 | 79203 | 41145 | 63414 | 23095 | 11948 | 12820 | 29039 | 607 | 510 | 402 | 365 | 390 | 487 | 433 | 387 | 353 | 334 |  | 241 | 26 | 215 | 42 |  | 107 |  |
| Crypto | 38493 | 37430 | 44788 | 41492 | 46436 | 41063 | 32350 | 19379 | 17267 | 21511 | 771 | 603 | 425 | 426 | 507 | 476 | 317 | 426 | 188 | 171 |  | 282 | 34 | 113 | 73 |  | 88 |  |
| RayTrace | 108408 | 70299 | 85691 | 71335 | 96865 | 64157 | 37369 | 27528 | 25848 | 3608 | 964 | 583 | 751 | 629 | 589 | 515 | 586 | 455 | 482 | 459 |  | 438 | 82 | 227 | 129 |  | 255 |  |
| EarleyBoyer | 83565 | 74455 | 52200 | 73067 | 56765 | 70110 | 38543 | 40372 | 36452 | 21296 | 2187 | 1042 | 1086 | 1005 | 947 | 978 | 858 | 861 | 620 | 573 |  | 474 | 73 | 448 | 133 |  | 286 |  |
| RegExp | 7682 | 9661 | 17564 | 9637 | 16316 | 9670 | 9346 | 8874 | 8495 | 953 | 406 | 190 | 193 | 201 | 170 | 159 | 152 | 176 | 244 | 195 |  | 90 |  | 194 | 43 |  | 270 |  |
| Splay | 35970 | 33722 | 32947 | 29019 | 24822 | 31317 | 21294 | 23380 | 12924 | 3126 | 2139 | 1362 | 1365 | 1284 | 1237 | 1047 | 1219 | 1235 | 659 | 1177 |  | 825 | 127 | 805 | 167 |  | 399 |  |
| NavierStokes | 38507 | 38321 | 33438 | 38507 | 37656 | 38617 | 35657 | 21963 | 21793 | 28703 | 1041 | 1492 | 732 | 711 | 732 | 534 | 736 | 741 | 472 | 474 |  | 993 | 57 | 184 | 166 |  | 147 |  |
| Score | 43843 | 40221 | 39537 | 39454 | 38926 | 37993 | 25542 | 18670 | 16969 | 10477 | 941 | 679 | 574 | 536 | 536 | 520 | 501 | 498 | 375 | 374 |  | 347 |  | 246 | 86 |  | 179 |  |
| Score/MB | 708 | 271 | 283 | 480 | 310 | 314 | 1637 | 346 | 210 | 53 | 8 | 75 | 14 | 11 | 51 | 81 | 48 |  | 45 | 45 |  | 42 |  | 11 | 1 |  | 1 |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 55 | 59 | 60 | 61 | 66 | 68 | 62 | 77 | 86 | 136 | 94 | 399 | 125 | 289 |  | 150 | 83 |
