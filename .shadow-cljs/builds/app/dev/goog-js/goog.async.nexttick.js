["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/nexttick.js"],"~:js","goog.provide(\"goog.async.nextTick\");\ngoog.provide(\"goog.async.throwException\");\ngoog.require(\"goog.debug.entryPointRegistry\");\ngoog.require(\"goog.dom\");\ngoog.require(\"goog.dom.TagName\");\ngoog.require(\"goog.dom.safe\");\ngoog.require(\"goog.functions\");\ngoog.require(\"goog.html.SafeHtml\");\ngoog.require(\"goog.html.TrustedResourceUrl\");\ngoog.require(\"goog.labs.userAgent.browser\");\ngoog.require(\"goog.labs.userAgent.engine\");\ngoog.require(\"goog.string.Const\");\n/**\n * @param {*} exception\n */\ngoog.async.throwException = function(exception) {\n  goog.global.setTimeout(function() {\n    throw exception;\n  }, 0);\n};\n/**\n * @param {function(this:SCOPE)} callback\n * @param {SCOPE=} opt_context\n * @param {boolean=} opt_useSetImmediate\n * @template SCOPE\n */\ngoog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {\n  var cb = callback;\n  if (opt_context) {\n    cb = goog.bind(callback, opt_context);\n  }\n  cb = goog.async.nextTick.wrapCallback_(cb);\n  if (goog.isFunction(goog.global.setImmediate) && (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {\n    goog.global.setImmediate(cb);\n    return;\n  }\n  if (!goog.async.nextTick.setImmediate_) {\n    goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_();\n  }\n  goog.async.nextTick.setImmediate_(cb);\n};\n/**\n * @private\n * @return {boolean}\n * @suppress {missingProperties}\n */\ngoog.async.nextTick.useSetImmediate_ = function() {\n  if (!goog.global.Window || !goog.global.Window.prototype) {\n    return true;\n  }\n  if (goog.labs.userAgent.browser.isEdge() || goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {\n    return true;\n  }\n  return false;\n};\n/** @private @type {function(function())} */ goog.async.nextTick.setImmediate_;\n/**\n * @private\n * @return {function(function())}\n */\ngoog.async.nextTick.getSetImmediateEmulator_ = function() {\n  /** @type {(!Function|undefined)} */ var Channel = goog.global[\"MessageChannel\"];\n  if (typeof Channel === \"undefined\" && typeof window !== \"undefined\" && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto()) {\n    /** @constructor */ Channel = function() {\n      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);\n      iframe.style.display = \"none\";\n      goog.dom.safe.setIframeSrc(iframe, goog.html.TrustedResourceUrl.fromConstant(goog.string.Const.EMPTY));\n      document.documentElement.appendChild(iframe);\n      var win = iframe.contentWindow;\n      var doc = win.document;\n      doc.open();\n      goog.dom.safe.documentWrite(doc, goog.html.SafeHtml.EMPTY);\n      doc.close();\n      var message = \"callImmediate\" + Math.random();\n      var origin = win.location.protocol == \"file:\" ? \"*\" : win.location.protocol + \"//\" + win.location.host;\n      var onmessage = goog.bind(function(e) {\n        if (origin != \"*\" && e.origin != origin || e.data != message) {\n          return;\n        }\n        this[\"port1\"].onmessage();\n      }, this);\n      win.addEventListener(\"message\", onmessage, false);\n      this[\"port1\"] = {};\n      this[\"port2\"] = {postMessage:function() {\n        win.postMessage(message, origin);\n      }};\n    };\n  }\n  if (typeof Channel !== \"undefined\" && !goog.labs.userAgent.browser.isIE()) {\n    var channel = new Channel;\n    var head = {};\n    var tail = head;\n    channel[\"port1\"].onmessage = function() {\n      if (head.next !== undefined) {\n        head = head.next;\n        var cb = head.cb;\n        head.cb = null;\n        cb();\n      }\n    };\n    return function(cb) {\n      tail.next = {cb:cb};\n      tail = tail.next;\n      channel[\"port2\"].postMessage(0);\n    };\n  }\n  if (typeof document !== \"undefined\" && \"onreadystatechange\" in goog.dom.createElement(goog.dom.TagName.SCRIPT)) {\n    return function(cb) {\n      var script = goog.dom.createElement(goog.dom.TagName.SCRIPT);\n      script.onreadystatechange = function() {\n        script.onreadystatechange = null;\n        script.parentNode.removeChild(script);\n        script = null;\n        cb();\n        cb = null;\n      };\n      document.documentElement.appendChild(script);\n    };\n  }\n  return function(cb) {\n    goog.global.setTimeout(/** @type {function()} */ (cb), 0);\n  };\n};\n/**\n * @private\n * @param {function()} callback\n * @return {function()}\n */\ngoog.async.nextTick.wrapCallback_ = goog.functions.identity;\ngoog.debug.entryPointRegistry.register(/**\n * @param {function(!Function):!Function} transformer\n */\nfunction(transformer) {\n  goog.async.nextTick.wrapCallback_ = transformer;\n});\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Provides a function to schedule running a function as soon\n * as possible after the current JS execution stops and yields to the event\n * loop.\n *\n */\n\ngoog.provide('goog.async.nextTick');\ngoog.provide('goog.async.throwException');\n\ngoog.require('goog.debug.entryPointRegistry');\ngoog.require('goog.dom');\ngoog.require('goog.dom.TagName');\ngoog.require('goog.dom.safe');\ngoog.require('goog.functions');\ngoog.require('goog.html.SafeHtml');\ngoog.require('goog.html.TrustedResourceUrl');\ngoog.require('goog.labs.userAgent.browser');\ngoog.require('goog.labs.userAgent.engine');\ngoog.require('goog.string.Const');\n\n\n/**\n * Throw an item without interrupting the current execution context.  For\n * example, if processing a group of items in a loop, sometimes it is useful\n * to report an error while still allowing the rest of the batch to be\n * processed.\n * @param {*} exception\n */\ngoog.async.throwException = function(exception) {\n  // Each throw needs to be in its own context.\n  goog.global.setTimeout(function() { throw exception; }, 0);\n};\n\n\n/**\n * Fires the provided callbacks as soon as possible after the current JS\n * execution context. setTimeout(…, 0) takes at least 4ms when called from\n * within another setTimeout(…, 0) for legacy reasons.\n *\n * This will not schedule the callback as a microtask (i.e. a task that can\n * preempt user input or networking callbacks). It is meant to emulate what\n * setTimeout(_, 0) would do if it were not throttled. If you desire microtask\n * behavior, use {@see goog.Promise} instead.\n *\n * @param {function(this:SCOPE)} callback Callback function to fire as soon as\n *     possible.\n * @param {SCOPE=} opt_context Object in whose scope to call the listener.\n * @param {boolean=} opt_useSetImmediate Avoid the IE workaround that\n *     ensures correctness at the cost of speed. See comments for details.\n * @template SCOPE\n */\ngoog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {\n  var cb = callback;\n  if (opt_context) {\n    cb = goog.bind(callback, opt_context);\n  }\n  cb = goog.async.nextTick.wrapCallback_(cb);\n  // Note we do allow callers to also request setImmediate if they are willing\n  // to accept the possible tradeoffs of incorrectness in exchange for speed.\n  // The IE fallback of readystate change is much slower. See useSetImmediate_\n  // for details.\n  if (goog.isFunction(goog.global.setImmediate) &&\n      (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {\n    goog.global.setImmediate(cb);\n    return;\n  }\n\n  // Look for and cache the custom fallback version of setImmediate.\n  if (!goog.async.nextTick.setImmediate_) {\n    goog.async.nextTick.setImmediate_ =\n        goog.async.nextTick.getSetImmediateEmulator_();\n  }\n  goog.async.nextTick.setImmediate_(cb);\n};\n\n\n/**\n * Returns whether should use setImmediate implementation currently on window.\n *\n * window.setImmediate was introduced and currently only supported by IE10+,\n * but due to a bug in the implementation it is not guaranteed that\n * setImmediate is faster than setTimeout nor that setImmediate N is before\n * setImmediate N+1. That is why we do not use the native version if\n * available. We do, however, call setImmediate if it is a non-native function\n * because that indicates that it has been replaced by goog.testing.MockClock\n * which we do want to support.\n * See\n * http://connect.microsoft.com/IE/feedback/details/801823/setimmediate-and-messagechannel-are-broken-in-ie10\n *\n * @return {boolean} Whether to use the implementation of setImmediate defined\n *     on Window.\n * @private\n * @suppress {missingProperties} For \"Window.prototype.setImmediate\"\n */\ngoog.async.nextTick.useSetImmediate_ = function() {\n  // Not a browser environment.\n  if (!goog.global.Window || !goog.global.Window.prototype) {\n    return true;\n  }\n\n  // MS Edge has window.setImmediate natively, but it's not on Window.prototype.\n  // Also, there's no clean way to detect if the goog.global.setImmediate has\n  // been replaced by mockClock as its replacement also shows up as \"[native\n  // code]\" when using toString. Therefore, just always use\n  // goog.global.setImmediate for Edge. It's unclear if it suffers the same\n  // issues as IE10/11, but based on\n  // https://dev.modern.ie/testdrive/demos/setimmediatesorting/\n  // it seems they've been working to ensure it's WAI.\n  if (goog.labs.userAgent.browser.isEdge() ||\n      goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {\n    // Something redefined setImmediate in which case we decide to use it (This\n    // is so that we use the mockClock setImmediate).\n    return true;\n  }\n\n  return false;\n};\n\n\n/**\n * Cache for the setImmediate implementation.\n * @type {function(function())}\n * @private\n */\ngoog.async.nextTick.setImmediate_;\n\n\n/**\n * Determines the best possible implementation to run a function as soon as\n * the JS event loop is idle.\n * @return {function(function())} The \"setImmediate\" implementation.\n * @private\n */\ngoog.async.nextTick.getSetImmediateEmulator_ = function() {\n  // Create a private message channel and use it to postMessage empty messages\n  // to ourselves.\n  /** @type {!Function|undefined} */\n  var Channel = goog.global['MessageChannel'];\n  // If MessageChannel is not available and we are in a browser, implement\n  // an iframe based polyfill in browsers that have postMessage and\n  // document.addEventListener. The latter excludes IE8 because it has a\n  // synchronous postMessage implementation.\n  if (typeof Channel === 'undefined' && typeof window !== 'undefined' &&\n      window.postMessage && window.addEventListener &&\n      // Presto (The old pre-blink Opera engine) has problems with iframes\n      // and contentWindow.\n      !goog.labs.userAgent.engine.isPresto()) {\n    /** @constructor */\n    Channel = function() {\n      // Make an empty, invisible iframe.\n      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);\n      iframe.style.display = 'none';\n      goog.dom.safe.setIframeSrc(\n          iframe,\n          goog.html.TrustedResourceUrl.fromConstant(goog.string.Const.EMPTY));\n      document.documentElement.appendChild(iframe);\n      var win = iframe.contentWindow;\n      var doc = win.document;\n      doc.open();\n      goog.dom.safe.documentWrite(doc, goog.html.SafeHtml.EMPTY);\n      doc.close();\n      // Do not post anything sensitive over this channel, as the workaround for\n      // pages with file: origin could allow that information to be modified or\n      // intercepted.\n      var message = 'callImmediate' + Math.random();\n      // The same origin policy rejects attempts to postMessage from file: urls\n      // unless the origin is '*'.\n      var origin = win.location.protocol == 'file:' ?\n          '*' :\n          win.location.protocol + '//' + win.location.host;\n      var onmessage = goog.bind(function(e) {\n        // Validate origin and message to make sure that this message was\n        // intended for us. If the origin is set to '*' (see above) only the\n        // message needs to match since, for example, '*' != 'file://'. Allowing\n        // the wildcard is ok, as we are not concerned with security here.\n        if ((origin != '*' && e.origin != origin) || e.data != message) {\n          return;\n        }\n        this['port1'].onmessage();\n      }, this);\n      win.addEventListener('message', onmessage, false);\n      this['port1'] = {};\n      this['port2'] = {\n        postMessage: function() { win.postMessage(message, origin); }\n      };\n    };\n  }\n  if (typeof Channel !== 'undefined' && !goog.labs.userAgent.browser.isIE()) {\n    // Exclude all of IE due to\n    // http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/\n    // which allows starving postMessage with a busy setTimeout loop.\n    // This currently affects IE10 and IE11 which would otherwise be able\n    // to use the postMessage based fallbacks.\n    var channel = new Channel();\n    // Use a fifo linked list to call callbacks in the right order.\n    var head = {};\n    var tail = head;\n    channel['port1'].onmessage = function() {\n      if (head.next !== undefined) {\n        head = head.next;\n        var cb = head.cb;\n        head.cb = null;\n        cb();\n      }\n    };\n    return function(cb) {\n      tail.next = {cb: cb};\n      tail = tail.next;\n      channel['port2'].postMessage(0);\n    };\n  }\n  // Implementation for IE6 to IE10: Script elements fire an asynchronous\n  // onreadystatechange event when inserted into the DOM.\n  if (typeof document !== 'undefined' &&\n      'onreadystatechange' in goog.dom.createElement(goog.dom.TagName.SCRIPT)) {\n    return function(cb) {\n      var script = goog.dom.createElement(goog.dom.TagName.SCRIPT);\n      script.onreadystatechange = function() {\n        // Clean up and call the callback.\n        script.onreadystatechange = null;\n        script.parentNode.removeChild(script);\n        script = null;\n        cb();\n        cb = null;\n      };\n      document.documentElement.appendChild(script);\n    };\n  }\n  // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms\n  // or more.\n  // NOTE(user): This fallback is used for IE11.\n  return function(cb) {\n    goog.global.setTimeout(/** @type {function()} */ (cb), 0);\n  };\n};\n\n\n/**\n * Helper function that is overrided to protect callbacks with entry point\n * monitor if the application monitors entry points.\n * @param {function()} callback Callback function to fire as soon as possible.\n * @return {function()} The wrapped callback.\n * @private\n */\ngoog.async.nextTick.wrapCallback_ = goog.functions.identity;\n\n\n// Register the callback function as an entry point, so that it can be\n// monitored for exception handling, etc. This has to be done in this file\n// since it requires special code to handle all browsers.\ngoog.debug.entryPointRegistry.register(\n    /**\n     * @param {function(!Function): !Function} transformer The transforming\n     *     function.\n     */\n    function(transformer) { goog.async.nextTick.wrapCallback_ = transformer; });\n","~:compiled-at",1576397757729,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.nexttick.js\",\n\"lineCount\":136,\n\"mappings\":\"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\",\n\"sources\":[\"goog/async/nexttick.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Provides a function to schedule running a function as soon\\n * as possible after the current JS execution stops and yields to the event\\n * loop.\\n *\\n */\\n\\ngoog.provide('goog.async.nextTick');\\ngoog.provide('goog.async.throwException');\\n\\ngoog.require('goog.debug.entryPointRegistry');\\ngoog.require('goog.dom');\\ngoog.require('goog.dom.TagName');\\ngoog.require('goog.dom.safe');\\ngoog.require('goog.functions');\\ngoog.require('goog.html.SafeHtml');\\ngoog.require('goog.html.TrustedResourceUrl');\\ngoog.require('goog.labs.userAgent.browser');\\ngoog.require('goog.labs.userAgent.engine');\\ngoog.require('goog.string.Const');\\n\\n\\n/**\\n * Throw an item without interrupting the current execution context.  For\\n * example, if processing a group of items in a loop, sometimes it is useful\\n * to report an error while still allowing the rest of the batch to be\\n * processed.\\n * @param {*} exception\\n */\\ngoog.async.throwException = function(exception) {\\n  // Each throw needs to be in its own context.\\n  goog.global.setTimeout(function() { throw exception; }, 0);\\n};\\n\\n\\n/**\\n * Fires the provided callbacks as soon as possible after the current JS\\n * execution context. setTimeout(\\u2026, 0) takes at least 4ms when called from\\n * within another setTimeout(\\u2026, 0) for legacy reasons.\\n *\\n * This will not schedule the callback as a microtask (i.e. a task that can\\n * preempt user input or networking callbacks). It is meant to emulate what\\n * setTimeout(_, 0) would do if it were not throttled. If you desire microtask\\n * behavior, use {@see goog.Promise} instead.\\n *\\n * @param {function(this:SCOPE)} callback Callback function to fire as soon as\\n *     possible.\\n * @param {SCOPE=} opt_context Object in whose scope to call the listener.\\n * @param {boolean=} opt_useSetImmediate Avoid the IE workaround that\\n *     ensures correctness at the cost of speed. See comments for details.\\n * @template SCOPE\\n */\\ngoog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {\\n  var cb = callback;\\n  if (opt_context) {\\n    cb = goog.bind(callback, opt_context);\\n  }\\n  cb = goog.async.nextTick.wrapCallback_(cb);\\n  // Note we do allow callers to also request setImmediate if they are willing\\n  // to accept the possible tradeoffs of incorrectness in exchange for speed.\\n  // The IE fallback of readystate change is much slower. See useSetImmediate_\\n  // for details.\\n  if (goog.isFunction(goog.global.setImmediate) &&\\n      (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {\\n    goog.global.setImmediate(cb);\\n    return;\\n  }\\n\\n  // Look for and cache the custom fallback version of setImmediate.\\n  if (!goog.async.nextTick.setImmediate_) {\\n    goog.async.nextTick.setImmediate_ =\\n        goog.async.nextTick.getSetImmediateEmulator_();\\n  }\\n  goog.async.nextTick.setImmediate_(cb);\\n};\\n\\n\\n/**\\n * Returns whether should use setImmediate implementation currently on window.\\n *\\n * window.setImmediate was introduced and currently only supported by IE10+,\\n * but due to a bug in the implementation it is not guaranteed that\\n * setImmediate is faster than setTimeout nor that setImmediate N is before\\n * setImmediate N+1. That is why we do not use the native version if\\n * available. We do, however, call setImmediate if it is a non-native function\\n * because that indicates that it has been replaced by goog.testing.MockClock\\n * which we do want to support.\\n * See\\n * http://connect.microsoft.com/IE/feedback/details/801823/setimmediate-and-messagechannel-are-broken-in-ie10\\n *\\n * @return {boolean} Whether to use the implementation of setImmediate defined\\n *     on Window.\\n * @private\\n * @suppress {missingProperties} For \\\"Window.prototype.setImmediate\\\"\\n */\\ngoog.async.nextTick.useSetImmediate_ = function() {\\n  // Not a browser environment.\\n  if (!goog.global.Window || !goog.global.Window.prototype) {\\n    return true;\\n  }\\n\\n  // MS Edge has window.setImmediate natively, but it's not on Window.prototype.\\n  // Also, there's no clean way to detect if the goog.global.setImmediate has\\n  // been replaced by mockClock as its replacement also shows up as \\\"[native\\n  // code]\\\" when using toString. Therefore, just always use\\n  // goog.global.setImmediate for Edge. It's unclear if it suffers the same\\n  // issues as IE10/11, but based on\\n  // https://dev.modern.ie/testdrive/demos/setimmediatesorting/\\n  // it seems they've been working to ensure it's WAI.\\n  if (goog.labs.userAgent.browser.isEdge() ||\\n      goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {\\n    // Something redefined setImmediate in which case we decide to use it (This\\n    // is so that we use the mockClock setImmediate).\\n    return true;\\n  }\\n\\n  return false;\\n};\\n\\n\\n/**\\n * Cache for the setImmediate implementation.\\n * @type {function(function())}\\n * @private\\n */\\ngoog.async.nextTick.setImmediate_;\\n\\n\\n/**\\n * Determines the best possible implementation to run a function as soon as\\n * the JS event loop is idle.\\n * @return {function(function())} The \\\"setImmediate\\\" implementation.\\n * @private\\n */\\ngoog.async.nextTick.getSetImmediateEmulator_ = function() {\\n  // Create a private message channel and use it to postMessage empty messages\\n  // to ourselves.\\n  /** @type {!Function|undefined} */\\n  var Channel = goog.global['MessageChannel'];\\n  // If MessageChannel is not available and we are in a browser, implement\\n  // an iframe based polyfill in browsers that have postMessage and\\n  // document.addEventListener. The latter excludes IE8 because it has a\\n  // synchronous postMessage implementation.\\n  if (typeof Channel === 'undefined' && typeof window !== 'undefined' &&\\n      window.postMessage && window.addEventListener &&\\n      // Presto (The old pre-blink Opera engine) has problems with iframes\\n      // and contentWindow.\\n      !goog.labs.userAgent.engine.isPresto()) {\\n    /** @constructor */\\n    Channel = function() {\\n      // Make an empty, invisible iframe.\\n      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);\\n      iframe.style.display = 'none';\\n      goog.dom.safe.setIframeSrc(\\n          iframe,\\n          goog.html.TrustedResourceUrl.fromConstant(goog.string.Const.EMPTY));\\n      document.documentElement.appendChild(iframe);\\n      var win = iframe.contentWindow;\\n      var doc = win.document;\\n      doc.open();\\n      goog.dom.safe.documentWrite(doc, goog.html.SafeHtml.EMPTY);\\n      doc.close();\\n      // Do not post anything sensitive over this channel, as the workaround for\\n      // pages with file: origin could allow that information to be modified or\\n      // intercepted.\\n      var message = 'callImmediate' + Math.random();\\n      // The same origin policy rejects attempts to postMessage from file: urls\\n      // unless the origin is '*'.\\n      var origin = win.location.protocol == 'file:' ?\\n          '*' :\\n          win.location.protocol + '//' + win.location.host;\\n      var onmessage = goog.bind(function(e) {\\n        // Validate origin and message to make sure that this message was\\n        // intended for us. If the origin is set to '*' (see above) only the\\n        // message needs to match since, for example, '*' != 'file://'. Allowing\\n        // the wildcard is ok, as we are not concerned with security here.\\n        if ((origin != '*' && e.origin != origin) || e.data != message) {\\n          return;\\n        }\\n        this['port1'].onmessage();\\n      }, this);\\n      win.addEventListener('message', onmessage, false);\\n      this['port1'] = {};\\n      this['port2'] = {\\n        postMessage: function() { win.postMessage(message, origin); }\\n      };\\n    };\\n  }\\n  if (typeof Channel !== 'undefined' && !goog.labs.userAgent.browser.isIE()) {\\n    // Exclude all of IE due to\\n    // http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/\\n    // which allows starving postMessage with a busy setTimeout loop.\\n    // This currently affects IE10 and IE11 which would otherwise be able\\n    // to use the postMessage based fallbacks.\\n    var channel = new Channel();\\n    // Use a fifo linked list to call callbacks in the right order.\\n    var head = {};\\n    var tail = head;\\n    channel['port1'].onmessage = function() {\\n      if (head.next !== undefined) {\\n        head = head.next;\\n        var cb = head.cb;\\n        head.cb = null;\\n        cb();\\n      }\\n    };\\n    return function(cb) {\\n      tail.next = {cb: cb};\\n      tail = tail.next;\\n      channel['port2'].postMessage(0);\\n    };\\n  }\\n  // Implementation for IE6 to IE10: Script elements fire an asynchronous\\n  // onreadystatechange event when inserted into the DOM.\\n  if (typeof document !== 'undefined' &&\\n      'onreadystatechange' in goog.dom.createElement(goog.dom.TagName.SCRIPT)) {\\n    return function(cb) {\\n      var script = goog.dom.createElement(goog.dom.TagName.SCRIPT);\\n      script.onreadystatechange = function() {\\n        // Clean up and call the callback.\\n        script.onreadystatechange = null;\\n        script.parentNode.removeChild(script);\\n        script = null;\\n        cb();\\n        cb = null;\\n      };\\n      document.documentElement.appendChild(script);\\n    };\\n  }\\n  // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms\\n  // or more.\\n  // NOTE(user): This fallback is used for IE11.\\n  return function(cb) {\\n    goog.global.setTimeout(/** @type {function()} */ (cb), 0);\\n  };\\n};\\n\\n\\n/**\\n * Helper function that is overrided to protect callbacks with entry point\\n * monitor if the application monitors entry points.\\n * @param {function()} callback Callback function to fire as soon as possible.\\n * @return {function()} The wrapped callback.\\n * @private\\n */\\ngoog.async.nextTick.wrapCallback_ = goog.functions.identity;\\n\\n\\n// Register the callback function as an entry point, so that it can be\\n// monitored for exception handling, etc. This has to be done in this file\\n// since it requires special code to handle all browsers.\\ngoog.debug.entryPointRegistry.register(\\n    /**\\n     * @param {function(!Function): !Function} transformer The transforming\\n     *     function.\\n     */\\n    function(transformer) { goog.async.nextTick.wrapCallback_ = transformer; });\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"async\",\"throwException\",\"goog.async.throwException\",\"exception\",\"global\",\"setTimeout\",\"nextTick\",\"goog.async.nextTick\",\"callback\",\"opt_context\",\"opt_useSetImmediate\",\"cb\",\"bind\",\"wrapCallback_\",\"isFunction\",\"setImmediate\",\"useSetImmediate_\",\"setImmediate_\",\"getSetImmediateEmulator_\",\"goog.async.nextTick.useSetImmediate_\",\"Window\",\"prototype\",\"labs\",\"userAgent\",\"browser\",\"isEdge\",\"goog.async.nextTick.getSetImmediateEmulator_\",\"Channel\",\"window\",\"postMessage\",\"addEventListener\",\"engine\",\"isPresto\",\"iframe\",\"dom\",\"createElement\",\"TagName\",\"IFRAME\",\"style\",\"display\",\"safe\",\"setIframeSrc\",\"html\",\"TrustedResourceUrl\",\"fromConstant\",\"string\",\"Const\",\"EMPTY\",\"document\",\"documentElement\",\"appendChild\",\"win\",\"contentWindow\",\"doc\",\"open\",\"documentWrite\",\"SafeHtml\",\"close\",\"message\",\"Math\",\"random\",\"origin\",\"location\",\"protocol\",\"host\",\"onmessage\",\"e\",\"data\",\"isIE\",\"channel\",\"head\",\"tail\",\"next\",\"undefined\",\"SCRIPT\",\"script\",\"onreadystatechange\",\"script.onreadystatechange\",\"parentNode\",\"removeChild\",\"functions\",\"identity\",\"debug\",\"entryPointRegistry\",\"register\",\"transformer\"]\n}\n"]