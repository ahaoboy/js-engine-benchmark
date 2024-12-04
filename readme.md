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
| Richards | 42557 | 35013 | 41229 | 31556 | 33173 | 13644 | 35433 | 1104 | 743 | 674 | 706 | 686 | 230 | 87.8 | 47.5 | 257 |
| DeltaBlue | 48894 | 82297 | 48240 | 62620 | 67116 | 12708 | 33204 | 1070 | 697 | 660 | 685 | 656 | 317 | 156 | 45.5 | 264 |
| Crypto | 45635 | 42591 | 44414 | 40866 | 41603 | 17700 | 16865 | 1368 | 808 | 613 | 752 | 612 | 183 | 288 | 56.9 | 282 |
| RayTrace | 115364 | 99677 | 113292 | 54759 | 58031 | 28137 | 4958 | 1581 | 1213 | 1115 | 921 | 1024 | 466 | 458 | 143 | 342 |
| EarleyBoyer | 67353 | 77846 | 64814 | 65881 | 65840 | 37699 | 34998 | 3390 | 1998 | 1758 | 1482 | 1453 | 474 | 329 | 145 | 0 |
| RegExp | 20932 | 10072 | 16456 | 8892 | 8975 | 8628 | 792 | 550 | 192 | 262 | 228 | 241 | 194 | 70.9 | 43.8 | 0 |
| Splay | 37355 | 36883 | 32735 | 30510 | 22043 | 22549 | 2870 | 3190 | 1834 | 1897 | 1669 | 1674 | 1096 | 415 | 161 | 0 |
| NavierStokes | 34577 | 38655 | 34326 | 39029 | 38842 | 22002 | 29799 | 1876 | 1448 | 1044 | 1352 | 1054 | 481 | 752 | 124 | 0 |
| Score | 45971 | 43852 | 43139 | 36404 | 35836 | 18536 | 11117 | 1520 | 921 | 852 | 843 | 804 | 363 | 245 | 82.9 | 0 |
| Executable size | 35M | 488K | 93M | 112M | 137M | 297M | 4.0K | 36M | 8.2M | 5.1M | 4.7M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 51562 | 42136 | 40318 | 28708 | 1266 | 1299 | 1307 | 1071 | 688 | 411 | 109 |
| DeltaBlue | 51632 | 98410 | 88433 | 34547 | 1150 | 1336 | 1213 | 1086 | 737 | 609 | 192 |
| Crypto | 65361 | 57149 | 55211 | 22751 | 1379 | 1218 | 1219 | 1259 | 651 | 314 | 379 |
| RayTrace | 174637 | 72593 | 77921 | 9453 | 2387 | 2189 | 1592 | 1183 | 1135 | 1007 | 625 |
| EarleyBoyer | 97592 | 84609 | 79359 | 24443 | 5093 | 3337 | 2658 | 2283 | 1926 | 1064 | 408 |
| RegExp | 26145 | 12741 | 12001 | 901 | 731 | 312 | 282 | 287 | 169 | 292 | 180 |
| Splay | 32402 | 37706 | 47488 | 1407 | 4596 | 3623 | 2396 | 2529 | 2115 | 851 | 407 |
| NavierStokes | 31779 | 38287 | 34474 | 18995 | 1643 | 2236 | 2173 | 2581 | 994 | 724 | 856 |
| Score | 54674 | 47694 | 47026 | 10287 | 1846 | 1581 | 1365 | 1284 | 843 | 592 | 326 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35546 | 33576 | 32407 | 33946 | 686 | 565 | 512 | 431 | 236 | 36.3 | 431 |
| DeltaBlue | 38196 | 62435 | 67625 | 29589 | 613 | 522 | 467 | 410 | 337 | 33.4 | 410 |
| Crypto | 41169 | 40237 | 39883 | 24502 | 781 | 747 | 514 | 392 | 183 | 49 | 372 |
| RayTrace | 93239 | 57571 | 51947 | 3693 | 1001 | 547 | 676 | 736 | 465 | 113 | 583 |
| EarleyBoyer | 55125 | 66891 | 59185 | 26368 | 2254 | 1042 | 1103 | 1171 | 578 | 110 | 0 |
| RegExp | 14398 | 8801 | 7780 | 941 | 406 | 199 | 195 | 214 | 199 | 38.9 | 188 |
| Splay | 31066 | 23152 | 27674 | 2716 | 2434 | 1026 | 1137 | 1394 | 1189 | 119 | 994 |
| NavierStokes | 33801 | 39060 | 37766 | 26092 | 1059 | 1300 | 1095 | 702 | 504 | 108 | 663 |
| Score | 37995 | 35609 | 34869 | 10604 | 969 | 654 | 622 | 578 | 384 | 66.2 | 0 |
| Executable size | 104M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
