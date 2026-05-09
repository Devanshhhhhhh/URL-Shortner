<div align="center">
  <h1 style="font-size: 3em; margin: 20px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">
    🔗 URL SQUEEZER
  </h1>
  
  <p style="font-size: 1.3em; color: #555; margin: 10px 0 30px;">
    Transform long URLs into short, shareable links with instant redirects
  </p>

  <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 30px;">
    <img src="https://img.shields.io/badge/React-19.2-blue?logo=react&style=flat-square" alt="React">
    <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js&style=flat-square" alt="Node.js">
    <img src="https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb&style=flat-square" alt="MongoDB">
    <img src="https://img.shields.io/badge/Vite-8.0-purple?logo=vite&style=flat-square" alt="Vite">
  </div>
</div>

---

## 📖 About

**URL SQUEEZER** is a full-stack web application that shortens long URLs into compact, memorable links. Users can generate unique short IDs, copy links with a single click, and seamlessly redirect to original URLs. Perfect for social media sharing, messaging, and anywhere you need shorter URLs.

---

## ✨ Key Features

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">

<div style="background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; border-radius: 8px;">
  <h3 style="color: #667eea; margin-top: 0;">🎯 Unique Short IDs</h3>
  <p>Collision-free ID generation using ShortID library</p>
</div>

<div style="background: #f9f8ff; border-left: 4px solid #764ba2; padding: 20px; border-radius: 8px;">
  <h3 style="color: #764ba2; margin-top: 0;">📋 One-Click Copy</h3>
  <p>Instant clipboard copying of shortened URLs</p>
</div>

<div style="background: #f8fff9; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 8px;">
  <h3 style="color: #0ea5e9; margin-top: 0;">⚡ Automatic Redirects</h3>
  <p>Seamless redirect to original URLs</p>
</div>

<div style="background: #fff8f9; border-left: 4px solid #ec4899; padding: 20px; border-radius: 8px;">
  <h3 style="color: #ec4899; margin-top: 0;">✅ Input Validation</h3>
  <p>Comprehensive error handling and user feedback</p>
</div>

<div style="background: #fffaf8; border-left: 4px solid #f97316; padding: 20px; border-radius: 8px;">
  <h3 style="color: #f97316; margin-top: 0;">⏳ Loading States</h3>
  <p>Visual feedback during URL generation</p>
</div>

<div style="background: #f8fff8; border-left: 4px solid #22c55e; padding: 20px; border-radius: 8px;">
  <h3 style="color: #22c55e; margin-top: 0;">📱 Fully Responsive</h3>
  <p>Works perfectly across all devices</p>
</div>

</div>

---

## 🛠️ Tech Stack

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0;">

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h3 style="margin-top: 0;">🎨 Frontend</h3>
  <ul style="list-style: none; padding: 0;">
    <li><strong>React 19.2</strong></li>
    <li>Vite 8.0</li>
    <li>Axios</li>
    <li>CSS3</li>
  </ul>
</div>

<div style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h3 style="margin-top: 0;">⚙️ Backend</h3>
  <ul style="list-style: none; padding: 0;">
    <li><strong>Node.js</strong></li>
    <li>Express.js 5.2</li>
    <li>Mongoose 9.3</li>
    <li>ShortID</li>
  </ul>
</div>

<div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h3 style="margin-top: 0;">☁️ Cloud & DB</h3>
  <ul style="list-style: none; padding: 0;">
    <li><strong>MongoDB Atlas</strong></li>
    <li>Vercel (Frontend)</li>
    <li>Render (Backend)</li>
  </ul>
</div>

</div>

---

## 🚀 Getting Started

<div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">

### Prerequisites
```
✓ Node.js (v14 or higher)
✓ MongoDB connection string
✓ Git installed
```

### Installation

#### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:
```env
PORT=8001
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:
```bash
npm run dev        # Development with nodemon
npm start          # Production
```

#### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:
```env
VITE_API_URL=http://localhost:8001
```

Start the frontend:
```bash
npm run dev
```

<div style="background: #d4edda; border: 2px solid #28a745; border-radius: 5px; padding: 15px; margin-top: 15px;">
  <strong style="color: #155724;">✅ Ready to go!</strong><br>
  Visit <code style="background: white; padding: 2px 5px; border-radius: 3px;">http://localhost:5173</code> in your browser 🎉
</div>

</div>

---

## 📚 Usage

<div style="background: #f0f7ff; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">

<table style="width: 100%; text-align: left;">
  <tr style="background: #0ea5e9; color: white;">
    <td style="padding: 15px; font-weight: bold;">Step</td>
    <td style="padding: 15px; font-weight: bold;">Action</td>
  </tr>
  <tr style="background: #f8fbff; border-bottom: 1px solid #0ea5e9;">
    <td style="padding: 15px; font-weight: bold; color: #0ea5e9;">1</td>
    <td style="padding: 15px;">Enter a URL - Paste any long URL into the input field</td>
  </tr>
  <tr style="background: #fff; border-bottom: 1px solid #0ea5e9;">
    <td style="padding: 15px; font-weight: bold; color: #0ea5e9;">2</td>
    <td style="padding: 15px;">Click "SQUEEZE IT!" - Generate a shortened URL</td>
  </tr>
  <tr style="background: #f8fbff; border-bottom: 1px solid #0ea5e9;">
    <td style="padding: 15px; font-weight: bold; color: #0ea5e9;">3</td>
    <td style="padding: 15px;">Copy the Link - Click the copy button</td>
  </tr>
  <tr style="background: #fff;">
    <td style="padding: 15px; font-weight: bold; color: #0ea5e9;">4</td>
    <td style="padding: 15px;">Share & Redirect - Paste the short URL anywhere</td>
  </tr>
</table>

</div>

---

## 🔌 API Endpoints

<div style="display: grid; grid-template-columns: 1fr; gap: 20px; margin: 20px 0;">

<div style="background: #f0f7ff; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 8px;">
  <h3 style="color: #0ea5e9; margin-top: 0;">📤 Generate Short URL</h3>
  <div style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 5px; font-family: monospace; margin: 10px 0;">
    <span style="color: #ce9178;">POST</span> /url
  </div>
  
  **Request:**
  ```json
  {
    "url": "https://example.com/very/long/url/here"
  }
  ```
  
  **Response:**
  ```json
  {
    "id": "x7k9m2"
  }
  ```
</div>

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; border-radius: 8px;">
  <h3 style="color: #22c55e; margin-top: 0;">🔗 Redirect to Original URL</h3>
  <div style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 5px; font-family: monospace; margin: 10px 0;">
    <span style="color: #ce9178;">GET</span> /:shortId
  </div>
  
  **Example:** `GET /x7k9m2`
  
  **Response:** Redirects to original URL (HTTP 301/302)
</div>

</div>

---

## 📁 Project Structure

<div style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; overflow-x: auto; margin: 20px 0;">

<pre style="margin: 0; font-size: 0.9em; line-height: 1.5;">📦 URL Shortener/
├── 📂 <span style="color: #4fc3f7;">backend</span>/
│   ├── 📄 index.js              <span style="color: #6a9955;">// Main server file</span>
│   ├── 📄 connect.js            <span style="color: #6a9955;">// MongoDB connection</span>
│   ├── 📄 package.json
│   ├── 📂 <span style="color: #4fc3f7;">controllers</span>/
│   │   └── 📄 url.js            <span style="color: #6a9955;">// URL generation logic</span>
│   ├── 📂 <span style="color: #4fc3f7;">models</span>/
│   │   └── 📄 url.js            <span style="color: #6a9955;">// MongoDB schema</span>
│   └── 📂 <span style="color: #4fc3f7;">routes</span>/
│       └── 📄 url.js            <span style="color: #6a9955;">// API routes</span>
│
├── 📂 <span style="color: #4fc3f7;">frontend</span>/
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   ├── 📄 index.html
│   ├── 📂 <span style="color: #4fc3f7;">src</span>/
│   │   ├── 📄 main.jsx
│   │   ├── 📄 App.jsx           <span style="color: #6a9955;">// Main component</span>
│   │   ├── 📄 App.css
│   │   └── 📂 <span style="color: #4fc3f7;">components</span>/
│   │       ├── 📄 InputURL.jsx  <span style="color: #6a9955;">// URL input & generation</span>
│   │       ├── 📄 InputURL.css
│   │       ├── 📄 Action.jsx    <span style="color: #6a9955;">// Navigation/tabs</span>
│   │       └── 📄 Action.css
│   └── 📂 <span style="color: #4fc3f7;">public</span>/
│
└── 📄 README.md</pre>

</div>

---

## 🔐 Database Schema

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin: 20px 0; color: white;">

<pre style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; overflow-x: auto; margin: 0;">
{
  <span style="color: #87ceeb;">shortId</span>: String (unique, required),
  <span style="color: #87ceeb;">redirectURL</span>: String (required),
  <span style="color: #87ceeb;">visitHistory</span>: [{ timestamp: Number }],
  <span style="color: #87ceeb;">createdAt</span>: Date,
  <span style="color: #87ceeb;">updatedAt</span>: Date
}</pre>

</div>

---

## 🌐 Live Demo

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h4 style="margin-top: 0;">🎨 Live Application</h4>
  <a href="https://url-shortner-snowy-phi.vercel.app/" style="background: white; color: #667eea; padding: 10px 15px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Visit Demo</a>
</div>

<div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h4 style="margin-top: 0;">🔗 Example</h4>
  <p style="margin: 10px 0; font-size: 0.9em;">yourbackend.com/x7k9m2</p>
</div>

</div>

---

## 💡 How It Works

<div style="margin: 30px 0;">

<div style="background: linear-gradient(to right, #667eea 0%, #764ba2 50%, #f093fb 100%); color: white; padding: 15px; border-radius: 8px 8px 0 0; text-align: center; font-weight: bold; font-size: 1.1em;">
  🔄 Complete Request & Redirect Flow
</div>

<div style="background: #f8f9ff; padding: 0;">

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #667eea; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</div>
  <div>
    <strong>User enters long URL</strong>
    <p style="margin: 5px 0; color: #666;">Paste URL in frontend → "SQUEEZE IT!"</p>
  </div>
</div>

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #764ba2; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</div>
  <div>
    <strong>Backend generates ShortID</strong>
    <p style="margin: 5px 0; color: #666;">API: POST /url → Create unique ID</p>
  </div>
</div>

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #0ea5e9; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">3</div>
  <div>
    <strong>Save to MongoDB</strong>
    <p style="margin: 5px 0; color: #666;">Store mapping: shortId → redirectURL</p>
  </div>
</div>

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #22c55e; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">4</div>
  <div>
    <strong>Display & Copy shortened URL</strong>
    <p style="margin: 5px 0; color: #666;">Frontend shows: example.com/x7k9m2</p>
  </div>
</div>

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #f97316; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">5</div>
  <div>
    <strong>User shares shortened URL</strong>
    <p style="margin: 5px 0; color: #666;">Copy & paste anywhere (social media, messages, etc.)</p>
  </div>
</div>

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #ec4899; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">6</div>
  <div>
    <strong>User visits shortened URL</strong>
    <p style="margin: 5px 0; color: #666;">Paste in browser address bar → Press Enter</p>
  </div>
</div>

<div style="display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding: 20px; gap: 15px;">
  <div style="background: #8b5cf6; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">7</div>
  <div>
    <strong>Backend finds mapping</strong>
    <p style="margin: 5px 0; color: #666;">Query MongoDB for original URL</p>
  </div>
</div>

<div style="display: flex; align-items: center; padding: 20px; gap: 15px;">
  <div style="background: #06b6d4; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">✓</div>
  <div>
    <strong>Automatic redirect!</strong>
    <p style="margin: 5px 0; color: #666;">res.redirect() → Browser goes to original URL ⚡</p>
  </div>
</div>

</div>

</div>

---

## 🧪 Testing

<div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 10px; padding: 20px; margin: 20px 0;">

<h3 style="color: #dc2626; margin-top: 0;">🔍 Test the Redirect Function</h3>

1. Generate a shortened URL through the UI
2. Copy the shortened URL (e.g., `http://localhost:8001/x7k9m2`)
3. Test with curl:

