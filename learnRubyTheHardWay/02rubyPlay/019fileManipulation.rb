#assign ARGV to 'input_file'
input_file = ARGV.first
# open 'input_file' recieved from ARGV and store in 'current_file'
current_file = open(input_file)
# set a variable for the line number @ 0
current_line = 0

# define method to print all
def print_all(f)
  #print string
  puts "PRINTING FILE"
  # read file given to method
  puts f.read
end

# define a method to rewind
def rewind(f)
  puts "REWINDING FILE"
  f.seek(0)
end


line_next = Proc.new {
  current_line += 1
  # current_line = current_line + 1 'Means the same as the above line'
}

# define a method to print a line.
def print_a_line(line_count, f, next_line)
  puts "#{line_count}, #{f.gets.chomp.upcase}"
end



puts "First let's print the whole file:\n"
print_all (current_file)
rewind (current_file)
puts ""

puts "Printing First line"
print_a_line(current_line, current_file, line_next)
line_next.call
puts ""

puts "Printing Second line"
print_a_line(current_line, current_file, line_next)
line_next.call
puts ""

puts "Printing thirdline"
print_a_line(current_line, current_file, line_next)
line_next.call
puts ""

puts "Is file closed?"
puts current_file.closed?  #check if file is closed (it shouldn't be yet)
puts ""
puts "Running 'close' on file."
current_file.close  #close 'current_file'
puts ""
puts "Is file closed?"
puts current_file.closed?  #check if file is closed (it should be)

