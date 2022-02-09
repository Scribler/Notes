# quotes / formatters/ single-vs-double quotes START
    #
    # VARIABLES START
    #

    # quote = %q{
    # First Name: %{first_name}
    # Last Name: %{last_name}
    # City: %{city}
    # No need for '\\n' to
    # make new lines as this
    # is a quote.
    # }

    #
    # VARIABLES END
    #
    
    #
    # PROGRAM STARTS
    #

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
    
    #
    # PROGRAM ENDS
    #
# quotes / formatters/ single-vs-double quotes END



# input basics START
    # puts gets.chomp # will print each succeeding line from a file
    # puts gets.chomp # will fall back on $stdin if there is no file argument
    # puts "Get First Name"
    # print ": "
    # first_n = $stdin.gets.chomp
    # puts "Get Last Name"
    # print ": "
    # last_n = $stdin.gets.chomp
    # puts "Get City"
    # print ": "
    # place = $stdin.gets.chomp
    # puts quote %{first_name: first_n, last_name: last_n, city: place}
# input END


#test
# more input with hash START
    #
    # VARIABLES START
    #
    # information = {car: "Corvet", place: "Hamburg", :landmark => "Tower of London"} # create hash using different methods.
    # information[:city] = "Tokyo" # add a 'city'(key) called 'Tokyo'(value) to the hash.
    #
    # VARIABLES END
    #
    
    #
    # METHODS START
    #
    def start_info
      puts ""
      puts "What would you like to do?"
      puts "1) Read hash"
      puts "2) Write to hash"
      puts "(CTRL-C) Exit"
    end

    def get_answer(option) # Get answers 'chomp' off line break and convert input to the proper data type
      if option == "int"
        print ": "
        answer = $stdin.gets.chomp.to_i # Get input 'chomp' off line break and convert into integer
      elsif option == "sym"
        print ": "
        answer = $stdin.gets.chomp.to_sym # Get input 'chomp' off line break and convert into a symbol
      elsif option == "str"
        print ": "
        answer = $stdin.gets.chomp # Get user input and 'chomp' off line break
      else
        puts "The option: '#{option}' is not valid." #prints this line if you forget to enter an option
        exit
      end
      return answer
    end

    def print_hash(hash)
        puts ""
        hash.keys.each do |key|
          puts "Key >>> #{key}, Value >>> #{hash[key]}"
        end
    end

    def write_to_hash(hash)
      puts "Enter Key"
      key = get_answer("sym") # get answer and convert into a symbol
      puts "Enter Value"
      value = get_answer("str") # get an answer that is a string
      hash[key] = value
    end
    #
    # METHODS END
    #

    #
    # PROGRAM RUN
    #

    # loop do
      # start_info
      # answer = get_answer("int")
      # if answer == 1
        # print_hash(information)
      # elsif answer == 2
        # write_to_hash(information)
      # else
        # puts "Not a valid answer"
      # end
    # end
    
    #
    # PROGRAM STOP
    #
# more input END


# test

# ARGV START
    #
    # VARIABLES START
    #
    f_names, l_names, cit = ARGV
    first_names = open(f_names, 'a+')
    last_names = open(l_names, 'a+')
    cities = open(cit, 'a+')
    full_names = {}
    #
    # VARIABLES END
    #
    
    #
    # METHODS START
    #

    def make_names_hash(first, last, hash)
      first_name = []
      last_name = []
      first.read.each_line do |line|
        first_name << line.chomp
      end
      first_name = first_name.shuffle
      
      last.read.each_line do |line|
        last_name << line.chomp
      end
      last_name = last_name.shuffle
      
      first_name.each do
        hash[first_name.pop] = last_name.pop
      end
      
      puts ""
      puts "The names generated and stored in the hash are:"
      hash.keys.each do |key|
        puts "#{key} #{hash[key]}"
      end
    end
    #
    # METHODS END
    #

    #
    # PROGRAM RUN
    #

    make_names_hash(first_names, last_names, full_names)

    #
    # PROGRAM STOP
    #
# ARGV / ARGF END



# NEXT START



# NEXT END




