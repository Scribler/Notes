# PROGRAM NOTES
#
# - get words
# - get phrases & randomize
# - fill in substitutions (each sentence)

# VARIABLES
#
words = ['this', 'blurp', 'zap', 'trill', 'gill', 'dill']
# rwords = words.rand()
STRING = "Start ###, ***, @@@, ###, end."

# puts rwords

# CLASSES
class Test
  def initialize
    @name = "bob"
  end
  attr_accessor :name
end

# METHODS

def sub(rand_words)
  puts STRING
  STRING.gsub!(/###/, rand_words.pop)
  STRING.gsub!(/\*\*\*/, rand_words.pop)
  STRING.gsub!(/@@@/, rand_words.pop)
  puts "Do you want to print the string?"
  exit(0) unless $stdin.gets
  puts STRING
end


# RUN PROGRAM
this = Test.new
puts this.name

sub(words)

