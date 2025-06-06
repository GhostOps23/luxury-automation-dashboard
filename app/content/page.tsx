'use client'

import { useState } from 'react'
import { 
  Video, 
  Crown, 
  Zap, 
  Play, 
  MoreHorizontal,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Plus,
  Filter
} from 'lucide-react'

interface ContentItem {
  id: string
  title: string
  type: 'viral' | 'luxury' | 'authority'
  status: 'draft' | 'scheduled' | 'published' | 'viral'
  views: number
  engagement: number
  revenue: number
  thumbnail: string
  publishedAt?: Date
  scheduledFor?: Date
}

export default function ContentHub() {
  const [activeTab, setActiveTab] = useState<'all' | 'viral' | 'luxury' | 'authority'>('all')
  const [contentItems] = useState<ContentItem[]>([
    {
      id: '1',
      title: 'AI Business Setup Tutorial',
      type: 'viral',
      status: 'viral',
      views: 250000,
      engagement: 8.5,
      revenue: 1250,
      thumbnail: '/api/placeholder/300/400',
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
    },
    {
      id: '2', 
      title: 'Day in My Life Running AI Empire',
      type: 'luxury',
      status: 'published',
      views: 45000,
      engagement: 12.3,
      revenue: 0,
      thumbnail: '/api/placeholder/300/400',
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6)
    },
    {
      id: '3',
      title: 'How I Automated My Way to 6-Figures',
      type: 'luxury',
      status: 'scheduled',
      views: 0,
      engagement: 0,
      revenue: 0,
      thumbnail: '/api/placeholder/300/400',
      scheduledFor: new Date(Date.now() + 1000 * 60 * 60 * 4)
    },
    {
      id: '4',
      title: 'The AI Framework That Changed Everything',
      type: 'authority',
      status: 'draft',
      views: 0,
      engagement: 0,
      revenue: 0,
      thumbnail: '/api/placeholder/300/400'
    }
  ])

  const filteredContent = contentItems.filter(item => 
    activeTab === 'all' || item.type === activeTab
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'viral': return 'bg-green-500/20 text-green-400'
      case 'published': return 'bg-blue-500/20 text-blue-400'
      case 'scheduled': return 'bg-luxury-500/20 text-luxury-400'
      case 'draft': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'viral': return Video
      case 'luxury': return Crown
      case 'authority': return TrendingUp
      default: return Video
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-luxury-400 to-luxury-600 bg-clip-text text-transparent">
            Content Hub
          </h1>
          <p className="text-gray-400 mt-2">
            Manage your viral content and luxury lifestyle videos
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-dark-800 text-gray-300 rounded-lg hover:bg-dark-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="luxury-button">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-dark-800 p-1 rounded-lg w-fit">
        {[
          { key: 'all', label: 'All Content' },
          { key: 'viral', label: 'Viral Videos' },
          { key: 'luxury', label: 'Luxury Lifestyle' },
          { key: 'authority', label: 'Authority Building' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-luxury-500 text-dark-900'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between mb-4">
            <Video className="w-8 h-8 text-luxury-500" />
            <span className="text-2xl font-bold text-gray-100">24</span>
          </div>
          <p className="text-gray-400">Total Videos</p>
        </div>
        
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-gray-100">7</span>
          </div>
          <p className="text-gray-400">Viral Hits</p>
        </div>
        
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-gray-100">2.4M</span>
          </div>
          <p className="text-gray-400">Total Views</p>
        </div>
        
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-gray-100">8.2%</span>
          </div>
          <p className="text-gray-400">Avg Engagement</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => {
          const TypeIcon = getTypeIcon(item.type)
          
          return (
            <div key={item.id} className="luxury-card overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Thumbnail */}
              <div className="relative h-48 bg-dark-800">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-600/20 to-purple-600/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-luxury-400 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </div>
                
                {/* Type Icon */}
                <div className="absolute top-3 left-3 p-2 bg-dark-900/80 rounded-lg">
                  <TypeIcon className="w-4 h-4 text-luxury-400" />
                </div>
              </div>

              {/* Content Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      {item.views > 0 ? `${(item.views / 1000).toFixed(0)}K` : '0'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      {item.engagement > 0 ? `${item.engagement}%` : '0%'}
                    </span>
                  </div>
                </div>

                {/* Revenue */}
                {item.revenue > 0 && (
                  <div className="flex items-center justify-between mb-4 p-2 bg-green-500/10 rounded-lg">
                    <span className="text-sm text-gray-400">Revenue Generated</span>
                    <span className="text-sm font-medium text-green-400">
                      ${item.revenue.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* Timing */}
                <div className="text-xs text-gray-500 mb-4">
                  {item.publishedAt && `Published ${item.publishedAt.toLocaleDateString()}`}
                  {item.scheduledFor && `Scheduled for ${item.scheduledFor.toLocaleDateString()}`}
                  {item.status === 'draft' && 'Draft - Not scheduled'}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {item.status === 'published' && (
                      <>
                        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
                          <Share className="w-4 h-4 text-gray-400" />
                        </button>
                      </>
                    )}
                  </div>
                  <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No content found</h3>
          <p className="text-gray-500 mb-6">Create your first piece of content to get started</p>
          <button className="luxury-button">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </button>
        </div>
      )}
    </div>
  )
}