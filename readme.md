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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46037<br>36.2M<br>1270/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45967<br>95.8M<br>479/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45447<br>53.3M<br>853/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39937<br>100.4M<br>397/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39300<br>121.3M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19991<br>19.4M<br>1030/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18744<br>39.6M<br>472/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9363<br>199.7M<br>46/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1522<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 887<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 843<br>4.7M<br>178/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 830<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>857K<br>912/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 710<br>1.3M<br>527/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 582<br>45.7M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 378<br>685K<br>565/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 345<br>414.5K<br>852/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 269<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 251<br>2.2M<br>116/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
5/26/2025, 1:35:17 AM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.14 | 13.6.0 | 2.3.3 | 24.1.0 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 36.2M | 95.8M | 53.3M | 100.4M | 121.3M | 19.4M | 39.6M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.3K |
| Exe size | 36.2M | 95.8M | 937.8K | 100.4M | 121.3M | 571K | 39.6M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41522 | 41494 | 34748 | 33103 | 32545 | 23278 | 12497 | 35835 | 1126 | 810 | 692 | 707 | 612 | 590 | 576 | 508 | 242 | 228 | 199 | 87.6 | 60.7 | 0 | 0 |
| DeltaBlue | 54164 | 50917 | 98271 | 71679 | 69384 | 24681 | 12827 | 25039 | 1042 | 716 | 670 | 686 | 620 | 587 | 573 | 463 | 360 | 320 | 239 | 157 | 55.5 | 0 | 0 |
| Crypto | 51702 | 49802 | 42624 | 41606 | 41690 | 31986 | 20346 | 14497 | 1363 | 708 | 768 | 594 | 573 | 543 | 379 | 918 | 190 | 183 | 122 | 296 | 80.5 | 0 | 0 |
| RayTrace | 107002 | 112848 | 103376 | 68745 | 64971 | 35040 | 26714 | 5183 | 1539 | 1182 | 913 | 1085 | 942 | 875 | 732 | 597 | 537 | 420 | 273 | 462 | 165 | 0 | 0 |
| EarleyBoyer | 66149 | 64801 | 80105 | 71444 | 71866 | 6998 | 38519 | 22773 | 3338 | 1949 | 1452 | 1744 | 1363 | 1320 | 1214 | 791 | 531 | 439 | 491 | 313 | 190 | 0 | 0 |
| RegExp | 19820 | 20960 | 10122 | 10022 | 9890 | 7788 | 8659 | 928 | 551 | 197 | 235 | 226 | 232 | 220 | 183 | 62 | 213 | 192 | 206 | 93.6 | 48.8 | 0 | 0 |
| Splay | 35807 | 35701 | 38627 | 34487 | 33860 | 19766 | 24015 | 1957 | 3448 | 1737 | 1701 | 1903 | 1785 | 1437 | 1653 | 1309 | 859 | 866 | 859 | 374 | 233 | 0 | 0 |
| NavierStokes | 34543 | 34622 | 38617 | 38617 | 38655 | 36766 | 21832 | 21179 | 1846 | 1180 | 1355 | 958 | 1008 | 939 | 904 | 1585 | 485 | 490 | 197 | 770 | 176 | 0 | 0 |
| Score | 46037 | 45967 | 45447 | 39937 | 39300 | 19991 | 18744 | 9363 | 1522 | 887 | 843 | 830 | 764 | 710 | 646 | 582 | 378 | 345 | 269 | 251 | 107 | 0 | 0 |
| Score/MB | 1270 | 479 | 853 | 397 | 323 | 1030 | 472 | 46 | 42 | 74 | 178 | 160 | 912 | 527 | 327 | 12 | 565 | 852 | 20 | 116 | 3 | 0 | 0 |
### macos-arm64
| Engine | bun | jsc | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.14 | 0 | 2.3.3 | 24.1.0 | 13.6.0 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 54.9M | 92.4M | 81.9M | 110.5M | 861K | 130.5M | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 1.1M | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7.3K |
| Exe size | 54.9M | 913.2K | 81.9M | 110.5M | 861K | 65.3M | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 1.1M | 1.2M | 1.5M | 41.2M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7.3K |
| Dll size | 0 | 91.5M | 0 | 0 | 0 | 65.3M | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 52858 | 48275 | 47163 | 45480 | 28079 | 13927 | 37470 | 1373 | 1296 | 1310 | 1185 | 1086 | 1108 | 828 | 785 | 410 | 118 | 336 | 0 | 0 | 0 |
| DeltaBlue | 73345 | 72518 | 111329 | 103620 | 64220 | 16027 | 52980 | 1252 | 1181 | 1238 | 1136 | 1078 | 1137 | 960 | 765 | 605 | 226 | 397 | 0 | 0 | 0 |
| Crypto | 72205 | 71468 | 59693 | 59763 | 30693 | 24853 | 45594 | 1485 | 1232 | 1209 | 981 | 1313 | 992 | 1114 | 1615 | 309 | 559 | 200 | 0 | 0 | 0 |
| RayTrace | 184997 | 150884 | 94497 | 95089 | 69785 | 40477 | 4703 | 2567 | 2172 | 1559 | 2046 | 1250 | 1433 | 1172 | 1115 | 894 | 746 | 478 | 0 | 0 | 0 |
| EarleyBoyer | 100948 | 88678 | 99890 | 96853 | 60580 | 47677 | 50592 | 5187 | 3331 | 2640 | 2882 | 2371 | 2355 | 1432 | 1359 | 1120 | 450 | 857 | 0 | 0 | 0 |
| RegExp | 30761 | 26457 | 15274 | 13365 | 8928 | 13066 | 1990 | 720 | 318 | 280 | 305 | 287 | 277 | 223 | 105 | 330 | 335 | 299 | 0 | 0 | 0 |
| Splay | 54338 | 39841 | 51347 | 44600 | 28098 | 31635 | 3656 | 4531 | 3639 | 2502 | 3080 | 2567 | 2320 | 1673 | 2410 | 1358 | 583 | 1332 | 0 | 0 | 0 |
| NavierStokes | 34326 | 31335 | 40662 | 40513 | 29354 | 19826 | 33620 | 1641 | 2148 | 2167 | 1607 | 2565 | 1739 | 2602 | 1991 | 790 | 1578 | 326 | 0 | 0 | 0 |
| Score | 64510 | 56945 | 55827 | 53040 | 33848 | 23329 | 16414 | 1917 | 1553 | 1368 | 1361 | 1309 | 1214 | 1047 | 963 | 637 | 446 | 441 | 0 | 0 | 0 |
| Score/MB | 1175 | 616 | 681 | 480 | 40255 | 178 | 84 | 122 | 430 | 331 | 132 | 1226 | 1028 | 692 | 23 | 1520 | 271 | 34 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | node | deno | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | mujs | xst | goja | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.14 | 13.6.0 | 0 | 24.1.0 | 2.3.3 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 60.3M | 861K | 89.6M | 113.2M | 91.5M | 19.9M | 65.3M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7.3K |
| Exe size | 60.3M | 861K | 1016.1K | 113.2M | 91.5M | 569.8K | 65.3M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 1.6M | 13.1M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28122 | 22156 | 27532 | 21552 | 26791 | 24814 | 9581 | 38271 | 381 | 469 | 380 | 433 | 381 | 387 | 232 | 140 | 82.2 | 143 | 25.7 | 0 | 0 |
| DeltaBlue | 44478 | 73120 | 36934 | 41806 | 46745 | 21548 | 10790 | 44524 | 450 | 526 | 456 | 441 | 396 | 440 | 261 | 199 | 121 | 170 | 22.6 | 0 | 0 |
| Crypto | 42328 | 41150 | 37719 | 32863 | 30841 | 25073 | 15552 | 24073 | 513 | 294 | 271 | 319 | 243 | 263 | 193 | 110 | 147 | 77.7 | 38.9 | 0 | 0 |
| RayTrace | 113884 | 102192 | 101008 | 66599 | 57645 | 34005 | 29600 | 3300 | 839 | 763 | 766 | 423 | 475 | 437 | 338 | 341 | 361 | 214 | 71.3 | 0 | 0 |
| EarleyBoyer | 57194 | 71739 | 57828 | 60504 | 62469 | 5972 | 34374 | 36247 | 1511 | 1093 | 1164 | 751 | 860 | 744 | 570 | 401 | 291 | 387 | 68.5 | 0 | 0 |
| RegExp | 16944 | 8676 | 16472 | 8546 | 7569 | 5475 | 7418 | 1291 | 251 | 82 | 90.6 | 76.4 | 77.6 | 67.1 | 76.9 | 103 | 128 | 173 | 20.2 | 0 | 0 |
| Splay | 34927 | 42775 | 32621 | 35555 | 30290 | 21204 | 23518 | 1938 | 1887 | 1391 | 1435 | 766 | 655 | 670 | 616 | 456 | 264 | 279 | 129 | 0 | 0 |
| NavierStokes | 32731 | 34883 | 32912 | 36582 | 32254 | 35171 | 24364 | 28613 | 723 | 621 | 576 | 760 | 575 | 503 | 332 | 270 | 415 | 110 | 67.6 | 0 | 0 |
| Score | 40095 | 39824 | 37561 | 32759 | 31734 | 18019 | 16993 | 11700 | 665 | 506 | 486 | 414 | 380 | 367 | 278 | 219 | 196 | 174 | 45.8 | 0 | 0 |
| Score/MB | 665 | 47362 | 419 | 289 | 346 | 904 | 260 | 60 | 84 | 135 | 40 | 358 | 184 | 297 | 410 | 507 | 119 | 13 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.14 | 2.3.3 | 24.1.0 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.8M | 137M | 115.5M | 52.1M | 196.1M | 86.6M | 38M | 41.8M | 9M | 8M | 7.5M | 19.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110M | 105M | 84.5M | 33.6M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 18.5M | 195.8M | 83.5M | 32.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35373 | 36711 | 33540 | 26000 | 12691 | 41882 | 705 | 437 | 431 | 434 | 385 | 233 | 192 | 49.4 | 0 | 0 |
| DeltaBlue | 96321 | 43129 | 69721 | 75877 | 11782 | 27471 | 621 | 403 | 377 | 390 | 416 | 332 | 233 | 42.5 | 0 | 0 |
| Crypto | 43013 | 45909 | 41133 | 41974 | 20676 | 21935 | 767 | 417 | 419 | 373 | 321 | 181 | 113 | 76.1 | 0 | 0 |
| RayTrace | 102192 | 102044 | 59953 | 66155 | 27528 | 3253 | 1006 | 737 | 550 | 583 | 538 | 456 | 230 | 134 | 0 | 0 |
| EarleyBoyer | 81297 | 57277 | 73681 | 71939 | 38761 | 28486 | 2220 | 1143 | 978 | 996 | 888 | 535 | 464 | 142 | 0 | 0 |
| RegExp | 9680 | 17638 | 9628 | 9930 | 8892 | 1070 | 407 | 196 | 187 | 186 | 154 | 198 | 201 | 43 | 0 | 0 |
| Splay | 39759 | 34003 | 36777 | 34291 | 24227 | 2727 | 2426 | 1410 | 1042 | 994 | 944 | 1205 | 784 | 171 | 0 | 0 |
| NavierStokes | 38842 | 34178 | 38990 | 38990 | 21963 | 22090 | 1087 | 745 | 711 | 665 | 725 | 512 | 193 | 166 | 0 | 0 |
| Score | 45448 | 41447 | 39450 | 38890 | 18801 | 10527 | 973 | 580 | 517 | 509 | 475 | 378 | 252 | 88.4 | 0 | 0 |
| Score/MB | 865 | 319 | 287 | 336 | 361 | 53 | 11 | 15 | 12 | 56 | 59 | 50 | 12 | 2 | 0 | 0 |
