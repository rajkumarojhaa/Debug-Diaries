import React, { useState, useEffect } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, Search, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import AiBtn from "./AiBtn";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setShowLoginPopup(false);
    }
  }, [location.pathname]);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!authStatus) {
      setShowLoginPopup(true);
      return;
    }

    navigate(`/all-posts?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-sm bg-background/80">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Debug Diaries
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.slug)}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                )
            )}
            {authStatus && <LogoutBtn />}
            {authStatus && <AiBtn />}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-10 w-[200px] bg-background/50 focus:bg-background"
              />
            </form>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  bg-background/90">
      {navItems.map(
        (item) =>
          item.active && (
            <button
              key={item.name}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(item.slug);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
            >
              {item.name}
            </button>
          )
      )}

      {/* Auth Buttons */}
      {authStatus && (
        <>
          <div className="px-3 py-2">
            <LogoutBtn />
          </div>
          <div className="px-3 py-2">
            <AiBtn />
          </div>
        </>
      )}

      {/* Search Bar */}
      <div className="px-3 py-2">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="pl-10 w-full"
          />
        </form>
      </div>
    </div>
  </div>
)}


      {/* Login Required Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg mt-30">
            <p className="text-lg font-semibold">You need to log in to search or read blogs.</p>
            <div className="flex justify-end space-x-3 mt-4">
              <button 
                className="px-4 py-2 bg-gray-300 rounded" 
                onClick={() => setShowLoginPopup(false)}
              >
                Close
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;