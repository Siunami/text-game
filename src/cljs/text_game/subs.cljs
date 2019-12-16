(ns text-game.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::text
 (fn [db]
   (:text db)))

(re-frame/reg-sub
 ::remaining-blanks
 (fn [db]
   (:remaining-blanks db)))

(re-frame/reg-sub
 ::inputs
 (fn [db]
   (:inputs db)))
