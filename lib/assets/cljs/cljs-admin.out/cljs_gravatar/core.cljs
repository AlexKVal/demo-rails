(ns cljs-gravatar.core
  (:require [goog.crypt :as crypt]
            [goog.crypt.Md5 :as Md5]
            [clojure.string :as str]))

(defn- digest [s]
  (let [hasher (goog.crypt.Md5.)]
    (.update hasher (crypt/stringToUtf8ByteArray (str/lower-case s)))
    (crypt/byteArrayToHex (.digest hasher))))

; options are borrowed from
; https://github.com/JulianBirch/cljs-clavatar/blob/master/src/clavatar/core.cljs
(defn url
  "Generates gravatar's url for a given email
   Options are:
      size    -- size of image
      rating  -- one of :pg, :g, :x,: r which are Parental Guidance,
                 General Audience, Explicit, and Restricted respectively.
      default -- default image if the one choosen doesn't exist. One of
                 :404       -- a 404 error,
                 :mm        -- cartoon-style silhouetted outline of a person,
                 :identicon -- geometric pattern based on an email hash,
                 :monsterid -- generated 'monster' with different colors, faces, etc,
                 :wavatar   -- generated faces with differing features and background,
                 :retro     -- generated 8-bit arcade-style pixelated faces"
  [email & {:keys [size rating default]}]
  (let [s (when size    (str "s=" size))
        r (when rating  (str "r=" (name rating)))
        d (when default (str "d=" (name default)))
        params (str/join "&" (remove nil? [s r d]))
        query  (when-not (str/blank? params) "?")]
    (str "https://secure.gravatar.com/avatar/" (digest email) query params)))
