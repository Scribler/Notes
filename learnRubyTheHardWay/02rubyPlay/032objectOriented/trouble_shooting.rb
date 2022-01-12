# Load words website
require 'open-uri'

# Assign Constants
WORD_URL =  "http://learncodethehardway.org/words.txt"
WORDS = []
# check to see if 'english' was passed to the program and store boolean in variable
PHRASE_FIRST = ARGV[0] == "english"
PHRASES = {
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
# store words in 'WORDS'
#
# PROGRAM RUN
URI.open(WORD_URL) do |file|
  file.each_line {|word| WORDS.push(word.chomp)}
end

test = ['dog', 'mog', 'slog']

p test * 2

# program blueprint
#
#
#
# get words from website
#
# craft = words / sentence / patter / caps?

# craft parameters
















