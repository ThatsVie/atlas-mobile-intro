

```markdown
<div align="center">

# Step Tracker App - React Native Intro

</div>

## Project Overview

This project is a **Step Tracker App** built with React Native using Expo. The app allows users to track the number of steps they take each day. It serves as an introduction to React Native, demonstrating essential features such as routing, gestures, and data integration.

**Project Figma Design:**  
[View Figma Design](https://www.figma.com/design/ZHvv7unpirr4GZsbssLNGz/Atlas-Mobile-Intro?node-id=0-1&p=f&t=Z7TKD58ZhTtL1ml4-0)

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
   When accessing the local IP (`http://172.25.115.237:8081`) from my phone did not work, I switched to tunnel mode:
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
