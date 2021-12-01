# This line sets up the formatter
# Any time this formatter is called, every entry must have a value or it will throw an error.
formatter = "%{first} %{second} %{third} %{fourth}"
# pring formatter with number entries
puts formatter % {first: 1, second: 2, third: 3, fourth: 4}
# print formatter with string entries
puts formatter % {first: "one", second: "two", third: "three", fourth: "four"}
# pring formatter with boolean entries
puts formatter % {first: "true", second: "false", third: "true", fourth: "false"}
# print formatter with empty formatters as entries and one active formatter.
# If you don't give the formatter a value it just prints the string used to define the formatter.
puts formatter % {first: formatter % {first: "Does", second: "this", third: "work", fourth: "?"}, second: formatter, third: formatter, fourth: formatter}
# print formatter with strings. They will concatonate with spaces.
puts formatter % {
  # print first line of formatter
  first: "I had this thing.",
  # print second line of formatter
  second: "That you could type up right.",
  # print third line of formatter
  third: "But it didn't sing.",
  # print fourth line fo formatter
  fourth: "so I said goodnight."
  #close formatter
}
# print formatter with strings again, though this time with an additional entry
puts formatter % {
  first: "I wanted to find a good colorscheme for ruby.",
  second: "I tried this one:",
  third: '"darkbone".',
  fourth: "It seems to work quite well",
  #This fifth line doesn't appear because there is no fifth entry for the formatter
  fifth: "I wonder what happens if I add a fifth line?" 
}
# testing simple print formatter to test its behavior.
puts formatter
# trying out the formatter with a longer string
# you don't need to use the word 'formatter' but I can see how it helps for readability
formatter2 = "This %{first} thing is about %{second} thing and now I %{third}."
# print formatter
puts formatter2 % {
  # print first entry from formatter
  first: "strange",
  # print second entry from formatter
  second: "obtuse",
  # print third entry from formatter
  third: "triangle"
}

puts "using colorscheme darkbone"
