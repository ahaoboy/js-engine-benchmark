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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47123<br>95.9M<br>491/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46983<br>36.2M<br>1296/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45643<br>53.3M<br>856/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40668<br>100.6M<br>404/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39985<br>121.3M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20278<br>19.4M<br>1044/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19116<br>40M<br>477/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11620<br>199.7M<br>58/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 897<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 837<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 832<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 773<br>857K<br>923/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 724<br>1.3M<br>537/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 650<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 563<br>45.7M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 386<br>685K<br>577/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 362<br>414.5K<br>894/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 253<br>2.2M<br>117/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
6/7/2025, 11:16:09 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | kiesel | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 0 | 13.6.0 | 2.3.5 | 24.1.0 | 1.13.0.0.beta | 140.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 95.9M | 36.2M | 53.3M | 100.6M | 121.3M | 19.4M | 40M | 199.7M | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 12.6M | 454.2K | 7.3K |
| Exe size | 95.9M | 36.2M | 937.8K | 100.6M | 121.3M | 571K | 40M | 1M | 36M | 11.9M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 12.6M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41501 | 41268 | 34974 | 32386 | 31955 | 23391 | 13556 | 35447 | 1107 | 791 | 710 | 674 | 613 | 597 | 579 | 500 | 248 | 227 | 201 | 87.4 | 58.7 | 60.6 | 0 | 0 |
| DeltaBlue | 54666 | 57146 | 94939 | 72386 | 73252 | 26626 | 13091 | 27082 | 1044 | 738 | 685 | 667 | 625 | 596 | 581 | 462 | 360 | 321 | 253 | 158 | 55.8 | 56.4 | 0 | 0 |
| Crypto | 49969 | 51480 | 42543 | 41523 | 41286 | 32001 | 20301 | 29486 | 1367 | 686 | 597 | 735 | 570 | 546 | 379 | 856 | 192 | 184 | 122 | 294 | 81.4 | 62.1 | 0 | 0 |
| RayTrace | 113884 | 107076 | 106928 | 69189 | 67117 | 35114 | 27620 | 3182 | 1552 | 1211 | 1089 | 886 | 934 | 881 | 712 | 581 | 523 | 494 | 277 | 469 | 164 | 138 | 0 | 0 |
| EarleyBoyer | 67703 | 68384 | 81635 | 74629 | 72391 | 7095 | 38315 | 28630 | 3400 | 2000 | 1772 | 1469 | 1397 | 1381 | 1231 | 778 | 548 | 513 | 508 | 312 | 195 | 139 | 0 | 0 |
| RegExp | 22024 | 20113 | 10274 | 10142 | 9961 | 7780 | 8654 | 1402 | 550 | 197 | 229 | 229 | 238 | 228 | 184 | 61.9 | 222 | 200 | 211 | 96.7 | 48.7 | 95 | 0 | 0 |
| Splay | 36443 | 38276 | 38431 | 37828 | 36035 | 20064 | 24798 | 2753 | 3724 | 1832 | 1954 | 1802 | 1830 | 1483 | 1671 | 1269 | 952 | 876 | 942 | 382 | 236 | 326 | 0 | 0 |
| NavierStokes | 34656 | 34691 | 38694 | 38803 | 38765 | 36878 | 21793 | 33390 | 1797 | 1192 | 965 | 1301 | 1021 | 949 | 925 | 1426 | 480 | 492 | 202 | 763 | 175 | 119 | 0 | 0 |
| Score | 47123 | 46983 | 45643 | 40668 | 39985 | 20278 | 19116 | 11620 | 1534 | 897 | 837 | 832 | 773 | 724 | 650 | 563 | 386 | 362 | 278 | 253 | 107 | 105 | 0 | 0 |
| Score/MB | 491 | 1296 | 856 | 404 | 329 | 1044 | 477 | 58 | 42 | 75 | 162 | 194 | 923 | 537 | 329 | 12 | 577 | 894 | 21 | 117 | 3 | 8 | 0 | 0 |
### macos-arm64
| Engine | bun | jsc | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | kiesel | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 0 | 2.3.5 | 24.1.0 | 13.6.0 | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 54.9M | 92.4M | 82.1M | 110.5M | 861K | 131.2M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 975.9K | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 12.4M | 575.4K | 17.8M | 7.3K |
| Exe size | 54.9M | 913.2K | 82.1M | 110.5M | 861K | 65.6M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 975.9K | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 12.4M | 575.4K | 554.3K | 7.3K |
| Dll size | 0 | 91.5M | 0 | 0 | 0 | 65.6M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 53631 | 53232 | 48487 | 45441 | 35401 | 15547 | 37470 | 1372 | 1340 | 1196 | 1311 | 1131 | 1069 | 830 | 852 | 407 | 119 | 337 | 86.4 | 0 | 0 | 0 |
| DeltaBlue | 77259 | 77292 | 111806 | 108691 | 83117 | 17845 | 55652 | 1262 | 1342 | 1229 | 1243 | 1130 | 1147 | 981 | 801 | 611 | 226 | 396 | 83.1 | 0 | 0 | 0 |
| Crypto | 75174 | 78014 | 61611 | 60748 | 37549 | 26428 | 45624 | 1493 | 1234 | 999 | 1224 | 1391 | 1010 | 1126 | 1710 | 314 | 560 | 202 | 99.7 | 0 | 0 | 0 |
| RayTrace | 188919 | 188697 | 89687 | 96273 | 96125 | 51230 | 5307 | 2580 | 2161 | 2072 | 1608 | 1289 | 1490 | 1312 | 1162 | 1020 | 742 | 479 | 191 | 0 | 0 | 0 |
| EarleyBoyer | 104525 | 104613 | 103325 | 101334 | 72062 | 52482 | 51357 | 5323 | 3294 | 3137 | 2671 | 2369 | 2359 | 1720 | 1459 | 1130 | 452 | 806 | 196 | 0 | 0 | 0 |
| RegExp | 31489 | 29577 | 15062 | 15396 | 11705 | 13365 | 1936 | 741 | 319 | 319 | 282 | 289 | 281 | 232 | 107 | 354 | 339 | 231 | 112 | 0 | 0 | 0 |
| Splay | 53311 | 55104 | 56710 | 48691 | 42245 | 31619 | 3167 | 4709 | 3663 | 3061 | 2469 | 2619 | 2269 | 1923 | 2437 | 1149 | 584 | 617 | 317 | 0 | 0 | 0 |
| NavierStokes | 33700 | 33505 | 40729 | 40729 | 36618 | 21263 | 31694 | 1654 | 2155 | 1657 | 2192 | 2395 | 1738 | 2694 | 1991 | 783 | 1577 | 240 | 185 | 0 | 0 | 0 |
| Score | 65719 | 65673 | 56756 | 55449 | 43925 | 25471 | 16323 | 1945 | 1585 | 1408 | 1379 | 1331 | 1217 | 1121 | 1003 | 641 | 447 | 371 | 143 | 0 | 0 | 0 |
| Score/MB | 1196 | 710 | 691 | 501 | 52240 | 194 | 84 | 123 | 439 | 137 | 334 | 1396 | 1030 | 741 | 24 | 1529 | 272 | 29 | 11 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | xst | mujs | goja | kiesel | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.15 | 13.6.0 | 0 | 2.3.5 | 24.1.0 | 1.13.0.0.beta | 140.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2025.04.26 | 0 | 0 | 16.8.1 | 1.3.5 | 0 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 60.3M | 861K | 89.6M | 91.7M | 113.2M | 19.9M | 65.6M | 194.4M | 7.9M | 3.7M | 2.1M | 12.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Exe size | 60.3M | 861K | 1016.1K | 91.7M | 113.2M | 569.8K | 65.6M | 148.8K | 7.9M | 3.7M | 2.1M | 12.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28513 | 22904 | 29541 | 31278 | 22611 | 24994 | 9549 | 43873 | 511 | 488 | 476 | 335 | 392 | 413 | 257 | 93.8 | 146 | 146 | 50.8 | 26.1 | 0 | 0 |
| DeltaBlue | 45225 | 79990 | 37615 | 54878 | 54005 | 23587 | 10420 | 53199 | 575 | 559 | 504 | 328 | 448 | 453 | 291 | 146 | 203 | 172 | 48.1 | 23.1 | 0 | 0 |
| Crypto | 42903 | 42561 | 38697 | 34382 | 34199 | 28537 | 15923 | 27557 | 566 | 309 | 300 | 224 | 321 | 280 | 204 | 185 | 112 | 77.9 | 53.9 | 39.7 | 0 | 0 |
| RayTrace | 116030 | 109888 | 107298 | 69189 | 71261 | 31450 | 31788 | 9222 | 1105 | 805 | 523 | 762 | 406 | 497 | 352 | 454 | 343 | 239 | 120 | 76.8 | 0 | 0 |
| EarleyBoyer | 65513 | 71992 | 59975 | 66016 | 63283 | 5997 | 34520 | 41093 | 1853 | 1297 | 915 | 1160 | 763 | 813 | 606 | 325 | 420 | 415 | 116 | 86.7 | 0 | 0 |
| RegExp | 17512 | 8745 | 17676 | 8749 | 8512 | 5722 | 7937 | 1433 | 295 | 96.2 | 83.4 | 88.7 | 80.8 | 82.7 | 80.6 | 132 | 105 | 194 | 55.1 | 24.2 | 0 | 0 |
| Splay | 38219 | 43418 | 39613 | 36899 | 34666 | 22018 | 23323 | 2891 | 2174 | 1656 | 891 | 1148 | 874 | 868 | 729 | 283 | 501 | 674 | 297 | 140 | 0 | 0 |
| NavierStokes | 33553 | 37137 | 33505 | 36989 | 36952 | 34394 | 24807 | 32615 | 887 | 662 | 652 | 532 | 772 | 605 | 371 | 518 | 274 | 129 | 105 | 78.3 | 0 | 0 |
| Score | 41869 | 41441 | 39952 | 36598 | 34599 | 18505 | 17289 | 15477 | 814 | 557 | 449 | 430 | 419 | 417 | 303 | 228 | 226 | 206 | 86.6 | 50.5 | 0 | 0 |
| Score/MB | 694 | 49285 | 445 | 399 | 305 | 928 | 263 | 79 | 103 | 148 | 217 | 35 | 409 | 338 | 447 | 138 | 523 | 15 | 6 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | kiesel | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.15 | 2.3.5 | 24.1.0 | 140.0 | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.6M | 129.9M | 137.3M | 115.6M | 52.3M | 196.1M | 112.8M | 11.8M | 38.1M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 46.3M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110.1M | 105.2M | 84.5M | 33.7M | 349.1K | 3M | 4.9M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 33.2M | 27.4M | 1.3M | 0.4K |
| Dll size | 25M | 19.8M | 32.1M | 31.1M | 18.6M | 195.8M | 109.8M | 6.9M | 32.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 13.2M | 15M | 4.7M | 0 |
| Richards | 35539 | 34310 | 33138 | 32661 | 12797 | 34731 | 704 | 505 | 451 | 448 | 434 | 424 | 215 | 198 | 55.1 | 49.1 | 0 | 0 |
| DeltaBlue | 97068 | 46236 | 76221 | 70898 | 13091 | 31659 | 624 | 458 | 410 | 404 | 377 | 403 | 317 | 232 | 50.2 | 42 | 0 | 0 |
| Crypto | 42879 | 49100 | 41067 | 42074 | 20613 | 22510 | 790 | 553 | 427 | 509 | 423 | 370 | 179 | 114 | 58.8 | 74.2 | 0 | 0 |
| RayTrace | 100565 | 102636 | 67783 | 62381 | 28091 | 3327 | 1017 | 546 | 746 | 583 | 609 | 583 | 446 | 230 | 131 | 134 | 0 | 0 |
| EarleyBoyer | 82745 | 57933 | 74256 | 72823 | 39566 | 27401 | 2227 | 1007 | 1146 | 994 | 998 | 985 | 505 | 439 | 125 | 144 | 0 | 0 |
| RegExp | 9799 | 17092 | 9699 | 9871 | 9029 | 1081 | 404 | 188 | 196 | 175 | 190 | 186 | 198 | 197 | 90.9 | 42.8 | 0 | 0 |
| Splay | 40346 | 33517 | 36736 | 33428 | 23681 | 2901 | 2402 | 1051 | 1440 | 993 | 1050 | 1019 | 1157 | 819 | 322 | 185 | 0 | 0 |
| NavierStokes | 38990 | 34132 | 38990 | 38990 | 22216 | 26860 | 1061 | 1031 | 743 | 743 | 714 | 685 | 510 | 188 | 114 | 164 | 0 | 0 |
| Score | 45685 | 41650 | 40510 | 39303 | 19169 | 10835 | 974 | 588 | 587 | 537 | 527 | 512 | 366 | 252 | 98.6 | 88.8 | 0 | 0 |
| Score/MB | 869 | 320 | 295 | 340 | 366 | 55 | 8 | 49 | 15 | 57 | 12 | 57 | 48 | 12 | 2 | 2 | 0 | 0 |
