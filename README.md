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
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46624<br>37.4M<br>1244/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46436<br>96.4M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45065<br>53.3M<br>846/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41347<br>101.1M<br>408/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39781<br>121.4M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19885<br>19.4M<br>1024/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18840<br>39.7M<br>474/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17043<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9645<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1529<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 889<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 833<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 831<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 717<br>857K<br>856/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 717<br>1.3M<br>532/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 560<br>45.7M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 399<br>685K<br>596/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 371<br>414.5K<br>916/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 272<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 267<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
6/16/2025, 1:40:22 AM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | boa | kiesel | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 13.6.0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.9.1 | 0.20.0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 37.4M | 96.4M | 53.3M | 101.1M | 121.4M | 19.4M | 39.7M | 35.2M | 199.7M | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.1M | 27M | 12.6M | 454.2K | 7.3K |
| Exe size | 37.4M | 96.4M | 937.8K | 101.1M | 121.4M | 571K | 39.7M | 35.2M | 1M | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.7M | 685K | 414.5K | 13.2M | 2.1M | 27M | 12.6M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40975 | 41233 | 34988 | 38864 | 31627 | 23497 | 12543 | 13355 | 35987 | 1129 | 807 | 687 | 710 | 536 | 594 | 575 | 502 | 245 | 227 | 199 | 90.2 | 60.5 | 58.8 | 0 | 0 |
| DeltaBlue | 53119 | 52848 | 95157 | 74581 | 74720 | 24492 | 13078 | 12754 | 38262 | 1053 | 735 | 661 | 693 | 596 | 593 | 578 | 452 | 358 | 319 | 249 | 164 | 55.2 | 55.4 | 0 | 0 |
| Crypto | 51993 | 50012 | 42513 | 41656 | 41655 | 31384 | 20029 | 17774 | 13592 | 1366 | 690 | 749 | 594 | 520 | 544 | 380 | 857 | 191 | 184 | 119 | 335 | 80.7 | 62.5 | 0 | 0 |
| RayTrace | 118028 | 115956 | 105226 | 68005 | 65415 | 34631 | 27676 | 28018 | 3685 | 1554 | 1207 | 915 | 1068 | 848 | 882 | 723 | 568 | 541 | 485 | 276 | 501 | 164 | 136 | 0 | 0 |
| EarleyBoyer | 66142 | 66869 | 77158 | 72579 | 72242 | 6952 | 38410 | 37223 | 24569 | 3368 | 1980 | 1459 | 1760 | 1340 | 1358 | 1211 | 752 | 527 | 493 | 505 | 325 | 189 | 137 | 0 | 0 |
| RegExp | 20386 | 21023 | 10052 | 10072 | 10082 | 7772 | 8784 | 8766 | 849 | 551 | 197 | 230 | 227 | 232 | 223 | 181 | 62.4 | 215 | 195 | 207 | 97.3 | 49.2 | 94.6 | 0 | 0 |
| Splay | 35546 | 35229 | 38284 | 36777 | 34634 | 19615 | 23950 | 11837 | 2056 | 3591 | 1732 | 1749 | 1948 | 1719 | 1445 | 1643 | 1301 | 1278 | 1184 | 884 | 370 | 219 | 322 | 0 | 0 |
| NavierStokes | 34883 | 34543 | 38469 | 38694 | 38617 | 36878 | 21602 | 21728 | 25326 | 1775 | 1162 | 1273 | 940 | 921 | 941 | 930 | 1431 | 488 | 491 | 199 | 879 | 174 | 119 | 0 | 0 |
| Score | 46624 | 46436 | 45065 | 41347 | 39781 | 19885 | 18840 | 17043 | 9645 | 1529 | 889 | 833 | 831 | 717 | 717 | 647 | 560 | 399 | 371 | 272 | 267 | 106 | 104 | 0 | 0 |
| Score/MB | 1244 | 481 | 846 | 408 | 327 | 1024 | 474 | 483 | 48 | 42 | 74 | 195 | 161 | 856 | 532 | 327 | 12 | 596 | 916 | 20 | 128 | 3 | 8 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | node | deno | v8 | mozjs | spidermonkey | graaljs | hermes | llrt | txiki.js | qjs(ng) | quickjs | ladybird | rquickjs | primjs | mujs | goja | xst | kiesel | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 24.2.0 | 2.3.6 | 13.6.0 | 0 | 140.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 24.12.0 | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 94.2M | 55.8M | 110.6M | 82.4M | 861K | 32.8M | 130.4M | 194M | 15.7M | 10.3M | 3.6M | 4.1M | 975.9K | 41.2M | 1.2M | 1.5M | 429.1K | 12.7M | 1.6M | 12.4M | 575.4K | 17.8M | 7.3K |
| Exe size | 914.7K | 55.8M | 110.6M | 82.4M | 861K | 32.8M | 65.2M | 147.4K | 7.9M | 10.3M | 3.6M | 2.1M | 975.9K | 41.2M | 1.2M | 1.5M | 429.1K | 12.7M | 1.6M | 12.4M | 575.4K | 554.3K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.2M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 48819 | 40544 | 39792 | 34123 | 25188 | 15660 | 13863 | 33286 | 1037 | 924 | 971 | 839 | 697 | 618 | 759 | 590 | 287 | 278 | 83.8 | 92.3 | 0 | 0 | 0 |
| DeltaBlue | 66118 | 57833 | 88882 | 69153 | 78237 | 17244 | 15782 | 28946 | 856 | 891 | 938 | 861 | 693 | 680 | 698 | 599 | 423 | 345 | 156 | 88.7 | 0 | 0 | 0 |
| Crypto | 69180 | 59738 | 51183 | 38101 | 32820 | 22430 | 20800 | 30644 | 990 | 841 | 787 | 785 | 780 | 1565 | 675 | 773 | 205 | 167 | 382 | 107 | 0 | 0 | 0 |
| RayTrace | 173157 | 167090 | 62973 | 63787 | 87319 | 50639 | 45242 | 2023 | 1417 | 1688 | 1296 | 1035 | 877 | 920 | 948 | 815 | 597 | 359 | 545 | 227 | 0 | 0 | 0 |
| EarleyBoyer | 90469 | 90360 | 77568 | 71289 | 70177 | 47731 | 47065 | 35802 | 3363 | 2383 | 1939 | 1632 | 1518 | 1233 | 1458 | 892 | 672 | 636 | 331 | 222 | 0 | 0 | 0 |
| RegExp | 27275 | 28605 | 11591 | 12547 | 9991 | 12352 | 11772 | 1497 | 474 | 235 | 205 | 186 | 190 | 91.5 | 204 | 133 | 234 | 243 | 261 | 134 | 0 | 0 | 0 |
| Splay | 30787 | 39205 | 28868 | 34479 | 27422 | 18319 | 21220 | 2116 | 2808 | 2237 | 1988 | 1522 | 1388 | 1887 | 1288 | 1596 | 723 | 1043 | 353 | 513 | 0 | 0 | 0 |
| NavierStokes | 31398 | 37694 | 30509 | 34360 | 32814 | 21158 | 18033 | 23821 | 1052 | 1199 | 1498 | 1534 | 1655 | 1677 | 1150 | 1760 | 520 | 260 | 927 | 225 | 0 | 0 | 0 |
| Score | 55668 | 55452 | 41634 | 39624 | 37066 | 22683 | 21380 | 10617 | 1247 | 1073 | 1012 | 896 | 827 | 826 | 789 | 722 | 415 | 353 | 306 | 170 | 0 | 0 | 0 |
| Score/MB | 590 | 993 | 376 | 480 | 44082 | 691 | 163 | 54 | 79 | 104 | 280 | 217 | 867 | 20 | 668 | 477 | 990 | 27 | 189 | 13 | 0 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | xst | mujs | goja | kiesel | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.16 | 13.6.0 | 0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 16.9.1 | 1.3.5 | 0 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 61.2M | 861K | 89.6M | 92.1M | 113.3M | 19.9M | 65.2M | 33.8M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Exe size | 61.2M | 861K | 1016.1K | 92.1M | 113.3M | 569.8K | 65.2M | 33.8M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 12.9M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28630 | 21933 | 29142 | 30684 | 22967 | 24143 | 9496 | 9535 | 44692 | 508 | 489 | 422 | 471 | 420 | 398 | 252 | 95.5 | 143 | 143 | 48.8 | 25.2 | 0 | 0 |
| DeltaBlue | 45337 | 77775 | 37086 | 55189 | 54832 | 22712 | 10420 | 10513 | 52412 | 564 | 550 | 490 | 499 | 457 | 439 | 284 | 148 | 200 | 170 | 47.2 | 21 | 0 | 0 |
| Crypto | 42886 | 39391 | 38170 | 34336 | 34832 | 27928 | 15273 | 12520 | 25930 | 574 | 305 | 275 | 297 | 311 | 276 | 190 | 190 | 111 | 80.2 | 52.6 | 38.1 | 0 | 0 |
| RayTrace | 116030 | 98197 | 99381 | 70003 | 69855 | 38775 | 30087 | 27648 | 10202 | 1111 | 833 | 775 | 516 | 418 | 490 | 342 | 452 | 334 | 233 | 119 | 70.7 | 0 | 0 |
| EarleyBoyer | 62660 | 67353 | 57063 | 66742 | 63888 | 6094 | 34088 | 30864 | 31577 | 1856 | 1271 | 1137 | 892 | 770 | 833 | 576 | 327 | 408 | 415 | 111 | 81.4 | 0 | 0 |
| RegExp | 17309 | 8043 | 15895 | 8857 | 8928 | 5263 | 7403 | 6644 | 1022 | 297 | 94.6 | 90.2 | 82.6 | 81.7 | 82 | 78.8 | 131 | 103 | 195 | 52.3 | 23.5 | 0 | 0 |
| Splay | 38855 | 39108 | 32988 | 38121 | 37576 | 20263 | 22092 | 11592 | 3026 | 2481 | 1618 | 1425 | 880 | 898 | 804 | 592 | 287 | 568 | 542 | 266 | 145 | 0 | 0 |
| NavierStokes | 33687 | 36506 | 32698 | 37248 | 37285 | 35657 | 23821 | 24364 | 31133 | 904 | 658 | 581 | 656 | 753 | 604 | 355 | 526 | 269 | 128 | 98.6 | 78.1 | 0 | 0 |
| Score | 41715 | 38769 | 37619 | 36872 | 35368 | 18506 | 16696 | 14551 | 14434 | 830 | 553 | 497 | 445 | 425 | 409 | 286 | 230 | 226 | 200 | 82.8 | 48.6 | 0 | 0 |
| Score/MB | 682 | 46108 | 419 | 400 | 312 | 928 | 256 | 430 | 74 | 105 | 147 | 41 | 215 | 415 | 331 | 422 | 143 | 523 | 15 | 6 | 1 | 0 | 0 |
### windows
| Engine | v8 | jsc | bun | deno | node | spidermonkey | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | kiesel | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.16 | 2.3.6 | 24.2.0 | 140.0 | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.6M | 122.8M | 130.9M | 138.2M | 115.7M | 52.1M | 196.1M | 86.6M | 11.8M | 37M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 46.3M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 111.1M | 105.9M | 84.6M | 33.6M | 349.1K | 3M | 4.9M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 33.2M | 27.4M | 1.3M | 0.4K |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 31.1M | 18.5M | 195.8M | 83.5M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 13.2M | 15M | 4.7M | 0 |
| Richards | 34211 | 34081 | 35267 | 33484 | 33074 | 13312 | 36067 | 698 | 511 | 416 | 445 | 431 | 438 | 240 | 188 | 55.4 | 47.8 | 0 | 0 |
| DeltaBlue | 97484 | 45529 | 40696 | 75097 | 73993 | 13072 | 30302 | 546 | 449 | 403 | 403 | 370 | 403 | 332 | 234 | 49.5 | 41.5 | 0 | 0 |
| Crypto | 42957 | 49414 | 48767 | 39513 | 41983 | 20574 | 20364 | 788 | 544 | 417 | 510 | 418 | 369 | 186 | 109 | 59.4 | 72.4 | 0 | 0 |
| RayTrace | 91463 | 101452 | 99899 | 64537 | 58089 | 27473 | 7836 | 994 | 546 | 728 | 592 | 611 | 582 | 458 | 227 | 131 | 131 | 0 | 0 |
| EarleyBoyer | 81397 | 59574 | 56890 | 73080 | 67724 | 39308 | 19638 | 2199 | 1005 | 1115 | 985 | 974 | 979 | 566 | 456 | 124 | 138 | 0 | 0 |
| RegExp | 9809 | 18911 | 18529 | 9761 | 9910 | 8810 | 986 | 400 | 190 | 195 | 173 | 190 | 187 | 199 | 197 | 89.9 | 42.7 | 0 | 0 |
| Splay | 37421 | 34821 | 34446 | 35652 | 33762 | 24203 | 3057 | 2404 | 1039 | 1394 | 976 | 1002 | 1009 | 612 | 818 | 325 | 184 | 0 | 0 |
| NavierStokes | 38655 | 33801 | 34030 | 38951 | 38951 | 22260 | 26834 | 1090 | 1038 | 745 | 741 | 711 | 678 | 504 | 186 | 115 | 156 | 0 | 0 |
| Score | 44411 | 42333 | 41406 | 39844 | 38922 | 19185 | 11358 | 954 | 586 | 572 | 534 | 520 | 513 | 352 | 249 | 98.6 | 86.6 | 0 | 0 |
| Score/MB | 844 | 344 | 316 | 288 | 336 | 368 | 57 | 11 | 49 | 15 | 57 | 12 | 57 | 46 | 12 | 2 | 2 | 0 | 0 |
