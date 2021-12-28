module Info
  def add_to_inventory
    print "What do you want to add to your inventory?: "
    answer = $stdin.gets.chomp
    string_split = answer.split.pop
    @inventory[string_split.to_sym] = answer
  end

  def print_user_info
    puts ""
    puts "Below is your user information"
    puts "-"*20
    puts "User Name: #{@name}"
    puts "User Home: #{@home}"
    inventory_return
    puts "-"*20
  end

  def inventory_return
    index = 1
    puts "Your Inventory is:"
    @inventory.values.each do |value|
      puts "    Item #{index}: #{value}."
      index += 1;
    end
  end

  def hash_return(hash, value_num)
    item_count = 0
    hash.each do |key, value|
      item_count += 1
      puts "Hash item #{item_count}: #{value.values[value_num]}"
    end
  end

end
