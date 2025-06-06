# Luxury Automation Empire Dashboard

## 🎯 Overview
A comprehensive web dashboard for managing dual-business models:
1. **Viral Content Engine** - TikTok automation with affiliate links
2. **Service Sales Pipeline** - Luxury lifestyle content leading to high-ticket services

## 🚀 Phase 1: Demo Mode
This is the demo version with mock data. All features are functional for testing.

## 🛠️ Technology Stack
- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with luxury theme
- **Charts**: Recharts for analytics
- **Database**: Supabase (configured)
- **Hosting**: Vercel (ready for deployment)

## 📊 Features
- **Dashboard Overview** - Revenue tracking for both business models
- **Content Hub** - Manage viral videos and luxury content
- **Lead Pipeline** - Track service sales from TikTok to closed deals
- **Financial Analytics** - Detailed money flow tracking
- **Compliance Monitor** - Content validation system
- **Campaign Management** - Affiliate vs service campaigns

## 🎨 Design
- Dark luxury theme with gold accents
- Professional business aesthetic
- Mobile responsive
- Modern UI components

## 🔧 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)
1. Push this code to a GitHub repository
2. Connect repository to Vercel
3. Auto-deployment setup complete

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure
```
frontend/
├── app/                    # Next.js 13+ app router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Dashboard homepage
│   └── content/            # Content management pages
├── components/             # Reusable UI components
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── MetricCard.tsx      # Metric display cards
│   └── charts/             # Chart components
├── lib/                    # Utilities and configurations
└── public/                 # Static assets
```

## 🔗 Phase 2: Production Setup
When ready for production, add your API keys:
- TikTok Creator API
- HeyGen for video generation
- ElevenLabs for voice synthesis
- OpenAI/Anthropic for content generation

## 🎯 Business Models

### Model 1: Viral Content Engine
- **Input**: Trending topics, affiliate products
- **Output**: Viral TikTok videos with affiliate links
- **Revenue**: Commission-based passive income

### Model 2: Service Sales Pipeline
- **Input**: Authority-building luxury content
- **Output**: High-ticket service sales
- **Revenue**: $5K-$50K+ per client

## 📈 Analytics
Track performance across both business models:
- Content engagement rates
- Lead generation metrics
- Revenue attribution
- ROI analysis
- Conversion funnels

## 🛡️ Compliance
Built-in compliance system for:
- Affiliate marketing disclosures
- Service marketing claims
- Income disclaimer requirements
- GDPR data protection

## 🎨 Customization
- Luxury color scheme (customizable in `tailwind.config.js`)
- Modular component system
- Responsive design system
- Professional business aesthetics

## 📞 Support
This platform integrates with your existing Supabase database and is ready for your API configurations in Phase 2.