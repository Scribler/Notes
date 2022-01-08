# VARIABLES AND CONSTANTS
#
FLASH_CARDS = {
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
ANSWERS_SUBBED = []
QUESTIONS = []
words = open('./words.txt', 'r+')
answers = FLASH_CARDS.keys.sort_by {rand}
# questions = answers.each{|key| FLASH_CARDS[key]}

# METHODS MODULES CLASSES 
#
# list the randomized answer and question pairs

def sub_words(answers)
  answers.each do |x|
    subbed = []
    subbed << x.gsub(/\*\*\*/, "STARS")
    subbed << x.gsub!(/###/, "HASHES")
    subbed << x.gsub!(/@@@/, "AT'S")
    puts subbed
  end
end


def list_pairs(answers, hash)
  puts "Here are the questions and answers"
  puts ""
  answers.each do |key|
    puts "Question: "
    puts FLASH_CARDS[key]
    puts "Answer: "
    puts key
    puts ""
  end
end


# PROGRAM RUN
#

# list_pairs(answers, FLASH_CARDS)
# sub_words(answers)




