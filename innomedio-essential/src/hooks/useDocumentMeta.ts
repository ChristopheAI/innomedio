import { useEffect } from 'react';

export const useDocumentMeta = (title: string, description: string) => {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Handle meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Cleanup function to restore original title if needed
    return () => {
      // Optional: restore original title on cleanup
    };
  }, [title, description]);
};