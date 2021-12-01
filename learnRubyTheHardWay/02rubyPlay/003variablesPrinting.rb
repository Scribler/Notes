
name = 'Zed A. Shaw'

age = 35 # not a lie in 2021

height = 74 # inches

height_centimeters = height * 2.54

weight = 180 # pounds

weight_kilos = weight / 2.205

eyes = 'Blue'

teeth = 'White'

hair = 'Brown'



puts "Let's talk about #{name}."

puts "He's #{height} inches tall."

puts "He's #{height_centimeters.round(1)} centimeters tall."

puts "He's #{weight} pounds heavy."

puts "He's #{weight_kilos.round(1)} kilo's heavy"

puts "Actually that's not too heavy."

puts "He's got #{eyes} eyes and #{hair} hair."

puts "His teeth are usually #{teeth} depending on the coffee."


# This line is tricky, try to get it exactly right.
puts "If I add #{age}, #{height}, and #{weight} I get #{age + height + weight}."
