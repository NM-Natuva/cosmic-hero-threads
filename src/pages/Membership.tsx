
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

const MembershipTier = ({ 
  name, 
  price, 
  features, 
  recommended = false 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  recommended?: boolean;
}) => {
  const { toast } = useToast();
  
  const handleSubscribe = () => {
    toast({
      title: "Subscription initiated",
      description: `You selected the ${name} plan. This would redirect to payment.`,
    });
  };
  
  return (
    <div className={`border rounded-lg p-6 flex flex-col ${
      recommended ? 'border-primary shadow-lg relative' : 'border-border'
    }`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm py-1 px-3 rounded-full">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="mt-2 mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-muted-foreground">/month</span>}
      </div>
      <ul className="mb-6 flex-grow space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        onClick={handleSubscribe}
        variant={recommended ? "default" : "outline"}
        className="w-full"
      >
        Subscribe Now
      </Button>
    </div>
  );
};

const Membership = () => {
  const { totalCartItems, setIsCartOpen } = useCart();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        cartItemCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-cosmic-purple to-cosmic-pink text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join The Hero Club</h1>
            <p className="text-xl mb-8 text-white/90">
              Get exclusive benefits, early access to limited editions, and members-only discounts.
            </p>
          </div>
        </section>
        
        {/* Membership Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Membership Plan</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <MembershipTier 
                name="Basic" 
                price="Free" 
                features={[
                  "Access to standard collections",
                  "Newsletter subscription",
                  "Community forum access",
                  "Standard shipping rates"
                ]} 
              />
              <MembershipTier 
                name="Premium" 
                price="$9.99" 
                features={[
                  "Early access to new collections",
                  "10% discount on all purchases",
                  "Free standard shipping",
                  "Exclusive member events",
                  "Premium newsletter"
                ]} 
                recommended={true}
              />
              <MembershipTier 
                name="Ultimate" 
                price="$19.99" 
                features={[
                  "First access to limited editions",
                  "20% discount on all purchases",
                  "Free express shipping",
                  "VIP member events",
                  "Exclusive merchandise",
                  "Annual special gift"
                ]} 
              />
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Membership Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Early Access</h3>
                <p className="text-muted-foreground">Be the first to shop new collections and limited editions.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Discounts</h3>
                <p className="text-muted-foreground">Save on every purchase with member-only discounts.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="text-muted-foreground">Enjoy free shipping on all your orders as a premium member.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Membership;
