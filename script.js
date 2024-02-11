function firstChar(text) {
  const trimmText = text.trim();
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
