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

3/5/2025, 7:18:33 AM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | qjs(ng) | mujs | mujs(one) | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0.8.0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 121.9M | 117.9M | 296.3M | 199.7M | 36.0M | 11.9M | 4.7M | 5.2M | 860K | 2.1M | 416K | 688K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 940K | 95.1M | 121.9M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 860K | 2.1M | 416K | 688K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 198.7M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40866 | 33007 | 40622 | 33237 | 33025 | 13214 | 35376 | 1132 | 797 | 694 | 707 | 550 | 632 | 227 | 251 | 85.9 | 61.1 | 270 |
| DeltaBlue | 49992 | 97630 | 51394 | 65761 | 72763 | 12986 | 27227 | 1054 | 718 | 674 | 688 | 596 | 608 | 322 | 361 | 154 | 55 | 279 |
| Crypto | 46169 | 42763 | 44977 | 41726 | 41601 | 17761 | 14448 | 1369 | 696 | 753 | 605 | 525 | 379 | 183 | 189 | 292 | 80.9 | 302 |
| RayTrace | 111294 | 105892 | 113588 | 64305 | 61567 | 27916 | 9305 | 1542 | 1171 | 917 | 1093 | 868 | 715 | 488 | 521 | 451 | 165 | 350 |
| EarleyBoyer | 70075 | 79838 | 65828 | 72541 | 61188 | 37064 | 22134 | 3379 | 1919 | 1530 | 1778 | 1344 | 1222 | 501 | 529 | 315 | 185 | 0 |
| RegExp | 20862 | 10223 | 21253 | 9971 | 8947 | 8810 | 762 | 554 | 197 | 238 | 225 | 231 | 179 | 199 | 223 | 94 | 49.3 | 0 |
| Splay | 36842 | 38154 | 26672 | 37567 | 33499 | 22573 | 2480 | 3655 | 1674 | 1768 | 1972 | 1752 | 1121 | 1276 | 805 | 377 | 226 | 0 |
| NavierStokes | 34543 | 38694 | 34132 | 38765 | 38584 | 22024 | 18476 | 1821 | 1178 | 1358 | 1020 | 934 | 962 | 487 | 485 | 727 | 171 | 0 |
| Score | 45850 | 45252 | 43816 | 39706 | 38008 | 18515 | 10001 | 1538 | 876 | 854 | 845 | 724 | 629 | 377 | 377 | 248 | 106 | 0 |
| Score/MB | 1305 | 847 | 460 | 325 | 322 | 62 | 50 | 42 | 73 | 181 | 163 | 862 | 298 | 928 | 561 | 115 | 3 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | primjs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 0 | 16.8.1 | 3.0.0 |
| Total size | 109.8M | 211.2M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 1.5M | 3.3M | 1.1M |
| Exe size | 109.8M | 211.2M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 1.5M | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 48621 | 39288 | 39446 | 21598 | 33840 | 1237 | 1342 | 1190 | 1354 | 1065 | 409 | 322 | 97.1 | 200 |
| DeltaBlue | 62217 | 84334 | 92830 | 78125 | 17105 | 1150 | 1349 | 1234 | 1248 | 1106 | 611 | 398 | 191 | 219 |
| Crypto | 58907 | 48775 | 50911 | 29822 | 33512 | 1326 | 1239 | 998 | 1231 | 1350 | 314 | 359 | 442 | 230 |
| RayTrace | 162650 | 70077 | 67709 | 78735 | 939 | 2202 | 2188 | 2073 | 1591 | 1268 | 999 | 581 | 653 | 292 |
| EarleyBoyer | 85981 | 86472 | 70175 | 72615 | 22494 | 4647 | 3351 | 3124 | 2652 | 2392 | 1084 | 930 | 405 | 0 |
| RegExp | 21617 | 12274 | 11851 | 8919 | 1120 | 650 | 318 | 314 | 279 | 289 | 320 | 209 | 295 | 0 |
| Splay | 24007 | 34748 | 30469 | 33884 | 2290 | 3419 | 3643 | 3154 | 2494 | 2526 | 982 | 1511 | 462 | 0 |
| NavierStokes | 30892 | 35841 | 30361 | 32731 | 21666 | 1329 | 2165 | 1656 | 2203 | 2582 | 728 | 557 | 1373 | 0 |
| Score | 50141 | 44350 | 42016 | 36039 | 8311 | 1658 | 1592 | 1409 | 1384 | 1318 | 611 | 507 | 377 | 0 |
| Score/MB | 456 | 210 | 172 | 21356 | 28751 | 105 | 220 | 68 | 335 | 615 | 724 | 334 | 114 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | primjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.4 | 2.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 1.7M | 120.5M | 225.5M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 1.4M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 1.7M | 120.5M | 225.5M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 1.4M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22410 | 28884 | 27832 | 23017 | 43665 | 501 | 488 | 425 | 448 | 473 | 259 | 93.1 | 145 | 26 | 111 |
| DeltaBlue | 81867 | 45846 | 49998 | 47843 | 53344 | 563 | 550 | 482 | 493 | 495 | 291 | 140 | 203 | 22.6 | 128 |
| Crypto | 41217 | 37760 | 34901 | 34202 | 26936 | 568 | 307 | 274 | 329 | 298 | 204 | 183 | 112 | 39.4 | 139 |
| RayTrace | 106780 | 107372 | 68011 | 41710 | 11890 | 1092 | 851 | 776 | 430 | 513 | 350 | 445 | 345 | 75.3 | 215 |
| EarleyBoyer | 70782 | 58907 | 64796 | 52656 | 43489 | 1786 | 1295 | 1208 | 810 | 906 | 604 | 318 | 416 | 85.1 | 0 |
| RegExp | 8719 | 17330 | 8992 | 7554 | 1352 | 294 | 95.2 | 93.1 | 81.4 | 82.9 | 79.1 | 130 | 105 | 23.9 | 0 |
| Splay | 42620 | 40566 | 33240 | 34438 | 3158 | 2426 | 1558 | 1487 | 938 | 878 | 745 | 307 | 422 | 144 | 0 |
| NavierStokes | 36655 | 33323 | 37063 | 36841 | 27751 | 899 | 658 | 591 | 821 | 657 | 369 | 495 | 272 | 77.2 | 0 |
| Score | 40870 | 40618 | 35226 | 30718 | 15779 | 818 | 554 | 506 | 447 | 445 | 303 | 225 | 221 | 50.1 | 0 |
| Score/MB | 24219 | 337 | 156 | 138 | 53150 | 52 | 74 | 20 | 193 | 107 | 222 | 67 | 254 | 0 | 0 |
### windows
| Engine | deno | bun | node | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.3 | 1.2.4 | 23.7.0 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 134.5M | 127.3M | 112.6M | 87.2M | 43.2M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 102.4M | 107.5M | 81.5M | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 32.1M | 19.8M | 31.0M | 84.1M | 37.5M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 32125 | 38454 | 32728 | 700 | 452 | 431 | 437 | 233 | 49.5 | 0 |
| DeltaBlue | 70197 | 46507 | 74846 | 626 | 403 | 383 | 396 | 331 | 41.7 | 0 |
| Crypto | 37801 | 41212 | 36695 | 780 | 422 | 412 | 381 | 185 | 74.6 | 0 |
| RayTrace | 65563 | 87467 | 60827 | 1002 | 731 | 604 | 580 | 471 | 133 | 0 |
| EarleyBoyer | 73583 | 56080 | 59793 | 2232 | 1142 | 1001 | 984 | 570 | 143 | 0 |
| RegExp | 10001 | 17400 | 8388 | 404 | 196 | 185 | 188 | 199 | 43.3 | 0 |
| Splay | 37706 | 18979 | 10284 | 2428 | 1368 | 1025 | 1010 | 1198 | 188 | 0 |
| NavierStokes | 39060 | 34577 | 33835 | 1094 | 742 | 710 | 682 | 514 | 166 | 0 |
| Score | 39608 | 37754 | 31438 | 976 | 580 | 522 | 514 | 383 | 89 | 0 |
| Score/MB | 294 | 296 | 279 | 11 | 13 | 12 | 57 | 50 | 2 | 0 |
