function firstChar(text) {
  // Trim the text to remove leading and trailing spaces
  const trimmedText = text.trim();

  // Check if the trimmed text is not empty
  if (trimmedText) {
    // Return the first character of the trimmed text
    return trimmedText[0];
  } else {
    // Return an empty string if the input was only spaces or empty
    return '';
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
