import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  brand: string;
  description: string;
  ingredients: string;
  usage: string;
  form: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Consultation {
  id: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'online' | 'clinic';
  clinic?: string;
  concern: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  price: number;
}

interface AppState {
  user: User | null;
  cart: CartItem[];
  wishlist: Product[];
  consultations: Consultation[];
  isLoading: boolean;
}

type AppAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'BOOK_CONSULTATION'; payload: Consultation }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AppState = {
  user: null,
  cart: [],
  wishlist: [],
  consultations: [],
  isLoading: false,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    
    case 'LOGOUT':
      return { ...state, user: null, cart: [], wishlist: [] };
    
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };
    
    case 'BOOK_CONSULTATION':
      return {
        ...state,
        consultations: [...state.consultations, action.payload]
      };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};