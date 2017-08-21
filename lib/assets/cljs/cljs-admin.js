var CLOSURE_UNCOMPILED_DEFINES = {};
var CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="/assets/cljs-admin.out/goog/base.js"></script>');
document.write('<script src="/assets/cljs-admin.out/goog/deps.js"></script>');
document.write('<script src="/assets/cljs-admin.out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("devtools.preload");</script>');
document.write('<script>goog.require("process.env");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.build_admin\"); }</script>");
document.write('<script>goog.require("admin.core");</script>');