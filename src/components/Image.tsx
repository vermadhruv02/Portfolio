import { useState } from 'react';

interface Post {
    image: string;
    title: string;
  }
  
  const Image = ({ post }: { post: Post }) => {
  const [isLoaded, setIsLoaded] = useState(false);

//   {console.log(post)}
  return (
    <div className="w-full rounded-t-xl overflow-hidden">
      <img
        src={post?.image}
        alt={post?.title}
        className={`aspect-video w-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '100%', height: 'auto' }}
        onLoad={() => setIsLoaded(true)}
        // You can also manually add a placeholder image to show before load
        // srcSet="path-to-your-blurred-image"
      />
      {!isLoaded && (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div> // Placeholder effect
      )}
    </div>
  );
};

export default Image;
