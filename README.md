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
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46800<br>98.4M<br>475/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46781<br>37.4M<br>1249/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45586<br>53.3M<br>855/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40847<br>65.2M<br>626/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40673<br>106.9M<br>380/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39780<br>123.1M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39013<br>67.1M<br>581/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38734<br>40.7M<br>952/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20053<br>19.4M<br>1033/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18941<br>39.6M<br>477/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17076<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16866<br>35.2M<br>478/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9857<br>199.7M<br>49/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2366<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1533<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 876<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 755<br>857K<br>902/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 716<br>1.3M<br>531/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 649<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 552<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 499<br>2.1M<br>234/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 395<br>685K<br>590/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 373<br>414.5K<br>921/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 295<br>2.7K<br>111873/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 264<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 189<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
8/11/2025, 2:13:43 AM

### ubuntu
| Engine | bun | jsc | v8 | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 13.6.0 | 0 | 2.4.3 | 24.5.0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 98.4M | 37.4M | 53.3M | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 46.1M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 98.4M | 37.4M | 937.8K | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 46.1M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 40534 | 41349 | 35291 | 31800 | 32178 | 32008 | 32294 | 32485 | 23564 | 12977 | 14100 | 12193 | 35591 | 12172 | 1098 | 689 | 714 | 686 | 612 | 593 | 579 | 481 | 289 | 246 | 224 | 138 | 203 | 90 | 105 | 59 | 60 | 550 | 133 | 273 | 0 | 24 |
| DeltaBlue | 53556 | 56471 | 93947 | 77325 | 74746 | 71764 | 74813 | 77001 | 25317 | 12834 | 12986 | 12900 | 38666 | 488 | 1066 | 685 | 688 | 656 | 623 | 593 | 574 | 454 | 330 | 347 | 318 | 152 | 251 | 163 | 112 | 54 | 56 | 519 | 184 | 281 | 0 | 29 |
| Crypto | 49162 | 51401 | 42832 | 41721 | 41573 | 41548 | 41661 | 41158 | 32023 | 20219 | 17865 | 17715 | 16785 | 7845 | 1371 | 572 | 583 | 744 | 575 | 556 | 380 | 841 | 790 | 188 | 183 | 146 | 123 | 324 | 96 | 80 | 62 | 847 | 136 | 303 | 0 | 29 |
| RayTrace | 112182 | 119212 | 107076 | 70891 | 68523 | 66303 | 68597 | 62307 | 34227 | 26983 | 26344 | 27454 | 4867 | 1388 | 1565 | 1177 | 1082 | 909 | 939 | 868 | 732 | 562 | 579 | 522 | 481 | 435 | 275 | 497 | 256 | 165 | 139 | 582 | 429 | 349 | 0 | 86 |
| EarleyBoyer | 64298 | 65033 | 81501 | 70287 | 74561 | 71508 | 73514 | 69159 | 7059 | 38598 | 36365 | 36946 | 24163 | 1547 | 3367 | 1878 | 1769 | 1469 | 1391 | 1351 | 1228 | 737 | 583 | 522 | 500 | 596 | 500 | 325 | 286 | 192 | 138 | 0 | 514 | 0 | 0 | 78 |
| RegExp | 20770 | 20093 | 10212 | 10294 | 10122 | 10072 | 10082 | 8728 | 7788 | 8801 | 8719 | 8793 | 866 | 713 | 551 | 253 | 227 | 228 | 214 | 224 | 178 | 62 | 130 | 214 | 196 | 421 | 209 | 96 | 243 | 49 | 94 | 111 | 0 | 0 | 0 | 0 |
| Splay | 35956 | 35066 | 38121 | 37812 | 37364 | 35522 | 27104 | 34047 | 19843 | 24072 | 12073 | 12012 | 2128 | 976 | 3577 | 2393 | 1929 | 1710 | 1710 | 1451 | 1666 | 1201 | 1270 | 1305 | 1246 | 1017 | 953 | 390 | 505 | 227 | 322 | 1921 | 934 | 0 | 0 | 58 |
| NavierStokes | 40028 | 34987 | 38655 | 38951 | 38765 | 38732 | 38694 | 38436 | 36655 | 22297 | 21919 | 21941 | 17790 | 14084 | 1832 | 965 | 965 | 1290 | 1004 | 925 | 933 | 1502 | 926 | 482 | 487 | 169 | 199 | 821 | 162 | 176 | 119 | 1226 | 282 | 0 | 0 | 51 |
| Score | 46800 | 46781 | 45586 | 40847 | 40673 | 39780 | 39013 | 38734 | 20053 | 18941 | 17076 | 16866 | 9857 | 2366 | 1533 | 876 | 833 | 830 | 755 | 716 | 649 | 552 | 499 | 395 | 373 | 295 | 277 | 264 | 189 | 106 | 105 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 475 | 1249 | 855 | 626 | 380 | 323 | 581 | 952 | 1033 | 477 | 334 | 478 | 49 | 2 | 42 | 71 | 161 | 194 | 902 | 531 | 329 | 11 | 234 | 590 | 921 | 111873 | 21 | 126 | 2 | 3 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 26 | 39 | 34 | 46 | 50 | 48 | 51 | 52 | 59 | 87 | 68 | 82 | 86 | 98 | 113 | 130 | 144 | 235 | 234 | 53 | 87 | 31 | 0 | 427 |
### macos-arm64
| Engine | bun | jsc | dune | bare | node | deno | v8 | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.20 | 0 | 0.10.0 | 0 | 24.5.0 | 2.4.3 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 16.9.1 | 0 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.8M | 94.2M | 57.4M | 45.5M | 111.5M | 85.5M | 861K | 131.2M | 46.3M | 32.8M | 194M | 0 | 15.7M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 1.5M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.8M | 914.7K | 57.4M | 45.5M | 111.5M | 85.5M | 861K | 65.6M | 46.3M | 32.8M | 147.4K | 0 | 7.9M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.5M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 52727 | 51396 | 48350 | 45434 | 43386 | 45984 | 35097 | 15088 | 16009 | 12568 | 37519 | 11110 | 1341 | 1291 | 1086 | 1337 | 1152 | 1101 | 819 | 862 | 540 | 410 | 119 | 310 | 193 | 144 | 93 | 761 | 187 | 215 | 0 | 36 |
| DeltaBlue | 71573 | 73517 | 113935 | 95534 | 106946 | 103957 | 96215 | 17111 | 17356 | 13250 | 49086 | 1280 | 1252 | 1346 | 1181 | 1234 | 1156 | 1073 | 863 | 794 | 630 | 606 | 225 | 359 | 183 | 150 | 80 | 825 | 217 | 241 | 0 | 45 |
| Crypto | 73008 | 74945 | 59393 | 59166 | 60422 | 57529 | 37167 | 26571 | 22399 | 19601 | 44609 | 14448 | 1439 | 1229 | 1038 | 1230 | 1395 | 1000 | 1094 | 1634 | 1338 | 313 | 547 | 188 | 107 | 135 | 102 | 1220 | 98 | 271 | 0 | 47 |
| RayTrace | 190325 | 191435 | 95163 | 93905 | 95977 | 85987 | 97087 | 48790 | 43511 | 41472 | 3243 | 1823 | 2577 | 2030 | 2068 | 1545 | 1291 | 1470 | 1299 | 1124 | 1144 | 1005 | 744 | 417 | 680 | 354 | 200 | 678 | 533 | 337 | 0 | 148 |
| EarleyBoyer | 106055 | 104011 | 105005 | 97410 | 101673 | 101725 | 72973 | 51583 | 45388 | 40320 | 48890 | 2452 | 5254 | 3285 | 3123 | 2623 | 2334 | 2333 | 2005 | 1377 | 1167 | 1096 | 432 | 813 | 680 | 395 | 207 | 0 | 573 | 0 | 0 | 119 |
| RegExp | 32185 | 32788 | 15001 | 15334 | 15107 | 14956 | 11535 | 13053 | 12316 | 9861 | 1844 | 708 | 739 | 314 | 324 | 280 | 287 | 280 | 218 | 101 | 263 | 334 | 326 | 296 | 548 | 216 | 124 | 194 | 0 | 0 | 0 | 0 |
| Splay | 51918 | 54591 | 45407 | 60450 | 49033 | 32287 | 33851 | 31977 | 19550 | 14757 | 1970 | 1752 | 4510 | 3484 | 4042 | 2290 | 2543 | 1909 | 1554 | 2102 | 2100 | 824 | 557 | 1063 | 900 | 456 | 403 | 1123 | 817 | 0 | 0 | 98 |
| NavierStokes | 40877 | 34543 | 40662 | 40662 | 38139 | 33984 | 36358 | 21793 | 21475 | 20034 | 35953 | 23058 | 1616 | 2155 | 1759 | 2203 | 2399 | 1740 | 2687 | 1920 | 1585 | 790 | 1499 | 269 | 188 | 193 | 206 | 1892 | 270 | 0 | 0 | 86 |
| Score | 66444 | 65735 | 55541 | 55385 | 54452 | 50066 | 43416 | 25090 | 22407 | 18846 | 14252 | 3568 | 1909 | 1552 | 1452 | 1359 | 1331 | 1181 | 1079 | 958 | 924 | 608 | 435 | 396 | 336 | 230 | 155 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1169 | 697 | 967 | 1217 | 488 | 585 | 51634 | 191 | 483 | 574 | 73 | 0 | 121 | 430 | 138 | 329 | 1396 | 1000 | 713 | 23 | 1683 | 1451 | 270 | 31 | 127421 | 3 | 12 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 31 | 29 | 37 | 37 | 39 | 37 | 40 | 43 | 61 | 43 | 55 | 83 | 83 | 103 | 118 | 155 | 42 | 91 | 33 | 0 | 275 |
### macos-amd64
| Engine | v8 | bun | bare | jsc | dune | deno | node | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | quickjs | duktape | primjs | xst | mujs | ringo | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.20 | 0 | 0 | 0.10.0 | 2.4.3 | 24.5.0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 0 | 2025.04.26 | 2.99.99 | 0 | 16.9.1 | 1.3.5 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 861K | 62.5M | 47.1M | 89.6M | 60.4M | 96.6M | 113.7M | 20M | 65.6M | 33.8M | 48.2M | 194.4M | 0 | 7.9M | 3.7M | 12.4M | 2.1M | 1.2M | 1M | 525.7K | 693.4K | 1.6M | 441.8K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 861K | 62.5M | 47.1M | 1016.1K | 60.4M | 96.6M | 113.7M | 571K | 65.6M | 33.8M | 48.2M | 148.8K | 0 | 7.9M | 3.7M | 12.4M | 2.1M | 1.2M | 1M | 525.7K | 693.4K | 1.6M | 441.8K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 0 | 88.6M | 0 | 0 | 0 | 19.5M | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 30377 | 26413 | 20574 | 27846 | 30095 | 28990 | 20165 | 22501 | 9154 | 9129 | 9034 | 40481 | 2401 | 415 | 421 | 377 | 419 | 348 | 313 | 165 | 191 | 80 | 139 | 70 | 131 | 97 | 44 | 17 | 351 | 64 | 104 | 0 | 17 |
| DeltaBlue | 57582 | 41945 | 57556 | 31677 | 49807 | 48610 | 48808 | 20477 | 9316 | 9204 | 9409 | 26117 | 249 | 438 | 511 | 421 | 457 | 404 | 326 | 194 | 184 | 127 | 195 | 106 | 146 | 103 | 41 | 19 | 367 | 92 | 121 | 0 | 17 |
| Crypto | 36428 | 39730 | 33001 | 34818 | 31451 | 28713 | 31207 | 24650 | 14275 | 13331 | 11808 | 17286 | 6537 | 396 | 271 | 233 | 272 | 245 | 248 | 260 | 145 | 175 | 99 | 69 | 65 | 78 | 48 | 34 | 380 | 65 | 129 | 0 | 22 |
| RayTrace | 99011 | 94127 | 67413 | 85173 | 64823 | 55887 | 53300 | 31640 | 26270 | 29674 | 28461 | 2498 | 777 | 974 | 752 | 646 | 460 | 437 | 313 | 256 | 240 | 391 | 271 | 314 | 204 | 205 | 105 | 64 | 157 | 219 | 207 | 0 | 63 |
| EarleyBoyer | 64861 | 47884 | 55441 | 45895 | 60149 | 56116 | 56094 | 4924 | 30928 | 31676 | 32526 | 20590 | 1186 | 1701 | 1128 | 918 | 813 | 742 | 625 | 316 | 448 | 291 | 352 | 343 | 379 | 232 | 99 | 72 | 0 | 228 | 0 | 0 | 56 |
| RegExp | 7379 | 13728 | 8142 | 13819 | 8001 | 7524 | 7418 | 4842 | 6242 | 7501 | 7379 | 924 | 373 | 269 | 87 | 69 | 70 | 75 | 64 | 65 | 63 | 117 | 79 | 256 | 181 | 87 | 49 | 21 | 69 | 0 | 0 | 0 | 0 |
| Splay | 27139 | 28685 | 37518 | 29875 | 25515 | 18303 | 28098 | 18133 | 18596 | 12845 | 10461 | 1280 | 2302 | 2045 | 1391 | 1370 | 766 | 741 | 692 | 502 | 496 | 277 | 267 | 594 | 148 | 394 | 274 | 101 | 191 | 504 | 0 | 0 | 48 |
| NavierStokes | 33984 | 31483 | 35841 | 30095 | 32435 | 33027 | 27009 | 31663 | 23354 | 22512 | 23673 | 21919 | 2554 | 788 | 595 | 426 | 590 | 557 | 568 | 314 | 297 | 481 | 222 | 107 | 117 | 111 | 93 | 65 | 658 | 158 | 0 | 0 | 33 |
| Score | 35942 | 35388 | 33534 | 33244 | 32409 | 29523 | 29119 | 16274 | 15085 | 14785 | 14247 | 8382 | 1295 | 690 | 494 | 415 | 398 | 369 | 325 | 227 | 218 | 206 | 182 | 176 | 153 | 139 | 76 | 40 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 42745 | 565 | 711 | 370 | 536 | 305 | 256 | 811 | 230 | 437 | 295 | 43 | 0 | 87 | 132 | 33 | 193 | 299 | 317 | 442 | 321 | 128 | 421 | 66744 | 11 | 2 | 5 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 20 | 23 | 44 | 54 | 84 | 99 | 96 | 97 | 108 | 126 | 138 | 148 | 152 | 161 | 172 | 200 | 323 | 566 | 96 | 155 | 56 | 0 | 597 |
### windows
| Engine | v8 | jsc | bun | node | deno | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.20 | 24.5.0 | 2.4.3 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 52.6M | 122.8M | 132.7M | 116.3M | 143.4M | 78.7M | 14.4M | 51M | 72.8M | 196.1M | 17.3M | 86.6M | 11.8M | 38.1M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.9M | 85.2M | 111.1M | 48.4M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 25M | 122.5M | 19.8M | 31.1M | 32.3M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.3M | 83.5M | 6.9M | 32.4M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 34303 | 35291 | 36654 | 33099 | 29195 | 33389 | 25280 | 13475 | 14273 | 35859 | 5473 | 694 | 513 | 455 | 448 | 384 | 434 | 212 | 222 | 185 | 106 | 55 | 48 | 0 | 0 | 0 | 0 | 21 |
| DeltaBlue | 97577 | 45304 | 40940 | 75242 | 70356 | 74502 | 28299 | 13138 | 12966 | 27432 | 215 | 621 | 465 | 410 | 403 | 356 | 403 | 264 | 317 | 222 | 117 | 50 | 41 | 0 | 0 | 0 | 0 | 24 |
| Crypto | 42727 | 50185 | 44105 | 41979 | 42025 | 38217 | 33690 | 20483 | 18027 | 23577 | 1537 | 784 | 549 | 430 | 512 | 429 | 371 | 316 | 184 | 112 | 90 | 59 | 74 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 101156 | 103228 | 96717 | 67191 | 68375 | 66532 | 49678 | 28165 | 26143 | 5170 | 2673 | 1014 | 552 | 741 | 596 | 620 | 571 | 440 | 442 | 224 | 267 | 126 | 134 | 0 | 0 | 0 | 0 | 74 |
| EarleyBoyer | 79751 | 62159 | 56742 | 70618 | 73682 | 65099 | 42348 | 39198 | 37091 | 26218 | 1058 | 2249 | 1002 | 1146 | 992 | 1005 | 976 | 523 | 545 | 446 | 296 | 124 | 135 | 0 | 0 | 0 | 0 | 69 |
| RegExp | 9608 | 19385 | 17205 | 9910 | 9556 | 9680 | 9890 | 9183 | 8801 | 966 | 908 | 403 | 188 | 196 | 173 | 179 | 186 | 109 | 198 | 193 | 277 | 89 | 42 | 0 | 0 | 0 | 0 | 0 |
| Splay | 39580 | 35074 | 32393 | 32735 | 33827 | 27682 | 27454 | 23388 | 14424 | 2090 | 4961 | 2424 | 1024 | 1407 | 972 | 1278 | 986 | 1009 | 642 | 769 | 413 | 300 | 169 | 0 | 0 | 0 | 0 | 56 |
| NavierStokes | 38951 | 33916 | 34132 | 38881 | 36915 | 39029 | 37100 | 22512 | 22193 | 21518 | 2464 | 1080 | 1033 | 740 | 749 | 718 | 666 | 1076 | 509 | 188 | 150 | 115 | 167 | 0 | 0 | 0 | 0 | 48 |
| Score | 45092 | 43084 | 40265 | 39769 | 38850 | 37954 | 29075 | 19313 | 17578 | 10398 | 1656 | 974 | 589 | 586 | 537 | 528 | 508 | 385 | 345 | 244 | 187 | 97 | 87 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 857 | 350 | 303 | 342 | 270 | 482 | 2018 | 378 | 241 | 53 | 95 | 11 | 49 | 15 | 57 | 12 | 56 | 50 | 45 | 12 | 1 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 42 | 41 | 58 | 60 | 61 | 61 | 63 | 84 | 82 | 123 | 146 | 249 | 289 | 0 | 130 | 0 | 100 | 464 |
