#!/bin/bash
echo " "

echo "Runtime Day is $(date +%A) $(date +%B) the $(date +%d)'th of the year $(date +%Y)."
echo "The pid = $$"
echo "The program name = $0"
echo "The program has $# arguments."

echo " "

let a=1

for file in "$@"; do
  echo "Argument $a = $file" | tee -a argumentsRecord.txt #add each line to argumentsRecord.txt and print to stdout
  
  grep test "$file" > /dev/null 2> /dev/null
  
  if [[ $? -ne 0 ]] ; then
    echo "No test found.  Adding test now."
    echo "# test" >> "$file"
  fi

  let a=$a+1
done
