string = "This is a string of different words"

#
# BREAK STRING
#


def string_break(str)
  split = str.split(' ')
  return split
end

# METHOD CALL
#
split = string_break(string)
puts "This is the string before splitting: #{string}\n\n"
puts "This is the string after splitting and before shift: #{split}\n\n"

#
# SHIFT / POP
#

def string_shift(str)
  #
  # Variables
  #
  split_str = str.split
  new_array = []
  reverse_array = []

  #
  # Lambdas
  #

  # ARRAY SHIFT
  array_shift = -> (from_arr, too_arr, ammount) {
    cycles = 0
    while cycles < ammount
      too_arr.push from_arr.shift
      cycles += 1
    end
  }

  # FLIP ARRAY LAMBDA
  flip_array = -> (original, reversed) {
    transfer_array  = original.clone
    setter = 0
    length = original.length
    while setter < length
      reversed.push transfer_array.pop
      setter += 1
    end
  }

  #
  # Opperations
  #
  array_shift.call(split_str, new_array, 4)

  flip_array.call(new_array, reverse_array)

  return  split_str, new_array, reverse_array
end

# METHOD CALL
#
# Assign results from string_shift method to variables
split_s, new, new_reversed = string_shift(string)

puts "String after shift: #{split_s}\n\n"
puts "New array: #{new}\n\n"
puts "New array reversed: #{new_reversed}"


