(ns text-game.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [text-game.events :as events]
   [text-game.subs :as subs]
   [clojure.string :as str]))

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
              :vbg     "Verb ending in \"ing\""
              :vbn     "verb, past participle"
              :vbz     "Verb ending in \"s\""})

; (defn get-blank-spaces [str]
;   (let [pattern (re-pattern "<.{1,10}::.{1,10}>")
;         match (re-find pattern str)]
;        (if (not (= match nil))
;          (get-blank-spaces (str/replace-first str pattern "Hood"))
;          (println str))))

(defn extract-prompt [s]
  (subs s (inc (.lastIndexOf s ":")) (.lastIndexOf s "/")))

(defn parse-blanks [blanks prompts]
  (if (first blanks)
      (parse-blanks
        (rest blanks)
        (conj prompts (extract-prompt (first blanks))))
      prompts))

(defn get-blank-spaces [str]
  (let [pattern (re-pattern "<.{1,10}::.{1,10}>")]
      (parse-blanks (re-seq pattern str) ())))

; (do (println str)
;     (println pattern)
;     (println (re-matches #"hello.*" "hello, world hefllo as."))
;   (println (re-find #"<.{1,10}::.{1,10}>" str)))))

; (println (re-matches #"<.{1,10}::.{1,10}>" "<hi::jk>"))
;
; (parse-blanks (list <asfd::asd> <ewq::asDf>))

(def text (re-frame/subscribe [::subs/text]))

(def input-data (reagent/atom {:text ""}))


;; TODO: On first load, text is nil. subscribe hasn't pushed value to text yet
(defn setParse []
  (re-frame/dispatch [::events/set-blanks (get-blank-spaces @text)])
  (println @text))


(setParse)


(defn main-panel []
  (let [text (re-frame/subscribe [::subs/text])
        blanks (re-frame/subscribe [::subs/remaining-blanks])
        inputs (re-frame/subscribe [::subs/inputs])]
    (if (first @blanks)
      [:div "remaining blanks"
       [:h3 "Prompt: "]
       [:p (get-in prompts [(keyword (first @blanks))])]
       [:input {:id "user-input"
                :type "text"
                :val (get-in @input-data [:text])
                :on-change #(swap! input-data assoc :text (-> % .-target .-value))}]
       [:button {:on-click (fn [] (do
                                    (println (get-in @input-data [:text]))
                                    (re-frame/dispatch [::events/set-inputs (conj @inputs (get-in @input-data [:text])) (rest @blanks)])
                                    (swap! input-data assoc :text "")))} "submit"]
       [:p (str "rest " (rest @blanks))]
       [:p (get-in @input-data [:text])]
       [:p (str "all " @blanks)]
       [:p (str "inputs " @inputs)]]
      [:div
       ; [:div (get-blank-spaces "\"Little Red Riding <Hood::nn/>\" is a/an <beloved::jj/> fairy tale")]
       [:div
        [:p (str "rest " (rest @blanks))]
        [:p (get-in @input-data [:text])]
        [:p (str "all " @blanks)]
        [:p (str "inputs " @inputs)]
        [:p (get-in prompts [:jj])]]])))
