prompt = -> {puts "> "}

# This one is like your scripts wtih ARGV
def print_two(*args)
  arg1, arg2 = args
  puts "arg1:#{arg1}, arg2: #{arg2}"
end

def print_three(first, second, third)
  puts first
  puts first.empty?
  puts second
  puts second.empty?
  puts third
  puts third.empty?
end

# OK, that *args is actually pointless, we can just do this.
def print_two_again(arg1, arg2)
  puts "arg1: #{arg1}, arg2: #{arg2}"
end

# This just takes one argument
def print_one(arg1)
  puts "arg1: #{arg1}"
end

# This one takes no arguments
def print_none()
  puts "I got nothin'."
end



######################################################################

# Function that prints a file with line numbers before each line.
def print_lines_with_num(file)
  num = 1
  File.read(file).each_line {|x|
    puts "LINE ##{num} > #{x}"
    num = num + 1
  }
end

# Does the exact same thing as the code above but reads the file by line,
# instead of slurping the whole file first, then reading by line.
def print_lines_with_num_two(file)
  num = 0
  File.foreach(file) {|x| puts "LINE##{num = num + 1}> #{x}"}
end

def append(file)
  puts "What would you like to add?"
  prompt = -> { print "> " }
  prompt.call
  # print ": "
  File.write(file, "#{$stdin.gets}", mode: 'a+')
  # File.readlines(file) {|x| puts x.read}
  puts File.read(file)
end

######################################################################



print_two 'Argument 1', 'Argument\n2'
print_two_again "boop1", "boop\n2"
print_one('this is my argument')
print_none
print_three('bing1', '', 'bing3') 
puts ""
print_lines_with_num('s.rb')
puts ""
print_lines_with_num_two('s.rb')
append 's.rb'
