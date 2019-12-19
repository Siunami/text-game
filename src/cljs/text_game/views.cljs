(ns text-game.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [text-game.events :as events]
   [text-game.subs :as subs]
   [clojure.string :as str]
   [text-game.utils :as utils]))

(def prompts {:animal "name of an animal"
              :animal_plural "plural of an animal"
              :body "name of a part of the human body"
              :body_plural "plural of a part of the human body"
              :food "type of food"
              :food_plural "plural of a type of food"
              :jj "adjective"
              :liquid "type of liquid"
              :nn "noun"
              :nns    "plural noun"
              :rb     "adverb"
              :vb     "verb, base form"
              :vbd     "verb, past tense"
              :vbg     "verb ending in \"ing\""
              :vbn     "verb, past participle"
              :vbz     "verb ending in \"s\""})

; (defn get-blank-spaces [str]
;   (let [pattern (re-pattern "<.{1,10}::.{1,10}>")
;         match (re-find pattern str)]
;        (if (not (= match nil))
;          (get-blank-spaces (str/replace-first str pattern "Hood"))
;          (println str))))



(def text (re-frame/subscribe [::subs/text]))
(def blanks (re-frame/subscribe [::subs/remaining-blanks]))
(def inputs (re-frame/subscribe [::subs/inputs]))

(def input-data (reagent/atom {:text ""}))

(defn debug-panel [] [:div.debug
                      [:h3 "Debugging"]
                      [:p (get-in @input-data [:text])]
                      [:p (str "remaining blanks " @blanks)]
                      [:p (str "inputs " @inputs)]])


; <label for="inp" class="inp">
;   <input type="text" id="inp" placeholder="&nbsp;">
;   <span class="label">Label</span>
;   <span class="border"></span>
; </label>

(defn custom-input [] [:label {:for "inp" :class "inp"}
                       [:input {:type "text"
                                :id "inp"
                                :placeholder ""
                                :value (get-in @input-data [:text])
                                :on-change #(swap! input-data assoc :text (-> % .-target .-value))
                                :on-key-press (fn [e]
                                                (println "key press" (.-charCode e))
                                                (if (= 13 (.-charCode e))
                                                  (do
                                                    (re-frame/dispatch [::events/set-inputs (conj @inputs (get-in @input-data [:text])) (rest @blanks)])
                                                    (swap! input-data assoc :text ""))))}]
                       [:span {:class "label"} (get-in prompts [(keyword (first @blanks))])]
                       [:span {:class "border"}]])


(defn input-panel [] (let [no-input false]
                       [:div
                        [:h3 "Mad Libs"]
                        [:p "Fill in the blanks first"]
                        (custom-input)
                        ; [:input {:id "user-input"
                        ;          :type "text"
                        ;          :value (get-in @input-data [:text])
                        ;          :on-change #(swap! input-data assoc :text (-> % .-target .-value))}]
                        [:button {:on-click (fn [] (do
                                                     (re-frame/dispatch [::events/set-inputs (conj @inputs (get-in @input-data [:text])) (rest @blanks)])
                                                     (swap! input-data assoc :text "")))} "Enter"]
                        (debug-panel)]))

(defn mad-lib-panel [] [:div
                        ; [:div (get-blank-spaces "\"Little Red Riding <Hood::nn/>\" is a/an <beloved::jj/> fairy tale")]
                        [:div
                         [:h3 "Mad Libs"]
                         [:div (utils/get-final-text @text @inputs)]
                         (debug-panel)]])

(defn main-panel []
  [:div.container
   (if (first @blanks)
    (input-panel)
    (mad-lib-panel))])
