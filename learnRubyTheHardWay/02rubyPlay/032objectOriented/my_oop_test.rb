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

puts "this is a test"

keys = FLASH_CARDS.keys.each {|key|
  puts key
}
