(ns admin.core
  (:require [reagent.core :as r]
            [users.app]))

(def app-root
  (.getElementById js/document "cljs-app"))

(def view
  (.getAttribute app-root "data-view"))

(def app
  (case view
    "users" users.app/app))

(when [app-root]
  (r/render-component [app] app-root))
