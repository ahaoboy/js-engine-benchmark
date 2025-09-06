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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47762<br>57.2M<br>835/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47653<br>36.5M<br>1306/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47555<br>98.6M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 41023<br>65.3M<br>627/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40500<br>106.3M<br>381/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39869<br>123.3M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38908<br>40.7M<br>957/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 38879<br>66.3M<br>586/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20091<br>19.4M<br>1035/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19397<br>39.8M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17190<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16996<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9857<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2079<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 865<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 824<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 817<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 760<br>1.4M<br>546/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 749<br>1.4M<br>532/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 744<br>831.3K<br>916/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 732<br>8.4M<br>86/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 558<br>46.4M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 488<br>2.1M<br>229/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 397<br>446.6K<br>910/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 307<br>2.7K<br>116424/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 186<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/6/2025, 1:45:52 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | rquickjs-pgo | primjs | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.0 |  | 1.2.21 |  | 2.4.5 | 24.7.0 |  | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 57.2M | 36.5M | 98.6M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.5M | 98.6M | 65.3M | 106.3M | 123.3M | 40.7M | 66.3M | 571K | 39.8M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 1.4M | 1.4M | 831.3K | 8.4M | 2M | 46.4M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 56.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38236 | 40301 | 41173 | 32510 | 32460 | 32217 | 32531 | 32301 | 23140 | 13439 | 14431 | 12910 | 35503 | 12698 | 1137 | 684 | 625 | 687 | 575 | 575 | 628 | 547 | 580 | 476 | 268 | 325 | 263 | 247 | 229 | 134 | 203 | 89 | 101 | 60 | 59 | 264 | 24 |  | 124 |  |
| DeltaBlue | 108050 | 57318 | 54613 | 78079 | 74429 | 73179 | 75831 | 73900 | 25846 | 13475 | 13078 | 12867 | 26884 | 262 | 1054 | 667 | 669 | 681 | 584 | 583 | 626 | 536 | 579 | 455 | 307 | 388 | 359 | 346 | 321 | 172 | 249 | 164 | 109 | 54 | 54 | 275 | 31 |  | 177 |  |
| Crypto | 41332 | 51683 | 47821 | 41815 | 41752 | 41812 | 41210 | 41239 | 32157 | 20015 | 17509 | 17459 | 29245 | 9362 | 1366 | 585 | 747 | 582 | 553 | 531 | 531 | 873 | 379 | 851 | 786 | 412 | 188 | 190 | 183 | 154 | 123 | 321 | 98 | 80 | 61 | 296 | 31 |  | 136 |  |
| RayTrace | 111516 | 116844 | 117584 | 71113 | 66902 | 66237 | 59569 | 67857 | 34005 | 27824 | 26640 | 28285 | 3657 | 1387 | 1558 | 1132 | 914 | 1017 | 921 | 904 | 896 | 676 | 688 | 556 | 549 | 455 | 539 | 523 | 491 | 490 | 271 | 493 | 252 | 164 | 137 | 346 | 92 |  | 433 |  |
| EarleyBoyer | 86913 | 67412 | 67051 | 70125 | 74346 | 70927 | 69457 | 73473 | 7130 | 41203 | 36660 | 37187 | 21652 | 1190 | 3345 | 1857 | 1467 | 1717 | 1347 | 1359 | 1360 | 1637 | 1222 | 751 | 564 | 864 | 552 | 520 | 500 | 592 | 492 | 322 | 285 | 189 | 134 |  | 76 |  | 386 |  |
| RegExp | 10313 | 19327 | 20862 | 10344 | 10072 | 10072 | 8919 | 9961 | 7811 | 8974 | 8919 | 8810 | 826 | 575 | 554 | 250 | 223 | 226 | 230 | 215 | 231 | 115 | 182 | 63 | 133 | 176 | 242 | 211 | 197 | 436 | 205 | 96 | 251 | 49 | 93 |  |  |  |  |  |
| Splay | 40933 | 36516 | 37046 | 37758 | 36981 | 35408 | 36361 | 27625 | 19762 | 24187 | 12098 | 11752 | 1999 | 977 | 3530 | 2356 | 1777 | 1907 | 2196 | 2202 | 1779 | 2082 | 1654 | 1276 | 1284 | 1241 | 1021 | 1231 | 1314 | 969 | 862 | 380 | 437 | 221 | 318 |  | 87 |  | 716 |  |
| NavierStokes | 38765 | 40068 | 39920 | 38803 | 38732 | 38655 | 38507 | 38655 | 36878 | 22216 | 21898 | 22045 | 24413 | 12083 | 1880 | 946 | 1281 | 970 | 957 | 959 | 902 | 1214 | 931 | 1512 | 937 | 684 | 477 | 495 | 473 | 180 | 198 | 812 | 165 | 175 | 119 |  | 51 |  | 275 |  |
| Score | 47762 | 47653 | 47555 | 41023 | 40500 | 39869 | 38908 | 38879 | 20091 | 19397 | 17190 | 16996 | 9857 | 2079 | 1538 | 865 | 824 | 817 | 760 | 749 | 744 | 732 | 645 | 558 | 488 | 485 | 397 | 393 | 377 | 307 | 271 | 262 | 186 | 106 | 103 |  |  |  |  |  |
| Score/MB | 835 | 1306 | 482 | 627 | 381 | 323 | 957 | 586 | 1035 | 487 | 337 | 482 | 49 | 1 | 42 | 70 | 193 | 158 | 546 | 532 | 916 | 86 | 326 | 12 | 229 |  | 910 | 587 | 931 | 116424 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 44 | 34 | 47 | 48 | 50 | 52 | 53 | 52 | 62 | 59 | 87 | 68 | 63 | 79 | 82 | 85 | 96 | 115 | 132 | 143 | 237 | 236 | 31 | 412 |  | 88 | 7 |
### macos-arm64
| Engine | bare | v8 | dune | JavaScriptCore | deno | node | bun | spidermonkey | spiderfire | mozjs | graaljs | jjs | primjs | txiki.js | hermes | quickjs-ng | quickjs | llrt | njs | rquickjs | duktape | quickjs-emscripten | ladybird | mujs | ringo | xst | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.2.43 | 0.10.1 |  | 2.4.5 | 24.7.0 | 1.2.21 | 143.0 |  |  | 24.1.2 |  |  | 24.12.0 | 0.12.0 | 0.8.0 | 2025.04.26 | 0.6.2.beta | 0.9.2 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 45.6M | 41.2M | 56.8M | 0.2K | 85.5M | 111.7M | 56.8M | 131.8M | 46.3M | 32.8M | 194M | 0 | 1.8M | 3.6M | 15.7M | 4.1M | 975.9K | 10.5M | 2.4M | 1.2M | 562.1K | 0 | 41.4M | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 45.6M | 41.2M | 56.8M | 0.2K | 85.5M | 111.7M | 56.8M | 65.9M | 46.3M | 32.8M | 147.4K | 0 | 1.8M | 3.6M | 7.9M | 2.1M | 975.9K | 10.5M | 1.8M | 1.2M | 562.1K | 0 | 41.4M | 429.1K | 2.7K | 1.6M | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 0 | 0 | 0 | 7.9M | 2.1M | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 44774 | 36619 | 48378 | 34575 | 44163 | 37579 | 40675 | 15102 | 15674 | 14968 | 34430 | 492 | 1196 | 1192 | 1005 | 1272 | 1149 | 684 | 771 | 973 | 498 | 606 | 780 | 281 | 191 | 88 | 239 | 161 | 81 | 39 | 213 | 35 |  | 220 |
| DeltaBlue | 109630 | 113928 | 110503 | 55413 | 92010 | 95805 | 32993 | 17402 | 17455 | 17845 | 9752 | 1977 | 1326 | 1166 | 961 | 1041 | 931 | 892 | 798 | 919 | 529 | 670 | 603 | 481 | 254 | 162 | 335 | 168 | 65 | 43 | 233 | 44 |  | 237 |
| Crypto | 58020 | 61534 | 61448 | 67346 | 57193 | 44850 | 50795 | 25295 | 21632 | 21336 | 22853 | 9519 | 1736 | 1041 | 1179 | 1156 | 1356 | 846 | 1153 | 786 | 1283 | 569 | 1169 | 245 | 141 | 315 | 143 | 143 | 83 | 45 | 253 | 43 |  | 120 |
| RayTrace | 99603 | 146444 | 90057 | 172491 | 82657 | 78883 | 135640 | 51059 | 40807 | 51577 | 2977 | 796 | 1637 | 2042 | 2385 | 1429 | 1166 | 1628 | 1073 | 849 | 1064 | 794 | 804 | 804 | 691 | 624 | 260 | 352 | 222 | 44 | 319 | 155 |  | 597 |
| EarleyBoyer | 99378 | 114928 | 100654 | 91176 | 88519 | 68029 | 53920 | 49831 | 48066 | 48255 | 40820 | 2423 | 1317 | 3066 | 4241 | 2376 | 2299 | 2753 | 2686 | 1706 | 1090 | 1382 | 1167 | 860 | 765 | 370 | 532 | 385 | 181 | 91 |  | 122 |  | 686 |
| RegExp | 15622 | 14169 | 14441 | 31698 | 11682 | 10284 | 16033 | 11807 | 12845 | 11934 | 1353 | 655 | 320 | 310 | 405 | 272 | 264 | 281 | 215 | 222 | 239 | 258 | 80 | 317 | 614 | 260 | 269 | 215 | 136 | 15 |  |  |  |  |
| Splay | 60866 | 41740 | 43891 | 32971 | 29149 | 34691 | 17339 | 26574 | 18951 | 16952 | 3015 | 1952 | 4583 | 3341 | 2339 | 2296 | 2269 | 3463 | 2689 | 2830 | 1648 | 1848 | 1370 | 1139 | 1186 | 481 | 925 | 572 | 583 | 159 |  | 108 |  | 1195 |
| NavierStokes | 39731 | 36618 | 40621 | 27575 | 33357 | 35101 | 21411 | 20142 | 21411 | 20841 | 14471 | 2629 | 3873 | 2014 | 1134 | 1907 | 2280 | 1602 | 1813 | 1616 | 1315 | 978 | 1483 | 578 | 235 | 979 | 227 | 193 | 222 | 78 |  | 72 |  | 294 |
| Score | 56678 | 55769 | 54397 | 52587 | 45786 | 42602 | 36228 | 23912 | 22270 | 22238 | 9281 | 1668 | 1552 | 1444 | 1369 | 1255 | 1232 | 1174 | 1100 | 1004 | 819 | 766 | 734 | 513 | 397 | 326 | 312 | 244 | 154 | 53 |  |  |  |  |
| Score/MB | 1244 | 1353 | 957 | 320589919 | 535 | 381 | 638 | 181 | 480 | 677 | 47 |  | 881 | 400 | 87 | 304 | 1292 | 111 | 459 | 839 | 1491 |  | 17 | 1224 | 150555 | 206 | 24 | 3 | 12 | 49 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 41 | 36 | 38 | 35 | 40 | 39 | 39 | 47 | 45 | 48 | 50 | 71 | 63 | 85 | 99 | 106 | 118 | 154 | 522 | 34 | 286 |  | 79 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | rquickjs-pgo | quickjs-emscripten | quickjs-ng | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.43 |  |  | 1.2.21 | 2.4.5 | 0.10.1 | 24.7.0 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta |  |  | 0.8.0 |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.4M | 122.1M | 55.8M | 132.8M | 142.9M | 77.6M | 116.5M | 14.4M | 52.4M | 72.8M | 196.1M | 17.5M | 112.8M | 38.4M | 11.8M | 9.2M | 42.2M | 9M | 0 | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.3M | 0 | 0 |
| Exe size | 29.4M | 338K | 26.1M | 113M | 110.6M | 47.4M | 85.4M | 342.9K | 33.9M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.4M | 13.1M | 1M | 0 | 1.7M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.4M | 0 | 0 |
| Dll size | 25M | 121.8M | 29.7M | 19.8M | 32.3M | 30.3M | 31.1M | 14.1M | 18.5M | 30.2M | 195.8M | 17.5M | 109.8M | 32.7M | 6.9M | 7.8M | 29.1M | 7.9M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38024 | 35542 | 32834 | 36756 | 32979 | 33325 | 28528 | 24471 | 14499 | 14142 | 35669 | 8564 | 703 | 448 | 506 | 402 | 392 | 444 | 387 | 430 | 225 | 212 | 236 | 195 | 99 | 55 | 48 |  | 23 |  |  |
| DeltaBlue | 110034 | 46481 | 76816 | 46640 | 70574 | 74694 | 72525 | 28160 | 13409 | 13072 | 30170 | 436 | 622 | 410 | 467 | 403 | 363 | 456 | 396 | 403 | 330 | 260 | 338 | 236 | 118 | 51 | 41 |  | 26 |  |  |
| Crypto | 41201 | 49798 | 40728 | 46632 | 39810 | 41147 | 42050 | 33644 | 20831 | 17878 | 23769 | 2943 | 786 | 429 | 538 | 519 | 429 | 328 | 432 | 374 | 188 | 317 | 180 | 113 | 92 | 59 | 73 |  | 29 |  |  |
| RayTrace | 111664 | 101970 | 69855 | 87097 | 68301 | 67117 | 66303 | 48321 | 26936 | 27380 | 2886 | 1468 | 1011 | 714 | 518 | 604 | 561 | 543 | 462 | 578 | 467 | 436 | 456 | 229 | 267 | 127 | 132 |  | 76 |  |  |
| EarleyBoyer | 82754 | 63147 | 70066 | 54853 | 74141 | 74313 | 72346 | 43375 | 41356 | 36973 | 22302 | 1337 | 2249 | 1132 | 999 | 1003 | 1016 | 929 | 889 | 983 | 581 | 524 | 582 | 458 | 299 | 126 | 136 |  | 67 |  |  |
| RegExp | 10001 | 18657 | 10032 | 17711 | 9661 | 9738 | 9900 | 10152 | 9246 | 8711 | 932 | 1016 | 405 | 195 | 190 | 166 | 182 | 155 | 180 | 186 | 253 | 109 | 198 | 201 | 280 | 88 | 43 |  |  |  |  |
| Splay | 43149 | 35196 | 39776 | 32637 | 32548 | 29247 | 32996 | 26965 | 22997 | 14571 | 2256 | 5390 | 2396 | 1433 | 1026 | 1262 | 1303 | 1247 | 1288 | 1002 | 1180 | 1008 | 1197 | 857 | 423 | 326 | 166 |  | 84 |  |  |
| NavierStokes | 39029 | 33801 | 39060 | 34030 | 38617 | 38951 | 39029 | 36618 | 22067 | 22171 | 25351 | 4058 | 1074 | 740 | 1033 | 748 | 713 | 756 | 748 | 666 | 479 | 1077 | 479 | 194 | 152 | 115 | 157 |  | 48 |  |  |
| Score | 47706 | 43032 | 40904 | 40689 | 39306 | 39280 | 38971 | 28904 | 19530 | 17649 | 9838 | 2163 | 975 | 582 | 582 | 547 | 526 | 514 | 512 | 510 | 391 | 384 | 380 | 256 | 188 | 98 | 85 |  |  |  |  |
| Score/MB | 876 | 352 | 732 | 306 | 275 | 505 | 334 | 2005 | 372 | 242 | 50 | 123 | 8 | 15 | 49 | 59 | 12 | 57 |  | 56 | 51 | 50 | 50 | 13 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 36 | 42 | 60 | 59 | 62 | 61 | 67 | 62 | 63 | 78 | 83 | 83 | 121 | 146 | 248 | 288 | 130 | 447 |  |  |
