function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center border-b border-gray-200">
        <div className="text-2xl font-black tracking-tighter text-blue-700">
          NEXUS<span className="text-gray-800">POS</span>
        </div>
        <nav>
          <button className="text-gray-500 hover:text-blue-600 font-medium mx-4 transition-colors">
            System Status
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition-all shadow-sm">
            Staff Login
          </button>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide">
            v1.0 Local Development
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Next-Generation Retail, <br />
            <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Secured & Headless.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect your frontline cashiers directly to the Django backend. Manage inventory, process transactions, and maintain absolute role-based control.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg font-bold shadow-md transition-all hover:-translate-y-0.5">
              Open Cash Register
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 text-lg px-8 py-3 rounded-lg font-bold shadow-sm transition-all hover:-translate-y-0.5">
              View Database
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center">
        <p className="text-gray-400 text-sm font-medium">
          &copy; 2026 NexusPOS System. Connected to Django API on port 8000.
        </p>
      </footer>

    </div>
  );
}

export default App;