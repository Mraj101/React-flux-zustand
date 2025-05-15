import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      // Cart state
      items: [],
      
      // Actions
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);
        
        if (existingItem) {
          // Update quantity if item already exists
          set({
            items: currentItems.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
        } else {
          // Add new item with quantity 1
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },
      
      removeItem: (productId) => set({
        items: get().items.filter(item => item.id !== productId)
      }),
      
      updateQuantity: (productId, quantity) => set({
        items: get().items.map(item => 
          item.id === productId 
            ? { ...item, quantity: Math.max(1, quantity) } 
            : item
        )
      }),
      
      clearCart: () => set({ items: [] }),
      
      // Computed values (selectors)
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + (item.price * item.quantity), 
          0
        );
      }
    }),
    {
      name: 'shopping-cart',
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;