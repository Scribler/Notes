rand_words = ['1', '2', '3', '4']

# def craft_params(rand_words, snippet, pattern)
  # names = (0...snippet.scan(pattern).length).map do
          # param_count = rand(3) + 1
          # params = (0...param_count).map {|x| rand_words.pop() }
          # params.join(', ')
  # end
#
  # return names * 2
# end

puts (0..5).map {|x| puts "This is a test"}

(0..6).map {
  arr = rand_words.sort_by{rand}
  puts arr.join(' ')
}
