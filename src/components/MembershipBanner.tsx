
import React from 'react';
import { ArrowRight } from 'lucide-react';

const MembershipBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cosmic-purple to-cosmic-pink text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join The Hero Club</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Become a member and unlock exclusive benefits: early access to new designs,
          member-only discounts, free shipping, and limited edition merchandise.
        </p>
        <a 
          href="/membership" 
          className="inline-flex items-center bg-white text-cosmic-purple py-3 px-6 rounded-md hover:bg-gray-100 transition-colors font-semibold"
        >
          Join Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default MembershipBanner;
