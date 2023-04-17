Next.js Color Ecommerce Website
This is a color ecommerce website built with Next.js, using Firebase for authentication, Stripe for secure payment, and Tailwind CSS for styling.

Installation
To run this project locally, you can follow these steps:

Clone this repository to your local machine
Navigate to the project directory: cd ecom
Install dependencies: npm install
Create a .env.local file at the root of the project, and add your Firebase and Stripe API keys:
makefile
Copy code
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
NEXT_PUBLIC_FIREBASE_API_KEY=<your-firebase-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-firebase-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-firebase-app-id>
Run the app: npm run dev
Usage
After running the app, you should be able to see the color ecommerce website in your browser at http://localhost:3000. You can sign up or log in with your Google account using Firebase authentication, browse and purchase various colors, and make secure payments with Stripe.

Technologies Used
This project uses the following technologies:

Next.js
Firebase
Stripe
Tailwind CSS
Axios
Contributing
If you'd like to contribute to this project, please feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for details.
