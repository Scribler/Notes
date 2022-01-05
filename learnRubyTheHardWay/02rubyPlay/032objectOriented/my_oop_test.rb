# building my own version of the oop_test project

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

models = FLASH_CARDS.keys().sort_by {rand}

for model in models do
  description = FLASH_CARDS[model]
  
  # substitute symbols in model
  model = model.gsub(/###/) {|x| "HASHES"}
  model.gsub!(/\*\*\*/) {|x| "STARS"}
  model.gsub!(/@@@/) {|x| "AT'S" }
  # substitute symbols in description
  description = description.gsub(/###/) {|x| "HASHES"}
  description.gsub!(/\*\*\*/) {|x| "STARS"}
  description.gsub!(/@@@/) {|x| "AT'S" }
  # print model and description
  puts "model is:\n#{model}\n"
  puts "description is:\n#{description}\n\n"
end
