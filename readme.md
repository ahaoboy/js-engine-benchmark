fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

## Engine & Runtime

- [x] [bun](https://github.com/oven-sh/bun): Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one
- [x] [node](https://github.com/nodejs/node): Node.js JavaScript runtime
- [x] [deno](https://github.com/denoland/deno): A modern runtime for JavaScript and TypeScript.
- [x] [graaljs](https://github.com/oracle/graaljs): A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications!
- [x] [hermes](https://github.com/facebook/hermes): A JavaScript engine optimized for running React Native.
- [x] [llrt](https://github.com/awslabs/llrt): LLRT (Low Latency Runtime) is a lightweight JavaScript runtime
- [x] [txiki.js](https://github.com/saghul/txiki.js): A tiny JavaScript runtime
- [x] [QuickJS](https://bellard.org/quickjs/): version 2019-07-09, qjs executable, 64 bits, compiled with -O2.
- [x] [QuickJS-ng](https://github.com/quickjs-ng/quickjs): QuickJS, the Next Generation: a mighty JavaScript engine
- [x] [MuJS](https://github.com/ccxvii/mujs): An embeddable Javascript interpreter in C.
- [x] [XS](https://github.com/Moddable-OpenSource/moddable): Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers.
- [x] [Hermes](https://github.com/facebook/hermes): version 0.1.0, 64 bit Linux binary downloaded from here. The benchmark was run with the -O option (=enable expensive optimizations).
- [x] [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore): JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ​ECMAScript as in ​ECMA-262 specification.
- [x] [v8](https://v8.dev/): V8 is Google’s open source high-performance JavaScript and WebAssembly engine
- [x] [spidermonkey](https://spidermonkey.dev/): SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox
- [x] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [x] [primjs](https://github.com/lynx-family/primjs): JavaScript Engine Optimized for Lynx
- [x] [rquickjs](https://github.com/DelSkayn/rquickjs): High level bindings to the quickjs javascript engine
- [x] [ChakraCore](https://github.com/chakra-core/ChakraCore): ChakraCore is an open source Javascript engine with a C API.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
- [ ] [ChakraCore](https://github.com/chakra-core/ChakraCore): ChakraCore is an open source Javascript engine with a C API.
- [ ] [nova](https://github.com/trynova/nova): Nova is a JavaScript and WebAssembly engine written in Rust.


## install engine

- deno: https://github.com/denoland/setup-deno
- node: https://github.com/actions/setup-node
- bun: https://github.com/oven-sh/setup-bun
- spidermonkey: https://github.com/ahaoboy/spidermonkey-build
- v8: https://github.com/ahaoboy/v8-build
- JavaScriptCore: https://github.com/ahaoboy/jsc-build
- jerryscript: https://github.com/ahaoboy/jerryscript-build
- quickjs-ng: https://github.com/ahaoboy/quickjs-ng-build
- quickjs: https://github.com/ahaoboy/quickjs-build
- mujs: https://github.com/ahaoboy/mujs-build
- mujs-one: https://github.com/ahaoboy/mujs-one
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/facebook/hermes
- graaljs: https://github.com/oracle/graaljs
- XS: https://github.com/Moddable-OpenSource/moddable
- primjs: https://github.com/ahaoboy/primjs-build
- rquickjs-cli: https://github.com/ahaoboy/rquickjs-cli
- ChakraCore: https://github.com/ahaoboy/ChakraCore-build

## Note

### graaljs size

lib and modules need to be included in the dll size

```
Could not canonicalize /root/.easy-install/graaljs/../wasm.jar
Could not canonicalize /root/.easy-install/graaljs/../../ruby/jline3.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/graaljs-launcher.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/launcher-common.jar
Error while loading /root/.easy-install/graaljs/../../../lib/server/libjvm.so:
/root/.easy-install/graaljs/../../../lib/server/libjvm.so: cannot open shared object file: No such file or directory
Could not load JVM.
```



## bench

3/14/2025, 12:58:20 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | rquickjs | qjs(ng) | mujs | mujs(one) | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 0 | 13.5.0 | 2.2.3 | 23.7.0 | 1.13.0.0-beta | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0 | 0.9.0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 95.6M | 35.1M | 53.4M | 121.9M | 117.9M | 19.4M | 296.3M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 414.5K | 685K | 2.2M | 27M | 454.2K |
| Exe size | 95.6M | 35.1M | 937K | 121.9M | 117.9M | 571K | 296.3M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 414.5K | 685K | 2.2M | 27M | 454.2K |
| Dll size | 0 | 0 | 52.5M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41236 | 41988 | 34543 | 33074 | 32619 | 23169 | 13298 | 35443 | 1117 | 794 | 688 | 705 | 611 | 594 | 557 | 223 | 252 | 89.2 | 61 | 269 |
| DeltaBlue | 56200 | 49489 | 90773 | 69226 | 75963 | 24265 | 12979 | 25429 | 1050 | 724 | 673 | 666 | 612 | 584 | 539 | 324 | 363 | 160 | 55 | 270 |
| Crypto | 50060 | 44977 | 42380 | 41645 | 41461 | 32035 | 17441 | 16820 | 1362 | 674 | 757 | 596 | 566 | 541 | 357 | 184 | 187 | 311 | 78.8 | 294 |
| RayTrace | 106040 | 107372 | 104042 | 66081 | 62677 | 34039 | 27796 | 5364 | 1530 | 1209 | 935 | 1095 | 933 | 896 | 677 | 483 | 406 | 492 | 161 | 345 |
| EarleyBoyer | 64806 | 65482 | 76597 | 71464 | 62230 | 7087 | 36894 | 21024 | 3365 | 1944 | 1402 | 1685 | 1292 | 1292 | 1161 | 516 | 398 | 317 | 180 | 0 |
| RegExp | 20274 | 20093 | 10162 | 10032 | 9101 | 7230 | 8603 | 767 | 544 | 197 | 239 | 229 | 230 | 231 | 179 | 191 | 209 | 92.1 | 48 | 0 |
| Splay | 33384 | 34878 | 37217 | 36907 | 11438 | 18409 | 20731 | 2359 | 3081 | 1633 | 1679 | 1763 | 1713 | 1384 | 1549 | 1271 | 1134 | 392 | 218 | 0 |
| NavierStokes | 34429 | 34429 | 38655 | 37842 | 38617 | 36618 | 21980 | 19954 | 1816 | 1181 | 1322 | 990 | 995 | 946 | 906 | 482 | 480 | 825 | 173 | 0 |
| Score | 45564 | 44670 | 44538 | 39810 | 33564 | 19531 | 18212 | 9415 | 1496 | 876 | 838 | 821 | 750 | 712 | 618 | 375 | 365 | 260 | 104 | 0 |
| Score/MB | 476 | 1272 | 834 | 326 | 284 | 1006 | 61 | 47 | 41 | 73 | 177 | 159 | 896 | 528 | 296 | 926 | 545 | 120 | 3 | 0 |
### macos-arm64
| Engine | bun | node | deno | v8 | graaljs | hermes | tjs | qjs(ng) | llrt | qjs | rquickjs | primjs | mujs | xst | jerry | ChakraCore |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 23.7.0 | 2.2.3 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 2024-02-14 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 | 1.13.0.0-beta |
| Total size | 55.3M | 121.7M | 105.6M | 861.1K | 194M | 15.7M | 3.6M | 4.1M | 10.3M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K | 17.8M |
| Exe size | 55.3M | 121.7M | 105.6M | 861.1K | 147.4K | 7.9M | 3.6M | 2.1M | 10.3M | 1.1M | 1.2M | 1.5M | 429.1K | 1.6M | 575.4K | 554.3K |
| Dll size | 0 | 0 | 0 | 0 | 193.8M | 7.9M | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M |
| Richards | 52589 | 40205 | 38857 | 35493 | 37413 | 1201 | 1243 | 1210 | 997 | 900 | 956 | 759 | 348 | 107 | 217 | 0 |
| DeltaBlue | 76717 | 101855 | 90919 | 83838 | 52980 | 1135 | 1184 | 1088 | 1064 | 993 | 923 | 908 | 551 | 207 | 240 | 0 |
| Crypto | 71004 | 59787 | 39640 | 36076 | 43464 | 1343 | 1084 | 1075 | 802 | 1150 | 868 | 1030 | 275 | 508 | 271 | 0 |
| RayTrace | 183221 | 74961 | 75849 | 88429 | 5299 | 2359 | 1975 | 1375 | 1793 | 1118 | 1341 | 1123 | 839 | 686 | 336 | 0 |
| EarleyBoyer | 103319 | 91044 | 91442 | 72978 | 48847 | 3921 | 2617 | 2332 | 2673 | 2046 | 1987 | 1386 | 926 | 402 | 0 | 0 |
| RegExp | 31156 | 13728 | 12884 | 11661 | 1772 | 647 | 271 | 251 | 271 | 246 | 233 | 153 | 295 | 330 | 0 | 0 |
| Splay | 35497 | 49155 | 48006 | 41886 | 3751 | 3724 | 2914 | 2090 | 2559 | 2129 | 1842 | 1919 | 1399 | 548 | 0 | 0 |
| NavierStokes | 33027 | 40068 | 38584 | 35805 | 29325 | 1473 | 1901 | 1899 | 1383 | 2350 | 1521 | 2347 | 689 | 1349 | 0 | 0 |
| Score | 61250 | 50918 | 46843 | 43193 | 16024 | 1669 | 1369 | 1207 | 1186 | 1142 | 1036 | 967 | 573 | 407 | 0 | 0 |
| Score/MB | 1108 | 418 | 443 | 51364 | 82 | 106 | 379 | 292 | 115 | 1070 | 877 | 639 | 1367 | 247 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | ChakraCore | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | rquickjs | primjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.5 | 2.2.3 | 23.7.0 | 1.13.0.0-beta | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 861.1K | 60.7M | 112.8M | 110.6M | 19.9M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Exe size | 861.1K | 60.7M | 112.8M | 110.6M | 569.8K | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K |
| Dll size | 0 | 0 | 0 | 0 | 19.4M | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 18371 | 25389 | 29823 | 22173 | 25410 | 35277 | 461 | 449 | 424 | 446 | 449 | 410 | 254 | 92.1 | 143 | 26 | 90.4 |
| DeltaBlue | 72128 | 40339 | 45357 | 43030 | 23445 | 28166 | 519 | 500 | 481 | 491 | 490 | 455 | 288 | 138 | 199 | 22.9 | 81.8 |
| Crypto | 34525 | 38634 | 30901 | 32356 | 25830 | 18187 | 552 | 289 | 277 | 327 | 290 | 273 | 202 | 179 | 109 | 39.1 | 129 |
| RayTrace | 89539 | 87097 | 63080 | 52243 | 33743 | 4931 | 1057 | 672 | 776 | 432 | 486 | 485 | 351 | 420 | 307 | 74.9 | 213 |
| EarleyBoyer | 61569 | 48516 | 48137 | 46009 | 5967 | 27112 | 1691 | 1142 | 1200 | 844 | 810 | 770 | 606 | 307 | 377 | 84.6 | 0 |
| RegExp | 7015 | 11989 | 6903 | 6917 | 5242 | 938 | 278 | 89.1 | 89.9 | 82.4 | 67.4 | 80.5 | 80.5 | 123 | 103 | 22.5 | 0 |
| Splay | 32270 | 26680 | 25856 | 28628 | 18801 | 2138 | 2331 | 1601 | 1479 | 916 | 860 | 763 | 733 | 281 | 377 | 115 | 0 |
| NavierStokes | 33667 | 29443 | 31250 | 35989 | 33093 | 13801 | 834 | 642 | 587 | 804 | 617 | 574 | 369 | 436 | 267 | 73.3 | 0 |
| Score | 34314 | 33469 | 30286 | 29202 | 17806 | 9509 | 773 | 510 | 503 | 447 | 416 | 401 | 302 | 214 | 209 | 47.9 | 0 |
| Score/MB | 40806 | 551 | 268 | 263 | 893 | 48 | 98 | 136 | 41 | 387 | 201 | 325 | 445 | 130 | 484 | 1 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.5 | 2.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.8M | 134.4M | 112.5M | 196.1M | 139.1M | 36.9M | 41.8M | 9M | 8M | 7.5M | 42.4M | 5.9M |
| Exe size | 108M | 102.4M | 81.5M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 27.4M | 1.3M |
| Dll size | 19.8M | 32M | 31M | 195.8M | 136.1M | 31.2M | 29.1M | 7.3M | 6.7M | 6.9M | 15M | 4.7M |
| Richards | 36432 | 33290 | 32803 | 35796 | 691 | 445 | 416 | 434 | 381 | 233 | 49.1 | 0 |
| DeltaBlue | 48094 | 63652 | 76003 | 26830 | 624 | 410 | 383 | 410 | 410 | 330 | 41.6 | 0 |
| Crypto | 45954 | 41364 | 38512 | 24993 | 784 | 428 | 412 | 375 | 322 | 185 | 74.8 | 0 |
| RayTrace | 85987 | 65571 | 60531 | 2809 | 1003 | 728 | 596 | 583 | 545 | 458 | 133 | 0 |
| EarleyBoyer | 58599 | 71403 | 60780 | 22562 | 2243 | 1151 | 995 | 988 | 901 | 575 | 151 | 0 |
| RegExp | 18165 | 9981 | 8438 | 972 | 409 | 196 | 193 | 189 | 156 | 205 | 43.7 | 0 |
| Splay | 34658 | 37901 | 10594 | 2794 | 2481 | 1465 | 1035 | 1027 | 961 | 1173 | 170 | 0 |
| NavierStokes | 34030 | 39029 | 38139 | 27602 | 1096 | 738 | 711 | 671 | 721 | 493 | 164 | 0 |
| Score | 41437 | 39610 | 32366 | 10165 | 979 | 586 | 522 | 516 | 477 | 381 | 88.4 | 0 |
| Score/MB | 324 | 294 | 287 | 51 | 7 | 15 | 12 | 57 | 59 | 50 | 2 | 0 |
