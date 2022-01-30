#
# VARIABLES
#

# quotes / formatters/ single-vs-double quotes START
quote = %q{
First Name: %{first_name}
Last Name: %{last_name}
City: %{city}
No need for '\\n' to
make new lines as this
is a quote.
}
# quotes / formatters/ single-vs-double quotes END


#
# RUN PROGRAM
#

# quotes / formatters/ single-vs-double quotes START
  # puts quote %{first_name: "Garth", last_name: "Brooks", city: "London"}
  # puts "first line \n next line?" # Will print a new line
  # puts 'first line \n next line?' # Will escape the '\' NO NEW LINE
  # puts """
  # this is another way
  # of doing\nquotes
  # """
  # puts '''
  # And this\n is
  # another different \n way
  # of doing them
  # '''
# quotes / formatters/ single-vs-double quotes END

# input START
  # puts gets.chomp # will print each succeeding line from a file
  # puts gets.chomp # will fall back on $stdin if there is no file argument
  puts "Get First Name"
  print ": "
  first_n = $stdin.gets.chomp
  puts "Get Last Name"
  print ": "
  last_n = $stdin.gets.chomp
  puts "Get City"
  print ": "
  place = $stdin.gets.chomp
  puts quote %{first_name: first_n, last_name: last_n, city: place}



# input END















