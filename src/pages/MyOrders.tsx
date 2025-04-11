
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Package, Truck, AlertCircle } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
  items: number;
}

const MyOrders: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Check authentication status
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);

    if (!loginStatus) {
      toast({
        title: "Authentication required",
        description: "Please login to view your orders",
        variant: "destructive"
      });
      navigate('/login');
    } else {
      // Mock orders data - in a real app, this would be fetched from an API
      const mockOrders: Order[] = [
        {
          id: "ORD-7829",
          date: "2024-04-05",
          total: 2499,
          status: "delivered",
          items: 2
        },
        {
          id: "ORD-8342",
          date: "2024-04-08",
          total: 1999,
          status: "shipped",
          items: 1
        },
        {
          id: "ORD-9145",
          date: "2024-04-10",
          total: 4399,
          status: "pending",
          items: 3
        }
      ];
      
      setOrders(mockOrders);
    }
  }, [navigate, toast]);

  const getStatusIcon = (status: Order['status']) => {
    switch(status) {
      case 'delivered':
        return <Package size={18} className="text-green-500" />;
      case 'shipped':
        return <Truck size={18} className="text-blue-500" />;
      case 'pending':
        return <AlertCircle size={18} className="text-amber-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const handleTrackOrder = (orderId: string) => {
    toast({
      title: "Tracking Order",
      description: `Tracking information for order ${orderId} will be available soon.`
    });
  };

  return (
    <>
      <Navbar cartItemCount={0} onCartClick={() => {}} />
      <div className="container mx-auto px-4 py-8 min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        
        {orders.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Table>
              <TableCaption>A list of your recent orders.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{formatDate(order.date)}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>₹{order.total.toLocaleString('en-IN')}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleTrackOrder(order.id)}
                      >
                        Track Order
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-10">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No orders yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              When you place orders, they will appear here.
            </p>
            <Button
              className="mt-6"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
