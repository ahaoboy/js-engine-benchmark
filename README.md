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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46844<br>37.4M<br>1250/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46223<br>96.4M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45173<br>53.3M<br>848/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40586<br>101.1M<br>401/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39490<br>121.4M<br>325/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38938<br>67.1M<br>580/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19984<br>19.4M<br>1029/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18912<br>39.7M<br>476/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16990<br>35.2M<br>482/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10427<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2396<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 880<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 837<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 824<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 766<br>857K<br>915/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 707<br>1.3M<br>525/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 549<br>45.8M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 465<br>2.1M<br>218/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 397<br>685K<br>593/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 374<br>414.5K<br>923/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 270<br>2.1M<br>130/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
6/19/2025, 2:43:50 PM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 13.6.0 | 2.3.6 | 24.2.0 | 0.10.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.5.1.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 37.4M | 96.4M | 53.3M | 101.1M | 121.4M | 67.1M | 19.4M | 39.7M | 35.2M | 199.7M | 1.1G | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 37.4M | 96.4M | 937.8K | 101.1M | 121.4M | 67.1M | 571K | 39.7M | 35.2M | 1M | 1.1G | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41310 | 41543 | 34709 | 33350 | 32266 | 32418 | 23313 | 13108 | 12970 | 35404 | 8600 | 1123 | 806 | 703 | 683 | 607 | 597 | 582 | 507 | 276 | 240 | 226 | 207 | 90 | 105 | 60 | 59 | 553 | 127 | 265 | 0 |
| DeltaBlue | 54699 | 52603 | 92486 | 74528 | 74568 | 73715 | 26401 | 12919 | 12860 | 38077 | 263 | 1056 | 720 | 683 | 638 | 618 | 575 | 581 | 450 | 310 | 355 | 319 | 250 | 165 | 112 | 55 | 55 | 519 | 179 | 276 | 0 |
| Crypto | 52245 | 49957 | 42663 | 41639 | 41213 | 41644 | 32076 | 20282 | 17746 | 19955 | 7660 | 1368 | 706 | 590 | 730 | 578 | 539 | 379 | 847 | 799 | 194 | 183 | 121 | 335 | 99 | 80 | 62 | 832 | 125 | 290 | 0 |
| RayTrace | 114994 | 117214 | 105004 | 67931 | 64675 | 66007 | 35667 | 27030 | 27796 | 4496 | 1459 | 1589 | 1192 | 1102 | 890 | 931 | 870 | 717 | 566 | 555 | 528 | 495 | 269 | 498 | 255 | 163 | 138 | 579 | 396 | 349 | 0 |
| EarleyBoyer | 66763 | 63574 | 79944 | 74136 | 70591 | 73165 | 7079 | 38206 | 37117 | 23049 | 993 | 3386 | 1946 | 1769 | 1471 | 1376 | 1316 | 1222 | 731 | 569 | 529 | 498 | 488 | 326 | 281 | 190 | 136 | 0 | 432 | 0 | 0 |
| RegExp | 20254 | 21253 | 10212 | 10102 | 9761 | 10021 | 7607 | 8819 | 8892 | 1281 | 545 | 553 | 197 | 229 | 225 | 234 | 223 | 179 | 61 | 130 | 217 | 199 | 205 | 97 | 247 | 48 | 93 | 108 | 0 | 0 | 0 |
| Splay | 36174 | 34854 | 38244 | 36068 | 34495 | 28277 | 18738 | 24170 | 11730 | 1875 | 4633 | 3472 | 1605 | 1993 | 1761 | 1787 | 1438 | 1622 | 1193 | 831 | 1285 | 1227 | 955 | 407 | 461 | 221 | 324 | 1779 | 761 | 0 | 0 |
| NavierStokes | 34918 | 34577 | 38617 | 38765 | 38803 | 38803 | 35805 | 21645 | 21793 | 20883 | 17146 | 1833 | 1192 | 957 | 1284 | 1017 | 920 | 932 | 1412 | 939 | 481 | 484 | 198 | 878 | 164 | 177 | 119 | 1216 | 209 | 0 | 0 |
| Score | 46844 | 46223 | 45173 | 40586 | 39490 | 38938 | 19984 | 18912 | 16990 | 10427 | 2396 | 1534 | 880 | 837 | 824 | 766 | 707 | 646 | 549 | 465 | 397 | 374 | 274 | 270 | 188 | 106 | 104 | 0 | 0 | 0 | 0 |
| Score/MB | 1250 | 479 | 848 | 401 | 325 | 580 | 1029 | 476 | 482 | 52 | 2 | 42 | 74 | 162 | 193 | 915 | 525 | 327 | 11 | 218 | 593 | 923 | 20 | 130 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 24 | 41 | 34 | 48 | 49 | 48 | 51 | 53 | 59 | 90 | 68 | 80 | 86 | 116 | 129 | 143 | 237 | 236 | 55 | 98 | 31 | 0 |
### macos-arm64
| Engine | jsc | bun | dune | deno | node | v8 | mozjs | spidermonkey | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | xst | goja | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 0.10.0 | 2.3.6 | 24.2.0 | 13.6.0 | 0 | 140.0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 55.8M | 57.4M | 82.4M | 110.6M | 861K | 32.8M | 130.4M | 194M | 653.8M | 15.7M | 3.6M | 10.3M | 4.1M | 975.9K | 1.2M | 1.5M | 41.2M | 562.1K | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 2.4M | 653.8M | 575.4K | 7.3K |
| Exe size | 914.7K | 55.8M | 57.4M | 82.4M | 110.6M | 861K | 32.8M | 65.2M | 147.4K | 653.8M | 7.9M | 3.6M | 10.3M | 2.1M | 975.9K | 1.2M | 1.5M | 41.2M | 562.1K | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 1.8M | 653.8M | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 0 | 65.2M | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 51357 | 48487 | 48413 | 47312 | 44226 | 33254 | 15265 | 13079 | 34871 | 15755 | 1188 | 1315 | 1104 | 1312 | 1126 | 1065 | 826 | 864 | 330 | 379 | 116 | 323 | 144 | 111 | 743 | 134 | 197 | 0 |
| DeltaBlue | 72604 | 72088 | 109637 | 112083 | 106754 | 95388 | 17746 | 15637 | 39836 | 2571 | 1102 | 1250 | 1238 | 1190 | 1096 | 1044 | 900 | 744 | 436 | 488 | 218 | 379 | 160 | 98 | 800 | 148 | 226 | 0 |
| Crypto | 75176 | 73455 | 60359 | 59800 | 59170 | 35771 | 22643 | 25168 | 41556 | 1770 | 1235 | 1098 | 991 | 1216 | 1366 | 948 | 1103 | 1548 | 1158 | 283 | 536 | 183 | 135 | 113 | 1184 | 105 | 261 | 0 |
| RayTrace | 175155 | 179077 | 95607 | 83027 | 92943 | 95681 | 51503 | 49727 | 2957 | 1427 | 2126 | 1990 | 2041 | 1518 | 1253 | 1406 | 1359 | 1049 | 664 | 906 | 723 | 459 | 302 | 243 | 704 | 621 | 304 | 0 |
| EarleyBoyer | 103199 | 101486 | 105526 | 98306 | 96881 | 69101 | 49459 | 45394 | 41222 | 1357 | 4374 | 2960 | 2896 | 2596 | 2257 | 2226 | 1709 | 1275 | 878 | 1032 | 412 | 823 | 358 | 242 | 0 | 652 | 0 | 0 |
| RegExp | 32249 | 31607 | 15138 | 14503 | 15077 | 10627 | 12756 | 11240 | 1865 | 1048 | 707 | 291 | 305 | 273 | 276 | 273 | 207 | 96 | 176 | 323 | 332 | 299 | 213 | 140 | 170 | 0 | 0 | 0 |
| Splay | 50373 | 49806 | 46328 | 53042 | 45594 | 36052 | 19491 | 25173 | 3317 | 1521 | 4319 | 2868 | 2806 | 2174 | 2359 | 2279 | 618 | 2168 | 1472 | 1429 | 545 | 1221 | 575 | 517 | 787 | 694 | 0 | 0 |
| NavierStokes | 34360 | 32615 | 39504 | 38881 | 40028 | 33653 | 21327 | 20250 | 28048 | 3038 | 1488 | 1969 | 1621 | 2172 | 2353 | 1722 | 2592 | 1840 | 1015 | 650 | 1543 | 316 | 197 | 225 | 1538 | 276 | 0 | 0 |
| Score | 64038 | 62724 | 55463 | 54463 | 53706 | 41994 | 23162 | 22538 | 13672 | 2256 | 1695 | 1430 | 1351 | 1327 | 1282 | 1171 | 944 | 920 | 632 | 590 | 428 | 420 | 231 | 182 | 0 | 0 | 0 | 0 |
| Score/MB | 679 | 1123 | 966 | 660 | 485 | 49943 | 705 | 172 | 70 | 3 | 107 | 396 | 131 | 321 | 1345 | 991 | 624 | 22 | 1151 | 1408 | 265 | 32 | 3 | 14 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 40 | 31 | 40 | 38 | 38 | 38 | 41 | 44 | 65 | 56 | 58 | 83 | 80 | 122 | 139 | 46 | 87 | 34 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | dune | node | deno | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | duktape | mujs | xst | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.16 | 0 | 0.10.0 | 24.2.0 | 2.3.6 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 61.2M | 89.6M | 60.4M | 113.3M | 92.1M | 20M | 65.2M | 33.8M | 194.4M | 602.8M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 525.7K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 602.8M | 570.8K | 7.3K |
| Exe size | 861K | 61.2M | 1016.1K | 60.4M | 113.3M | 92.1M | 571K | 65.2M | 33.8M | 148.8K | 602.8M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 525.7K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 602.8M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 19907 | 26674 | 24404 | 20002 | 19999 | 19109 | 20959 | 8028 | 8907 | 35782 | 4840 | 424 | 411 | 370 | 402 | 373 | 347 | 224 | 157 | 126 | 80 | 126 | 81 | 41 | 20 | 237 | 35 | 98 | 0 |
| DeltaBlue | 54164 | 38375 | 31618 | 48722 | 43499 | 38467 | 17983 | 8880 | 9832 | 16371 | 182 | 474 | 463 | 407 | 441 | 425 | 393 | 248 | 152 | 174 | 122 | 143 | 95 | 36 | 17 | 250 | 68 | 111 | 0 |
| Crypto | 36472 | 33924 | 31637 | 31551 | 30274 | 28421 | 21460 | 12772 | 11823 | 15807 | 2509 | 502 | 263 | 240 | 263 | 294 | 244 | 155 | 236 | 96 | 161 | 67 | 77 | 46 | 33 | 312 | 53 | 120 | 0 |
| RayTrace | 85987 | 90427 | 81621 | 56313 | 53279 | 55592 | 26788 | 26439 | 27030 | 3437 | 734 | 938 | 725 | 665 | 445 | 350 | 429 | 302 | 308 | 284 | 388 | 189 | 183 | 101 | 59 | 299 | 195 | 184 | 0 |
| EarleyBoyer | 56881 | 48565 | 45303 | 53284 | 48207 | 50584 | 4772 | 28638 | 27534 | 19573 | 469 | 1573 | 1023 | 975 | 759 | 660 | 692 | 498 | 349 | 349 | 277 | 338 | 210 | 94 | 67 | 0 | 179 | 0 | 0 |
| RegExp | 7350 | 11807 | 12340 | 7288 | 7070 | 6980 | 4079 | 6073 | 6182 | 837 | 281 | 248 | 82 | 81 | 71 | 73 | 71 | 69 | 69 | 90 | 111 | 154 | 88 | 45 | 20 | 63 | 0 | 0 | 0 |
| Splay | 30820 | 24627 | 24944 | 20185 | 24969 | 26085 | 15149 | 15583 | 10015 | 2113 | 788 | 1879 | 1278 | 1129 | 742 | 736 | 649 | 590 | 604 | 507 | 218 | 557 | 356 | 222 | 96 | 569 | 508 | 0 | 0 |
| NavierStokes | 32666 | 28436 | 28761 | 34543 | 32254 | 32764 | 30775 | 21706 | 21876 | 14309 | 5019 | 791 | 578 | 518 | 574 | 651 | 531 | 320 | 306 | 237 | 440 | 113 | 103 | 92 | 66 | 640 | 125 | 0 | 0 |
| Score | 33049 | 32553 | 30749 | 28766 | 28068 | 27738 | 14511 | 13928 | 13407 | 7938 | 979 | 696 | 467 | 427 | 385 | 374 | 353 | 253 | 230 | 197 | 192 | 172 | 128 | 70 | 39 | 0 | 0 | 0 | 0 |
| Score/MB | 39305 | 532 | 343 | 475 | 247 | 301 | 723 | 213 | 396 | 40 | 1 | 88 | 124 | 35 | 186 | 365 | 286 | 373 | 448 | 456 | 119 | 13 | 1 | 5 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 26 | 65 | 53 | 89 | 90 | 97 | 98 | 101 | 124 | 126 | 141 | 161 | 177 | 214 | 342 | 589 | 91 | 190 | 60 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | node | dune | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | llrt | qjs(ng) | rquickjs | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.16 | 2.3.6 | 24.2.0 | 0.10.0 | 1.11.24.0 | 140.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 130.9M | 138.2M | 115.7M | 78.7M | 14.4M | 50.9M | 196.1M | 338M | 86.6M | 11.8M | 37M | 41.8M | 9M | 8M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 111.1M | 105.9M | 84.6M | 48.4M | 342.9K | 33.6M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 12.7M | 1.7M | 1.3M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 195.8M | 17.3M | 83.5M | 6.9M | 31.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 33611 | 36488 | 37307 | 32803 | 33247 | 32990 | 24351 | 10704 | 36096 | 5324 | 617 | 512 | 451 | 426 | 427 | 374 | 212 | 237 | 196 | 95 | 55 | 49 | 0 | 0 | 0 |
| DeltaBlue | 94648 | 50772 | 36457 | 75368 | 74713 | 77900 | 28993 | 13091 | 31175 | 190 | 625 | 471 | 403 | 383 | 396 | 410 | 264 | 337 | 231 | 119 | 51 | 42 | 0 | 0 | 0 |
| Crypto | 42916 | 50463 | 47603 | 42050 | 42045 | 37764 | 34075 | 20563 | 18269 | 2573 | 788 | 539 | 422 | 418 | 369 | 321 | 316 | 186 | 113 | 94 | 58 | 75 | 0 | 0 | 0 |
| RayTrace | 99159 | 105522 | 100934 | 66599 | 65489 | 66385 | 51429 | 28211 | 6136 | 1553 | 1020 | 546 | 747 | 604 | 578 | 547 | 439 | 462 | 234 | 264 | 129 | 134 | 0 | 0 | 0 |
| EarleyBoyer | 79930 | 63172 | 56732 | 70307 | 72510 | 73769 | 43833 | 38612 | 26384 | 1051 | 2237 | 1019 | 1154 | 1003 | 997 | 899 | 529 | 566 | 463 | 299 | 124 | 145 | 0 | 0 | 0 |
| RegExp | 9709 | 19820 | 19586 | 9839 | 9920 | 9728 | 9971 | 8487 | 938 | 1083 | 404 | 191 | 198 | 178 | 184 | 156 | 109 | 202 | 201 | 280 | 90 | 42 | 0 | 0 | 0 |
| Splay | 39580 | 35375 | 34471 | 35277 | 31993 | 28587 | 21204 | 24097 | 2857 | 2966 | 2288 | 1041 | 1467 | 1019 | 1019 | 944 | 1027 | 1197 | 825 | 527 | 326 | 169 | 0 | 0 | 0 |
| NavierStokes | 38912 | 33801 | 34178 | 39029 | 39029 | 38990 | 36952 | 21980 | 24313 | 3117 | 1092 | 1039 | 746 | 701 | 678 | 706 | 1065 | 509 | 194 | 150 | 114 | 164 | 0 | 0 | 0 |
| Score | 44784 | 44276 | 41355 | 40031 | 39678 | 38816 | 28404 | 18565 | 11016 | 1598 | 956 | 592 | 588 | 519 | 510 | 473 | 386 | 384 | 255 | 192 | 98 | 88 | 0 | 0 | 0 |
| Score/MB | 851 | 360 | 315 | 289 | 343 | 493 | 1972 | 364 | 56 | 4 | 11 | 50 | 15 | 12 | 56 | 58 | 50 | 51 | 13 | 1 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 41 | 42 | 58 | 59 | 62 | 64 | 68 | 84 | 82 | 121 | 146 | 249 | 279 | 0 | 132 | 0 |
