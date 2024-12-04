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
- jsc: https://github.com/ahaoboy/jsc-build
- jerryscript: https://github.com/ahaoboy/jerryscript-build
- quickjs-ng: https://github.com/ahaoboy/quickjs-ng-build
- quickjs: https://github.com/ahaoboy/quickjs-build
- mujs: https://github.com/ahaoboy/mujs-build
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/Moddable-OpenSource/moddable
- graaljs: https://github.com/oracle/graaljs


## bench

### ubuntu
| Engine | jsc | v8 | bun | node | deno | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 41494 | 35182 | 41402 | 29223 | 33046 | 12949 | 35507 | 1127 | 739 | 709 | 678 | 688 | 223 | 84 | 47.7 | 270 |
| DeltaBlue | 50521 | 86013 | 49998 | 66495 | 72426 | 12424 | 27406 | 1048 | 699 | 688 | 682 | 661 | 320 | 155 | 45.5 | 266 |
| Crypto | 45890 | 42562 | 44616 | 41603 | 41335 | 17419 | 16791 | 1368 | 807 | 758 | 610 | 626 | 182 | 266 | 56.3 | 280 |
| RayTrace | 116918 | 100565 | 114624 | 54315 | 57588 | 28046 | 6091 | 1567 | 1213 | 939 | 1116 | 1013 | 492 | 445 | 143 | 342 |
| EarleyBoyer | 68784 | 78600 | 67729 | 62221 | 66317 | 37562 | 35011 | 3332 | 2011 | 1532 | 1789 | 1540 | 494 | 311 | 157 | 0 |
| RegExp | 21751 | 10122 | 16911 | 8983 | 9155 | 8728 | 869 | 553 | 193 | 226 | 260 | 242 | 198 | 70.6 | 43.7 | 0 |
| Splay | 36826 | 37111 | 35220 | 32572 | 22622 | 22231 | 3488 | 3510 | 1804 | 1779 | 1974 | 1704 | 828 | 381 | 160 | 0 |
| NavierStokes | 34577 | 38765 | 34394 | 39060 | 38881 | 21898 | 15107 | 1863 | 1482 | 1390 | 1031 | 1053 | 476 | 713 | 122 | 0 |
| Score | 46384 | 44297 | 44246 | 36460 | 36341 | 18294 | 10602 | 1533 | 923 | 859 | 859 | 814 | 354 | 235 | 83.4 | 0 |
| Executable size | 35M | 488K | 93M | 112M | 137M | 297M | 4.0K | 36M | 8.2M | 4.7M | 5.1M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 43739 | 37939 | 38546 | 27578 | 1263 | 1016 | 1021 | 745 | 518 | 273 | 94.5 |
| DeltaBlue | 46818 | 91124 | 75011 | 25323 | 1115 | 1081 | 917 | 785 | 495 | 420 | 161 |
| Crypto | 57153 | 53475 | 46576 | 14842 | 1365 | 910 | 954 | 894 | 417 | 216 | 329 |
| RayTrace | 143119 | 63269 | 62603 | 2334 | 2382 | 1576 | 1168 | 897 | 719 | 748 | 558 |
| EarleyBoyer | 96393 | 75247 | 70107 | 16060 | 4634 | 2258 | 1931 | 1783 | 1077 | 864 | 377 |
| RegExp | 25482 | 13287 | 10830 | 1028 | 655 | 234 | 215 | 218 | 117 | 264 | 172 |
| Splay | 49815 | 37078 | 28326 | 1808 | 3724 | 2023 | 1864 | 1874 | 1171 | 1180 | 357 |
| NavierStokes | 32846 | 35913 | 36101 | 21327 | 1522 | 1470 | 1672 | 2026 | 646 | 721 | 797 |
| Score | 53520 | 44570 | 39994 | 7915 | 1726 | 1120 | 1038 | 955 | 541 | 495 | 291 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35037 | 32291 | 33230 | 36021 | 707 | 561 | 510 | 445 | 236 | 36.4 | 437 |
| DeltaBlue | 37879 | 69437 | 65906 | 34560 | 623 | 522 | 458 | 416 | 331 | 33.9 | 403 |
| Crypto | 40985 | 41788 | 39072 | 20777 | 787 | 762 | 514 | 386 | 182 | 48.6 | 392 |
| RayTrace | 92351 | 52613 | 56461 | 3102 | 1010 | 549 | 678 | 739 | 447 | 113 | 589 |
| EarleyBoyer | 53362 | 61096 | 64382 | 26255 | 2239 | 1032 | 1109 | 1154 | 541 | 102 | 0 |
| RegExp | 13274 | 8110 | 8784 | 942 | 400 | 199 | 194 | 212 | 195 | 37.8 | 186 |
| Splay | 28758 | 27821 | 21848 | 2825 | 2322 | 1002 | 1076 | 1350 | 1172 | 118 | 978 |
| NavierStokes | 34439 | 37397 | 39029 | 24634 | 1083 | 1284 | 1085 | 702 | 496 | 108 | 698 |
| Score | 37015 | 35533 | 35149 | 10412 | 970 | 651 | 615 | 577 | 375 | 65.4 | 0 |
| Executable size | 104M | 77M | 103M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
