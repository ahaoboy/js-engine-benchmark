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
| Executable size | 93M | 110M | 137M | 4.0K | 36M | 7.6M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 36675 | 32245 | 33276 | 35673 | 1119 | 654 | 682 | 701 | 654 | 229 | 88.5 | 47.6 |
| DeltaBlue | 48352 | 68710 | 73305 | 32755 | 1082 | 592 | 707 | 666 | 647 | 324 | 162 | 45.5 |
| Crypto | 44594 | 41523 | 41381 | 14474 | 1345 | 807 | 644 | 751 | 617 | 178 | 316 | 56.7 |
| RayTrace | 87097 | 56109 | 57645 | 8189 | 1559 | 1130 | 1122 | 911 | 872 | 474 | 493 | 144 |
| EarleyBoyer | 65712 | 64749 | 66538 | 22706 | 3380 | 1867 | 1801 | 1470 | 1404 | 473 | 342 | 148 |
| RegExp | 17183 | 8901 | 9010 | 748 | 551 | 197 | 251 | 219 | 225 | 184 | 70.2 | 43 |
| Splay | 34927 | 32050 | 22760 | 2396 | 3577 | 1804 | 1913 | 1703 | 1706 | 835 | 391 | 158 |
| NavierStokes | 34178 | 38990 | 38803 | 34543 | 1805 | 1436 | 1057 | 1339 | 1016 | 462 | 765 | 124 |
| Score | 41780 | 37263 | 36398 | 10869 | 1533 | 872 | 867 | 834 | 771 | 347 | 252 | 82.7 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 110M | 0 | 7.9M | 3.5M | 1.0M | 920K | 7.7M | 432K | 1.6M |
| Richards | 46966 | 44675 | 44318 | 29954 | 1377 | 1327 | 1251 | 1020 | 724 | 414 | 104 |
| DeltaBlue | 63030 | 92492 | 85934 | 38871 | 1259 | 1349 | 1217 | 1012 | 734 | 618 | 190 |
| Crypto | 62999 | 59457 | 56807 | 24592 | 1486 | 1237 | 1216 | 1234 | 636 | 314 | 359 |
| RayTrace | 127722 | 81177 | 78143 | 5908 | 2557 | 2224 | 1318 | 1175 | 1142 | 1022 | 614 |
| EarleyBoyer | 102201 | 97450 | 93305 | 31786 | 5264 | 3392 | 2386 | 2255 | 1815 | 1130 | 418 |
| RegExp | 27393 | 13833 | 13170 | 1379 | 742 | 320 | 282 | 276 | 131 | 331 | 187 |
| Splay | 49375 | 40908 | 44087 | 1856 | 4808 | 3700 | 2518 | 2518 | 1962 | 1399 | 414 |
| NavierStokes | 33801 | 40877 | 40688 | 27197 | 1656 | 2180 | 2192 | 2543 | 1288 | 797 | 912 |
| Score | 56991 | 50886 | 49706 | 11794 | 1945 | 1601 | 1317 | 1250 | 832 | 656 | 326 |
### windows
| Engine | node | bun | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 76M | 102M | 103M | 352K | 3.1M | 1.1M | 8.4M | 5.7M | 656K | 27M | 1.8M |
| Richards | 38514 | 31895 | 33209 | 35743 | 705 | 564 | 518 | 439 | 229 | 35.7 | 443 |
| DeltaBlue | 66197 | 38282 | 71057 | 28100 | 618 | 515 | 458 | 403 | 324 | 33.8 | 408 |
| Crypto | 40636 | 42722 | 41043 | 19735 | 781 | 769 | 521 | 374 | 181 | 48.3 | 431 |
| RayTrace | 54019 | 68819 | 57053 | 3404 | 999 | 551 | 668 | 733 | 431 | 111 | 506 |
| EarleyBoyer | 62041 | 55752 | 66025 | 27727 | 2241 | 1006 | 1102 | 1132 | 526 | 98 | 0 |
| RegExp | 8216 | 14594 | 8874 | 923 | 400 | 198 | 194 | 217 | 195 | 38 | 185 |
| Splay | 27169 | 28852 | 22597 | 2401 | 2277 | 986 | 1072 | 1338 | 1141 | 112 | 1010 |
| NavierStokes | 38990 | 34326 | 38881 | 25822 | 1069 | 1285 | 1100 | 654 | 477 | 110 | 736 |
| Score | 36311 | 36113 | 36037 | 10086 | 963 | 648 | 616 | 565 | 366 | 64.5 | 0 |
