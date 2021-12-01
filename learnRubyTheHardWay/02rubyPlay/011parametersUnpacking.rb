# using 'first, second, third' is probably a better idea.
name, hometown, age= ARGV

puts "Your first variable is your name: #{name}"
puts "Your second variable is your hometown: #{hometown}"
puts "Your third variable is your age: #{age}"

print "What was the town you grew up in? "
# MUST use $stdin.gets.chomp if you are using ARGV
ctown = $stdin.gets.chomp

puts "You grew up in: #{ctown}."
