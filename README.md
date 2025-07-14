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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47982<br>97.2M<br>493/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47235<br>37.4M<br>1261/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45613<br>53.3M<br>856/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40459<br>103.9M<br>389/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 39408<br>67.1M<br>587/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38541<br>121.6M<br>317/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20151<br>19.4M<br>1038/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18978<br>39.7M<br>477/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17148<br>35.2M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10933<br>199.7M<br>54/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 1965<br>1.1G<br>1/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1540<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 855<br>12.1M<br>70/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 833<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 766<br>857K<br>915/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 720<br>1.3M<br>534/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 645<br>2M<br>326/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 541<br>45.8M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 488<br>2.1M<br>229/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 388<br>685K<br>580/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 376<br>414.5K<br>928/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 268<br>2.1M<br>129/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 188<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
7/14/2025, 1:58:47 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | dune | node | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.18 | 0 | 13.6.0 | 2.4.1 | 0.10.0 | 24.4.0 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 0.6.0.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 97.2M | 37.4M | 53.3M | 103.9M | 67.1M | 121.6M | 19.4M | 39.7M | 35.2M | 199.7M | 1.1G | 36M | 12.1M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Exe size | 97.2M | 37.4M | 937.8K | 103.9M | 67.1M | 121.6M | 571K | 39.7M | 35.2M | 1M | 1.1G | 36M | 12.1M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40551 | 41512 | 34998 | 32270 | 32940 | 25996 | 23405 | 12589 | 13552 | 35464 | 10029 | 1112 | 649 | 674 | 707 | 602 | 597 | 578 | 480 | 255 | 205 | 223 | 198 | 90 | 102 | 61 | 59 | 545 | 127 | 272 | 0 |
| DeltaBlue | 56372 | 52927 | 94774 | 74806 | 75646 | 74171 | 25207 | 13085 | 12794 | 26090 | 248 | 1059 | 678 | 660 | 690 | 619 | 595 | 578 | 465 | 308 | 357 | 323 | 250 | 165 | 110 | 55 | 56 | 521 | 168 | 278 | 0 |
| Crypto | 49401 | 52013 | 42684 | 41907 | 41672 | 41486 | 31785 | 20101 | 17890 | 17085 | 8889 | 1367 | 551 | 759 | 532 | 571 | 549 | 379 | 899 | 782 | 189 | 184 | 122 | 337 | 98 | 81 | 61 | 844 | 122 | 295 | 0 |
| RayTrace | 119434 | 122986 | 106706 | 68153 | 68745 | 66377 | 34784 | 27620 | 27870 | 5296 | 1153 | 1577 | 1152 | 899 | 1064 | 941 | 886 | 686 | 584 | 547 | 522 | 487 | 276 | 497 | 256 | 165 | 140 | 589 | 393 | 341 | 0 |
| EarleyBoyer | 69144 | 68308 | 79668 | 72790 | 74063 | 69662 | 7123 | 38591 | 36635 | 24928 | 1037 | 3370 | 1839 | 1499 | 1779 | 1404 | 1365 | 1225 | 777 | 581 | 528 | 504 | 507 | 326 | 285 | 195 | 140 | 0 | 466 | 0 | 0 |
| RegExp | 21093 | 19800 | 10274 | 9961 | 10092 | 9861 | 7894 | 8819 | 8676 | 1375 | 630 | 553 | 258 | 229 | 229 | 235 | 225 | 182 | 63 | 134 | 220 | 198 | 211 | 96 | 247 | 49 | 94 | 112 | 0 | 0 | 0 |
| Splay | 36049 | 37225 | 39124 | 37119 | 28098 | 34365 | 20141 | 24692 | 12403 | 2134 | 2445 | 3664 | 2393 | 1796 | 1980 | 1807 | 1441 | 1654 | 872 | 1300 | 1307 | 1266 | 994 | 391 | 475 | 226 | 321 | 1952 | 812 | 0 | 0 |
| NavierStokes | 39623 | 35022 | 38732 | 38694 | 38803 | 38842 | 36803 | 21898 | 21941 | 33323 | 5453 | 1822 | 898 | 1243 | 981 | 999 | 940 | 930 | 1464 | 936 | 471 | 490 | 202 | 870 | 166 | 177 | 118 | 1231 | 220 | 0 | 0 |
| Score | 47982 | 47235 | 45613 | 40459 | 39408 | 38541 | 20151 | 18978 | 17148 | 10933 | 1965 | 1540 | 855 | 833 | 827 | 766 | 720 | 645 | 541 | 488 | 388 | 376 | 278 | 268 | 188 | 107 | 105 | 0 | 0 | 0 | 0 |
| Score/MB | 493 | 1261 | 856 | 389 | 587 | 317 | 1038 | 477 | 486 | 54 | 1 | 42 | 70 | 195 | 160 | 915 | 534 | 326 | 11 | 229 | 580 | 928 | 21 | 129 | 2 | 3 | 8 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 24 | 38 | 34 | 46 | 48 | 50 | 49 | 52 | 60 | 87 | 68 | 82 | 85 | 113 | 129 | 143 | 233 | 235 | 53 | 97 | 31 | 0 |
### macos-arm64
| Engine | bun | jsc | deno | dune | node | v8 | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | primjs | rquickjs | ladybird | duktape | mujs | xst | goja | jint | kiesel | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.18 | 0 | 2.4.1 | 0.10.0 | 24.4.0 | 13.6.0 | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.6.0.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 56.4M | 94.2M | 83.8M | 57.4M | 110.8M | 861K | 131M | 32.8M | 194M | 653.8M | 15.7M | 3.6M | 10.3M | 4.1M | 975.9K | 1.5M | 1.2M | 41.2M | 562.1K | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 2.4M | 653.8M | 575.4K | 7.3K |
| Exe size | 56.4M | 914.7K | 83.8M | 57.4M | 110.8M | 861K | 65.5M | 32.8M | 147.4K | 653.8M | 7.9M | 3.6M | 10.3M | 2.1M | 975.9K | 1.5M | 1.2M | 41.2M | 562.1K | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 1.8M | 653.8M | 575.4K | 7.3K |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 65.5M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 |
| Richards | 52893 | 52476 | 48558 | 48456 | 45575 | 30773 | 15254 | 15346 | 37381 | 21051 | 1373 | 1338 | 1092 | 1349 | 1136 | 783 | 1089 | 884 | 539 | 410 | 120 | 335 | 156 | 115 | 757 | 196 | 217 | 0 |
| DeltaBlue | 74343 | 73946 | 106245 | 111091 | 104308 | 94714 | 16080 | 17885 | 57668 | 1034 | 1252 | 1338 | 1190 | 1251 | 1163 | 957 | 1123 | 809 | 629 | 613 | 225 | 374 | 170 | 102 | 842 | 263 | 242 | 0 |
| Crypto | 72101 | 74418 | 60285 | 59816 | 60196 | 38158 | 26812 | 22273 | 47429 | 17302 | 1459 | 1236 | 1030 | 1230 | 1399 | 1121 | 1009 | 1710 | 1395 | 314 | 561 | 201 | 147 | 118 | 1214 | 100 | 272 | 0 |
| RayTrace | 195209 | 190473 | 94867 | 96421 | 95681 | 96347 | 52021 | 51873 | 6001 | 4385 | 2575 | 2146 | 2102 | 1594 | 1289 | 1479 | 1479 | 1143 | 1155 | 1006 | 755 | 479 | 379 | 255 | 812 | 548 | 335 | 0 |
| EarleyBoyer | 107792 | 106208 | 106793 | 103811 | 103609 | 80461 | 52663 | 50159 | 54764 | 1749 | 5303 | 3297 | 3128 | 2672 | 2379 | 1957 | 2363 | 1450 | 1218 | 1135 | 453 | 869 | 404 | 252 | 0 | 638 | 0 | 0 |
| RegExp | 33069 | 33524 | 15334 | 15410 | 15410 | 11831 | 13416 | 12872 | 2028 | 725 | 738 | 317 | 329 | 281 | 289 | 226 | 281 | 107 | 263 | 334 | 339 | 300 | 216 | 147 | 203 | 0 | 0 | 0 |
| Splay | 58005 | 54689 | 52770 | 46768 | 50109 | 37445 | 31896 | 19841 | 4179 | 2094 | 4816 | 3643 | 4323 | 2537 | 2621 | 3676 | 2371 | 2377 | 2415 | 1303 | 609 | 1392 | 573 | 599 | 1960 | 1212 | 0 | 0 |
| NavierStokes | 33505 | 34474 | 40729 | 40662 | 40729 | 36545 | 21475 | 21475 | 36249 | 19994 | 1649 | 2163 | 1750 | 2188 | 2396 | 2685 | 1735 | 1976 | 1583 | 793 | 1577 | 325 | 199 | 231 | 1902 | 283 | 0 | 0 |
| Score | 66521 | 66208 | 56500 | 55834 | 55438 | 43965 | 25256 | 23312 | 17854 | 4148 | 1940 | 1581 | 1471 | 1388 | 1338 | 1235 | 1222 | 1003 | 951 | 648 | 450 | 441 | 249 | 192 | 0 | 0 | 0 | 0 |
| Score/MB | 1178 | 702 | 673 | 972 | 500 | 52287 | 192 | 710 | 92 | 6 | 123 | 438 | 142 | 336 | 1403 | 816 | 1035 | 24 | 1732 | 1546 | 279 | 34 | 3 | 15 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 33 | 29 | 36 | 36 | 37 | 36 | 42 | 40 | 58 | 43 | 53 | 80 | 75 | 115 | 135 | 38 | 87 | 33 | 0 |
### macos-amd64
| Engine | jsc | dune | bun | deno | node | v8 | ChakraCore | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | duktape | primjs | mujs | xst | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 0.10.0 | 1.2.18 | 2.4.1 | 24.4.0 | 13.6.0 | 1.13.0.0.beta | 141.0 | 0 | 24.1.2 | 11.0.27 | 0.12.0 | 24.12.0 | 0.6.0.beta | 2025.04.26 | 0.8.0 | 0 | 2.99.99 | 0 | 1.3.5 | 16.9.1 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 |
| Total size | 89.6M | 60.4M | 61.9M | 94.3M | 113.5M | 861K | 20M | 65.5M | 33.8M | 194.4M | 602.8M | 7.9M | 3.7M | 12.2M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 602.8M | 570.8K | 7.3K |
| Exe size | 1016.1K | 60.4M | 61.9M | 94.3M | 113.5M | 861K | 571K | 65.5M | 33.8M | 148.8K | 602.8M | 7.9M | 3.7M | 12.2M | 1M | 2.1M | 1.2M | 525.7K | 693.4K | 441.8K | 1.6M | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 602.8M | 570.8K | 7.3K |
| Dll size | 88.6M | 0 | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 |
| Richards | 26685 | 30967 | 28227 | 29802 | 20913 | 17474 | 18880 | 7438 | 7459 | 26533 | 12571 | 395 | 392 | 377 | 360 | 331 | 324 | 204 | 206 | 146 | 71 | 122 | 70 | 48 | 25 | 363 | 78 | 98 | 0 |
| DeltaBlue | 34719 | 55784 | 43327 | 47426 | 50600 | 61040 | 16920 | 9052 | 8847 | 23174 | 295 | 445 | 454 | 447 | 462 | 412 | 340 | 226 | 223 | 201 | 113 | 139 | 83 | 44 | 22 | 378 | 114 | 99 | 0 |
| Crypto | 34389 | 34110 | 39860 | 32728 | 25109 | 29532 | 20675 | 13951 | 9800 | 15053 | 5134 | 414 | 260 | 261 | 314 | 246 | 248 | 333 | 168 | 111 | 153 | 62 | 65 | 49 | 35 | 409 | 74 | 102 | 0 |
| RayTrace | 100861 | 67413 | 109814 | 66015 | 58533 | 74665 | 29822 | 19166 | 22570 | 5402 | 800 | 842 | 819 | 755 | 345 | 403 | 398 | 438 | 301 | 338 | 327 | 208 | 190 | 99 | 68 | 268 | 296 | 174 | 0 |
| EarleyBoyer | 55485 | 62222 | 49194 | 59393 | 58684 | 50855 | 4646 | 26287 | 25765 | 9886 | 1108 | 1467 | 1233 | 1096 | 646 | 720 | 656 | 509 | 482 | 408 | 256 | 393 | 219 | 96 | 73 | 0 | 280 | 0 | 0 |
| RegExp | 15562 | 8282 | 12663 | 7985 | 7313 | 6617 | 4880 | 6735 | 5733 | 715 | 357 | 239 | 94 | 80 | 71 | 65 | 67 | 101 | 66 | 103 | 100 | 187 | 88 | 47 | 18 | 81 | 0 | 0 | 0 |
| Splay | 31814 | 31048 | 26631 | 31211 | 32971 | 29003 | 18262 | 20560 | 9347 | 1599 | 1385 | 1911 | 1644 | 1708 | 705 | 736 | 641 | 993 | 544 | 444 | 268 | 569 | 334 | 274 | 113 | 475 | 524 | 0 | 0 |
| NavierStokes | 27427 | 36210 | 24955 | 33142 | 35657 | 27936 | 32994 | 10960 | 19011 | 18531 | 10569 | 729 | 622 | 460 | 627 | 534 | 512 | 443 | 302 | 261 | 488 | 116 | 104 | 81 | 60 | 845 | 142 | 0 | 0 |
| Score | 35318 | 35095 | 34930 | 33261 | 30679 | 29914 | 15092 | 12795 | 11828 | 7543 | 1751 | 645 | 509 | 468 | 372 | 355 | 335 | 333 | 243 | 219 | 185 | 179 | 122 | 75 | 43 | 0 | 0 | 0 | 0 |
| Score/MB | 394 | 580 | 564 | 352 | 270 | 35576 | 752 | 195 | 349 | 38 | 2 | 82 | 136 | 38 | 363 | 172 | 271 | 648 | 358 | 507 | 115 | 13 | 1 | 5 | 1 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 25 | 44 | 54 | 82 | 90 | 99 | 106 | 104 | 93 | 126 | 126 | 163 | 173 | 215 | 338 | 584 | 76 | 140 | 64 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | dune | node | ChakraCore | spidermonkey | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | mujs | duktape | goja | jint | kiesel | boa | rhino | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.18 | 2.4.1 | 0.10.0 | 24.4.0 | 1.11.24.0 | 141.0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.0.beta | 0.8.0 | 1.3.5 | 2.7.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 131.9M | 140.9M | 78.7M | 115.8M | 14.4M | 52.2M | 196.1M | 338M | 86.6M | 11.8M | 38.1M | 9.3M | 43.3M | 9M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 320.6M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 112.2M | 108.6M | 48.4M | 84.8M | 342.9K | 33.6M | 349.1K | 320.6M | 3M | 4.9M | 5.7M | 1.5M | 12.9M | 1.7M | 665.3K | 777.7K | 13.3M | 68.8M | 33.2M | 27.4M | 320.6M | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 30.3M | 31.1M | 14.1M | 18.5M | 195.8M | 17.3M | 83.5M | 6.9M | 32.4M | 7.8M | 30.5M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 |
| Richards | 35436 | 36894 | 36598 | 33025 | 33272 | 31415 | 24132 | 13214 | 36286 | 5408 | 714 | 516 | 451 | 441 | 378 | 427 | 233 | 215 | 197 | 90 | 52 | 48 | 0 | 0 | 0 |
| DeltaBlue | 100625 | 46216 | 43281 | 74793 | 73490 | 61153 | 28444 | 13124 | 29525 | 177 | 616 | 462 | 403 | 403 | 357 | 403 | 331 | 258 | 228 | 117 | 50 | 41 | 0 | 0 | 0 |
| Crypto | 41810 | 48564 | 43551 | 41858 | 40988 | 39481 | 34071 | 20293 | 22781 | 1917 | 793 | 535 | 420 | 516 | 375 | 366 | 186 | 315 | 112 | 91 | 59 | 74 | 0 | 0 | 0 |
| RayTrace | 101082 | 98493 | 91611 | 59865 | 66821 | 64758 | 48717 | 27898 | 3253 | 2414 | 1011 | 543 | 684 | 596 | 604 | 587 | 438 | 437 | 225 | 261 | 127 | 132 | 0 | 0 | 0 |
| EarleyBoyer | 82424 | 59590 | 54884 | 70702 | 71115 | 70498 | 43117 | 38657 | 27530 | 1366 | 2231 | 981 | 1134 | 982 | 984 | 973 | 541 | 497 | 449 | 288 | 123 | 130 | 0 | 0 | 0 |
| RegExp | 9738 | 19255 | 19073 | 9738 | 9656 | 9851 | 9880 | 9299 | 996 | 651 | 399 | 187 | 193 | 173 | 182 | 185 | 196 | 109 | 196 | 276 | 88 | 42 | 0 | 0 | 0 |
| Splay | 37005 | 33550 | 34886 | 31472 | 28367 | 31610 | 16714 | 24187 | 2950 | 5127 | 2320 | 1003 | 1417 | 936 | 1254 | 977 | 1171 | 961 | 870 | 493 | 321 | 182 | 0 | 0 | 0 |
| NavierStokes | 38951 | 33801 | 39988 | 39060 | 38842 | 38951 | 36878 | 21919 | 24709 | 3869 | 1095 | 1028 | 741 | 750 | 719 | 670 | 506 | 828 | 186 | 147 | 115 | 166 | 0 | 0 | 0 |
| Score | 45204 | 42484 | 41749 | 38896 | 38734 | 37836 | 27195 | 19232 | 10593 | 1724 | 972 | 582 | 575 | 533 | 515 | 507 | 375 | 367 | 252 | 187 | 97 | 87 | 0 | 0 | 0 |
| Score/MB | 859 | 345 | 316 | 276 | 492 | 326 | 1888 | 368 | 54 | 5 | 11 | 49 | 15 | 57 | 11 | 56 | 49 | 48 | 12 | 1 | 2 | 2 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 41 | 58 | 61 | 61 | 62 | 63 | 82 | 85 | 124 | 147 | 252 | 292 | 0 | 131 | 0 |
