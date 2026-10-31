# Kid School Landing Page
 
A mobile-first landing page for a kids' school, built with **React Native (Expo)** and styled with **Nativewind** (Tailwind CSS for React Native).
 
## Preview
 
> Add screenshots here, for example:
>
> ![Home screen](./screenshots/home.png)
 
## Features
 
- Responsive landing page layout for mobile (and web)
- Reusable, prop-driven components
- Hero banner with call-to-action button
- Curriculum cards with gradient backgrounds
- Stories / news grid
- Navbar and footer sections
- Smooth vertical scrolling
## Page Sections
 
| Section | Description |
|---|---|
| Navbar | Logo and navigation |
| Banner | Hero image, headline and "Enroll Now" button |
| Curriculums | Cards for each age group (e.g. Kinder 3 to 6 years) |
| Stories | Two-column grid of stories with date badges |
| Footer | Contact and closing information |
 
## Tech Stack
 
- [Expo](https://expo.dev/) and [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nativewind v4](https://www.nativewind.dev/) with Tailwind CSS 3
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- Expo Go app on your phone, or an Android/iOS emulator
### Installation
 
```bash
# Clone the repository
git clone <your-repository-url>
 
# Go to the project folder
cd kid_school
 
# Install dependencies
npm install
```
 
### Run the app
 
```bash
npx expo start
```
 
If styles or packages do not update, clear the cache:
 
```bash
npx expo start --clear
```
 
Then:
 
- Scan the QR code with **Expo Go** (Android/iOS), or
- Press `a` for Android emulator, `i` for iOS simulator, `w` for web
### Available Scripts
 
| Command | Description |
|---|---|
| `npm start` | Start the Expo dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run web` | Run on web |
| `npm run lint` | Lint the code |
 
## Project Structure
 
```
kid_school/
├── assets/              # Images and icons
├── src/
│   ├── app/
│   │   ├── _layout.tsx  # Root layout (imports global.css)
│   │   └── index.tsx    # Landing page
│   └── componenst/      # Reusable components
│       ├── Navbar.tsx
│       ├── Banner.tsx
│       ├── Curriculums.tsx
│       ├── SingleCurricu.tsx
│       ├── Stories.tsx
│       ├── SingleStory.tsx
│       └── Footer.tsx
├── global.css           # Tailwind directives
├── tailwind.config.js   # Tailwind / Nativewind config
├── babel.config.js      # Babel preset for Nativewind
├── metro.config.js      # Metro config with Nativewind
├── app.json             # Expo config
└── package.json
```
 
## Nativewind Setup Notes
 
- Tailwind classes are applied with the `className` prop.
- `global.css` is imported once in `src/app/_layout.tsx`.
- `tailwind.config.js` must include `./src/**/*.{js,jsx,ts,tsx}` in `content`.
- Third-party components (such as `expo-image` and `expo-linear-gradient`) use the `style` prop, or `cssInterop` to enable `className`.
- Dynamic colors are passed through `style` or props, not through template-string class names.
## Reusable Component Example
 
```tsx
<SingleCurricu
  title="Kinder 3 to 6 years"
  description="Short description here."
  img={require("@/assets/kinder.png")}
  topColor="#DEF5FF"
  bottomColor="#FFFFFF"
  borderColor="#DEF5FF"
  LinkColor="#64C8FF"
/>
```
 
## Troubleshooting
 
| Problem | Fix |
|---|---|
| Styles not applying | Run `npx expo start --clear` and check the `content` path in `tailwind.config.js` |
| `className` ignored on a component | Use `style`, or wrap with `cssInterop` |
| Page does not scroll | Wrap content in `ScrollView` and give the parent `flex-1` |
| Image not showing | Set an explicit width and height |
 
## Future Improvements
 
- Add more pages (About, Admission, Contact)
- Connect the "Enroll Now" button to a form
- Add animations
- Dark mode support
## Author
 
**Your Name**
GitHub: [@your-username](https://github.com/your-username)
 
## License
 
This project is for learning and portfolio purposes.
