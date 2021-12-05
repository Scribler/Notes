# CLOSURES / LAMBDA'S / PROC'S

# DIFFERENCES BETWEEN THEM ARE

# 1)  > LAMBDAS   - Are defined with '-> {}' or 'lambda {}'
# 1)  > PROCS     - Are defined with '<procname> = Proc.new {}'

# 2)  > LAMBDAS   - Return from the lambda itself
# 2)  > PROCS     - Return from the from the current method (that the proc is being called from inside of)

# 3)  > LAMBDAS   - Care about the correct number of arguments(will raise an exception if it isn't correct)
# 3)  > PROCS     - Don't care about the correct number of arguments

# IN CONCLUSION - Lambdas are more like METHODS than Procs are. But they each have their own use case.




# LAMBDA
prompt = "#> " # variable defined outside of lambda block
# lam = -> {
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





# PROC > Proc's Can also use outside variables

process = Proc.new { |x| 
  # prompt = ">>> "
  puts "#{prompt} #{x*2}" 
}
[1, 2, 3].each(&process) # '&' turns 'process' into a block
puts ""



capitalize = Proc.new {|word|
  puts word.capitalize
}
['dirt', 'quam', 'dirigible'].each(&capitalize)


puts "What class is process?"
puts process.class
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
