
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-pattern">
      <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg text-white max-w-md mx-4">
        <h1 className="hero-title text-6xl font-bold mb-6">404</h1>
        <p className="text-xl mb-8">Oops! This page has vanished into another dimension.</p>
        <Button asChild className="bg-hero-accent hover:bg-hero-accent/90">
          <a href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Return to Home Base
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
