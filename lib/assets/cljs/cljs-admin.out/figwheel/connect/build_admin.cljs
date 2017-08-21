(ns figwheel.connect.build-admin (:require [figwheel.client] [figwheel.client.utils] [admin.core]))
(figwheel.client/start {:build-id "admin", :websocket-url "ws://localhost:3449/figwheel-ws"})

