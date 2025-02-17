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
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/facebook/hermes
- graaljs: https://github.com/oracle/graaljs
- XS: https://github.com/Moddable-OpenSource/moddable


## bench

### ubuntu
| Engine | jsc | bun | v8 | deno | node | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.2 | 13.3.0 | 2.1.10 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 24.12.0 | 2024-02-14 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 93.9M | 50.5M | 122.2M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 5.2M | 4.7M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 93.9M | 488K | 122.2M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 5.2M | 4.7M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41392 | 41049 | 35030 | 33805 | 32849 | 13009 | 35666 | 1117 | 794 | 708 | 692 | 622 | 231 | 87.5 | 60.4 | 272 |
| DeltaBlue | 49608 | 46891 | 82899 | 72776 | 72214 | 12919 | 26989 | 1034 | 720 | 685 | 645 | 605 | 324 | 155 | 54.7 | 277 |
| Crypto | 45710 | 44815 | 42568 | 41601 | 41626 | 17691 | 9676 | 1349 | 681 | 590 | 752 | 379 | 183 | 289 | 80.8 | 297 |
| RayTrace | 109370 | 116326 | 101378 | 62159 | 57941 | 28046 | 10635 | 1565 | 1190 | 1070 | 851 | 708 | 494 | 464 | 165 | 348 |
| EarleyBoyer | 68378 | 67412 | 79162 | 64062 | 54119 | 36699 | 25922 | 3391 | 1984 | 1780 | 1487 | 1223 | 499 | 309 | 191 | 0 |
| RegExp | 20073 | 20841 | 9910 | 9364 | 9038 | 8801 | 990 | 553 | 198 | 227 | 239 | 181 | 198 | 94 | 49.2 | 0 |
| Splay | 37054 | 34511 | 37657 | 34650 | 34683 | 21457 | 2188 | 3357 | 1768 | 1927 | 1664 | 1113 | 626 | 374 | 226 | 0 |
| NavierStokes | 34394 | 34326 | 38655 | 38732 | 38584 | 21623 | 18790 | 1829 | 1164 | 974 | 1285 | 974 | 492 | 755 | 173 | 0 |
| Score | 45371 | 44961 | 44102 | 38786 | 37297 | 18285 | 10055 | 1517 | 884 | 833 | 826 | 628 | 346 | 249 | 106 | 0 |
### macos-arm64
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 2.1.10 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 108.5M | 210.7M | 243.4M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Exe size | 108.5M | 210.7M | 243.4M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 51509 | 54249 | 41942 | 36372 | 1327 | 1267 | 1156 | 1307 | 1026 | 386 | 115 | 208 |
| DeltaBlue | 63467 | 102933 | 93425 | 48114 | 1220 | 1292 | 1217 | 1210 | 1089 | 576 | 217 | 231 |
| Crypto | 65381 | 58652 | 58402 | 43479 | 1437 | 1197 | 958 | 1180 | 1300 | 302 | 540 | 262 |
| RayTrace | 169605 | 74591 | 71853 | 3837 | 2484 | 2116 | 2015 | 1541 | 1221 | 957 | 723 | 326 |
| EarleyBoyer | 95445 | 83851 | 88438 | 52202 | 4985 | 3158 | 3018 | 2567 | 2127 | 1071 | 434 | 0 |
| RegExp | 31065 | 13855 | 13429 | 1935 | 703 | 306 | 302 | 271 | 278 | 351 | 318 | 0 |
| Splay | 49660 | 50500 | 42155 | 2900 | 4587 | 3530 | 3050 | 2418 | 2279 | 890 | 570 | 0 |
| NavierStokes | 32319 | 39138 | 38694 | 37804 | 1564 | 2088 | 1577 | 2113 | 2440 | 761 | 1517 | 0 |
| Score | 60201 | 52314 | 48741 | 15442 | 1863 | 1527 | 1363 | 1337 | 1246 | 598 | 430 | 0 |
### macos-amd64
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 23.7.0 | 2.1.10 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 119.0M | 221.2M | 224.4M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 119.0M | 221.2M | 224.4M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28965 | 21555 | 22138 | 43630 | 395 | 471 | 421 | 443 | 479 | 89.6 | 136 | 25.1 | 111 |
| DeltaBlue | 38177 | 48081 | 47532 | 56009 | 527 | 544 | 488 | 507 | 510 | 138 | 199 | 22.8 | 127 |
| Crypto | 38131 | 33349 | 32303 | 19549 | 521 | 306 | 277 | 329 | 301 | 177 | 100 | 38.9 | 139 |
| RayTrace | 106558 | 58607 | 47063 | 7252 | 959 | 842 | 784 | 432 | 520 | 421 | 333 | 75.4 | 218 |
| EarleyBoyer | 59244 | 49045 | 43726 | 41786 | 1446 | 1294 | 1169 | 839 | 911 | 315 | 405 | 85.2 | 0 |
| RegExp | 17365 | 7433 | 7111 | 1386 | 256 | 93.4 | 93.3 | 82 | 83.3 | 121 | 101 | 23 | 0 |
| Splay | 32442 | 29850 | 28196 | 2851 | 2426 | 1539 | 1448 | 925 | 850 | 308 | 485 | 115 | 0 |
| NavierStokes | 33060 | 36470 | 34246 | 31429 | 879 | 644 | 594 | 819 | 660 | 484 | 265 | 73.3 | 0 |
| Score | 38629 | 30772 | 28853 | 14349 | 732 | 546 | 504 | 449 | 448 | 219 | 216 | 47.9 | 0 |
### windows
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 23.7.0 | 2.1.10 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 126.3M | 112.6M | 133.9M | 6.6M | 112.9M | 44.9M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 106.5M | 81.5M | 102.7M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 664K | 27.4M | 1.3M |
| Dll size | 19.8M | 31.0M | 31.2M | 6.2M | 109.8M | 39.2M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 37353 | 33131 | 33830 | 35941 | 694 | 455 | 431 | 424 | 240 | 49.7 | 0 |
| DeltaBlue | 39446 | 69477 | 55757 | 34157 | 622 | 403 | 377 | 403 | 337 | 42.5 | 0 |
| Crypto | 39305 | 39501 | 42046 | 22224 | 790 | 424 | 419 | 367 | 182 | 75.6 | 0 |
| RayTrace | 99973 | 60383 | 57144 | 4583 | 1012 | 741 | 602 | 583 | 455 | 134 | 0 |
| EarleyBoyer | 57970 | 61326 | 61853 | 30668 | 2248 | 1135 | 992 | 983 | 571 | 142 | 0 |
| RegExp | 17693 | 8430 | 9274 | 1039 | 405 | 197 | 192 | 187 | 200 | 43 | 0 |
| Splay | 31032 | 32164 | 33525 | 3151 | 2424 | 1417 | 1035 | 953 | 1205 | 168 | 0 |
| NavierStokes | 34360 | 38694 | 38951 | 28938 | 1076 | 743 | 711 | 623 | 502 | 166 | 0 |
| Score | 39828 | 37026 | 36843 | 11750 | 975 | 584 | 525 | 501 | 383 | 88.2 | 0 |