```bash
curl -L http://localhost:8001/x7k9m2
```

<div style="background: #dcfce7; border-left: 3px solid #16a34a; padding: 12px; margin-top: 15px; border-radius: 5px;">
  <strong style="color: #15803d;">✅ Expected Result:</strong> 
  Redirect to your original URL
</div>

</div>

---

## 📝 Key Files Explained

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin: 20px 0;">

<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #d97706;">📄 backend/index.js</h4>
  <p style="margin: 10px 0; font-size: 0.95em; color: #666;">Express server setup, MongoDB connection, and redirect handler logic</p>
</div>

<div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #1e40af;">📄 backend/controllers/url.js</h4>
  <p style="margin: 10px 0; font-size: 0.95em; color: #666;">Core URL generation logic and request handling functions</p>
</div>

<div style="background: #d1d5db; border-left: 4px solid #6b7280; padding: 15px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #374151;">📄 backend/models/url.js</h4>
  <p style="margin: 10px 0; font-size: 0.95em; color: #666;">MongoDB schema definition with validation rules</p>
</div>

<div style="background: #e0e7ff; border-left: 4px solid #818cf8; padding: 15px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #3730a3;">📄 frontend/src/components/InputURL.jsx</h4>
  <p style="margin: 10px 0; font-size: 0.95em; color: #666;">Main UI component for URL input form and result display</p>
