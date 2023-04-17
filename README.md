<h1>Next.js Color Ecommerce Website</h1>


This is a color ecommerce website built with Next.js, using Firebase for authentication, Stripe for secure payment, and Tailwind CSS for styling.

<h3>Installation</h3>

To run this project locally, you can follow these steps:

1. Clone this repository to your local machine
2. Navigate to the project directory: <strong>`cd ecom`</strong>
3. Install dependencies: <strong>`npm install`</strong>
4. Create a .env.local file at the root of the project, and add your Firebase and Stripe API keys:

                 NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key><br>
                 STRIPE_SECRET_KEY=<your-stripe-secret-key><br>
                 NEXT_PUBLIC_FIREBASE_API_KEY=<your-firebase-api-key><br>
                 NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain><br>
                 NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-firebase-project-id><br>
                 NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket><br>
                 NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id><br>
                 NEXT_PUBLIC_FIREBASE_APP_ID=<your-firebase-app-id><br>
                 
5. Run the app: <strong>`npm run dev`</strong>


<h3>Usage</h3>
After running the app, you should be able to see the color ecommerce website in your browser at http://localhost:3000. You can sign up or log in with your Google account using Firebase authentication, browse and purchase various colors, and make secure payments with Stripe.

<h3>Technologies Used</h3>
This project uses the following technologies:

● Next.js<br>
● Firebase<br>
● Stripe<br>
● Tailwind CSS<br>
● Axios<br>

<h3>Contributing</h3>

If you'd like to contribute to this project, please feel free to submit a pull request or open an issue.

<h3>License</h3>

This project is licensed under the MIT License. See the LICENSE file for details.
