import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/orders');
  }, []); // Remove router from dependency array
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      Redirecting to Orders page...
    </div>
  );
}