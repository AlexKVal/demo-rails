(ns users.state
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {:users []}))

(defn users [] (:users @state))

(defn set-data [new-state]
  (swap! state merge new-state))
