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
| Version | 0 | 1.2.2 | 13.3.0 | 2.1.10 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0.8.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 93.9M | 50.5M | 122.2M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 93.9M | 488K | 122.2M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 2.1M | 412K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40216 | 42158 | 34843 | 32640 | 32672 | 13252 | 34126 | 1107 | 790 | 698 | 709 | 635 | 224 | 84.3 | 60.4 | 265 |
| DeltaBlue | 49483 | 47532 | 93378 | 72122 | 75467 | 12721 | 26421 | 1042 | 707 | 672 | 666 | 606 | 320 | 154 | 54.5 | 281 |
| Crypto | 45979 | 43487 | 42665 | 41983 | 41522 | 17632 | 12825 | 1360 | 673 | 772 | 583 | 374 | 182 | 292 | 78.5 | 301 |
| RayTrace | 104190 | 114476 | 101896 | 62393 | 61345 | 27574 | 6848 | 1545 | 1164 | 922 | 1080 | 708 | 379 | 458 | 162 | 353 |
| EarleyBoyer | 65995 | 65665 | 78845 | 62434 | 60839 | 37260 | 21263 | 3379 | 1967 | 1444 | 1723 | 1206 | 413 | 304 | 186 | 0 |
| RegExp | 20073 | 20386 | 9981 | 9383 | 8965 | 8504 | 809 | 547 | 196 | 233 | 227 | 179 | 193 | 94.2 | 48.6 | 0 |
| Splay | 36394 | 34137 | 35392 | 33248 | 11289 | 21595 | 2212 | 3346 | 1667 | 1693 | 1844 | 1081 | 1083 | 361 | 208 | 0 |
| NavierStokes | 34429 | 34280 | 38584 | 38617 | 38545 | 22002 | 21370 | 1814 | 1149 | 1363 | 949 | 964 | 480 | 771 | 172 | 0 |
| Score | 44659 | 44589 | 44436 | 38308 | 33241 | 18256 | 9464 | 1511 | 868 | 845 | 820 | 624 | 346 | 247 | 104 | 0 |
### macos-arm64
| Engine | bun | deno | node | graaljs | hermes | qjs | qjs(ng) | llrt | tjs | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 2.1.10 | 23.7.0 | 24.1.2 | 0.12.0 | 2024-02-14 | 0.8.0 | 0.5.1-beta | 24.12.0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 108.5M | 210.7M | 243.4M | 296K | 15.7M | 2.1M | 4.1M | 24.1M | 7.5M | 864K | 3.3M | 50.7M | 1.1M |
| Exe size | 108.5M | 210.7M | 243.4M | 296K | 15.7M | 2.1M | 4.1M | 24.1M | 7.5M | 864K | 3.3M | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 51195 | 52416 | 40456 | 34794 | 1210 | 1082 | 1280 | 832 | 582 | 347 | 99.6 | 25.1 | 201 |
| DeltaBlue | 64234 | 100354 | 99329 | 23260 | 1160 | 1117 | 1129 | 846 | 632 | 555 | 209 | 22.1 | 204 |
| Crypto | 63414 | 59024 | 58774 | 30325 | 1336 | 1318 | 1111 | 597 | 522 | 284 | 492 | 34.9 | 256 |
| RayTrace | 162576 | 69633 | 79179 | 1450 | 2359 | 1212 | 1390 | 1209 | 1015 | 1008 | 702 | 68.5 | 326 |
| EarleyBoyer | 97878 | 78099 | 78197 | 21601 | 4741 | 2274 | 2296 | 1787 | 1651 | 1122 | 432 | 80.1 | 0 |
| RegExp | 31003 | 13624 | 11922 | 1356 | 659 | 281 | 243 | 135 | 168 | 335 | 282 | 31.2 | 0 |
| Splay | 49701 | 46654 | 14537 | 2201 | 3952 | 2524 | 2003 | 1936 | 1950 | 1237 | 389 | 141 | 0 |
| NavierStokes | 32022 | 38951 | 33242 | 18421 | 1369 | 2555 | 1986 | 997 | 955 | 789 | 1532 | 76.4 | 0 |
| Score | 59809 | 50426 | 41276 | 8979 | 1715 | 1296 | 1221 | 835 | 750 | 614 | 389 | 49.5 | 0 |
### macos-amd64
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 23.7.0 | 2.1.10 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 2024-02-14 | 0.8.0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 119.0M | 221.2M | 224.4M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 119.0M | 221.2M | 224.4M | 304K | 15.7M | 7.5M | 24.1M | 2.3M | 4.1M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 27712 | 22000 | 20715 | 42299 | 444 | 428 | 392 | 420 | 465 | 82 | 140 | 23.4 | 111 |
| DeltaBlue | 35175 | 41846 | 47136 | 51215 | 500 | 469 | 431 | 462 | 494 | 137 | 200 | 21.7 | 128 |
| Crypto | 32581 | 30340 | 25963 | 25182 | 554 | 259 | 256 | 313 | 294 | 173 | 110 | 38.8 | 139 |
| RayTrace | 106410 | 53575 | 39071 | 11174 | 975 | 720 | 740 | 391 | 477 | 382 | 329 | 75.1 | 217 |
| EarleyBoyer | 56678 | 48051 | 39918 | 42992 | 1644 | 1066 | 1173 | 806 | 882 | 296 | 357 | 84.6 | 0 |
| RegExp | 17382 | 6896 | 6826 | 1266 | 264 | 89.5 | 90 | 80.9 | 77.6 | 122 | 99.3 | 22.4 | 0 |
| Splay | 32921 | 29761 | 26713 | 2027 | 2100 | 1243 | 1437 | 879 | 838 | 266 | 273 | 136 | 0 |
| NavierStokes | 32846 | 34280 | 33848 | 29206 | 757 | 604 | 505 | 805 | 598 | 439 | 246 | 71.5 | 0 |
| Score | 37114 | 29041 | 26511 | 14509 | 732 | 477 | 472 | 427 | 427 | 205 | 198 | 47.8 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | llrt | qjs(ng) | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.2 | 2.1.10 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 126.3M | 133.9M | 112.6M | 6.6M | 112.9M | 44.1M | 41.9M | 9.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 106.5M | 102.7M | 81.5M | 352K | 3.0M | 5.7M | 12.7M | 1.7M | 664K | 27.4M | 1.3M |
| Dll size | 19.8M | 31.2M | 31.0M | 6.2M | 109.8M | 38.4M | 29.1M | 7.3M | 6.9M | 15.0M | 4.7M |
| Richards | 35418 | 33322 | 34021 | 35993 | 693 | 445 | 427 | 437 | 226 | 49.3 | 0 |
| DeltaBlue | 39492 | 72346 | 72115 | 30853 | 624 | 403 | 369 | 390 | 317 | 41.9 | 0 |
| Crypto | 42714 | 38510 | 41594 | 25231 | 783 | 420 | 417 | 373 | 183 | 75.5 | 0 |
| RayTrace | 96051 | 51452 | 55055 | 3996 | 996 | 740 | 611 | 565 | 419 | 131 | 0 |
| EarleyBoyer | 51870 | 61273 | 60823 | 28941 | 2224 | 1108 | 988 | 963 | 505 | 137 | 0 |
| RegExp | 16745 | 9146 | 8273 | 971 | 397 | 195 | 184 | 187 | 195 | 42.6 | 0 |
| Splay | 31586 | 33778 | 10166 | 3232 | 2375 | 1402 | 1017 | 978 | 1140 | 169 | 0 |
| NavierStokes | 34577 | 38912 | 38694 | 23424 | 1087 | 738 | 714 | 651 | 505 | 167 | 0 |
| Score | 39083 | 37008 | 32046 | 11147 | 968 | 578 | 519 | 503 | 364 | 87.3 | 0 |
