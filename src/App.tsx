import React, { useState } from 'react';

const mockContact = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '555-555-5555',
  address: '123 Main St, San Francisco, CA',
  company: 'Acme Inc.',
  linkedin: null,
  enriched: {
    company: 'Acme Inc.',
    title: 'Head of Product',
    website: 'https://acme.com',
    logo: 'https://logo.clearbit.com/acme.com',
  },
};

export default function App() {
  const [approve, setApprove] = useState(false);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Google Contacts Power Tool</h1>
      <pre className="bg-gray-100 p-4 rounded text-sm">
        {JSON.stringify(mockContact, null, 2)}
      </pre>
      <button
        onClick={() => setApprove(!approve)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {approve ? 'Approved' : 'Approve Merge'}
      </button>
    </main>
  );
}
