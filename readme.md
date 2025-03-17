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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45310<br>95.6M<br>474/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45259<br>35.1M<br>1288/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 44908<br>53.4M<br>841/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 37710<br>118.9M<br>317/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 35443<br>122.2M<br>290/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19805<br>19.4M<br>1020/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18429<br>296.3M<br>62/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9889<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1538<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 891<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 860<br>4.7M<br>182/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 820<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 724<br>857K<br>865/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 713<br>1.3M<br>529/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 622<br>2.1M<br>298/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 376<br>685K<br>562/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 359<br>414.5K<br>886/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 258<br>2.2M<br>119/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |

## bench
3/17/2025, 1:23:46 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | node | deno | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | xst | boa | JerryScript |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 0 | 13.5.0 | 23.10.0 | 2.2.4 | 1.13.0.0.beta | 134.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 95.6M | 35.1M | 53.4M | 118.9M | 122.2M | 19.4M | 296.3M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 2.2M | 27M | 454.2K |
| Exe size | 95.6M | 35.1M | 937K | 118.9M | 122.2M | 571K | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 2.2M | 27M | 454.2K |
| Dll size | 0 | 0 | 52.5M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41070 | 41709 | 35238 | 32813 | 33089 | 23536 | 13408 | 35535 | 1132 | 800 | 683 | 703 | 554 | 590 | 536 | 248 | 227 | 88.6 | 61 | 269 |
| DeltaBlue | 53020 | 49218 | 90780 | 72122 | 70793 | 24129 | 12959 | 41046 | 1058 | 733 | 678 | 674 | 601 | 588 | 556 | 359 | 317 | 158 | 55 | 281 |
| Crypto | 49609 | 46002 | 42331 | 41446 | 41783 | 31824 | 17594 | 25386 | 1375 | 698 | 803 | 522 | 526 | 544 | 357 | 190 | 184 | 316 | 79.5 | 294 |
| RayTrace | 100121 | 110332 | 102932 | 59657 | 66451 | 34483 | 28046 | 3176 | 1563 | 1187 | 943 | 1084 | 866 | 882 | 682 | 526 | 488 | 482 | 165 | 344 |
| EarleyBoyer | 65076 | 67337 | 80554 | 60594 | 72065 | 7044 | 36976 | 18373 | 3376 | 1991 | 1481 | 1776 | 1331 | 1313 | 1194 | 529 | 502 | 318 | 190 | 0 |
| RegExp | 20659 | 19951 | 10021 | 9137 | 10122 | 7667 | 8594 | 781 | 554 | 198 | 240 | 228 | 230 | 223 | 181 | 214 | 195 | 92.6 | 49 | 0 |
| Splay | 35555 | 36532 | 38032 | 32719 | 13552 | 19223 | 22280 | 2229 | 3549 | 1755 | 1775 | 1926 | 1740 | 1457 | 1610 | 821 | 894 | 388 | 226 | 0 |
| NavierStokes | 34360 | 34429 | 38655 | 38584 | 38732 | 36582 | 21919 | 24313 | 1836 | 1188 | 1350 | 983 | 932 | 940 | 890 | 479 | 488 | 806 | 175 | 0 |
| Score | 45310 | 45259 | 44908 | 37710 | 35443 | 19805 | 18429 | 9889 | 1538 | 891 | 860 | 820 | 724 | 713 | 622 | 376 | 359 | 258 | 106 | 0 |
| Score/MB | 474 | 1288 | 841 | 317 | 290 | 1020 | 62 | 49 | 42 | 74 | 182 | 158 | 865 | 529 | 298 | 562 | 886 | 119 | 3 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | mujs | xst | JerryScript | ChakraCore |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.2.4 | 23.10.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 | 1.13.0.0.beta |
| Total size | 55.3M | 105.8M | 108.7M | 861.1K | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K | 17.8M |
| Exe size | 55.3M | 105.8M | 108.7M | 861.1K | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K | 554.3K |
| Dll size | 0 | 0 | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M |
| Richards | 52522 | 45999 | 43450 | 32524 | 37388 | 1331 | 1338 | 1187 | 1345 | 1110 | 1071 | 826 | 408 | 114 | 218 | 0 |
| DeltaBlue | 74766 | 107891 | 103554 | 88301 | 55083 | 1212 | 1349 | 1252 | 1230 | 1133 | 1121 | 951 | 608 | 218 | 235 | 0 |
| Crypto | 72101 | 58858 | 59427 | 38063 | 42594 | 1477 | 1223 | 1000 | 1231 | 1350 | 990 | 1117 | 313 | 554 | 263 | 0 |
| RayTrace | 186847 | 91685 | 74665 | 96051 | 2716 | 2544 | 2035 | 1993 | 1596 | 1269 | 1486 | 1195 | 1010 | 743 | 314 | 0 |
| EarleyBoyer | 103867 | 104386 | 91367 | 76466 | 53258 | 5116 | 3333 | 3070 | 2670 | 2396 | 2339 | 1818 | 1118 | 447 | 0 | 0 |
| RegExp | 31884 | 15425 | 13764 | 10990 | 1965 | 731 | 315 | 309 | 280 | 287 | 280 | 224 | 342 | 339 | 0 | 0 |
| Splay | 54216 | 56025 | 49676 | 41536 | 3246 | 4800 | 3655 | 3142 | 2518 | 2581 | 2380 | 1644 | 1956 | 584 | 0 | 0 |
| NavierStokes | 33538 | 38912 | 40513 | 36358 | 36506 | 1495 | 2145 | 1657 | 2205 | 2586 | 1745 | 2671 | 792 | 1579 | 0 | 0 |
| Score | 64998 | 55802 | 51635 | 43710 | 15269 | 1890 | 1570 | 1399 | 1385 | 1332 | 1217 | 1082 | 681 | 441 | 0 | 0 |
| Score/MB | 1176 | 527 | 475 | 51979 | 78 | 120 | 435 | 136 | 335 | 1248 | 1030 | 715 | 1625 | 268 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | ChakraCore | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | mujs | xst | boa | JerryScript |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 13.5.0 | 2.2.4 | 23.10.0 | 1.13.0.0.beta | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 60.7M | 861.1K | 113M | 111.6M | 19.9M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 441.8K | 1.6M | 25.3M | 570.8K |
| Exe size | 60.7M | 861.1K | 113M | 111.6M | 569.8K | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1.2M | 1.2M | 693.4K | 441.8K | 1.6M | 25.3M | 570.8K |
| Dll size | 0 | 0 | 0 | 0 | 19.4M | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 29050 | 23066 | 23151 | 23967 | 26003 | 45172 | 497 | 492 | 417 | 488 | 440 | 418 | 258 | 147 | 93.4 | 25.8 | 114 |
| DeltaBlue | 46739 | 64928 | 51334 | 46653 | 20902 | 55579 | 565 | 561 | 471 | 519 | 505 | 463 | 292 | 203 | 144 | 23.5 | 132 |
| Crypto | 43048 | 43218 | 35820 | 35325 | 27195 | 28148 | 568 | 315 | 261 | 306 | 334 | 287 | 208 | 114 | 184 | 40.5 | 141 |
| RayTrace | 108852 | 106780 | 70817 | 39835 | 38405 | 8649 | 1094 | 859 | 783 | 524 | 441 | 498 | 357 | 352 | 428 | 77.3 | 225 |
| EarleyBoyer | 58597 | 70814 | 66397 | 53598 | 6300 | 43883 | 1839 | 1331 | 1238 | 923 | 858 | 856 | 624 | 422 | 303 | 87.6 | 0 |
| RegExp | 17132 | 8965 | 9101 | 7682 | 5631 | 1493 | 293 | 96.8 | 95.3 | 85.1 | 84.5 | 83.8 | 81.9 | 107 | 133 | 24.5 | 0 |
| Splay | 38651 | 43964 | 39026 | 12618 | 19841 | 3232 | 2372 | 1649 | 1496 | 920 | 927 | 877 | 739 | 464 | 299 | 141 | 0 |
| NavierStokes | 34030 | 37211 | 37842 | 38063 | 36361 | 32796 | 894 | 673 | 610 | 663 | 832 | 622 | 377 | 280 | 529 | 77.7 | 0 |
| Score | 41261 | 40458 | 35787 | 27328 | 18633 | 15976 | 817 | 567 | 506 | 458 | 455 | 426 | 307 | 227 | 226 | 50.9 | 0 |
| Score/MB | 680 | 48112 | 316 | 244 | 935 | 82 | 104 | 151 | 41 | 222 | 394 | 345 | 453 | 526 | 137 | 2 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | txiki.js | qjs(ng) | llrt | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.2.4 | 23.10.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.8M | 134.7M | 113.7M | 196.1M | 86.7M | 38M | 9M | 41.8M | 8M | 7.5M | 42.4M | 5.9M |
| Exe size | 108M | 102.6M | 82.7M | 349.1K | 3M | 5.7M | 1.7M | 12.7M | 1.3M | 665.3K | 27.4M | 1.3M |
| Dll size | 19.8M | 32M | 31M | 195.8M | 83.6M | 32.3M | 7.3M | 29.1M | 6.7M | 6.9M | 15M | 4.7M |
| Richards | 36778 | 32686 | 32916 | 36024 | 707 | 447 | 430 | 392 | 384 | 233 | 49.2 | 0 |
| DeltaBlue | 44508 | 69133 | 70330 | 28808 | 622 | 410 | 410 | 356 | 417 | 293 | 42.4 | 0 |
| Crypto | 45270 | 42117 | 41790 | 22297 | 786 | 430 | 365 | 404 | 321 | 186 | 75.4 | 0 |
| RayTrace | 92795 | 65045 | 60087 | 2513 | 1011 | 731 | 578 | 599 | 553 | 462 | 134 | 0 |
| EarleyBoyer | 56821 | 72873 | 61512 | 25997 | 2221 | 1153 | 985 | 982 | 888 | 563 | 143 | 0 |
| RegExp | 17655 | 9900 | 8331 | 1107 | 405 | 197 | 181 | 181 | 155 | 201 | 43 | 0 |
| Splay | 32653 | 36964 | 10007 | 2943 | 2437 | 1433 | 1008 | 1035 | 944 | 712 | 185 | 0 |
| NavierStokes | 33950 | 38951 | 38694 | 24338 | 1088 | 741 | 677 | 712 | 730 | 510 | 167 | 0 |
| Score | 40779 | 39905 | 32192 | 10229 | 978 | 586 | 509 | 508 | 478 | 353 | 89.2 | 0 |
| Score/MB | 319 | 296 | 283 | 52 | 11 | 15 | 56 | 12 | 59 | 46 | 2 | 0 |
