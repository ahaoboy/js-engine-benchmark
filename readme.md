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
| Engine | jsc | bun | v8 | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.2 | 13.3.0 | 2.1.9 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 93.9M | 50.5M | 121.3M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 93.9M | 488K | 121.3M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42528 | 41268 | 34967 | 33788 | 32736 | 13563 | 35394 | 1142 | 773 | 701 | 714 | 637 | 216 | 86.6 | 61.2 | 275 |
| DeltaBlue | 49701 | 49575 | 82991 | 73127 | 72036 | 12906 | 25184 | 1051 | 736 | 680 | 689 | 614 | 304 | 155 | 54.8 | 277 |
| Crypto | 46097 | 44536 | 42610 | 41665 | 41478 | 17935 | 14065 | 1368 | 706 | 774 | 599 | 380 | 183 | 294 | 81 | 298 |
| RayTrace | 110036 | 115068 | 100787 | 62973 | 62751 | 28063 | 9527 | 1590 | 1200 | 925 | 1095 | 716 | 485 | 455 | 165 | 353 |
| EarleyBoyer | 68479 | 66303 | 79348 | 64048 | 60894 | 36782 | 20823 | 3402 | 2011 | 1510 | 1784 | 1234 | 513 | 307 | 196 | 0 |
| RegExp | 20274 | 21023 | 10203 | 9436 | 9010 | 8495 | 767 | 556 | 198 | 245 | 228 | 180 | 199 | 94.4 | 49.2 | 0 |
| Splay | 38056 | 35220 | 37681 | 34813 | 11790 | 22703 | 1737 | 3632 | 1822 | 1747 | 1995 | 1126 | 814 | 389 | 228 | 0 |
| NavierStokes | 34439 | 34429 | 38765 | 38803 | 38469 | 22090 | 33208 | 1838 | 1166 | 1344 | 939 | 966 | 493 | 771 | 176 | 0 |
| Score | 45844 | 45296 | 44264 | 38946 | 33342 | 18514 | 10120 | 1548 | 894 | 859 | 839 | 633 | 352 | 251 | 107 | 0 |
### macos-arm64
| Engine | node | deno | graaljs | hermes | tjs | qjs(ng) | llrt | qjs | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 23.7.0 | 2.1.9 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 2024-02-14 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 243.4M | 222.9M | 296K | 15.7M | 7.2M | 4.1M | 24.1M | 2.3M | 864K | 3.3M | 50.7M | 1.1M |
| Exe size | 243.4M | 222.9M | 296K | 15.7M | 7.2M | 4.1M | 24.1M | 2.3M | 864K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42211 | 32319 | 34794 | 1374 | 1218 | 1330 | 682 | 672 | 394 | 119 | 23.1 | 204 |
| DeltaBlue | 95739 | 66898 | 43208 | 1259 | 1128 | 1229 | 690 | 711 | 593 | 224 | 22.6 | 224 |
| Crypto | 57045 | 32992 | 37260 | 1478 | 1058 | 1196 | 494 | 594 | 305 | 557 | 39.1 | 253 |
| RayTrace | 67567 | 53427 | 2211 | 2572 | 1899 | 1531 | 1070 | 546 | 912 | 749 | 73.5 | 310 |
| EarleyBoyer | 84992 | 59177 | 41141 | 5256 | 2872 | 2649 | 1719 | 1123 | 1060 | 452 | 80.1 | 0 |
| RegExp | 13001 | 10877 | 1701 | 732 | 296 | 281 | 177 | 137 | 349 | 323 | 30.3 | 0 |
| Splay | 44730 | 31146 | 4018 | 4555 | 3537 | 2418 | 2011 | 1124 | 1164 | 595 | 126 | 0 |
| NavierStokes | 38025 | 36322 | 25892 | 1655 | 2056 | 2109 | 917 | 1140 | 765 | 1570 | 83.5 | 0 |
| Score | 48229 | 35926 | 13163 | 1928 | 1425 | 1355 | 782 | 646 | 619 | 444 | 49.9 | 0 |
### macos-amd64
| Engine | deno | node | graaljs | hermes | tjs | qjs(ng) | llrt | qjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.1.9 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 2024-02-14 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 222.9M | 221.2M | 304K | 15.7M | 7.5M | 4.1M | 24.1M | 2.3M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 222.9M | 221.2M | 304K | 15.7M | 7.5M | 4.1M | 24.1M | 2.3M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 34225 | 20655 | 40664 | 486 | 468 | 409 | 354 | 330 | 90.7 | 143 | 24.6 | 98.5 |
| DeltaBlue | 49952 | 48193 | 38183 | 564 | 499 | 437 | 387 | 382 | 139 | 196 | 20.4 | 117 |
| Crypto | 32679 | 32178 | 22934 | 559 | 300 | 275 | 223 | 267 | 179 | 110 | 37.6 | 114 |
| RayTrace | 40699 | 53945 | 5101 | 1093 | 811 | 481 | 464 | 339 | 429 | 340 | 72.5 | 179 |
| EarleyBoyer | 40605 | 49110 | 28464 | 1764 | 1246 | 856 | 846 | 535 | 317 | 414 | 77.5 | 0 |
| RegExp | 6388 | 6721 | 1021 | 289 | 93.7 | 71.2 | 64.2 | 62.4 | 125 | 101 | 21.4 | 0 |
| Splay | 23388 | 10325 | 2034 | 2239 | 1638 | 883 | 1400 | 609 | 316 | 450 | 117 | 0 |
| NavierStokes | 32648 | 33390 | 18199 | 877 | 659 | 646 | 512 | 646 | 484 | 258 | 75.9 | 0 |
| Score | 28622 | 25805 | 10873 | 800 | 539 | 411 | 392 | 332 | 222 | 218 | 46 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | llrt | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 2.1.9 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 1.3.5 | 0.20.0 | 0 |
| Total size | 126.3M | 133.2M | 112.6M | 6.6M | 112.9M | 43.0M | 9.0M | 41.9M | 7.5M | 42.4M | 5.9M |
| Exe size | 106.5M | 102.0M | 81.5M | 352K | 3.0M | 5.7M | 1.7M | 12.7M | 664K | 27.4M | 1.3M |
| Dll size | 19.8M | 31.2M | 31.0M | 6.2M | 109.8M | 37.3M | 7.3M | 29.1M | 6.9M | 15.0M | 4.7M |
| Richards | 37106 | 33784 | 32905 | 36012 | 697 | 441 | 434 | 416 | 236 | 48.5 | 0 |
| DeltaBlue | 39724 | 67447 | 71811 | 30542 | 618 | 410 | 397 | 362 | 330 | 40.9 | 0 |
| Crypto | 39590 | 38823 | 39103 | 21896 | 788 | 421 | 361 | 399 | 182 | 74.5 | 0 |
| RayTrace | 96546 | 62455 | 59939 | 3253 | 1000 | 742 | 574 | 562 | 448 | 132 | 0 |
| EarleyBoyer | 56274 | 60528 | 62608 | 24504 | 2225 | 1153 | 963 | 928 | 554 | 136 | 0 |
| RegExp | 16803 | 9218 | 8373 | 1137 | 400 | 195 | 184 | 184 | 197 | 42.6 | 0 |
| Splay | 32272 | 32661 | 30282 | 2951 | 2288 | 1392 | 994 | 986 | 635 | 183 | 0 |
| NavierStokes | 34691 | 38732 | 38545 | 26066 | 1094 | 737 | 669 | 698 | 497 | 168 | 0 |
| Score | 39531 | 37487 | 36834 | 10669 | 966 | 581 | 505 | 501 | 349 | 87.7 | 0 |
