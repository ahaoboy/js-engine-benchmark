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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46700<br>36.2M<br>1288/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46536<br>94.4M<br>493/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45440<br>53.3M<br>853/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38499<br>118.9M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 35409<br>98.9M<br>358/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20027<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18707<br>39.1M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11845<br>199.7M<br>59/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1534<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 897<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 866<br>4.7M<br>183/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 824<br>5.2M<br>159/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 766<br>857K<br>915/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 724<br>1.3M<br>537/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 630<br>2.1M<br>302/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 402<br>45.5M<br>8/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 393<br>685K<br>587/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 371<br>414.5K<br>916/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 260<br>2.1M<br>121/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 108<br>27M<br>4/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
4/7/2025, 1:35:29 AM

### ubuntu
| Engine | jsc | bun | v8 | node | deno | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.8 | 13.6.0 | 23.11.0 | 2.2.8 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 36.2M | 94.4M | 53.3M | 118.9M | 98.9M | 19.4M | 39.1M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.5M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7K |
| Exe size | 36.2M | 94.4M | 937.8K | 118.9M | 98.9M | 571K | 39.1M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 45.5M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41794 | 40566 | 35193 | 32933 | 33184 | 23133 | 12275 | 35687 | 1113 | 796 | 689 | 708 | 614 | 597 | 550 | 348 | 249 | 222 | 196 | 88.6 | 61.8 | 0 | 0 |
| DeltaBlue | 54223 | 56134 | 93735 | 74971 | 70125 | 25898 | 12867 | 39291 | 1054 | 731 | 680 | 684 | 619 | 595 | 553 | 307 | 341 | 317 | 251 | 158 | 55 | 0 | 0 |
| Crypto | 51826 | 49670 | 42520 | 41640 | 41642 | 31925 | 21093 | 28281 | 1351 | 685 | 769 | 516 | 573 | 553 | 358 | 664 | 188 | 180 | 124 | 316 | 81.4 | 0 | 0 |
| RayTrace | 106780 | 104042 | 106336 | 62381 | 68005 | 32930 | 27158 | 4867 | 1565 | 1206 | 903 | 1091 | 930 | 878 | 707 | 386 | 525 | 481 | 278 | 491 | 165 | 0 | 0 |
| EarleyBoyer | 67334 | 67949 | 77026 | 61367 | 75145 | 7135 | 37314 | 34159 | 3294 | 1989 | 1546 | 1795 | 1392 | 1367 | 1212 | 502 | 556 | 513 | 515 | 320 | 197 | 0 | 0 |
| RegExp | 20093 | 21296 | 10253 | 9274 | 10021 | 7961 | 8685 | 1314 | 555 | 199 | 248 | 228 | 234 | 226 | 181 | 54.1 | 221 | 200 | 208 | 91.4 | 49.2 | 0 | 0 |
| Splay | 38511 | 37471 | 39882 | 34340 | 12884 | 19938 | 23339 | 2026 | 3708 | 1850 | 1812 | 1976 | 1830 | 1495 | 1662 | 778 | 1158 | 1267 | 978 | 401 | 237 | 0 | 0 |
| NavierStokes | 34622 | 34474 | 38694 | 38507 | 38655 | 36285 | 21919 | 22067 | 1818 | 1189 | 1396 | 965 | 984 | 951 | 886 | 1184 | 479 | 456 | 202 | 818 | 176 | 0 | 0 |
| Score | 46700 | 46536 | 45440 | 38499 | 35409 | 20027 | 18707 | 11845 | 1534 | 897 | 866 | 824 | 766 | 724 | 630 | 402 | 393 | 371 | 278 | 260 | 108 | 0 | 0 |
| Score/MB | 1288 | 493 | 853 | 323 | 358 | 1031 | 478 | 59 | 42 | 75 | 183 | 159 | 915 | 537 | 302 | 8 | 587 | 916 | 21 | 121 | 4 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.8 | 2.2.8 | 23.11.0 | 13.6.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54M | 80.7M | 108.7M | 861K | 129.1M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 38.6M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7K |
| Exe size | 913.2K | 54M | 80.7M | 108.7M | 861K | 64.6M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 38.6M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 64.6M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 52335 | 51615 | 44421 | 43143 | 33406 | 15533 | 37180 | 1368 | 1250 | 1140 | 1330 | 1097 | 1087 | 773 | 557 | 409 | 119 | 334 | 0 | 0 | 0 |
| DeltaBlue | 77371 | 75652 | 97736 | 104837 | 94668 | 17938 | 54435 | 1245 | 1291 | 1197 | 1157 | 1115 | 1106 | 960 | 505 | 611 | 226 | 397 | 0 | 0 | 0 |
| Crypto | 78613 | 73336 | 60223 | 60412 | 34865 | 26517 | 44602 | 1487 | 1185 | 949 | 1232 | 1334 | 966 | 1120 | 1408 | 309 | 552 | 197 | 0 | 0 | 0 |
| RayTrace | 189363 | 186107 | 90797 | 74295 | 96791 | 48173 | 4700 | 2340 | 2075 | 1948 | 1602 | 1263 | 1490 | 1140 | 692 | 1017 | 757 | 462 | 0 | 0 | 0 |
| EarleyBoyer | 100671 | 104054 | 105703 | 87773 | 77804 | 49508 | 50694 | 5083 | 3339 | 2958 | 2534 | 2342 | 2313 | 1702 | 948 | 1119 | 450 | 733 | 0 | 0 | 0 |
| RegExp | 31730 | 31976 | 15396 | 13869 | 11831 | 13130 | 1945 | 705 | 313 | 307 | 276 | 288 | 279 | 227 | 84.1 | 351 | 336 | 302 | 0 | 0 | 0 |
| Splay | 52211 | 45994 | 52717 | 46963 | 42929 | 29312 | 3631 | 4286 | 3631 | 2914 | 2404 | 2407 | 2380 | 1728 | 1767 | 1343 | 583 | 1420 | 0 | 0 | 0 |
| NavierStokes | 32550 | 31874 | 39248 | 40324 | 34474 | 21411 | 34132 | 1446 | 2121 | 1661 | 2089 | 2495 | 1742 | 2687 | 2515 | 792 | 1576 | 324 | 0 | 0 | 0 |
| Score | 65216 | 63367 | 54681 | 51142 | 44189 | 24846 | 16381 | 1840 | 1542 | 1351 | 1344 | 1304 | 1211 | 1068 | 747 | 652 | 446 | 433 | 0 | 0 | 0 |
| Score/MB | 705 | 1173 | 677 | 470 | 52554 | 192 | 84 | 117 | 427 | 131 | 326 | 1222 | 1025 | 706 | 19 | 1556 | 271 | 34 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | rquickjs | quickjs | llrt | primjs | xst | mujs | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.8 | 0 | 2.2.8 | 23.11.0 | 1.13.0.0.beta | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0 | 2024.02.14 | 0.5.1.beta | 0 | 16.8.1 | 1.3.5 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 59.3M | 89.6M | 90M | 111.6M | 19.9M | 64.6M | 194.4M | 7.9M | 3.7M | 2.1M | 1.2M | 1.2M | 12.1M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7K |
| Exe size | 861K | 59.3M | 1016.1K | 90M | 111.6M | 569.8K | 64.6M | 148.8K | 7.9M | 3.7M | 2.1M | 1.2M | 1.2M | 12.1M | 693.4K | 1.6M | 441.8K | 13.1M | 25.3M | 570.8K | 7K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 26988 | 21044 | 22307 | 20433 | 14926 | 18068 | 6347 | 22134 | 452 | 365 | 441 | 315 | 322 | 166 | 201 | 85.5 | 120 | 107 | 24.6 | 0 | 0 |
| DeltaBlue | 59500 | 32623 | 27737 | 39539 | 28894 | 16516 | 7961 | 18169 | 423 | 371 | 437 | 354 | 369 | 270 | 236 | 134 | 162 | 124 | 20.7 | 0 | 0 |
| Crypto | 30283 | 28254 | 28128 | 24810 | 23616 | 20404 | 11639 | 13019 | 487 | 228 | 273 | 219 | 210 | 123 | 165 | 165 | 62.6 | 51.9 | 34.8 | 0 | 0 |
| RayTrace | 78513 | 75627 | 75553 | 45094 | 37954 | 22991 | 21838 | 2306 | 826 | 742 | 463 | 392 | 237 | 479 | 273 | 371 | 272 | 158 | 73.2 | 0 | 0 |
| EarleyBoyer | 52600 | 44954 | 42146 | 42284 | 39351 | 4247 | 25001 | 12409 | 1395 | 1096 | 846 | 659 | 478 | 674 | 454 | 246 | 281 | 288 | 83.8 | 0 | 0 |
| RegExp | 6211 | 11092 | 11467 | 6345 | 5021 | 3807 | 4075 | 733 | 252 | 68.2 | 64.3 | 72.1 | 62.6 | 53.8 | 62.3 | 97.4 | 80.4 | 142 | 21.6 | 0 | 0 |
| Splay | 27691 | 25075 | 25686 | 25450 | 21424 | 13519 | 14693 | 1913 | 1845 | 1168 | 792 | 787 | 669 | 802 | 482 | 227 | 428 | 184 | 127 | 0 | 0 |
| NavierStokes | 27723 | 23744 | 24881 | 28020 | 24536 | 26415 | 18180 | 8425 | 728 | 546 | 526 | 551 | 631 | 350 | 286 | 378 | 264 | 93.4 | 64.1 | 0 | 0 |
| Score | 31452 | 28502 | 28254 | 25394 | 21157 | 12985 | 11693 | 6039 | 661 | 426 | 391 | 344 | 305 | 268 | 232 | 186 | 174 | 129 | 45.7 | 0 | 0 |
| Score/MB | 37405 | 480 | 315 | 282 | 189 | 651 | 181 | 31 | 84 | 113 | 189 | 278 | 264 | 22 | 342 | 113 | 403 | 9 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.8 | 2.2.8 | 23.11.0 | 138.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 128.7M | 135.4M | 113.7M | 50.6M | 196.1M | 112.8M | 36.9M | 41.8M | 9M | 8M | 7.5M | 19.6M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 108.9M | 103.3M | 82.7M | 33.2M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 17.4M | 195.8M | 109.8M | 31.2M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 34762 | 36350 | 32538 | 32630 | 12868 | 35827 | 698 | 451 | 424 | 434 | 377 | 237 | 200 | 49 | 0 | 0 |
| DeltaBlue | 94985 | 48253 | 56571 | 74059 | 13191 | 29340 | 619 | 403 | 356 | 396 | 410 | 331 | 234 | 42 | 0 | 0 |
| Crypto | 39211 | 46023 | 39287 | 37870 | 21302 | 22670 | 780 | 425 | 415 | 375 | 305 | 180 | 112 | 73.8 | 0 | 0 |
| RayTrace | 99085 | 78360 | 64675 | 60087 | 27824 | 2366 | 996 | 725 | 598 | 583 | 547 | 460 | 226 | 132 | 0 | 0 |
| EarleyBoyer | 81515 | 55413 | 74307 | 58426 | 37684 | 30299 | 2177 | 1142 | 991 | 977 | 883 | 555 | 453 | 136 | 0 | 0 |
| RegExp | 9580 | 16695 | 10032 | 8487 | 8529 | 1020 | 402 | 196 | 179 | 186 | 155 | 197 | 197 | 42.6 | 0 | 0 |
| Splay | 38871 | 32238 | 36361 | 32499 | 22638 | 3129 | 2326 | 1418 | 1010 | 978 | 912 | 1190 | 807 | 168 | 0 | 0 |
| NavierStokes | 38803 | 34030 | 38912 | 38655 | 21854 | 21221 | 1017 | 740 | 716 | 662 | 724 | 508 | 190 | 166 | 0 | 0 |
| Score | 44403 | 39897 | 38604 | 36884 | 18858 | 10184 | 956 | 582 | 513 | 508 | 469 | 379 | 252 | 86.9 | 0 | 0 |
| Score/MB | 845 | 310 | 285 | 324 | 373 | 51 | 8 | 15 | 12 | 56 | 58 | 50 | 12 | 2 | 0 | 0 |
