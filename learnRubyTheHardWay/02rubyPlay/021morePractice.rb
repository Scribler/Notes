puts "Let's practice everything."
puts 'you\'d need to know \'bout escapes with \\ that do \n newlines and \t tabs.'

# the <<END is a "heredoc". It doesn't have to use 'END' it can be any all caps
# word as long as the doc ends with the same world.  This is important because you 
# don't want to end a heredoc early because the text you are using contains your 
# chosen heredoc word.
poem = <<END
\tThe lovely world 
with logic so firmly planted
cannot discern \n the needs of love
nor comprehend passion from intuition
and requires an explanation
\n\t\twhere there is none.
END

not_poem = <<NOPOEM
Consectetur accusamus voluptas laboriosam error non quo, maiores 
Vitae eaque ipsa laboriosam laudantium maxime. Rerum illum 
doloremque iste mollitia aspernatur deserunt? Debitis eum consequuntur 
recusandae dicta eaque Asperiores itaque ducimus molestias sed 
minus! Explicabo ducimus error quas explicabo minus? Dolorem vitae 
voluptas provident modi rerum. Voluptatum fugiat aliquam exercitationem 
dolor
NOPOEM

puts "______________"
puts poem
puts "______________"
puts not_poem
puts "______________"


five = 10 - 2 + 3 - 6
puts "This should be five: #{five}"
puts ""
#
# ---------------------------------------------------------
#
def secret_formula(started)
  jelly_beans = started * 500
  jars = jelly_beans / 1000
  crates = jars / 100
  # return 3 data points in order
  return jelly_beans, jars, crates
end

start_point = 10000
# assigning the three outputs of secret formula similar to ARGV.
snaeb, sraj, setarc= secret_formula(start_point)

puts "With a starting point of: #{start_point}"
puts "We'd have #{snaeb} beans, #{sraj} jars, and #{setarc} crates."
puts ""
start_point = start_point / 10
puts "With a starting point of: #{start_point}"
puts "We can also do that this way:"
puts "We'd have %s beans, %d jars, and %d crates." % secret_formula(start_point)
