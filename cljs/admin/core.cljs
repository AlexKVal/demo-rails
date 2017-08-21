(ns admin.core
  (:require [reagent.core :as r]))

(enable-console-print!)
(println "Hello from admin.core ClojureScript")

(defonce users (r/atom {}))

(reset! users [{:id 1 :name "Admin" :email "admin@example.com"}
               {:id 2 :name "John Dow" :email "john@me.com"}
               {:id 3 :name "Ivanov-AA" :email "ivanov@gmail.com"}])

(defn gravatar [{:keys [email]}]
  [:div email])


(defn user-item [user]
  [:li.list-group-item
   [gravatar user]
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
