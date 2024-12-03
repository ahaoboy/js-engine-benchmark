fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

qjs-ng  ./dist/bench.js
qjs     ./dist/bench.js
llrt    ./dist/bench.js
mujs    ./dist/bench.js
boa     ./dist/bench.js
node    ./dist/bench.js
deno    ./dist/bench.js
jer     ./dist/bench.js
hermes  ./dist/bench.js
xst     ./dist/bench.js
tjs run ./dist/bench.js

or

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

## bench

### ubuntu
| Engine | jsc | v8 | bun | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 42232 | 34758 | 42020 | 32262 | 33216 | 13397 | 35344 | 1107 | 738 | 712 | 709 | 682 | 230 | 87.7 | 47.6 | 263 |
| DeltaBlue | 47572 | 88942 | 50534 | 65404 | 68194 | 13025 | 27512 | 1077 | 696 | 698 | 684 | 650 | 328 | 156 | 45.1 | 270 |
| Crypto | 45283 | 42057 | 44979 | 41466 | 41645 | 17084 | 16221 | 1370 | 826 | 609 | 776 | 601 | 184 | 289 | 56.6 | 280 |
| RayTrace | 114106 | 101526 | 114994 | 53945 | 58163 | 27990 | 9093 | 1553 | 1232 | 1124 | 909 | 1018 | 514 | 470 | 144 | 344 |
| EarleyBoyer | 67835 | 77156 | 66854 | 62543 | 65876 | 37683 | 23173 | 3398 | 1999 | 1828 | 1508 | 1537 | 527 | 332 | 154 | 0 |
| RegExp | 21317 | 10102 | 16712 | 8837 | 9146 | 8685 | 1396 | 557 | 192 | 245 | 225 | 246 | 197 | 70.6 | 43.1 | 0 |
| Splay | 37869 | 37600 | 34414 | 32010 | 23021 | 22011 | 2610 | 3639 | 1769 | 1966 | 1719 | 1742 | 624 | 373 | 157 | 0 |
| NavierStokes | 34474 | 38397 | 34360 | 39099 | 38803 | 22045 | 34429 | 1838 | 1431 | 1064 | 1310 | 1079 | 479 | 775 | 124 | 0 |
| Score | 45869 | 44308 | 44178 | 36663 | 36206 | 18420 | 11954 | 1543 | 919 | 867 | 846 | 814 | 349 | 244 | 83 | 0 |
| Executable size | 35M | 488K | 93M | 112M | 137M | 297M | 4.0K | 36M | 8.2M | 5.2M | 4.7M | 1.3M | 412K | 2.1M | 27M | 456K |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 41215 | 38334 | 37360 | 25322 | 1252 | 1133 | 1002 | 801 | 578 | 379 | 98.1 |
| DeltaBlue | 60829 | 78403 | 87058 | 29158 | 1170 | 1070 | 918 | 898 | 539 | 539 | 169 |
| Crypto | 59565 | 51163 | 54959 | 17742 | 1349 | 1065 | 797 | 1050 | 442 | 285 | 333 |
| RayTrace | 155620 | 75775 | 60753 | 4156 | 2212 | 1788 | 1181 | 944 | 870 | 873 | 494 |
| EarleyBoyer | 84979 | 77992 | 84812 | 20673 | 4848 | 2602 | 1856 | 1622 | 1359 | 960 | 365 |
| RegExp | 21317 | 11637 | 9383 | 976 | 684 | 281 | 218 | 220 | 125 | 258 | 173 |
| Splay | 26167 | 40243 | 27829 | 2336 | 4152 | 2950 | 1711 | 1703 | 1397 | 1400 | 357 |
| NavierStokes | 30566 | 36582 | 36285 | 18292 | 1503 | 2021 | 1831 | 2089 | 809 | 730 | 836 |
| Score | 49080 | 44569 | 41458 | 9098 | 1756 | 1335 | 1012 | 988 | 624 | 580 | 291 |
| Executable size | 0 | 114M | 105M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 33773 | 33082 | 32365 | 34243 | 699 | 564 | 508 | 441 | 233 | 36.5 | 431 |
| DeltaBlue | 37859 | 76307 | 66019 | 31223 | 624 | 529 | 470 | 412 | 337 | 34.3 | 397 |
| Crypto | 41171 | 40201 | 41016 | 20395 | 791 | 770 | 508 | 388 | 183 | 49.7 | 388 |
| RayTrace | 96865 | 56922 | 52930 | 3317 | 1016 | 553 | 681 | 746 | 459 | 114 | 592 |
| EarleyBoyer | 55415 | 66368 | 59610 | 24676 | 2255 | 1035 | 1116 | 1159 | 574 | 108 | 0 |
| RegExp | 14441 | 8784 | 7788 | 983 | 405 | 198 | 189 | 212 | 199 | 38.6 | 188 |
| Splay | 30535 | 23266 | 30209 | 2037 | 2426 | 1026 | 1123 | 1368 | 1172 | 113 | 1009 |
| NavierStokes | 33801 | 39029 | 38025 | 25228 | 1094 | 1299 | 1093 | 702 | 500 | 110 | 702 |
| Score | 37849 | 36364 | 35413 | 9872 | 980 | 657 | 618 | 578 | 381 | 66.2 | 0 |
| Executable size | 104M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
