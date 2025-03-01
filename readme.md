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
- mujs-one: https://github.com/ahaoboy/mujs-one
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/facebook/hermes
- graaljs: https://github.com/oracle/graaljs
- XS: https://github.com/Moddable-OpenSource/moddable


## bench

3/1/2025, 3:59:08 PM

### ubuntu
| Engine | jsc | v8 | bun | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 13.5.0 | 1.2.4 | 2.2.2 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 53.4M | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 940K | 95.1M | 122.7M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 52.5M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42369 | 35366 | 39934 | 33343 | 32969 | 13330 | 36065 | 1111 | 790 | 694 | 706 | 626 | 244 | 223 | 87.8 | 60.3 | 274 |
| DeltaBlue | 48974 | 92730 | 55962 | 69596 | 73755 | 12953 | 30004 | 1036 | 727 | 673 | 659 | 602 | 357 | 317 | 156 | 55.3 | 274 |
| Crypto | 45991 | 42431 | 45267 | 41598 | 41594 | 17872 | 28960 | 1352 | 691 | 754 | 593 | 379 | 190 | 184 | 294 | 80.7 | 299 |
| RayTrace | 106484 | 101822 | 106484 | 66081 | 62307 | 28018 | 2752 | 1551 | 1188 | 922 | 1080 | 718 | 504 | 468 | 460 | 165 | 352 |
| EarleyBoyer | 67827 | 81075 | 65704 | 72158 | 60639 | 38067 | 33872 | 3373 | 1983 | 1446 | 1719 | 1222 | 506 | 463 | 304 | 189 | 0 |
| RegExp | 20022 | 10193 | 20436 | 10042 | 8974 | 8555 | 1072 | 554 | 198 | 242 | 226 | 178 | 212 | 194 | 93.9 | 48.3 | 0 |
| Splay | 36956 | 38504 | 24333 | 36361 | 11415 | 22532 | 4498 | 3414 | 1731 | 1726 | 1879 | 1096 | 1085 | 1266 | 375 | 229 | 0 |
| NavierStokes | 34439 | 38694 | 34360 | 38732 | 38545 | 21980 | 28316 | 1804 | 1144 | 1326 | 963 | 974 | 491 | 488 | 762 | 174 | 0 |
| Score | 45246 | 45207 | 43183 | 39966 | 33291 | 18537 | 11888 | 1515 | 882 | 845 | 822 | 627 | 384 | 368 | 250 | 106 | 0 |
### macos-arm64
| Engine | deno | bun | v8 | node | graaljs | hermes | tjs | qjs(ng) | llrt | qjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.2.2 | 1.2.4 | 13.5.0 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 2024-02-14 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 213.0M | 109.8M | 1.7M | 243.4M | 296K | 15.7M | 7.2M | 4.1M | 20.5M | 2.1M | 864K | 3.3M | 1.1M |
| Exe size | 213.0M | 109.8M | 1.7M | 243.4M | 296K | 15.7M | 7.2M | 4.1M | 20.5M | 2.1M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 44389 | 39415 | 24736 | 39108 | 27140 | 1160 | 1270 | 1243 | 935 | 1024 | 385 | 92.9 | 175 |
| DeltaBlue | 103845 | 60207 | 76419 | 89762 | 24384 | 988 | 1213 | 1129 | 1017 | 1042 | 574 | 191 | 217 |
| Crypto | 53704 | 51140 | 33015 | 55079 | 29183 | 1212 | 1130 | 1088 | 850 | 1209 | 292 | 417 | 240 |
| RayTrace | 65341 | 140376 | 84433 | 66311 | 805 | 2026 | 2014 | 1415 | 1916 | 1097 | 930 | 631 | 289 |
| EarleyBoyer | 90064 | 78273 | 68073 | 71017 | 22684 | 4175 | 3001 | 2287 | 2622 | 2158 | 1032 | 358 | 0 |
| RegExp | 12547 | 20862 | 10385 | 10062 | 1147 | 589 | 299 | 258 | 291 | 263 | 322 | 273 | 0 |
| Splay | 38007 | 29524 | 30877 | 9323 | 2114 | 3411 | 3113 | 2086 | 2800 | 2109 | 863 | 462 | 0 |
| NavierStokes | 36878 | 28761 | 28851 | 31906 | 17921 | 1250 | 2000 | 2009 | 1522 | 2372 | 690 | 1422 | 0 |
| Score | 47432 | 46953 | 36738 | 35844 | 7910 | 1527 | 1450 | 1233 | 1224 | 1190 | 575 | 363 | 0 |
### macos-amd64
| Engine | v8 | bun | deno | node | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.5.0 | 1.2.4 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 1.7M | 120.5M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 1.7M | 120.5M | 227.2M | 221.2M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 21464 | 27024 | 20743 | 20683 | 37946 | 453 | 393 | 363 | 385 | 395 | 87.3 | 122 | 20.6 | 97.4 |
| DeltaBlue | 62495 | 41615 | 40094 | 41873 | 46745 | 540 | 459 | 416 | 432 | 425 | 134 | 173 | 18.4 | 110 |
| Crypto | 36351 | 36233 | 28476 | 25478 | 20740 | 544 | 235 | 241 | 286 | 254 | 165 | 95.3 | 34.5 | 125 |
| RayTrace | 88725 | 87615 | 56017 | 46397 | 4180 | 1024 | 517 | 612 | 377 | 434 | 398 | 281 | 70.7 | 163 |
| EarleyBoyer | 61311 | 51626 | 61487 | 39946 | 28018 | 1691 | 964 | 992 | 706 | 738 | 273 | 350 | 83.5 | 0 |
| RegExp | 7350 | 10686 | 7682 | 6423 | 925 | 269 | 80.6 | 80.1 | 70.4 | 70.7 | 116 | 89.5 | 22.9 | 0 |
| Splay | 30527 | 22394 | 10553 | 25344 | 1945 | 2119 | 1255 | 1247 | 756 | 730 | 301 | 433 | 121 | 0 |
| NavierStokes | 31578 | 25596 | 32731 | 31578 | 22933 | 820 | 561 | 506 | 702 | 552 | 449 | 233 | 75.5 | 0 |
| Score | 34217 | 32106 | 26117 | 26022 | 10747 | 757 | 431 | 427 | 384 | 375 | 206 | 191 | 44.8 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.2 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 135.0M | 112.6M | 6.6M | 112.9M | 43.2M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 103.0M | 81.5M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 32.1M | 31.0M | 6.2M | 109.8M | 37.5M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 38109 | 25778 | 32976 | 35959 | 698 | 451 | 424 | 424 | 237 | 48.9 | 0 |
| DeltaBlue | 47678 | 60597 | 63004 | 32531 | 620 | 410 | 377 | 403 | 330 | 41.1 | 0 |
| Crypto | 39657 | 42086 | 41707 | 20928 | 781 | 427 | 418 | 373 | 185 | 74.6 | 0 |
| RayTrace | 96199 | 65119 | 58385 | 3996 | 963 | 739 | 604 | 585 | 460 | 133 | 0 |
| EarleyBoyer | 56351 | 73245 | 61054 | 29022 | 2175 | 1139 | 981 | 993 | 569 | 140 | 0 |
| RegExp | 17439 | 9981 | 8422 | 1020 | 404 | 196 | 192 | 187 | 199 | 43 | 0 |
| Splay | 22866 | 36655 | 31048 | 2563 | 2332 | 1410 | 1042 | 1009 | 1198 | 186 | 0 |
| NavierStokes | 34394 | 38990 | 38694 | 25822 | 1087 | 738 | 707 | 641 | 509 | 167 | 0 |
| Score | 39005 | 38135 | 36463 | 10846 | 960 | 584 | 523 | 508 | 383 | 88.3 | 0 |
