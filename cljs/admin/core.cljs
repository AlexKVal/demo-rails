(ns admin.core
  (:require [reagent.core :as r]
            [cognitect.transit :as transit]
            [users.app]
            [feed.app]))

(def app-root
  (.getElementById js/document "cljs-app"))

(def view
  (.getAttribute app-root "data-view"))

(def app
  (case view
    "users" users.app/app
    "feed"  feed.app/app))

(def data-init (.getAttribute app-root "data-init"))

(defn read-init-data []
  (transit/read (transit/reader :json) data-init))

(when [app-root]
  (let [init-data (read-init-data)]
    (r/render [app init-data] app-root)))
