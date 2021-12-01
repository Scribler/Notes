# print instead of puts because we don't want a new line.
print "How old are you in years? "
# get user input and store in age then cut off the trailing line break and convert to an integer
age = gets.chomp.strip.to_i
# print string and don't do a line break.
print "How tall are you in feet? "
# get user input and store in height then cut off the trailing line break and convert to an integer
height = gets.chomp.strip.to_i
# print string and don't do a line break.
print "How much do you weigh in pounds? "
# get user input and store in weight then cut off the trailing line break and convert to an integer
weight = gets.chomp.strip.to_i

# print string with the gathered data inserted.
puts "So, you're #{age} years old, you weigh #{weight} pounds, and you are #{height} feet tall."

replacing a range of characters in the variables.
age[0..1] = "xx"
height[0..1] = "xx"
weight[0..1] = "xx"

puts age, weight, height