</div>

<div style="background: #dcfce7; border-left: 4px solid #4ade80; padding: 15px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #15803d;">📄 frontend/src/App.jsx</h4>
  <p style="margin: 10px 0; font-size: 0.95em; color: #666;">Root React component and state management</p>
</div>

<div style="background: #f5f3ff; border-left: 4px solid #a78bfa; padding: 15px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #5b21b6;">📄 backend/routes/url.js</h4>
  <p style="margin: 10px 0; font-size: 0.95em; color: #666;">API route definitions and endpoint configurations</p>
</div>

</div>

---

## 🚀 Deployment

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">

<div style="background: linear-gradient(135deg, #000000 0%, #434343 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h3 style="margin-top: 0;">⚙️ Backend (Render)</h3>
  <ol style="text-align: left; padding: 15px 0;">
    <li>Connect GitHub repository</li>
    <li>Set <code style="background: rgba(255,255,255,0.1); padding: 2px 5px;">MONGODB_URI</code></li>
    <li>Set <code style="background: rgba(255,255,255,0.1); padding: 2px 5px;">PORT</code></li>
    <li>Deploy with <code style="background: rgba(255,255,255,0.1); padding: 2px 5px;">npm start</code></li>
  </ol>
</div>

<div style="background: linear-gradient(135deg, #0070f3 0%, #00d4ff 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h3 style="margin-top: 0;">🚀 Frontend (Vercel)</h3>
  <ol style="text-align: left; padding: 15px 0;">
    <li>Connect GitHub repository</li>
    <li>Set <code style="background: rgba(255,255,255,0.1); padding: 2px 5px;">VITE_API_URL</code></li>
    <li>Build: <code style="background: rgba(255,255,255,0.1); padding: 2px 5px;">npm run build</code></li>
    <li>Auto-deploy on push</li>
  </ol>
</div>

<div style="background: linear-gradient(135deg, #00ed64 0%, #13a538 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
  <h3 style="margin-top: 0;">🗄️ Database</h3>
  <ol style="text-align: left; padding: 15px 0;">
    <li>MongoDB Atlas cloud DB</li>
    <li>Free tier available</li>
    <li>Copy connection string</li>
    <li>Set in backend .env</li>
  </ol>
</div>

</div>

---

## 🤝 Contributing

<div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <p>Contributions are welcome! Please feel free to:</p>
  <ul>
    <li>🐛 Report bugs</li>
    <li>💡 Suggest improvements</li>
    <li>🔀 Submit pull requests</li>
    <li>📝 Improve documentation</li>
  </ul>
</div>

---

## 📄 License

<div style="background: #f5f5f5; border-left: 4px solid #6b7280; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <p>This project is <strong>open source</strong> and available under the <strong>ISC License</strong>.</p>
</div>

---

## 📧 Contact & Support

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 10px; text-align: center; margin: 30px 0;">

  <h2 style="margin-top: 0;">Made with ❤️ by You</h2>
  
  <p style="font-size: 1.1em; margin: 20px 0;">Have questions or want to contribute?</p>
  
  <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin: 20px 0;">
    <a href="mailto:devanshsharma18@gmail.com" style="background: rgba(255,255,255,0.2); color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;">📧 Email Me</a>
  </div>

  <p style="margin-bottom: 0; font-size: 0.9em; opacity: 0.9;">⭐ If you found this helpful, please star this repository!</p>

</div>
