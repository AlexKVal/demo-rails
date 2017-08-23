(ns feed.state
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {:microposts []}))
