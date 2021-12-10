def cheese_and_crackers(cheese_count, boxes_of_crackers)
  puts "You have #{cheese_count} cheeses!"
  puts "You have #{boxes_of_crackers} boxes of crackers!"
  puts "Man that's enough for a party!"
  puts "Get a blanket./n"
end

def good_party
  puts "First for the party we need the cheese and crackers"
  cheese_and_crackers(20, 30)
  puts "What is this party missing?"
  puts 
end



puts "We can just give the function numbers directly:"
puts "Feeding the method '20', and '30'."
puts ""
cheese_and_crackers(20, 30)
puts ""
puts ""


puts "OR, we can use variables from our script:"
puts""
amount_of_cheese = 10
amount_of_crackers = 50
cheese_and_crackers(amount_of_cheese, amount_of_crackers)
puts ""
puts ""


puts "We can even do math inside too:"
cheese_and_crackers(2+8, 3+3)
puts ""
puts ""


puts "And we can combine the two, variables and math:"
cheese_and_crackers( amount_of_cheese * 3, amount_of_crackers / 20.0 )



