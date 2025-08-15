fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

https://ahaoboy.github.io/js-engine-benchmark/

## Note

### graaljs

Need lib and modules

```
Could not canonicalize /root/.easy-install/graaljs/../wasm.jar
Could not canonicalize /root/.easy-install/graaljs/../../ruby/jline3.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/graaljs-launcher.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/launcher-common.jar
Error while loading /root/.easy-install/graaljs/../../../lib/server/libjvm.so:
/root/.easy-install/graaljs/../../../lib/server/libjvm.so: cannot open shared object file: No such file or directory
Could not load JVM.
```

### ChakraCore

Need libChakraCore.so or libChakraCore.dylib

```
dlopen() failed; dlerror says 'dlopen(/Users/runner/.easy-install/libChakraCore.dylib, 0x0001)

dlopen() failed; dlerror says '/home/runner/.easy-install/libChakraCore.so
```


## Engine & Runtime (34/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48150<br>59566296<br>847/M | ✅unix<br>❌macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47191<br>38166120<br>1296/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47162<br>103226712<br>479/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40748<br>68410352<br>624/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40125<br>111680128<br>376/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39741<br>129129032<br>322/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38771<br>70370664<br>577/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38331<br>42628384<br>942/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20011<br>20349544<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18932<br>41558824<br>477/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17077<br>36932648<br>484/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17050<br>53462112<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11513<br>209395471<br>57/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2622<br>1195172000<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1528<br>37727296<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 858<br>12854384<br>69/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4476160<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 827<br>5411536<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8850304<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 721<br>851208<br>888/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 713<br>1411504<br>529/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2068408<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 543<br>48359544<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 502<br>2229024<br>236/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 391<br>457360<br>896/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 390<br>701432<br>583/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 348<br>424448<br>859/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 296<br>2765<br>112252/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 270<br>13797665<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 256<br>2181712<br>123/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 191<br>72355968<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>28291176<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 102<br>13207888<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 29<br>1119912<br>27/M | ✅unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>465112 | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>10129352 | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7432 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1195172000 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |

