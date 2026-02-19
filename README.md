# 🎓 Compare Vidya
<img width="1574" height="774" alt="image" src="https://github.com/user-attachments/assets/94e02e86-5910-445c-86f5-8bef0ebf9322" />



> Explore, Compare & Choose the Best Online Universities in India

Compare Vidya is a full-stack web application built using **Next.js (App Router)** and **MongoDB Atlas**, designed to help students explore and compare online and distance universities across India.

---

## 🚀 Tech Stack

### 🖥 Frontend
- Next.js 14+ (App Router)
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Framer Motion
- Lucide React Icons

### 🗄 Backend
- Next.js API Routes
- MongoDB Atlas
- Mongoose

---

## ✨ Features Implemented

### 🔐 Database Integration
- MongoDB Atlas connection
- Environment variable setup (`.env.local`)
- Mongoose models
- API routes for seeding data

---

### 🏫 Colleges Module
- Dynamic college listing page
- Dynamic `[id]` routing
- College detail page (`findById`)
- Compare colleges feature
- Real-time database fetching

---

### 🎓 Courses Section
- PG Courses layout
- MongoDB Course model
- Sidebar navigation
- Animated course cards
- Responsive grid system

---

### 🎞 Hero Section
- Auto image slider
- Smooth fade animation
- Dark overlay
- Fully responsive

---

### 🏫 Logo Auto Scroller
- Infinite horizontal scroll
- Gradient fade edges
- Smooth CSS animation

---

### 👨‍🏫 Expert Mentors Section
- Mentor cards
- Rating badges
- Arrow navigation
- Carousel layout

---

### 📊 Animated Stats Section
- Auto counter animation on load
- Students enrolled
- Academic partners
- Salary package stats
- Alumni network

---

### 📈 Progress Bar Section
- Student satisfaction
- Enrollment growth
- Application accuracy
- Animated progress bars

---

### ❓ FAQ Section
- Accordion layout
- Expand / collapse animation
- Plus / Minus toggle

---

### 📞 Talk to Experts Section
- Contact information
- Expert profiles
- Call-to-action button

---

### 🏢 Universities Grid
- University cards
- Course count display
- Hover animations
- View All button

---

### 🌟 Why Students Trust Us
- Feature cards
- Border hover animation
- Clean responsive layout

---

### 📱 Responsive Navbar
- Desktop navigation
- Mobile hamburger menu
- Slide-in drawer
- Animated dropdown
- AI-powered gradient pill

---

### 🎬 Student Auto Scroll Section
- Infinite image scrolling
- Gradient masking
- Dark themed layout

---

### 📦 Footer
- Course categories
- About section
- Contact info
- Social links
- No-cost call badge

---

## 📂 Project Structure

```
app/
  api/
  colleges/
    [id]/
  compare/
components/
lib/
models/
public/
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```
MONGO_URI=your_mongodb_connection_string
```

---

## 🛠 Installation & Setup

```bash
git clone https://github.com/yourusername/comparevidya.git
cd comparevidya
npm install
npm run dev
```

---

## 📡 Database Setup

1. Create MongoDB Atlas cluster  
2. Whitelist IP  
3. Create database user  
4. Add connection string to `.env.local`  
5. Run seed routes:

```
/api/seed
/api/seed-courses
```

---

## 🎯 What We Achieved

- Full-stack application
- Real database integration
- Dynamic routing
- Modern UI design
- Production-ready layout
- Responsive design
- Clean scalable architecture

---

## 🚀 Future Improvements

- Authentication (JWT)
- Admin dashboard
- Payment integration
- Advanced filtering
- Search system
- Deployment on Vercel

---

## 👨‍💻 Developed By

**Akhil**  
Full Stack Developer  
Built using Next.js + MongoDB Atlas

---

⭐ If you like this project, give it a star!
