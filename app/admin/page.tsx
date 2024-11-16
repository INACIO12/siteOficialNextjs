"use client";

import { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Settings,
  Briefcase
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('services')}
            className={`${
              activeTab === 'services'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}
          >
            <Briefcase className="w-5 h-5 mx-auto mb-1" />
            Serviços
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`${
              activeTab === 'team'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}
          >
            <Users className="w-5 h-5 mx-auto mb-1" />
            Equipe
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`${
              activeTab === 'testimonials'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}
          >
            <MessageSquare className="w-5 h-5 mx-auto mb-1" />
            Depoimentos
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`${
              activeTab === 'settings'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}
          >
            <Settings className="w-5 h-5 mx-auto mb-1" />
            Configurações
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'services' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Gerenciar Serviços
            </h2>
            {/* TODO: Implement services management UI */}
          </div>
        )}
        {activeTab === 'team' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Gerenciar Equipe
            </h2>
            {/* TODO: Implement team management UI */}
          </div>
        )}
        {activeTab === 'testimonials' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Gerenciar Depoimentos
            </h2>
            {/* TODO: Implement testimonials management UI */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Configurações
            </h2>
            {/* TODO: Implement settings UI */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;