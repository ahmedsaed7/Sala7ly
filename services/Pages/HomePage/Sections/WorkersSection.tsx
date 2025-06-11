"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import WorkerCard from '@/components/ui/Card/Card';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Button } from '@/components/ui/Button/Button';

const WorkersSection = () => {
  // Worker data
  const allWorkers = [
    {
      id: 1,
      name: "Christopher Anderson",
      title: "Professional House Cleaner",
      rating: 3.5,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567890",
      facebook: "https://facebook.com",
      whatsapp: "1234567890",
      category: "Cleaning"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Expert Plumber",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567891",
      facebook: "https://facebook.com/sarah",
      whatsapp: "1234567891",
      category: "Plumbing"
    },
    {
      id: 3,
      name: "Michael Brown",
      title: "Electrician Specialist",
      rating: 2.5,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567892",
      facebook: "https://facebook.com/michael",
      whatsapp: "1234567892",
      category: "Electrical"
    },
    {
      id: 4,
      name: "Emily Wilson",
      title: "Landscaping Artist",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567893",
      facebook: "https://facebook.com/emily",
      whatsapp: "1234567893",
      category: "Landscaping"
    },
    {
      id: 5,
      name: "David Lee",
      title: "Painting Professional",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567894",
      facebook: "https://facebook.com/david",
      whatsapp: "1234567894",
      category: "Painting"
    },
    {
      id: 6,
      name: "Jessica Martinez",
      title: "Interior Designer",
      rating: 4.1,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567895",
      facebook: "https://facebook.com/jessica",
      whatsapp: "1234567895",
      category: "Design"
    },
    {
      id: 7,
      name: "Robert Taylor",
      title: "Senior Cleaner",
      rating: 4.3,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567896",
      facebook: "https://facebook.com/robert",
      whatsapp: "1234567896",
      category: "Cleaning"
    },
    {
      id: 8,
      name: "Jennifer Adams",
      title: "Master Plumber",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567897",
      facebook: "https://facebook.com/jennifer",
      whatsapp: "1234567897",
      category: "Plumbing"
    },
    {
      id: 9,
      name: "Daniel Clark",
      title: "Electrical Engineer",
      rating: 3.8,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567898",
      facebook: "https://facebook.com/daniel",
      whatsapp: "1234567898",
      category: "Electrical"
    },
    {
      id: 10,
      name: "Olivia Parker",
      title: "Garden Designer",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567899",
      facebook: "https://facebook.com/olivia",
      whatsapp: "1234567899",
      category: "Landscaping"
    },
    {
      id: 11,
      name: "James Wilson",
      title: "Wall Painting Expert",
      rating: 3.9,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567810",
      facebook: "https://facebook.com/james",
      whatsapp: "1234567810",
      category: "Painting"
    },
    {
      id: 12,
      name: "Sophia Garcia",
      title: "Home Stylist",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      phone: "+1234567811",
      facebook: "https://facebook.com/sophia",
      whatsapp: "1234567811",
      category: "Design"
    }
  ];
  // State management
  const [workers, setWorkers] = useState(allWorkers);
  const [visibleWorkers, setVisibleWorkers] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [ratingFilter, setRatingFilter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter workers
  useEffect(() => {
    let filtered = allWorkers;

    if (searchTerm) {
      filtered = filtered.filter(worker =>
        worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(worker => worker.category === selectedCategory);
    }

    if (ratingFilter > 0) {
      filtered = filtered.filter(worker => worker.rating >= ratingFilter);
    }

    setWorkers(filtered);
    setVisibleWorkers(4);
    setHasMore(filtered.length > 4);
  }, [searchTerm, selectedCategory, ratingFilter]);

  // Load more workers
  const loadMoreWorkers = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      setVisibleWorkers(prev => {
        const newVisible = prev + 4;
        setHasMore(newVisible < workers.length);
        return newVisible;
      });
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, workers.length]);

  // Infinite scroll handler
  useEffect(() => {
    const currentContainer = containerRef.current;

    const handleScroll = () => {
      if (!currentContainer || isLoading || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } = currentContainer;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;

      if (isNearBottom) {
        loadMoreWorkers();
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener('scroll', handleScroll);
      return () => currentContainer.removeEventListener('scroll', handleScroll);
    }
  }, [loadMoreWorkers, isLoading, hasMore]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#23486A] to-[#3B6790]" id="our-workers">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#EFB036] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#4C7B8B] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFB036] mb-4">
            Our Professional Workers
          </h2>
          <p className="text-lg md:text-xl text-[#F5EEDC] max-w-3xl mx-auto">
            Find skilled professionals for all your home service needs
          </p>
        </div>

        {/* Search and filter bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-[#F5EEDC] p-4 rounded-xl shadow-lg">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-[#23486A]" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent text-[#23486A] placeholder-[#23486A]/70"
              placeholder="Search workers..."
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full px-4 py-2 border border-[#3B6790]/30 rounded-lg bg-white text-[#23486A] focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent transition-all duration-200"
            >
              <option value="All Categories">All Categories</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Painting">Painting</option>
              <option value="Design">Design</option>
            </select>

            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-[#EFB036] text-[#23486A] font-semibold rounded-lg hover:bg-[#EFB036]/90 hover:shadow-md active:scale-95 transition-all duration-200 shadow-sm"
            >
              <FaFilter className="text-[#23486A]" />
              Filters
            </Button>
          </div>
        </div>

        {/* Advanced filters */}
        {showFilters && (
          <div className="mb-8 p-4 bg-[#F5EEDC] rounded-xl shadow-md">
            <h3 className="text-[#23486A] font-semibold mb-3">Advanced Filters</h3>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-auto">
                <label className="block text-[#23486A] mb-1">Minimum Rating</label>
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(Number(e.target.value))}
                  className="block w-full px-4 py-2 border border-[#3B6790]/30 rounded-lg bg-white text-[#23486A] focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent"
                >
                  <option value="0">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Scrollable workers container with custom scrollbar */}
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-6 overflow-y-auto pb-8"
          style={{
            maxHeight: '70vh',
            scrollbarWidth: 'thin',
            scrollbarColor: '#EFB036 #3B6790'
          }}
        >
          {workers.slice(0, visibleWorkers).map((worker) => (
            <div
              key={worker.id}
              className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
            >
              <WorkerCard
                name={worker.name}
                title={worker.title}
                rating={worker.rating}
                imageUrl={worker.imageUrl}
                phone={worker.phone}
                facebook={worker.facebook}
                whatsapp={worker.whatsapp}
                onAboutClick={() => {
                  localStorage.setItem('selectedWorker', JSON.stringify(worker));
                  window.location.href = '/details';
                }}
              />

            </div>
          ))}
          {isLoading && (
            <div className="w-full flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EFB036]"></div>
            </div>
          )}

          {!hasMore && workers.length > 0 && (
            <div className="w-full text-center py-8 text-[#F5EEDC]">
              You&apos;ve viewed all available workers
            </div>
          )}

          {workers.length === 0 && (
            <div className="w-full text-center py-8 text-[#F5EEDC]">
              No workers found matching your criteria
            </div>
          )}
        </div>
        {/* Manual load more button */}
        {hasMore && !isLoading && workers.length > 0 && (
          <div className="text-center mt-8">
            <Button
              onClick={loadMoreWorkers}
              className="px-8 py-3 bg-[#EFB036] text-[#23486A] font-bold rounded-xl hover:bg-[#EFB036]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Load More Workers
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(WorkersSection);