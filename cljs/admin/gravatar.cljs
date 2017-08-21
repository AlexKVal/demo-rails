(ns admin.gravatar
  (:require [reagent.core :as r]
            [cljs-hash.md5 :refer [md5]]
            [clojure.string :as str]))

(defn- email-hash [email]
  (md5 (str/lower-case (str email))))

(defn- gravatar-url [email & {:keys [size] :or {size 80}}]
  (str "https://secure.gravatar.com/avatar/" (email-hash email) "?s=" size))

(defn gravatar-img [{:keys [email name]}]
  [:img {:src (gravatar-url email) :alt name :class "gravatar"}])
