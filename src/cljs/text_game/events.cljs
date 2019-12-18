(ns text-game.events
  (:require
   [re-frame.core :as re-frame]
   [text-game.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(re-frame/reg-event-db
 ::set-blanks
 (fn [db [_ blanks]]
   (-> db
     (assoc :remaining-blanks blanks)
     (assoc :inputs ()))))

(re-frame/reg-event-db
 ::set-inputs
 (fn [db [_ inputs blanks]]
   (-> db
       (assoc :remaining-blanks blanks)
       (assoc :inputs inputs))))
