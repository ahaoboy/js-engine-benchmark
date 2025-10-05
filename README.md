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


## Engine & Runtime (32/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48176<br>99.1M<br>486/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47691<br>31.3M<br>1524/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47649<br>57.9M<br>823/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42072<br>108.3M<br>388/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40675<br>52.2M<br>778/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39903<br>106.5M<br>374/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38496<br>40.7M<br>946/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20264<br>19.3M<br>1049/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19252<br>39.8M<br>483/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16997<br>44.7M<br>380/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16847<br>32M<br>525/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12177<br>199.4M<br>61/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2740<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1544<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 941<br>982.4K<br>980/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 927<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 830<br>4.1M<br>204/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 773<br>831.3K<br>952/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 762<br>1.4M<br>547/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 753<br>1.4M<br>535/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 739<br>1.9M<br>396/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>370.4K<br>1382/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 496<br>1.3M<br>367/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 492<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 401<br>422.8K<br>971/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 396<br>685K<br>591/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>386.8K<br>997/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 310<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>1.9M<br>135/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 103<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Truly independent web browser |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 0<br>11.3M | ❌unix<br>❌macArm<br>❌windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/5/2025, 3:40:22 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | quickjs | llrt | txiki.js | primjs | rquickjs | rquickjs-pgo | njs | duktape | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | kiesel | boa | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 |  | 14.3.0 | 2.5.3 | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  | 0.9.2 | 2.99.99 | 0.10.1 |  |  |  | 1.3.8 | 4.0.0 |  | 16.9.1 | 0.1.0.dev | 0.20.0 | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 99.1M | 31.3M | 57.9M | 108.3M | 52.2M | 106.5M | 40.7M | 19.3M | 39.8M | 44.7M | 32M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 370.4K | 1.3M | 0 | 422.8K | 685K | 386.8K | 0 | 13.2M | 1.9M | 12.6M | 27M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Exe size | 99.1M | 31.3M | 833.3K | 108.3M | 52.2M | 106.5M | 40.7M | 472.2K | 39.8M | 44.7M | 32M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 1.9M | 370.4K | 1.3M | 0 | 422.8K | 685K | 386.8K | 0 | 13.2M | 1.9M | 12.6M | 27M | 454.2K | 8.5M | 0 | 11.3M | 0 | 42M |
| Dll size | 0 | 0 | 57.1M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41829 | 41794 | 37515 | 35327 | 35062 | 31906 | 32128 | 23349 | 13620 | 14093 | 12342 | 35373 | 8077 | 1121 | 787 | 715 | 712 | 635 | 573 | 575 | 562 | 285 | 391 | 333 | 267 | 243 | 228 | 164 | 201 | 90 | 59 | 57 | 275 | 28 |  |  | 157 |  |
| DeltaBlue | 56372 | 55209 | 110113 | 82079 | 80009 | 74528 | 73960 | 25993 | 13581 | 12880 | 12622 | 40140 | 451 | 1076 | 727 | 700 | 686 | 627 | 579 | 579 | 541 | 321 | 382 | 392 | 355 | 357 | 322 | 201 | 252 | 163 | 56 | 51 | 281 | 34 |  |  | 163 |  |
| Crypto | 49335 | 51853 | 38114 | 41175 | 41626 | 41698 | 41376 | 31607 | 20287 | 17542 | 17424 | 26080 | 8000 | 1372 | 777 | 671 | 599 | 561 | 565 | 535 | 875 | 787 | 420 | 419 | 187 | 189 | 183 | 149 | 121 | 325 | 61 | 80 | 298 | 38 |  |  | 152 |  |
| RayTrace | 111738 | 120026 | 113588 | 69633 | 72149 | 66385 | 55961 | 36741 | 27251 | 26465 | 28239 | 3958 | 1363 | 1572 | 943 | 1200 | 990 | 951 | 910 | 925 | 683 | 575 | 573 | 452 | 534 | 524 | 486 | 481 | 271 | 497 | 136 | 162 | 342 | 102 |  |  | 476 |  |
| EarleyBoyer | 69080 | 68134 | 86163 | 75996 | 74989 | 70805 | 71338 | 7043 | 40862 | 36074 | 36189 | 30490 | 1074 | 3369 | 1557 | 1896 | 1759 | 1432 | 1390 | 1376 | 1679 | 587 | 958 | 862 | 558 | 521 | 509 | 581 | 500 | 324 | 133 | 186 |  | 88 |  |  | 560 |  |
| RegExp | 21595 | 20053 | 10595 | 10092 | 10032 | 10062 | 8866 | 7953 | 8775 | 8901 | 8866 | 1405 | 725 | 552 | 236 | 268 | 227 | 236 | 229 | 217 | 115 | 130 | 161 | 178 | 240 | 213 | 200 | 463 | 210 | 96 | 92 | 49 |  |  |  |  |  |  |
| Splay | 37458 | 33982 | 41943 | 39865 | 30551 | 35424 | 36060 | 19690 | 24423 | 11645 | 12052 | 2258 | 6198 | 3632 | 2481 | 2410 | 1956 | 1820 | 2206 | 2163 | 2080 | 1279 | 1403 | 1219 | 1133 | 1300 | 1246 | 836 | 829 | 364 | 319 | 213 |  | 136 |  |  | 918 |  |
| NavierStokes | 39948 | 40136 | 38803 | 38617 | 38694 | 38694 | 38436 | 36582 | 21073 | 22112 | 21898 | 34098 | 16588 | 1838 | 1611 | 1105 | 993 | 969 | 948 | 973 | 1214 | 965 | 473 | 742 | 467 | 486 | 486 | 160 | 202 | 852 | 119 | 174 |  | 59 |  |  | 300 |  |
| Score | 48176 | 47691 | 47649 | 42072 | 40675 | 39903 | 38496 | 20264 | 19252 | 16997 | 16847 | 12177 | 2740 | 1544 | 941 | 927 | 830 | 773 | 762 | 753 | 739 | 500 | 496 | 492 | 401 | 396 | 377 | 310 | 271 | 263 | 104 | 103 |  |  |  |  |  |  |
| Score/MB | 486 | 1524 | 823 | 388 | 778 | 374 | 946 | 1049 | 483 | 380 | 525 | 61 |  | 42 | 980 | 75 | 204 | 952 | 547 | 535 | 396 | 1382 | 367 |  | 971 | 591 | 997 |  | 20 | 135 | 8 | 3 |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 39 | 34 | 45 | 44 | 49 | 50 | 52 | 53 | 61 | 68 | 66 | 62 | 80 | 82 | 85 | 102 | 114 | 131 | 238 | 237 | 31 | 349 |  |  | 81 | 7 |
### macos-arm64
| Engine | bun | v8 | deno | dune | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | jjs | primjs | txiki.js | quickjs-ng | llrt | rquickjs | quickjs | njs | duktape | quickjs-emscripten | mujs | ringo | goja | xst | kiesel | JavaScriptCore | JerryScript | nova | engine262 | jint | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.23 | 14.3.34 | 2.5.3 | 0.10.2 | 24.9.0 | 144.0 |  |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 0.10.1 | 0.7.0.beta |  | 2025.09.13 | 0.9.2 | 2.99.99 |  | 1.3.8 | 4.0.0 |  | 16.9.1 | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |  |  |
| Total size | 57.3M | 26M | 87.4M | 44.3M | 87.5M | 131.8M | 28.9M | 40M | 193.9M | 13.9M | 0 | 1.5M | 3.4M | 3.6M | 10.6M | 1.2M | 837K | 2M | 431.4K | 0 | 411.6K | 0 | 12.7M | 1.5M | 11.9M | 0.2K | 482.8K | 7.4M | 0 | 8.8M | 0 | 60.2M |
| Exe size | 57.3M | 26M | 87.4M | 44.3M | 87.5M | 65.9M | 28.9M | 40M | 118.5K | 7M | 0 | 1.5M | 3.4M | 1.8M | 10.6M | 1.2M | 837K | 1.5M | 431.4K | 0 | 411.6K | 0 | 12.7M | 1.5M | 11.9M | 0.2K | 482.8K | 7.4M | 0 | 8.8M | 0 | 59.6M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7M | 0 | 0 | 0 | 1.8M | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 48745 | 41074 | 58372 | 49624 | 42461 | 14506 | 12896 | 14043 | 31821 | 1253 | 7696 | 1080 | 1107 | 997 | 835 | 942 | 961 | 549 | 486 | 539 | 363 | 206 | 289 | 108 | 98 |  | 197 | 38 |  |  |  |  |
| DeltaBlue | 67182 | 130160 | 104506 | 89107 | 86773 | 16087 | 15478 | 16668 | 12344 | 1126 | 235 | 1201 | 1134 | 1051 | 1013 | 969 | 964 | 501 | 563 | 653 | 546 | 236 | 385 | 180 | 86 |  | 213 | 47 |  |  |  |  |
| Crypto | 69270 | 53766 | 59435 | 48776 | 53405 | 24240 | 19034 | 20918 | 32804 | 1278 | 3315 | 1662 | 1104 | 1082 | 638 | 864 | 790 | 1092 | 1250 | 551 | 275 | 138 | 156 | 396 | 110 |  | 242 | 63 |  |  |  |  |
| RayTrace | 172417 | 139784 | 82731 | 76219 | 82879 | 47285 | 45287 | 42031 | 881 | 2413 | 639 | 1694 | 1944 | 1345 | 1745 | 1284 | 1099 | 768 | 1051 | 707 | 857 | 717 | 290 | 641 | 216 |  | 298 | 171 |  |  |  |  |
| EarleyBoyer | 98829 | 110197 | 98025 | 90684 | 92543 | 49729 | 45185 | 44240 | 18912 | 4519 | 1336 | 1096 | 2769 | 2088 | 2458 | 2088 | 2047 | 2259 | 1045 | 1349 | 934 | 675 | 710 | 382 | 194 |  |  | 129 |  |  |  |  |
| RegExp | 27157 | 12716 | 13883 | 14971 | 13924 | 11059 | 11331 | 10375 | 1410 | 645 | 694 | 265 | 281 | 254 | 296 | 240 | 255 | 187 | 222 | 233 | 302 | 574 | 290 | 293 | 132 |  |  |  |  |  |  |  |
| Splay | 34308 | 54346 | 48383 | 48577 | 36891 | 25050 | 16885 | 16005 | 2462 | 3739 | 1690 | 4352 | 2727 | 2564 | 3390 | 2852 | 2703 | 1687 | 1919 | 1799 | 733 | 1031 | 1052 | 509 | 573 |  |  | 196 |  |  |  |  |
| NavierStokes | 31219 | 35764 | 32106 | 36915 | 38469 | 18920 | 20377 | 18716 | 27723 | 1441 | 6820 | 3764 | 1955 | 1857 | 1005 | 1560 | 1511 | 1677 | 1418 | 887 | 644 | 175 | 302 | 958 | 205 |  |  | 102 |  |  |  |  |
| Score | 57064 | 56871 | 53121 | 50152 | 48341 | 22668 | 20427 | 20252 | 8212 | 1696 | 1590 | 1429 | 1352 | 1184 | 1112 | 1107 | 1070 | 851 | 831 | 716 | 530 | 368 | 367 | 358 | 167 |  |  |  |  |  |  |  |
| Score/MB | 996 | 2190 | 608 | 1132 | 552 | 171 | 706 | 506 | 42 | 121 |  | 949 | 402 | 325 | 104 | 925 | 1309 | 421 | 1972 |  | 1318 |  | 28 | 242 | 14 |  |  |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 32 | 42 | 40 | 40 | 41 | 43 | 42 | 43 | 50 | 48 | 51 | 59 | 98 | 94 | 95 | 151 |  | 35 | 233 |  |  |  |  |
### windows
| Engine | v8 | dune | deno | JavaScriptCore | node | bun | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | rquickjs | rquickjs-pgo | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs | duktape | goja | kiesel | boa | xst | nova | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.34 | 0.10.2 | 2.5.3 |  | 24.9.0 | 1.2.23 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta |  |  | 0.10.1 |  |  | 1.3.8 | 2.7.0 |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |  |
| Total size | 60.5M | 82.1M | 148.2M | 125.2M | 120.8M | 139.6M | 15.6M | 53.9M | 77.1M | 197M | 89.6M | 8.9M | 40.1M | 45.6M | 10.5M | 10.2M | 9.7M | 0 | 8.3M | 8.2M | 8.2M | 20.5M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 39.7M | 0 |
| Exe size | 29.5M | 49.1M | 112.3M | 342.5K | 85.5M | 113.6M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 13.1M | 1.4M | 1M | 1.2M | 0 | 428K | 393.5K | 329.5K | 13.3M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 9.4M | 0 |
| Dll size | 31M | 33M | 35.9M | 124.9M | 35.3M | 26M | 15.3M | 20.1M | 34.4M | 196.7M | 86.6M | 7.9M | 36M | 32.5M | 9.1M | 9.2M | 8.5M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 30.3M | 0 |
| Richards | 36838 | 33929 | 35369 | 33961 | 32570 | 34677 | 24143 | 13129 | 13514 | 39411 | 691 | 628 | 435 | 375 | 393 | 436 | 395 | 368 | 243 | 246 | 211 | 182 | 53 | 49 |  | 25 |  |  | 136 |
| DeltaBlue | 79480 | 79236 | 79963 | 41694 | 72803 | 32980 | 28074 | 13270 | 12688 | 18409 | 606 | 485 | 379 | 360 | 392 | 466 | 373 | 388 | 340 | 353 | 256 | 230 | 50 | 43 |  | 29 |  |  | 163 |
| Crypto | 37099 | 38841 | 41611 | 48125 | 40676 | 40049 | 32850 | 16856 | 17679 | 16328 | 781 | 586 | 406 | 421 | 500 | 323 | 418 | 422 | 172 | 176 | 303 | 112 | 57 | 73 |  | 37 |  |  | 148 |
| RayTrace | 104560 | 70965 | 69115 | 88799 | 65489 | 85543 | 51577 | 25331 | 26761 | 1396 | 949 | 572 | 747 | 594 | 598 | 594 | 555 | 454 | 410 | 471 | 454 | 230 | 126 | 134 |  | 88 |  |  | 441 |
| EarleyBoyer | 78675 | 74450 | 68715 | 53675 | 69960 | 54857 | 42825 | 40183 | 36342 | 17710 | 2210 | 1074 | 1126 | 993 | 987 | 934 | 965 | 848 | 524 | 595 | 526 | 458 | 121 | 142 |  | 78 |  |  | 529 |
| RegExp | 9647 | 9628 | 9092 | 16951 | 9656 | 17127 | 9790 | 8711 | 8719 | 732 | 407 | 188 | 192 | 193 | 148 | 156 | 167 | 178 | 245 | 194 | 109 | 197 | 88 | 43 |  |  |  |  |  |
| Splay | 34756 | 30559 | 31056 | 26246 | 31004 | 32132 | 28440 | 19857 | 14725 | 2027 | 2275 | 1408 | 1396 | 1331 | 1200 | 1277 | 1303 | 1262 | 1229 | 1042 | 741 | 809 | 308 | 187 |  | 131 |  |  | 945 |
| NavierStokes | 38397 | 38397 | 37694 | 39396 | 38584 | 33768 | 36506 | 21750 | 21685 | 27306 | 1006 | 1489 | 724 | 711 | 733 | 750 | 711 | 730 | 479 | 475 | 1074 | 191 | 113 | 165 |  | 57 |  |  | 302 |
| Score | 42915 | 39749 | 39519 | 39302 | 38770 | 37599 | 28997 | 18045 | 17349 | 7661 | 946 | 675 | 568 | 529 | 527 | 521 | 517 | 498 | 381 | 377 | 369 | 249 | 96 | 88 |  |  |  |  |  |
| Score/MB | 708 | 484 | 266 | 313 | 320 | 269 | 1858 | 334 | 225 | 38 | 10 | 75 | 14 | 11 | 50 | 50 | 53 |  | 46 | 45 | 45 | 12 | 2 | 2 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 42 | 54 | 60 | 61 | 64 | 67 | 62 | 63 | 84 | 83 | 83 | 122 | 255 | 282 | 141 | 374 |  |  | 83 |
