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


## Engine & Runtime (32/37)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47857<br>98.4M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47036<br>37.4M<br>1255/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45591<br>53.3M<br>855/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40933<br>65.2M<br>627/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40839<br>106.9M<br>382/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40247<br>123.1M<br>326/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39111<br>40.7M<br>962/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| dune | [dune](https://github.com/aalykiot/dune) | 39049<br>67.1M<br>581/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20169<br>19.4M<br>1039/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19018<br>39.6M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16985<br>51M<br>333/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16981<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11554<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2649<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1527<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 878<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 822<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 765<br>857K<br>914/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 718<br>1.3M<br>533/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 557<br>46.1M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 499<br>2.1M<br>234/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 393<br>446.6K<br>901/M | ✅unix<br>❌macArm<br>❌macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>414.5K<br>921/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 365<br>685K<br>545/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 308<br>2.7K<br>116803/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 276<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 265<br>2.1M<br>127/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 190<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
8/12/2025, 10:06:11 AM

### ubuntu
| Engine | bun | jsc | v8 | bare | deno | node | lo | dune | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs-pgo | mujs | mujs(one) | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 13.6.0 | 0 | 2.4.3 | 24.5.0 | 0 | 0.10.0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 98.4M | 37.4M | 53.3M | 65.2M | 106.9M | 123.1M | 40.7M | 67.1M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 98.4M | 37.4M | 937.8K | 65.2M | 106.9M | 123.1M | 40.7M | 67.1M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 857K | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 414.5K | 685K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41328 | 41621 | 34850 | 32534 | 33318 | 31899 | 32047 | 32495 | 23522 | 13115 | 14075 | 13288 | 35514 | 10894 | 1110 | 667 | 666 | 707 | 609 | 596 | 580 | 478 | 293 | 270 | 223 | 244 | 140 | 206 | 90 | 105 | 61 | 58 | 553 | 132 | 277 | 0 | 24 |
| DeltaBlue | 55731 | 53516 | 97101 | 76479 | 76432 | 75143 | 76373 | 73365 | 24966 | 13085 | 13085 | 12946 | 26322 | 269 | 1036 | 684 | 670 | 685 | 618 | 593 | 575 | 462 | 327 | 361 | 322 | 355 | 180 | 253 | 164 | 117 | 55 | 56 | 520 | 177 | 283 | 0 | 28 |
| Crypto | 49062 | 52266 | 42817 | 41585 | 41737 | 41812 | 41229 | 41594 | 31348 | 20519 | 17594 | 17686 | 16507 | 8805 | 1352 | 580 | 751 | 519 | 572 | 543 | 380 | 883 | 783 | 188 | 183 | 190 | 158 | 119 | 329 | 98 | 81 | 62 | 842 | 135 | 292 | 0 | 29 |
| RayTrace | 119434 | 120174 | 106040 | 71409 | 68079 | 67117 | 60901 | 68153 | 36667 | 27232 | 26862 | 27500 | 4805 | 1270 | 1545 | 1182 | 920 | 1079 | 943 | 883 | 725 | 565 | 580 | 526 | 478 | 531 | 440 | 276 | 500 | 251 | 165 | 140 | 589 | 430 | 345 | 0 | 86 |
| EarleyBoyer | 67011 | 67062 | 81107 | 70297 | 72706 | 72341 | 70711 | 73414 | 7059 | 38898 | 36597 | 36998 | 39475 | 906 | 3336 | 1888 | 1460 | 1778 | 1382 | 1338 | 1234 | 771 | 569 | 533 | 496 | 524 | 594 | 508 | 325 | 287 | 193 | 137 | 0 | 419 | 0 | 0 | 77 |
| RegExp | 20820 | 20022 | 10212 | 10354 | 10223 | 10032 | 8910 | 9930 | 7811 | 8438 | 8232 | 8737 | 1344 | 1213 | 552 | 256 | 223 | 229 | 233 | 222 | 178 | 64 | 132 | 241 | 197 | 217 | 415 | 208 | 94 | 249 | 49 | 94 | 112 | 0 | 0 | 0 | 0 |
| Splay | 36602 | 36410 | 37869 | 37657 | 37038 | 36345 | 36793 | 28277 | 19970 | 24586 | 11944 | 11661 | 2583 | 5891 | 3569 | 2440 | 1801 | 1956 | 1791 | 1490 | 1672 | 1209 | 1274 | 965 | 1289 | 656 | 1025 | 940 | 399 | 470 | 233 | 325 | 1934 | 915 | 0 | 0 | 58 |
| NavierStokes | 39920 | 35031 | 38732 | 38912 | 38842 | 38803 | 38436 | 38803 | 36841 | 22112 | 22112 | 21919 | 31250 | 11427 | 1868 | 956 | 1266 | 967 | 1002 | 938 | 929 | 1407 | 930 | 473 | 475 | 485 | 183 | 201 | 822 | 165 | 170 | 119 | 1225 | 286 | 0 | 0 | 51 |
| Score | 47857 | 47036 | 45591 | 40933 | 40839 | 40247 | 39111 | 39049 | 20169 | 19018 | 16985 | 16981 | 11554 | 2649 | 1527 | 878 | 832 | 822 | 765 | 718 | 648 | 557 | 499 | 393 | 373 | 365 | 308 | 276 | 265 | 190 | 107 | 105 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 486 | 1255 | 855 | 627 | 382 | 326 | 962 | 581 | 1039 | 479 | 333 | 482 | 57 | 2 | 42 | 71 | 194 | 159 | 914 | 533 | 328 | 12 | 234 | 901 | 921 | 545 | 116803 | 20 | 127 | 2 | 3 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 39 | 33 | 46 | 48 | 50 | 50 | 53 | 59 | 87 | 69 | 81 | 85 | 81 | 96 | 114 | 130 | 143 | 235 | 233 | 53 | 87 | 32 | 0 | 427 |
### macos-arm64
| Engine | bun | jsc | bare | deno | dune | node | v8 | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | primjs | rquickjs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 0 | 2.4.3 | 0.10.0 | 24.5.0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.8M | 94.2M | 45.5M | 85.5M | 57.4M | 111.5M | 861K | 131.2M | 46.3M | 32.8M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.5M | 1.2M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.8M | 914.7K | 45.5M | 85.5M | 57.4M | 111.5M | 861K | 65.6M | 46.3M | 32.8M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.5M | 1.2M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 52328 | 52942 | 44950 | 48484 | 47524 | 44968 | 34974 | 15095 | 16069 | 14770 | 37530 | 638 | 1367 | 1330 | 1082 | 1338 | 1152 | 820 | 1117 | 865 | 539 | 411 | 120 | 328 | 229 | 146 | 108 | 750 | 138 | 216 | 0 | 38 |
| DeltaBlue | 77682 | 77781 | 108896 | 110655 | 110840 | 104592 | 87011 | 16523 | 17422 | 16563 | 54858 | 2274 | 1189 | 1337 | 1128 | 1239 | 1150 | 980 | 1106 | 793 | 639 | 613 | 226 | 394 | 237 | 155 | 103 | 840 | 259 | 242 | 0 | 48 |
| Crypto | 74472 | 78490 | 61002 | 61221 | 59851 | 61090 | 35925 | 26264 | 22634 | 20800 | 44999 | 14495 | 1483 | 1233 | 1037 | 1224 | 1389 | 1123 | 1006 | 1654 | 1392 | 308 | 558 | 202 | 148 | 138 | 118 | 1226 | 147 | 271 | 0 | 48 |
| RayTrace | 185293 | 190769 | 93461 | 90279 | 94571 | 92721 | 95089 | 50985 | 43363 | 48395 | 4452 | 1281 | 2577 | 2186 | 2078 | 1583 | 1284 | 1611 | 1449 | 1120 | 1156 | 1013 | 756 | 476 | 792 | 374 | 254 | 816 | 706 | 335 | 0 | 150 |
| EarleyBoyer | 107748 | 107007 | 99942 | 105121 | 106467 | 102826 | 76507 | 52579 | 49298 | 47152 | 56142 | 1508 | 5319 | 3326 | 3121 | 2622 | 2383 | 2141 | 2328 | 1389 | 1203 | 1138 | 445 | 849 | 811 | 395 | 251 | 0 | 719 | 0 | 0 | 126 |
| RegExp | 32887 | 33251 | 15516 | 15410 | 15396 | 14302 | 11421 | 13429 | 12923 | 11523 | 2013 | 880 | 740 | 316 | 327 | 281 | 288 | 237 | 277 | 108 | 263 | 356 | 340 | 313 | 631 | 219 | 144 | 213 | 0 | 0 | 0 | 0 |
| Splay | 52276 | 52945 | 56954 | 51527 | 45211 | 48789 | 41112 | 31007 | 18592 | 18246 | 4078 | 1899 | 4754 | 3603 | 4209 | 2502 | 2621 | 3891 | 2361 | 2236 | 2369 | 1360 | 578 | 1366 | 1197 | 546 | 513 | 2123 | 1180 | 0 | 0 | 98 |
| NavierStokes | 39948 | 34429 | 40769 | 39731 | 40662 | 39692 | 36358 | 21771 | 21432 | 20062 | 34874 | 3002 | 1632 | 2156 | 1754 | 2179 | 2389 | 2687 | 1729 | 1976 | 1583 | 775 | 1545 | 329 | 213 | 201 | 215 | 1905 | 315 | 0 | 0 | 86 |
| Score | 67184 | 66872 | 56268 | 56116 | 55486 | 54326 | 43813 | 25133 | 22670 | 21690 | 16893 | 1944 | 1927 | 1582 | 1452 | 1377 | 1336 | 1291 | 1214 | 979 | 949 | 654 | 445 | 443 | 412 | 240 | 184 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1182 | 709 | 1236 | 655 | 966 | 487 | 52106 | 191 | 489 | 660 | 87 | 0 | 122 | 438 | 138 | 334 | 1401 | 853 | 1028 | 23 | 1728 | 1560 | 276 | 34 | 156243 | 3 | 14 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 40 | 29 | 37 | 37 | 37 | 36 | 40 | 40 | 59 | 43 | 53 | 81 | 75 | 85 | 115 | 138 | 38 | 75 | 33 | 0 | 269 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | bare | dune | ChakraCore | spidermonkey | mozjs | graaljs | spiderfire | jjs | hermes | txiki.js | qjs(ng) | llrt | rquickjs | quickjs | duktape | primjs | xst | mujs | ringo | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.20 | 0 | 2.4.3 | 24.5.0 | 0 | 0.10.0 | 1.13.0.0.beta | 142.0 | 0 | 24.1.2 | 0 | 0 | 0.12.0 | 24.12.0 | 0.8.0 | 0.6.2.beta | 0 | 2025.04.26 | 2.99.99 | 0 | 16.9.1 | 1.3.5 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 861K | 62.5M | 89.6M | 96.6M | 113.7M | 47.1M | 60.4M | 20M | 65.6M | 33.8M | 194.4M | 48.2M | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 1.2M | 1M | 525.7K | 693.4K | 1.6M | 441.8K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 861K | 62.5M | 1016.1K | 96.6M | 113.7M | 47.1M | 60.4M | 571K | 65.6M | 33.8M | 148.8K | 48.2M | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 1.2M | 1M | 525.7K | 693.4K | 1.6M | 441.8K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 35726 | 29421 | 28697 | 31030 | 22325 | 19360 | 11696 | 24478 | 9472 | 9440 | 43397 | 5747 | 11914 | 499 | 477 | 443 | 215 | 317 | 287 | 110 | 209 | 84 | 141 | 75 | 140 | 99 | 49 | 24 | 257 | 45 | 113 | 0 | 17 |
| DeltaBlue | 80380 | 46369 | 37786 | 53774 | 51109 | 52339 | 24431 | 20860 | 11207 | 10923 | 51162 | 5741 | 254 | 565 | 538 | 486 | 313 | 352 | 255 | 166 | 163 | 135 | 192 | 108 | 154 | 109 | 46 | 20 | 317 | 68 | 128 | 0 | 17 |
| Crypto | 41767 | 42904 | 37518 | 34161 | 34024 | 30482 | 34354 | 24833 | 15663 | 13095 | 24654 | 12222 | 6107 | 565 | 299 | 279 | 206 | 214 | 261 | 266 | 166 | 180 | 101 | 69 | 76 | 74 | 51 | 37 | 355 | 63 | 138 | 0 | 22 |
| RayTrace | 105004 | 111368 | 104412 | 71705 | 70595 | 64897 | 67050 | 36999 | 30796 | 29378 | 9842 | 23680 | 542 | 1095 | 834 | 496 | 502 | 410 | 297 | 248 | 213 | 436 | 320 | 284 | 215 | 189 | 111 | 68 | 159 | 238 | 202 | 0 | 57 |
| EarleyBoyer | 72238 | 67105 | 58225 | 66567 | 62881 | 51849 | 64079 | 6085 | 35112 | 31993 | 42060 | 29664 | 452 | 1823 | 1262 | 849 | 781 | 702 | 579 | 336 | 435 | 314 | 374 | 313 | 326 | 219 | 105 | 76 | 0 | 164 | 0 | 0 | 56 |
| RegExp | 8422 | 16820 | 16944 | 8447 | 8373 | 8191 | 8257 | 5102 | 7878 | 7561 | 1366 | 6701 | 252 | 291 | 93 | 81 | 68 | 75 | 68 | 69 | 56 | 129 | 101 | 279 | 190 | 93 | 52 | 21 | 48 | 0 | 0 | 0 | 0 |
| Splay | 42017 | 33811 | 39841 | 35530 | 37429 | 39075 | 27308 | 17972 | 23632 | 12532 | 1884 | 10512 | 558 | 2367 | 1627 | 886 | 1601 | 795 | 567 | 799 | 685 | 317 | 345 | 543 | 186 | 297 | 282 | 111 | 1377 | 474 | 0 | 0 | 53 |
| NavierStokes | 36397 | 33093 | 32814 | 36397 | 36655 | 35989 | 36025 | 35214 | 25228 | 24117 | 26807 | 21497 | 7562 | 892 | 650 | 653 | 414 | 580 | 548 | 362 | 335 | 516 | 234 | 108 | 126 | 108 | 103 | 76 | 689 | 130 | 0 | 0 | 36 |
| Score | 43013 | 41156 | 39114 | 36235 | 34441 | 32342 | 27660 | 17603 | 17411 | 15233 | 14101 | 11996 | 1217 | 815 | 547 | 431 | 354 | 353 | 302 | 231 | 226 | 222 | 201 | 174 | 164 | 133 | 82 | 45 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 51155 | 658 | 436 | 375 | 302 | 686 | 457 | 878 | 265 | 450 | 72 | 248 | 0 | 103 | 146 | 209 | 28 | 286 | 295 | 449 | 333 | 138 | 465 | 65986 | 12 | 1 | 6 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 23 | 20 | 77 | 48 | 80 | 88 | 106 | 100 | 107 | 128 | 145 | 136 | 139 | 160 | 166 | 210 | 302 | 528 | 112 | 172 | 54 | 0 | 577 |
### windows
| Engine | v8 | jsc | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.20 | 24.5.0 | 2.4.3 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 51.5M | 122.8M | 132.7M | 116.3M | 143.4M | 78.7M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 87.1M | 11.8M | 37M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.9M | 85.2M | 111.1M | 48.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 23.9M | 122.5M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 84.1M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 35235 | 36869 | 36446 | 32785 | 26554 | 33113 | 24475 | 13387 | 13891 | 35955 | 9337 | 699 | 513 | 451 | 445 | 388 | 434 | 208 | 233 | 229 | 194 | 104 | 54 | 49 | 0 | 0 | 0 | 0 | 21 |
| DeltaBlue | 93213 | 50117 | 37681 | 74793 | 75983 | 74370 | 28636 | 10738 | 13085 | 28722 | 521 | 614 | 468 | 410 | 410 | 377 | 403 | 260 | 337 | 312 | 231 | 116 | 51 | 41 | 0 | 0 | 0 | 0 | 24 |
| Crypto | 42868 | 49510 | 44535 | 42093 | 41890 | 39778 | 33783 | 20333 | 17849 | 18692 | 2857 | 780 | 545 | 427 | 513 | 433 | 375 | 317 | 183 | 187 | 114 | 92 | 59 | 75 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 97679 | 104930 | 97975 | 67117 | 67709 | 67265 | 51156 | 28638 | 27325 | 3256 | 1517 | 1024 | 547 | 709 | 591 | 552 | 585 | 436 | 472 | 472 | 232 | 267 | 128 | 134 | 0 | 0 | 0 | 0 | 76 |
| EarleyBoyer | 81429 | 63774 | 58520 | 72125 | 73712 | 73590 | 43437 | 39607 | 36846 | 30757 | 2000 | 2250 | 1014 | 1119 | 988 | 1015 | 998 | 511 | 584 | 578 | 464 | 300 | 125 | 141 | 0 | 0 | 0 | 0 | 71 |
| RegExp | 9748 | 19476 | 17512 | 9851 | 9383 | 9556 | 9689 | 9110 | 8837 | 1185 | 1010 | 400 | 190 | 195 | 172 | 186 | 186 | 109 | 203 | 257 | 201 | 280 | 90 | 42 | 0 | 0 | 0 | 0 | 0 |
| Splay | 40314 | 34870 | 32808 | 33085 | 33851 | 28261 | 28497 | 24472 | 14652 | 2351 | 5786 | 2274 | 1039 | 1464 | 994 | 1320 | 1018 | 1018 | 1182 | 576 | 889 | 551 | 325 | 168 | 0 | 0 | 0 | 0 | 57 |
| NavierStokes | 38694 | 33768 | 33653 | 38732 | 38732 | 38912 | 36693 | 22422 | 22067 | 25525 | 3605 | 1095 | 1038 | 744 | 749 | 721 | 657 | 1081 | 490 | 469 | 192 | 151 | 115 | 166 | 0 | 0 | 0 | 0 | 49 |
| Score | 45071 | 43996 | 40170 | 39809 | 38850 | 38761 | 29231 | 18942 | 17630 | 10405 | 2337 | 967 | 591 | 583 | 538 | 531 | 513 | 383 | 383 | 355 | 257 | 195 | 98 | 87 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 875 | 358 | 302 | 342 | 270 | 492 | 2029 | 371 | 242 | 53 | 133 | 11 | 50 | 15 | 57 | 12 | 57 | 50 | 50 | 46 | 13 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 38 | 42 | 58 | 60 | 61 | 61 | 64 | 84 | 82 | 78 | 122 | 146 | 249 | 283 | 0 | 130 | 0 | 96 | 455 |
