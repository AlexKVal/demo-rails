(def cljs-users
  {:source-paths ["cljs"]
   :figwheel true
   :compiler {:main "users.core"
              :asset-path "/assets/cljs-users.out"
              :output-dir "lib/assets/cljs/cljs-users.out"
              :output-to  "lib/assets/cljs/cljs-users.js"
              :source-map-timestamp true
              :preloads ['devtools.preload]}})

(def cljs-feed
  {:source-paths ["cljs"]
   :figwheel true
   :compiler {:main "feed.core"
              :asset-path "/assets/cljs-feed.out"
              :output-dir "lib/assets/cljs/cljs-feed.out"
              :output-to  "lib/assets/cljs/cljs-feed.js"
              :source-map-timestamp true
              :preloads ['devtools.preload]}})


(defproject hb "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [cljs-gravatar "0.1.2"]
                 [reagent "0.7.0"]
                 [proto-repl "0.3.1"]
                 [re-frisk "0.3.2"]
                 [binaryage/devtools "0.9.1"]]

  :plugins [[lein-figwheel "0.5.13"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :clean-targets ^{:protect false} ["lib/assets/cljs/"]

  :cljsbuild {:builds
              {:cljs-users ~cljs-users
               :cljs-feed  ~cljs-feed}})
