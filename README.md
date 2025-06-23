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


## Engine & Runtime (27/32)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47510<br>37.4M<br>1268/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46658<br>96.8M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 44638<br>53.3M<br>838/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39849<br>121.4M<br>328/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 38797<br>101.1M<br>383/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 38586<br>67.1M<br>574/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20038<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18900<br>39.7M<br>476/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17026<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11177<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2577<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1557<br>36M<br>43/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 894<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 829<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 774<br>857K<br>924/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 717<br>1.3M<br>532/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 564<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 504<br>2.1M<br>237/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 377<br>414.5K<br>931/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 369<br>685K<br>551/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 270<br>2.1M<br>130/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
6/23/2025, 1:53:10 AM

### ubuntu
| Engine | jsc | bun | v8 | node | deno | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs | mujs(one) | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.17 | 13.6.0 | 24.2.0 | 2.3.6 | 0.10.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.5.1.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 1.3.5 | 0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 37.4M | 96.8M | 53.3M | 121.4M | 101.1M | 67.1M | 19.4M | 39.7M | 35.2M | 199.7M | 1.1G | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 414.5K | 685K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 37.4M | 96.8M | 937.8K | 121.4M | 101.1M | 67.1M | 571K | 39.7M | 35.2M | 1M | 1.1G | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 414.5K | 685K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41466 | 41310 | 35330 | 32044 | 25008 | 31352 | 23614 | 12539 | 12973 | 35627 | 11692 | 1116 | 802 | 676 | 679 | 619 | 591 | 579 | 506 | 291 | 227 | 245 | 193 | 89 | 106 | 60 | 58 | 559 | 131 | 270 | 0 |
| DeltaBlue | 56266 | 54448 | 91732 | 73979 | 73285 | 72809 | 25134 | 13012 | 12953 | 39373 | 350 | 1055 | 729 | 682 | 664 | 618 | 587 | 583 | 465 | 330 | 323 | 360 | 252 | 163 | 118 | 54 | 54 | 519 | 179 | 277 | 0 |
| Crypto | 52217 | 49599 | 42261 | 41258 | 41667 | 41204 | 32058 | 20243 | 17796 | 26172 | 8424 | 1369 | 715 | 601 | 740 | 586 | 541 | 377 | 861 | 790 | 184 | 191 | 122 | 335 | 99 | 79 | 61 | 838 | 124 | 303 | 0 |
| RayTrace | 120988 | 117214 | 105522 | 66969 | 67709 | 67783 | 36075 | 27473 | 28063 | 4515 | 1400 | 1615 | 1194 | 1067 | 888 | 934 | 879 | 678 | 578 | 581 | 489 | 525 | 276 | 506 | 257 | 165 | 140 | 570 | 402 | 346 | 0 |
| EarleyBoyer | 68578 | 65520 | 73495 | 69831 | 73430 | 73810 | 7085 | 38435 | 37164 | 20044 | 891 | 3428 | 1997 | 1761 | 1478 | 1411 | 1370 | 1227 | 761 | 585 | 515 | 527 | 504 | 325 | 285 | 196 | 134 | 0 | 482 | 0 | 0 |
| RegExp | 19931 | 21595 | 10223 | 9991 | 10062 | 9991 | 7690 | 8784 | 8654 | 819 | 654 | 554 | 198 | 228 | 224 | 239 | 226 | 183 | 61 | 130 | 202 | 222 | 207 | 96 | 249 | 48 | 93 | 109 | 0 | 0 | 0 |
| Splay | 36793 | 35106 | 37518 | 35995 | 35473 | 26908 | 18960 | 24292 | 11867 | 3129 | 5077 | 3688 | 1763 | 1958 | 1775 | 1793 | 1464 | 1664 | 1311 | 1307 | 1220 | 667 | 965 | 414 | 440 | 209 | 314 | 1815 | 770 | 0 | 0 |
| NavierStokes | 35022 | 34577 | 38694 | 38655 | 37877 | 38842 | 36655 | 21876 | 22045 | 28613 | 13639 | 1893 | 1173 | 974 | 1287 | 1013 | 934 | 934 | 1420 | 943 | 485 | 495 | 195 | 874 | 166 | 175 | 119 | 1223 | 217 | 0 | 0 |
| Score | 47510 | 46658 | 44638 | 39849 | 38797 | 38586 | 20038 | 18900 | 17026 | 11177 | 2577 | 1557 | 894 | 831 | 829 | 774 | 717 | 645 | 564 | 504 | 377 | 369 | 274 | 270 | 189 | 105 | 103 | 0 | 0 | 0 | 0 |
| Score/MB | 1268 | 482 | 838 | 328 | 383 | 574 | 1032 | 476 | 483 | 55 | 2 | 43 | 75 | 161 | 194 | 924 | 532 | 326 | 12 | 237 | 931 | 551 | 20 | 130 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 25 | 40 | 33 | 48 | 49 | 48 | 50 | 52 | 59 | 88 | 68 | 85 | 80 | 115 | 130 | 141 | 234 | 236 | 54 | 96 | 31 | 0 |
### macos-arm64
| Engine | jsc | bun | dune | node | deno | v8 | mozjs | spidermonkey | graaljs | hermes | jjs | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | duktape | ladybird | mujs | goja | xst | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.17 | 0.10.0 | 24.2.0 | 2.3.6 | 13.6.0 | 0 | 140.0 | 24.1.2 | 0.12.0 | 11.0.27 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2025.04.26 | 0 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 56.1M | 57.4M | 110.6M | 82.4M | 861K | 32.8M | 130.4M | 194M | 15.7M | 653.8M | 3.6M | 4.1M | 10.3M | 975.9K | 1.2M | 1.5M | 562.1K | 41.2M | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 2.4M | 653.8M | 575.4K | 7.3K |
| Exe size | 914.7K | 56.1M | 57.4M | 110.6M | 82.4M | 861K | 32.8M | 65.2M | 147.4K | 7.9M | 653.8M | 3.6M | 2.1M | 10.3M | 975.9K | 1.2M | 1.5M | 562.1K | 41.2M | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 1.8M | 653.8M | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.2M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 50425 | 48508 | 46740 | 41565 | 38281 | 31511 | 15325 | 15360 | 31984 | 1363 | 18113 | 1323 | 1221 | 1062 | 1073 | 1010 | 786 | 539 | 861 | 388 | 332 | 96 | 189 | 105 | 762 | 202 | 189 | 0 |
| DeltaBlue | 72221 | 68650 | 108883 | 91388 | 104929 | 81147 | 17865 | 17191 | 37535 | 1250 | 1236 | 1308 | 1201 | 1124 | 1131 | 1031 | 915 | 636 | 743 | 574 | 395 | 198 | 201 | 99 | 826 | 261 | 223 | 0 |
| Crypto | 71958 | 69975 | 57059 | 56447 | 57090 | 35557 | 22241 | 24378 | 39964 | 1456 | 9888 | 1208 | 1138 | 913 | 1327 | 933 | 1061 | 1380 | 1588 | 301 | 198 | 505 | 174 | 118 | 1220 | 136 | 253 | 0 |
| RayTrace | 174933 | 176117 | 84877 | 84137 | 84211 | 86283 | 50786 | 46868 | 2026 | 2567 | 1211 | 2125 | 1469 | 1802 | 1186 | 1419 | 1135 | 1155 | 1080 | 1011 | 475 | 701 | 413 | 255 | 766 | 646 | 323 | 0 |
| EarleyBoyer | 91528 | 95780 | 91599 | 94511 | 64835 | 74717 | 50027 | 45186 | 38993 | 5220 | 1224 | 3190 | 2394 | 2905 | 2110 | 2295 | 1792 | 1201 | 1237 | 1129 | 850 | 422 | 456 | 251 | 0 | 662 | 0 | 0 |
| RegExp | 30063 | 30336 | 13416 | 14001 | 9599 | 11523 | 12923 | 10595 | 1590 | 692 | 613 | 291 | 274 | 298 | 271 | 271 | 195 | 256 | 93 | 334 | 298 | 311 | 226 | 146 | 200 | 0 | 0 | 0 |
| Splay | 44641 | 44812 | 31814 | 39507 | 44535 | 35025 | 18311 | 24162 | 2872 | 3689 | 834 | 2806 | 2453 | 2657 | 2489 | 2160 | 841 | 2299 | 2249 | 1350 | 1324 | 562 | 602 | 584 | 957 | 875 | 0 | 0 |
| NavierStokes | 32500 | 32054 | 37694 | 37545 | 36545 | 35397 | 21454 | 19550 | 18642 | 1423 | 332 | 2033 | 2139 | 1516 | 2273 | 1620 | 2480 | 1582 | 1971 | 764 | 326 | 1403 | 272 | 230 | 1852 | 283 | 0 | 0 |
| Score | 60647 | 60147 | 49547 | 49390 | 45859 | 41244 | 23008 | 22607 | 11576 | 1821 | 1653 | 1484 | 1305 | 1272 | 1256 | 1147 | 944 | 940 | 931 | 635 | 438 | 404 | 287 | 188 | 0 | 0 | 0 | 0 |
| Score/MB | 643 | 1071 | 863 | 446 | 556 | 49051 | 701 | 173 | 59 | 115 | 2 | 411 | 316 | 123 | 1317 | 971 | 624 | 1712 | 22 | 1515 | 34 | 250 | 3 | 15 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 31 | 53 | 38 | 39 | 38 | 38 | 41 | 47 | 43 | 65 | 54 | 77 | 89 | 100 | 139 | 40 | 82 | 34 | 0 |
### macos-amd64
| Engine | v8 | jsc | bun | dune | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | duktape | primjs | xst | mujs | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 0 | 1.2.17 | 0.10.0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2025.04.26 | 0.8.0 | 0 | 2.99.99 | 0 | 16.9.1 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 89.6M | 61.5M | 60.4M | 92.1M | 113.3M | 20M | 65.2M | 33.8M | 194.4M | 602.8M | 7.9M | 3.7M | 12.1M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 602.8M | 570.8K | 7.3K |
| Exe size | 861K | 1016.1K | 61.5M | 60.4M | 92.1M | 113.3M | 571K | 65.2M | 33.8M | 148.8K | 602.8M | 7.9M | 3.7M | 12.1M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 602.8M | 570.8K | 7.3K |
| Dll size | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 22353 | 27822 | 28598 | 22671 | 29668 | 20874 | 24362 | 9810 | 9380 | 37883 | 13831 | 499 | 433 | 417 | 428 | 448 | 400 | 208 | 259 | 92 | 131 | 145 | 95 | 46 | 24 | 393 | 88 | 113 | 0 |
| DeltaBlue | 81828 | 34619 | 44689 | 55731 | 53199 | 53225 | 20649 | 10916 | 10076 | 37700 | 270 | 562 | 525 | 493 | 484 | 471 | 436 | 235 | 288 | 143 | 192 | 171 | 105 | 41 | 20 | 423 | 124 | 128 | 0 |
| Crypto | 41940 | 36838 | 41217 | 34751 | 32458 | 32832 | 28048 | 15657 | 12538 | 22318 | 6899 | 530 | 297 | 282 | 336 | 281 | 270 | 347 | 204 | 179 | 107 | 74 | 74 | 51 | 37 | 457 | 80 | 138 | 0 |
| RayTrace | 105226 | 107816 | 97679 | 73185 | 66895 | 60161 | 31418 | 31461 | 30531 | 2880 | 922 | 1079 | 787 | 786 | 431 | 471 | 475 | 441 | 354 | 438 | 324 | 241 | 205 | 114 | 69 | 165 | 313 | 215 | 0 |
| EarleyBoyer | 72313 | 58940 | 56832 | 66298 | 57034 | 56800 | 6217 | 34250 | 30946 | 34814 | 816 | 1755 | 1186 | 1210 | 837 | 823 | 778 | 530 | 571 | 309 | 401 | 421 | 255 | 104 | 74 | 0 | 291 | 0 | 0 |
| RegExp | 8667 | 16927 | 14260 | 8667 | 8555 | 8646 | 5565 | 7910 | 6611 | 1308 | 691 | 277 | 89 | 93 | 84 | 78 | 78 | 104 | 67 | 128 | 95 | 197 | 100 | 50 | 22 | 76 | 0 | 0 | 0 |
| Splay | 41821 | 40200 | 30510 | 30844 | 30942 | 35220 | 20047 | 23551 | 11270 | 2424 | 3472 | 2043 | 1412 | 1505 | 932 | 817 | 805 | 932 | 692 | 285 | 357 | 566 | 479 | 277 | 140 | 215 | 438 | 0 | 0 |
| NavierStokes | 36582 | 33175 | 26606 | 36730 | 35764 | 36210 | 35214 | 24217 | 24165 | 29562 | 13329 | 853 | 611 | 602 | 767 | 601 | 580 | 450 | 333 | 475 | 259 | 126 | 126 | 99 | 77 | 866 | 145 | 0 | 0 |
| Score | 40841 | 38756 | 36829 | 34679 | 34151 | 32905 | 17960 | 17334 | 14556 | 11469 | 2234 | 779 | 514 | 511 | 444 | 415 | 399 | 339 | 288 | 220 | 205 | 201 | 148 | 79 | 47 | 0 | 0 | 0 | 0 |
| Score/MB | 48572 | 432 | 598 | 573 | 370 | 290 | 896 | 265 | 430 | 58 | 3 | 99 | 137 | 42 | 433 | 201 | 323 | 660 | 425 | 136 | 475 | 15 | 2 | 6 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 23 | 42 | 51 | 84 | 81 | 84 | 92 | 92 | 91 | 117 | 141 | 131 | 155 | 188 | 308 | 521 | 86 | 136 | 53 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | node | dune | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.17 | 2.3.6 | 24.2.0 | 0.10.0 | 1.11.24.0 | 140.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 51.5M | 122.8M | 131.7M | 138.2M | 115.7M | 78.7M | 14.4M | 52.1M | 196.1M | 338.1M | 139.1M | 11.8M | 37M | 9.3M | 41.8M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 112M | 105.9M | 84.6M | 48.4M | 342.9K | 33.6M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 1.5M | 12.7M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 23.9M | 122.5M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 18.5M | 195.8M | 17.5M | 136M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 35048 | 36569 | 37035 | 33099 | 33113 | 32781 | 25026 | 13355 | 36014 | 2909 | 692 | 510 | 448 | 445 | 430 | 438 | 211 | 222 | 191 | 95 | 55 | 48 | 0 | 0 | 0 |
| DeltaBlue | 101842 | 46706 | 45595 | 74323 | 74317 | 76234 | 29132 | 11961 | 30646 | 290 | 620 | 468 | 410 | 410 | 370 | 403 | 264 | 324 | 229 | 118 | 51 | 41 | 0 | 0 | 0 |
| Crypto | 42808 | 49268 | 44091 | 42052 | 41884 | 39770 | 33654 | 20398 | 20256 | 2558 | 789 | 544 | 428 | 507 | 410 | 370 | 317 | 184 | 113 | 92 | 59 | 72 | 0 | 0 | 0 |
| RayTrace | 100861 | 102636 | 95829 | 66303 | 65350 | 68079 | 50911 | 27796 | 3933 | 2922 | 1000 | 549 | 743 | 594 | 604 | 578 | 439 | 444 | 230 | 265 | 129 | 130 | 0 | 0 | 0 |
| EarleyBoyer | 80308 | 60993 | 55724 | 66501 | 71321 | 74141 | 42423 | 39087 | 23006 | 1315 | 2248 | 1002 | 1144 | 992 | 994 | 989 | 524 | 557 | 460 | 292 | 125 | 136 | 0 | 0 | 0 |
| RegExp | 9718 | 19131 | 18384 | 9680 | 10021 | 9718 | 10122 | 9010 | 928 | 901 | 406 | 190 | 197 | 171 | 178 | 187 | 108 | 198 | 200 | 275 | 89 | 42 | 0 | 0 | 0 |
| Splay | 39702 | 34968 | 32735 | 36272 | 32806 | 28171 | 22296 | 24415 | 2630 | 4855 | 2328 | 1047 | 1418 | 986 | 1010 | 993 | 1026 | 1156 | 809 | 486 | 322 | 173 | 0 | 0 | 0 |
| NavierStokes | 38951 | 34064 | 34030 | 38990 | 38951 | 39060 | 36952 | 22149 | 22705 | 2390 | 1094 | 1037 | 745 | 751 | 715 | 673 | 1089 | 504 | 189 | 148 | 116 | 152 | 0 | 0 | 0 |
| Score | 45571 | 43144 | 41100 | 39759 | 39685 | 39011 | 28554 | 19037 | 10143 | 1747 | 971 | 590 | 586 | 537 | 516 | 511 | 386 | 374 | 251 | 189 | 98 | 85 | 0 | 0 | 0 |
| Score/MB | 885 | 351 | 312 | 287 | 343 | 495 | 1983 | 365 | 51 | 5 | 6 | 50 | 15 | 57 | 12 | 57 | 50 | 49 | 12 | 1 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 39 | 41 | 58 | 59 | 61 | 61 | 64 | 84 | 82 | 124 | 148 | 247 | 290 | 0 | 132 | 0 |
