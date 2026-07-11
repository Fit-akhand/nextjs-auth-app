# 🔐 Next.js Full Stack Authentication App

A secure and modern **Full Stack Authentication System** built with **Next.js**, **TypeScript**, **MongoDB Atlas**, **Mongoose**, **JWT**, **bcrypt.js**, **Nodemailer**, and **Tailwind CSS**.

This project demonstrates a complete authentication workflow, including **User Registration**, **Login**, **Email Verification**, **JWT Authentication**, **Protected Routes**, and **Profile Management**.

---

## 🚀 Features

- 🔐 User Signup
- 🔑 User Login
- 📧 Email Verification
- 🔒 Password Hashing using bcrypt.js
- 🎟️ JWT Authentication
- 🍪 Secure Cookie-Based Authentication
- 👤 User Profile Page
- 🚪 Logout Functionality
- 🛡️ Protected API Routes
- 🌐 MongoDB Atlas Integration
- 📩 Email Service using Nodemailer
- 💬 Toast Notifications using React Hot Toast
- 🎨 Responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Axios
- React Hot Toast

### Backend

- Next.js API Routes
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- Nodemailer

---

## 📂 Project Structure

```
src
│
├── app
│   ├── api
│   │   └── users
│   │       ├── signup
│   │       ├── login
│   │       ├── logout
│   │       ├── me
│   │       └── verifyemail
│   │
│   ├── signup
│   ├── login
│   ├── profile
│   ├── verifyemail
│   ├── layout.tsx
│   └── page.tsx
│
├── dbConfig
│   └── dbConfig.ts
│
├── helpers
│   ├── getDataFromToken.ts
│   ├── getToken.ts
│   └── mailer.ts
│
├── models
│   └── UserModel.ts
│
└── middleware.ts
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Fit-akhand/nextjs-fullstack-auth.git
```

### Navigate to Project

```bash
cd nextjs-fullstack-auth
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a **`.env.local`** file in the root directory.

```env
MONGO_URI=your_mongodb_connection_string

TOKEN_SECRET=your_secret_key

DOMAIN=http://localhost:3000

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
```

> **Note:** Never commit your `.env.local` file to GitHub.

---

## 🔐 Authentication Flow

```
User Signup
      │
      ▼
Validate Input
      │
      ▼
Hash Password (bcrypt)
      │
      ▼
Store User in MongoDB
      │
      ▼
Generate Verification Token
      │
      ▼
Send Verification Email
      │
      ▼
User Clicks Verification Link
      │
      ▼
Verify Email
      │
      ▼
User Login
      │
      ▼
Generate JWT
      │
      ▼
Store JWT in HTTP Cookie
      │
      ▼
Access Protected Routes
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|----------|---------------------------|----------------------------|
| POST | `/api/users/signup` | Register a new user |
| POST | `/api/users/login` | Login user |
| POST | `/api/users/verifyemail` | Verify email address |
| GET | `/api/users/me` | Get authenticated user |
| GET | `/api/users/logout` | Logout user |

---

## 🔒 Security Features

- Passwords hashed using **bcrypt.js**
- JWT Authentication
- HTTP Cookies
- Email Verification
- Protected API Routes
- Environment Variables for Secrets
- MongoDB Atlas Security

---

## 📸 Screenshots

Add screenshots of your application here.

Example:

```
screenshots/
│
├── signup.png
├── login.png
├── profile.png
└── verify-email.png
```

---

## 📚 What I Learned

This project helped me understand:

- Next.js App Router
- Full Stack Authentication
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- Password Encryption
- Email Verification
- Cookies
- Protected Routes
- API Routes
- Middleware
- TypeScript
- Tailwind CSS
- Environment Variables

---

## 🚀 Future Improvements

- Forgot Password
- Reset Password via Email
- Google OAuth Login
- GitHub OAuth Login
- Refresh Token Authentication
- Role-Based Authentication
- Admin Dashboard
- User Profile Editing
- Upload Profile Picture
- Two-Factor Authentication (2FA)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

### Akhand Raj Singh

Full Stack Developer | C++ | DSA | Next.js | MongoDB

- 💻 GitHub: https://github.com/Fit-akhand
- 💼 LinkedIn: https://www.linkedin.com/in/akhand-raj-singh-75a1aa314

Feel free to connect with me for collaborations, internships, or discussions on Full Stack Development, Data Structures & Algorithms, and Web Technologies.

---

## ⭐ Support

If you found this project helpful:

- ⭐ Star this repository
- 🍴 Fork the project
- 🛠️ Contribute to the project
- 💼 Connect with me on LinkedIn

---

## 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">
⭐ If you like this project, don't forget to give it a star on GitHub! ⭐
</p>