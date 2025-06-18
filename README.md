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


## Engine & Runtime (26/31)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46232<br>96.4M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46147<br>37.4M<br>1232/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45662<br>53.3M<br>857/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40267<br>101.1M<br>398/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39426<br>121.4M<br>324/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39265<br>67.1M<br>585/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20166<br>19.4M<br>1039/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19042<br>39.7M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17110<br>35.2M<br>485/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10882<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3104<br>12.5K<br>253962/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1529<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 893<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 837<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 836<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 772<br>857K<br>922/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 722<br>1.3M<br>536/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 651<br>2M<br>330/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 570<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 374<br>414.5K<br>923/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 360<br>685K<br>538/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 279<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 268<br>2.1M<br>129/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 193<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>0K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |

## bench
6/18/2025, 3:31:28 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs | mujs(one) | goja | xst | jint | boa | kiesel | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.16 | 0 | 13.6.0 | 2.3.6 | 24.2.0 | 0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.5.1.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 1.3.5 | 0 | 0 | 16.9.1 | 0 | 0.20.0 | 0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 96.4M | 37.4M | 53.3M | 101.1M | 121.4M | 67.1M | 19.4M | 39.7M | 35.2M | 199.7M | 12.5K | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 414.5K | 685K | 13.2M | 2.1M | 69M | 27M | 12.6M | 0K | 454.2K | 7.3K |
| Exe size | 96.4M | 37.4M | 937.8K | 101.1M | 121.4M | 67.1M | 571K | 39.7M | 35.2M | 1M | 12.5K | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 414.5K | 685K | 13.2M | 2.1M | 69M | 27M | 12.6M | 0K | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41317 | 38546 | 35436 | 33173 | 32015 | 32418 | 23433 | 13485 | 13051 | 35457 | 10128 | 1138 | 800 | 686 | 713 | 612 | 592 | 590 | 512 | 225 | 245 | 206 | 88.5 | 105 | 61 | 59.9 | 0 | 0 | 0 |
| DeltaBlue | 56723 | 53384 | 95653 | 67354 | 73834 | 75546 | 25497 | 13124 | 13038 | 38672 | 553 | 1071 | 723 | 669 | 680 | 622 | 592 | 586 | 474 | 321 | 355 | 254 | 164 | 119 | 55.3 | 56.9 | 0 | 0 | 0 |
| Crypto | 49887 | 52029 | 42267 | 41844 | 41575 | 41430 | 31295 | 20272 | 17728 | 27981 | 7957 | 1365 | 700 | 729 | 591 | 582 | 553 | 380 | 870 | 184 | 188 | 122 | 335 | 101 | 80.7 | 62.3 | 0 | 0 | 0 |
| RayTrace | 107594 | 117584 | 107224 | 67783 | 66081 | 68523 | 36333 | 27030 | 27473 | 3758 | 1211 | 1544 | 1191 | 895 | 1062 | 940 | 891 | 717 | 582 | 485 | 508 | 276 | 502 | 257 | 164 | 142 | 0 | 0 | 0 |
| EarleyBoyer | 65109 | 64763 | 79700 | 73704 | 66127 | 74501 | 7156 | 38311 | 36939 | 28218 | 1460 | 3372 | 2006 | 1471 | 1762 | 1378 | 1355 | 1229 | 765 | 484 | 483 | 509 | 316 | 292 | 188 | 136 | 0 | 0 | 0 |
| RegExp | 20820 | 19780 | 10233 | 10183 | 10052 | 10102 | 7736 | 8892 | 8775 | 975 | 939 | 547 | 199 | 230 | 228 | 240 | 227 | 181 | 61.9 | 195 | 209 | 208 | 97.5 | 247 | 48.8 | 95.6 | 0 | 0 | 0 |
| Splay | 35318 | 36410 | 38945 | 37413 | 34886 | 28204 | 20002 | 23893 | 12378 | 3064 | 7342 | 3398 | 1881 | 1828 | 1978 | 1817 | 1488 | 1653 | 1358 | 1279 | 703 | 973 | 401 | 489 | 233 | 329 | 0 | 0 | 0 |
| NavierStokes | 34656 | 35022 | 38732 | 38842 | 38765 | 38287 | 36358 | 21898 | 22090 | 16176 | 15863 | 1858 | 1123 | 1298 | 984 | 1007 | 938 | 933 | 1413 | 493 | 482 | 201 | 888 | 169 | 174 | 118 | 0 | 0 | 0 |
| Score | 46232 | 46147 | 45662 | 40267 | 39426 | 39265 | 20166 | 19042 | 17110 | 10882 | 3104 | 1529 | 893 | 837 | 836 | 772 | 722 | 651 | 570 | 374 | 360 | 279 | 268 | 193 | 107 | 105 | 0 | 0 | 0 |
| Score/MB | 479 | 1232 | 857 | 398 | 324 | 585 | 1039 | 479 | 485 | 54 | 253962 | 42 | 75 | 196 | 161 | 922 | 536 | 330 | 12 | 923 | 538 | 21 | 129 | 2 | 3 | 8 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 24 | 34 | 33 | 48 | 48 | 49 | 51 | 52 | 59 | 89 | 85 | 83 | 113 | 130 | 141 | 237 | 233 | 0 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | dune | node | v8 | mozjs | spidermonkey | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | ladybird | primjs | mujs | goja | xst | jint | kiesel | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 2.3.6 | 0 | 24.2.0 | 13.6.0 | 0 | 140.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 55.8M | 82.4M | 57.4M | 110.6M | 861K | 32.8M | 130.4M | 194M | 132.5K | 15.7M | 3.6M | 10.3M | 4.1M | 975.9K | 1.2M | 41.2M | 1.5M | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 0K | 575.4K | 7.3K |
| Exe size | 914.7K | 55.8M | 82.4M | 57.4M | 110.6M | 861K | 32.8M | 65.2M | 147.4K | 132.5K | 7.9M | 3.6M | 10.3M | 2.1M | 975.9K | 1.2M | 41.2M | 1.5M | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 0K | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.2M | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 49472 | 48639 | 47118 | 47757 | 41310 | 31585 | 15046 | 14643 | 33978 | 18791 | 1179 | 1253 | 1080 | 1142 | 1045 | 1000 | 875 | 740 | 409 | 322 | 84.1 | 158 | 99.7 | 0 | 0 | 0 |
| DeltaBlue | 73431 | 69986 | 101742 | 100096 | 96506 | 87448 | 17098 | 17032 | 30771 | 959 | 1135 | 1291 | 1167 | 1123 | 1037 | 1095 | 734 | 905 | 609 | 387 | 176 | 165 | 89 | 0 | 0 | 0 |
| Crypto | 75985 | 69724 | 56600 | 55516 | 57868 | 34055 | 22854 | 24785 | 35844 | 11624 | 1301 | 1192 | 900 | 1131 | 1292 | 964 | 1614 | 1051 | 310 | 176 | 449 | 145 | 106 | 0 | 0 | 0 |
| RayTrace | 175155 | 171899 | 80807 | 84655 | 83915 | 89317 | 52539 | 48691 | 1915 | 1818 | 2217 | 2143 | 1916 | 1496 | 1114 | 1459 | 1031 | 1260 | 1010 | 386 | 621 | 365 | 227 | 0 | 0 | 0 |
| EarleyBoyer | 95597 | 91995 | 94734 | 93271 | 91161 | 76204 | 49437 | 45991 | 44426 | 983 | 4470 | 3326 | 2817 | 2529 | 2234 | 2249 | 1300 | 1794 | 1132 | 673 | 395 | 405 | 236 | 0 | 0 | 0 |
| RegExp | 27967 | 29516 | 14667 | 14029 | 13287 | 10675 | 12845 | 10932 | 1600 | 582 | 635 | 318 | 301 | 269 | 270 | 250 | 95.7 | 204 | 359 | 284 | 306 | 218 | 134 | 0 | 0 | 0 |
| Splay | 46768 | 46385 | 52684 | 38464 | 40957 | 34308 | 19751 | 25091 | 3216 | 1247 | 4172 | 3472 | 2714 | 2363 | 2385 | 1625 | 2117 | 634 | 1407 | 1285 | 514 | 609 | 448 | 0 | 0 | 0 |
| NavierStokes | 31335 | 31990 | 37581 | 38101 | 40324 | 34474 | 21475 | 18624 | 24783 | 3622 | 1306 | 2160 | 1523 | 2118 | 2210 | 1584 | 1827 | 2402 | 751 | 292 | 1466 | 197 | 220 | 0 | 0 | 0 |
| Score | 60909 | 59839 | 52790 | 50616 | 49946 | 41063 | 23175 | 22708 | 11916 | 2366 | 1667 | 1546 | 1289 | 1284 | 1222 | 1106 | 920 | 916 | 654 | 396 | 373 | 249 | 169 | 0 | 0 | 0 |
| Score/MB | 646 | 1071 | 640 | 881 | 451 | 48836 | 706 | 174 | 61 | 18291 | 106 | 428 | 125 | 311 | 1282 | 936 | 22 | 605 | 1560 | 31 | 231 | 3 | 13 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 41 | 33 | 37 | 38 | 39 | 40 | 42 | 65 | 45 | 54 | 86 | 93 | 115 | 144 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | dune | node | jsc | deno | v8 | ChakraCore | mozjs | spidermonkey | graaljs | jjs | hermes | txiki.js | quickjs | llrt | qjs(ng) | rquickjs | primjs | xst | goja | mujs | jint | kiesel | boa | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.16 | 0 | 24.2.0 | 0 | 2.3.6 | 13.6.0 | 1.13.0.0.beta | 0 | 140.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.5.1.beta | 0.8.0 | 0 | 0 | 16.9.1 | 0 | 1.3.5 | 0 | 0 | 0.20.0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 61.2M | 60.4M | 113.3M | 89.6M | 92.1M | 861K | 20M | 33.8M | 65.2M | 194.4M | 164.4K | 7.9M | 3.7M | 1M | 12.1M | 2.1M | 1.2M | 693.4K | 1.6M | 13.1M | 441.8K | 68.9M | 12.9M | 25.3M | 0K | 570.8K | 7.3K |
| Exe size | 61.2M | 60.4M | 113.3M | 1016.1K | 92.1M | 861K | 571K | 33.8M | 65.2M | 148.8K | 164.4K | 7.9M | 3.7M | 1M | 12.1M | 2.1M | 1.2M | 693.4K | 1.6M | 13.1M | 441.8K | 68.9M | 12.9M | 25.3M | 0K | 570.8K | 7.3K |
| Dll size | 0 | 0 | 0 | 88.6M | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 27560 | 21538 | 20821 | 27346 | 28132 | 30466 | 24877 | 9609 | 6687 | 38596 | 12377 | 497 | 390 | 415 | 245 | 404 | 327 | 183 | 85.5 | 144 | 122 | 101 | 48.9 | 18.8 | 0 | 0 | 0 |
| DeltaBlue | 34335 | 54680 | 49450 | 23108 | 36477 | 55063 | 21072 | 10929 | 6334 | 29151 | 263 | 555 | 428 | 464 | 280 | 454 | 341 | 168 | 128 | 169 | 179 | 108 | 47.1 | 17.2 | 0 | 0 | 0 |
| Crypto | 37774 | 33094 | 33038 | 36691 | 31840 | 28183 | 24249 | 13941 | 14199 | 21292 | 6946 | 565 | 250 | 268 | 185 | 258 | 233 | 170 | 163 | 78.9 | 96.6 | 81.2 | 52.2 | 32 | 0 | 0 | 0 |
| RayTrace | 97975 | 71631 | 63713 | 84581 | 54039 | 81769 | 34557 | 31122 | 24469 | 3163 | 768 | 1087 | 701 | 413 | 621 | 429 | 429 | 292 | 439 | 240 | 280 | 213 | 104 | 64.2 | 0 | 0 | 0 |
| EarleyBoyer | 54966 | 65974 | 58330 | 52045 | 60331 | 62614 | 6037 | 33306 | 27933 | 24127 | 743 | 1762 | 1012 | 753 | 894 | 755 | 677 | 519 | 305 | 414 | 343 | 254 | 10 | 81.7 | 0 | 0 | 0 |
| RegExp | 10274 | 8182 | 7855 | 11693 | 8110 | 2972 | 5406 | 7342 | 5187 | 1097 | 339 | 266 | 81.9 | 79.7 | 81.3 | 71.3 | 74.4 | 70.1 | 117 | 191 | 85.2 | 99.3 | 54 | 23.4 | 0 | 0 | 0 |
| Splay | 32882 | 29345 | 32784 | 31146 | 29842 | 30779 | 20935 | 12982 | 17847 | 1871 | 1035 | 2321 | 1346 | 813 | 1425 | 728 | 650 | 621 | 267 | 453 | 309 | 427 | 277 | 120 | 0 | 0 | 0 |
| NavierStokes | 31515 | 36397 | 34178 | 28344 | 34292 | 31164 | 34543 | 23720 | 18734 | 20673 | 8345 | 850 | 592 | 689 | 575 | 550 | 526 | 321 | 482 | 120 | 237 | 119 | 103 | 76.1 | 0 | 0 | 0 |
| Score | 34590 | 33562 | 32047 | 31830 | 31139 | 30189 | 17863 | 15557 | 12783 | 9687 | 1574 | 793 | 458 | 404 | 384 | 380 | 343 | 240 | 209 | 194 | 183 | 149 | 81.4 | 43 | 0 | 0 | 0 |
| Score/MB | 565 | 555 | 282 | 355 | 338 | 35903 | 891 | 460 | 196 | 49 | 9801 | 100 | 122 | 394 | 31 | 184 | 278 | 354 | 130 | 14 | 424 | 2 | 6 | 1 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 23 | 55 | 50 | 89 | 89 | 95 | 97 | 100 | 123 | 146 | 157 | 145 | 189 | 304 | 521 | 0 | 0 | 0 |
### windows
| Engine | v8 | jsc | bun | node | deno | dune | ChakraCore | spidermonkey | graaljs | jjs | hermes | txiki.js | quickjs | llrt | qjs(ng) | rquickjs | mujs | goja | jint | boa | kiesel | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.16 | 24.2.0 | 2.3.6 | 0 | 1.11.24.0 | 140.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 2025.04.26 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0 | 0.20.0 | 0 | 0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 130.9M | 115.7M | 138.2M | 78.7M | 14.4M | 52.1M | 196.1M | 17.4M | 86.6M | 38.1M | 11.8M | 41.8M | 9M | 8M | 7.5M | 19.5M | 96.1M | 42.4M | 46.3M | 0K | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 111.1M | 84.6M | 105.9M | 48.4M | 342.9K | 33.6M | 349.1K | 23.6K | 3M | 5.7M | 4.9M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 68.8M | 27.4M | 33.2M | 0K | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 18.5M | 195.8M | 17.3M | 83.5M | 32.3M | 6.9M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 27.3M | 15M | 13.2M | 0 | 4.7M | 0 |
| Richards | 36068 | 36446 | 36795 | 32905 | 32852 | 31331 | 24072 | 12935 | 36025 | 7276 | 700 | 452 | 504 | 430 | 431 | 367 | 237 | 187 | 105 | 49.9 | 55.7 | 0 | 0 | 0 |
| DeltaBlue | 90701 | 47195 | 45879 | 76631 | 77431 | 73173 | 29859 | 13131 | 28768 | 235 | 612 | 410 | 454 | 371 | 403 | 417 | 332 | 229 | 119 | 42.7 | 53.5 | 0 | 0 | 0 |
| Crypto | 42889 | 50392 | 45004 | 42098 | 35813 | 42082 | 33699 | 20213 | 21951 | 1704 | 791 | 434 | 543 | 414 | 368 | 321 | 184 | 107 | 90 | 74.7 | 59.3 | 0 | 0 | 0 |
| RayTrace | 102784 | 106114 | 90131 | 65859 | 68301 | 66673 | 52043 | 27602 | 2841 | 2903 | 1010 | 737 | 551 | 604 | 584 | 555 | 445 | 231 | 263 | 134 | 132 | 0 | 0 | 0 |
| EarleyBoyer | 83517 | 63596 | 56859 | 71609 | 74084 | 73432 | 42544 | 38636 | 29697 | 1121 | 2253 | 1142 | 998 | 980 | 984 | 895 | 563 | 462 | 290 | 141 | 124 | 0 | 0 | 0 |
| RegExp | 9841 | 19820 | 19313 | 9941 | 9790 | 9738 | 10173 | 8956 | 986 | 957 | 409 | 195 | 187 | 191 | 189 | 155 | 200 | 203 | 273 | 43.6 | 90.7 | 0 | 0 | 0 |
| Splay | 38725 | 35938 | 35489 | 34617 | 37144 | 27919 | 24659 | 24195 | 2914 | 4782 | 2483 | 1451 | 1027 | 1010 | 1001 | 945 | 577 | 930 | 389 | 169 | 330 | 0 | 0 | 0 |
| NavierStokes | 38912 | 33882 | 34132 | 39099 | 38990 | 38951 | 36915 | 22045 | 29057 | 3931 | 1099 | 743 | 1029 | 710 | 658 | 729 | 512 | 186 | 150 | 168 | 115 | 0 | 0 | 0 |
| Score | 45341 | 44027 | 41680 | 40138 | 39986 | 38671 | 28974 | 19070 | 10607 | 1901 | 981 | 588 | 584 | 520 | 510 | 475 | 348 | 254 | 185 | 88.4 | 10 | 0 | 0 | 0 |
| Score/MB | 862 | 358 | 318 | 346 | 289 | 491 | 2012 | 366 | 54 | 109 | 11 | 15 | 49 | 12 | 56 | 59 | 46 | 12 | 1 | 2 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 44 | 41 | 59 | 58 | 62 | 63 | 68 | 82 | 123 | 147 | 281 | 247 | 0 | 0 | 0 |
