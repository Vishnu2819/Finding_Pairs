# Finding Pairs

**Finding Pairs:** 
Finding pairs is a type of cognitive exercise designed to stimulate and challenge various cognitive functions, including perception, memory, problem-solving, decision-making, reasoning, attention, and language. It tests and enhances a player's memory and concentration skills. In a typical memory game, players use a set of face-down cards, taking turns to flip them over and find matching pairs. This classic Finding pairs game features cards with Fortnite characters. The inclusion of Fortnite characters in the game is primarily for aesthetic and engagement purposes. 

**Game Objective:**
The main objective of the memory game is to challenge and improve a player's memory and concentration skills by matching pairs of cards. The game typically consists of a set of face-down cards, and the primary goal is to find all the matching pairs within the set.
Here are the key objectives of a memory game:<br>
**Memory Enhancement:** The game aims to improve a player's memory by requiring them to remember the locations of various images or symbols on the cards and matching them. <br>
**Concentration:** Players need to maintain focus and concentration to track the positions of the cards they've flipped and identify matching pairs.<br>
**Cognitive Skills:** Memory games help exercise various cognitive functions, including short-term memory, attention, and pattern recognition.<br>
**Entertainment and Engagement:** Memory games are often designed with engaging themes and images to make the exercise more enjoyable and fun.<br>
**Challenge:** Players are challenged to complete the game with the fewest attempts and in the shortest time possible, adding an element of competition and motivation.<br>

**Game rules:**
The rules of the Finding pairs game are relatively simple and consistent across most versions of the game. Here are the typical game rules for a memory game:
- 1.Setup:
Lay out of 4*4 grid of face-down cards on a playing surface. There are 16 cards in total, with each card having a matching pair. The number of cards can vary, but they are usually arranged in rows and columns.
Each card has a matching pair. This means that there are two cards with the same image, symbol, or pattern on the playing surface.
- 2.Objective:
The main objective of the game is to find and match all the pairs of cards in the 4x4 grid. Each pair consists of two identical cards.
- 3.Gameplay:
Revealing Cards: On a player's turn, they can choose any two face-down cards to flip over, revealing the images on those cards. The player must specify which two cards they want to flip.
Matching Pairs: If the two revealed cards match (i.e., they have the same image or symbol), the player keeps the pair and gets another turn. Matching pairs are kept open to keep track.
Not Matching Pairs: If the two revealed cards do not match, then the cards face down again, and it becomes the next turn.
Memory and Concentration: The challenge of the game is to remember the positions of the cards that have been revealed previously. Players must use their memory and concentration to find matching pairs based on their observations.
- 4.Winning:
If number of turns <=12, it displays Incredible! You've got a great memory. You took (number of turns) tries to finish.
If number of turns >=12 and turns<16, it displays Great job! Keep it up!. You took (number of turns) tries to finish.
If number of turns >=16 and turns<20, it displays Good job!Keep trying!. You took (number of turns) tries to finish.  
If number of turns >20, it displays I’d check with a doctor if I were you. You took (number of turns) tries to finish. 
- 5.Variations and Additional rules:
To make this memory game more challenging, we thought of introducing variations and additional rules that test and enhance players' memory and concentration skills. 
Here are some ways to increase the challenge in a memory game:
Increase the Number of Cards: Introducing additional cards to expand the grid's dimensions enhances the cognitive demands on players, necessitating the retention of an increased number of card positions, thereby elevating the level of challenge. To intensify the intricacy of the game, we've opted for a 4*4 grid configuration, accommodating a total of 16 cards.
Decrease the Time Limit: Implement a time limit for each turn. Players must find and match pairs within a set time frame, which adds pressure and requires quicker thinking.
Limit the Number of Turns: Restrict each player to a specific number of turns. When players have a limited number of opportunities to flip cards, they need to make each turn count.

**Technologies:**
To enhance the visual presentation and interaction of web page elements, the code is primarily a React component written in JavaScript, Cascading Style Sheets (CSS), a style sheet language used for describing the look and formatting of a document written in HTML. Technologies and libraries used outline the dependencies and devDependencies used in the "memory-game" project, including React and various tools and libraries for development, linting, and optimization. CSS is used in conjunction with various web development technologies and libraries to streamline development and create more complex, interactive web applications.
- 1. HTML: HTML is used to structure the content of a web page. It defines the elements (e.g., headings, paragraphs, buttons, App, Card grid, Confetti) and their organization on the page.
CSS (Cascading Style Sheets): CSS is used to control the presentation and styling of the HTML elements. We used CSS to style elements like buttons, images, and grids.
- 2. React: React is a JavaScript library for building user interfaces, and managing components and states in the application. The entire component is built using React, making use of React features like functional components, hooks (useState, useEffect), and JSX for rendering
- 3. CSS: The component includes a reference to an external CSS file named "Score.css" to style its elements. The CSS styles are applied to control the visual presentation of the component.
- 4. JavaScript: JavaScript is a programming language used to add interactivity and dynamic behavior to web pages. JavaScript is used to create interactive elements, handle user input, and respond to events like button clicks or form submissions.
- 5. Node.js: Node.js is the runtime environment used for executing JavaScript code on the server or in this project's build process.
- 6. GitHub Pages and GitHub repositories: We've leveraged GitHub repositories for collaborative coding and chosen GitHub Pages as our hosting solution. GitHub Pages excels in serving our static game directly from our repositories, streamlining development and deployment.
 
