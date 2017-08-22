(defproject hb "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [cljs-gravatar "0.1.2"]
                 [reagent "0.7.0"]
                 [proto-repl "0.3.1"]
                 [re-frisk "0.3.2"]
                 [binaryage/devtools "0.9.1"]]

  :plugins [[lein-figwheel "0.5.13"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :clean-targets ^{:protect false} ["lib/assets/cljs/"]

  :cljsbuild {:builds
              {:admin
               {:source-paths ["cljs"]
                :figwheel true
                :compiler {:main admin.core
                           :asset-path "/assets/cljs-admin.out"
                           :output-dir "lib/assets/cljs/cljs-admin.out"
                           :output-to  "lib/assets/cljs/cljs-admin.js"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}}})
