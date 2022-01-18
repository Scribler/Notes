# Flashcards application
require 'open-uri'

WORD_URL =  "http://learncodethehardway.org/words.txt"
WORDS = []

FLASHCARDS = {
  # ### == class
  # *** == method
  # @@@ == parameter
  "class ### < ###\nend" => 
    "Make a class named ### that is-a ###.",

  "class ###\n\tdef initialize(@@@)\n\tend\nend" => 
    "class ### has-a initialize that takes @@@ parameters.",

  "class ###\n\tdef ***(@@@)\n\tend\nend" => 
    "class ### has-a function named *** that takes @@@ parameters.",
      
  "*** = ###.new()" => 
    "Set *** to an instance of class ###.",

  "***.***(@@@)" => 
    "From *** get the *** function, and call it with parameters @@@.",

  "***.*** = '***'" => 
    "From *** get the *** attribute and set it to '***'."
}

URI.open(WORD_URL) do |f|
  f.each_line {|line| WORDS.push line.chomp}
end

#
# DEFINE METHODS
#

def pick_pairs
  puts ""
  puts ""
end

def pick_words(question)
end


#
# RUN PROGRAM 
#

p FLASHCARDS.keys.sort_by {rand}









