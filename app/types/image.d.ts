declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

/*
Hey there! 👋 Let me explain what this file does in a way that's easy to understand.

This file is like a translator between TypeScript (the programming language we're using) and our image files. 

Imagine you're in a foreign country and you have a translator who helps you understand the local language.
Similarly, this file helps TypeScript understand what to do when it sees image files (like .png, .jpg, etc.).

Why do we need this?
- TypeScript is very strict about types (like how in math, you can't add letters to numbers)
- But TypeScript doesn't naturally know what an image file is
- This file tells TypeScript "Hey, when you see a .png file (or .jpg, .gif, etc.), just treat it as a value we can use"

The 'declare module' parts are like creating a dictionary entry:
- "When you see *.png" means "any file ending in .png"
- "const value: any" means "this could be anything, don't worry about the specific type"
- "export default value" means "make this available to use in other files"

In React Native development, this is super important because:
1. We use lots of images in our apps (like icons, logos, backgrounds)
2. Without this file, TypeScript would give us errors when trying to import images
3. It makes it possible to use images like we did in the welcome.tsx file where we imported icons and onboarding images

Think of it like getting a permission slip signed - this file gives TypeScript permission to work with our images!

Pro Tips:
- Always keep this file in your React Native projects
- If you're using new image formats, add them here
- The 'any' type is usually not recommended, but for images, it's okay

Remember: This is a TypeScript Declaration File (.d.ts), which is like a manual that helps TypeScript understand things it doesn't know about naturally.
*/
