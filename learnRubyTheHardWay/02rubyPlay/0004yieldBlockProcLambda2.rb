#
# VARIABLES
#
test_array = [2, 4, 6, 8, 1, 3, 5, 7]

#
# YEILD
#
def yield_practice(array)
  puts "#{array}"
  entry_num = 1
  array.each { |test| 
    puts "Array entry #{entry_num}: #{test}"
    entry_num += 1
  }
  yield_entry = "The block fed to the yield will post me!"
  yield(yield_entry)
end

# I'm using this lambda within the yield
testlamb = -> (x) { puts "Will the yield use this lambda? Print Here: #{x}" }


puts ""
puts "YIELD"
puts ""
puts "You can use a 'yield' to feed a code block into a method"
puts ""
# yield using regular block
yield_practice(test_array){ |var| puts "\nYield this! > Variable from method here: #{var}" }
# yield using a lambda
# remember to pipe the needed variable into the block from the var otherwise it won't be available
# to the lambda to use.
yield_practice(test_array){ |var| testlamb.call(var) }


#
# LAMBDA
#
def lambda_practice(array, mult_amount)
  line_index = 0
  #increase line index by 1
  entry_line = lambda { return line_index += 1 }

  #lambda to multiply input by a given ammount
  mult = -> (x) { return x * mult_amount}
  #sort array and 'puts' each node after running it through the multiply lambda.
  array.sort.each{|x| puts "Line #{entry_line.call}: #{mult.call(x)}" }
end

puts ""
puts "LAMBDA"
puts ""
puts "You can use a lambda to 'return' within the method it is in."
puts ""
lambda_practice(test_array, 5)
#
# PROCS
#
def proc_practice(array, mult_amount)
  # The below code exits the method after printing the first array entry.
  # This is because Proc's RETURN FROM THE METHOD and therefor exit the entire method
  # if used with 'return'
  # Avoid this by embedding the proc as seen below, or by using a lambda instead as 
  # seen above in the Lambda section
  # >
  # mult = Proc.new{ |x| return x * mult_amount}
  # puts array.sort.each{ |x| mult.call(x) }

  mult = Proc.new{ |x| puts x * mult_amount}
  array.sort.each{ |x| mult.call(x) }
end

puts ""
puts "PROC"
puts ""
puts "You can use a proc to 'return' from the method it is in."
puts ""
proc_practice(test_array, 3)

