(ns feed.app
  (:require [feed.state :as state]
            [admin.gravatar :refer [gravatar-img]]))

(defn micropost-item [micropost]
  (let [id          (:id micropost)
        picture-url (:picture-url micropost)
        user-email  (get-in micropost [:user :email])
        user-name   (get-in micropost [:user :name])]
    [:li.list-group-item.clearfix {:id (str "micropost-" id)}
     [:a {:href "#"}
      [gravatar-img user-email :size 50]]
     [:a {:href "#"} user-name]
     [:div.content
      [:text (:content micropost)]
      (when-not (empty? picture-url)
        [:img {:src picture-url :alt "attached picture"}])]
     [:div.timestamp.small
      [:text (:posted-time-ago micropost)]]]))

(defn microposts-list []
  [:ul.list-group.microposts
   (for [micropost (state/microposts)]
     ^{:key (:id micropost)} [micropost-item micropost])])

(defn app [init-data]
  (state/set-data init-data)
  [:div.row
   [:div.col-sm-6
    [microposts-list]]])
