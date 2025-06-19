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


## Engine & Runtime (27/31)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 48307<br>96.4M<br>500/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47392<br>37.4M<br>1265/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46007<br>53.3M<br>863/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41076<br>101.1M<br>406/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40407<br>121.4M<br>332/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39836<br>67.1M<br>593/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20383<br>19.4M<br>1050/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18990<br>39.7M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17265<br>35.2M<br>490/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12704<br>199.7M<br>63/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 3315<br>12.5K<br>271225/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1556<br>36M<br>43/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 908<br>11.9M<br>76/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 847<br>5.2M<br>164/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 843<br>4.3M<br>197/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 735<br>857K<br>878/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 727<br>1.3M<br>540/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 659<br>2M<br>334/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 561<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 382<br>685K<br>571/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 361<br>339.9K<br>1087/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 355<br>414.5K<br>877/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 283<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 272<br>2.1M<br>130/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 193<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 109<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 106<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>0K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |

## bench
6/19/2025, 2:55:43 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | duktape | mujs | goja | xst | jint | boa | kiesel | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.16 | 0 | 13.6.0 | 2.3.6 | 24.2.0 | 0.10.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | . | 0.12.0 | 0.5.1.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 0 | 2.7.0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 1.7.15 | 3.0.0 | 0.0.1 |
| Total size | 96.4M | 37.4M | 53.3M | 101.1M | 121.4M | 67.1M | 19.4M | 39.7M | 35.2M | 199.7M | 12.5K | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 685K | 339.9K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 0K | 454.2K | 7.3K |
| Exe size | 96.4M | 37.4M | 937.8K | 101.1M | 121.4M | 67.1M | 571K | 39.7M | 35.2M | 1M | 12.5K | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 685K | 339.9K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 0K | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41374 | 40336 | 35281 | 33685 | 32072 | 33240 | 23137 | 12666 | 13221 | 35697 | 13514 | 1133 | 812 | 708 | 691 | 560 | 583 | 580 | 509 | 248 | 194 | 224 | 206 | 90.8 | 106 | 61.7 | 61.4 | 0 | 0 | 0 |
| DeltaBlue | 53681 | 54858 | 97372 | 76849 | 76446 | 75189 | 25998 | 13098 | 13124 | 26936 | 482 | 1054 | 732 | 693 | 672 | 595 | 600 | 586 | 476 | 363 | 230 | 327 | 255 | 165 | 115 | 55.8 | 56.2 | 0 | 0 | 0 |
| Crypto | 49987 | 52572 | 42961 | 41790 | 41403 | 41958 | 32045 | 20285 | 17808 | 11895 | 10503 | 1370 | 701 | 596 | 750 | 525 | 545 | 380 | 873 | 187 | 288 | 184 | 124 | 336 | 101 | 81.4 | 62.3 | 0 | 0 | 0 |
| RayTrace | 119582 | 118250 | 108038 | 68005 | 67191 | 70521 | 36037 | 26862 | 27972 | 17242 | 1585 | 1582 | 1198 | 1083 | 910 | 863 | 887 | 750 | 586 | 525 | 473 | 494 | 278 | 509 | 258 | 166 | 139 | 0 | 0 | 0 |
| EarleyBoyer | 66738 | 68169 | 80581 | 75100 | 71488 | 74311 | 7104 | 38291 | 37326 | 29468 | 1209 | 3386 | 2031 | 1801 | 1507 | 1380 | 1397 | 1238 | 794 | 552 | 544 | 520 | 517 | 330 | 293 | 201 | 141 | 0 | 0 | 0 |
| RegExp | 21681 | 20588 | 10274 | 10294 | 10243 | 10032 | 7929 | 8874 | 8745 | 1413 | 1007 | 558 | 199 | 230 | 223 | 236 | 229 | 183 | 62.5 | 222 | 110 | 204 | 213 | 98.4 | 250 | 49.7 | 96.9 | 0 | 0 | 0 |
| Splay | 37355 | 37624 | 39262 | 36964 | 36492 | 29614 | 20560 | 24969 | 12680 | 2372 | 7188 | 3729 | 1899 | 2052 | 1848 | 1820 | 1522 | 1722 | 1112 | 862 | 920 | 738 | 1009 | 409 | 515 | 237 | 333 | 0 | 0 | 0 |
| NavierStokes | 41321 | 35031 | 38732 | 38545 | 38990 | 38842 | 37026 | 22045 | 22067 | 34839 | 15372 | 1886 | 1205 | 988 | 1296 | 950 | 946 | 935 | 1425 | 486 | 868 | 488 | 204 | 891 | 164 | 177 | 121 | 0 | 0 | 0 |
| Score | 48307 | 47392 | 46007 | 41076 | 40407 | 39836 | 20383 | 18990 | 17265 | 12704 | 3315 | 1556 | 908 | 847 | 843 | 735 | 727 | 659 | 561 | 382 | 361 | 355 | 283 | 272 | 193 | 109 | 106 | 0 | 0 | 0 |
| Score/MB | 500 | 1265 | 863 | 406 | 332 | 593 | 1050 | 478 | 490 | 63 | 271225 | 43 | 76 | 164 | 197 | 878 | 540 | 334 | 12 | 571 | 1087 | 877 | 21 | 130 | 2 | 4 | 8 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 23 | 40 | 33 | 48 | 49 | 48 | 51 | 52 | 58 | 88 | 80 | 85 | 83 | 112 | 128 | 143 | 229 | 231 | 0 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | node | dune | deno | v8 | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | ladybird | primjs | duktape | mujs | goja | xst | jint | kiesel | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 24.2.0 | 0.10.0 | 2.3.6 | 13.6.0 | 140.0 | 0 | 24.1.2 | . | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2025.04.26 | 0 | 0 | 0 | 2.7.0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.1.0.dev | 1.7.15 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 55.8M | 110.6M | 57.4M | 82.4M | 861K | 130.4M | 32.8M | 194M | 132.5K | 15.7M | 3.6M | 4.1M | 10.3M | 975.9K | 1.2M | 41.2M | 1.5M | 371.3K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 0K | 575.4K | 7.3K |
| Exe size | 914.7K | 55.8M | 110.6M | 57.4M | 82.4M | 861K | 65.2M | 32.8M | 147.4K | 132.5K | 7.9M | 3.6M | 2.1M | 10.3M | 975.9K | 1.2M | 41.2M | 1.5M | 371.3K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 0K | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.2M | 0 | 193.8M | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 47672 | 51015 | 43637 | 44075 | 37971 | 33117 | 14354 | 15385 | 35320 | 14527 | 1284 | 1338 | 1330 | 1134 | 1059 | 1010 | 881 | 822 | 350 | 410 | 328 | 113 | 161 | 115 | 0 | 0 | 0 |
| DeltaBlue | 73100 | 67473 | 100413 | 97008 | 83256 | 85021 | 16331 | 17825 | 40061 | 284 | 1190 | 1337 | 1248 | 1129 | 1012 | 1038 | 732 | 914 | 437 | 575 | 377 | 225 | 169 | 104 | 0 | 0 | 0 |
| Crypto | 71438 | 65294 | 55807 | 58852 | 54730 | 33838 | 24755 | 22126 | 33918 | 7753 | 1448 | 1234 | 1212 | 951 | 1294 | 953 | 1620 | 1057 | 569 | 309 | 197 | 532 | 141 | 117 | 0 | 0 | 0 |
| RayTrace | 167460 | 168791 | 87615 | 88429 | 82509 | 81325 | 48913 | 51947 | 2799 | 1282 | 2368 | 2173 | 1530 | 1941 | 1229 | 1431 | 1099 | 1466 | 870 | 993 | 460 | 714 | 354 | 254 | 0 | 0 | 0 |
| EarleyBoyer | 95775 | 86163 | 86249 | 87013 | 92911 | 68983 | 48695 | 50329 | 37420 | 991 | 4279 | 3317 | 2626 | 2911 | 2142 | 2250 | 1376 | 1476 | 998 | 1137 | 635 | 427 | 392 | 247 | 0 | 0 | 0 |
| RegExp | 29639 | 23911 | 13792 | 12534 | 12146 | 10525 | 11965 | 12949 | 1438 | 1075 | 673 | 311 | 275 | 307 | 274 | 280 | 99.3 | 190 | 224 | 329 | 278 | 325 | 217 | 147 | 0 | 0 | 0 |
| Splay | 38154 | 39010 | 42595 | 30054 | 34837 | 33835 | 28506 | 18558 | 3110 | 3232 | 3945 | 3558 | 2502 | 2968 | 2591 | 2353 | 1952 | 488 | 1874 | 1433 | 1345 | 488 | 563 | 562 | 0 | 0 | 0 |
| NavierStokes | 33175 | 33175 | 37508 | 33984 | 36693 | 34622 | 20290 | 21432 | 28168 | 16011 | 1502 | 2159 | 2192 | 1557 | 2312 | 1717 | 1959 | 2442 | 1534 | 769 | 325 | 1245 | 196 | 230 | 0 | 0 | 0 |
| Score | 59147 | 56314 | 50260 | 47236 | 46155 | 40028 | 23582 | 23122 | 12595 | 2626 | 1754 | 1576 | 1367 | 1330 | 1251 | 1175 | 938 | 889 | 685 | 644 | 414 | 411 | 244 | 189 | 0 | 0 | 0 |
| Score/MB | 627 | 1008 | 454 | 822 | 559 | 47605 | 180 | 704 | 64 | 20301 | 111 | 437 | 331 | 129 | 1312 | 995 | 22 | 587 | 1889 | 1536 | 32 | 255 | 3 | 15 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 33 | 31 | 37 | 38 | 38 | 39 | 41 | 64 | 46 | 51 | 54 | 81 | 86 | 117 | 137 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | duktape | xst | mujs | goja | jint | kiesel | boa | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.16 | 0 | 2.3.6 | 24.2.0 | 0.10.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | . | 0.12.0 | 24.12.0 | 0.5.1.beta | 2025.04.26 | 0.8.0 | 0 | 0 | 2.7.0 | 16.9.1 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 1.7.15 | 3.0.0 | 0.0.1 |
| Total size | 861K | 61.2M | 89.6M | 92.1M | 113.3M | 60.4M | 20M | 65.2M | 33.8M | 194.4M | 164.4K | 7.9M | 3.7M | 12.1M | 1M | 2.1M | 1.2M | 693.4K | 336.3K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 0K | 570.8K | 7.3K |
| Exe size | 861K | 61.2M | 1016.1K | 92.1M | 113.3M | 60.4M | 571K | 65.2M | 33.8M | 148.8K | 164.4K | 7.9M | 3.7M | 12.1M | 1M | 2.1M | 1.2M | 693.4K | 336.3K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 0K | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 35930 | 27931 | 29068 | 31052 | 21382 | 22590 | 25244 | 9489 | 9401 | 43023 | 11286 | 497 | 477 | 426 | 423 | 439 | 407 | 256 | 153 | 93.2 | 143 | 144 | 96.8 | 48.6 | 24.2 | 0 | 0 | 0 |
| DeltaBlue | 81087 | 46845 | 33978 | 52068 | 53357 | 54058 | 23435 | 10929 | 11042 | 53086 | 201 | 567 | 538 | 489 | 485 | 332 | 461 | 287 | 187 | 144 | 198 | 170 | 107 | 46.4 | 21.1 | 0 | 0 | 0 |
| Crypto | 41844 | 41429 | 38193 | 34484 | 34124 | 33199 | 26491 | 15916 | 13892 | 23670 | 6952 | 566 | 300 | 282 | 336 | 264 | 279 | 200 | 214 | 186 | 110 | 77.7 | 79.3 | 53.3 | 38.2 | 0 | 0 | 0 |
| RayTrace | 106558 | 110702 | 103154 | 59569 | 67050 | 52835 | 38772 | 30722 | 29940 | 4648 | 859 | 1085 | 809 | 790 | 427 | 496 | 416 | 355 | 395 | 445 | 316 | 229 | 212 | 119 | 70.9 | 0 | 0 | 0 |
| EarleyBoyer | 69859 | 59845 | 58479 | 63886 | 62404 | 63928 | 6141 | 34662 | 32814 | 39186 | 721 | 1817 | 1210 | 1216 | 826 | 856 | 763 | 600 | 477 | 323 | 405 | 407 | 248 | 115 | 77.6 | 0 | 0 | 0 |
| RegExp | 8603 | 16712 | 16407 | 8758 | 8676 | 8397 | 5306 | 7926 | 7335 | 1422 | 577 | 292 | 92.5 | 93.6 | 84.9 | 80.5 | 72.2 | 79.9 | 97.4 | 130 | 102 | 199 | 99.5 | 53.1 | 23.3 | 0 | 0 | 0 |
| Splay | 42375 | 37910 | 39563 | 33281 | 34039 | 29052 | 20067 | 19110 | 12084 | 2261 | 2860 | 2365 | 1431 | 1485 | 933 | 842 | 782 | 744 | 907 | 318 | 620 | 656 | 437 | 285 | 108 | 0 | 0 | 0 |
| NavierStokes | 36397 | 32961 | 33060 | 36470 | 36470 | 32698 | 35319 | 24289 | 24241 | 30985 | 12269 | 897 | 622 | 599 | 755 | 637 | 526 | 371 | 432 | 519 | 259 | 123 | 121 | 101 | 76.1 | 0 | 0 | 0 |
| Score | 43160 | 40680 | 38556 | 35007 | 33925 | 31973 | 18552 | 16840 | 15326 | 13303 | 1936 | 815 | 530 | 512 | 442 | 404 | 386 | 302 | 285 | 230 | 225 | 203 | 148 | 84.1 | 46.2 | 0 | 0 | 0 |
| Score/MB | 51330 | 665 | 430 | 380 | 299 | 528 | 925 | 258 | 453 | 68 | 12056 | 103 | 141 | 42 | 431 | 195 | 312 | 445 | 867 | 143 | 521 | 15 | 2 | 6 | 1 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 23 | 49 | 48 | 80 | 82 | 85 | 89 | 97 | 107 | 104 | 134 | 127 | 157 | 190 | 294 | 510 | 0 | 0 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | node | dune | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | llrt | qjs(ng) | rquickjs | mujs | duktape | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.16 | 2.3.6 | 24.2.0 | 0.10.0 | 1.11.24.0 | 140.0 | 24.1.2 | 0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 2.7.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 51.5M | 122.8M | 130.9M | 138.2M | 115.7M | 78.7M | 14.4M | 50.9M | 196.1M | 17.4M | 139.1M | 11.8M | 37M | 41.8M | 9M | 8M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 0K | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 111.1M | 105.9M | 84.6M | 48.4M | 342.9K | 33.6M | 349.1K | 23.6K | 3M | 4.9M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 0K | 1.3M | 0.4K |
| Dll size | 23.9M | 122.5M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 195.8M | 17.3M | 136M | 6.9M | 31.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 34977 | 36795 | 37293 | 33632 | 32983 | 29767 | 24327 | 13143 | 36134 | 5928 | 714 | 517 | 452 | 416 | 431 | 381 | 236 | 208 | 198 | 107 | 55.9 | 49.3 | 0 | 0 | 0 |
| DeltaBlue | 100830 | 50448 | 45833 | 74799 | 76234 | 75917 | 28252 | 13045 | 32498 | 251 | 627 | 468 | 403 | 383 | 390 | 417 | 343 | 258 | 232 | 115 | 50.2 | 42.4 | 0 | 0 | 0 |
| Crypto | 43105 | 50249 | 44990 | 41655 | 38759 | 42184 | 34024 | 19823 | 23089 | 2376 | 791 | 551 | 425 | 417 | 363 | 321 | 186 | 318 | 112 | 93.1 | 59.7 | 76 | 0 | 0 | 0 |
| RayTrace | 102044 | 103006 | 85383 | 66902 | 66451 | 66895 | 52191 | 27380 | 2366 | 1337 | 1015 | 546 | 734 | 611 | 580 | 551 | 472 | 435 | 230 | 272 | 127 | 135 | 0 | 0 | 0 |
| EarleyBoyer | 82221 | 63559 | 57179 | 73922 | 72249 | 73577 | 44305 | 38728 | 26135 | 661 | 2244 | 1013 | 1156 | 993 | 988 | 885 | 580 | 522 | 457 | 301 | 127 | 149 | 0 | 0 | 0 |
| RegExp | 9780 | 18801 | 19346 | 9790 | 10011 | 9556 | 9981 | 9173 | 1142 | 953 | 409 | 190 | 196 | 179 | 187 | 155 | 204 | 109 | 202 | 283 | 91.7 | 43.5 | 0 | 0 | 0 |
| Splay | 40305 | 34805 | 34799 | 37510 | 33819 | 28131 | 21514 | 24072 | 2264 | 4811 | 2412 | 1055 | 1459 | 1050 | 1019 | 929 | 1190 | 1018 | 918 | 554 | 329 | 170 | 0 | 0 | 0 |
| NavierStokes | 38990 | 33950 | 34132 | 39248 | 39138 | 39060 | 37100 | 22319 | 22557 | 2791 | 1099 | 1039 | 744 | 713 | 682 | 722 | 506 | 1077 | 192 | 152 | 115 | 166 | 0 | 0 | 0 |
| Score | 45871 | 43808 | 41398 | 40659 | 39723 | 38598 | 28463 | 19107 | 9972 | 1586 | 984 | 593 | 587 | 521 | 510 | 475 | 387 | 383 | 257 | 197 | 99.1 | 89 | 0 | 0 | 0 |
| Score/MB | 890 | 356 | 316 | 294 | 343 | 490 | 1976 | 375 | 50 | 91 | 7 | 50 | 15 | 12 | 56 | 59 | 51 | 50 | 13 | 2 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 41 | 58 | 59 | 61 | 63 | 68 | 81 | 84 | 122 | 146 | 249 | 273 | 0 | 0 | 0 |
