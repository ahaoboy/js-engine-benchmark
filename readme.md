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
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | bun | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 97M | 112M | 137M | 4.0K | 36M | 7.6M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 42535 | 39143 | 33159 | 35651 | 1116 | 650 | 705 | 703 | 683 | 213 | 88.9 | 48.2 |
| DeltaBlue | 49668 | 66740 | 71321 | 27856 | 1047 | 602 | 738 | 695 | 665 | 325 | 163 | 46.2 |
| Crypto | 44821 | 41755 | 41830 | 17525 | 1373 | 809 | 640 | 776 | 620 | 178 | 321 | 56.9 |
| RayTrace | 109000 | 56979 | 59273 | 3527 | 1519 | 1129 | 1082 | 940 | 1004 | 494 | 500 | 144 |
| EarleyBoyer | 65421 | 66302 | 66671 | 25729 | 3354 | 1874 | 1824 | 1502 | 1541 | 509 | 343 | 153 |
| RegExp | 17200 | 9092 | 9255 | 1257 | 558 | 194 | 237 | 223 | 244 | 188 | 70.7 | 44.2 |
| Splay | 37108 | 31741 | 23016 | 2282 | 3631 | 1848 | 2031 | 1761 | 1716 | 926 | 416 | 159 |
| NavierStokes | 34577 | 39326 | 39138 | 32287 | 1785 | 1478 | 1009 | 1400 | 1006 | 455 | 774 | 126 |
| Score | 44326 | 38348 | 36655 | 10487 | 1527 | 879 | 867 | 858 | 809 | 354 | 255 | 84 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 920K | 1.0M | 7.7M | 432K | 1.6M |
| Richards | 51241 | 44555 | 40950 | 29781 | 1372 | 1327 | 1108 | 1280 | 817 | 398 | 110 |
| DeltaBlue | 61014 | 110774 | 94641 | 36127 | 1262 | 1376 | 1100 | 1142 | 817 | 605 | 196 |
| Crypto | 65271 | 59423 | 57320 | 23024 | 1441 | 1240 | 1348 | 1078 | 679 | 306 | 367 |
| RayTrace | 163242 | 79623 | 81325 | 3950 | 2577 | 2202 | 1227 | 1198 | 1236 | 978 | 623 |
| EarleyBoyer | 89627 | 96130 | 93984 | 31260 | 5281 | 3338 | 2279 | 2215 | 2009 | 1127 | 410 |
| RegExp | 24663 | 13651 | 13483 | 1272 | 741 | 316 | 289 | 263 | 150 | 333 | 189 |
| Splay | 52138 | 39499 | 44385 | 3692 | 4790 | 3525 | 2472 | 2481 | 1964 | 1193 | 404 |
| NavierStokes | 33653 | 37990 | 40662 | 16027 | 1656 | 2149 | 2566 | 2104 | 1101 | 789 | 981 |
| Score | 58064 | 51030 | 50352 | 11098 | 1939 | 1585 | 1305 | 1244 | 882 | 632 | 333 |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 105M | 77M | 103M | 352K | 3.1M | 1.1M | 8.4M | 5.8M | 660K | 27M | 1.8M |
| Richards | 37914 | 31641 | 32820 | 36050 | 692 | 550 | 517 | 444 | 236 | 36.8 | 424 |
| DeltaBlue | 39618 | 62448 | 69642 | 29274 | 620 | 528 | 474 | 410 | 337 | 34.1 | 398 |
| Crypto | 41148 | 41759 | 41844 | 22110 | 787 | 770 | 521 | 387 | 185 | 49.3 | 396 |
| RayTrace | 98863 | 55129 | 55813 | 4847 | 1012 | 557 | 668 | 748 | 446 | 112 | 499 |
| EarleyBoyer | 58420 | 63844 | 63274 | 29260 | 2240 | 1042 | 1124 | 1152 | 551 | 107 | 0 |
| RegExp | 14895 | 8092 | 8848 | 923 | 391 | 199 | 196 | 217 | 199 | 38.4 | 190 |
| Splay | 33159 | 30598 | 22932 | 3387 | 2353 | 1019 | 1095 | 1440 | 1149 | 120 | 986 |
| NavierStokes | 34543 | 39287 | 39029 | 23596 | 1096 | 1299 | 1098 | 704 | 491 | 111 | 701 |
| Score | 39635 | 36006 | 35761 | 11180 | 968 | 656 | 623 | 583 | 377 | 66.4 | 0 |
