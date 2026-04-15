# Finomic - Financial Assistant Dashboard

**CISC3003 Web Programming - Group 03**

A comprehensive financial tracking application built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
Project/
├── index.html                 # Entry point (redirects to login/dashboard)
│
├── AUTH PAGES
├── login.html                 # Login page
├── signup.html                # Sign up page
├── verify-email.html          # Email verification page
├── forgot-password.html       # Forgot password page
├── reset-password.html        # Reset password page
│
├── DASHBOARD PAGES
├── dashboard.html             # Main dashboard
├── transactions.html          # Transaction management
├── categories.html            # Category insights
├── reports.html               # Financial reports
├── help.html                  # Help & tips page
│
├── css/
│   ├── global.css            # Global shared styles
│   ├── auth.css              # Authentication page styles
│   ├── app-layout.css        # App layout & sidebar styles
│   ├── dashboard.css         # Dashboard-specific styles
│   ├── transactions.css      # Transactions page styles
│   ├── categories.css        # Categories page styles
│   ├── reports.css           # Reports page styles
│   └── help.css              # Help page styles
│
└── js/
    ├── utils.js              # Utility functions & data management
    ├── auth.js               # Authentication logic
    ├── sidebar.js            # Sidebar component & navigation
    ├── dashboard.js          # Dashboard page logic
    ├── transactions.js       # Transactions page logic
    ├── categories.js         # Categories page logic
    └── reports.js            # Reports page logic
```

## 🚀 Features

### Authentication System
- ✅ User login
- ✅ User signup
- ✅ Email verification (OTP)
- ✅ Forgot password
- ✅ Password reset

### Dashboard Features
- ✅ Total balance overview
- ✅ Income and expense tracking
- ✅ Financial health indicators
- ✅ Recent transactions display
- ✅ Savings rate calculation

### Transaction Management
- ✅ Add new transactions
- ✅ View all transactions
- ✅ Search & filter transactions
- ✅ Delete transactions
- ✅ Category-based organization

### Category Insights
- ✅ Expense category breakdown
- ✅ Income category breakdown
- ✅ Visual progress bars
- ✅ Top spending categories
- ✅ Category averages

### Financial Reports
- ✅ Monthly trend visualization
- ✅ Bar chart for income vs expenses
- ✅ Monthly breakdown table
- ✅ Net savings calculation
- ✅ Savings rate per month

### Help & Tips
- ✅ App usage instructions
- ✅ Financial best practices
- ✅ 50/30/20 budget rule
- ✅ Savings tips

## 💾 Data Persistence

All data is stored locally using browser `localStorage`:
- `finomic_user` - Current user information
- `finomic_transactions` - All transaction data
- `finomic_pending_email` - Temporary storage for email verification

## 🎨 Design

- **Dark theme** with modern aesthetics
- **Fully responsive** design for mobile and desktop
- **Color-coded** transactions (green for income, red for expenses)
- **Gradient accents** for visual appeal
- **Professional** card-based layout

## 🌐 Deployment

To deploy this application:

1. **Static Hosting**: Upload the entire `Project` folder to any static hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting
   - Any web server

2. **Access**: Open `index.html` in a browser or navigate to your deployed URL

3. **Local Testing**: Simply open `index.html` in any modern web browser

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet/Desktop: ≥ 768px

Mobile features:
- Collapsible sidebar
- Touch-friendly buttons
- Optimized layouts
- Mobile menu overlay

## 👥 Team Members

- Tatiana Muniz Rodriguez
- Diogo Barros
- LIN CHO KIO Diana
- Effy
- Edith

## 📝 Course Information

**Course**: CISC3003 Web Programming  
**Group**: 03  
**Year**: 2024

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling (no frameworks)
- **JavaScript (ES6)** - Functionality (vanilla JS, no frameworks)
- **localStorage** - Data persistence

## 🎯 Course Requirements Met

✅ Full-stack authentication system (signup, login, email verification, password reset)  
✅ Responsive design for mobile and desktop  
✅ Search and filter functionality  
✅ Data persistence with localStorage  
✅ Clean, organized file structure  
✅ Modern UI/UX design  
✅ No external frameworks (vanilla JS)  
✅ Ready for deployment to web URL

---

**Made with ❤️ for CISC3003 Web Programming Course**
