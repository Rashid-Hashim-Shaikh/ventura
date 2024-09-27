'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  const pathArray = pathname.split('/').filter((segment) => segment);

  // On home page do not display breadcrumb   
  if(!pathArray.length) return null

  return (
    <div aria-label="breadcrumb" className="container mx-auto text-sm text-gray-600">
      <ol className="inline-flex space-x-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {pathArray.map((segment, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');
          const isLast = index === pathArray.length - 1;

          return (
            <li key={href} className="flex items-center space-x-1">
              <span>{">"}</span>
              {isLast ? (
                <span className="text-gray-500 uppercase">{segment}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline uppercase">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
