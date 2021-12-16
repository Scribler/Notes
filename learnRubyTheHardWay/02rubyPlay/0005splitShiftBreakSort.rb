# WORKING MATERIAL / STARTING VARIABLES
#
string = "This is a string of different words"

# BREAK STRING - method
#
def string_break(str)
  split = str.split(' ')
  return split
end

# BREAK STRING - call
split = string_break(string)
puts "This is the string before splitting: #{string}\n\n"
puts "This is the string after splitting and before shift: #{split}\n\n"

# SHIFT / POP - method
#
def string_shift(str)
  # VARIABLES
  split_str = str.split
  new_array = []
  reverse_array = []

  # LAMBDAS
  
  
  # Array Shift
  array_shift = -> (from_arr, too_arr, ammount) {
    cycles = 0
    while cycles < ammount
      too_arr.push from_arr.shift
      cycles += 1
    end
  }

  # Flip Array Lambda
  flip_array = -> (original, reversed) {
    transfer_array  = original.clone
    setter = 0
    length = original.length
    while setter < length
      reversed.push transfer_array.pop
      setter += 1
    end
  }

  # Opperations
  array_shift.call(split_str, new_array, 4)
  flip_array.call(new_array, reverse_array)
  return  split_str, new_array, reverse_array
end

# Method call
split_s, new, new_reversed = string_shift(string) # Assign results from string_shift method to variables
puts "String after shift: #{split_s}\n\n"
puts "New array: #{new}\n\n"
  def name(string)
    thiing = 
  end
  def name(string)
    thiing = 
  end
puts "New array reversed: #{new_reversed}"
