i = 0
numbers = []

while i < 6
  puts "At the top i is #{i}"
  numbers.push(i)

  i += 1
  puts "Numbers now: ", numbers
  puts "At the bottom i is #{i}"
end

puts "The numbers: "

# MAKE THE ABOVE INTO A FUNCTION AND SUBSTITUTE 6 FOR A VARIABLE

def fill_array(x)
  i = 0
  array = []
  while i < x
    puts "At the top i is #{i}."
    array.push i
    i += 1
    puts "Array now: ", array
    puts "At the bottom i is #{i}."
  end
end

def fill_array_for(times)
  array = []
  (0..times).each do |x|
    array.push x
  end
  puts array
end

fill_array(3)
fill_array_for(20)



#
# THREE FOR LOOPS START
#

# remember you can write this 2 other ways?

# numbers.each { |num| puts num }
# puts ""

# 1st other way

# numbers.each do |num|
  # puts num
# end
# puts ""

# 2nd other way (DON'T USE THIS. IT'S NOT PROPPER)

# for num in numbers
  # puts num
# end

#
# THREE FOR LOOPS END
#
