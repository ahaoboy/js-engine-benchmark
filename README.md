fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

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


## Engine & Runtime (31/36)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47193<br>97.2M<br>485/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46295<br>37.4M<br>1236/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45394<br>53.3M<br>852/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40565<br>106.5M<br>380/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40492<br>65.2M<br>620/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39271<br>121.6M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38917<br>67.1M<br>579/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38469<br>40.7M<br>946/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19545<br>19.4M<br>1007/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18810<br>40M<br>470/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17034<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16894<br>35.2M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11885<br>199.7M<br>59/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2376<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1533<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 875<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 835<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 823<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 734<br>857K<br>877/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 702<br>1.3M<br>521/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 527<br>45.8M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 476<br>2.1M<br>223/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>414.5K<br>921/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 366<br>685K<br>547/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 277<br>2.7K<br>105047/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 271<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 266<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
7/30/2025, 2:51:41 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs | mujs(one) | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 2.4.2 | 0 | 24.4.1 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 1.3.5 | 0 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 97.2M | 37.4M | 53.3M | 106.5M | 65.2M | 121.6M | 67.1M | 40.7M | 19.4M | 40M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 97.2M | 37.4M | 937.8K | 106.5M | 65.2M | 121.6M | 67.1M | 40.7M | 571K | 40M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41459 | 41526 | 34095 | 32340 | 32287 | 32552 | 32661 | 33074 | 23599 | 12815 | 14114 | 12790 | 35373 | 12758 | 1123 | 686 | 708 | 689 | 613 | 595 | 571 | 484 | 292 | 227 | 244 | 71 | 193 | 90 | 106 | 60 | 59 | 541 | 120 | 268 | 0 | 23 |
| DeltaBlue | 55063 | 55665 | 98628 | 76056 | 75090 | 73431 | 72287 | 79910 | 25073 | 12933 | 12873 | 12417 | 38620 | 316 | 1051 | 674 | 685 | 657 | 604 | 587 | 575 | 457 | 327 | 319 | 351 | 161 | 244 | 163 | 113 | 55 | 55 | 514 | 181 | 269 | 0 | 26 |
| Crypto | 50016 | 51948 | 42108 | 41425 | 41734 | 41536 | 41853 | 40955 | 31224 | 19976 | 17646 | 17566 | 26688 | 7542 | 1359 | 574 | 606 | 760 | 570 | 539 | 380 | 890 | 789 | 184 | 187 | 152 | 119 | 327 | 98 | 80 | 62 | 844 | 136 | 296 | 0 | 28 |
| RayTrace | 115586 | 117806 | 106114 | 68745 | 71187 | 65489 | 67931 | 55518 | 31450 | 28120 | 26465 | 28416 | 3622 | 1533 | 1561 | 1177 | 1092 | 920 | 954 | 882 | 733 | 556 | 578 | 480 | 518 | 425 | 272 | 499 | 253 | 165 | 138 | 589 | 424 | 352 | 0 | 85 |
| EarleyBoyer | 63761 | 65154 | 80999 | 73802 | 68949 | 71110 | 73744 | 68211 | 7075 | 38714 | 36045 | 37124 | 28044 | 1002 | 3370 | 1896 | 1766 | 1444 | 1195 | 1193 | 1203 | 732 | 567 | 474 | 514 | 577 | 493 | 325 | 283 | 188 | 133 | 0 | 498 | 0 | 0 | 76 |
| RegExp | 20750 | 19859 | 10212 | 10203 | 10263 | 10021 | 10112 | 8874 | 7569 | 8702 | 8892 | 8883 | 1302 | 532 | 551 | 250 | 228 | 222 | 219 | 220 | 182 | 61 | 130 | 194 | 208 | 463 | 205 | 95 | 248 | 48 | 92 | 112 | 0 | 0 | 0 | 0 |
| Splay | 35500 | 33053 | 37633 | 35856 | 36541 | 34715 | 27137 | 34471 | 18687 | 22800 | 11858 | 11569 | 2563 | 3243 | 3566 | 2342 | 1893 | 1692 | 1597 | 1426 | 1644 | 825 | 892 | 1293 | 771 | 989 | 957 | 397 | 473 | 223 | 323 | 1911 | 879 | 0 | 0 | 57 |
| NavierStokes | 39692 | 34874 | 38545 | 38765 | 38803 | 35171 | 38732 | 38249 | 36618 | 21919 | 21980 | 21941 | 32203 | 12601 | 1839 | 992 | 971 | 1226 | 999 | 946 | 926 | 1457 | 932 | 489 | 476 | 175 | 196 | 855 | 165 | 175 | 119 | 1229 | 276 | 0 | 0 | 50 |
| Score | 47193 | 46295 | 45394 | 40565 | 40492 | 39271 | 38917 | 38469 | 19545 | 18810 | 17034 | 16894 | 11885 | 2376 | 1533 | 875 | 835 | 823 | 734 | 702 | 646 | 527 | 476 | 373 | 366 | 277 | 271 | 266 | 189 | 106 | 104 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 485 | 1236 | 852 | 380 | 620 | 323 | 579 | 946 | 1007 | 470 | 334 | 479 | 59 | 2 | 42 | 71 | 161 | 192 | 877 | 521 | 327 | 11 | 223 | 921 | 547 | 105047 | 20 | 127 | 2 | 3 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 39 | 34 | 46 | 49 | 49 | 52 | 53 | 59 | 89 | 70 | 86 | 84 | 98 | 115 | 130 | 144 | 237 | 236 | 53 | 88 | 31 | 0 | 434 |
### macos-arm64
| Engine | jsc | bun | dune | bare | node | deno | v8 | spidermonkey | spiderfire | mozjs | graaljs | hermes | llrt | txiki.js | jjs | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | xst | ringo | goja | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.19 | 0.10.0 | 0 | 24.4.1 | 2.4.2 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0.12.0 | 0.6.2.beta | 24.12.0 | 0 | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 94.2M | 56.4M | 57.4M | 45.5M | 110.8M | 85.3M | 861K | 131.7M | 46.3M | 32.8M | 194M | 15.7M | 10.5M | 3.6M | 0 | 4.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 914.7K | 56.4M | 57.4M | 45.5M | 110.8M | 85.3M | 861K | 65.9M | 46.3M | 32.8M | 147.4K | 7.9M | 10.5M | 3.6M | 0 | 2.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 46104 | 46634 | 44403 | 35877 | 40477 | 44625 | 26187 | 11770 | 14379 | 11290 | 31560 | 1097 | 983 | 1167 | 8790 | 1140 | 1008 | 985 | 736 | 808 | 486 | 339 | 107 | 174 | 285 | 107 | 100 | 699 | 201 | 195 | 0 | 29 |
| DeltaBlue | 55380 | 64465 | 97193 | 101749 | 95428 | 96922 | 69292 | 15101 | 16067 | 11544 | 24021 | 1015 | 1088 | 1200 | 322 | 1060 | 1033 | 912 | 826 | 733 | 553 | 543 | 201 | 201 | 335 | 112 | 85 | 723 | 191 | 217 | 0 | 36 |
| Crypto | 69556 | 63104 | 56468 | 55570 | 56176 | 50166 | 33300 | 24120 | 20437 | 15314 | 30906 | 1141 | 951 | 1031 | 4603 | 1046 | 1233 | 804 | 989 | 1523 | 1174 | 274 | 490 | 162 | 165 | 88 | 106 | 1120 | 135 | 248 | 0 | 43 |
| RayTrace | 164853 | 149774 | 86653 | 93461 | 86505 | 84433 | 81399 | 45805 | 39219 | 28467 | 1163 | 2124 | 1697 | 1784 | 2172 | 1390 | 1164 | 1310 | 1013 | 1001 | 925 | 757 | 662 | 679 | 291 | 248 | 209 | 572 | 653 | 281 | 0 | 126 |
| EarleyBoyer | 88466 | 88183 | 91005 | 88565 | 85846 | 90325 | 68537 | 45542 | 43665 | 31175 | 28158 | 3929 | 2783 | 2650 | 904 | 2317 | 2067 | 1967 | 1225 | 1254 | 954 | 930 | 405 | 693 | 612 | 317 | 207 | 0 | 677 | 0 | 0 | 106 |
| RegExp | 28241 | 26210 | 13300 | 13792 | 14120 | 13365 | 10274 | 11103 | 11286 | 8430 | 1395 | 658 | 296 | 272 | 683 | 238 | 246 | 246 | 173 | 94 | 228 | 303 | 296 | 581 | 255 | 188 | 118 | 168 | 0 | 0 | 0 | 0 |
| Splay | 36899 | 37926 | 43280 | 40460 | 39401 | 40371 | 27666 | 23038 | 15964 | 11586 | 3435 | 3696 | 3765 | 2404 | 1300 | 1751 | 1499 | 1846 | 2359 | 1391 | 2098 | 1151 | 509 | 838 | 586 | 567 | 428 | 620 | 856 | 0 | 0 | 90 |
| NavierStokes | 37248 | 29887 | 35918 | 36249 | 36470 | 36506 | 32022 | 19600 | 19787 | 15979 | 17808 | 1347 | 1588 | 1903 | 368 | 1837 | 1735 | 1476 | 2263 | 1686 | 1421 | 675 | 1363 | 195 | 268 | 170 | 188 | 1569 | 296 | 0 | 0 | 75 |
| Score | 56271 | 54197 | 50106 | 49134 | 48900 | 48881 | 36380 | 21451 | 20299 | 15143 | 9485 | 1558 | 1307 | 1307 | 1304 | 1153 | 1089 | 1028 | 955 | 842 | 812 | 550 | 394 | 355 | 321 | 187 | 157 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 597 | 961 | 872 | 1079 | 441 | 573 | 43266 | 162 | 437 | 461 | 48 | 99 | 124 | 362 | 0 | 279 | 1142 | 870 | 631 | 20 | 1479 | 1312 | 244 | 134627 | 25 | 2 | 12 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 33 | 38 | 41 | 52 | 41 | 41 | 43 | 53 | 65 | 50 | 60 | 93 | 89 | 93 | 153 | 159 | 46 | 79 | 37 | 0 | 309 |
### macos-amd64
| Engine | dune | bare | bun | deno | v8 | node | jsc | spiderfire | mozjs | ChakraCore | spidermonkey | graaljs | jjs | hermes | txiki.js | llrt | quickjs | rquickjs | duktape | qjs(ng) | xst | primjs | mujs | ringo | jint | goja | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0.10.0 | 0 | 1.2.19 | 2.4.2 | 13.6.0 | 24.4.1 | 0 | 0 | 0 | 1.13.0.0.beta | 142.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 2025.04.26 | 0 | 2.99.99 | 0.8.0 | 16.9.1 | 0 | 1.3.5 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 60.4M | 47.1M | 61.9M | 96.3M | 861K | 113.5M | 89.6M | 48.2M | 33.8M | 20M | 65.9M | 194.4M | 0 | 7.9M | 3.7M | 12.4M | 1M | 1.2M | 525.7K | 2.1M | 1.6M | 693.4K | 441.8K | 2.7K | 68.9M | 13.1M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 60.4M | 47.1M | 61.9M | 96.3M | 861K | 113.5M | 1016.1K | 48.2M | 33.8M | 571K | 65.9M | 148.8K | 0 | 7.9M | 3.7M | 12.4M | 1M | 1.2M | 525.7K | 2.1M | 1.6M | 693.4K | 441.8K | 2.7K | 68.9M | 13.1M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 88.6M | 0 | 0 | 19.5M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 31574 | 22304 | 28390 | 29124 | 29763 | 21178 | 25774 | 10527 | 9846 | 21273 | 8059 | 36213 | 12504 | 500 | 412 | 325 | 311 | 310 | 163 | 321 | 93 | 182 | 119 | 66 | 104 | 119 | 39 | 23 | 317 | 57 | 95 | 0 | 18 |
| DeltaBlue | 54223 | 61840 | 38282 | 52524 | 65649 | 49185 | 31671 | 11789 | 9944 | 18179 | 8146 | 30044 | 254 | 547 | 456 | 304 | 399 | 296 | 181 | 328 | 145 | 217 | 178 | 107 | 111 | 111 | 37 | 21 | 352 | 75 | 107 | 0 | 19 |
| Crypto | 34832 | 34600 | 37790 | 31177 | 35344 | 33378 | 32486 | 15602 | 13369 | 19235 | 12566 | 14494 | 7346 | 567 | 253 | 177 | 259 | 206 | 264 | 206 | 189 | 153 | 98 | 80 | 82 | 64 | 43 | 33 | 383 | 63 | 114 | 0 | 23 |
| RayTrace | 74221 | 74517 | 97309 | 58015 | 88429 | 58829 | 87023 | 29348 | 31756 | 28609 | 25996 | 1875 | 887 | 1094 | 698 | 465 | 207 | 330 | 343 | 289 | 446 | 222 | 297 | 353 | 226 | 184 | 96 | 73 | 158 | 197 | 179 | 0 | 64 |
| EarleyBoyer | 67463 | 62529 | 53023 | 58543 | 34230 | 59209 | 45367 | 34283 | 33614 | 5036 | 28990 | 12386 | 2205 | 1822 | 1048 | 731 | 510 | 529 | 419 | 552 | 321 | 378 | 366 | 376 | 264 | 336 | 105 | 81 | 0 | 203 | 0 | 0 | 60 |
| RegExp | 8512 | 8719 | 12480 | 8438 | 6952 | 7937 | 12116 | 7720 | 7577 | 3731 | 6286 | 846 | 389 | 293 | 81 | 63 | 58 | 54 | 77 | 61 | 121 | 53 | 92 | 390 | 102 | 156 | 55 | 22 | 60 | 0 | 0 | 0 | 0 |
| Splay | 33126 | 40957 | 30298 | 30755 | 30991 | 32287 | 27441 | 12863 | 13080 | 15793 | 17405 | 1243 | 3404 | 2317 | 1216 | 1194 | 541 | 443 | 924 | 259 | 263 | 458 | 504 | 638 | 470 | 374 | 301 | 122 | 1002 | 586 | 0 | 0 | 54 |
| NavierStokes | 37508 | 36803 | 27992 | 36249 | 31515 | 32814 | 28790 | 24758 | 24783 | 29917 | 20545 | 15551 | 5611 | 895 | 542 | 390 | 486 | 398 | 380 | 526 | 473 | 245 | 227 | 123 | 126 | 104 | 105 | 76 | 640 | 140 | 0 | 0 | 38 |
| Score | 36511 | 36159 | 34983 | 33332 | 33038 | 31695 | 31631 | 16220 | 15557 | 14439 | 13905 | 7033 | 2071 | 811 | 456 | 339 | 292 | 274 | 272 | 271 | 220 | 204 | 198 | 198 | 156 | 154 | 76 | 46 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 603 | 767 | 565 | 346 | 39292 | 279 | 352 | 336 | 460 | 720 | 211 | 36 | 0 | 103 | 121 | 27 | 285 | 222 | 529 | 131 | 136 | 301 | 458 | 75087 | 2 | 11 | 5 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 27 | 44 | 48 | 89 | 116 | 121 | 127 | 112 | 117 | 137 | 151 | 140 | 146 | 180 | 184 | 316 | 530 | 98 | 176 | 62 | 0 | 549 |
### windows
| Engine | v8 | jsc | bun | dune | node | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.19 | 0.10.0 | 24.4.1 | 2.4.2 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0 | 0.6.2.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 52.6M | 122.8M | 132.1M | 78.7M | 115.9M | 143.1M | 14.4M | 51.3M | 72.8M | 196.1M | 338M | 112.8M | 38.1M | 11.8M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.3M | 48.4M | 84.9M | 110.8M | 342.9K | 33.8M | 42.6M | 349.1K | 320.6M | 3M | 5.7M | 4.9M | 1.5M | 13.1M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 25M | 122.5M | 19.8M | 30.3M | 31.1M | 32.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.3M | 109.8M | 32.4M | 6.9M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 35606 | 36439 | 37201 | 32559 | 27754 | 33615 | 24482 | 13157 | 14082 | 41956 | 8709 | 631 | 448 | 513 | 445 | 388 | 426 | 212 | 226 | 199 | 106 | 54 | 47 | 0 | 0 | 0 | 0 | 20 |
| DeltaBlue | 91726 | 47664 | 46507 | 78363 | 71216 | 76651 | 29423 | 13204 | 13105 | 30364 | 502 | 624 | 403 | 467 | 410 | 377 | 397 | 259 | 337 | 237 | 100 | 51 | 42 | 0 | 0 | 0 | 0 | 24 |
| Crypto | 43055 | 48821 | 43784 | 42211 | 42100 | 38576 | 33464 | 20227 | 17755 | 19940 | 3062 | 779 | 428 | 541 | 514 | 428 | 374 | 318 | 183 | 115 | 92 | 59 | 74 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 102488 | 104856 | 101943 | 65119 | 67857 | 58459 | 50786 | 27454 | 27130 | 2661 | 1228 | 1013 | 741 | 540 | 596 | 563 | 585 | 439 | 451 | 233 | 266 | 128 | 133 | 0 | 0 | 0 | 0 | 75 |
| EarleyBoyer | 81187 | 60257 | 58723 | 73074 | 72468 | 69054 | 43210 | 39616 | 37405 | 26781 | 1777 | 2258 | 1138 | 1005 | 987 | 1011 | 991 | 518 | 563 | 462 | 298 | 126 | 146 | 0 | 0 | 0 | 0 | 69 |
| RegExp | 9880 | 19638 | 17473 | 9761 | 9900 | 9738 | 10203 | 8654 | 8874 | 982 | 915 | 407 | 197 | 185 | 173 | 191 | 188 | 109 | 199 | 201 | 278 | 90 | 43 | 0 | 0 | 0 | 0 | 0 |
| Splay | 39776 | 35555 | 34870 | 28123 | 33379 | 33199 | 28424 | 23950 | 14766 | 2406 | 5446 | 2437 | 1490 | 1038 | 978 | 1351 | 993 | 1009 | 619 | 787 | 411 | 331 | 167 | 0 | 0 | 0 | 0 | 57 |
| NavierStokes | 39029 | 34030 | 40136 | 39060 | 38842 | 39060 | 36655 | 22408 | 22193 | 25228 | 2888 | 1093 | 735 | 1037 | 751 | 716 | 659 | 1084 | 507 | 194 | 152 | 115 | 159 | 0 | 0 | 0 | 0 | 48 |
| Score | 45368 | 43461 | 42718 | 39128 | 38908 | 38734 | 29427 | 19105 | 17708 | 10096 | 2128 | 966 | 587 | 586 | 538 | 533 | 509 | 384 | 349 | 255 | 185 | 99 | 87 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 863 | 353 | 323 | 497 | 335 | 270 | 2043 | 372 | 243 | 51 | 6 | 8 | 15 | 49 | 57 | 12 | 56 | 50 | 46 | 13 | 1 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 37 | 42 | 60 | 59 | 60 | 61 | 64 | 83 | 82 | 121 | 149 | 248 | 278 | 0 | 129 | 0 | 112 | 460 |
