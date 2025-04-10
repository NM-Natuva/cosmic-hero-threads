
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MembershipBanner: React.FC = () => {
  const { toast } = useToast();
  
  const handleInfoClick = () => {
    toast({
      title: "Hero Club Benefits",
      description: "Join to get early access, discounts, free shipping and exclusive merchandise!",
    });
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-cosmic-purple to-cosmic-pink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1579547621212-856e1a44c907?q=80&w=1000" 
          alt="Membership background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">Join The Hero Club</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Become a member and unlock exclusive benefits: early access to new designs,
          member-only discounts, free shipping, and limited edition merchandise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/membership" 
            className="inline-flex items-center bg-white text-cosmic-purple py-3 px-6 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Join Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button
            onClick={handleInfoClick}
            className="inline-flex items-center bg-transparent border border-white text-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBanner;
