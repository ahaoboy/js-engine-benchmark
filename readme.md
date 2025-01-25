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
| Richards | 41204 | 41678 | 32725 | 32217 | 32827 | 13432 | 42722 | 1112 | 820 | 669 | 702 | 676 | 228 | 89.7 | 60 | 259 |
| DeltaBlue | 50098 | 47889 | 84426 | 66144 | 75004 | 12787 | 27426 | 1051 | 738 | 664 | 680 | 648 | 317 | 161 | 55.2 | 266 |
| Crypto | 45165 | 45246 | 42701 | 41445 | 40804 | 17303 | 14628 | 1361 | 705 | 607 | 777 | 613 | 182 | 318 | 80.1 | 282 |
| RayTrace | 115660 | 115808 | 99011 | 56831 | 58163 | 28018 | 9462 | 1545 | 1208 | 1115 | 882 | 1031 | 473 | 503 | 164 | 346 |
| EarleyBoyer | 70006 | 68462 | 79053 | 64649 | 68096 | 38115 | 35096 | 3441 | 2030 | 1723 | 1425 | 1483 | 458 | 342 | 186 | 0 |
| RegExp | 22252 | 21253 | 10072 | 8947 | 9083 | 8749 | 1402 | 558 | 198 | 254 | 223 | 236 | 192 | 70.5 | 49.2 | 0 |
| Splay | 38993 | 36166 | 37432 | 33435 | 22989 | 23339 | 4075 | 3713 | 1737 | 1877 | 1674 | 1672 | 871 | 408 | 233 | 0 |
| NavierStokes | 34656 | 34246 | 38617 | 39138 | 38765 | 22067 | 26362 | 1812 | 1148 | 1024 | 1441 | 1050 | 492 | 761 | 175 | 0 |
| Score | 46720 | 45646 | 43759 | 37365 | 36601 | 18596 | 13080 | 1541 | 895 | 842 | 841 | 801 | 352 | 254 | 106 | 0 |
| Exe size | 34.7M | 93.7M | 488K | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| Dll size | 0 | 0 | 50.0M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 34.7M | 93.7M | 50.5M | 114.5M | 137.0M | 296.3M | 1.1M | 36.0M | 9.1M | 5.1M | 4.6M | 1.3M | 412K | 2.1M | 27.0M | 456K |
| version | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 52399 | 45215 | 44629 | 30589 | 1365 | 1347 | 1349 | 1106 | 768 | 410 | 121 |
| DeltaBlue | 65351 | 111244 | 84472 | 39049 | 1258 | 1280 | 1234 | 1126 | 810 | 605 | 227 |
| Crypto | 67305 | 59133 | 58720 | 24157 | 1490 | 1231 | 1244 | 1330 | 540 | 312 | 569 |
| RayTrace | 175969 | 81473 | 77329 | 1805 | 2552 | 2202 | 1584 | 1267 | 1191 | 1009 | 763 |
| EarleyBoyer | 99449 | 96626 | 92682 | 32375 | 5302 | 3372 | 2648 | 2369 | 1753 | 1077 | 490 |
| RegExp | 32581 | 13869 | 13402 | 1439 | 741 | 314 | 283 | 289 | 173 | 361 | 357 |
| Splay | 51747 | 40746 | 44241 | 1995 | 4784 | 3635 | 2502 | 2521 | 1988 | 1721 | 584 |
| NavierStokes | 33687 | 40729 | 40621 | 27816 | 1643 | 2216 | 2190 | 2581 | 872 | 789 | 1716 |
| Score | 62373 | 52052 | 49863 | 10379 | 1941 | 1586 | 1384 | 1322 | 823 | 671 | 462 |
| Exe size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total size | 108.2M | 210.3M | 231.9M | 304K | 15.7M | 7.1M | 2.0M | 1.8M | 20.2M | 864K | 3.2M |
| version | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 33516 | 31535 | 31825 | 31969 | 705 | 557 | 441 | 430 | 420 | 233 | 49.2 |
| DeltaBlue | 37601 | 66746 | 60267 | 27922 | 624 | 516 | 403 | 396 | 370 | 337 | 41.4 |
| Crypto | 40642 | 41741 | 39780 | 21038 | 787 | 767 | 375 | 362 | 368 | 181 | 74.7 |
| RayTrace | 94645 | 57423 | 50491 | 2724 | 1015 | 555 | 740 | 578 | 596 | 450 | 134 |
| EarleyBoyer | 57322 | 66591 | 56496 | 32118 | 2252 | 1030 | 1133 | 978 | 937 | 564 | 139 |
| RegExp | 17966 | 8685 | 7629 | 1091 | 406 | 197 | 216 | 187 | 190 | 198 | 43.1 |
| Splay | 32450 | 23315 | 28929 | 2583 | 2445 | 994 | 1408 | 1001 | 985 | 1173 | 184 |
| NavierStokes | 33667 | 39060 | 37618 | 24017 | 1090 | 1299 | 668 | 671 | 645 | 494 | 166 |
| Score | 39092 | 35731 | 34050 | 10134 | 981 | 650 | 571 | 507 | 499 | 378 | 88.4 |
| Exe size | 106.4M | 102.9M | 79.4M | 352K | 3.0M | 1.0M | 5.7M | 1.7M | 9.9M | 664K | 27.4M |
| Dll size | 19.8M | 36.8M | 31.1M | 6.2M | 109.8M | 6.9M | 45.4M | 7.3M | 28.3M | 6.9M | 15.0M |
| Total size | 126.2M | 139.7M | 110.4M | 6.6M | 112.9M | 7.9M | 51.1M | 9.0M | 38.2M | 7.5M | 42.4M |
| version | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
