"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, Search, Phone, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export default function MessagesPage() {
  const searchParams = useSearchParams();
  const initialTechnician = searchParams?.get('technician') || null;
  
  const [selectedContact, setSelectedContact] = useState<string | null>(initialTechnician);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const contacts = [
    {
      id: 1,
      name: 'Teresa Williams',
      role: 'Plumbing Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
      lastMessage: "I'll be there on time tomorrow for the sink repair.",
      timestamp: '2:30 PM',
      online: true,
    },
    {
      id: 2,
      name: 'Dan Peters',
      role: 'HVAC Technician',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop',
      lastMessage: 'The parts for your AC unit have arrived. We can schedule installation.',
      timestamp: 'Yesterday',
      online: false,
    },
    {
      id: 3,
      name: 'Rio Ronnie',
      role: 'Electrical Expert',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&fit=crop',
      lastMessage: "I've completed the electrical inspection. Everything looks good!",
      timestamp: 'Apr 12',
      online: true,
    },
    {
      id: 4,
      name: 'Sophia Chen',
      role: 'Carpentry Expert',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
      lastMessage: 'The cabinet installation is scheduled for next week.',
      timestamp: 'Apr 8',
      online: false,
    },
  ];
  
  const messages = {
    'Teresa Williams': [
      { sender: 'Teresa Williams', text: "Hello! I'm Teresa, your assigned plumber for the sink repair.", time: '10:15 AM' },
      { sender: 'You', text: 'Hi Teresa, thanks for getting in touch.', time: '10:18 AM' },
      { sender: 'Teresa Williams', text: "I'll be arriving tomorrow between 3:30 PM and 5:30 PM. Does that work for you?", time: '10:20 AM' },
      { sender: 'You', text: 'Yes, that time works great for me.', time: '10:22 AM' },
      { sender: 'You', text: 'Should I prepare anything before you arrive?', time: '10:23 AM' },
      { sender: 'Teresa Williams', text: 'Just clear the area under the sink cabinet so I can easily access the pipes.', time: '10:25 AM' },
      { sender: 'Teresa Williams', text: "I'll bring all the necessary tools and parts.", time: '10:25 AM' },
      { sender: 'You', text: "Great, I'll make sure to clear everything out.", time: '10:27 AM' },
      { sender: 'Teresa Williams', text: "I'll be there on time tomorrow for the sink repair.", time: '2:30 PM' },
    ],
    'Dan Peters': [
      { sender: 'Dan Peters', text: 'Hi, this is Dan from HVAC Services.', time: 'Apr 10, 9:30 AM' },
      { sender: 'You', text: 'Hi Dan, looking forward to the AC maintenance.', time: 'Apr 10, 9:45 AM' },
      { sender: 'Dan Peters', text: "Just wanted to let you know that I've ordered the replacement parts for your AC unit.", time: 'Apr 10, 10:00 AM' },
      { sender: 'You', text: "That's great news! How long will it take to arrive?", time: 'Apr 10, 10:15 AM' },
      { sender: 'Dan Peters', text: 'The parts for your AC unit have arrived. We can schedule installation.', time: 'Yesterday, 3:15 PM' },
    ],
    'Rio Ronnie': [
      { sender: 'Rio Ronnie', text: "Hello, I'll be handling your electrical inspection tomorrow.", time: 'Apr 11, 11:20 AM' },
      { sender: 'You', text: 'Thanks Rio, what time should I expect you?', time: 'Apr 11, 11:30 AM' },
      { sender: 'Rio Ronnie', text: "I'll be there around 2 PM. The inspection should take about an hour.", time: 'Apr 11, 11:35 AM' },
      { sender: 'You', text: "Perfect, I'll be home at that time.", time: 'Apr 11, 11:40 AM' },
      { sender: 'Rio Ronnie', text: "I've completed the electrical inspection. Everything looks good!", time: 'Apr 12, 3:05 PM' },
    ],
    'Sophia Chen': [
      { sender: 'Sophia Chen', text: "Hi, I'm Sophia, your cabinet installation specialist.", time: 'Apr 8, 10:00 AM' },
      { sender: 'You', text: 'Hi Sophia, looking forward to the new cabinets.', time: 'Apr 8, 10:10 AM' },
      { sender: 'Sophia Chen', text: "I've reviewed your order and measurements. The cabinet installation is scheduled for next week.", time: 'Apr 8, 10:15 AM' },
    ],
  };
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getCurrentMessages = () => {
    if (!selectedContact) return [];
    return messages[selectedContact as keyof typeof messages] || [];
  };
  
  const handleSendMessage = () => {
    if (messageInput.trim() === '' || !selectedContact) return;
    // In a real app, this would send the message to the backend
    console.log(`Sending message to ${selectedContact}: ${messageInput}`);
    setMessageInput('');
  };
  
  useEffect(() => {
    // If there's a technician parameter in the URL, select that contact
    if (initialTechnician) {
      setSelectedContact(initialTechnician);
    }
  }, [initialTechnician]);
  
  return (
    <div className="p-6 text-[#F5EEDC] h-[calc(100vh-150px)] ">
      <h1 className="text-4xl font-bold mb-6 text-[#EFB036]">Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Contacts List */}
        <div className="bg-[#3B6790] rounded-xl p-4 overflow-hidden flex flex-col h-full">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EFB036]" size={20} />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full bg-[#23486A] border border-[#EFB036] rounded-lg py-2 px-10 text-[#eae1ca] placeholder-[#EFB036]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="overflow-y-auto flex-1">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <div 
                  key={contact.id}
                  className={`p-3 rounded-lg mb-2 cursor-pointer ${
                    selectedContact === contact.name 
                      ? 'bg-[#23486A]' 
                      : 'hover:bg-[#23486A]/50'
                  }`}
                  onClick={() => setSelectedContact(contact.name)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full" />
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#3B6790]"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium truncate">{contact.name}</h3>
                        <span className="text-xs text-[#4C7B8B]">{contact.timestamp}</span>
                      </div>
                      <p className="text-sm text-[#EFB036]">{contact.role}</p>
                      <p className="text-xs text-[#4C7B8B] truncate mt-1">{contact.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6">
                <p>No contacts found</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="bg-[#f6f1e1] rounded-xl p-4 flex flex-col h-full md:col-span-2">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="flex w-full justify-between items-center p-4 border-b bg-[#23486A] border-[#23486A]">
                <div className="flex items-center space-x-3">
                  <img 
                    src={contacts.find(c => c.name === selectedContact)?.avatar} 
                    alt={selectedContact} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{selectedContact}</h3>
                    <p className="text-xs text-[#EFB036]">
                      {contacts.find(c => c.name === selectedContact)?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="p-2 rounded-full bg-[#23486A] hover:bg-[#1a3655]">
                    <Phone size={16} />
                  </Button>
                  <Button className="p-2 rounded-full bg-[#23486A] hover:bg-[#1a3655]">
                    <Calendar size={16} />
                  </Button>
                  <Button className="p-2 rounded-full bg-[#23486A] hover:bg-[#1a3655]">
                    <User size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {getCurrentMessages().map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        msg.sender === 'You' 
                          ? 'bg-[#EFB036] text-[#23486A]' 
                          : 'bg-[#23486A] text-[#F5EEDC]'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'You' ? 'text-[#23486A]/70' : 'text-[#4C7B8B]'
                      }`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t bg-[#23486A] border-[#23486A] ">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-[#F5EEDC] border border-[#F5EEDC] hover:border-[#EFB036] rounded-lg py-2 px-4 text-[#F5EEDC] placeholder-[#4C7B8B]"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendMessage();
                    }}
                  />
                  <Button 
                    className="p-2 rounded-lg bg-[#EFB036] hover:bg-[#d9a032] text-[#23486A]"
                    onClick={handleSendMessage}
                  >
                    <Send size={20} />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-lg mb-4">Select a contact to start messaging</p>
                <p className="text-sm text-[#4C7B8B]">
                  You can communicate with your service providers here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 