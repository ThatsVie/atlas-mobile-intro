
<div align="center">

# Step Tracker App - React Native Intro

![joggerpug](https://github.com/user-attachments/assets/07c54dc4-39a2-4e7f-8892-f3f01d68ba30)


## Project Overview

This project is a **Step Tracker App** built with React Native using Expo. The app allows users to track the number of steps they take each day. It serves as an introduction to React Native, demonstrating essential features such as routing, gestures, and data integration.

**Project Figma Design:**  
[View Figma Design](https://www.figma.com/design/ZHvv7unpirr4GZsbssLNGz/Atlas-Mobile-Intro?node-id=0-1&p=f&t=Z7TKD58ZhTtL1ml4-0)

</div>

---

## Table of Contents

- [Resources](#resources)
- [Learning Objectives](#learning-objectives)
- [Task 0: Getting Started](#task-0-getting-started)
- [Troubleshooting Connectivity Issues](#troubleshooting-connectivity-issues)
- [Task 1: App Routing](#task-1-app-routing)
- [Task 2: App Database](#task-2-app-database)
- [Task 3: FlashList](#task-3-flashlist)
- [Task 4: Delete All Button](#task-4-delete-all-button)
- [Task 5: Swipe to Delete](#task-5-swipe-to-delete)
- [Task 6: App Styling](#task-6-app-styling)
- [Reflection](#reflection)

---

## Resources

### **Watch:**
- **React Native in 100 Seconds**  
  [Watch on YouTube](https://www.youtube.com/watch?v=gvkqT_Uoahw)

### **Read:**
- **Expo Documentation:**  
  [Expo.dev](https://expo.dev/)

### **Tools:**
- **Radon IDE:**  
  [Radon IDE VS Code Extension](https://ide.swmansion.com/) *(30-day free trial)*
- **React Native Directory:**  
  [React Native Libraries](https://reactnative.directory/)

---

## Learning Objectives

- Understand basic routing in mobile applications.
- Implement basic gestures in a mobile application.
- Utilize a database in a mobile application.

---

## Task 0: Getting Started

### Resources

- **Expo Intro Video:**  
  [Watch on Loom](https://www.loom.com/share/662fe521c2d14496911e6ac2498bf2b4?sid=9a30587c-a84b-402d-a02b-b746037f7458)
- **Setting Up Your Environment:**  
  [Expo Environment Setup](https://docs.expo.dev/get-started/set-up-your-environment/)

### What I Did

1. **Create and Clone the Repository:**
   - Went to [the template repository](https://github.com/atlas-jswank/atlas-mobile-intro) and pressed **"Use this template"**.
   - Named the new repository `atlas-mobile-intro` on GitHub.
   - Cloned it locally:
     ```bash
     git clone https://github.com/your-username/atlas-mobile-intro.git
     ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the App:**
   ```bash
   npm start
   ```
   *If you encounter the error `expo: not found`, make sure to install Expo CLI globally:*
   ```bash
   npm install -g expo-cli
   ```
   *or run:*
   ```bash
   npx expo start
   ```

4. **View the App:**
   - **On Your Device:**  
     Use the Expo Go app (available on iOS and Android) to scan the QR code from the Expo Developer Tools.
   - **On an Emulator:**  
     Set up an Android emulator or iOS simulator following the [Expo documentation](https://docs.expo.dev/workflow/android-studio-emulator/).

---

## Troubleshooting Connectivity Issues

While setting up the project, I encountered a network connectivity issue when trying to load the app on my Android device. Here’s how I resolved it:

1. **Local Network Check:**  
   - Confirmed that both my computer and phone were connected to the same Wi-Fi network.
   - Verified that my computer’s firewall was not blocking port `8081`.

2. **Using Tunnel Mode:**  
   When accessing the local IP from my phone did not work, I switched to tunnel mode:
   ```bash
   npx expo start --tunnel
   ```
   - I was prompted to install `@expo/ngrok` globally. After installing it with elevated permissions:
     ```bash
     sudo npm install -g @expo/ngrok@^4.1.0
     ```
   - The tunnel mode provided a URL that I could manually enter in Expo Go, and the app loaded successfully.

3. **Alternative Testing with an Emulator:**  
   - If connectivity issues persist with a physical device, consider using an Android emulator via Android Studio.

---

## Task 1: App Routing

### Learning Objectives
- Learn how to create multi-screen mobile applications.
- Understand basic navigation using Expo Router in a React Native app.

### Resources
- **Expo Routing Video:**  
  [Watch on Loom](https://www.loom.com/share/32191cb554044c5b8c16d4d330b1fb3b?sid=1ece5c55-1340-4e52-aa9c-7d2b6698e9e9)

### Requirements
- **Home Screen:**  
  - Must display a button labeled **"Add activity"**.
  - When this button is pressed, the user should be navigated to the Add Activity screen.
- **Add Activity Screen:**  
  - Must display a button labeled **"Go back"**.
  - When this button is pressed, the user should be navigated back to the Home Screen.

### What I Did

1. **Created the Home Screen:**
   - I updated the default home screen file to serve as the main entry point for the app.
   - On this screen, I added a button labeled **"Add activity"**.
   - I configured the button to use Expo Router's navigation functionality to move to the Add Activity screen when pressed.

2. **Created the Add Activity Screen:**
   - I added a new screen file dedicated to adding an activity.
   - On this screen, I placed a button labeled **"Go back"**.
   - The button was set up to navigate back to the previous screen, effectively returning the user to the Home Screen.

3. **Tested Navigation:**
   - I verified that pressing the **"Add activity"** button correctly navigates to the Add Activity screen.
   - I confirmed that pressing the **"Go back"** button on the Add Activity screen successfully returns the user to the Home Screen.

### Result
- **Routing is implemented successfully:**  
  The app now supports multi-screen navigation using Expo Router, enabling users to switch between the Home Screen and the Add Activity Screen as required.

---

## Task 2: App Database

### Learning Objective
- Learn to integrate and work with a local SQLite database in a mobile application using Expo.

### Resources
- **Expo SQLite Walkthrough:**  
  [Watch on Loom](https://www.loom.com/share/45dc78a99c7843c1910ee1871dd35a6e?sid=2a7091b4-73a9-4aa9-b320-4cc26360cc47)
- **Expo SQLite Documentation:**  
  [Expo Docs](https://docs.expo.dev/versions/latest/sdk/sqlite/)

### Requirements
- Follow the resource guide to set up a local SQLite database.
- Configure the application to use SQLite for data storage.
- Display the entries from the `activities` table on the Home Screen.
- Allow users to insert new entries into the `activities` table from the “Add Activity” screen.
- Ensure that when new entries are added, the Home Screen automatically updates to reflect these changes.
- Sample SQL commands for reference:
  - **Select:** `SELECT * FROM activities ORDER BY date DESC;`
  - **Insert:** `INSERT INTO activities (steps, date) VALUES (2837, 1739308349);`

### What I Did
1. **Database Initialization:**
   - Implemented a **DatabaseProvider** component that checks for the existence of the SQLite database file in the device’s writable storage.  
   - If the database file does not exist, the provider downloads a pre-populated database from the assets folder and saves it to the device.  
   - Once the database is loaded, the provider wraps the application’s components using Expo’s SQLite provider (with Suspense as a fallback), ensuring that database operations can be performed.

2. **Activities Management via Context and Custom Hook:**
   - Created an **ActivitiesProvider** that leverages a custom hook (`useActivities`) to manage all CRUD operations (insertion, deletion, and reloading) on the SQLite database.
   - The custom hook uses synchronous database operations (`execSync` and `getAllSync`) from Expo SQLite to execute SQL commands.  
   - The hook maintains the state of the activities list and automatically reloads and updates this state whenever an activity is added or deleted.

3. **Integration with Screens:**
   - The Home Screen retrieves the list of activities from the ActivitiesProvider, so that whenever an activity is inserted (via the Add Activity screen), the list updates immediately.
   - The Add Activity screen converts the current time to a Unix timestamp (in seconds) before inserting a new record into the database, ensuring consistency with the sample SQL commands.

### Result
- The application successfully integrates a local SQLite database for activity tracking.
- Users can add new activity entries from the Add Activity screen, and the Home Screen automatically reflects these changes.
- The use of a provider and custom hook for database operations creates a scalable and maintainable architecture for managing the app’s data.

---

## Task 3: FlashList

### Learning Objective
- Learn to efficiently render and scroll through a list of activities using the FlashList component.

### Resources
- **Flash List Intro:**  
  [Watch on Loom](https://www.loom.com/share/495bcb2c6f09463cbb4ae6f516387e8b?sid=f4b9efd1-f9c8-48ef-93bd-6593c2d75eda)
- **Flash List Documentation:**  
  [Flash List Docs](https://shopify.github.io/flash-list/)

### Requirements
- Utilize the FlashList component to display the list of activities on the Home Screen.
- Ensure the list scrolls smoothly when the number of activities exceeds the available screen space.

### What I Did
- Integrated the **FlashList** component from the `@shopify/flash-list` package into the Home Screen.
- Configured FlashList with an appropriate estimated item size to optimize rendering performance.
- Ensured that the FlashList automatically displays and scrolls through all activity entries, maintaining accessibility by providing descriptive labels for screen reader users.
- Verified that the list updates dynamically as activities are added or deleted, ensuring a smooth and efficient user experience.

### Result
- The Home Screen now leverages FlashList to render the list of activities efficiently.
- Scrolling through the activities is smooth and responsive, even when the list grows longer than the available screen space.

---

## Task 4: Delete All Button

### Learning Objective
- Learn to add functionality to remove all records from a local database and update the user interface accordingly.

### Resources
- **Expo SQLite Documentation:**  
  [Expo Docs](https://docs.expo.dev/versions/latest/sdk/sqlite/)

### Requirements
- Add a button below the “Add Activity” button on the Home Screen.
- When pressed, this button should delete all entries from the `activities` table.
- The Home Screen should automatically update to reflect that all activities have been deleted.
- A sample SQL command for reference:  
  `DELETE FROM activities;`

### What I Did
1. **Created the Delete All Button Component:**
   - Developed a dedicated component for deleting all activities.
   - This component utilizes the activities context to access a function that executes the SQL command to delete all records.

2. **User Confirmation & Feedback:**
   - Implemented a confirmation alert that prompts the user to confirm the deletion of all activities before proceeding.
   - Incorporated haptic feedback in two stages:
     - A light haptic feedback is triggered immediately when the user presses the button.
     - A stronger haptic feedback is provided upon confirmation, ensuring a tactile indication that the deletion is being executed.
   - Once confirmed, the deletion function is called, and a confirmation alert notifies the user that all activities have been deleted.

3. **Automatic UI Update:**
   - The custom hook managing the activities state ensures that the Home Screen refreshes automatically when the database is updated (when all activities are deleted).

### Result
- The Home Screen now includes a “Delete All” button below the “Add Activity” button.
- When pressed, users are prompted to confirm the deletion, which then triggers haptic feedback and removes all entries from the SQLite database.
- The list of activities on the Home Screen automatically updates to reflect the deletion.

---

## Task 5: Swipe to Delete

### Learning Objective
- Learn to implement gesture-based deletion in a mobile application by enabling users to swipe on a list item to reveal a delete button and confirm deletion.

### Resources
- **Gestures Walkthrough:**  
  [Watch on Loom](https://www.loom.com/share/37f191564bc24c3695b2138bcd6e0463?sid=5799d941-a16f-4d4d-a669-a10cf94ac47c)
- **Gestures Documentation:**  
  [React Native Gesture Handler Docs](https://docs.swmansion.com/react-native-gesture-handler/)

### Requirements
- Enable users to swipe left or right on an activity displayed on the Home Screen.
- When swiped, a delete button is revealed without completely displacing the activity’s content.
- Upon pressing the delete button, a confirmation alert is shown.
- If confirmed, the activity is deleted from the SQLite database.
- The Home Screen automatically updates to reflect the deletion.
- (Reference SQL: `DELETE FROM activities WHERE id = 4;`)

### What I Did
1. **Implemented Swipe-to-Delete Gesture:**
   - Integrated a swipeable gesture using the ReanimatedSwipeable component to allow horizontal swiping on each activity.
   - Configured the component to reveal a delete button when an activity is swiped left or right.

2. **Added Confirmation & Haptic Feedback:**
   - Added a confirmation alert that prompts the user to confirm the deletion when the delete button is pressed.
   - Implemented haptic feedback at two stages:
     - Light feedback is triggered immediately when the user initiates the delete action.
     - Medium feedback is provided upon confirmation, ensuring users receive tactile feedback for both actions.

3. **Ensured Automatic UI Updates:**
   - Leveraged the activities context and custom hook to automatically refresh the Home Screen list after an activity is deleted, ensuring the user sees an up-to-date list without manual refresh.

### Result
- Users can swipe an activity on the Home Screen to reveal a delete button.
- Tapping the delete button brings up a confirmation alert, and upon confirmation, the activity is removed from the database.
- The Home Screen updates immediately to reflect the deletion.

---

## Task 6: App Styling

### Learning Objective
- Ensure that the application’s visual design matches the provided Figma design.

### Resources
- **Project Figma:**  
  [View Figma Design](https://www.figma.com/design/ZHvv7unpirr4GZsbssLNGz/Atlas-Mobile-Intro?node-id=0-1&p=f&t=lgGGGA69kf3Lm4OW-0)

### Requirements
- The app’s styling (including layout, colors, and fonts) should closely match the design specified in the Figma file.
- Consistent styling should be maintained across all screens and components (e.g., Home Screen, Add Activity screen, activity list items, and buttons).

### What I Did
1. **Adopted the Figma Design:**
   - Reviewed the Figma design to capture the key visual elements such as background colors, typography, and layout spacing.
   - Applied these design guidelines consistently across all components, ensuring that each screen adheres to the same color palette and layout margins.

2. **Enhanced Accessibility and Interactivity:**
   - Integrated dynamic font scaling by ensuring that text components support system font adjustments.
   - Added subtle press animations (using scaling effects) on buttons to provide visual feedback during user interactions.
   - Utilized SafeAreaView and consistent padding to maintain a polished layout that works well on devices with notches or different screen sizes.
   - Implemented haptic feedback on all interactive elements, reinforcing a tactile response during button presses.

3. **Consistency Across Components:**
   - Ensured that elements like input fields, buttons, and list items (activities) follow the same styling guidelines, with matching colors, borders, and spacing.
   - Tested across multiple screens to confirm that the styling remains uniform and true to the Figma design.

### Result
- The application’s visual design now closely mirrors the Figma design in terms of layout, colors, and typography.
- Enhanced interactivity (through animations, dynamic font scaling, and haptic feedback) has improved the overall user experience.
- All screens exhibit a consistent and polished look that aligns with the design requirements, ensuring that the app is both visually appealing and accessible.

---

## Reflection

This project was my first formal foray into mobile app development, and it challenged me to adapt my web development skills to the mobile context. I gained experience with Expo and React Native, particularly in integrating a local SQLite database and implementing gesture-based interactions, a stark contrast to using media queries and responsive design in web development. Navigating the nuances of mobile routing and ensuring accessibility across different devices deepened my understanding of user experience on smaller screens. I learned how to leverage context providers and custom hooks in a mobile environment, and I appreciated the importance of haptic feedback and subtle animations to enhance interactivity and user satisfaction.

---

With love, 
<br>
**[Vie P.](https://whatdoyouknowaboutlove.com/viep)**
