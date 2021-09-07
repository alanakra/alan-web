
function Spotify(props) {
 const idPlaylist = props.idPlaylist;
 return (
  <>
   <iframe 
   src={`https://open.spotify.com/embed/playlist/${idPlaylist}`}
   width="80%" 
   height="80" 
   frameBorder="0" 
   allowtransparency="true" 
   allow="encrypted-media"></iframe>
  </>
 );
}

export default Spotify;