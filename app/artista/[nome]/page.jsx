import { Suspense } from "react";

async function getArtist(nome) {
    const res = await fetch(`https://dummyjson.com/posts/${nome}`);
    return res.json();
  }
   
async function getArtistAlbums(nome) {
    const res = await fetch(`https://api.example.com/artist/${nome}/comments`);
    return res.json();
  }
 
  
export default async function Page({ params: { nome } }) {
    // Initiate both requests in parallel
    const artistData = getArtist(nome);
    const albumData = getArtistAlbums(nome);
   
    // Wait for the artist's promise to resolve first
    const artist = await artistData;
   
    return (
      <>
        <h1>{artist.name}</h1>
        {/* Send the artist information first,
        and wrap albums in a suspense boundary */}
        <Suspense fallback={<div>Loading...</div>}>
          <Albums promise={albumData} />
        </Suspense>
      </>
    );
  }
   
  // Albums Component
  async function Albums({ promise }) {
    // Wait for the albums promise to resolve
    const albums = await promise;
   
    return (
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.name}</li>
        ))}
      </ul>
    );
  }