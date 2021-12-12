#
# VARIABLES
#
words = ["this", "that", "pie", "lorem", "ipsum", "dolar", "set"]
numbers = [1, 3, 4, 8, 2, 9, 2, 99, 45, 10, 0]
line_num = 1


#
# METHODS
#
def add(a, b)
  puts "Adding #{a} and #{b} together."
  return a + b
end

def subtract(a, b)
  puts "Subtracting #{b} from #{a}."
  return a - b
end

def multiply(a, b)
  puts "Multiplying #{a} by #{b}"
  return a * b
end
def divide(a, b)
  puts "Dividing #{a} by #{b}"
  return a / b
end

def line_advance (line_number, advance_amnt, advance_limit)
  line_num = line_number
  if line_num >= advance_limit
    # return line_num = 1
    line_num = 1
  else
    # return line_num += advance_amnt
    line_num += advance_amnt
  end
end

def sort_array (array)
  line_number = 1
  array.sort.each do |x|
    puts "Entry #{line_number}: #{x}"
    line_number = line_advance(line_number, 1, array.length)
  end
  puts array.length
end

#
# DECLARATIONS
#

age = add(30, 5)
height = subtract(78, 4)
weight = multiply(90, 2)
iq = divide(100, 2)


age_and_height_added = add(33, 174)

puts "My age:33 and height:174 added together are #{age_and_height_added}."
puts "20 - 5 = #{subtract(20, 5)}."
puts ""
puts ""
sort_array(numbers)
numbers.pop
numbers.pop
numbers.push(111)
sort_array(numbers)

what = add(age, subtract(height, multiply(weight, divide(iq, 2))))

puts "That becomes: #{what}. Can you do it by hand?"

