import React from "react";
import { Link } from "react-router-dom";

export default function CommunityProject() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Community Project Campaign</h1>
        <p className="text-sm text-indigo-100 mt-2">
          Canva-designed digital campaign posters and event branding for
          Barangay Carikkikan Norte.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">📖 Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            This community project highlights digital designs created for
            Barangay Carikkikan Norte, supporting youth engagement,
            environmental activities, and public awareness campaigns. All
            visuals were designed in Canva, focusing on accessibility, color
            harmony, and clarity.
          </p>
        </section>

        {/* Canva Gallery */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">🎨 Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <iframe
              src="https://www.canva.com/design/DAGO5vp3BZY/sHYGwXwcjO4KnHqFrN3p2A/view?embed"
              title="Community Campaign Design 1"
              className="w-full h-64 rounded-xl border-0 shadow-md"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://www.canva.com/design/DAGwuHkRcW0/_05t208791BiXpDfGZy1VQ/view?embed"
              title="Community Campaign Design 2"
              className="w-full h-64 rounded-xl border-0 shadow-md"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://www.canva.com/design/DAGOuYXqlSw/8yRyCxYYiDRL-BA23hdYOw/view?embed"
              title="Community Campaign Design 3"
              className="w-full h-64 rounded-xl border-0 shadow-md"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61553250814490"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-indigo-700"
          >
            Visit Campaign Page
          </a>
          <Link to="/" className="px-4 py-2 border rounded-md hover:bg-gray-50">
            ← Back to Portfolio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Catherine Orbe. All rights reserved.
      </footer>
    </div>
  );
}
