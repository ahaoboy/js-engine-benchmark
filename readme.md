fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

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


## Engine & Runtime

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46381<br>95.6M<br>485/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 45525<br>36.2M<br>1256/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45405<br>53.3M<br>852/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39999<br>100.3M<br>398/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39780<br>121.4M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20013<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18938<br>40M<br>473/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11320<br>199.7M<br>56/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1533<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 886<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 849<br>4.7M<br>180/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 837<br>5.2M<br>162/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 716<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 713<br>857K<br>851/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 648<br>2M<br>328/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 506<br>41.1M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 386<br>685K<br>577/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 355<br>414.5K<br>877/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 254<br>2.1M<br>118/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
5/12/2025, 1:35:27 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | rquickjs | primjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.13 | 0 | 13.6.0 | 2.3.1 | 24.0.1 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.10.0 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 95.6M | 36.2M | 53.3M | 100.3M | 121.4M | 19.4M | 40M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 1.3M | 857K | 2M | 41.1M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7.3K |
| Exe size | 95.6M | 36.2M | 937.8K | 100.3M | 121.4M | 571K | 40M | 1M | 36M | 11.9M | 4.7M | 5.2M | 1.3M | 857K | 2M | 41.1M | 685K | 414.5K | 13.2M | 2.1M | 27M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42129 | 40216 | 35178 | 32803 | 31747 | 23575 | 13178 | 35595 | 1125 | 812 | 698 | 709 | 597 | 540 | 583 | 498 | 243 | 222 | 196 | 87.5 | 60.8 | 0 | 0 |
| DeltaBlue | 52881 | 53225 | 95779 | 67930 | 74026 | 24791 | 12853 | 27809 | 1062 | 714 | 666 | 686 | 590 | 589 | 583 | 436 | 352 | 314 | 251 | 158 | 55.5 | 0 | 0 |
| Crypto | 48999 | 51045 | 42484 | 41285 | 41806 | 32042 | 20416 | 13780 | 1370 | 695 | 747 | 579 | 542 | 514 | 380 | 712 | 189 | 184 | 122 | 312 | 80.6 | 0 | 0 |
| RayTrace | 115734 | 105670 | 106336 | 66821 | 66525 | 35040 | 27500 | 8533 | 1534 | 1195 | 930 | 1098 | 880 | 839 | 739 | 548 | 532 | 471 | 275 | 478 | 166 | 0 | 0 |
| EarleyBoyer | 65269 | 65991 | 78512 | 74074 | 71383 | 7110 | 38317 | 22644 | 3365 | 1986 | 1458 | 1785 | 1344 | 1357 | 1221 | 687 | 537 | 482 | 500 | 313 | 191 | 0 | 0 |
| RegExp | 21044 | 19586 | 10032 | 10173 | 10032 | 7902 | 8555 | 1148 | 552 | 197 | 247 | 226 | 226 | 228 | 179 | 61.3 | 213 | 194 | 209 | 95.1 | 49.1 | 0 | 0 |
| Splay | 35726 | 35825 | 39205 | 36557 | 34528 | 19844 | 24260 | 2920 | 3567 | 1696 | 1724 | 1913 | 1467 | 1731 | 1614 | 859 | 1092 | 905 | 996 | 364 | 231 | 0 | 0 |
| NavierStokes | 34543 | 34508 | 38436 | 38694 | 38803 | 35178 | 21876 | 30540 | 1829 | 1197 | 1345 | 1005 | 923 | 914 | 926 | 1397 | 458 | 491 | 202 | 789 | 177 | 0 | 0 |
| Score | 46381 | 45525 | 45405 | 39999 | 39780 | 20013 | 18938 | 11320 | 1533 | 886 | 849 | 837 | 716 | 713 | 648 | 506 | 386 | 355 | 277 | 254 | 107 | 0 | 0 |
| Score/MB | 485 | 1256 | 852 | 398 | 327 | 1031 | 473 | 56 | 42 | 74 | 180 | 162 | 531 | 851 | 328 | 12 | 577 | 877 | 21 | 118 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | mujs | xst | goja | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.13 | 2.3.1 | 24.0.1 | 13.6.0 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 0 | 1.3.5 | 16.8.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 55M | 81.8M | 110.5M | 861K | 131.1M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.2M | 1.5M | 38.2M | 429.1K | 1.6M | 12.7M | 575.4K | 17.8M | 7.3K |
| Exe size | 913.2K | 55M | 81.8M | 110.5M | 861K | 65.6M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.2M | 1.5M | 38.2M | 429.1K | 1.6M | 12.7M | 575.4K | 554.3K | 7.3K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 65.6M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 51982 | 48950 | 48088 | 45554 | 34723 | 15402 | 37417 | 1349 | 1341 | 1192 | 1301 | 1100 | 1038 | 808 | 743 | 411 | 120 | 332 | 0 | 0 | 0 |
| DeltaBlue | 74046 | 74727 | 98787 | 108222 | 83791 | 17806 | 49496 | 1254 | 1349 | 1238 | 1231 | 1131 | 1022 | 911 | 765 | 609 | 225 | 394 | 0 | 0 | 0 |
| Crypto | 72891 | 70724 | 58629 | 59537 | 36709 | 25113 | 44431 | 1478 | 1230 | 986 | 1224 | 1349 | 859 | 1117 | 1593 | 310 | 561 | 200 | 0 | 0 | 0 |
| RayTrace | 175377 | 186329 | 88059 | 96495 | 85987 | 50786 | 4376 | 2387 | 2178 | 2091 | 1584 | 1276 | 1185 | 1134 | 1045 | 1005 | 753 | 477 | 0 | 0 | 0 |
| EarleyBoyer | 103100 | 94118 | 104291 | 101265 | 72881 | 52386 | 51229 | 5234 | 3310 | 3084 | 2629 | 2390 | 1976 | 1696 | 1277 | 1109 | 448 | 862 | 0 | 0 | 0 |
| RegExp | 33309 | 28792 | 15380 | 15305 | 11819 | 13247 | 1927 | 728 | 317 | 303 | 275 | 285 | 262 | 211 | 104 | 327 | 335 | 295 | 0 | 0 | 0 |
| Splay | 55243 | 49775 | 53254 | 46980 | 43981 | 30461 | 3787 | 4767 | 3473 | 3154 | 2483 | 2554 | 2336 | 1328 | 2226 | 1789 | 562 | 1373 | 0 | 0 | 0 |
| NavierStokes | 33653 | 33027 | 40136 | 40473 | 36434 | 21116 | 34474 | 1593 | 2147 | 1648 | 2126 | 2581 | 1725 | 2632 | 1986 | 787 | 1576 | 323 | 0 | 0 | 0 |
| Score | 64884 | 61871 | 55029 | 54977 | 43438 | 25072 | 16156 | 1904 | 1575 | 1400 | 1362 | 1327 | 1107 | 1020 | 929 | 668 | 444 | 440 | 0 | 0 | 0 |
| Score/MB | 702 | 1124 | 672 | 497 | 51660 | 191 | 83 | 121 | 436 | 136 | 330 | 1243 | 937 | 674 | 24 | 1594 | 270 | 34 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | jsc | bun | node | deno | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | qjs(ng) | llrt | rquickjs | quickjs | primjs | mujs | goja | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 0 | 1.2.13 | 24.0.1 | 2.3.1 | 1.13.0.0.beta | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.8.0 | 0.5.1.beta | 0 | 2024.02.14 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 89.6M | 60.4M | 113.3M | 91.3M | 19.9M | 65.6M | 194.4M | 7.9M | 3.7M | 2.1M | 12.1M | 1.2M | 1.2M | 693.4K | 441.8K | 13.1M | 1.6M | 25.3M | 570.8K | 7.3K |
| Exe size | 861K | 1016.1K | 60.4M | 113.3M | 91.3M | 569.8K | 65.6M | 148.8K | 7.9M | 3.7M | 2.1M | 12.1M | 1.2M | 1.2M | 693.4K | 441.8K | 13.1M | 1.6M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 88.6M | 0 | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22177 | 29347 | 28365 | 21160 | 28295 | 24913 | 9539 | 43651 | 410 | 486 | 467 | 275 | 376 | 312 | 231 | 145 | 143 | 80.4 | 25.7 | 0 | 0 |
| DeltaBlue | 81497 | 35300 | 29971 | 50468 | 39896 | 22435 | 10916 | 47334 | 480 | 556 | 462 | 323 | 389 | 420 | 221 | 196 | 171 | 120 | 22.9 | 0 | 0 |
| Crypto | 41635 | 37756 | 30168 | 31584 | 31138 | 25656 | 15104 | 23719 | 480 | 304 | 278 | 211 | 259 | 278 | 183 | 112 | 79.5 | 160 | 38.5 | 0 | 0 |
| RayTrace | 105670 | 104634 | 104634 | 68079 | 60087 | 36703 | 30636 | 8271 | 943 | 839 | 508 | 677 | 498 | 423 | 280 | 347 | 222 | 384 | 63.9 | 0 | 0 |
| EarleyBoyer | 71800 | 57250 | 59714 | 57289 | 54075 | 6172 | 34154 | 38765 | 1563 | 1285 | 890 | 948 | 837 | 716 | 539 | 418 | 405 | 265 | 70.1 | 0 | 0 |
| RegExp | 8620 | 17495 | 16944 | 7953 | 7977 | 5502 | 7720 | 1339 | 248 | 94 | 82.8 | 84.5 | 82 | 70.8 | 75 | 103 | 190 | 116 | 20.3 | 0 | 0 |
| Splay | 40925 | 36085 | 38170 | 34406 | 35497 | 20039 | 22817 | 2350 | 1993 | 1612 | 891 | 1346 | 852 | 670 | 608 | 562 | 728 | 251 | 115 | 0 | 0 |
| NavierStokes | 36506 | 32912 | 33208 | 32054 | 34508 | 35432 | 24338 | 28703 | 758 | 665 | 655 | 547 | 611 | 728 | 323 | 274 | 126 | 435 | 66.2 | 0 | 0 |
| Score | 40579 | 38541 | 36906 | 32193 | 32059 | 18320 | 17024 | 13932 | 691 | 554 | 436 | 407 | 401 | 374 | 260 | 228 | 204 | 194 | 44.6 | 0 | 0 |
| Score/MB | 48260 | 429 | 611 | 284 | 351 | 919 | 259 | 71 | 87 | 148 | 211 | 33 | 325 | 324 | 383 | 528 | 15 | 118 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | deno | node | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | goja | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.13 | 2.3.1 | 24.0.1 | 139.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 129.9M | 136.7M | 115.6M | 51.1M | 196.1M | 112.8M | 36.9M | 41.8M | 9M | 8M | 7.5M | 19.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 110.1M | 104.6M | 84.6M | 33.7M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 13.3M | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 32M | 31M | 17.4M | 195.8M | 109.8M | 31.2M | 29.1M | 7.3M | 6.7M | 6.9M | 6.2M | 15M | 4.7M | 0 |
| Richards | 35468 | 37021 | 33731 | 30469 | 13263 | 36014 | 692 | 451 | 406 | 434 | 360 | 229 | 187 | 49.4 | 0 | 0 |
| DeltaBlue | 77160 | 41734 | 69900 | 68386 | 12569 | 28166 | 624 | 410 | 369 | 397 | 365 | 337 | 223 | 41.7 | 0 | 0 |
| Crypto | 42989 | 44197 | 42040 | 42059 | 20669 | 22616 | 789 | 426 | 422 | 366 | 318 | 184 | 113 | 75.4 | 0 | 0 |
| RayTrace | 102932 | 100047 | 54483 | 66007 | 27824 | 4884 | 1019 | 737 | 606 | 580 | 551 | 467 | 232 | 134 | 0 | 0 |
| EarleyBoyer | 81337 | 57269 | 71984 | 71574 | 38507 | 28403 | 2254 | 1143 | 997 | 978 | 894 | 575 | 467 | 147 | 0 | 0 |
| RegExp | 9637 | 17693 | 9971 | 9880 | 8956 | 1036 | 405 | 197 | 185 | 187 | 157 | 200 | 198 | 43.5 | 0 | 0 |
| Splay | 39499 | 33754 | 37983 | 34723 | 24203 | 3194 | 2459 | 1474 | 1027 | 1002 | 944 | 1182 | 934 | 169 | 0 | 0 |
| NavierStokes | 38912 | 34030 | 39029 | 38990 | 22127 | 24165 | 1090 | 741 | 694 | 654 | 730 | 510 | 195 | 163 | 0 | 0 |
| Score | 44208 | 40978 | 39348 | 39167 | 19099 | 11238 | 980 | 588 | 516 | 507 | 466 | 383 | 256 | 88.2 | 0 | 0 |
| Score/MB | 841 | 315 | 287 | 338 | 373 | 57 | 8 | 15 | 12 | 56 | 58 | 51 | 13 | 2 | 0 | 0 |
