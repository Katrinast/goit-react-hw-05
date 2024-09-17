import { ColorRing } from 'react-loader-spinner'


export default function Loader() {
  return (
    <ColorRing
     
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
         alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: 9999,
  }}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    )
}