function countingCharacters3(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
    return count;
}

  
  console.log("String to search in: " + str);
  console.log("Characters to find: " + search);
  console.log("Number of times the character appears: " + count);    
} 