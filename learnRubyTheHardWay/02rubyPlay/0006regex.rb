test = "This is a test"

puts /[cs](..) [cs]\1 in/.match("The cat sat in the hat") 
puts /[cs](..) [cs]\1 in/.match("The cat sat in the hat")[1]

puts /[cs](..)[cs]\1 in/.match("This is a test")
