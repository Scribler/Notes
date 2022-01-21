# VARIABLES
height = 180
weight = 130


# FORMATTER SECTION
myformatter = "I like to eat %{food}, I like %{activity}."
puts myformatter % {
  food: "apples",
  activity: "snowboarding"
}


# VARIABLES AND MATH

puts "\n", height + weight
puts "height: #{height} + weight: #{weight} = #{height + weight}"

puts "OK! use the '\%q{}' when I want to use quotes within without excaping."
puts "Otherwise triple quote are fine."
puts ""



# FORM
print "\nWhat Motorcycle do you drive?: "
motorcycle = gets.chomp.upcase
puts "So you drive a #{motorcycle}."
print "What brand is it?: "
brand = gets.chomp.upcase
print "So your #{motorcycle} is a #{brand}."


print "\nWhat Motorcycle do you drive?: "
motorcycle = gets.chomp.upcase
puts "So you drive a #{motorcycle}."
print "What brand is it?: "
brand = gets.chomp.upcase
print "So your #{motorcycle} is a #{brand}."




