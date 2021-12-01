# assigning a variable a string with a tab
tabby_cat = "\tI'm tabbed in."
# assigning a variable with a linebreak in the middle of a string
persian_cat = "I'm split\non a line."
# assigning a variable with a string containing excaped backslashes.
backslash_cat = "I'm \\ a \\ cat."


# Assigning a multiline variable with tabs and line breaks.
# Note that new lines will print properly with line breaks.
# You only need to add line breaks if it is all contained 
# on one line.
# in triple single quotes the last line of fat_cat below wouldn't work
fat_cat = """
I'll do a list:
\t* Cat food
\t* Fishies
\t* Catnip\n\t* Grass
#{backslash_cat}
"""

thin_cat = '''
What about single quotes?
"can I use quotes in this?"
\'I thought I could\'
But no.
So basically I can use double quotes in thriple single,
and single quotes in triple double.
Triple single quotes are better for writing code, since
variables won\'t work within them.
For example: #{backslash_cat} doesn\'t give the variables contents.
'''

# print variable
puts tabby_cat
# print variable
puts persian_cat
# print variable
puts backslash_cat
# print variable
puts fat_cat
# print variable
puts thin_cat

