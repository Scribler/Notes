#this one is like your scripts wtih ARGV

# SHOULD BE ABLE TO MAKE THIS ADD LINE NUMBERS BEFORE EACH LINE

def print_two(*args)
  arg1, arg2 = args
  arg1 = open(arg1, 'r+')
  arg2 = open(arg2, 'r+')
  puts "arg1:\n#{arg1.read}\narg2:\n#{arg2.read}"
  arg1.close
  arg2.close
end

print_two(ARGV[0], ARGV[1])
