module Info
  TEST = "second variable"
  def Info.get_input
    # n for normal
    # c for capitalize
    # ca for capitalize all
    puts "Enter Your text"
    print ": "
    input = $stdin.gets.chomp
    puts "How would you like your output?:"
    puts "As is: a"
    puts "Capitalized: c"
    puts "Or 'all caps': ac"
    print ": "
    modifier = $stdin.gets.chomp
    if modifier == 'c'
      puts input.capitalize
    elsif modifier == 'ac'
      puts input.upcase
    else
      puts input
    end
  end

  def Info.hash_return(hash, value_num)
    item_count = 0
    hash.each do |key, value|
      item_count += 1
      puts "Hash item #{item_count}: #{value.values[value_num]}"
    end
  end

end
