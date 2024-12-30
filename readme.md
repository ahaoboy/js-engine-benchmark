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
| Richards | 41032 | 41406 | 35231 | 30999 | 33092 | 13623 | 35577 | 1121 | 812 | 664 | 712 | 685 | 229 | 89.8 | 60.7 | 260 |
| DeltaBlue | 50362 | 49635 | 89623 | 68478 | 70462 | 13012 | 27644 | 1063 | 754 | 682 | 685 | 663 | 325 | 162 | 55.1 | 269 |
| Crypto | 45606 | 45044 | 42622 | 41674 | 41656 | 17756 | 29191 | 1357 | 697 | 618 | 763 | 606 | 182 | 315 | 80.5 | 280 |
| RayTrace | 116622 | 116548 | 103598 | 55869 | 58681 | 28285 | 4266 | 1574 | 1217 | 1123 | 886 | 1020 | 509 | 504 | 166 | 346 |
| EarleyBoyer | 70073 | 69267 | 76250 | 64793 | 66007 | 38185 | 31965 | 3371 | 2076 | 1808 | 1535 | 1547 | 549 | 343 | 200 | 0 |
| RegExp | 21911 | 20588 | 10062 | 8947 | 9173 | 8594 | 1065 | 558 | 199 | 255 | 225 | 246 | 205 | 70.8 | 49.2 | 0 |
| Splay | 38945 | 36451 | 37738 | 33493 | 22850 | 23192 | 2834 | 3708 | 1917 | 2052 | 1801 | 1797 | 1254 | 407 | 236 | 0 |
| NavierStokes | 34656 | 34280 | 38617 | 39138 | 38842 | 22024 | 22831 | 1771 | 1142 | 991 | 1371 | 1074 | 476 | 759 | 178 | 0 |
| Score | 46739 | 45760 | 44576 | 37311 | 36372 | 18695 | 11321 | 1539 | 910 | 859 | 853 | 821 | 383 | 254 | 108 | 0 |
| Executable size | 35M | 93M | 488K | 115M | 137M | 297M | 4.0K | 36M | 9.1M | 5.1M | 4.7M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 52738 | 45310 | 43386 | 30084 | 1377 | 1352 | 1349 | 1097 | 819 | 410 | 120 |
| DeltaBlue | 60683 | 108929 | 89795 | 35856 | 1260 | 1336 | 1238 | 1125 | 800 | 603 | 226 |
| Crypto | 64239 | 57787 | 56990 | 22741 | 1490 | 1234 | 1248 | 1351 | 581 | 314 | 565 |
| RayTrace | 179077 | 80881 | 79327 | 4243 | 2569 | 2197 | 1588 | 1256 | 1207 | 994 | 753 |
| EarleyBoyer | 100913 | 96359 | 93684 | 29032 | 5282 | 3335 | 2625 | 2342 | 1756 | 1091 | 489 |
| RegExp | 32217 | 13687 | 13157 | 1407 | 739 | 312 | 280 | 288 | 150 | 290 | 346 |
| Splay | 51616 | 40558 | 43981 | 2442 | 4441 | 3520 | 2267 | 2288 | 1882 | 1703 | 556 |
| NavierStokes | 33586 | 40877 | 40621 | 24486 | 1651 | 2217 | 2243 | 2582 | 997 | 788 | 1721 |
| Score | 61606 | 51624 | 49955 | 11237 | 1927 | 1585 | 1369 | 1304 | 831 | 652 | 456 |
| Executable size | 0 | 105M | 116M | 0 | 7.9M | 3.6M | 1.0M | 920K | 0 | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | tjs | qjs(ng) | llrt | mujs | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 35789 | 38469 | 32418 | 34668 | 693 | 564 | 441 | 430 | 427 | 232 | 49.1 |
| DeltaBlue | 37687 | 73794 | 63639 | 28909 | 624 | 528 | 416 | 403 | 377 | 330 | 42 |
| Crypto | 40472 | 40648 | 40612 | 18493 | 789 | 769 | 362 | 368 | 371 | 183 | 74.8 |
| RayTrace | 93145 | 57793 | 52835 | 4263 | 1016 | 543 | 741 | 585 | 598 | 454 | 133 |
| EarleyBoyer | 53836 | 65941 | 59738 | 25623 | 2257 | 1030 | 1144 | 993 | 1008 | 567 | 143 |
| RegExp | 15697 | 8938 | 7757 | 978 | 407 | 197 | 218 | 189 | 194 | 199 | 42.5 |
| Splay | 29532 | 22793 | 26941 | 2081 | 2434 | 1026 | 1384 | 994 | 1019 | 1164 | 155 |
| NavierStokes | 33027 | 39029 | 37987 | 27668 | 1069 | 1300 | 657 | 682 | 637 | 498 | 166 |
| Score | 37826 | 36979 | 34694 | 10166 | 977 | 654 | 570 | 512 | 509 | 378 | 86.7 |
| Executable size | 105M | 103M | 79M | 352K | 3.1M | 1.1M | 5.8M | 1.7M | 10M | 664K | 28M |
