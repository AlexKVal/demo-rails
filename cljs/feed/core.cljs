(ns feed.core
  (:require [reagent.core :as r]
            [cognitect.transit :as transit]
            [feed.state :refer [state]]
            [feed.microposts :refer [microposts-feed]]
            [re-frisk.core :as f]))

(def init-data
  (if-let [element (.getElementById js/document "cljs-init-data")]
    (transit/read (transit/reader :json) (.-textContent element))))

(when init-data
  (when-let [app-root (.getElementById js/document "cljs-app")]
    (swap! state merge init-data)
    (f/enable-frisk!)
    (f/add-data :state state)
    (r/render [microposts-feed init-data] app-root)))