## bench
8/15/2025, 2:25:47 PM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | bare | deno | node | dune | lo | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | njs | primjs | rquickjs | quickjs-ng | ladybird | duktape | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 |  | 2.4.4 | 24.6.0 | 0.10.0 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 | 0.9.2 |  |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 56.8M | 36.4M | 98.4M | 65.2M | 106.5M | 123.1M | 67.1M | 40.7M | 19.4M | 39.6M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 1.1M | 454.2K | 9.7M | 7.3K | 1.1G |
| Exe size | 1M | 36.4M | 98.4M | 65.2M | 106.5M | 123.1M | 67.1M | 40.7M | 571K | 39.6M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 8.4M | 831.3K | 1.3M | 2M | 46.1M | 2.1M | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 1.1M | 454.2K | 9.7M | 7.3K | 1.1G |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38169 | 40548 | 41332 | 31620 | 32139 | 32351 | 32556 | 32351 | 23391 | 13651 | 13319 | 13944 | 35729 | 12493 | 1123 | 679 | 680 | 712 | 563 | 566 | 576 | 578 | 500 | 289 | 275 | 245 | 227 | 121 | 202 | 90 | 104 | 59 | 58 | 22 | 279 | 24 |  | 133 |
| DeltaBlue | 105174 | 52630 | 53172 | 78343 | 76373 | 73893 | 73497 | 74270 | 24679 | 12966 | 12939 | 13118 | 39023 | 282 | 1053 | 671 | 661 | 688 | 541 | 597 | 593 | 579 | 462 | 323 | 357 | 356 | 318 | 173 | 252 | 163 | 115 | 54 | 54 | 24 | 284 | 28 |  | 182 |
| Crypto | 41451 | 51937 | 49151 | 41574 | 41714 | 40811 | 41224 | 41332 | 30604 | 20208 | 17671 | 17457 | 28344 | 8527 | 1365 | 584 | 730 | 596 | 880 | 512 | 550 | 381 | 869 | 793 | 187 | 190 | 182 | 163 | 123 | 295 | 96 | 80 | 61 | 25 | 298 | 29 |  | 131 |
| RayTrace | 113218 | 116918 | 117584 | 71483 | 66821 | 66303 | 68005 | 56257 | 36519 | 27278 | 27972 | 26882 | 4941 | 2003 | 1541 | 1123 | 909 | 1013 | 680 | 884 | 887 | 701 | 567 | 577 | 525 | 519 | 485 | 477 | 272 | 485 | 254 | 163 | 134 | 25 | 350 | 86 |  | 430 |
| EarleyBoyer | 89506 | 66854 | 66165 | 69240 | 73734 | 71296 | 72302 | 69279 | 7110 | 38207 | 37044 | 35579 | 18856 | 658 | 3390 | 1855 | 1464 | 1738 | 1680 | 1338 | 1339 | 1217 | 769 | 565 | 542 | 512 | 498 | 573 | 497 | 322 | 284 | 189 | 133 | 46 |  | 77 |  | 508 |
| RegExp | 10525 | 19891 | 20960 | 10253 | 10082 | 10032 | 9951 | 8919 | 7855 | 8472 | 8766 | 8901 | 1394 | 718 | 547 | 249 | 229 | 226 | 115 | 232 | 225 | 183 | 62 | 134 | 237 | 214 | 196 | 405 | 207 | 95 | 245 | 49 | 93 | 10 |  |  |  |  |
| Splay | 42155 | 35660 | 34937 | 37440 | 34243 | 34854 | 27552 | 35400 | 19486 | 23681 | 11927 | 11960 | 2108 | 5448 | 3444 | 2192 | 1753 | 1879 | 2090 | 1724 | 1434 | 1646 | 925 | 1265 | 951 | 1168 | 746 | 918 | 802 | 365 | 530 | 209 | 310 | 78 |  | 56 |  | 707 |
| NavierStokes | 38617 | 40028 | 39771 | 38842 | 38584 | 38584 | 38397 | 38139 | 36618 | 22067 | 21919 | 21963 | 28527 | 14395 | 1869 | 969 | 1286 | 1005 | 1222 | 893 | 926 | 931 | 1503 | 982 | 463 | 485 | 461 | 168 | 201 | 789 | 162 | 176 | 119 | 44 |  | 51 |  | 275 |
| Score | 48150 | 47191 | 47162 | 40748 | 40125 | 39741 | 38771 | 38331 | 20011 | 18932 | 17077 | 17050 | 11513 | 2622 | 1528 | 858 | 830 | 827 | 740 | 721 | 713 | 646 | 543 | 502 | 391 | 390 | 348 | 296 | 270 | 256 | 191 | 105 | 102 | 29 |  |  |  |  |
| Score/MB | 847 | 1296 | 479 | 624 | 376 | 322 | 577 | 942 | 1031 | 477 | 484 | 334 | 57 | 2 | 42 | 69 | 194 | 160 | 87 | 888 | 529 | 327 | 11 | 236 | 896 | 583 | 859 | 112252 | 20 | 123 | 2 | 3 | 8 | 27 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 47 | 34 | 47 | 48 | 49 | 61 | 52 | 53 | 59 | 88 | 68 | 82 | 82 | 88 | 99 | 114 | 135 | 146 | 237 | 237 | 887 | 31 | 428 |  | 89 |
### macos-arm64
| Engine | JavaScriptCore | bare | dune | bun | node | deno | spiderfire | spidermonkey | mozjs | graaljs | jjs | hermes | txiki.js | primjs | quickjs | llrt | rquickjs | njs | quickjs-ng | ladybird | duktape | mujs | xst | ringo | goja | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  |  | 0.10.0 | 1.2.20 | 24.6.0 | 2.4.4 |  | 142.0 |  | 24.1.2 |  | 0.12.0 | 24.12.0 |  | 2025.04.26 | 0.6.2.beta |  | 0.9.2 | 0.8.0 |  | 2.99.99 | 1.3.5 | 16.9.1 | 4.0.0 |  |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 45.5M | 57.4M | 56.8M | 111.5M | 85.6M | 46.3M | 131.2M | 32.8M | 194M | 0 | 15.7M | 3.6M | 1.8M | 975.9K | 10.5M | 1.2M | 2.4M | 4.1M | 41.5M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 0.2K | 45.5M | 57.4M | 56.8M | 111.5M | 85.6M | 46.3M | 65.6M | 32.8M | 147.4K | 0 | 7.9M | 3.6M | 1.8M | 975.9K | 10.5M | 1.2M | 1.8M | 2.1M | 41.5M | 562.1K | 429.1K | 1.6M | 2.7K | 12.7M | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 0 | 0 | 566.7K | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42754 | 36029 | 37639 | 44022 | 39298 | 25919 | 13439 | 12652 | 12585 | 22667 | 2792 | 903 | 971 | 1015 | 1051 | 745 | 887 | 706 | 765 | 770 | 412 | 310 | 104 | 185 | 285 | 136 | 97 | 30 | 175 | 27 |  | 200 |
| DeltaBlue | 64710 | 89226 | 90952 | 49364 | 78304 | 60557 | 12688 | 14401 | 13607 | 3398 | 326 | 784 | 1005 | 1113 | 922 | 774 | 900 | 740 | 606 | 719 | 445 | 471 | 184 | 186 | 328 | 137 | 82 | 39 | 199 | 37 |  | 191 |
| Crypto | 66197 | 49764 | 53196 | 56309 | 44225 | 34677 | 18116 | 21969 | 15553 | 16929 | 9862 | 1119 | 824 | 1402 | 920 | 671 | 752 | 1020 | 633 | 1449 | 1124 | 235 | 462 | 134 | 170 | 139 | 101 | 39 | 200 | 40 |  | 124 |
| RayTrace | 144890 | 93313 | 81917 | 124910 | 58179 | 50047 | 35114 | 38997 | 31228 | 1866 | 2235 | 1724 | 1495 | 1300 | 1146 | 1526 | 1092 | 780 | 876 | 764 | 1039 | 824 | 588 | 694 | 268 | 295 | 190 | 37 | 250 | 120 |  | 510 |
| EarleyBoyer | 83326 | 90888 | 90070 | 51124 | 58104 | 62471 | 44867 | 34831 | 29905 | 17389 | 891 | 3383 | 2078 | 2368 | 1825 | 2096 | 1857 | 2138 | 1876 | 1012 | 780 | 819 | 353 | 701 | 578 | 320 | 186 | 73 |  | 100 |  | 512 |
| RegExp | 20807 | 14092 | 12316 | 17218 | 7403 | 8455 | 11410 | 8956 | 7077 | 1154 | 477 | 516 | 201 | 223 | 239 | 223 | 214 | 172 | 231 | 92 | 186 | 295 | 270 | 575 | 236 | 196 | 113 | 14 |  |  |  |  |
| Splay | 29923 | 51111 | 27055 | 20781 | 19036 | 21783 | 18034 | 17879 | 11555 | 1285 | 1221 | 2763 | 2689 | 446 | 1508 | 2670 | 1820 | 1750 | 2100 | 2060 | 1742 | 932 | 519 | 627 | 778 | 535 | 339 | 144 |  | 83 |  | 964 |
| NavierStokes | 30243 | 33620 | 30775 | 27454 | 26040 | 28675 | 19659 | 17163 | 17259 | 15637 | 3084 | 1170 | 1867 | 3604 | 1634 | 1261 | 1252 | 1534 | 1719 | 1646 | 1345 | 648 | 1206 | 169 | 235 | 207 | 187 | 71 |  | 71 |  | 293 |
| Score | 50400 | 48930 | 43893 | 40798 | 33762 | 31203 | 19354 | 18698 | 15602 | 5610 | 1543 | 1291 | 1123 | 1072 | 1011 | 991 | 937 | 895 | 893 | 814 | 721 | 503 | 364 | 329 | 319 | 219 | 146 | 45 |  |  |  |  |
| Score/MB | 307257153 | 1075 | 764 | 718 | 302 | 364 | 417 | 142 | 475 | 28 |  | 82 | 311 | 609 | 1060 | 94 | 793 | 373 | 216 | 19 | 1313 | 1200 | 225 | 124767 | 25 | 2 | 11 | 42 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 45 | 37 | 46 | 43 | 42 | 45 | 48 | 54 | 45 | 66 | 54 | 62 | 101 | 102 | 98 | 126 | 170 | 607 | 41 | 335 |  | 86 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | txiki.js | quickjs | rquickjs | llrt | quickjs-ng | duktape | mujs-pgo | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino | ringo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.76 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.0 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 24.12.0 | 2025.04.26 |  | 0.6.2.beta | 0.8.0 | 2.7.0 |  | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  | 4.0.0 |
| Total size | 54.1M | 122.1M | 132.7M | 143.1M | 116.3M | 78.7M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 86.6M | 38.1M | 11.8M | 9.3M | 42.2M | 9M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 | 2.7K |
| Exe size | 29.1M | 337.5K | 112.9M | 110.8M | 85.3M | 48.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 5.7M | 4.9M | 1.5M | 13.1M | 1.7M | 777.7K | 744.6K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 | 2.7K |
| Dll size | 25M | 121.7M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 83.5M | 32.4M | 6.9M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 | 0 |
| Richards | 35835 | 36227 | 31292 | 32495 | 31655 | 31765 | 24577 | 13125 | 12497 | 35853 | 8312 | 695 | 452 | 504 | 444 | 392 | 434 | 208 | 230 | 233 | 189 | 105 | 54 | 47 |  | 20 |  |  |  |
| DeltaBlue | 108592 | 46745 | 40458 | 75784 | 76029 | 75355 | 24583 | 12919 | 13019 | 29985 | 357 | 621 | 401 | 461 | 410 | 363 | 396 | 258 | 324 | 332 | 231 | 113 | 49 | 41 |  | 23 |  |  |  |
| Crypto | 41631 | 48160 | 46224 | 38938 | 38641 | 41667 | 33541 | 20370 | 18062 | 19555 | 2531 | 790 | 421 | 534 | 507 | 426 | 371 | 317 | 187 | 180 | 113 | 91 | 59 | 73 |  | 27 |  |  |  |
| RayTrace | 112848 | 102710 | 97161 | 61641 | 64601 | 65489 | 48375 | 28091 | 27574 | 2366 | 1173 | 995 | 741 | 517 | 596 | 608 | 580 | 437 | 434 | 463 | 221 | 263 | 130 | 133 |  | 71 |  |  |  |
| EarleyBoyer | 87675 | 60839 | 56391 | 73926 | 71361 | 72238 | 43356 | 39094 | 36565 | 30204 | 1832 | 2231 | 1139 | 999 | 981 | 998 | 963 | 508 | 510 | 573 | 436 | 292 | 123 | 134 |  | 69 |  |  |  |
| RegExp | 10052 | 17893 | 16563 | 9637 | 9718 | 9546 | 10042 | 9001 | 8947 | 947 | 631 | 403 | 196 | 183 | 175 | 193 | 186 | 109 | 250 | 197 | 194 | 269 | 90 | 42 |  |  |  |  |  |
| Splay | 42775 | 34732 | 31121 | 33110 | 32588 | 26762 | 17605 | 24024 | 13462 | 2628 | 855 | 2331 | 1366 | 1032 | 977 | 1263 | 978 | 968 | 1190 | 1148 | 859 | 388 | 322 | 165 |  | 55 |  |  |  |
| NavierStokes | 38912 | 33734 | 33916 | 38842 | 38951 | 38912 | 36952 | 22216 | 22045 | 20776 | 3286 | 1086 | 743 | 1031 | 746 | 710 | 679 | 1085 | 469 | 482 | 188 | 146 | 116 | 166 |  | 48 |  |  |  |
| Score | 47704 | 42520 | 39226 | 39058 | 38942 | 38362 | 26942 | 19168 | 17258 | 9689 | 1521 | 968 | 580 | 578 | 537 | 532 | 508 | 380 | 379 | 376 | 249 | 183 | 98 | 86 |  |  |  |  |  |
| Score/MB | 880 | 348 | 295 | 272 | 334 | 487 | 1870 | 375 | 237 | 49 | 86 | 11 | 15 | 49 | 57 | 12 | 56 | 49 | 49 | 49 | 12 | 1 | 2 | 2 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 41 | 41 | 60 | 59 | 61 | 61 | 63 | 84 | 81 | 83 | 124 | 149 | 250 | 293 | 129 | 464 |  |  | 100 |
