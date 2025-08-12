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


## Engine & Runtime (28/37)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47146<br>98.4M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46913<br>37.4M<br>1252/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45283<br>53.3M<br>850/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40580<br>65.2M<br>621/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40128<br>106.9M<br>375/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39458<br>123.1M<br>320/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39099<br>67.1M<br>582/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20037<br>19.4M<br>1032/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18684<br>39.6M<br>471/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16962<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16903<br>51M<br>331/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11416<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2321<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 871<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 824<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 760<br>857K<br>908/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 737<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 719<br>1.3M<br>534/M | ✅unix<br>❌macArm<br>❌macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 529<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 391<br>446.6K<br>896/M | ✅unix<br>❌macArm<br>❌macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 364<br>414.5K<br>899/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 299<br>2.7K<br>113390/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 272<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | <br> | ❌unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | <br> | ❌unix<br>✅macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | <br> | ❌unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |

## bench
8/12/2025, 2:33:27 PM

### ubuntu
| Engine | bun | jsc | v8 | bare | deno | node | dune | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | primjs | njs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs(pgo) | mujs | ringo | goja | xst | boa | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 13.6.0 | 0 | 2.4.3 | 24.5.0 | 0.10.0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 2025.04.26 | 0 | 0.9.2 | 0 | 0.10.1 | 0 | 0 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0.20.0 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 98.4M | 37.4M | 53.3M | 65.2M | 106.9M | 123.1M | 67.1M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 857K | 8.4M | 1.3M | 2M | 46.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 27M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 98.4M | 37.4M | 937.8K | 65.2M | 106.9M | 123.1M | 67.1M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 857K | 8.4M | 1.3M | 2M | 46.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 27M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40926 | 41307 | 34765 | 32308 | 32305 | 32121 | 32951 | 23631 | 12479 | 13090 | 13083 | 35944 | 13185 | 1121 | 688 | 690 | 610 | 561 | 601 | 582 | 482 | 246 | 250 | 223 | 136 | 198 | 90 | 60 | 133 | 263 | 0 | 24 |
| DeltaBlue | 54633 | 55394 | 92651 | 76102 | 74898 | 73960 | 73768 | 25477 | 12906 | 12880 | 13131 | 26374 | 223 | 1060 | 678 | 660 | 611 | 534 | 590 | 584 | 457 | 354 | 349 | 320 | 173 | 242 | 161 | 55 | 183 | 266 | 0 | 27 |
| Crypto | 49079 | 52076 | 42334 | 41618 | 41847 | 41286 | 41833 | 31613 | 19828 | 17688 | 17706 | 28851 | 7926 | 1370 | 574 | 721 | 585 | 882 | 560 | 379 | 871 | 191 | 185 | 181 | 148 | 123 | 325 | 80 | 136 | 301 | 0 | 28 |
| RayTrace | 113958 | 117954 | 106336 | 71335 | 66451 | 67339 | 67931 | 36223 | 27870 | 27722 | 26714 | 6007 | 1212 | 1569 | 1183 | 911 | 939 | 683 | 892 | 721 | 558 | 523 | 507 | 462 | 436 | 268 | 502 | 162 | 433 | 352 | 0 | 81 |
| EarleyBoyer | 66809 | 67913 | 79686 | 67891 | 73080 | 72299 | 73574 | 7030 | 38832 | 36616 | 36223 | 33400 | 866 | 3382 | 1866 | 1410 | 1349 | 1666 | 1314 | 1217 | 741 | 494 | 502 | 444 | 586 | 492 | 325 | 186 | 508 | 0 | 0 | 74 |
| RegExp | 20729 | 19891 | 10284 | 10313 | 10072 | 9941 | 10072 | 7736 | 8521 | 8676 | 8702 | 1094 | 546 | 550 | 249 | 229 | 227 | 115 | 226 | 178 | 62 | 210 | 235 | 192 | 439 | 205 | 96 | 48 | 0 | 0 | 0 | 0 |
| Splay | 35644 | 35351 | 38602 | 37119 | 34951 | 35114 | 27471 | 19355 | 22573 | 11901 | 11848 | 1612 | 4539 | 3484 | 2336 | 1736 | 1755 | 2058 | 1448 | 1612 | 880 | 1309 | 1246 | 1299 | 964 | 961 | 393 | 232 | 858 | 0 | 0 | 57 |
| NavierStokes | 39544 | 34952 | 38545 | 38765 | 38842 | 35249 | 38842 | 35805 | 22341 | 21919 | 21963 | 29828 | 13894 | 1886 | 965 | 1275 | 1008 | 1219 | 935 | 932 | 1389 | 486 | 450 | 468 | 173 | 195 | 837 | 176 | 275 | 0 | 0 | 50 |
| Score | 47146 | 46913 | 45283 | 40580 | 40128 | 39458 | 39099 | 20037 | 18684 | 16962 | 16903 | 11416 | 2321 | 1538 | 871 | 824 | 760 | 737 | 719 | 646 | 529 | 393 | 391 | 364 | 299 | 272 | 265 | 106 | 0 | 0 | 0 | 0 |
| Score/MB | 478 | 1252 | 850 | 621 | 375 | 320 | 582 | 1032 | 471 | 481 | 331 | 57 | 2 | 42 | 71 | 193 | 908 | 87 | 534 | 327 | 11 | 587 | 896 | 899 | 113390 | 20 | 127 | 3 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 41 | 34 | 47 | 49 | 51 | 62 | 53 | 59 | 88 | 82 | 83 | 88 | 98 | 115 | 130 | 239 | 87 | 31 | 0 | 439 |
### macos-arm64
| Engine | bun | jsc | deno | dune | node | bare | v8 | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | qjs(ng) | llrt | quickjs | primjs | njs | ladybird | duktape | mujs | xst | goja | ringo | jint | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 2.4.3 | 0.10.0 | 24.5.0 | 0 | 13.6.0 | 142.0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.8.0 | 0.6.2.beta | 2025.04.26 | 0 | 0.9.2 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.8M | 94.2M | 85.5M | 57.4M | 111.5M | 45.5M | 861K | 131.2M | 32.8M | 194M | 0 | 15.7M | 3.6M | 4.1M | 10.5M | 975.9K | 1.5M | 2.4M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.8M | 914.7K | 85.5M | 57.4M | 111.5M | 45.5M | 861K | 65.6M | 32.8M | 147.4K | 0 | 7.9M | 3.6M | 2.1M | 10.5M | 975.9K | 1.5M | 1.8M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 193.8M | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 52187 | 47216 | 46521 | 48290 | 45723 | 41963 | 33082 | 15205 | 13923 | 36340 | 14788 | 1368 | 1344 | 1338 | 1011 | 1139 | 817 | 709 | 828 | 489 | 412 | 118 | 307 | 224 | 135 | 184 | 216 | 0 | 32 |
| DeltaBlue | 77702 | 68895 | 107528 | 114549 | 106357 | 84962 | 82330 | 17627 | 16404 | 46455 | 694 | 1255 | 1341 | 1242 | 1022 | 1152 | 958 | 778 | 745 | 572 | 612 | 226 | 348 | 256 | 150 | 223 | 241 | 0 | 34 |
| Crypto | 74525 | 71221 | 59064 | 61038 | 58940 | 52718 | 32477 | 26389 | 20873 | 37444 | 10273 | 1466 | 1231 | 1231 | 893 | 1384 | 1117 | 1124 | 1586 | 1242 | 307 | 558 | 166 | 145 | 127 | 132 | 269 | 0 | 45 |
| RayTrace | 192249 | 163242 | 94349 | 93979 | 95089 | 83323 | 86283 | 48321 | 47312 | 1874 | 1101 | 2513 | 2183 | 1584 | 1813 | 1268 | 1211 | 763 | 1031 | 1042 | 1021 | 753 | 332 | 666 | 303 | 638 | 314 | 0 | 150 |
| EarleyBoyer | 98894 | 88332 | 105577 | 102279 | 101432 | 75912 | 61587 | 51442 | 44919 | 43173 | 1952 | 5305 | 3332 | 2646 | 2768 | 2363 | 1952 | 1956 | 1360 | 1099 | 1099 | 451 | 636 | 631 | 349 | 653 | 0 | 0 | 125 |
| RegExp | 29548 | 25508 | 15396 | 15334 | 15365 | 12468 | 10616 | 13234 | 11172 | 1765 | 818 | 738 | 319 | 279 | 313 | 278 | 237 | 184 | 97 | 241 | 349 | 335 | 283 | 504 | 189 | 0 | 0 | 0 | 0 |
| Splay | 27156 | 34949 | 51730 | 45896 | 50264 | 48300 | 36255 | 31708 | 15254 | 2794 | 1714 | 4754 | 3651 | 2469 | 4132 | 2302 | 3981 | 1693 | 1852 | 1787 | 1472 | 603 | 1138 | 815 | 553 | 775 | 0 | 0 | 100 |
| NavierStokes | 29206 | 37990 | 40729 | 40473 | 40688 | 35877 | 35362 | 21559 | 19866 | 20673 | 1080 | 1579 | 2163 | 2150 | 1749 | 2334 | 2693 | 1734 | 1815 | 1465 | 776 | 1557 | 275 | 194 | 186 | 302 | 0 | 0 | 85 |
| Score | 58364 | 57109 | 55909 | 55684 | 55253 | 47447 | 39880 | 25130 | 20745 | 12293 | 2075 | 1922 | 1589 | 1374 | 1341 | 1299 | 1230 | 917 | 905 | 841 | 657 | 447 | 367 | 359 | 219 | 0 | 0 | 0 | 0 |
| Score/MB | 1027 | 606 | 653 | 970 | 495 | 1042 | 47429 | 191 | 632 | 63 | 0 | 122 | 440 | 333 | 127 | 1362 | 813 | 382 | 21 | 1531 | 1568 | 277 | 28 | 136144 | 2 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 43 | 29 | 36 | 39 | 37 | 38 | 42 | 52 | 64 | 47 | 54 | 80 | 90 | 94 | 127 | 80 | 34 | 0 | 277 |
### macos-amd64
| Engine | v8 | bun | jsc | bare | deno | dune | node | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | llrt | njs | quickjs | qjs(ng) | xst | primjs | goja | mujs | ringo | jint | boa | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.20 | 0 | 0 | 2.4.3 | 0.10.0 | 24.5.0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.9.2 | 2025.04.26 | 0.8.0 | 16.9.1 | 0 | 0 | 1.3.5 | 4.0.0 | 0 | 0.20.0 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 861K | 62.5M | 89.6M | 47.1M | 96.6M | 60.4M | 113.7M | 20M | 65.6M | 33.8M | 48.2M | 194.4M | 0 | 7.9M | 3.7M | 12.4M | 7.5M | 1M | 2.1M | 1.6M | 693.4K | 13.1M | 441.8K | 2.7K | 68.9M | 25.3M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 861K | 62.5M | 1016.1K | 47.1M | 96.6M | 60.4M | 113.7M | 571K | 65.6M | 33.8M | 48.2M | 148.8K | 0 | 7.9M | 3.7M | 12.4M | 2.1M | 1M | 2.1M | 1.6M | 693.4K | 13.1M | 441.8K | 2.7K | 68.9M | 25.3M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 21647 | 27822 | 27567 | 21940 | 22081 | 21538 | 22071 | 25407 | 9274 | 8536 | 8790 | 40061 | 10488 | 446 | 330 | 342 | 364 | 292 | 341 | 92 | 188 | 141 | 105 | 69 | 86 | 25 | 70 | 110 | 0 | 17 |
| DeltaBlue | 80763 | 42349 | 37350 | 54442 | 51354 | 54990 | 50845 | 21921 | 9448 | 10619 | 9816 | 25166 | 232 | 536 | 386 | 391 | 379 | 379 | 335 | 128 | 213 | 163 | 150 | 93 | 109 | 21 | 93 | 124 | 0 | 18 |
| Crypto | 40297 | 39548 | 36526 | 32972 | 32404 | 32206 | 31160 | 23940 | 14951 | 13021 | 9486 | 20424 | 4716 | 538 | 204 | 186 | 431 | 284 | 208 | 184 | 152 | 74 | 82 | 76 | 76 | 38 | 68 | 132 | 0 | 21 |
| RayTrace | 102488 | 114624 | 105818 | 70521 | 65415 | 71483 | 67783 | 36297 | 28137 | 31006 | 16798 | 2643 | 802 | 1078 | 595 | 635 | 286 | 334 | 334 | 437 | 269 | 237 | 251 | 297 | 202 | 71 | 238 | 205 | 0 | 61 |
| EarleyBoyer | 69558 | 65060 | 54566 | 60053 | 62805 | 64264 | 61857 | 5926 | 31912 | 31270 | 24447 | 33026 | 593 | 1770 | 946 | 851 | 663 | 624 | 544 | 316 | 442 | 375 | 300 | 355 | 237 | 82 | 274 | 0 | 0 | 58 |
| RegExp | 8108 | 16497 | 16762 | 8381 | 8470 | 8166 | 8249 | 5322 | 7364 | 6966 | 6675 | 1156 | 343 | 284 | 72 | 74 | 81 | 61 | 54 | 125 | 53 | 191 | 81 | 341 | 96 | 23 | 0 | 0 | 0 | 0 |
| Splay | 41772 | 33115 | 33680 | 39197 | 33982 | 27764 | 28261 | 18289 | 22369 | 12896 | 6796 | 2230 | 2263 | 2228 | 1234 | 1508 | 733 | 777 | 480 | 309 | 484 | 683 | 569 | 549 | 431 | 116 | 523 | 0 | 0 | 52 |
| NavierStokes | 33257 | 28938 | 32796 | 34804 | 35101 | 36655 | 33405 | 33142 | 23377 | 23774 | 17554 | 25622 | 11225 | 877 | 513 | 436 | 803 | 596 | 444 | 496 | 246 | 123 | 256 | 116 | 113 | 74 | 143 | 0 | 0 | 35 |
| Score | 39271 | 39127 | 37630 | 34280 | 33336 | 33144 | 32151 | 17611 | 16107 | 14911 | 11310 | 10217 | 1620 | 780 | 401 | 400 | 391 | 342 | 290 | 221 | 215 | 199 | 181 | 181 | 142 | 47 | 0 | 0 | 0 | 0 |
| Score/MB | 46705 | 625 | 419 | 727 | 345 | 548 | 282 | 878 | 245 | 441 | 234 | 52 | 0 | 99 | 107 | 32 | 52 | 334 | 140 | 137 | 317 | 15 | 419 | 68640 | 2 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 20 | 23 | 51 | 49 | 101 | 101 | 93 | 110 | 122 | 138 | 147 | 157 | 156 | 153 | 198 | 508 | 155 | 55 | 0 | 581 |
### windows
| Engine | v8 | dune | node | bun | deno | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs(pgo) | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0.10.0 | 24.5.0 | 1.2.20 | 2.4.3 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 |
| Total size | 52.6M | 78.7M | 116.3M | 132.7M | 143.4M | 14.4M | 52.2M | 72.8M | 196.1M | 17.3M | 86.6M | 37M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K |
| Exe size | 27.6M | 48.4M | 85.2M | 112.9M | 111.1M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 5.7M | 1.5M | 13.1M | 1.7M | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K |
| Dll size | 25M | 30.3M | 31.1M | 19.8M | 32.3M | 14.1M | 18.5M | 30.2M | 195.8M | 17.3M | 83.5M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 |
| Score | 43105 | 38042 | 37699 | 37541 | 36733 | 24585 | 18046 | 17000 | 10072 | 1475 | 940 | 552 | 512 | 502 | 489 | 366 | 337 | 239 | 177 | 94 | 74 | 0 | 0 | 0 | 0 |
| Score/MB | 819 | 483 | 324 | 282 | 256 | 1707 | 345 | 233 | 51 | 85 | 10 | 14 | 54 | 11 | 54 | 48 | 44 | 12 | 1 | 2 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 43 | 43 | 60 | 62 | 62 | 64 | 82 | 88 | 128 | 151 | 259 | 333 | 0 | 131 | 0 | 117 |
| Richards | 34388 | 33025 | 32827 | 35355 | 33247 | 24623 | 13242 | 14156 | 33918 | 7099 | 700 | 448 | 444 | 385 | 431 | 233 | 222 | 191 | 105 | 53 | 38 | 0 | 0 | 0 | 0 |
| DeltaBlue | 92188 | 74482 | 71731 | 42659 | 59083 | 24609 | 12761 | 13091 | 28330 | 221 | 622 | 389 | 397 | 355 | 390 | 324 | 306 | 230 | 110 | 47 | 33 | 0 | 0 | 0 | 0 |
| Crypto | 42769 | 41366 | 41868 | 41893 | 41327 | 32868 | 20444 | 17853 | 21070 | 1339 | 786 | 427 | 512 | 424 | 366 | 190 | 179 | 110 | 88 | 58 | 70 | 0 | 0 | 0 | 0 |
| RayTrace | 98419 | 65128 | 64379 | 92277 | 64453 | 41842 | 28239 | 26418 | 4214 | 1356 | 980 | 746 | 589 | 557 | 579 | 380 | 355 | 208 | 254 | 123 | 113 | 0 | 0 | 0 | 0 |
| EarleyBoyer | 78046 | 71171 | 64366 | 50824 | 68596 | 40200 | 35974 | 35865 | 26909 | 771 | 2180 | 993 | 903 | 888 | 878 | 470 | 429 | 412 | 273 | 113 | 96 | 0 | 0 | 0 | 0 |
| RegExp | 9364 | 9699 | 9480 | 14714 | 9309 | 6798 | 8043 | 8728 | 880 | 927 | 392 | 195 | 171 | 182 | 184 | 238 | 188 | 190 | 273 | 86 | 40 | 0 | 0 | 0 | 0 |
| Splay | 32075 | 24781 | 27813 | 26980 | 25710 | 15953 | 18572 | 11633 | 1999 | 4450 | 1958 | 1082 | 822 | 1083 | 871 | 1116 | 1001 | 770 | 343 | 306 | 150 | 0 | 0 | 0 | 0 |
| NavierStokes | 38101 | 38694 | 37877 | 33538 | 38584 | 36730 | 21454 | 21919 | 26241 | 2481 | 1088 | 738 | 705 | 713 | 655 | 472 | 475 | 175 | 147 | 112 | 164 | 0 | 0 | 0 | 0 |
