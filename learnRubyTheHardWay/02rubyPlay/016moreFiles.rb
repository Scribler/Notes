from_file, to_file = ARGV

puts "Copying from #{from_file} to #{to_file}"

# we could do these two on one line, how?
# THIS IS HOW - but then you can't close the file, so don't do it this way.
# indata = open(from_file).read
in_file = open(from_file)
indata = in_file.read

puts "The input file is #{indata.length} bytes long"

puts "Does the output file exist? #{File.exist?(to_file)}"
if File.exist?(to_file) == false
  puts "Creating new file called #{to_file}"
end
puts "Ready, hit RETURN to continue, CTRL-C to abort."
# This lets you press enter to continue. Good way to prompt and give a way out of a program.
$stdin.gets

out_file = open(to_file, 'w')
out_file.write(indata)

puts "Alright, all done."

out_file.close
in_file.close
