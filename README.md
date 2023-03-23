# ⚡HARRY POTTER CHARACTER FINDER 🧙

## Project description ✍️

The task consists of developing a web page with a list of Harry Potter characters that can be filtered by either the character's name or the house they belong to. 

## List of characters 📚

Firstly, I have created a web page with a list of Harry Potter characters using the https://hp-api.onrender.com/ service which returns information about Harry Potter characters filtered by the house they belong to. For each character, I have displayed:
- Photo
- Name
- Species

## Images 📷

Some of the characters returned by the API do not have an image, so I have chosen the image of the Sorting Hat to fill in that field.

## Character filtering 🤓

Now that I have the list of characters on the screen, the second part is to be able to search for them by name. For this purpose, I have added an input to the interface, so that as the user types a name, only the characters whose name contains the letters written are displayed. 

## Components of the character list 🧹

The character list has the following components:

- Component for name filtering.
- Component for the list.
- Component for the card of each character in the list.
- Component for the details of each character.

## Quality details 🪄

The quality details of my page are:

- The text field is wrapped in a <form> tag.
- If the user presses enter while in the filtering field, it prevents the browser from accidentally navigating or changing the route.
- If a search is made for text, for example, "XXX" and there are no characters that match that text, the message "There are no characters that match your search" is displayed.
- The filter searches regardless of whether the user enters the text in uppercase or lowercase.
- When entering the details of a character and then pressing back, the text field shows the text it previously had.

## Bonus ✌️

The bonuses that I have implemented in the project are:
- Responsive design.
- Use a grid system to display the list of characters.
- In the case that the user navigates to a nonexistent URL, such as http://localhost:3000/#/detail/12345 (where the id 12345 does not exist), display the message "The character you're looking for doesn't exist."
- Make the character detail URL compatible, meaning that if we visit that URL directly in the browser, we see the detail of the character. If we refresh the browser on the detail of a character (or close and reopen it in the same direction), the detail of that character is displayed again.
- Display the list of characters alphabetically ordered by name.
- Create a reset button to return the page to its main list.

## Built with  🛠️

- HTML
- Scss
- JS
- React
- NPM
- GitHub Pages
 

