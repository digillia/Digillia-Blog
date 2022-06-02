// import Alert from '../components/alert'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} />*/}
        <NavBar/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
