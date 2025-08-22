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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47963<br>56.9M<br>843/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47514<br>36.4M<br>1304/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46273<br>98.4M<br>470/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare) | 40832<br>65.3M<br>625/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40450<br>106.3M<br>380/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 39377<br>66.3M<br>593/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39359<br>123.1M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38975<br>40.7M<br>958/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19861<br>19.4M<br>1023/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19403<br>40.1M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17040<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17014<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10422<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2274<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1537<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 861<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 829<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 767<br>831.3K<br>944/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 752<br>1.4M<br>540/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 749<br>1.4M<br>532/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 735<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 644<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 568<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 477<br>2.1M<br>224/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 400<br>446.6K<br>917/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 373<br>685K<br>557/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 370<br>414.5K<br>914/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 284<br>2.7K<br>107701/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/22/2025, 1:51:07 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | quickjs-emscripten | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.5 | 0.10.1 | 24.6.0 |  | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.9M | 36.4M | 98.4M | 65.3M | 106.3M | 66.3M | 123.1M | 40.7M | 19.4M | 40.1M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 65.3M | 106.3M | 66.3M | 123.1M | 40.7M | 571K | 40.1M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.1M | 0 | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 55.9M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37770 | 40244 | 40265 | 31094 | 32488 | 32732 | 31825 | 33459 | 23303 | 13055 | 13807 | 13168 | 35602 | 11586 | 1151 | 673 | 693 | 713 | 625 | 576 | 573 | 560 | 578 | 496 | 332 | 256 | 258 | 246 | 225 | 130 | 202 | 89 | 101 | 59 | 59 | 262 | 26 |  | 119 |  |
| DeltaBlue | 109339 | 55116 | 56438 | 78218 | 73702 | 75467 | 70244 | 79533 | 25637 | 13614 | 12933 | 12959 | 38653 | 348 | 1059 | 669 | 664 | 672 | 624 | 589 | 577 | 522 | 577 | 463 | 396 | 306 | 357 | 354 | 317 | 142 | 250 | 162 | 110 | 54 | 54 | 274 | 29 |  | 170 |  |
| Crypto | 41114 | 51380 | 49248 | 41611 | 41291 | 41421 | 40834 | 40980 | 30090 | 20149 | 17763 | 17664 | 28466 | 9320 | 1373 | 582 | 734 | 591 | 560 | 554 | 525 | 879 | 377 | 894 | 407 | 775 | 189 | 190 | 183 | 148 | 123 | 321 | 98 | 80 | 62 | 301 | 31 |  | 134 |  |
| RayTrace | 111368 | 119656 | 112626 | 70817 | 67635 | 67635 | 65637 | 67191 | 34927 | 28165 | 26687 | 27722 | 2715 | 1424 | 1558 | 1134 | 912 | 1039 | 962 | 912 | 939 | 680 | 708 | 565 | 455 | 556 | 531 | 523 | 470 | 435 | 271 | 501 | 246 | 163 | 139 | 348 | 93 |  | 416 |  |
| EarleyBoyer | 85623 | 67179 | 67449 | 70129 | 74393 | 74301 | 72061 | 69575 | 7082 | 41257 | 35462 | 36935 | 22828 | 1137 | 3385 | 1851 | 1444 | 1741 | 1397 | 1310 | 1318 | 1670 | 1200 | 764 | 846 | 521 | 543 | 512 | 477 | 579 | 493 | 323 | 280 | 187 | 133 |  | 79 |  | 391 |  |
| RegExp | 10494 | 19951 | 20386 | 10263 | 10092 | 10112 | 9930 | 8784 | 7629 | 8866 | 8901 | 8801 | 822 | 446 | 547 | 249 | 227 | 226 | 232 | 222 | 217 | 115 | 182 | 64 | 178 | 131 | 237 | 211 | 195 | 451 | 206 | 96 | 253 | 49 | 92 |  |  |  |  |  |
| Splay | 42555 | 35343 | 34992 | 38529 | 36793 | 28677 | 34617 | 30967 | 19667 | 24675 | 12042 | 11752 | 2193 | 2375 | 3545 | 2306 | 1761 | 1895 | 1805 | 2127 | 2147 | 2090 | 1628 | 1255 | 1247 | 1249 | 1151 | 827 | 1281 | 839 | 915 | 375 | 525 | 218 | 339 |  | 86 |  | 721 |  |
| NavierStokes | 38732 | 40216 | 34656 | 38881 | 38803 | 38765 | 38803 | 38397 | 36285 | 22067 | 22090 | 22002 | 31811 | 11097 | 1821 | 954 | 1272 | 1012 | 974 | 963 | 989 | 1218 | 933 | 1522 | 668 | 923 | 478 | 487 | 478 | 160 | 197 | 852 | 164 | 177 | 118 |  | 51 |  | 276 |  |
| Score | 47963 | 47514 | 46273 | 40832 | 40450 | 39377 | 39359 | 38975 | 19861 | 19403 | 17040 | 17014 | 10422 | 2274 | 1537 | 861 | 830 | 829 | 767 | 752 | 749 | 735 | 644 | 568 | 485 | 477 | 400 | 373 | 370 | 284 | 273 | 263 | 189 | 105 | 104 |  |  |  |  |  |
| Score/MB | 843 | 1304 | 470 | 625 | 380 | 593 | 319 | 958 | 1023 | 483 | 334 | 483 | 52 | 1 | 42 | 70 | 194 | 160 | 944 | 540 | 532 | 87 | 326 | 12 |  | 224 | 917 | 557 | 914 | 107701 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 44 | 33 | 47 | 48 | 50 | 50 | 53 | 53 | 61 | 59 | 86 | 64 | 71 | 80 | 81 | 86 | 100 | 115 | 131 | 143 | 238 | 238 | 31 | 403 |  | 89 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bun | bare | dune | deno | node | spidermonkey | mozjs | spiderfire | graaljs | primjs | hermes | txiki.js | jjs | quickjs-ng | llrt | quickjs | rquickjs | njs | ladybird | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.101 |  | 1.2.20 |  | 0.10.1 | 2.4.5 | 24.6.0 | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 24.12.0 |  | 0.8.0 | 0.6.2.beta | 2025.04.26 |  | 0.9.2 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 56.8M | 45.6M | 56.8M | 85.5M | 111.5M | 132.3M | 32.8M | 46.3M | 194M | 1.8M | 15.7M | 3.6M | 0 | 4.1M | 10.5M | 975.9K | 1.2M | 2.4M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 41.1M | 0.2K | 56.8M | 45.6M | 56.8M | 85.5M | 111.5M | 66.2M | 32.8M | 46.3M | 147.4K | 1.8M | 7.9M | 3.6M | 0 | 2.1M | 10.5M | 975.9K | 1.2M | 1.8M | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 46796 | 51156 | 50468 | 45480 | 45836 | 43005 | 43125 | 15593 | 14442 | 15579 | 35793 | 1177 | 1266 | 1259 | 579 | 1326 | 983 | 1129 | 984 | 765 | 857 | 540 | 676 | 369 | 330 | 221 | 114 | 151 | 97 | 39 | 217 | 41 |  | 215 |
| DeltaBlue | 135820 | 77854 | 74158 | 111336 | 102251 | 103488 | 103818 | 18222 | 17706 | 17336 | 32973 | 1268 | 1187 | 1318 | 1816 | 1237 | 1041 | 1128 | 1024 | 841 | 803 | 638 | 746 | 581 | 392 | 232 | 201 | 158 | 99 | 42 | 230 | 52 |  | 240 |
| Crypto | 64692 | 78189 | 69857 | 58532 | 59500 | 57873 | 56246 | 25589 | 21467 | 22176 | 40959 | 1752 | 1360 | 1160 | 14830 | 1204 | 916 | 1243 | 1001 | 1176 | 1605 | 1354 | 601 | 299 | 197 | 148 | 429 | 141 | 117 | 45 | 262 | 48 |  | 147 |
| RayTrace | 153326 | 195579 | 155324 | 98419 | 94793 | 85025 | 87084 | 49061 | 49209 | 41546 | 1667 | 2334 | 2354 | 2115 | 1962 | 1482 | 1914 | 1035 | 1487 | 1276 | 1076 | 1068 | 797 | 992 | 406 | 727 | 681 | 358 | 238 | 44 | 326 | 153 |  | 669 |
| EarleyBoyer | 116362 | 105744 | 85078 | 98967 | 104277 | 101401 | 96795 | 53368 | 48248 | 46609 | 53132 | 3920 | 4847 | 3181 | 1408 | 2642 | 2842 | 2136 | 2311 | 2918 | 1433 | 1211 | 1482 | 957 | 830 | 797 | 413 | 400 | 245 | 90 |  | 121 |  | 711 |
| RegExp | 14775 | 31003 | 26327 | 15487 | 15334 | 14470 | 13221 | 12104 | 12897 | 11831 | 1801 | 323 | 674 | 301 | 736 | 256 | 298 | 283 | 272 | 218 | 106 | 253 | 255 | 342 | 312 | 627 | 325 | 218 | 142 | 15 |  |  |  |  |
| Splay | 72225 | 42294 | 42644 | 60931 | 34324 | 40607 | 37592 | 32140 | 19598 | 19215 | 3251 | 5354 | 4046 | 3292 | 1718 | 2472 | 3859 | 2424 | 3012 | 3712 | 2123 | 2367 | 2074 | 1744 | 1177 | 1027 | 579 | 506 | 511 | 150 |  | 135 |  | 1269 |
| NavierStokes | 40662 | 34394 | 38359 | 40621 | 38507 | 36915 | 38655 | 21728 | 21348 | 21284 | 13922 | 4098 | 1489 | 2056 | 463 | 2153 | 1620 | 2266 | 1716 | 1838 | 1907 | 1484 | 990 | 755 | 321 | 206 | 1064 | 198 | 224 | 78 |  | 82 |  | 318 |
| Score | 64992 | 64252 | 59098 | 56950 | 52287 | 51327 | 50270 | 25167 | 22693 | 22062 | 11691 | 1900 | 1766 | 1505 | 1497 | 1343 | 1325 | 1236 | 1219 | 1196 | 961 | 925 | 811 | 638 | 422 | 394 | 392 | 239 | 179 | 52 |  |  |  |  |
| Score/MB | 1580 | 391704099 | 1040 | 1250 | 920 | 600 | 450 | 190 | 691 | 476 | 60 | 1079 | 112 | 417 |  | 325 | 126 | 1296 | 1018 | 498 | 23 | 1684 |  | 1522 | 33 | 149417 | 248 | 3 | 14 | 48 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 34 | 31 | 37 | 44 | 39 | 39 | 38 | 40 | 44 | 61 | 44 | 48 | 55 | 78 | 87 | 87 | 117 | 141 | 521 | 33 | 266 |  | 74 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs-pgo | rquickjs | quickjs-emscripten | quickjs-ng | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.101 |  |  | 1.2.20 | 2.4.5 | 24.6.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  |  |  | 0.8.0 | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.1M | 122.1M | 55.8M | 132.7M | 142.9M | 116.4M | 77.6M | 14.4M | 51.5M | 72.8M | 196.1M | 17.5M | 86.6M | 11.8M | 37M | 42.2M | 9M | 8M | 0 | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 26.1M | 112.9M | 110.6M | 85.3M | 47.4M | 342.9K | 34M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1M | 1.2M | 0 | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 23.9M | 121.8M | 29.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 83.5M | 6.9M | 31.3M | 29.1M | 7.9M | 6.7M | 0 | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 37798 | 35863 | 33046 | 37194 | 33219 | 32969 | 33367 | 24327 | 13997 | 13044 | 35785 | 589 | 700 | 510 | 448 | 391 | 444 | 441 | 388 | 406 | 215 | 233 | 226 | 188 | 99 | 52 | 49 |  | 21 |  |  |
| DeltaBlue | 109908 | 46448 | 77008 | 48484 | 75738 | 65001 | 74158 | 28550 | 13528 | 13191 | 30879 | 244 | 618 | 461 | 390 | 370 | 469 | 462 | 394 | 397 | 263 | 337 | 317 | 227 | 117 | 50 | 42 |  | 25 |  |  |
| Crypto | 41605 | 48492 | 41140 | 46304 | 37475 | 41924 | 40222 | 33198 | 20902 | 18027 | 24562 | 2272 | 774 | 542 | 377 | 428 | 328 | 325 | 424 | 380 | 316 | 179 | 187 | 114 | 91 | 59 | 73 |  | 29 |  |  |
| RayTrace | 110036 | 95237 | 71779 | 87615 | 66821 | 66673 | 67346 | 48839 | 25134 | 27251 | 4845 | 1674 | 993 | 519 | 747 | 615 | 592 | 585 | 464 | 557 | 439 | 454 | 451 | 224 | 261 | 130 | 134 |  | 82 |  |  |
| EarleyBoyer | 84702 | 62892 | 70146 | 53151 | 74691 | 73434 | 73778 | 43116 | 40070 | 37054 | 27011 | 1172 | 2169 | 992 | 1139 | 1011 | 927 | 935 | 865 | 964 | 508 | 560 | 554 | 445 | 297 | 124 | 136 |  | 68 |  |  |
| RegExp | 9880 | 18110 | 10021 | 16803 | 9699 | 9819 | 9699 | 10162 | 9128 | 8745 | 1033 | 603 | 402 | 183 | 196 | 194 | 155 | 153 | 181 | 187 | 109 | 198 | 249 | 197 | 273 | 89 | 42 |  |  |  |  |
| Splay | 42522 | 32336 | 38985 | 31831 | 33224 | 32083 | 28049 | 22019 | 23421 | 14367 | 2476 | 3682 | 2290 | 1004 | 1408 | 1246 | 1222 | 1206 | 1269 | 968 | 986 | 1157 | 592 | 880 | 510 | 322 | 162 |  | 82 |  |  |
| NavierStokes | 38881 | 33835 | 39029 | 38101 | 38990 | 38990 | 38990 | 36989 | 22341 | 22238 | 25351 | 3212 | 1094 | 1035 | 744 | 698 | 759 | 770 | 750 | 679 | 1077 | 478 | 478 | 189 | 148 | 115 | 167 |  | 48 |  |  |
| Score | 47591 | 41948 | 41034 | 40961 | 39489 | 39046 | 38902 | 28217 | 19273 | 17489 | 11100 | 1209 | 961 | 578 | 572 | 533 | 521 | 518 | 509 | 502 | 383 | 375 | 352 | 251 | 190 | 97 | 86 |  |  |  |  |
| Score/MB | 896 | 343 | 735 | 308 | 276 | 335 | 501 | 1958 | 374 | 240 | 56 | 68 | 11 | 49 | 15 | 12 | 58 | 64 |  | 56 | 50 | 49 | 46 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 42 | 59 | 59 | 61 | 67 | 67 | 62 | 63 | 84 | 83 | 79 | 122 | 148 | 249 | 287 | 128 | 440 |  |  |
