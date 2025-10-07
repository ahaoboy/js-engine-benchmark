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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47873<br>57.9M<br>826/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47702<br>31.3M<br>1523/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47482<br>99.1M<br>479/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 42324<br>108.3M<br>390/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 40678<br>52.2M<br>778/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40432<br>43M<br>940/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39776<br>106.5M<br>373/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38374<br>40.7M<br>943/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20057<br>19.3M<br>1038/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19407<br>39.8M<br>487/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16961<br>32M<br>529/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16902<br>44.7M<br>378/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11244<br>199.4M<br>56/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2741<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1536<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 926<br>982.4K<br>965/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| llrt | [llrt](https://github.com/awslabs/llrt) | 924<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 821<br>4.1M<br>201/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>831.3K<br>951/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 760<br>1.4M<br>546/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 756<br>1.4M<br>537/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 738<br>1.9M<br>395/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 633<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 498<br>370.4K<br>1376/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 491<br>1.3M<br>363/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 490<br>0<br>0/M | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 403<br>422.8K<br>976/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 374<br>685K<br>559/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 340<br>386.8K<br>900/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 312<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>1.9M<br>136/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 133<br>13.2M<br>10/M | ✅unix<br>✅macArm<br>❌windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K<br>0/M | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.5M<br>0/M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M<br>0/M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/7/2025, 7:52:28 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | dune | bare | node | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | quickjs | llrt | txiki.js | primjs | rquickjs | rquickjs-pgo | ladybird | duktape | quickjs-ng | mujs-pgo | mujs-one | mujs | xst | JerryScript | nova | njs | quickjs-emscripten | ringo | jint | kiesel | boa | engine262 | goja | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.0 |  | 1.2.23 | 2.5.3 | 0.10.2 |  | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 2025.09.13 | 0.7.0.beta | 24.12.0 |  |  |  |  | 2.99.99 | 0.10.1 |  |  | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.9.2 |  | 4.0.0 |  | 0.1.0.dev |  | 0.0.1 |  |  |  |
| Total size | 57.9M | 31.3M | 99.1M | 108.3M | 52.2M | 43M | 106.5M | 40.7M | 19.3M | 39.8M | 32M | 44.7M | 199.4M | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 46.5M | 370.4K | 1.3M | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 1.9M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Exe size | 833.3K | 31.3M | 99.1M | 108.3M | 52.2M | 43M | 106.5M | 40.7M | 472.2K | 39.8M | 32M | 44.7M | 745.3K | 0 | 36M | 982.4K | 12.3M | 4.1M | 831.3K | 1.4M | 1.4M | 46.5M | 370.4K | 1.3M | 422.8K | 685K | 386.8K | 1.9M | 454.2K | 8.5M | 1.9M | 0 | 0 | 69M | 13.2M | 27M | 0 | 13.2M | 0 | 42M |
| Dll size | 57.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37530 | 41865 | 42094 | 35553 | 34885 | 31881 | 31556 | 32051 | 23589 | 13122 | 12447 | 14107 | 35510 | 13588 | 1124 | 817 | 707 | 698 | 631 | 580 | 575 | 524 | 292 | 392 | 261 | 245 | 225 | 90 | 279 | 27 | 563 | 332 | 175 | 106 | 81 | 60 |  | 204 |  |  |
| DeltaBlue | 109643 | 53397 | 55605 | 80961 | 79897 | 73351 | 74574 | 65014 | 24812 | 13409 | 12827 | 12979 | 26956 | 210 | 1048 | 707 | 697 | 674 | 622 | 584 | 584 | 480 | 324 | 383 | 359 | 360 | 313 | 163 | 284 | 33 | 544 | 385 | 197 | 110 | 71 | 54 |  | 250 |  |  |
| Crypto | 38839 | 51667 | 49376 | 41742 | 41789 | 41045 | 41427 | 41340 | 31942 | 20323 | 17786 | 17584 | 16694 | 10279 | 1369 | 757 | 679 | 605 | 553 | 559 | 530 | 875 | 791 | 411 | 188 | 189 | 182 | 323 | 300 | 38 | 880 | 424 | 140 | 95 | 80 | 80 |  | 124 |  |  |
| RayTrace | 113958 | 119360 | 111220 | 72889 | 72815 | 71409 | 65711 | 66895 | 35519 | 27454 | 27898 | 25356 | 6102 | 1386 | 1584 | 943 | 1202 | 1032 | 964 | 895 | 933 | 788 | 574 | 576 | 501 | 487 | 479 | 500 | 345 | 98 | 680 | 457 | 519 | 250 | 174 | 165 |  | 273 |  |  |
| EarleyBoyer | 88885 | 69958 | 66478 | 76178 | 75821 | 69746 | 71545 | 71565 | 7137 | 41293 | 37958 | 36351 | 23380 | 1569 | 3388 | 1485 | 1876 | 1714 | 1420 | 1375 | 1368 | 995 | 550 | 944 | 501 | 478 | 473 | 321 |  | 86 | 1670 | 852 | 568 | 278 | 175 | 191 |  | 501 |  |  |
| RegExp | 10605 | 19437 | 21051 | 10052 | 9971 | 10294 | 10011 | 8837 | 7743 | 9065 | 8819 | 8801 | 1519 | 683 | 548 | 244 | 269 | 225 | 238 | 231 | 217 | 65 | 133 | 159 | 235 | 217 | 194 | 96 |  |  | 115 | 175 | 457 | 239 | 121 | 49 |  | 209 |  |  |
| Splay | 41487 | 35633 | 35916 | 39719 | 30217 | 37396 | 35294 | 33607 | 19509 | 24651 | 11756 | 11581 | 2951 | 6173 | 3481 | 2296 | 2307 | 1836 | 1814 | 2168 | 2192 | 1462 | 1266 | 1355 | 1391 | 937 | 657 | 380 |  | 136 | 2066 | 1231 | 916 | 465 | 393 | 215 |  | 773 |  |  |
| NavierStokes | 38732 | 40136 | 39988 | 38655 | 38694 | 38803 | 38694 | 38397 | 36582 | 22216 | 21963 | 22024 | 25005 | 11848 | 1879 | 1577 | 1132 | 994 | 984 | 953 | 981 | 1556 | 944 | 470 | 481 | 485 | 475 | 866 |  | 59 | 1213 | 731 | 150 | 160 | 145 | 175 |  | 200 |  |  |
| Score | 47873 | 47702 | 47482 | 42324 | 40678 | 40432 | 39776 | 38374 | 20057 | 19407 | 16961 | 16902 | 11244 | 2741 | 1536 | 926 | 924 | 821 | 772 | 760 | 756 | 633 | 498 | 491 | 403 | 374 | 340 | 265 |  |  | 738 | 490 | 312 | 185 | 133 | 105 |  | 270 |  |  |
| Score/MB | 826 | 1523 | 479 | 390 | 778 | 940 | 373 | 943 | 1038 | 487 | 529 | 378 | 56 |  | 42 | 965 | 75 | 201 | 951 | 546 | 537 | 13 | 1376 | 363 | 976 | 559 | 900 | 136 |  |  | 395 |  |  | 2 | 10 | 3 |  | 20 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 39 | 33 | 45 | 43 | 49 | 50 | 52 | 53 | 80 | 69 | 67 | 81 | 84 | 87 | 131 | 31 | 350 | 61 | 63 | 105 | 146 | 186 | 236 |  | 114 | 81 | 7 |
### macos-arm64
| Engine | dune | JavaScriptCore | bare | deno | bun | node | v8 | mozjs | spidermonkey | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | rquickjs | llrt | ladybird | quickjs | duktape | mujs | xst | JerryScript | nova | engine262 | njs | quickjs-emscripten | goja | ringo | jint | kiesel | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0.10.2 |  |  | 2.5.3 | 1.2.23 | 24.9.0 | 14.3.39 |  | 144.0 |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.10.1 |  | 0.7.0.beta |  | 2025.09.13 | 2.99.99 | 1.3.8 | 16.9.1 | 3.0.0 |  | 0.0.1 | 0.9.2 |  |  | 4.0.0 |  | 0.1.0.dev |  |  |
| Total size | 44.3M | 78.9M | 32.8M | 87.4M | 57.3M | 87.5M | 26M | 28.9M | 131.8M | 40M | 193.9M | 0 | 13.9M | 1.5M | 3.4M | 3.6M | 1.2M | 10.6M | 41.5M | 837K | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 2M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 60.2M |
| Exe size | 44.3M | 736.3K | 32.8M | 87.4M | 57.3M | 87.5M | 26M | 28.9M | 65.9M | 40M | 118.5K | 0 | 7M | 1.5M | 3.4M | 1.8M | 1.2M | 10.6M | 41.5M | 837K | 431.4K | 411.6K | 1.5M | 482.8K | 7.4M | 0 | 1.5M | 0 | 12.7M | 0 | 75.4M | 12.4M | 0 | 59.6M |
| Dll size | 0 | 78.2M | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 193.8M | 0 | 7M | 0 | 0 | 1.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 638.7K |
| Richards | 57376 | 47160 | 35630 | 43369 | 35076 | 35044 | 28054 | 15123 | 12109 | 13807 | 19471 | 11283 | 1161 | 1090 | 950 | 800 | 769 | 747 | 825 | 749 | 403 | 367 | 90 | 201 | 38 |  | 638 | 442 | 287 | 202 | 181 | 141 |  |  |
| DeltaBlue | 105776 | 64313 | 97630 | 82099 | 42547 | 75890 | 73867 | 16794 | 11916 | 14764 | 2398 | 1407 | 890 | 1145 | 896 | 882 | 729 | 864 | 646 | 856 | 545 | 546 | 148 | 224 | 48 |  | 849 | 579 | 325 | 229 | 197 | 122 |  |  |
| Crypto | 58093 | 52536 | 55021 | 44939 | 47003 | 41065 | 35594 | 21289 | 18153 | 20522 | 19007 | 10361 | 1206 | 1575 | 823 | 789 | 836 | 540 | 1316 | 756 | 1268 | 248 | 310 | 243 | 61 |  | 1094 | 496 | 172 | 130 | 153 | 136 |  |  |
| RayTrace | 94571 | 122542 | 94645 | 68301 | 102505 | 59199 | 102414 | 48839 | 37776 | 37813 | 2685 | 985 | 1872 | 1066 | 1420 | 1177 | 1233 | 1398 | 1102 | 798 | 998 | 729 | 502 | 294 | 145 |  | 760 | 550 | 422 | 720 | 377 | 269 |  |  |
| EarleyBoyer | 106821 | 66923 | 74447 | 81797 | 53468 | 74946 | 65537 | 47058 | 40105 | 36330 | 24962 | 984 | 3946 | 1117 | 2195 | 2178 | 1895 | 2253 | 1691 | 1379 | 1050 | 723 | 295 |  | 115 |  | 1968 | 1130 | 566 | 585 | 420 | 247 |  |  |
| RegExp | 14379 | 18729 | 9890 | 10808 | 18911 | 9083 | 8100 | 11218 | 9890 | 10223 | 1127 | 1264 | 580 | 247 | 272 | 240 | 224 | 232 | 97 | 172 | 219 | 239 | 233 |  |  |  | 194 | 207 | 220 | 589 | 215 | 134 |  |  |
| Splay | 39435 | 27291 | 24806 | 24814 | 26330 | 26466 | 31749 | 17716 | 22206 | 13141 | 1897 | 3397 | 3198 | 3587 | 2779 | 2923 | 2238 | 2983 | 2306 | 1636 | 1726 | 790 | 396 |  | 182 |  | 1547 | 1499 | 981 | 688 | 553 | 397 |  |  |
| NavierStokes | 37804 | 23845 | 31281 | 31335 | 23845 | 32203 | 27438 | 20102 | 19866 | 15784 | 18253 | 15947 | 1216 | 3027 | 1498 | 1853 | 1527 | 867 | 1884 | 1253 | 1366 | 559 | 974 |  | 89 |  | 1862 | 878 | 285 | 163 | 249 | 265 |  |  |
| Score | 54369 | 44696 | 42351 | 40689 | 38232 | 37305 | 36974 | 21726 | 19046 | 18228 | 6248 | 3197 | 1461 | 1258 | 1120 | 1080 | 978 | 949 | 928 | 812 | 789 | 479 | 294 |  |  |  | 916 | 619 | 352 | 337 | 267 | 196 |  |  |
| Score/MB | 1227 | 566 | 1291 | 465 | 667 | 426 | 1424 | 750 | 144 | 455 | 32 |  | 105 | 835 | 333 | 297 | 817 | 89 | 22 | 993 | 1872 | 1191 | 199 |  |  |  | 454 |  | 27 |  | 3 | 15 |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 36 | 33 | 45 | 41 | 43 | 44 | 48 | 62 | 51 | 48 | 69 | 113 | 37 | 260 |  | 52 | 56 | 94 | 100 | 108 | 127 |  |  |
### windows
| Engine | v8 | JavaScriptCore | deno | dune | bun | node | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | quickjs-ng | llrt | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs-pgo | mujs | xst | duktape | nova | goja | boa | engine262 | jint | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.39 |  | 2.5.3 | 0.10.2 | 1.2.23 | 24.9.0 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.10.1 | 0.7.0.beta |  |  |  |  | 1.3.8 |  | 2.7.0 |  |  |  | 0.0.1 |  |  |
| Total size | 61.9M | 125.2M | 148.2M | 82.1M | 139.6M | 120.8M | 15.6M | 52.6M | 77.1M | 197M | 89.6M | 8.9M | 40.1M | 9.7M | 45.6M | 9M | 10.2M | 0 | 8.3M | 8.2M | 6.5M | 8.2M | 17.5M | 20.5M | 43.8M | 0 | 99.1M | 0 |
| Exe size | 29.5M | 342.5K | 112.3M | 49.1M | 113.6M | 85.5M | 334K | 33.8M | 42.6M | 339K | 3M | 1M | 4.1M | 1.2M | 13.1M | 1.2M | 1M | 0 | 428K | 393.5K | 1.3M | 329.5K | 8.3M | 13.3M | 27.4M | 0 | 68.8M | 0 |
| Dll size | 32.4M | 124.9M | 35.9M | 33M | 26M | 35.3M | 15.3M | 18.8M | 34.4M | 196.7M | 86.6M | 7.9M | 36M | 8.5M | 32.5M | 7.8M | 9.2M | 0 | 7.8M | 7.8M | 5.2M | 7.8M | 9.2M | 7.2M | 16.5M | 0 | 30.3M | 0 |
| Richards | 31398 | 34098 | 35231 | 35157 | 33438 | 32548 | 23850 | 10855 | 13411 | 35454 | 684 | 604 | 431 | 399 | 381 | 433 | 439 | 362 | 252 | 248 |  | 205 | 19 | 183 | 48 |  | 105 |  |
| DeltaBlue | 101723 | 42104 | 78938 | 78859 | 38005 | 71546 | 24585 | 12648 | 12728 | 28748 | 615 | 466 | 396 | 377 | 368 | 455 | 459 | 392 | 347 | 355 |  | 250 | 24 | 228 | 42 |  | 113 |  |
| Crypto | 37258 | 47903 | 40426 | 41414 | 46385 | 38561 | 31093 | 19926 | 17368 | 21391 | 769 | 554 | 418 | 429 | 427 | 322 | 323 | 422 | 186 | 179 |  | 299 | 33 | 112 | 73 |  | 89 |  |
| RayTrace | 108334 | 103376 | 64305 | 68079 | 98493 | 64758 | 42021 | 27232 | 27010 | 4424 | 971 | 551 | 741 | 599 | 552 | 569 | 578 | 453 | 478 | 473 |  | 433 | 81 | 226 | 133 |  | 260 |  |
| EarleyBoyer | 83391 | 61941 | 71782 | 72203 | 56007 | 69852 | 38181 | 40090 | 36005 | 26422 | 2185 | 981 | 1037 | 982 | 999 | 909 | 911 | 866 | 559 | 588 |  | 476 | 72 | 446 | 137 |  | 292 |  |
| RegExp | 9565 | 16605 | 9680 | 9670 | 17132 | 9680 | 9246 | 8745 | 8737 | 965 | 393 | 184 | 193 | 174 | 196 | 157 | 148 | 177 | 237 | 197 |  | 97 |  | 195 | 42 |  | 272 |  |
| Splay | 41373 | 24929 | 33955 | 29834 | 32419 | 30347 | 22997 | 19183 | 14326 | 2869 | 2359 | 1402 | 1293 | 1282 | 1304 | 1231 | 1229 | 1247 | 1009 | 707 |  | 813 | 126 | 854 | 183 |  | 377 |  |
| NavierStokes | 38436 | 39178 | 38507 | 38211 | 33700 | 38173 | 35877 | 21559 | 21623 | 28084 | 1081 | 1501 | 697 | 717 | 705 | 756 | 731 | 738 | 471 | 475 |  | 894 | 56 | 188 | 161 |  | 148 |  |
| Score | 44843 | 40432 | 40011 | 39741 | 39632 | 38222 | 26216 | 17955 | 17240 | 10892 | 954 | 652 | 559 | 528 | 527 | 513 | 510 | 499 | 386 | 361 |  | 350 |  | 249 | 87 |  | 182 |  |
| Score/MB | 724 | 322 | 270 | 484 | 283 | 316 | 1680 | 341 | 223 | 55 | 10 | 72 | 13 | 54 | 11 | 56 | 49 |  | 46 | 43 |  | 42 |  | 12 | 1 |  | 1 |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 57 | 60 | 62 | 60 | 67 | 68 | 63 | 80 | 84 | 134 | 90 | 407 | 123 | 288 |  | 148 | 83 |
