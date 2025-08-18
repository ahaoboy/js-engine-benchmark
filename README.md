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


## Engine & Runtime (33/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47831<br>36.4M<br>1314/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47485<br>98.4M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47406<br>56.8M<br>834/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40909<br>106.5M<br>384/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40792<br>65.3M<br>624/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39795<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38977<br>66.3M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38877<br>40.7M<br>956/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19979<br>19.4M<br>1029/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19090<br>39.6M<br>481/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17103<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16944<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9302<br>199.7M<br>46/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3093<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 862<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 827<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 767<br>831.3K<br>944/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 724<br>1.3M<br>537/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 722<br>8.4M<br>85/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 529<br>46.2M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 477<br>2.1M<br>224/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 386<br>446.6K<br>884/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 373<br>685K<br>557/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 269<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 266<br>2.7K<br>100875/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/18/2025, 1:57:31 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | njs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs | mujs-one | goja | ringo | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.20 | 14.1.0 | 2.4.4 |  | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  | 1.3.5 |  |  | 4.0.0 | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 36.4M | 98.4M | 56.8M | 106.5M | 65.3M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.3M | 8.4M | 2M | 46.2M | 2.1M | 446.6K | 414.5K | 685K | 13.2M | 2.7K | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 36.4M | 98.4M | 1M | 106.5M | 65.3M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 1.3M | 8.4M | 2M | 46.2M | 2.1M | 446.6K | 414.5K | 685K | 13.2M | 2.7K | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 0 | 0 | 55.8M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40961 | 40696 | 36410 | 33265 | 31726 | 31585 | 32051 | 32446 | 22477 | 13482 | 13923 | 12391 | 35676 | 11385 | 1117 | 686 | 714 | 684 | 622 | 599 | 562 | 584 | 475 | 289 | 258 | 227 | 245 | 202 | 81 | 89 | 98 | 60 | 58 | 272 | 24 |  | 126 |  |
| DeltaBlue | 55704 | 54104 | 105809 | 76816 | 77894 | 76128 | 72624 | 76981 | 25403 | 13025 | 12986 | 12979 | 26996 | 586 | 1064 | 668 | 673 | 669 | 618 | 588 | 535 | 581 | 455 | 330 | 353 | 323 | 356 | 250 | 148 | 163 | 111 | 54 | 54 | 283 | 29 |  | 178 |  |
| Crypto | 51621 | 48221 | 41240 | 41372 | 41643 | 41277 | 41744 | 41413 | 31936 | 20452 | 17877 | 17628 | 14181 | 8650 | 1364 | 587 | 602 | 716 | 554 | 568 | 881 | 379 | 869 | 779 | 187 | 183 | 188 | 121 | 126 | 323 | 98 | 80 | 61 | 303 | 29 |  | 134 |  |
| RayTrace | 119730 | 117214 | 112404 | 69263 | 71409 | 66007 | 67857 | 60249 | 35149 | 27676 | 26835 | 28194 | 2711 | 1365 | 1573 | 1130 | 1052 | 917 | 949 | 898 | 671 | 719 | 549 | 570 | 531 | 483 | 529 | 272 | 437 | 500 | 248 | 164 | 135 | 350 | 85 |  | 422 |  |
| EarleyBoyer | 68537 | 67603 | 86675 | 73243 | 68912 | 70162 | 73850 | 67905 | 7052 | 38272 | 35933 | 37555 | 29065 | 1959 | 3367 | 1841 | 1753 | 1458 | 1413 | 1356 | 1608 | 1225 | 746 | 571 | 547 | 506 | 526 | 497 | 566 | 324 | 281 | 188 | 135 |  | 77 |  | 505 |  |
| RegExp | 19677 | 21184 | 10393 | 10173 | 10323 | 9920 | 10132 | 8857 | 7736 | 8603 | 8839 | 8745 | 763 | 743 | 551 | 254 | 224 | 228 | 235 | 226 | 109 | 182 | 64 | 130 | 238 | 197 | 214 | 207 | 454 | 95 | 247 | 49 | 93 |  |  |  |  |  |
| Splay | 35986 | 36466 | 41177 | 37160 | 37828 | 35685 | 27960 | 36263 | 19791 | 24374 | 12092 | 11727 | 2168 | 5747 | 3537 | 2312 | 1889 | 1767 | 1796 | 1454 | 1938 | 1654 | 842 | 904 | 911 | 1311 | 819 | 811 | 848 | 374 | 516 | 214 | 339 |  | 57 |  | 711 |  |
| NavierStokes | 40028 | 39771 | 38507 | 38694 | 38765 | 38655 | 38617 | 38397 | 36693 | 22112 | 21980 | 22067 | 31515 | 12699 | 1839 | 927 | 1003 | 1237 | 989 | 942 | 1219 | 915 | 1469 | 945 | 460 | 480 | 470 | 200 | 172 | 806 | 166 | 177 | 119 |  | 50 |  | 268 |  |
| Score | 47831 | 47485 | 47406 | 40909 | 40792 | 39795 | 38977 | 38877 | 19979 | 19090 | 17103 | 16944 | 9302 | 3093 | 1535 | 862 | 831 | 827 | 767 | 724 | 722 | 648 | 529 | 477 | 386 | 377 | 373 | 269 | 266 | 262 | 189 | 105 | 104 |  |  |  |  |  |
| Score/MB | 1314 | 482 | 834 | 384 | 624 | 323 | 587 | 956 | 1029 | 481 | 335 | 481 | 46 | 2 | 42 | 70 | 161 | 193 | 944 | 537 | 85 | 328 | 11 | 224 | 884 | 931 | 557 | 20 | 100875 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 39 | 33 | 47 | 49 | 48 | 50 | 52 | 63 | 59 | 87 | 69 | 81 | 85 | 82 | 114 | 104 | 132 | 142 | 237 | 237 | 31 | 431 |  | 90 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bare | bun | dune | node | deno | spidermonkey | mozjs | spiderfire | graaljs | primjs | hermes | txiki.js | jjs | quickjs-ng | rquickjs | llrt | quickjs | njs | duktape | ladybird | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.81 |  |  | 1.2.20 | 0.10.1 | 24.6.0 | 2.4.4 | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 24.12.0 |  | 0.8.0 |  | 0.6.2.beta | 2025.04.26 | 0.9.2 | 2.99.99 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 45.6M | 56.8M | 56.8M | 111.5M | 85.6M | 131.2M | 32.8M | 46.3M | 194M | 1.8M | 15.7M | 3.6M | 0 | 4.1M | 1.2M | 10.5M | 975.9K | 2.4M | 562.1K | 41.5M | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 41.1M | 0.2K | 45.6M | 56.8M | 56.8M | 111.5M | 85.6M | 65.6M | 32.8M | 46.3M | 147.4K | 1.8M | 7.9M | 3.6M | 0 | 2.1M | 1.2M | 10.5M | 975.9K | 1.8M | 562.1K | 41.5M | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41229 | 32972 | 39718 | 40371 | 37155 | 40626 | 32270 | 13725 | 14318 | 12200 | 29364 | 1105 | 1224 | 1177 | 3901 | 1091 | 1031 | 763 | 962 | 712 | 495 | 773 | 304 | 108 | 301 | 204 | 170 | 82 | 36 | 202 | 31 |  | 201 |
| DeltaBlue | 125452 | 50250 | 103091 | 48927 | 97584 | 94661 | 59103 | 16120 | 16424 | 13653 | 6070 | 1221 | 1105 | 1103 | 570 | 1044 | 1057 | 965 | 826 | 716 | 590 | 716 | 447 | 210 | 350 | 205 | 151 | 80 | 39 | 222 | 29 |  | 228 |
| Crypto | 57780 | 69033 | 54873 | 52247 | 44278 | 47371 | 32962 | 24012 | 21205 | 20826 | 20888 | 1690 | 1207 | 1001 | 4446 | 1087 | 931 | 832 | 1030 | 1054 | 1292 | 1349 | 264 | 516 | 181 | 133 | 131 | 99 | 41 | 226 | 38 |  | 133 |
| RayTrace | 146074 | 167756 | 93239 | 137046 | 65193 | 70232 | 42623 | 39959 | 48025 | 40329 | 4087 | 1791 | 1777 | 1389 | 1407 | 1426 | 1335 | 1599 | 1071 | 943 | 1028 | 933 | 813 | 695 | 418 | 533 | 362 | 234 | 40 | 258 | 139 |  | 642 |
| EarleyBoyer | 95203 | 97896 | 88225 | 61828 | 82509 | 75138 | 64758 | 44886 | 46070 | 43037 | 24534 | 1477 | 4258 | 2466 | 705 | 2392 | 2177 | 2495 | 1819 | 2474 | 1095 | 1240 | 994 | 415 | 743 | 706 | 408 | 217 | 71 |  | 103 |  | 652 |
| RegExp | 10888 | 21387 | 13053 | 21638 | 12625 | 12612 | 9029 | 11922 | 10435 | 11444 | 1034 | 306 | 585 | 252 | 314 | 252 | 255 | 260 | 238 | 182 | 241 | 80 | 323 | 310 | 277 | 563 | 209 | 133 | 13 |  |  |  |  |
| Splay | 50639 | 29606 | 32393 | 28506 | 31325 | 13585 | 25026 | 29663 | 16649 | 15966 | 2475 | 4551 | 3209 | 2616 | 1090 | 1864 | 2161 | 3058 | 1679 | 1633 | 1940 | 1360 | 1288 | 532 | 1292 | 649 | 542 | 545 | 145 |  | 92 |  | 1017 |
| NavierStokes | 35989 | 25030 | 37026 | 35545 | 35214 | 26058 | 36322 | 20182 | 19639 | 18901 | 21963 | 3829 | 1323 | 1811 | 1020 | 1681 | 1593 | 1318 | 1980 | 1694 | 1420 | 1583 | 705 | 1397 | 259 | 170 | 248 | 210 | 66 |  | 78 |  | 292 |
| Score | 54896 | 48330 | 48159 | 45744 | 43153 | 37939 | 33051 | 22598 | 20987 | 19487 | 8227 | 1543 | 1534 | 1232 | 1166 | 1162 | 1126 | 1125 | 1029 | 944 | 854 | 788 | 551 | 409 | 392 | 327 | 247 | 163 | 46 |  |  |  |  |
| Score/MB | 1337 | 294637663 | 1057 | 805 | 759 | 340 | 385 | 172 | 639 | 420 | 42 | 876 | 97 | 341 |  | 281 | 953 | 107 | 1079 | 393 | 1555 | 18 | 1315 | 253 | 30 | 124008 | 3 | 13 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 36 | 33 | 40 | 59 | 40 | 41 | 42 | 43 | 51 | 47 | 72 | 57 | 89 | 87 | 99 | 114 | 150 | 640 | 37 | 319 |  | 79 |
### windows
| Engine | v8 | JavaScriptCore | bare | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | llrt | rquickjs | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.81 |  |  | 1.2.20 | 24.6.0 | 2.4.4 | 0.10.1 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.6.2.beta |  | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.1M | 122.1M | 55.8M | 132.7M | 116.3M | 143.1M | 77.6M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 86.6M | 37M | 11.8M | 42.2M | 9.3M | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 26.1M | 112.9M | 85.3M | 110.8M | 47.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 13.1M | 1.5M | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 23.9M | 121.7M | 29.7M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.5M | 31.3M | 6.9M | 29.1M | 7.8M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 32760 | 35920 | 32323 | 37099 | 28937 | 33477 | 33053 | 24263 | 12645 | 14333 | 35994 | 9205 | 683 | 453 | 509 | 391 | 445 | 438 | 212 | 233 | 229 | 189 | 104 | 54 | 47 |  | 20 |  |  |
| DeltaBlue | 111601 | 44101 | 75725 | 46488 | 68095 | 62620 | 60326 | 28193 | 13138 | 12701 | 28323 | 423 | 608 | 403 | 456 | 370 | 403 | 403 | 258 | 317 | 299 | 227 | 116 | 49 | 41 |  | 22 |  |  |
| Crypto | 41398 | 47975 | 41992 | 46083 | 41990 | 38114 | 41953 | 33324 | 20355 | 18011 | 21299 | 2280 | 788 | 423 | 548 | 426 | 511 | 368 | 314 | 187 | 182 | 113 | 88 | 58 | 74 |  | 27 |  |  |
| RayTrace | 111516 | 101230 | 71779 | 82879 | 66007 | 65933 | 65711 | 46989 | 28165 | 27103 | 3889 | 1228 | 1016 | 717 | 515 | 591 | 592 | 582 | 436 | 420 | 425 | 225 | 263 | 125 | 132 |  | 72 |  |  |
| EarleyBoyer | 88841 | 60556 | 69694 | 53987 | 72302 | 73050 | 73603 | 42379 | 38785 | 36554 | 26406 | 1298 | 2242 | 1102 | 955 | 1005 | 911 | 957 | 489 | 519 | 515 | 446 | 294 | 123 | 134 |  | 65 |  |  |
| RegExp | 10001 | 18201 | 9900 | 16481 | 9770 | 9699 | 9718 | 9427 | 8974 | 8910 | 1016 | 1024 | 403 | 194 | 187 | 194 | 173 | 184 | 108 | 246 | 196 | 197 | 279 | 89 | 42 |  |  |  |  |
| Splay | 40957 | 32661 | 37192 | 31341 | 32996 | 33558 | 27837 | 24154 | 22157 | 13511 | 2652 | 5481 | 2347 | 1402 | 1000 | 1292 | 928 | 927 | 969 | 1133 | 1164 | 881 | 493 | 321 | 161 |  | 54 |  |  |
| NavierStokes | 38912 | 33653 | 38990 | 33768 | 38912 | 38912 | 38881 | 36915 | 22149 | 22090 | 24758 | 4341 | 1087 | 743 | 1037 | 719 | 748 | 666 | 1073 | 477 | 475 | 187 | 150 | 115 | 165 |  | 48 |  |  |
| Score | 47022 | 41800 | 40599 | 39726 | 38625 | 38547 | 37898 | 28035 | 18898 | 17460 | 10508 | 2075 | 967 | 577 | 576 | 534 | 527 | 503 | 377 | 376 | 362 | 251 | 190 | 97 | 85 |  |  |  |  |
| Score/MB | 886 | 342 | 727 | 299 | 331 | 269 | 488 | 1946 | 370 | 239 | 53 | 118 | 11 | 15 | 48 | 12 | 56 | 56 | 49 | 49 | 48 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 39 | 42 | 61 | 59 | 60 | 61 | 64 | 84 | 81 | 84 | 124 | 147 | 250 | 290 | 132 | 473 |  |  |
