require 'open-uri'

WORD_URL = "http://learnrubythehardway.org/words.txt"
WORDS = []
PHRASES = {
  "class ### < ###\nend" => 
    "Make a class named ### that is_a ###.",
  "class ###\n\tdef initialize(@@@)\n\tend\nend" =>
    "class ### has-a initialize that takes @@@ parameters.",
}
