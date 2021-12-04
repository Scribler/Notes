# VARIABLES
height = 180
weight = 130
# FORMATTER SECTION
myformatter = "
I like to eat %{food},
I like %{activity}.
"
puts myformatter % {
  food: "apples",
  activity: "snowboarding"
}
puts ""
# VARIABLES AND MATH

puts "\n", height + weight
puts "height: #{height} + weight: #{weight} = #{height + weight}"

puts "OK! use the '\%q{}' when I want to use quotes within without excaping."
puts "Otherwise triple quote are fine."
puts ""

# FORM
# print "\nWhat Motorcycle do you drive?: "
# motorcycle = gets.chomp.upcase
# puts "So you drive a #{motorcycle}."
# print "What brand is it?: "
# brand = gets.chomp.upcase
# print "So your #{motorcycle} is a #{brand}."




# CLOSURES / LAMBDA'S / PROC'S


# LAMBDA
prompt = "#> " # variable defined outside of lambda block

lam = lambda {
puts "What is your car?"
print prompt # lambda's can use variables defined outside of them
car = "Lambda Car"
puts "So you drive a #{car}."
}
lam.call
puts "What class is lambda?"
puts lam.class
puts ""


# METHOD

def meth
  prompt = "#> "
  puts "What is your car?"
  # prompt has to be defined within the method bloc, as
  # it can't access variables from outside of the bloc.
  print prompt
  car = "Method Car"
  puts "So you drive a #{car}."
  puts "What class is method?"
end

puts meth.class # returns method then 'NilClass' as methods are not Processes
puts ""


# PROC > Proc's Can also use outside variables

process = Proc.new { |x| 
  prompt = ">>> "
  puts "#{prompt} #{x*2}" 
}

[1, 2, 3].each(&process) # '&' turns 'process' into a block
puts ""

puts "What class is process?"
puts process.class

