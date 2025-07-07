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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47990<br>97.2M<br>493/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47659<br>37.4M<br>1272/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45318<br>53.3M<br>850/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41077<br>103.1M<br>398/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40199<br>121.6M<br>330/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39376<br>67.1M<br>586/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20101<br>19.4M<br>1035/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18955<br>40M<br>473/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17111<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 13349<br>199.7M<br>66/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2733<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 896<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 839<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 835<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>857K<br>922/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 713<br>1.3M<br>529/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 651<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 568<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 506<br>2.1M<br>238/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 358<br>414.5K<br>884/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 270<br>2.1M<br>130/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 106<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
7/7/2025, 1:54:50 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.18 | 0 | 13.6.0 | 2.4.0 | 24.3.0 | 0.10.0 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.5.1.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 97.2M | 37.4M | 53.3M | 103.1M | 121.6M | 67.1M | 19.4M | 40M | 35.2M | 199.7M | 1.1G | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 97.2M | 37.4M | 937.8K | 103.1M | 121.6M | 67.1M | 571K | 40M | 35.2M | 1M | 1.1G | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41695 | 41148 | 34748 | 32411 | 32340 | 32616 | 23306 | 12952 | 13086 | 35595 | 14089 | 1129 | 807 | 705 | 669 | 612 | 588 | 577 | 497 | 292 | 245 | 227 | 205 | 90 | 106 | 60 | 60 | 545 | 125 | 273 | 0 |
| DeltaBlue | 53185 | 57139 | 95448 | 76406 | 76221 | 75408 | 25225 | 13118 | 12827 | 37535 | 217 | 1058 | 730 | 689 | 667 | 627 | 582 | 581 | 466 | 332 | 352 | 321 | 252 | 165 | 114 | 55 | 56 | 519 | 185 | 266 | 0 |
| Crypto | 50082 | 52380 | 42697 | 41613 | 41780 | 41554 | 31785 | 20275 | 17484 | 28599 | 8510 | 1370 | 695 | 592 | 725 | 578 | 505 | 380 | 916 | 791 | 190 | 184 | 123 | 334 | 99 | 81 | 62 | 804 | 125 | 299 | 0 |
| RayTrace | 117362 | 117066 | 106336 | 69781 | 66525 | 68824 | 35040 | 27722 | 28018 | 5789 | 1285 | 1547 | 1192 | 1097 | 918 | 954 | 889 | 709 | 555 | 578 | 530 | 487 | 277 | 498 | 254 | 165 | 141 | 579 | 409 | 345 | 0 |
| EarleyBoyer | 67620 | 69889 | 80333 | 74293 | 71453 | 74396 | 7183 | 37713 | 37148 | 33838 | 877 | 3373 | 2006 | 1766 | 1492 | 1414 | 1372 | 1225 | 743 | 599 | 534 | 510 | 509 | 327 | 288 | 193 | 142 | 0 | 393 | 0 | 0 |
| RegExp | 21842 | 20042 | 10253 | 10212 | 10032 | 10162 | 7878 | 8828 | 8758 | 1389 | 1016 | 552 | 198 | 223 | 227 | 235 | 225 | 185 | 62 | 136 | 221 | 200 | 210 | 97 | 251 | 48 | 95 | 109 | 0 | 0 | 0 |
| Splay | 36744 | 37592 | 37070 | 38325 | 35783 | 27976 | 19841 | 23795 | 12501 | 2994 | 7110 | 3545 | 1822 | 2029 | 1817 | 1834 | 1499 | 1698 | 1276 | 1300 | 1278 | 862 | 956 | 405 | 470 | 230 | 332 | 1825 | 756 | 0 | 0 |
| NavierStokes | 39771 | 35066 | 38694 | 38765 | 38803 | 38842 | 36249 | 22024 | 21980 | 32402 | 14692 | 1847 | 1178 | 976 | 1293 | 981 | 942 | 931 | 1550 | 919 | 476 | 474 | 200 | 878 | 153 | 173 | 119 | 1185 | 222 | 0 | 0 |
| Score | 47990 | 47659 | 45318 | 41077 | 40199 | 39376 | 20101 | 18955 | 17111 | 13349 | 2733 | 1535 | 896 | 839 | 835 | 772 | 713 | 651 | 568 | 506 | 397 | 358 | 278 | 270 | 188 | 107 | 106 | 0 | 0 | 0 | 0 |
| Score/MB | 493 | 1272 | 850 | 398 | 330 | 586 | 1035 | 473 | 485 | 66 | 2 | 42 | 75 | 162 | 195 | 922 | 529 | 330 | 12 | 238 | 593 | 884 | 21 | 130 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 24 | 37 | 34 | 47 | 50 | 48 | 50 | 53 | 59 | 88 | 67 | 80 | 86 | 113 | 128 | 146 | 234 | 232 | 55 | 95 | 32 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | dune | node | v8 | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | ladybird | primjs | duktape | mujs | goja | xst | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.18 | 2.4.0 | 0.10.0 | 24.3.0 | 13.6.0 | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 0 | 16.9.1 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 56.4M | 83.6M | 57.4M | 110.7M | 861K | 131.5M | 32.8M | 194M | 653.8M | 15.7M | 3.6M | 10.3M | 4.1M | 975.9K | 1.2M | 41.1M | 1.5M | 562.1K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 2.4M | 653.8M | 575.4K | 7.3K |
| Exe size | 914.7K | 56.4M | 83.6M | 57.4M | 110.7M | 861K | 65.7M | 32.8M | 147.4K | 653.8M | 7.9M | 3.6M | 10.3M | 2.1M | 975.9K | 1.2M | 41.1M | 1.5M | 562.1K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 1.8M | 653.8M | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.7M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 51389 | 51947 | 48533 | 47336 | 45607 | 35196 | 15169 | 13891 | 37438 | 20761 | 1305 | 1333 | 1187 | 1250 | 1065 | 982 | 803 | 757 | 537 | 408 | 335 | 114 | 151 | 114 | 763 | 198 | 215 | 0 |
| DeltaBlue | 77814 | 73986 | 104863 | 108473 | 104361 | 98093 | 17270 | 17177 | 53926 | 1362 | 1256 | 1324 | 1246 | 1146 | 1026 | 1028 | 807 | 779 | 632 | 600 | 397 | 226 | 153 | 104 | 836 | 262 | 242 | 0 |
| Crypto | 72778 | 71140 | 58918 | 60685 | 59764 | 37073 | 24423 | 21603 | 46786 | 11608 | 1487 | 1227 | 997 | 965 | 1283 | 917 | 1708 | 1045 | 1390 | 311 | 199 | 557 | 126 | 116 | 1212 | 108 | 272 | 0 |
| RayTrace | 185589 | 175895 | 92129 | 93683 | 96495 | 88651 | 49209 | 46203 | 5540 | 3160 | 2567 | 2151 | 2059 | 1421 | 1184 | 1323 | 1154 | 1226 | 1141 | 1014 | 474 | 752 | 327 | 221 | 738 | 581 | 339 | 0 |
| EarleyBoyer | 107210 | 104667 | 105758 | 105290 | 102108 | 70558 | 52364 | 45148 | 48837 | 1529 | 5231 | 3328 | 3145 | 2308 | 2123 | 2225 | 1475 | 2402 | 1214 | 1111 | 863 | 452 | 346 | 247 | 0 | 676 | 0 | 0 |
| RegExp | 33524 | 32613 | 15350 | 15440 | 15425 | 11740 | 13234 | 11682 | 2017 | 725 | 720 | 315 | 308 | 275 | 263 | 262 | 108 | 175 | 263 | 333 | 297 | 333 | 200 | 132 | 203 | 0 | 0 | 0 |
| Splay | 54715 | 55854 | 52301 | 48609 | 51983 | 41650 | 31716 | 15830 | 4515 | 2897 | 4785 | 3672 | 2648 | 2486 | 2133 | 2109 | 2334 | 797 | 2025 | 1307 | 1389 | 523 | 551 | 436 | 655 | 971 | 0 | 0 |
| NavierStokes | 34030 | 33438 | 40540 | 40580 | 40513 | 36358 | 21432 | 19453 | 34656 | 27103 | 1619 | 2153 | 1340 | 2187 | 2182 | 1661 | 1971 | 2401 | 1571 | 772 | 326 | 1574 | 196 | 212 | 1898 | 279 | 0 | 0 |
| Score | 66032 | 64688 | 55881 | 55772 | 55578 | 44072 | 24911 | 21059 | 17312 | 4164 | 1917 | 1579 | 1341 | 1270 | 1201 | 1122 | 992 | 940 | 927 | 642 | 442 | 437 | 227 | 176 | 0 | 0 | 0 | 0 |
| Score/MB | 700 | 1145 | 668 | 971 | 501 | 52415 | 189 | 641 | 89 | 6 | 122 | 437 | 130 | 308 | 1260 | 950 | 24 | 621 | 1688 | 1532 | 34 | 271 | 3 | 14 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 31 | 29 | 37 | 39 | 40 | 40 | 41 | 58 | 47 | 43 | 54 | 77 | 81 | 125 | 144 | 41 | 87 | 33 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | duktape | primjs | mujs | xst | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.18 | 13.6.0 | 0 | 2.4.0 | 24.3.0 | 0.10.0 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2025.04.26 | 0.8.0 | 0 | 2.99.99 | 0 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 61.9M | 861K | 89.6M | 94.1M | 113.5M | 60.4M | 20M | 65.7M | 33.8M | 194.4M | 602.8M | 7.9M | 3.7M | 12.1M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 602.8M | 570.8K | 7.3K |
| Exe size | 61.9M | 861K | 1016.1K | 94.1M | 113.5M | 60.4M | 571K | 65.7M | 33.8M | 148.8K | 602.8M | 7.9M | 3.7M | 12.1M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 602.8M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 28665 | 22148 | 29396 | 29996 | 21728 | 21284 | 24955 | 9627 | 9496 | 43174 | 10142 | 460 | 453 | 422 | 401 | 430 | 394 | 182 | 253 | 135 | 89 | 143 | 99 | 43 | 25 | 346 | 70 | 112 | 0 |
| DeltaBlue | 44292 | 81471 | 34930 | 50891 | 46818 | 50633 | 22512 | 11181 | 10824 | 49225 | 257 | 476 | 521 | 487 | 448 | 495 | 435 | 207 | 283 | 194 | 136 | 170 | 112 | 40 | 22 | 374 | 96 | 129 | 0 |
| Crypto | 43067 | 42133 | 35560 | 34425 | 33661 | 32159 | 25776 | 15866 | 13106 | 25463 | 5631 | 544 | 280 | 277 | 325 | 280 | 251 | 310 | 198 | 108 | 172 | 72 | 81 | 47 | 39 | 416 | 74 | 139 | 0 |
| RayTrace | 116030 | 105892 | 101822 | 71631 | 70743 | 65267 | 34819 | 31640 | 30932 | 8140 | 798 | 1050 | 823 | 778 | 419 | 481 | 442 | 417 | 345 | 344 | 415 | 241 | 212 | 111 | 74 | 141 | 300 | 216 | 0 |
| EarleyBoyer | 63436 | 71736 | 59316 | 65974 | 62764 | 59332 | 6311 | 34274 | 32464 | 37070 | 665 | 1633 | 1228 | 1189 | 793 | 871 | 609 | 450 | 587 | 410 | 311 | 404 | 249 | 110 | 80 | 0 | 309 | 0 | 0 |
| RegExp | 17257 | 8693 | 17547 | 8828 | 8745 | 7592 | 5252 | 8067 | 7622 | 1412 | 317 | 271 | 87 | 90 | 82 | 76 | 75 | 88 | 76 | 103 | 130 | 170 | 100 | 52 | 21 | 61 | 0 | 0 | 0 |
| Splay | 37298 | 42872 | 38884 | 36777 | 35783 | 23999 | 20678 | 21734 | 13191 | 4140 | 2188 | 2257 | 1467 | 944 | 915 | 873 | 791 | 905 | 601 | 468 | 279 | 529 | 439 | 258 | 129 | 189 | 546 | 0 | 0 |
| NavierStokes | 32698 | 35362 | 32945 | 35474 | 36693 | 32945 | 34804 | 24462 | 24684 | 25918 | 3831 | 788 | 615 | 555 | 757 | 585 | 571 | 404 | 339 | 270 | 521 | 120 | 113 | 102 | 71 | 757 | 145 | 0 | 0 |
| Score | 41304 | 40755 | 38628 | 36062 | 33904 | 30779 | 18198 | 17278 | 15515 | 14934 | 1461 | 748 | 519 | 473 | 427 | 421 | 375 | 303 | 286 | 218 | 218 | 192 | 149 | 78 | 47 | 0 | 0 | 0 | 0 |
| Score/MB | 667 | 48470 | 430 | 383 | 298 | 509 | 907 | 262 | 458 | 76 | 2 | 95 | 138 | 39 | 417 | 204 | 303 | 590 | 422 | 505 | 135 | 14 | 2 | 6 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 23 | 53 | 51 | 84 | 83 | 87 | 92 | 99 | 102 | 111 | 125 | 138 | 161 | 190 | 307 | 521 | 97 | 142 | 52 | 0 |
### windows
| Engine | v8 | bun | jsc | node | dune | deno | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.18 | 0 | 24.3.0 | 0.10.0 | 2.4.0 | 1.11.24.0 | 141.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 52.6M | 131.9M | 122.8M | 115.8M | 78.7M | 140.5M | 14.4M | 51.3M | 196.1M | 338M | 86.6M | 11.8M | 38.1M | 9.3M | 41.8M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 112.2M | 337K | 84.8M | 48.4M | 108.3M | 342.9K | 33.8M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 1.5M | 12.7M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 25M | 19.8M | 122.5M | 31.1M | 30.3M | 32.3M | 14.1M | 17.5M | 195.8M | 17.3M | 83.5M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 34903 | 37268 | 36100 | 33226 | 32446 | 28065 | 24348 | 13122 | 42069 | 5465 | 700 | 502 | 452 | 434 | 434 | 430 | 212 | 229 | 194 | 105 | 55 | 49 | 0 | 0 | 0 |
| DeltaBlue | 83547 | 48107 | 46005 | 73351 | 75183 | 56200 | 28384 | 12807 | 28951 | 216 | 615 | 470 | 403 | 403 | 377 | 403 | 264 | 331 | 230 | 116 | 49 | 42 | 0 | 0 | 0 |
| Crypto | 43085 | 45446 | 48384 | 40585 | 42091 | 41949 | 33670 | 20443 | 21108 | 1512 | 784 | 543 | 421 | 512 | 417 | 369 | 312 | 183 | 110 | 93 | 59 | 75 | 0 | 0 | 0 |
| RayTrace | 100565 | 101378 | 106114 | 66089 | 65793 | 68375 | 52265 | 28359 | 4953 | 1318 | 1019 | 544 | 737 | 587 | 600 | 585 | 440 | 451 | 228 | 266 | 131 | 135 | 0 | 0 | 0 |
| EarleyBoyer | 82154 | 56439 | 61431 | 71405 | 72970 | 73567 | 43075 | 39518 | 24246 | 972 | 2246 | 1008 | 1140 | 986 | 1005 | 984 | 529 | 544 | 456 | 299 | 125 | 141 | 0 | 0 | 0 |
| RegExp | 9790 | 19749 | 19495 | 9961 | 9738 | 9851 | 10193 | 9255 | 1085 | 1011 | 408 | 190 | 195 | 174 | 191 | 186 | 109 | 196 | 197 | 279 | 90 | 43 | 0 | 0 | 0 |
| Splay | 38961 | 35992 | 35041 | 32365 | 28310 | 33525 | 29598 | 24203 | 2896 | 4832 | 2371 | 1039 | 1474 | 978 | 1035 | 1002 | 741 | 583 | 747 | 537 | 327 | 184 | 0 | 0 | 0 |
| NavierStokes | 38990 | 40068 | 33950 | 38951 | 39060 | 39060 | 36989 | 21963 | 27899 | 3975 | 1103 | 1040 | 745 | 729 | 713 | 679 | 1037 | 508 | 183 | 151 | 115 | 165 | 0 | 0 | 0 |
| Score | 44521 | 43691 | 43208 | 39446 | 38960 | 37940 | 29570 | 19261 | 11325 | 1607 | 976 | 589 | 586 | 532 | 525 | 511 | 369 | 344 | 247 | 195 | 98 | 88 | 0 | 0 | 0 |
| Score/MB | 846 | 331 | 351 | 340 | 494 | 269 | 2053 | 375 | 57 | 4 | 11 | 49 | 15 | 57 | 12 | 57 | 48 | 45 | 12 | 2 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 40 | 41 | 58 | 60 | 60 | 61 | 64 | 85 | 82 | 124 | 148 | 249 | 283 | 0 | 132 | 0 |
