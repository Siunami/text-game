["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/trustedtypes.js"],"~:js","goog.provide(\"goog.html.trustedtypes\");\n/** @package @const @type {?TrustedTypePolicy} */ goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + \"#html\") : null;\n","~:source","// Copyright 2018 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Policy to convert strings to Trusted Types. See\n * https://github.com/WICG/trusted-types for details.\n */\n\ngoog.provide('goog.html.trustedtypes');\n\n/** @package @const {?TrustedTypePolicy} */\ngoog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =\n    goog.TRUSTED_TYPES_POLICY_NAME ?\n    goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#html') :\n    null;\n","~:compiled-at",1576397757537,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.trustedtypes.js\",\n\"lineCount\":3,\n\"mappings\":\"AAmBAA,IAAAC,QAAA,CAAa,wBAAb,CAAA;AAGA,kDAAAD,IAAAE,KAAAC,aAAAC,qCAAA,GACIJ,IAAAK,0BAAA,GACAL,IAAAM,yBAAA,CAA8BN,IAAAK,0BAA9B,GAA+D,OAA/D,CADA,GAEA,IAHJ;;\",\n\"sources\":[\"goog/html/trustedtypes.js\"],\n\"sourcesContent\":[\"// Copyright 2018 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Policy to convert strings to Trusted Types. See\\n * https://github.com/WICG/trusted-types for details.\\n */\\n\\ngoog.provide('goog.html.trustedtypes');\\n\\n/** @package @const {?TrustedTypePolicy} */\\ngoog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =\\n    goog.TRUSTED_TYPES_POLICY_NAME ?\\n    goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#html') :\\n    null;\\n\"],\n\"names\":[\"goog\",\"provide\",\"html\",\"trustedtypes\",\"PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY\",\"TRUSTED_TYPES_POLICY_NAME\",\"createTrustedTypesPolicy\"]\n}\n"]