(ns users.app
  (:require [reagent.core :as r]
            [admin.gravatar :refer [gravatar-img]]))

(defonce users (r/atom {}))

(reset! users [{:id 1 :name "AlexKVal" :email "alexkval@gmail.com" :microposts_count 30}
               {:id 2 :name "John Dow" :email "example-1@railstutorial.org" :microposts_count 10}
               {:id 3 :name "Ivanov-AA" :email "example-2@railstutorial.org" :microposts_count 11}])


(defn user-item [user]
  [:li.list-group-item
   [gravatar-img (:email user) :size 50]
   [:a {:href "#"} (:name user)]
   [:span " | "]
   [:span.label.label-info.microposts-count (:microposts_count user)]])

(defn users-list []
  [:ul.list-group
   (for [user @users]
     ^{:key (:id user)} [user-item user])])

(defn app []
  [:div.row
   [:div.col-sm-6
    [users-list]]])
