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


## Engine & Runtime (34/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48130<br>36.4M<br>1322/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47965<br>98.4M<br>487/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47751<br>56.8M<br>840/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 41378<br>65.2M<br>634/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40975<br>106.5M<br>384/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40277<br>123.1M<br>327/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39459<br>67.1M<br>587/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39204<br>40.7M<br>964/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20510<br>19.4M<br>1056/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19108<br>39.6M<br>482/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17155<br>35.2M<br>487/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17134<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10517<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3008<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1540<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 869<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 848<br>4.3M<br>198/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 832<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 780<br>831.3K<br>960/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 728<br>1.3M<br>540/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 723<br>8.4M<br>85/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 654<br>2M<br>331/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 573<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 509<br>2.1M<br>239/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 399<br>685K<br>596/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 397<br>446.6K<br>910/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 362<br>414.5K<br>894/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 302<br>2.7K<br>114528/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 29<br>1.1M<br>27/M | ✅unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |

## bench
8/16/2025, 5:19:41 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | bare | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | njs | quickjs-ng | ladybird | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.20 | 14.1.0 |  | 2.4.4 | 24.6.0 | 0.10.0 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  |  | 0.9.2 | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 36.4M | 98.4M | 56.8M | 65.2M | 106.5M | 123.1M | 67.1M | 40.7M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.3M | 8.4M | 2M | 46.1M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 1.1M | 454.2K | 9.7M | 7.3K | 1.1G |
| Exe size | 36.4M | 98.4M | 1M | 65.2M | 106.5M | 123.1M | 67.1M | 40.7M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 1.3M | 8.4M | 2M | 46.1M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 1.1M | 454.2K | 9.7M | 7.3K | 1.1G |
| Dll size | 0 | 0 | 55.8M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40322 | 41257 | 37763 | 32051 | 32986 | 32231 | 32633 | 32287 | 23656 | 13041 | 12483 | 13559 | 35673 | 12419 | 1120 | 680 | 687 | 710 | 631 | 600 | 563 | 581 | 492 | 288 | 243 | 272 | 228 | 119 | 198 | 90 | 103 | 60 | 59 | 22 | 271 | 24 |  | 133 |
| DeltaBlue | 54409 | 53344 | 109359 | 77867 | 76056 | 74158 | 74422 | 75573 | 25700 | 13098 | 12873 | 13032 | 39631 | 235 | 1066 | 663 | 664 | 684 | 627 | 592 | 524 | 570 | 473 | 332 | 360 | 361 | 326 | 174 | 247 | 163 | 114 | 55 | 55 | 25 | 279 | 28 |  | 181 |
| Crypto | 52073 | 46934 | 40380 | 41505 | 41860 | 41890 | 41861 | 41378 | 32209 | 20534 | 17641 | 17380 | 22867 | 9639 | 1365 | 585 | 769 | 593 | 555 | 550 | 810 | 380 | 890 | 792 | 189 | 187 | 184 | 155 | 124 | 321 | 100 | 81 | 62 | 25 | 300 | 29 |  | 135 |
| RayTrace | 115734 | 117880 | 111294 | 73259 | 68597 | 66525 | 68307 | 66451 | 37258 | 26788 | 28120 | 26909 | 5012 | 1448 | 1557 | 1108 | 914 | 1032 | 962 | 887 | 686 | 727 | 561 | 579 | 527 | 526 | 481 | 440 | 272 | 499 | 257 | 162 | 139 | 25 | 349 | 86 |  | 422 |
| EarleyBoyer | 70843 | 70727 | 84056 | 70255 | 75504 | 72125 | 74506 | 67822 | 7114 | 38544 | 36905 | 36334 | 24218 | 1526 | 3375 | 1868 | 1499 | 1739 | 1447 | 1391 | 1687 | 1229 | 799 | 617 | 540 | 571 | 517 | 646 | 504 | 323 | 289 | 195 | 137 | 47 |  | 79 |  | 522 |
| RegExp | 20053 | 21820 | 10424 | 10476 | 10162 | 10042 | 10112 | 8947 | 7945 | 8837 | 8947 | 8956 | 1003 | 1096 | 554 | 256 | 228 | 228 | 242 | 228 | 116 | 184 | 63 | 134 | 224 | 247 | 203 | 462 | 212 | 97 | 241 | 49 | 95 | 10 |  |  |  |  |
| Splay | 38121 | 37245 | 42750 | 39613 | 37013 | 36997 | 28889 | 35628 | 20568 | 24887 | 12989 | 12484 | 2468 | 6837 | 3655 | 2456 | 1838 | 1964 | 1864 | 1503 | 2119 | 1729 | 1331 | 1322 | 1314 | 968 | 888 | 859 | 796 | 361 | 462 | 226 | 321 | 81 |  | 58 |  | 860 |
| NavierStokes | 40216 | 40028 | 38881 | 38842 | 38842 | 38803 | 38881 | 38469 | 36915 | 22319 | 21941 | 22127 | 15403 | 14395 | 1824 | 945 | 1328 | 990 | 991 | 956 | 1103 | 933 | 1488 | 947 | 464 | 465 | 480 | 191 | 203 | 832 | 166 | 176 | 118 | 44 |  | 51 |  | 286 |
| Score | 48130 | 47965 | 47751 | 41378 | 40975 | 40277 | 39459 | 39204 | 20510 | 19108 | 17155 | 17134 | 10517 | 3008 | 1540 | 869 | 848 | 832 | 780 | 728 | 723 | 654 | 573 | 509 | 399 | 397 | 362 | 302 | 270 | 262 | 189 | 107 | 104 | 29 |  |  |  |  |
| Score/MB | 1322 | 487 | 840 | 634 | 384 | 327 | 587 | 964 | 1056 | 482 | 487 | 336 | 52 | 2 | 42 | 70 | 198 | 161 | 960 | 540 | 85 | 331 | 12 | 239 | 596 | 910 | 894 | 114528 | 20 | 125 | 2 | 3 | 8 | 27 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 35 | 34 | 47 | 47 | 49 | 50 | 52 | 62 | 59 | 86 | 66 | 80 | 79 | 84 | 92 | 113 | 130 | 141 | 233 | 234 | 886 | 31 | 421 |  | 87 |
### macos-arm64
| Engine | bare | v8 | JavaScriptCore | dune | bun | node | deno | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | primjs | txiki.js | quickjs-ng | quickjs | llrt | rquickjs | njs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.79 |  | 0.10.0 | 1.2.20 | 24.6.0 | 2.4.4 | 142.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.8.0 | 2025.04.26 | 0.6.2.beta |  | 0.9.2 |  | 2.99.99 | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 45.5M | 41.1M | 0.2K | 57.4M | 56.8M | 111.5M | 85.6M | 131.2M | 46.3M | 32.8M | 194M | 0 | 15.7M | 1.8M | 3.6M | 4.1M | 975.9K | 10.5M | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 45.5M | 41.1M | 0.2K | 57.4M | 56.8M | 111.5M | 85.6M | 65.6M | 46.3M | 32.8M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 2.1M | 975.9K | 10.5M | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41572 | 38144 | 42885 | 44611 | 38610 | 32884 | 34130 | 13436 | 14650 | 8949 | 26618 | 9224 | 902 | 925 | 879 | 1188 | 910 | 910 | 887 | 695 | 761 | 372 | 317 | 110 | 292 | 129 | 122 | 88 | 38 | 178 | 25 |  | 112 |
| DeltaBlue | 105022 | 122034 | 63817 | 100678 | 50541 | 71189 | 72260 | 14486 | 16020 | 10780 | 8000 | 475 | 1016 | 1092 | 831 | 1031 | 891 | 932 | 983 | 697 | 674 | 465 | 453 | 202 | 351 | 211 | 125 | 87 | 37 | 212 | 39 |  | 204 |
| Crypto | 57317 | 54093 | 62032 | 53205 | 47768 | 40525 | 38277 | 20886 | 20973 | 16114 | 23674 | 2841 | 1141 | 1597 | 905 | 1005 | 1004 | 817 | 860 | 1007 | 1460 | 1025 | 262 | 514 | 160 | 121 | 120 | 107 | 39 | 223 | 41 |  | 133 |
| RayTrace | 85765 | 118102 | 162206 | 80067 | 99825 | 59199 | 59643 | 42179 | 35519 | 41365 | 857 | 606 | 1653 | 1768 | 1382 | 1357 | 1029 | 1696 | 1036 | 721 | 877 | 982 | 761 | 658 | 392 | 507 | 322 | 145 | 37 | 251 | 112 |  | 542 |
| EarleyBoyer | 83405 | 80669 | 68501 | 81273 | 59239 | 69133 | 66103 | 42252 | 36719 | 36633 | 20565 | 2060 | 3940 | 1100 | 2116 | 2227 | 1833 | 2553 | 1704 | 2145 | 1206 | 940 | 886 | 351 | 671 | 551 | 317 | 170 | 75 |  | 88 |  | 430 |
| RegExp | 13378 | 10536 | 17911 | 11558 | 19222 | 9374 | 9371 | 9128 | 9418 | 8472 | 1193 | 1171 | 583 | 300 | 283 | 224 | 236 | 184 | 228 | 168 | 93 | 179 | 319 | 286 | 272 | 526 | 182 | 102 | 12 |  |  |  |  |
| Splay | 50973 | 41226 | 25710 | 23918 | 31610 | 25702 | 23600 | 25401 | 15165 | 11971 | 1722 | 1946 | 3366 | 4372 | 3382 | 1984 | 1881 | 1970 | 1978 | 1559 | 1638 | 1385 | 1327 | 418 | 1177 | 833 | 529 | 258 | 130 |  | 67 |  | 731 |
| NavierStokes | 37877 | 36358 | 29977 | 35397 | 25178 | 25474 | 27492 | 19589 | 19589 | 16275 | 17259 | 7097 | 1388 | 2925 | 1957 | 1895 | 1953 | 1008 | 1533 | 1441 | 1825 | 1329 | 702 | 1286 | 270 | 169 | 214 | 165 | 62 |  | 69 |  | 265 |
| Score | 51065 | 49809 | 47528 | 44441 | 41281 | 35248 | 35021 | 20638 | 19133 | 15802 | 6490 | 1995 | 1441 | 1365 | 1175 | 1154 | 1036 | 1011 | 989 | 855 | 828 | 694 | 543 | 377 | 373 | 301 | 211 | 131 | 44 |  |  |  |  |
| Score/MB | 1122 | 1213 | 289748372 | 774 | 726 | 316 | 408 | 157 | 412 | 481 | 33 |  | 91 | 775 | 325 | 279 | 1087 | 96 | 837 | 356 | 19 | 1264 | 1295 | 234 | 29 | 114148 | 2 | 10 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 26 | 33 | 34 | 38 | 41 | 43 | 43 | 47 | 45 | 55 | 65 | 55 | 59 | 97 | 91 | 104 | 132 | 185 | 649 | 42 | 345 |  | 89 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino | ringo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.79 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.0 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  | 4.0.0 |
| Total size | 54.1M | 122.1M | 132.7M | 143.1M | 116.3M | 78.7M | 14.4M | 51M | 72.8M | 196.1M | 17.3M | 86.6M | 11.8M | 37M | 42.2M | 9M | 8M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 | 2.7K |
| Exe size | 29.1M | 337.5K | 112.9M | 110.8M | 85.3M | 48.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 1.3M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 | 2.7K |
| Dll size | 25M | 121.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.3M | 83.5M | 6.9M | 31.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 | 0 |
| Richards | 38257 | 35058 | 35863 | 33124 | 30783 | 29121 | 24627 | 13235 | 14262 | 35772 | 1694 | 686 | 511 | 451 | 392 | 410 | 367 | 229 | 211 | 222 | 196 | 102 | 55 | 47 |  | 20 |  |  |  |
| DeltaBlue | 110126 | 44636 | 46686 | 70356 | 72155 | 73041 | 28656 | 13151 | 13144 | 25952 | 202 | 627 | 469 | 410 | 373 | 383 | 417 | 316 | 264 | 325 | 236 | 111 | 50 | 42 |  | 23 |  |  |  |
| Crypto | 39654 | 48402 | 45517 | 40206 | 41993 | 42081 | 34051 | 20402 | 17294 | 22178 | 2858 | 786 | 548 | 423 | 426 | 370 | 321 | 185 | 312 | 179 | 114 | 89 | 59 | 73 |  | 27 |  |  |  |
| RayTrace | 111960 | 103524 | 83989 | 67339 | 66229 | 67487 | 49875 | 28063 | 27352 | 5830 | 1530 | 1000 | 550 | 731 | 565 | 580 | 555 | 471 | 439 | 463 | 231 | 266 | 127 | 133 |  | 74 |  |  |  |
| EarleyBoyer | 85318 | 64893 | 56740 | 75163 | 70960 | 72336 | 42292 | 39467 | 36942 | 28448 | 892 | 2235 | 1010 | 1118 | 1004 | 981 | 883 | 561 | 512 | 576 | 460 | 297 | 126 | 139 |  | 69 |  |  |  |
| RegExp | 10062 | 18748 | 17001 | 9608 | 9851 | 9728 | 10142 | 9020 | 8828 | 1025 | 902 | 402 | 182 | 195 | 181 | 179 | 155 | 251 | 109 | 200 | 199 | 279 | 88 | 43 |  |  |  |  |  |
| Splay | 42897 | 35625 | 32287 | 34128 | 33574 | 28424 | 27063 | 24056 | 13886 | 3023 | 5378 | 2331 | 1057 | 1459 | 1319 | 1009 | 947 | 1171 | 1009 | 1163 | 761 | 411 | 315 | 184 |  | 57 |  |  |  |
| NavierStokes | 38951 | 33768 | 39988 | 38951 | 39029 | 39029 | 37063 | 22467 | 22090 | 26092 | 3140 | 1084 | 1038 | 740 | 717 | 679 | 730 | 477 | 1069 | 476 | 192 | 151 | 115 | 163 |  | 48 |  |  |  |
| Score | 47706 | 42902 | 40992 | 39608 | 39272 | 38388 | 29110 | 19290 | 17518 | 11354 | 1457 | 968 | 589 | 583 | 528 | 502 | 475 | 386 | 383 | 374 | 252 | 185 | 98 | 87 |  |  |  |  |  |
| Score/MB | 881 | 351 | 308 | 276 | 337 | 487 | 2021 | 377 | 240 | 57 | 83 | 11 | 49 | 15 | 12 | 56 | 59 | 50 | 50 | 49 | 12 | 1 | 2 | 2 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 44 | 41 | 58 | 60 | 61 | 63 | 68 | 80 | 84 | 83 | 121 | 147 | 249 | 286 | 129 | 462 |  |  | 98 |
