(ns text-game.utils)

(defn extract-prompt [s]
  (subs s (inc (.lastIndexOf s ":")) (.lastIndexOf s "/")))

(defn parse-blanks-helper [blanks prompts]
  (if (first blanks)
      (parse-blanks-helper
         (rest blanks)
         (conj prompts (extract-prompt (first blanks))))
      prompts))

(defn parse-blanks [blanks]
  (parse-blanks-helper blanks ()))


(defn get-blank-spaces [str]
  (let [pattern (re-pattern "<.{1,10}::.{1,10}>")]
    (re-seq pattern str)))


(defn get-prompts [str]
  (parse-blanks (get-blank-spaces str)))

(defn combine-text-inputs [combined split-text inputs]
  (if (first inputs)
    (combine-text-inputs
     (conj combined (first split-text) (first inputs))
     (rest split-text)
     (rest inputs))
    combined))


(defn get-final-text [str inputs]
  (let [pattern (re-pattern "<.{1,10}::.{1,10}>")]
    (clojure.string/join ""
                         (reverse
                          (combine-text-inputs
                            ()
                            (clojure.string/split str pattern)
                            inputs)))))
