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
| Executable size | 97M | 112M | 137M | 4.0K | 36M | 8.2M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 42754 | 31616 | 32404 | 35680 | 1103 | 760 | 726 | 700 | 699 | 223 | 89.5 | 47.9 |
| DeltaBlue | 50395 | 66178 | 75097 | 26963 | 1030 | 711 | 724 | 689 | 668 | 324 | 163 | 45.9 |
| Crypto | 45314 | 41819 | 41845 | 16572 | 1361 | 804 | 630 | 771 | 606 | 181 | 317 | 56.5 |
| RayTrace | 115734 | 56774 | 55647 | 6640 | 1566 | 1180 | 1100 | 924 | 1022 | 484 | 499 | 145 |
| EarleyBoyer | 69151 | 67934 | 66495 | 24041 | 3419 | 2022 | 1826 | 1461 | 1499 | 505 | 344 | 154 |
| RegExp | 17330 | 9137 | 9218 | 878 | 560 | 193 | 237 | 224 | 228 | 192 | 70.6 | 44.4 |
| Splay | 36219 | 33248 | 22614 | 2173 | 3683 | 1773 | 2090 | 1729 | 1646 | 1281 | 356 | 173 |
| NavierStokes | 34587 | 39287 | 39060 | 21179 | 1837 | 1451 | 972 | 1348 | 1083 | 452 | 776 | 122 |
| Score | 45050 | 37639 | 36379 | 10036 | 1538 | 920 | 867 | 846 | 805 | 370 | 250 | 84.5 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
| Richards | 45487 | 41798 | 39619 | 28340 | 1245 | 1063 | 1239 | 894 | 678 | 356 | 99.5 |
| DeltaBlue | 57880 | 85213 | 80856 | 34930 | 1146 | 1266 | 1133 | 1035 | 608 | 547 | 173 |
| Crypto | 54069 | 56020 | 53255 | 20019 | 1352 | 1148 | 1067 | 1251 | 541 | 289 | 322 |
| RayTrace | 152142 | 73925 | 62677 | 10265 | 2318 | 2036 | 1402 | 1173 | 1151 | 833 | 540 |
| EarleyBoyer | 79887 | 83593 | 78638 | 27172 | 4717 | 3110 | 2357 | 2128 | 1802 | 978 | 368 |
| RegExp | 24936 | 12509 | 11910 | 1113 | 624 | 287 | 255 | 264 | 155 | 323 | 175 |
| Splay | 41837 | 30795 | 28603 | 1603 | 4221 | 2866 | 2047 | 2160 | 1797 | 1155 | 309 |
| NavierStokes | 31335 | 38101 | 36915 | 23081 | 1511 | 2004 | 1986 | 2344 | 944 | 707 | 749 |
| Score | 52368 | 45415 | 42465 | 11083 | 1740 | 1415 | 1227 | 1184 | 769 | 576 | 286 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 106M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
| Richards | 37791 | 32365 | 31334 | 35905 | 673 | 566 | 505 | 442 | 222 | 36.3 | 420 |
| DeltaBlue | 40101 | 70859 | 62303 | 31104 | 600 | 522 | 462 | 405 | 317 | 34.1 | 394 |
| Crypto | 42858 | 40690 | 40067 | 21504 | 783 | 768 | 510 | 393 | 182 | 49 | 388 |
| RayTrace | 91981 | 57053 | 54685 | 5476 | 984 | 547 | 674 | 750 | 428 | 111 | 505 |
| EarleyBoyer | 56121 | 65848 | 62520 | 18849 | 2173 | 1021 | 1100 | 1113 | 537 | 103 | 0 |
| RegExp | 14245 | 8828 | 8166 | 961 | 401 | 193 | 194 | 217 | 196 | 38.2 | 188 |
| Splay | 31211 | 22255 | 28457 | 2540 | 2188 | 994 | 1068 | 1311 | 1130 | 116 | 972 |
| NavierStokes | 34394 | 38951 | 39287 | 25376 | 1082 | 1299 | 1106 | 696 | 484 | 111 | 697 |
| Score | 38791 | 35774 | 35355 | 10551 | 946 | 649 | 614 | 573 | 365 | 65.5 | 0 |
