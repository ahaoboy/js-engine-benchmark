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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48038<br>98.9M<br>485/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47550<br>36.7M<br>1294/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47431<br>57.5M<br>825/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41924<br>108.9M<br>385/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39283<br>123.3M<br>318/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38716<br>66.3M<br>583/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38033<br>40.7M<br>935/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19432<br>40M<br>485/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19222<br>19.4M<br>990/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16950<br>51M<br>332/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16697<br>35.2M<br>474/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9705<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2758<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1482<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 847<br>12.3M<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 805<br>4.3M<br>188/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 794<br>5.2M<br>153/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 768<br>831.3K<br>946/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 746<br>1.4M<br>536/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 744<br>1.4M<br>528/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 738<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 637<br>2M<br>322/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 573<br>46.5M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 495<br>2.1M<br>232/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 484<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 396<br>446.6K<br>907/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 391<br>685K<br>584/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 327<br>414.5K<br>807/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 283<br>2.7K<br>107322/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 261<br>13.2M<br>19/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 183<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 103<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 101<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
9/21/2025, 1:53:37 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | dune | lo | spidermonkey | ChakraCore | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | xst | goja | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.22 |  | 14.2.0 | 2.5.1 | 24.8.0 | 0.10.1 |  | 144.0 | 1.13.0.0.beta |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 | 16.9.1 |  |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 98.9M | 36.7M | 57.5M | 108.9M | 123.3M | 66.3M | 40.7M | 40M | 19.4M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Exe size | 98.9M | 36.7M | 1M | 108.9M | 123.3M | 66.3M | 40.7M | 40M | 571K | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.4M | 1.4M | 8.4M | 2M | 46.5M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 2.1M | 13.2M | 69M | 27M | 12.6M | 454.2K | 10.4M | 0 | 1.1G | 42M |
| Dll size | 0 | 0 | 56.4M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41896 | 41702 | 37971 | 34875 | 32513 | 32446 | 32506 | 13337 | 23306 | 13136 | 12299 | 35881 | 11978 | 1118 | 682 | 677 | 710 | 626 | 575 | 579 | 567 | 583 | 540 | 289 | 347 | 263 | 245 | 225 | 95 | 90 | 196 | 103 | 59 | 58 | 273 | 26 |  | 123 |  |
| DeltaBlue | 56974 | 52280 | 109392 | 80254 | 72743 | 73596 | 80320 | 13329 | 24874 | 12979 | 12933 | 37615 | 464 | 1048 | 661 | 662 | 672 | 614 | 565 | 572 | 544 | 575 | 497 | 324 | 386 | 346 | 356 | 316 | 176 | 162 | 247 | 110 | 53 | 52 | 280 | 30 |  | 170 |  |
| Crypto | 48973 | 51935 | 38699 | 41911 | 41659 | 41846 | 41174 | 20134 | 31946 | 17561 | 17375 | 27668 | 7452 | 1360 | 581 | 680 | 582 | 560 | 566 | 538 | 882 | 376 | 832 | 798 | 410 | 184 | 189 | 183 | 155 | 323 | 122 | 97 | 79 | 60 | 298 | 36 |  | 133 |  |
| RayTrace | 114476 | 119730 | 112182 | 71187 | 66081 | 68375 | 56109 | 28313 | 29348 | 26513 | 27620 | 2420 | 1042 | 1557 | 1130 | 901 | 1050 | 962 | 891 | 927 | 680 | 739 | 742 | 573 | 455 | 498 | 509 | 264 | 426 | 492 | 249 | 244 | 160 | 132 | 348 | 91 |  | 432 |  |
| EarleyBoyer | 68974 | 68606 | 85259 | 75997 | 65439 | 72987 | 68171 | 41835 | 7049 | 35687 | 36167 | 23024 | 1489 | 3318 | 1794 | 1308 | 1509 | 1422 | 1292 | 1334 | 1676 | 1172 | 907 | 545 | 846 | 500 | 495 | 335 | 546 | 323 | 469 | 279 | 180 | 128 |  | 81 |  | 555 |  |
| RegExp | 20729 | 19690 | 10536 | 10112 | 10062 | 10011 | 8938 | 9065 | 7168 | 8775 | 8775 | 742 | 773 | 541 | 252 | 220 | 228 | 232 | 223 | 215 | 115 | 182 | 63 | 134 | 179 | 240 | 210 | 183 | 445 | 96 | 203 | 245 | 48 | 90 |  |  |  |  |  |
| Splay | 37030 | 35555 | 40794 | 38513 | 34088 | 26159 | 30991 | 24138 | 18670 | 12444 | 11376 | 1889 | 5224 | 2860 | 2074 | 1729 | 1651 | 1801 | 2169 | 2049 | 2031 | 1457 | 797 | 1257 | 1197 | 1342 | 1299 | 1277 | 945 | 378 | 825 | 432 | 207 | 327 |  | 125 |  | 757 |  |
| NavierStokes | 40028 | 40136 | 38765 | 38617 | 38803 | 38655 | 38436 | 21919 | 36358 | 22024 | 21919 | 27009 | 12911 | 1823 | 956 | 1290 | 953 | 980 | 938 | 965 | 1212 | 932 | 1540 | 919 | 665 | 451 | 482 | 485 | 164 | 869 | 190 | 160 | 175 | 118 |  | 56 |  | 319 |  |
| Score | 48038 | 47550 | 47431 | 41924 | 39283 | 38716 | 38033 | 19432 | 19222 | 16950 | 16697 | 9705 | 2758 | 1482 | 847 | 805 | 794 | 768 | 746 | 744 | 738 | 637 | 573 | 495 | 484 | 396 | 391 | 327 | 283 | 264 | 261 | 183 | 103 | 101 |  |  |  |  |  |
| Score/MB | 485 | 1294 | 825 | 385 | 318 | 583 | 935 | 485 | 990 | 332 | 474 | 48 | 2 | 41 | 69 | 188 | 153 | 946 | 536 | 528 | 87 | 322 | 12 | 232 |  | 907 | 584 | 807 | 107322 | 126 | 19 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 25 | 41 | 34 | 47 | 50 | 50 | 50 | 52 | 53 | 61 | 59 | 82 | 70 | 64 | 84 | 82 | 94 | 101 | 131 | 119 | 145 | 244 | 242 | 31 | 368 |  | 83 | 7 |
### macos-arm64
| Engine | v8 | JavaScriptCore | bun | dune | deno | node | spidermonkey | spiderfire | mozjs | graaljs | jjs | primjs | hermes | txiki.js | quickjs-ng | rquickjs | quickjs | llrt | ladybird | duktape | njs | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.178 |  | 1.2.22 | 0.10.1 | 2.5.1 | 24.8.0 | 144.0 |  |  | 24.1.2 |  |  | 0.12.0 | 24.12.0 | 0.8.0 |  | 2025.04.26 | 0.6.2.beta |  | 2.99.99 | 0.9.2 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.1M | 0.2K | 57.1M | 56.8M | 88M | 111.8M | 132.5M | 46.3M | 32.8M | 194M | 0 | 1.8M | 15.7M | 3.6M | 4.1M | 1.2M | 975.9K | 10.5M | 41.5M | 562.1K | 2.4M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Exe size | 41.1M | 0.2K | 57.1M | 56.8M | 88M | 111.8M | 66.2M | 46.3M | 32.8M | 147.4K | 0 | 1.8M | 7.9M | 3.6M | 2.1M | 1.2M | 975.9K | 10.5M | 41.5M | 562.1K | 1.8M | 0 | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 43241 | 48865 | 36795 | 37300 | 41204 | 41039 | 15067 | 14350 | 10771 | 25820 | 12345 | 1129 | 1020 | 1144 | 1184 | 995 | 938 | 793 | 776 | 496 | 581 | 522 | 314 | 104 | 257 | 114 | 138 | 97 | 39 | 202 | 37 |  | 218 |
| DeltaBlue | 133274 | 71103 | 49384 | 83976 | 78945 | 77781 | 15729 | 15683 | 12291 | 10605 | 526 | 1266 | 953 | 1073 | 1008 | 983 | 919 | 869 | 678 | 524 | 605 | 566 | 492 | 191 | 280 | 112 | 145 | 89 | 38 | 223 | 53 |  | 229 |
| Crypto | 58136 | 69899 | 57071 | 56017 | 47198 | 47050 | 23453 | 21047 | 16798 | 24753 | 10300 | 1672 | 1175 | 955 | 1067 | 952 | 1256 | 743 | 1354 | 1317 | 1021 | 526 | 259 | 375 | 155 | 124 | 121 | 99 | 40 | 252 | 64 |  | 139 |
| RayTrace | 146000 | 163316 | 136972 | 83693 | 67863 | 77921 | 46767 | 36407 | 33300 | 1633 | 755 | 1516 | 1682 | 1912 | 1243 | 1395 | 1136 | 1156 | 1160 | 1036 | 689 | 630 | 821 | 636 | 364 | 460 | 273 | 176 | 37 | 307 | 125 |  | 653 |
| EarleyBoyer | 109040 | 85674 | 73503 | 94644 | 68960 | 62127 | 51371 | 37460 | 37182 | 22192 | 1380 | 1221 | 3608 | 2753 | 2257 | 2224 | 1763 | 1589 | 1428 | 1089 | 1832 | 1203 | 920 | 364 | 627 | 566 | 340 | 180 | 74 |  | 105 |  | 649 |
| RegExp | 13910 | 19021 | 25027 | 12056 | 9741 | 9418 | 11614 | 9364 | 8611 | 1205 | 732 | 309 | 516 | 273 | 234 | 255 | 244 | 235 | 93 | 234 | 166 | 201 | 296 | 296 | 253 | 478 | 193 | 109 | 13 |  |  |  |  |
| Splay | 51991 | 33085 | 27274 | 30575 | 24553 | 23755 | 27642 | 15622 | 15449 | 2532 | 1105 | 4531 | 2787 | 2654 | 2127 | 2836 | 1805 | 3390 | 1993 | 2206 | 1777 | 1596 | 960 | 499 | 927 | 685 | 561 | 426 | 134 |  | 147 |  | 978 |
| NavierStokes | 37618 | 31546 | 31133 | 37100 | 32319 | 32171 | 20755 | 20034 | 18347 | 14281 | 2295 | 3842 | 1179 | 1732 | 1936 | 1550 | 1993 | 1541 | 1722 | 1454 | 1601 | 697 | 643 | 1045 | 291 | 159 | 170 | 177 | 70 |  | 91 |  | 268 |
| Score | 58913 | 53534 | 46587 | 45695 | 39181 | 38890 | 23370 | 19260 | 16921 | 7563 | 1836 | 1486 | 1361 | 1291 | 1167 | 1158 | 1084 | 1018 | 886 | 857 | 825 | 635 | 522 | 358 | 339 | 261 | 212 | 148 | 46 |  |  |  |  |
| Score/MB | 1431 | 326363183 | 815 | 804 | 445 | 347 | 176 | 415 | 515 | 38 |  | 844 | 86 | 357 | 283 | 967 | 1137 | 96 | 21 | 1561 | 344 |  | 1245 | 226 | 26 | 98979 | 2 | 11 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 40 | 37 | 35 | 40 | 42 | 41 | 41 | 44 | 63 | 47 | 54 | 57 | 59 | 97 | 89 | 109 | 132 | 180 | 606 | 35 | 258 |  | 79 |
### windows
| Engine | v8 | JavaScriptCore | dune | deno | bun | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | rquickjs | rquickjs-pgo | llrt | quickjs-ng | quickjs-emscripten | txiki.js | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.2.178 |  | 0.10.1 | 2.5.1 | 1.2.22 | 24.8.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.04.26 |  |  | 0.6.2.beta | 0.8.0 |  | 24.12.0 |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.1M | 82.1M | 149.5M | 139.4M | 120.9M | 15.7M | 53.9M | 77.2M | 197M | 116M | 12.8M | 10.5M | 10.2M | 45.7M | 10.1M | 0 | 43.2M | 8.5M | 8.5M | 8.6M | 20.5M | 99.3M | 47.6M | 43.9M | 6.5M | 18.4M | 0 | 0 |
| Exe size | 29.3M | 339.5K | 47.4M | 113.5M | 113.3M | 85.5M | 342.9K | 33.9M | 42.6M | 349.1K | 3M | 4.9M | 1.4M | 1M | 13.1M | 1.7M | 0 | 5.7M | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.3M | 0 | 0 |
| Dll size | 32.5M | 124.8M | 34.8M | 36.1M | 26.1M | 35.5M | 15.3M | 20M | 34.6M | 196.7M | 112.9M | 7.9M | 9.1M | 9.2M | 32.6M | 8.5M | 0 | 37.5M | 7.8M | 7.8M | 7.8M | 7.2M | 30.5M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 37544 | 34885 | 32556 | 25184 | 35524 | 31496 | 24433 | 13249 | 13242 | 32502 | 686 | 497 | 377 | 440 | 367 | 421 | 343 | 389 | 246 | 257 | 210 | 180 | 104 | 53 | 47 |  | 23 |  |  |
| DeltaBlue | 107984 | 45040 | 70938 | 52075 | 38064 | 73371 | 26632 | 13191 | 12781 | 17898 | 617 | 442 | 395 | 456 | 353 | 390 | 382 | 141 | 341 | 347 | 252 | 223 | 115 | 47 | 41 |  | 26 |  |  |
| Crypto | 37369 | 48634 | 41489 | 40162 | 36038 | 40449 | 32782 | 20171 | 17597 | 15008 | 774 | 524 | 506 | 322 | 348 | 359 | 401 | 117 | 184 | 170 | 309 | 110 | 89 | 58 | 72 |  | 37 |  |  |
| RayTrace | 108482 | 101748 | 63121 | 69189 | 85099 | 40921 | 48495 | 27944 | 25944 | 1850 | 985 | 554 | 611 | 604 | 625 | 582 | 445 | 726 | 470 | 462 | 451 | 220 | 258 | 119 | 129 |  | 81 |  |  |
| EarleyBoyer | 81197 | 58830 | 71575 | 70050 | 47593 | 60877 | 42080 | 41262 | 36371 | 14887 | 2187 | 978 | 1009 | 939 | 976 | 947 | 790 | 1097 | 585 | 563 | 502 | 435 | 284 | 118 | 128 |  | 72 |  |  |
| RegExp | 9537 | 18274 | 9408 | 9364 | 15394 | 9355 | 9770 | 8928 | 8637 | 743 | 398 | 186 | 171 | 155 | 197 | 181 | 164 | 190 | 240 | 194 | 109 | 193 | 254 | 85 | 42 |  |  |  |  |
| Splay | 38741 | 32749 | 26102 | 29249 | 24097 | 25947 | 19582 | 23184 | 12623 | 2181 | 1882 | 1005 | 1214 | 1201 | 1262 | 935 | 1184 | 1350 | 1143 | 1127 | 974 | 766 | 391 | 298 | 157 |  | 124 |  |  |
| NavierStokes | 38063 | 33405 | 38545 | 37545 | 32731 | 38025 | 36434 | 21793 | 21771 | 22740 | 1018 | 1010 | 740 | 746 | 711 | 663 | 718 | 718 | 474 | 478 | 1068 | 185 | 148 | 115 | 165 |  | 57 |  |  |
| Score | 45622 | 41701 | 37720 | 35678 | 35273 | 34797 | 27243 | 19183 | 16905 | 7386 | 925 | 574 | 539 | 517 | 514 | 496 | 475 | 419 | 392 | 378 | 378 | 242 | 181 | 93 | 84 |  |  |  |  |
| Score/MB | 737 | 333 | 459 | 238 | 253 | 287 | 1738 | 355 | 218 | 37 | 7 | 44 | 51 | 50 | 11 | 48 |  | 9 | 45 | 44 | 44 | 11 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 43 | 58 | 61 | 68 | 62 | 64 | 67 | 72 | 80 | 86 | 84 | 125 | 150 | 257 | 299 | 131 | 385 |  |  |
