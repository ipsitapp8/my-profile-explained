import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Somnath Temple Prasad",
    category: "Prasad",
    price: "₹250",
    image: "/placeholder.svg",
    rating: 4.8,
    description: "Sacred prasad blessed at Somnath Jyotirlinga",
    inStock: true
  },
  {
    id: 2,
    name: "Handwoven Khadi Kurta",
    category: "Traditional Clothing",
    price: "₹1,200",
    image: "/placeholder.svg",
    rating: 4.6,
    description: "Pure khadi kurta with traditional motifs",
    inStock: true
  },
  {
    id: 3,
    name: "Brass Temple Bell",
    category: "Artifacts",
    price: "₹450",
    image: "/placeholder.svg",
    rating: 4.7,
    description: "Handcrafted brass bell for home temple",
    inStock: false
  },
  {
    id: 4,
    name: "Sandalwood Beads Mala",
    category: "Spiritual Items",
    price: "₹350",
    image: "/placeholder.svg",
    rating: 4.9,
    description: "108 beads sandalwood mala for meditation",
    inStock: true
  },
  {
    id: 5,
    name: "Paithani Silk Saree",
    category: "Traditional Clothing",
    price: "₹8,500",
    image: "/placeholder.svg",
    rating: 4.8,
    description: "Authentic Paithani silk saree with golden border",
    inStock: true
  },
  {
    id: 6,
    name: "Sacred Ganga Water",
    category: "Prasad",
    price: "₹100",
    image: "/placeholder.svg",
    rating: 4.7,
    description: "Holy water from River Ganga in sealed bottle",
    inStock: true
  }
];

const categories = ["All", "Prasad", "Traditional Clothing", "Artifacts", "Spiritual Items"];

export const ShoppingSections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    const product = products.find(p => p.id === productId);
    toast({
      title: "Added to Cart",
      description: `${product?.name} has been added to your cart`,
    });
  };

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Sacred Shopping</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Authentic spiritual items, traditional crafts, and blessed prasad delivered to your doorstep
      </p>

      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="h-full">
            <div className="aspect-square bg-muted rounded-t-lg relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart 
                  className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                />
              </Button>
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {product.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{product.price}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{product.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <CardDescription className="mb-4">
                {product.description}
              </CardDescription>
              
              <Button 
                onClick={() => addToCart(product.id)}
                disabled={!product.inStock}
                className="w-full"
              >
                {product.inStock ? (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </>
                ) : (
                  "Out of Stock"
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <Card className="sticky bottom-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{cart.length} items in cart</p>
                <p className="text-sm text-muted-foreground">Ready for checkout</p>
              </div>
              <Button>
                <ShoppingCart className="h-4 w-4 mr-2" />
                View Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};