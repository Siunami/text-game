(ns text-game.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [text-game.events :as events]
   [text-game.subs :as subs]
   [text-game.views :as views]
   [text-game.config :as config]
   [text-game.utils :as utils]))
   ;; ["fs" :as fs]))

;; TODO: having trouble getting interop with node.js libraries

; (defn node-slurp [path]
;   (let [fs (nodejs/require "fs")]
;     (.readFileSync fs path "utf8")))

(def text (re-frame/subscribe [::subs/text]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch [::events/set-blanks (utils/get-prompts @text)])
  (dev-setup)
  (mount-root))
