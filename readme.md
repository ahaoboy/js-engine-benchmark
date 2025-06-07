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


## Engine & Runtime

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47385<br>95.9M<br>494/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46704<br>36.2M<br>1288/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45468<br>53.3M<br>853/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40979<br>100.6M<br>407/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39994<br>121.3M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20022<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19020<br>40M<br>475/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11048<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1547<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 897<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 860<br>4.7M<br>182/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 844<br>5.2M<br>163/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 736<br>857K<br>879/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 725<br>1.3M<br>538/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 653<br>2M<br>331/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 569<br>45.7M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 406<br>685K<br>606/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 381<br>414.5K<br>941/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 279<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 252<br>2.2M<br>117/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 108<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 106<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
6/7/2025, 7:51:56 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | kiesel | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 0 | 13.6.0 | 2.3.5 | 24.1.0 | 1.13.0.0.beta | 140.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 95.9M | 36.2M | 53.3M | 100.6M | 121.3M | 19.4M | 40M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 12.6M | 454.2K | 7.3K |
| Exe size | 95.9M | 36.2M | 937.8K | 100.6M | 121.3M | 571K | 40M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 12.6M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41699 | 41335 | 35083 | 32778 | 32453 | 23501 | 12896 | 35616 | 1127 | 808 | 694 | 708 | 559 | 591 | 583 | 500 | 246 | 228 | 203 | 86.8 | 61.8 | 61 | 0 | 0 |
| DeltaBlue | 54580 | 54071 | 95798 | 76796 | 75441 | 24715 | 13005 | 27234 | 1047 | 729 | 678 | 691 | 596 | 593 | 575 | 447 | 356 | 325 | 253 | 157 | 56 | 57.2 | 0 | 0 |
| Crypto | 50091 | 51980 | 42653 | 41328 | 41815 | 30844 | 20529 | 11988 | 1335 | 697 | 738 | 592 | 520 | 557 | 379 | 865 | 189 | 184 | 122 | 296 | 81.1 | 62.6 | 0 | 0 |
| RayTrace | 119730 | 106484 | 105152 | 68153 | 65045 | 35889 | 27399 | 11089 | 1603 | 1193 | 917 | 1090 | 897 | 881 | 732 | 585 | 548 | 493 | 277 | 457 | 166 | 139 | 0 | 0 |
| EarleyBoyer | 67488 | 67962 | 76517 | 74191 | 70358 | 7118 | 38935 | 25667 | 3472 | 2001 | 1553 | 1791 | 1359 | 1379 | 1227 | 794 | 569 | 512 | 518 | 302 | 200 | 139 | 0 | 0 |
| RegExp | 21499 | 20345 | 10284 | 10152 | 9991 | 7937 | 8685 | 1196 | 551 | 198 | 242 | 229 | 237 | 231 | 182 | 62.3 | 225 | 203 | 213 | 97.2 | 49 | 96.9 | 0 | 0 |
| Splay | 37119 | 38187 | 39727 | 38301 | 36003 | 19476 | 24659 | 3028 | 3696 | 1838 | 1825 | 2017 | 1802 | 1482 | 1703 | 1373 | 1303 | 1309 | 952 | 415 | 228 | 330 | 0 | 0 |
| NavierStokes | 34577 | 34656 | 38765 | 38881 | 38842 | 36506 | 21771 | 18513 | 1833 | 1168 | 1371 | 984 | 955 | 945 | 932 | 1428 | 486 | 481 | 203 | 732 | 174 | 120 | 0 | 0 |
| Score | 47385 | 46704 | 45468 | 40979 | 39994 | 20022 | 19020 | 11048 | 1547 | 897 | 860 | 844 | 736 | 725 | 653 | 569 | 406 | 381 | 279 | 252 | 108 | 106 | 0 | 0 |
| Score/MB | 494 | 1288 | 853 | 407 | 329 | 1031 | 475 | 55 | 42 | 75 | 182 | 163 | 879 | 538 | 331 | 12 | 606 | 941 | 21 | 117 | 4 | 8 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | kiesel | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.15 | 2.3.5 | 24.1.0 | 13.6.0 | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54.9M | 82.1M | 110.5M | 861K | 131.2M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 12.4M | 575.4K | 17.8M | 7.3K |
| Exe size | 913.2K | 54.9M | 82.1M | 110.5M | 861K | 65.6M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 12.4M | 575.4K | 554.3K | 7.3K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 65.6M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 52258 | 50496 | 48272 | 44809 | 34896 | 15508 | 37410 | 1372 | 1327 | 1190 | 1315 | 1108 | 1104 | 826 | 850 | 409 | 119 | 317 | 90 | 0 | 0 | 0 |
| DeltaBlue | 76981 | 77186 | 110351 | 107739 | 86357 | 16959 | 58369 | 1227 | 1322 | 1175 | 1236 | 1117 | 1122 | 946 | 812 | 606 | 226 | 393 | 92.1 | 0 | 0 | 0 |
| Crypto | 73853 | 70854 | 59727 | 60821 | 38010 | 26664 | 46836 | 1471 | 1222 | 993 | 1227 | 1344 | 1004 | 1108 | 1694 | 312 | 562 | 200 | 114 | 0 | 0 | 0 |
| RayTrace | 190621 | 193137 | 94941 | 87319 | 92573 | 50860 | 5485 | 2547 | 2039 | 2077 | 1588 | 1260 | 1498 | 1259 | 1153 | 1015 | 757 | 476 | 249 | 0 | 0 | 0 |
| EarleyBoyer | 104314 | 106804 | 103953 | 102706 | 73288 | 52278 | 48929 | 5227 | 3274 | 3122 | 2658 | 2389 | 2357 | 2028 | 1453 | 1133 | 449 | 864 | 241 | 0 | 0 | 0 |
| RegExp | 32490 | 32912 | 15425 | 15410 | 11693 | 13391 | 2039 | 735 | 317 | 316 | 280 | 287 | 278 | 221 | 106 | 327 | 338 | 297 | 143 | 0 | 0 | 0 |
| Splay | 54966 | 51331 | 54966 | 46491 | 40371 | 31651 | 4608 | 4775 | 3595 | 3129 | 2518 | 2540 | 2339 | 1775 | 2432 | 1881 | 583 | 1221 | 573 | 0 | 0 | 0 |
| NavierStokes | 33687 | 34394 | 40662 | 40662 | 35805 | 21454 | 35989 | 1638 | 2142 | 1644 | 2187 | 2553 | 1716 | 2682 | 1988 | 780 | 1571 | 316 | 227 | 0 | 0 | 0 |
| Score | 65893 | 65310 | 56794 | 54401 | 43632 | 25332 | 17618 | 1926 | 1559 | 1399 | 1378 | 1322 | 1220 | 1111 | 1001 | 674 | 447 | 431 | 179 | 0 | 0 | 0 |
| Score/MB | 713 | 1189 | 692 | 492 | 51891 | 193 | 90 | 122 | 432 | 136 | 334 | 1239 | 1033 | 734 | 24 | 1608 | 272 | 33 | 14 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | xst | mujs | goja | kiesel | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 13.6.0 | 0 | 2.3.5 | 24.1.0 | 1.13.0.0.beta | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 16.8.1 | 1.3.5 | 0 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 60.3M | 861K | 89.6M | 91.7M | 113.2M | 19.9M | 65.6M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Exe size | 60.3M | 861K | 1016.1K | 91.7M | 113.2M | 569.8K | 65.6M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28182 | 22261 | 29039 | 30942 | 22696 | 25661 | 9457 | 44389 | 500 | 483 | 400 | 469 | 435 | 408 | 254 | 94.8 | 145 | 145 | 50.3 | 23.5 | 0 | 0 |
| DeltaBlue | 45086 | 80624 | 37694 | 52240 | 54025 | 23181 | 10863 | 54071 | 571 | 552 | 485 | 509 | 445 | 442 | 276 | 144 | 198 | 170 | 48 | 21.8 | 0 | 0 |
| Crypto | 42620 | 41878 | 38738 | 34423 | 34433 | 28462 | 16149 | 27766 | 572 | 306 | 270 | 300 | 300 | 260 | 199 | 186 | 111 | 79.2 | 53.8 | 38.3 | 0 | 0 |
| RayTrace | 116030 | 108482 | 106632 | 71335 | 70299 | 39289 | 31746 | 12136 | 1121 | 829 | 766 | 513 | 423 | 462 | 340 | 452 | 344 | 241 | 121 | 70.2 | 0 | 0 |
| EarleyBoyer | 64904 | 70822 | 52486 | 67092 | 63229 | 6356 | 35247 | 43734 | 1832 | 1257 | 1149 | 900 | 804 | 810 | 580 | 319 | 414 | 421 | 116 | 77.9 | 0 | 0 |
| RegExp | 17274 | 8793 | 17655 | 8874 | 8901 | 5587 | 8035 | 1468 | 295 | 94.5 | 91.7 | 82.6 | 79.9 | 79.9 | 77.6 | 132 | 104 | 195 | 54.3 | 23.1 | 0 | 0 |
| Splay | 38309 | 43198 | 38252 | 37820 | 37624 | 17459 | 23046 | 1967 | 2328 | 1630 | 1430 | 877 | 863 | 821 | 705 | 289 | 497 | 656 | 299 | 123 | 0 | 0 |
| NavierStokes | 38211 | 37248 | 33290 | 37470 | 36989 | 35841 | 24783 | 30540 | 902 | 657 | 578 | 656 | 807 | 604 | 365 | 516 | 272 | 128 | 105 | 77.8 | 0 | 0 |
| Score | 42332 | 41118 | 38985 | 36780 | 35139 | 18673 | 17430 | 15373 | 822 | 552 | 493 | 446 | 427 | 403 | 293 | 228 | 224 | 206 | 86.4 | 47 | 0 | 0 |
| Score/MB | 702 | 48901 | 434 | 401 | 310 | 937 | 265 | 79 | 104 | 147 | 40 | 216 | 370 | 326 | 432 | 138 | 519 | 15 | 6 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | goja | kiesel | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.15 | 2.3.5 | 24.1.0 | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.6M | 129.9M | 137.3M | 115.6M | 51.1M | 196.1M | 86.6M | 38.1M | 41.8M | 9M | 8M | 7.5M | 19.5M | 46.3M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110.1M | 105.2M | 84.5M | 33.7M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 33.2M | 27.4M | 1.3M | 0.4K |
| Dll size | 25M | 19.8M | 32.1M | 31.1M | 17.5M | 195.8M | 83.5M | 32.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 13.2M | 15M | 4.7M | 0 |
| Richards | 35376 | 37487 | 33138 | 33050 | 13489 | 35832 | 711 | 451 | 424 | 434 | 378 | 233 | 190 | 55.5 | 47.3 | 0 | 0 |
| DeltaBlue | 95798 | 47929 | 74594 | 64981 | 13210 | 27781 | 623 | 403 | 377 | 396 | 410 | 331 | 236 | 51.7 | 42.6 | 0 | 0 |
| Crypto | 42834 | 41971 | 42131 | 42060 | 19219 | 23484 | 792 | 424 | 420 | 369 | 321 | 185 | 114 | 58.8 | 75 | 0 | 0 |
| RayTrace | 100639 | 101896 | 67117 | 66599 | 28165 | 2957 | 1009 | 741 | 604 | 585 | 547 | 459 | 230 | 131 | 134 | 0 | 0 |
| EarleyBoyer | 82348 | 59345 | 73415 | 73627 | 38612 | 28031 | 2263 | 1148 | 996 | 982 | 884 | 573 | 467 | 125 | 142 | 0 | 0 |
| RegExp | 9670 | 17365 | 9728 | 9699 | 9029 | 1105 | 400 | 196 | 192 | 187 | 155 | 199 | 198 | 91.1 | 43 | 0 | 0 |
| Splay | 38570 | 33245 | 37078 | 33765 | 24570 | 3163 | 2475 | 1431 | 1043 | 993 | 944 | 687 | 782 | 330 | 171 | 0 | 0 |
| NavierStokes | 38951 | 34098 | 39029 | 39029 | 22045 | 26241 | 1095 | 740 | 713 | 677 | 727 | 503 | 194 | 115 | 167 | 0 | 0 |
| Score | 45218 | 41604 | 40490 | 39275 | 19167 | 10746 | 982 | 585 | 525 | 510 | 474 | 356 | 253 | 99.4 | 87.8 | 0 | 0 |
| Score/MB | 860 | 320 | 294 | 339 | 374 | 54 | 11 | 15 | 12 | 56 | 59 | 47 | 12 | 2 | 2 | 0 | 0 |
