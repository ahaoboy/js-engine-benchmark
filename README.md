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


## Engine & Runtime (31/36)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47694<br>97.2M<br>490/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47264<br>37.4M<br>1262/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45385<br>53.3M<br>852/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40563<br>106.9M<br>379/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40449<br>65.2M<br>619/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39971<br>123.1M<br>324/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39382<br>67.1M<br>586/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38442<br>40.7M<br>945/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20156<br>19.4M<br>1038/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19005<br>39.9M<br>475/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17214<br>51M<br>337/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16936<br>35.2M<br>480/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11123<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2375<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1536<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 877<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 828<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 763<br>857K<br>911/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 709<br>1.3M<br>526/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 650<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 526<br>45.8M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 510<br>2.1M<br>239/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 377<br>685K<br>563/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 372<br>414.5K<br>919/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 312<br>2.7K<br>118320/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 278<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 268<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 187<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
8/2/2025, 6:48:11 AM

### ubuntu
| Engine | bun | jsc | v8 | deno | bare | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 2.4.3 | 0 | 24.5.0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 97.2M | 37.4M | 53.3M | 106.9M | 65.2M | 123.1M | 67.1M | 40.7M | 19.4M | 39.9M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 97.2M | 37.4M | 937.8K | 106.9M | 65.2M | 123.1M | 67.1M | 40.7M | 571K | 39.9M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41272 | 41236 | 34878 | 32947 | 30452 | 32262 | 33036 | 32563 | 23211 | 12776 | 14470 | 12264 | 35500 | 13408 | 1131 | 685 | 703 | 671 | 610 | 554 | 574 | 485 | 291 | 240 | 220 | 143 | 204 | 90 | 102 | 60 | 58 | 537 | 133 | 265 | 0 | 24 |
| DeltaBlue | 55572 | 55526 | 96698 | 73120 | 77027 | 73821 | 73616 | 75183 | 26150 | 13157 | 13224 | 12867 | 38620 | 214 | 1061 | 675 | 680 | 659 | 618 | 586 | 579 | 450 | 329 | 356 | 310 | 173 | 254 | 164 | 110 | 55 | 55 | 520 | 173 | 272 | 0 | 28 |
| Crypto | 50303 | 51364 | 42603 | 41674 | 41560 | 41770 | 41889 | 41303 | 30743 | 20296 | 17934 | 17404 | 28927 | 9683 | 1339 | 580 | 587 | 729 | 573 | 545 | 380 | 881 | 815 | 191 | 180 | 155 | 122 | 328 | 97 | 80 | 61 | 845 | 134 | 298 | 0 | 29 |
| RayTrace | 115068 | 120248 | 105818 | 68005 | 70743 | 65563 | 69559 | 57867 | 35963 | 27380 | 26761 | 28239 | 2425 | 1273 | 1533 | 1172 | 1082 | 904 | 937 | 888 | 729 | 565 | 576 | 520 | 491 | 438 | 276 | 502 | 256 | 164 | 140 | 586 | 426 | 348 | 0 | 86 |
| EarleyBoyer | 62435 | 68735 | 80068 | 72778 | 69650 | 72360 | 74154 | 66875 | 7132 | 38582 | 36458 | 36242 | 36146 | 722 | 3366 | 1904 | 1749 | 1447 | 1392 | 1355 | 1224 | 765 | 601 | 534 | 504 | 625 | 499 | 325 | 284 | 193 | 138 | 0 | 513 | 0 | 0 | 77 |
| RegExp | 21590 | 20022 | 10183 | 10203 | 10334 | 10072 | 9930 | 8874 | 7803 | 8711 | 8801 | 8919 | 833 | 628 | 555 | 254 | 224 | 223 | 229 | 225 | 184 | 60 | 132 | 217 | 197 | 464 | 208 | 96 | 251 | 49 | 94 | 112 | 0 | 0 | 0 | 0 |
| Splay | 37657 | 36492 | 37494 | 37258 | 37127 | 35326 | 28660 | 35701 | 19860 | 24268 | 11843 | 12212 | 2779 | 3692 | 3683 | 2456 | 1997 | 1796 | 1789 | 1469 | 1654 | 799 | 1305 | 852 | 1267 | 1013 | 990 | 407 | 463 | 231 | 307 | 1946 | 901 | 0 | 0 | 57 |
| NavierStokes | 39731 | 35066 | 38732 | 38803 | 38881 | 38803 | 38694 | 38469 | 36730 | 22341 | 22090 | 22112 | 29118 | 17049 | 1826 | 936 | 985 | 1305 | 993 | 909 | 932 | 1465 | 976 | 483 | 485 | 182 | 199 | 850 | 161 | 175 | 119 | 1227 | 283 | 0 | 0 | 51 |
| Score | 47694 | 47264 | 45385 | 40563 | 40449 | 39971 | 39382 | 38442 | 20156 | 19005 | 17214 | 16936 | 11123 | 2375 | 1536 | 877 | 834 | 828 | 763 | 709 | 650 | 526 | 510 | 377 | 372 | 312 | 278 | 268 | 187 | 107 | 104 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 490 | 1262 | 852 | 379 | 619 | 324 | 586 | 945 | 1038 | 475 | 337 | 480 | 55 | 2 | 42 | 71 | 161 | 193 | 911 | 526 | 329 | 11 | 239 | 563 | 919 | 118320 | 21 | 128 | 2 | 3 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 25 | 40 | 33 | 46 | 50 | 48 | 51 | 53 | 59 | 90 | 66 | 82 | 85 | 95 | 113 | 129 | 145 | 235 | 234 | 53 | 87 | 31 | 0 | 428 |
### macos-arm64
| Engine | bun | jsc | bare | deno | dune | node | v8 | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 0 | 2.4.3 | 0.10.0 | 24.5.0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.4M | 94.2M | 45.5M | 85.5M | 57.4M | 111.5M | 861K | 131.5M | 32.8M | 46.3M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.4M | 914.7K | 45.5M | 85.5M | 57.4M | 111.5M | 861K | 65.7M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.5M | 41.3M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.7M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 51908 | 52469 | 44325 | 48689 | 48636 | 45578 | 34126 | 15099 | 15145 | 15907 | 37515 | 17464 | 1373 | 1341 | 1075 | 1333 | 1161 | 1104 | 814 | 874 | 541 | 410 | 116 | 330 | 191 | 162 | 115 | 755 | 214 | 217 | 0 | 38 |
| DeltaBlue | 76988 | 76366 | 111323 | 105326 | 113531 | 103580 | 85590 | 16768 | 17931 | 17435 | 55724 | 1037 | 1251 | 1272 | 1134 | 1239 | 1150 | 1111 | 836 | 809 | 635 | 605 | 225 | 396 | 239 | 169 | 102 | 836 | 258 | 241 | 0 | 46 |
| Crypto | 70566 | 73160 | 60104 | 58489 | 57937 | 59699 | 38417 | 26418 | 22791 | 22199 | 45588 | 12707 | 1466 | 1235 | 1022 | 1233 | 1395 | 997 | 1068 | 1708 | 1392 | 313 | 558 | 201 | 121 | 144 | 119 | 1223 | 98 | 269 | 0 | 47 |
| RayTrace | 192693 | 187735 | 102784 | 95533 | 94645 | 95977 | 93757 | 51799 | 51503 | 43215 | 5531 | 1618 | 2572 | 2163 | 2043 | 1584 | 1265 | 1488 | 1332 | 1151 | 1153 | 1009 | 744 | 474 | 699 | 376 | 256 | 735 | 550 | 326 | 0 | 150 |
| EarleyBoyer | 108608 | 105243 | 98919 | 104383 | 107182 | 102821 | 73778 | 51544 | 50138 | 48798 | 48934 | 1410 | 5231 | 3339 | 3112 | 2649 | 2378 | 2366 | 2290 | 1458 | 1222 | 1131 | 453 | 861 | 746 | 404 | 252 | 0 | 631 | 0 | 0 | 126 |
| RegExp | 33003 | 33491 | 15410 | 15365 | 15305 | 15138 | 11376 | 13312 | 12884 | 12962 | 1914 | 872 | 737 | 315 | 324 | 280 | 288 | 281 | 219 | 106 | 262 | 327 | 339 | 295 | 569 | 216 | 147 | 201 | 0 | 0 | 0 | 0 |
| Splay | 57288 | 54365 | 59470 | 53254 | 46222 | 48292 | 43101 | 31700 | 19658 | 19674 | 3217 | 2834 | 4816 | 3647 | 4327 | 2446 | 2591 | 2106 | 913 | 2345 | 2267 | 1429 | 611 | 1438 | 1113 | 556 | 590 | 893 | 1097 | 0 | 0 | 95 |
| NavierStokes | 33471 | 34360 | 40540 | 40688 | 40662 | 40662 | 36358 | 21411 | 21475 | 21370 | 37211 | 25080 | 1638 | 2151 | 1759 | 2157 | 2391 | 1740 | 2660 | 1976 | 1556 | 790 | 1564 | 323 | 243 | 198 | 229 | 1898 | 275 | 0 | 0 | 86 |
| Score | 66303 | 66053 | 57038 | 56205 | 55752 | 54912 | 43917 | 25175 | 23302 | 22710 | 16651 | 3665 | 1936 | 1574 | 1450 | 1373 | 1333 | 1205 | 1021 | 999 | 942 | 652 | 447 | 443 | 381 | 248 | 191 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1176 | 701 | 1253 | 656 | 971 | 492 | 52230 | 191 | 709 | 490 | 85 | 0 | 123 | 436 | 137 | 333 | 1398 | 1020 | 675 | 24 | 1715 | 1556 | 277 | 34 | 144487 | 3 | 15 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 31 | 30 | 37 | 37 | 38 | 37 | 39 | 42 | 59 | 43 | 54 | 80 | 76 | 89 | 116 | 136 | 41 | 88 | 33 | 0 | 272 |
### macos-amd64
| Engine | bun | v8 | deno | jsc | dune | node | bare | spidermonkey | ChakraCore | spiderfire | mozjs | graaljs | jjs | hermes | txiki.js | qjs(ng) | llrt | quickjs | rquickjs | xst | mujs | primjs | duktape | ringo | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 13.6.0 | 2.4.3 | 0 | 0.10.0 | 24.5.0 | 0 | 142.0 | 1.13.0.0.beta | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.8.0 | 0.6.2.beta | 2025.04.26 | 0 | 16.9.1 | 1.3.5 | 0 | 2.99.99 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 61.9M | 861K | 96.6M | 89.6M | 60.4M | 113.7M | 47.1M | 65.7M | 20M | 48.2M | 33.8M | 194.4M | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 1M | 1.2M | 1.6M | 441.8K | 693.4K | 525.7K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 61.9M | 861K | 96.6M | 1016.1K | 60.4M | 113.7M | 47.1M | 65.7M | 571K | 48.2M | 33.8M | 148.8K | 0 | 7.9M | 3.7M | 2.1M | 12.4M | 1M | 1.2M | 1.6M | 441.8K | 693.4K | 525.7K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 0 | 88.6M | 0 | 0 | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 29611 | 29445 | 30017 | 28806 | 28626 | 22519 | 18272 | 8935 | 19056 | 8497 | 8211 | 40869 | 11469 | 491 | 476 | 410 | 264 | 310 | 263 | 93 | 128 | 141 | 117 | 80 | 115 | 86 | 43 | 24 | 252 | 39 | 97 | 0 | 14 |
| DeltaBlue | 44312 | 70039 | 52041 | 35909 | 55453 | 52412 | 50554 | 9858 | 17966 | 9686 | 6129 | 37343 | 223 | 560 | 545 | 436 | 292 | 285 | 293 | 142 | 179 | 185 | 120 | 124 | 131 | 91 | 40 | 22 | 242 | 76 | 124 | 0 | 14 |
| Crypto | 42645 | 36344 | 31916 | 34541 | 32331 | 33636 | 29224 | 13875 | 19964 | 11661 | 9923 | 20566 | 3950 | 564 | 297 | 253 | 186 | 236 | 183 | 189 | 105 | 140 | 171 | 71 | 62 | 65 | 43 | 36 | 275 | 56 | 126 | 0 | 18 |
| RayTrace | 111738 | 94127 | 67783 | 100047 | 70817 | 67043 | 60766 | 23609 | 22377 | 23532 | 19812 | 2857 | 872 | 1096 | 836 | 509 | 457 | 281 | 288 | 441 | 330 | 232 | 254 | 288 | 182 | 173 | 105 | 64 | 148 | 252 | 182 | 0 | 57 |
| EarleyBoyer | 61456 | 65462 | 65285 | 54263 | 64350 | 62230 | 50107 | 31344 | 4180 | 28293 | 28175 | 28976 | 571 | 1815 | 1205 | 895 | 736 | 492 | 516 | 320 | 370 | 405 | 252 | 317 | 305 | 234 | 99 | 71 | 0 | 139 | 0 | 0 | 50 |
| RegExp | 16984 | 8315 | 8728 | 14001 | 8348 | 8737 | 7133 | 7455 | 4031 | 6170 | 5406 | 946 | 441 | 293 | 92 | 80 | 62 | 57 | 60 | 129 | 102 | 52 | 66 | 241 | 152 | 99 | 46 | 21 | 43 | 0 | 0 | 0 | 0 |
| Splay | 38301 | 40468 | 32466 | 26338 | 31765 | 36035 | 30013 | 20291 | 15573 | 9920 | 10382 | 2701 | 2649 | 2428 | 1555 | 868 | 1334 | 566 | 570 | 290 | 487 | 300 | 388 | 493 | 428 | 440 | 222 | 134 | 748 | 437 | 0 | 0 | 43 |
| NavierStokes | 32648 | 32054 | 36952 | 32054 | 35913 | 36655 | 31452 | 22216 | 32022 | 20968 | 20628 | 15947 | 9893 | 888 | 642 | 614 | 380 | 496 | 508 | 515 | 257 | 247 | 272 | 101 | 93 | 118 | 85 | 71 | 506 | 113 | 0 | 0 | 31 |
| Score | 41112 | 38652 | 35112 | 35079 | 34952 | 34290 | 29368 | 15323 | 13760 | 13009 | 11577 | 10072 | 1662 | 815 | 539 | 415 | 333 | 287 | 279 | 226 | 210 | 184 | 180 | 172 | 154 | 135 | 71 | 45 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 664 | 45968 | 363 | 391 | 578 | 301 | 623 | 233 | 686 | 269 | 342 | 51 | 0 | 103 | 144 | 201 | 26 | 280 | 226 | 140 | 486 | 271 | 350 | 65227 | 11 | 1 | 5 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 25 | 51 | 48 | 81 | 90 | 115 | 120 | 122 | 135 | 130 | 155 | 141 | 173 | 195 | 201 | 342 | 555 | 126 | 189 | 59 | 0 | 675 |
### windows
| Engine | v8 | jsc | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.19 | 2.4.3 | 24.5.0 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 52.6M | 122.8M | 132.1M | 143.4M | 116.3M | 78.7M | 14.4M | 51.3M | 72.8M | 196.1M | 17.3M | 86.6M | 11.8M | 38.1M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.3M | 111.1M | 85.2M | 48.4M | 342.9K | 33.8M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.3M | 83.5M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 35433 | 35433 | 37134 | 33445 | 30963 | 31069 | 24288 | 13203 | 14361 | 36138 | 4921 | 717 | 513 | 454 | 445 | 385 | 434 | 212 | 229 | 188 | 106 | 55 | 49 | 0 | 0 | 0 | 0 | 21 |
| DeltaBlue | 91891 | 49608 | 47631 | 77894 | 72042 | 76016 | 29819 | 13343 | 13045 | 28662 | 228 | 624 | 456 | 410 | 410 | 370 | 397 | 260 | 337 | 238 | 116 | 50 | 41 | 0 | 0 | 0 | 0 | 23 |
| Crypto | 42544 | 48127 | 40204 | 42127 | 42052 | 42251 | 31889 | 19956 | 16968 | 21420 | 2502 | 776 | 546 | 394 | 507 | 410 | 370 | 317 | 184 | 113 | 91 | 58 | 75 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 100713 | 105744 | 98863 | 65637 | 67413 | 67931 | 54093 | 28934 | 27130 | 2590 | 2000 | 1015 | 555 | 725 | 592 | 559 | 592 | 428 | 458 | 231 | 266 | 131 | 134 | 0 | 0 | 0 | 0 | 73 |
| EarleyBoyer | 81164 | 64269 | 59499 | 73435 | 70343 | 71374 | 44270 | 39122 | 36882 | 27104 | 816 | 2246 | 1013 | 1140 | 992 | 1006 | 1003 | 523 | 571 | 463 | 298 | 124 | 149 | 0 | 0 | 0 | 0 | 68 |
| RegExp | 9761 | 19327 | 17911 | 9761 | 10092 | 9819 | 10173 | 9083 | 8965 | 946 | 936 | 407 | 188 | 195 | 174 | 176 | 189 | 108 | 199 | 200 | 280 | 90 | 43 | 0 | 0 | 0 | 0 | 0 |
| Splay | 39808 | 35758 | 34365 | 34156 | 34723 | 29361 | 20348 | 24350 | 14538 | 2815 | 5475 | 2477 | 1066 | 1482 | 1002 | 1296 | 1035 | 1025 | 1189 | 830 | 432 | 326 | 186 | 0 | 0 | 0 | 0 | 56 |
| NavierStokes | 38990 | 34030 | 38287 | 39060 | 39099 | 39029 | 37063 | 22489 | 22171 | 22705 | 3913 | 1094 | 1035 | 718 | 749 | 699 | 682 | 1077 | 506 | 196 | 152 | 114 | 165 | 0 | 0 | 0 | 0 | 48 |
| Score | 45112 | 43790 | 42094 | 40250 | 39639 | 39083 | 28409 | 19367 | 17596 | 9925 | 1760 | 983 | 591 | 579 | 539 | 519 | 516 | 384 | 381 | 255 | 189 | 98 | 89 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 858 | 356 | 318 | 280 | 340 | 496 | 1972 | 377 | 241 | 50 | 101 | 11 | 50 | 15 | 57 | 12 | 57 | 50 | 50 | 13 | 1 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 43 | 41 | 58 | 61 | 61 | 61 | 62 | 84 | 83 | 121 | 147 | 250 | 274 | 0 | 130 | 0 | 96 | 462 |
