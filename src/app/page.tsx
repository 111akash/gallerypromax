import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/334ad07e-e720-4ff2-a1d2-f7a2aa08b520-1xcy7.jpg",
  "https://utfs.io/f/5607d0e9-ec41-4555-8935-215943da1fbb-1xcy9.jpg",
  // "https://utfs.io/f/a23d0bfb-ae2f-4e95-a62f-289046f1713f-5hbna1.jpg",
  "https://utfs.io/f/846d430d-0ad5-422c-bca7-2bc3525278ba-1xcy8.jpg",
  "https://utfs.io/f/3e5586ea-223d-46e2-91a0-126c1828f073-1xcy6.jpg",
  // "https://utfs.io/f/9a5f4435-2664-4c6d-9ca1-737b194c3c35-1xcya.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
          ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
