(ns text-game.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [text-game.events :as events]
   [text-game.views :as views]
   [text-game.config :as config]))
   ;; ["fs" :as fs]))

;; TODO: having trouble getting interop with node.js libraries

; (defn node-slurp [path]
;   (let [fs (nodejs/require "fs")]
;     (.readFileSync fs path "utf8")))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
