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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45908<br>95.6M<br>480/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45770<br>35.1M<br>1303/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45357<br>53.4M<br>849/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39938<br>121.9M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38136<br>118.9M<br>320/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20304<br>19.4M<br>1046/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18502<br>296.3M<br>62/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9492<br>199.7M<br>47/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1547<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 894<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 860<br>4.7M<br>182/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 820<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 721<br>857K<br>861/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 719<br>1.3M<br>534/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 631<br>2.1M<br>302/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 374<br>414.5K<br>923/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 367<br>685K<br>548/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 262<br>2.2M<br>121/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |

## bench
3/14/2025, 7:40:32 AM

### ubuntu
| Engine | bun | JavaScriptCore | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs | mujs(one) | xst | boa | JerryScript |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 0 | 13.5.0 | 2.2.3 | 23.10.0 | 1.13.0.0.beta | 134.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 95.6M | 35.1M | 53.4M | 121.9M | 118.9M | 19.4M | 296.3M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 414.5K | 685K | 2.2M | 27M | 454.2K |
| Exe size | 95.6M | 35.1M | 937K | 121.9M | 118.9M | 571K | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 414.5K | 685K | 2.2M | 27M | 454.2K |
| Dll size | 0 | 0 | 52.5M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 39962 | 42218 | 32961 | 32626 | 33145 | 23472 | 13263 | 35436 | 1107 | 803 | 692 | 704 | 547 | 597 | 549 | 221 | 245 | 89.3 | 60.9 | 267 |
| DeltaBlue | 50805 | 49820 | 96836 | 68353 | 75368 | 26242 | 12893 | 27670 | 1049 | 730 | 676 | 682 | 597 | 592 | 559 | 324 | 363 | 161 | 54.8 | 272 |
| Crypto | 50137 | 45297 | 42659 | 41745 | 41516 | 31547 | 17580 | 16846 | 1370 | 686 | 786 | 522 | 517 | 543 | 357 | 184 | 189 | 316 | 81.1 | 292 |
| RayTrace | 106632 | 108038 | 106188 | 67265 | 60827 | 36519 | 27972 | 3457 | 1586 | 1223 | 929 | 1079 | 831 | 883 | 705 | 481 | 543 | 492 | 166 | 350 |
| EarleyBoyer | 67083 | 68918 | 81740 | 72060 | 61625 | 7138 | 37473 | 24615 | 3406 | 1999 | 1515 | 1777 | 1327 | 1363 | 1204 | 485 | 557 | 319 | 196 | 0 |
| RegExp | 21547 | 20184 | 10212 | 10193 | 9164 | 7803 | 8737 | 797 | 558 | 197 | 240 | 228 | 240 | 228 | 183 | 198 | 217 | 92.3 | 49.2 | 0 |
| Splay | 36369 | 38855 | 38431 | 36410 | 32645 | 19872 | 22622 | 1975 | 3655 | 1758 | 1758 | 1948 | 1749 | 1467 | 1623 | 1279 | 611 | 407 | 222 | 0 |
| NavierStokes | 34577 | 34622 | 38617 | 38655 | 38469 | 36766 | 22045 | 29799 | 1868 | 1192 | 1366 | 961 | 936 | 922 | 908 | 491 | 483 | 819 | 175 | 0 |
| Score | 45908 | 45770 | 45357 | 39938 | 38136 | 20304 | 18502 | 9492 | 1547 | 894 | 860 | 820 | 721 | 719 | 631 | 374 | 367 | 262 | 107 | 0 |
| Score/MB | 480 | 1303 | 849 | 327 | 320 | 1046 | 62 | 47 | 42 | 75 | 182 | 158 | 861 | 534 | 302 | 923 | 548 | 121 | 3 | 0 |
### macos-arm64
| Engine | bun | node | deno | v8 | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | mujs | xst | JerryScript | ChakraCore |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 23.10.0 | 2.2.3 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 | 1.13.0.0.beta |
| Total size | 55.3M | 108.7M | 105.6M | 861.1K | 194M | 15.7M | 3.6M | 10.3M | 1.1M | 4.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K | 17.8M |
| Exe size | 55.3M | 108.7M | 105.6M | 861.1K | 147.4K | 7.9M | 3.6M | 10.3M | 1.1M | 2.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K | 554.3K |
| Dll size | 0 | 0 | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 17.3M |
| Richards | 51919 | 40001 | 46062 | 34529 | 37134 | 1308 | 1294 | 1158 | 1098 | 1229 | 1111 | 817 | 410 | 114 | 218 | 0 |
| DeltaBlue | 76922 | 100321 | 93874 | 94754 | 52802 | 1063 | 1303 | 1199 | 1094 | 1144 | 1046 | 960 | 584 | 215 | 241 | 0 |
| Crypto | 69697 | 58655 | 59555 | 35925 | 46541 | 1455 | 1225 | 940 | 1312 | 1140 | 942 | 1096 | 311 | 525 | 271 | 0 |
| RayTrace | 182703 | 67198 | 89761 | 96643 | 4808 | 2575 | 2155 | 1991 | 1265 | 1484 | 1396 | 1161 | 1012 | 702 | 344 | 0 |
| EarleyBoyer | 101726 | 92682 | 98616 | 72106 | 52106 | 5091 | 3321 | 3036 | 2299 | 2470 | 2293 | 1370 | 996 | 417 | 0 | 0 |
| RegExp | 31307 | 13756 | 14456 | 11591 | 1850 | 710 | 316 | 315 | 285 | 260 | 280 | 219 | 284 | 332 | 0 | 0 |
| Splay | 47403 | 45879 | 14172 | 39882 | 3357 | 4314 | 3660 | 3142 | 2505 | 1926 | 2143 | 1609 | 1032 | 602 | 0 | 0 |
| NavierStokes | 33438 | 40136 | 36803 | 36137 | 33471 | 1450 | 2152 | 1652 | 2537 | 2030 | 1705 | 2683 | 710 | 1534 | 0 | 0 |
| Score | 63268 | 49684 | 45123 | 43855 | 16204 | 1815 | 1569 | 1376 | 1303 | 1250 | 1173 | 1033 | 595 | 429 | 0 | 0 |
| Score/MB | 1144 | 457 | 427 | 52152 | 83 | 115 | 435 | 134 | 1221 | 303 | 993 | 682 | 1420 | 261 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | ChakraCore | graaljs | hermes | txiki.js | llrt | quickjs | rquickjs | qjs(ng) | primjs | xst | mujs | boa | JerryScript |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 13.5.0 | 2.2.3 | 23.10.0 | 1.13.0.0.beta | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0 | 0.8.0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 60.7M | 861.1K | 112.8M | 111.6M | 19.9M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 1.2M | 2.1M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Exe size | 60.7M | 861.1K | 112.8M | 111.6M | 569.8K | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 1.2M | 2.1M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Dll size | 0 | 0 | 0 | 0 | 19.4M | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28898 | 22237 | 30356 | 23356 | 25244 | 42045 | 481 | 463 | 415 | 447 | 408 | 439 | 255 | 93.6 | 115 | 23.6 | 108 |
| DeltaBlue | 46554 | 70026 | 49423 | 49536 | 19090 | 52015 | 525 | 510 | 465 | 498 | 448 | 492 | 283 | 144 | 187 | 20.3 | 122 |
| Crypto | 41750 | 39767 | 34438 | 34111 | 28077 | 26157 | 568 | 283 | 273 | 328 | 281 | 272 | 203 | 184 | 105 | 36.2 | 136 |
| RayTrace | 105226 | 97457 | 68597 | 60975 | 38737 | 5528 | 1091 | 778 | 781 | 433 | 495 | 500 | 345 | 442 | 315 | 71.7 | 210 |
| EarleyBoyer | 58834 | 63993 | 64181 | 51745 | 5772 | 36131 | 1812 | 1198 | 1206 | 833 | 836 | 851 | 593 | 319 | 377 | 80.8 | 0 |
| RegExp | 16605 | 8182 | 8837 | 7313 | 4895 | 1199 | 292 | 92.2 | 93.1 | 83 | 82.3 | 72.5 | 77.6 | 129 | 97.6 | 22.9 | 0 |
| Splay | 38154 | 33745 | 38097 | 33232 | 19743 | 2860 | 2391 | 1472 | 1457 | 923 | 607 | 349 | 705 | 292 | 551 | 126 | 0 |
| NavierStokes | 31842 | 34280 | 36766 | 36618 | 35031 | 20628 | 893 | 599 | 595 | 819 | 589 | 591 | 368 | 507 | 245 | 74.5 | 0 |
| Score | 40341 | 37185 | 35991 | 32031 | 17836 | 12985 | 805 | 516 | 502 | 449 | 398 | 373 | 297 | 225 | 208 | 46.4 | 0 |
| Score/MB | 664 | 44220 | 319 | 286 | 895 | 66 | 102 | 137 | 41 | 389 | 322 | 180 | 438 | 137 | 482 | 1 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | txiki.js | rquickjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.2.3 | 23.10.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.8M | 134.4M | 113.7M | 196.1M | 86.6M | 36.9M | 9.3M | 41.8M | 9M | 7.5M | 42.4M | 5.9M |
| Exe size | 108M | 102.4M | 82.7M | 349.1K | 3M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 27.4M | 1.3M |
| Dll size | 19.8M | 32M | 31M | 195.8M | 83.5M | 31.2M | 7.8M | 29.1M | 7.3M | 6.9M | 15M | 4.7M |
| Richards | 37184 | 33163 | 33180 | 35662 | 705 | 448 | 441 | 419 | 427 | 237 | 48 | 0 |
| DeltaBlue | 44815 | 69483 | 65682 | 30344 | 605 | 399 | 403 | 377 | 396 | 331 | 42.4 | 0 |
| Crypto | 45436 | 42021 | 41798 | 23907 | 791 | 424 | 514 | 423 | 367 | 185 | 74.1 | 0 |
| RayTrace | 90871 | 61789 | 59436 | 2735 | 1005 | 739 | 594 | 607 | 580 | 451 | 133 | 0 |
| EarleyBoyer | 56050 | 67702 | 62745 | 21835 | 2232 | 1140 | 971 | 986 | 975 | 564 | 135 | 0 |
| RegExp | 16514 | 9941 | 8438 | 986 | 402 | 195 | 173 | 184 | 181 | 197 | 42.9 | 0 |
| Splay | 32759 | 37421 | 10041 | 2146 | 2385 | 1410 | 969 | 1027 | 977 | 725 | 174 | 0 |
| NavierStokes | 33950 | 38951 | 38694 | 26267 | 1086 | 743 | 747 | 714 | 666 | 511 | 166 | 0 |
| Score | 40390 | 39452 | 32051 | 9812 | 971 | 581 | 534 | 521 | 503 | 358 | 87.2 | 0 |
| Score/MB | 316 | 293 | 281 | 50 | 11 | 15 | 57 | 12 | 56 | 47 | 2 | 0 |
