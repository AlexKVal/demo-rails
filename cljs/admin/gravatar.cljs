(ns admin.gravatar
  (:require [reagent.core :as r]
            [cljs-hash.md5 :refer [md5]]
            [clojure.string :as str]))

(defn- email-hash [email]
  (md5 (str/lower-case (str email))))

(defn gravatar-img [email & {:keys [size] :or {size 80}}]
  (let [url (str "https://secure.gravatar.com/avatar/" (email-hash email) "?s=" size)]
    [:img {:src url :alt email :class "gravatar"}]))
