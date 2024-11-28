import Header from './header'

function SiteLayout({ children }: any) {
    return <>
        <Header />
        {children}
    </>
}

export default SiteLayout