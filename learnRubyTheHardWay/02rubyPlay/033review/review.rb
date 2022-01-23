#
# VARIABLES
#

# assign arguments to 'file1' & 'file2' as STRINGS
file1, file2 = ARGV
# store open file objects in variables
file_one = open(file1)
file_two = open(file2)

# DEFINE METHODS
def read_file(file)
  line_num = 0
  file.each_line do |line|
    line_num += 1
    puts "Line Number #{line_num}: #{line}"
  end
  file.close
end

def print_to_file(file)
  target = open(file, 'a+')
  puts "What would you like to add to the file?"
  print "> "
  data = $stdin.gets
  target << ""
  target << data
  target.close
  updated_file = open(file, 'r')
  read_file(updated_file)
end

#
# RUN PROGRAM
#

# READ FILES
puts ""
puts "Would you like to read the first file?"
puts "Press 'Enter' to continue, and 'CTRL-C' to quit"
$stdin.gets
# prints each line of the file
read_file(file_one)
puts ""
puts ""
puts "Would you like to read the second file?"
puts "Press 'Enter' to continue, and 'CTRL-C' to quit"
$stdin.gets
# prints each line of the file
read_file(file_two)
puts ""
puts ""

puts "Enter the name of the file you would like to edit"
puts "Either '#{file1}' or '#{file2}'."
file_name = $stdin.gets.chomp

print_to_file(file_name)


