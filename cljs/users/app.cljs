(ns users.app
  (:require [users.state :as state]
            [admin.gravatar :refer [gravatar-img]]))

(defn user-item [user]
  [:li.list-group-item
   [gravatar-img (:email user) :size 50]
   [:a {:href "#"} (:name user)]
   [:span " | "]
   [:span.label.label-info.microposts-count (:microposts-count user)]])

(defn users-list []
  [:ul.list-group
   (for [user (state/users)]
     ^{:key (:id user)} [user-item user])])

(defn app [init-data]
  (state/set-data init-data)
  [:div.row
   [:div.col-sm-6
    [users-list]]])
