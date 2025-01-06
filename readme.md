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
| Engine | jsc | bun | v8 | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 40152 | 42154 | 34984 | 31864 | 33180 | 13542 | 35546 | 1123 | 815 | 664 | 709 | 681 | 227 | 88.7 | 60.9 | 264 |
| DeltaBlue | 48174 | 48894 | 94225 | 66402 | 72968 | 12972 | 26209 | 1053 | 744 | 678 | 674 | 660 | 323 | 161 | 55.4 | 271 |
| Crypto | 45974 | 44829 | 42653 | 41479 | 41546 | 17796 | 29420 | 1364 | 692 | 610 | 776 | 624 | 180 | 316 | 81 | 284 |
| RayTrace | 111812 | 114402 | 101008 | 54389 | 58015 | 27944 | 5144 | 1545 | 1194 | 1130 | 913 | 1028 | 511 | 497 | 166 | 351 |
| EarleyBoyer | 67587 | 66254 | 76821 | 65914 | 66096 | 37595 | 27305 | 3405 | 2029 | 1800 | 1514 | 1547 | 525 | 339 | 193 | 0 |
| RegExp | 21681 | 20042 | 10162 | 9119 | 9065 | 8667 | 1241 | 553 | 198 | 254 | 224 | 243 | 196 | 70.5 | 49.3 | 0 |
| Splay | 37509 | 35090 | 37282 | 33004 | 22866 | 22329 | 2637 | 3643 | 1787 | 1968 | 1755 | 1690 | 627 | 396 | 227 | 0 |
| NavierStokes | 34474 | 34360 | 38584 | 39099 | 38842 | 22045 | 27224 | 1882 | 1129 | 1039 | 1419 | 1080 | 472 | 744 | 175 | 0 |
| Score | 45644 | 45036 | 44703 | 37244 | 36434 | 18549 | 11666 | 1543 | 894 | 857 | 855 | 817 | 346 | 251 | 107 | 0 |
| Executable size | 35M | 93M | 488K | 115M | 137M | 297M | 4.0K | 36M | 9.1M | 5.1M | 4.7M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 50041 | 45204 | 44128 | 28436 | 1352 | 1351 | 1132 | 1246 | 823 | 410 | 121 |
| DeltaBlue | 60227 | 104916 | 87772 | 35023 | 1243 | 1337 | 1156 | 1172 | 828 | 596 | 224 |
| Crypto | 63453 | 58477 | 56676 | 21108 | 1408 | 1226 | 1333 | 1144 | 573 | 304 | 571 |
| RayTrace | 157692 | 76219 | 84063 | 1004 | 2544 | 2153 | 1272 | 1524 | 1260 | 993 | 749 |
| EarleyBoyer | 97810 | 95382 | 94631 | 20964 | 5221 | 3162 | 2362 | 2386 | 1872 | 1076 | 484 |
| RegExp | 32035 | 12741 | 11523 | 1341 | 732 | 308 | 281 | 268 | 187 | 329 | 349 |
| Splay | 50857 | 37070 | 44702 | 1999 | 4420 | 3496 | 2249 | 2326 | 1895 | 805 | 557 |
| NavierStokes | 33438 | 40662 | 40432 | 23400 | 1647 | 2195 | 2409 | 2071 | 871 | 788 | 1716 |
| Score | 59669 | 49945 | 49555 | 8519 | 1897 | 1563 | 1296 | 1294 | 855 | 599 | 456 |
| Executable size | 0 | 105M | 116M | 0 | 7.9M | 3.6M | 920K | 1.0M | 0 | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35796 | 33156 | 32383 | 34227 | 698 | 557 | 430 | 438 | 420 | 236 | 48 |
| DeltaBlue | 37548 | 68386 | 62878 | 31196 | 626 | 522 | 410 | 399 | 383 | 330 | 42.1 |
| Crypto | 41592 | 41844 | 39611 | 19829 | 785 | 767 | 373 | 373 | 367 | 182 | 73.7 |
| RayTrace | 94793 | 56609 | 51947 | 3836 | 1003 | 553 | 717 | 587 | 598 | 458 | 133 |
| EarleyBoyer | 53981 | 66410 | 58525 | 27824 | 2237 | 1036 | 1112 | 985 | 997 | 566 | 136 |
| RegExp | 15516 | 8919 | 7855 | 980 | 403 | 195 | 216 | 178 | 191 | 198 | 42.8 |
| Splay | 30535 | 23689 | 28595 | 2343 | 2377 | 1027 | 1343 | 986 | 978 | 1189 | 167 |
| NavierStokes | 33687 | 39060 | 37766 | 25668 | 1082 | 1299 | 678 | 677 | 633 | 500 | 161 |
| Score | 38233 | 36192 | 34654 | 10365 | 972 | 653 | 564 | 509 | 504 | 380 | 86.4 |
| Executable size | 105M | 103M | 79M | 352K | 3.1M | 1.1M | 5.8M | 1.7M | 10M | 664K | 28M |
