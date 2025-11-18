import Link from "next/link";


export default function Home() {
  return (<>
   <h1>Hello World!</h1>
   <Link href="/blog">Blog</Link>
   <br/>
   <Link href="/counter">Counter</Link>
   <br/>
    <Link href="/products">Products</Link>
    <br/>
    <Link href="/arcticles/breaking-news-123?lang=en">Read in English</Link>
    <br/>
    <Link href="/arcticles/breaking-news-123?lang=fr">Read in French</Link>

   </>
  );
}
