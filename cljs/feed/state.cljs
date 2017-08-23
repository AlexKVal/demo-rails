(ns feed.state
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {:microposts []}))

(reset! state {:microposts
               [{:id 11
                 :content "This is IT guys"
                 :picture-url "/uploads/e5a302b4-84cd-4516-8d02-14b0dfc96ada.jpg"
                 :posted-time-ago "Posted less than a minute ago."
                 :user {:id 1 :name "AlexKVal" :email "alexkval@gmail.com"}}
                {:id 12
                  :content "In veniam ea dignissimos tempore quam sit et."
                  :picture-url ""
                  :posted-time-ago "Posted 9 days ago."
                  :user {:id 1 :name "AlexKVal" :email "alexkval@gmail.com"}}
                {:id 13
                  :content "Et autem temporibus deserunt dolorem maxime eveniet enim non."
                  :picture-url ""
                  :posted-time-ago "Posted 19 days ago."
                  :user {:id 2 :name "Ivanov-AA" :email "example-2@railstutorial.org"}}]})


(defn microposts [] (:microposts @state))

(defn set-data [new-state]
  (swap! state merge new-state))
