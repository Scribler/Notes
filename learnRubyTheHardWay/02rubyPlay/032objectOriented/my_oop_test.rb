# Flashcards application

WORD_URL =  "http://learncodethehardway.org/words.txt"

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

FLASHCARDS.keys.each do |key|
  puts "" 
  p key
end
