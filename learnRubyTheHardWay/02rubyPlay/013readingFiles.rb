# store first argument fed to script in <filename>
# This is better than asking later because you can use textcompletion in bash.
filename = ARGV.first
prompt = ": "
# open file stored in <filename>
txt = open(filename)
# print out a string with the filename inserted at the end
puts "Here's your file #{filename}:"
# print the file's contents
print txt.read
# close the file
txt.close
# Tell user file has been closed
puts "-- File Closed --"
# Print a string asking for input
puts "Type the filename again"
# print a prompt
print prompt
# store the file name given in 'file_again' variable
file_again = $stdin.gets.chomp
# store the open 'file_again' action in variable
txt_again = open(file_again)
# print the reading of the open file variable
print txt_again.read
# close file
txt_again.close()
# Tell user file has been closed
puts "-- File Closed --"
