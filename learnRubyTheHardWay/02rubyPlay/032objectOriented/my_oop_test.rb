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
QUESTIONS = []
words = open('./words.txt', 'r+')
ANSWERS = FLASH_CARDS.keys.sort_by {rand}
answers_subbed = []
# questions = answers.each{|key| FLASH_CARDS[key]}

# METHODS MODULES CLASSES 
#
# list the randomized answer and question pairs


# STILL DOESN'T WORK
# USE '.scan'



def sub_words
  # puts ANSWERS
  ANSWERS.each_line do |answer|
    answer.scan(/\*\*\*/) {|x| gsub!(x, 'SSS')} 
    answer.scan(/###/) {|x| gsub!(x, 'GGG')} 
    answer.scan(/@@@/) {|x| gsub!(x, 'HHH')} 
  end
  puts answer
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
sub_words




