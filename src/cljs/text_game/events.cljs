(ns text-game.events
  (:require
   [re-frame.core :as re-frame]
   [text-game.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   {:name "re-frame"
    :text "\"Little Red Riding <Hood::nn/>\" is a/an <beloved::jj/> fairy tale for young children.\nIt is a story about a/an <young::jj/> girl and a wolf.\nThe girl's mother sends her to take <food::food/> to her sick grandmother.\nThe mother tells her she must not <stop::vb/> on the way.\nA wolf sees the girl walking through the <woods::nns/> and makes a plan to <eat::vb/> her.\nThe wolf <politely::rb/> asks the girl where she is going.\nThe girl <answers::vbz/> him, because he seems <friendly::jj/>.\nThen the wolf tells her to pick some <flowers::nns/> for her grandmother.\nWhile she is <picking::vbg/> flowers, the wolf goes to her grandmother's house and eats her.\nHe puts on the grandmother's <night-cap::nn/> and gets into her bed.\nWhen the girl arrives at her grandmother's house, she gets into <bed::nn/> with the wolf.\nThe wolf leaps upon the child and <eats::vbz/> her."
    :remaining-blanks ()
    :inputs ()}))

(re-frame/reg-event-db
 ::set-blanks
 (fn [db [_ blanks]]
   (do
     (assoc db :remaining-blanks blanks))))

(re-frame/reg-event-db
 ::set-inputs
 (fn [db [_ inputs blanks]]
   (-> db
       (assoc :remaining-blanks blanks)
       (assoc :inputs inputs))))
