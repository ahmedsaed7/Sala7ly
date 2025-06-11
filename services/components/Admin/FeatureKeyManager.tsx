'use client';
import { useState, useEffect } from 'react';
import { storage } from '@/lib/utils/storage';
import { Button } from '../ui/Button/Button';

export default function FeatureKeyManager() {
  const [newKey, setNewKey] = useState('');
  const [keys, setKeys] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setKeys(storage.getFeatureKeys());
    setIsLoading(false);
  }, []);

  const addKey = () => {
    if (newKey.trim()) {
      storage.addFeatureKey(newKey);
      setKeys(storage.getFeatureKeys());
      setNewKey('');
    }
  };

  const removeKey = (key: string) => {
    storage.removeFeatureKey(key);
    setKeys(storage.getFeatureKeys());
  };

  if (isLoading) {
    return <div className="p-6 text-[#F5EEDC]">Loading...</div>;
  }

  return (
    <div className="p-6 bg-[#23486A] rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#EFB036] mb-6">Feature Key Management</h2>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          placeholder="Enter new feature key"
          className="flex-1 p-2 bg-[#F5EEDC] text-[#23486A] rounded border border-[#4C7B8B] focus:ring-2 focus:ring-[#EFB036]"
          onKeyDown={(e) => e.key === 'Enter' && addKey()}
        />
        <Button
          onClick={addKey}
          className="bg-[#EFB036] hover:bg-[#e6a72b] text-[#23486A] font-medium px-4 py-2"
        >
          Add Key
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#F5EEDC]">Active Feature Keys</h3>
        {keys.length === 0 ? (
          <p className="text-[#F5EEDC]">No feature keys available</p>
        ) : (
          <ul className="divide-y divide-[#4C7B8B]">
            {keys.map((key) => (
              <li key={key} className="py-3 flex justify-between items-center">
                <code className="font-mono text-[#F5EEDC] bg-[#3B6790] px-3 py-1 rounded">
                  {key}
                </code>
                <Button
                  onClick={() => removeKey(key)}
                  className="text-red-400 hover:text-red-300 bg-transparent hover:bg-transparent p-1"
                  aria-label={`Remove key ${key}`}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}