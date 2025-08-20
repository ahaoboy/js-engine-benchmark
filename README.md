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
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 47939<br>56.8M<br>843/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46880<br>36.4M<br>1288/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46364<br>98.4M<br>470/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40120<br>106.5M<br>376/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39706<br>123.1M<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38847<br>66.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38725<br>40.7M<br>952/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19874<br>19.4M<br>1024/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18939<br>39.6M<br>477/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17092<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16946<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11231<br>199.7M<br>56/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2304<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1529<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 859<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 826<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 820<br>4.3M<br>192/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 761<br>831.3K<br>937/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 711<br>1.3M<br>528/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 536<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 388<br>446.6K<br>889/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 387<br>685K<br>578/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 339<br>414.5K<br>837/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 270<br>2.7K<br>102392/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 267<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 185<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/20/2025, 1:47:28 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 106.5M | 123.1M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 106.5M | 123.1M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 10.3M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38183 | 40707 | 41317 | 31362 | 32312 | 32351 | 33562 | 23465 | 13556 | 14326 | 13037 | 35108 | 11028 | 1111 | 685 | 705 | 690 | 630 | 565 | 585 | 581 | 488 | 289 | 277 | 242 | 228 | 79 | 205 | 90 | 98 | 59 | 59 | 269 | 24 |  | 122 |  |
| DeltaBlue | 107554 | 52227 | 51327 | 74310 | 73662 | 71897 | 76148 | 24382 | 13065 | 13019 | 12860 | 26031 | 210 | 1051 | 663 | 676 | 627 | 614 | 543 | 592 | 577 | 467 | 329 | 360 | 356 | 322 | 147 | 248 | 164 | 111 | 54 | 54 | 278 | 29 |  | 184 |  |
| Crypto | 41363 | 51844 | 48968 | 41385 | 41669 | 41464 | 41377 | 32178 | 20092 | 17463 | 17432 | 16489 | 9367 | 1374 | 580 | 587 | 721 | 558 | 882 | 545 | 379 | 901 | 784 | 191 | 189 | 182 | 125 | 122 | 322 | 97 | 80 | 61 | 294 | 31 |  | 136 |  |
| RayTrace | 110850 | 115808 | 106410 | 68079 | 66451 | 67191 | 66155 | 34671 | 27694 | 27030 | 28063 | 8468 | 1358 | 1570 | 1132 | 1047 | 903 | 948 | 682 | 885 | 725 | 550 | 579 | 526 | 512 | 477 | 472 | 269 | 493 | 252 | 162 | 133 | 347 | 91 |  | 425 |  |
| EarleyBoyer | 87094 | 68228 | 66600 | 72846 | 68884 | 73578 | 68317 | 7119 | 37942 | 36467 | 36850 | 33263 | 597 | 3387 | 1850 | 1724 | 1445 | 1367 | 1681 | 1329 | 1217 | 741 | 566 | 527 | 515 | 466 | 580 | 492 | 323 | 281 | 184 | 133 |  | 74 |  | 390 |  |
| RegExp | 10484 | 19768 | 20778 | 10072 | 10112 | 9981 | 8947 | 7870 | 8331 | 8837 | 8745 | 932 | 703 | 552 | 249 | 228 | 223 | 233 | 116 | 226 | 183 | 64 | 130 | 235 | 213 | 195 | 458 | 206 | 96 | 244 | 48 | 93 |  |  |  |  |  |
| Splay | 41772 | 33796 | 35049 | 35872 | 34650 | 28114 | 30804 | 19486 | 23893 | 11625 | 11657 | 2338 | 5367 | 3472 | 2265 | 1897 | 1758 | 1797 | 2094 | 1388 | 1627 | 848 | 1296 | 870 | 1171 | 611 | 909 | 782 | 373 | 455 | 217 | 340 |  | 82 |  | 719 |  |
| NavierStokes | 38842 | 40096 | 39840 | 38842 | 38842 | 38765 | 38397 | 34918 | 22238 | 22090 | 22067 | 27372 | 11973 | 1832 | 949 | 994 | 1284 | 962 | 1214 | 934 | 932 | 1499 | 955 | 474 | 468 | 485 | 171 | 199 | 849 | 164 | 174 | 119 |  | 51 |  | 272 |  |
| Score | 47939 | 46880 | 46364 | 40120 | 39706 | 38847 | 38725 | 19874 | 18939 | 17092 | 16946 | 11231 | 2304 | 1529 | 859 | 826 | 820 | 761 | 741 | 711 | 648 | 536 | 500 | 388 | 387 | 339 | 270 | 267 | 263 | 185 | 105 | 104 |  |  |  |  |  |
| Score/MB | 843 | 1288 | 470 | 376 | 322 | 585 | 952 | 1024 | 477 | 335 | 481 | 56 | 2 | 42 | 70 | 160 | 192 | 937 | 87 | 528 | 328 | 11 | 235 | 889 | 578 | 837 | 102392 | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 48 | 34 | 47 | 50 | 48 | 51 | 61 | 53 | 59 | 86 | 69 | 80 | 81 | 86 | 104 | 115 | 131 | 145 | 240 | 239 | 31 | 418 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | deno | node | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | jjs | txiki.js | quickjs | quickjs-ng | llrt | rquickjs | njs | ladybird | duktape | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.87 | 0.10.1 | 1.2.20 | 2.4.4 | 24.6.0 | 142.0 |  |  | 24.1.2 | 0.12.0 |  |  | 24.12.0 | 2025.04.26 | 0.8.0 | 0.6.2.beta |  | 0.9.2 |  | 2.99.99 | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 85.6M | 111.5M | 131.2M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 0 | 3.6M | 975.9K | 4.1M | 10.5M | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 7.3K | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 85.6M | 111.5M | 65.6M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 0 | 3.6M | 975.9K | 2.1M | 10.5M | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40888 | 37854 | 35877 | 41046 | 37770 | 30847 | 12486 | 12370 | 14311 | 21224 | 1077 | 981 | 1101 | 958 | 963 | 1151 | 777 | 863 | 708 | 626 | 424 | 293 | 94 | 186 | 240 | 144 | 73 | 37 | 177 | 34 |  | 209 |
| DeltaBlue | 53780 | 105557 | 77748 | 56465 | 58038 | 64566 | 15029 | 13865 | 15273 | 3365 | 836 | 1048 | 469 | 973 | 952 | 1029 | 879 | 858 | 615 | 587 | 531 | 506 | 198 | 209 | 254 | 168 | 66 | 37 | 214 | 33 |  | 227 |
| Crypto | 70588 | 60014 | 46182 | 50185 | 42861 | 38376 | 22858 | 20929 | 20757 | 19043 | 1024 | 1534 | 7396 | 918 | 1057 | 1086 | 829 | 844 | 945 | 1253 | 1272 | 269 | 398 | 126 | 145 | 145 | 94 | 35 | 234 | 40 |  | 134 |
| RayTrace | 161984 | 150366 | 89169 | 105152 | 67783 | 74957 | 46619 | 47608 | 36259 | 3442 | 1682 | 1513 | 1305 | 1099 | 1000 | 1440 | 1828 | 1312 | 848 | 871 | 960 | 779 | 556 | 703 | 238 | 297 | 190 | 37 | 302 | 112 |  | 602 |
| EarleyBoyer | 97742 | 107915 | 89766 | 57243 | 80201 | 68365 | 44747 | 45734 | 36106 | 27657 | 4217 | 1472 | 682 | 1983 | 1868 | 1976 | 2580 | 1882 | 2063 | 1172 | 937 | 933 | 383 | 628 | 503 | 369 | 172 | 75 |  | 96 |  | 603 |
| RegExp | 24870 | 12013 | 13665 | 17582 | 10072 | 10957 | 9608 | 9542 | 9029 | 1079 | 646 | 279 | 749 | 252 | 251 | 235 | 211 | 241 | 178 | 86 | 209 | 295 | 267 | 571 | 248 | 180 | 111 | 13 |  |  |  |  |
| Splay | 26256 | 38276 | 28886 | 21057 | 31545 | 26403 | 21196 | 14082 | 12679 | 2767 | 3822 | 4339 | 1246 | 2697 | 2271 | 1662 | 2389 | 1627 | 1640 | 1858 | 1358 | 935 | 462 | 831 | 842 | 469 | 439 | 129 |  | 93 |  | 664 |
| NavierStokes | 34918 | 31164 | 32022 | 24980 | 28703 | 30418 | 18217 | 18180 | 16472 | 20820 | 1226 | 3261 | 1613 | 1937 | 2190 | 1518 | 1507 | 1358 | 1436 | 1567 | 1339 | 633 | 899 | 148 | 244 | 191 | 184 | 63 |  | 68 |  | 257 |
| Score | 52307 | 52275 | 43590 | 39939 | 38329 | 36913 | 20660 | 19280 | 18037 | 7298 | 1452 | 1389 | 1226 | 1119 | 1107 | 1102 | 1092 | 976 | 861 | 766 | 748 | 516 | 339 | 333 | 293 | 223 | 139 | 44 |  |  |  |  |
| Score/MB | 318882935 | 1273 | 767 | 702 | 447 | 330 | 157 | 587 | 389 | 37 | 92 | 789 |  | 310 | 1161 | 267 | 103 | 826 | 358 | 18 | 1362 | 1231 | 214 | 126284 | 23 | 2 | 11 | 41 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 34 | 39 | 52 | 43 | 42 | 42 | 44 | 45 | 55 | 69 | 49 | 60 | 98 | 109 | 101 | 125 | 172 | 676 | 37 | 341 |  | 88 |
### windows
| Engine | v8 | JavaScriptCore | bun | node | dune | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | quickjs-ng | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.87 |  | 1.2.20 | 24.6.0 | 0.10.1 | 2.4.4 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 |  | 0.6.2.beta | 0.8.0 |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 53.1M | 122.1M | 132.7M | 116.3M | 77.6M | 143.1M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 9.3M | 42.2M | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0.4K | 0 |
| Exe size | 29.2M | 337.5K | 112.9M | 85.3M | 47.4M | 110.8M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.1M | 0.4K | 0 |
| Dll size | 23.9M | 121.8M | 19.8M | 31.1M | 30.3M | 32.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 37773 | 36093 | 36718 | 33014 | 33103 | 31309 | 24330 | 13348 | 13266 | 36018 | 6202 | 688 | 514 | 444 | 445 | 388 | 434 | 222 | 212 | 237 | 192 | 100 | 53 | 49 |  | 23 |  |  |
| DeltaBlue | 109134 | 46752 | 44696 | 72029 | 76452 | 60994 | 28583 | 13191 | 12986 | 29594 | 221 | 609 | 465 | 397 | 403 | 364 | 403 | 317 | 260 | 332 | 235 | 118 | 51 | 42 |  | 26 |  |  |
| Crypto | 41146 | 46820 | 43735 | 41974 | 41798 | 41733 | 33198 | 20100 | 16926 | 22002 | 2357 | 789 | 547 | 424 | 515 | 427 | 373 | 190 | 318 | 174 | 114 | 91 | 59 | 74 |  | 30 |  |  |
| RayTrace | 113218 | 103865 | 92351 | 62455 | 67191 | 67857 | 49135 | 28433 | 26143 | 2957 | 2149 | 999 | 547 | 747 | 589 | 602 | 585 | 458 | 435 | 480 | 235 | 264 | 130 | 134 |  | 78 |  |  |
| EarleyBoyer | 88984 | 62467 | 59037 | 69549 | 73137 | 73602 | 43578 | 39328 | 36183 | 22775 | 959 | 2224 | 1008 | 1150 | 997 | 991 | 978 | 562 | 505 | 588 | 465 | 293 | 123 | 136 |  | 68 |  |  |
| RegExp | 10032 | 18839 | 17240 | 9841 | 9709 | 9628 | 10052 | 9201 | 8249 | 946 | 902 | 402 | 190 | 197 | 163 | 182 | 184 | 253 | 109 | 199 | 199 | 275 | 89 | 42 |  |  |  |  |
| Splay | 43011 | 34943 | 31886 | 33436 | 28008 | 33379 | 28383 | 24154 | 12240 | 2184 | 2643 | 2421 | 1024 | 1441 | 969 | 1303 | 1001 | 1173 | 993 | 1173 | 795 | 517 | 320 | 179 |  | 82 |  |  |
| NavierStokes | 38912 | 33835 | 34064 | 38990 | 38803 | 38951 | 36915 | 22216 | 22090 | 24462 | 3579 | 1083 | 1030 | 727 | 747 | 716 | 663 | 470 | 1081 | 460 | 189 | 150 | 116 | 163 |  | 49 |  |  |
| Score | 48108 | 42874 | 40562 | 39188 | 39120 | 38653 | 29145 | 19336 | 16735 | 9723 | 1657 | 969 | 589 | 583 | 532 | 529 | 510 | 385 | 382 | 378 | 253 | 191 | 98 | 87 |  |  |  |  |
| Score/MB | 906 | 351 | 305 | 336 | 503 | 270 | 2023 | 378 | 229 | 49 | 94 | 8 | 49 | 15 | 57 | 12 | 56 | 50 | 50 | 50 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 46 | 41 | 58 | 59 | 61 | 61 | 63 | 80 | 83 | 85 | 123 | 148 | 249 | 288 | 130 | 438 |  |  |
