module Info
  Test_var = "This is a test. Hello World."
  def get_input
    info = $stdin.gets.chomp
    return info
  end

  def get_input_cap
    info = $stdin.gets.chomp.capitalize
    return info
  end


  def add_to_inventory
    print "#{@name}, from #{@home}; What do you want to add to your inventory?: "
    answer = get_input
    string_split = answer.split.pop
    @inventory[string_split.to_sym] = answer
  end

  def print_user_info
    puts ""
    puts "Below is your user information"
    puts "-" * 20
    puts "User Name: #{@name}"
    puts "User Home: #{@home}"
    inventory_return
    puts "-" * 20
  end

  def inventory_return
    index = 1
    puts "Your Inventory is:"
    @inventory.values.each do |value|
      puts "    Item #{index}: #{value}."
      index += 1;
    end
  end


end

module Hashes
  def Hashes.hash_return(hash, value_num)
    item_count = 0
    hash.each do |key, value|
      item_count += 1
      puts "Hash item #{item_count}: #{value.values[value_num]}"
    end
  end
end

module External
  extend Info
  def External.pick_user(hash)
    print "Which player are you?"
    answer = get_input
    if (answer.include?('one') || answer.include?('1'))
      return hash[:first_player]
    elsif (answer.include?('two') || answer.include?('2'))
      return hash[:second_player]
    else 
      return
    end
  end
end

