(ns users.state
  (:require [reagent.core :as r]
            [re-frisk.core :as f]))

(defonce state
  (r/atom {:users []}))

(defn users [] (:users @state))

(defn set-data [new-state]
  (swap! state merge new-state)
  (f/enable-frisk!)
  (f/add-data :state state))
