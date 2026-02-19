'use client';

import Link from 'next/link';

export default function NewsEventsSection() {
  const items = [
    {
      type: 'news',
      title: 'NEWIF Reaches 50,000 Beneficiaries',
      date: 'February 2024',
      icon: '📰',
    },
    {
      type: 'event',
      title: 'Women Empowerment Workshop',
      date: 'March 15, 2024',
      icon: '🎤',
    },
    {
      type: 'news',
      title: 'New Center Opens in Northern Region',
      date: 'January 2024',
      icon: '📰',
    },
    {
      type: 'event',
      title: 'Youth Leadership Summit',
      date: 'April 20, 2024',
      icon: '🎤',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Latest News & Events</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Stay updated with our latest announcements, programs, and community events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <p className="text-4xl">{item.icon}</p>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-accent mb-1">
                    {item.type === 'news' ? 'NEWS' : 'EVENT'}
                  </p>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/news"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All News
          </Link>
          <Link
            href="/events"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}
