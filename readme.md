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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46093<br>36.2M<br>1271/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45424<br>53.3M<br>852/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 45203<br>94.5M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 37556<br>118.9M<br>315/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 34866<br>123.6M<br>282/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19973<br>19.4M<br>1029/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18675<br>38.6M<br>483/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10098<br>199.7M<br>50/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1544<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 879<br>11.9M<br>73/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 853<br>4.7M<br>180/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 830<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 764<br>857K<br>912/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 710<br>1.3M<br>527/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 626<br>2.1M<br>300/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 390<br>685K<br>583/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 386<br>45.2M<br>8/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 368<br>414.5K<br>909/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 256<br>2.2M<br>119/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.1K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
3/29/2025, 9:58:34 AM

### ubuntu
| Engine | jsc | v8 | bun | node | deno | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs(one) | ladybird | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.6.0 | 1.2.7 | 23.10.0 | 2.2.6 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 36.2M | 53.3M | 94.5M | 118.9M | 123.6M | 19.4M | 38.6M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 45.2M | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.1K |
| Exe size | 36.2M | 937.8K | 94.5M | 118.9M | 123.6M | 571K | 38.6M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 45.2M | 414.5K | 13.2M | 2.2M | 27M | 454.2K | 7.1K |
| Dll size | 0 | 52.3M | 0 | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41455 | 34875 | 41632 | 32909 | 33230 | 23518 | 12631 | 35320 | 1127 | 791 | 687 | 710 | 612 | 595 | 550 | 249 | 321 | 227 | 205 | 89 | 60.3 | 0 | 0 |
| DeltaBlue | 53893 | 94463 | 54124 | 73503 | 67493 | 25396 | 12814 | 38666 | 1058 | 730 | 672 | 686 | 622 | 595 | 553 | 356 | 276 | 320 | 234 | 160 | 53.3 | 0 | 0 |
| Crypto | 51795 | 42570 | 50028 | 41000 | 41333 | 31388 | 20841 | 29309 | 1365 | 682 | 785 | 589 | 569 | 539 | 358 | 188 | 857 | 183 | 122 | 314 | 76.9 | 0 | 0 |
| RayTrace | 108186 | 105966 | 99529 | 56387 | 67567 | 34967 | 27796 | 4362 | 1555 | 1204 | 916 | 1082 | 941 | 873 | 689 | 527 | 328 | 472 | 276 | 485 | 161 | 0 | 0 |
| EarleyBoyer | 67607 | 80056 | 62109 | 62299 | 74677 | 7080 | 37546 | 17549 | 3444 | 1969 | 1495 | 1710 | 1373 | 1343 | 1201 | 506 | 432 | 472 | 505 | 317 | 187 | 0 | 0 |
| RegExp | 19255 | 10263 | 20325 | 9019 | 9981 | 7795 | 8676 | 797 | 554 | 197 | 239 | 224 | 231 | 221 | 181 | 216 | 45.7 | 193 | 208 | 92.3 | 49.1 | 0 | 0 |
| Splay | 36109 | 38366 | 35669 | 32645 | 12066 | 19512 | 22206 | 2032 | 3598 | 1721 | 1750 | 1962 | 1796 | 1426 | 1618 | 1144 | 836 | 1222 | 936 | 365 | 226 | 0 | 0 |
| NavierStokes | 34622 | 38694 | 34508 | 38584 | 38765 | 35877 | 21815 | 21793 | 1854 | 1131 | 1353 | 964 | 996 | 913 | 894 | 483 | 1208 | 487 | 199 | 798 | 170 | 0 | 0 |
| Score | 46093 | 45424 | 45203 | 37556 | 34866 | 19973 | 18675 | 10098 | 1544 | 879 | 853 | 830 | 764 | 710 | 626 | 390 | 386 | 368 | 274 | 256 | 104 | 0 | 0 |
| Score/MB | 1271 | 852 | 478 | 315 | 282 | 1029 | 483 | 50 | 42 | 73 | 180 | 160 | 912 | 527 | 300 | 583 | 8 | 909 | 20 | 119 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | primjs | rquickjs | ladybird | mujs | goja | xst | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.7 | 2.2.6 | 23.10.0 | 13.6.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54.1M | 107.4M | 108.7M | 861K | 128.1M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.5M | 1.2M | 42.7M | 429.1K | 12.7M | 1.6M | 575.4K | 17.8M | 7.1K |
| Exe size | 913.2K | 54.1M | 107.4M | 108.7M | 861K | 64M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.5M | 1.2M | 42.7M | 429.1K | 12.7M | 1.6M | 575.4K | 554.3K | 7.1K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 64M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 53285 | 53479 | 48191 | 43323 | 34550 | 15618 | 37519 | 1375 | 1344 | 1176 | 1339 | 1100 | 822 | 1114 | 492 | 403 | 336 | 114 | 0 | 0 | 0 |
| DeltaBlue | 76902 | 74191 | 104215 | 104539 | 93306 | 17733 | 50679 | 1259 | 1349 | 1236 | 1157 | 1120 | 972 | 1106 | 448 | 609 | 397 | 216 | 0 | 0 | 0 |
| Crypto | 78655 | 72884 | 56699 | 60806 | 36711 | 26352 | 43286 | 1441 | 1224 | 993 | 1227 | 1338 | 1113 | 1008 | 1368 | 309 | 201 | 558 | 0 | 0 | 0 |
| RayTrace | 191065 | 182851 | 91093 | 70595 | 98049 | 52043 | 2799 | 2430 | 2160 | 1852 | 1596 | 1267 | 1253 | 1491 | 635 | 1016 | 475 | 752 | 0 | 0 | 0 |
| EarleyBoyer | 101077 | 103707 | 105486 | 90905 | 79097 | 50719 | 55687 | 4910 | 3325 | 3081 | 2622 | 2380 | 1921 | 2330 | 843 | 1059 | 864 | 450 | 0 | 0 | 0 |
| RegExp | 32945 | 32126 | 15456 | 13924 | 11570 | 13183 | 2040 | 702 | 319 | 311 | 270 | 285 | 236 | 282 | 77.9 | 351 | 311 | 339 | 0 | 0 | 0 |
| Splay | 55112 | 56457 | 55072 | 47028 | 41911 | 29948 | 4783 | 4425 | 3655 | 3097 | 2161 | 2534 | 3961 | 2377 | 1457 | 1135 | 1393 | 579 | 0 | 0 | 0 |
| NavierStokes | 33653 | 33505 | 40662 | 40621 | 36137 | 21454 | 37433 | 1539 | 2137 | 1646 | 2194 | 2578 | 2692 | 1716 | 1710 | 783 | 329 | 1580 | 0 | 0 | 0 |
| Score | 66454 | 65365 | 55853 | 51171 | 44750 | 25210 | 16176 | 1858 | 1585 | 1378 | 1336 | 1320 | 1234 | 1222 | 649 | 632 | 446 | 441 | 0 | 0 | 0 |
| Score/MB | 719 | 1207 | 519 | 470 | 53221 | 196 | 83 | 118 | 439 | 134 | 324 | 1237 | 815 | 1035 | 15 | 1508 | 35 | 268 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | jsc | bun | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 0 | 1.2.7 | 2.2.6 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 89.6M | 59.4M | 114.3M | 111.6M | 19.9M | 64M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 13.1M | 1.6M | 25.3M | 570.8K | 7.1K |
| Exe size | 861K | 1016.1K | 59.4M | 114.3M | 111.6M | 569.8K | 64M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 441.8K | 13.1M | 1.6M | 25.3M | 570.8K | 7.1K |
| Dll size | 0 | 88.6M | 0 | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22710 | 26752 | 26477 | 25329 | 21947 | 25382 | 9429 | 36545 | 442 | 464 | 407 | 447 | 449 | 400 | 252 | 144 | 145 | 85.8 | 25.8 | 0 | 0 |
| DeltaBlue | 81881 | 34348 | 36808 | 43109 | 41582 | 21883 | 10896 | 35783 | 487 | 498 | 441 | 505 | 468 | 444 | 288 | 199 | 169 | 119 | 22.5 | 0 | 0 |
| Crypto | 41362 | 36566 | 38990 | 31746 | 31128 | 26743 | 15652 | 20065 | 525 | 279 | 272 | 330 | 237 | 253 | 203 | 110 | 79.2 | 131 | 38.9 | 0 | 0 |
| RayTrace | 108852 | 104042 | 100565 | 65267 | 55795 | 32190 | 31461 | 5655 | 1003 | 739 | 778 | 433 | 512 | 491 | 350 | 332 | 244 | 421 | 73.4 | 0 | 0 |
| EarleyBoyer | 69723 | 46595 | 53241 | 59443 | 47817 | 6169 | 34357 | 32811 | 1621 | 1132 | 1197 | 833 | 846 | 822 | 596 | 412 | 426 | 304 | 83.4 | 0 | 0 |
| RegExp | 8784 | 17382 | 14866 | 7961 | 7118 | 5380 | 7728 | 1017 | 255 | 93 | 90 | 82.8 | 82.7 | 81.6 | 76.8 | 98.9 | 199 | 123 | 22.2 | 0 | 0 |
| Splay | 40966 | 39972 | 32176 | 30681 | 27389 | 22245 | 23526 | 3001 | 2296 | 1567 | 1502 | 916 | 868 | 778 | 682 | 466 | 599 | 284 | 122 | 0 | 0 |
| NavierStokes | 36878 | 33290 | 29235 | 35953 | 33848 | 35616 | 24462 | 22534 | 826 | 658 | 596 | 816 | 640 | 558 | 333 | 271 | 116 | 451 | 70.1 | 0 | 0 |
| Score | 40845 | 37326 | 36038 | 32287 | 28999 | 18299 | 17220 | 11631 | 739 | 518 | 496 | 449 | 421 | 399 | 293 | 219 | 202 | 201 | 47.6 | 0 | 0 |
| Score/MB | 48577 | 416 | 606 | 282 | 259 | 918 | 268 | 59 | 94 | 138 | 41 | 389 | 204 | 323 | 432 | 507 | 15 | 122 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.7 | 2.2.6 | 23.10.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 128.8M | 135.3M | 113.7M | 50.2M | 196.1M | 86.6M | 38M | 41.8M | 9M | 8M | 7.5M | 19.6M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 109M | 103.3M | 82.7M | 32.9M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 17.3M | 195.8M | 83.5M | 32.3M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35309 | 36368 | 33286 | 33385 | 13348 | 36043 | 702 | 444 | 427 | 429 | 384 | 212 | 199 | 48.1 | 0 | 0 |
| DeltaBlue | 97160 | 43783 | 67936 | 67368 | 13052 | 29211 | 620 | 410 | 383 | 390 | 422 | 284 | 230 | 41.7 | 0 | 0 |
| Crypto | 42986 | 45309 | 42082 | 41777 | 21259 | 21410 | 790 | 434 | 420 | 377 | 318 | 183 | 114 | 74.5 | 0 | 0 |
| RayTrace | 101378 | 93072 | 64971 | 56405 | 27944 | 2366 | 1007 | 739 | 603 | 580 | 527 | 449 | 232 | 132 | 0 | 0 |
| EarleyBoyer | 79685 | 58290 | 72420 | 61143 | 38214 | 26689 | 2241 | 1129 | 991 | 974 | 898 | 574 | 460 | 142 | 0 | 0 |
| RegExp | 9728 | 17058 | 9961 | 8455 | 8555 | 1111 | 400 | 196 | 180 | 188 | 155 | 200 | 199 | 43.1 | 0 | 0 |
| Splay | 40110 | 33256 | 36793 | 10180 | 23005 | 3128 | 2350 | 1441 | 1042 | 1000 | 952 | 1198 | 774 | 183 | 0 | 0 |
| NavierStokes | 38881 | 33984 | 38990 | 38732 | 22171 | 22408 | 1089 | 738 | 711 | 673 | 729 | 468 | 195 | 164 | 0 | 0 |
| Score | 45408 | 40711 | 39880 | 31930 | 19038 | 10130 | 972 | 585 | 522 | 509 | 476 | 365 | 253 | 88 | 0 | 0 |
| Score/MB | 864 | 316 | 294 | 280 | 379 | 51 | 11 | 15 | 12 | 56 | 59 | 48 | 12 | 2 | 0 | 0 |
