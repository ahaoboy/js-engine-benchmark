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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47777<br>37.4M<br>1275/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46525<br>96.8M<br>480/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45692<br>53.3M<br>857/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40812<br>102.9M<br>396/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 40148<br>121.6M<br>330/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39132<br>67.1M<br>583/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20242<br>19.4M<br>1043/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19029<br>40.1M<br>475/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16797<br>35.2M<br>476/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11460<br>199.7M<br>57/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2148<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1541<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 886<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 840<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 840<br>4.3M<br>196/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 722<br>857K<br>862/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 718<br>1.3M<br>533/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 565<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 389<br>685K<br>581/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 379<br>414.5K<br>936/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 280<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 270<br>2.1M<br>130/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 195<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
6/30/2025, 1:54:05 AM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | dune | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.17 | 13.6.0 | 2.3.7 | 24.3.0 | 0.10.0 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.5.1.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 37.4M | 96.8M | 53.3M | 102.9M | 121.6M | 67.1M | 19.4M | 40.1M | 35.2M | 199.7M | 1.1G | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 37.4M | 96.8M | 937.8K | 102.9M | 121.6M | 67.1M | 571K | 40.1M | 35.2M | 1M | 1.1G | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41480 | 41565 | 35253 | 32905 | 31991 | 32400 | 23310 | 12917 | 12808 | 35464 | 12077 | 1127 | 768 | 693 | 707 | 561 | 601 | 580 | 505 | 293 | 247 | 230 | 204 | 90 | 105 | 61 | 60 | 549 | 131 | 270 | 0 |
| DeltaBlue | 56445 | 50706 | 96195 | 76955 | 76175 | 72684 | 25159 | 13065 | 12774 | 38864 | 230 | 1050 | 727 | 663 | 687 | 599 | 589 | 581 | 456 | 328 | 356 | 325 | 254 | 165 | 116 | 55 | 56 | 519 | 173 | 278 | 0 |
| Crypto | 52265 | 49893 | 42763 | 41327 | 41842 | 41757 | 32943 | 20264 | 17447 | 28438 | 8662 | 1361 | 688 | 738 | 603 | 522 | 551 | 378 | 851 | 782 | 190 | 185 | 122 | 338 | 101 | 81 | 61 | 845 | 122 | 291 | 0 |
| RayTrace | 121654 | 117140 | 105670 | 67561 | 66081 | 68153 | 35001 | 27796 | 27898 | 3392 | 1512 | 1567 | 1205 | 909 | 1102 | 837 | 868 | 688 | 577 | 584 | 528 | 489 | 278 | 505 | 259 | 166 | 137 | 576 | 402 | 350 | 0 |
| EarleyBoyer | 68274 | 66028 | 79981 | 73877 | 71498 | 73653 | 7144 | 38418 | 35703 | 25457 | 847 | 3376 | 1990 | 1476 | 1782 | 1348 | 1364 | 1224 | 771 | 587 | 516 | 501 | 509 | 327 | 288 | 193 | 138 | 0 | 494 | 0 | 0 |
| RegExp | 20386 | 21773 | 10263 | 10193 | 10032 | 10082 | 7870 | 8819 | 8793 | 1379 | 625 | 549 | 198 | 230 | 229 | 233 | 224 | 183 | 62 | 129 | 216 | 199 | 209 | 97 | 252 | 49 | 94 | 109 | 0 | 0 | 0 |
| Splay | 37486 | 35771 | 39034 | 38130 | 36174 | 28506 | 20145 | 24569 | 11523 | 1862 | 1891 | 3651 | 1781 | 1794 | 1919 | 1710 | 1460 | 1643 | 1373 | 1297 | 1140 | 1296 | 991 | 394 | 538 | 230 | 325 | 1844 | 790 | 0 | 0 |
| NavierStokes | 34952 | 34656 | 38694 | 37915 | 38617 | 38765 | 36803 | 21728 | 22002 | 34246 | 12416 | 1863 | 1167 | 1317 | 980 | 937 | 930 | 929 | 1377 | 903 | 465 | 488 | 202 | 881 | 165 | 175 | 119 | 1224 | 218 | 0 | 0 |
| Score | 47777 | 46525 | 45692 | 40812 | 40148 | 39132 | 20242 | 19029 | 16797 | 11460 | 2148 | 1541 | 886 | 840 | 840 | 722 | 718 | 645 | 565 | 500 | 389 | 379 | 280 | 270 | 195 | 107 | 105 | 0 | 0 | 0 | 0 |
| Score/MB | 1275 | 480 | 857 | 396 | 330 | 583 | 1043 | 475 | 476 | 57 | 1 | 42 | 74 | 196 | 162 | 862 | 533 | 326 | 12 | 235 | 581 | 936 | 21 | 130 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 24 | 43 | 34 | 48 | 48 | 49 | 51 | 52 | 58 | 88 | 68 | 81 | 85 | 113 | 129 | 142 | 234 | 234 | 54 | 96 | 31 | 0 |
### macos-arm64
| Engine | bun | jsc | deno | node | dune | v8 | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | ladybird | duktape | mujs | goja | xst | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.17 | 0 | 2.3.7 | 24.3.0 | 0.10.0 | 13.6.0 | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 0 | 16.9.1 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 56.1M | 94.2M | 83.4M | 110.7M | 57.4M | 861K | 131.6M | 32.8M | 194M | 653.8M | 15.7M | 3.6M | 4.1M | 10.3M | 975.9K | 1.2M | 1.5M | 41.2M | 562.1K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 2.4M | 653.8M | 575.4K | 7.3K |
| Exe size | 56.1M | 914.7K | 83.4M | 110.7M | 57.4M | 861K | 65.8M | 32.8M | 147.4K | 653.8M | 7.9M | 3.6M | 2.1M | 10.3M | 975.9K | 1.2M | 1.5M | 41.2M | 562.1K | 429.1K | 12.7M | 1.6M | 75.4M | 12.4M | 1.8M | 653.8M | 575.4K | 7.3K |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 65.8M | 0 | 193.8M | 0 | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 51308 | 52074 | 48215 | 45250 | 48328 | 29403 | 14460 | 15695 | 36968 | 11254 | 1273 | 1268 | 1246 | 1144 | 1086 | 1059 | 820 | 860 | 492 | 409 | 327 | 118 | 181 | 114 | 755 | 208 | 211 | 0 |
| DeltaBlue | 76703 | 72479 | 109657 | 100969 | 110913 | 91997 | 16410 | 17819 | 53080 | 1849 | 1173 | 1281 | 1241 | 1239 | 1087 | 1088 | 946 | 754 | 589 | 604 | 396 | 212 | 195 | 99 | 838 | 244 | 234 | 0 |
| Crypto | 74618 | 74177 | 60442 | 60732 | 61614 | 33917 | 25827 | 23068 | 36190 | 12732 | 1400 | 1175 | 1226 | 974 | 1338 | 982 | 1108 | 1614 | 1293 | 310 | 200 | 521 | 178 | 118 | 1187 | 131 | 254 | 0 |
| RayTrace | 185441 | 159690 | 89465 | 91315 | 94349 | 89909 | 50541 | 51651 | 2090 | 1699 | 2387 | 2149 | 1587 | 1848 | 1286 | 1478 | 1164 | 1086 | 1051 | 952 | 472 | 699 | 428 | 253 | 734 | 567 | 303 | 0 |
| EarleyBoyer | 92350 | 85431 | 100432 | 100554 | 98325 | 71685 | 48526 | 50098 | 37642 | 1177 | 4897 | 3282 | 2549 | 2910 | 2351 | 2318 | 1955 | 1341 | 1162 | 1041 | 852 | 443 | 453 | 247 | 0 | 728 | 0 | 0 |
| RegExp | 29425 | 23410 | 15228 | 14394 | 14302 | 11262 | 12612 | 12859 | 1632 | 1460 | 683 | 315 | 274 | 295 | 286 | 279 | 210 | 107 | 246 | 318 | 302 | 328 | 221 | 146 | 193 | 0 | 0 | 0 |
| Splay | 54102 | 29996 | 51127 | 46914 | 33003 | 38839 | 29410 | 19631 | 3219 | 5607 | 4229 | 3598 | 2513 | 2893 | 2440 | 2347 | 1639 | 2212 | 2062 | 862 | 1289 | 554 | 489 | 586 | 1773 | 1056 | 0 | 0 |
| NavierStokes | 33505 | 36618 | 40513 | 38469 | 38469 | 34622 | 20776 | 21411 | 24241 | 14485 | 1518 | 2052 | 2167 | 1533 | 2392 | 1723 | 2499 | 1950 | 1466 | 740 | 329 | 1471 | 267 | 228 | 1781 | 285 | 0 | 0 |
| Score | 63616 | 56107 | 55542 | 53406 | 52260 | 41592 | 24153 | 23411 | 12780 | 3979 | 1793 | 1538 | 1356 | 1329 | 1296 | 1203 | 1067 | 957 | 874 | 594 | 437 | 425 | 278 | 189 | 0 | 0 | 0 | 0 |
| Score/MB | 1133 | 595 | 665 | 482 | 910 | 49465 | 183 | 713 | 65 | 6 | 114 | 426 | 328 | 129 | 1359 | 1019 | 705 | 23 | 1592 | 1417 | 34 | 263 | 3 | 15 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 31 | 30 | 37 | 38 | 38 | 37 | 41 | 44 | 61 | 46 | 54 | 76 | 84 | 100 | 137 | 42 | 81 | 35 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | dune | ChakraCore | spidermonkey | graaljs | mozjs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | duktape | primjs | mujs | xst | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.17 | 0 | 2.3.7 | 24.3.0 | 0.10.0 | 1.13.0.0.beta | 141.0 | 24.1.2 | 0 | 11.0.27 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 2.99.99 | 0 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 61.5M | 89.6M | 93.9M | 113.5M | 60.4M | 20M | 65.8M | 194.4M | 33.8M | 602.8M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 602.8M | 570.8K | 7.3K |
| Exe size | 861K | 61.5M | 1016.1K | 93.9M | 113.5M | 60.4M | 571K | 65.8M | 148.8K | 33.8M | 602.8M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 602.8M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 22254 | 28990 | 29516 | 31387 | 18138 | 28976 | 25290 | 9666 | 44004 | 8938 | 6817 | 480 | 487 | 420 | 467 | 418 | 415 | 205 | 258 | 137 | 91 | 146 | 85 | 48 | 25 | 400 | 72 | 110 | 0 |
| DeltaBlue | 83600 | 46064 | 33211 | 49708 | 48293 | 47744 | 22910 | 11174 | 53952 | 9633 | 307 | 549 | 552 | 486 | 503 | 483 | 460 | 238 | 291 | 198 | 140 | 172 | 106 | 43 | 22 | 426 | 117 | 124 | 0 |
| Crypto | 42225 | 42747 | 38547 | 33258 | 33981 | 31761 | 26157 | 15865 | 22731 | 12843 | 4759 | 537 | 306 | 277 | 300 | 338 | 281 | 317 | 202 | 111 | 180 | 68 | 73 | 50 | 39 | 457 | 77 | 140 | 0 |
| RayTrace | 109666 | 115364 | 105744 | 71927 | 70151 | 58681 | 34227 | 31418 | 9620 | 28564 | 824 | 1006 | 747 | 777 | 514 | 429 | 486 | 437 | 352 | 341 | 426 | 192 | 212 | 112 | 75 | 180 | 305 | 217 | 0 |
| EarleyBoyer | 72571 | 61402 | 60331 | 67590 | 63886 | 56503 | 6113 | 35025 | 43424 | 28527 | 613 | 1678 | 1237 | 1197 | 900 | 837 | 840 | 426 | 608 | 413 | 323 | 394 | 248 | 101 | 80 | 0 | 275 | 0 | 0 |
| RegExp | 8659 | 16944 | 16729 | 8837 | 8667 | 7720 | 5497 | 7743 | 1391 | 5671 | 366 | 272 | 90 | 93 | 82 | 84 | 82 | 98 | 80 | 104 | 131 | 173 | 90 | 48 | 22 | 76 | 0 | 0 | 0 |
| Splay | 43215 | 33542 | 40949 | 35603 | 37225 | 24244 | 22524 | 15736 | 2867 | 9591 | 2784 | 2041 | 1451 | 1482 | 887 | 950 | 849 | 957 | 725 | 602 | 311 | 608 | 433 | 272 | 116 | 209 | 463 | 0 | 0 |
| NavierStokes | 36915 | 33505 | 33438 | 36210 | 36841 | 33700 | 36101 | 24783 | 32648 | 23150 | 9947 | 837 | 647 | 598 | 653 | 772 | 613 | 429 | 371 | 272 | 526 | 112 | 110 | 95 | 71 | 868 | 147 | 0 | 0 |
| Score | 41404 | 40814 | 39152 | 36083 | 33499 | 31290 | 18575 | 16574 | 15257 | 13548 | 1635 | 760 | 532 | 507 | 445 | 444 | 419 | 322 | 303 | 228 | 226 | 188 | 140 | 79 | 47 | 0 | 0 | 0 | 0 |
| Score/MB | 49241 | 663 | 436 | 384 | 295 | 517 | 926 | 251 | 78 | 400 | 2 | 96 | 142 | 42 | 215 | 433 | 339 | 627 | 447 | 528 | 140 | 14 | 2 | 6 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 23 | 20 | 54 | 50 | 81 | 81 | 87 | 84 | 89 | 96 | 106 | 124 | 133 | 175 | 200 | 323 | 516 | 83 | 139 | 53 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | dune | node | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.17 | 2.3.7 | 0.10.0 | 24.3.0 | 1.11.24.0 | 141.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 131.7M | 140.3M | 78.7M | 115.8M | 14.4M | 51.2M | 196.1M | 338.1M | 112.8M | 11.8M | 37M | 9.3M | 41.8M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 112M | 108M | 48.4M | 84.8M | 342.9K | 33.7M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 1.5M | 12.7M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 30.3M | 31.1M | 14.1M | 17.5M | 195.8M | 17.5M | 109.8M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 35186 | 36414 | 36654 | 33403 | 33290 | 30208 | 24736 | 12797 | 36107 | 8758 | 705 | 508 | 448 | 441 | 434 | 427 | 211 | 236 | 197 | 93 | 53 | 49 | 0 | 0 | 0 |
| DeltaBlue | 90701 | 49218 | 45040 | 74046 | 73682 | 61569 | 28087 | 13012 | 30705 | 416 | 627 | 466 | 410 | 403 | 369 | 403 | 264 | 337 | 230 | 116 | 51 | 42 | 0 | 0 | 0 |
| Crypto | 42982 | 48579 | 44864 | 42121 | 41381 | 41966 | 33642 | 20478 | 25308 | 2094 | 780 | 548 | 431 | 513 | 419 | 381 | 316 | 186 | 116 | 90 | 59 | 74 | 0 | 0 | 0 |
| RayTrace | 101896 | 104708 | 99307 | 60766 | 66229 | 65563 | 46942 | 27399 | 2735 | 3820 | 1021 | 548 | 740 | 589 | 602 | 583 | 439 | 459 | 235 | 262 | 130 | 134 | 0 | 0 | 0 |
| EarleyBoyer | 77078 | 59945 | 56900 | 69650 | 72219 | 71121 | 42828 | 38829 | 25458 | 1548 | 2257 | 1007 | 1158 | 989 | 994 | 981 | 521 | 556 | 462 | 298 | 123 | 135 | 0 | 0 | 0 |
| RegExp | 9699 | 19040 | 19528 | 9829 | 9709 | 9910 | 9910 | 8956 | 999 | 937 | 405 | 189 | 196 | 173 | 186 | 184 | 109 | 198 | 200 | 274 | 90 | 42 | 0 | 0 | 0 |
| Splay | 39629 | 35123 | 34960 | 34454 | 28008 | 33287 | 23518 | 23176 | 2040 | 6566 | 2432 | 1030 | 1456 | 986 | 1019 | 985 | 994 | 616 | 815 | 535 | 323 | 164 | 0 | 0 | 0 |
| NavierStokes | 38912 | 33996 | 33882 | 38881 | 38990 | 38912 | 37248 | 22024 | 25796 | 3458 | 1086 | 1037 | 742 | 752 | 713 | 678 | 1062 | 504 | 193 | 150 | 115 | 166 | 0 | 0 | 0 |
| Score | 44761 | 43329 | 41999 | 39399 | 38810 | 38343 | 28270 | 18943 | 10034 | 2359 | 980 | 588 | 588 | 536 | 521 | 510 | 383 | 351 | 255 | 190 | 98 | 86 | 0 | 0 | 0 |
| Score/MB | 851 | 352 | 318 | 280 | 493 | 331 | 1963 | 369 | 51 | 6 | 8 | 49 | 15 | 57 | 12 | 56 | 50 | 46 | 13 | 1 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 41 | 41 | 58 | 60 | 61 | 61 | 62 | 84 | 82 | 121 | 148 | 250 | 290 | 0 | 130 | 0 |
