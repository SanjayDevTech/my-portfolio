import { createContext } from 'react';

const GlobalIntersectionObserverContext = createContext<IntersectionObserver | null>(null);

export default GlobalIntersectionObserverContext;
