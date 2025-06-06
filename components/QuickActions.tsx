'use client'

import { 
  Video, 
  Crown, 
  Target, 
  Users, 
  BarChart3, 
  Zap,
  Plus,
  TrendingUp
} from 'lucide-react'

const actions = [
  {
    title: 'Generate Viral Content',
    description: 'Create new TikTok videos with AI personas',
    icon: Video,
    color: 'from-luxury-600 to-luxury-500',
    action: 'generate-content'
  },
  {
    title: 'Launch Service Campaign',
    description: 'Start luxury lifestyle authority building',
    icon: Crown,
    color: 'from-purple-600 to-purple-500',
    action: 'launch-campaign'
  },
  {
    title: 'Review Leads',
    description: 'Check new service inquiries',
    icon: Users,
    color: 'from-blue-600 to-blue-500',
    action: 'review-leads'
  },
  {
    title: 'Analyze Performance',
    description: 'View detailed analytics dashboard',
    icon: BarChart3,
    color: 'from-green-600 to-green-500',
    action: 'view-analytics'
  }
]

export default function QuickActions() {
  const handleAction = (action: string) => {
    // Handle different actions
    console.log('Action triggered:', action)
  }

  return (
    <div className="luxury-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-100">Quick Actions</h3>
        <Zap className="w-6 h-6 text-luxury-500" />
      </div>
      
      <div className="space-y-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleAction(action.action)}
            className="w-full text-left p-4 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-200 border border-dark-600 hover:border-dark-500 group"
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} flex-shrink-0`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-100 group-hover:text-luxury-400 transition-colors">
                  {action.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  {action.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-dark-700">
        <button className="w-full luxury-button flex items-center justify-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create New Campaign</span>
        </button>
      </div>
    </div>
  )
}