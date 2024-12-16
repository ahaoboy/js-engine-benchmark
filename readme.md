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
| Richards | 41526 | 35104 | 41084 | 32333 | 33138 | 13620 | 35750 | 1131 | 748 | 686 | 695 | 681 | 230 | 89.3 | 60.8 | 266 |
| DeltaBlue | 50785 | 92175 | 49086 | 63698 | 72657 | 13032 | 27763 | 1044 | 704 | 672 | 690 | 667 | 324 | 161 | 55.3 | 271 |
| Crypto | 45872 | 42634 | 44091 | 41210 | 41580 | 17784 | 19988 | 1368 | 829 | 620 | 769 | 612 | 181 | 322 | 80.5 | 283 |
| RayTrace | 116400 | 101230 | 115586 | 54926 | 57941 | 28239 | 7183 | 1565 | 1220 | 1137 | 918 | 1032 | 513 | 502 | 166 | 348 |
| EarleyBoyer | 67062 | 75549 | 67553 | 62182 | 65676 | 36500 | 28323 | 3369 | 2005 | 1785 | 1496 | 1536 | 521 | 343 | 192 | 0 |
| RegExp | 22093 | 10173 | 16877 | 8965 | 9110 | 8745 | 1327 | 551 | 193 | 260 | 221 | 242 | 198 | 71.1 | 48.9 | 0 |
| Splay | 37901 | 38366 | 35383 | 33118 | 22606 | 18393 | 2939 | 3632 | 1852 | 1993 | 1742 | 1724 | 1127 | 402 | 228 | 0 |
| NavierStokes | 34622 | 38732 | 34360 | 39138 | 38842 | 21963 | 31461 | 1817 | 1474 | 1012 | 1427 | 1025 | 470 | 753 | 169 | 0 |
| Score | 46509 | 44703 | 44077 | 36807 | 36349 | 18095 | 12214 | 1536 | 931 | 862 | 852 | 812 | 374 | 254 | 106 | 0 |
| Executable size | 35M | 488K | 93M | 115M | 137M | 297M | 4.0K | 36M | 8.2M | 5.1M | 4.7M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 52529 | 42864 | 42998 | 29435 | 1337 | 1340 | 1325 | 1056 | 806 | 409 | 116 |
| DeltaBlue | 64829 | 91897 | 103653 | 36014 | 1169 | 1296 | 1199 | 1073 | 754 | 606 | 218 |
| Crypto | 64499 | 55370 | 59301 | 21184 | 1433 | 1212 | 1225 | 1293 | 677 | 314 | 562 |
| RayTrace | 177449 | 76663 | 65267 | 2362 | 2297 | 2175 | 1559 | 1208 | 1196 | 1012 | 761 |
| EarleyBoyer | 97587 | 91746 | 83631 | 25836 | 4687 | 3274 | 2646 | 2276 | 1923 | 1104 | 454 |
| RegExp | 26574 | 13325 | 12389 | 1208 | 647 | 312 | 281 | 283 | 162 | 315 | 323 |
| Splay | 43370 | 39148 | 32075 | 1851 | 4824 | 3675 | 2494 | 2489 | 2151 | 943 | 428 |
| NavierStokes | 33027 | 39692 | 37359 | 26092 | 1622 | 2177 | 2151 | 2557 | 1180 | 785 | 1638 |
| Score | 58896 | 48724 | 46382 | 9723 | 1823 | 1573 | 1365 | 1281 | 889 | 614 | 427 |
| Executable size | 0 | 116M | 105M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35648 | 33011 | 32446 | 33884 | 695 | 565 | 501 | 434 | 233 | 49.4 | 434 |
| DeltaBlue | 38044 | 70647 | 63890 | 32355 | 616 | 522 | 463 | 396 | 331 | 42.6 | 397 |
| Crypto | 41288 | 41194 | 41915 | 9724 | 776 | 769 | 510 | 353 | 183 | 75.2 | 386 |
| RayTrace | 96051 | 55573 | 52909 | 2587 | 1017 | 555 | 675 | 746 | 454 | 133 | 587 |
| EarleyBoyer | 56221 | 67470 | 60220 | 28552 | 2252 | 1010 | 1101 | 1143 | 579 | 148 | 0 |
| RegExp | 14015 | 8901 | 7697 | 1036 | 406 | 198 | 195 | 217 | 199 | 43.2 | 188 |
| Splay | 31382 | 23771 | 28929 | 2438 | 2350 | 1002 | 1101 | 1434 | 1187 | 187 | 1019 |
| NavierStokes | 33060 | 39099 | 37915 | 25988 | 1081 | 1294 | 1088 | 681 | 501 | 166 | 701 |
| Score | 38053 | 36247 | 35163 | 9209 | 970 | 652 | 615 | 569 | 380 | 89.7 | 0 |
| Executable size | 104M | 103M | 79M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 664K | 28M | 1.8M |
