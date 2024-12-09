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
| Engine | jsc | v8 | bun | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 40265 | 35267 | 39849 | 38497 | 32884 | 13736 | 41254 | 1112 | 749 | 674 | 712 | 684 | 223 | 89.5 | 60.8 | 268 |
| DeltaBlue | 49899 | 84816 | 50025 | 63209 | 70277 | 12820 | 26388 | 1043 | 704 | 682 | 680 | 657 | 318 | 161 | 55.5 | 274 |
| Crypto | 45938 | 42550 | 44928 | 41168 | 40966 | 17547 | 9468 | 1371 | 803 | 617 | 763 | 614 | 182 | 323 | 80.5 | 284 |
| RayTrace | 112774 | 102044 | 115142 | 55129 | 57275 | 27796 | 11976 | 1558 | 1211 | 1130 | 884 | 1026 | 470 | 499 | 166 | 344 |
| EarleyBoyer | 67932 | 77276 | 66257 | 66202 | 66028 | 37285 | 29489 | 3424 | 2017 | 1798 | 1503 | 1526 | 449 | 342 | 196 | 0 |
| RegExp | 22046 | 10122 | 16877 | 8901 | 9092 | 8620 | 1424 | 556 | 193 | 257 | 227 | 240 | 190 | 70.4 | 49 | 0 |
| Splay | 38716 | 38610 | 35269 | 32792 | 22858 | 22720 | 3082 | 3615 | 1909 | 1960 | 1769 | 1713 | 1285 | 406 | 230 | 0 |
| NavierStokes | 34577 | 38617 | 33916 | 39099 | 38881 | 22002 | 32054 | 1864 | 1483 | 1023 | 1330 | 1041 | 477 | 762 | 174 | 0 |
| Score | 46231 | 44416 | 43899 | 37805 | 36113 | 18513 | 12265 | 1541 | 931 | 859 | 846 | 810 | 365 | 254 | 107 | 0 |
| Executable size | 35M | 488K | 93M | 112M | 137M | 297M | 4.0K | 36M | 8.2M | 5.1M | 4.7M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 52261 | 43429 | 44276 | 30561 | 1374 | 1293 | 1017 | 1349 | 642 | 401 | 121 |
| DeltaBlue | 65278 | 105749 | 93590 | 36033 | 1199 | 1293 | 1024 | 1222 | 743 | 580 | 220 |
| Crypto | 65975 | 60295 | 57322 | 21367 | 1481 | 1199 | 1191 | 1077 | 540 | 302 | 550 |
| RayTrace | 176783 | 77773 | 78587 | 1616 | 2564 | 2173 | 1204 | 1366 | 999 | 938 | 755 |
| EarleyBoyer | 100715 | 92277 | 93360 | 34287 | 5157 | 3181 | 2216 | 1844 | 1581 | 1073 | 492 |
| RegExp | 27548 | 13778 | 13442 | 1107 | 730 | 297 | 284 | 251 | 159 | 317 | 357 |
| Splay | 41080 | 37787 | 41243 | 2657 | 4725 | 3325 | 2507 | 2404 | 1785 | 1324 | 585 |
| NavierStokes | 33505 | 40810 | 40540 | 21793 | 1583 | 2147 | 2512 | 2163 | 897 | 781 | 1690 |
| Score | 59253 | 50489 | 50017 | 9778 | 1909 | 1526 | 1249 | 1247 | 753 | 625 | 457 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 920K | 1.0M | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 36728 | 32704 | 32164 | 33170 | 695 | 558 | 511 | 437 | 237 | 49 | 438 |
| DeltaBlue | 38659 | 73054 | 65979 | 34618 | 624 | 522 | 464 | 410 | 331 | 42.7 | 403 |
| Crypto | 41348 | 41574 | 41793 | 23689 | 778 | 763 | 508 | 370 | 182 | 75.2 | 389 |
| RayTrace | 96569 | 53131 | 53575 | 5610 | 1009 | 543 | 666 | 740 | 459 | 134 | 594 |
| EarleyBoyer | 57347 | 67510 | 60797 | 28587 | 2254 | 1019 | 1122 | 1136 | 580 | 148 | 0 |
| RegExp | 14489 | 8919 | 7926 | 1072 | 406 | 198 | 195 | 216 | 203 | 43.3 | 189 |
| Splay | 31236 | 23706 | 28669 | 2619 | 2479 | 1051 | 1125 | 1418 | 1190 | 184 | 1010 |
| NavierStokes | 33768 | 38803 | 38249 | 23803 | 1069 | 1295 | 1105 | 678 | 501 | 166 | 699 |
| Score | 38639 | 36160 | 35479 | 11431 | 976 | 653 | 620 | 573 | 383 | 89.5 | 0 |
| Executable size | 104M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.7M | 660K | 28M | 1.8M |
