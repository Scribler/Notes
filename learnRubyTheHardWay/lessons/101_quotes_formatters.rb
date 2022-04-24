# Quotes / Formatters/ single-vs-double quotes START

# VARIABLES START
quote = %q{
    First Name: %{first_name}
    Last Name: %{last_name}
    City: %{city}
    No need for '\\n' to
    make new lines as this
    is a quote.
    }
# VARIABLES END



# PROGRAM STARTS
puts quote %{first_name: "Garth", last_name: "Brooks", city: "London"}
puts "first line \n next line?" # Will print a new line
puts 'first line \n next line?' # Will escape the '\' NO NEW LINE
puts """
    this is another way
    of doing\nquotes
    """
puts '''
    And this\n is
    another different \n way
    of doing them
    '''
# PROGRAM ENDS

