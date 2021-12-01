# print string with no line break
print "Give me a number: "
# store user input and convert to an integer
number = gets.chomp.to_i



# take number and multiply by 100
bigger = number * 100
# prints a string displaying the modified user data.
puts "A bigger number is #{bigger}."



# print string with no line break
print "Give me another number: "
# get user input and cut the line break
another = gets.chomp
# modify the stored value in muber by converting its value to a float.
# not that this could have been done all at once when getting the data in the first place.
number = another.to_f




smaller = number / 100

puts "A smaller number is #{smaller}."



print "How much will you pay me?  I'll give you 10% back.: "
# get input, convert to a float, divide by 10 and round to 2 decimal places.
amount = (gets.chomp.to_f / 10).round(2)

puts "Here's your change: $#{amount}."
