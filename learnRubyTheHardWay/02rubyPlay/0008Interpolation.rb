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

did_not_interpolate = "This interpolated correctly"

# These do the same thing BUT...
# %s can be used in a single quoted string while '#{}' notation wouldn't work
# doesn't work
puts 'variable is: #{did_not_interpolate}'
# works
puts 'variable is: %s' % did_not_interpolate
# works
puts "variable is: #{did_not_interpolate}" 
# %q for non-interpolated string
puts %q[interpolated because I used the non-interpolated symbole 'percents': %s, this percent variable is not interpolated: #{did_not_interpolate}] % did_not_interpolate
# %Q for interpolated string
puts %Q[variable is: %s, and\n variable is also: #{did_not_interpolate}] % did_not_interpolate

puts (0..5).map {|x| puts "This is a test"}

(0..6).map {
  arr = rand_words.sort_by{rand}
  puts arr.join(' ')
}
