(ns admin.core
  (:require [reagent.core :as r]
            [admin.gravatar :refer [gravatar-img]]))

(defonce users (r/atom {}))

(reset! users [{:id 1 :name "AlexKVal" :email "alexkval@gmail.com"}
               {:id 2 :name "John Dow" :email "example-1@railstutorial.org"}
               {:id 3 :name "Ivanov-AA" :email "example-2@railstutorial.org"}])


(defn user-item [user]
  [:li.list-group-item
   [gravatar-img user]
   [:text (:name user)]])

(defn users-list []
  [:ul.list-group
   (for [user @users]
     ^{:key (:id user)} [user-item user])])

(defn app []
  [:div.row
   [:div.col-sm-6
    [users-list]]])

(when-let [element (.getElementById js/document "cljs-admin-app")]
  (r/render-component [app] element))
