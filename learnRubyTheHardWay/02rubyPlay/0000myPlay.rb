
# VARIABLES
height = 180
weight = 130


# FORMATTER SECTION
myformatter = "
I like to eat %{food},
I like to %{activity}.
"
puts myformatter % {
  food: "apples",
  activity: "snowboarding"
}

# VARIABLES AND MATH

puts "\n", height + weight
puts "height: #{height} + weight: #{weight} = #{height + weight}"

puts """
I can't use \"quotes\" 'because' I am putting it all within triple quotes.
BUT, triple quotes do act just like the 'quote' thing we used earlier
\t#{weight}
^That is the weight variable \n\t#{height}\n\t^That is the height variable.
"""
#This acts like triple quotes
puts %q{
This is a quote
and I can put many lines?
"can I use quotes here?"
'apparently I can!'
Is that true?
I'm not entirely sure?
}

puts "OK! use the '\%q{}' when I want to use quotes within without excaping."
puts "Otherwise triple quote are fine."

# FORM

print "\nWhat Motorcycle do you drive?: "
motorcycle = gets.chomp.upcase

puts "So you drive a #{motorcycle}."
print "What brand is it?: "

brand = gets.chomp.upcase
print "So your #{motorcycle} is a #{brand}."
