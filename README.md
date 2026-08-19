fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7


## update

```bash
npm run build

npm run update

npm run update:doc
```

webui: https://ahaoboy.github.io/js-engine-benchmark/


## Engine & Runtime (37/44)

| name | lang | repo | score | platform | description |
| --- | --- | --- | --- | --- | --- |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=v8">v8</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 49594<br>65M<br>763/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=JavaScriptCore">JavaScriptCore</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46387<br>33.8M<br>1372/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=bun">bun</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 42100<br>77M<br>547/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=deno">deno</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41904<br>91.2M<br>459/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=bare">bare</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40404<br>43M<br>940/M | ✅unix<br>✅macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=dune">dune</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [dune](https://github.com/aalykiot/dune) | 40362<br>64.5M<br>625/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=lo">lo</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38631<br>40.7M<br>950/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=node">node</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 35966<br>109.4M<br>328/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=ChakraCore">ChakraCore</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19919<br>19.3M<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=spidermonkey">spidermonkey</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19692<br>40.8M<br>482/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=mozjs">mozjs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17444<br>33.2M<br>525/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=spiderfire">spiderfire</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 16839<br>44.7M<br>376/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=graaljs">graaljs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [graaljs](https://github.com/oracle/graaljs) | 7982<br>179.3M<br>44/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=jjs">jjs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="20" style="vertical-align: middle;"/> | [nashorn](https://github.com/openjdk/nashorn) | 2954<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=hermes">hermes</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [hermes](https://github.com/facebook/hermes) | 1487<br>36M<br>41/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=quickjs">quickjs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 1196<br>1M<br>1170/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=goant">goant</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" width="20" style="vertical-align: middle;"/> | [goant](https://github.com/robomotionio/goant) | 981<br>11.1M<br>88/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine in pure Go |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=llrt">llrt</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [llrt](https://github.com/awslabs/llrt) | 925<br>14.2M<br>65/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=txiki.js">txiki.js</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 818<br>4.1M<br>201/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=quickjs-ng">quickjs-ng</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [quickjs](https://github.com/quickjs-ng/quickjs) | 806<br>1.7M<br>471/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=rquickjs">rquickjs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 788<br>1.5M<br>525/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=primjs">primjs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 757<br>831.3K<br>932/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=njs">njs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 730<br>1.9M<br>391/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=ladybird">ladybird</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="20" style="vertical-align: middle;"/> | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 696<br>43.8M<br>15/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=quickjs-emscripten">quickjs-emscripten</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" style="vertical-align: middle;"/> | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 519<br>0<br>0/M | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=duktape">duktape</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 494<br>370.4K<br>1365/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=lumen">lumen</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [lumen](https://github.com/lucid-softworks/lumen) | 468<br>10.9M<br>42/M | ✅unix<br>✅macArm<br>❌windows | A from-scratch JavaScript engine in Rust — std only, zero deps, 100% test262 (53,376/53,376) |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=mujs-one">mujs-one</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [mujs-one](https://github.com/ahaoboy/mujs-one) | 370<br>685K<br>553/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=kiesel">kiesel</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg" width="20" style="vertical-align: middle;"/> | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 350<br>13.5M<br>25/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=mujs">mujs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 341<br>378.8K<br>921/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=ringo">ringo</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="20" style="vertical-align: middle;"/> | [ringojs](https://github.com/ringo/ringojs) | 315<br>0<br>0/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=paserati">paserati</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" width="20" style="vertical-align: middle;"/> | [paserati](https://github.com/nooga/paserati) | 311<br>13.7M<br>22/M | ✅unix<br>✅macArm<br>✅windows | TypeScript runtime implementation written in Go. **cough** |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=goja">goja</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" width="20" style="vertical-align: middle;"/> | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 273<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=xst">xst</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [moddable](https://github.com/Moddable-OpenSource/moddable) | 268<br>2M<br>132/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=es5">es5</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [es5](https://github.com/ahaoboy/es5) | 260<br>2.4M<br>107/M | ✅unix<br>✅macArm<br>✅windows | A ES5 JavaScript engine written in Rust |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=jint">jint</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width="20" style="vertical-align: middle;"/> | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 190<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=boa">boa</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [boa](https://github.com/boa-dev/boa) | 168<br>25.3M<br>6/M | ✅unix<br>✅macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=JerryScript">JerryScript</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K<br>0/M | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=nova">nova</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" width="20" style="vertical-align: middle;"/> | [nova](https://github.com/trynova/nova) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=engine262">engine262</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" style="vertical-align: middle;"/> | [engine262](https://github.com/engine262/engine262) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=rhino">rhino</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="20" style="vertical-align: middle;"/> | [rhino](https://github.com/mozilla/rhino)<br><br>[rhino-cli](https://github.com/ahaoboy/rhino-cli) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=hako">hako</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=ant">ant</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="20" style="vertical-align: middle;"/> | [ant](https://github.com/theMackabu/ant) | 0<br>11.3K<br>0/M | ❌unix<br>❌macArm<br>❌windows | javascript for 🐜's, a tiny runtime with big ambitions |
| <a target="__blank" href="https://ahaoboy.github.io/js-engine-benchmark/?selectEngines=zjs">zjs</a> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg" width="20" style="vertical-align: middle;"/> | [zjs](https://github.com/aneryu/zjs) | 0<br>0<br>0/M | ❌unix<br>❌macArm<br>❌windows | A Zig-native JavaScript engine, source-aligned with QuickJS. |

## bench
8/19/2026, 4:39:17 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | bare | dune | lo | node | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | quickjs | goant | llrt | txiki.js | quickjs-ng | rquickjs | primjs | njs | ladybird | quickjs-emscripten | duktape | lumen | mujs-one | mujs | xst | JerryScript | kiesel | ringo | paserati | goja | es5 | jint | boa | ant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 15.4.0 |  | 1.4.0 | 2.9.5 |  | 0.11.3 |  | 26.7.0 | 1.13.0.0.beta | 147.0 |  |  | 25.2.4 |  | 0.12.0 | 2026.06.04 | v0.1.0.7ed32b3 | 0.8.0.beta | 24.12.0 | 0.16.1 |  |  | 0.9.2 |  |  | 2.99.99 | 0.1.3.562a007 |  | 1.3.8 | 17.9.1 | 3.0.0 | 0.4.0.dev | 4.0.0 | 0.9.10 |  | 0.1.1 6593acf |  | 0.21.1 | ant.[options] [target [target2 [target3] ...]]
Options: 
  .help, .h              print this message and exit
  .projecthelp, .p       print project help information and exit
  .version               print the version information and exit
  .diagnostics           print information that might be helpful to
                         diagnose or report problems and exit
  .quiet, .q             be extra quiet
  .silent, .S            print nothing but task outputs and build failures
  .verbose, .v           be extra verbose
  .debug, .d             print debugging information
  .emacs, .e             produce logging information without adornments
  .lib <path>            specifies a path to search for jars and classes
  .logfile <file>        use given file for log
    .l     <file>                ''
  .logger <classname>    the class which is to perform logging
  .listener <classname>  add an instance of class as a project listener
  .noinput               do not allow interactive input
  .buildfile <file>      use given buildfile
    .file    <file>              ''
    .f       <file>              ''
  .D<property>=<value>   use value for given property
  .keep.going, .k        execute all targets that do not depend
                         on failed target(s)
  .propertyfile <name>   load all properties from file with .D
                         properties taking precedence
  .inputhandler <class>  the class which will handle input requests
  .find <file>           (s)earch for buildfile towards the root of
    .s  <file>           the filesystem and use it
  .nice  number          A niceness value for the main thread:
                         1 (lowest) to 10 (highest); 5 is the default
  .nouserlib             Run ant without using the jar files from
                         ${user.home}/.ant/lib
  .noclasspath           Run ant without using CLASSPATH
  .autoproxy             Java1.5+: use the OS proxy settings
  .main <class>          override Ant's normal entry point |
| Total size | 65M | 33.8M | 77M | 91.2M | 43M | 64.5M | 40.7M | 109.4M | 19.3M | 40.8M | 33.2M | 44.7M | 179.3M | 0 | 36M | 1M | 11.1M | 14.2M | 4.1M | 1.7M | 1.5M | 831.3K | 1.9M | 43.8M | 0 | 370.4K | 10.9M | 685K | 378.8K | 2M | 454.2K | 13.5M | 0 | 13.7M | 13.2M | 2.4M | 69M | 25.3M | 11.3K |
| Exe size | 908.2K | 33.8M | 77M | 91.2M | 43M | 64.5M | 40.7M | 109.4M | 472.2K | 40.8M | 33.2M | 44.7M | 764.2K | 0 | 36M | 1M | 11.1M | 14.2M | 4.1M | 1.7M | 1.5M | 831.3K | 1.9M | 43.8M | 0 | 370.4K | 10.9M | 685K | 378.8K | 2M | 454.2K | 13.5M | 0 | 13.7M | 13.2M | 2.4M | 69M | 25.3M | 11.3K |
| Dll size | 64.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 178.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 42624 | 40901 | 41317 | 34462 | 31059 | 33375 | 33127 | 34215 | 23486 | 14431 | 12740 | 13549 | 36640 | 13249 | 1079 | 844 | 1311 | 705 | 706 | 557 | 605 | 627 | 558 | 619 | 399 | 292 | 302 | 246 | 223 | 90 | 280 | 229 | 158 | 157 | 204 | 143 | 106 | 108 |  |
| DeltaBlue | 105809 | 61477 | 57979 | 78469 | 77001 | 81120 | 75494 | 79117 | 24836 | 13766 | 12800 | 12357 | 21535 | 348 | 1053 | 760 | 717 | 691 | 680 | 615 | 603 | 619 | 549 | 575 | 412 | 324 | 353 | 349 | 308 | 165 | 283 | 198 | 198 | 220 | 251 | 197 | 115 | 118 |  |
| Crypto | 43042 | 50652 | 49525 | 41834 | 41582 | 41836 | 41106 | 38225 | 31323 | 19683 | 20230 | 18052 | 15119 | 8827 | 1349 | 840 | 1933 | 709 | 580 | 367 | 606 | 556 | 871 | 995 | 429 | 778 | 272 | 184 | 179 | 329 | 297 | 239 | 149 | 131 | 121 | 115 | 99 | 104 |  |
| RayTrace | 119138 | 120174 | 96791 | 74961 | 71261 | 74443 | 64083 | 70743 | 35854 | 30044 | 27916 | 25922 | 3337 | 1251 | 1551 | 1565 | 303 | 1211 | 1050 | 1232 | 1114 | 964 | 680 | 912 | 462 | 561 | 1288 | 498 | 460 | 508 | 347 | 324 | 479 | 350 | 263 | 258 | 258 | 265 |  |
| EarleyBoyer | 83811 | 69348 | 49483 | 73642 | 67662 | 74141 | 69218 | 72784 | 7099 | 41412 | 37701 | 36154 | 19316 | 1469 | 3353 | 2063 | 636 | 1876 | 1713 | 1753 | 1292 | 1339 | 1678 | 1237 | 905 | 556 | 552 | 501 | 453 | 325 |  | 439 | 578 | 580 | 489 | 388 | 284 | 317 |  |
| RegExp | 11570 | 13847 | 14518 | 10675 | 10263 | 10525 | 8801 | 10385 | 7592 | 8901 | 8702 | 8654 | 834 | 945 | 541 | 396 | 267 | 259 | 223 | 280 | 219 | 228 | 114 | 67 | 182 | 131 | 175 | 213 | 195 | 94 |  | 171 | 458 | 386 | 206 | 321 | 245 | 50 |  |
| Splay | 42017 | 36919 | 34968 | 36891 | 37372 | 27666 | 32254 | 13040 | 19250 | 23869 | 12973 | 11939 | 1731 | 5964 | 3085 | 3297 | 1768 | 2428 | 1856 | 2511 | 2151 | 1736 | 1931 | 1221 | 1305 | 1280 | 1488 | 844 | 785 | 399 |  | 1184 | 989 | 1107 | 966 | 732 | 471 | 484 |  |
| NavierStokes | 38842 | 39504 | 34212 | 38655 | 38617 | 38694 | 38321 | 38803 | 36470 | 21876 | 21876 | 22090 | 14840 | 13746 | 1796 | 1838 | 5197 | 1089 | 963 | 938 | 988 | 982 | 1208 | 1680 | 750 | 929 | 425 | 494 | 468 | 880 |  | 726 | 165 | 226 | 195 | 276 | 163 | 230 |  |
| Score | 49594 | 46387 | 42100 | 41904 | 40404 | 40362 | 38631 | 35966 | 19919 | 19692 | 17444 | 16839 | 7982 | 2954 | 1487 | 1196 | 981 | 925 | 818 | 806 | 788 | 757 | 730 | 696 | 519 | 494 | 468 | 370 | 341 | 268 |  | 350 | 315 | 311 | 273 | 260 | 190 | 168 |  |
| Score/MB | 763 | 1372 | 547 | 459 | 940 | 625 | 950 | 328 | 1031 | 482 | 525 | 376 | 44 |  | 41 | 1170 | 88 | 65 | 201 | 471 | 525 | 932 | 391 | 15 |  | 1365 | 42 | 553 | 921 | 132 |  | 25 |  | 22 | 20 | 107 | 2 | 6 |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 26 | 37 | 34 | 37 | 51 | 44 | 50 | 49 | 52 | 52 | 62 | 77 | 62 | 69 | 73 | 82 | 88 | 130 | 31 | 86 | 101 | 99 | 116 | 110 | 143 | 178 |  |
### macos-arm64
| Engine | v8 | JavaScriptCore | deno | dune | bare | bun | node | spidermonkey | spiderfire | mozjs | graaljs | lumen | quickjs | hermes | quickjs-ng | goant | primjs | txiki.js | jjs | llrt | rquickjs | ladybird | duktape | njs | quickjs-emscripten | mujs | xst | JerryScript | kiesel | paserati | es5 | ringo | goja | boa | jint | ant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 15.4.8 |  | 2.9.5 | 0.11.3 |  | 1.4.0 | 26.7.0 | 147.0 |  |  | 25.2.4 | 0.1.3.562a007 | 2026.06.04 | 0.12.0 | 0.16.1 | v0.1.0.7ed32b3 |  | 24.12.0 |  | 0.8.0.beta |  |  | 2.99.99 | 0.9.2 |  | 1.3.8 | 17.9.1 | 3.0.0 | 0.4.0.dev | 0.9.10 | 0.1.1 6593acf | 4.0.0 |  | 0.21.1 |  | ant.[options] [target [target2 [target3] ...]]
Options: 
  .help, .h              print this message and exit
  .projecthelp, .p       print project help information and exit
  .version               print the version information and exit
  .diagnostics           print information that might be helpful to
                         diagnose or report problems and exit
  .quiet, .q             be extra quiet
  .silent, .S            print nothing but task outputs and build failures
  .verbose, .v           be extra verbose
  .debug, .d             print debugging information
  .emacs, .e             produce logging information without adornments
  .lib <path>            specifies a path to search for jars and classes
  .logfile <file>        use given file for log
    .l     <file>                ''
  .logger <classname>    the class which is to perform logging
  .listener <classname>  add an instance of class as a project listener
  .noinput               do not allow interactive input
  .buildfile <file>      use given buildfile
    .file    <file>              ''
    .f       <file>              ''
  .D<property>=<value>   use value for given property
  .keep.going, .k        execute all targets that do not depend
                         on failed target(s)
  .propertyfile <name>   load all properties from file with .D
                         properties taking precedence
  .inputhandler <class>  the class which will handle input requests
  .find <file>           (s)earch for buildfile towards the root of
    .s  <file>           the filesystem and use it
  .nice  number          A niceness value for the main thread:
                         1 (lowest) to 10 (highest); 5 is the default
  .nouserlib             Run ant without using the jar files from
                         ${user.home}/.ant/lib
  .noclasspath           Run ant without using CLASSPATH
  .autoproxy             Java1.5+: use the OS proxy settings
  .main <class>          override Ant's normal entry point |
| Total size | 28.6M | 79.2M | 77.1M | 56.5M | 32.8M | 61.2M | 100.6M | 134.9M | 40M | 29.8M | 174.5M | 7.9M | 950.3K | 13.9M | 1.1M | 10.6M | 1.5M | 3.4M | 0 | 11.8M | 1.3M | 40.2M | 431.4K | 2M | 0 | 395.5K | 1.5M | 482.8K | 12.5M | 12.9M | 2M | 0 | 12.7M | 22.4M | 75.4M | 0.2K |
| Exe size | 28.6M | 737.1K | 77.1M | 56.5M | 32.8M | 61.2M | 100.6M | 67.5M | 40M | 29.8M | 92.2K | 7.9M | 950.3K | 7M | 1.1M | 10.6M | 1.5M | 3.4M | 0 | 11.8M | 1.3M | 40.2M | 431.4K | 1.5M | 0 | 395.5K | 1.5M | 482.8K | 12.5M | 12.9M | 2M | 0 | 12.7M | 22.4M | 75.4M | 0.2K |
| Dll size | 0 | 78.5M | 0 | 0 | 0 | 0 | 0 | 67.5M | 0 | 0 | 174.4M | 0 | 0 | 7M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 560.1K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 33339 | 42790 | 53846 | 53550 | 37635 | 43654 | 39807 | 13185 | 12077 | 11650 | 27839 | 9768 | 1170 | 1078 | 1050 | 1554 | 991 | 1120 | 5391 | 736 | 810 | 683 | 436 | 634 | 506 | 313 | 96 | 179 | 315 | 236 | 160 | 165 | 271 | 140 | 113 |  |
| DeltaBlue | 110840 | 51843 | 91256 | 87507 | 72736 | 56749 | 73847 | 15121 | 12959 | 10083 | 20120 | 856 | 1120 | 1027 | 973 | 1199 | 1067 | 1096 | 295 | 923 | 904 | 720 | 528 | 642 | 439 | 405 | 172 | 198 | 245 | 305 | 227 | 133 | 312 | 139 | 127 |  |
| Crypto | 51170 | 62552 | 49185 | 47773 | 49348 | 60543 | 44802 | 21679 | 18492 | 16081 | 21449 | 8885 | 1209 | 1231 | 950 | 2435 | 1428 | 988 | 3847 | 568 | 618 | 1118 | 1100 | 950 | 477 | 237 | 355 | 224 | 374 | 170 | 164 | 144 | 150 | 131 | 96 |  |
| RayTrace | 141708 | 125724 | 71039 | 73999 | 81769 | 95015 | 85321 | 35854 | 35044 | 35188 | 5533 | 2100 | 2580 | 1951 | 2308 | 474 | 1513 | 1562 | 604 | 1627 | 1440 | 1152 | 921 | 734 | 667 | 751 | 586 | 266 | 423 | 432 | 341 | 584 | 296 | 307 | 243 |  |
| EarleyBoyer | 100641 | 82872 | 80719 | 81545 | 76556 | 50064 | 82624 | 42874 | 35175 | 33146 | 36363 | 1369 | 2970 | 4314 | 2836 | 1012 | 1521 | 2537 | 690 | 2266 | 1773 | 1898 | 987 | 1456 | 1217 | 834 | 354 |  | 556 | 782 | 488 | 629 | 563 | 399 | 277 |  |
| RegExp | 14155 | 22137 | 12183 | 12025 | 10494 | 14881 | 10686 | 10466 | 10183 | 7291 | 1264 | 857 | 446 | 548 | 394 | 414 | 237 | 262 | 596 | 275 | 241 | 91 | 206 | 152 | 228 | 278 | 274 |  | 176 | 524 | 416 | 514 | 189 | 66 | 151 |  |
| Splay | 45668 | 35049 | 39067 | 30690 | 39303 | 34487 | 18506 | 22956 | 13650 | 14465 | 1986 | 4938 | 5085 | 3472 | 4331 | 2637 | 3619 | 2535 | 893 | 2971 | 2405 | 2445 | 1911 | 1200 | 1687 | 969 | 443 |  | 983 | 1315 | 698 | 842 | 846 | 562 | 427 |  |
| NavierStokes | 32731 | 34577 | 33950 | 31874 | 33734 | 27640 | 34064 | 18051 | 18105 | 15932 | 26659 | 19253 | 2413 | 1356 | 2009 | 5184 | 3419 | 1772 | 2933 | 964 | 952 | 1583 | 1287 | 1470 | 793 | 565 | 922 |  | 769 | 235 | 330 | 167 | 241 | 297 | 168 |  |
| Score | 52425 | 49956 | 46641 | 44683 | 43036 | 42233 | 39767 | 20298 | 17545 | 15706 | 10619 | 3389 | 1689 | 1527 | 1470 | 1369 | 1337 | 1242 | 1188 | 1014 | 945 | 899 | 765 | 759 | 634 | 481 | 329 |  | 416 | 401 | 314 | 309 | 308 | 208 | 178 |  |
| Score/MB | 1832 | 630 | 604 | 790 | 1311 | 690 | 395 | 150 | 438 | 527 | 60 | 430 | 1820 | 109 | 1283 | 128 | 888 | 370 |  | 85 | 732 | 22 | 1816 | 376 |  | 1245 | 213 |  | 33 | 31 | 154 |  | 24 | 9 | 2 |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 27 | 31 | 33 | 35 | 38 | 41 | 40 | 49 | 47 | 48 | 63 | 51 | 61 | 56 | 63 | 102 | 39 | 76 | 85 | 143 | 98 | 105 | 144 | 153 |  |
### windows
| Engine | v8 | JavaScriptCore | deno | node | dune | bun | ChakraCore | spidermonkey | spiderfire | graaljs | quickjs | hermes | goant | quickjs-ng | rquickjs | quickjs-emscripten | llrt | duktape | mujs | txiki.js | xst | kiesel | paserati | goja | es5 | jint | boa | ant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 15.4.8 |  | 2.9.5 | 26.7.0 | 0.11.3 | 1.4.0 | 1.11.24.0 | 147.0 |  | 25.2.4 | 2026.06.04 | 0.12.0 | v0.1.0.7ed32b3 | 0.16.1 |  |  | 0.8.0.beta | 2.7.0 | 1.3.8 | 24.12.0 |  | 0.4.0.dev | 0.9.10 |  | 0.1.1 6593acf |  | 0.21.1 | 14.0.ff84a70d.0 |
| Total size | 64.7M | 125.6M | 123.7M | 133.6M | 94.6M | 112.3M | 15.6M | 53.7M | 77.3M | 188.3M | 8.9M | 89.6M | 18.4M | 13.2M | 9.2M | 0 | 45.6M | 8.1M | 8.2M | 40.1M | 6.5M | 28M | 21M | 20.5M | 15.4M | 99.1M | 51.1M | 47.9M |
| Exe size | 32.4M | 344.5K | 92.8M | 98.4M | 61.5M | 84.8M | 334K | 34.8M | 42.6M | 378.5K | 1.1M | 3M | 11.3M | 1.6M | 1.4M | 0 | 14.6M | 329.5K | 400.5K | 4.1M | 1.3M | 19.6M | 13.9M | 13.3M | 2.4M | 68.8M | 26.4M | 12.4M |
| Dll size | 32.4M | 125.2M | 30.9M | 35.3M | 33.1M | 27.5M | 15.3M | 18.9M | 34.7M | 187.9M | 7.9M | 86.5M | 7.1M | 11.6M | 7.8M | 0 | 31M | 7.8M | 7.8M | 36M | 5.2M | 8.4M | 7.1M | 7.1M | 13M | 30.3M | 24.6M | 35.4M |
| Richards | 43379 | 37664 | 40333 | 40975 | 43898 | 40276 | 24500 | 13715 | 12825 | 46772 | 851 | 876 | 1315 | 573 | 624 | 529 | 425 | 230 | 265 | 478 |  | 179 | 193 | 234 | 161 | 122 | 134 | 632 |
| DeltaBlue | 105346 | 45674 | 82912 | 75388 | 59711 | 43248 | 29072 | 15577 | 13819 | 30394 | 699 | 738 | 846 | 547 | 553 | 570 | 416 | 279 | 369 | 328 |  | 172 | 235 | 285 | 217 | 143 | 136 | 1450 |
| Crypto | 43446 | 50801 | 47326 | 46419 | 41703 | 51871 | 33629 | 22376 | 15878 | 22285 | 1033 | 1070 | 2533 | 592 | 500 | 501 | 519 | 333 | 188 | 500 |  | 282 | 134 | 134 | 127 | 112 | 109 |  |
| RayTrace | 146148 | 131644 | 95015 | 88281 | 90131 | 91149 | 52794 | 36075 | 29600 | 3182 | 1545 | 1278 | 363 | 1492 | 915 | 548 | 719 | 481 | 460 | 200 |  | 288 | 378 | 279 | 242 | 306 | 292 | 930 |
| EarleyBoyer | 104626 | 78805 | 84857 | 82794 | 73117 | 40067 | 45360 | 44329 | 38572 | 29866 | 1909 | 2912 | 711 | 1537 | 1175 | 1094 | 1137 | 536 | 625 | 410 |  | 423 | 626 | 542 | 326 | 346 | 366 | 1798 |
| RegExp | 11501 | 20778 | 10717 | 10313 | 9670 | 13351 | 10536 | 9589 | 8637 | 1152 | 429 | 492 | 258 | 386 | 205 | 214 | 221 | 110 | 243 | 85 |  | 172 | 384 | 222 | 310 | 353 | 56 | 364 |
| Splay | 38236 | 26753 | 27601 | 12110 | 15933 | 26925 | 22500 | 20088 | 11819 | 2089 | 3243 | 2613 | 1414 | 2771 | 1392 | 1425 | 1414 | 1019 | 758 | 404 |  | 1009 | 1134 | 813 | 721 | 455 | 529 | 1672 |
| NavierStokes | 43543 | 33916 | 41552 | 44223 | 38694 | 34098 | 38990 | 24881 | 23206 | 42103 | 2799 | 1353 | 5512 | 1367 | 734 | 808 | 840 | 1303 | 522 | 855 |  | 888 | 227 | 227 | 348 | 177 | 246 | 871 |
| Score | 52547 | 45092 | 44610 | 39384 | 37942 | 37658 | 29211 | 20917 | 17186 | 11496 | 1277 | 1206 | 1049 | 942 | 666 | 622 | 612 | 411 | 387 | 343 |  | 336 | 330 | 294 | 269 | 222 | 188 |  |
| Score/MB | 811 | 359 | 360 | 294 | 400 | 335 | 1872 | 389 | 222 | 61 | 142 | 13 | 56 | 71 | 72 |  | 13 | 50 | 47 | 8 |  | 11 | 15 | 14 | 17 | 2 | 3 |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 36 | 37 | 48 | 44 | 57 | 56 | 56 | 81 | 76 | 97 | 132 | 82 | 95 | 106 | 189 | 127 | 161 | 42 |