**Setup and deployment instructions**
- Step 1: Prerequisites
These are installed prior before starting the execution. 
Node.js and npm (Node Package Manager)
A code editor (e.g., Visual Studio Code)
A command-line interface (e.g., Terminal or Command Prompt)
npm install is used to install the prerequisites.
- Step 2: Creating a New React Project
Using the command-line interface, navigated to the directory to create your project using the cd command.
Used npm create vite@latest to create a new React application.
- Step 3: Navigate to the Project Directory
Once the project is created, navigated to the project directory
- Step 4: Start the Development Server
npm install is used to install the package.json file 
npm run dev command is used to run the React application locally during development
- Step 5: Executing Components and Code
Started writing React components and application code. Necessary components are created. 
- Step 6: Added Styling
For any CSS or styling, Own styles is written in CSS files, used CSS-in-JS libraries like styled-components or CSS preprocessors like SASS. Imported CSS files in the components.
- Step 7: Testing and Development
Developed and tested the React application as needed. Used the local development server to view the changes in real-time.
- Step 8: Built the Production Version
npm run build command is used when the application is ready for deployment, created a production build. This command is used to create an optimized and minified version of the application in the build directory.
- Step 9: Deployment
GitHub serves as the deployment platform where individual developers push their code and diligently commit changes.

**Credits for third-party assets and code:**
https://github.com/iamshaunjp/React-Firebase/tree/lesson-58<br>
https://www.w3schools.com/<br>
https://chat.openai.com/<br>
https://youtu.be/LxkXT9WD7yk?si=ONZHvJheeqBeRRp1<br>

**Reflection:**

Throughout the project's development journey, we encountered a myriad of challenges, each presenting an opportunity for growth and innovation. The complexity of the game's logic, encompassing intricate elements like turn management and the determination of game completion, stood out as a formidable hurdle. Ensuring the seamless functionality of these intricate game mechanics demanded meticulous attention and testing, constituting a significant challenge that we were determined to conquer. 
The task of tracking which cards were flipped, which ones were successfully matched, and those that remained unmatched, revealed itself as a challenging endeavor. This particular challenge highlighted the importance of precise data handling and the creation of a robust system for game state management. Designing an intuitive and visually appealing user interface was yet another challenge we faced. The UI/UX design is a critical element in creating an engaging and user-friendly game. It called for a creative approach that combined aesthetics with functionality, a challenge we embraced wholeheartedly. The issue of responsiveness added another layer of complexity to our project. Adapting the game to various screen sizes and orientations was a demanding task, and we were determined to provide users with a seamless experience, regardless of their device.
The testing phase of the memory game became an extensive endeavor. Rigorous testing was crucial to identify and rectify issues, such as card mismatches, game freezes, or any unexpected behaviors. This phase was pivotal in delivering a polished and enjoyable game.
Debugging, although an integral part of the development process, was a time-consuming task. Identifying and fixing bugs in the game logic or user interface required patience and thorough problem-solving. It underscored the significance of precise code and extensive testing.
In addition to these overarching challenges, specific technical hurdles added depth to our development journey. Achieving a smooth card flip animation and perfecting pop-up timing proved to be more complex than initially anticipated. These nuances required a deep dive into the technical intricacies of the game.<br>

Amidst these challenges, our project thrived, driven by several factors that contributed to its success. Effective teamwork and adept time management were pivotal in navigating the intricacies of development. The integration of React, a popular JavaScript library for building user interfaces, streamlined our development process. React's component-based architecture allowed for the creation of modular and reusable application components, simplifying our work significantly. The adept use of React's useState and useEffect hooks was instrumental in managing the application's state and side effects. These hooks proved to be powerful tools in our development arsenal. Furthermore, the integration of third-party libraries, such as react-confetti, injected fun and interactive elements into the game, enhancing the overall user experience. The confetti animation that triggered upon game completion added a delightful touch that players appreciated. Our commitment to code organization was a driving force behind our success. We meticulously separated components into individual files, each with a clear and specific purpose. This approach improved code readability and maintainability, a crucial factor in the project's long-term success. We also adhered to best practices throughout the development process. Keeping components stateless whenever possible and providing clear and concise comments were instrumental in enhancing the quality of our code. These practices streamlined collaboration and ensured code clarity. <br>

Despite the challenges we faced, we learned valuable lessons that empowered us to overcome obstacles efficiently. We discovered the effectiveness of breaking the project into smaller tasks, tackling challenges one step at a time, and continuously testing and developing the game. Seeking assistance from online communities, forums, and tutorials proved to be a valuable resource, smoothing the development process and expanding our knowledge. Emphasizing project management practices, such as proper planning, risk assessment, clear communication, and adaptability, played a crucial role in addressing challenges effectively. These practices became the cornerstone of our approach to project development.<br>

In conclusion, our project was a testament to the team's dedication, resilience, and ability to navigate a multitude of challenges. While the journey was marked by complexity and hurdles, our commitment to excellence and innovative problem-solving ultimately led to a successful outcome. We look forward to applying the lessons learned to future projects, ensuring continuous growth and improvement in our development endeavors.


