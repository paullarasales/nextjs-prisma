Rant Journal - Your Safe Place to Express
Welcome to Rant Journal, a cozy and secure platform where you can freely express your thoughts, feelings, and emotions without judgment. Designed to be your safe place, this application allows you to share your personal rants, vent, and reflect in a private and supportive digital environment.

📝 Features
Protected Access:

Enter a PIN to unlock your personal safe space.
Fully customizable PIN to ensure privacy.
Rant Creation:

Write and save your rants anytime, anywhere.
A minimalistic editor for a distraction-free writing experience.
Responsive Design:

Optimized for all devices, including desktops, tablets, and smartphones.
User-Friendly Interface:

Simple and intuitive layout for seamless navigation.
Soft and comforting design aesthetics.
Secure Platform:

Your data is protected, ensuring that your private rants stay private.
🚀 Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites:
Node.js (v16 or above recommended)
npm or yarn
A Giphy API Key for mood-based GIF integration.
Installation:
Clone the repository:

bash
Copy code
git clone https://github.com/paullarasales/nextjs-prisma.git
cd nextjs-prisma
Install dependencies:

bash
Copy code
npm install
Configure environment variables: Create a .env file and populate it with your configuration:

env
Copy code
DATABASE_URL="your-database-url"
NEXT_PUBLIC_GIPHY_API_KEY="your-giphy-api-key"
PIN_SECRET="" # Replace with your desired default PIN
Run the development server:

bash
Copy code
npm run dev
Open the app in your browser:

Visit http://localhost:3000
Deployment:
Deploy the project on Vercel for seamless hosting:

Push your code to GitHub or your preferred Git provider.
Import your repository into Vercel.
Add environment variables in Vercel’s dashboard.
Deploy the project and share your app link.
🎨 Design Philosophy
The app’s aesthetic is warm, inviting, and minimal to provide a sense of comfort. It uses soft colors and intuitive layouts to ensure the user feels at ease while expressing themselves.

🛠️ Tech Stack
Frontend: Next.js (React framework)
Backend: Prisma (Database ORM)
Database: PostgreSQL
Styling: Tailwind CSS
Hosting: Vercel
Integration: Giphy API for mood-based GIFs
🐛 Known Issues
Currently using <img> tags instead of <Image />. This may affect performance but will be resolved in future updates.
Unescaped characters in certain strings. Temporary fixes applied.
🤝 Contributing
Feel free to fork this repository, make your improvements, and create a pull request! Contributions are welcome to enhance the app and improve the user experience.

📜 License
This project is licensed under the MIT License.

❤️ Acknowledgments
Thanks to my girlfriend for inspiring this project.
Special thanks to the developers behind Next.js, Prisma, and Tailwind CSS.
Mood-based GIF integration powered by Giphy API.
