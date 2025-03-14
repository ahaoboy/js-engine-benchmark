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

| name | url | score | support | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45894 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45878 | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br>[v8-build](https://github.com/ahaoboy/v8-build) | 44370 | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| node | [node](https://github.com/nodejs/node)<br>[setup-node](https://github.com/actions/setup-node) | 38019 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br>[setup-deno](https://github.com/denoland/setup-deno) | 36672 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20297 | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18571 | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 12428 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1541 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 890 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 851 | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 842 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 765 | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 715 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 627 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 384 | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 380 | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 260 | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107 | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) |  | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) |  | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) |  | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |

## bench
3/14/2025, 4:07:36 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | node | deno | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | xst | boa | JerryScript |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 0 | 13.5.0 | 23.10.0 | 2.0.0.rc | 1.13.0.0.beta | 134.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 95.6M | 35.1M | 53.4M | 118.9M | 136.4M | 19.4M | 296.3M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 2.2M | 27M | 454.2K |
| Exe size | 95.6M | 35.1M | 937K | 118.9M | 136.4M | 571K | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 2.2M | 27M | 454.2K |
| Dll size | 0 | 0 | 52.5M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41441 | 41204 | 35270 | 32608 | 33378 | 23617 | 13651 | 35514 | 1107 | 795 | 693 | 711 | 611 | 584 | 554 | 225 | 228 | 89.3 | 60.8 | 279 |
| DeltaBlue | 53866 | 50012 | 87468 | 72115 | 72783 | 25773 | 12933 | 39459 | 1033 | 733 | 659 | 692 | 620 | 589 | 555 | 322 | 324 | 160 | 55.6 | 285 |
| Crypto | 49844 | 45662 | 42266 | 41378 | 41656 | 31581 | 17512 | 29408 | 1368 | 684 | 753 | 598 | 573 | 542 | 355 | 183 | 184 | 314 | 80.5 | 304 |
| RayTrace | 103894 | 110554 | 102858 | 62085 | 62455 | 36149 | 28137 | 4232 | 1610 | 1196 | 914 | 1107 | 930 | 878 | 697 | 521 | 495 | 490 | 166 | 347 |
| EarleyBoyer | 65055 | 69204 | 76095 | 63144 | 63063 | 7128 | 37806 | 23958 | 3432 | 1998 | 1503 | 1780 | 1386 | 1352 | 1197 | 541 | 515 | 319 | 193 | 0 |
| RegExp | 21093 | 20497 | 10152 | 9218 | 9092 | 7902 | 8586 | 1334 | 554 | 198 | 246 | 229 | 236 | 226 | 182 | 215 | 198 | 92.9 | 49.1 | 0 |
| Splay | 36027 | 38635 | 37470 | 32205 | 23396 | 19974 | 22752 | 3309 | 3639 | 1771 | 1793 | 1939 | 1785 | 1462 | 1641 | 1258 | 1286 | 395 | 218 | 0 |
| NavierStokes | 34439 | 34429 | 38694 | 38545 | 38584 | 36841 | 22024 | 30867 | 1828 | 1180 | 1320 | 979 | 993 | 932 | 878 | 464 | 494 | 810 | 177 | 0 |
| Score | 45894 | 45878 | 44370 | 38019 | 36672 | 20297 | 18571 | 12428 | 1541 | 890 | 851 | 842 | 765 | 715 | 627 | 384 | 380 | 260 | 107 | 0 |
| Score/MB | 480 | 1306 | 831 | 319 | 268 | 1045 | 62 | 62 | 42 | 74 | 180 | 163 | 914 | 531 | 301 | 574 | 938 | 120 | 3 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | primjs | rquickjs | mujs | xst | JerryScript | ChakraCore |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.0.0.rc | 23.10.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 | 1.13.0.0.beta |
| Total size | 55.3M | 105.1M | 108.7M | 861.1K | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.5M | 1.2M | 429.1K | 1.6M | 575.4K | 17.8M |
| Exe size | 55.3M | 105.1M | 108.7M | 861.1K | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.5M | 1.2M | 429.1K | 1.6M | 575.4K | 554.3K |
| Dll size | 0 | 0 | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M |
| Richards | 52363 | 54898 | 43330 | 29957 | 37371 | 1363 | 1328 | 1192 | 1333 | 1107 | 824 | 1099 | 409 | 117 | 218 | 0 |
| DeltaBlue | 76856 | 106628 | 109478 | 102635 | 39955 | 1258 | 1334 | 1238 | 1217 | 1126 | 950 | 1112 | 610 | 226 | 241 | 0 |
| Crypto | 70449 | 59448 | 59236 | 30955 | 47107 | 1487 | 1222 | 997 | 1227 | 1343 | 1121 | 1008 | 313 | 561 | 272 | 0 |
| RayTrace | 182777 | 70521 | 68375 | 97161 | 4646 | 2572 | 2155 | 2073 | 1586 | 1268 | 1229 | 1473 | 1020 | 748 | 336 | 0 |
| EarleyBoyer | 103731 | 95537 | 90955 | 79227 | 55541 | 5318 | 3339 | 2893 | 2624 | 2396 | 2284 | 2357 | 1123 | 452 | 0 | 0 |
| RegExp | 32308 | 13896 | 13924 | 11717 | 2006 | 731 | 319 | 305 | 281 | 290 | 230 | 283 | 343 | 339 | 0 | 0 |
| Splay | 54691 | 40770 | 45024 | 41177 | 3545 | 4828 | 3647 | 2909 | 2532 | 2562 | 4022 | 2198 | 1385 | 611 | 0 | 0 |
| NavierStokes | 33471 | 40621 | 40473 | 36545 | 33290 | 1637 | 2151 | 1645 | 2184 | 2576 | 2688 | 1725 | 788 | 1578 | 0 | 0 |
| Score | 64981 | 52060 | 50798 | 43541 | 16000 | 1941 | 1581 | 1376 | 1376 | 1329 | 1255 | 1210 | 654 | 449 | 0 | 0 |
| Score/MB | 1175 | 495 | 467 | 51778 | 82 | 123 | 438 | 134 | 333 | 1245 | 829 | 1025 | 1560 | 273 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | node | deno | ChakraCore | graaljs | hermes | txiki.js | llrt | rquickjs | qjs(ng) | quickjs | primjs | xst | mujs | boa | JerryScript |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 13.5.0 | 23.10.0 | 2.0.0.rc | 1.13.0.0.beta | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0 | 0.8.0 | 2024.02.14 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 60.7M | 861.1K | 111.6M | 111.1M | 19.9M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Exe size | 60.7M | 861.1K | 111.6M | 111.1M | 569.8K | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Dll size | 0 | 0 | 0 | 0 | 19.4M | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 26699 | 21220 | 22777 | 22787 | 23744 | 40926 | 502 | 342 | 294 | 399 | 419 | 366 | 242 | 94.3 | 113 | 25.4 | 110 |
| DeltaBlue | 46792 | 62693 | 52220 | 51645 | 18555 | 43268 | 561 | 406 | 307 | 425 | 414 | 381 | 280 | 144 | 150 | 21.8 | 118 |
| Crypto | 39816 | 40996 | 34121 | 33788 | 25043 | 22421 | 558 | 244 | 157 | 267 | 269 | 252 | 195 | 183 | 88.5 | 36.6 | 135 |
| RayTrace | 107668 | 103820 | 49875 | 48987 | 37813 | 5664 | 1089 | 774 | 675 | 473 | 400 | 311 | 331 | 434 | 279 | 74.5 | 207 |
| EarleyBoyer | 59958 | 71275 | 53280 | 54640 | 6185 | 36971 | 1805 | 1035 | 1129 | 800 | 719 | 661 | 563 | 318 | 327 | 84.9 | 0 |
| RegExp | 17166 | 8397 | 6952 | 7720 | 5507 | 1157 | 288 | 78.9 | 92.6 | 79.1 | 67.4 | 74.9 | 77.1 | 127 | 90.7 | 23.2 | 0 |
| Splay | 34332 | 41789 | 29198 | 22410 | 20454 | 1998 | 2454 | 1393 | 1462 | 832 | 793 | 809 | 672 | 303 | 470 | 130 | 0 |
| NavierStokes | 32698 | 36358 | 36285 | 36137 | 32796 | 23252 | 890 | 580 | 528 | 555 | 532 | 786 | 354 | 508 | 264 | 76.3 | 0 |
| Score | 39714 | 38812 | 30726 | 30053 | 17677 | 12057 | 815 | 452 | 408 | 397 | 374 | 369 | 286 | 226 | 188 | 48.3 | 0 |
| Score/MB | 654 | 46155 | 275 | 270 | 887 | 62 | 103 | 120 | 33 | 321 | 181 | 319 | 422 | 137 | 435 | 1 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.0.0.rc | 23.10.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.8M | 139.5M | 113.7M | 196.1M | 86.6M | 36.9M | 41.8M | 9M | 8M | 7.5M | 42.4M | 5.9M |
| Exe size | 108M | 102.7M | 82.7M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 27.4M | 1.3M |
| Dll size | 19.8M | 36.7M | 31M | 195.8M | 83.5M | 31.2M | 29.1M | 7.3M | 6.7M | 6.9M | 15M | 4.7M |
| Richards | 37187 | 33533 | 33156 | 35799 | 703 | 448 | 424 | 427 | 385 | 226 | 48.5 | 0 |
| DeltaBlue | 46488 | 65397 | 74039 | 29145 | 624 | 410 | 368 | 397 | 410 | 324 | 41.5 | 0 |
| Crypto | 44964 | 40445 | 40405 | 20258 | 791 | 422 | 417 | 369 | 319 | 184 | 75.5 | 0 |
| RayTrace | 78069 | 55647 | 60309 | 2664 | 1007 | 730 | 602 | 587 | 551 | 458 | 134 | 0 |
| EarleyBoyer | 56026 | 58930 | 60889 | 29155 | 2249 | 1153 | 1001 | 985 | 894 | 573 | 143 | 0 |
| RegExp | 17729 | 8801 | 8455 | 1049 | 402 | 196 | 173 | 182 | 155 | 201 | 43.4 | 0 |
| Splay | 33297 | 24187 | 10075 | 3185 | 2402 | 1465 | 1050 | 1027 | 953 | 1206 | 186 | 0 |
| NavierStokes | 33996 | 38765 | 38584 | 28909 | 1094 | 744 | 714 | 684 | 730 | 511 | 161 | 0 |
| Score | 40202 | 35280 | 32342 | 10593 | 977 | 586 | 517 | 511 | 477 | 380 | 88.6 | 0 |
| Score/MB | 314 | 252 | 284 | 54 | 11 | 15 | 12 | 56 | 59 | 50 | 2 | 0 |
