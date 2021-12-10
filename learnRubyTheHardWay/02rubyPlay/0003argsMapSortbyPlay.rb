def many_arg(*args)
  # puts args[0]
  # puts args[1]
  puts *args.sort.map!(&:capitalize)
  puts ""
  puts *args.sort_by(&:length).map!(&:capitalize)
  puts ""
  puts *args.sort_by(&:length).map!(&:capitalize).sort { |a, b| b <=> a }
end



many_arg("cat", "dog", "baboon", "lama", "dingo", "zebra")
