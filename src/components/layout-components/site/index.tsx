import Footer from './footer'
import Header from './header'

function SiteLayout({ children }: any) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}

export default SiteLayout