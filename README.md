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


## Engine & Runtime (32/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47739<br>56.8M<br>840/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47373<br>36.4M<br>1301/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47259<br>98.4M<br>480/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40553<br>106.5M<br>380/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39558<br>123.1M<br>321/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38869<br>66.3M<br>586/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38588<br>40.7M<br>949/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19953<br>19.4M<br>1028/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19021<br>39.6M<br>479/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17200<br>35.2M<br>488/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17085<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11242<br>199.7M<br>56/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2148<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1471<br>36M<br>40/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 863<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 833<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 763<br>831.3K<br>939/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 736<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 717<br>1.3M<br>532/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 644<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 538<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 490<br>2.1M<br>230/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 404<br>446.6K<br>926/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 355<br>685K<br>530/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 334<br>414.5K<br>825/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 298<br>2.7K<br>113011/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 186<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 102<br>12.6M<br>8/M | ✅unix<br>❌macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.2M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/19/2025, 8:33:22 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.2M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.2M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37837 | 41194 | 41536 | 33230 | 31542 | 32905 | 32075 | 23479 | 13969 | 13584 | 14078 | 35298 | 13538 | 994 | 681 | 687 | 716 | 627 | 555 | 595 | 578 | 505 | 260 | 271 | 242 | 229 | 130 | 203 | 90 | 100 | 60 | 59 | 273 | 26 |  | 116 |  |
| DeltaBlue | 105266 | 53397 | 53932 | 74026 | 74442 | 74528 | 75441 | 24384 | 12979 | 12714 | 12880 | 38256 | 208 | 985 | 664 | 668 | 671 | 625 | 538 | 592 | 576 | 462 | 310 | 362 | 353 | 321 | 172 | 250 | 163 | 111 | 54 | 54 | 281 | 31 |  | 169 |  |
| Crypto | 41330 | 51428 | 48548 | 41594 | 41288 | 41054 | 41327 | 31729 | 20529 | 17753 | 17802 | 28005 | 8159 | 1333 | 577 | 748 | 591 | 553 | 882 | 540 | 367 | 886 | 787 | 187 | 191 | 180 | 153 | 123 | 323 | 96 | 80 | 60 | 297 | 31 |  | 133 |  |
| RayTrace | 111294 | 119582 | 113292 | 68523 | 66081 | 66895 | 66451 | 35741 | 27500 | 28416 | 27251 | 3312 | 1326 | 1521 | 1139 | 908 | 1053 | 943 | 679 | 900 | 710 | 560 | 562 | 519 | 516 | 444 | 491 | 271 | 496 | 254 | 163 | 132 | 348 | 92 |  | 420 |  |
| EarleyBoyer | 86751 | 68227 | 67424 | 74771 | 70954 | 71342 | 68849 | 7084 | 38042 | 36594 | 36597 | 27220 | 910 | 3235 | 1854 | 1473 | 1753 | 1380 | 1649 | 1331 | 1226 | 765 | 566 | 512 | 513 | 486 | 567 | 497 | 322 | 280 | 188 | 132 |  | 78 |  | 501 |  |
| RegExp | 10435 | 19840 | 21162 | 10052 | 9961 | 10042 | 8828 | 7637 | 8356 | 9047 | 8784 | 1347 | 567 | 548 | 250 | 225 | 227 | 233 | 115 | 229 | 182 | 63 | 134 | 234 | 212 | 195 | 457 | 206 | 95 | 246 | 48 | 92 |  |  |  |  |  |
| Splay | 41917 | 34446 | 35456 | 36149 | 34194 | 27878 | 31765 | 19514 | 23600 | 12008 | 11636 | 2911 | 3969 | 3455 | 2307 | 1736 | 1907 | 1763 | 2090 | 1404 | 1628 | 841 | 1279 | 1305 | 576 | 617 | 864 | 760 | 365 | 478 | 201 | 328 |  | 82 |  | 703 |  |
| NavierStokes | 38803 | 40216 | 39920 | 38397 | 38732 | 38732 | 38321 | 36655 | 22319 | 22112 | 22067 | 19086 | 7264 | 1804 | 966 | 1291 | 1008 | 993 | 1219 | 955 | 933 | 1498 | 953 | 477 | 481 | 452 | 165 | 198 | 830 | 158 | 177 | 119 |  | 52 |  | 151 |  |
| Score | 47739 | 47373 | 47259 | 40553 | 39558 | 38869 | 38588 | 19953 | 19021 | 17200 | 17085 | 11242 | 2148 | 1471 | 863 | 833 | 831 | 763 | 736 | 717 | 644 | 538 | 490 | 404 | 355 | 334 | 298 | 267 | 262 | 186 | 104 | 102 |  |  |  |  |  |
| Score/MB | 840 | 1301 | 480 | 380 | 321 | 586 | 949 | 1028 | 479 | 488 | 335 | 56 | 1 | 40 | 70 | 195 | 161 | 939 | 87 | 532 | 326 | 11 | 230 | 926 | 530 | 825 | 113011 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 38 | 33 | 46 | 48 | 49 | 51 | 62 | 53 | 60 | 87 | 68 | 82 | 82 | 88 | 100 | 115 | 132 | 146 | 238 | 243 | 31 | 404 |  | 103 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | bun | dune | node | deno | spidermonkey | mozjs | spiderfire | graaljs | jjs | primjs | hermes | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | njs | ladybird | duktape | mujs | xst | goja | ringo | jint | hako | JerryScript | nova | engine262 | kiesel | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.87 | 1.2.20 | 0.10.1 | 24.6.0 | 2.4.4 | 142.0 |  |  | 24.1.2 |  |  | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 |  | 2.99.99 | 1.3.5 | 16.9.1 |  | 4.0.0 |  |  | 3.0.0 |  | 0.0.1 | 0.1.0.dev |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 111.5M | 85.6M | 131.2M | 32.8M | 46.3M | 194M | 0 | 1.8M | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 1.1M | 575.4K | 8.4M | 7.3K | 12.4M | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 111.5M | 85.6M | 65.6M | 32.8M | 46.3M | 147.4K | 0 | 1.8M | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 1.1M | 575.4K | 8.4M | 7.3K | 12.4M | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 52551 | 46122 | 44918 | 48381 | 45070 | 47870 | 14965 | 15272 | 15229 | 29311 | 20486 | 1193 | 1284 | 1297 | 1025 | 1274 | 1142 | 1096 | 773 | 833 | 539 | 374 | 119 | 335 | 227 | 157 | 37 | 217 | 41 |  | 114 | 232 |
| DeltaBlue | 75011 | 138273 | 58369 | 112685 | 96003 | 97022 | 17415 | 17746 | 17144 | 35803 | 1488 | 1225 | 1196 | 1278 | 1068 | 1202 | 1156 | 1121 | 854 | 785 | 627 | 587 | 226 | 398 | 255 | 168 | 41 | 242 | 52 |  | 103 | 263 |
| Crypto | 78587 | 64783 | 67489 | 60187 | 59164 | 58583 | 26542 | 22784 | 22066 | 40894 | 14826 | 1815 | 1357 | 1198 | 978 | 1215 | 1392 | 1006 | 1219 | 1643 | 1389 | 299 | 560 | 200 | 162 | 144 | 42 | 272 | 46 |  | 116 | 145 |
| RayTrace | 192397 | 161984 | 140746 | 96273 | 93091 | 90797 | 51577 | 51503 | 42729 | 1759 | 2093 | 2039 | 2338 | 2115 | 2031 | 1562 | 1265 | 1455 | 1060 | 1133 | 1129 | 930 | 749 | 472 | 774 | 375 | 43 | 330 | 163 |  | 252 | 696 |
| EarleyBoyer | 110281 | 120399 | 92888 | 106321 | 99925 | 91151 | 52404 | 49734 | 48270 | 48990 | 1323 | 3867 | 4927 | 3205 | 3024 | 2618 | 2311 | 2338 | 2655 | 1447 | 1207 | 1106 | 450 | 860 | 788 | 407 | 92 |  | 128 |  | 250 | 711 |
| RegExp | 31580 | 15380 | 30548 | 15456 | 15244 | 13819 | 13312 | 12678 | 12819 | 1515 | 1589 | 333 | 657 | 316 | 315 | 279 | 286 | 280 | 218 | 109 | 260 | 360 | 333 | 315 | 651 | 223 | 15 |  |  |  |  |  |
| Splay | 57451 | 72723 | 52480 | 48031 | 48976 | 48601 | 26232 | 19713 | 19248 | 2471 | 4238 | 5316 | 3896 | 3651 | 4075 | 2499 | 2621 | 2380 | 1938 | 2239 | 2367 | 1192 | 610 | 1301 | 1236 | 554 | 149 |  | 142 |  |  | 1160 |
| NavierStokes | 34474 | 40810 | 40136 | 40688 | 40473 | 35841 | 20545 | 21475 | 20841 | 22216 | 24241 | 4027 | 1597 | 2142 | 1648 | 2161 | 2386 | 1737 | 1896 | 2017 | 1580 | 754 | 1571 | 332 | 237 | 198 | 79 |  | 82 |  |  | 319 |
| Score | 67103 | 66176 | 59101 | 56335 | 53967 | 52090 | 24600 | 23233 | 22298 | 11509 | 4610 | 1870 | 1774 | 1549 | 1390 | 1357 | 1327 | 1219 | 1077 | 982 | 942 | 620 | 448 | 442 | 426 | 248 | 51 |  |  |  |  |  |
| Score/MB | 409084856 | 1611 | 1040 | 991 | 483 | 608 | 187 | 707 | 481 | 59 |  | 1062 | 112 | 429 | 132 | 329 | 1392 | 1032 | 448 | 23 | 1715 | 1479 | 278 | 34 | 161552 | 3 | 48 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 32 | 35 | 31 | 37 | 37 | 39 | 36 | 40 | 47 | 59 | 43 | 54 | 80 | 75 | 79 | 115 | 533 | 33 | 267 |  | 88 | 75 |
### windows
| Engine | v8 | JavaScriptCore | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | mujs-pgo | mujs | duktape | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.87 |  | 1.2.20 | 24.6.0 | 2.4.4 | 0.10.1 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 |  |  | 1.3.5 | 2.7.0 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.1M | 122.1M | 132.7M | 116.3M | 143.1M | 77.6M | 14.4M | 52.2M | 72.8M | 196.1M | 17.5M | 86.7M | 11.8M | 37M | 42.2M | 9M | 8M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0.4K | 0 |
| Exe size | 29.2M | 337.5K | 112.9M | 85.3M | 110.8M | 47.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 1.3M | 744.6K | 692.1K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.1M | 0.4K | 0 |
| Dll size | 25M | 121.8M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 18.5M | 30.2M | 195.8M | 17.5M | 83.6M | 6.9M | 31.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38596 | 35076 | 36891 | 33092 | 32898 | 33371 | 24778 | 12645 | 13687 | 36170 | 4535 | 701 | 508 | 452 | 384 | 423 | 384 | 233 | 236 | 212 | 189 | 94 | 55 | 49 |  | 23 |  |  |
| DeltaBlue | 107481 | 47512 | 37687 | 75513 | 74469 | 76115 | 28913 | 13138 | 13111 | 33006 | 183 | 612 | 461 | 410 | 377 | 403 | 417 | 324 | 350 | 257 | 223 | 117 | 51 | 41 |  | 27 |  |  |
| Crypto | 41657 | 49191 | 45629 | 42053 | 37235 | 40110 | 33463 | 20088 | 17840 | 20372 | 1625 | 789 | 546 | 429 | 427 | 367 | 318 | 187 | 182 | 313 | 114 | 92 | 59 | 75 |  | 30 |  |  |
| RayTrace | 113514 | 104486 | 101526 | 66229 | 68005 | 66377 | 51355 | 28046 | 26788 | 3889 | 1577 | 1012 | 551 | 739 | 615 | 586 | 548 | 468 | 487 | 437 | 230 | 267 | 130 | 133 |  | 82 |  |  |
| EarleyBoyer | 85227 | 63864 | 57981 | 72466 | 73218 | 73566 | 42080 | 39101 | 36758 | 28793 | 718 | 2246 | 985 | 1128 | 1003 | 982 | 891 | 580 | 590 | 524 | 462 | 299 | 125 | 143 |  | 71 |  |  |
| RegExp | 10112 | 18983 | 17348 | 9900 | 9656 | 9748 | 10132 | 9110 | 9010 | 1009 | 555 | 406 | 188 | 195 | 182 | 187 | 155 | 254 | 201 | 109 | 199 | 275 | 90 | 43 |  |  |  |  |
| Splay | 43858 | 36516 | 33126 | 33297 | 33240 | 28343 | 18282 | 24211 | 15141 | 2613 | 928 | 2389 | 1049 | 1425 | 1311 | 1010 | 940 | 1162 | 1188 | 1000 | 767 | 422 | 325 | 188 |  | 82 |  |  |
| NavierStokes | 39060 | 39800 | 34132 | 38990 | 38990 | 38951 | 36952 | 22489 | 22112 | 22090 | 2389 | 1081 | 1033 | 741 | 720 | 681 | 728 | 477 | 480 | 957 | 193 | 151 | 116 | 167 |  | 49 |  |  |
| Score | 48164 | 44396 | 40560 | 39945 | 39295 | 39001 | 27779 | 19159 | 17671 | 10594 | 1082 | 974 | 587 | 585 | 533 | 511 | 476 | 390 | 386 | 377 | 249 | 186 | 99 | 89 |  |  |  |  |
| Score/MB | 889 | 363 | 305 | 343 | 274 | 502 | 1928 | 367 | 242 | 54 | 61 | 11 | 49 | 15 | 12 | 57 | 59 | 51 | 51 | 49 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 49 | 42 | 58 | 60 | 60 | 63 | 68 | 78 | 82 | 85 | 121 | 147 | 247 | 279 | 128 | 432 |  |  |
