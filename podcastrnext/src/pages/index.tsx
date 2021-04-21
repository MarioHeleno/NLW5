// SPA
// import { useEffect } from "react"
// useEffect(() => {
//   fetch('http://localhost:3333/episodes')
//   .then(response => response.json())
//   .then(data => console.log(data))
// }, [])

// SSG


export default function Home(props) {
  return (
    <>
      <h1>Index</h1>
      {/* <p>{JSON.stringify(props.episodes)}</p> */}
    </>
  )
}

// SSR
// export async function getServerSideProps() {
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}
