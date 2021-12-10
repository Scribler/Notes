# Method that addes two numbers together and returns an integer.
def add(a, b)
  puts "Adding #{a} and #{b} together."
  return a + b
end

def subtract(a, b)
  puts "Subtracting #{b} from #{a}."
  return a - b
end

line_num = 1

words = ["this", "that", "pie", "lorem", "ipsum", "dolar", "set"]
numbers = [1, 3, 4, 8, 2, 9, 2, 99, 45, 10, 0]

def sort_array (array, lamb, l_adv)
    line_number = 1
  array.map { |x|
    puts "Entry #{line_number}: #{x}"
    lamb.call(l_adv, 30)
    line_number += 1
  }
    # return lamb.call(1, 30)
end



line_advance = -> (advance_ammount, advance_limit) { 
  line_num += advance_ammount
  if line_num == advance_limit
    line_num = 1
  end
}

[1, 2, 3].each do |x|
  puts "#{line_num}) #{x * 3}"
  line_advance.call(1, 4)
end

puts ""
[1, 2, 3].each { |x| 
  puts "#{line_num}) #{x * 9}"
  line_advance.call(5, 20)
}
puts ""

age_and_height_added = add(33, 174)

puts "My age:33 and height:174 added together are #{age_and_height_added}."
puts "20 - 5 = #{subtract(20, 5)}."

sort_array(numbers, line_advance, line_num)
