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
| Engine | jsc | bun | v8 | node | deno | spidermonkey | graaljs | hermes | llrt | qjs | tjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 41935 | 42101 | 35076 | 31175 | 33043 | 13747 | 35719 | 1116 | 748 | 704 | 672 | 686 | 225 | 87.8 | 46.1 | 262 |
| DeltaBlue | 50858 | 48438 | 85305 | 65113 | 71626 | 12741 | 27042 | 1048 | 694 | 688 | 681 | 666 | 320 | 156 | 43.6 | 270 |
| Crypto | 45721 | 44692 | 42738 | 41594 | 41465 | 18160 | 14607 | 1362 | 803 | 775 | 624 | 612 | 184 | 288 | 56.4 | 282 |
| RayTrace | 117288 | 115956 | 104486 | 56461 | 54704 | 28285 | 9241 | 1568 | 1208 | 965 | 1126 | 1023 | 497 | 460 | 139 | 351 |
| EarleyBoyer | 67722 | 69317 | 77163 | 66283 | 68066 | 38147 | 23165 | 3400 | 2025 | 1572 | 1805 | 1553 | 533 | 330 | 154 | 0 |
| RegExp | 21773 | 17240 | 9961 | 9001 | 9201 | 8784 | 831 | 557 | 193 | 230 | 255 | 246 | 202 | 70.8 | 44.1 | 0 |
| Splay | 38488 | 36198 | 38309 | 33314 | 22573 | 22027 | 2497 | 3683 | 1936 | 1778 | 2041 | 1755 | 714 | 357 | 171 | 0 |
| NavierStokes | 34691 | 34429 | 38655 | 39099 | 38881 | 22127 | 23002 | 1837 | 1443 | 1374 | 1052 | 1050 | 478 | 769 | 124 | 0 |
| Score | 46672 | 44630 | 44439 | 37247 | 36203 | 18659 | 10467 | 1542 | 928 | 867 | 867 | 819 | 353 | 242 | 83.2 | 0 |
| Executable size | 35M | 93M | 488K | 112M | 137M | 297M | 4.0K | 36M | 8.2M | 4.7M | 5.1M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 53426 | 45059 | 43291 | 30522 | 1368 | 1330 | 1338 | 1086 | 734 | 411 | 107 |
| DeltaBlue | 65582 | 108321 | 89570 | 37952 | 1251 | 1329 | 1217 | 1094 | 756 | 591 | 185 |
| Crypto | 66337 | 58289 | 58165 | 21765 | 1483 | 1212 | 1219 | 1339 | 618 | 308 | 364 |
| RayTrace | 177745 | 86801 | 79697 | 3993 | 2569 | 2116 | 1548 | 1270 | 1175 | 1021 | 601 |
| EarleyBoyer | 101748 | 97496 | 94603 | 31508 | 5283 | 3335 | 2618 | 2380 | 1852 | 1125 | 418 |
| RegExp | 27184 | 13365 | 13560 | 1283 | 720 | 316 | 281 | 290 | 170 | 321 | 194 |
| Splay | 51152 | 36679 | 36858 | 2039 | 4087 | 3594 | 2477 | 2477 | 2171 | 1261 | 409 |
| NavierStokes | 33586 | 40836 | 40473 | 27157 | 1628 | 2213 | 2210 | 2564 | 1155 | 793 | 856 |
| Score | 61181 | 51331 | 49211 | 11070 | 1893 | 1576 | 1370 | 1313 | 867 | 638 | 324 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35616 | 31232 | 32397 | 34935 | 693 | 529 | 506 | 444 | 237 | 36.6 | 443 |
| DeltaBlue | 39281 | 71712 | 62230 | 28259 | 618 | 515 | 466 | 419 | 331 | 34.1 | 403 |
| Crypto | 41259 | 41866 | 40019 | 21095 | 788 | 765 | 503 | 388 | 182 | 49.5 | 389 |
| RayTrace | 96939 | 58607 | 52539 | 2503 | 1009 | 545 | 675 | 731 | 469 | 113 | 587 |
| EarleyBoyer | 57661 | 67463 | 61090 | 26408 | 2242 | 1048 | 1128 | 1180 | 580 | 112 | 0 |
| RegExp | 14561 | 8919 | 7926 | 1094 | 403 | 198 | 184 | 212 | 200 | 39 | 188 |
| Splay | 32026 | 23681 | 28506 | 3194 | 2456 | 1017 | 1133 | 1368 | 1206 | 123 | 1001 |
| NavierStokes | 33538 | 38881 | 38211 | 20989 | 1096 | 1304 | 1105 | 643 | 498 | 109 | 692 |
| Score | 38714 | 36344 | 34968 | 10013 | 977 | 649 | 616 | 573 | 383 | 67.1 | 0 |
| Executable size | 104M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
