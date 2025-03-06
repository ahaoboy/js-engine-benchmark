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
- [x] [primjs](https://github.com/lynx-family/primjs): JavaScript Engine Optimized for Lynx
- [x] [rquickjs](https://github.com/DelSkayn/rquickjs): High level bindings to the quickjs javascript engine
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
- mujs-one: https://github.com/ahaoboy/mujs-one
- txiki.js: https://github.com/ahaoboy/txiki.js-build
- boa: https://github.com/boa-dev/boa
- llrt: https://github.com/awslabs/llrt
- hermes: https://github.com/facebook/hermes
- graaljs: https://github.com/oracle/graaljs
- XS: https://github.com/Moddable-OpenSource/moddable
- primjs: https://github.com/ahaoboy/primjs-build
- rquickjs-cli: https://github.com/ahaoboy/rquickjs-cli

## Note

### graaljs size

lib and modules need to be included in the dll size

```
Could not canonicalize /root/.easy-install/graaljs/../wasm.jar
Could not canonicalize /root/.easy-install/graaljs/../../ruby/jline3.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/graaljs-launcher.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/launcher-common.jar
Error while loading /root/.easy-install/graaljs/../../../lib/server/libjvm.so:
/root/.easy-install/graaljs/../../../lib/server/libjvm.so: cannot open shared object file: No such file or directory
Could not load JVM.
```



## bench

3/6/2025, 6:31:00 AM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | spidermonkey | graaljs | hermes | llrt | qjs | tjs | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | xst | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.4 | 13.5.0 | 2.2.3 | 23.7.0 | 134.0 | 24.1.2 | 0.12.0 | 0.5.1-beta | 2024-02-14 | 24.12.0 | 0 | 0 | 0.8.0 | 0 | 1.3.5 | 16.8.1 | 0.20.0 | 3.0.0 |
| Total size | 35.1M | 95.1M | 53.4M | 121.9M | 117.9M | 296.3M | 199.7M | 36.0M | 11.9M | 4.7M | 5.2M | 860K | 1.3M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Exe size | 35.1M | 95.1M | 940K | 121.9M | 117.9M | 296.3M | 1.1M | 36.0M | 11.9M | 4.7M | 5.2M | 860K | 1.3M | 2.1M | 688K | 416K | 2.2M | 27.0M | 456K |
| Dll size | 0 | 0 | 52.5M | 0 | 0 | 0 | 198.7M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42754 | 41423 | 35274 | 33262 | 33152 | 13641 | 35401 | 1121 | 800 | 701 | 705 | 612 | 590 | 520 | 248 | 222 | 88.9 | 60.9 | 269 |
| DeltaBlue | 49754 | 57232 | 83011 | 68498 | 71626 | 12953 | 27122 | 1054 | 726 | 651 | 649 | 618 | 589 | 561 | 353 | 321 | 160 | 55.5 | 274 |
| Crypto | 46042 | 44359 | 42385 | 41364 | 40849 | 17744 | 17741 | 1329 | 680 | 755 | 592 | 578 | 544 | 382 | 187 | 183 | 314 | 80.7 | 298 |
| RayTrace | 111664 | 111146 | 103524 | 66303 | 58163 | 28165 | 7588 | 1536 | 1188 | 928 | 1094 | 949 | 881 | 717 | 552 | 485 | 488 | 167 | 349 |
| EarleyBoyer | 70278 | 67977 | 80921 | 72158 | 62525 | 36863 | 29191 | 3382 | 2004 | 1506 | 1742 | 1398 | 1384 | 1235 | 563 | 508 | 317 | 199 | 0 |
| RegExp | 20820 | 21162 | 10233 | 10142 | 8947 | 8611 | 896 | 553 | 198 | 247 | 226 | 233 | 227 | 175 | 225 | 202 | 92.5 | 48.7 | 0 |
| Splay | 38048 | 31040 | 38741 | 37135 | 12028 | 23331 | 1999 | 3681 | 1854 | 1807 | 1972 | 1778 | 1499 | 1130 | 1236 | 1299 | 394 | 237 | 0 |
| NavierStokes | 34280 | 34292 | 38694 | 38694 | 38655 | 21898 | 26632 | 1813 | 1182 | 1372 | 992 | 1020 | 936 | 920 | 482 | 480 | 797 | 178 | 0 |
| Score | 46232 | 45352 | 44703 | 40013 | 33176 | 18599 | 10762 | 1531 | 894 | 858 | 831 | 770 | 721 | 605 | 402 | 377 | 259 | 108 | 0 |
| Score/MB | 1316 | 476 | 837 | 328 | 281 | 62 | 53 | 42 | 75 | 181 | 160 | 916 | 535 | 287 | 598 | 928 | 120 | 4 | 0 |
### macos-arm64
| Engine | bun | deno | node | v8 | graaljs | hermes | tjs | llrt | qjs(ng) | qjs | rquickjs | primjs | mujs | xst | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 13.5.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 2024-02-14 | 0 | 0 | 1.3.5 | 16.8.1 | 3.0.0 |
| Total size | 109.8M | 211.2M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 2.4M | 3.0M | 864K | 3.3M | 1.1M |
| Exe size | 109.8M | 211.2M | 243.4M | 1.7M | 296K | 15.7M | 7.2M | 20.5M | 4.1M | 2.1M | 2.4M | 3.0M | 864K | 3.3M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 49472 | 45010 | 40410 | 27885 | 34536 | 1280 | 1248 | 1110 | 1258 | 1023 | 1037 | 757 | 382 | 110 | 203 |
| DeltaBlue | 67037 | 93253 | 96612 | 96215 | 40782 | 1173 | 1236 | 1154 | 1157 | 1033 | 1051 | 914 | 559 | 211 | 225 |
| Crypto | 62693 | 56985 | 57010 | 35255 | 41086 | 1383 | 1147 | 931 | 1147 | 1244 | 939 | 1044 | 290 | 522 | 252 |
| RayTrace | 172639 | 82139 | 61715 | 84063 | 1766 | 2389 | 2026 | 1935 | 1475 | 1172 | 1384 | 1238 | 863 | 702 | 308 |
| EarleyBoyer | 90178 | 94778 | 81304 | 71985 | 48678 | 4921 | 2998 | 2815 | 2406 | 2161 | 2134 | 1986 | 1004 | 421 | 0 |
| RegExp | 27484 | 14141 | 12316 | 10284 | 1633 | 682 | 294 | 290 | 260 | 269 | 262 | 217 | 330 | 312 | 0 |
| Splay | 44119 | 47574 | 37119 | 34316 | 4140 | 4132 | 2952 | 2735 | 2160 | 2202 | 2017 | 1206 | 1244 | 504 | 0 |
| NavierStokes | 31398 | 37694 | 31483 | 33620 | 24338 | 1513 | 2015 | 1545 | 2047 | 2421 | 1617 | 2502 | 733 | 1467 | 0 |
| Score | 57722 | 51199 | 44747 | 40178 | 13006 | 1787 | 1443 | 1296 | 1271 | 1216 | 1126 | 1019 | 597 | 412 | 0 |
| Score/MB | 525 | 242 | 183 | 23809 | 44993 | 113 | 199 | 63 | 308 | 568 | 475 | 336 | 707 | 125 | 0 |
### macos-amd64
| Engine | bun | v8 | deno | node | graaljs | hermes | tjs | qjs(ng) | llrt | qjs | rquickjs | primjs | xst | mujs | boa | jerry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 13.5.0 | 2.2.3 | 23.7.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1-beta | 2024-02-14 | 0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 |
| Total size | 120.5M | 1.7M | 225.5M | 221.2M | 304K | 15.7M | 7.5M | 4.1M | 24.1M | 2.3M | 2.5M | 1.4M | 3.3M | 888K | 50.7M | 1.1M |
| Exe size | 120.5M | 1.7M | 225.5M | 221.2M | 304K | 15.7M | 7.5M | 4.1M | 24.1M | 2.3M | 2.5M | 1.4M | 3.3M | 888K | 50.7M | 1.1M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 29890 | 21795 | 22904 | 23035 | 43305 | 510 | 477 | 458 | 369 | 406 | 362 | 224 | 93.6 | 143 | 24.8 | 102 |
| DeltaBlue | 44233 | 66118 | 47704 | 49469 | 49992 | 554 | 542 | 479 | 377 | 441 | 403 | 252 | 145 | 199 | 22.6 | 116 |
| Crypto | 37766 | 30023 | 34466 | 34780 | 23685 | 570 | 303 | 279 | 180 | 291 | 246 | 177 | 186 | 110 | 37.6 | 131 |
| RayTrace | 107298 | 99825 | 70151 | 58105 | 9990 | 1103 | 839 | 454 | 632 | 385 | 423 | 298 | 442 | 340 | 69.8 | 186 |
| EarleyBoyer | 59234 | 62930 | 65406 | 52755 | 41539 | 1855 | 1265 | 783 | 1055 | 728 | 731 | 516 | 321 | 412 | 77.6 | 0 |
| RegExp | 17439 | 7607 | 9010 | 7569 | 1394 | 296 | 94.4 | 81.6 | 83.2 | 73 | 81.7 | 71.3 | 130 | 104 | 23.4 | 0 |
| Splay | 14823 | 37388 | 39295 | 34911 | 3405 | 2469 | 1584 | 895 | 1294 | 799 | 868 | 584 | 279 | 455 | 129 | 0 |
| NavierStokes | 32945 | 34804 | 36582 | 36915 | 29295 | 905 | 652 | 651 | 524 | 716 | 586 | 326 | 522 | 271 | 78 | 0 |
| Score | 35807 | 35787 | 34973 | 32301 | 15272 | 827 | 548 | 423 | 419 | 396 | 383 | 260 | 226 | 221 | 47.7 | 0 |
| Score/MB | 297 | 21207 | 155 | 146 | 51442 | 52 | 73 | 102 | 17 | 171 | 155 | 191 | 68 | 254 | 0 | 0 |
### windows
| Engine | bun | deno | node | hermes | tjs | llrt | qjs(ng) | rquickjs | mujs | boa | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.4 | 2.2.3 | 23.7.0 | 0.12.0 | 24.12.0 | 0.5.1-beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 |
| Total size | 127.3M | 134.5M | 112.6M | 139.1M | 43.2M | 41.9M | 9.0M | 8.0M | 7.5M | 42.4M | 5.9M |
| Exe size | 107.5M | 102.4M | 81.5M | 3.0M | 5.7M | 12.7M | 1.7M | 1.3M | 668K | 27.4M | 1.3M |
| Dll size | 19.8M | 32.1M | 31.0M | 136.1M | 37.5M | 29.1M | 7.3M | 6.7M | 6.9M | 15.0M | 4.7M |
| Richards | 37311 | 33120 | 33050 | 699 | 452 | 430 | 434 | 384 | 219 | 49 | 0 |
| DeltaBlue | 47499 | 63202 | 77437 | 620 | 403 | 377 | 397 | 417 | 312 | 41.9 | 0 |
| Crypto | 41818 | 37013 | 38086 | 787 | 422 | 406 | 378 | 321 | 184 | 71.8 | 0 |
| RayTrace | 93609 | 62614 | 59939 | 1012 | 739 | 600 | 585 | 549 | 451 | 132 | 0 |
| EarleyBoyer | 54920 | 71868 | 60255 | 2243 | 1133 | 982 | 972 | 879 | 543 | 138 | 0 |
| RegExp | 16745 | 9851 | 8430 | 407 | 195 | 179 | 187 | 154 | 198 | 42.4 | 0 |
| Splay | 29500 | 36182 | 9721 | 2363 | 1418 | 1035 | 977 | 904 | 1179 | 164 | 0 |
| NavierStokes | 34360 | 38765 | 38617 | 1089 | 740 | 710 | 678 | 727 | 510 | 166 | 0 |
| Score | 39933 | 38490 | 32052 | 974 | 582 | 517 | 510 | 473 | 372 | 86.5 | 0 |
| Score/MB | 313 | 286 | 284 | 7 | 13 | 12 | 56 | 58 | 49 | 2 | 0 |
