(ns admin.gravatar
  (:require [reagent.core :as r]
            [cljs-gravatar.core :as gravatar]))

(defn gravatar-img [email & {:keys [size] :or {size 80}}]
  (if (empty? email)
    [:text "no email"]
    (let [url (gravatar/url email :size size)]
      [:img {:src url :alt email :class "gravatar"}])))
