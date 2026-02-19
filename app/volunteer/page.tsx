'use client';

import { useState } from 'react';

export default function Volunteer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Volunteer With Us</h1>
        <p className="text-xl text-gray-700 mb-12">Join our mission and make a direct impact in communities.</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Volunteer Opportunities</h2>
            <div className="space-y-4">
              {[
                { title: 'Program Implementation', desc: 'Support delivery of education, training, or community development programs' },
                { title: 'Administrative Support', desc: 'Assist with office operations, data management, and administrative tasks' },
                { title: 'Mentoring', desc: 'Mentor young people or beneficiaries in your area of expertise' },
                { title: 'Advocacy & Campaigns', desc: 'Support awareness campaigns and advocacy initiatives' },
              ].map((opp, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-primary mb-2">{opp.title}</h3>
                  <p className="text-gray-700">{opp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Why Volunteer?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-accent mr-3 text-lg">✓</span> Make meaningful impact in communities</li>
              <li className="flex items-start"><span className="text-accent mr-3 text-lg">✓</span> Gain valuable experience and skills</li>
              <li className="flex items-start"><span className="text-accent mr-3 text-lg">✓</span> Meet passionate like-minded people</li>
              <li className="flex items-start"><span className="text-accent mr-3 text-lg">✓</span> Be part of a global movement</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Get Involved?</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              {showForm ? 'Close Form' : 'Become a Volunteer'}
            </button>

            {showForm && (
              <form className="mt-6 space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <textarea placeholder="Tell us about yourself and why you want to volunteer" className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"></textarea>
                <button type="submit" className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90">
                  Submit Application
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
